"use client"

import { notFound } from "next/navigation"
import { teachers } from "@/lib/sample-teachers"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TeacherProfilePage({ params }: { params: { slug: string } }) {
  const teacher = teachers.find((t) => t.slug === params.slug)
  if (!teacher) return notFound()

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <header className="flex flex-col md:flex-row md:items-center gap-4">
        <img
          src={teacher.avatar || "/placeholder.svg?height=128&width=128&query=teacher%20avatar"}
          alt={`${teacher.name} avatar`}
          className="h-20 w-20 rounded-full border"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-balance">{teacher.name}</h1>
          <div className="mt-2 flex flex-wrap gap-2">
            {teacher.subjects.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
          </div>
          <div className="mt-3 text-sm text-muted-foreground">
            {teacher.totalStudents.toLocaleString()} students · {teacher.totalMockTests} mock tests
          </div>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/auth/sign-up?role=student">Start Learning</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/teacher/branding">Claim Profile</Link>
          </Button>
        </div>
      </header>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm font-medium">Bio</div>
              <p className="text-sm">{teacher.bio}</p>
            </div>
            <div>
              <div className="text-sm font-medium">Teaching Style</div>
              <p className="text-sm">{teacher.teachingStyle}</p>
            </div>
            <div>
              <div className="text-sm font-medium">Achievements</div>
              <ul className="list-disc pl-5 text-sm">
                {teacher.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-medium">Success Stories</div>
              <p className="text-sm">{teacher.successStories}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Presence</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <div className="text-xs text-muted-foreground">YouTube</div>
              {teacher.youtubeUrl ? (
                <a className="underline" href={teacher.youtubeUrl} target="_blank" rel="noreferrer">
                  {teacher.youtubeUrl}
                </a>
              ) : (
                "—"
              )}
              <div className="text-xs">{teacher.youtubeSubs ? `${teacher.youtubeSubs} subscribers` : "—"}</div>
            </div>
            <div className="text-sm">
              <div className="text-xs text-muted-foreground">Instagram</div>
              {teacher.instagramUrl ? (
                <a className="underline" href={teacher.instagramUrl} target="_blank" rel="noreferrer">
                  {teacher.instagramUrl}
                </a>
              ) : (
                "—"
              )}
              <div className="text-xs">
                {teacher.instagramFollowers ? `${teacher.instagramFollowers} followers` : "—"}
              </div>
            </div>
            <div className="text-sm">
              <div className="text-xs text-muted-foreground">Telegram</div>
              {teacher.telegramUrl ? (
                <a className="underline" href={teacher.telegramUrl} target="_blank" rel="noreferrer">
                  {teacher.telegramUrl}
                </a>
              ) : (
                "—"
              )}
              <div className="text-xs">{teacher.telegramMembers ? `${teacher.telegramMembers} members` : "—"}</div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>What Students Say</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {teacher.testimonials.map((t, i) => (
                <li key={i} className="rounded-md border p-3 text-sm">
                  “{t}”
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            For collaborations and live classes, reach out via the social links above.
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
