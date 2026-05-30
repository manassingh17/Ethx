"use client";

import { CSSProperties } from "react";

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

export default function Partners() {
  const section: CSSProperties = {
    padding: "60px 32px",
    background: "var(--bg-light)",
    overflow: "hidden",
  };

  const labelStyle: CSSProperties = {
    textAlign: "center",
    fontSize: "13px",
    fontWeight: 500,
    color: "var(--text-muted)",
    marginBottom: "32px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  };

  const trackWrap: CSSProperties = {
    position: "relative",
    overflow: "hidden",
  };

  const fade = (dir: "left" | "right"): CSSProperties => ({
    position: "absolute",
    top: 0,
    bottom: 0,
    [dir]: 0,
    width: "100px",
    background: dir === "left"
      ? "linear-gradient(to right, var(--bg-light), transparent)"
      : "linear-gradient(to left, var(--bg-light), transparent)",
    zIndex: 2,
    pointerEvents: "none",
  });

  const track: CSSProperties = {
    display: "flex",
    animation: "scroll-left 40s linear infinite",
    width: "fit-content",
  };

  const item: CSSProperties = {
    flexShrink: 0,
    padding: "12px 28px",
    margin: "0 10px",
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--border)",
    background: "var(--bg-white)",
    fontFamily: "var(--font-heading)",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--text-muted)",
    whiteSpace: "nowrap",
  };

  return (
    <section style={section}>
      <p style={labelStyle}>Trusted by Forward-Thinking Organizations</p>
      <div style={trackWrap}>
        <div style={fade("left")} />
        <div style={fade("right")} />
        <div style={track}>
          {[...partners, ...partners].map((p, i) => (
            <div key={`${p}-${i}`} style={item}>{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
