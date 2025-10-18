"use client"

import { useEffect } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
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
  
  // Load existing document for editing
  useEffect(() => {
    if (actualMode === 'edit' && documentId) {
      loadExistingNote(documentId);
    }
  }, [documentId, actualMode]);

  // Load note content from S3 and set as editor value
  const loadExistingNote = async (noteId: string) => {
    try {
      const document = await loadNote(noteId);
      
      if (document?.s3Key) {
        // Download JSON content from S3
        const result = await downloadData({
          path: document.s3Key,
        });
        
        const content = await result.result;
        const editorValue = JSON.parse(content as string);
        
        // Set editor value - this needs to be handled in PlateEditor component
        // You'll need to pass this as a prop or use a separate hook
        console.log('Loaded content:', editorValue);
        toast.success('Note loaded for editing');
      }
    } catch (error) {
      console.error('Failed to load note:', error);
      toast.error('Failed to load note for editing');
    }
  };

  return (
    <PlateController>
      <section className="h-full">
        <div className="flex justify-between items-center p-4 border-b">
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
          {/* Save button component with mode detection */}
          <SaveNotes 
            mode={actualMode === 'edit' ? 'update' : 'create'} 
            documentId={documentId}
          />
        </div>
        
        <ResizablePanelGroup direction="horizontal" className="h-full rounded-md border">
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