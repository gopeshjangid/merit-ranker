"use client"

import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { FloatingActionButton } from '@/components/landing/floating-action-button'

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Hide navbar and footer for teacher dashboard routes
  const isTeacherDashboard = pathname?.startsWith('/teacher/dashboard')

  return (
    <>
      {!isTeacherDashboard && <Navbar />}
      {children}
      {!isTeacherDashboard && <Footer />}
      {!isTeacherDashboard && <FloatingActionButton />}
    </>
  )
}
