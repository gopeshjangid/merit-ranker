"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutGrid, Plus } from "lucide-react"
import NotesListing from "@/features/notes/notes-listing"
import CreateNotes from "@/features/notes/create-notes"

export default function NotesPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="notes-list">
        <TabsList className="rounded-xl p-1 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-800 border border-blue-800">
          <TabsTrigger
            value="notes-list"
            className="flex items-center gap-2 rounded-xl px-8 text-lg font-medium transition-colors
              data-[state=active]:bg-blue-700 data-[state=active]:text-white
              data-[state=inactive]:bg-transparent data-[state=inactive]:text-blue-200"
          >
            <LayoutGrid className="w-5 h-5 mr-2" />
            My Notes
          </TabsTrigger>
          <TabsTrigger
            value="create-new"
            className="flex items-center gap-2 rounded-xl px-8 text-lg font-medium transition-colors
              data-[state=active]:bg-blue-700 data-[state=active]:text-white
              data-[state=inactive]:bg-transparent data-[state=inactive]:text-blue-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New
          </TabsTrigger>
        </TabsList>
        <TabsContent value="notes-list" className="mt-6">
          <NotesListing />
        </TabsContent>
        <TabsContent value="create-new" className="mt-6">
          <CreateNotes />
        </TabsContent>
      </Tabs>
    </div>
  )
}