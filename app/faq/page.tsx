'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './contactFaq.module.css';

type FaqItem = {
  cat: 'general' | 'ailabs' | 'trainings' | 'products';
  catLabel: string;
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    cat: 'general', catLabel: 'GENERAL',
    question: 'What is Brighture and what does it do?',
    answer: <>Brighture is a <strong>global innovation platform</strong> that helps institutions and enterprises build AI Innovation Labs, robotics ecosystems, and future skills infrastructure. We design and deploy complete innovation environments — combining technology infrastructure, learning programs, and implementation support — to help schools, universities, research centers, and enterprises develop talent and technologies for the AI-driven future.</>,
  },
  {
    cat: 'ailabs', catLabel: 'AI LABS',
    question: 'What are the Brighture Innovation Lab Programs?',
    answer: <>Brighture offers <strong>four structured Innovation Lab Programs</strong>: <strong>Genesis</strong> — for early AI and robotics learning (schools and early university); <strong>Acceleration</strong> — for applied engineering and prototyping; <strong>Discovery</strong> — for advanced research and innovation (universities and research centers); and <strong>Nexus Campus</strong> — a full institutional AI ecosystem for universities, enterprises, and government entities. Each program includes lab design, technology infrastructure, educator training, and learning frameworks.</>,
  },
  {
    cat: 'ailabs', catLabel: 'AI LABS',
    question: 'Which program is right for my institution?',
    answer: <>It depends on your goals and current stage. <strong>Genesis</strong> is ideal if you are just getting started with AI and robotics. <strong>Acceleration</strong> works well for institutions ready to build real-world applied projects. <strong>Discovery</strong> is for universities wanting cutting-edge research infrastructure. <strong>Nexus Campus</strong> is the most comprehensive option — spanning all labs and programs for full institutional transformation. Our team can guide you through the best fit based on your needs, budget, and goals. <a href="/contact">Contact us</a> for a consultation.</>,
  },
  {
    cat: 'ailabs', catLabel: 'AI LABS',
    question: 'What types of labs does Brighture set up?',
    answer: <>Brighture designs and deploys <strong>six specialized innovation environments</strong>: AI Innovation Lab, Robotics Innovation Lab, Embedded Systems Lab, Computer Vision Lab, Autonomous Systems Lab, and the Innovation Studio. Each lab serves a specific domain of intelligent technology, and different programs include different combinations of these labs based on the scope and goals of the institution.</>,
  },
  {
    cat: 'trainings', catLabel: 'TRAININGS',
    question: 'What AI training programs does Brighture offer?',
    answer: <>Brighture offers a <strong>4-level progressive AI training pathway</strong>. <strong>Level 1 — Explorer</strong> (foundation, block-based coding, basic robotics); <strong>Level 2 — Builder</strong> (intermediate, Arduino, Raspberry Pi, functional apps); <strong>Level 3 — Innovator</strong> (advanced, autonomous systems, AI-integrated apps); <strong>Level 4 — AI Specialist</strong> (professional, industrial AI, edge computing, research). Each level spans five domains: Robotics, IoT, Drone Technology, VR/AR, and Android App Development.</>,
  },
  {
    cat: 'trainings', catLabel: 'TRAININGS',
    question: 'Who can enroll in Brighture AI Trainings?',
    answer: <>Brighture trainings are designed as an <strong>age-based progressive learning journey</strong>, making them suitable for school students, university students, educators, and professionals at different stages. The programs are structured so that <strong>no prior experience is required</strong> at Level 1 — learners start from the very basics and advance through the pathway progressively. Institutions can integrate these programs into their curriculum or deliver them as extracurricular innovation programs.</>,
  },
  {
    cat: 'trainings', catLabel: 'TRAININGS',
    question: 'What technology domains are covered in the training?',
    answer: <>The training spans <strong>five technology domains</strong> across all four levels: <strong>Robotics</strong> (from basic circuits to multi-agent industrial robots), <strong>IoT</strong> (from smart home concepts to edge AI and industrial IoT), <strong>Drone Technology</strong> (from basic flight to autonomous navigation and AI mapping), <strong>VR/AR</strong> (from interactive storytelling to digital twin simulation environments), and <strong>Android App Development</strong> (from visual app creation to AI-integrated mobile applications). Every level adds depth and complexity within each domain.</>,
  },
  {
    cat: 'trainings', catLabel: 'TRAININGS',
    question: 'What is the Brighture LMS / learning platform?',
    answer: <>The <strong>Brighture LMS</strong> is an AI-first digital learning environment powered by SPARKY (SP Robotics Works). It delivers adaptive, personalized learning by analyzing each learner&apos;s progress and dynamically adjusting content, difficulty, and pace. The platform includes hands-on video learning, real-world use cases, AI-driven learning pathways, community features, and industry-aligned assessments. It covers the full future-tech curriculum stack — from Scratch to advanced AI systems.</>,
  },
  {
    cat: 'products', catLabel: 'PRODUCTS',
    question: 'What AI products does Brighture offer?',
    answer: <>Brighture offers two AI product lines. The <strong>Physical AI Platform</strong> includes an AI Forklift Safety System — a range of six products using computer vision and edge AI to improve safety in industrial operations (warehousing, manufacturing, ports, distribution centers). The <strong>Edge AI Systems</strong> are five tiers of modular AI compute hardware — Lite, Core, Prime, Pro, and Ultra — designed for robotics, computer vision, autonomous systems, and AI development from classrooms to industrial deployments.</>,
  },
  {
    cat: 'products', catLabel: 'PRODUCTS',
    question: 'How does the AI Forklift Safety System work?',
    answer: <>The AI Forklift Safety System uses <strong>computer vision and edge AI processing</strong> to detect pedestrians and obstacles in real time. Cameras mounted on the forklift feed live video to an onboard AI system that identifies hazards and triggers <strong>visual and audio alerts</strong> — and in advanced models, automatic braking. The system improves operator awareness, reduces blind spots, and helps prevent workplace accidents. It can be <strong>retrofitted to existing forklifts</strong> without dismantling or major modifications.</>,
  },
  {
    cat: 'products', catLabel: 'PRODUCTS',
    question: 'How do I choose the right Edge AI System?',
    answer: <>Choose based on your application needs. <strong>Lite and Core</strong> are best for education, beginners, and foundational AI learning. <strong>Prime</strong> bridges learning and deployment — ideal for innovation programs and applied prototyping. <strong>Pro</strong> supports advanced AI labs, computer vision, and university-level research. <strong>Ultra</strong> delivers flagship AI compute for autonomous systems, industrial AI, and large-scale research deployments. All systems run Linux and Windows, support IoT and sensors, and include WiFi 6 + Ethernet connectivity.</>,
  },
  {
    cat: 'general', catLabel: 'GENERAL',
    question: 'Where is Brighture located? Does it operate globally?',
    answer: <>Brighture operates through a <strong>growing international network</strong> with presence in four regions: <strong>Bengaluru, India</strong> (South Asia Innovation Hub), <strong>Dubai, UAE</strong> (Middle East and Gulf Region), <strong>London, UK</strong> (Europe and UK Operations), and <strong>Texas, USA</strong> (Americas Innovation Center). This network enables Brighture to support institutions across multiple continents and collaborate with schools, universities, enterprises, and government organizations worldwide.</>,
  },
  {
    cat: 'general', catLabel: 'GENERAL',
    question: "Who are Brighture's key technology partners?",
    answer: <>Brighture&apos;s training ecosystem is supported by key technology partnerships including <strong>Unity</strong> (3D, VR/AR, and digital twin environments), <strong>DJI</strong> (drone technology platforms across all training levels), and <strong>SP Robotics Works (SPARKY)</strong> (the AI learning platform powering the Brighture LMS). These partnerships ensure that Brighture programs use industry-standard tools that are globally recognized and relevant to real technology careers.</>,
  },
  {
    cat: 'general', catLabel: 'GENERAL',
    question: 'How do I get started with Brighture?',
    answer: <>The easiest way to get started is to <a href="/contact">reach out to our team</a> through the Contact Us page. Share your institution&apos;s goals, size, and areas of interest — and our team will guide you through the most suitable Innovation Lab program, training pathway, or AI product for your specific needs. We offer consultations for institutions at any stage — whether you are exploring AI education for the first time or planning to establish a full innovation campus.</>,
  },
  {
    cat: 'general', catLabel: 'GENERAL',
    question: 'Does Brighture offer partnership opportunities?',
    answer: <>Yes. Brighture actively collaborates with <strong>educational institutions, government ministries, research centers, and corporate innovation labs</strong> through partnership programs. Partnership opportunities include co-developing innovation ecosystems, integrating Brighture programs into institutional curriculum, establishing regional technology hubs, and collaborating on AI research and innovation challenges. To explore a partnership, please <a href="/contact">contact our team directly.</a></>,
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.faqHero}>
        <div className={styles.badge}>FREQUENTLY ASKED QUESTIONS</div>
        <h1>Got Questions?<br /><span className={styles.blue}>We Have </span><span className={styles.orange}>Answers.</span></h1>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.7, marginTop: '16px', maxWidth: '400px' }}>
          Everything you need to know about Brighture — our AI Innovation Labs, training programs,
          and AI products. Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll be happy to help.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className={styles.faqSection}>
        <div className={styles.faqSectionHeader}>
          <div className={styles.faqSectionLabelCenter}>ALL QUESTIONS</div>
          <h2>Answers to Your Most<br />Important Questions</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.faqItem} ${openIndex === i ? styles.open : ''}`}>
              <div className={styles.faqHeader} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <div className={styles.faqHeaderLeft}>
                  <span className={`${styles.faqCat} ${styles[faq.cat]}`}>{faq.catLabel}</span>
                  <span className={styles.faqQuestion}>{faq.question}</span>
                </div>
                <button className={styles.faqToggle}>
                  {openIndex === i ? '×' : '+'}
                </button>
              </div>
              {openIndex === i && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.faqCta}>
        <h2>
          Still exploring? The future isn&apos;t<br />
          something you study.<br />
          It&apos;s something you <span className={styles.ctaBlue}>build.</span>
        </h2>
        <p>
          Whether you&apos;re ready to establish an AI Innovation Lab, enroll in a training program, or
          deploy intelligent systems — the Brighture team is here to help you take the next step.
        </p>
        <p className={styles.ctaPointer}>👉 Start with Brighture.</p>
        <div className={styles.ctaButtons}>
          <Link href="/contact" className={styles.ctaBtnOutline}>Contact Us →</Link>
          <Link href="/ai-labs" className={styles.ctaBtnFilled}>Explore AI Labs</Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2024 Brighture. All rights reserved.</p>
      </footer>
    </div>
  );
}