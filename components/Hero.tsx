"use client";

import { CSSProperties } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  const section: CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "120px 32px 80px",
    background: "linear-gradient(170deg, #0a1628 0%, #0f2042 35%, #132d5e 60%, #1a3a6b 80%, #0d1f3d 100%)",
  };

  const overlay: CSSProperties = {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at 50% 40%, rgba(37, 99, 235, 0.08) 0%, transparent 60%)",
    zIndex: 2,
    pointerEvents: "none",
  };

  const content: CSSProperties = {
    position: "relative",
    zIndex: 10,
    maxWidth: "740px",
    textAlign: "center",
    margin: "0 auto",
  };

  const badge: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 18px",
    borderRadius: "100px",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    color: "#ffffff",
    background: "rgba(59, 130, 246, 0.12)",
    border: "1px solid rgba(59, 130, 246, 0.3)",
    marginBottom: "32px",
    textTransform: "uppercase",
  };

  const heading: CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "clamp(38px, 5.5vw, 68px)",
    fontWeight: 800,
    lineHeight: 1.08,
    color: "#ffffff",
    marginBottom: "24px",
    letterSpacing: "-1px",
  };

  const gradientSpan: CSSProperties = {
    color: "#ffffff",
    textShadow: "0 0 40px rgba(96, 165, 250, 0.6), 0 0 80px rgba(96, 165, 250, 0.3)",
    display: "block",
    marginBottom: "8px",
  };

  const sub: CSSProperties = {
    fontSize: "17px",
    lineHeight: 1.75,
    color: "rgba(203, 213, 225, 0.9)",
    maxWidth: "520px",
    margin: "0 auto 44px",
  };

  const buttons: CSSProperties = {
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const primary: CSSProperties = {
    padding: "15px 34px",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: 600,
    color: "#fff",
    background: "linear-gradient(135deg, #2563eb, #4f46e5)",
    transition: "all 0.25s",
    boxShadow: "0 4px 20px rgba(37, 99, 235, 0.4)",
  };

  const secondary: CSSProperties = {
    padding: "15px 34px",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: 600,
    color: "#e2e8f0",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(148, 163, 184, 0.25)",
    transition: "all 0.25s",
    backdropFilter: "blur(4px)",
  };

  return (
    <section style={section}>
      <div style={overlay} />
      <HeroScene />

      <div style={content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span style={badge}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", animation: "pulse 2s ease-in-out infinite" }} />
            Blockchain-Secured Infrastructure
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={heading}
        >
          <span style={gradientSpan}>Infrastructure</span>
          <span>for the World&apos;s Data Economies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={sub}
        >
          Not a marketplace. The platform beneath every marketplace.
          Deploy your own data ecosystem on enterprise-grade, trustless infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={buttons}
        >
          <a href="#features" style={primary}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(37, 99, 235, 0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 99, 235, 0.4)"; }}
          >Explore the Platform</a>
          <a href="#how-it-works" style={secondary}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.25)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
          >Watch Demo</a>
        </motion.div>
      </div>

      {/* Top fade gradient - removed, not needed */}

      {/* Bottom fade gradient - barely visible blue-tint */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "200px",
        background: "linear-gradient(to bottom, transparent 0%, rgba(180, 210, 255, 0.04) 40%, rgba(200, 225, 255, 0.1) 70%, rgba(215, 233, 255, 0.2) 90%, rgba(225, 238, 255, 0.3) 100%)",
        zIndex: 5,
        pointerEvents: "none",
      }} />
    </section>
  );
}
