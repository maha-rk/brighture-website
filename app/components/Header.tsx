"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/products", label: "Products" },
  { href: "/platform", label: "Platform" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [opacity, setOpacity] = useState(0.9);

  useEffect(() => {
    const onScroll = () => {
      const y = Math.min(window.scrollY, 120);
      const nextOpacity = 0.9 - y / 150;
      setOpacity(Math.max(nextOpacity, 0.55));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center">
      <div
        className="w-[96%] max-w-[1400px] h-[72px] rounded-full backdrop-blur-md transition-colors duration-300"
        style={{
          backgroundColor: `rgba(40,40,40,${opacity * 0.75})`,
          border: `1px solid rgba(255,255,255,${opacity * 0.12})`,
        }}
      >
        <div className="h-full px-10 flex items-center">

          {/* LOGO — unchanged */}
          <Link
            href="/"
            aria-label="Brighture home"
            className="shrink-0 leading-none pt-2"
            style={{ fontFamily: "var(--font-comfortaa)" }}
          >
            <div
              className="relative inline-flex items-end text-white"
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              <span>brigh</span>
              <span className="relative inline-block mx-[0.03em]">
                <span
                  aria-hidden
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    bottom: "1.08em",
                    width: "12px",
                    height: "8px",
                    display: "block",
                  }}
                >
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline
                      points="1,7 6,1 11,7"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
                t
              </span>
              <span>ure</span>
            </div>

            <div
              className="text-white/50 text-center"
              style={{
                fontWeight: 300,
                fontSize: "9.5px",
                letterSpacing: "0.15em",
                marginTop: "5px",
                textTransform: "lowercase",
              }}
            >
              intelligence simplified.
            </div>
          </Link>

          {/* NAV */}
          <nav className="ml-auto flex items-center gap-12 text-[13px] font-medium uppercase tracking-[0.12em] text-white/80">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    isActive
                      ? "text-white border-b border-white pb-1"
                      : "hover:text-white transition-colors"
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="w-8" />
        </div>
      </div>
    </header>
  );
}