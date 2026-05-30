"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const stats = [
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA",
    description: "Enterprise-ready infrastructure",
  },
  {
    value: 50,
    suffix: "ms",
    label: "Transaction Speed",
    description: "Blockchain-secured transactions",
  },
  {
    value: 12,
    suffix: "+",
    label: "Industries Served",
    description: "Multi-industry adaptability",
  },
  {
    value: 100,
    suffix: "%",
    label: "White-Label Ready",
    description: "Full brand customization",
  },
];

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl font-bold gradient-text glow-text-cyan">
      {value % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center p-8 rounded-2xl border border-dark-border bg-dark-card/30 hover:border-cyan/20 transition-all duration-500"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                isInView={isInView}
              />
              <div className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="mt-2 text-sm text-muted">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
