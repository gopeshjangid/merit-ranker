"use client"

import dynamic from "next/dynamic"
import { LayoutGrid, Plus } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import NotesListing from "@/features/notes/notes-listing"
import { CustomTabs } from "@/components/ui/custom-tabs"

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
  const tabs = [
    {
      value: "notes-list",
      label: "My Notes",
      icon: LayoutGrid,
      content: <NotesListing />,
    },
    {
      value: "create-new",
      label: "Create New",
      icon: Plus,
      content: <CreateNotes />,
    },
  ]

  return (
    <CustomTabs
      tabs={tabs}
      defaultValue="notes-list"
    />
  )
}