'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePresentationState } from '@/states/presentation-state';
import { Upload, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

export function NotesUploadSection() {
  const { uploadedNotes, setUploadedNotes } = usePresentationState();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload PDF, DOCX, or TXT files only');
      return;
    }

    if (file.size > maxSize) {
      toast.error('File size must be less than 10MB');
      return;
    }

    setIsUploading(true);

    try {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedNotes({
          name: file.name,
          size: file.size,
          type: file.type,
          content: reader.result as string,
        });
        toast.success('Notes uploaded successfully');
        setIsUploading(false);
      };
      reader.readAsText(file);
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Failed to upload notes');
      setIsUploading(false);
    }
  };

  const handleRemoveNotes = () => {
    setUploadedNotes(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.success('Notes removed');
  };

  return (
    <div className={cn("space-y-3 p-4 border rounded-lg bg-muted/10", !uploadedNotes && "flex justify-between")}>
      <div>
      <h2 className="text-sm font-semibold text-foreground">
        Do you want to add content from your notes?
      </h2>
      <p className="text-sm text-muted-foreground">
        Upload your own notes or study material - AI will understand it and create slides from it
      </p>
    </div>  
      {!uploadedNotes ? (
        <div className="flex items-center gap-3">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx,.txt"
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
            PDF, DOCX, or TXT (Max 10MB)
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-between rounded-lg border border-border bg-accent/50 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
              <Upload className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {uploadedNotes.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {(uploadedNotes.size / 1024).toFixed(2)} KB
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