import type React from 'react';
import { Eye, FileText, ListChecks } from 'lucide-react';
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

const subjects = [
  'General Studies',
  'Mathematics',
  'Reasoning',
  'English',
  'Computer',
  'Current Affairs',
];

export function QuizForm() {
  const qSubject = useCreateMockStore((state) => state.qSubject);
  const qLevel = useCreateMockStore((state) => state.qLevel);
  const qPattern = useCreateMockStore((state) => state.qPattern);
  const qNotes = useCreateMockStore((state) => state.qNotes);
  const qTopics = useCreateMockStore((state) => state.qTopics);
  const setQSubject = useCreateMockStore((state) => state.setQSubject);
  const setQLevel = useCreateMockStore((state) => state.setQLevel);
  const setQPattern = useCreateMockStore((state) => state.setQPattern);
  const setQNotes = useCreateMockStore((state) => state.setQNotes);
  const setQTopics = useCreateMockStore((state) => state.setQTopics);
  const createQuiz = useCreateMockStore((state) => state.createQuiz);

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <ListChecks className="h-4 w-4 text-primary" />
          <CardTitle className="text-sm font-medium">Create Quiz</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <Label htmlFor="q-subject" className="text-xs">
              Subject
            </Label>
            <Select value={qSubject} onValueChange={setQSubject}>
              <SelectTrigger id="q-subject" className="mt-1">
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
            <Label htmlFor="q-level" className="text-xs">
              Level
            </Label>
            <Select
              value={qLevel}
              onValueChange={(v) => setQLevel(v as Difficulty)}
            >
              <SelectTrigger id="q-level" className="mt-1">
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
            <Label htmlFor="q-pattern" className="text-xs">
              Exam Pattern
            </Label>
            <Select value={qPattern} onValueChange={setQPattern}>
              <SelectTrigger id="q-pattern" className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MCQ">MCQ</SelectItem>
                <SelectItem value="MCQ + Reasoning">MCQ + Reasoning</SelectItem>
                <SelectItem value="Numerical + Reasoning">
                  Numerical + Reasoning
                </SelectItem>
                <SelectItem value="Mixed Pattern">Mixed Pattern</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-3">
            <Label htmlFor="q-notes" className="text-xs">
              Select Your Notes (optional)
            </Label>
            <Input
              id="q-notes"
              type="text"
              placeholder="Paste a drive link or a note title reference"
              value={qNotes}
              onChange={(e) => setQNotes(e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="md:col-span-3">
            <Label htmlFor="q-topics" className="text-xs">
              Topics / Focus
            </Label>
            <Input
              id="q-topics"
              placeholder="e.g., Algebra, Mensuration, History (comma separated)"
              value={qTopics}
              onChange={(e) => setQTopics(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 border-t pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => alert('Outline generated (UI-only).')}
            className="gap-2"
          >
            <Eye className="h-3.5 w-3.5" />
            Generate Outline
          </Button>
          <Button size="sm" onClick={createQuiz} className="gap-2">
            <FileText className="h-3.5 w-3.5" />
            Create Quiz
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
