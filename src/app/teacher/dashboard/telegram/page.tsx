"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

type Question = {
  id: string
  student: string
  subject: string
  text: string
  solution: string
}

const initial: Question[] = [
  {
    id: "q1",
    student: "Aditi",
    subject: "Mathematics",
    text: "Solve: If x + y = 10 and x − y = 2, find x and y.",
    solution: "",
  },
  {
    id: "q2",
    student: "Rahul",
    subject: "Reasoning",
    text: "Find the next term in the series: 2, 6, 12, 20, ?",
    solution: "",
  },
]

export default function TelegramStudentsPage() {
  const [items, setItems] = useState<Question[]>(initial)

  const updateSolution = (id: string, value: string) => {
    setItems((prev) => prev.map((q) => (q.id === id ? { ...q, solution: value } : q)))
  }

  const onPublish = (q: Question) => {
    console.log("[v0] Publish clicked:", q)
  }

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold">Telegram Students</h1>
        <p className="text-sm text-muted-foreground">Questions asked today and your solutions (UI only).</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((q) => (
          <div key={q.id} className="rounded-lg border p-4 bg-card/50">
            <div className="text-sm text-muted-foreground">Student: {q.student}</div>
            <div className="text-xs text-muted-foreground mb-2">Subject: {q.subject}</div>
            <p className="text-sm mb-3">{q.text}</p>
            <Textarea
              placeholder="Write your solution here..."
              value={q.solution}
              onChange={(e) => updateSolution(q.id, e.target.value)}
            />
            <div className="mt-2 flex justify-end">
              <Button onClick={() => onPublish(q)}>Publish</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
