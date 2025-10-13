"use client"

import { useState } from "react"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { PlateEditor } from '@/components/editor/plate-editor';

type TreeItem = { id: string; title: string; children?: TreeItem[] }

const initialTree: TreeItem[] = [
  {
    id: "math",
    title: "Mathematics",
    children: [
      { id: "algebra", title: "Algebra Basics" },
      { id: "prob", title: "Probability" },
      { id: "calc", title: "Calculus Intro" },
    ],
  },
  {
    id: "reasoning",
    title: "Reasoning",
    children: [
      { id: "verbal", title: "Verbal Reasoning" },
      { id: "nonverbal", title: "Non-Verbal" },
    ],
  },
  { id: "gk", title: "General Knowledge" },
]

export default function NotesMakerPage() {
  const [activeId, setActiveId] = useState<string>("algebra")


  return (
    <section className="h-[calc(100vh-6rem)]">
      <ResizablePanelGroup direction="horizontal" className="h-full rounded-md border">
        <ResizablePanel defaultSize={20} minSize={20} className="bg-muted/30">
          <div className="p-3">
            <div className="text-xs mb-2 text-muted-foreground">Pages</div>
            <nav className="space-y-1">
              {initialTree.map((node) => (
                <div key={node.id}>
                  <button
                    className={`w-full text-left px-2 py-1 rounded-md text-sm hover:bg-muted ${
                      activeId === node.id ? "bg-primary/10 text-primary" : ""
                    }`}
                    onClick={() => {
                      setActiveId(node.id)
                    }}
                  >
                    {node.title}
                  </button>
                  {node.children && (
                    <div className="pl-3 mt-1 space-y-1">
                      {node.children.map((child) => (
                        <button
                          key={child.id}
                          className={`w-full text-left px-2 py-1 rounded-md text-sm hover:bg-muted ${
                            activeId === child.id ? "bg-primary/10 text-primary" : ""
                          }`}
                          onClick={() => {
                            setActiveId(child.id)
                          }}
                        >
                          {child.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel >
          <PlateEditor />
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  )
}
