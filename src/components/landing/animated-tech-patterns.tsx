"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  opacity: number
  color: string
}

export function AnimatedTechParticles({ particleCount = 30, className = "" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameIdRef = useRef<number>()

  // Using teal colors from your theme, adjust opacity directly
  const tealColors = ["rgba(0, 255, 255, 1)", "rgba(45, 212, 191, 1)"] // Full opacity, will be modulated

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let parentRect: DOMRect | undefined

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        parentRect = parent.getBoundingClientRect()
        canvas.width = parentRect.width
        canvas.height = parentRect.height
      } else {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      initializeParticles()
    }

    const initializeParticles = () => {
      particlesRef.current = []
      if (!canvas) return
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5, // Smaller particles
          vx: (Math.random() - 0.5) * 0.2, // Slower movement
          vy: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.3 + 0.05, // More subtle opacity
          color: tealColors[Math.floor(Math.random() * tealColors.length)],
        })
      }
    }

    const drawParticles = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particlesRef.current.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = p.color.replace(/,\s*1\)$/, `, ${p.opacity})`) // Apply opacity
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        // Wrap particles around the screen
        if (p.x + p.radius < 0) p.x = canvas.width + p.radius
        if (p.x - p.radius > canvas.width) p.x = -p.radius
        if (p.y + p.radius < 0) p.y = canvas.height + p.radius
        if (p.y - p.radius > canvas.height) p.y = -p.radius
      })
    }

    const animate = () => {
      drawParticles()
      animationFrameIdRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    // Use a timeout to ensure parent dimensions are likely settled
    const timeoutId = setTimeout(resizeCanvas, 50)

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      clearTimeout(timeoutId)
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, [particleCount])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full z-[-1] ${className}`} />
}

export function AnimatedTechLines({ className = "" }) {
  return (
    <div className={`absolute inset-0 w-full h-full z-[-1] overflow-hidden ${className}`}>
      <motion.div
        className="absolute w-[300%] h-[300%] opacity-[0.07]" // More subtle
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 255, 255, 0.2) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(0, 255, 255, 0.2) 0.5px, transparent 0.5px)",
          backgroundSize: "40px 40px", // Slightly larger grid
        }}
        animate={{ x: ["0%", "-10%"], y: ["0%", "-10%"] }} // Slower, less drastic movement
        transition={{
          duration: 30, // Slower animation
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "linear",
        }}
      />
    </div>
  )
}
