"use client";

import { CSSProperties } from "react";

const marketplaces = [
  {
    title: "Ethical Xchange Native",
    subtitle: "Core Infrastructure Marketplace",
    desc: "The canonical implementation — professional, scalable, enterprise-ready.",
    color: "#2563eb",
    tags: ["Enterprise", "SaaS", "Professional"],
  },
  {
    title: "UN Disaster Recovery",
    subtitle: "Humanitarian Data Exchange",
    desc: "Mission-critical field data coordination for global disaster response.",
    color: "#059669",
    tags: ["Humanitarian", "NGO", "Operations"],
  },
  {
    title: "AI Training Data",
    subtitle: "Industrial AI Marketplace",
    desc: "Dense, efficient, machine-oriented. Industrial-scale dataset commercialization.",
    color: "#d97706",
    tags: ["AI/ML", "Datasets", "Industrial"],
  },
  {
    title: "Creator Economy",
    subtitle: "Influencer & Content Marketplace",
    desc: "High-energy, commercially-driven creator monetization ecosystem.",
    color: "#db2777",
    tags: ["Creator", "Social", "Commercial"],
  },
];

export default function MarketplacePreview() {
  const section: CSSProperties = {
    padding: "120px 32px",
    background: "var(--bg-white)",
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
    maxWidth: "560px",
    margin: "0 auto",
  };

  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  };

  const card = (color: string): CSSProperties => ({
    padding: "28px 24px",
    borderRadius: "var(--radius)",
    border: "1px solid var(--border)",
    background: "var(--bg-white)",
    transition: "box-shadow 0.25s, transform 0.25s",
    position: "relative",
    cursor: "default",
  });

  const badgeStyle: CSSProperties = {
    position: "absolute",
    top: "14px",
    right: "14px",
    padding: "4px 10px",
    borderRadius: "var(--radius-full)",
    fontSize: "10px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    color: "var(--text-muted)",
    background: "var(--bg-light)",
    border: "1px solid var(--border)",
  };

  const preview = (color: string): CSSProperties => ({
    width: "100%",
    height: "80px",
    borderRadius: "var(--radius-sm)",
    background: `${color}0d`,
    border: `1px solid ${color}20`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  });

  const cardTitle = (color: string): CSSProperties => ({
    fontFamily: "var(--font-heading)",
    fontSize: "16px",
    fontWeight: 600,
    color,
    marginBottom: "4px",
  });

  const cardSub: CSSProperties = {
    fontSize: "12px",
    color: "var(--text-muted)",
    marginBottom: "10px",
  };

  const cardDesc: CSSProperties = {
    fontSize: "13px",
    lineHeight: 1.6,
    color: "var(--text-secondary)",
    marginBottom: "16px",
  };

  const tags: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  };

  const tag: CSSProperties = {
    padding: "3px 10px",
    borderRadius: "var(--radius-full)",
    fontSize: "11px",
    fontWeight: 500,
    color: "var(--text-muted)",
    border: "1px solid var(--border)",
  };

  const footer: CSSProperties = {
    textAlign: "center",
    marginTop: "48px",
    fontSize: "15px",
    color: "var(--text-secondary)",
  };

  return (
    <section id="marketplace" style={section}>
      <div style={container}>
        <div style={header}>
          <span style={label}>Marketplace Variants</span>
          <h2 style={title}>One Infrastructure. Infinite Possibilities.</h2>
          <p style={subtitle}>
            The same platform powers radically different marketplace experiences. Each feels like a different company.
          </p>
        </div>

        <div style={grid} className="marketplace-grid">
          {marketplaces.map((m) => (
            <div key={m.title} style={card(m.color)}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span style={badgeStyle}>Coming Soon</span>
              <div style={preview(m.color)}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "16px", fontWeight: 700, color: m.color }}>
                  {m.title.split(" ")[0]}
                </span>
              </div>
              <h3 style={cardTitle(m.color)}>{m.title}</h3>
              <p style={cardSub}>{m.subtitle}</p>
              <p style={cardDesc}>{m.desc}</p>
              <div style={tags}>
                {m.tags.map((t) => <span key={t} style={tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <p style={footer}>
          You are not buying our marketplace. You are deploying <strong style={{ color: "var(--accent)" }}>your marketplace</strong> on our infrastructure.
        </p>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) { .marketplace-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .marketplace-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
