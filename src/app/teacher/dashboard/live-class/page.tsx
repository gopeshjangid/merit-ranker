"use client"

import { useState } from "react"
import { Plus, ImageIcon, Shapes, Trash2, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type Slide = {
  id: string
  title: string
  content: string
  image?: string // path like /placeholder.svg?height=240&width=400&query=diagram%20placeholder
  diagramHint?: string
}

export default function LiveClassMaterialsPage() {
  const [slides, setSlides] = useState<Slide[]>([
    {
      id: "s-1",
      title: "Introduction",
      content:
        "Today we will cover key formulas, shortcuts, and common mistakes. Follow along and ask doubts in live chat.",
      image: "/explanatory-diagram.jpg",
    },
  ])
  const [activeId, setActiveId] = useState(slides[0].id)

  const active = slides.find((s) => s.id === activeId)

  const addSlide = () => {
    const id = `s-${Date.now()}`
    const next: Slide = { id, title: "New Slide", content: "" }
    setSlides((s) => [...s, next])
    setActiveId(id)
  }

  const removeSlide = (id: string) => {
    setSlides((s) => s.filter((x) => x.id !== id))
    if (activeId === id && slides.length > 1) {
      const next = slides.find((x) => x.id !== id)
      if (next) setActiveId(next.id)
    }
  }

  const updateActive = (patch: Partial<Slide>) => {
    setSlides((s) => s.map((x) => (x.id === activeId ? { ...x, ...patch } : x)))
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[280px_1fr]">
      <Card className="md:sticky md:top-4 h-max">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-base">Slides</CardTitle>
          <Button size="sm" onClick={addSlide}>
            <Plus className="h-4 w-4 mr-1" /> Add
          </Button>
        </CardHeader>
        <CardContent className="space-y-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={cn(
                "w-full rounded-md border p-2 text-left text-sm hover:bg-muted/50 flex items-center justify-between",
                activeId === s.id ? "bg-primary/10 border-primary" : "border-border",
              )}
            >
              <span className="truncate">
                {idx + 1}. {s.title || "Untitled"}
              </span>
              <Trash2
                className="h-4 w-4 opacity-70 hover:text-destructive"
                onClick={(e) => {
                  e.stopPropagation()
                  removeSlide(s.id)
                }}
              />
            </button>
          ))}
        </CardContent>
      </Card>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Editor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground">Slide Title</label>
              <Input
                value={active?.title || ""}
                onChange={(e) => updateActive({ title: e.target.value })}
                placeholder="e.g., Speed, Time, and Distance"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Content</label>
              <Textarea
                value={active?.content || ""}
                onChange={(e) => updateActive({ content: e.target.value })}
                placeholder="Explain the concept, include steps and key takeaways..."
                className="min-h-40"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  updateActive({
                    image: "/explanatory-diagram.jpg",
                  })
                }
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Add Image
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  updateActive({
                    diagramHint: "Draw a right triangle with sides a,b,c; label angles; annotate Pythagorean relation",
                  })
                }
              >
                <Shapes className="h-4 w-4 mr-2" />
                Add Diagram Hint
              </Button>
              <Button type="button" variant="secondary" onClick={() => alert("AI improve (UI only)")}>
                <Wand2 className="h-4 w-4 mr-2" />
                AI Improve
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-4">
              <div className="text-xl font-semibold">{active?.title || "Untitled Slide"}</div>
              <div className="mt-2 whitespace-pre-wrap text-sm">{active?.content || "—"}</div>
              {active?.image && (
                <img
                  src={active.image || "/placeholder.svg"}
                  alt="Slide visual"
                  className="mt-4 w-full max-w-xl rounded-md border"
                />
              )}
              {active?.diagramHint && (
                <div className="mt-3 text-xs text-muted-foreground">Diagram hint: {active.diagramHint}</div>
              )}
            </div>
            <div className="mt-3 flex gap-2">
              <Button onClick={() => alert("Saved (UI only)")}>Save</Button>
              <Button variant="outline" onClick={() => alert("Exported as presentation (UI only)")}>
                Export Presentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
