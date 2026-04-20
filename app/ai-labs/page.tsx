'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './aiLabs.module.css';
import heroStyles from './heroSection.module.css';

type TabKey = 'labs' | 'tech' | 'learning';

export default function AILabsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('labs');

  return (
    <div className={`${styles.page} ${heroStyles.lightTheme}`}>

      {/* MODERN HERO SECTION */}
      <motion.section
        className={heroStyles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Elements */}
        <div className={heroStyles.backgroundLayer}>
          <div className={heroStyles.gridPattern} />
          <div className={heroStyles.bgGradient} />
        </div>

        {/* Content */}
        <div className={heroStyles.contentWrapper}>
          <div className={heroStyles.heroContent}>
            
            {/* LEFT - Text */}
            <motion.div
              className={heroStyles.leftColumn}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >

              <h1 className={heroStyles.headline}>
                build the <span className={heroStyles.gradientText}>future</span> of <br />
                <span className={heroStyles.highlightText}>innovation</span> ecosystems.
              </h1>

              <p className={heroStyles.description}>
                Brighture partners with institutions worldwide to create AI Innovation Labs
                and technology ecosystems that empower the next generation of innovators —
                from schools to global enterprise campuses.
              </p>

              <div className={heroStyles.metrics}>
                <div className={heroStyles.metric}>
                  <span className={heroStyles.metricValue}>4</span>
                  <span className={heroStyles.metricLabel}>Innovation Programs</span>
                </div>

                <div className={heroStyles.metric}>
                  <span className={heroStyles.metricValue}>8+</span>
                  <span className={heroStyles.metricLabel}>Specialized Lab Types</span>
                </div>

                <div className={heroStyles.metric}>
                  <span className={heroStyles.metricValue}>4+</span>
                  <span className={heroStyles.metricLabel}>Global Locations</span>
                </div>

                <div className={heroStyles.metric}>
                  <span className={heroStyles.metricValue}>∞</span>
                  <span className={heroStyles.metricLabel}>Innovation Possibilities</span>
                </div>
              </div>

              <div className={heroStyles.ctaGroup}>
                <Link href="#contact" className={heroStyles.btnPrimary}>
                  <span>Get in Touch</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="#programs" className={heroStyles.btnSecondary}>
                  <span>Explore Programs</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT - Visual */}
            <motion.div
              className={heroStyles.rightColumn}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className={heroStyles.visualContainer}>
                <div className={heroStyles.shapeBg}>
                  <div className={heroStyles.shape1} />
                  <div className={heroStyles.shape2} />
                  <div className={heroStyles.shape3} />
                </div>
                <div className={heroStyles.imageBox}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className={heroStyles.heroVideo}
                  >
                    <source src="/video/ai-labs/hero-labs.mp4" type="video/mp4" />
                    <img src="/images/hero-robots.png" alt="AI Robotics" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* INNOVATION PROGRAMS */}
      <section id="programs" className={styles.programs}>
        <div className={styles.programsHeader}>
          <div className={styles.sectionLabel}>INNOVATION PROGRAMS</div>
          <h2>Choose Your<br />Innovation Path</h2>
          <p>
            Four structured programs — from foundational AI exploration to full
            institutional innovation campuses. Each designed to grow with your
            institution&apos;s ambition.
          </p>
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
              <li>Industry-aligned Research</li>
            </ul>
            <div className={`${styles.idealTag} ${styles.discovery}`}>✓ Ideal for Research Universities &amp; Enterprise R&amp;D</div>
            <Link href="#discovery" className={styles.learnMore}>Learn More →</Link>
          </div>

          {/* Nexus Campus */}
          <div className={`${styles.programCard} ${styles.nexus}`}>
            <div className={`${styles.programIcon} ${styles.nexus}`} />
            <h3>Nexus Campus</h3>
            <div className={styles.sub}>Full-Scale Innovation Ecosystem</div>
            <ul>
              <li>Complete Innovation Campus</li>
              <li>Integrated Research &amp; Industry Programs</li>
              <li>Startup &amp; Entrepreneur Incubation</li>
              <li>Enterprise Technology Partnerships</li>
            </ul>
            <div className={`${styles.idealTag} ${styles.nexus}`}>✓ Ideal for Premier Universities &amp; Global Enterprises</div>
            <Link href="#nexus" className={styles.learnMore}>Learn More →</Link>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section className={styles.audience} id="audience">
        <div className={styles.audienceHeader}>
          <h2>Who Should Explore Brighture?</h2>
          <p>Whether you&apos;re a school, university, enterprise, or research center, we have a program designed for your institution&apos;s innovation journey.</p>
        </div>
        <div className={styles.audienceGrid}>
          {/* Genesis Audience */}
          <div className={`${styles.audienceCard} ${styles.genesis}`}>
            <div className={`${styles.audienceIcon} ${styles.genesis}`} />
            <h3>Schools &amp; <br/>Colleges</h3>
            <p>Introduce students to AI and robotics through hands-on exploration and foundational learning.</p>
            <div className={`${styles.level} ${styles.genesis}`}>IDEAL FOR GENESIS</div>
          </div>

          {/* Acceleration Audience */}
          <div className={`${styles.audienceCard} ${styles.accel}`}>
            <div className={`${styles.audienceIcon} ${styles.accel}`} />
            <h3>Universities &amp; <br/>Skill Programs</h3>
            <p>Equip students with applied engineering skills and real-world problem-solving capabilities.</p>
            <div className={`${styles.level} ${styles.accel}`}>IDEAL FOR ACCELERATION</div>
          </div>

          {/* Discovery Audience */}
          <div className={`${styles.audienceCard} ${styles.discovery}`}>
            <div className={`${styles.audienceIcon} ${styles.discovery}`} />
            <h3>Research &amp; <br/>Innovation Centers</h3>
            <p>Advance cutting-edge research with full-stack AI labs and autonomous systems infrastructure.</p>
            <div className={`${styles.level} ${styles.discovery}`}>IDEAL FOR DISCOVERY</div>
          </div>

          {/* Nexus Audience */}
          <div className={`${styles.audienceCard} ${styles.nexus}`}>
            <div className={`${styles.audienceIcon} ${styles.nexus}`} />
            <h3>Global Enterprises &amp; <br/>Institutions</h3>
            <p>Build complete innovation campuses with research, entrepreneurship, and industry integration.</p>
            <div className={`${styles.level} ${styles.nexus}`}>IDEAL FOR NEXUS CAMPUS</div>
          </div>
        </div>
      </section>

      {/* EVERY PROGRAM INCLUDES */}
      <section className={styles.everyProgram}>
        <div className={styles.epLabel}>Every Brighture Program Includes:</div>
        <div className={styles.epItem}>Advanced Educator Training &amp; Support</div>
        <div className={styles.epItem}>Cutting-edge Technology &amp; Equipment</div>
        <div className={styles.epItem}>Industry Partnership Ecosystem</div>
        <div className={styles.epItem}>Student Success &amp; Career Pathways</div>
        <div className={styles.epItem}>Ongoing Innovation Consulting</div>
      </section>

      {/* WHY BRIGHTURE */}
      <section className={styles.whyBrighture}>
        <h3>Why Choose Brighture?</h3>
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🧠</div>
            <strong>Cutting-Edge Curriculum</strong>
            <p>Designed by industry experts and updated continuously.</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🤝</div>
            <strong>Industry Partnerships</strong>
            <p>Connect students with leading tech companies and research labs.</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🚀</div>
            <strong>Proven Track Record</strong>
            <p>100+ institutions, 50K+ trained students worldwide.</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>💡</div>
            <strong>End-to-End Support</strong>
            <p>From setup to scaling, we support your innovation journey.</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🌍</div>
            <strong>Global Community</strong>
            <p>Access to a worldwide network of innovators and leaders.</p>
          </div>
        </div>
      </section>

      {/* PROGRAM DETAILS - Genesis */}
      <section className={styles.programDetail} id="genesis">
        <div className={styles.programDetailInner}>
          <div className={styles.programDetailLeft}>
            <div className={`${styles.programBadge} ${styles.genesis}`}>
              <div className={`${styles.badgeDot} ${styles.genesis}`} />
              GENESIS PROGRAM
            </div>
            <h2>Genesis: Early AI &amp; Robotics Innovation</h2>
            <div className={styles.tagsRow}>
              <span className={styles.tagPill}>Foundational</span>
              <span className={styles.tagPill}>Schools &amp; Colleges</span>
              <span className={styles.tagPill}>Ages 12-18</span>
            </div>
            <p>Genesis is designed for students just beginning their AI and robotics journey. Through hands-on exploration and design thinking, students gain foundational knowledge in artificial intelligence, robotics, electronics, and IoT devices.</p>
            <p>Perfect for schools and early university programs looking to introduce cutting-edge technology in an engaging, accessible way.</p>
            <div className={styles.metaTags}>
              <div className={styles.metaTagIdeal}>Ideal for K-12 &amp; Early University</div>
              <div className={styles.metaTagLab}>Core Innovation Labs</div>
            </div>
          </div>
          <div className={`${styles.programImageBox} ${styles.genesis}`} />
        </div>
        <div className={styles.detailColumns}>
          <div className={`${styles.detailCol} ${styles.genesis}`}>
            <h4>Innovation Labs</h4>
            <ul>
              <li>AI Innovation Lab</li>
              <li>Robotics Lab</li>
              <li>Electronics &amp; IoT Lab</li>
              <li>Innovation Studio</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.genesis}`}>
            <h4>Core Topics</h4>
            <ul>
              <li>AI &amp; Machine Learning Basics</li>
              <li>Robotics Fundamentals</li>
              <li>Electronics &amp; Circuitry</li>
              <li>Design Thinking &amp; Innovation</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.genesis}`}>
            <h4>Learning Format</h4>
            <ul>
              <li>Hands-on Project-Based</li>
              <li>Small Group Collaboration</li>
              <li>Monthly Challenges &amp; Competitions</li>
              <li>Student Showcases</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.genesis}`}>
            <h4>Support Provided</h4>
            <ul>
              <li>Teacher Training Program</li>
              <li>Lab Equipment &amp; Setup</li>
              <li>Curriculum Materials</li>
              <li>Ongoing Technical Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROGRAM DETAILS - Acceleration */}
      <section className={styles.programDetail} id="acceleration">
        <div className={styles.programDetailInner}>
          <div className={styles.programDetailLeft}>
            <div className={`${styles.programBadge} ${styles.accel}`}>
              <div className={`${styles.badgeDot} ${styles.accel}`} />
              ACCELERATION PROGRAM
            </div>
            <h2>Acceleration: Applied Engineering &amp; Prototyping</h2>
            <div className={styles.tagsRow}>
              <span className={styles.tagPill}>Advanced</span>
              <span className={styles.tagPill}>Universities &amp; Skill Centers</span>
              <span className={styles.tagPill}>Ages 18+</span>
            </div>
            <p>Acceleration bridges the gap between foundational learning and industry-ready skills. Students work on real-world projects involving AI, computer vision, edge computing, and robotic systems while building portfolio-ready work.</p>
            <p>Ideal for universities, skill development programs, and emerging tech professionals seeking hands-on experience with cutting-edge technologies.</p>
            <div className={styles.metaTags}>
              <div className={styles.metaTagIdeal}>Ideal for Universities &amp; Skill Programs</div>
              <div className={styles.metaTagLab}>Multi-Domain Innovation Labs</div>
            </div>
          </div>
          <div className={`${styles.programImageBox} ${styles.accel}`} />
        </div>
        <div className={styles.detailColumns}>
          <div className={`${styles.detailCol} ${styles.accel}`}>
            <h4>Innovation Labs</h4>
            <ul>
              <li>AI Innovation Lab</li>
              <li>Computer Vision Lab</li>
              <li>Robotics Lab</li>
              <li>Autonomous Systems Lab</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.accel}`}>
            <h4>Core Topics</h4>
            <ul>
              <li>Machine Learning &amp; Deep Learning</li>
              <li>Computer Vision Systems</li>
              <li>Autonomous Robotics</li>
              <li>Edge AI &amp; IoT Applications</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.accel}`}>
            <h4>Learning Format</h4>
            <ul>
              <li>Project-Based Learning</li>
              <li>Industry Mentorship</li>
              <li>Capstone Projects</li>
              <li>Innovation Challenges</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.accel}`}>
            <h4>Support Provided</h4>
            <ul>
              <li>Advanced Equipment Setup</li>
              <li>Educator Certification</li>
              <li>Industry Connections</li>
              <li>Career Support Services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROGRAM DETAILS - Discovery */}
      <section className={styles.programDetail} id="discovery">
        <div className={styles.programDetailInner}>
          <div className={styles.programDetailLeft}>
            <div className={`${styles.programBadge} ${styles.discovery}`}>
              <div className={`${styles.badgeDot} ${styles.discovery}`} />
              DISCOVERY PROGRAM
            </div>
            <h2>Discovery: Advanced Research &amp; Innovation</h2>
            <div className={styles.tagsRow}>
              <span className={styles.tagPill}>Research-Focused</span>
              <span className={styles.tagPill}>Research Universities</span>
              <span className={styles.tagPill}>Graduate &amp; PhD Students</span>
            </div>
            <p>Discovery enables institutions to establish full-stack AI and robotics research centers. With GPU-powered infrastructure, autonomous systems capability, and industry-aligned research programs, Discovery supports cutting-edge innovation and academic advancement.</p>
            <p>Perfect for research universities and enterprise R&amp;D centers pursuing advanced AI innovation and autonomous systems development.</p>
            <div className={styles.metaTags}>
              <div className={styles.metaTagIdeal}>Ideal for Research Universities &amp; Enterprise R&amp;D</div>
              <div className={styles.metaTagLab}>Full-Stack AI Research Labs</div>
            </div>
          </div>
          <div className={`${styles.programImageBox} ${styles.discovery}`} />
        </div>
        <div className={styles.detailColumns}>
          <div className={`${styles.detailCol} ${styles.discovery}`}>
            <h4>Innovation Labs</h4>
            <ul>
              <li>AI Research Center</li>
              <li>Autonomous Systems Lab</li>
              <li>Computer Vision Lab</li>
              <li>Advanced Robotics Lab</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.discovery}`}>
            <h4>Core Topics</h4>
            <ul>
              <li>Advanced Deep Learning &amp; Research</li>
              <li>Reinforcement Learning</li>
              <li>Autonomous System Design</li>
              <li>GPU Computing &amp; Cloud AI</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.discovery}`}>
            <h4>Learning Format</h4>
            <ul>
              <li>Research-First Approach</li>
              <li>Publication &amp; Patenting Support</li>
              <li>Industry Collaboration</li>
              <li>Advanced Seminars &amp; Workshops</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.discovery}`}>
            <h4>Support Provided</h4>
            <ul>
              <li>GPU Infrastructure Setup</li>
              <li>Research Lab Design</li>
              <li>Industry Partnership Facilitation</li>
              <li>Grant Writing Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROGRAM DETAILS - Nexus */}
      <section className={styles.programDetail} id="nexus">
        <div className={styles.programDetailInner}>
          <div className={styles.programDetailLeft}>
            <div className={`${styles.programBadge} ${styles.nexus}`}>
              <div className={`${styles.badgeDot} ${styles.nexus}`} />
              NEXUS CAMPUS
            </div>
            <h2>Nexus Campus: Full-Scale Innovation Ecosystem</h2>
            <div className={styles.tagsRow}>
              <span className={styles.tagPill}>Enterprise-Scale</span>
              <span className={styles.tagPill}>Global Institutions</span>
              <span className={styles.tagPill}>All Levels</span>
            </div>
            <p>Nexus Campus represents the pinnacle of AI and robotics innovation ecosystems. A complete, integrated campus combining Genesis, Acceleration, and Discovery programs with startup incubation, industry partnerships, and entrepreneurship pathways.</p>
            <p>Designed for premier universities and global enterprises seeking to become leading innovation hubs for AI and robotics technology.</p>
            <div className={styles.metaTags}>
              <div className={styles.metaTagIdeal}>Ideal for Premier Institutions &amp; Global Enterprises</div>
              <div className={styles.metaTagLab}>Complete Innovation Campus</div>
            </div>
          </div>
          <div className={`${styles.programImageBox} ${styles.nexus}`} />
        </div>
        <div className={styles.detailColumns}>
          <div className={`${styles.detailCol} ${styles.nexus}`}>
            <h4>Technology Platforms</h4>
            <ul>
              <li>Artificial Intelligence Platform</li>
              <li>Robotics &amp; Autonomous Systems Platform</li>
              <li>Physical AI Platform</li>
              <li>Industrial AI Platform</li>
              <li>Autonomous Mobility Platform</li>
              <li>AI Compute &amp; Cloud Infrastructure</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.nexus}`}>
            <h4>Learning &amp; Research Programs</h4>
            <ul>
              <li>Artificial Intelligence &amp; Machine Learning</li>
              <li>Robotics &amp; Autonomous Systems</li>
              <li>Physical AI &amp; Intelligent Machines</li>
              <li>Industrial AI &amp; Smart Manufacturing</li>
              <li>Autonomous Systems &amp; Mobility</li>
              <li>Innovation &amp; AI Entrepreneurship</li>
              <li>AI for Industry &amp; Enterprise Applications</li>
              <li>Advanced Research &amp; Fellowship Programs</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.nexus}`}>
            <h4>Implementation Support</h4>
            <ul>
              <li>End-to-end innovation campus design</li>
              <li>Research infrastructure setup</li>
              <li>Advanced educator training</li>
              <li>Industry collaboration programs</li>
              <li>Student startup incubation initiatives</li>
            </ul>
          </div>
          <div className={`${styles.detailCol} ${styles.nexus}`}>
            <h4>Ecosystem Integration</h4>
            <ul>
              <li>Startup Incubation Programs</li>
              <li>Industry Advisory Boards</li>
              <li>Government &amp; Research Partnerships</li>
              <li>Entrepreneurship Pathways</li>
            </ul>
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
              <tr><td>Computer Vision Lab</td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Autonomous Systems Lab</td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>AI Research Center</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Smart Manufacturing Lab</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td></tr>
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
              <tr><td>Educational Robotics</td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td></tr>
              <tr><td>AI Workstations</td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Edge AI Devices</td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Digital Twin</td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Autonomous Robots</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Drone Platforms</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>AI Cloud Infrastructure</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td></tr>
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
              <tr><td>Machine Learning</td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Computer Vision</td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Autonomous Systems</td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Reinforcement Learning</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Research &amp; Fellowships</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>Industrial AI</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td></tr>
              <tr><td>AI Entrepreneurship</td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.na}>--</span></td><td><span className={styles.check}>✓</span></td></tr>
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