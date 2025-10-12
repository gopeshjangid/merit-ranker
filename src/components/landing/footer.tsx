"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"
import { usePathname } from "next/navigation" // Import usePathname
import { cn } from "@/lib/utils" // Import cn

export function Footer() {
  const phoneNumber = "+91 00000 00000"
  const telLink = "tel:+910000000000"
  const emailAddress = "hello@meritranker.com"
  const mailtoLink = "mailto:hello@meritranker.com"
  const pathname = usePathname() // Get current path

  const quickLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#students", label: "For Students" },
    { href: "/#teachers", label: "For Teachers" },
    { href: "/faq", label: "FAQ" },
  ]

  const supportLinks = [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ]

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-text">Meritranker</h3>
            <p className="text-sm text-foreground/70">
              AI-powered learning platform for Indian government exam preparation. Learn from the best, practice daily,
              and rank higher.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors p-1 rounded-full hover:bg-primary/10"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors p-1 rounded-full hover:bg-primary/10"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors p-1 rounded-full hover:bg-primary/10"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-foreground/70 hover:text-primary transition-colors animated-underline",
                      pathname === link.href && "text-primary font-semibold",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 group">
                <Mail className="h-4 w-4 text-primary/80 group-hover:text-primary transition-colors" />
                <a
                  href={mailtoLink}
                  className="text-foreground/70 hover:text-primary transition-colors animated-underline"
                >
                  {emailAddress}
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <Phone className="h-4 w-4 text-primary/80 group-hover:text-primary transition-colors" />
                <a
                  href={telLink}
                  className="text-foreground/70 hover:text-primary transition-colors animated-underline"
                >
                  {phoneNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Meritranker. All rights reserved. Built on Vercel.</p>
        </div>
      </div>
    </footer>
  )
}
