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
    <section id="teachers" className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <AnimatedTechParticles particleCount={20} className="opacity-20" />
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
            <div className="rounded-2xl bg-card border border-border p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
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
            <h2 className="text-3xl md:text-4xl font-bold text-pretty mb-4 text-foreground">
              Everything for <span className="bg-gradient-to-r from-primary via-violet-600 to-indigo-600 bg-clip-text text-transparent">Teachers</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Create notes, quizzes, mock tests, and sell premium content with AI tools for
              teachers. Automate replies, manage students, and earn online with ease.
            </p>

            {/* core features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="bg-card border border-border rounded-xl p-4 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20"
                >
                  <div className="flex items-start gap-3">
                    <it.icon className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="font-semibold text-foreground">{it.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/auth/sign-up?role=teacher"
                className="bg-gradient-to-r from-primary via-violet-600 to-indigo-600 hover:from-primary/90 hover:via-violet-600/90 hover:to-indigo-600/90 text-primary-foreground inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-violet-500/20"
              >
                Create for Free
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm text-foreground hover:text-primary px-6 py-3 font-semibold transition-all duration-200 hover:scale-105 hover:bg-primary/5"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
