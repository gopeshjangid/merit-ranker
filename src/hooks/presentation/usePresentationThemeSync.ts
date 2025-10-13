import { useEffect, useRef } from 'react';
import { usePresentationState } from '@/states/presentation-state';
import { getCustomThemeById } from '@/app/_actions/presentation/theme-actions';
import { type Themes, themes, type ThemeProperties } from '@/lib/presentation/themes';

export function usePresentationThemeSync(
  presentationData: any,
  isGeneratingPresentation: boolean,
  shouldFetchData: boolean
) {
  const setTheme = usePresentationState((s) => s.setTheme);
  const setImageSource = usePresentationState((s) => s.setImageSource);
  const setPresentationStyle = usePresentationState((s) => s.setPresentationStyle);
  const setLanguage = usePresentationState((s) => s.setLanguage);
  const dbThemeRef = useRef<string | null>(null);

  // Sync theme
  useEffect(() => {
    if (isGeneratingPresentation || !shouldFetchData || !presentationData) {
      return;
    }

    // Track DB theme for comparison
    dbThemeRef.current = presentationData.presentation?.theme ?? null;

    if (presentationData?.presentation?.theme) {
      const themeId = presentationData.presentation.theme;

      if (themeId in themes) {
        setTheme(themeId as Themes);
      } else {
        void getCustomThemeById(themeId)
          .then((result) => {
            if (result.success && result.theme) {
              const themeData = result.theme.themeData;
              setTheme(themeId, themeData as unknown as ThemeProperties);
            } else {
              setTheme('mystique');
            }
          })
          .catch(() => {
            setTheme('mystique');
          });
      }
    }

    if (presentationData?.presentation?.imageSource) {
      setImageSource(
        presentationData.presentation.imageSource as 'ai' | 'stock'
      );
    }

    if (presentationData?.presentation?.presentationStyle) {
      setPresentationStyle(presentationData.presentation.presentationStyle);
    }

    if (presentationData.presentation?.language) {
      setLanguage(presentationData.presentation.language);
    }
  }, [
    presentationData,
    isGeneratingPresentation,
    shouldFetchData,
    setTheme,
    setImageSource,
    setPresentationStyle,
    setLanguage,
  ]);

  return dbThemeRef;
}
