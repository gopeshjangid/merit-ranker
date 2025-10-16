import type React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCreateMockStore, type Question } from '@/states/mock-test-state';

interface QuestionEditorProps {
  question: Question;
  index: number;
}

export function QuestionEditor({ question, index }: QuestionEditorProps) {
  const updateQuestion = useCreateMockStore((state) => state.updateQuestion);
  const updateOption = useCreateMockStore((state) => state.updateOption);
  const removeQuestion = useCreateMockStore((state) => state.removeQuestion);
  const improveQuestion = useCreateMockStore((state) => state.improveQuestion);
  const generateDifferentQuestion = useCreateMockStore(
    (state) => state.generateDifferentQuestion
  );
  const increaseDifficultyQuestion = useCreateMockStore(
    (state) => state.increaseDifficultyQuestion
  );

  return (
    <Card>
      <CardContent className="space-y-3 pt-6">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            Q{index + 1}
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-0 text-xs text-muted-foreground hover:bg-transparent hover:text-foreground"
            onClick={() => removeQuestion(question.id)}
          >
            Remove
          </Button>
        </div>
        <div>
          <Label htmlFor={`q-prompt-${question.id}`} className="text-xs">
            Question
          </Label>
          <Textarea
            id={`q-prompt-${question.id}`}
            rows={2}
            placeholder="Enter question prompt"
            value={question.prompt}
            onChange={(e) =>
              updateQuestion(question.id, { prompt: e.target.value })
            }
            className="mt-1"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {question.options.map((o, oi) => (
            <div key={o.id}>
              <Label htmlFor={`q-option-${o.id}`} className="text-xs">
                Option {oi + 1}
              </Label>
              <Input
                id={`q-option-${o.id}`}
                placeholder={`Option ${oi + 1}`}
                value={o.text}
                onChange={(e) =>
                  updateOption(question.id, o.id, e.target.value)
                }
                className="mt-1"
              />
            </div>
          ))}
        </div>
        <div>
          <Label htmlFor={`q-correct-${question.id}`} className="text-xs">
            Correct Answer
          </Label>
          <Select
            value={question.correctId || ''}
            onValueChange={(v) => updateQuestion(question.id, { correctId: v })}
          >
            <SelectTrigger id={`q-correct-${question.id}`} className="mt-1">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              {question.options.map((o, oi) => (
                <SelectItem key={o.id} value={o.id}>
                  Option {oi + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            className="px-2 py-4 text-sm"
            onClick={() => improveQuestion(question.id)}
          >
            Improve
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="px-2 py-4 text-sm"
            onClick={() => generateDifferentQuestion(question.id)}
          >
            Generate Diff
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="px-2 py-4 text-sm"
            onClick={() => increaseDifficultyQuestion(question.id)}
          >
            Increase Difficulty
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
