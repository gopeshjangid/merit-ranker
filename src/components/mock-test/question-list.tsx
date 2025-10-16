import type React from 'react';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useCreateMockStore } from '@/states/mock-test-state';

interface QuestionListProps {
  idPrefix?: string;
}

export function QuestionList({ idPrefix = '' }: QuestionListProps) {
  const questions = useCreateMockStore((state) => state.questions);
  const includedIds = useCreateMockStore((state) => state.includedIds);
  const selectedQuestionId = useCreateMockStore(
    (state) => state.selectedQuestionId
  );
  const setSelectedQuestionId = useCreateMockStore(
    (state) => state.setSelectedQuestionId
  );
  const toggleIncluded = useCreateMockStore((state) => state.toggleIncluded);
  const improveQuestion = useCreateMockStore((state) => state.improveQuestion);
  const generateDifferentQuestion = useCreateMockStore(
    (state) => state.generateDifferentQuestion
  );
  const increaseDifficultyQuestion = useCreateMockStore(
    (state) => state.increaseDifficultyQuestion
  );

  const includedIdsSet = useMemo(() => new Set(includedIds), [includedIds]);
  const selectedCount = useMemo(
    () => (includedIdsSet.size > 0 ? includedIdsSet.size : questions.length),
    [includedIdsSet, questions]
  );

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Questions</CardTitle>
          <Badge variant="outline" className="text-xs">
            {selectedCount} selected
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="max-h-[50vh] overflow-auto">
        {questions.length === 0 ? (
          <p className="text-xs text-muted-foreground">No questions yet.</p>
        ) : (
          <ul className="space-y-2">
            {questions.map((q, idx) => (
              <li
                key={q.id}
                className={cn(
                  'space-y-2 rounded-md border p-2',
                  selectedQuestionId === q.id && 'ring-1 ring-primary/50'
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto justify-start p-0 text-left text-xs text-foreground/90 hover:bg-transparent hover:underline"
                    onClick={() => setSelectedQuestionId(q.id)}
                  >
                    Q{idx + 1}: {q.prompt ? q.prompt.slice(0, 56) : '(empty)'}
                  </Button>
                  <div className="flex items-center gap-1.5">
                    <Label
                      htmlFor={`${idPrefix}use-${q.id}`}
                      className="cursor-pointer text-xs text-muted-foreground"
                    >
                      Use
                    </Label>
                    <Checkbox
                      id={`${idPrefix}use-${q.id}`}
                      checked={
                        includedIdsSet.size > 0
                          ? includedIdsSet.has(q.id)
                          : true
                      }
                      onCheckedChange={() => toggleIncluded(q.id)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 px-2 text-[11px]"
                    onClick={() => improveQuestion(q.id)}
                  >
                    Improve
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 px-2 text-[11px]"
                    onClick={() => generateDifferentQuestion(q.id)}
                  >
                    Generate Diff
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 px-2 text-[11px]"
                    onClick={() => increaseDifficultyQuestion(q.id)}
                  >
                    Increase Difficulty
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
