"use client"

import { motion } from "framer-motion"
import { Newspaper, HelpCircle, Youtube, Mic, ImageIcon, ListChecks } from "lucide-react"
import { AnimatedTechParticles } from "./animated-tech-patterns"
export const t = (key: string) => key; // Placeholder translation function

export function AICapabilitiesSection() {

  const items = [
    {
      icon: Newspaper,
      title: "Current Affairs & Job Alerts",
      desc: "Stay updated with daily current affairs, government job notifications, and exam-wise updates - all in one personalized AI feed.",
    },
    {
      icon: HelpCircle,
      title: "Ask AI - Get Instant Answers & Tricks",
      desc: "Type or speak your question and let AI question answer generator explain it step-by-step with easy tricks and shortcuts for quick solving.",
    },
    {
      icon: Youtube,
      title: "YouTube Live Classes & Doubt Sessions",
      desc: "Attend live classes, ask doubts in real time, and get guided learning from your favorite educators.",
    },
    {
      icon: Mic,
      title: "Voice + Screenshot Q&A & Sharing",
      desc: "Ask by voice or share a screenshot - let AI answer your question instantly with clear explanations you can save or share.",
    },
    {
      icon: ImageIcon,
      title: "Visual & Diagram-Based Learning",
      desc: "Understand tough topics with AI-generated diagrams and visual explanations - perfect for self-study and quick revisions.",
    },
    {
      icon: ListChecks,
      title: "Quizzes & Mock Tests (All Exam Patterns)",
      desc: "Take adaptive tests, practice previous year papers, and analyze results with AI-powered feedback to track real progress.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-28 bg-background text-foreground relative overflow-hidden">
      <AnimatedTechParticles particleCount={30} className="opacity-40" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-6 flex items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-pretty bg-gradient-to-r from-primary via-violet-600 to-indigo-600 bg-clip-text text-transparent">AI Intelligence That Accelerates Learning</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">Let AI Intelligence plan, guide, and evaluate your progress - so you focus on smart studying and mastering every subject faster.</p>
          </div>
          <div className="ml-6 shrink-0">
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/20 group animate-fade-in"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <it.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
