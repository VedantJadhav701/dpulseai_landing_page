"use client";

import React from "react";
import { motion } from "framer-motion";

const diffs = [
  { title: "Physical AI & Robotics First", desc: "We bridge foundational digital models with physical robotics action in real-world environments." },
  { title: "Agriculture Labor Innovation", desc: "Deep focus on automating manual agricultural field tasks to solve acute workforce shortages." },
  { title: "Multimodal VLM & VLA Logic", desc: "Moving beyond passive language models to closed-loop Vision-Language-Action agents that physically execute." },
  { title: "Production-Grade Reliability", desc: "Tested across clinical, infrastructure, and field deployments with air-gapped on-device security." },
];

const Differentiators = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-[55%]">
          <div className="section-label mb-8">WHY DPULSEAI?</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-12">
            Designed for Reliability at Scale
          </h2>
          
          <div className="space-y-8">
            {diffs.map((diff, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-6 h-[2px] bg-gold mt-3 flex-shrink-0" />
                <div>
                  <h3 className="font-sans font-bold text-[18px] text-text-black mb-2">{diff.title}</h3>
                  <p className="font-sans text-text-mid text-[15px] leading-relaxed">{diff.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:w-[45%] flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-l-4 border-gold pl-10 py-4"
          >
            <blockquote className="font-serif italic text-[28px] md:text-[32px] text-text-black leading-tight">
              "We bridge the gap between AI hype and business reality with systems that are reliable, secure, and deeply integrated."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
