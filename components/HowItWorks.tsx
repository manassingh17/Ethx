"use client";

import { CSSProperties } from "react";

const steps = [
  {
    number: "01",
    title: "Deploy Your Marketplace",
    desc: "Configure your branding, define participant roles, set up workflows, and customize your marketplace structure.",
    details: ["Custom branding & domain", "Role-based architecture", "Workflow configuration", "Data product schemas"],
  },
  {
    number: "02",
    title: "Connect Your Ecosystem",
    desc: "Integrate data sources, onboard participants, connect APIs, and establish governance rules.",
    details: ["API integrations", "Participant onboarding", "Data source connections", "Governance frameworks"],
  },
  {
    number: "03",
    title: "Go Live & Scale",
    desc: "Launch with smart contract-powered transactions, real-time analytics, and automated monetization.",
    details: ["Smart contract transactions", "Real-time analytics", "Automated billing", "Infinite scalability"],
  },
];

export default function HowItWorks() {
  const section: CSSProperties = {
    padding: "120px 32px 120px",
    marginTop: "-80vh",
    position: "relative" as const,
    zIndex: 50,
    background: "var(--bg-light)",
  };

  const container: CSSProperties = {
    maxWidth: "var(--max-width)",
    margin: "0 auto",
  };

  const header: CSSProperties = {
    textAlign: "center",
    marginBottom: "64px",
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
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 800,
    marginBottom: "16px",
  };

  const subtitle: CSSProperties = {
    fontSize: "16px",
    color: "var(--text-secondary)",
    maxWidth: "520px",
    margin: "0 auto",
  };

  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "28px",
  };

  const card: CSSProperties = {
    padding: "36px 28px",
    borderRadius: "var(--radius)",
    background: "var(--bg-white)",
    border: "1px solid var(--border)",
    boxShadow: "var(--shadow-sm)",
  };

  const number: CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "48px",
    fontWeight: 800,
    color: "var(--accent-light)",
    marginBottom: "16px",
    lineHeight: 1,
  };

  const cardTitle: CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "12px",
  };

  const cardDesc: CSSProperties = {
    fontSize: "14px",
    lineHeight: 1.7,
    color: "var(--text-secondary)",
    marginBottom: "20px",
  };

  const detail: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "13px",
    color: "var(--text-secondary)",
    marginBottom: "8px",
  };

  const dot: CSSProperties = {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "var(--accent)",
    flexShrink: 0,
  };

  return (
    <section id="how-it-works" style={section}>
      <div style={container}>
        <div style={header}>
          <span style={label}>How It Works</span>
          <h2 style={title}>Three Steps to Your Data Marketplace</h2>
          <p style={subtitle}>
            From concept to live marketplace in record time. Our infrastructure handles the complexity.
          </p>
        </div>

        <div style={grid} className="steps-grid">
          {steps.map((s) => (
            <div key={s.number} style={card}>
              <div style={number}>{s.number}</div>
              <h3 style={cardTitle}>{s.title}</h3>
              <p style={cardDesc}>{s.desc}</p>
              {s.details.map((d) => (
                <div key={d} style={detail}>
                  <span style={dot} />
                  {d}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) { .steps-grid { grid-template-columns: 1fr !important; max-width: 480px !important; margin: 0 auto !important; } }
      `}</style>
    </section>
  );
}
