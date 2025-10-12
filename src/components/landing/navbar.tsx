"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  Globe,
  Phone,
  Home,
  Info,
  CheckCircle,
  HelpCircle,
  Shield,
  FileText,
  Briefcase,
  ChevronDown,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const mainNavItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#features", label: "Features", icon: CheckCircle },
  { href: "/#students", label: "For Students", icon: Info },
  { href: "/#teachers", label: "For Teachers", icon: Briefcase },
  { href: "/teachers", label: "Teachers Marketplace", icon: Briefcase }, // marketplace
  { href: "/teacher/dashboard", label: "Teacher Dashboard", icon: Briefcase },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
  { href: "/contact", label: "Contact", icon: Mail },
]

const legalNavItems = [
  { href: "/privacy-policy", label: "Privacy Policy", icon: Shield },
  { href: "/terms-of-service", label: "Terms of Service", icon: FileText },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const phoneNumber = "09 6500 00172"
  const telLink = "tel:+959650000172"

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-xl font-bold gradient-text">Meritranker</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href && "text-primary bg-primary/10",
                )}
              >
                {item.label}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-foreground/80 hover:text-primary px-3 py-2 text-sm font-medium flex items-center",
                    (pathname === "/privacy-policy" || pathname === "/terms-of-service") &&
                      "text-primary bg-primary/10",
                  )}
                >
                  Legal <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {legalNavItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link
                      href={item.href}
                      className={cn("flex items-center w-full", pathname === item.href && "text-primary bg-primary/10")}
                    >
                      <item.icon className="h-4 w-4 mr-2 opacity-70" />
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              asChild
              className={cn(
                "ml-3 bg-cyan-500 hover:bg-cyan-600 text-white",
                pathname === "/auth/sign-up?role=student" &&
                  "ring-2 ring-offset-2 ring-cyan-500 ring-offset-background",
              )}
            >
              <Link href="/auth/sign-up?role=student">student sign up</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className={cn(
                "ml-2 border-cyan-600 text-cyan-300 hover:text-cyan-200 hover:border-cyan-500 bg-transparent",
                pathname === "/teacher/branding" && "ring-2 ring-offset-2 ring-cyan-500 ring-offset-background",
              )}
            >
              <Link href="/teacher/branding">teacher branding</Link>
            </Button>

            <Button variant="outline" size="icon" className="ml-2 bg-transparent">
              <Globe className="h-4 w-4" />
              <span className="sr-only">Language</span>
            </Button>
            <ModeToggle />
          </div>
          <div className="flex md:hidden items-center">
            <Button
              asChild
              size="sm"
              className={cn(
                "mr-2 bg-cyan-500 hover:bg-cyan-600 text-white",
                pathname === "/auth/sign-up?role=student" &&
                  "ring-2 ring-offset-1 ring-cyan-500 ring-offset-background",
              )}
            >
              <Link href="/auth/sign-up?role=student">student sign up</Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="mr-2 bg-transparent border-cyan-600 text-cyan-300">
              <Link href="/teacher/branding">teacher branding</Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
            {[...mainNavItems, ...legalNavItems].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-foreground/80 hover:text-primary hover:bg-muted/50 block px-3 py-2 rounded-md text-base font-medium flex items-center",
                  pathname === item.href && "text-primary bg-primary/10",
                )}
                onClick={closeMenu}
              >
                <item.icon className="h-5 w-5 mr-2 opacity-70" />
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border/50 my-2"></div>
            <div className="px-3 py-2">
              <a
                href={telLink}
                className="text-foreground/80 hover:text-primary block py-2 rounded-md text-base font-medium flex items-center"
                onClick={closeMenu}
              >
                <Phone className="h-5 w-5 mr-2 opacity-70" />
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center justify-between px-3 py-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
