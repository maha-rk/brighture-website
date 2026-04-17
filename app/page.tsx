"use client"

import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <main className="space-y-40">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative min-h-screen flex items-center px-10 overflow-hidden"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.14),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[url('/noise.png')]" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-tight">
            Engineering Human Intelligence
            <br />
            for the AI Future
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-white/70">
            Building AI innovation labs, robotics ecosystems, and future‑ready
            learning environments for the next generation.
          </p>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-10"
      >
        <p className="text-3xl max-w-4xl leading-relaxed">
          The future will not be automated.
          <br />
          <span className="text-white/70">It will be engineered.</span>
        </p>
      </motion.section>

      {/* Framework Overview */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-10"
      >
        <h2 className="text-4xl mb-20">
          Global Innovation Lab Framework
        </h2>

        <ul className="space-y-6 text-xl text-white/80">
          <li>Technology Infrastructure</li>
          <li>Experiential Learning</li>
          <li>Innovation Culture</li>
          <li>Institutional Capability</li>
        </ul>
      </motion.section>

      {/* Flagship Focus */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-10"
      >
        <h2 className="text-4xl mb-10">
          AI Forklift Safety System
        </h2>

        <p className="text-xl max-w-3xl text-white/80 leading-relaxed">
          Transforming industrial vehicles into intelligent, perceptive systems
          capable of real‑time awareness and autonomous safety decisions.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-10 pb-40"
      >
        <h2 className="text-4xl max-w-4xl leading-tight">
          The future isn’t something you study.
          <br />
          <span className="text-white/70">It’s something you build.</span>
        </h2>
      </motion.section>

    </main>
  )
}