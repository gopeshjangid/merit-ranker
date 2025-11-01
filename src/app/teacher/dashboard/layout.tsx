"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  BookOpen,
  FileCheck2, 
  GraduationCap, 
  Users, 
  Settings, 
  Presentation,
  Bell,
  Search,
  LogOut,
  User,
  HelpCircle,
  BarChart3,
  Calendar,
  MessageSquare
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
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

// Navigation structure
const mainNavItems = [
  { href: "/teacher/dashboard", label: "Dashboard Overview", icon: BarChart3, badge: null },
  { href: "/teacher/dashboard/notes", label: "Create Notes", icon: BookOpen, badge: null },
  { href: "/teacher/dashboard/live-class/presentation", label: "Live Classes", icon: Presentation, badge: "Live" },
  { href: "/teacher/dashboard/quizzes", label: "Quizzes", icon: FileCheck2, badge: null },
  { href: "/teacher/dashboard/mocks", label: "Mock Tests", icon: GraduationCap, badge: null },
] as const

const teachingNavItems = [
  { href: "/teacher/dashboard/students", label: "Student Management", icon: Users, badge: "1.2K" },
  { href: "/teacher/dashboard/schedule", label: "Class Schedule", icon: Calendar, badge: null },
  { href: "/teacher/dashboard/messages", label: "Messages", icon: MessageSquare, badge: "3" },
] as const

const bottomNavItems = [
  { href: "/teacher/dashboard/help", label: "Help & Support", icon: HelpCircle },
  { href: "/teacher/dashboard/settings", label: "Settings", icon: Settings },
] as const

// Mock teacher data - replace with real data from auth/API
const teacherData = {
  name: "Dr. Sarah Johnson",
  email: "sarah.johnson@meritranker.com",
  avatar: "", // Empty for fallback
  role: "Senior Teacher",
  initials: "SJ",
  notifications: 5,
}

export default function TeacherDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r">
        {/* Sidebar Header with Logo */}
        <SidebarHeader className="border-b px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-violet-600 to-indigo-600">
              <GraduationCap className="size-6 text-white" />
            </div>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-semibold bg-gradient-to-r from-primary via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Merit Ranker
              </span>
              <span className="text-xs text-muted-foreground">Teacher Portal</span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-2 py-4">
          {/* Main Navigation */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Main Menu
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {mainNavItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton 
                        tooltip={item.label} 
                        asChild 
                        isActive={isActive}
                        className={cn(
                          "group relative",
                          isActive && "bg-primary/10 text-primary font-medium"
                        )}
                      >
                        <Link href={item.href} prefetch={true}>
                          <item.icon className={cn(
                            "h-4 w-4 transition-colors",
                            isActive && "text-primary"
                          )} />
                          <span className={cn(isActive && "font-medium")}>{item.label}</span>
                          {item.badge && (
                            <Badge 
                              variant={item.badge === "Live" ? "default" : "secondary"} 
                              className={cn(
                                "ml-auto h-5 px-1.5 text-xs font-medium",
                                item.badge === "Live" && "animate-pulse bg-red-500 text-white"
                              )}
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator className="my-4" />

          {/* Teaching Tools */}
          <SidebarGroup>
            <SidebarGroupLabel className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Teaching Tools
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1">
                {teachingNavItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton 
                        tooltip={item.label} 
                        asChild 
                        isActive={isActive}
                        className={cn(
                          "group relative",
                          isActive && "bg-primary/10 text-primary font-medium"
                        )}
                      >
                        <Link href={item.href} prefetch={true}>
                          <item.icon className={cn(
                            "h-4 w-4 transition-colors",
                            isActive && "text-primary"
                          )} />
                          <span className={cn(isActive && "font-medium")}>{item.label}</span>
                          {item.badge && (
                            <Badge 
                              variant="secondary" 
                              className="ml-auto h-5 px-1.5 text-xs"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Sidebar Footer with User Profile */}
        <SidebarFooter className="border-t p-2">
          <SidebarMenu>
            {bottomNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton 
                    tooltip={item.label} 
                    asChild 
                    isActive={isActive}
                    className={cn(
                      isActive && "bg-primary/10 text-primary font-medium"
                    )}
                  >
                    <Link href={item.href} prefetch={true}>
                      <item.icon className={cn(
                        "h-4 w-4",
                        isActive && "text-primary"
                      )} />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
          
          <SidebarSeparator className="my-2" />
          
          {/* User Profile Section */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton 
                size="lg" 
                className="group-data-[collapsible=icon]:!p-2"
              >
                <Avatar className="size-8 ring-2 ring-primary/20">
                  <AvatarImage src={teacherData.avatar} alt={teacherData.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-violet-600 text-white font-semibold">
                    {teacherData.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col items-start text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="font-semibold">{teacherData.name}</span>
                  <span className="text-xs text-muted-foreground">{teacherData.role}</span>
                </div>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              side="top" 
              align="end" 
              className="w-56"
            >
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="font-semibold">{teacherData.name}</span>
                  <span className="text-xs text-muted-foreground font-normal">{teacherData.email}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/teacher/dashboard/profile" className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/teacher/dashboard/settings" className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="flex flex-1 flex-col overflow-x-hidden">
        {/* Top Header */}
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
          <SidebarTrigger className="-ml-1" />
          
          {/* Page Title - Dynamic based on route */}
          <div className="flex flex-1 items-center gap-2">
            <h1 className="text-lg font-semibold md:text-xl">
              {pathname === "/teacher/dashboard" && "Dashboard Overview"}
              {pathname === "/teacher/dashboard/notes" && "Create Notes"}
              {pathname === "/teacher/dashboard/live-class/presentation" && "Live Classes"}
              {pathname === "/teacher/dashboard/quizzes" && "Quizzes"}
              {pathname === "/teacher/dashboard/mocks" && "Mock Tests"}
              {pathname === "/teacher/dashboard/students" && "Student Management"}
              {pathname === "/teacher/dashboard/schedule" && "Class Schedule"}
              {pathname === "/teacher/dashboard/messages" && "Messages"}
              {pathname === "/teacher/dashboard/profile" && "My Profile"}
              {pathname === "/teacher/dashboard/settings" && "Settings"}
              {pathname === "/teacher/dashboard/help" && "Help & Support"}
            </h1>
          </div>

          {/* Top Header Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative hidden lg:flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-8 h-9"
              />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {teacherData.notifications > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white font-semibold">
                      {teacherData.notifications}
                    </span>
                  )}
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Notifications</span>
                  <Badge variant="secondary">{teacherData.notifications} new</Badge>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-80 overflow-y-auto">
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                    <span className="font-medium">New student joined Batch A</span>
                    <span className="text-xs text-muted-foreground">2 minutes ago</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                    <span className="font-medium">Quiz submission from 23 students</span>
                    <span className="text-xs text-muted-foreground">1 hour ago</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                    <span className="font-medium">Live class starts in 30 minutes</span>
                    <span className="text-xs text-muted-foreground">3 hours ago</span>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center text-primary cursor-pointer">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0">
                  <Avatar className="size-9 ring-2 ring-primary/20">
                    <AvatarImage src={teacherData.avatar} alt={teacherData.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-violet-600 text-white text-sm font-semibold">
                      {teacherData.initials}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{teacherData.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{teacherData.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/teacher/dashboard/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>My Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teacher/dashboard" className="cursor-pointer">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teacher/dashboard/schedule" className="cursor-pointer">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>My Schedule</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/teacher/dashboard/settings" className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teacher/dashboard/help" className="cursor-pointer">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Help & Support</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
