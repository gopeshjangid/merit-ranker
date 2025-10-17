'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Building2 } from 'lucide-react'; // Using Building2 for a slightly different icon
import { AnimatedLogo } from './animated-logo';
import { AnimatedTechParticles } from './animated-tech-patterns'; // Using particles for this section

const providers = [
  {
    name: 'MPT',
    description: "Myanmar's largest telecom provider with nationwide coverage",
    color: 'bg-blue-500', // Keep existing colors for brand association
  },
  {
    name: 'ATOM',
    description: 'Fast and reliable service with competitive pricing',
    color: 'bg-green-500',
  },
  {
    name: 'OOREDOO',
    description: 'High-speed data with excellent urban coverage',
    color: 'bg-red-500',
  },
  {
    name: 'MYTEL',
    description: 'Affordable plans with strong rural coverage',
    color: 'bg-yellow-500',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 12,
      duration: 0.4,
    },
  },
};

export function ProvidersSection() {
  return (
    <section
      id="providers"
      className="relative overflow-hidden bg-background py-20 text-slate-100 md:py-28"
    >
      <AnimatedTechParticles particleCount={30} className="opacity-40" />
      <div className="absolute inset-0 z-[-1] bg-background/70 backdrop-blur-sm"></div>{' '}
      {/* Slight blur for depth */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Building2 className="mx-auto mb-4 h-12 w-12 text-cyan-400" />
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Choose Your <span className="gradient-text">Provider</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Select from Myanmar's leading telecom networks for your eSIM,
            ensuring broad coverage and reliable service.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {providers.map((provider, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <Card className="flex h-full transform flex-col overflow-hidden border-slate-700/80 bg-slate-800/60 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/60 hover:shadow-cyan-500/30">
                <div className={`h-2.5 ${provider.color}`}></div>
                <CardContent className="flex flex-grow flex-col items-center px-6 pt-8 pb-6 text-center">
                  <div className="mb-5">
                    <AnimatedLogo name={provider.name} color={provider.color} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-100">
                    {provider.name}
                  </h3>
                  <p className="mb-6 flex-grow text-sm text-slate-300">
                    {provider.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group relative mt-auto overflow-hidden border-slate-600 text-slate-300 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <span className="relative z-10">View Plans</span>
                    <ChevronRight className="relative z-10 ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    <motion.div
                      className="absolute inset-0 bg-cyan-400/10"
                      initial={{ scaleX: 0, originLeft: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
