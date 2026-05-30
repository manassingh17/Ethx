"use client";

import { useState, useEffect, CSSProperties } from "react";

const testimonials = [
  {
    quote: "Ethical Xchange gave us the infrastructure to launch our data marketplace in weeks instead of years. The white-label capability meant we could maintain our brand.",
    author: "Sarah Chen",
    role: "CTO, DataStream Analytics",
  },
  {
    quote: "The blockchain-secured transaction layer eliminated the trust gap. Now coordination happens in real-time across all our partner organizations.",
    author: "Dr. Marcus Obi",
    role: "Director of Operations, Intl. Relief Org",
  },
  {
    quote: "Building our own infrastructure would have cost 10x and taken 18 months. Ethical Xchange got us live in 3 weeks with better capabilities.",
    author: "James Rivera",
    role: "VP of Product, AI Training Consortium",
  },
  {
    quote: "We needed something that felt like our product, not someone else's platform. Ethical Xchange delivered exactly that level of customization.",
    author: "Priya Sharma",
    role: "Head of Partnerships, Creator Network Alliance",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const section: CSSProperties = {
    padding: "120px 32px",
    background: "var(--bg-white)",
  };

  const container: CSSProperties = {
    maxWidth: "720px",
    margin: "0 auto",
    textAlign: "center",
  };

  const header: CSSProperties = {
    marginBottom: "48px",
  };

  const label: CSSProperties = {
    display: "inline-block",
    padding: "6px 16px",
    borderRadius: "var(--radius-full)",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--accent)",
    background: "var(--accent-light)",
    marginBottom: "20px",
  };

  const title: CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "clamp(24px, 3.5vw, 36px)",
    fontWeight: 800,
  };

  const card: CSSProperties = {
    padding: "48px 40px",
    borderRadius: "var(--radius)",
    border: "1px solid var(--border)",
    background: "var(--bg-light)",
    minHeight: "240px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.3s ease",
  };

  const quoteIcon: CSSProperties = {
    fontSize: "40px",
    color: "var(--accent-light)",
    fontFamily: "Georgia, serif",
    lineHeight: 1,
    marginBottom: "20px",
  };

  const quoteText: CSSProperties = {
    fontSize: "17px",
    lineHeight: 1.8,
    color: "var(--text-secondary)",
    fontStyle: "italic",
    marginBottom: "28px",
    maxWidth: "560px",
  };

  const authorName: CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "15px",
    fontWeight: 600,
    color: "var(--text-primary)",
    marginBottom: "4px",
  };

  const authorRole: CSSProperties = {
    fontSize: "13px",
    color: "var(--text-muted)",
  };

  const dots: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "28px",
  };

  return (
    <section style={section}>
      <div style={container}>
        <div style={header}>
          <span style={label}>Trusted by Leaders</span>
          <h2 style={title}>What Our Partners Say</h2>
        </div>

        <div style={card}>
          <div style={quoteIcon}>&ldquo;</div>
          <p style={quoteText}>{testimonials[current].quote}</p>
          <div style={authorName}>{testimonials[current].author}</div>
          <div style={authorRole}>{testimonials[current].role}</div>
        </div>

        <div style={dots}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                border: "none",
                background: i === current ? "var(--accent)" : "var(--border-dark)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
