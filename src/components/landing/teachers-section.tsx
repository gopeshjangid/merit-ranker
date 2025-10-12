"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedTechParticles } from "./animated-tech-patterns"
import {
  Megaphone,
  PenTool,
  FileSpreadsheet,
  UsersRound,
  Gauge,
  Presentation,
  Youtube,
  ShieldCheck,
  Bot,
  Clock,
  Wand2,
  TrendingUp,
} from "lucide-react"

export function TeachersSection() {
  const items = [
    {
      icon: PenTool,
      title: "Create Notes PDFs (AI)",
      desc: "Smart editor to write, polish, translate, add diagrams, and export PDFs.",
    },
    {
      icon: Presentation,
      title: "Live Class Slides",
      desc: "Generate presentation slides with explanatory diagrams and images in seconds.",
    },
    {
      icon: FileSpreadsheet,
      title: "Mocks & Quizzes",
      desc: "Create from patterns, previous years, exam levels, or subject/topic bases.",
    },
    {
      icon: UsersRound,
      title: "Sell Premium Content",
      desc: "Offer mock tests, practice questions, and subscriptions (online/offline).",
    },
    {
      icon: Youtube,
      title: "Go Live on YouTube",
      desc: "Connect your channel to host live sessions and collect doubts in real time.",
    },
    {
      icon: Megaphone,
      title: "WA/Telegram Auto Replies",
      desc: "Connect groups/channels to auto-answer and resolve doubts 24/7.",
    },
    {
      icon: ShieldCheck,
      title: "Protect Your Content",
      desc: "Watermark/trademark protection for premium materials.",
    },
    {
      icon: Gauge,
      title: "Manage & Grow",
      desc: "Manage students, payments, and analytics to scale your reach.",
    },
  ]

  const why = [
    {
      icon: Clock,
      title: "Save Time & Effort",
      desc: "Create notes, slides, and tests faster with built‑in automation.",
    },
    {
      icon: Wand2,
      title: "AI Improves Accuracy",
      desc: "Smart suggestions help fix mistakes and enhance clarity.",
    },
    {
      icon: Bot,
      title: "Your Daily Assistant",
      desc: "No tech team required—an assistant for routine tasks and replies.",
    },
    {
      icon: TrendingUp,
      title: "Boost Your Brand",
      desc: "Get discovered by students and grow your presence online.",
    },
  ]

  return (
    <section id="teachers" className="py-20 md:py-28 bg-darkBlue relative overflow-hidden">
      <AnimatedTechParticles particleCount={20} className="opacity-25" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left visual */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="rounded-2xl border border-slate-700/70 bg-slate-800/40 p-3 shadow-2xl">
              <Image
                src="/images/teacher-dashboard.jpg"
                alt="Meritranker teacher dashboard preview"
                width={1200}
                height={800}
                className="rounded-xl"
              />
            </div>
          </motion.div>

          {/* right content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pretty mb-4 text-white">
              Everything for <span className="gradient-text">Teachers</span>
            </h2>
            <p className="text-slate-300 mb-6">
              Create notes and slides, build quizzes and mocks, manage students, and sell premium content—powered by
              Intelligence.
            </p>

            {/* core features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="rounded-xl border border-slate-700/70 bg-slate-800/40 p-4 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <it.icon className="h-5 w-5 text-cyan-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">{it.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{it.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/#teachers"
                className="inline-flex items-center justify-center rounded-md bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 font-medium transition"
              >
                Create for Free
              </a>
              <a
                href="/teachers"
                className="inline-flex items-center justify-center rounded-md border border-slate-600 text-slate-200 hover:text-cyan-300 hover:border-cyan-400 px-5 py-3 font-medium transition"
              >
                Explore Teachers Marketplace
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
