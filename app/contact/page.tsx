'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './contactFaq.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '', organisation: '', email: '', phone: '',
    country: '', interest: '', message: '',
  });

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.contactHero}>
        <div className={styles.badge}>GET IN TOUCH</div>
        <h1>
          Let&apos;s Build the<br />
          <span className={styles.blue}>Future</span>{' '}
          <span className={styles.purple}>Together</span>
        </h1>
        <p>
          Whether you are planning to establish an AI Innovation Lab, explore robotics and
          intelligent systems, enroll in AI training programs, or deploy AI-powered industrial
          solutions — the Brighture team is ready to support your journey.
        </p>
      </section>

      {/* CONTACT BODY */}
      <section className={styles.contactBody}>

        {/* LEFT */}
        <div className={styles.contactLeft}>
          <div className={styles.sectionLabel}>CONTACT INFORMATION</div>
          <h2>We&apos;d Love to<br />Hear From You</h2>
          <p>
            Reach out to learn more about our AI Innovation Lab programs, training pathways,
            products, or partnership opportunities. Our team will respond within 1–2 business days.
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>✉️</div>
              <div>
                <span className={styles.infoLabel}>Email Us</span>
                <a href="mailto:innovate@brightureglobal.com">innovate@brightureglobal.com</a>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>🌐</div>
              <div>
                <span className={styles.infoLabel}>Website</span>
                <a href="https://www.brightureglobal.com" target="_blank" rel="noreferrer">www.brightureglobal.com</a>
              </div>
            </div>
          </div>

          <div className={styles.officesLabel}>Global Offices</div>
          <div className={styles.officesList}>
            <div className={styles.officeItem}>
              <span className={styles.officeFlag}>🇮🇳</span>
              <div><div className={styles.officeName}>Bengaluru, India</div><div className={styles.officeSub}>South Asia Innovation Hub</div></div>
            </div>
            <div className={styles.officeItem}>
              <span className={styles.officeFlag}>🇦🇪</span>
              <div><div className={styles.officeName}>Dubai, UAE</div><div className={styles.officeSub}>Middle East &amp; Gulf Region</div></div>
            </div>
            <div className={styles.officeItem}>
              <span className={styles.officeFlag}>🇬🇧</span>
              <div><div className={styles.officeName}>London, United Kingdom</div><div className={styles.officeSub}>Europe &amp; UK Operations</div></div>
            </div>
            <div className={styles.officeItem}>
              <span className={styles.officeFlag}>🇺🇸</span>
              <div><div className={styles.officeName}>Texas, USA</div><div className={styles.officeSub}>Americas Innovation Center</div></div>
            </div>
          </div>

          <div className={styles.whoWeWork}>
            <div className={styles.whoLabel}>Who We Work With</div>
            <div className={styles.whoTags}>
              {['Schools','Universities','Enterprises','Governments','Research Centers','Innovation Hubs'].map(t => (
                <span key={t} className={styles.whoTag}>{t}</span>
              ))}
            </div>
          </div>

          <div className={styles.partnerBox}>
            <div className={styles.partnerBoxTitle}>🤝 Partnership Opportunities</div>
            <p>
              Brighture actively collaborates with educational institutions, government bodies,
              research centers, and corporate innovation labs. If you are interested in establishing
              a strategic partnership, we&apos;d love to explore opportunities together.
            </p>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className={styles.formCard}>
          <h3>Start a Conversation</h3>
          <p className={styles.formSubtitle}>Fill in your details below and our team will get back to you shortly.</p>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Full Name <span className={styles.req}>*</span></label>
              <input className={styles.formInput} placeholder="Your full name" value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Organisation</label>
              <input className={styles.formInput} placeholder="School / University / Company" value={form.organisation} onChange={e => setForm({...form, organisation: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email Address <span className={styles.req}>*</span></label>
              <input className={styles.formInput} type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Phone Number</label>
              <input className={styles.formInput} placeholder="+91 00000 00000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Country</label>
              <select className={styles.formSelect} value={form.country} onChange={e => setForm({...form, country: e.target.value})}>
                <option value="">Select your country</option>
                <option>India</option><option>UAE</option><option>United Kingdom</option>
                <option>United States</option><option>Other</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Area of Interest</label>
              <select className={styles.formSelect} value={form.interest} onChange={e => setForm({...form, interest: e.target.value})}>
                <option value="">Select an area</option>
                <option>AI Labs</option><option>AI Trainings</option>
                <option>AI Products</option><option>Partnership</option><option>Other</option>
              </select>
            </div>
            <div className={`${styles.formGroup} ${styles.full}`}>
              <label className={styles.formLabel}>Message <span className={styles.req}>*</span></label>
              <textarea className={styles.formTextarea} placeholder="Tell us about your goals, institution, or what you'd like to explore with Brighture…" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>
          </div>
          <div className={styles.captchaRow}>
            <div className={styles.captchaLeft}>
              <div className={styles.captchaCheckbox} />
              I am not a robot
            </div>
            <div className={styles.captchaRight}>
              <div className={styles.captchaLogo}>🔒</div>
              reCAPTCHA<br />Privacy · Terms
            </div>
          </div>
          <button className={styles.submitBtn}>Send Message →</button>
          <p className={styles.formDisclaimer}>
            By submitting this form, you agree to our{' '}
            <a href="#">Privacy Policy</a>. We will never share your data.
          </p>
        </div>
      </section>

      {/* GLOBAL NETWORK */}
      <section className={styles.globalNetwork}>
        <div className={styles.globalHeader}>
          <div className={styles.globalSectionLabel}>GLOBAL NETWORK</div>
          <h2>Our Locations</h2>
          <p>
            Brighture operates through a growing international network — enabling institutions
            across Asia, the Middle East, Europe, and the Americas to build their AI Innovation ecosystems.
          </p>
        </div>
        <div className={styles.locationsGrid}>
          <div className={styles.locationCard}>
            <span className={styles.locationFlag}>🇮🇳</span>
            <div className={styles.locationCity}>Bengaluru</div>
            <div className={styles.locationCountry}>India</div>
            <span className={styles.locationTag}>South Asia Innovation Hub</span>
          </div>
          <div className={styles.locationCard}>
            <span className={styles.locationFlag}>🇦🇪</span>
            <div className={styles.locationCity}>Dubai</div>
            <div className={styles.locationCountry}>United Arab Emirates</div>
            <span className={styles.locationTag}>Middle East &amp; Gulf Region</span>
          </div>
          <div className={styles.locationCard}>
            <span className={styles.locationFlag}>🇬🇧</span>
            <div className={styles.locationCity}>London</div>
            <div className={styles.locationCountry}>United Kingdom</div>
            <span className={styles.locationTag}>Europe &amp; UK Operations</span>
          </div>
          <div className={styles.locationCard}>
            <span className={styles.locationFlag}>🇺🇸</span>
            <div className={styles.locationCity}>Texas</div>
            <div className={styles.locationCountry}>United States of America</div>
            <span className={styles.locationTag}>Americas Innovation Center</span>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2024 Brighture. All rights reserved.</p>
      </footer>
    </div>
  );
}