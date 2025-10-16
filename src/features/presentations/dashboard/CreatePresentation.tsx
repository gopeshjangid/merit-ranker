'use client';

import { Button } from '@/components/ui/button';
import { usePresentationState } from '@/states/presentation-state';
import { Wand2 } from 'lucide-react';
import { PresentationControls } from './PresentationControls';
import { PresentationExamples } from './PresentationExamples';
import { PresentationHeader } from './PresentationHeader';
import { PresentationInput } from './PresentationInput';

interface CreatePresentationProps {
  handleGenerate: () => Promise<void>;
}

export function CreatePresentation({ handleGenerate }: CreatePresentationProps) {
  const { presentationInput, isGeneratingOutline } = usePresentationState();

  return (
    <div className="space-y-8">
      <PresentationHeader />
      <PresentationInput handleGenerate={handleGenerate} />
      <PresentationControls />
      <div className="flex items-center justify-end">
        <Button
          onClick={handleGenerate}
          disabled={!presentationInput.trim() || isGeneratingOutline}
          variant={isGeneratingOutline ? 'loading' : 'default'}
          className="gap-2"
        >
          <Wand2 className="h-4 w-4" />
          Generate Presentation
        </Button>
      </div>

      <PresentationExamples />
    </div>
  );
}