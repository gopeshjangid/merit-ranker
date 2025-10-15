"use client"

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { PlateEditor } from '@/components/editor/plate-editor';
import { PlateController } from 'platejs/react';
import { TocSideBar } from '@/components/ui/toc-sidebar';
import  NotesListingPage  from "@/features/notes/notes-listing";



export default function NotesMakerPage() {


  return (
    <PlateController>
    <section className="h-[calc(100vh-6rem)]">
      <NotesListingPage />
      <ResizablePanelGroup direction="horizontal" className="h-full rounded-md border">
        <ResizablePanel defaultSize={15} minSize={10} className="bg-muted/30">
          <TocSideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={85} minSize={85} >
          <PlateEditor />
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  </PlateController>
  )
}
