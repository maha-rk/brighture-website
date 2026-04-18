"use client";

import { useEffect, useRef, useState } from "react";

const phrases = [
  "the ai revolution.",
  "transformative technologies.",
  "next-generation capabilities.",
  "cutting-edge solutions.",
];

export default function HomePage() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const globeVideoRef = useRef<HTMLVideoElement | null>(null);

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    heroVideoRef.current?.play().catch(() => {});
    globeVideoRef.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 65 : 110;

    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting && text.length < current.length) {
        setText(current.slice(0, text.length + 1));
      } else if (!isDeleting && text.length === current.length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, 1000);
      } else if (isDeleting && text.length > 0) {
        setText(current.slice(0, text.length - 1));
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, isPaused]);

  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">
        <video
          ref={heroVideoRef}
          src="/video/robot-hero.mp4"
          muted
          loop
          playsInline
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex h-full items-end px-16 pb-20">
          <h1 className="font-['Syne'] text-white text-[clamp(2.2rem,4.2vw,3.8rem)] leading-tight font-bold">
            engineering human
            <br />
            intelligence
            <br />
            for the ai future.
          </h1>
        </div>
      </section>

      {/* ================= GLOBE ================= */}
      <section className="relative h-screen overflow-hidden bg-black">
        <video
          ref={globeVideoRef}
          src="/video/compute-global.mp4"
          muted
          loop
          playsInline
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        {/* LHS */}
        <div className="absolute top-28 left-20 z-10 max-w-xl">
          <p className="font-['Inter'] text-white text-[clamp(2rem,3.6vw,2.9rem)] leading-tight font-medium lowercase">
            <span className="italic">brighture.</span>
            <br />
            builds the foundations for
            <br />
            <span className="text-amber-200 whitespace-nowrap">
              {text}
              <span className="ml-1 inline-block animate-blink">|</span>
            </span>
          </p>
        </div>

        {/* RHS */}
        <div className="absolute bottom-20 right-20 z-10 max-w-md text-right">
          <p className="font-['Inter'] text-white text-[clamp(2rem,3.6vw,2.9rem)] leading-snug font-medium lowercase">
            <span className="text-amber-300">innovation labs</span>,
            <br />
            <span className="text-amber-300">robotics ecosystems</span>,
            <br />
            and{" "}
            <span className="text-amber-300">
              future‑skills infrastructure
            </span>
            <br />
            for institutions shaping
            <br />
            what's next.
          </p>
        </div>
      </section>

      {/* blinking cursor */}
      <style jsx>{`
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </main>
  );
}