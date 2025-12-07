'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { AnimatedTechParticles } from './animated-tech-patterns';

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 text-slate-100 md:py-28">
      <AnimatedTechParticles particleCount={25} className="opacity-30" />
      <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-background via-background/90 to-background/70"></div>
      <div className="relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Zap className="mx-auto mb-6 h-12 w-12 animate-pulse text-yellow-400" />
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to{' '}
            <span className="gradient-text">Learn, Practice & Rank</span>?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
            Join Meritranker and prepare smarter with AI. Learn from your
            favorite teachers and master subjects with daily practice.
          </p>
          <Button
            asChild
            size="lg"
            className="group relative transform overflow-hidden px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-brand/40"
          >
            <Link href="/#students">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <div className="mt-4">
            <Link
              href="/#teachers"
              className="inline-flex items-center text-brand underline-offset-4 hover:text-brand/80 hover:underline"
            >
              Are you a teacher? Create for Free →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
