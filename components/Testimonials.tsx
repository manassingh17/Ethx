"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "Ethical Xchange gave us the infrastructure to launch our data marketplace in weeks instead of years. The white-label capability meant we could maintain our brand while leveraging enterprise-grade security.",
    author: "Sarah Chen",
    role: "CTO, DataStream Analytics",
    company: "Fortune 500 Data Provider",
  },
  {
    quote:
      "The blockchain-secured transaction layer eliminated the trust gap that had prevented our partners from sharing sensitive field data. Now coordination happens in real-time.",
    author: "Dr. Marcus Obi",
    role: "Director of Operations",
    company: "International Relief Organization",
  },
  {
    quote:
      "We evaluated building our own marketplace infrastructure. The cost would have been 10x and taken 18 months. Ethical Xchange got us live in 3 weeks with better capabilities than we'd dreamed of.",
    author: "James Rivera",
    role: "VP of Product",
    company: "AI Training Consortium",
  },
  {
    quote:
      "The flexibility is what sold us. We needed something that felt like our product, not someone else's platform with our logo slapped on. Ethical Xchange delivered exactly that.",
    author: "Priya Sharma",
    role: "Head of Partnerships",
    company: "Creator Network Alliance",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-purple/30 text-purple-light bg-purple/5 tracking-wider uppercase mb-6"
          >
            Trusted By Leaders
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold"
          >
            What Our Partners Say
          </motion.h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-10 md:p-14 text-center max-w-3xl mx-auto"
            >
              {/* Quote icon */}
              <div className="text-cyan/30 text-6xl font-serif leading-none mb-6">
                &ldquo;
              </div>

              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
                {testimonials[current].quote}
              </p>

              <div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-foreground">
                  {testimonials[current].author}
                </div>
                <div className="text-sm text-cyan mt-1">
                  {testimonials[current].role}
                </div>
                <div className="text-xs text-muted mt-1">
                  {testimonials[current].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-cyan w-8"
                  : "bg-dark-border hover:bg-muted"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
