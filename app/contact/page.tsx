'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Add your form submission logic here
  };

  return (
    <div style={{ background: '#fff', color: '#1a1a2e', minHeight: '100vh' }}>
      {/* CONTACT SECTION */}
      <section style={{ padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px', color: '#1a1a2e' }}>
              Get in Touch
            </h2>
            <p style={{ fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Have questions about our programs? Want to partner with Brighture? We&apos;d love to hear from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: '600px',
              margin: '0 auto 80px',
              padding: '40px',
              background: '#f8f9fa',
              borderRadius: '12px',
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#1a1a2e' }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#1a1a2e' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', color: '#1a1a2e' }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your inquiry..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  minHeight: '120px',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px 24px',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '80px 20px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px', color: '#1a1a2e' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '16px', color: '#666' }}>
              Find answers to common questions about our programs and services.
            </p>
          </div>

          <FAQ />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 20px', background: '#1a1a2e', color: '#fff', textAlign: 'center' }}>
        <p>© 2024 Brighture. All rights reserved.</p>
        <div style={{ marginTop: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>Home</Link>
          <Link href="/about" style={{ color: '#2563eb', textDecoration: 'none' }}>About</Link>
          <Link href="/ai-labs" style={{ color: '#2563eb', textDecoration: 'none' }}>AI Labs</Link>
        </div>
      </footer>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is Brighture?',
      a: 'Brighture is a global leader in AI and robotics innovation ecosystems, partnering with schools, universities, and enterprises to create cutting-edge learning and research programs.',
    },
    {
      q: 'What programs does Brighture offer?',
      a: 'We offer four main programs: Genesis (foundational), Acceleration (applied), Discovery (research), and Nexus Campus (enterprise-scale). Each is designed for different educational and organizational levels.',
    },
    {
      q: 'How do I get started with Brighture?',
      a: 'Visit our AI Labs page to explore all programs, or contact us directly through this form. Our team will discuss your institution&apos;s needs and recommend the best program.',
    },
    {
      q: 'What kind of support does Brighture provide?',
      a: 'We provide comprehensive support including educator training, curriculum materials, equipment setup, industry partnerships, and ongoing technical support.',
    },
    {
      q: 'Can Brighture work with my institution?',
      a: 'We work with organizations of all sizes, from K-12 schools to global enterprises. Reach out to discuss how we can partner with you.',
    },
    {
      q: 'What is the timeline for implementation?',
      a: 'Implementation timelines vary by program complexity. Genesis typically takes 2-3 months, while Nexus Campus can take 6-12 months. We\'ll provide a detailed timeline during consultation.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            background: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#2563eb';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e0e0e0';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{
              padding: '20px 24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#fff',
              border: 'none',
              width: '100%',
              textAlign: 'left',
              fontSize: '16px',
              fontWeight: 600,
              color: openIndex === index ? '#2563eb' : '#1a1a2e',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f8f9fa';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
            }}
          >
            <span>{faq.q}</span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px',
                transition: 'transform 0.3s ease',
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              ▼
            </span>
          </button>

          {openIndex === index && (
            <div
              style={{
                padding: '0 24px 20px 24px',
                color: '#555',
                lineHeight: '1.6',
                animation: 'slideDown 0.3s ease',
              }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}