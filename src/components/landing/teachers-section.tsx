'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedTechParticles } from './animated-tech-patterns';
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
} from 'lucide-react';

export function TeachersSection() {
  const items = [
    {
      icon: PenTool,
      title: 'Create Notes PDFs (AI)',
      desc: 'Smart editor to write, polish, translate, add diagrams, and export PDFs.',
    },
    {
      icon: Presentation,
      title: 'Live Class Slides',
      desc: 'Generate presentation slides with explanatory diagrams and images in seconds.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Mocks & Quizzes',
      desc: 'Create from patterns, previous years, exam levels, or subject/topic bases.',
    },
    {
      icon: UsersRound,
      title: 'Sell Premium Content',
      desc: 'Offer mock tests, practice questions, and subscriptions (online/offline).',
    },
    {
      icon: Youtube,
      title: 'Go Live on YouTube',
      desc: 'Connect your channel to host live sessions and collect doubts in real time.',
    },
    {
      icon: Megaphone,
      title: 'WA/Telegram Auto Replies',
      desc: 'Connect groups/channels to auto-answer and resolve doubts 24/7.',
    },
    {
      icon: ShieldCheck,
      title: 'Protect Your Content',
      desc: 'Watermark/trademark protection for premium materials.',
    },
    {
      icon: Gauge,
      title: 'Manage & Grow',
      desc: 'Manage students, payments, and analytics to scale your reach.',
    },
  ];

  const why = [
    {
      icon: Clock,
      title: 'Save Time & Effort',
      desc: 'Create notes, slides, and tests faster with built‑in automation.',
    },
    {
      icon: Wand2,
      title: 'AI Improves Accuracy',
      desc: 'Smart suggestions help fix mistakes and enhance clarity.',
    },
    {
      icon: Bot,
      title: 'Your Daily Assistant',
      desc: 'No tech team required—an assistant for routine tasks and replies.',
    },
    {
      icon: TrendingUp,
      title: 'Boost Your Brand',
      desc: 'Get discovered by students and grow your presence online.',
    },
  ];

  return (
    <section
      id="teachers"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <AnimatedTechParticles particleCount={20} className="opacity-25" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* left visual */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="rounded-2xl border border-border bg-card p-3 shadow-2xl">
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
            <h2 className="mb-4 text-3xl font-bold text-pretty text-foreground md:text-4xl">
              Everything for <span className="gradient-text">Teachers</span>
            </h2>
            <p className="mb-6 text-muted-foreground">
              Create notes and slides, build quizzes and mocks, manage students,
              and sell premium content—powered by Intelligence.
            </p>

            {/* core features */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((it) => (
                <motion.div
                  key={it.title}
                  whileHover={{ y: -5 }}
                  className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/40"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50">
                    <it.icon className="mt-1 h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{it.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {it.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* actions */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/auth/sign-up?role=teacher"
                className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 font-medium text-white transition hover:bg-brand/90"
              >
                Join as Educator Free
              </a>
              <Link
                href="/teacher/branding"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 font-medium text-muted-foreground transition hover:border-brand hover:text-brand"
              >
                Learn about Branding Kit
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
