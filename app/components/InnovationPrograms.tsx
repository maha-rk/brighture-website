'use client';

import Link from 'next/link';
import styles from './InnovationPrograms.module.css';

export default function InnovationPrograms() {
  return (
    <section id="programs" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>— Innovation Programs</span>
        <h2>Choose Your Innovation Path</h2>
        <p>
          Four structured programs — from foundational AI exploration to full
          institutional innovation campuses. Each designed to grow with your
          institution&apos;s ambition.
        </p>
      </div>

      <div className={styles.grid}>
        <ProgramCard
          title="Genesis"
          subtitle="For Early AI & Robotics Learning"
          points={[
            'Core Innovation Labs',
            'Foundational AI & Robotics',
            'Hands-on Electronics & IoT',
            'Design Thinking Approach',
          ]}
          badge="Ideal for Schools & Early University"
          href="/ai-labs#genesis"
          color="blue"
        />

        <ProgramCard
          title="Acceleration"
          subtitle="For Applied Engineering & Prototyping"
          points={[
            'Multi-domain Innovation Labs',
            'AI, CV & Edge Computing',
            'Real-world Product Development',
            'Simulation-based Learning',
          ]}
          badge="Ideal for Schools, Universities & Skill Programs"
          href="/ai-labs#acceleration"
          color="green"
        />

        <ProgramCard
          title="Discovery"
          subtitle="For Advanced Research & Innovation"
          points={[
            'Full-stack AI & Robotics Labs',
            'Autonomous Systems & Drones',
            'GPU-powered AI Infrastructure',
            'Industry-aligned Research',
          ]}
          badge="Ideal for Research Universities & Enterprise R&D"
          href="/ai-labs#discovery"
          color="orange"
        />

        <ProgramCard
          title="Nexus Campus"
          subtitle="Full-Scale Innovation Ecosystem"
          points={[
            'Complete Innovation Campus',
            'Integrated Research & Industry Programs',
            'Startup & Entrepreneur Incubation',
            'Enterprise Technology Partnerships',
          ]}
          badge="Ideal for Premier Universities & Global Enterprises"
          href="/ai-labs#nexus"
          color="purple"
        />
      </div>
    </section>
  );
}

function ProgramCard({
  title,
  subtitle,
  points,
  badge,
  href,
  color,
}: {
  title: string;
  subtitle: string;
  points: string[];
  badge: string;
  href: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
}) {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div>
        <div className={styles.top}>
          <div className={styles.icon} />
          <div>
            <h3>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>

        <ul className={styles.list}>
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        <span className={styles.badge}>{badge}</span>
        <Link href={href} className={styles.link}>
          Learn More →
        </Link>
      </div>
    </div>
  );
}
