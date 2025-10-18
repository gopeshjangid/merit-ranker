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

interface CreateNotesProps {
  documentId?: string;
}

export default function CreateNotes({ documentId }: CreateNotesProps) {
  const { loadNote, currentDocument } = useNotesStore();

  const actualMode = documentId ? 'edit' : 'create';

  useEffect(() => {
    if (actualMode === 'edit' && documentId) {
      loadExistingNote(documentId);
    }
  }, [documentId, actualMode]);

  const loadExistingNote = async (noteId: string) => {
    try {
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
          throw new Error(
            'Failed to parse document content - invalid JSON format'
          );
        }

        if (!Array.isArray(editorValue) || editorValue.length === 0) {
          console.warn('Invalid editor value structure, using default');
          editorValue = getDefaultEditorValue();
        }

        toast.success('Note loaded for editing');
      } else {
        console.warn('Document found but no S3 key available');
        toast.warning('Note loaded but content may be missing');
      }
    } catch (error) {
      console.error('Failed to load note:', error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to load note for editing';
      toast.error(errorMessage);
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
      children: [{ text: 'Start writing your notes...' }],
    },
  ];

  return (
    <PlateController>
      <section className="h-full">
        <div className="flex items-center justify-between border-b p-4">
          <div>
            <h2 className="text-lg font-semibold">
              {actualMode === 'edit' ? 'Edit Note' : 'Create New Note'}
            </h2>
            {actualMode === 'edit' && currentDocument && (
              <p className="text-sm text-muted-foreground">
                Editing: {currentDocument.title || 'Untitled'}
              </p>
            )}
          </div>
          <SaveNotes
            mode={actualMode === 'edit' ? 'update' : 'create'}
            documentId={documentId}
          />
        </div>

        <ResizablePanelGroup
          direction="horizontal"
          className="h-full rounded-md border"
        >
          <ResizablePanel defaultSize={15} minSize={10} className="bg-muted/30">
            <TocSideBar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={85} minSize={85}>
            <PlateEditor />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </PlateController>
  );
}
