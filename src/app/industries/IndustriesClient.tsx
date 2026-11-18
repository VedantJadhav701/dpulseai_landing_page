"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const industries = [
  {
    id: "agriculture",
    title: "Agriculture & Autonomous Farming",
    img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1200&q=85&fit=crop",
    desc: "Overcoming severe rural labor shortages through Physical AI. Autonomous weeding, precision crop spraying, and continuous health monitoring that reduce workforce dependency by 70%+.",
    bullets: ["70%+ manual workforce reduction", "Sub-centimeter autonomous field navigation", "Real-time crop disease & pest detection", "85% chemical pesticide reduction"],
    color: "#1A7A6E"
  },
  {
    id: "healthcare",
    title: "Healthcare & MedTech",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85&fit=crop",
    desc: "Secure, clinical-grade conversational and predictive AI. The Healthcare Bot delivers 24/7 symptom assessment, automated patient triage, and evidence-based decision guidance for practitioners.",
    bullets: ["24/7 autonomous clinical triage", "Practitioner decision support", "HIPAA/privacy-compliant architecture", "Multi-channel patient connectivity"],
    color: "#E11D48"
  },
  {
    id: "infrastructure",
    title: "Public Infrastructure & Capital Works",
    img: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?w=1200&q=85&fit=crop",
    desc: "Digitizing and validating large-scale capital project estimates through the E-Estimate platform. Integrates Measurement Books and Estimate Ledgers with automated cost auditing.",
    bullets: ["Digital Measurement Book synchronization", "Automated calculation validation", "Predictive cost overrun prevention", "Multi-tier approval audit trail"],
    color: "#B8922A"
  },
  {
    id: "enterprise",
    title: "Enterprise Workforce & Administration",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&fit=crop",
    desc: "Streamlining complex enterprise lifecycles with the Employee Retirement Management System (ERMS). Automates pension and gratuity computations with real-time workforce analytics.",
    bullets: ["Automated pension & gratuity computation", "Service tenure & benefit eligibility tracking", "Workforce transition trend forecasting", "Audit-ready institutional compliance"],
    color: "#1B5FA8"
  }
];

export default function IndustriesClient() {
  return (
    <>
      <PageHero
        label="INDUSTRIES WE SERVE"
        headline="Designed for High-Impact Sectors"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85&fit=crop"
        alt="Modern architecture glass building"
      />

      <div className="bg-white">
        {industries.map((ind, idx) => (
          <section key={ind.id} id={ind.id} className={`py-24 px-6 md:px-24 ${idx % 2 !== 0 ? 'bg-cream-dark' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                className={`lg:w-1/2 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-1 mb-8" style={{ backgroundColor: ind.color }}></div>
                <h2 className="font-serif text-[42px] leading-tight text-text-black mb-6">{ind.title}</h2>
                <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-8">
                  {ind.desc}
                </p>
                <div className="space-y-4 mb-10">
                  {ind.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ind.color }}></div>
                      <span className="font-sans font-medium text-text-black">{b}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/contact?subject=${ind.id}`} className="inline-flex items-center gap-2 font-rajdhani font-bold tracking-[0.15em] text-[14px] uppercase border px-6 py-3 rounded hover:opacity-80 transition-opacity" style={{ color: ind.color, borderColor: ind.color }}>
                  Talk to an Expert <span>→</span>
                </Link>
              </motion.div>
              <motion.div 
                className={`lg:w-1/2 w-full ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
                  <img src={ind.img} alt={ind.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
