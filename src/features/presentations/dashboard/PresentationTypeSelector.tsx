'use client';

import { cn } from '@/lib/utils';
import { usePresentationState } from '@/states/presentation-state';

export function PresentationTypeSelector() {
  const { presentationType, setPresentationType } = usePresentationState();

  const types = [
    {
      id: 'live-online',
      label: 'Live Online Classes',
      description: 'Interactive teaching sessions',
    },
    {
      id: 'offline',
      label: 'Offline Classroom',
      description: 'Traditional classroom teaching',
    },
    {
      id: 'self-study',
      label: 'Self Study Material',
      description: 'For students to learn on their own',
    },
  ] as const;

  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-foreground">
        Create slides for
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => setPresentationType(type.id)}
            type="button"
            className={cn(
              'group relative flex flex-col items-start gap-2 rounded-lg border-2 p-4 text-left transition-all',
              'hover:border-primary/50 hover:bg-accent/50',
              presentationType === type.id
                ? 'border-primary bg-accent'
                : 'border-border bg-card'
            )}
          >
            <div className="flex w-full items-start justify-between">
              <h3 className="font-semibold text-foreground">{type.label}</h3>
              <div
                className={cn(
                  'h-5 w-5 rounded-full border-2 transition-all',
                  presentationType === type.id
                    ? 'border-primary bg-primary'
                    : 'border-muted-foreground/30'
                )}
              >
                {presentationType === type.id && (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{type.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}