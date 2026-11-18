"use client";

import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    category: "ENTERPRISE AI",
    title: "AI-driven analytics, SaaS platforms, and custom software tailored for organizations.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=85&fit=crop",
    alt: "Sovereign enterprise AI infrastructure and secure datacenter servers",
  },
  {
    category: "ROBOTICS BRAIN",
    title: "Pioneering VLM & VLA models giving physical robots cognitive reasoning and action execution.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85&fit=crop",
    alt: "Physical AI robotics brain with vision language action architecture",
  },
  {
    category: "AGRICULTURE PHYSICAL AI",
    title: "Alleviating workforce shortages in agriculture with autonomous field robotics and monitoring.",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=85&fit=crop",
    alt: "Autonomous field robotics transforming agriculture and farming operations",
  },
  {
    category: "FLAGSHIP PRODUCTS",
    title: "Production-ready solutions: Healthcare Bot, ERMS retirement ledger, and E-Estimate system.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=85&fit=crop",
    alt: "Production-grade AI operations platforms developed by Dpulseai",
  },
];

const Discover = () => {
  return (
    <section id="discover" className="py-24 bg-white px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-8">DISCOVER DPULSEAI</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black max-w-3xl">
            &ldquo;We are an AI intelligence company building the systems that make industries smarter, workflows faster, and societies better.&rdquo;
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="editorial-card group"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/60" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <span className="font-rajdhani font-bold text-[11px] tracking-widest text-white uppercase">
                  {card.category}
                </span>
                <div>
                  <h3 className="font-serif text-white text-[22px] leading-snug mb-6">
                    {card.title}
                  </h3>
                  <div className="flex justify-end">
                    <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-200 group-hover:rotate-45">
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
