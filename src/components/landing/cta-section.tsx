"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"
import { AnimatedTechParticles } from "./animated-tech-patterns"

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-background text-foreground relative overflow-hidden">
      <AnimatedTechParticles particleCount={25} className="opacity-20" />
      <div className="absolute inset-0 gradient-primary opacity-5 z-[-1]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Zap className="mx-auto h-12 w-12 text-primary mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Ready to <span className="bg-gradient-to-r from-primary via-violet-600 to-indigo-600 bg-clip-text text-transparent">Learn, Practice & Rank</span> Smarter?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Join Meritranker - your AI study helper and exam preparation partner. Learn smarter, teach smarter, and grow faster with Intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-primary/20"
            >
              <Link href="/auth/sign-up?role=student">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:border-primary/50 text-foreground hover:text-primary rounded-full px-8 py-6 text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              <Link href="/auth/sign-up?role=teacher">
                Create as a Teacher
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
