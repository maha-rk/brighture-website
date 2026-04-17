"use client"

import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <main className="space-y-40">

      {/* VIDEO HERO — ROBOTICS / AI */}
      <section className="relative min-h-screen overflow-hidden bg-black">

        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/video/robot-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#050a18]/70" />

        {/* Electric blue energy wash */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(37,99,235,0.5),transparent_65%)]" />

        {/* Grain / texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[url('/noise.png')]" />

        {/* Foreground Content */}
        <div className="relative z-10 min-h-screen flex items-center px-10">
          <div className="max-w-6xl">
            <h1 className="text-[clamp(3.8rem,7.5vw,6.5rem)] font-semibold leading-[1.05]">
              Engineering Human
              <br />
              Intelligence
              <br />
              for the AI Future
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-white/80">
              Building AI innovation labs, robotics ecosystems, and
              future‑ready intelligent systems for the next generation.
            </p>
          </div>
        </div>

      </section>

      {/* Philosophy Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-10"
      >
        <p className="text-3xl max-w-4xl leading-relaxed">
          The future will not be automated.
          <br />
          <span className="text-white/70">It will be engineered.</span>
        </p>
      </motion.section>

    </main>
  )
}
``