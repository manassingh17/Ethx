"use client";

import { CSSProperties, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Deploy Your Marketplace",
    desc: "Configure your branding, define participant roles, set up workflows, and customize your marketplace structure.",
    details: ["Custom branding & domain", "Role-based architecture", "Workflow configuration", "Data product schemas"],
    decor: "diamond" as const,
  },
  {
    number: "02",
    title: "Connect Your Ecosystem",
    desc: "Integrate data sources, onboard participants, connect APIs, and establish governance rules.",
    details: ["API integrations", "Participant onboarding", "Data source connections", "Governance frameworks"],
    decor: "rings" as const,
  },
  {
    number: "03",
    title: "Go Live & Scale",
    desc: "Launch with smart contract-powered transactions, real-time analytics, and automated monetization.",
    details: ["Smart contract transactions", "Real-time analytics", "Automated billing", "Infinite scalability"],
    decor: "dots" as const,
  },
];

function DiamondDecor({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 88 88"
      fill="none"
      style={{ position: "absolute", top: 12, left: 12, width: 72, height: 72, pointerEvents: "none" }}
      aria-hidden
    >
      <motion.rect
        x="22" y="22" width="44" height="44"
        transform="rotate(45 44 44)"
        stroke="#93C5FD"
        strokeWidth="1.2"
        fill="none"
        initial={{ opacity: 0.25, scale: 0.9 }}
        animate={{ opacity: active ? 0.55 : 0.3, scale: active ? 1.05 : 1 }}
        transition={{ duration: 0.4 }}
      />
      <motion.rect
        x="30" y="30" width="28" height="28"
        transform="rotate(45 44 44)"
        stroke="#60A5FA"
        strokeWidth="1"
        fill="none"
        animate={{ opacity: active ? 0.45 : 0.22, rotate: active ? 6 : 0 }}
        style={{ transformOrigin: "44px 44px" }}
        transition={{ duration: 0.5 }}
      />
      <motion.rect
        x="36" y="36" width="16" height="16"
        transform="rotate(45 44 44)"
        stroke="#2563EB"
        strokeWidth="1"
        fill="rgba(37, 99, 235, 0.06)"
        animate={{ opacity: active ? 0.5 : 0.15 }}
        transition={{ duration: 0.4 }}
      />
    </svg>
  );
}

function RingsDecor({ active }: { active: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      style={{ position: "absolute", top: 8, right: 10, width: 80, height: 80, pointerEvents: "none" }}
      aria-hidden
      animate={{ rotate: active ? 12 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.circle
        cx="50" cy="50" r="38"
        stroke="#93C5FD"
        strokeWidth="1.2"
        strokeDasharray="5 6"
        animate={{ opacity: active ? 0.5 : 0.28, scale: active ? 1.08 : 1 }}
        style={{ transformOrigin: "50px 50px" }}
      />
      <motion.circle
        cx="50" cy="50" r="26"
        stroke="#60A5FA"
        strokeWidth="1"
        animate={{ opacity: active ? 0.4 : 0.2 }}
      />
      <motion.path
        d="M14 52C22 34 34 22 52 14"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ pathLength: active ? 1 : 0.6, opacity: active ? 0.55 : 0.25 }}
        transition={{ duration: 0.5 }}
      />
    </motion.svg>
  );
}

function DotGridDecor({ active }: { active: boolean }) {
  const dots = [0, 1, 2, 3, 4].flatMap((row) =>
    [0, 1, 2, 3, 4].map((col) => ({ row, col }))
  );
  return (
    <svg
      viewBox="0 0 90 70"
      style={{ position: "absolute", bottom: 16, right: 14, width: 90, height: 70, pointerEvents: "none" }}
      aria-hidden
    >
      {dots.map(({ row, col }, i) => (
        <motion.circle
          key={i}
          cx={10 + col * 18}
          cy={8 + row * 14}
          r="2.5"
          fill="#3B82F6"
          initial={{ opacity: 0.12 }}
          animate={{
            opacity: active ? 0.35 + (i % 3) * 0.08 : 0.14 + (i % 2) * 0.06,
            scale: active ? 1.2 : 1,
          }}
          transition={{ duration: 0.35, delay: (i % 5) * 0.03 }}
        />
      ))}
    </svg>
  );
}

function CardSvgDecor({ type, active }: { type: "diamond" | "rings" | "dots"; active: boolean }) {
  if (type === "diamond") return <DiamondDecor active={active} />;
  if (type === "rings") return <RingsDecor active={active} />;
  return <DotGridDecor active={active} />;
}

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 280, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 280, damping: 28 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const glowBackground = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(420px circle at ${50 + (x as number) * 40}% ${50 + (y as number) * 40}%, rgba(37, 99, 235, 0.12), transparent 58%)`
  );

  const handleMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const card: CSSProperties = {
    position: "relative",
    padding: "36px 28px",
    borderRadius: "var(--radius)",
    background: "rgba(255, 255, 255, 0.95)",
    border: hovered ? "1px solid rgba(37, 99, 235, 0.28)" : "1px solid rgba(37, 99, 235, 0.1)",
    boxShadow: hovered
      ? "0 20px 48px rgba(37, 99, 235, 0.14), 0 4px 12px rgba(37, 99, 235, 0.08)"
      : "0 8px 32px rgba(37, 99, 235, 0.06), var(--shadow-sm)",
    overflow: "hidden",
    cursor: "default",
    transformStyle: "preserve-3d",
  };

  return (
    <motion.div
      ref={cardRef}
      className="how-step-card"
      style={{ ...card, rotateX, rotateY, perspective: 900 }}
      initial={{ opacity: 0, y: 56, scale: 0.88, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      whileHover={{ y: -6 }}
    >
      {/* Cursor glow */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: glowBackground,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />

      {/* Secondary static corner assets */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          top: -8,
          right: -8,
          width: 88,
          height: 88,
          backgroundImage: "url('/images/decor-dot-grid.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
        animate={{ opacity: hovered ? 0.35 : 0.18, x: hovered ? 4 : 0, y: hovered ? -4 : 0 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -12,
          left: -8,
          width: 72,
          height: 72,
          backgroundImage: "url('/images/decor-plus.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
        animate={{ opacity: hovered ? 0.32 : 0.14, rotate: hovered ? 18 : 0 }}
        transition={{ duration: 0.45 }}
      />

      <CardSvgDecor type={step.decor} active={hovered} />

      {/* Animated wave clip inside card */}
      <motion.svg
        viewBox="0 0 400 80"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 56,
          width: "100%",
          pointerEvents: "none",
        }}
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 0.9 : 0.35 }}
        transition={{ duration: 0.4 }}
      >
        <motion.path
          d="M0 48 Q100 20 200 44 T400 36 V80 H0 Z"
          fill="rgba(37, 99, 235, 0.06)"
          animate={{ d: hovered
            ? "M0 44 Q100 28 200 40 T400 32 V80 H0 Z"
            : "M0 48 Q100 20 200 44 T400 36 V80 H0 Z"
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.svg>

      <div style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(44px, 5vw, 56px)",
            fontWeight: 800,
            color: "var(--accent)",
            marginBottom: "16px",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            display: "inline-block",
          }}
          animate={{ scale: hovered ? 1.04 : 1, x: hovered ? 4 : 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        >
          {step.number}
        </motion.div>

        <h3 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "20px",
          fontWeight: 600,
          marginBottom: "12px",
        }}>
          {step.title}
        </h3>
        <p style={{
          fontSize: "14px",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          marginBottom: "20px",
        }}>
          {step.desc}
        </p>

        {step.details.map((d, di) => (
          <motion.div
            key={d}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "13px",
              color: "var(--text-secondary)",
              marginBottom: "8px",
            }}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.14 + 0.35 + di * 0.06, duration: 0.4 }}
          >
            <motion.span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                flexShrink: 0,
              }}
              animate={{ scale: hovered ? [1, 1.35, 1] : 1 }}
              transition={{ delay: di * 0.05, duration: 0.35 }}
            />
            {d}
          </motion.div>
        ))}

        <motion.a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginTop: 12,
            fontSize: 14,
            fontWeight: 600,
            color: "var(--accent)",
          }}
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.25 }}
        >
          Know more
          <span style={{ fontSize: 16 }}>&rsaquo;</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

function SectionDecor() {
  const base: CSSProperties = {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    pointerEvents: "none",
    zIndex: 0,
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
          height: "140px",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <svg viewBox="0 0 1446 199" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
          <path d="M -6 68.5 V 0 H 1445 V 91 L 1289 170 L -6 68.5 Z" fill="rgba(37, 99, 235, 0.07)" />
        </svg>
      </div>
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
          transform: "rotate(180deg)",
        }}
      >
        <svg viewBox="0 0 1446 199" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
          <path d="M -6 68.5 V 0 H 1445 V 91 L 1289 170 L -6 68.5 Z" fill="rgba(37, 99, 235, 0.05)" />
        </svg>
      </div>

      <div style={{ ...base, top: "8%", left: "2%", width: "160px", height: "125px", backgroundImage: "url('/images/decor-dot-grid.svg')", opacity: 0.22 }} />
      <div style={{ ...base, top: "14%", right: "4%", width: "140px", height: "110px", backgroundImage: "url('/images/decor-dot-grid.svg')", opacity: 0.18 }} />
      <div style={{ ...base, top: "38%", left: "1%", width: "100px", height: "100px", backgroundImage: "url('/images/decor-plus.svg')", opacity: 0.24, transform: "rotate(-12deg)" }} />
      <div style={{ ...base, top: "52%", right: "3%", width: "190px", height: "190px", backgroundImage: "url('/images/decor-rings.svg')", opacity: 0.2 }} />
      <div style={{ ...base, bottom: "18%", left: "6%", width: "170px", height: "130px", backgroundImage: "url('/images/feature-section1-dottedrows.png')", opacity: 0.2 }} />
      <div style={{ ...base, bottom: "12%", right: "5%", width: "120px", height: "120px", backgroundImage: "url('/images/decor-plus.svg')", opacity: 0.22, transform: "rotate(18deg)" }} />
    </>
  );
}

export default function HowItWorks() {
  const section: CSSProperties = {
    padding: "120px 32px 120px",
    marginTop: "-80vh",
    position: "relative",
    zIndex: 50,
    overflow: "hidden",
    background: "linear-gradient(180deg, #eef4ff 0%, #f6f9ff 35%, #f8faff 70%, var(--bg-light) 100%)",
  };

  return (
    <section id="how-it-works" style={section}>
      <SectionDecor />

      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <motion.div
          style={{ textAlign: "center", marginBottom: "64px" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span style={{
            display: "inline-block",
            padding: "6px 16px",
            borderRadius: "var(--radius-full)",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--accent)",
            background: "var(--accent-light)",
            marginBottom: "20px",
          }}>
            How It Works
          </span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            marginBottom: "16px",
          }}>
            Three Steps to Your Data Marketplace
          </h2>
          <p style={{
            fontSize: "16px",
            color: "var(--text-secondary)",
            maxWidth: "520px",
            margin: "0 auto",
          }}>
            From concept to live marketplace in record time. Our infrastructure handles the complexity.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            position: "relative",
          }}
          className="steps-grid"
        >
          {steps.map((s, i) => (
            <StepCard key={s.number} step={s} index={i} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px !important;
            margin: 0 auto !important;
          }
        }
        .how-step-card {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
