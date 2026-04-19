'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './aiLabs.module.css';

type TabKey = 'labs' | 'tech' | 'learning';

export default function AILabsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('labs');

  return (
    <div className={styles.page}>

      {/* NAV */}
      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoBlock}>
              <span>brigh<span className={styles.logoDot}>t</span>ure</span>
              <span className={styles.logoSub}>intelligence simplified.</span>
            </div>
          </Link>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about" className={styles.active}>About Us</Link></li>
            <li><Link href="/ai-labs">AI Labs</Link></li>
            <li><Link href="/ai-trainings">AI Trainings</Link></li>
            <li><Link href="/ai-products">AI Products</Link></li>
            <li><Link href="/platform">Platform</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>AI LABS &amp; INNOVATION PROGRAMS</div>
          <h1 className={styles.heroTitle}>
            Build Your<br />
            <span className={styles.blue}>Innovation</span><br />
            <span className={styles.orange}>Ecosystem</span>
          </h1>
          <p className={styles.heroDesc}>
            Brighture partners with institutions worldwide to create AI Innovation Labs and technology
            ecosystems that empower the next generation of innovators — from schools to global enterprise campuses.
          </p>
          <div className={styles.heroButtons}>
            <Link href="#contact" className={styles.btnPrimary}>Get in Touch →</Link>
            <Link href="#programs" className={styles.btnSecondary}>View Programs</Link>
          </div>
        </div>
        <div className={styles.heroImageBox}>[Image Placeholder]</div>
      </section>

      {/* INNOVATION PROGRAMS */}
      <section id="programs" className={styles.programs}>
        <div className={styles.programsHeader}>
          <div className={styles.sectionLabel}>INNOVATION PROGRAMS</div>
          <h2>Choose Your<br />Innovation Path</h2>
          <p>Four structured programs — from foundational AI exploration to full institutional innovation campuses. Each designed to grow with your institution&apos;s ambition.</p>
        </div>
        <div className={styles.programsGrid}>

          {/* Genesis */}
          <div className={`${styles.programCard} ${styles.genesis}`}>
            <div className={`${styles.programIcon} ${styles.genesis}`} />
            <h3>Genesis</h3>
            <div className={styles.sub}>For Early AI &amp; Robotics Learning</div>
            <ul>
              <li>Core Innovation Labs</li>
              <li>Foundational AI &amp; Robotics</li>
              <li>Hands-on Electronics &amp; IoT</li>
              <li>Design Thinking Approach</li>
            </ul>
            <div className={`${styles.idealTag} ${styles.genesis}`}>✓ Ideal for Schools &amp; Early University</div>
            <Link href="#genesis" className={styles.learnMore}>Learn More →</Link>
          </div>

          {/* Acceleration */}
          <div className={`${styles.programCard} ${styles.accel}`}>
            <div className={`${styles.programIcon} ${styles.accel}`} />
            <h3>Acceleration</h3>
            <div className={styles.sub}>For Applied Engineering &amp; Prototyping</div>
            <ul>
              <li>Multi-domain Innovation Labs</li>
              <li>AI, CV &amp; Edge Computing</li>
              <li>Real-world Product Development</li>
              <li>Simulation-based Learning</li>
            </ul>
            <div className={`${styles.idealTag} ${styles.accel}`}>✓ Ideal for Schools, Universities &amp; Skill Programs</div>
            <Link href="#acceleration" className={styles.learnMore}>Learn More →</Link>
          </div>

          {/* Discovery */}
          <div className={`${styles.programCard} ${styles.discovery}`}>
            <div className={`${styles.programIcon} ${styles.discovery}`} />
            <h3>Discovery</h3>
            <div className={styles.sub}>For Advanced Research &amp; Innovation</div>
            <ul>
              <li>Full-stack AI &amp; Robotics Labs</li>
              <li>Autonomous Systems &amp; Drones</li>
              <li>GPU-powered AI Infrastructure</li>
              <li>Digital Twin &amp; Simulation</li>
            </ul>
            <div className={`${styles.idealTag} ${styles.discovery}`}>✓ Ideal for Universities &amp; Research Centers</div>
            <Link href="#discovery" className={styles.learnMore}>Learn More →</Link>
          </div>

          {/* Nexus Campus */}
          <div className={`${styles.programCard} ${styles.nexus}`}>
            <div className={`${styles.programIcon} ${styles.nexus}`} />
            <h3>Nexus Campus</h3>
            <div className={styles.sub}>For Institutional AI Ecosystem</div>
            <ul>
              <li>End-to-End Innovation Campus</li>
              <li>Industrial &amp; Physical AI Platforms</li>
              <li>Smart Manufacturing Labs</li>
              <li>Cloud + AI Compute Infrastructure</li>
            </ul>
            <div className={`${styles.idealTag} ${styles.nexus}`}>✓ Ideal for Universities, Enterprises &amp; Governments</div>
            <Link href="#nexus" className={styles.learnMore}>Learn More →</Link>
          </div>

        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section className={styles.audience}>
        <div className={styles.audienceHeader}>
          <div className={styles.sectionLabel}>WHO IT&apos;S FOR</div>
          <h2>Target Audience</h2>
          <p>Each program is designed for a specific institution type and level of innovation maturity.</p>
        </div>
        <div className={styles.audienceGrid}>
          <div className={`${styles.audienceCard} ${styles.genesis}`}>
            <div className={`${styles.audienceIcon} ${styles.programIcon} ${styles.genesis}`} />
            <h3>Genesis</h3>
            <div className={styles.level}>FOUNDATION LEVEL</div>
            <p>Schools and early-stage universities taking their first steps into AI, robotics, and technology innovation.</p>
          </div>
          <div className={`${styles.audienceCard} ${styles.accel}`}>
            <div className={`${styles.audienceIcon} ${styles.programIcon} ${styles.accel}`} />
            <h3>Acceleration</h3>
            <div className={styles.level}>INTERMEDIATE LEVEL</div>
            <p>Schools, universities, and skill development programs ready to build real-world AI and robotics systems.</p>
          </div>
          <div className={`${styles.audienceCard} ${styles.discovery}`}>
            <div className={`${styles.audienceIcon} ${styles.programIcon} ${styles.discovery}`} />
            <h3>Discovery</h3>
            <div className={styles.level}>ADVANCED LEVEL</div>
            <p>Universities, innovation centers, and research institutions pursuing cutting-edge AI development and autonomous systems.</p>
          </div>
          <div className={`${styles.audienceCard} ${styles.nexus}`}>
            <div className={`${styles.audienceIcon} ${styles.programIcon} ${styles.nexus}`} />
            <h3>Nexus Campus</h3>
            <div className={styles.level}>ENTERPRISE LEVEL</div>
            <p>Universities, enterprises, and government entities building full-scale institutional AI innovation ecosystems.</p>
          </div>
        </div>
      </section>

      {/* EVERY PROGRAM INCLUDES */}
      <div className={styles.everyProgram}>
        <div className={styles.epLabel}>Every Program Includes</div>
        <div className={styles.epItem}>Innovation Lab Design &amp; Planning</div>
        <div className={styles.epItem}>Technology Infrastructure Deployment</div>
        <div className={styles.epItem}>Hardware and Software Platforms</div>
        <div className={styles.epItem}>Educator Training &amp; Enablement</div>
        <div className={styles.epItem}>Project-Based Learning Frameworks</div>
        <div className={styles.epItem}>Innovation Challenges &amp; Hackathons</div>
      </div>

      {/* WHY BRIGHTURE */}
      <div className={styles.whyBrighture}>
        <h3>Why Institutions Choose Brighture</h3>
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}><div className={styles.whyIcon}>🏛️</div>Future-ready technology infrastructure</div>
          <div className={styles.whyCard}><div className={styles.whyIcon}>🤖</div>Hands-on AI and robotics experimentation</div>
          <div className={styles.whyCard}><div className={styles.whyIcon}>🔬</div>Research and innovation capability development</div>
          <div className={styles.whyCard}><div className={styles.whyIcon}>⚙️</div>Industry-aligned technology programs</div>
          <div className={styles.whyCard}><div className={styles.whyIcon}>🌐</div>Global innovation ecosystem integration</div>
        </div>
      </div>

      {/* GENESIS DETAIL */}
      <section className={styles.programDetail} id="genesis">
        <div className={styles.programDetailInner}>
          <div className={styles.programDetailLeft}>
            <div className={`${styles.programBadge} ${styles.genesis}`}>
              <div className={`${styles.badgeDot} ${styles.genesis}`} />GENESIS
            </div>
            <h2>For Early AI &amp; Robotics Learning</h2>
            <div className={styles.tagsRow}>
              <span className={styles.tagPill}>Core Innovation Labs</span>
              <span className={styles.tagPill}>Foundational AI &amp; Robotics</span>
              <span className={styles.tagPill}>Hands-on Electronics &amp; IoT</span>
              <span className={styles.tagPill}>Design Thinking Approach</span>
            </div>
            <p>The Genesis program introduces students and early learners to the world of artificial intelligence and robotics through guided, hands-on exploration. This foundational program is designed to spark curiosity, build creative confidence, and establish core technical skills through design thinking and practical experimentation.</p>
            <div className={styles.metaTags}>
              <span className={styles.metaTagIdeal}>✓ Ideal for Schools &amp; Early University Programs</span>
              <span className={styles.metaTagLab}>Lab Focus: Technology exploration and foundational innovation skills.</span>
            </div>
          </div>
          <div className={styles.programImageBox}>[Image Placeholder]</div>
        </div>
        <div className={styles.detailColumns}>
          <div className={`${styles.detailCol} ${styles.genesis}`}>
            <h4>Included Innovation Labs</h4>
            <ul><li>AI Innovation Lab</li><li>Robotics Innovation Lab</li><li>Embedded Systems Innovation Lab</li><li>Innovation Studio</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.genesis}`}>
            <h4>Technology Platforms</h4>
            <ul><li>Educational robotics platforms</li><li>Microcontrollers and development boards</li><li>Basic AI experimentation platforms</li><li>Sensors and IoT devices</li><li>Electronics prototyping kits</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.genesis}`}>
            <h4>Learning Programs</h4>
            <ul><li>Introduction to Artificial Intelligence</li><li>Robotics Programming</li><li>Electronics and Embedded Systems</li><li>Engineering Design Thinking</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.genesis}`}>
            <h4>Implementation Support</h4>
            <ul><li>Lab design consultation</li><li>Hardware setup and installation</li><li>Educator training workshops</li><li>Learning program framework</li></ul>
          </div>
        </div>
      </section>

      {/* ACCELERATION DETAIL */}
      <section className={styles.programDetail} id="acceleration">
        <div className={styles.programDetailInner}>
          <div className={styles.programDetailLeft}>
            <div className={`${styles.programBadge} ${styles.accel}`}>
              <div className={`${styles.badgeDot} ${styles.accel}`} />ACCELERATION
            </div>
            <h2>For Applied Engineering &amp; Prototyping</h2>
            <div className={styles.tagsRow}>
              <span className={styles.tagPill}>Multi-domain Innovation Labs</span>
              <span className={styles.tagPill}>AI, CV &amp; Edge Computing</span>
              <span className={styles.tagPill}>Real-world Product Development</span>
              <span className={styles.tagPill}>Simulation-based Learning</span>
            </div>
            <p>The Acceleration program moves beyond fundamentals to applied engineering and real-world product development. Learners work across multiple domains — AI, computer vision, edge computing, and automation — building systems that solve genuine challenges through simulation and hands-on prototyping.</p>
            <div className={styles.metaTags}>
              <span className={styles.metaTagIdeal}>✓ Ideal for Schools, Universities &amp; Skill Programs</span>
              <span className={styles.metaTagLab}>Lab Focus: Development of intelligent systems and real-world applications.</span>
            </div>
          </div>
          <div className={styles.programImageBox}>[Image Placeholder]</div>
        </div>
        <div className={styles.detailColumns}>
          <div className={`${styles.detailCol} ${styles.accel}`}>
            <h4>Included Innovation Labs</h4>
            <ul><li>AI Innovation Lab</li><li>Robotics Innovation Lab</li><li>Computer Vision Innovation Lab</li><li>Embedded Systems Innovation Lab</li><li>Autonomous Systems Lab</li><li>Innovation Studio</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.accel}`}>
            <h4>Technology Platforms</h4>
            <ul><li>Advanced robotics platforms</li><li>AI development workstations</li><li>Computer vision systems</li><li>Edge AI devices</li><li>IoT development platforms</li><li>Simulation environments</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.accel}`}>
            <h4>Learning Programs</h4>
            <ul><li>Machine Learning Applications</li><li>Robotics Engineering</li><li>Computer Vision Development</li><li>Automation Systems</li><li>Product Prototyping</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.accel}`}>
            <h4>Implementation Support</h4>
            <ul><li>Technology deployment and integration</li><li>Educator certification programs</li><li>Innovation project frameworks</li><li>Student innovation challenges</li></ul>
          </div>
        </div>
      </section>

      {/* DISCOVERY DETAIL */}
      <section className={styles.programDetail} id="discovery">
        <div className={styles.programDetailInner}>
          <div className={styles.programDetailLeft}>
            <div className={`${styles.programBadge} ${styles.discovery}`}>
              <div className={`${styles.badgeDot} ${styles.discovery}`} />DISCOVERY
            </div>
            <h2>For Advanced Research &amp; Innovation</h2>
            <div className={styles.tagsRow}>
              <span className={styles.tagPill}>Full-stack AI &amp; Robotics Labs</span>
              <span className={styles.tagPill}>Autonomous Systems &amp; Drones</span>
              <span className={styles.tagPill}>GPU-powered AI Infrastructure</span>
              <span className={styles.tagPill}>Digital Twin &amp; Simulation</span>
            </div>
            <p>The Discovery program is built for institutions that are ready to pursue cutting-edge research, advanced autonomous systems, and high-performance AI development. With GPU-powered infrastructure, drone platforms, and digital twin environments, this program transforms universities and research centers into true innovation powerhouses.</p>
            <div className={styles.metaTags}>
              <span className={styles.metaTagIdeal}>✓ Ideal for Universities &amp; Research Centers</span>
              <span className={styles.metaTagLab}>Lab Focus: Advanced research, experimentation, and product innovation.</span>
            </div>
          </div>
          <div className={styles.programImageBox}>[Image Placeholder]</div>
        </div>
        <div className={styles.detailColumns}>
          <div className={`${styles.detailCol} ${styles.discovery}`}>
            <h4>Included Innovation Labs</h4>
            <ul><li>AI Innovation Lab</li><li>Physical AI Innovation Lab</li><li>Robotics Engineering Lab</li><li>Computer Vision Lab</li><li>Autonomous Systems Lab</li><li>Embedded Systems Lab</li><li>Innovation Studio</li><li>AI Research Center</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.discovery}`}>
            <h4>Technology Platforms</h4>
            <ul><li>Advanced robotics platforms</li><li>Autonomous mobile robots</li><li>Robotic arms and manipulators</li><li>AI training servers and GPUs</li><li>Autonomous drone platforms</li><li>Simulation and digital twin environments</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.discovery}`}>
            <h4>Learning &amp; Research Programs</h4>
            <ul><li>Advanced AI Development</li><li>Autonomous Systems Engineering</li><li>Robotics Perception and Planning</li><li>Reinforcement Learning</li><li>AI Product Development</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.discovery}`}>
            <h4>Implementation Support</h4>
            <ul><li>Research infrastructure setup</li><li>Advanced educator training</li><li>Industry collaboration programs</li><li>Student startup incubation initiatives</li></ul>
          </div>
        </div>
      </section>

      {/* NEXUS CAMPUS DETAIL */}
      <section className={styles.programDetail} id="nexus">
        <div className={styles.programDetailInner}>
          <div className={styles.programDetailLeft}>
            <div className={`${styles.programBadge} ${styles.nexus}`}>
              <div className={`${styles.badgeDot} ${styles.nexus}`} />NEXUS CAMPUS
            </div>
            <h2>For Institutional AI Ecosystem</h2>
            <div className={styles.tagsRow}>
              <span className={styles.tagPill}>End-to-End Innovation Campus</span>
              <span className={styles.tagPill}>Industrial &amp; Physical AI Platforms</span>
              <span className={styles.tagPill}>Smart Manufacturing Labs</span>
              <span className={styles.tagPill}>Cloud + AI Compute Infrastructure</span>
            </div>
            <p>The Nexus Campus is Brighture&apos;s most comprehensive offering — a full-scale institutional AI ecosystem that integrates every lab, every platform, and every program into one cohesive innovation campus. Designed for universities, enterprises, and governments seeking to become global centers for technology innovation, Nexus Campus transforms institutions into leaders in the AI-driven future.</p>
            <div className={styles.metaTags}>
              <span className={styles.metaTagIdeal}>✓ Ideal for Universities, Enterprises &amp; Government Entities</span>
              <span className={styles.metaTagLab}>Lab Focus: Integrates multiple labs and innovation spaces to create a full technology ecosystem.</span>
            </div>
          </div>
          <div className={styles.programImageBox}>[Image Placeholder]</div>
        </div>
        <div className={styles.detailColumns}>
          <div className={`${styles.detailCol} ${styles.nexus}`}>
            <h4>Included Innovation Labs</h4>
            <ul><li>AI Innovation Lab</li><li>Robotics Engineering Lab</li><li>Autonomous Systems Lab</li><li>Computer Vision Lab</li><li>Embedded Systems Lab</li><li>Smart Manufacturing Lab</li><li>Innovation Studio</li><li>AI Research Center</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.nexus}`}>
            <h4>Technology Platforms</h4>
            <ul><li>Artificial Intelligence Platform</li><li>Robotics &amp; Autonomous Systems Platform</li><li>Physical AI Platform</li><li>Industrial AI Platform</li><li>Autonomous Mobility Platform</li><li>AI Compute &amp; Cloud Infrastructure</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.nexus}`}>
            <h4>Learning &amp; Research Programs</h4>
            <ul><li>Artificial Intelligence &amp; Machine Learning</li><li>Robotics &amp; Autonomous Systems</li><li>Physical AI &amp; Intelligent Machines</li><li>Industrial AI &amp; Smart Manufacturing</li><li>Autonomous Systems &amp; Mobility</li><li>Innovation &amp; AI Entrepreneurship</li><li>AI for Industry &amp; Enterprise Applications</li><li>Advanced Research &amp; Fellowship Programs</li></ul>
          </div>
          <div className={`${styles.detailCol} ${styles.nexus}`}>
            <h4>Implementation Support</h4>
            <ul><li>End-to-end innovation campus design</li><li>Research infrastructure setup</li><li>Advanced educator training</li><li>Industry collaboration programs</li><li>Student startup incubation initiatives</li></ul>
          </div>
        </div>
      </section>

      {/* PROGRAM COMPARISON */}
      <section className={styles.comparison} id="comparison">
        <div className={styles.comparisonHeader}>
          <div className={styles.sectionLabel}>PROGRAM COMPARISON</div>
          <h2>Compare All Programs</h2>
          <p>See exactly what each program includes across labs, technology platforms, and learning depth.</p>
        </div>
        <div className={styles.tabGroup}>
          {(['labs', 'tech', 'learning'] as TabKey[]).map((tab) => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'labs' ? 'Innovation Labs' : tab === 'tech' ? 'Technology Platforms' : 'Learning Depth'}
            </button>
          ))}
        </div>

        {/* Innovation Labs Table */}
        <div className={`${styles.tabContent} ${activeTab === 'labs' ? styles.active : ''}`}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Innovation Lab</th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.genesis}`} /><span className={styles.thGenesis}>Genesis</span></div></th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.accel}`} /><span className={styles.thAccel}>Acceleration</span></div></th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.discovery}`} /><span className={styles.thDiscovery}>Discovery</span></div></th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.nexus}`} /><span className={styles.thNexus}>Nexus Campus</span></div></th>
              </tr>
            </thead>
            <tbody>
              <tr><td>AI Innovation Lab</td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Robotics Lab</td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Embedded Systems Lab</td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Innovation Studio</td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Computer Vision Lab</td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Autonomous Systems Lab</td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>AI Research Center</td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Smart Manufacturing Lab</td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td></tr>
            </tbody>
          </table>
        </div>

        {/* Technology Platforms Table */}
        <div className={`${styles.tabContent} ${activeTab === 'tech' ? styles.active : ''}`}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Technology Platform</th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.genesis}`} /><span className={styles.thGenesis}>Genesis</span></div></th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.accel}`} /><span className={styles.thAccel}>Acceleration</span></div></th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.discovery}`} /><span className={styles.thDiscovery}>Discovery</span></div></th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.nexus}`} /><span className={styles.thNexus}>Nexus Campus</span></div></th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Educational Robotics</td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td></tr>
              <tr><td>AI Workstations</td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Edge AI Devices</td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Digital Twin</td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Autonomous Robots</td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Drone Platforms</td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>AI Cloud Infrastructure</td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td></tr>
            </tbody>
          </table>
        </div>

        {/* Learning Depth Table */}
        <div className={`${styles.tabContent} ${activeTab === 'learning' ? styles.active : ''}`}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Learning Area</th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.genesis}`} /><span className={styles.thGenesis}>Genesis</span></div></th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.accel}`} /><span className={styles.thAccel}>Acceleration</span></div></th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.discovery}`} /><span className={styles.thDiscovery}>Discovery</span></div></th>
                <th><div className={styles.thLabel}><div className={`${styles.colDot} ${styles.nexus}`} /><span className={styles.thNexus}>Nexus Campus</span></div></th>
              </tr>
            </thead>
            <tbody>
              <tr><td>AI Fundamentals</td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Machine Learning</td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Computer Vision</td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Autonomous Systems</td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Reinforcement Learning</td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Research &amp; Fellowships</td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Industrial AI</td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>AI Entrepreneurship</td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.na}>NA</span></td><td><span className={styles.check}>✓</span></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer} id="contact">
        <p>© 2024 Brighture. All rights reserved.</p>
      </footer>

    </div>
  );
}