'use client';

import { useEffect } from 'react';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import { PlateEditor } from '@/components/editor/plate-editor';
import { PlateController } from 'platejs/react';
import { TocSideBar } from '@/components/ui/toc-sidebar';
import { SaveNotes } from '@/features/notes/save-notes';
import { useNotesStore } from '@/states/notes-state';
import { downloadData } from 'aws-amplify/storage';
import { toast } from 'sonner';
import { normalizeNodeId } from 'platejs';
import { Skeleton } from '@/components/ui/skeleton';

interface CreateNotesProps {
  documentId?: string;
}

export default function CreateNotes({ documentId }: CreateNotesProps) {
  const { loadNote, currentDocument, setEditorValue, setIsLoading, isLoading } = useNotesStore();

  const actualMode = documentId ? 'edit' : 'create';

  useEffect(() => {
    if (actualMode === 'edit' && documentId) {
      loadExistingNote(documentId);
    }
  }, [documentId, actualMode]);

  const loadExistingNote = async (noteId: string) => {
    setEditorValue(normalizeNodeId(getDefaultEditorValue()));
    try {
      setIsLoading(true);
      const document = await loadNote(noteId);

      if (document?.s3Key) {
        const downloadResult = await downloadData({
          path: document.s3Key,
        }).result;

        const blob = downloadResult.body;
        const textContent = await blob.text();

        if (!textContent || textContent.trim() === '') {
          throw new Error('Empty content received from S3');
        }

        let editorValue;
        try {
          editorValue = JSON.parse(textContent);
        } catch (parseError) {
          console.error('JSON parse error:', parseError);
          console.error('Raw content received:', textContent);
          throw new Error('Failed to parse document content - invalid JSON format');
        }

        if (!Array.isArray(editorValue) || editorValue.length === 0) {
          console.warn('Invalid editor value structure, using default');
          editorValue = getDefaultEditorValue();
        }
        setEditorValue(normalizeNodeId(editorValue));
        toast.success('Note loaded for editing');
      } else {
        console.warn('Document found but no S3 key available');
        toast.warning('Note loaded but content may be missing');
      }
    } catch (error) {
      console.error('Failed to load note:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to load note for editing';
      toast.error(errorMessage);
      setEditorValue(normalizeNodeId(getDefaultEditorValue()));
    } finally {
      setIsLoading(false);
    }
  };

  const getDefaultEditorValue = () => [
    {
      id: '1',
      type: 'h1',
      children: [{ text: 'Untitled Document' }],
    },
    {
      id: '2',
      type: 'p',
      children: [{ text: 'Start writing your content here...' }],
    },
  ];

  return (
    <PlateController>
      <section className="h-full flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-card/50">
          <div>
            <h2 className="text-base font-medium text-foreground">
              {actualMode === 'edit' ? 'Edit Note' : 'Create New Note'}
            </h2>
            {actualMode === 'edit' && currentDocument && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {currentDocument.title || 'Untitled'}
              </p>
            )}
          </div>
          <SaveNotes
            mode={actualMode === 'edit' ? 'update' : 'create'}
            documentId={documentId}
          />
        </div>

        {/* Editor Area */}
        <div className="flex-1 min-h-0">
          <ResizablePanelGroup
            direction="horizontal"
            className="h-full"
          >
            <ResizablePanel defaultSize={18} minSize={12} maxSize={25} className="bg-muted/20">
              <TocSideBar />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={82} minSize={60}>
              {isLoading ? (
                <div className="p-6 space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-64 w-full" />
                </div>
              ) : (
                <PlateEditor />
              )}
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>
    </PlateController>
  );
}

