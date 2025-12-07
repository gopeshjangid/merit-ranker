"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  HelpCircle,
  Shield,
  FileText,
  ChevronDown,
  GraduationCap,
  Users,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/provider/theme-provider"
import Logout from "@/components/auth/Logout"
import { useUserStore } from "@/states/user-state"

const mainNavItems = [
  { href: "/#features", label: "Features", icon: Sparkles },
  { href: "/#students", label: "For Students", icon: GraduationCap },
  { href: "/#teachers", label: "For Teachers", icon: Users },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
]

const legalNavItems = [
  { href: "/privacy-policy", label: "Privacy Policy", icon: Shield },
  { href: "/terms-of-service", label: "Terms of Service", icon: FileText },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const user = useUserStore((state) => state.user)

  // Don't show public navbar on teacher dashboard pages
  if (pathname?.startsWith("/teacher")) {
    return null
  }

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/30 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className="text-2xl font-bold text-foreground">Merit Ranker</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href && "text-foreground bg-accent",
                )}
              >
                {item.label}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground text-sm font-medium"
                >
                  Legal <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {legalNavItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link href={item.href} className="flex items-center w-full">
                      <item.icon className="h-4 w-4 mr-2 opacity-60" />
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            {user ? (
              <Logout />
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/auth/sign-in">Sign In</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/auth/sign-up?role=student">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-14 inset-x-0 z-40 bg-background border-b border-border shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                )}
                onClick={closeMenu}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}

            <div className="border-t border-border/50 my-2 pt-2">
              {legalNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground"
                  onClick={closeMenu}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-border/50 pt-3 space-y-2">
              <Button asChild variant="outline" className="w-full justify-center">
                <Link href="/auth/sign-in" onClick={closeMenu}>Sign In</Link>
              </Button>
              <Button asChild className="w-full justify-center">
                <Link href="/auth/sign-up?role=student" onClick={closeMenu}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

