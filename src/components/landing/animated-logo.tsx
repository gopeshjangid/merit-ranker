"use client"

import { motion } from "framer-motion"

export function AnimatedLogo({ name, color = "bg-blue-500", className = "" }) {
  return (
    <motion.div
      className={`relative w-16 h-16 rounded-full ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background circle with pulse effect */}
      <motion.div
        className={`absolute inset-0 rounded-full ${color} opacity-20`}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Main circle */}
      <motion.div className={`absolute inset-0 rounded-full ${color} opacity-80 flex items-center justify-center`}>
        <span className="text-white font-bold text-sm">{name}</span>
      </motion.div>

      {/* Orbit effect */}
      <motion.div
        className="absolute inset-[-5px] rounded-full border border-white/20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/80" />
      </motion.div>
    </motion.div>
  )
}
