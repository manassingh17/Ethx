"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
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
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-dense" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2
            variants={staggerItem}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Ready to Deploy Your
            <br />
            <span className="gradient-text">Data Ecosystem?</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-muted text-lg max-w-xl mx-auto mb-12"
          >
            Join the waitlist and be among the first to build your own
            marketplace on Ethical Xchange infrastructure.
          </motion.p>

          {/* Form */}
          <motion.div variants={staggerItem}>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <div className="flex-1 relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 rounded-lg bg-dark-card/80 border border-dark-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-cyan/50 transition-colors animate-border-glow"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 rounded-lg font-semibold text-dark bg-gradient-to-r from-cyan to-purple hover:shadow-xl hover:shadow-cyan/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 max-w-lg mx-auto"
              >
                <div className="text-4xl mb-4">&#10003;</div>
                <p className="text-foreground font-semibold text-lg">
                  You&apos;re on the list!
                </p>
                <p className="text-muted text-sm mt-2">
                  We&apos;ll be in touch soon with early access details.
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-xs text-muted/60 mt-6"
          >
            No spam. Unsubscribe anytime. Your data is secured by the same
            blockchain infrastructure we build on.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
