"use client"

import { useEffect, useRef } from "react"

interface ParticleBackgroundProps {
  className?: string
  particleCount?: number
  particleColor?: string
}

interface Bounds {
  width: number
  height: number
}

class Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number

  constructor(bounds: Bounds) {
    this.x = Math.random() * bounds.width
    this.y = Math.random() * bounds.height
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.radius = Math.random() * 2 + 1
  }

  update(bounds: Bounds) {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > bounds.width) this.vx *= -1
    if (this.y < 0 || this.y > bounds.height) this.vy *= -1
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  }
}

export function ParticleBackground({
  className = "",
  particleCount = 50,
  particleColor = "rgba(255, 255, 255, 0.5)",
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const bounds: Bounds = {
      width: canvas.width,
      height: canvas.height,
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(bounds))
    }

    // Animation loop
    const animate = () => {
      bounds.width = canvas.width
      bounds.height = canvas.height

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update(bounds)
        particle.draw(ctx, particleColor)
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [particleCount, particleColor])

  return <canvas ref={canvasRef} className={`absolute inset-0 ${className}`} />
}
