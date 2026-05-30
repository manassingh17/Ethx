"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Deploy Your Marketplace",
    description:
      "Configure your branding, define participant roles, set up workflows, and customize your marketplace structure. Go from concept to deployment in days, not months.",
    details: ["Custom branding & domain", "Role-based architecture", "Workflow configuration", "Data product schemas"],
  },
  {
    number: "02",
    title: "Connect Your Ecosystem",
    description:
      "Integrate data sources, onboard participants, connect APIs, and establish governance rules. Build your network of data providers and consumers.",
    details: ["API integrations", "Participant onboarding", "Data source connections", "Governance frameworks"],
  },
  {
    number: "03",
    title: "Go Live & Scale",
    description:
      "Launch your marketplace with smart contract-powered transactions, real-time analytics, and automated monetization. Scale infinitely on our infrastructure.",
    details: ["Smart contract transactions", "Real-time analytics", "Automated billing", "Infinite scalability"],
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-cyan/30 text-cyan bg-cyan/5 tracking-wider uppercase mb-6"
          >
            How It Works
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Three Steps to Your
            <br />
            <span className="gradient-text">Data Marketplace</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            From concept to live marketplace in record time.
            Our infrastructure handles the complexity so you can focus on your ecosystem.
          </motion.p>
        </motion.div>

        {/* Progress Line */}
        <div className="relative mb-16 hidden md:block">
          <div className="h-[2px] bg-dark-border rounded-full" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-cyan to-purple rounded-full"
          />
          {/* Step dots */}
          <div className="absolute top-0 left-0 right-0 flex justify-between -translate-y-1/2">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className="w-4 h-4 rounded-full bg-dark border-2 border-cyan glow-cyan"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="group relative"
            >
              <div className="p-8 rounded-2xl border border-dark-border bg-dark-card/30 hover:border-cyan/30 transition-all duration-500 h-full">
                {/* Step number */}
                <div className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-cyan/20 group-hover:text-cyan/40 transition-colors mb-6">
                  {step.number}
                </div>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Detail list */}
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan/60" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
