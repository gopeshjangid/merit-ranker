"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

type Question = {
  id: string
  student: string
  text: string
  solution: string
  published: boolean
}

const todayQuestionsSeed: Question[] = [
  { id: "q1", student: "Asha", text: "Explain Fundamental Duties.", solution: "", published: false },
  { id: "q2", student: "Rahul", text: "What causes stagflation?", solution: "", published: false },
  { id: "q3", student: "Meera", text: "Monsoon mechanism over India?", solution: "", published: false },
]

export default function StudentsPage() {
  const [items, setItems] = useState<Question[]>(todayQuestionsSeed)

  const stats = useMemo(() => {
    const total = 1203
    const askedToday = items.length
    const published = items.filter((q) => q.published).length
    return { total, askedToday, published }
  }, [items])

  const setSolution = (id: string, val: string) =>
    setItems((qs) => qs.map((q) => (q.id === id ? { ...q, solution: val } : q)))

  const publish = (id: string) => setItems((qs) => qs.map((q) => (q.id === id ? { ...q, published: true } : q)))

  return (
    <div className="space-y-6">
      {/* Top analytics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Student Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Asked Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{stats.askedToday}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Published Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{stats.published}</div>
          </CardContent>
        </Card>
      </div>

      {/* Questions asked today */}
      <Card>
        <CardHeader>
          <CardTitle>Questions Today</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {items.map((q) => (
            <div key={q.id} className="rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">From {q.student}</div>
                <div className="text-xs">{q.published ? "Published" : "Draft"}</div>
              </div>
              <div className="mt-1 font-medium">{q.text}</div>
              <Separator className="my-2" />
              <Textarea
                value={q.solution}
                onChange={(e) => setSolution(q.id, e.target.value)}
                placeholder="Write solution (AI can help improve)…"
              />
              <div className="mt-2 flex items-center gap-2">
                <Button size="sm" variant="secondary">
                  AI Improve
                </Button>
                <Button size="sm" onClick={() => publish(q.id)} disabled={q.published}>
                  Publish
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Live classes and comments */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Students from Live Classes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="rounded-md border p-2">Batch A: 342 students active</div>
            <div className="rounded-md border p-2">Batch B: 198 students active</div>
            <div className="rounded-md border p-2">Weekend Doubt Session: 86 students active</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>What Students Are Saying</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <blockquote className="rounded-md border p-2 text-sm">
              “Your mock tests mirror the exam pattern perfectly.”
            </blockquote>
            <blockquote className="rounded-md border p-2 text-sm">
              “Short notes plus MCQ practice improved my accuracy.”
            </blockquote>
            <blockquote className="rounded-md border p-2 text-sm">
              “Daily current affairs and PYQs are a game changer.”
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
