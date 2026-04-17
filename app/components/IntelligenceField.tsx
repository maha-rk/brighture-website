"use client"

import { useEffect, useRef } from "react"

export default function IntelligenceField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resize)

    let t = 0

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Base dark background (keeps richness)
      ctx.fillStyle = "rgba(0,0,0,1)"
      ctx.fillRect(0, 0, width, height)

      t += 0.002

      // Flowing gradient field #1 (blue → violet)
      const g1 = ctx.createRadialGradient(
        width * (0.3 + Math.sin(t) * 0.1),
        height * (0.4 + Math.cos(t * 0.9) * 0.1),
        width * 0.1,
        width / 2,
        height / 2,
        width
      )
      g1.addColorStop(0, "rgba(120,140,255,0.12)")
      g1.addColorStop(0.5, "rgba(90,80,200,0.08)")
      g1.addColorStop(1, "rgba(0,0,0,0)")

      ctx.fillStyle = g1
      ctx.fillRect(0, 0, width, height)

      // Flowing gradient field #2 (deep violet)
      const g2 = ctx.createRadialGradient(
        width * (0.7 + Math.cos(t * 1.1) * 0.1),
        height * (0.6 + Math.sin(t * 0.8) * 0.1),
        width * 0.2,
        width / 2,
        height / 2,
        width
      )
      g2.addColorStop(0, "rgba(180,100,255,0.10)")
      g2.addColorStop(0.6, "rgba(90,60,180,0.06)")
      g2.addColorStop(1, "rgba(0,0,0,0)")

      ctx.fillStyle = g2
      ctx.fillRect(0, 0, width, height)

      // Rare orange intelligence pulse (very subtle)
      const pulse = (Math.sin(t * 0.7) + 1) / 2
      if (pulse > 0.98) {
        const g3 = ctx.createRadialGradient(
          width * 0.5,
          height * 0.5,
          0,
          width * 0.5,
          height * 0.5,
          width * 0.6
        )
        g3.addColorStop(0, "rgba(233,113,50,0.05)")
        g3.addColorStop(1, "rgba(0,0,0,0)")

        ctx.fillStyle = g3
        ctx.fillRect(0, 0, width, height)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
    />
  )
}
