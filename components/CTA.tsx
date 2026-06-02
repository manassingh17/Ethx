"use client";

import { useState, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";

const perks = [
  "Launch a white-label marketplace in weeks",
  "Blockchain-secured transactions & identity",
  "Enterprise SLA with modular architecture",
];

const sideChips = [
  { label: "Deploy", sub: "Your brand" },
  { label: "Connect", sub: "Your ecosystem" },
  { label: "Scale", sub: "Your rules" },
];

const miniStats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50ms", label: "Tx speed" },
  { value: "100%", label: "White-label" },
];

function SectionDecor() {
  const base: CSSProperties = {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    pointerEvents: "none",
  };
  return (
    <>
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 72, overflow: "hidden" }}>
        <svg viewBox="0 0 1446 199" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
          <path d="M -6 68.5 V 0 H 1445 V 91 L 1289 170 L -6 68.5 Z" fill="rgba(255, 255, 255, 0.4)" />
        </svg>
      </div>
      <div style={{ ...base, top: "8%", left: "1%", width: 200, height: 150, backgroundImage: "url('/images/decor-dot-grid.svg')", opacity: 0.4 }} />
      <div style={{ ...base, top: "10%", right: "1%", width: 200, height: 150, backgroundImage: "url('/images/decor-dot-grid.svg')", opacity: 0.35 }} />
      <div style={{ ...base, bottom: "8%", left: "2%", width: 160, height: 160, backgroundImage: "url('/images/decor-rings.svg')", opacity: 0.25 }} />
      <div style={{ ...base, bottom: "6%", right: "2%", width: 160, height: 160, backgroundImage: "url('/images/decor-rings.svg')", opacity: 0.22 }} />
    </>
  );
}

function FlankCard({ chip, index, side }: { chip: (typeof sideChips)[number]; index: number; side: "left" | "right" }) {
  return (
    <motion.div
      className={`cta-flank cta-flank--${side}`}
      initial={{ opacity: 0, x: side === "left" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
      style={{
        padding: "16px 18px",
        borderRadius: 14,
        background: "rgba(255, 255, 255, 0.55)",
        border: "1px solid rgba(37, 99, 235, 0.2)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 28px rgba(37, 99, 235, 0.1)",
        minWidth: 120,
      }}
    >
      <div style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 800, color: "#1d4ed8" }}>{chip.label}</div>
      <div style={{ fontSize: 12, color: "#475569", marginTop: 4 }}>{chip.sub}</div>
    </motion.div>
  );
}

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "88px 24px 100px",
        background: "linear-gradient(165deg, #d4e4fc 0%, #b8d0f5 38%, #c5daf8 70%, #dbeafe 100%)",
      }}
    >
      <SectionDecor />

      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
        className="cta-layout"
      >
        {/* Left flank — fills empty space */}
        <div className="cta-flank-col cta-flank-col--left" aria-hidden>
          {sideChips.map((chip, i) => (
            <FlankCard key={chip.label} chip={chip} index={i} side="left" />
          ))}
        </div>

        <motion.div
          className="cta-shell"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flex: 1,
            minWidth: 0,
            borderRadius: 24,
            background: "rgba(255, 255, 255, 0.94)",
            border: "1px solid rgba(37, 99, 235, 0.2)",
            boxShadow: "0 32px 80px rgba(37, 99, 235, 0.16), 0 12px 40px rgba(15, 23, 42, 0.06)",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: "linear-gradient(90deg, #2563eb, #38bdf8, #34d399)",
            }}
          />

          <div className="cta-inner-grid">
            {/* Left — copy */}
            <div className="cta-copy">
              <span className="cta-badge">Early access</span>

              <h2 className="cta-title">
                Ready to deploy your{" "}
                <span className="cta-title-accent">data ecosystem?</span>
              </h2>

              <p className="cta-desc">
                Join the waitlist and be among the first to build your own marketplace on Ethical
                Xchange infrastructure.
              </p>

              <ul className="cta-perks">
                {perks.map((perk, i) => (
                  <motion.li
                    key={perk}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                  >
                    <span className="cta-perk-icon" aria-hidden>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="8" stroke="#2563eb" strokeWidth="1.2" />
                        <path d="M6 9l2 2 4-4" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {perk}
                  </motion.li>
                ))}
              </ul>

              <div className="cta-mini-stats">
                {miniStats.map((s) => (
                  <div key={s.label} className="cta-mini-stat">
                    <div className="cta-mini-stat-value">{s.value}</div>
                    <div className="cta-mini-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form panel */}
            <div className="cta-form-panel">
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  width: 80,
                  height: 80,
                  backgroundImage: "url('/images/decor-dot-grid.svg')",
                  backgroundSize: "contain",
                  opacity: 0.25,
                }}
              />
              <motion.svg
                viewBox="0 0 100 100"
                aria-hidden
                style={{ position: "absolute", bottom: 16, left: 16, width: 90, height: 90, opacity: 0.2 }}
                animate={{ rotate: [0, 8, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              >
                <circle cx="50" cy="50" r="38" stroke="#93c5fd" strokeWidth="1" strokeDasharray="4 5" fill="none" />
              </motion.svg>

              <p className="cta-form-label">Get early access</p>
              <p className="cta-form-hint">We&apos;ll reach out with onboarding details.</p>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="cta-form-stack"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      required
                      className="cta-input"
                      aria-label="Email address"
                    />
                    <button type="submit" className="cta-submit">
                      Join waitlist
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="cta-success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="cta-success-icon">&#10003;</div>
                    <p className="cta-success-title">You&apos;re on the list!</p>
                    <p className="cta-success-sub">We&apos;ll be in touch with early access details soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="cta-disclaimer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                No spam. Unsubscribe anytime. Secured by blockchain infrastructure.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right flank */}
        <div className="cta-flank-col cta-flank-col--right" aria-hidden>
          {["Native", "Humanitarian", "AI / ML", "Creator"].map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.07 }}
              style={{
                padding: "10px 16px",
                borderRadius: 9999,
                fontSize: 12,
                fontWeight: 700,
                color: "#1e40af",
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(37,99,235,0.22)",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 16px rgba(37,99,235,0.08)",
              }}
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .cta-layout {
          display: flex;
          align-items: stretch;
          gap: 20px;
        }
        .cta-flank-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 14px;
          width: 132px;
          flex-shrink: 0;
        }
        .cta-flank-col--left {
          align-items: flex-end;
        }
        .cta-flank-col--right {
          align-items: flex-start;
        }
        .cta-shell {
          position: relative;
        }
        .cta-inner-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          min-height: 420px;
        }
        .cta-copy {
          padding: 48px 40px 44px 48px;
          text-align: left;
          border-right: 1px solid rgba(37, 99, 235, 0.1);
          background: linear-gradient(135deg, rgba(239, 246, 255, 0.5) 0%, transparent 60%);
        }
        .cta-badge {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1d4ed8;
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.2);
          margin-bottom: 20px;
        }
        .cta-title {
          font-family: var(--font-heading);
          font-size: clamp(28px, 3.2vw, 40px);
          font-weight: 800;
          line-height: 1.12;
          color: #0f172a;
          margin: 0 0 16px;
        }
        .cta-title-accent {
          background: linear-gradient(135deg, #2563eb 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-desc {
          font-size: 16px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 28px;
          max-width: 420px;
        }
        .cta-perks {
          list-style: none;
          margin: 0 0 32px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .cta-perks li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          line-height: 1.5;
          color: #334155;
          font-weight: 500;
        }
        .cta-perk-icon {
          flex-shrink: 0;
          margin-top: 1px;
        }
        .cta-mini-stats {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cta-mini-stat {
          flex: 1 1 90px;
          padding: 14px 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(37, 99, 235, 0.15);
          text-align: center;
        }
        .cta-mini-stat-value {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 800;
          background: linear-gradient(135deg, #2563eb, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-mini-stat-label {
          font-size: 11px;
          color: #64748b;
          margin-top: 4px;
          font-weight: 600;
        }
        .cta-form-panel {
          position: relative;
          padding: 48px 44px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(160deg, #eff6ff 0%, #f8fafc 100%);
        }
        .cta-form-label {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px;
        }
        .cta-form-hint {
          font-size: 14px;
          color: #64748b;
          margin: 0 0 24px;
        }
        .cta-form-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cta-input {
          width: 100%;
          padding: 16px 18px;
          border-radius: 12px;
          border: 1px solid rgba(37, 99, 235, 0.25);
          background: #ffffff;
          color: #0f172a;
          font-size: 15px;
          font-family: var(--font-body);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .cta-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
        }
        .cta-input::placeholder {
          color: #94a3b8;
        }
        .cta-submit {
          width: 100%;
          padding: 16px 24px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          box-shadow: 0 8px 28px rgba(37, 99, 235, 0.38);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(37, 99, 235, 0.48);
        }
        .cta-success {
          padding: 28px 20px;
          border-radius: 16px;
          text-align: center;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(56, 189, 248, 0.06));
          border: 1px solid rgba(37, 99, 235, 0.2);
        }
        .cta-success-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #2563eb, #38bdf8);
          color: #fff;
          font-size: 24px;
          font-weight: 700;
        }
        .cta-success-title {
          font-size: 17px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px;
        }
        .cta-success-sub {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }
        .cta-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: #64748b;
          margin: 20px 0 0;
          line-height: 1.5;
        }
        @media (max-width: 1100px) {
          .cta-flank-col {
            display: none;
          }
          .cta-layout {
            display: block;
          }
        }
        @media (max-width: 860px) {
          .cta-inner-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .cta-copy {
            border-right: none !important;
            border-bottom: 1px solid rgba(37, 99, 235, 0.1);
            padding: 36px 28px 32px !important;
          }
          .cta-form-panel {
            padding: 36px 28px 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
