import type React from 'react';
import { Plus, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCreateMockStore, type Difficulty } from '@/states/mock-test-state';
import { QuestionEditor } from './question-editor';
import { exams } from './constants';

const subjects = [
  'General Studies',
  'Mathematics',
  'Reasoning',
  'English',
  'Computer',
  'Current Affairs',
];

export function LiveMockSettings() {
  const lmSubject = useCreateMockStore((state) => state.lmSubject);
  const lmDifficulty = useCreateMockStore((state) => state.lmDifficulty);
  const lmTimerMin = useCreateMockStore((state) => state.lmTimerMin);
  const lmCount = useCreateMockStore((state) => state.lmCount);
  const questions = useCreateMockStore((state) => state.questions);
  const includedIds = useCreateMockStore((state) => state.includedIds);
  const setLmSubject = useCreateMockStore((state) => state.setLmSubject);
  const setLmDifficulty = useCreateMockStore((state) => state.setLmDifficulty);
  const setLmTimerMin = useCreateMockStore((state) => state.setLmTimerMin);
  const setLmCount = useCreateMockStore((state) => state.setLmCount);
  const addEmptyQuestion = useCreateMockStore(
    (state) => state.addEmptyQuestion
  );
  const examType = useCreateMockStore((state) => state.examType);
  const setExamType = useCreateMockStore((state) => state.setExamType);

  const selectedCount =
    includedIds.length > 0 ? includedIds.length : questions.length;

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          <CardTitle className="text-sm font-medium">
            Live Mock Settings
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <Label htmlFor="lm-subject" className="text-xs">
              Subject
            </Label>
            <Select value={lmSubject} onValueChange={setLmSubject}>
              <SelectTrigger id="lm-subject" className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
      <Label htmlFor="lm-exam-type" className="text-xs">
        Exam Type
      </Label>
      <Select value={examType} onValueChange={setExamType}>
        <SelectTrigger id="lm-exam-type" className="mt-1">
          <SelectValue placeholder="Select exam" />
        </SelectTrigger>
        <SelectContent>
          {exams.map((exam) => (
            <SelectItem key={exam.value} value={exam.value}>
              {exam.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
          <div>
            <Label htmlFor="lm-difficulty" className="text-xs">
              Difficulty
            </Label>
            <Select
              value={lmDifficulty}
              onValueChange={(v) => setLmDifficulty(v as Difficulty)}
            >
              <SelectTrigger id="lm-difficulty" className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="lm-timer" className="text-xs">
              Timer (minutes)
            </Label>
            <Input
              id="lm-timer"
              type="number"
              min={1}
              value={lmTimerMin}
              onChange={(e) => setLmTimerMin(Number(e.target.value))}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lm-count" className="text-xs">
              Total Questions
            </Label>
            <Input
              id="lm-count"
              type="number"
              min={1}
              value={lmCount}
              onChange={(e) => setLmCount(Number(e.target.value))}
              className="mt-1"
            />
          </div>
        </div>

        {/* Questions Builder */}
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <QuestionEditor key={q.id} question={q} index={idx} />
          ))}
          {questions.length === 0 && (
            <p className="text-xs text-muted-foreground">
              No questions yet. Use AI Suggest or Add Question.
            </p>
          )}
        </div>
         <div className="flex items-end gap-2 md:col-span-2">
            <Button
              variant="outline"
              size="sm"
              onClick={addEmptyQuestion}
              className="gap-2"
            >
              <Plus className="h-3.5 w-3.5" />
              Add Question
            </Button>
            <span className="text-xs text-muted-foreground">
              {selectedCount} added
            </span>
          </div>
      </CardContent>
    </Card>
  );
}
