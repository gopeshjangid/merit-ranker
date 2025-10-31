"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedTechParticles } from "./animated-tech-patterns"
import { CheckCircle2 } from "lucide-react"

export function StudentsSection() {
  const bullets = [
    "Learn from your favorite teachers with structured courses",
    "Manage notes and study from them with instant summaries",
    "Solve Advanced Maths and Reasoning questions with step-by-step solutions",
    "Generate unlimited GK/English questions with new patterns and predicted questions",
    "Stay up to date: exam notifications and current affairs in one feed",
    "Track your progress with detailed analytics",
    "Daily Current Affairs and Job Notifications in one feed",
    "Ask any complex question and get simple, exam-smart tricks",
    "Connect YouTube to attend Live Classes and doubt sessions",
    "Ask by Voice, scan screenshots, and share solutions with friends",
    "Understand solutions with clear, step-by-step diagrams",
    "Attempt Quizzes/Mock Tests with mixed patterns and new questions",
  ]
  return (
    <section id="students" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <AnimatedTechParticles particleCount={20} className="opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pretty mb-4 text-foreground">
              Built for <span className="bg-gradient-to-r from-primary via-violet-600 to-indigo-600 bg-clip-text text-transparent">Students</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Your one-stop AI study platform for SSC, UPSC, Railway, Banking, and all
              government exams. Prepare smarter - not harder.
            </p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="rounded-2xl border border-slate-700/70 bg-slate-800/40 p-3 shadow-2xl">
              <Image
                src="/images/students-app.jpg"
                alt="Meritranker student app preview showing courses, practice, and notes"
                width={1200}
                height={800}
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
