import type React from 'react';
import { useMemo } from 'react';
import { Eye, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCreateMockStore } from '@/states/mock-test-state';

export function PreviewPanel() {
  const lmSubject = useCreateMockStore((state) => state.lmSubject);
  const lmDifficulty = useCreateMockStore((state) => state.lmDifficulty);
  const lmTimerMin = useCreateMockStore((state) => state.lmTimerMin);
  const lmCount = useCreateMockStore((state) => state.lmCount);
  const questions = useCreateMockStore((state) => state.questions);
  const includedIds = useCreateMockStore((state) => state.includedIds);
  const startLiveMock = useCreateMockStore((state) => state.startLiveMock);

  const selectedCount = useMemo(
    () => (includedIds.length > 0 ? includedIds.length : questions.length),
    [includedIds, questions]
  );

  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-primary" />
            <CardTitle className="text-sm font-medium">Preview</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-sm">
            <span className="text-muted-foreground">Subject:</span> {lmSubject}
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Difficulty:</span>{' '}
            {lmDifficulty}
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Timer:</span> {lmTimerMin}{' '}
            min
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Questions:</span>{' '}
            {selectedCount} / {lmCount} planned
          </div>
          <div className="pt-2">
            <div className="mb-1 text-xs text-muted-foreground">Sample:</div>
            <ul className="space-y-1">
              {questions.slice(0, 3).map((q) => (
                <li
                  key={q.id}
                  className="line-clamp-2 text-xs text-foreground/80"
                >
                  {q.prompt || '(empty question)'}
                </li>
              ))}
              {questions.length === 0 && (
                <li className="text-xs text-muted-foreground">
                  No preview available
                </li>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-2 border-t pt-2">
          <Button
            onClick={startLiveMock}
            disabled={questions.length === 0}
            size="sm"
            className="gap-2"
          >
            <Play className="h-3.5 w-3.5" />
            Start Live Mock
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => alert('Draft saved (UI-only)')}
          >
            Save Draft
          </Button>
        </div>
        </CardContent>        
      </Card>
    </>
  );
}
