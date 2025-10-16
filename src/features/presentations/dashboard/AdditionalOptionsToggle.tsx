'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { usePresentationState } from '@/states/presentation-state';

// Component for additional content options with toggle switches
export function AdditionalOptionsToggle() {
  const {
    addQuiz,
    setAddQuiz,
    includeFromNotes,
    setIncludeFromNotes,
    addDiagrams,
    setAddDiagrams,
    addSummarySlide,
    setAddSummarySlide,
  } = usePresentationState();

  const options = [
    {
      id: 'add-quiz',
      label: 'Add Quiz at the end',
      description: 'MCQ practice questions',
      checked: addQuiz,
      onChange: setAddQuiz,
    },
    {
      id: 'include-notes',
      label: 'Include from my notes',
      description: 'Use your uploaded notes',
      checked: includeFromNotes,
      onChange: setIncludeFromNotes,
    },
    {
      id: 'add-diagrams',
      label: 'Add diagrams & charts',
      description: 'Visual explanations',
      checked: addDiagrams,
      onChange: setAddDiagrams,
    },
    {
      id: 'add-summary',
      label: 'Add summary slide',
      description: 'Key points at the end',
      checked: addSummarySlide,
      onChange: setAddSummarySlide,
    },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-foreground">
        What else to include?
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {options.map((option) => (
          <div
            key={option.id}
            className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent/50"
          >
            <div className="flex-1">
              <Label
                htmlFor={option.id}
                className="cursor-pointer font-medium text-foreground"
              >
                {option.label}
              </Label>
              <p className="text-xs text-muted-foreground">
                {option.description}
              </p>
            </div>
            <Switch
              id={option.id}
              checked={option.checked}
              onCheckedChange={option.onChange}
              className="ml-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}