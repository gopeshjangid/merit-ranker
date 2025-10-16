'use client';

import { createEmptyPresentation } from '@/app/_actions/presentation/presentationActions';
import { CustomTabs } from '@/components/ui/custom-tabs';
import { usePresentationState } from '@/states/presentation-state';
import { LayoutGrid, Wand2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { CreatePresentation } from './CreatePresentation';
import { PresentationsListDialog } from './PresentationsListDialog';
import { RecentPresentations } from './RecentPresentations';

export function PresentationDashboard({
  sidebarSide,
}: {
  sidebarSide?: 'left' | 'right';
}) {
  const router = useRouter();
  const {
    presentationInput,
    setCurrentPresentation,
    setIsGeneratingOutline,
    language,
    theme,
    setShouldStartOutlineGeneration,
  } = usePresentationState();

  useEffect(() => {
    setCurrentPresentation('', '');
    // Make sure to reset any generation flags when landing on dashboard
    setIsGeneratingOutline(false);
    setShouldStartOutlineGeneration(false);
  }, []);

  const handleGenerate = async () => {
    if (!presentationInput.trim()) {
      toast.error('Please enter a topic for your presentation');
      return;
    }

    // Set UI loading state
    setIsGeneratingOutline(true);

    try {
      const result = await createEmptyPresentation(
        presentationInput.substring(0, 50) || 'Untitled Presentation',
        theme,
        language
      );

      if (result.success && result.presentation) {
        // Set the current presentation
        setCurrentPresentation(
          result.presentation.id,
          result.presentation.title
        );
        router.push(`/teacher/dashboard/live-class/presentation/generate/${result.presentation.id}`);
      } else {
        setIsGeneratingOutline(false);
        toast.error(result.message || 'Failed to create presentation');
      }
    } catch (error) {
      setIsGeneratingOutline(false);
      console.error('Error creating presentation:', error);
      toast.error('Failed to create presentation');
    }
  };

  const tabItems = [
    {
      value: 'my-slides',
      label: 'My Slides',
      icon: LayoutGrid,
      content: (
        <div className="space-y-6">
          <RecentPresentations />
        </div>
      ),
    },
    {
      value: 'create-slide',
      label: 'Create Slide',
      icon: Wand2,
      content: <CreatePresentation handleGenerate={handleGenerate} />,
    },
  ];

  return (
    <div className="relative h-full w-full">
      <PresentationsListDialog  />
      <div className="w-full py-6">
        <CustomTabs tabs={tabItems} defaultValue="my-slides" />
      </div>
    </div>
  );
}