"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NotebookText, FileCheck2, GraduationCap, MessageCircle, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function TeacherDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const nav = [
    { href: "/teacher/dashboard", label: "Overview", icon: GraduationCap },
    { href: "/teacher/dashboard/notes", label: "Notes", icon: NotebookText },
    { href: "/teacher/dashboard/live-class/presentation", label: "Live Class Slides", icon: NotebookText },
    { href: "/teacher/dashboard/quizzes", label: "Quiz", icon: FileCheck2 },
    { href: "/teacher/dashboard/mocks", label: "Mock Test", icon: FileCheck2 },
    { href: "/teacher/dashboard/students", label: "Students", icon: MessageCircle },
  ]
  const navFooter = [
    { href: "/teacher/dashboard/settings", label: "Settings", icon: Settings },
  ]

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        {/* <SidebarHeader>
          <div className="flex items-center px-4 pt-16">
            <span className="text-sm text-muted-foreground">Teacher Dashboard</span>
          </div>
        </SidebarHeader> */}
        <SidebarContent className="pt-18 px-2">
          <SidebarMenu>
            {nav.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton tooltip={item.label} asChild isActive={pathname === item.href}>
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="mb-4">
          <SidebarMenu>
            {navFooter.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton tooltip={item.label} asChild isActive={pathname === item.href}>
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
      </SidebarFooter>
      </Sidebar>
      <SidebarInset className="flex flex-1 flex-col overflow-x-hidden">
        <header className="flex h-12 shrink-0 items-center gap-2 border-b mt-16">
          <SidebarTrigger className="ml-1" />
          <div className="text-sm text-muted-foreground">Teacher Dashboard</div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}