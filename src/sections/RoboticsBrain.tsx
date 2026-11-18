"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Cpu, Eye, Zap, ShieldCheck } from "lucide-react";

const RoboticsBrain = () => {
  return (
    <section id="robotics-brain" className="py-24 bg-white px-6 md:px-24 relative overflow-hidden border-t border-gray-mid">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row gap-4 items-baseline mb-12 border-t-[3px] border-[#1B5FA8] pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-[42px] font-bold text-[#1B5FA8] tracking-tight">ROBOTICS BRAIN</h2>
          <span className="font-rajdhani font-bold text-[11px] tracking-widest text-text-muted uppercase">
            PHYSICAL AI · VLM & VLA DEVELOPMENT
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-8">
                Cognitive Intelligence for Physical Embodied Robots
              </h3>
              <p className="font-sans text-text-mid text-[17px] mb-8 leading-relaxed">
                We develop foundational Vision-Language Models (VLM) and Vision-Language-Action (VLA) architectures 
                that bridge multimodal perception with physical motor control. Our robotics brains enable machines to perceive, 
                reason in 3D spatial space, and execute precise physical actions in unstructured real-world environments.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "End-to-End VLA Models — Direct translation from visual prompt to actuator commands",
                  "Sub-15ms Real-Time Edge Latency — Ultra-fast closed-loop sensorimotor control",
                  "Air-Gapped On-Device Processing — Zero cloud dependency with full data sovereignty",
                  "Multimodal Sensor Fusion — Seamless integration with RGB-D, LiDAR, IMU, and tactile inputs",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#1B5FA8]/10 p-1 rounded-full flex-shrink-0">
                      <Check size={14} className="text-[#1B5FA8]" />
                    </div>
                    <span className="font-sans text-text-dark text-[15px] font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-[#1B5FA8] text-[#1B5FA8] px-8 py-3.5 rounded font-rajdhani font-bold text-[13px] tracking-widest uppercase hover:bg-[#1B5FA8] hover:text-white transition-all duration-200"
                >
                  Explore Physical AI <span>→</span>
                </Link>
                <Link
                  href="/applied-domains"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-gold font-sans text-[14px] font-medium transition-colors"
                >
                  View Architecture Specs <span>↗</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Diagram */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#EBF3FC] p-8 md:p-12 rounded-2xl border border-[#1B5FA8]/20 shadow-sm relative"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1B5FA8]/20">
                <div>
                  <h4 className="font-serif text-[24px] text-[#0E3D6E]">The Dpulse Physical Brain Stack</h4>
                  <p className="font-sans text-[13px] text-text-muted">Perception to Physical Action Pipeline</p>
                </div>
                <span className="font-rajdhani font-bold text-[11px] bg-[#1B5FA8] text-white px-3 py-1 rounded tracking-wider uppercase">
                  VLA v2.4
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Multimodal Ingestion",
                    desc: "High-frequency RGB-D visual frames, tactile feedback, and spatial depth point-clouds.",
                    icon: Eye,
                  },
                  {
                    step: "02",
                    title: "Spatial VLM Reasoning",
                    desc: "Semantic scene understanding, spatial affordance mapping, and temporal prediction.",
                    icon: Cpu,
                  },
                  {
                    step: "03",
                    title: "VLA Action Token Generation",
                    desc: "Continuous trajectory generation, end-effector poses, and obstacle avoidance vectors.",
                    icon: Zap,
                  },
                  {
                    step: "04",
                    title: "Deterministic Safety Gate",
                    desc: "Kinematic boundaries verification, collision checks, and torque limits enforcement.",
                    icon: ShieldCheck,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#EBF3FC] text-[#1B5FA8] flex items-center justify-center font-serif font-bold text-[16px] flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-[15px] text-text-black mb-1">{item.title}</h5>
                      <p className="font-sans text-[13px] text-text-mid leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#1B5FA8]/20 flex items-center justify-between text-xs font-sans text-text-muted">
                <span>Hardware: Edge NPUs & Embedded GPUs</span>
                <span className="text-[#1B5FA8] font-bold">Latency: &lt; 15ms</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticsBrain;
