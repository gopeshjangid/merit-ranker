"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Branding = {
  name: string
  subjects: string
  bio: string
  achievements: string
  teachingStyle: string
  testimonials: string
  successStories: string
  totalStudents: string
  totalMockTests: string
  youtubeUrl: string
  youtubeSubs: string
  instagramUrl: string
  instagramFollowers: string
  telegramUrl: string
  telegramMembers: string
}

export default function TeacherBrandingPage() {
  const [data, setData] = useState<Branding>({
    name: "",
    subjects: "",
    bio: "",
    achievements: "",
    teachingStyle: "",
    testimonials: "",
    successStories: "",
    totalStudents: "",
    totalMockTests: "",
    youtubeUrl: "",
    youtubeSubs: "",
    instagramUrl: "",
    instagramFollowers: "",
    telegramUrl: "",
    telegramMembers: "",
  })

  const onChange = (key: keyof Branding) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [key]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Branding UI submission (no backend):", data)
    alert("Branding saved (UI only).")
  }

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Teacher Branding</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Build a compelling public profile. Showcase your expertise, results, and social presence.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid gap-1.5">
            <label className="text-sm font-medium">Display Name</label>
            <input
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="e.g., Prof. A.K. Sharma"
              value={data.name}
              onChange={onChange("name")}
            />
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium">Expert Subjects (comma separated)</label>
            <input
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="quantitative aptitude, reasoning, general studies"
              value={data.subjects}
              onChange={onChange("subjects")}
            />
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium">Short Bio</label>
            <textarea
              className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Brief background, years of experience, notable institutions..."
              value={data.bio}
              onChange={onChange("bio")}
            />
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium">Career Achievements</label>
            <textarea
              className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Top ranks of your students, awards, publications..."
              value={data.achievements}
              onChange={onChange("achievements")}
            />
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium">How You Teach (Style)</label>
            <textarea
              className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Your approach to concept clarity, practice, and mentorship..."
              value={data.teachingStyle}
              onChange={onChange("teachingStyle")}
            />
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium">Testimonials (one per line)</label>
            <textarea
              className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder={`"Sir's classes helped me clear SSC CGL"\n"Great shortcut methods for quant"`}
              value={data.testimonials}
              onChange={onChange("testimonials")}
            />
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium">Success Stories (summary)</label>
            <textarea
              className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Highlight notable selections and improvements"
              value={data.successStories}
              onChange={onChange("successStories")}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <label className="text-sm font-medium">Total Students Mentored</label>
              <input
                type="number"
                min="0"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="e.g., 5000"
                value={data.totalStudents}
                onChange={onChange("totalStudents")}
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-sm font-medium">Total Mock Tests Created</label>
              <input
                type="number"
                min="0"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="e.g., 120"
                value={data.totalMockTests}
                onChange={onChange("totalMockTests")}
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium">YouTube Channel URL</label>
            <input
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="https://youtube.com/@your-channel"
              value={data.youtubeUrl}
              onChange={onChange("youtubeUrl")}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <label className="text-sm font-medium">YouTube Subscribers</label>
              <input
                type="number"
                min="0"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="e.g., 250000"
                value={data.youtubeSubs}
                onChange={onChange("youtubeSubs")}
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-sm font-medium">Instagram Followers</label>
              <input
                type="number"
                min="0"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="e.g., 80000"
                value={data.instagramFollowers}
                onChange={onChange("instagramFollowers")}
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium">Instagram URL</label>
            <input
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="https://instagram.com/your-handle"
              value={data.instagramUrl}
              onChange={onChange("instagramUrl")}
            />
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium">Telegram Channel URL</label>
            <input
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="https://t.me/your-channel"
              value={data.telegramUrl}
              onChange={onChange("telegramUrl")}
            />
          </div>

          <div className="grid gap-1.5">
            <label className="text-sm font-medium">Telegram Members</label>
            <input
              type="number"
              min="0"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="e.g., 15000"
              value={data.telegramMembers}
              onChange={onChange("telegramMembers")}
            />
          </div>

          <div className="mt-2 flex items-center gap-3">
            <Button type="submit" className="px-6">
              Save
            </Button>
            <Button type="button" variant="outline" onClick={() => console.log("[v0] Preview data:", data)}>
              Preview
            </Button>
            {data.name && (
              <a
                href={`/teachers/${slugify(data.name)}`}
                className="text-sm underline text-primary"
                target="_self"
                rel="noreferrer"
              >
                View Public Profile
              </a>
            )}
          </div>
        </form>

        <aside className="rounded-lg border border-border bg-card p-4">
          <h2 className="text-lg font-semibold">Public Profile Preview</h2>
          <p className="mt-1 text-sm text-muted-foreground">This is how students see your brand.</p>

          <div className="mt-4 space-y-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Name</div>
              <div className="font-medium">{data.name || "Your Name"}</div>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground">Expert Subjects</div>
              <div>{data.subjects || "—"}</div>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground">Bio</div>
              <div className="whitespace-pre-wrap">{data.bio || "—"}</div>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground">Career Achievements</div>
              <div className="whitespace-pre-wrap">{data.achievements || "—"}</div>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground">Teaching Style</div>
              <div className="whitespace-pre-wrap">{data.teachingStyle || "—"}</div>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground">Testimonials</div>
              <ul className="list-disc pl-5">
                {(data.testimonials || "")
                  .split("\n")
                  .filter(Boolean)
                  .map((t, i) => (
                    <li key={i} className="text-sm">
                      {t}
                    </li>
                  ))}
              </ul>
              {!data.testimonials && <div>—</div>}
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground">Success Stories</div>
              <div className="whitespace-pre-wrap">{data.successStories || "—"}</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-md border border-border p-3">
                <div className="text-xs text-muted-foreground">Total Students</div>
                <div className="text-lg font-semibold">{data.totalStudents || "0"}</div>
              </div>
              <div className="rounded-md border border-border p-3">
                <div className="text-xs text-muted-foreground">Mock Tests</div>
                <div className="text-lg font-semibold">{data.totalMockTests || "0"}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="rounded-md border border-border p-3">
                <div className="text-xs text-muted-foreground">YouTube</div>
                <a className="truncate underline" href={data.youtubeUrl || "#"} target="_blank" rel="noreferrer">
                  {data.youtubeUrl || "—"}
                </a>
                <div className="text-sm">{data.youtubeSubs ? `${data.youtubeSubs} subscribers` : "—"}</div>
              </div>
              <div className="rounded-md border border-border p-3">
                <div className="text-xs text-muted-foreground">Instagram</div>
                <a className="truncate underline" href={data.instagramUrl || "#"} target="_blank" rel="noreferrer">
                  {data.instagramUrl || "—"}
                </a>
                <div className="text-sm">{data.instagramFollowers ? `${data.instagramFollowers} followers` : "—"}</div>
              </div>
              <div className="rounded-md border border-border p-3">
                <div className="text-xs text-muted-foreground">Telegram</div>
                <a className="truncate underline" href={data.telegramUrl || "#"} target="_blank" rel="noreferrer">
                  {data.telegramUrl || "—"}
                </a>
                <div className="text-sm">{data.telegramMembers ? `${data.telegramMembers} members` : "—"}</div>
              </div>
            </div>

            <div className="mt-2">
              <Button variant="secondary">Create Subject Content</Button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}
