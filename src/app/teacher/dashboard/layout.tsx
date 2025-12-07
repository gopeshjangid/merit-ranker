"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NotebookText,
  FileText,
  GraduationCap,
  Users,
  Settings,
  LayoutDashboard,
  PlusSquare,
  Radio,
  Youtube,
  UserCircle,
  Search,
  FolderOpen,
  ListChecks,
  FileQuestion,
  ClipboardCheck,
  Calendar,
  Share2,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"

export default function TeacherDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Main dashboard overview
  const mainNav = [
    { href: "/teacher/dashboard", label: "Dashboard", icon: LayoutDashboard },
  ]

  // My Content - view existing
  const myContentNav = [
    { href: "/teacher/dashboard/notes", label: "My Notes", icon: FolderOpen },
    { href: "/teacher/dashboard/mocks", label: "My Mocks", icon: FileText },
    { href: "/teacher/dashboard/test-series", label: "Test Series", icon: ListChecks },
    { href: "/teacher/dashboard/quizzes", label: "Quizzes", icon: FileQuestion },
  ]

  // Create New - all create actions
  const createNav = [
    { href: "/teacher/dashboard/notes?tab=create-new", label: "Create Notes", icon: NotebookText },
    { href: "/teacher/dashboard/create-mock", label: "Create Mock", icon: ClipboardCheck },
    { href: "/teacher/dashboard/create-test-series", label: "Test Series", icon: ListChecks },
    { href: "/teacher/dashboard/quizzes/create", label: "Create Quiz", icon: PlusSquare },
  ]

  // Teaching & Live
  const teachingNav = [
    { href: "/teacher/dashboard/live-class/presentation", label: "Go Live", icon: Radio },
    { href: "/teacher/dashboard/students", label: "My Students", icon: Users },
    { href: "/teacher/dashboard/schedule", label: "Schedule", icon: Calendar },
  ]

  // External
  const externalNav = [
    { href: "https://youtube.com", label: "YouTube Studio", icon: Youtube, external: true },
  ]

  // Account
  const accountNav = [
    { href: "/teacher/dashboard/profile", label: "My Profile", icon: UserCircle },
    { href: "/teacher/dashboard/branding", label: "Branding Page", icon: Share2 },
    { href: "/teacher/dashboard/settings", label: "Settings", icon: Settings },
  ]

  const NavItem = ({ item, isActive }: { item: typeof mainNav[0] & { external?: boolean }, isActive: boolean }) => (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={item.label}
        asChild
        isActive={isActive}
        className={`h-9 text-sm group transition-all duration-200 ${isActive
          ? 'bg-cyan-500/10 border-l-2 border-cyan-500 text-cyan-500'
          : 'hover:bg-muted/50 dark:hover:bg-slate-800/50 hover:border-l-2 hover:border-cyan-500/50'
          }`}
      >
        <Link
          href={item.href}
          className="flex items-center gap-3 text-sidebar-foreground"
          {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <item.icon className={`h-4 w-4 shrink-0 transition-colors ${isActive ? 'text-cyan-500' : 'group-hover:text-cyan-400'}`} />
          <span className="truncate">{item.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )

  return (
    <SidebarProvider>
      <Sidebar className="border-r border-cyan-500/20 dark:bg-slate-900/95">
        {/* Header */}
        <SidebarHeader className="pt-16 pb-2 px-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-cyan-500" />
            <span className="text-sm font-semibold gradient-text">Teacher Portal</span>
          </div>
        </SidebarHeader>

        {/* Resizable Rail */}
        <SidebarRail />

        <SidebarContent className="px-2 space-y-1">
          {/* Main */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNav.map((item) => (
                  <NavItem key={item.href} item={item} isActive={pathname === item.href} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* My Content */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs text-muted-foreground px-2">My Content</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {myContentNav.map((item) => (
                  <NavItem key={item.href} item={item} isActive={pathname === item.href} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Create */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs text-muted-foreground px-2">Create</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {createNav.map((item) => (
                  <NavItem key={item.href} item={item} isActive={pathname === item.href} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Teaching */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs text-muted-foreground px-2">Teaching</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {teachingNav.map((item) => (
                  <NavItem key={item.href} item={item} isActive={pathname === item.href} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* External */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs text-muted-foreground px-2">External</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {externalNav.map((item) => (
                  <NavItem key={item.href} item={item} isActive={false} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="mb-4 px-2">
          <SidebarMenu>
            {accountNav.map((item) => (
              <NavItem key={item.href} item={item} isActive={pathname === item.href} />
            ))}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="flex flex-1 flex-col overflow-x-hidden">
        {/* Compact Header with Search */}
        <header className="sticky top-0 z-30 flex items-center gap-4 h-14 px-4 border-b border-border/50 dark:border-cyan-500/20 bg-background/95 dark:bg-slate-900/95 backdrop-blur-sm">
          <SidebarTrigger className="-ml-1 hover:text-cyan-500 transition-colors" />
          <div className="h-4 w-px bg-border dark:bg-cyan-500/30" />

          {/* Global Search - Inline */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search notes, mocks, quizzes..."
                className="pl-9 h-9 bg-muted/50 dark:bg-slate-800/30 border-border dark:border-cyan-500/20 rounded-lg text-sm focus:border-cyan-500/50 focus:ring-cyan-500/20"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto bg-background dark:bg-slate-900/50">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}