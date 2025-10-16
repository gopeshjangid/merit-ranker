import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePresentationState } from '@/states/presentation-state';
import { Layout } from 'lucide-react';

export function PresentationControls({
  shouldShowLabel = true,
}: {
  shouldShowLabel?: boolean;
}) {
  const {
    numSlides,
    setNumSlides,
    language,
    setLanguage,
    pageStyle,
    setPageStyle,
    subject,
    setSubject,
    examType,
    setExamType,
    difficultyLevel,
    setDifficultyLevel,
    designStyle,
    setDesignStyle,
  } = usePresentationState();

   const subjects = [
    { value: 'general-studies', label: 'General Studies' },
    { value: 'history', label: 'History' },
    { value: 'geography', label: 'Geography' },
    { value: 'science', label: 'Science' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'economics', label: 'Economics' },
    { value: 'polity', label: 'Polity & Governance' },
    { value: 'environment', label: 'Environment & Ecology' },
    { value: 'current-affairs', label: 'Current Affairs' },
    { value: 'ethics', label: 'Ethics & Integrity' },
  ];

  const exams = [
    { value: 'upsc-civil-services', label: 'UPSC Civil Services' },
    { value: 'upsc-prelims', label: 'UPSC Prelims' },
    { value: 'upsc-mains', label: 'UPSC Mains' },
    { value: 'state-pcs', label: 'State PCS' },
    { value: 'ssc-cgl', label: 'SSC CGL' },
    { value: 'ssc-chsl', label: 'SSC CHSL' },
    { value: 'banking-po', label: 'Banking PO' },
    { value: 'banking-clerk', label: 'Banking Clerk' },
    { value: 'railway-ntpc', label: 'Railway NTPC' },
    { value: 'nda', label: 'NDA' },
    { value: 'capf', label: 'CAPF' },
    { value: 'other', label: 'Other' },
  ];

  const designStyles = [
    { value: 'educational', label: 'Educational' },
    { value: 'professional', label: 'Professional' },
    { value: 'minimal', label: 'Minimal' },
    { value: 'creative', label: 'Creative' },
    { value: 'modern', label: 'Modern' },
    { value: 'classic', label: 'Classic' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Subject Selection */}
        <div>
          {shouldShowLabel && (
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Subject
            </label>
          )}
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger>
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((sub) => (
                <SelectItem key={sub.value} value={sub.value}>
                  {sub.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Exam Type Selection */}
        <div>
          {shouldShowLabel && (
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Which Exam
            </label>
          )}
          <Select value={examType} onValueChange={setExamType}>
            <SelectTrigger>
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

        {/* Number of Slides */}
        <div>
          {shouldShowLabel && (
            <label className="mb-2 block text-sm font-semibold text-foreground">
              How Many Slides
            </label>
          )}
          <Select
            value={String(numSlides)}
            onValueChange={(v) => setNumSlides(Number(v))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select slides" />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 15, 20, 25, 30].map((num) => (
                <SelectItem key={num} value={String(num)}>
                  {num} slides
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Difficulty Level Selection */}
        <div>
          {shouldShowLabel && (
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Difficulty Level
            </label>
          )}
          <Select value={difficultyLevel} onValueChange={setDifficultyLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Language Selection */}
        <div>
          {shouldShowLabel && (
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Language
            </label>
          )}
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {/* NEWP: Restricted to Indian education languages only */}
              <SelectItem value="en-US">English</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
              <SelectItem value="en-hi">English + Hindi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Design Style Selection */}
        <div>
          {shouldShowLabel && (
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Design Style
            </label>
          )}
          <Select value={designStyle} onValueChange={setDesignStyle}>
            <SelectTrigger>
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent>
              {designStyles.map((style) => (
                <SelectItem key={style.value} value={style.value}>
                  {style.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Page Style */}
        <div>
          {shouldShowLabel && (
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Page Style
            </label>
          )}
          <Select value={pageStyle} onValueChange={setPageStyle}>
            <SelectTrigger>
              <div className="flex items-center gap-2">
                <Layout className="h-4 w-4" />
                <SelectValue placeholder="Select page style" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">
                <div className="flex items-center gap-3">
                  <span>Default</span>
                </div>
              </SelectItem>
              <SelectItem value="traditional">
                <div className="flex items-center gap-3">
                  <span>Traditional</span>
                </div>
              </SelectItem>
              <SelectItem value="tall">
                <div className="flex items-center gap-3">
                  <span>Tall</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
