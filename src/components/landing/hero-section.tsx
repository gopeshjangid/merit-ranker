"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Zap } from "lucide-react"
import { AnimatedCircle } from "./animated-shapes"
import { AnimatedTechLines } from "./animated-tech-patterns"
import Link from "next/link" // Import Link
import { Smartphone } from "lucide-react"

const MODES = ["student", "teacher"] as const
type Mode = (typeof MODES)[number]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mode, setMode] = useState<Mode>("student")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setMode((m) => (m === "student" ? "teacher" : "student"))
    }, 6000)
    return () => clearInterval(id)
  }, [])

  const headlineText =
    mode === "student"
      ? "Learn. Practice. Rank. with Intelligence on Meritranker"
      : "Create for Free. Share your knowledge with Meritranker."
  const headlineWords = headlineText.split(" ")
  const gradientWords = ["Learn.", "Practice.", "Rank.", "Meritranker", "Create for Free."] // Words to apply gradient to

  const subHeadlineText =
    mode === "student"
      ? "All-in-one platform for Indian government exam prep. Learn from your favorite teachers, practice topic-wise, manage notes, and let Intelligence plan your day."
      : "Create, polish, and sell notes; build mocks and quizzes instantly; manage students with Intelligence-backed automations—grow your personal brand and reach."

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08, // Slightly adjusted delay for better flow
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  }

  if (!mounted) {
    // Basic static fallback for SSR or if JS is disabled (improves LCP)
    return (
      <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center bg-darkBlue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                {headlineText}
              </h1>
              <p className="text-lg md:text-xl mb-10 text-slate-300 max-w-xl mx-auto lg:mx-0">{subHeadlineText}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/#students">
                    <Zap className="mr-2 h-5 w-5 text-yellow-300" />
                    Start Learning Free
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#teachers">
                    Create for Free
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative mt-12 lg:mt-0">
              {/* Simplified phone for no-JS, or could be a static image */}
              <div className="relative z-10 w-64 h-[500px] mx-auto rounded-[40px] border-[8px] border-card overflow-hidden bg-slate-700 flex items-center justify-center">
                <Smartphone className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      <AnimatedTechLines className="opacity-70" />
      <div className="absolute inset-0 hero-gradient opacity-60"></div>
      <AnimatedCircle size={250} color="rgba(0, 255, 255, 0.07)" className="top-10 left-5 animate-pulse" />
      <AnimatedCircle
        size={350}
        color="rgba(0, 255, 255, 0.04)"
        className="bottom-10 right-5 animate-pulse"
        delay={1.5}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              aria-label={headlineText}
            >
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={wordVariants}
                  className={`inline-block mr-2 ${gradientWords.includes(word) ? "gradient-text" : "text-white"}`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 mb-4"
              variants={itemVariants}
            >
              {/* Highlight performance line as requested */}
              <span className="text-sm text-cyan-200">
                faster, Accurate, complex solver more than CHATGPT, specially designed for govt jobs exams
              </span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl mb-10 text-slate-300 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              {subHeadlineText}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {/* tabs: Student / Teacher */}
              <div
                role="tablist"
                aria-label="Audience view"
                className="mb-2 flex items-center justify-center lg:justify-start gap-2"
              >
                <button
                  role="tab"
                  aria-selected={mode === "student"}
                  onClick={() => setMode("student")}
                  className={`rounded-full px-3 py-1 text-sm border transition ${
                    mode === "student"
                      ? "border-cyan-400 text-cyan-200"
                      : "border-slate-700 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Student
                </button>
                <button
                  role="tab"
                  aria-selected={mode === "teacher"}
                  onClick={() => setMode("teacher")}
                  className={`rounded-full px-3 py-1 text-sm border transition ${
                    mode === "teacher"
                      ? "border-cyan-400 text-cyan-200"
                      : "border-slate-700 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Teacher
                </button>
              </div>

              {/* primary CTA switches with mode */}
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <Link href={mode === "student" ? "/auth/sign-up?role=student" : "/auth/sign-up?role=teacher"}>
                  <Zap className="mr-2 h-5 w-5 text-yellow-300 group-hover:animate-pulse" />
                  <span className="relative z-10">
                    {mode === "student" ? "Start Learning Free" : "Create Notes Free"}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ scaleY: 0, originY: "bottom" }}
                    whileHover={{ scaleY: 1, originY: "bottom" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>
              </Button>

              {/* secondary CTA keeps the other audience quick link */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Link href={mode === "student" ? "/teacher/branding" : "/auth/sign-in"}>
                  <span className="relative z-10">{mode === "student" ? "Teacher Branding" : "Sign In"}</span>
                  <ChevronRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <motion.div
                    className="absolute inset-0"
                    initial={{ boxShadow: "inset 0 0 0 0px hsl(var(--primary))" }}
                    whileHover={{ boxShadow: "inset 0 0 0 2px hsl(var(--primary))" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>
              </Button>
            </motion.div>

            {mode === "teacher" && (
              <div className="mt-3 text-sm text-slate-400 text-center lg:text-left">
                <Link href="/teacher/dashboard" className="underline underline-offset-4 hover:text-cyan-300">
                  Open Teacher Dashboard
                </Link>
              </div>
            )}
          </motion.div>

          <motion.div
            className="flex-1 relative mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 60 }}
          >
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              aria-live="polite"
            >
              {mode === "student" ? (
                <div
                  className="relative z-10 w-[280px] sm:w-[320px] md:w-[360px] h-[560px] mx-auto rounded-[32px] border-[8px] border-card overflow-hidden bg-card/80 backdrop-blur"
                  aria-label="Student mobile app view"
                >
                  <img
                    src="/images/students-app.jpg"
                    alt="Student app: chat with subjects and math solution preview"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  {/* subtle phone notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 rounded-b-2xl bg-background/80" />
                </div>
              ) : (
                <div
                  className="relative z-10 mx-auto w-full max-w-[760px] rounded-xl border border-card bg-card/80 backdrop-blur"
                  aria-label="Teacher desktop dashboard view"
                >
                  {/* window top bar */}
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-green-400/80" />
                    <span className="ml-3 text-xs text-muted-foreground">
                      Meritranker • Notes, Mocks, Subscriptions
                    </span>
                  </div>
                  <div className="aspect-[16/9]">
                    <img
                      src="/images/teacher-dashboard.jpg"
                      alt="Teacher dashboard: notion-style notes, mock creation, and management"
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
