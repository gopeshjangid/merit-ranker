"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedCircle({
  size = 100,
  color = "rgba(0, 255, 255, 0.2)",
  duration = 20,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        filter: "blur(10px)",
      }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -30, 20, -10, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    />
  )
}

export function AnimatedGrid({ className = "" }) {
  return <div className={`grid-pattern absolute inset-0 opacity-30 ${className}`} />
}

export function AnimatedDots({ className = "" }) {
  return <div className={`dots-pattern absolute inset-0 opacity-30 ${className}`} />
}

export function AnimatedWave({ className = "" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, "rgba(0, 255, 255, 0.2)")
      gradient.addColorStop(0.5, "rgba(0, 255, 255, 0.5)")
      gradient.addColorStop(1, "rgba(0, 255, 255, 0.2)")

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2

      for (let i = 0; i < 3; i++) {
        ctx.beginPath()

        const amplitude = 20 - i * 5
        const frequency = 0.02
        const phase = i * 0.5

        for (let x = 0; x < canvas.width; x++) {
          const y = amplitude * Math.sin(frequency * x + time + phase) + canvas.height / 2
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}

export function AnimatedGradient({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 opacity-20 ${className}`}
      style={{
        background: "linear-gradient(45deg, rgba(0, 255, 255, 0.3), rgba(0, 100, 255, 0.1))",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
      }}
    />
  )
}

export function AnimatedBlob({ className = "" }) {
  return (
    <motion.div
      className={`absolute rounded-full bg-primary/20 blur-3xl ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        borderRadius: ["50%", "40%", "50%"],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  )
}
