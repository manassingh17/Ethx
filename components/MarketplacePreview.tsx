"use client";

import { CSSProperties, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const DARK_TOP = "#020a12";
const DARK_MID = "#0c1f35";
const ACCENT_MINT = "#10b981";
const ACCENT_CYAN = "#38bdf8";
const CARD_DARK = "rgba(10, 24, 42, 0.92)";
const CARD_DARK_HOVER = "rgba(14, 32, 56, 0.98)";

const tickerItems = [
  "BLOCKCHAIN",
  "SMART CONTRACTS",
  "WHITE-LABEL",
  "API-FIRST",
  "ENTERPRISE",
  "DATA MARKETPLACE",
  "ZERO-KNOWLEDGE",
  "MULTI-TENANT",
];

const marketplaces = [
  {
    label: "Ethical",
    title: "Ethical Xchange Native",
    subtitle: "Core Infrastructure Marketplace",
    desc: "The canonical implementation — professional, scalable, enterprise-ready.",
    color: "#3b82f6",
    tags: ["Enterprise", "SaaS", "Professional"],
    decor: "diamond" as const,
    icon: "layers" as const,
  },
  {
    label: "UN",
    title: "UN Disaster Recovery",
    subtitle: "Humanitarian Data Exchange",
    desc: "Mission-critical field data coordination for global disaster response.",
    color: "#10b981",
    tags: ["Humanitarian", "NGO", "Operations"],
    decor: "rings" as const,
    icon: "globe" as const,
  },
  {
    label: "AI",
    title: "AI Training Data",
    subtitle: "Industrial AI Marketplace",
    desc: "Dense, efficient, machine-oriented. Industrial-scale dataset commercialization.",
    color: "#f59e0b",
    tags: ["AI/ML", "Datasets", "Industrial"],
    decor: "dots" as const,
    icon: "chip" as const,
  },
  {
    label: "Creator",
    title: "Creator Economy",
    subtitle: "Influencer & Content Marketplace",
    desc: "High-energy, commercially-driven creator monetization ecosystem.",
    color: "#ec4899",
    tags: ["Creator", "Social", "Commercial"],
    decor: "plus" as const,
    icon: "spark" as const,
  },
];

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function CardIcon({ type, color }: { type: (typeof marketplaces)[number]["icon"]; color: string }) {
  const stroke = color;
  const common = { stroke, strokeWidth: 1.8, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (type === "layers") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
        <rect x="4" y="8" width="20" height="14" rx="2" {...common} />
        <path d="M8 8V6a2 2 0 012-2h8a2 2 0 012 2v2" {...common} />
        <path d="M4 14h20" {...common} />
      </svg>
    );
  }
  if (type === "globe") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
        <circle cx="14" cy="14" r="10" {...common} />
        <path d="M4 14h20M14 4a15 15 0 010 20M14 4a15 15 0 000 20" {...common} />
      </svg>
    );
  }
  if (type === "chip") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
        <rect x="7" y="7" width="14" height="14" rx="2" {...common} />
        <path d="M11 4v3M17 4v3M11 21v3M17 21v3M4 11h3M4 17h3M21 11h3M21 17h3" {...common} />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
      <path d="M14 4l2.2 6.8H23l-5.5 4 2.1 6.8L14 17.6 8.4 21.6l2.1-6.8L5 10.8h6.8L14 4z" {...common} />
    </svg>
  );
}

function DiamondDecor({ active, stroke }: { active: boolean; stroke: string }) {
  return (
    <svg viewBox="0 0 88 88" fill="none" style={{ position: "absolute", top: 10, left: 10, width: 64, height: 64, pointerEvents: "none" }} aria-hidden>
      <motion.rect x="22" y="22" width="44" height="44" transform="rotate(45 44 44)" stroke={stroke} strokeWidth="1.4" fill="none"
        animate={{ opacity: active ? 0.7 : 0.35, scale: active ? 1.06 : 1 }} transition={{ duration: 0.35 }} />
      <motion.rect x="30" y="30" width="28" height="28" transform="rotate(45 44 44)" stroke={stroke} strokeWidth="1.1" fill="none"
        animate={{ opacity: active ? 0.55 : 0.25 }} transition={{ duration: 0.35 }} />
    </svg>
  );
}

function RingsDecor({ active, stroke }: { active: boolean; stroke: string }) {
  return (
    <motion.svg viewBox="0 0 100 100" fill="none" style={{ position: "absolute", top: 6, right: 8, width: 72, height: 72, pointerEvents: "none" }} aria-hidden
      animate={{ rotate: active ? 12 : 0 }} transition={{ duration: 0.5 }}>
      <motion.circle cx="50" cy="50" r="36" stroke={stroke} strokeWidth="1.3" strokeDasharray="5 6" animate={{ opacity: active ? 0.65 : 0.3 }} />
      <motion.circle cx="50" cy="50" r="24" stroke={stroke} strokeWidth="1.1" animate={{ opacity: active ? 0.5 : 0.22 }} />
    </motion.svg>
  );
}

function DotGridDecor({ active, fill }: { active: boolean; fill: string }) {
  const dots = [0, 1, 2, 3].flatMap((row) => [0, 1, 2, 3, 4].map((col) => ({ row, col })));
  return (
    <svg viewBox="0 0 90 70" style={{ position: "absolute", bottom: 12, right: 10, width: 76, height: 58, pointerEvents: "none" }} aria-hidden>
      {dots.map(({ row, col }, i) => (
        <motion.circle key={i} cx={8 + col * 17} cy={6 + row * 14} r="2.2" fill={fill}
          animate={{ opacity: active ? 0.5 : 0.2, scale: active ? 1.2 : 1 }} transition={{ delay: (i % 4) * 0.02 }} />
      ))}
    </svg>
  );
}

function PlusDecor({ active, stroke }: { active: boolean; stroke: string }) {
  return (
    <motion.svg viewBox="0 0 96 96" fill="none" style={{ position: "absolute", top: 8, right: 8, width: 56, height: 56, pointerEvents: "none" }} aria-hidden
      animate={{ rotate: active ? 14 : 0, opacity: active ? 0.55 : 0.28 }} transition={{ duration: 0.4 }}>
      <rect x="44" y="16" width="8" height="64" rx="4" fill={stroke} fillOpacity="0.4" />
      <rect x="16" y="44" width="64" height="8" rx="4" fill={stroke} fillOpacity="0.4" />
      <circle cx="48" cy="48" r="22" stroke={stroke} strokeWidth="1.3" strokeDasharray="4 5" strokeOpacity="0.55" />
    </motion.svg>
  );
}

function CardDecor({ type, active, color }: { type: (typeof marketplaces)[number]["decor"]; active: boolean; color: string }) {
  const { r, g, b } = hexToRgb(color);
  const stroke = `rgba(${r}, ${g}, ${b}, 0.75)`;
  const fill = `rgba(${r}, ${g}, ${b}, 0.9)`;
  if (type === "diamond") return <DiamondDecor active={active} stroke={stroke} />;
  if (type === "rings") return <RingsDecor active={active} stroke={stroke} />;
  if (type === "dots") return <DotGridDecor active={active} fill={fill} />;
  return <PlusDecor active={active} stroke={stroke} />;
}

function MarketplaceCard({ item, index }: { item: (typeof marketplaces)[number]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 28 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const glowBg = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(380px circle at ${50 + (x as number) * 38}% ${50 + (y as number) * 38}%, ${item.color}35, transparent 58%)`
  );
  const { r, g, b } = hexToRgb(item.color);

  const handleMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.article
      ref={cardRef}
      className="marketplace-variant-card"
      style={{
        position: "relative",
        padding: "28px 24px",
        borderRadius: 16,
        border: hovered ? `1px solid ${item.color}70` : "1px solid rgba(255, 255, 255, 0.1)",
        background: hovered ? CARD_DARK_HOVER : CARD_DARK,
        boxShadow: hovered
          ? `0 24px 56px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(${r},${g},${b},0.15), 0 0 40px rgba(${r},${g},${b},0.12)`
          : "0 16px 40px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        overflow: "hidden",
        cursor: "default",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 48, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      whileHover={{ y: -8 }}
    >
      <motion.div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", background: glowBg }}
        animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.25 }} />

      <motion.div aria-hidden style={{
        position: "absolute", top: -8, right: -8, width: 80, height: 80,
        backgroundImage: "url('/images/decor-dot-grid.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat",
        filter: "brightness(2)",
      }} animate={{ opacity: hovered ? 0.35 : 0.18 }} />

      <CardDecor type={item.decor} active={hovered} color={item.color} />

      <motion.span style={{
        position: "absolute", top: 14, right: 14, padding: "4px 10px", borderRadius: 9999,
        fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px",
        color: "rgba(203, 213, 225, 0.9)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", zIndex: 2,
      }} animate={{ scale: hovered ? 1.04 : 1 }}>Coming Soon</motion.span>

      <motion.div style={{
        width: "100%", height: 88, borderRadius: 12,
        background: `linear-gradient(145deg, rgba(${r},${g},${b},0.28) 0%, rgba(${r},${g},${b},0.08) 55%, rgba(0,0,0,0.2) 100%)`,
        border: `1px solid rgba(${r},${g},${b},0.35)`,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20,
        position: "relative", zIndex: 1,
      }} animate={{ borderColor: hovered ? `rgba(${r},${g},${b},0.5)` : `rgba(${r},${g},${b},0.28)` }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: `rgba(${r},${g},${b},0.12)`,
          border: `1px solid rgba(${r},${g},${b},0.25)`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <CardIcon type={item.icon} color={item.color} />
        </div>
        <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 800, color: item.color }}>{item.label}</span>
      </motion.div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "#f8fafc", marginBottom: 4 }}>{item.title}</h3>
        <p style={{ fontSize: 12, fontWeight: 600, color: item.color, marginBottom: 10 }}>{item.subtitle}</p>
        <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(203, 213, 225, 0.78)", marginBottom: 16 }}>{item.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {item.tags.map((t, ti) => (
            <motion.span key={t} style={{
              padding: "4px 11px", borderRadius: 9999, fontSize: 11, fontWeight: 600,
              color: hovered ? item.color : "rgba(203, 213, 225, 0.75)",
              border: `1px solid rgba(${r},${g},${b},${hovered ? 0.45 : 0.25})`,
              background: hovered ? `rgba(${r},${g},${b},0.15)` : "rgba(255,255,255,0.05)",
            }} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 + ti * 0.05 }}>
              {t}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.svg viewBox="0 0 400 48" preserveAspectRatio="none" aria-hidden style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 44, width: "100%", pointerEvents: "none" }}
        animate={{ opacity: hovered ? 1 : 0.5 }} transition={{ duration: 0.35 }}>
        <path d="M0 30 Q100 14 200 28 T400 24 V48 H0 Z" fill={`rgba(${r},${g},${b},0.18)`} />
      </motion.svg>
    </motion.article>
  );
}

function DarkSectionDecor() {
  const base: CSSProperties = {
    position: "absolute", backgroundRepeat: "no-repeat", backgroundSize: "contain", pointerEvents: "none",
  };
  return (
    <>
      <div style={{ ...base, top: "18%", left: "3%", width: 160, height: 120, backgroundImage: "url('/images/decor-dot-grid.svg')", opacity: 0.35, filter: "brightness(2)" }} />
      <div style={{ ...base, top: "12%", right: "5%", width: 140, height: 105, backgroundImage: "url('/images/decor-dot-grid.svg')", opacity: 0.28, filter: "brightness(2)" }} />
      <div style={{ ...base, bottom: "28%", left: "8%", width: 100, height: 100, backgroundImage: "url('/images/decor-plus.svg')", opacity: 0.4, filter: "brightness(1.8)" }} />
      <div style={{ ...base, bottom: "20%", right: "6%", width: 200, height: 200, backgroundImage: "url('/images/decor-rings.svg')", opacity: 0.35 }} />
      <div style={{ position: "absolute", top: "30%", left: "40%", width: 320, height: 320, borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT_CYAN}14 0%, transparent 68%)`, filter: "blur(50px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "10%", right: "25%", width: 240, height: 240, borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT_MINT}12 0%, transparent 70%)`, filter: "blur(44px)", pointerEvents: "none" }} />
      {/* Large faint grid lines */}
      <svg aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}>
        <defs>
          <pattern id="mp-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="#ffffff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mp-grid)" />
      </svg>
    </>
  );
}

export default function MarketplacePreview() {
  const tickerLine = tickerItems.join(" • ");

  return (
    <section
      id="marketplace"
      className="marketplace-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${DARK_TOP} 0%, ${DARK_MID} 42%, #0a1e34 100%)`,
      }}
    >
      <div style={{ position: "relative", padding: "0 32px 120px", overflow: "hidden" }}>
        <DarkSectionDecor />

        <div className="marketplace-ticker" style={{
          background: ACCENT_MINT,
          color: DARK_TOP,
          padding: "10px 0",
          overflow: "hidden",
          position: "relative",
          zIndex: 2,
        }}>
          <div className="marketplace-ticker-track">
            <span>{tickerLine} • {tickerLine}</span>
          </div>
        </div>

        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <motion.header
            style={{ textAlign: "center", maxWidth: 720, margin: "0 auto", padding: "72px 0 56px" }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span style={{
              display: "inline-block", padding: "6px 16px", borderRadius: 9999,
              fontSize: 12, fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase",
              color: ACCENT_CYAN, background: "rgba(56, 189, 248, 0.12)", border: "1px solid rgba(56, 189, 248, 0.25)",
              marginBottom: 24,
            }}>
              Marketplace Variants
            </span>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: 20,
              color: "#ffffff",
            }}>
              One Infrastructure.{" "}
              <span style={{ color: ACCENT_MINT }}>Infinite Possibilities.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(203, 213, 225, 0.88)" }}>
              The same platform powers radically different marketplace experiences. Each feels like a different company.
            </p>
            <div style={{ width: 48, height: 3, background: ACCENT_MINT, margin: "28px auto 0", borderRadius: 2 }} />
          </motion.header>

          {/* Subtle divider wave — same dark tone */}
          <div aria-hidden style={{ margin: "0 0 40px", opacity: 0.5 }}>
            <svg viewBox="0 0 1446 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 48 }}>
              <path d="M0 40 L200 20 L500 50 L800 15 L1200 45 L1446 30 V80 H0 Z" fill="none" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
            </svg>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="marketplace-grid">
            {marketplaces.map((m, i) => (
              <MarketplaceCard key={m.title} item={m} index={i} />
            ))}
          </div>

          <motion.p
            style={{
              textAlign: "center", marginTop: 56, fontSize: 16, lineHeight: 1.6,
              color: "rgba(203, 213, 225, 0.8)", maxWidth: 560, marginLeft: "auto", marginRight: "auto",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            You are not buying our marketplace. You are deploying{" "}
            <strong style={{ color: ACCENT_MINT }}>your marketplace</strong> on our infrastructure.
          </motion.p>
        </div>
      </div>

      <style jsx global>{`
        .marketplace-ticker-track {
          display: flex;
          width: max-content;
          animation: marketplace-ticker 28s linear infinite;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .marketplace-ticker-track span {
          padding-right: 3rem;
        }
        @keyframes marketplace-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 1024px) {
          .marketplace-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .marketplace-grid { grid-template-columns: 1fr !important; max-width: 400px !important; margin: 0 auto !important; }
        }
        .marketplace-variant-card { will-change: transform; }
      `}</style>
    </section>
  );
}
