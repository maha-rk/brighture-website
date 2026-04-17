"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`w-full transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      } px-10`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand */}
        <div className="text-lg tracking-tight font-medium">
          Brighture
        </div>

        {/* Navigation */}
        <nav className="flex gap-10 text-sm uppercase tracking-wider text-white/80">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/ai-labs">AI Labs</Link>
          <Link href="/ai-trainings">AI Trainings</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  )
}