'use client';

import Link from 'next/link';
import styles from './aiProducts.module.css';

export default function AIProductsPage() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>AI PRODUCTS</div>
          <h1 className={styles.heroTitle}>
            Smarter Intelligence.<br />
            <span className={styles.blue}>Anywhere.</span>{' '}
            <span className={styles.orange}>Anytime.</span>
          </h1>
          <p className={styles.heroDesc}>
            A new era of computing is emerging — where intelligence moves beyond the cloud and
            into the real world. Brighture delivers high-performance AI products that enable
            organizations, institutions, and innovators to build, deploy, and scale intelligent
            applications seamlessly.
          </p>
          <div className={styles.heroButtons}>
            <Link href="#contact" className={styles.btnPrimary}>Request a Demo →</Link>
            <Link href="#edge" className={styles.btnSecondary}>Edge AI Systems</Link>
          </div>
        </div>
        <div className={styles.heroImageBox}>[Image Placeholder]</div>
      </section>

      {/* STATS */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNum}>2</div>
          <div className={styles.statLabel}>Product Lines</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>6</div>
          <div className={styles.statLabel}>Safety Products</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>5</div>
          <div className={styles.statLabel}>Edge AI Tiers</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>RT</div>
          <div className={styles.statLabel}>Real-Time Processing</div>
        </div>
      </div>

      {/* PRODUCT LINE 1 — PHYSICAL AI PLATFORM */}
      <section className={styles.productLine} id="physical">
        <div className={styles.productLineHeader}>
          <div className={styles.productLineLeft}>
            <div className={styles.sectionLabel}>AI PRODUCT LINE 1</div>
            <h2>Physical AI Platform</h2>
            <p className={styles.italic}>Engineering Intelligent Machines for Safe Real-World Operations.</p>
            <p>
              The Physical AI Platform enables machines to perceive, understand, and act within
              dynamic environments — combining computer vision, edge AI, robotics, and intelligent
              decision systems to transform conventional industrial equipment into intelligent machines.
            </p>
          </div>
          <div className={styles.productLineImageBox}>[Image Placeholder]</div>
        </div>

        <div className={styles.capabilitiesBox}>
          <h3>Platform Capabilities</h3>
          <p className={styles.capDesc}>
            By combining AI, robotics, and edge computing, the platform transforms conventional
            industrial equipment into intelligent machines capable of operating safely and
            efficiently in real-world environments.
          </p>
          <div className={styles.capGrid}>
            <div className={styles.capCard}>
              <h4>AI Vision Perception</h4>
              <p>Computer vision models analyze the environment in real time to detect people, objects, obstacles, and operational hazards.</p>
            </div>
            <div className={styles.capCard}>
              <h4>Spatial Awareness &amp; Mapping</h4>
              <p>Advanced perception algorithms enable machines to understand spatial layouts and navigate complex industrial environments.</p>
            </div>
            <div className={styles.capCard}>
              <h4>Autonomous Decision Systems</h4>
              <p>AI models analyze incoming visual data and make real-time operational decisions to avoid hazards and optimize movement.</p>
            </div>
            <div className={styles.capCard}>
              <h4>Edge AI Processing</h4>
              <p>AI processing occurs on embedded AI hardware — real-time performance without reliance on cloud connectivity.</p>
            </div>
            <div className={styles.capCard}>
              <h4>Fleet Intelligence</h4>
              <p>Multiple machines connected to centralized systems to monitor operations, optimize workflows, and improve safety across entire fleets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI FORKLIFT SAFETY SYSTEM — PRODUCT PORTFOLIO */}
      <section className={styles.portfolio} id="portfolio">
        <div className={styles.portfolioHeader}>
          <div className={styles.sectionLabelCenter}>AI FORKLIFT SAFETY SYSTEM</div>
          <h2>Product Portfolio</h2>
          <p>
            Transform conventional forklifts into AI-powered autonomous systems that can see,
            understand, and act in real time. Powered by advanced vision AI and edge intelligence
            — preventing workplace accidents and improving operator awareness across industrial environments.
          </p>
        </div>

        <div className={styles.productsGrid}>
          {/* Product 01 */}
          <div className={styles.productCard}>
            <div className={styles.productCardInner}>
              <div className={styles.productCardText}>
                <div className={styles.productNum}>PRODUCT 01</div>
                <h3>270° AI Surround Safety System</h3>
                <div className={styles.productSub}>AI-powered surround vision and pedestrian detection for forklifts</div>
                <ul>
                  <li>AI-based pedestrian detection</li>
                  <li>Enhanced blind-spot visibility</li>
                  <li>Visual and audio proximity alerts</li>
                  <li>Operator-assisted collision avoidance</li>
                </ul>
              </div>
              <div className={styles.productImgBox}>[Img]</div>
            </div>
            <div className={styles.specRow}><span className={styles.specKey}>Camera Coverage</span><span className={styles.specVal}>3-camera configuration (rear + sides)</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>Field of View</span><span className={styles.specVal}>270° operational coverage</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>Display Mode</span><span className={styles.specVal}>Multi-angle + bird&apos;s-eye view</span></div>
          </div>

          {/* Product 02 */}
          <div className={styles.productCard}>
            <div className={styles.productCardInner}>
              <div className={styles.productCardText}>
                <div className={styles.productNum}>PRODUCT 02</div>
                <h3>270° AI Surround Safety System with Auto-Braking</h3>
                <div className={styles.productSub}>Advanced AI safety system with automated collision prevention</div>
                <ul>
                  <li>Real-time pedestrian detection</li>
                  <li>Blind-spot monitoring</li>
                  <li>Intelligent alert system</li>
                  <li>Automatic braking during reverse or manoeuvring</li>
                </ul>
              </div>
              <div className={styles.productImgBox}>[Img]</div>
            </div>
            <div className={styles.specRow}><span className={styles.specKey}>Camera Coverage</span><span className={styles.specVal}>3-camera configuration</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>Field of View</span><span className={styles.specVal}>270° surround coverage</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>View Modes</span><span className={styles.specVal}>Multi-angle + bird&apos;s-eye</span></div>
          </div>

          {/* Product 03 */}
          <div className={styles.productCard}>
            <div className={styles.productCardInner}>
              <div className={styles.productCardText}>
                <div className={styles.productNum}>PRODUCT 03</div>
                <h3>Rear Safety System with Automatic Braking</h3>
                <div className={styles.productSub}>AI-assisted reverse safety for forklifts and industrial vehicles</div>
                <ul>
                  <li>Rear pedestrian detection</li>
                  <li>Real-time reverse monitoring</li>
                  <li>Automatic braking on obstacle detection</li>
                  <li>Driver alerts and safety intervention</li>
                </ul>
              </div>
              <div className={styles.productImgBox}>[Img]</div>
            </div>
            <div className={styles.specRow}><span className={styles.specKey}>Camera Setup</span><span className={styles.specVal}>Single rear-facing camera</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>Coverage</span><span className={styles.specVal}>Wide rear-monitoring zone</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>View Mode</span><span className={styles.specVal}>Rear visibility display</span></div>
          </div>

          {/* Product 04 */}
          <div className={`${styles.productCard} ${styles.highlighted}`}>
            <div className={styles.productCardInner}>
              <div className={styles.productCardText}>
                <div className={styles.productNum}>PRODUCT 04</div>
                <h3>Rear Pedestrian Monitoring System</h3>
                <div className={styles.productSub}>Lightweight AI monitoring system for improved rear visibility</div>
                <ul>
                  <li>Rear pedestrian detection</li>
                  <li>Proximity-based visual and audio alerts</li>
                  <li>Improved driver awareness during reversing</li>
                </ul>
              </div>
              <div className={styles.productImgBox}>[Img]</div>
            </div>
            <div className={styles.specRow}><span className={styles.specKey}>Camera Setup</span><span className={styles.specVal}>Single rear camera</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>Coverage</span><span className={styles.specVal}>Rear-zone monitoring</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>View Mode</span><span className={styles.specVal}>Rear-view display</span></div>
          </div>

          {/* Product 05 */}
          <div className={styles.productCard}>
            <div className={styles.productCardInner}>
              <div className={styles.productCardText}>
                <div className={styles.productNum}>PRODUCT 05</div>
                <h3>Wireless Safety Camera</h3>
                <div className={styles.productSub}>Flexible wireless monitoring for industrial vehicles</div>
                <ul>
                  <li>Real-time wireless video transmission</li>
                  <li>Quick installation with no cable routing</li>
                  <li>Low-latency live monitoring</li>
                  <li>Easy relocation between vehicles</li>
                </ul>
              </div>
              <div className={styles.productImgBox}>[Img]</div>
            </div>
            <div className={styles.specRow}><span className={styles.specKey}>Connection</span><span className={styles.specVal}>Wireless</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>Installation</span><span className={styles.specVal}>No cable routing</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>Latency</span><span className={styles.specVal}>Low-latency live feed</span></div>
          </div>

          {/* Product 06 */}
          <div className={styles.productCard}>
            <div className={styles.productCardInner}>
              <div className={styles.productCardText}>
                <div className={styles.productNum}>PRODUCT 06</div>
                <h3>Wireless Camera RT</h3>
                <div className={styles.productSub}>Industrial-grade wireless camera for real-time rear visibility</div>
                <ul>
                  <li>Stable wireless performance in demanding environments</li>
                  <li>Real-time rear monitoring</li>
                  <li>Tool-free installation — no dismantling required</li>
                  <li>Portable and easy to transfer between forklifts</li>
                </ul>
              </div>
              <div className={styles.productImgBox}>[Img]</div>
            </div>
            <div className={styles.specRow}><span className={styles.specKey}>Grade</span><span className={styles.specVal}>Industrial-grade</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>Installation</span><span className={styles.specVal}>Tool-free</span></div>
            <div className={styles.specRow}><span className={styles.specKey}>Portability</span><span className={styles.specVal}>Portable / transferable</span></div>
          </div>
        </div>

        {/* Benefits */}
        <div className={styles.benefits}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>🛡️</div>
            <div>
              <h4>Improve Workplace Safety</h4>
              <p>AI-powered pedestrian detection helps prevent collisions and workplace accidents before they happen.</p>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>👁️</div>
            <div>
              <h4>Enhance Operator Awareness</h4>
              <p>Advanced vision systems reduce blind spots and dramatically improve situational awareness for operators.</p>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>⚡</div>
            <div>
              <h4>Reduce Operational Risk</h4>
              <p>Automated alerts and safety interventions help minimize human error and reduce costly incidents.</p>
            </div>
          </div>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>🔧</div>
            <div>
              <h4>Retrofit Compatible</h4>
              <p>Systems can be installed on existing forklifts and industrial vehicles without any dismantling required.</p>
            </div>
          </div>
        </div>

        <div className={styles.industriesRow}>
          <span className={styles.industriesLabel}>Industries Served</span>
          <span className={styles.industryTag}>Warehousing &amp; Logistics</span>
          <span className={styles.industryTag}>Manufacturing Facilities</span>
          <span className={styles.industryTag}>Ports &amp; Container Terminals</span>
          <span className={styles.industryTag}>Distribution Centers</span>
          <span className={styles.industryTag}>Industrial Automation Environments</span>
        </div>
      </section>

      {/* PRODUCT LINE 2 — EDGE AI SYSTEMS */}
      <section className={styles.edgeLine} id="edge">
        <div className={styles.edgeHeader}>
          <div className={styles.edgeLeft}>
            <div className={styles.sectionLabel} style={{ justifyContent: 'center' }}>AI PRODUCT LINE 2</div>
            <h2>Edge AI Systems</h2>
            <p>
              Modular AI compute for real-world intelligence. High-performance Edge AI Systems
              designed for robotics, computer vision, autonomous systems, and real-time intelligent
              applications — built for learning, prototyping, and deployment, from classrooms to
              industrial environments.
            </p>
          </div>
          <div className={styles.productLineImageBox}>[Image Placeholder]</div>
        </div>

        <div className={styles.overviewBox}>
          <h3>🌟 Product Line Overview</h3>
          <p>
            Five carefully tiered Edge AI Systems — from entry-level learning platforms to flagship
            autonomous AI compute — ensuring the right level of performance for every application,
            environment, and budget.
          </p>
        </div>

        {/* TIER CARDS */}
        <div className={styles.edgeTiers}>
          <div className={styles.edgeTierCard}>
            <div><span className={styles.tierDot} style={{ background: '#6b7280' }} />
              <span className={styles.tierName}>Lite</span>
            </div>
            <span className={styles.tierSub}>Entry-Level System</span>
            <div className={styles.tierImgBox}>[Img]</div>
            <div className={styles.tierStars}>★★</div>
            <p className={styles.tierDesc}>Compact and accessible AI system. Supports basic robotics, IoT, and programming. Ideal for beginners and early-stage learners.</p>
            <span className={styles.tierTag}>For Getting Started with AI</span>
          </div>
          <div className={styles.edgeTierCard}>
            <div><span className={styles.tierDot} style={{ background: '#4f46e5' }} />
              <span className={styles.tierName}>Core</span>
            </div>
            <span className={styles.tierSub}>Foundation System</span>
            <div className={styles.tierImgBox}>[Img]</div>
            <div className={styles.tierStars}>★★★</div>
            <p className={styles.tierDesc}>Entry platform for embedded AI and intelligent systems. Sensor integration and basic automation workflows. Designed for schools and foundational AI labs.</p>
            <span className={styles.tierTag}>For Foundational AI Learning</span>
          </div>
          <div className={styles.edgeTierCard}>
            <div><span className={styles.tierDot} style={{ background: '#8b5cf6' }} />
              <span className={styles.tierName}>Prime</span>
            </div>
            <span className={styles.tierSub}>Applied AI Platform</span>
            <div className={styles.tierImgBox}>[Img]</div>
            <div className={styles.tierStars}>★★★★</div>
            <p className={styles.tierDesc}>AI processing with applied robotics workflows. Supports IoT, automation, and vision-based applications. Bridges learning and real-world implementation.</p>
            <span className={styles.tierTag}>For Applied AI &amp; Innovation</span>
          </div>
          <div className={`${styles.edgeTierCard} ${styles.proHighlight}`}>
            <div><span className={styles.tierDot} style={{ background: '#f59e0b' }} />
              <span className={styles.tierName}>Pro</span>
            </div>
            <span className={styles.tierSub}>Advanced AI System</span>
            <div className={styles.tierImgBox}>[Img]</div>
            <div className={styles.tierStars}>★★★★★</div>
            <p className={styles.tierDesc}>Advanced AI processing and computer vision capabilities. Robotics and automation system integration. Bridges learning and real-world implementation. Designed for universities and AI development labs.</p>
            <span className={styles.tierTag}>For High-Performance AI Dev</span>
          </div>
          <div className={styles.edgeTierCard}>
            <div><span className={styles.tierDot} style={{ background: '#3b82f6' }} />
              <span className={styles.tierName}>Ultra</span>
            </div>
            <span className={styles.tierSub}>Flagship AI Compute</span>
            <div className={styles.tierImgBox}>[Img]</div>
            <div className={styles.tierStars}>★★★★★</div>
            <p className={styles.tierDesc}>High-performance AI compute for real-time decision systems. Multi-camera computer vision and robotics integration for research and industrial deployments.</p>
            <span className={styles.tierTag}>For Advanced &amp; Autonomous AI</span>
          </div>
        </div>

        {/* FULL SPEC COMPARISON */}
        <div className={styles.specTableTitle}>Full Specification Comparison</div>
        <div className={styles.specTableDesc}>Compare all Edge AI Systems across performance, connectivity, and use case fit.</div>
        <table className={styles.specTable}>
          <thead>
            <tr>
              <th>Specification</th>
              <th style={{ color: '#3b82f6' }}>🔷 Ultra</th>
              <th style={{ color: '#f59e0b' }}>🔷 Pro</th>
              <th style={{ color: '#8b5cf6' }}>🔷 Prime</th>
              <th style={{ color: '#4f46e5' }}>🔷 Core</th>
              <th style={{ color: '#6b7280' }}>🔷 Lite</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.sectionRow}><td colSpan={6}>POSITIONING</td></tr>
            <tr><td>Classification</td><td>Flagship AI Compute</td><td>Advanced AI System</td><td>Applied AI Platform</td><td>Foundation System</td><td>Entry-Level System</td></tr>
            <tr><td>Best For</td><td>Research &amp; Industrial AI</td><td>Universities &amp; Labs</td><td>Innovation &amp; Prototyping</td><td>Schools &amp; Training</td><td>Beginners</td></tr>
            <tr><td>AI Performance</td>
              <td><span className={styles.stars}>★★★★★</span></td>
              <td><span className={styles.stars}>★★★★</span></td>
              <td><span className={styles.stars}>★★★★</span></td>
              <td><span className={styles.stars}>★★★</span></td>
              <td><span className={styles.stars}>★★</span></td>
            </tr>
            <tr className={styles.sectionRow}><td colSpan={6}>HARDWARE</td></tr>
            <tr><td>GPU Power</td><td>High-end (16 GB AI GPU)</td><td>High (12 GB)</td><td>Medium (6 GB)</td><td>Entry AI GPU</td><td>Basic AI GPU</td></tr>
            <tr><td>CPU</td><td>8-Core / 16 Thread</td><td>8-Core / 16 Thread</td><td>8-Core / 16 Thread</td><td>6-Core / 12 Thread</td><td>2-Core / 4 Thread</td></tr>
            <tr><td>RAM</td><td>32 GB</td><td>32 GB</td><td>32 GB</td><td>16 GB</td><td>16 GB</td></tr>
            <tr><td>Storage</td><td>1 TB</td><td>1 TB</td><td>500 GB</td><td>500 GB</td><td>256 GB</td></tr>
            <tr className={styles.sectionRow}><td colSpan={6}>AI CAPABILITIES</td></tr>
            <tr><td>Edge AI Processing</td><td className={styles.checkVal}>✓ Advanced</td><td className={styles.checkVal}>✓ Advanced</td><td className={styles.checkVal}>✓ Standard</td><td className={styles.checkVal}>✓ Basic</td><td className={styles.checkVal}>✓ Entry</td></tr>
            <tr><td>Computer Vision</td><td className={styles.checkVal}>✓ Multi-camera</td><td className={styles.checkVal}>✓ Multi-stream</td><td className={styles.checkVal}>✓ Standard</td><td className={styles.checkVal}>✓ Basic</td><td className={styles.checkVal}>✓ Intro</td></tr>
            <tr><td>Robotics Integration</td><td className={styles.checkVal}>✓ Industrial</td><td className={styles.checkVal}>✓ Advanced</td><td className={styles.checkVal}>✓ Standard</td><td className={styles.checkVal}>✓ Basic</td><td className={styles.checkVal}>✓ Intro</td></tr>
            <tr><td>Autonomous Systems</td><td className={styles.checkVal}>✓ Full</td><td className={styles.checkVal}>✓ High</td><td className={styles.checkVal}>✓ Medium</td><td className={styles.dashVal}>—</td><td className={styles.dashVal}>—</td></tr>
            <tr><td>Simulation / Digital Twin</td><td className={styles.checkVal}>✓ Advanced</td><td className={styles.checkVal}>✓ Advanced</td><td className={styles.checkVal}>✓ Standard</td><td className={styles.dashVal}>—</td><td className={styles.dashVal}>—</td></tr>
            <tr className={styles.sectionRow}><td colSpan={6}>CONNECTIVITY &amp; OS</td></tr>
            <tr><td>IoT &amp; Sensors</td><td className={styles.checkVal}>✓ Full</td><td className={styles.checkVal}>✓ Full</td><td className={styles.checkVal}>✓ Standard</td><td className={styles.checkVal}>✓ Basic</td><td className={styles.checkVal}>✓ Basic</td></tr>
            <tr><td>Connectivity</td><td>WiFi 6 + Dual LAN</td><td>WiFi 6 + Dual LAN</td><td>WiFi 6 + Dual LAN</td><td>WiFi 6 + Dual LAN</td><td>WiFi 6 + Dual LAN</td></tr>
            <tr><td>OS Support</td><td>Linux / Windows</td><td>Linux / Windows</td><td>Linux / Windows</td><td>Linux / Windows</td><td>Linux / Windows</td></tr>
            <tr><td>Power Range</td><td>50–95 W</td><td>50–95 W</td><td>50–95 W</td><td>10–75 W</td><td>10–75 W</td></tr>
            <tr className={styles.sectionRow}><td colSpan={6}>IDEAL USE CASE</td></tr>
            <tr><td>Primary Application</td><td>Autonomous AI Systems</td><td>AI Labs &amp; Vision Systems</td><td>Product Development</td><td>Learning &amp; Labs</td><td>Intro AI Learning</td></tr>
          </tbody>
        </table>

        {/* TECH CAPABILITIES */}
        <div className={styles.techCaps}>
          <h3>Technical Capabilities — All Edge AI Systems</h3>
          <div className={styles.techCapsGrid}>
            <div className={styles.techCapItem}>AI compute performance from entry-level to high-performance</div>
            <div className={styles.techCapItem}>Multi-core processing with optimized memory configurations</div>
            <div className={styles.techCapItem}>Edge AI inference for real-time decision making</div>
            <div className={styles.techCapItem}>Support for Linux and Windows environments</div>
            <div className={styles.techCapItem}>High-speed connectivity with WiFi 6 and Ethernet</div>
            <div className={styles.techCapItem}>Scalable architecture designed to grow with your needs</div>
          </div>
        </div>

        {/* HOW TO CHOOSE */}
        <div className={styles.chooseBox}>
          <h3>How to Choose Your Edge AI System</h3>
          <div className={styles.chooseGrid}>
            <div className={styles.chooseCard}>
              <div className={styles.chooseName}>Lite / Core</div>
              <p>Start your AI journey — ideal for education and early exploration.</p>
            </div>
            <div className={styles.chooseCard}>
              <div className={styles.chooseName}>Prime</div>
              <p>Build real-world systems — connect learning to practical deployment.</p>
            </div>
            <div className={styles.chooseCard}>
              <div className={styles.chooseName} style={{ color: '#f59e0b' }}>Pro</div>
              <p>Develop advanced AI applications — for labs and university-level work.</p>
            </div>
            <div className={styles.chooseCard}>
              <div className={styles.chooseName} style={{ color: '#3b82f6' }}>Ultra</div>
              <p>Deploy autonomous and industrial AI solutions at scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED CTA */}
      <section className={styles.cta} id="contact">
        <div className={styles.ctaLabel}>GET STARTED</div>
        <h2>Ready to Build the Future<br />of Innovation?</h2>
        <p>
          Whether you are planning to establish an AI Innovation Lab, explore robotics and
          intelligent systems, or deploy AI-powered industrial solutions — the Brighture team
          is ready to support your journey.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="#contact" className={styles.ctaBtnPrimary}>Contact Us →</Link>
          <Link href="/ai-labs" className={styles.ctaBtnSecondary}>Explore AI Labs</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerLogo}>brighture</div>
          </div>
          <div className={styles.footerCol}>
            <h4>Pages</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/ai-labs">AI Labs</a></li>
              <li><a href="/ai-trainings">AI Trainings</a></li>
              <li><a href="/ai-products">AI Products</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Products</h4>
            <ul>
              <li><a href="#physical">Physical AI Platform</a></li>
              <li><a href="#edge">Edge AI Systems</a></li>
              <li><a href="#portfolio">Safety Products</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>© 2024 Brighture. All rights reserved.</div>
      </footer>

    </div>
  );
}