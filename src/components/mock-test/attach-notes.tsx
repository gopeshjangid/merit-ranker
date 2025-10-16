import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCreateMockStore } from '@/states/mock-test-state';
import { Upload, X, FileText } from 'lucide-react';
import { useRef, useState } from 'react';

export function AttachNotes() {
  const aiNotesPdf = useCreateMockStore((state) => state.aiNotesPdf);
  const setAiNotesPdf = useCreateMockStore((state) => state.setAiNotesPdf);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== 'application/pdf') {
      alert('Please upload PDF files only');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }
    setIsUploading(true);
    setAiNotesPdf(file);
    setIsUploading(false);
    // You can add a toast here if you use a toast library
  };

  const handleRemoveNotes = () => {
    setAiNotesPdf(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    // You can add a toast here if you use a toast library
  };

  return (
    <div className={cn("space-y-3 p-4 border rounded-lg bg-muted/10", !aiNotesPdf && "flex justify-between")}>
      <div>
        <h2 className="text-sm font-semibold text-foreground">
          Do you want to add content from your notes?
        </h2>
        <p className="text-sm text-muted-foreground">
          Upload your own notes or study material - AI will understand it and create questions from it
        </p>
      </div>
      {!aiNotesPdf ? (
        <div className="flex items-center gap-3">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="gap-2"
          >
            <Upload className="h-4 w-4" />
            {isUploading ? 'Uploading...' : 'Upload Notes'}
          </Button>
          <span className="text-xs text-muted-foreground">
            PDF only (Max 10MB)
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-between rounded-lg border border-border bg-accent/50 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {aiNotesPdf.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {(aiNotesPdf.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleRemoveNotes}
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}