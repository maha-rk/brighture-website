'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './aiLabs.module.css';

type TabKey = 'labs' | 'tech' | 'learning';

const PROGRAMS = [
  { id: 'genesis',      label: 'G1', name: 'Genesis',      color: '#4f46e5' },
  { id: 'acceleration', label: 'G2', name: 'Acceleration',  color: '#22c55e' },
  { id: 'discovery',    label: 'G3', name: 'Discovery',     color: '#f59e0b' },
  { id: 'nexus',        label: 'G4', name: 'Nexus Campus',  color: '#8b5cf6' },
];

const CAROUSEL_CARDS = [
  {
    id: 'genesis', styleKey: 'genesis', titleClass: 'genesisTitle',
    name: 'Genesis', sub: 'For Early AI & Robotics Learning',
    items: ['Core Innovation Labs', 'Foundational AI & Robotics', 'Hands-on Electronics & IoT', 'Design Thinking Approach'],
    ideal: 'Ideal for Schools & Early University',
    idealClass: 'genesis', dotColor: '#4f46e5',
  },
  {
    id: 'acceleration', styleKey: 'accel', titleClass: 'accelTitle',
    name: 'Acceleration', sub: 'For Applied Engineering & Prototyping',
    items: ['Multi-domain Innovation Labs', 'AI, CV & Edge Computing', 'Real-world Product Development', 'Simulation-based Learning'],
    ideal: 'Ideal for Schools, Universities & Skill Programs',
    idealClass: 'accel', dotColor: '#22c55e',
  },
  {
    id: 'discovery', styleKey: 'discovery', titleClass: 'discoveryTitle',
    name: 'Discovery', sub: 'For Advanced Research & Innovation',
    items: ['Full-stack AI & Robotics Labs', 'Autonomous Systems & Drones', 'GPU-powered AI Infrastructure', 'Industry-aligned Research'],
    ideal: 'Ideal for Research Universities & Enterprise R&D',
    idealClass: 'discovery', dotColor: '#f59e0b',
  },
  {
    id: 'nexus', styleKey: 'nexus', titleClass: 'nexusTitle',
    name: 'Nexus Campus', sub: 'Full-Scale Innovation Ecosystem',
    items: ['End-to-End Innovation Campus', 'Industrial & Physical AI Platforms', 'Smart Manufacturing Labs', 'Cloud + AI Compute Infrastructure'],
    ideal: 'Ideal for Premier Universities & Global Enterprises',
    idealClass: 'nexus', dotColor: '#8b5cf6',
  },
];

export default function AILabsPage() {
  const [activeTab, setActiveTab]         = useState<TabKey>('labs');
  const [activeProgram, setActiveProgram] = useState<string | null>(null);
  const [showIndicator, setShowIndicator] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCarouselIndex(i => (i + 1) % CAROUSEL_CARDS.length);
    }, 3500);
  };

  useEffect(() => {
    startAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, []);

  const goTo = (idx: number) => { setCarouselIndex(idx); startAutoPlay(); };
  const prev = () => goTo((carouselIndex - 1 + CAROUSEL_CARDS.length) % CAROUSEL_CARDS.length);
  const next = () => goTo((carouselIndex + 1) % CAROUSEL_CARDS.length);

  useEffect(() => {
    /* ── scroll reveal ── */
    const elements = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 120);
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach(el => revealObs.observe(el));

    /* ── program progress indicator ── */
    const sections = PROGRAMS.map(p => document.getElementById(p.id));
    const progObs  = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveProgram(entry.target.id);
            setShowIndicator(true);
          }
        });
        const anyVisible = entries.some(e => e.isIntersecting);
        if (!anyVisible) {
          const stillVisible = sections.some(sec => {
            if (!sec) return false;
            const r = sec.getBoundingClientRect();
            return r.top < window.innerHeight && r.bottom > 0;
          });
          if (!stillVisible) setShowIndicator(false);
        }
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => { if (s) progObs.observe(s); });

    return () => { revealObs.disconnect(); progObs.disconnect(); };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className={styles.page}>

      {/* ── FLOATING PROGRAM PROGRESS INDICATOR ── */}
      <div className={`${styles.levelIndicator} ${showIndicator ? styles.levelIndicatorVisible : ''}`}>
        <div className={styles.levelIndicatorTrack} />
        {PROGRAMS.map((p, i) => {
          const isActive = activeProgram === p.id;
          const isPast   = activeProgram
            ? PROGRAMS.findIndex(x => x.id === activeProgram) > i
            : false;
          return (
            <button
              key={p.id}
              className={`${styles.levelIndicatorItem} ${isActive ? styles.levelIndicatorActive : ''} ${isPast ? styles.levelIndicatorPast : ''}`}
              style={{ '--level-color': p.color } as React.CSSProperties}
              onClick={() => scrollTo(p.id)}
              title={`${p.label} — ${p.name}`}
            >
              <div className={styles.levelIndicatorDot} />
              <span className={styles.levelIndicatorTooltip}>
                <strong>{p.label}</strong> {p.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <video
          autoPlay muted loop playsInline preload="auto"
          className={styles.heroBgVideo}
        >
          {/* video stored at /public/video/ai-labs/hero-labs.mp4 */}
          <source src="/video/ai-labs/hero-labs.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Build the Future of<br />Innovation Ecosystems.
          </h1>
          <div className={styles.heroButtons}>
            <Link href="#contact" className={styles.btnPrimary}>Get in Touch →</Link>
            <Link href="#programs" className={styles.btnPrimary}>Explore Programs →</Link>
          </div>
        </div>
      </section>

      {/* ── METRICS STRIP ── */}
      <section className={styles.metricsStrip}>
        <div className={`${styles.metricItem} reveal`}>
          <span className={styles.metricValue}>4</span>
          <span className={styles.metricLabel}>Innovation Programs</span>
        </div>
        <div className={`${styles.metricItem} reveal`}>
          <span className={styles.metricValue}>8+</span>
          <span className={styles.metricLabel}>Specialized Lab Types</span>
        </div>
        <div className={`${styles.metricItem} reveal`}>
          <span className={styles.metricValue}>4+</span>
          <span className={styles.metricLabel}>Global Locations</span>
        </div>
        <div className={`${styles.metricItem} reveal`}>
          <span className={styles.metricValue}>∞</span>
          <span className={styles.metricLabel}>Innovation Possibilities</span>
        </div>
      </section>

      {/* ── INNOVATION PROGRAMS ── */}
      <section id="programs" className={styles.programs}>
        <div
          className={styles.programsBgImage}
          style={{ backgroundImage: "url('/images/ai-labs/programs-bg.jpg')" }}
        />
        <div className={styles.programsInner}>
          <div className={`${styles.programsHeader} reveal`}>
            <h2>Choose Your<br />Innovation Path</h2>
            <p>Four structured programs — from foundational AI exploration to full institutional innovation campuses. Each designed to grow with your institution&apos;s ambition.</p>
          </div>
          <div className={`${styles.programsGrid} reveal`}>

            {/* ── CAROUSEL ── */}
            <div className={styles.carouselWrap}>
              <button className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`} onClick={prev} aria-label="Previous">&#8592;</button>

              <div className={styles.carouselTrack}>
                {CAROUSEL_CARDS.map((card, idx) => {
                  const total = CAROUSEL_CARDS.length;
                  const offset = ((idx - carouselIndex) % total + total) % total;
                  let posClass = styles.cardHidden;
                  if (offset === 0)              posClass = styles.cardCenter;
                  else if (offset === 1)         posClass = styles.cardRight;
                  else if (offset === total - 1) posClass = styles.cardLeft;

                  return (
                    <div
                      key={card.id}
                      className={`${styles.slideCard} ${posClass}`}
                      onClick={() => offset !== 0 && goTo(idx)}
                    >
                      {/* Left: image */}
                      <div className={styles.slideImg}>
                        <img
                          src={`/images/ai-labs/${card.id}.jpg`}
                          alt={card.name}
                        />
                      </div>
                      {/* Right: text panel */}
                      <div className={styles.slideText}>
                        <div className={styles.slideLabel}>{card.sub}</div>
                        <h3 className={styles.slideName}>{card.name}</h3>
                        <ul className={styles.slideList}>
                          {card.items.map(item => <li key={item}>{item}</li>)}
                        </ul>
                        <div className={styles.slideIdeal}>✓ {card.ideal}</div>
                        <Link href={`#${card.id}`} className={styles.learnMore}>Learn More →</Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className={`${styles.carouselArrow} ${styles.carouselArrowRight}`} onClick={next} aria-label="Next">&#8594;</button>
            </div>

            {/* Dots */}
            <div className={styles.carouselDots}>
              {CAROUSEL_CARDS.map((card, idx) => (
                <button
                  key={card.id}
                  className={`${styles.carouselDot} ${idx === carouselIndex ? styles.carouselDotActive : ''}`}
                  style={{ '--dot-color': '#1a1a2e' } as React.CSSProperties}
                  onClick={() => goTo(idx)}
                  aria-label={card.name}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className={styles.audience}>

        {/* ── Animated SVG background ── */}
        <svg className={styles.audienceBg} viewBox="0 0 1400 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* Purple blob — Genesis */}
          <circle cx="180" cy="200" r="220" fill="#6366f1" fillOpacity="0.07">
            <animateTransform attributeName="transform" type="translate" values="0,0; 30,-20; -10,30; 0,0" dur="12s" repeatCount="indefinite" />
            <animate attributeName="r" values="220;260;200;220" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle cx="280" cy="120" r="100" fill="#818cf8" fillOpacity="0.05">
            <animateTransform attributeName="transform" type="translate" values="0,0; -20,15; 10,-10; 0,0" dur="9s" repeatCount="indefinite" />
          </circle>

          {/* Green blob — Acceleration */}
          <circle cx="580" cy="500" r="180" fill="#10b981" fillOpacity="0.07">
            <animateTransform attributeName="transform" type="translate" values="0,0; -25,20; 15,-15; 0,0" dur="14s" repeatCount="indefinite" />
            <animate attributeName="r" values="180;210;160;180" dur="11s" repeatCount="indefinite" />
          </circle>
          <ellipse cx="650" cy="380" rx="130" ry="80" fill="#34d399" fillOpacity="0.05">
            <animateTransform attributeName="transform" type="rotate" values="0 650 380; 15 650 380; -10 650 380; 0 650 380" dur="13s" repeatCount="indefinite" />
          </ellipse>

          {/* Orange blob — Discovery */}
          <circle cx="950" cy="150" r="200" fill="#f59e0b" fillOpacity="0.07">
            <animateTransform attributeName="transform" type="translate" values="0,0; 20,25; -15,-10; 0,0" dur="11s" repeatCount="indefinite" />
            <animate attributeName="r" values="200;230;180;200" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle cx="1050" cy="300" r="90" fill="#fbbf24" fillOpacity="0.05">
            <animateTransform attributeName="transform" type="translate" values="0,0; -10,20; 20,-5; 0,0" dur="8s" repeatCount="indefinite" />
          </circle>

          {/* Purple blob — Nexus */}
          <circle cx="1280" cy="450" r="200" fill="#8b5cf6" fillOpacity="0.07">
            <animateTransform attributeName="transform" type="translate" values="0,0; -20,-30; 10,20; 0,0" dur="13s" repeatCount="indefinite" />
            <animate attributeName="r" values="200;240;185;200" dur="12s" repeatCount="indefinite" />
          </circle>
          <ellipse cx="1180" cy="580" rx="150" ry="100" fill="#a78bfa" fillOpacity="0.05">
            <animateTransform attributeName="transform" type="rotate" values="0 1180 580; -12 1180 580; 8 1180 580; 0 1180 580" dur="15s" repeatCount="indefinite" />
          </ellipse>

          {/* Subtle floating dots — purple and amber only, no odd-sized green */}
          <circle cx="450" cy="300" r="6" fill="#6366f1" fillOpacity="0.12">
            <animate attributeName="cy" values="300;270;300" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="1100" cy="520" r="7" fill="#f59e0b" fillOpacity="0.12">
            <animate attributeName="cy" values="520;490;520" dur="8s" repeatCount="indefinite" />
          </circle>
        </svg>
        <div className={`${styles.audienceHeader} reveal`}>
          <h2>Who Should Explore Brighture?</h2>
          <p>Whether you&apos;re a school, university, enterprise, or research center, we have a program designed for your institution&apos;s innovation journey.</p>
        </div>
        <div className={styles.audienceGrid}>
          <div className={`${styles.audienceCard} ${styles.genesis}`}>
            <div className={styles.audienceCardBadge}>Genesis Program</div>
            <h3>Schools &amp; Colleges</h3>
            <p>Introduce students to AI and robotics through hands-on exploration and foundational learning.</p>
            <ul className={styles.audienceChecks}>
              <li>Core Innovation Labs</li>
              <li>Foundational AI &amp; Robotics</li>
              <li>Design Thinking</li>
            </ul>
            <div className={styles.audienceLevel}>Ideal for Genesis</div>
            <Link href="#genesis" className={styles.audienceLearnMore}>Learn More →</Link>
          </div>
          <div className={`${styles.audienceCard} ${styles.accel}`}>
            <div className={styles.audienceCardBadge}>Acceleration Program</div>
            <h3>Universities &amp; Skill Programs</h3>
            <p>Equip students with applied engineering skills and real-world problem-solving capabilities.</p>
            <ul className={styles.audienceChecks}>
              <li>Multi-Domain Innovation Labs</li>
              <li>AI, CV &amp; Edge Computing</li>
              <li>Product Development</li>
            </ul>
            <div className={styles.audienceLevel}>Ideal for Acceleration</div>
            <Link href="#acceleration" className={styles.audienceLearnMore}>Learn More →</Link>
          </div>
          <div className={`${styles.audienceCard} ${styles.discovery}`}>
            <div className={styles.audienceCardBadge}>Discovery Program</div>
            <h3>Research &amp; Innovation Centers</h3>
            <p>Advance cutting-edge research with full-stack AI labs and autonomous systems infrastructure.</p>
            <ul className={styles.audienceChecks}>
              <li>GPU-Powered AI Infrastructure</li>
              <li>Autonomous Systems &amp; Drones</li>
              <li>Research Fellowships</li>
            </ul>
            <div className={styles.audienceLevel}>Ideal for Discovery</div>
            <Link href="#discovery" className={styles.audienceLearnMore}>Learn More →</Link>
          </div>
          <div className={`${styles.audienceCard} ${styles.nexus}`}>
            <div className={styles.audienceCardBadge}>Nexus Campus</div>
            <h3>Global Enterprises &amp; Institutions</h3>
            <p>Build complete innovation campuses with research, entrepreneurship, and industry integration.</p>
            <ul className={styles.audienceChecks}>
              <li>Full Innovation Ecosystem</li>
              <li>Startup Incubation</li>
              <li>Industry &amp; Government Partnerships</li>
            </ul>
            <div className={styles.audienceLevel}>Ideal for Nexus Campus</div>
            <Link href="#nexus" className={styles.audienceLearnMore}>Learn More →</Link>
          </div>
        </div>
      </section>

      <section className={`${styles.levelSection} ${styles.genesisSection}`} id="genesis">
        <span className={styles.levelDecoNumber}>01</span>
        <div className={`${styles.levelHeaderRow} reveal`}>
          <div className={styles.levelHeaderLeft}>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.genesis}`}><span className={styles.dot} />GENESIS PROGRAM</div>
              <h2 className={styles.levelTitle}>Genesis: Early AI &amp; Robotics Innovation</h2>
              <p className={styles.levelDesc}>
                Genesis introduces institutions to the world of artificial intelligence and robotics through guided, hands-on exploration.<br />
                Designed for schools and early-stage universities taking their first steps into AI, robotics, and technology innovation. This foundational program is designed to spark curiosity, build creative confidence, and establish core technical skills through design thinking and practical experimentation.
              </p>
              <div className={styles.metaTagIdeal}>Ideal for Schools &amp; Early University</div>
            </div>
          </div>
          <div className={styles.levelHeaderRight}>
            <div className={`${styles.levelImageBox} ${styles.levelImageBoxL1}`}>
              <img src="/images/ai-labs/genesis.jpg" alt="Genesis Program" className={styles.levelImageCutout} />
            </div>
            <div className={styles.imageCaption}>Core Innovation Labs</div>
          </div>
        </div>
        <div className={`${styles.domainsGrid} reveal`}>
          <div className={`${styles.domainCard} ${styles.domainCardGenesis}`}><h4>Innovation Labs</h4><ul><li>AI Innovation Lab</li><li>Robotics Lab</li><li>Embedded Systems Lab</li><li>Innovation Studio</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardGenesis}`}><h4>Core Topics</h4><ul><li>AI &amp; Robotics Fundamentals</li><li>Electronics &amp; IoT Basics</li><li>Block-based Programming</li><li>Design Thinking</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardGenesis}`}><h4>Learning Format</h4><ul><li>Hands-on Project Work</li><li>Guided Lab Sessions</li><li>Innovation Challenges</li><li>Showcase Events</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardGenesis}`}><h4>Support Provided</h4><ul><li>Lab Setup &amp; Equipment</li><li>Educator Training</li><li>Curriculum Materials</li><li>Ongoing Mentorship</li></ul></div>
        </div>
        <div className={`${styles.outcomes} ${styles.outcomesGenesis} reveal`}>
          <span className={styles.outcomesLabel}>Program Outcomes</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeGenesis}`}>AI Awareness</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeGenesis}`}>Hands-on Building</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeGenesis}`}>Logical Thinking</span>
        </div>
      </section>

      {/* Connector */}
<div className={styles.levelConnector} aria-hidden="true">
  <span className={styles.levelConnectorLine} />
  <span className={styles.levelConnectorDot} />
  <span className={styles.levelConnectorArrow}>↓</span>
  <span className={styles.levelConnectorArrow}>↓</span>
  <span className={styles.levelConnectorDot} />
  <span className={styles.levelConnectorLine} />
</div>

      {/* ── ACCELERATION ── */}
      <section className={`${styles.levelSection} ${styles.accelSection}`} id="acceleration">
        <span className={styles.levelDecoNumber}>02</span>
        <div className={`${styles.levelHeaderRow} reveal`}>
          <div className={styles.levelHeaderLeft}>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.accel}`}><span className={styles.dot} />ACCELERATION PROGRAM</div>
              <h2 className={styles.levelTitle}>Acceleration: Applied Engineering &amp; Prototyping</h2>
              <p className={styles.levelDesc}>
                Acceleration moves beyond fundamentals to applied engineering and real-world product development.<br />
                Learners work across multiple domains — AI, computer vision, edge computing, and automation — building systems that solve genuine challenges through simulation and hands-on prototyping.
              </p>
              <div className={styles.metaTagIdeal}>Ideal for Universities &amp; Skill Programs</div>
            </div>
          </div>
          <div className={styles.levelHeaderRight}>
            <div className={`${styles.levelImageBox} ${styles.levelImageBoxL2}`}>
              <img src="/images/ai-labs/acceleration.jpg" alt="Acceleration Program" className={styles.levelImageCutout} />
            </div>
            <div className={styles.imageCaption}>Multi-Domain Innovation Labs</div>
          </div>
        </div>
        <div className={`${styles.domainsGrid} reveal`}>
          <div className={`${styles.domainCard} ${styles.domainCardAccel}`}><h4>Innovation Labs</h4><ul><li>AI Innovation Lab</li><li>Computer Vision Lab</li><li>Robotics Lab</li><li>Autonomous Systems Lab</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardAccel}`}><h4>Core Topics</h4><ul><li>Machine Learning &amp; Deep Learning</li><li>Computer Vision Systems</li><li>Autonomous Robotics</li><li>Edge AI &amp; IoT Applications</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardAccel}`}><h4>Learning Format</h4><ul><li>Project-Based Learning</li><li>Industry Mentorship</li><li>Capstone Projects</li><li>Innovation Challenges</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardAccel}`}><h4>Support Provided</h4><ul><li>Advanced Equipment Setup</li><li>Educator Certification</li><li>Industry Connections</li><li>Career Support Services</li></ul></div>
        </div>
        <div className={`${styles.outcomes} ${styles.outcomesAccel} reveal`}>
          <span className={styles.outcomesLabel}>Program Outcomes</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeAccel}`}>Engineering Skills</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeAccel}`}>Real Project Building</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeAccel}`}>Industry Readiness</span>
        </div>
      </section>

      {/* Connector */}
<div className={styles.levelConnector} aria-hidden="true">
  <span className={styles.levelConnectorLine} />
  <span className={styles.levelConnectorDot} />
  <span className={styles.levelConnectorArrow}>↓</span>
  <span className={styles.levelConnectorArrow}>↓</span>
  <span className={styles.levelConnectorDot} />
  <span className={styles.levelConnectorLine} />
</div>

      {/* ── DISCOVERY ── */}
      <section className={`${styles.levelSection} ${styles.discoverySection}`} id="discovery">
        <span className={styles.levelDecoNumber}>03</span>
        <div className={`${styles.levelHeaderRow} reveal`}>
          <div className={styles.levelHeaderLeft}>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.discovery}`}><span className={styles.dot} />DISCOVERY PROGRAM</div>
              <h2 className={styles.levelTitle}>Discovery: Advanced Research &amp; Innovation</h2>
              <p className={styles.levelDesc}>
                Discovery is built for institutions that are ready to pursue cutting-edge research, advanced autonomous systems, and high-performance AI development.<br />
                With GPU-powered infrastructure, drone platforms, and digital twin environments, this program transforms universities and research centers into true innovation powerhouses.
              </p>
              <div className={styles.metaTagIdeal}>Ideal for Research Universities &amp; Enterprise R&amp;D</div>
            </div>
          </div>
          <div className={styles.levelHeaderRight}>
            <div className={`${styles.levelImageBox} ${styles.levelImageBoxL3}`}>
              <img src="/images/ai-labs/discovery.jpg" alt="Discovery Program" className={styles.levelImageCutout} />
            </div>
            <div className={styles.imageCaption}>Full-Stack AI Research Labs</div>
          </div>
        </div>
        <div className={`${styles.domainsGrid} reveal`}>
          <div className={`${styles.domainCard} ${styles.domainCardDiscovery}`}><h4>Innovation Labs</h4><ul><li>AI Research Center</li><li>Autonomous Systems Lab</li><li>Computer Vision Lab</li><li>Advanced Robotics Lab</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardDiscovery}`}><h4>Core Topics</h4><ul><li>Advanced Deep Learning &amp; Research</li><li>Reinforcement Learning</li><li>Autonomous System Design</li><li>GPU Computing &amp; Cloud AI</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardDiscovery}`}><h4>Learning Format</h4><ul><li>Research-First Approach</li><li>Publication &amp; Patenting Support</li><li>Industry Collaboration</li><li>Advanced Seminars</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardDiscovery}`}><h4>Support Provided</h4><ul><li>GPU Infrastructure Setup</li><li>Research Lab Design</li><li>Industry Partnership Facilitation</li><li>Grant Writing Support</li></ul></div>
        </div>
        <div className={`${styles.outcomes} ${styles.outcomesDiscovery} reveal`}>
          <span className={styles.outcomesLabel}>Program Outcomes</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeDiscovery}`}>Research Capability</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeDiscovery}`}>AI Innovation</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeDiscovery}`}>Industry Collaboration</span>
        </div>
      </section>

      {/* Connector */}
<div className={styles.levelConnector} aria-hidden="true">
  <span className={styles.levelConnectorLine} />
  <span className={styles.levelConnectorDot} />
  <span className={styles.levelConnectorArrow}>↓</span>
  <span className={styles.levelConnectorArrow}>↓</span>
  <span className={styles.levelConnectorDot} />
  <span className={styles.levelConnectorLine} />
</div>

      {/* ── NEXUS CAMPUS ── */}
      <section className={`${styles.levelSection} ${styles.nexusSection}`} id="nexus">
        <span className={styles.levelDecoNumber}>04</span>
        <div className={`${styles.levelHeaderRow} reveal`}>
          <div className={styles.levelHeaderLeft}>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.nexus}`}><span className={styles.dot} />NEXUS CAMPUS</div>
              <h2 className={styles.levelTitle}>Nexus Campus: Full-Scale Innovation Ecosystem</h2>
              <p className={styles.levelDesc}>
                Nexus Campus represents the pinnacle of AI and robotics innovation ecosystems — a full-scale institutional AI ecosystem that integrates every lab, every platform, and every program into one cohesive innovation campus.<br />
                Designed for universities, enterprises, and governments seeking to become global centers for technology innovation, Nexus Campus transforms institutions into leaders in the AI-driven future.
              </p>
              <div className={styles.metaTagIdeal}>Ideal for Premier Institutions &amp; Global Enterprises</div>
            </div>
          </div>
          <div className={styles.levelHeaderRight}>
            <div className={`${styles.levelImageBox} ${styles.levelImageBoxL4}`}>
              <img src="/images/ai-labs/nexus.jpg" alt="Nexus Campus" className={styles.levelImageCutout} />
            </div>
            <div className={styles.imageCaption}>Complete Innovation Campus</div>
          </div>
        </div>
        <div className={`${styles.domainsGrid} reveal`}>
          <div className={`${styles.domainCard} ${styles.domainCardNexus}`}><h4>Technology Platforms</h4><ul><li>Industrial &amp; Physical AI Platforms</li><li>Robotics &amp; Autonomous Systems</li><li>Cloud + AI Compute Infrastructure</li><li>Smart Manufacturing Labs</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardNexus}`}><h4>Learning &amp; Research</h4><ul><li>Artificial Intelligence &amp; ML</li><li>Robotics &amp; Autonomous Systems</li><li>Industrial AI &amp; Smart Manufacturing</li><li>Innovation &amp; AI Entrepreneurship</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardNexus}`}><h4>Implementation Support</h4><ul><li>End-to-end Campus Design</li><li>Research Infrastructure Setup</li><li>Advanced Educator Training</li><li>Industry Collaboration Programs</li></ul></div>
          <div className={`${styles.domainCard} ${styles.domainCardNexus}`}><h4>Ecosystem Integration</h4><ul><li>Startup Incubation Programs</li><li>Industry Advisory Boards</li><li>Government &amp; Research Partnerships</li><li>Entrepreneurship Pathways</li></ul></div>
        </div>
        <div className={`${styles.outcomes} ${styles.outcomesNexus} reveal`}>
          <span className={styles.outcomesLabel}>Program Outcomes</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeNexus}`}>Full Ecosystem</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeNexus}`}>Research &amp; Innovation</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeNexus}`}>Industry Readiness</span>
        </div>
      </section>

      {/* Connector */}
<div className={styles.levelConnector} aria-hidden="true">
  <span className={styles.levelConnectorLine} />
  <span className={styles.levelConnectorDot} />
  <span className={styles.levelConnectorArrow}>↓</span>
  <span className={styles.levelConnectorArrow}>↓</span>
  <span className={styles.levelConnectorDot} />
  <span className={styles.levelConnectorLine} />
</div>

      {/* ── COMPARISON ── */}
      <section className={`${styles.comparison} ${styles.comparisonTopBorder}`}>
        <div className={`${styles.comparisonHeader} reveal`}>
          <h2>Compare All Programs</h2>
          <p>See exactly what each program includes across labs, technology platforms, and learning depth.</p>
        </div>
        <div className={`${styles.tabGroup} reveal`}>
          {(['labs', 'tech', 'learning'] as TabKey[]).map(tab => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'labs' ? 'Innovation Labs' : tab === 'tech' ? 'Technology Platforms' : 'Learning Depth'}
            </button>
          ))}
        </div>

        <div className={`${styles.tabContent} ${activeTab === 'labs' ? styles.active : ''}`}>
          <table className={styles.comparisonTable}>
            <thead><tr>
              <th>Innovation Lab</th>
              <th className={styles.thGenesis}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.genesis}`}/><span>Genesis</span></div></th>
              <th className={styles.thAccel}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.accel}`}/><span>Acceleration</span></div></th>
              <th className={styles.thDiscovery}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.discovery}`}/><span>Discovery</span></div></th>
              <th className={styles.thNexus}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.nexus}`}/><span>Nexus Campus</span></div></th>
            </tr></thead>
            <tbody>
              <tr><td>AI Innovation Lab</td><td><span className={styles.checkGenesis}>✓</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Robotics Lab</td><td><span className={styles.checkGenesis}>✓</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Embedded Systems Lab</td><td><span className={styles.checkGenesis}>✓</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Innovation Studio</td><td><span className={styles.checkGenesis}>✓</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Computer Vision Lab</td><td><span className={styles.na}>--</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Autonomous Systems Lab</td><td><span className={styles.na}>--</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>AI Research Center</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Smart Manufacturing Lab</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
            </tbody>
          </table>
        </div>

        <div className={`${styles.tabContent} ${activeTab === 'tech' ? styles.active : ''}`}>
          <table className={styles.comparisonTable}>
            <thead><tr>
              <th>Technology Platform</th>
              <th className={styles.thGenesis}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.genesis}`}/><span>Genesis</span></div></th>
              <th className={styles.thAccel}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.accel}`}/><span>Acceleration</span></div></th>
              <th className={styles.thDiscovery}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.discovery}`}/><span>Discovery</span></div></th>
              <th className={styles.thNexus}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.nexus}`}/><span>Nexus Campus</span></div></th>
            </tr></thead>
            <tbody>
              <tr><td>Educational Robotics</td><td><span className={styles.checkGenesis}>✓</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td></tr>
              <tr><td>AI Workstations</td><td><span className={styles.na}>--</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Edge AI Devices</td><td><span className={styles.na}>--</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Digital Twin</td><td><span className={styles.na}>--</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Autonomous Robots</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Drone Platforms</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>AI Cloud Infrastructure</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
            </tbody>
          </table>
        </div>

        <div className={`${styles.tabContent} ${activeTab === 'learning' ? styles.active : ''}`}>
          <table className={styles.comparisonTable}>
            <thead><tr>
              <th>Learning Area</th>
              <th className={styles.thGenesis}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.genesis}`}/><span>Genesis</span></div></th>
              <th className={styles.thAccel}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.accel}`}/><span>Acceleration</span></div></th>
              <th className={styles.thDiscovery}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.discovery}`}/><span>Discovery</span></div></th>
              <th className={styles.thNexus}><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.nexus}`}/><span>Nexus Campus</span></div></th>
            </tr></thead>
            <tbody>
              <tr><td>AI Fundamentals</td><td><span className={styles.checkGenesis}>✓</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Machine Learning</td><td><span className={styles.na}>--</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Computer Vision</td><td><span className={styles.na}>--</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Autonomous Systems</td><td><span className={styles.na}>--</span></td><td><span className={styles.checkAccel}>✓</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Reinforcement Learning</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Research &amp; Fellowships</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.checkDiscovery}>✓</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>Industrial AI</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
              <tr><td>AI Entrepreneurship</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.checkNexus}>✓</span></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection} id="contact">
        <div className={`${styles.ctaInner} reveal`}>
          <div className={styles.ctaSectionLabel}>— GET STARTED</div>
          <h2>Ready to Build the Future of Innovation?</h2>
          <p>Whether you are planning to establish an AI Innovation Lab, explore robotics and intelligent systems, or deploy AI-powered industrial solutions — the Brighture team is ready to support your journey.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.btnPrimary}>Contact Us →</Link>
            <Link href="#programs" className={styles.btnPrimary}>Explore AI Labs →</Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer} id="footer">
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>brighture</div>
            <p>Engineering Human Intelligence for the AI Future. Building AI Innovation Labs, robotics ecosystems, and future skills infrastructure globally.</p>
            <a href="mailto:innovate@brightureglobal.com" className={styles.footerEmail}>innovate@brightureglobal.com</a>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>PAGES</div>
            <Link href="/about">About Us</Link>
            <Link href="/ai-labs">AI Labs</Link>
            <Link href="/ai-trainings">AI Trainings</Link>
            <Link href="/ai-products">AI Products</Link>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>PROGRAMS</div>
            <Link href="#genesis">Genesis</Link>
            <Link href="#acceleration">Acceleration</Link>
            <Link href="#discovery">Discovery</Link>
            <Link href="#nexus">Nexus Campus</Link>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>TRAINING LEVELS</div>
            <Link href="/ai-trainings#l1">Explorer — Level 1</Link>
            <Link href="/ai-trainings#l2">Builder — Level 2</Link>
            <Link href="/ai-trainings#l3">Innovator — Level 3</Link>
            <Link href="/ai-trainings#l4">AI Specialist — Level 4</Link>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColTitle}>CONNECT</div>
            <Link href="/contact">Contact Us</Link>
            <Link href="/faq">FAQ</Link>
            <a href="mailto:innovate@brightureglobal.com">Send an Email</a>
            <Link href="/">Website</Link>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Brighture Global. All rights reserved.</span>
          <div className={styles.footerLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}