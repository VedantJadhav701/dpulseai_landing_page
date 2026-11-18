"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const values = [
  { title: "Precision", desc: "In high-stakes industries, near-enough isn't enough. We build systems for 99.5%+ accuracy." },
  { title: "Sovereignty", desc: "Your data stays yours. Air-gapped deployments and zero cloud dependency options." },
  { title: "Trust", desc: "Transparent, explainable, and responsible AI systems that serve humanity." },
];

const timeline = [
  { year: "2024", title: "Company Incorporated", desc: "DPULSE AI PRIVATE LIMITED incorporated in Pune, Maharashtra, India." },
  { year: "2024", title: "Enterprise Products Launch", desc: "Deployed Healthcare Bot, ERMS (Employee Retirement Management), and E-Estimate platforms." },
  { year: "2025", title: "Robotics Brain (VLM/VLA) R&D", desc: "Initiated foundational Vision-Language-Action research for autonomous physical robotics." },
  { year: "2025", title: "Agriculture Domain Innovation", desc: "Pioneered Physical AI field robotics designed to drastically reduce agricultural manual workforce needs." },
  { year: "2026", title: "Physical AI Deployment", desc: "Scaling Physical AI robotics brains and autonomous field operations across multiple real-world use cases." },
];

export default function AboutClient() {
  return (
    <>
      <PageHero
        label="ABOUT DPULSEAI"
        headline="Building India's AI Infrastructure"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85&fit=crop"
        alt="Modern corporate office with professional boardroom setting"
      />

      <div className="bg-white">
        {/* Mission & Vision */}
        <section className="py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-label mb-8">WHO WE ARE</div>
              <h2 className="font-serif text-[42px] leading-tight text-text-black mb-8 italic">
                &ldquo;We bridge the gap between AI hype and industrial reality.&rdquo;
              </h2>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-8">
                Dpulseai (DPULSE AI PRIVATE LIMITED) is an AI startup entering the frontier of Physical AI. 
                We engineer foundational Robotics Brains powered by Vision-Language Models (VLM) and Vision-Language-Action (VLA) architectures, 
                enabling machines to autonomously perceive, reason, and act in real physical environments.
              </p>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed">
                Currently, we are innovating in the agriculture domain to drastically reduce human workforce dependency through 
                autonomous field robotics. Alongside our Physical AI research, we deliver turnkey enterprise platforms including our 
                Healthcare Bot, Employee Retirement Management System (ERMS), and E-Estimate digital ledger.
              </p>
            </motion.div>

            <div className="lg:w-1/2 bg-gray-light p-10 md:p-16 rounded-2xl">
              <h3 className="font-rajdhani font-bold text-[11px] text-gold tracking-widest uppercase mb-10">QUICK FACTS</h3>
              <div className="space-y-8">
                {[
                  ["Company", "DPULSE AI PRIVATE LIMITED"],
                  ["Founded", "2024"],
                  ["Headquarters", "Pune, Maharashtra, India"],
                  ["Core Focus", "Physical AI & Robotics Brain (VLM/VLA)"],
                  ["Key Use Cases", "Agriculture Labor Reduction, Healthcare, Enterprise"],
                  ["Flagship Products", "Healthcare Bot, ERMS, E-Estimate"],
                  ["Email", "info@dpulseai.com"],
                  ["Phone", "+91 91 75 79 0779"],
                ].map(([label, value], idx) => (
                  <div key={idx} className="flex justify-between border-b border-gray-mid pb-4">
                    <span className="font-sans text-text-muted text-[14px]">{label}</span>
                    <span className="font-sans text-text-black font-medium text-[14px]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 md:px-24 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <div className="section-label mb-8">OUR VALUES</div>
              <h2 className="font-serif text-[42px] leading-tight text-text-black">The Principles That Guide Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-8 border border-gray-mid shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center font-serif text-[20px] mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-[24px] text-text-black mb-3">{val.title}</h3>
                  <p className="font-sans text-text-mid text-[15px] leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="section-label mb-16">OUR JOURNEY</div>
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-[1px] bg-gray-mid -translate-x-1/2 hidden md:block" />
              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="md:w-[45%] text-left md:text-right">
                      <div className={`md:flex flex-col ${idx % 2 !== 0 ? 'md:items-start' : 'md:items-end'}`}>
                        <div className="font-serif text-[32px] text-gold mb-2">{item.year}</div>
                        <h4 className="font-serif text-[24px] text-text-black mb-4">{item.title}</h4>
                        <p className="font-sans text-text-mid text-[15px] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-gold border-4 border-cream-dark flex-shrink-0 z-10" />
                    <div className="md:w-[45%]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
