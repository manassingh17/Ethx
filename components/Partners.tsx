"use client";

import { CSSProperties } from "react";
import { motion } from "framer-motion";

const partners = [
  "DataVault Corp",
  "NeuralNet Systems",
  "CloudBridge AI",
  "QuantumData",
  "TrustChain Labs",
  "SynapseIO",
  "OmniData Inc",
  "FieldOps Global",
  "GridScale",
  "EcoSync Networks",
];

const BG_TOP = "#dbeafe";
const BG_BOTTOM = "#eff6ff";

export default function Partners() {
  const section: CSSProperties = {
    position: "relative",
    padding: "72px 32px 80px",
    overflow: "hidden",
    background: `linear-gradient(180deg, ${BG_TOP} 0%, ${BG_BOTTOM} 55%, #f8fafc 100%)`,
    borderTop: "1px solid rgba(37, 99, 235, 0.15)",
  };

  const fade = (dir: "left" | "right"): CSSProperties => ({
    position: "absolute",
    top: 0,
    bottom: 0,
    [dir]: 0,
    width: 120,
    background:
      dir === "left"
        ? `linear-gradient(to right, ${BG_TOP}, transparent)`
        : `linear-gradient(to left, ${BG_BOTTOM}, transparent)`,
    zIndex: 2,
    pointerEvents: "none",
  });

  const track: CSSProperties = {
    display: "flex",
    animation: "partners-scroll 38s linear infinite",
    width: "fit-content",
  };

  const item: CSSProperties = {
    flexShrink: 0,
    padding: "14px 32px",
    margin: "0 12px",
    borderRadius: 12,
    border: "1px solid rgba(37, 99, 235, 0.22)",
    background: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 4px 20px rgba(37, 99, 235, 0.1), 0 1px 3px rgba(15, 23, 42, 0.06)",
    fontFamily: "var(--font-heading)",
    fontSize: 14,
    fontWeight: 700,
    color: "#1e3a5f",
    whiteSpace: "nowrap",
  };

  return (
    <section style={section}>
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 16,
          left: "4%",
          width: 120,
          height: 90,
          backgroundImage: "url('/images/decor-dot-grid.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.28,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 20,
          right: "5%",
          width: 100,
          height: 80,
          backgroundImage: "url('/images/decor-dot-grid.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.22,
          pointerEvents: "none",
        }}
      />

      <motion.div
        style={{ textAlign: "center", marginBottom: 40, position: "relative", zIndex: 1 }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: 9999,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#1d4ed8",
            background: "rgba(255, 255, 255, 0.7)",
            border: "1px solid rgba(37, 99, 235, 0.25)",
            marginBottom: 14,
          }}
        >
          Our ecosystem
        </span>
        <p
          style={{
            fontSize: "clamp(18px, 2.5vw, 22px)",
            fontWeight: 800,
            color: "#0f172a",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontFamily: "var(--font-heading)",
          }}
        >
          Trusted by forward-thinking organizations
        </p>
      </motion.div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={fade("left")} />
        <div style={fade("right")} />
        <div style={track} className="partners-track">
          {[...partners, ...partners].map((p, i) => (
            <div key={`${p}-${i}`} style={item} className="partners-logo-pill">
              {p}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes partners-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .partners-logo-pill {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .partners-logo-pill:hover {
          transform: translateY(-3px);
          border-color: rgba(37, 99, 235, 0.45) !important;
          box-shadow: 0 10px 28px rgba(37, 99, 235, 0.18) !important;
          color: #1d4ed8 !important;
        }
        .partners-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
