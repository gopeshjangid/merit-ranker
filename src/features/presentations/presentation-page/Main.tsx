'use client';

import { updatePresentationTheme } from '@/app/_actions/presentation/presentationActions';
import { setThemeVariables, themes } from '@/lib/presentation/themes';
import { usePresentationState } from '@/states/presentation-state';
import { useQuery } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import { useTheme } from 'next-themes';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { LoadingState } from './Loading';
import { PresentationLayout } from './PresentationLayout';
import { PresentationSlidesView } from './PresentationSlidesView';
import { getPresentation } from '@/app/_actions/presentation/presentationActions';
import { usePresentationDataSync } from '@/hooks/presentation/usePresentationDataSync';
import { usePresentationThemeSync } from '@/hooks/presentation/usePresentationThemeSync';

export default function PresentationPage() {
  const params = useParams();
  const id = params.id as string;
  const { resolvedTheme } = useTheme();
  const [shouldFetchData, setSetShouldFetchData] = useState(true);

  const isGeneratingPresentation = usePresentationState(
    (s) => s.isGeneratingPresentation
  );
  const theme = usePresentationState((s) => s.theme);

  useEffect(() => {
    if (isGeneratingPresentation) {
      setSetShouldFetchData(false);
    }
  }, [isGeneratingPresentation]);

  const {
    data: presentationData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['presentation', id],
    queryFn: async () => {
      const result = await getPresentation(id);
      if (!result.success) {
        throw new Error(result.message ?? 'Failed to load presentation');
      }
      return result.presentation;
    },
    enabled: !!id && !isGeneratingPresentation && shouldFetchData,
    staleTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnMount: false,
  });

  const debouncedThemeUpdate = useMemo(
    () =>
      debounce((presentationId: string, newTheme: string) => {
        updatePresentationTheme(presentationId, newTheme).catch(() => {
          // Silent fail - theme update is not critical
        });
      }, 600),
    []
  );

  useEffect(() => {
    return () => {
      debouncedThemeUpdate.cancel();
    };
  }, [debouncedThemeUpdate]);

  // Use custom hooks to sync data (must be called before any conditional returns)
  usePresentationDataSync(
    presentationData,
    isGeneratingPresentation,
    shouldFetchData
  );
  const dbThemeRef = usePresentationThemeSync(
    presentationData,
    isGeneratingPresentation,
    shouldFetchData
  );

  useEffect(() => {
    if (!id || isLoading || !theme) return;
    if (dbThemeRef.current === null) return;
    if (theme === dbThemeRef.current) return;

    dbThemeRef.current = theme as string;
    debouncedThemeUpdate(id, theme as string);
  }, [theme, id, debouncedThemeUpdate, isLoading, dbThemeRef]);

  useEffect(() => {
    if (theme && resolvedTheme) {
      const state = usePresentationState.getState();
      if (state.customThemeData) {
        setThemeVariables(state.customThemeData, resolvedTheme === 'dark');
      } else if (typeof theme === 'string' && theme in themes) {
        const currentTheme = themes[theme as keyof typeof themes];
        if (currentTheme) {
          setThemeVariables(currentTheme, resolvedTheme === 'dark');
        }
      }
    }
  }, [theme, resolvedTheme]);

  const currentThemeData = useMemo(() => {
    const state = usePresentationState.getState();
    if (state.customThemeData) {
      return state.customThemeData;
    }
    if (typeof theme === 'string' && theme in themes) {
      return themes[theme as keyof typeof themes];
    }
    return null;
  }, [theme]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error && !isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold text-red-600">
            Failed to load presentation
          </p>
          <p className="text-sm text-muted-foreground">
            Please try refreshing the page
          </p>
        </div>
      </div>
    );
  }

  return (
    <PresentationLayout
      isLoading={isLoading}
      themeData={currentThemeData ?? undefined}
    >
      <div className="mx-auto max-w-[90%] space-y-8 pt-16">
        <div className="space-y-8">
          <PresentationSlidesView
            isGeneratingPresentation={isGeneratingPresentation}
          />
        </div>
      </div>
    </PresentationLayout>
  );
}
