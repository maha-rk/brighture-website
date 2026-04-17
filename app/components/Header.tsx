"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "AI Labs", href: "/ai-labs" },
  { label: "AI Trainings", href: "/ai-trainings" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`w-full px-10 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand */}
        <div className="text-lg tracking-tight font-medium">
          Brighture
        </div>

        {/* Navigation */}
        <nav className="flex gap-10 text-sm uppercase tracking-wider">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-opacity ${
                  isActive ? "text-white opacity-100" : "text-white opacity-60 hover:opacity-90"
                }`}
              >
                {item.label}

                {/* Active underline */}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 h-px w-full bg-white/50" />
                )}
              </Link>
            )
          })}
        </nav>

      </div>
    </header>
  )
}