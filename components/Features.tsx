"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Identity & Trust Layer",
    description:
      "Blockchain-secured identity verification and trust scoring for every participant in your data ecosystem. Zero-knowledge proofs ensure privacy while maintaining accountability.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Transaction Engine",
    description:
      "Smart contract-powered transactions with automated escrow, royalty distribution, and usage-based billing. Every exchange is transparent, auditable, and instant.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Marketplace Primitives",
    description:
      "Pre-built modules for listings, search, filtering, categories, and data product management. Assemble your marketplace like building blocks — no reinventing the wheel.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 15h6m-3-3v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "White-Label Deployment",
    description:
      "Full brand customization — your logo, your colors, your domain. Launch a marketplace that looks and feels entirely yours while powered by enterprise infrastructure.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Access Control & Permissions",
    description:
      "Granular role-based access for data providers, consumers, administrators, and auditors. Define who sees what, who buys what, and who governs what.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M21 21l-4.35-4.35"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Discoverability Engine",
    description:
      "AI-powered search, recommendation systems, and data cataloging. Help buyers find exactly the data they need across thousands of listings in milliseconds.",
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative py-32 px-6 bg-grid"
    >
      {/* Gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-purple/30 text-purple-light bg-purple/5 tracking-wider uppercase mb-6"
          >
            Platform Capabilities
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Everything You Need to
            <br />
            <span className="gradient-text">Build a Data Economy</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Six foundational layers that power any data marketplace —
            from identity to discovery, transactions to governance.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="group relative p-8 rounded-2xl border border-dark-border bg-dark-card/50 hover:border-cyan/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan/5"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-cyan mb-5 group-hover:text-purple-light transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Number */}
              <div className="absolute bottom-4 right-4 text-6xl font-bold text-dark-border/50 font-[family-name:var(--font-space-grotesk)] group-hover:text-cyan/10 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
