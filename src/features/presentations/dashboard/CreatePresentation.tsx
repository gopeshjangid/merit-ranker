'use client';

import { Button } from '@/components/ui/button';
import { usePresentationState } from '@/states/presentation-state';
import { Wand2 } from 'lucide-react';
import { PresentationControls } from './PresentationControls';
import { PresentationExamples } from './PresentationExamples';
import { PresentationHeader } from './PresentationHeader';
import { PresentationInput } from './PresentationInput';
import { PresentationTypeSelector } from './PresentationTypeSelector';
import { NotesUploadSection } from './NotesUploadSection';
import { AdditionalOptionsToggle } from './AdditionalOptionsToggle';

interface CreatePresentationProps {
  handleGenerate: () => Promise<void>;
}

export function CreatePresentation({ handleGenerate }: CreatePresentationProps) {
  const { presentationInput, isGeneratingOutline } = usePresentationState();

   const handleSaveDraft = () => {
    console.log('Draft button pressed');
  };

  return (
    <div className="space-y-8">
      <PresentationHeader />
      <PresentationTypeSelector />
      <NotesUploadSection />
      <PresentationInput handleGenerate={handleGenerate} />
      <PresentationControls />
      <AdditionalOptionsToggle />
      <div className="flex items-center justify-end gap-3">
        <Button
          variant="outline"
          onClick={handleSaveDraft}
          disabled={isGeneratingOutline}
        >
          Save as Draft
        </Button>

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