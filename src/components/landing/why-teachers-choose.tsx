"use client"

import { Clock, Wand2, Bot, TrendingUp } from "lucide-react"
import { useT } from "./i18n"

export function WhyTeachersChooseSection() {
  const t = useT()
  const items = [
    { icon: Clock, title: t("why.saveTime.title"), desc: t("why.saveTime.desc") },
    { icon: Wand2, title: t("why.aiAccuracy.title"), desc: t("why.aiAccuracy.desc") },
    { icon: Bot, title: t("why.dailyAssistant.title"), desc: t("why.dailyAssistant.desc") },
    { icon: TrendingUp, title: t("why.brandBoost.title"), desc: t("why.brandBoost.desc") },
  ]

  return (
    <section className="py-14 md:py-16 bg-darkBlue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">{t("why.title")}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((w) => (
            <div
              key={w.title}
              className="rounded-xl border border-slate-700/70 bg-slate-800/40 p-4 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <w.icon className="h-5 w-5 text-cyan-400 mt-1" />
                <div>
                  <h4 className="font-medium text-white">{w.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
