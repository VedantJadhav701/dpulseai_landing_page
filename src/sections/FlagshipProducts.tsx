"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HeartPulse, Users, Calculator, Activity, ArrowRight, Check } from "lucide-react";

const products = [
  {
    id: "healthcare-bot",
    name: "Healthcare Bot",
    category: "HEALTHCARE AI",
    icon: HeartPulse,
    tagline: "Medical-grade conversational assistant for patients and clinicians",
    description: "A reliable Health AI assistant trained on comprehensive medical expertise, engineered to help users understand symptoms, improve well-being, and support clinical teams with automated triage and latest medical insights.",
    features: [
      "24/7 patient health query triage and symptom evaluation",
      "Evidence-based clinical decision guidance for practitioners",
      "HIPAA-conscious privacy standards and secure data handling",
      "Multi-channel deployment across web, hospital portals, and mobile"
    ],
    accent: "text-rose-600",
    bgAccent: "bg-rose-50",
    borderAccent: "border-rose-200",
    linkText: "Request Healthcare Demo",
  },
  {
    id: "erms",
    name: "Employee Retirement Management System (ERMS)",
    category: "HR & WORKFORCE INTELLIGENCE",
    icon: Users,
    tagline: "End-to-end digital retirement, pension, and gratuity governance",
    description: "Streamlines the entire retirement lifecycle for enterprise workforces. From service tenure computation and benefit eligibility tracking to automated pension calculations and predictive workforce transition planning.",
    features: [
      "Automated pension, gratuity, and retirement benefit computation",
      "Integrated analytics dashboard tracking retirement cohorts & trends",
      "Financial liability forecasting and budget impact modeling",
      "Audit-ready compliance reporting and transparent documentation"
    ],
    accent: "text-[#1B5FA8]",
    bgAccent: "bg-[#EBF3FC]",
    borderAccent: "border-[#1B5FA8]/30",
    linkText: "Request ERMS Demo",
  },
  {
    id: "e-estimate",
    name: "E-Estimate System",
    category: "CAPITAL PROJECTS & INFRASTRUCTURE",
    icon: Calculator,
    tagline: "Digital Measurement Book & Estimate Ledger for infrastructure",
    description: "A modern digital platform for managing capital project estimates based on field measurements and predictive cost modeling. Integrates Measurement Books and Estimate Ledgers with automated real-time calculation and validation.",
    features: [
      "Field measurement synchronization with automatic ledger updating",
      "Predictive material and labor cost forecasting models",
      "Real-time validation preventing calculation errors and overruns",
      "Multi-tier digital approval workflows with audit timestamps"
    ],
    accent: "text-[#1A7A6E]",
    bgAccent: "bg-[#EAF5F4]",
    borderAccent: "border-[#1A7A6E]/30",
    linkText: "Request E-Estimate Demo",
  },
];

const FlagshipProducts = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="products" className="py-24 bg-white px-6 md:px-24 border-t border-gray-mid">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label mb-8">TURNKEY AI PRODUCTS</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black max-w-2xl">
                Ready-to-Deploy Enterprise Platforms
              </h2>
              <p className="font-sans text-text-mid text-[17px] mt-4 max-w-xl">
                Tested in real-world environments, our software products deliver immediate operational impact 
                for healthcare providers, government entities, and enterprise workforces.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-gold font-rajdhani font-bold tracking-widest text-[13px] uppercase hover:gap-3 transition-all"
            >
              Start Custom Project <span>→</span>
            </Link>
          </div>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-2xl p-8 border ${prod.borderAccent} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${prod.bgAccent} ${prod.accent} flex items-center justify-center`}>
                      <Icon size={28} />
                    </div>
                    <span className="font-rajdhani font-bold text-[10px] tracking-widest uppercase bg-gray-100 text-text-muted px-3 py-1 rounded-full">
                      {prod.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-[26px] text-text-black mb-2">{prod.name}</h3>
                  <p className="font-sans text-xs font-semibold text-gold uppercase tracking-wider mb-4">{prod.tagline}</p>
                  <p className="font-sans text-[14px] text-text-mid leading-relaxed mb-6">{prod.description}</p>

                  <div className="space-y-3 pt-4 border-t border-gray-100 mb-8">
                    {prod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check size={16} className={`mt-0.5 flex-shrink-0 ${prod.accent}`} />
                        <span className="font-sans text-xs text-text-dark font-medium leading-normal">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contact?product=${prod.id}`}
                  className="w-full text-center py-3.5 px-6 rounded-lg bg-gray-light hover:bg-gold hover:text-white text-text-black font-rajdhani font-bold text-[12px] tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>{prod.linkText}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlagshipProducts;
