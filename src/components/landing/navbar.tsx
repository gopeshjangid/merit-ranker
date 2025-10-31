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
  CheckCircle,
  HelpCircle,
  Shield,
  FileText,
  ChevronDown,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

const mainNavItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#features", label: "Features", icon: CheckCircle },
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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl animate-fade-in-nav">
      <div className="bg-card/95 backdrop-blur-xl border border-border/30 rounded-2xl px-6 py-3 shadow-lg shadow-primary/5 w-full mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <div className="bg-gradient-to-r from-primary via-violet-600 to-indigo-600 bg-clip-text text-transparent text-xl font-bold">
                Merit Ranker
              </div>
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
                "ml-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 transition-all duration-200 hover:scale-105",
                pathname === "/auth/sign-up?role=student" &&
                  "ring-2 ring-offset-2 ring-primary ring-offset-background",
              )}
            >
              <Link href="/auth/sign-up?role=student">Get Started</Link>
            </Button>

            <ThemeToggle />
            
            <Button variant="outline" size="icon" className="ml-2 bg-transparent">
              <Globe className="h-4 w-4" />
              <span className="sr-only">Language</span>
            </Button>
          </div>
          <div className="flex md:hidden items-center">
            <Button
              asChild
              size="sm"
              className={cn(
                "mr-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4",
                pathname === "/auth/sign-up?role=student" &&
                  "ring-2 ring-offset-1 ring-primary ring-offset-background",
              )}
            >
              <Link href="/auth/sign-up?role=student">Get Started</Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 z-40 px-4">
          <div className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-2xl max-h-[calc(100vh-6rem)] overflow-y-auto">
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
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
