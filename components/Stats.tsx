"use client";

import { useEffect, useState, useRef, CSSProperties } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA",
    desc: "Enterprise-ready infrastructure",
    icon: "uptime" as const,
  },
  {
    value: 50,
    suffix: "ms",
    label: "Transaction Speed",
    desc: "Blockchain-secured transactions",
    icon: "speed" as const,
  },
  {
    value: 12,
    suffix: "+",
    label: "Industries Served",
    desc: "Multi-industry adaptability",
    icon: "industries" as const,
  },
  {
    value: 100,
    suffix: "%",
    label: "White-Label Ready",
    desc: "Full brand customization",
    icon: "label" as const,
  },
];

function StatIcon({ type }: { type: (typeof stats)[number]["icon"] }) {
  const stroke = "#3b82f6";
  const common = { stroke, strokeWidth: 1.8, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (type === "uptime") {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden>
        <path d="M16 4L6 8v8c0 6 4.5 11.5 10 13 5.5-1.5 10-7 10-13V8l-10-4z" {...common} />
        <path d="M12 16l3 3 7-7" {...common} />
      </svg>
    );
  }
  if (type === "speed") {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden>
        <path d="M18 4L6 18h10l-2 10 14-16H18l2-8z" {...common} fill="rgba(59,130,246,0.15)" />
      </svg>
    );
  }
  if (type === "industries") {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden>
        <rect x="5" y="5" width="10" height="10" rx="2" {...common} />
        <rect x="17" y="5" width="10" height="10" rx="2" {...common} />
        <rect x="5" y="17" width="10" height="10" rx="2" {...common} />
        <rect x="17" y="17" width="10" height="10" rx="2" {...common} />
      </svg>
    );
  }
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden>
      <path d="M6 24l4-12h12l4 12" {...common} />
      <path d="M8 24h16" {...common} />
      <circle cx="16" cy="10" r="4" {...common} />
    </svg>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const dur = 1800;
          const inc = value / (dur / 16);
          const timer = setInterval(() => {
            start += inc;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start * 10) / 10);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  const formatted = value % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <div
      ref={ref}
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: "clamp(32px, 4vw, 44px)",
        fontWeight: 800,
        background: "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {formatted}
      {suffix}
    </div>
  );
}

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="stats-card"
      style={{
        position: "relative",
        textAlign: "center",
        padding: "36px 20px 32px",
        borderRadius: 16,
        background: hovered
          ? "linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(239,246,255,0.95) 100%)"
          : "rgba(255, 255, 255, 0.92)",
        border: hovered ? "1px solid rgba(37, 99, 235, 0.35)" : "1px solid rgba(37, 99, 235, 0.12)",
        boxShadow: hovered
          ? "0 20px 48px rgba(37, 99, 235, 0.14), 0 4px 16px rgba(37, 99, 235, 0.08)"
          : "0 8px 28px rgba(37, 99, 235, 0.06)",
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          top: -10,
          right: -10,
          width: 72,
          height: 72,
          backgroundImage: "url('/images/decor-dot-grid.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
        animate={{ opacity: hovered ? 0.28 : 0.12 }}
      />

      <motion.svg
        viewBox="0 0 100 100"
        aria-hidden
        style={{ position: "absolute", bottom: -20, left: -20, width: 90, height: 90, pointerEvents: "none" }}
        animate={{ opacity: hovered ? 0.35 : 0.15, rotate: hovered ? 8 : 0 }}
      >
        <circle cx="50" cy="50" r="40" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 5" fill="none" />
        <circle cx="50" cy="50" r="28" stroke="#60a5fa" strokeWidth="0.8" fill="none" opacity="0.6" />
      </motion.svg>

      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          margin: "0 auto 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, rgba(37,99,235,0.14) 0%, rgba(56,189,248,0.08) 100%)",
          border: "1px solid rgba(37, 99, 235, 0.2)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <StatIcon type={stat.icon} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Counter value={stat.value} suffix={stat.suffix} />
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: 15,
            fontWeight: 600,
            color: "var(--text-primary)",
            marginTop: 12,
            marginBottom: 6,
          }}
        >
          {stat.label}
        </div>
        <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{stat.desc}</div>
      </div>

      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent, #3b82f6, #38bdf8, transparent)",
          transformOrigin: "center",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  );
}

function SectionDecor() {
  const base: CSSProperties = {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    pointerEvents: "none",
  };
  return (
    <>
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 100, overflow: "hidden" }}>
        <svg viewBox="0 0 1446 199" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
          <path d="M -6 68.5 V 0 H 1445 V 91 L 1289 170 L -6 68.5 Z" fill="rgba(37, 99, 235, 0.08)" />
        </svg>
      </div>
      <div style={{ ...base, top: "12%", left: "3%", width: 150, height: 115, backgroundImage: "url('/images/decor-dot-grid.svg')", opacity: 0.22 }} />
      <div style={{ ...base, top: "18%", right: "4%", width: 130, height: 100, backgroundImage: "url('/images/decor-dot-grid.svg')", opacity: 0.18 }} />
      <div style={{ ...base, bottom: "15%", left: "5%", width: 100, height: 100, backgroundImage: "url('/images/decor-plus.svg')", opacity: 0.2, transform: "rotate(-12deg)" }} />
      <div style={{ ...base, bottom: "12%", right: "6%", width: 170, height: 170, backgroundImage: "url('/images/decor-rings.svg')", opacity: 0.16 }} />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 400,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
    </>
  );
}

export default function Stats() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 32px",
        background: "linear-gradient(180deg, #e8f0fe 0%, #edf4ff 35%, #f0f7ff 70%, #eef4ff 100%)",
      }}
    >
      <SectionDecor />

      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <motion.div
          style={{ textAlign: "center", marginBottom: 48 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 9999,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              color: "var(--accent)",
              background: "rgba(37, 99, 235, 0.1)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              marginBottom: 16,
            }}
          >
            Platform metrics
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 800,
              color: "var(--text-primary)",
            }}
          >
            Built for scale. Proven in production.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="stats-grid">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            max-width: 360px !important;
            margin: 0 auto !important;
          }
        }
        .stats-card {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
