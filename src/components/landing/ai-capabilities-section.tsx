'use client';

import { motion } from 'framer-motion';
import {
  Newspaper,
  HelpCircle,
  Youtube,
  Mic,
  ImageIcon,
  ListChecks,
} from 'lucide-react';
import { AnimatedTechParticles } from './animated-tech-patterns';
export const t = (key: string) => key; // Placeholder translation function

export function AICapabilitiesSection() {
  const items = [
    {
      icon: Newspaper,
      title: t('ai.features.currentAffairs.title'),
      desc: t('ai.features.currentAffairs.desc'),
    },
    {
      icon: HelpCircle,
      title: t('ai.features.askAnyQuestion.title'),
      desc: t('ai.features.askAnyQuestion.desc'),
    },
    {
      icon: Youtube,
      title: t('ai.features.youtubeLive.title'),
      desc: t('ai.features.youtubeLive.desc'),
    },
    {
      icon: Mic,
      title: t('ai.features.voiceScreenshot.title'),
      desc: t('ai.features.voiceScreenshot.desc'),
    },
    {
      icon: ImageIcon,
      title: t('ai.features.diagramExplanations.title'),
      desc: t('ai.features.diagramExplanations.desc'),
    },
    {
      icon: ListChecks,
      title: t('ai.features.quizzesMocks.title'),
      desc: t('ai.features.quizzesMocks.desc'),
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-background py-20 text-slate-100 md:py-28"
    >
      <AnimatedTechParticles particleCount={30} className="opacity-40" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-6 flex items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-left">
            <h2 className="text-3xl font-bold text-pretty md:text-4xl">
              {t('ai.title')}
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">{t('ai.desc')}</p>
          </div>
          <div className="ml-6 shrink-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-xl border border-slate-700/70 bg-slate-800/40 p-6 shadow-xl transition-all hover:shadow-cyan-500/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-teal-500/30">
                <it.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{it.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
