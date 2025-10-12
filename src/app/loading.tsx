"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Wifi, Server, Smartphone, CheckCircle } from "lucide-react" // Icons for stages
import { AnimatedTechParticles } from "@/components/animated-tech-patterns" // Re-use existing cool background

const loadingStages = [
  { text: "Initializing connection...", icon: Wifi, duration: 2000 }, // Duration for this stage
  { text: "Fetching network profiles...", icon: Server, duration: 2500 },
  { text: "Optimizing for your device...", icon: Smartphone, duration: 2000 },
  { text: "Finalizing setup...", icon: CheckCircle, duration: 1500 },
]

export default function Loading() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let totalDuration = 0
    loadingStages.forEach((stage) => (totalDuration += stage.duration))

    let accumulatedDelay = 0
    const overallProgress = 0

    const stageTimeouts = loadingStages.map((stage, index) => {
      const timeoutId = setTimeout(() => {
        setCurrentStageIndex(index)
      }, accumulatedDelay)
      accumulatedDelay += stage.duration
      return timeoutId
    })

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Increment progress based on total expected time
        // This is a smoother simulation than jumping per stage
        return prev + 100 / (totalDuration / 50) // Update every 50ms
      })
    }, 50)

    return () => {
      stageTimeouts.forEach(clearTimeout)
      clearInterval(progressInterval)
    }
  }, [])

  const CurrentIcon = loadingStages[currentStageIndex].icon

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-darkBlue text-slate-200 p-4 overflow-hidden">
      <AnimatedTechParticles particleCount={35} className="opacity-40" />

      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.03), rgba(30, 47, 60, 0) 70%)",
        }}
        animate={{ scale: [1, 1.03, 1], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-3xl sm:text-4xl font-bold text-teal-400">eSIM</span>
          <span className="text-3xl sm:text-4xl font-bold text-white"> Myanmar</span>
        </motion.div>

        <motion.div
          className="relative w-24 h-24 sm:w-28 sm:h-28 mb-10"
          animate={{ rotate: [0, 15, -10, 5, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <CurrentIcon className="w-full h-full text-cyan-400 opacity-80" />
          <motion.div
            className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-1.5 border-2 border-cyan-500/50 rounded-full"
            animate={{ scale: [1.1, 0.9, 1.1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentStageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-lg sm:text-xl text-slate-100 mb-6 h-12 flex items-center justify-center px-2" // Fixed height for message area
          >
            {loadingStages[currentStageIndex].text}
          </motion.p>
        </AnimatePresence>

        <div className="w-full max-w-sm mb-3">
          <div className="bg-slate-700/50 rounded-full h-3 overflow-hidden border border-slate-600/50 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-teal-400 to-cyan-500 h-full rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: "linear" }} // Faster update for smoother look
            >
              {/* Shimmer effect on progress bar */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.div>
          </div>
          <div className="text-right text-xs text-slate-400 mt-1.5 px-1">
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        <motion.div
          className="text-xs text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Powered by Vercel & GSMA Standards
        </motion.div>
      </div>
    </div>
  )
}
