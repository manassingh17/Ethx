"use client";

import { CSSProperties, useRef, useState } from "react";
import { motion } from "framer-motion";

const points = [
  {
    icon: "🏗️",
    title: "Infrastructure, Not an App",
    desc: "A flexible platform powering radically different data ecosystems across industries.",
  },
  {
    icon: "🔗",
    title: "Blockchain-Secured",
    desc: "Smart contracts and wallets for every transaction. Trustless, transparent, and auditable.",
  },
  {
    icon: "🎨",
    title: "White-Label Ready",
    desc: "Your brand, your domain, your rules. We disappear; your marketplace shines.",
  },
  {
    icon: "⚡",
    title: "Deploy in Days",
    desc: "From concept to live marketplace in record time. No 18-month dev cycles.",
  },
];

function GlowCard({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const card: CSSProperties = {
    position: "relative",
    padding: "28px 24px",
    borderRadius: "14px",
    border: isHovered ? "1px solid rgba(37, 99, 235, 0.3)" : "1px solid rgba(226, 232, 240, 0.8)",
    background: "#ffffff",
    transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
    overflow: "hidden",
    cursor: "pointer",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    boxShadow: isHovered
      ? "0 8px 30px rgba(37, 99, 235, 0.12), 0 2px 8px rgba(37, 99, 235, 0.06)"
      : "0 1px 4px rgba(0, 0, 0, 0.04)",
  };

  const glowOverlay: CSSProperties = {
    position: "absolute",
    inset: 0,
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s",
    background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.07), transparent 60%)`,
    pointerEvents: "none",
    borderRadius: "14px",
  };

  return (
    <motion.div
      ref={cardRef}
      style={card}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div style={glowOverlay} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "26px", marginBottom: "14px" }}>{icon}</div>
        <h4 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "17px",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "8px",
          lineHeight: 1.3,
        }}>{title}</h4>
        <p style={{
          fontSize: "14px",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
        }}>{desc}</p>
      </div>
    </motion.div>
  );
}

export default function WhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={sectionRef}
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #eef4ff 0%, #f6f9ff 40%, #f8faff 70%, #ffffff 100%)",
        minHeight: "180vh",
      }}
    >
      {/* Subtle decorative orbs */}
      <div style={{ position: "absolute", right: "5%", top: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(37, 99, 235, 0.04)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "8%", bottom: "25%", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(99, 102, 241, 0.03)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "0 32px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        minHeight: "180vh",
      }} className="why-choose-grid">

        {/* Left column - sticky, instantly visible */}
        <div style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "start",
        }}>
          <div>
            <span style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: "100px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              color: "var(--accent)",
              background: "var(--accent-light)",
              marginBottom: "24px",
              textTransform: "uppercase",
            }}>
              Why Ethical Xchange
            </span>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "var(--text-primary)",
              marginBottom: "20px",
            }}>
              The platform that adapts to your industry, not the other way around.
            </h2>
            <p style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              marginBottom: "32px",
              maxWidth: "440px",
            }}>
              Ethical Xchange is not a single marketplace application. It&apos;s a flexible infrastructure
              platform capable of powering radically different data ecosystems, industries, and
              monetization structures using the same underlying architecture.
            </p>
            <a href="#features" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "15px",
              fontWeight: 600,
              color: "var(--accent)",
              transition: "gap 0.2s",
              cursor: "pointer",
            }}
              onMouseEnter={e => (e.currentTarget.style.gap = "10px")}
              onMouseLeave={e => (e.currentTarget.style.gap = "6px")}
            >
              Why choose Ethical Xchange
              <span style={{ fontSize: "18px" }}>&rsaquo;</span>
            </a>
          </div>
        </div>

        {/* Right column - scrolls naturally */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          paddingTop: "30vh",
          paddingBottom: "30vh",
        }}>
          {points.map((p, i) => (
            <GlowCard key={p.title} icon={p.icon} title={p.title} desc={p.desc} index={i} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .why-choose-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            min-height: auto !important;
          }
          .why-choose-grid > div:first-child {
            position: relative !important;
            height: auto !important;
            padding: 80px 0 40px !important;
          }
          .why-choose-grid > div:last-child {
            padding-top: 0 !important;
            padding-bottom: 60px !important;
          }
        }
      `}</style>
    </div>
  );
}
