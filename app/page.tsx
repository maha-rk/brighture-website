"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Typewriter phrases ─── */
const phrases = [
  "the ai revolution.",
  "transformative technologies.",
  "next-generation capabilities.",
  "intelligent ecosystems.",
];

/* ─── Design tokens matching aiLabs / aiTrainings ─── */
const T = {
  accent:  "#4f46e5",   // same indigo as ai-labs
  accentG: "#22c55e",   // green
  accentA: "#f59e0b",   // amber
  accentV: "#8b5cf6",   // violet
  dark:    "#111",
  mid:     "#555",
  light:   "#888",
  border:  "#e3e8f3",
  font:    "'Inter', system-ui, sans-serif",
};

export default function HomePage() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const computeVideoRef = useRef<HTMLVideoElement | null>(null);

  const [text, setText]             = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused]     = useState(false);
  const [loaded, setLoaded]         = useState(false);
  const [scrollY, setScrollY]       = useState(0);

  /* play videos */
  useEffect(() => {
    heroVideoRef.current?.play().catch(() => {});
    computeVideoRef.current?.play().catch(() => {});
  }, []);

  /* trigger entrance animations after mount */
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* parallax */
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* typewriter */
  useEffect(() => {
    const current = phrases[phraseIndex];
    if (isPaused) return;
    const timeout = setTimeout(() => {
      if (!isDeleting && text.length < current.length) {
        setText(current.slice(0, text.length + 1));
      } else if (!isDeleting && text.length === current.length) {
        setIsPaused(true);
        setTimeout(() => { setIsDeleting(true); setIsPaused(false); }, 1400);
      } else if (isDeleting && text.length > 0) {
        setText(current.slice(0, text.length - 1));
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false);
        setPhraseIndex(p => (p + 1) % phrases.length);
      }
    }, isDeleting ? 50 : 90);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, isPaused]);

  /* ─── shared inline style helpers ─── */
  const label = (extra?: object) => ({
    fontFamily: T.font,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
    color: T.light,
    ...extra,
  });

  return (
    <main style={{ fontFamily: T.font, background: "#fff", color: T.dark }}>

      {/* ═══════════════════════════════════════
          1. HERO — full-screen video
             Entrance: title fades + slides up from bottom
      ═══════════════════════════════════════ */}
      <section style={{ position: "relative", height: "100vh", minHeight: 700, overflow: "hidden" }}>
        <video
          ref={heroVideoRef}
          src="/video/home/hero.mp4"
          muted loop playsInline autoPlay
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.42)" }} />

        {/* Fade-to-white gradient at bottom — matches ai-labs hero */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.9))",
          zIndex: 3, pointerEvents: "none",
        }} />

        {/* Headline — slides up + fades in */}
        <div style={{
          position: "absolute", bottom: 100, left: 80, zIndex: 10, maxWidth: 680,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}>
          <p style={{ ...label({ color: "rgba(255,255,255,0.55)", marginBottom: 20 }) }}>
            brighture global
          </p>
          <h1 style={{
            fontFamily: T.font,
            fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            color: "#fff",
            margin: 0,
          }}>
            engineering human<br />
            intelligence<br />
            for the ai future.
          </h1>
        </div>

        {/* CTA buttons — fade in with delay */}
        <div style={{
          position: "absolute", bottom: 36, left: 80, zIndex: 10,
          display: "flex", gap: 16,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
        }}>
          <Link href="/ai-labs" style={{
            fontFamily: T.font,
            background: "#fff", color: T.dark,
            border: `2px solid #fff`,
            borderRadius: 10, padding: "13px 28px",
            fontSize: 14, fontWeight: 600,
            textDecoration: "none", whiteSpace: "nowrap",
            display: "inline-flex", alignItems: "center", gap: 8,
            transition: "background 0.2s",
          }}>
            Explore Programs →
          </Link>
          <Link href="/contact" style={{
            fontFamily: T.font,
            background: "transparent", color: "#fff",
            border: "2px solid rgba(255,255,255,0.5)",
            borderRadius: 10, padding: "13px 28px",
            fontSize: 14, fontWeight: 600,
            textDecoration: "none", whiteSpace: "nowrap",
            display: "inline-flex", alignItems: "center", gap: 8,
            transition: "border-color 0.2s",
          }}>
            Get in Touch
          </Link>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 48, right: 80, zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          opacity: loaded ? 0.6 : 0,
          transition: "opacity 1.2s ease 0.6s",
        }}>
          <span style={label({ color: "rgba(255,255,255,0.5)" })}>scroll</span>
          <div style={{
            width: 1, height: 48,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. INTRO STATEMENT — white bg, large text
             Matches ai-labs programsHeader style
      ═══════════════════════════════════════ */}
      <section style={{
        background: "#fff",
        padding: "100px 80px",
        borderBottom: `1px solid ${T.border}`,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{
            fontFamily: T.font,
            fontSize: "clamp(1.6rem, 2.8vw, 2.8rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.5px",
            color: T.dark,
            margin: "0 0 28px",
          }}>
            brighture pioneers the infrastructure of AI education.
          </p>
          <p style={{
            fontFamily: T.font,
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            color: T.mid,
            lineHeight: 1.75,
            maxWidth: 680,
            margin: 0,
          }}>
            We build <span style={{ color: T.accent, fontWeight: 600 }}>AI innovation labs</span>,{" "}
            <span style={{ color: T.accentG, fontWeight: 600 }}>robotics ecosystems</span>, and{" "}
            <span style={{ color: T.accentA, fontWeight: 600 }}>future-skills programs</span>{" "}
            for schools, universities, enterprises, and governments — the institutions
            shaping what comes next.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. METRICS STRIP — matches ai-labs metricsStrip exactly
      ═══════════════════════════════════════ */}
      <section style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px 80px",
        background: "#ffffff",
        borderBottom: `1px solid ${T.border}`,
      }}>
        {[
          { value: "4",    label: "Innovation Programs" },
          { value: "8+",   label: "Specialized Lab Types" },
          { value: "100%", label: "Hands-on Learning" },
          { value: "4+",   label: "Global Locations" },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, textAlign: "center",
            borderLeft: i > 0 ? `1px solid ${T.border}` : "none",
            padding: "8px 0",
          }}>
            <span style={{
              display: "block",
              fontFamily: T.font,
              fontSize: 42, fontWeight: 800, color: T.dark, lineHeight: 1,
              marginBottom: 8,
            }}>
              {s.value}
            </span>
            <span style={label()}>
              {s.label}
            </span>
          </div>
        ))}
      </section>

      {/* ═══════════════════════════════════════
          4. PARALLAX PANELS — alternating image/text
             Waabi-style with white bg text sides
      ═══════════════════════════════════════ */}

      {/* Panel A — image left, text right (white bg) */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "90vh",
        overflow: "hidden",
        borderBottom: `1px solid ${T.border}`,
      }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="/images/home/panel-labs.jpg"
            alt="AI Innovation Lab"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", display: "block",
              transform: `scale(1.08) translateY(${scrollY * 0.04}px)`,
              transition: "transform 0.1s linear",
            }}
          />
          {/* overlay tint matching section color */}
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(79,70,229,0.08)",
          }} />
        </div>
        <div style={{
          background: "#f0f4ff", /* matches genesisSection bg */
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "80px 72px",
          borderLeft: `4px solid ${T.accent}`,
        }}>
          <span style={label({ color: T.accent, marginBottom: 24 })}>
            01 — ai innovation labs
          </span>
          <h2 style={{
            fontFamily: T.font,
            fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
            fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.5px",
            color: T.dark, margin: "0 0 20px",
          }}>
            we built our own<br />model of learning.
          </h2>
          <p style={{
            fontFamily: T.font,
            fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
            color: T.mid, lineHeight: 1.75,
            margin: "0 0 36px", maxWidth: 420,
          }}>
            Our AI Innovation Labs are purpose-built environments where students
            move from theory to creation — hands on hardware, real AI systems,
            and challenges that mirror the actual world of technology.
            From Genesis to Nexus Campus, every program is a step deeper.
          </p>
          <Link href="/ai-labs" style={{
            fontFamily: T.font,
            background: T.accent, color: "#fff",
            border: `2px solid ${T.accent}`,
            borderRadius: 10, padding: "13px 28px",
            fontSize: 14, fontWeight: 600,
            textDecoration: "none", width: "fit-content",
            display: "inline-flex", alignItems: "center", gap: 8,
            transition: "background 0.2s",
          }}>
            Explore AI Labs →
          </Link>
        </div>
      </section>

      {/* Panel B — text left, image right */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "90vh",
        overflow: "hidden",
        borderBottom: `1px solid ${T.border}`,
      }}>
        <div style={{
          background: "#edfff3", /* matches accelSection bg */
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "80px 72px",
          borderLeft: `4px solid ${T.accentG}`,
        }}>
          <span style={label({ color: T.accentG, marginBottom: 24 })}>
            02 — ai trainings
          </span>
          <h2 style={{
            fontFamily: T.font,
            fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
            fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.5px",
            color: T.dark, margin: "0 0 20px",
          }}>
            four levels.<br />one trajectory.
          </h2>
          <p style={{
            fontFamily: T.font,
            fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
            color: T.mid, lineHeight: 1.75,
            margin: "0 0 36px", maxWidth: 420,
          }}>
            From Explorer to AI Specialist — our four-tier curriculum takes
            learners from absolute basics of robotics and electronics all the way
            to building autonomous systems and AI-integrated products.
            100% hands-on, all the way through.
          </p>
          <Link href="/ai-trainings" style={{
            fontFamily: T.font,
            background: T.accentG, color: "#fff",
            border: `2px solid ${T.accentG}`,
            borderRadius: 10, padding: "13px 28px",
            fontSize: 14, fontWeight: 600,
            textDecoration: "none", width: "fit-content",
            display: "inline-flex", alignItems: "center", gap: 8,
            transition: "background 0.2s",
          }}>
            Explore Trainings →
          </Link>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="/images/home/panel-training.jpg"
            alt="AI Training Programs"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", display: "block",
              transform: `scale(1.08) translateY(${-scrollY * 0.03}px)`,
              transition: "transform 0.1s linear",
            }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(34,197,94,0.06)" }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. FULL-BLEED PARALLAX with overlaid text
      ═══════════════════════════════════════ */}
      <section style={{ position: "relative", height: "90vh", overflow: "hidden" }}>
        <img
          src="/images/home/panel-global.jpg"
          alt="Global innovation"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%", objectFit: "cover",
            transform: `scale(1.08) translateY(${scrollY * 0.04}px)`,
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(15,23,42,0.75) 0%, rgba(0,0,0,0.45) 100%)",
        }} />
        {/* Bottom-to-white fade to match next section */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.95))",
          zIndex: 3,
        }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: "0 80px 100px", zIndex: 2 }}>
          <div style={{ maxWidth: 750 }}>
            <span style={label({ color: "rgba(255,255,255,0.45)", marginBottom: 28, display: "block" })}>
              03 — global reach
            </span>
            <h2 style={{
              fontFamily: T.font,
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 800, lineHeight: 1.08, letterSpacing: "-1px",
              color: "#fff", margin: "0 0 24px",
            }}>
              institutions worldwide.<br />one shared mission.
            </h2>
            <p style={{
              fontFamily: T.font,
              fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
              color: "rgba(255,255,255,0.65)", lineHeight: 1.75,
              maxWidth: 520, margin: "0 0 36px",
            }}>
              Brighture partners with schools, universities, enterprises, and
              governments across the globe to build the physical infrastructure
              of the AI future.
            </p>
            <Link href="/contact" style={{
              fontFamily: T.font,
              background: "#fff", color: T.dark,
              borderRadius: 10, padding: "13px 28px",
              fontSize: 14, fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              Partner With Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. TYPEWRITER SECTION — white bg
             Matches ai-labs aesthetic, Inter font
      ═══════════════════════════════════════ */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "80vh",
        display: "flex", alignItems: "center",
        background: "#fff",
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
      }}>
        <video
          ref={computeVideoRef}
          src="/video/home/compute.mp4"
          muted loop playsInline autoPlay
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%", objectFit: "cover",
            opacity: 0.07, /* very subtle — sits behind white content */
          }}
        />
        <div style={{ position: "relative", zIndex: 2, padding: "80px", maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div>
              <p style={label({ marginBottom: 24 })}>our ethos</p>
              <p style={{
                fontFamily: T.font,
                fontSize: "clamp(1.5rem, 2.6vw, 2.6rem)",
                fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.5px",
                color: T.dark, margin: 0,
              }}>
                <span style={{ fontStyle: "italic", fontWeight: 400, color: T.mid }}>brighture.</span>
                <br />
                builds the foundations for
                <br />
                <span style={{ color: T.accent }}>
                  {text}
                  <span style={{
                    display: "inline-block",
                    animation: "blink 1s infinite",
                    marginLeft: 2,
                    color: T.accent,
                  }}>|</span>
                </span>
              </p>
            </div>
            <div>
              <p style={label({ marginBottom: 32 })}>what we believe</p>
              {[
                { h: "intelligence is infrastructure.", b: "Just as roads and power grids built the 20th century economy, AI innovation labs build the 21st. We lay that groundwork." },
                { h: "learning must be physical.", b: "Real skills come from real hardware. Every Brighture program puts tools in hands — not just content on screens." },
                { h: "the future is institutional.", b: "Individual talent needs institutional support. We equip schools, universities, and enterprises to become centers of innovation." },
              ].map((item, i) => (
                <div key={i} style={{
                  borderTop: `1px solid ${T.border}`,
                  paddingTop: 20, marginBottom: 20,
                  animation: `fadeSlideUp 0.6s ease ${i * 0.12 + 0.2}s both`,
                }}>
                  <h4 style={{ fontFamily: T.font, fontSize: 15, fontWeight: 700, color: T.dark, margin: "0 0 6px" }}>
                    {item.h}
                  </h4>
                  <p style={{ fontFamily: T.font, fontSize: 13, color: T.mid, lineHeight: 1.65, margin: 0 }}>
                    {item.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. PROGRAMS STRIP — matches ai-labs programsGrid
      ═══════════════════════════════════════ */}
      <section style={{
        background: "#0f172a", /* dark bg like ai-labs programs section */
        padding: "80px",
      }}>
        <div style={{
          background: "#fff",
          borderRadius: 32,
          padding: "56px 60px",
          maxWidth: 1400, margin: "0 auto",
          boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
        }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={label({ marginBottom: 16 })}>choose your path</p>
            <h2 style={{
              fontFamily: T.font,
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 800, letterSpacing: "-0.5px",
              color: T.dark, margin: "0 0 14px",
            }}>
              four programs. one framework.
            </h2>
            <p style={{
              fontFamily: T.font, fontSize: 15, color: T.mid,
              maxWidth: 520, margin: "0 auto",
            }}>
              From foundational AI exploration to full institutional innovation
              campuses — each designed to grow with your institution's ambition.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { num: "01", name: "Genesis", sub: "Early AI & Robotics",       color: T.accent,  bg: "#f0f4ff", href: "/ai-labs#genesis" },
              { num: "02", name: "Acceleration", sub: "Applied Engineering",  color: T.accentG, bg: "#edfff3", href: "/ai-labs#acceleration" },
              { num: "03", name: "Discovery", sub: "Advanced Research",       color: T.accentA, bg: "#fff8e6", href: "/ai-labs#discovery" },
              { num: "04", name: "Nexus Campus", sub: "Full-Scale Ecosystem", color: T.accentV, bg: "#f3eeff", href: "/ai-labs#nexus" },
            ].map((p, i) => (
              <Link key={i} href={p.href} style={{
                background: p.bg,
                borderRadius: 16,
                border: `1.5px solid ${p.color}30`,
                padding: "28px 24px 24px",
                textDecoration: "none",
                display: "flex", flexDirection: "column",
                transition: "transform 0.22s ease, box-shadow 0.22s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px ${p.color}20`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ width: 28, height: 3, background: p.color, borderRadius: 2, marginBottom: 20 }} />
                <span style={label({ color: T.light, marginBottom: 10 })}>
                  {p.num}
                </span>
                <h3 style={{
                  fontFamily: T.font,
                  fontSize: "clamp(1rem, 1.4vw, 1.3rem)",
                  fontWeight: 800, color: p.color,
                  margin: "0 0 6px", letterSpacing: "-0.3px",
                }}>
                  {p.name}
                </h3>
                <p style={{ fontFamily: T.font, fontSize: 12, color: T.light, margin: "0 0 20px" }}>
                  {p.sub}
                </p>
                <span style={{
                  fontFamily: T.font,
                  fontSize: 12, fontWeight: 700, letterSpacing: "1px",
                  textTransform: "uppercase" as const,
                  color: p.color,
                  marginTop: "auto",
                  display: "flex", alignItems: "center", gap: 4,
                }}>
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. THREE PILLARS — white bg, matches site cards
      ═══════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "100px 80px", borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={label({ marginBottom: 20 })}>why brighture</p>
          <h2 style={{
            fontFamily: T.font,
            fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)",
            fontWeight: 800, letterSpacing: "-0.5px",
            color: T.dark, margin: "0 0 64px",
          }}>
            the technology behind brighture.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px 56px" }}>
            {[
              { color: T.accent,  n: "01", h: "intelligent by design", b: "Every program runs on real AI systems — not simulations. Students engage with live hardware, embedded computing, and genuine machine learning pipelines from day one." },
              { color: T.accentG, n: "02", h: "scalable infrastructure", b: "From a single classroom lab to a full Nexus Campus, Brighture's programs scale with your institution. Our modular architecture means no ceiling on ambition." },
              { color: T.accentA, n: "03", h: "industry-aligned outcomes", b: "Curricula are benchmarked against global standards and updated continuously. Every certification connects to real industry pathways, not just academic credentials." },
            ].map((item, i) => (
              <div key={i} style={{
                borderTop: `3px solid ${item.color}`,
                paddingTop: 28,
              }}>
                <span style={label({ marginBottom: 18, display: "block" })}>
                  {item.n}
                </span>
                <h3 style={{
                  fontFamily: T.font,
                  fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                  fontWeight: 700, color: T.dark,
                  margin: "0 0 14px",
                }}>
                  {item.h}
                </h3>
                <p style={{ fontFamily: T.font, fontSize: 13.5, color: T.mid, lineHeight: 1.75, margin: 0 }}>
                  {item.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. CLOSING CTA — dark bg like ai-labs cta
      ═══════════════════════════════════════ */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
        padding: "100px 80px",
        textAlign: "center",
      }}>
        {/* Subtle animated bg orbs matching audience section */}
        <div style={{
          position: "absolute", width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,70,229,0.12), transparent 70%)",
          top: -150, left: -100,
          animation: "floatOrb 12s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.10), transparent 70%)",
          bottom: -100, right: -100,
          animation: "floatOrb 15s ease-in-out infinite reverse",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span style={label({ color: "#818cf8", marginBottom: 20, display: "block" })}>
            — get started
          </span>
          <h2 style={{
            fontFamily: T.font,
            fontSize: "clamp(2rem, 4vw, 3.8rem)",
            fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px",
            color: "#fff", margin: "0 0 20px",
          }}>
            ready to build the future?
          </h2>
          <p style={{
            fontFamily: T.font,
            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
            color: "rgba(255,255,255,0.6)", lineHeight: 1.75,
            maxWidth: 520, margin: "0 auto 40px",
          }}>
            Whether you're establishing an AI lab, running a training program,
            or building a full innovation campus — the Brighture team is ready.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Link href="/contact" style={{
              fontFamily: T.font,
              background: "#fff", color: T.dark,
              borderRadius: 10, padding: "14px 32px",
              fontSize: 14, fontWeight: 700,
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              minWidth: 180, justifyContent: "center",
            }}>
              Contact Us →
            </Link>
            <Link href="/ai-labs" style={{
              fontFamily: T.font,
              background: "transparent", color: "#fff",
              border: "2px solid rgba(255,255,255,0.3)",
              borderRadius: 10, padding: "14px 32px",
              fontSize: 14, fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              minWidth: 180, justifyContent: "center",
            }}>
              Explore AI Labs →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          KEYFRAMES
      ═══════════════════════════════════════ */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.15); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0); }
          33%       { transform: translate(30px, -20px); }
          66%       { transform: translate(-20px, 15px); }
        }
      `}</style>
    </main>
  );
}