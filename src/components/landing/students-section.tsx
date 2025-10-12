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
    <section id="students" className="py-20 md:py-28 bg-darkBlue relative overflow-hidden">
      <AnimatedTechParticles particleCount={20} className="opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pretty mb-4 text-white">
              Built for <span className="gradient-text">Students</span>
            </h2>
            <p className="text-slate-300 mb-6">
              Prepare smarter for SSC, UPSC, Banking, Railways, State PSCs, and more. Everything you need in one app.
            </p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5" />
                  <span className="leading-relaxed">{b}</span>
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
