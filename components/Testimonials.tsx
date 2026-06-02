"use client";

import { useState, useEffect, useCallback, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Ethical Xchange gave us the infrastructure to launch our data marketplace in weeks instead of years. The white-label capability meant we could maintain our brand.",
    author: "Sarah Chen",
    role: "CTO, DataStream Analytics",
    initials: "SC",
    color: "#2563eb",
    headline: "From concept to live marketplace in weeks",
  },
  {
    quote:
      "The blockchain-secured transaction layer eliminated the trust gap. Now coordination happens in real-time across all our partner organizations.",
    author: "Dr. Marcus Obi",
    role: "Director of Operations, Intl. Relief Org",
    initials: "MO",
    color: "#059669",
    headline: "Real-time trust across partner networks",
  },
  {
    quote:
      "Building our own infrastructure would have cost 10x and taken 18 months. Ethical Xchange got us live in 3 weeks with better capabilities.",
    author: "James Rivera",
    role: "VP of Product, AI Training Consortium",
    initials: "JR",
    color: "#d97706",
    headline: "10x cost savings, 3-week deployment",
  },
  {
    quote:
      "We needed something that felt like our product, not someone else's platform. Ethical Xchange delivered exactly that level of customization.",
    author: "Priya Sharma",
    role: "Head of Partnerships, Creator Network Alliance",
    initials: "PS",
    color: "#db2777",
    headline: "A marketplace that feels entirely ours",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
};

function SectionDecor() {
  const base: CSSProperties = {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    pointerEvents: "none",
  };
  return (
    <>
      <div style={{ ...base, top: "10%", left: "2%", width: 140, height: 110, backgroundImage: "url('/images/decor-dot-grid.svg')", opacity: 0.2 }} />
      <div style={{ ...base, top: "14%", right: "4%", width: 120, height: 95, backgroundImage: "url('/images/decor-dot-grid.svg')", opacity: 0.16 }} />
      <div style={{ ...base, bottom: "20%", left: "6%", width: 90, height: 90, backgroundImage: "url('/images/decor-plus.svg')", opacity: 0.18, transform: "rotate(-10deg)" }} />
      <div style={{ ...base, bottom: "18%", right: "5%", width: 160, height: 160, backgroundImage: "url('/images/decor-rings.svg')", opacity: 0.14 }} />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "15%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          filter: "blur(44px)",
          pointerEvents: "none",
        }}
      />
    </>
  );
}

function NavArrow({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous testimonial" : "Next testimonial"}
      className="testimonial-nav-btn"
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        border: "1px solid rgba(37, 99, 235, 0.2)",
        background: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 4px 20px rgba(37, 99, 235, 0.12)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d={direction === "prev" ? "M12 4L6 10l6 6" : "M8 4l6 6-6 6"}
          stroke="#2563eb"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 32px 88px",
        background: "linear-gradient(180deg, #ffffff 0%, #f0f7ff 45%, #e8f0fe 100%)",
      }}
    >
      <SectionDecor />

      {/* Bottom blue wedge — Razorpay-style transition */}
      <div aria-hidden style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 72, pointerEvents: "none", zIndex: 1 }}>
        <svg viewBox="0 0 1446 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
          <path d="M0 40 L360 8 L720 50 L1080 12 L1446 36 V80 H0 Z" fill="url(#testimonial-blue)" />
          <defs>
            <linearGradient id="testimonial-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header — Razorpay split */}
        <motion.div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 48,
            flexWrap: "wrap",
          }}
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                padding: "6px 16px",
                borderRadius: 9999,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "var(--accent)",
                background: "rgba(37, 99, 235, 0.1)",
                border: "1px solid rgba(37, 99, 235, 0.18)",
                marginBottom: 16,
              }}
            >
              Trusted by Leaders
            </span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "var(--text-primary)",
                maxWidth: 520,
              }}
            >
              Ethical Xchange grows with{" "}
              <span style={{ color: "var(--accent)" }}>you.</span>
            </h2>
          </div>
          <p
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "var(--text-secondary)",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 28, fontWeight: 800, color: "var(--accent)", marginRight: 6 }}>50+</span>
            Partner organizations
          </p>
        </motion.div>

        {/* Main carousel — split card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
          className="testimonials-carousel"
        >
          <NavArrow direction="prev" onClick={prev} />

          <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(200px, 280px) 1fr",
                  gap: 0,
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid rgba(37, 99, 235, 0.15)",
                  boxShadow: "0 24px 60px rgba(37, 99, 235, 0.1), 0 4px 16px rgba(15, 23, 42, 0.06)",
                  background: "#ffffff",
                  minHeight: 320,
                }}
                className="testimonial-slide"
              >
                {/* Left — portrait panel */}
                <div
                  style={{
                    position: "relative",
                    background: `linear-gradient(160deg, ${t.color} 0%, ${t.color}cc 50%, #1e3a5f 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 32,
                    overflow: "hidden",
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      width: 72,
                      height: 56,
                      backgroundImage: "url('/images/decor-dot-grid.svg')",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      opacity: 0.45,
                      filter: "brightness(2)",
                    }}
                  />
                  <motion.div
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: 16,
                      background: "rgba(255,255,255,0.15)",
                      border: "2px solid rgba(255,255,255,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-heading)",
                      fontSize: 36,
                      fontWeight: 800,
                      color: "#ffffff",
                      backdropFilter: "blur(8px)",
                      position: "relative",
                      zIndex: 1,
                    }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.35 }}
                  >
                    {t.initials}
                  </motion.div>
                  <svg
                    aria-hidden
                    style={{ position: "absolute", bottom: -10, right: -10, width: 100, height: 100, opacity: 0.25 }}
                    viewBox="0 0 100 100"
                  >
                    <circle cx="50" cy="50" r="42" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 5" />
                  </svg>
                </div>

                {/* Right — quote */}
                <div
                  style={{
                    padding: "40px 36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)",
                  }}
                >
                  <svg width="40" height="32" viewBox="0 0 40 32" fill="none" style={{ marginBottom: 16 }} aria-hidden>
                    <path
                      d="M0 32V18.4C0 11.2 2.4 6 7.2 2.4 12 0 17.6 0 24 0v6.4c-4 0-7.2.8-9.6 2.4-2.4 1.6-3.6 4-3.6 7.2H24V32H0zm16 0V18.4c0-7.2 2.4-12.4 7.2-16C28 0 33.6 0 40 0v6.4c-4 0-7.2.8-9.6 2.4-2.4 1.6-3.6 4-3.6 7.2H40V32H16z"
                      fill="rgba(37, 99, 235, 0.12)"
                    />
                  </svg>

                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(17px, 2vw, 20px)",
                      fontWeight: 600,
                      color: "#1e293b",
                      lineHeight: 1.45,
                      marginBottom: 16,
                    }}
                  >
                    {t.headline}
                  </p>

                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: "var(--text-secondary)",
                      marginBottom: 24,
                      flex: 1,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: 4,
                      }}
                    >
                      {t.author}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{t.role}</div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 36,
                      right: 36,
                      height: 3,
                      background: `linear-gradient(90deg, ${t.color}, transparent)`,
                      borderRadius: 2,
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <NavArrow direction="next" onClick={next} />
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {testimonials.map((item, i) => (
            <button
              key={item.author}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background: i === current ? "var(--accent)" : "rgba(37, 99, 235, 0.25)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .testimonial-nav-btn:hover {
          border-color: rgba(37, 99, 235, 0.4) !important;
          box-shadow: 0 8px 28px rgba(37, 99, 235, 0.18) !important;
          transform: scale(1.04);
        }
        @media (max-width: 768px) {
          .testimonial-slide {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .testimonials-carousel .testimonial-nav-btn {
            display: none;
          }
          .testimonials-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
