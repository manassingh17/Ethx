"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const partners = [
  "DataVault Corp",
  "NeuralNet Systems",
  "CloudBridge AI",
  "QuantumData",
  "TrustChain Labs",
  "SynapseIO",
  "OmniData Inc",
  "FieldOps Global",
  "GridScale",
  "EcoSync Networks",
];

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-card/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted uppercase tracking-widest">
            Trusted by forward-thinking organizations
          </p>
        </motion.div>

        {/* Infinite scroll logos */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner}-${i}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center h-16 px-8 rounded-lg border border-dark-border/50 bg-dark-card/30 hover:border-cyan/20 transition-colors group"
                >
                  <span className="text-muted/60 group-hover:text-cyan/80 font-[family-name:var(--font-space-grotesk)] font-semibold text-sm whitespace-nowrap transition-colors">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
