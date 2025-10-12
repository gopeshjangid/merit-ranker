"use client"

import { motion } from "framer-motion"
import { Newspaper, HelpCircle, Youtube, Mic, ImageIcon, ListChecks } from "lucide-react"
import { AnimatedTechParticles } from "./animated-tech-patterns"
import { useT, LanguageSwitcher } from "./i18n"

export function AICapabilitiesSection() {
  const t = useT()

  const items = [
    {
      icon: Newspaper,
      title: t("ai.features.currentAffairs.title"),
      desc: t("ai.features.currentAffairs.desc"),
    },
    {
      icon: HelpCircle,
      title: t("ai.features.askAnyQuestion.title"),
      desc: t("ai.features.askAnyQuestion.desc"),
    },
    {
      icon: Youtube,
      title: t("ai.features.youtubeLive.title"),
      desc: t("ai.features.youtubeLive.desc"),
    },
    {
      icon: Mic,
      title: t("ai.features.voiceScreenshot.title"),
      desc: t("ai.features.voiceScreenshot.desc"),
    },
    {
      icon: ImageIcon,
      title: t("ai.features.diagramExplanations.title"),
      desc: t("ai.features.diagramExplanations.desc"),
    },
    {
      icon: ListChecks,
      title: t("ai.features.quizzesMocks.title"),
      desc: t("ai.features.quizzesMocks.desc"),
    },
  ]

  return (
    <section id="features" className="py-20 md:py-28 bg-darkBlue text-slate-100 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-pretty">{t("ai.title")}</h2>
            <p className="text-slate-300 mt-3 max-w-2xl">{t("ai.desc")}</p>
          </div>
          <div className="ml-6 shrink-0">
            <LanguageSwitcher />
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
              className="rounded-xl border border-slate-700/70 bg-slate-800/40 p-6 shadow-xl hover:shadow-cyan-500/20 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/30 flex items-center justify-center border border-cyan-500/30 mb-4">
                <it.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
