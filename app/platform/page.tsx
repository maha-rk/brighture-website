"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <main>

      <section className="relative min-h-screen overflow-hidden">
        <video
          ref={videoRef}
          src="/video/robot-hero.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          autoPlay
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 min-h-screen flex items-center px-12">
          <div className="max-w-5xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              Engineering Human Intelligence
              <br />
              for the AI Future
            </h1>

            <div className="flex gap-4">
              <Link href="/ai-labs" className="border px-4 py-2">
                AI Innovation Labs
              </Link>
              <Link href="/ai-trainings" className="border px-4 py-2">
                AI Training Programs
              </Link>
              <Link href="/ai-products" className="border px-4 py-2">
                AI Products & Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}