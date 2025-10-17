'use client';

import { Clock, Wand2, Bot, TrendingUp } from 'lucide-react';
import { t } from './ai-capabilities-section';

export function WhyTeachersChooseSection() {
  const items = [
    {
      icon: Clock,
      title: t('why.saveTime.title'),
      desc: t('why.saveTime.desc'),
    },
    {
      icon: Wand2,
      title: t('why.aiAccuracy.title'),
      desc: t('why.aiAccuracy.desc'),
    },
    {
      icon: Bot,
      title: t('why.dailyAssistant.title'),
      desc: t('why.dailyAssistant.desc'),
    },
    {
      icon: TrendingUp,
      title: t('why.brandBoost.title'),
      desc: t('why.brandBoost.desc'),
    },
  ];

  return (
    <section className="bg-background py-14 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
          {t('why.title')}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((w) => (
            <div
              key={w.title}
              className="rounded-xl border border-slate-700/70 bg-slate-800/40 p-4 transition-colors hover:border-cyan-500/40"
            >
              <div className="flex items-start gap-3">
                <w.icon className="mt-1 h-5 w-5 text-cyan-400" />
                <div>
                  <h4 className="font-medium text-white">{w.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {w.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
