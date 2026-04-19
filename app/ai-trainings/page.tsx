'use client';

import Link from 'next/link';
import styles from './aiTrainings.module.css';

export default function AITrainingsPage() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>AI TRAINING PATHWAY</div>
          <h1 className={styles.heroTitle}>
            <span className={styles.blue}>Learn.</span>{' '}
            <span className={styles.purple}>Build.</span><br />
            Innovate.
          </h1>
          <p className={styles.heroDesc}>
            Brighture AI Trainings are designed as a progressive, age-based learning journey
            where learners move from exploration to engineering, innovation, and real-world
            deployment — across Robotics, IoT, Drones, VR/AR, and Android App Development.
          </p>
          <div className={styles.heroButtons}>
            <Link href="#contact" className={styles.btnPrimary}>Enroll Now →</Link>
            <Link href="#l1" className={styles.btnSecondary}>View Pathway</Link>
          </div>
        </div>
        <div className={styles.heroImageBox}>[Image Placeholder]</div>
      </section>

      {/* LEVEL 1 — EXPLORER */}
      <section className={styles.levelSection} id="l1">
        <div className={styles.levelHeaderRow}>
          <div className={styles.levelHeaderLeft}>
            <div className={`${styles.levelBubble} ${styles.l1}`}>L1</div>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.l1}`}>
                <span className={styles.dot} />LEVEL 1 — EXPLORER
              </div>
              <h2 className={styles.levelTitle}>Explorer — Foundation Stage</h2>
              <p className={styles.levelDesc}>
                Introduction to technology through creativity and basic logic building. Designed
                for learners taking their very first steps into the world of AI, robotics, and
                intelligent systems.
              </p>
            </div>
          </div>
          <div className={styles.levelImageBox}>[Image Placeholder]</div>
        </div>

        <div className={styles.domainsGrid}>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🤖</div>
            <h4>Robotics</h4>
            <ul>
              <li>Basic electronics and circuits</li>
              <li>Simple robot building</li>
              <li>Block-based programming (Scratch)</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🔌</div>
            <h4>IoT</h4>
            <ul>
              <li>Introduction to sensors</li>
              <li>Smart devices concept</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🚁</div>
            <h4>Drone</h4>
            <ul>
              <li>Basic drone concepts</li>
              <li>Flight and controls</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🥽</div>
            <h4>VR &amp; AR</h4>
            <ul>
              <li>Introduction to virtual environments</li>
              <li>Interactive storytelling</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>📱</div>
            <h4>Android Apps</h4>
            <ul>
              <li>Visual app creation</li>
              <li>Drag-and-drop tools</li>
            </ul>
          </div>
        </div>

        <div className={styles.outcomes}>
          <span className={styles.outcomesLabel}>Learning Outcomes</span>
          <span className={styles.outcomeTag}>Logical thinking</span>
          <span className={styles.outcomeTag}>Creativity and curiosity</span>
          <span className={styles.outcomeTag}>Basic coding skills</span>
        </div>
      </section>

      {/* LEVEL 2 — BUILDER */}
      <section className={styles.levelSection} id="l2">
        <div className={styles.levelHeaderRow}>
          <div className={styles.levelHeaderLeft}>
            <div className={`${styles.levelBubble} ${styles.l2}`}>L2</div>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.l2}`}>
                <span className={styles.dot} />LEVEL 2 — BUILDER
              </div>
              <h2 className={styles.levelTitle}>Builder — Intermediate Stage</h2>
              <p className={styles.levelDesc}>
                Applied learning with real systems and programming. Students move beyond the
                basics and start working with real hardware, writing code, and building functional
                systems.
              </p>
            </div>
          </div>
          <div className={styles.levelImageBox}>[Image Placeholder]</div>
        </div>

        <div className={styles.domainsGrid}>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🤖</div>
            <h4>Robotics</h4>
            <ul>
              <li>Arduino-based robotics</li>
              <li>Bluetooth-controlled robots</li>
              <li>Automation logic</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.highlighted}`}>
            <div className={styles.domainIcon}>🔌</div>
            <h4>IoT</h4>
            <ul>
              <li>Smart home systems</li>
              <li>Raspberry Pi basics</li>
              <li>Sensor integration</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🚁</div>
            <h4>Drone</h4>
            <ul>
              <li>Drone physics and stability</li>
              <li>Block-based drone coding</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🥽</div>
            <h4>VR &amp; AR</h4>
            <ul>
              <li>Unity basics</li>
              <li>3D environments</li>
              <li>Interactive VR scenes</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>📱</div>
            <h4>Android Apps</h4>
            <ul>
              <li>MIT App Inventor</li>
              <li>App UI/UX design</li>
              <li>Functional app development</li>
            </ul>
          </div>
        </div>

        <div className={styles.outcomes}>
          <span className={styles.outcomesLabel}>Learning Outcomes</span>
          <span className={styles.outcomeTag}>Problem-solving skills</span>
          <span className={styles.outcomeTag}>Engineering fundamentals</span>
          <span className={styles.outcomeTag}>Real project building</span>
        </div>
      </section>

      {/* LEVEL 3 — INNOVATOR */}
      <section className={styles.levelSection} id="l3">
        <div className={styles.levelHeaderRow}>
          <div className={styles.levelHeaderLeft}>
            <div className={`${styles.levelBubble} ${styles.l3}`}>L3</div>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.l3}`}>
                <span className={styles.dot} />LEVEL 3 — INNOVATOR
              </div>
              <h2 className={styles.levelTitle}>Innovator — Advanced Stage</h2>
              <p className={styles.levelDesc}>
                Engineering systems and real-world applications. At this level, students design and
                build complete intelligent systems — integrating AI, robotics, and cloud
                technologies to solve real challenges.
              </p>
            </div>
          </div>
          <div className={styles.levelImageBox}>[Image Placeholder]</div>
        </div>

        <div className={styles.domainsGrid}>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🤖</div>
            <h4>Robotics</h4>
            <ul>
              <li>Advanced robotics systems</li>
              <li>Autonomous navigation</li>
              <li>AI-integrated robots</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🔌</div>
            <h4>IoT</h4>
            <ul>
              <li>AI-powered IoT systems</li>
              <li>Data communication</li>
              <li>Smart infrastructure</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🚁</div>
            <h4>Drone</h4>
            <ul>
              <li>Autonomous drone systems</li>
              <li>Computer vision for drones</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🥽</div>
            <h4>VR &amp; AR</h4>
            <ul>
              <li>C# programming</li>
              <li>Advanced Unity development</li>
              <li>AR applications</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>📱</div>
            <h4>Android Apps</h4>
            <ul>
              <li>Full app development lifecycle</li>
              <li>API integration</li>
              <li>AI-based mobile apps</li>
            </ul>
          </div>
        </div>

        <div className={styles.outcomes}>
          <span className={styles.outcomesLabel}>Learning Outcomes</span>
          <span className={styles.outcomeTag}>System design skills</span>
          <span className={styles.outcomeTag}>AI &amp; automation understanding</span>
          <span className={styles.outcomeTag}>Real-world application development</span>
        </div>
      </section>

      {/* LEVEL 4 — AI SPECIALIST */}
      <section className={styles.levelSection} id="l4">
        <div className={styles.levelHeaderRow}>
          <div className={styles.levelHeaderLeft}>
            <div className={`${styles.levelBubble} ${styles.l4}`}>L4</div>
            <div className={styles.levelMeta}>
              <div className={`${styles.levelBadge} ${styles.l4}`}>
                <span className={styles.dot} />LEVEL 4 — AI SPECIALIST
              </div>
              <h2 className={styles.levelTitle}>AI Specialist — Professional Level</h2>
              <p className={styles.levelDesc}>
                Advanced AI systems, product development, and research. This is the professional
                tier — designed for learners ready to develop industry-grade AI products, multi-agent
                systems, and cutting-edge research projects.
              </p>
            </div>
          </div>
          <div className={styles.levelImageBox}>[Image Placeholder]</div>
        </div>

        <div className={styles.domainsGrid}>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🤖</div>
            <h4>Robotics</h4>
            <ul>
              <li>AI robotics systems</li>
              <li>Multi-agent robotics</li>
              <li>Industrial automation</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🔌</div>
            <h4>IoT</h4>
            <ul>
              <li>Edge AI systems</li>
              <li>Cloud-integrated IoT</li>
              <li>Industrial IoT</li>
            </ul>
          </div>
          <div className={`${styles.domainCard} ${styles.highlighted}`}>
            <div className={styles.domainIcon}>🚁</div>
            <h4>Drone</h4>
            <ul>
              <li>Autonomous navigation systems</li>
              <li>Drone AI and mapping</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>🥽</div>
            <h4>VR &amp; AR</h4>
            <ul>
              <li>Simulation environments</li>
              <li>Digital twin systems</li>
            </ul>
          </div>
          <div className={styles.domainCard}>
            <div className={styles.domainIcon}>📱</div>
            <h4>Android Apps</h4>
            <ul>
              <li>AI-integrated applications</li>
              <li>Scalable mobile systems</li>
            </ul>
          </div>
        </div>

        <div className={styles.outcomes}>
          <span className={styles.outcomesLabel}>Learning Outcomes</span>
          <span className={styles.outcomeTag}>AI product development</span>
          <span className={styles.outcomeTag}>Research and innovation capability</span>
          <span className={styles.outcomeTag}>Industry readiness</span>
        </div>
      </section>

      {/* HOW WE TEACH */}
      <section className={styles.methodology}>
        <div className={styles.methodologyHeader}>
          <div className={styles.sectionLabel}>LEARNING METHODOLOGY</div>
          <h2>How We Teach</h2>
          <p>Brighture training follows a hands-on experiential model. Students build real systems instead of only learning theory — aligning with modern EdTech approaches and industry expectations.</p>
        </div>

        <div className={styles.methodCards}>
          <div className={styles.methodCard}>
            <div className={styles.methodIcon}>🏗️</div>
            Project-Based Learning
          </div>
          <div className={styles.methodCard}>
            <div className={styles.methodIcon}>🔧</div>
            Real Hardware Kits
          </div>
          <div className={styles.methodCard}>
            <div className={styles.methodIcon}>🖥️</div>
            Simulation Environments
          </div>
          <div className={styles.methodCard}>
            <div className={styles.methodIcon}>🤖</div>
            AI-Assisted Learning
          </div>
          <div className={styles.methodCard}>
            <div className={styles.methodIcon}>🌍</div>
            Industry-Relevant Problem Solving
          </div>
        </div>

        <div className={styles.benefitsGrid}>
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

        <div className={styles.methodImages}>
          <div className={styles.methodImageBox}>[Image Placeholder]</div>
          <div className={styles.methodImageBox}>[Image Placeholder]</div>
        </div>
      </section>

      {/* ACCREDITATION & PARTNERSHIPS */}
      <section className={styles.accreditation} id="accreditation">
        <div className={styles.accreditationHeader}>
          <div className={styles.sectionLabelDark}>ACCREDITATION &amp; PARTNERSHIPS</div>
          <h2>Trusted. Accredited.<br />Globally Aligned.</h2>
          <p>Brighture collaborates with leading global technology ecosystems and follows internationally recognized standards in AI, robotics, and innovation education.</p>
        </div>

        <div className={styles.stemBadge}>[STEM Accredited Badge]</div>

        <div className={styles.globalBox}>
          <h3>Global Recognition &amp; Standards</h3>
          <p>Our programs are internationally aligned, industry-relevant, and globally benchmarked — ensuring every learner is equipped for the future of work.</p>
          <div className={styles.globalChecks}>
            <span className={styles.globalCheck}>Internationally aligned STEM-based innovation framework</span>
            <span className={styles.globalCheck}>Industry-relevant curriculum and hands-on learning methodology</span>
            <span className={styles.globalCheck}>Globally benchmarked AI and robotics lab design</span>
          </div>
        </div>

        <div className={styles.partnersGrid}>
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoBox}>Unity</div>
            <h4>Unity</h4>
            <div className={styles.partnerSub}>3D, VR/AR Platform — Simulation and Digital Twin Environments</div>
            <p>Unity powers our immersive VR/AR curriculum, simulation environments, and digital twin experiences across Level 3 and Level 4 programs.</p>
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoBox}>DJI</div>
            <h4>DJI</h4>
            <div className={styles.partnerSub}>Drone Technology Leader</div>
            <p>DJI&apos;s drone platforms are integrated across our Drone domain training — from basic flight concepts at Level 1 to autonomous navigation systems at Level 4.</p>
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoBox} style={{ fontSize: '12px', textAlign: 'center' }}>SP Robotic Works</div>
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