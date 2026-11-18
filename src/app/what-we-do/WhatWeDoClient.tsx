"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const solutions = [
  {
    title: "Physical AI & Robotics Brain (VLM/VLA)",
    desc: "Developing foundational Vision-Language Models and Vision-Language-Action systems that empower autonomous robots with spatial reasoning, multi-modal perception, and real-time physical control.",
    details: ["VLA action token execution", "Spatial 3D scene affordances", "Sub-15ms edge sensorimotor loop"],
    color: "#1B5FA8"
  },
  {
    title: "Agriculture Domain Physical AI",
    desc: "Pioneering autonomous agricultural field robotics to drastically reduce manual labor dependency, automate weeding and harvesting, and optimize crop yields.",
    details: ["70%+ manual labor reduction", "Centimeter-precision navigation", "Real-time crop & weed detection"],
    color: "#1A7A6E"
  },
  {
    title: "AI-Driven Analytics & PulseBoard",
    desc: "Transform raw data into actionable insights with predictive analytics, pattern recognition in complex datasets, and natural language processing for unstructured archives.",
    details: ["Predictive analytics & forecasting", "Real-time data visualization", "Custom machine learning models"],
    color: "#B8922A"
  },
  {
    title: "Custom Software & Cloud SaaS Tools",
    desc: "Tailored enterprise software and ready-to-deploy platforms built to solve unique operational bottlenecks with scalable and secure cloud infrastructure.",
    details: ["End-to-end custom development", "System integration with legacy stacks", "Enterprise-grade reliability"],
    color: "#141414"
  },
  {
    title: "Chatbot & Conversational AI",
    desc: "Intelligent conversation systems that understand, learn, and assist across web, mobile, and voice interfaces with contextual memory and multi-channel deployment.",
    details: ["Natural language understanding", "Multi-channel deployment", "Voice-enabled interfaces"],
    color: "#B8922A"
  },
  {
    title: "Hardware + Edge AI Systems",
    desc: "Intelligent systems operating directly at the physical edge for real-time processing and decisions, integrating sensors with low-power compute.",
    details: ["Embedded AI solutions", "IoT sensor fusion technology", "Custom edge hardware integration"],
    color: "#1B5FA8"
  }
];

const diffs = [
  { title: "Physical AI & Robotics First", desc: "We bridge foundational digital models with physical robotics action in real-world environments." },
  { title: "Agriculture Labor Innovation", desc: "Deep focus on automating manual agricultural field tasks to solve acute workforce shortages." },
  { title: "Multimodal VLM & VLA Logic", desc: "Moving beyond passive language models to closed-loop Vision-Language-Action agents that physically execute." },
  { title: "Production-Grade Reliability", desc: "Tested across clinical, infrastructure, and field deployments with air-gapped on-device security." },
];

const products = [
  {
    title: "Healthcare Bot",
    category: "HEALTHCARE AI",
    desc: "A reliable Health AI assistant trained on medical expertise, supporting healthcare professionals and delivering the latest medical insights with 24/7 availability.",
    features: ["Medical expertise training", "Health assessment & triage", "Clinical decision support", "24/7 continuous availability"]
  },
  {
    title: "Employee Retirement Management System (ERMS)",
    category: "ENTERPRISE WORKFORCE",
    desc: "Streamlines the entire retirement lifecycle for enterprise workforces, from tracking service tenure and benefit eligibility to generating pension reports and workforce transition models.",
    features: ["Tenure & eligibility tracking", "Automated pension & gratuity ledgers", "Real-time retirement trend analytics", "Enhanced compliance & accountability"]
  },
  {
    title: "E-Estimate System",
    category: "INFRASTRUCTURE & CAPITAL PROJECTS",
    desc: "A streamlined digital platform for managing project estimates based on field measurements and predictive cost forecasting. Integrates Measurement Books and Estimate Ledgers with automated calculation.",
    features: ["Field measurement integration", "Cost forecasting capabilities", "Automated calculation & validation", "Streamlined approval governance"]
  }
];

export default function WhatWeDoClient() {
  return (
    <>
      <PageHero
        label="WHAT WE DO"
        headline="Production-Grade AI Systems"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85&fit=crop"
        alt="Advanced data analytics and AI systems"
      />

      {/* Solutions Grid */}
      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="section-label mb-8">OUR SOLUTIONS</div>
            <h2 className="font-serif text-[42px] leading-tight text-text-black max-w-3xl">
              Building the intelligent infrastructure of the modern enterprise.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="h-1 w-20 mb-8 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: sol.color }}></div>
                <h3 className="font-serif text-[32px] text-text-black mb-6">{sol.title}</h3>
                <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-8">
                  {sol.desc}
                </p>
                <div className="space-y-3">
                  {sol.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sol.color }}></div>
                      <span className="font-sans font-medium text-text-black text-[15px]">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Products */}
      <section className="py-24 bg-gray-light px-6 md:px-24 border-t border-gray-mid">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="section-label mb-8">FLAGSHIP PRODUCTS</div>
            <h2 className="font-serif text-[42px] leading-tight text-text-black max-w-3xl">
              Turnkey AI Platforms Built for High-Impact Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-mid shadow-sm flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <span className="font-rajdhani font-bold text-[11px] tracking-widest text-gold uppercase mb-3 block">
                    {prod.category}
                  </span>
                  <h3 className="font-serif text-[24px] text-text-black mb-4">
                    {prod.title}
                  </h3>
                  <p className="font-sans text-text-mid text-[15px] leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                  <div className="space-y-2 mb-8">
                    {prod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <span className="text-gold text-xs">✓</span>
                        <span className="font-sans text-text-dark text-[13px]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="/contact"
                  className="font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:text-gold-light flex items-center gap-2 transition-colors pt-4 border-t border-gray-100"
                >
                  Request Demo <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dpulseai */}
      <section className="py-24 bg-cream px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-[55%]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="section-label mb-8">WHY DPULSEAI?</div>
              <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-12">Designed for Reliability at Scale</h2>
            </motion.div>
            <div className="space-y-8">
              {diffs.map((d, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-4">
                  <div className="w-6 h-[2px] bg-gold mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-[18px] text-text-black mb-2">{d.title}</h3>
                    <p className="font-sans text-text-mid text-[15px] leading-relaxed">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-[45%] flex items-center">
            <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-mid">
               <blockquote className="font-serif italic text-[24px] md:text-[28px] text-text-black leading-tight mb-8">
                 &ldquo;The difference between a demo and a deployment is reliability. We focus on the latter.&rdquo;
               </blockquote>
               <div className="font-rajdhani font-bold text-[11px] text-gold tracking-widest uppercase">THE DPULSEAI PHILOSOPHY</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-dark border-t border-gold/20 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-10" />
          <h2 className="font-serif text-4xl md:text-[52px] leading-tight text-text-black mb-6">Ready to Get Started?</h2>
          <p className="font-sans text-text-muted text-[18px] mb-12">Let&apos;s discuss how AI can transform your operations.</p>
          <a href="https://dpulseai.vercel.app/book-call" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">Book A Free Call</a>
        </motion.div>
      </section>
    </>
  );
}
