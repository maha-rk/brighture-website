'use client';

import Link from 'next/link';
import styles from './platform.module.css';

export default function PlatformPage() {
  return (
    <div className={styles.page}>

      {/* OUR FRAMEWORK */}
      <section className={styles.framework} id="framework">
        <div className={styles.frameworkInner}>
          <div className={styles.frameworkLeft}>
            <div className={styles.sectionLabel}>OUR FRAMEWORK</div>
            <h2>The Brighture Global Innovation Lab Framework</h2>
            <p>
              The <strong>Brighture Global Innovation Lab Framework</strong> empowers institutions
              and enterprises to build world-class ecosystems for artificial intelligence, robotics,
              and emerging technologies.
            </p>
            <p>
              This framework enables schools, universities, innovation centers, and organizations
              to create <strong>hands-on technology ecosystems where ideas become intelligent
              systems and real-world solutions.</strong>
            </p>
          </div>
          <div className={styles.frameworkImageBox}>[Image Placeholder]</div>
        </div>
      </section>

      {/* THE FOUR PILLARS */}
      <section className={styles.pillars} id="pillars">
        <div className={styles.pillarsHeader}>
          <div className={styles.sectionLabelCenter}>THE FOUR PILLARS</div>
          <h2>The Four Pillars<br />of the Framework</h2>
        </div>
        <div className={styles.pillarsGrid}>

          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>🖥️</span>
            <h3>Technology Infrastructure</h3>
            <p className={styles.pillarDesc}>Innovation begins with access to the right tools and platforms.</p>
            <ul>
              <li>Artificial intelligence platforms</li>
              <li>Robotics systems</li>
              <li>Embedded hardware platforms</li>
              <li>Intelligent sensors and IoT devices</li>
              <li>Autonomous systems platforms</li>
            </ul>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>🔬</span>
            <h3>Experiential Learning</h3>
            <p className={styles.pillarDesc}>Innovation happens through experimentation and hands-on exploration.</p>
            <ul>
              <li>Build robotics systems</li>
              <li>Train AI models</li>
              <li>Develop smart devices</li>
              <li>Design automation solutions</li>
              <li>Test autonomous systems</li>
            </ul>
          </div>

          <div className={`${styles.pillarCard} ${styles.amber}`}>
            <span className={styles.pillarIcon}>💡</span>
            <h3>Innovation Culture</h3>
            <p className={styles.pillarDesc}>Innovation ecosystems thrive on creativity, collaboration, and bold experimentation.</p>
            <ul>
              <li>Explore new ideas</li>
              <li>Experiment with emerging technologies</li>
              <li>Collaborate across disciplines</li>
              <li>Solve real-world problems</li>
              <li>Develop innovation and entrepreneurship skills</li>
            </ul>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>🏛️</span>
            <h3>Institutional Capability</h3>
            <p className={styles.pillarDesc}>Helping institutions build long-term technology capabilities.</p>
            <ul>
              <li>Educator enablement and training</li>
              <li>Curriculum integration</li>
              <li>Research program development</li>
              <li>Innovation challenges and hackathons</li>
              <li>Industry collaboration opportunities</li>
            </ul>
          </div>

        </div>
      </section>

      {/* LAB ECOSYSTEM */}
      <section className={styles.labEco} id="labs">
        <div className={styles.labEcoHeader}>
          <div className={styles.sectionLabelCenter}>LAB ECOSYSTEM</div>
          <h2>Six Specialized<br />Innovation Environments</h2>
          <p>
            The Brighture framework integrates multiple innovation environments within a single
            ecosystem — together creating a holistic environment covering every dimension of
            intelligent technology.
          </p>
        </div>
        <div className={styles.labsGrid}>

          <div className={styles.labCard}>
            <span className={styles.labIcon}>🧠</span>
            <h3>AI Innovation Lab</h3>
            <p>Artificial intelligence systems and data-driven intelligence. The foundational lab for machine learning, neural networks, and AI application development.</p>
          </div>

          <div className={styles.labCard}>
            <span className={styles.labIcon}>🤖</span>
            <h3>Robotics Innovation Lab</h3>
            <p>Design and development of robotic systems and automation. From simple actuators to complex robotic arms and mobile platforms.</p>
          </div>

          <div className={styles.labCard}>
            <span className={styles.labIcon}>🔧</span>
            <h3>Embedded Systems Lab</h3>
            <p>Hardware platforms for intelligent connected devices. Microcontrollers, development boards, sensors, and IoT integration environments.</p>
          </div>

          <div className={styles.labCard}>
            <span className={styles.labIcon}>👁️</span>
            <h3>Computer Vision Lab</h3>
            <p>AI systems that interpret visual environments. Object detection, image classification, and real-time video analysis systems.</p>
          </div>

          <div className={styles.labCard}>
            <span className={styles.labIcon}>🚗</span>
            <h3>Autonomous Systems Lab</h3>
            <p>Development of intelligent machines that operate independently. Autonomous navigation, decision-making, and self-directing system architectures.</p>
          </div>

          <div className={styles.labCard}>
            <span className={styles.labIcon}>⚡</span>
            <h3>Innovation Studio</h3>
            <p>Rapid prototyping and technology product development. The creative hub where concepts transform into functional prototypes and market-ready solutions.</p>
          </div>

        </div>
      </section>

      {/* BRIGHTURE LMS */}
      <section className={styles.lms} id="lms">
        <div className={styles.lmsHeader}>
          <div className={styles.sectionLabelCenter}>LEARNING PLATFORM</div>
          <h2>Brighture LMS</h2>
          <p>
            An AI-first digital learning environment delivering personalized, immersive, and
            future-ready education experiences — designed for the innovators of tomorrow.
          </p>
        </div>

        <div className={styles.lmsGrid}>
          <div className={styles.lmsCard}>
            <span className={styles.lmsIcon}>✨</span>
            <h3>Adaptive AI Learning</h3>
            <p>An intelligent system continuously analyzes learner behavior to dynamically adjust pace, difficulty, and content delivery for optimal outcomes.</p>
          </div>
          <div className={styles.lmsCard}>
            <span className={styles.lmsIcon}>📚</span>
            <h3>Future-Tech Curriculum Stack</h3>
            <p>A comprehensive ecosystem covering Programming (Scratch to Advanced), Robotics and Embedded Systems, Drones and Automation, Computer Vision, Machine Learning, and AR/VR Development.</p>
          </div>
          <div className={styles.lmsCard}>
            <span className={styles.lmsIcon}>🔨</span>
            <h3>Built for Real-World Skills</h3>
            <p>A 100% practical learning model focused on building, experimentation, and real-world problem solving — not just theory.</p>
          </div>
          <div className={styles.lmsCard}>
            <span className={styles.lmsIcon}>🎯</span>
            <h3>Personalized Growth Engine</h3>
            <p>AI-driven assessments recommend tailored learning pathways aligned with each student&apos;s progress and capability.</p>
          </div>
          <div className={styles.lmsCard}>
            <span className={styles.lmsIcon}>🌐</span>
            <h3>Connected Learning Ecosystem</h3>
            <p>Enables collaboration, peer learning, and project showcasing within an innovation-driven community of builders and creators.</p>
          </div>
          <div className={styles.lmsCard}>
            <span className={styles.lmsIcon}>🏆</span>
            <h3>Industry Alignment</h3>
            <p>Curriculum and learning pathways are built to be relevant to real industry needs, ensuring learners are job-ready and future-proof.</p>
          </div>
        </div>

        {/* WHY BRIGHTURE LMS STANDS OUT */}
        <div className={styles.standoutSection}>
          <h3>Why Brighture LMS Stands Out</h3>
          <p className={styles.standoutDesc}>Powered by innovation to empower the creators, engineers, and problem-solvers of tomorrow.</p>
          <table className={styles.lmsTable}>
            <thead>
              <tr>
                <th>Feature / Capability</th>
                <th className={styles.brighture}>Brighture LMS</th>
                <th>Traditional LMS</th>
                <th>Generic EdTech</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI Personalization</td>
                <td><span className={styles.green}>✅ Advanced adaptive AI</span></td>
                <td><span className={styles.red}>❌ None</span></td>
                <td><span className={styles.yellow}>⚠️ Limited</span></td>
              </tr>
              <tr>
                <td>Practical Learning</td>
                <td><span className={styles.green}>✅ 100% hands-on</span></td>
                <td><span className={styles.yellow}>⚠️ Minimal</span></td>
                <td><span className={styles.yellow}>⚠️ Partial</span></td>
              </tr>
              <tr>
                <td>Future-Tech Courses</td>
                <td><span className={styles.green}>✅ AI, Robotics, CV, Drones, AR/VR</span></td>
                <td><span className={styles.red}>❌ Limited</span></td>
                <td><span className={styles.yellow}>⚠️ Selective</span></td>
              </tr>
              <tr>
                <td>Learning Pathways</td>
                <td><span className={styles.green}>✅ Dynamic &amp; AI-driven</span></td>
                <td><span className={styles.red}>❌ Static</span></td>
                <td><span className={styles.yellow}>⚠️ Semi-adaptive</span></td>
              </tr>
              <tr>
                <td>Community Ecosystem</td>
                <td><span className={styles.green}>✅ Built-in</span></td>
                <td><span className={styles.red}>❌ None</span></td>
                <td><span className={styles.yellow}>⚠️ Limited</span></td>
              </tr>
              <tr>
                <td>Industry Alignment</td>
                <td><span className={styles.green}>✅ Strong</span></td>
                <td><span className={styles.red}>❌ Weak</span></td>
                <td><span className={styles.yellow}>⚠️ Moderate</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* DISCOVER CTA */}
        <div className={styles.discoverBox}>
          <h3>Discover a Smarter Way to Learn</h3>
          <p>
            Powered by AI, the platform delivers hands-on video learning combined with real-world
            use cases supported by features that make every session engaging and impactful.
          </p>
          <Link href="/ai-trainings" className={styles.discoverBtn}>
            Explore AI Trainings →
          </Link>
          <div className={styles.discoverPowered}>Powered by SPARKY (SPRW)</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer} id="contact">
        <p>© 2024 Brighture. All rights reserved.</p>
      </footer>

    </div>
  );
}