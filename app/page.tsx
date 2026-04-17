export default function HomePage() {
  return (
    <main className="space-y-40">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-10">
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-widest text-white/60">
            Brighture
          </p>

          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-tight">
            Engineering Human Intelligence<br />
            for the AI Future
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-white/70">
            Building AI innovation labs, robotics ecosystems, and future‑ready
            learning environments for the next generation.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-10">
        <p className="text-3xl max-w-4xl leading-relaxed">
          The future will not be automated.<br />
          <span className="text-white/70">It will be engineered.</span>
        </p>
      </section>

      {/* Framework Overview */}
      <section className="px-10">
        <h2 className="text-4xl mb-20">
          Global Innovation Lab Framework
        </h2>

        <ul className="space-y-6 text-xl text-white/80">
          <li>Technology Infrastructure</li>
          <li>Experiential Learning</li>
          <li>Innovation Culture</li>
          <li>Institutional Capability</li>
        </ul>
      </section>

      {/* Flagship Focus */}
      <section className="px-10">
        <h2 className="text-4xl mb-10">
          AI Forklift Safety System
        </h2>

        <p className="text-xl max-w-3xl text-white/80 leading-relaxed">
          Transforming industrial vehicles into intelligent, perceptive systems
          capable of real‑time awareness and autonomous safety decisions.
        </p>
      </section>

      {/* CTA */}
      <section className="px-10 pb-40">
        <h2 className="text-4xl max-w-4xl leading-tight">
          The future isn’t something you study.<br />
          <span className="text-white/70">It’s something you build.</span>
        </h2>
      </section>

    </main>
  )
}