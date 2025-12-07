"use client"

import dynamic from "next/dynamic"
import { LayoutGrid, Plus } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import NotesListing from "@/features/notes/notes-listing"
import { CustomTabs } from "@/components/ui/custom-tabs"
import { useNotesStore } from "@/states/notes-state"

const CreateNotes = dynamic(() => import("@/features/notes/create-notes"), {
  loading: () => (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-10 w-32" />
    </div>
  ),
  ssr: false,
})

export default function NotesPage() {

  const { activeTab, setActiveTab, editingDocumentId, resetNoteState } = useNotesStore()

  const handleTabChange = (value: string) => {
    if (value === 'create-new' && !editingDocumentId) {
      resetNoteState()
    }
    setActiveTab(value)
  }

  const tabs = [
    {
      value: "notes-list",
      label: "My Notes",
      icon: LayoutGrid,
      content: <NotesListing />,
    },
    {
      value: "create-new",
      label: editingDocumentId ? "Edit Note" : "Create New",
      icon: Plus,
      content: <CreateNotes
        documentId={editingDocumentId || undefined}
      />,
    },
  ]

  return (
    <CustomTabs
      tabs={tabs}
      defaultValue="notes-list"
      value={activeTab}
      onValueChange={handleTabChange}
      className="mt-2"
    />
  )
}