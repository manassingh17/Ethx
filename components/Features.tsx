"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const features = [
  {
    icon: "🔐",
    title: "Identity & Trust Layer",
    short: "Identity & Trust",
    desc: "Blockchain-secured identity verification and trust scoring. Zero-knowledge proofs ensure privacy while maintaining accountability.",
    highlights: [
      "Zero-Knowledge Identity Proofs",
      "Decentralized Trust Scores",
      "Privacy-First Verification",
      "Immutable Audit Trail",
    ],
  },
  {
    icon: "⚡",
    title: "Transaction Engine",
    short: "Transactions",
    desc: "Smart contract-powered transactions with automated escrow, royalty distribution, and usage-based billing.",
    highlights: [
      "Automated Smart Escrow",
      "Royalty Distribution",
      "Usage-Based Billing",
      "Multi-Currency Support",
    ],
  },
  {
    icon: "🧩",
    title: "Marketplace Primitives",
    short: "Marketplace",
    desc: "Pre-built modules for listings, search, filtering, and data product management. Assemble your marketplace like building blocks.",
    highlights: [
      "Drag & Drop Listings",
      "Advanced Filtering",
      "Data Product Catalog",
      "Modular Architecture",
    ],
  },
  {
    icon: "🏷️",
    title: "White-Label Deployment",
    short: "White-Label",
    desc: "Full brand customization — your logo, colors, domain. Launch a marketplace that looks entirely yours.",
    highlights: [
      "Custom Branding & Domain",
      "Theme Builder",
      "White-Label APIs",
      "Partner-Ready Storefronts",
    ],
  },
  {
    icon: "🛡️",
    title: "Access Control & Permissions",
    short: "Access Control",
    desc: "Granular role-based access for providers, consumers, administrators, and auditors.",
    highlights: [
      "Role-Based Access (RBAC)",
      "Provider Dashboards",
      "Admin & Auditor Views",
      "API Key Management",
    ],
  },
  {
    icon: "🔍",
    title: "Discoverability Engine",
    short: "Discoverability",
    desc: "AI-powered search and recommendation systems. Help buyers find exactly the data they need.",
    highlights: [
      "AI-Powered Search",
      "Smart Recommendations",
      "Category Intelligence",
      "Trend Analytics",
    ],
  },
];

const NAVBAR_H = 68;
const HEADER_H = 90;
const STICKY_TOP = NAVBAR_H + HEADER_H;

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardEls = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = useCallback((el: HTMLDivElement | null, i: number) => {
    cardEls.current[i] = el;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let newActive = 0;
      cardEls.current.forEach((el, i) => {
        if (!el) return;
        if (el.getBoundingClientRect().top <= STICKY_TOP + 20) newActive = i;
      });
      setActiveIndex(newActive);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (i: number) => {
    cardEls.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="features" ref={sectionRef} style={{
      position: "relative",
      background: "linear-gradient(180deg, #f8faff 0%, #ffffff 30%, #f8faff 100%)",
    }}>
      {/* Big intro heading */}
      <div style={{
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "120px 32px 60px",
      }}>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 800,
          lineHeight: 1.12,
          color: "var(--text-primary)",
          maxWidth: "750px",
        }}>
          The all in one{" "}
          <span style={{ color: "var(--accent)" }}>marketplace infrastructure</span>{" "}
          you&apos;ve been looking for
        </h2>
        <p style={{
          marginTop: "20px",
          fontSize: "15px",
          color: "var(--text-secondary)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}>
          With Ethical Xchange, you can:
          <span style={{ width: "1px", height: "20px", background: "var(--border-dark)", display: "inline-block" }} />
        </p>
      </div>

      {/* Sticky header - sits below the fixed navbar */}
      <div style={{
        position: "sticky",
        top: `${NAVBAR_H}px`,
        zIndex: 500,
        background: "rgba(255, 255, 255, 0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        height: `${HEADER_H}px`,
        display: "flex",
        alignItems: "center",
      }}>
        <div style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 32px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
        }} className="features-header-row">
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(18px, 2.5vw, 26px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}>
            Build a <span style={{ color: "var(--accent)" }}>Data Economy</span>
          </h2>

          <div style={{
            display: "flex",
            gap: "0",
            overflowX: "auto",
          }} className="features-tabs">
            {features.map((f, i) => (
              <button
                key={f.title}
                onClick={() => scrollToCard(i)}
                style={{
                  padding: "8px 16px",
                  fontSize: "13px",
                  fontWeight: activeIndex === i ? 700 : 500,
                  color: activeIndex === i ? "var(--accent)" : "var(--text-secondary)",
                  background: "transparent",
                  borderBottom: activeIndex === i ? "2px solid var(--accent)" : "2px solid transparent",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={e => { if (activeIndex !== i) e.currentTarget.style.color = "var(--text-primary)"; }}
                onMouseLeave={e => { if (activeIndex !== i) e.currentTarget.style.color = "var(--text-secondary)"; }}
              >
                {f.short}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 
        All cards in ONE container so sticky stacking works.
        Each card: position sticky, same top, increasing z-index.
        margin-bottom on each creates scroll space for the next card to arrive.
      */}
      <div style={{ padding: "24px 0 30vh" }}>
        {features.map((f, i) => {
          const isLast = i === features.length - 1;
          return (
            <div
              key={f.title}
              ref={(el) => setCardRef(el, i)}
              style={{
                position: "sticky",
                top: `${STICKY_TOP + 8}px`,
                zIndex: 20 + i,
                marginBottom: "55vh",
              }}
            >
              <div style={{
                maxWidth: "var(--max-width)",
                margin: "0 auto",
                padding: "0 32px",
              }}>
                <div style={{
                  padding: "32px 36px",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #f0f5ff 0%, #e8f0fe 40%, #f0f4ff 100%)",
                  border: "1px solid rgba(37, 99, 235, 0.1)",
                  boxShadow: "0 8px 40px rgba(37, 99, 235, 0.08), 0 2px 6px rgba(0,0,0,0.04)",
                }}>
                  {/* Card header */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                  }}>
                    <span style={{ fontSize: "24px" }}>{f.icon}</span>
                    <h3 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(18px, 2.2vw, 24px)",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      lineHeight: 1.2,
                    }}>
                      {f.title}
                    </h3>
                  </div>

                  {/* Highlight sub-cards */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "14px",
                    marginBottom: "20px",
                  }} className="feature-card-grid">
                    {f.highlights.map((h, hi) => (
                      <div
                        key={h}
                        style={{
                          padding: "22px 18px",
                          borderRadius: "14px",
                          background: "#ffffff",
                          border: "1px solid rgba(226, 232, 240, 0.8)",
                          transition: "all 0.25s",
                          cursor: "default",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = "rgba(37, 99, 235, 0.25)";
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 99, 235, 0.1)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.8)";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          background: "rgba(37, 99, 235, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "12px",
                          color: "var(--accent)",
                          fontWeight: 700,
                          fontSize: "13px",
                        }}>
                          {`0${hi + 1}`}
                        </div>
                        <p style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          lineHeight: 1.4,
                        }}>{h}</p>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "18px",
                    borderTop: "1px solid rgba(37, 99, 235, 0.08)",
                    gap: "20px",
                  }} className="feature-card-footer">
                    <p style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                      flex: 1,
                    }}>{f.desc}</p>
                    <a href="#contact" style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "10px 22px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#fff",
                      background: "linear-gradient(135deg, #2563eb, #4f46e5)",
                      boxShadow: "0 2px 10px rgba(37, 99, 235, 0.25)",
                      transition: "all 0.25s",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(37, 99, 235, 0.35)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(37, 99, 235, 0.25)"; }}
                    >
                      Learn More &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        .features-tabs::-webkit-scrollbar { display: none; }
        .features-tabs { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 1000px) {
          .features-header-row { flex-direction: column !important; gap: 8px !important; align-items: flex-start !important; }
        }
        @media (max-width: 900px) {
          .feature-card-grid { grid-template-columns: 1fr 1fr !important; }
          .feature-card-footer { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 560px) {
          .feature-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
