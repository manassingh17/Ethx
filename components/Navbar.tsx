"use client";

import { useState, useEffect, CSSProperties } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.3s ease",
    background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "none",
    boxShadow: scrolled ? "var(--shadow-sm)" : "none",
  };

  const container: CSSProperties = {
    maxWidth: "var(--max-width)",
    margin: "0 auto",
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "68px",
  };

  const logo: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const logoIcon: CSSProperties = {
    width: "34px",
    height: "34px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #2563eb, #4f46e5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: "13px",
    color: "#fff",
  };

  const logoText: CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "17px",
    fontWeight: 700,
    color: scrolled ? "var(--text-primary)" : "#ffffff",
    transition: "color 0.3s",
  };

  const links: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "36px",
  };

  const link: CSSProperties = {
    fontSize: "14px",
    fontWeight: 500,
    color: scrolled ? "var(--text-secondary)" : "rgba(203, 213, 225, 0.85)",
    transition: "color 0.2s",
  };

  const cta: CSSProperties = {
    padding: "9px 22px",
    borderRadius: "var(--radius-sm)",
    fontSize: "14px",
    fontWeight: 600,
    color: "#fff",
    background: "linear-gradient(135deg, #2563eb, #4f46e5)",
    transition: "all 0.2s",
    boxShadow: "0 2px 10px rgba(37, 99, 235, 0.3)",
  };

  const hamburger: CSSProperties = {
    flexDirection: "column",
    gap: "5px",
    padding: "8px",
    background: "transparent",
    cursor: "pointer",
  };

  const barColor = scrolled ? "var(--text-primary)" : "#e2e8f0";

  return (
    <nav style={nav}>
      <div style={container}>
        <a href="#" style={logo}>
          <div style={logoIcon}>EX</div>
          <span style={logoText}>Ethical Xchange</span>
        </a>

        <div style={links} className="hide-mobile">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} style={link}
              onMouseEnter={e => (e.currentTarget.style.color = scrolled ? "var(--accent)" : "#ffffff")}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? "var(--text-secondary)" : "rgba(203, 213, 225, 0.85)")}
            >{l.label}</a>
          ))}
          <a href="#contact" style={cta}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(37, 99, 235, 0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(37, 99, 235, 0.3)"; }}
          >Get Started</a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={hamburger}
          className="show-mobile"
          aria-label="Menu"
        >
          <span style={{ width: 22, height: 2, background: barColor, borderRadius: 2, transition: "0.3s", transform: mobileOpen ? "rotate(45deg) translate(4px,4px)" : "none" }} />
          <span style={{ width: 22, height: 2, background: barColor, borderRadius: 2, opacity: mobileOpen ? 0 : 1, transition: "0.2s" }} />
          <span style={{ width: 22, height: 2, background: barColor, borderRadius: 2, transition: "0.3s", transform: mobileOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background: "rgba(10, 22, 40, 0.95)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(59,130,246,0.15)", padding: "20px 32px" }} className="show-mobile">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              style={{ display: "block", padding: "12px 0", fontSize: "15px", color: "rgba(203, 213, 225, 0.85)" }}
            >{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}
            style={{ ...cta, display: "block", textAlign: "center" as const, marginTop: "12px" }}
          >Get Started</a>
        </div>
      )}
    </nav>
  );
}
