"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { fadeInUp, fadeIn } from "@/lib/animations";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <HeroCanvas />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050510_70%)] z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-cyan/30 text-cyan bg-cyan/5 tracking-wider uppercase">
            Blockchain-Secured Infrastructure
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
        >
          <span className="gradient-text">Infrastructure</span>
          <br />
          <span className="text-foreground">for the World&apos;s</span>
          <br />
          <span className="text-foreground">Data Economies</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Not a marketplace. The platform beneath every marketplace.
          <br className="hidden md:block" />
          Deploy your own data ecosystem on enterprise-grade, trustless infrastructure.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#features"
            className="px-8 py-4 rounded-lg text-base font-semibold text-dark bg-gradient-to-r from-cyan to-purple hover:shadow-xl hover:shadow-cyan/20 transition-all duration-300 hover:scale-105"
          >
            Explore the Platform
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-lg text-base font-semibold text-foreground border border-dark-border hover:border-cyan/50 transition-all duration-300 hover:bg-cyan/5"
          >
            Watch Demo
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-cyan/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
