"use client";

import { CSSProperties, useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

function FeatureContent({ feature }: { feature: typeof features[0] }) {
  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "center",
      }}
      className="features-panel-grid"
    >
      {/* Left: info */}
      <div>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "52px",
          height: "52px",
          borderRadius: "14px",
          background: "rgba(37, 99, 235, 0.1)",
          fontSize: "26px",
          marginBottom: "20px",
        }}>
          {feature.icon}
        </div>
        <h3 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(22px, 2.5vw, 30px)",
          fontWeight: 800,
          color: "var(--text-primary)",
          marginBottom: "14px",
          lineHeight: 1.2,
        }}>
          {feature.title}
        </h3>
        <p style={{
          fontSize: "15px",
          lineHeight: 1.75,
          color: "var(--text-secondary)",
          maxWidth: "400px",
          marginBottom: "24px",
        }}>
          {feature.desc}
        </p>
        <a href="#contact" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 24px",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#fff",
          background: "linear-gradient(135deg, #2563eb, #4f46e5)",
          boxShadow: "0 2px 10px rgba(37, 99, 235, 0.25)",
          transition: "all 0.25s",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(37, 99, 235, 0.35)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(37, 99, 235, 0.25)"; }}
        >
          Learn More <span>&rarr;</span>
        </a>
      </div>

      {/* Right: highlight cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
        {feature.highlights.map((h, i) => (
          <motion.div
            key={h}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            style={{
              padding: "20px 18px",
              borderRadius: "12px",
              border: "1px solid rgba(37, 99, 235, 0.1)",
              background: "rgba(37, 99, 235, 0.03)",
              transition: "all 0.25s",
              cursor: "default",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(37, 99, 235, 0.07)";
              e.currentTarget.style.borderColor = "rgba(37, 99, 235, 0.2)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(37, 99, 235, 0.08)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(37, 99, 235, 0.03)";
              e.currentTarget.style.borderColor = "rgba(37, 99, 235, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "rgba(37, 99, 235, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
              color: "var(--accent)",
              fontWeight: 700,
              fontSize: "12px",
            }}>
              {`0${i + 1}`}
            </div>
            <p style={{
              fontFamily: "var(--font-heading)",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--text-primary)",
              lineHeight: 1.4,
            }}>{h}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback((el: HTMLDivElement | null, i: number) => {
    triggerRefs.current[i] = el;
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    triggerRefs.current.forEach((trigger, i) => {
      if (!trigger) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
      );
      observer.observe(trigger);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToPanel = (i: number) => {
    triggerRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="features" ref={sectionRef} style={{
      position: "relative",
      background: "linear-gradient(180deg, #f8faff 0%, #ffffff 50%, #f8faff 100%)",
    }}>
      {/* Sticky header: title + tabs + content card */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        paddingBottom: "40px",
      }}>
        {/* Top bar */}
        <div style={{
          background: "rgba(255, 255, 255, 0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}>
          <div style={{
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            padding: "24px 32px 0",
          }}>
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(22px, 3vw, 34px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.2,
              }}>
                Everything You Need to Build a{" "}
                <span style={{ color: "var(--accent)" }}>Data Economy</span>
              </h2>
            </div>

            {/* Tabs */}
            <div style={{
              display: "flex",
              gap: "0",
              justifyContent: "center",
              overflowX: "auto",
            }} className="features-tabs">
              {features.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => scrollToPanel(i)}
                  style={{
                    padding: "10px 18px",
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
                  onMouseEnter={e => {
                    if (activeIndex !== i) e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={e => {
                    if (activeIndex !== i) e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {f.short}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content card - bluish tinted */}
        <div style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 32px",
        }}>
          <div style={{
            marginTop: "32px",
            padding: "40px 40px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #f0f5ff 0%, #e8f0fe 50%, #f0f4ff 100%)",
            border: "1px solid rgba(37, 99, 235, 0.1)",
            boxShadow: "0 4px 24px rgba(37, 99, 235, 0.06), 0 1px 4px rgba(0,0,0,0.03)",
            minHeight: "380px",
            display: "flex",
            alignItems: "center",
          }}>
            <AnimatePresence mode="wait">
              <FeatureContent key={activeIndex} feature={features[activeIndex]} />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Invisible scroll triggers - compact */}
      <div style={{ position: "relative" }}>
        {features.map((f, i) => (
          <div
            key={f.title}
            ref={(el) => setRef(el, i)}
            style={{ height: "60vh" }}
          />
        ))}
      </div>

      <style jsx global>{`
        .features-tabs::-webkit-scrollbar { display: none; }
        .features-tabs { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 900px) {
          .features-panel-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .features-tabs { justify-content: flex-start !important; padding: 0 12px; }
        }
      `}</style>
    </section>
  );
}
