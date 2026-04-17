export default function HomePage() {
  return (
    <main>

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
      <section className="py-40 px-10">
        <p className="text-3xl max-w-4xl">
          The future will not be automated.<br />
          It will be engineered.
        </p>
      </section>

      {/* Framework Overview */}
      <section className="py-40 px-10">
        <h2 className="text-4xl mb-20">
          Global Innovation Lab Framework
        </h2>

        <ul className="space-y-6 text-xl">
          <li>Technology Infrastructure</li>
          <li>Experiential Learning</li>
          <li>Innovation Culture</li>
          <li>Institutional Capability</li>
        </ul>
      </section>

      {/* Flagship Focus */}
      <section className="py-40 px-10">
        <h2 className="text-4xl mb-10">
          AI Forklift Safety System
        </h2>

        <p className="text-xl max-w-3xl">
          Transforming industrial vehicles into intelligent, perceptive systems
          capable of real‑time awareness and autonomous safety decisions.
        </p>
      </section>

      {/* CTA */}
      <section className="py-40 px-10">
        <h2 className="text-4xl max-w-4xl">
          The future isn’t something you study.<br />
          It’s something you build.
        </h2>
      </section>

    </main>
  )
}
