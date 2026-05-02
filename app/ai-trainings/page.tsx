'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './aiTrainings.module.css';

const LEVELS = [
  { id: 'l1', label: 'L1', name: 'Explorer', color: '#4f46e5' },
  { id: 'l2', label: 'L2', name: 'Builder',  color: '#22c55e' },
  { id: 'l3', label: 'L3', name: 'Innovator', color: '#f59e0b' },
  { id: 'l4', label: 'L4', name: 'AI Specialist', color: '#8b5cf6' },
];

export default function AITrainingsPage() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    // --- Scroll reveal ---
    const elements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), index * 120);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach(el => revealObserver.observe(el));

    // --- Level progress indicator ---
    const levelSections = LEVELS.map(l => document.getElementById(l.id));

    const levelObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLevel(entry.target.id);
            setShowIndicator(true);
          }
        });
        const anyVisible = entries.some(e => e.isIntersecting);
        if (!anyVisible) {
          const stillVisible = levelSections.some(sec => {
            if (!sec) return false;
            const rect = sec.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
          });
          if (!stillVisible) setShowIndicator(false);
        }
      },
      { threshold: 0.3 }
    );

    levelSections.forEach(sec => { if (sec) levelObserver.observe(sec); });

    return () => {
      revealObserver.disconnect();
      levelObserver.disconnect();
    };
  }, []);

  const scrollToLevel = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.page}>

      {/* FLOATING LEVEL PROGRESS INDICATOR */}
      <div className={`${styles.levelIndicator} ${showIndicator ? styles.levelIndicatorVisible : ''}`}>
        <div className={styles.levelIndicatorTrack} />
        {LEVELS.map((level, i) => {
          const isActive = activeLevel === level.id;
          const isPast = activeLevel
            ? LEVELS.findIndex(l => l.id === activeLevel) > i
            : false;
          return (
            <button
              key={level.id}
              className={`${styles.levelIndicatorItem} ${isActive ? styles.levelIndicatorActive : ''} ${isPast ? styles.levelIndicatorPast : ''}`}
              style={{ '--level-color': level.color } as React.CSSProperties}
              onClick={() => scrollToLevel(level.id)}
              title={`${level.label} — ${level.name}`}
            >
              <div className={styles.levelIndicatorDot} />
              <span className={styles.levelIndicatorTooltip}>
                <strong>{level.label}</strong> {level.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          {/* existing header + grids + outcomes */}
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={styles.heroBgVideo}
        >
          <source src="/video/ai-trainings/hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Learn. Build.<br />Innovate.
          </h1>
          <div className={styles.heroButtons}>
            <Link href="#contact" className={styles.btnPrimary}>Enroll Now →</Link>
            <Link href="#l1" className={styles.btnSecondary}>View Pathway →</Link>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className={styles.metricsStrip}>
        <div className={`${styles.metricItem} reveal`}>
          <span className={styles.metricValue}>4</span>
          <span className={styles.metricLabel}>Training Levels</span>
        </div>
        <div className={`${styles.metricItem} reveal`}>
          <span className={styles.metricValue}>5</span>
          <span className={styles.metricLabel}>Technology Domains</span>
        </div>
        <div className={`${styles.metricItem} reveal`}>
          <span className={styles.metricValue}>100%</span>
          <span className={styles.metricLabel}>Hands-on Learning</span>
        </div>
        <div className={`${styles.metricItem} reveal`}>
          <span className={styles.metricValue}>4</span>
          <span className={styles.metricLabel}>Certifications</span>
        </div>
      </section>

      {/* ─── LEVEL 1 — EXPLORER ─── */}
      <section className={`${styles.levelSection} ${styles.l1Section}`} id="l1">
        <span className={styles.levelDecoNumber}>01</span>

        <div className={`${styles.levelHeaderRow} reveal`}>
          <div className={styles.levelHeaderLeft}>
            <div className={`${styles.levelBubble} ${styles.l1}`}>L1</div>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.l1}`}>
                <span className={styles.dot} />LEVEL 1 — EXPLORER
              </div>
              <h2 className={styles.levelTitle}>Explorer — Foundation Stage</h2>
              <p className={styles.levelDesc}>
                Introduction to technology through creativity and basic logic building.<br />
                Designed for learners taking their very first steps into the world of AI, robotics, and intelligent systems.
              </p>
            </div>
          </div>
          <div className={`${styles.levelImageBox} ${styles.levelImageBoxCutout} ${styles.levelImageBoxL1}`}>
            <img
              src="/images/trainings/L1-robotics-Picsart-BackgroundRemover.jpg"
              alt="Level 1 Robotics Training"
              className={styles.levelImageCutout}
            />
          </div>
        </div>

        <div className={`${styles.domainsGrid} reveal`}>
          <div className={`${styles.domainCard} ${styles.domainCardL1}`}>
            <h4>Robotics</h4>
            <ul>
              <li>Basic electronics and circuits</li>
              <li>Simple robot building</li>
              <li>Block-based programming (Scratch)</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL1}`}>
            <h4>IoT</h4>
            <ul>
              <li>Introduction to sensors</li>
              <li>Smart devices concept</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL1}`}>
            <h4>Drone</h4>
            <ul>
              <li>Basic drone concepts</li>
              <li>Flight and controls</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL1}`}>
            <h4>VR &amp; AR</h4>
            <ul>
              <li>Introduction to virtual environments</li>
              <li>Interactive storytelling</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL1}`}>
            <h4>Android Apps</h4>
            <ul>
              <li>Visual app creation</li>
              <li>Drag-and-drop tools</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.outcomes} reveal`}>
          <span className={styles.outcomesLabel}>Learning Outcomes</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL1}`}>Logical thinking</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL1}`}>Creativity and curiosity</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL1}`}>Basic coding skills</span>
        </div>
      </section>

      {/* Connector */}
      <div className={styles.levelConnector}>
        <div className={styles.levelConnectorLine} />
        <span className={styles.levelConnectorArrow}>↓</span>
        <div className={styles.levelConnectorDot} />
        <span className={styles.levelConnectorArrow}>↓</span>
        <div className={styles.levelConnectorLine} />
      </div>

      {/* ─── LEVEL 2 — BUILDER ─── */}
      <section className={`${styles.levelSection} ${styles.l2Section}`} id="l2">
        <span className={styles.levelDecoNumber}>02</span>

        <div className={`${styles.levelHeaderRow} reveal`}>
          <div className={styles.levelHeaderLeft}>
            <div className={`${styles.levelBubble} ${styles.l2}`}>L2</div>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.l2}`}>
                <span className={styles.dot} />LEVEL 2 — BUILDER
              </div>
              <h2 className={styles.levelTitle}>Builder — Intermediate Stage</h2>
              <p className={styles.levelDesc}>
                Applied learning with real systems and programming.<br />
                Students move beyond the basics and start working with real hardware, writing code, and building functional systems.
              </p>
            </div>
          </div>
          <div className={`${styles.levelImageBox} ${styles.levelImageBoxCutout} ${styles.levelImageBoxL2}`}>
            <img
              src="/images/trainings/L2-iot-sensors-Picsart-BackgroundRemover.jpg"
              alt="Level 2 Builder Training"
              className={styles.levelImageCutout}
            />
          </div>
        </div>

        <div className={`${styles.domainsGrid} reveal`}>
          <div className={`${styles.domainCard} ${styles.domainCardL2}`}>
            <h4>Robotics</h4>
            <ul>
              <li>Arduino-based robotics</li>
              <li>Bluetooth-controlled robots</li>
              <li>Automation logic</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL2}`}>
            <h4>IoT</h4>
            <ul>
              <li>Smart home systems</li>
              <li>Raspberry Pi basics</li>
              <li>Sensor integration</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL2}`}>
            <h4>Drone</h4>
            <ul>
              <li>Drone physics and stability</li>
              <li>Block-based drone coding</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL2}`}>
            <h4>VR &amp; AR</h4>
            <ul>
              <li>Unity basics</li>
              <li>3D environments</li>
              <li>Interactive VR scenes</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL2}`}>
            <h4>Android Apps</h4>
            <ul>
              <li>MIT App Inventor</li>
              <li>App UI/UX design</li>
              <li>Functional app development</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.outcomes} reveal`}>
          <span className={styles.outcomesLabel}>Learning Outcomes</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL2}`}>Problem-solving skills</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL2}`}>Engineering fundamentals</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL2}`}>Real project building</span>
        </div>
      </section>

      {/* Connector */}
      <div className={styles.levelConnector}>
        <div className={styles.levelConnectorLine} />
        <span className={styles.levelConnectorArrow}>↓</span>
        <div className={styles.levelConnectorDot} />
        <span className={styles.levelConnectorArrow}>↓</span>
        <div className={styles.levelConnectorLine} />
      </div>

      {/* ─── LEVEL 3 — INNOVATOR ─── */}
      <section className={`${styles.levelSection} ${styles.l3Section}`} id="l3">
        <span className={styles.levelDecoNumber}>03</span>

        <div className={`${styles.levelHeaderRow} reveal`}>
          <div className={styles.levelHeaderLeft}>
            <div className={`${styles.levelBubble} ${styles.l3}`}>L3</div>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.l3}`}>
                <span className={styles.dot} />LEVEL 3 — INNOVATOR
              </div>
              <h2 className={styles.levelTitle}>Innovator — Advanced Stage</h2>
              <p className={styles.levelDesc}>
                Engineering systems and real-world applications.<br />
                At this level, students design and build complete intelligent systems — integrating AI, robotics, and cloud technologies to solve real challenges.
              </p>
            </div>
          </div>
          <div className={`${styles.levelImageBox} ${styles.levelImageBoxCutout} ${styles.levelImageBoxL3}`}>
            <img
              src="/images/trainings/L3-drone-Picsart-BackgroundRemover.png"
              alt="Level 3 Innovator Training"
              className={styles.levelImageCutout}
            />
          </div>
        </div>

        <div className={`${styles.domainsGrid} reveal`}>
          <div className={`${styles.domainCard} ${styles.domainCardL3}`}>
            <h4>Robotics</h4>
            <ul>
              <li>Advanced robotics systems</li>
              <li>Autonomous navigation</li>
              <li>AI-integrated robots</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL3}`}>
            <h4>IoT</h4>
            <ul>
              <li>AI-powered IoT systems</li>
              <li>Data communication</li>
              <li>Smart infrastructure</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL3}`}>
            <h4>Drone</h4>
            <ul>
              <li>Autonomous drone systems</li>
              <li>Computer vision for drones</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL3}`}>
            <h4>VR &amp; AR</h4>
            <ul>
              <li>C# programming</li>
              <li>Advanced Unity development</li>
              <li>AR applications</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL3}`}>
            <h4>Android Apps</h4>
            <ul>
              <li>Full app development lifecycle</li>
              <li>API integration</li>
              <li>AI-based mobile apps</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.outcomes} reveal`}>
          <span className={styles.outcomesLabel}>Learning Outcomes</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL3}`}>System design skills</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL3}`}>AI &amp; automation understanding</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL3}`}>Real-world application development</span>
        </div>
      </section>

      {/* Connector */}
      <div className={styles.levelConnector}>
        <div className={styles.levelConnectorLine} />
        <span className={styles.levelConnectorArrow}>↓</span>
        <div className={styles.levelConnectorDot} />
        <span className={styles.levelConnectorArrow}>↓</span>
        <div className={styles.levelConnectorLine} />
      </div>

      {/* ─── LEVEL 4 — AI SPECIALIST ─── */}
      <section className={`${styles.levelSection} ${styles.l4Section}`} id="l4">
        <span className={styles.levelDecoNumber}>04</span>

        <div className={`${styles.levelHeaderRow} reveal`}>
          <div className={styles.levelHeaderLeft}>
            <div className={`${styles.levelBubble} ${styles.l4}`}>L4</div>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.l4}`}>
                <span className={styles.dot} />LEVEL 4 — AI SPECIALIST
              </div>
              <h2 className={styles.levelTitle}>AI Specialist — Professional Level</h2>
              <p className={styles.levelDesc}>
                Advanced AI systems, product development, and research.<br />
                This is the professional tier — designed for learners ready to develop industry-grade AI products, multi-agent systems, and cutting-edge research projects.
              </p>
            </div>
          </div>
          <div className={`${styles.levelImageBox} ${styles.levelImageBoxCutout} ${styles.levelImageBoxL4}`}>
            <img
              src="/images/trainings/L4-vr-person-removebg-preview.png"
              alt="Level 4 AI Specialist Training"
              className={styles.levelImageCutout}
            />
          </div>
        </div>

        <div className={`${styles.domainsGrid} reveal`}>
          <div className={`${styles.domainCard} ${styles.domainCardL4}`}>
            <h4>Robotics</h4>
            <ul>
              <li>AI robotics systems</li>
              <li>Multi-agent robotics</li>
              <li>Industrial automation</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL4}`}>
            <h4>IoT</h4>
            <ul>
              <li>Edge AI systems</li>
              <li>Cloud-integrated IoT</li>
              <li>Industrial IoT</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL4}`}>
            <h4>Drone</h4>
            <ul>
              <li>Autonomous navigation systems</li>
              <li>Drone AI and mapping</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL4}`}>
            <h4>VR &amp; AR</h4>
            <ul>
              <li>Simulation environments</li>
              <li>Digital twin systems</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.domainCardL4}`}>
            <h4>Android Apps</h4>
            <ul>
              <li>AI-integrated applications</li>
              <li>Scalable mobile systems</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.outcomes} reveal`}>
          <span className={styles.outcomesLabel}>Learning Outcomes</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL4}`}>AI product development</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL4}`}>Research and innovation capability</span>
          <span className={`${styles.outcomeTag} ${styles.outcomeTagL4}`}>Industry readiness</span>
        </div>
      </section>

      {/* HOW WE TEACH */}
      <section className={styles.methodology}>

        <div className={`${styles.methodologyHeader} reveal`}>
          <h2>How We Teach</h2>
          <p>Brighture training follows a hands-on experiential model.{'\n'}Students build real systems instead of only learning theory — aligning with modern EdTech approaches and industry expectations.</p>
        </div>

        <div className={`${styles.methodCardsTop} reveal`}>
          <div className={styles.methodCard}>
            <video autoPlay muted loop playsInline className={styles.methodCardVideo}>
              <source src="/video/methodology/project-based-learning.mp4" type="video/mp4" />
            </video>
            <span className={styles.methodCardLabel}>Project-Based Learning</span>
          </div>
          <div className={styles.methodCard}>
            <video autoPlay muted loop playsInline className={styles.methodCardVideo}>
              <source src="/video/methodology/real-hardware-kits.mp4" type="video/mp4" />
            </video>
            <span className={styles.methodCardLabel}>Real Hardware Kits</span>
          </div>
          <div className={styles.methodCard}>
            <video autoPlay muted loop playsInline className={styles.methodCardVideo}>
              <source src="/video/methodology/simulation-environments.mp4" type="video/mp4" />
            </video>
            <span className={styles.methodCardLabel}>Simulation Environments</span>
          </div>
        </div>
        <div className={`${styles.methodCardsBottom} reveal`}>
          <div className={styles.methodCard}>
            <video autoPlay muted loop playsInline className={styles.methodCardVideo}>
              <source src="/video/methodology/ai-assisted-learning.mp4" type="video/mp4" />
            </video>
            <span className={styles.methodCardLabel}>AI-Assisted Learning</span>
          </div>
          <div className={styles.methodCard}>
            <video autoPlay muted loop playsInline className={styles.methodCardVideo}>
              <source src="/video/methodology/industry-relevant-problem-solving.mp4" type="video/mp4" />
            </video>
            <span className={styles.methodCardLabel}>Industry-Relevant Problem Solving</span>
          </div>
        </div>

        <div className={`${styles.benefitsGrid} reveal`}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitCheck}>✓</div>
            <p>No prior coding required at beginner levels — start from absolute basics.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitCheck}>✓</div>
            <p>Progressive learning path from fundamentals to advanced AI systems.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitCheck}>✓</div>
            <p>Real-world project development at every stage of the journey.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitCheck}>✓</div>
            <p>Certification awarded at each level — plus proof of work through actual builds.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitCheck}>✓</div>
            <p>Innovation challenges and hackathons to test skills competitively.</p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.benefitCheck}>✓</div>
            <p>School curriculum-aligned yet designed to go far beyond the classroom.</p>
          </div>
        </div>

        <div className={`${styles.methodImages} reveal`}>
          <div className={styles.methodImageBox}>
            <img src="/images/methodology/method-photo-1.jpg" alt="Students learning hands-on" className={styles.methodImageActual} />
          </div>
          <div className={styles.methodImageBox}>
            <img src="/images/methodology/method-photo-2.jpg" alt="Students building projects" className={styles.methodImageActual} />
          </div>
        </div>
      </section>

      {/* ACCREDITATION & PARTNERSHIPS */}
      <section className={styles.accreditation} id="accreditation">

        <div className={`${styles.accreditationHeader} reveal`}>
          <h2>Trusted. Accredited.<br />Globally Aligned.</h2>
          <p>Brighture collaborates with leading global technology ecosystems and follows internationally recognized standards in AI, robotics, and innovation education.</p>
        </div>

        <div className={`${styles.stemBadge} reveal`}>
          <img src="/images/accreditation/stem-badge.png" alt="STEM Accredited Badge" className={styles.stemBadgeImg} />
        </div>

        <div className={`${styles.globalBox} reveal`}>
          <h3>Global Recognition &amp; Standards</h3>
          <p>Our programs are internationally aligned, industry-relevant, and globally benchmarked — ensuring every learner is equipped for the future of work.</p>
          <div className={styles.globalChecks}>
            <span className={styles.globalCheck}>Internationally aligned STEM-based innovation framework</span>
            <span className={styles.globalCheck}>Industry-relevant curriculum and hands-on learning methodology</span>
            <span className={styles.globalCheck}>Globally benchmarked AI and robotics lab design</span>
          </div>
        </div>

        <div className={`${styles.partnersGrid} reveal`}>
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoBox}>
              <img src="/images/accreditation/unity-logo.svg" alt="Unity" className={styles.partnerLogoImg} />
            </div>
            <h4>Unity</h4>
            <div className={styles.partnerSub}>3D, VR/AR Platform — Simulation and Digital Twin Environments</div>
            <p>Unity powers our immersive VR/AR curriculum, simulation environments, and digital twin experiences across Level 3 and Level 4 programs.</p>
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoBox}>
              <img src="/images/accreditation/dji-logo.jpg" alt="DJI" className={styles.partnerLogoImg} />
            </div>
            <h4>DJI</h4>
            <div className={styles.partnerSub}>Drone Technology Leader</div>
            <p>DJI&apos;s drone platforms are integrated across our Drone domain training — from basic flight concepts at Level 1 to autonomous navigation systems at Level 4.</p>
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoBox}>
              <img src="/images/accreditation/sp-robotics-logo.png" alt="SP Robotics Works" className={styles.partnerLogoImg} />
            </div>
            <h4>SP Robotics Works</h4>
            <div className={styles.partnerSub}>SPARKY — AI Learning Platform</div>
            <p>SP Robotics Works powers the Brighture LMS through the SPARKY AI learning platform — enabling adaptive, personalized, and hands-on learning experiences for every student.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer} id="contact">
        <p>© 2024 Brighture. All rights reserved.</p>
      </footer>

    </div>
  );
}