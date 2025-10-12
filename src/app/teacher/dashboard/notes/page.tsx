"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

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
  const [title, setTitle] = useState<string>("Algebra Basics")
  const [content, setContent] = useState<string>(
    "Write your note here... Use the AI tools to generate or improve content.",
  )

  const onGenerateAI = () => {
    console.log("[v0] AI Generate clicked for:", title)
  }
  const onImproveAI = () => {
    console.log("[v0] AI Improve clicked for:", title)
  }

  return (
    <section className="h-[calc(100vh-6rem)]">
      <ResizablePanelGroup direction="horizontal" className="h-full rounded-md border">
        <ResizablePanel defaultSize={28} minSize={20} className="bg-muted/30">
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
                      setTitle(node.title)
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
                            setTitle(child.title)
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
        <ResizablePanel defaultSize={72}>
          <div className="h-full flex flex-col">
            <div className="border-b p-3 flex items-center gap-2">
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg font-medium"
                aria-label="Note title"
              />
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" onClick={onGenerateAI}>
                  Generate with AI
                </Button>
                <Button variant="outline" onClick={onImproveAI}>
                  Improve
                </Button>
                <Button>Save</Button>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <Textarea
                className="h-full w-full resize-none rounded-none border-0 focus-visible:ring-0"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                aria-label="Note content"
              />
            </div>
            <Separator />
            <div className="p-3 text-xs text-muted-foreground">
              Tip: Use AI to draft sections, summaries, and practice questions. This is UI-only; no data is saved.
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  )
}
