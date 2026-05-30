"use client";

import { useState, CSSProperties } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  const section: CSSProperties = {
    padding: "120px 32px",
    background: "var(--bg-white)",
  };

  const container: CSSProperties = {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  };

  const title: CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: 800,
    marginBottom: "16px",
  };

  const sub: CSSProperties = {
    fontSize: "16px",
    color: "var(--text-secondary)",
    marginBottom: "36px",
    lineHeight: 1.6,
  };

  const form: CSSProperties = {
    display: "flex",
    gap: "12px",
    maxWidth: "460px",
    margin: "0 auto",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const input: CSSProperties = {
    flex: "1 1 240px",
    padding: "14px 18px",
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--border)",
    background: "var(--bg-white)",
    color: "var(--text-primary)",
    fontSize: "15px",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const button: CSSProperties = {
    padding: "14px 28px",
    borderRadius: "var(--radius-sm)",
    fontSize: "15px",
    fontWeight: 600,
    color: "#fff",
    background: "var(--accent)",
    transition: "background 0.2s",
    whiteSpace: "nowrap",
  };

  const disclaimer: CSSProperties = {
    fontSize: "12px",
    color: "var(--text-muted)",
    marginTop: "16px",
  };

  const successBox: CSSProperties = {
    padding: "32px",
    borderRadius: "var(--radius)",
    border: "1px solid var(--border)",
    background: "var(--bg-light)",
  };

  return (
    <section id="contact" style={section}>
      <div style={container}>
        <h2 style={title}>Ready to Deploy Your Data Ecosystem?</h2>
        <p style={sub}>
          Join the waitlist and be among the first to build your own marketplace on Ethical Xchange infrastructure.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={form}>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email" required style={input}
              onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
            />
            <button type="submit" style={button}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
            >Join Waitlist</button>
          </form>
        ) : (
          <div style={successBox}>
            <div style={{ fontSize: "28px", marginBottom: "10px", color: "var(--accent)" }}>&#10003;</div>
            <p style={{ fontSize: "16px", fontWeight: 600, marginBottom: "6px" }}>You&apos;re on the list!</p>
            <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>We&apos;ll be in touch with early access details.</p>
          </div>
        )}

        <p style={disclaimer}>No spam. Unsubscribe anytime. Secured by blockchain infrastructure.</p>
      </div>
    </section>
  );
}
