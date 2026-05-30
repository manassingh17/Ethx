"use client";

import { CSSProperties } from "react";

const links = {
  Platform: ["Features", "How It Works", "Security", "Pricing"],
  Marketplace: ["Native", "Humanitarian", "AI Training", "Creator Economy"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "API Reference", "Status", "Support"],
};

export default function Footer() {
  const footer: CSSProperties = {
    borderTop: "1px solid var(--border)",
    background: "var(--bg-light)",
    padding: "64px 32px 32px",
  };

  const container: CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const topGrid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
    gap: "40px",
    marginBottom: "48px",
  };

  const brand: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  };

  const logoRow: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const logoIcon: CSSProperties = {
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    background: "var(--accent)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: "12px",
    color: "#fff",
  };

  const logoText: CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "16px",
    fontWeight: 700,
  };

  const brandDesc: CSSProperties = {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "var(--text-muted)",
    maxWidth: "260px",
  };

  const colTitle: CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--text-primary)",
    marginBottom: "16px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const colLink: CSSProperties = {
    display: "block",
    fontSize: "14px",
    color: "var(--text-muted)",
    marginBottom: "10px",
    transition: "color 0.2s",
  };

  const bottomBar: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "24px",
    borderTop: "1px solid var(--border)",
    flexWrap: "wrap",
    gap: "12px",
  };

  const copyright: CSSProperties = {
    fontSize: "13px",
    color: "var(--text-muted)",
  };

  const powered: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    color: "var(--text-muted)",
  };

  const greenDot: CSSProperties = {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#10b981",
    animation: "pulse 2s ease-in-out infinite",
  };

  return (
    <footer style={footer}>
      <div style={container}>
        <div style={topGrid} className="footer-grid">
          <div style={brand}>
            <div style={logoRow}>
              <div style={logoIcon}>EX</div>
              <span style={logoText}>Ethical Xchange</span>
            </div>
            <p style={brandDesc}>
              Infrastructure for the world&apos;s data economies. Deploy your own
              marketplace on enterprise-grade blockchain infrastructure.
            </p>
          </div>

          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h4 style={colTitle}>{cat}</h4>
              {items.map(l => (
                <a key={l} href="#" style={colLink}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >{l}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={bottomBar}>
          <p style={copyright}>&copy; {new Date().getFullYear()} Ethical Xchange. All rights reserved.</p>
          <div style={powered}>
            <span style={greenDot} />
            Powered by Ethical Xchange Infrastructure
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#" style={{ fontSize: "13px", color: "var(--text-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
            >Privacy</a>
            <a href="#" style={{ fontSize: "13px", color: "var(--text-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
            >Terms</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
