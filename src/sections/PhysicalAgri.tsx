"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Sprout, Tractor, SunMedium, BarChart3 } from "lucide-react";

const PhysicalAgri = () => {
  return (
    <section id="agriculture-physical-ai" className="py-24 bg-[#F7F5F0] px-6 md:px-24 border-t border-gray-mid">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row gap-4 items-baseline mb-12 border-t-[3px] border-[#1A7A6E] pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-[42px] font-bold text-[#1A7A6E] tracking-tight">AGRICULTURE PHYSICAL AI</h2>
          <span className="font-rajdhani font-bold text-[11px] tracking-widest text-text-muted uppercase">
            PHYSICAL AI DOMAIN · AUTONOMOUS FIELD SYSTEMS
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          {/* Right Column: Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-8">
                Revolutionizing Agriculture by Reducing Manual Workforce Dependency
              </h3>
              <p className="font-sans text-text-mid text-[17px] mb-8 leading-relaxed">
                Agriculture globally faces severe labor shortages and escalating operational costs. 
                Dpulseai is pioneering Physical AI systems specifically engineered for the agricultural domain—deploying 
                autonomous field robotics that drastically reduce human workforce requirements while maximizing crop yields 
                and resource efficiency.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "70%+ Manual Labor Reduction — Autonomous robotic weed eradication and selective harvesting",
                  "Centimeter-Level Field Navigation — All-terrain autonomous guidance without satellite dependency",
                  "Real-Time VLM Crop Diagnostics — Instantaneous detection of crop diseases, pests, and hydration stress",
                  "Precision Micro-Dosing — 85% reduction in chemical pesticides via targeted drop nozzles",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#1A7A6E]/10 p-1 rounded-full flex-shrink-0">
                      <Check size={14} className="text-[#1A7A6E]" />
                    </div>
                    <span className="font-sans text-text-dark text-[15px] font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-[#1A7A6E] text-[#1A7A6E] px-8 py-3.5 rounded font-rajdhani font-bold text-[13px] tracking-widest uppercase hover:bg-[#1A7A6E] hover:text-white transition-all duration-200"
                >
                  Partner With Our Agri Team <span>→</span>
                </Link>
                <Link
                  href="/applied-domains"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-[#1A7A6E] font-sans text-[14px] font-medium transition-colors"
                >
                  Explore Field Robotics Pilot <span>↗</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Left Column: Visual Feature Grid */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-2xl border border-gray-mid shadow-sm"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                <div>
                  <span className="font-rajdhani font-bold text-[11px] text-[#1A7A6E] tracking-widest uppercase">
                    FIELD DEPLOYMENT IMPACT
                  </span>
                  <h4 className="font-serif text-[26px] text-text-black">Physical AI in the Field</h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#EAF5F4] text-[#1A7A6E] flex items-center justify-center">
                  <Sprout size={24} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-[#EAF5F4] rounded-xl border border-[#1A7A6E]/20">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-[#1A7A6E] mb-1">70%</div>
                  <div className="font-sans text-xs text-text-muted font-medium">Labor Dependency Drop</div>
                </div>
                <div className="p-5 bg-cream rounded-xl border border-gray-200">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-text-black mb-1">24/7</div>
                  <div className="font-sans text-xs text-text-muted font-medium">Autonomous Operation</div>
                </div>
                <div className="p-5 bg-cream rounded-xl border border-gray-200">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-text-black mb-1">85%</div>
                  <div className="font-sans text-xs text-text-muted font-medium">Chemical Usage Savings</div>
                </div>
                <div className="p-5 bg-[#EAF5F4] rounded-xl border border-[#1A7A6E]/20">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-[#1A7A6E] mb-1">&lt; 1cm</div>
                  <div className="font-sans text-xs text-text-muted font-medium">Targeting Accuracy</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm font-sans text-text-mid">
                  <Tractor size={18} className="text-[#1A7A6E] flex-shrink-0" />
                  <span>Autonomous navigation across irregular field topographies</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-sans text-text-mid">
                  <SunMedium size={18} className="text-[#1A7A6E] flex-shrink-0" />
                  <span>All-weather day & night optical sensor capabilities</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-sans text-text-mid">
                  <BarChart3 size={18} className="text-[#1A7A6E] flex-shrink-0" />
                  <span>Telemetry & farm management integration via PulseBoard</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysicalAgri;
