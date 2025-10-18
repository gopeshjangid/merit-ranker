'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Save, Loader2, Plus, X } from 'lucide-react';
import { useEditorMounted } from 'platejs/react';
import { useJsonUpload } from '@/hooks/use-upload';
import { useNotesStore } from '@/states/notes-state';
import { useTocSideBarState } from '@platejs/toc/react';
import { toast } from 'sonner';
import { nanoid } from 'nanoid';
import { useUserStore } from '@/states/user-state';

interface SaveNotesProps {
  mode?: 'create' | 'update';
  documentId?: string;
}

export function SaveNotes({ mode = 'create', documentId }: SaveNotesProps) {
  const isEditorMounted = useEditorMounted();

  if (!isEditorMounted) {
    return (
      <Button disabled>
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        Initializing...
      </Button>
    );
  }

  return (
    <SaveNotesContent
      mode={mode}
      documentId={documentId}
    />
  );
}

function SaveNotesContent({ mode = 'create', documentId }: SaveNotesProps) {
  const { uploadJsons } = useJsonUpload();
  const { createNote, updateNote, currentDocument, isLoading } = useNotesStore();
  const { getUserId } = useUserStore();
  
  const tocState = useTocSideBarState({ open: true });
  
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    tags: [] as string[],
    excerpt: '',
  });
  const [newTag, setNewTag] = useState('');
  
  const getAutoTitle = () => {
    const headings = tocState.headingList || [];
    return headings.length > 0 ? headings[0].title : '';
  };

  const handleSave = async () => {
    if (!tocState.editor) {
      toast.error('Editor not available');
      return;
    }

    const userId = getUserId();
    if (!userId) {
      toast.error('User ID not available');
      return;
    }

    try {
      const editorValue = tocState.editor.children;
      const autoTitle = getAutoTitle();
      const finalTitle = formData.title || autoTitle || 'Untitled Note';
      
      const contentString = JSON.stringify(editorValue);
      const contentSize = new Blob([contentString]).size;

      if (mode === 'create') {
        // Upload editor content to S3 first
        const uploadResult = await uploadJsons({
          location: 'document',
          data: editorValue,
          fileName: `${finalTitle.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.json`,
        });

        if (uploadResult[0]?.s3key) {
          await createNote({
            documentId: nanoid(), 
            title: finalTitle,
            s3Key: uploadResult[0].s3key,
            userId: userId,
            subject: formData.subject,
            tags: formData.tags,
            excerpt: formData.excerpt,
            contentSize,
          });
          
          toast.success('Note saved successfully!');
          setIsOpen(false);
        }
      } else if (mode === 'update' && documentId && currentDocument) {
        // Upload updated content and update document
        const uploadResult = await uploadJsons({
          location: 'notes',
          data: editorValue,
          fileName: `${finalTitle.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.json`,
        });

        if (uploadResult[0]?.s3key) {
          await updateNote(documentId, {
            title: finalTitle,
            s3Key: uploadResult[0].s3key,
            subject: formData.subject,
            tags: formData.tags,
            excerpt: formData.excerpt,
            contentSize,
          });
          
          toast.success('Note updated successfully!');
          setIsOpen(false);
        }
      }
    } catch (error) {
      toast.error('Failed to save note');
      console.error('Save error:', error);
    }
  };

  // Add new tag to the list
  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  // Remove tag from list
  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // Save button is only disabled by loading state since editor is guaranteed to be mounted
  const isSaveDisabled = isLoading || !tocState.editor;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button disabled={isSaveDisabled}>
          {isLoading ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          {mode === 'create' ? 'Save Note' : 'Update Note'}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {mode === 'create' ? 'Save New Note' : 'Update Note'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder={getAutoTitle() || 'Enter title...'}
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>
          
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="e.g., Mathematics, History..."
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
            />
          </div>
          
          <div>
            <Label>Tags</Label>
            <div className="flex gap-2 mb-2">
              <Input
                placeholder="Add tag..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTag()}
              />
              <Button type="button" size="sm" onClick={addTag}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-1">
              {formData.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                  {tag}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => removeTag(tag)}
                  />
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <Label htmlFor="excerpt">Excerpt (Optional)</Label>
            <Textarea
              id="excerpt"
              placeholder="Brief description..."
              value={formData.excerpt}
              onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
              rows={3}
            />
          </div>
          
          <Button onClick={handleSave} disabled={isSaveDisabled} className="w-full">
            {isLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            {mode === 'create' ? 'Save Note' : 'Update Note'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}