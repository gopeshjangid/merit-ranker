import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
  createDocument,
  updateDocument,
  getDocumentById,
  getDocumentsByUserId,
  deleteDocument,
  type TDocumentType,
  type TDocumentCreateType,
} from '@/services/documents-api';
import type { Value } from 'platejs';

interface NotesState {
  // State
  documents: TDocumentType[];
  currentDocument: TDocumentType | null;
  isLoading: boolean;
  error: string | null;

  // Tab state management for notes page
  activeTab: string;
  editingDocumentId: string | null;

  editorValue: Value;

  // Actions
  createNote: (noteData: TDocumentCreateType) => Promise<TDocumentType | null>;
  updateNote: (
    documentId: string,
    updates: Partial<TDocumentType>
  ) => Promise<TDocumentType | null>;
  loadNote: (documentId: string) => Promise<TDocumentType | null>;
  deleteNote: (documentId: string) => Promise<boolean>;
  listUserNotes: (userId: string) => Promise<void>;
  setCurrentDocument: (document: TDocumentType | null) => void;
  clearError: () => void;

  // Tab management actions
  setActiveTab: (tab: string) => void;
  openNoteForEditing: (documentId: string) => void;
  openNoteForViewing: (documentId: string) => void;
  resetNoteState: () => void;

  setEditorValue: (value: Value) => void;
  setIsLoading: (loading: boolean) => void;
}


export const useNotesStore = create<NotesState>()(
  devtools(
    (set, get) => ({
      // Initial state
      documents: [],
      currentDocument: null,
      isLoading: false,
      error: null,

      // Initial tab state
      activeTab: 'notes-list',
      editingDocumentId: null,

      editorValue:[
    {
      id: '1',
      type: 'h1',
      children: [{ text: 'Untitled Document' }],
    },
    {
      id: '2',
      type: 'p',
      children: [{ text: 'initializing...' }],
    },
  ],

      // ...existing CRUD methods remain the same...
      createNote: async (noteData: TDocumentCreateType) => {
        set({ isLoading: true, error: null });
        try {
          const document = await createDocument({
            ...noteData,
            storage: 'S3',
            status: 'PENDING',
            version: 1,
          });

          if (document) {
            set((state) => ({
              documents: [document as TDocumentType, ...state.documents],
              isLoading: false,
              // Switch back to listing after successful creation
              activeTab: 'notes-list',
            }));
          }

          return document as TDocumentType;
        } catch (error) {
          set({
            error:
              error instanceof Error ? error.message : 'Failed to create note',
            isLoading: false,
          });
          return null;
        }
      },

      updateNote: async (
        documentId: string,
        updates: Partial<TDocumentType>
      ) => {
        set({ isLoading: true, error: null });
        try {
          const updatedDoc = await updateDocument({
            documentId,
            ...updates,
            version: (get().currentDocument?.version || 1) + 1,
          });

          if (updatedDoc) {
            set((state) => ({
              documents: state.documents.map((doc) =>
                doc.documentId === documentId ? updatedDoc : doc
              ),
              currentDocument: updatedDoc,
              isLoading: false,
              // Switch back to listing after successful update
              activeTab: 'notes-list',
              editingDocumentId: null,
            }));
          }

          return updatedDoc;
        } catch (error) {
          set({
            error:
              error instanceof Error ? error.message : 'Failed to update note',
            isLoading: false,
          });
          return null;
        }
      },

      loadNote: async (documentId: string) => {
        set({ error: null });
        try {
          const document = await getDocumentById(documentId);
          set({ currentDocument: document });
          return document;
        } catch (error) {
          set({
            error:
              error instanceof Error ? error.message : 'Failed to load note',
          });
          return null;
        }
      },

      deleteNote: async (documentId: string) => {
        set({ isLoading: true, error: null });
        try {
          await deleteDocument(documentId);
          set((state) => ({
            documents: state.documents.filter(
              (doc) => doc.documentId !== documentId
            ),
            currentDocument:
              state.currentDocument?.documentId === documentId
                ? null
                : state.currentDocument,
            isLoading: false,
            // Reset editing state if deleting current document
            editingDocumentId:
              state.editingDocumentId === documentId
                ? null
                : state.editingDocumentId,
          }));
          return true;
        } catch (error) {
          set({
            error:
              error instanceof Error ? error.message : 'Failed to delete note',
            isLoading: false,
          });
          return false;
        }
      },

      listUserNotes: async (userId: string) => {
        set({ isLoading: true, error: null });
        try {
          const { items } = await getDocumentsByUserId(userId);
          set({ documents: items, isLoading: false });
        } catch (error) {
          set({
            error:
              error instanceof Error ? error.message : 'Failed to load notes',
            isLoading: false,
          });
        }
      },

      setCurrentDocument: (document) => set({ currentDocument: document }),
      clearError: () => set({ error: null }),

      // Tab management methods
      setActiveTab: (tab: string) => {
        set({ activeTab: tab });
        // Clear editing state when switching tabs manually
        if (tab !== 'create-new') {
          set({ editingDocumentId: null, currentDocument: null });
        }
      },

      // Open note for editing - switches to create tab with edit mode
      openNoteForEditing: (documentId: string) => {
        set({
          activeTab: 'create-new',
          editingDocumentId: documentId,
          currentDocument: null, // Will be loaded by CreateNotes component
        });
      },

      // Open note for viewing - same as editing for now, can be extended later
      openNoteForViewing: (documentId: string) => {
        set({
          activeTab: 'create-new',
          editingDocumentId: documentId,
          currentDocument: null,
        });
      },

      // Reset note state when creating new note
      resetNoteState: () => {
        set({
          editingDocumentId: null,
          currentDocument: null,
          activeTab: 'create-new',
        });
      },
        setEditorValue: (value) => set({ editorValue: value }),
        setIsLoading: (loading) => set({ isLoading: loading }),
    }),
    { name: 'notes-store' }
  )
);
