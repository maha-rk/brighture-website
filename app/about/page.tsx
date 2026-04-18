"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main
      className="bg-black text-white overflow-hidden pt-12"
      style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(140,140,140,0.18) 25%, rgba(140,140,140,0.18) 26%, transparent 27%, transparent 74%, rgba(140,140,140,0.18) 75%, rgba(140,140,140,0.18) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(140,140,140,0.18) 25%, rgba(140,140,140,0.18) 26%, transparent 27%, transparent 74%, rgba(140,140,140,0.18) 75%, rgba(140,140,140,0.18) 76%, transparent 77%, transparent)
        `,
        backgroundSize: "50px 50px",
        backgroundAttachment: "fixed",
      }}
    >
      {/* ================= INTRO ================= */}
      <section className="relative px-16 pt-16 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* LEFT — TEXT */}
        <div className="relative max-w-xl">
          {/* HEADLINE */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 55,
              damping: 20,
              mass: 0.9,
            }}
            className="inline-block"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              building the infrastructure
              <br />
              of the intelligent age.
            </h1>

            {/* Divider */}
            <div className="mt-3 h-px w-[calc(100%+1.25rem)] bg-white/50" />
          </motion.div>

          {/* BODY COPY */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.25,
            }}
            className="mt-8 space-y-6 text-lg text-white/70"
          >
            {/* Paragraph 1 — context */}
            <p>
              The rapid advancement of artificial intelligence has outpaced the
              systems designed to support it. Institutions are expected to
              prepare for an intelligent future without access to the
              environments or infrastructure required to do so meaningfully.
            </p>

            {/* Paragraph 2 — italicised intent */}
            <p className="italic text-white/80">
              Brighture exists to close this gap.
            </p>

            {/* Paragraph 3 — execution */}
            <p>
              We enable schools, universities, research centers, and
              organizations to create hands‑on environments where intelligence
              can be explored, tested, and applied in real‑world contexts —
              bringing structure, experimentation, and long‑term capability
              together.
            </p>
          </motion.div>
        </div>

        {/* RIGHT — VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.1,
            ease: "easeOut",
            delay: 0.35,
          }}
          className="relative mt-24 h-[420px] rounded-3xl overflow-hidden bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.18)]"
        >
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={(e) => {
              const video = e.currentTarget;
              video.pause();
              video.currentTime = video.duration;
            }}
          >
            <source src="/video/robot-fingers.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/18 pointer-events-none" />
        </motion.div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="px-16 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl bg-white/10 p-12"
        >
          <p className="text-xs uppercase tracking-[0.14em] text-blue-400 mb-4">
            Mission
          </p>
          <p className="text-lg leading-relaxed text-white/90">
            To engineer innovation ecosystems that empower institutions and
            enterprises to develop technologies and talent for the AI‑driven
            future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="rounded-2xl bg-white/10 p-12"
        >
          <p className="text-xs uppercase tracking-[0.14em] text-purple-400 mb-4">
            Vision
          </p>
          <p className="text-lg leading-relaxed text-white/90">
            To advance human intelligence and innovation in the age of artificial
            intelligence.
          </p>
        </motion.div>
      </section>
    </main>
  );
}