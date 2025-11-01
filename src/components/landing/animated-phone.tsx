"use client"

import { motion } from "framer-motion"
import { Smartphone } from "lucide-react"

export function AnimatedPhone() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <motion.div
        className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="float-animation relative">
        <motion.div
          className="relative z-10 w-64 h-[500px] mx-auto rounded-[40px] border-[8px] border-card overflow-hidden glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Phone frame */}
          <div className="absolute inset-0 bg-darkBlue">
            {/* Status bar */}
            <div className="h-6 bg-black/20 flex items-center justify-between px-4">
              <div className="w-16 h-2 bg-white/30 rounded-full"></div>
              <div className="w-4 h-2 bg-white/30 rounded-full"></div>
            </div>

            {/* App interface */}
            <div className="p-3 h-full">
              {/* App header */}
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center"
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
                <motion.div className="w-8 h-8 rounded-full bg-primary/30" whileHover={{ scale: 1.1 }} />
              </div>

              {/* App content */}
              <div className="space-y-4">
                {/* Banner */}
                <motion.div
                  className="h-32 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(0, 255, 255, 0)",
                      "0 0 10px rgba(0, 255, 255, 0.3)",
                      "0 0 0 rgba(0, 255, 255, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="text-center">
                    <div className="text-xs font-bold text-primary mb-1">NEW</div>
                    <div className="text-sm font-bold text-white mb-2">Get Your eSIM Now</div>
                    <motion.div
                      className="mx-auto w-20 h-6 rounded-full bg-primary/30 text-xs flex items-center justify-center text-white"
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
                    className="h-14 rounded-lg bg-white/5 p-3 flex items-center"
                    whileHover={{
                      backgroundColor: "rgba(0, 255, 255, 0.1)",
                      x: 5,
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 mr-3"></div>
                    <div>
                      <div className="w-24 h-2 bg-white/30 rounded-full mb-1"></div>
                      <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-10 h-5 rounded-full bg-primary/20"></div>
                    </div>
                  </motion.div>
                ))}

                {/* Bottom navigation */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="h-14 rounded-lg bg-white/5 flex items-center justify-around">
                    {[1, 2, 3, 4].map((item) => (
                      <motion.div
                        key={item}
                        className={`w-8 h-8 rounded-full ${item === 2 ? "bg-primary/30" : "bg-white/10"} flex items-center justify-center`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {item === 2 && <div className="w-4 h-4 rounded-full bg-primary/50"></div>}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reflection effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-[500px] bg-gradient-to-b from-primary/10 to-transparent opacity-30 rounded-[40px] z-20 pointer-events-none"></div>
      </div>
    </div>
  )
}
