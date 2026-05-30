"use client";

import { useEffect, useState, useRef, CSSProperties } from "react";

const stats = [
  { value: 99.9, suffix: "%", label: "Uptime SLA", desc: "Enterprise-ready infrastructure" },
  { value: 50, suffix: "ms", label: "Transaction Speed", desc: "Blockchain-secured transactions" },
  { value: 12, suffix: "+", label: "Industries Served", desc: "Multi-industry adaptability" },
  { value: 100, suffix: "%", label: "White-Label Ready", desc: "Full brand customization" },
];

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
            if (start >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(start * 10) / 10);
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
    <div ref={ref} style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 800, color: "var(--accent)" }}>
      {formatted}{suffix}
    </div>
  );
}

export default function Stats() {
  const section: CSSProperties = {
    padding: "100px 32px",
    background: "var(--accent-lighter)",
  };

  const container: CSSProperties = {
    maxWidth: "var(--max-width)",
    margin: "0 auto",
  };

  const grid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
  };

  const card: CSSProperties = {
    textAlign: "center",
    padding: "36px 20px",
    borderRadius: "var(--radius)",
    background: "var(--bg-white)",
    border: "1px solid var(--border)",
  };

  const labelStyle: CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "15px",
    fontWeight: 600,
    color: "var(--text-primary)",
    marginTop: "12px",
    marginBottom: "6px",
  };

  const desc: CSSProperties = {
    fontSize: "13px",
    color: "var(--text-muted)",
  };

  return (
    <section style={section}>
      <div style={container}>
        <div style={grid} className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} style={card}>
              <Counter value={s.value} suffix={s.suffix} />
              <div style={labelStyle}>{s.label}</div>
              <div style={desc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
