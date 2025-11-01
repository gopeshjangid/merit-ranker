"use client"

import { Suspense } from 'react'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { PlateEditor } from '@/components/editor/plate-editor'
import { PlateController } from 'platejs/react'
import { TocSideBar } from '@/components/ui/toc-sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import { EditorErrorBoundary } from '@/components/editor/editor-error-boundary'

// Loading fallback for editor
function EditorSkeleton() {
  return (
    <div className="h-full w-full p-6 space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  )
}

export default function NotesMakerPage() {
  return (
    <PlateController>
      <section className="h-[calc(100vh-6rem)]">
        <ResizablePanelGroup direction="horizontal" className="h-full rounded-md border">
          <ResizablePanel defaultSize={15} minSize={10} maxSize={30} className="bg-muted/30">
            <Suspense fallback={<Skeleton className="h-full w-full" />}>
              <TocSideBar />
            </Suspense>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={85} minSize={70}>
            <EditorErrorBoundary>
              <Suspense fallback={<EditorSkeleton />}>
                <PlateEditor />
              </Suspense>
            </EditorErrorBoundary>
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </PlateController>
  )
}
