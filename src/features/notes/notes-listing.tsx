'use client'
import { ListingContainer } from '@/components/listing/listing-container'
import { ListingCard } from '@/components/listing/listing-card'
import { useNotesStore } from '@/states/notes-state'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { useUserStore } from '@/states/user-state'


export default function NotesListing() {
   const { 
    documents, 
    listUserNotes, 
    deleteNote,
    openNoteForEditing,
    openNoteForViewing 
  } = useNotesStore()

  const { getUserId } = useUserStore()

  useEffect(() => {
    const userId = getUserId()
    if (userId) {
      listUserNotes(userId)
    }
  }, [listUserNotes, getUserId])

  const handleView = (documentId: string) => {
    openNoteForViewing(documentId)
  }

  const handleEdit = (documentId: string) => {
    openNoteForEditing(documentId)
  }

  const handleDelete = async (documentId: string) => {
    if (confirm('Are you sure you want to delete this note?')) {
      const success = await deleteNote(documentId)
      if (success) {
        toast.success('Note deleted successfully')
      } else {
        toast.error('Failed to delete note')
      }
    }
  }

  // Nc: Handle download - placeholder for future implementation
  const handleDownload = (documentId: string) => {
    toast.info('Download feature coming soon!')
  }

  console.log('Documents:', documents)

  return (
    <ListingContainer
      header="My Notes"
      subheader="View and manage all your created notes"
      searchPlaceholder="Search notes..."
      items={documents}
      renderItem={note => (
        <ListingCard
         title={note.title || 'Untitled'}
          tags={note.tags?.filter(tag => tag !== null) || []}
          slidesCount={note.version || 1} // Using version as slide count for now
          date={new Date(note.createdAt || '').toLocaleDateString()}
          onView={() => handleView(note.documentId)}
          onEdit={() => handleEdit(note.documentId)}
          onDownload={() => handleDownload(note.documentId)}
          onDelete={() => handleDelete(note.documentId)}
        />
      )}
    />
  )
}