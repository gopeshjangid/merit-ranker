import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CtaSection } from "@/components/cta-section" // Added CTA Section
import { Footer } from "@/components/footer"
import { AICapabilitiesSection } from "@/components/ai-capabilities-section"
import { StudentsSection } from "@/components/students-section"
import { TeachersSection } from "@/components/teachers-section"
import { ShowcaseSection } from "@/components/showcase-section"
import AppProviders from "@/components/app-providers"
import { WhyTeachersChooseSection } from "@/components/why-teachers-choose"

export const metadata: Metadata = {
  title: "Meritranker | AI Learning App & Teacher Tools for Govt & Competitive Exam Preparation",
  description:
    "Meritranker is an AI learning app for students and teachers. Create smart study materials, prepare for UPSC, government, and competitive exams with free AI tools.",
  alternates: {
    canonical: "https://meritranker.com/",
  },
  openGraph: {
    title: "Meritranker – AI Learning App for Students & Smart Teacher Tools for Exam Preparation",
    description:
      "Meritranker empowers students and teachers with AI tools for UPSC, government, and competitive exam preparation. Create and learn from smart study materials for free.",
    url: "https://meritranker.com/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meritranker - AI-Powered Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meritranker - AI-Powered Learning",
    description:
      "Learn, practice, and succeed. Study from top teachers, attempt mocks, and use AI to plan & revise smarter.",
    images: ["/twitter-image.png"],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-darkBlue selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <AppProviders>
          <HeroSection />
          <AICapabilitiesSection />
          <StudentsSection />
          <TeachersSection />
          <WhyTeachersChooseSection />
          <ShowcaseSection />
          <CtaSection />
        </AppProviders>
      </main>
      <Footer />
    </div>
  )
}
