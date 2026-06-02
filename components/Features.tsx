"use client";

const features = [
  {
    icon: "🔐",
    title: "Identity & Trust Layer",
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
const CARD_STICKY_TOP = NAVBAR_H + 16;
const previewImages = [
  "/images/feature-preview-1.svg",
  "/images/feature-preview-2.svg",
  "/images/feature-preview-3.svg",
];

export default function Features() {
  return (
    <section id="features" style={{
      position: "relative",
      background: "linear-gradient(180deg, #edf4ff 0%, #f4f8ff 18%, #ffffff 42%, #f6f9ff 100%)",
    }}>
      {/* Intro fill layers */}
      <div style={{ position: "absolute", top: "40px", left: "-120px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, rgba(59,130,246,0.04) 45%, transparent 72%)", filter: "blur(8px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20px", right: "-120px", width: "420px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.14) 0%, rgba(96,165,250,0.04) 48%, transparent 74%)", filter: "blur(6px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "90px", left: "6%", width: "180px", height: "140px", backgroundImage: "url('/images/decor-dot-grid.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.16, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "128px", right: "8%", width: "170px", height: "130px", backgroundImage: "url('/images/decor-dot-grid.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.12, pointerEvents: "none" }} />

      {/* Big intro heading */}
      <div style={{
    maxWidth: "var(--max-width)",
    margin: "0 auto",
        padding: "96px 32px 56px",
        position: "relative",
        zIndex: 2,
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "32px",
      }} className="features-intro-row">
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
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
            With Ethical Xchange, you can build:
            <span style={{ width: "1px", height: "20px", background: "var(--border-dark)", display: "inline-block" }} />
          </p>
        </div>

        <img
          src="/images/Logo.jpeg"
          alt="Ethical Xchange logo"
          width={220}
          height={220}
          style={{
            width: "220px",
            height: "220px",
            objectFit: "contain",
            opacity: 0.2,
            filter: "drop-shadow(0 8px 18px rgba(37,99,235,0.08))",
            flexShrink: 0,
          }}
        />
      </div>

      {/* 
        All cards in ONE container so sticky stacking works.
        Each card: position sticky, same top, increasing z-index.
        margin-bottom on each creates scroll space for the next card to arrive.
      */}
      <div style={{ padding: "24px 0 30vh" }}>
        {features.map((f, i) => (
            <div
              key={f.title}
              style={{
                position: "sticky",
                top: `${CARD_STICKY_TOP}px`,
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
                  minHeight: "52vh",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  position: "relative",
                  overflow: "hidden",
                }} className="feature-stack-card">
                  <div style={{
                    position: "absolute",
                    inset: "0",
                    pointerEvents: "none",
                    background: "radial-gradient(80% 120% at 85% 10%, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.03) 42%, transparent 70%)",
                  }} />
                  {/* Card header */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                    position: "relative",
                    zIndex: 1,
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
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "14px",
                    marginBottom: "14px",
                    position: "relative",
                    zIndex: 1,
                  }} className="feature-card-grid">
                    {f.highlights.slice(0, 3).map((h, hi) => (
                      <div
                        key={h}
                        style={{
                          borderRadius: "14px",
                          background: "#ffffff",
                          border: "1px solid rgba(226, 232, 240, 0.8)",
                          transition: "all 0.25s",
                          cursor: "default",
                          overflow: "hidden",
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
                        <img
                          src={previewImages[hi % previewImages.length]}
                          alt={h}
                          style={{ width: "100%", height: "126px", objectFit: "cover", display: "block" }}
                        />
                        <div style={{ padding: "12px 12px 14px" }}>
                          <p style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                            lineHeight: 1.35,
                          }}>{h}</p>
                        </div>
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
                    marginTop: "auto",
                    position: "relative",
                    zIndex: 1,
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
        ))}
      </div>

      <style jsx global>{`
        @media (max-width: 1000px) {
          .features-intro-row { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 900px) {
          .feature-card-grid { grid-template-columns: 1fr 1fr !important; }
          .feature-card-footer { flex-direction: column !important; align-items: flex-start !important; }
          .feature-stack-card { min-height: auto !important; }
        }
        @media (max-width: 560px) {
          .feature-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
