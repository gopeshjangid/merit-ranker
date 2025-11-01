"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedTechParticles } from "./animated-tech-patterns"

export function ShowcaseSection() {
  const cards = [
    { src: "/images/mocks-and-quizzes.jpg", alt: "AI Notes & Smart Revisions", caption: "AI Notes & Smart Revisions" },
    { src: "/images/notes-and-revision.jpg", alt: "Mocks & Quizzes", caption: "Mocks & Quizzes" },
    {
      src: "/images/whatsapp-telegram.jpg",
      alt: "Telegram & WhatsApp Auto Replies",
      caption: "Telegram & WhatsApp Auto Replies",
    },
    { src: "/images/youtube-notes.jpg", alt: "YouTube → Notes Automation", caption: "YouTube → Notes Automation" },
    { src: "/images/ai-assistant.jpg", alt: "AI Personal Study Assistant", caption: "AI Personal Study Assistant" },
  ]
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <AnimatedTechParticles particleCount={16} className="opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-pretty text-foreground">
            What You Get in <span className="bg-gradient-to-r from-primary via-violet-600 to-indigo-600 bg-clip-text text-transparent">Meritranker</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-lg">
            Experience an all-in-one platform for students and teachers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.figure
              key={card.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl overflow-hidden bg-card border border-border shadow-xl group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/20"
            >
              <Image
                src={card.src || "/placeholder.svg"}
                alt={card.alt}
                width={1200}
                height={800}
                className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="p-4 text-center text-foreground font-medium">{card.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
