"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const solutions = [
  {
    title: "AI-Driven Analytics",
    desc: "Transform raw organizational data into predictive foresight. Advanced pattern recognition, natural language processing for unstructured archives, and real-time visualization dashboards.",
    accent: "bg-gold",
    tag: "ENTERPRISE INTELLIGENCE"
  },
  {
    title: "Robotics System Design",
    desc: "Autonomous physical robotics powered by VLM and VLA intelligence. All-terrain navigation, sub-centimeter computer vision, and closed-loop robotic process automation.",
    accent: "bg-[#1B5FA8]",
    tag: "PHYSICAL AI & ROBOTICS"
  },
  {
    title: "Custom Software Development",
    desc: "Tailored enterprise software architectures engineered to conquer operational bottlenecks. Scalable microservices, ERP integration, and cross-platform native applications.",
    accent: "bg-[#1A7A6E]",
    tag: "CUSTOM ENGINEERING"
  },
  {
    title: "Chatbot & Conversational AI",
    desc: "Intelligent, context-aware conversational agents trained on specialized domain knowledge. Deployed across web, mobile, and voice interfaces with 24/7 availability.",
    accent: "bg-text-black",
    tag: "CONVERSATIONAL SYSTEMS"
  },
  {
    title: "Cloud-Based SaaS Tools",
    desc: "Production-ready software platforms bringing turnkey AI capabilities to enterprise operations with secure sovereign hosting, multi-tenant security, and live telemetries.",
    accent: "bg-gold",
    tag: "SAAS PLATFORMS"
  },
  {
    title: "Digital Transformation Consulting",
    desc: "Strategic advisory roadmaps, AI readiness evaluations, and workforce transition models that guide institutions from legacy workflows to automated intelligence.",
    accent: "bg-[#1B5FA8]",
    tag: "STRATEGY & ROADMAPS"
  },
  {
    title: "Hardware + Edge AI Systems",
    desc: "Embedded neural compute modules operating on the physical edge. Multi-sensor fusion (cameras, LiDAR, IMU) with ultra-low power consumption and zero cloud latency.",
    accent: "bg-[#1A7A6E]",
    tag: "EMBEDDED HARDWARE"
  },
  {
    title: "Ethical & Responsible AI Frameworks",
    desc: "Rigorous verification pipelines ensuring deterministic precision, algorithmic bias mitigation, explainable auditability, and regulatory compliance.",
    accent: "bg-text-black",
    tag: "GOVERNANCE & TRUST"
  },
];

const Solutions = () => {
  return (
    <section className="py-24 bg-cream-dark px-6 md:px-24 border-t border-gray-mid">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="section-label mb-8">OUR CAPABILITIES & SOLUTIONS</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">
            Comprehensive AI & Robotics Capabilities to Transform Organizations
          </h2>
          <p className="font-sans text-text-mid text-[17px] mt-4 max-w-3xl">
            From cognitive robotics brains and agricultural automation to enterprise data platforms, 
            we engineer robust systems designed for mission-critical deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-mid relative group overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className={`absolute top-0 left-0 w-full h-[3px] ${sol.accent}`} />
              
              <div>
                <span className="font-rajdhani font-bold text-[10px] tracking-widest text-text-muted uppercase mb-3 block">
                  {sol.tag}
                </span>
                <h3 className="font-serif text-[22px] text-text-black mb-3">{sol.title}</h3>
                <p className="font-sans text-text-mid text-[14px] mb-6 leading-relaxed">{sol.desc}</p>
              </div>
              
              <Link href="/contact" className="text-gold font-rajdhani font-bold tracking-widest text-[11px] uppercase flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer pt-4 border-t border-gray-100">
                Explore Solution <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
