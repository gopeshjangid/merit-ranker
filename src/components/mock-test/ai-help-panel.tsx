import type React from 'react';
import { Sparkles } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCreateMockStore, type Difficulty } from '@/states/mock-test-state';
import { AttachNotes } from './attach-notes';
import { exams } from './constants';

const subjects = [
  'General Studies',
  'Mathematics',
  'Reasoning',
  'English',
  'Computer',
  'Current Affairs',
];

export function AIHelpPanel() {
  const aiContext = useCreateMockStore((state) => state.aiContext);
  const aiSubject = useCreateMockStore((state) => state.aiSubject);
  const aiLevel = useCreateMockStore((state) => state.aiLevel);
  const lmGenerateBatch = useCreateMockStore((state) => state.lmGenerateBatch);
  const setAiContext = useCreateMockStore((state) => state.setAiContext);
  const setAiSubject = useCreateMockStore((state) => state.setAiSubject);
  const setAiLevel = useCreateMockStore((state) => state.setAiLevel);
  const setLmGenerateBatch = useCreateMockStore(
    (state) => state.setLmGenerateBatch
  );
  const examType = useCreateMockStore((state) => state.examType);
  const setExamType = useCreateMockStore((state) => state.setExamType);

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <CardTitle className="text-sm font-medium">
            AI Help (context for suggestions)
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-3">
            <Label htmlFor="ai-context" className="text-xs">
              Context / Notes / Question Pattern Example
            </Label>
            <Textarea
              id="ai-context"
              rows={3}
              placeholder="Describe subject, chapter, topic focus, competencies..."
              value={aiContext}
              onChange={(e) => setAiContext(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="ai-subject" className="text-xs">
              Subject
            </Label>
            <Select value={aiSubject} onValueChange={setAiSubject}>
              <SelectTrigger id="ai-subject" className="mt-1">
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
            <Label htmlFor="ai-level" className="text-xs">
              Level
            </Label>
            <Select
              value={aiLevel}
              onValueChange={(v) => setAiLevel(v as Difficulty)}
            >
              <SelectTrigger id="ai-level" className="mt-1">
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
            <Label htmlFor="ai-batch" className="text-xs">
              Generate (batch size)
            </Label>
            <Select
              value={String(lmGenerateBatch)}
              onValueChange={(v) => setLmGenerateBatch(Number(v))}
            >
              <SelectTrigger id="ai-batch" className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((n) => (
                  <SelectItem key={n} value={String(n)}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
      <Label htmlFor="ai-exam-type" className="text-xs">
        Exam Type
      </Label>
      <Select value={examType} onValueChange={setExamType}>
        <SelectTrigger id="ai-exam-type" className="mt-1">
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
        </div>        
          <AttachNotes />
      </CardContent>
    </Card>
  );
}
