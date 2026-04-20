"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const locations = [
  { label: "BENGALURU, INDIA", image: "/images/global/bangalore.webp" },
  { label: "DUBAI, UNITED ARAB EMIRATES", image: "/images/global/dubai.jpg" },
  { label: "LONDON, UNITED KINGDOM", image: "/images/global/london.jpg" },
  { label: "TEXAS, UNITED STATES OF AMERICA", image: "/images/global/texas.jpg" },
];

export default function GlobalPresence() {
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % locations.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black">

      {/* ================= HEADER ABOVE IMAGES ================= */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-120px" }}
        className="bg-black px-6 py-6 text-center"
      >
        {/* Title — Space Grotesk, clean and modern */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight uppercase" 
            style={{ letterSpacing: "0.02em" }}>
          Engineering innovation ecosystems. globally.
        </h2>

        {/* Caption — Regular weight, single line */}
        <p className="mt-2 text-white/75 text-xs md:text-sm lg:text-base max-w-7xl mx-auto whitespace-nowrap"
           style={{ letterSpacing: "0.01em" }}>
          Brighture operates through a growing international network, supporting and enabling close collaboration with institutions, enterprises, and innovation ecosystems worldwide.
        </p>
      </motion.div>

      {/* ================= IMAGE SLIDER ================= */}
      <div className="relative w-full h-[90vh] overflow-hidden">

        {/* SLIDES */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${locations[index].image})` }}
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* FOOTER */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-16 px-10 flex items-end justify-between">
          <p className="text-2xl md:text-3xl font-semibold tracking-wide text-white">
            {locations[index].label}
          </p>

          <div className="flex gap-3">
            {locations.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}