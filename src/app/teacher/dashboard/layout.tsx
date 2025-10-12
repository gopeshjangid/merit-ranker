"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { NotebookText, FileCheck2, GraduationCap, MessageCircle, Settings } from "lucide-react"

export default function TeacherDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const nav = [
    { href: "/teacher/dashboard", label: "Overview", icon: GraduationCap },
    { href: "/teacher/dashboard/notes", label: "Notes", icon: NotebookText },
    { href: "/teacher/dashboard/live-class", label: "Live Class Materials", icon: NotebookText }, // new
    { href: "/teacher/dashboard/quizzes", label: "Quiz", icon: FileCheck2 },
    { href: "/teacher/dashboard/mocks", label: "Mock Test", icon: FileCheck2 },
    { href: "/teacher/dashboard/students", label: "Students", icon: MessageCircle },
    { href: "/teacher/dashboard/settings", label: "Profile Settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="w-64 border-r border-border/60 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-4 border-b border-border/60">
          <span className="text-sm text-muted-foreground">Teacher Dashboard</span>
        </div>
        <nav className="flex-1 p-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted/50",
                pathname === item.href && "bg-primary/10 text-primary",
              )}
            >
              <item.icon className="h-4 w-4 opacity-70" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 min-w-0">
        <div className="md:hidden sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-border/60 px-4 py-3">
          <div className="text-sm text-muted-foreground">Teacher Dashboard</div>
          <div className="mt-2 flex gap-2 overflow-x-auto">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 rounded-full border text-xs",
                  pathname === item.href ? "border-primary text-primary" : "border-border text-foreground/70",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="p-4 sm:p-6">{children}</div>
      </main>
    </div>
  )
}
