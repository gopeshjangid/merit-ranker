'use client';

import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

export function AnimatedPhone() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
      />

      <div className="float-animation relative">
        <motion.div
          className="glow relative z-10 mx-auto h-[500px] w-64 overflow-hidden rounded-[40px] border-[8px] border-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Phone frame */}
          <div className="absolute inset-0 bg-background">
            {/* Status bar */}
            <div className="flex h-6 items-center justify-between bg-black/20 px-4">
              <div className="h-2 w-16 rounded-full bg-white/30"></div>
              <div className="h-2 w-4 rounded-full bg-white/30"></div>
            </div>

            {/* App interface */}
            <div className="h-full p-3">
              {/* App header */}
              <div className="mb-4 flex items-center justify-between">
                <motion.div
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/30"
                  whileHover={{ scale: 1.1 }}
                >
                  <Smartphone className="h-4 w-4 text-primary" />
                </motion.div>
                <motion.div
                  className="text-sm font-bold text-primary"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  eSIM Myanmar
                </motion.div>
                <motion.div
                  className="h-8 w-8 rounded-full bg-primary/30"
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              {/* App content */}
              <div className="space-y-4">
                {/* Banner */}
                <motion.div
                  className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-r from-primary/20 to-primary/10"
                  animate={{
                    boxShadow: [
                      '0 0 0 rgba(0, 255, 255, 0)',
                      '0 0 10px rgba(0, 255, 255, 0.3)',
                      '0 0 0 rgba(0, 255, 255, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="text-center">
                    <div className="mb-1 text-xs font-bold text-primary">
                      NEW
                    </div>
                    <div className="mb-2 text-sm font-bold text-white">
                      Get Your eSIM Now
                    </div>
                    <motion.div
                      className="mx-auto flex h-6 w-20 items-center justify-center rounded-full bg-primary/30 text-xs text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Activate
                    </motion.div>
                  </div>
                </motion.div>

                {/* Menu items */}
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    className="flex h-14 items-center rounded-lg bg-white/5 p-3"
                    whileHover={{
                      backgroundColor: 'rgba(0, 255, 255, 0.1)',
                      x: 5,
                    }}
                  >
                    <div className="mr-3 h-8 w-8 rounded-full bg-primary/20"></div>
                    <div>
                      <div className="mb-1 h-2 w-24 rounded-full bg-white/30"></div>
                      <div className="h-2 w-16 rounded-full bg-white/20"></div>
                    </div>
                    <div className="ml-auto">
                      <div className="h-5 w-10 rounded-full bg-primary/20"></div>
                    </div>
                  </motion.div>
                ))}

                {/* Bottom navigation */}
                <div className="absolute right-3 bottom-3 left-3">
                  <div className="flex h-14 items-center justify-around rounded-lg bg-white/5">
                    {[1, 2, 3, 4].map((item) => (
                      <motion.div
                        key={item}
                        className={`h-8 w-8 rounded-full ${item === 2 ? 'bg-primary/30' : 'bg-white/10'} flex items-center justify-center`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {item === 2 && (
                          <div className="h-4 w-4 rounded-full bg-primary/50"></div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reflection effect */}
        <div className="pointer-events-none absolute top-0 left-1/2 z-20 h-[500px] w-64 -translate-x-1/2 transform rounded-[40px] bg-gradient-to-b from-primary/10 to-transparent opacity-30"></div>
      </div>
    </div>
  );
}
