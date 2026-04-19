"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ---------------------------------------
   Reusable fade-in / fade-out section
---------------------------------------- */
function FadeSection(
  props: React.PropsWithChildren<{ className?: string }>
) {
  const { children, className = "" } = props;

  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    margin: "-20% 0px -20% 0px",
  });

  return (
    <motion.section
      ref={ref}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 24,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ---------------------------------------
   Dirty white background with black grid
---------------------------------------- */
const LIGHT_GRID_BG: React.CSSProperties = {
  backgroundColor: "#f5f5f4",
  backgroundImage: `
    linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
  `,
  backgroundSize: "24px 24px",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white overflow-hidden pt-12">

      {/* ================= HERO / INTRO ================= */}
      <section className="relative px-16 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* GRID — HERO */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            building the infrastructure
            <br />
            of the intelligent age.
          </motion.h1>

          <div className="mt-3 h-px w-[calc(100%+1.25rem)] bg-white/50" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="mt-8 space-y-6 text-lg text-white/70 leading-relaxed"
          >
            <p>
              Artificial intelligence is transforming every industry. Yet
              institutions often lack the infrastructure needed where emerging
              technologies—robotics, autonomous systems, intelligent devices—can
              be explored, tested, and deployed in real contexts.
            </p>

            <p className="italic text-[#d6b36a]/80">
              Brighture exists to close this gap.
            </p>

            <p>
              We enable schools, universities, research centers, and organizations
              to create hands‑on environments where intelligence can be explored,
              tested, and applied in real‑world contexts — bringing structure,
              experimentation, and long‑term capability together.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative mt-16 h-[420px] rounded-3xl overflow-hidden"
        >
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/robot-fingers.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </section>

      {/* ================= WHAT DRIVES US (RESTORED) ================= */}
      <FadeSection className="relative py-20 px-16">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/mission-vision-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative text-center mb-12">
          <p className="uppercase tracking-widest text-blue-400 mb-2">
            Our Principles
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            What Drives Us
          </h2>
        </div>

        {/* Mission & Vision */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          {[
            [
              "MISSION",
              "To engineer innovation ecosystems that empower institutions and enterprises to develop technologies and talent for the AI‑driven future.",
            ],
            [
              "VISION",
              "To advance human intelligence and innovation in the age of artificial intelligence.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl p-10 backdrop-blur-xl bg-black/10 border border-white/15 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-semibold tracking-widest text-[#d6b36a] mb-4">
                {title}
              </h3>
              <p className="text-lg text-white/90">{text}</p>
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div className="relative max-w-6xl mx-auto rounded-3xl p-12 backdrop-blur-xl bg-black/10 border border-white/15">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-widest text-[#d6b36a] mb-10 text-center">
            OUR VALUES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            {[
              ["Innovation", "Encouraging creativity and experimentation."],
              ["Human Intelligence", "Empowering people through technology."],
              ["Engineering Excellence", "Building world‑class technology platforms."],
              ["Collaboration", "Connecting educators, engineers, and innovators."],
              ["Integrity", "Advancing responsible and ethical innovation."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl p-5 bg-black/20 border border-white/10"
              >
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* ===================================================
         SUSTAINABILITY + INNOVATION JOURNEY (LIGHT SECTION)
      =================================================== */}
      <FadeSection className="relative px-16 pt-24 pb-32 text-center text-neutral-900">
        <div className="absolute inset-0 pointer-events-none" style={LIGHT_GRID_BG} />

        {/* Sustainability */}
        <div className="relative max-w-3xl mx-auto mb-28">
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 bg-white rounded-full shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.5">
              <path d="M21 3C9 3 3 12 3 21c9 0 18-6 18-18Z" />
            </svg>
            <span className="uppercase tracking-widest text-green-600 text-sm font-medium">
              Sustainability
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Committed to Responsible Innovation
          </h3>

          <p className="text-lg text-neutral-700 leading-relaxed">
            Brighture is committed to advancing sustainable innovation by enabling
            technologies that improve efficiency, safety, and long‑term societal
            impact.
          </p>
        </div>

        {/* Innovation Journey */}
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 bg-white rounded-full shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7l3 5-3-1-3 1 3-5z" />
            </svg>
            <span className="uppercase tracking-widest text-blue-600 text-sm font-medium">
              Innovation Journey
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            From Discovery to Advanced Innovation
          </h3>

          <p className="max-w-2xl mx-auto text-neutral-700 mb-20">
            The Brighture framework supports a progressive journey — taking
            participants from initial discovery all the way to research and
            entrepreneurship.
          </p>

          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-80" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {[
                ["01", "Exploration", "Students discover emerging technologies through hands‑on experimentation in a supportive innovation environment.", "bg-blue-500"],
                ["02", "Development", "Participants build real technology systems including robotics, AI models, and smart devices that solve real problems.", "bg-purple-500"],
                ["03", "Innovation", "Students develop solutions for real‑world challenges using intelligent systems and cross‑disciplinary collaboration.", "bg-orange-500"],
                ["04", "Research & Entrepreneurship", "Advanced innovators explore research opportunities and technology entrepreneurship pathways.", "bg-indigo-600"],
              ].map(([num, title, desc, color]) => (
                <div key={num} className="text-center">
                  <div className={`mx-auto w-12 h-12 rounded-full ${color} text-white flex items-center justify-center font-semibold mb-4`}>
                    {num}
                  </div>
                  <h4 className="font-semibold mb-2">{title}</h4>
                  <p className="text-sm text-neutral-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeSection>
      <GlobalPresence />
    </main>
  );
}
''

import GlobalPresence from "@/app/components/GlobalPresence";