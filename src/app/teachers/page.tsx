"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { teachers } from "@/lib/sample-teachers"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export default function TeachersMarketplacePage() {
  const [q, setQ] = useState("")
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return teachers
    return teachers.filter(
      (t) => t.name.toLowerCase().includes(query) || t.subjects.some((s) => s.toLowerCase().includes(query)),
    )
  }, [q])

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-balance">Find Your Teacher</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Browse expert teachers by subject and discover the right mentor for your goals.
        </p>
        <div className="mt-4 relative max-w-xl">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
          <Input
            className="pl-8"
            placeholder="Search by name or subject..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((t) => (
          <Link key={t.slug} href={`/teachers/${t.slug}`}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="flex-row items-center gap-3">
                <img
                  src={t.avatar || "/placeholder.svg?height=96&width=96&query=teacher%20avatar"}
                  alt={`${t.name} avatar`}
                  className="h-12 w-12 rounded-full border"
                />
                <div>
                  <CardTitle className="text-base">{t.name}</CardTitle>
                  <div className="text-xs text-muted-foreground">
                    {t.totalStudents.toLocaleString()} students · {t.totalMockTests} mocks
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {t.subjects.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm line-clamp-3">{t.bio}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  )
}
