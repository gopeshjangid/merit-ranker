'use client';

import { motion } from 'framer-motion';
import {
  BookOpenCheck,
  NotebookPen,
  Bot,
  Target,
  LineChart,
  MessageCircle,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AnimatedTechParticles } from './animated-tech-patterns'; // Import new component

const features = [
  {
    icon: Bot,
    title: 'AI Study Planner',
    description:
      'Personalized plans, revision schedules, and smart reminders tailored to your target exam.',
  },
  {
    icon: BookOpenCheck,
    title: 'Learn by Subjects',
    description:
      'Concepts explained by top teachers with topic-wise notes and solved examples.',
  },
  {
    icon: Target,
    title: 'Practice Engine',
    description:
      'Daily practice, chapter tests, previous-year questions, and difficulty-wise drills.',
  },
  {
    icon: NotebookPen,
    title: 'Smart Notes',
    description:
      'Organize, tag, and revise notes with AI summaries and quick recall prompts.',
  },
  {
    icon: LineChart,
    title: 'Mock Tests & Analytics',
    description:
      'Full-length mocks and quizzes with detailed analysis, percentile, and AIR estimates.',
  },
  {
    icon: MessageCircle,
    title: 'Doubt Help 24/7',
    description:
      'Quick AI guidance and teacher-led doubt resolution in communication channels.',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      duration: 0.5,
    },
  },
};

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative bg-background py-20 text-slate-100 md:py-28"
    >
      <AnimatedTechParticles particleCount={40} className="opacity-60" />{' '}
      {/* New animated background */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-background via-background/80 to-background"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why Choose <span className="gradient-text">Meritranker</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Built for Indian government exams. A focused learning system that
            unites teachers, content, practice, and AI.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <Card className="h-full transform border-slate-700/70 bg-slate-800/50 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-cyan-500/20">
                <CardHeader className="pb-4">
                  <motion.div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-teal-500/30 shadow-inner"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <feature.icon className="h-7 w-7 text-cyan-400" />
                  </motion.div>
                  <CardTitle className="text-xl text-slate-100">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
