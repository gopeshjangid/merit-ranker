'use client';

import { usePresentationState } from '@/states/presentation-state';
import { WebSearchToggle } from './WebSearchToggle';

export function PresentationInput({
  handleGenerate,
}: {
  handleGenerate: () => void;
}) {
  const { presentationInput, setPresentationInput, setShowTemplates } =
    usePresentationState();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold text-foreground">
          What would you like to present about?
        </h2>
      </div>

      <div className="group relative">
        <textarea
          value={presentationInput}
          onChange={(e) => setPresentationInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
              e.preventDefault();
              handleGenerate();
            }
          }}
          placeholder="Describe your topic or paste your content here. Our AI will structure it into a compelling presentation."
          className="h-40 w-full resize-none rounded-lg border border-border bg-card px-4 py-3.5 pb-14 text-base text-foreground transition-colors placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring focus:outline-none"
        />

        <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Press{' '}
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              Ctrl
            </kbd>{' '}
            +{' '}
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              Enter
            </kbd>{' '}
            to generate
          </p>
          <WebSearchToggle />
        </div>
      </div>
    </div>
  );
}
