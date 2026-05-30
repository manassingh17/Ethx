"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const marketplaces = [
  {
    title: "Ethical Xchange Native",
    subtitle: "Core Infrastructure Marketplace",
    description: "The canonical implementation — professional, scalable, enterprise-ready.",
    style: "saas",
    gradient: "from-cyan/20 to-blue-600/20",
    borderColor: "border-cyan/30",
    accentColor: "text-cyan",
    tags: ["Enterprise", "SaaS", "Professional"],
  },
  {
    title: "UN Disaster Recovery",
    subtitle: "Humanitarian Data Exchange",
    description: "Mission-critical field data coordination for global disaster response operations.",
    style: "humanitarian",
    gradient: "from-emerald-500/20 to-teal-600/20",
    borderColor: "border-emerald-500/30",
    accentColor: "text-emerald-400",
    tags: ["Humanitarian", "NGO", "Field Operations"],
  },
  {
    title: "AI Training Data",
    subtitle: "Industrial AI Data Marketplace",
    description: "Dense, efficient, machine-oriented. Industrial-scale dataset commercialization.",
    style: "terminal",
    gradient: "from-amber-500/20 to-orange-600/20",
    borderColor: "border-amber-500/30",
    accentColor: "text-amber-400",
    tags: ["AI/ML", "Datasets", "Industrial"],
  },
  {
    title: "Creator Economy",
    subtitle: "Influencer & Content Marketplace",
    description: "High-energy, commercial, socially-driven creator monetization ecosystem.",
    style: "creator",
    gradient: "from-pink-500/20 to-rose-600/20",
    borderColor: "border-pink-500/30",
    accentColor: "text-pink-400",
    tags: ["Creator", "Social", "Commercial"],
  },
];

function MarketplaceCard({
  marketplace,
}: {
  marketplace: (typeof marketplaces)[0];
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 15);
    setRotateY((centerX - x) / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className={`group relative p-6 rounded-2xl border ${marketplace.borderColor} bg-dark-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-500 h-full`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${marketplace.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Coming Soon badge */}
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-foreground/10 text-muted border border-dark-border z-10">
        Coming Soon
      </div>

      <div className="relative z-10">
        {/* Mini theme preview */}
        <div className={`w-full h-32 rounded-lg bg-gradient-to-br ${marketplace.gradient} border border-dark-border mb-6 flex items-center justify-center overflow-hidden`}>
          <div className="text-center">
            <div className={`text-2xl font-bold font-[family-name:var(--font-space-grotesk)] ${marketplace.accentColor}`}>
              {marketplace.title.split(" ")[0]}
            </div>
            <div className="text-xs text-muted mt-1">Preview</div>
          </div>
        </div>

        <h3 className={`font-[family-name:var(--font-space-grotesk)] text-lg font-semibold mb-1 ${marketplace.accentColor}`}>
          {marketplace.title}
        </h3>
        <p className="text-sm text-muted mb-3">{marketplace.subtitle}</p>
        <p className="text-xs text-muted/80 leading-relaxed mb-4">
          {marketplace.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {marketplace.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-dark-border text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MarketplacePreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="marketplace"
      ref={sectionRef}
      className="relative py-32 px-6"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent" />

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
            Marketplace Variants
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            One Infrastructure.
            <br />
            <span className="gradient-text">Infinite Possibilities.</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            The same platform powers radically different marketplace experiences.
            Each feels like a different company — because it is.
          </motion.p>
        </motion.div>

        {/* Marketplace Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {marketplaces.map((marketplace) => (
            <motion.div key={marketplace.title} variants={staggerItem}>
              <MarketplaceCard marketplace={marketplace} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
          className="text-center text-sm text-muted mt-12"
        >
          You are not buying our marketplace. You are deploying{" "}
          <span className="text-cyan font-medium">your marketplace</span> on our
          infrastructure.
        </motion.p>
      </div>
    </section>
  );
}
