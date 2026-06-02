"use client";

import { CSSProperties } from "react";
import BrandLogo from "@/components/BrandLogo";

const linkGroups: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "Platform",
    items: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Security", href: "#features" },
      { label: "Pricing", href: "#contact" },
    ],
  },
  {
    title: "Marketplace",
    items: [
      { label: "Native", href: "#marketplace" },
      { label: "Humanitarian", href: "#marketplace" },
      { label: "AI Training", href: "#marketplace" },
      { label: "Creator Economy", href: "#marketplace" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#features" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Status", href: "#" },
      { label: "Support", href: "#contact" },
    ],
  },
];

const DARK_TOP = "#0c1f35";
const DARK_BOTTOM = "#040d18";
const ACCENT_CYAN = "#38bdf8";
const ACCENT_MINT = "#34d399";

function FooterDecor() {
  const base: CSSProperties = {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    pointerEvents: "none",
  };
  return (
    <>
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, transparent, ${ACCENT_CYAN}, ${ACCENT_MINT}, transparent)`,
          opacity: 0.7,
        }}
      />
      <div
        style={{
          ...base,
          top: "15%",
          right: "4%",
          width: 150,
          height: 115,
          backgroundImage: "url('/images/decor-dot-grid.svg')",
          opacity: 0.2,
          filter: "brightness(2)",
        }}
      />
      <div
        style={{
          ...base,
          bottom: "20%",
          left: "3%",
          width: 120,
          height: 120,
          backgroundImage: "url('/images/decor-rings.svg')",
          opacity: 0.15,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "10%",
          width: 300,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <svg aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }}>
        <defs>
          <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#ffffff" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>
    </>
  );
}

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${DARK_TOP} 0%, ${DARK_BOTTOM} 100%)`,
        padding: "72px 32px 36px",
        color: "rgba(226, 232, 240, 0.88)",
      }}
    >
      <FooterDecor />

      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <BrandLogo size={40} textColor="#f8fafc" />
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(203, 213, 225, 0.75)",
                maxWidth: 280,
              }}
            >
              Infrastructure for the world&apos;s data economies. Deploy your own marketplace on
              enterprise-grade blockchain infrastructure.
            </p>
            <a
              href="#contact"
              className="footer-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 4,
                padding: "10px 20px",
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                boxShadow: "0 4px 20px rgba(37, 99, 235, 0.35)",
                width: "fit-content",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              Get started
              <span aria-hidden>&rarr;</span>
            </a>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: ACCENT_CYAN,
                  marginBottom: 18,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {group.title}
              </h4>
              {group.items.map((item) => (
                <a key={item.label} href={item.href} className="footer-link">
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          className="footer-bottom"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(148, 163, 184, 0.85)" }}>
            &copy; {new Date().getFullYear()} Ethical Xchange. All rights reserved.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(148, 163, 184, 0.85)" }}>
            <span
              className="footer-pulse-dot"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: ACCENT_MINT,
                boxShadow: `0 0 12px ${ACCENT_MINT}`,
              }}
            />
            Powered by Ethical Xchange Infrastructure
          </div>

          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" className="footer-link footer-link--inline">
              Privacy
            </a>
            <a href="#" className="footer-link footer-link--inline">
              Terms
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer-link {
          display: block;
          font-size: 14px;
          color: rgba(203, 213, 225, 0.72);
          margin-bottom: 11px;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .footer-link:hover {
          color: #ffffff;
          transform: translateX(3px);
        }
        .footer-link--inline {
          display: inline;
          margin-bottom: 0;
        }
        .footer-link--inline:hover {
          transform: none;
          color: ${ACCENT_CYAN};
        }
        .footer-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37, 99, 235, 0.45) !important;
        }
        @keyframes footer-pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(0.92);
          }
        }
        .footer-pulse-dot {
          animation: footer-pulse 2s ease-in-out infinite;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
