"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const domains = [
  {
    id: "agriculture",
    title: "Agriculture & Autonomous Field Robotics",
    img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1200&q=85&fit=crop",
    desc: "Deploying Physical AI in the agriculture domain to alleviate severe manual labor shortages. Our autonomous field robots execute high-precision weeding, crop monitoring, and selective harvesting with 70%+ labor dependency reduction.",
    bullets: ["70%+ reduction in manual workforce demand", "Centimeter-precision autonomous field navigation", "Real-time optical pest and hydration detection", "Targeted chemical micro-dosing reducing input waste by 85%"],
    color: "#1A7A6E"
  },
  {
    id: "robotics",
    title: "Robotics Brain: VLM & VLA Development",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=85&fit=crop",
    desc: "Developing foundational Vision-Language Models (VLM) and Vision-Language-Action (VLA) architectures. We endow physical robots with spatial cognitive reasoning and sub-15ms sensorimotor action planning.",
    bullets: ["End-to-end VLA action token generation", "Spatial 3D scene affordance mapping", "Sub-15ms real-time closed-loop control", "Air-gapped on-device neural processing"],
    color: "#1B5FA8"
  },
  {
    id: "healthcare",
    title: "Healthcare AI & Clinical Systems",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85&fit=crop",
    desc: "Deploying specialized conversational and predictive AI trained on comprehensive medical data. Our Healthcare Bot supports healthcare professionals, patient triage, and round-the-clock medical guidance.",
    bullets: ["24/7 symptom assessment & clinical triage", "Practitioner decision-support assistance", "HIPAA/privacy-compliant architecture", "Multi-channel patient interaction"],
    color: "#E11D48"
  },
  {
    id: "edge-ai",
    title: "Hardware + Edge AI & Sensor Fusion",
    img: "https://images.unsplash.com/photo-12582937/pexels-photo-2582937.jpeg?auto=format&fit=crop&w=1200&q=80",
    desc: "Designing low-power embedded AI compute modules that operate directly on physical machines, drones, and robots. Fusing RGB-D cameras, LiDAR, and IMUs with zero reliance on cloud latency.",
    bullets: ["Multi-sensor time-synchronized fusion", "Low-power embedded NPU optimization", "Ultra-low latency execution at the physical edge", "Custom hardware & firmware integration"],
    color: "#B8922A"
  },
  {
    id: "saas",
    title: "Enterprise SaaS: ERMS & PulseBoard",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&fit=crop",
    desc: "Turnkey enterprise SaaS platforms addressing complex institutional administration. Includes the Employee Retirement Management System (ERMS) for pension & gratuity ledgers and PulseBoard analytics.",
    bullets: ["Automated pension & tenure computations", "Real-time workforce transition projections", "Unified telemetry & operational dashboards", "Enterprise multi-tenant security"],
    color: "#1B5FA8"
  },
  {
    id: "navigation",
    title: "Autonomous Navigation in Unstructured Terrains",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1200&q=85&fit=crop",
    desc: "Engineering physical navigation stacks that operate in GPS-denied, irregular, and challenging terrains like farmland, orchards, warehouses, and industrial plants.",
    bullets: ["GNSS-denied visual-inertial odometry", "Dynamic obstacle avoidance vectors", "Kinematic boundary verification", "All-weather day & night perception"],
    color: "#1A7A6E"
  },
  {
    id: "software",
    title: "Custom Software & Digital Infrastructure",
    img: "https://images.unsplash.com/photo-1546819/pexels-photo-546819.jpeg?auto=format&fit=crop&w=1200&q=80",
    desc: "Tailored enterprise software like the E-Estimate System—unifying Measurement Books and Estimate Ledgers with automated real-time calculations and cost forecasting for capital projects.",
    bullets: ["Digital Measurement Book synchronization", "Predictive cost estimation models", "Automated multi-tier approval governance", "Seamless integration with legacy ERPs"],
    color: "#B8922A"
  },
  {
    id: "governance",
    title: "Ethical & Responsible Physical AI Frameworks",
    desc: "Ensuring every physical robot and enterprise AI model operates with deterministic safety envelopes, explainable decision trails, and complete regulatory compliance.",
    img: "https://images.unsplash.com/photo-15473302/pexels-photo-5473302.jpeg?auto=format&fit=crop&w=1200&q=80",
    bullets: ["Kinematic & torque safety boundary gates", "Algorithmic bias detection & audit trails", "Air-gapped data sovereignty", "Compliance with international AI standards"],
    color: "#141414"
  }
];

export default function AppliedDomainsClient() {
  return (
    <>
      <PageHero
        label="PHYSICAL AI & APPLIED DOMAINS"
        headline="Where Physical AI Meets Real-World Impact"
        image="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1920&q=85&fit=crop"
        alt="Physical AI robotics deployed across agriculture and enterprise domains"
      />

      <div className="bg-white py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="section-label mb-8">APPLIED DOMAINS & PHYSICAL USE CASES</div>
            <h2 className="font-serif text-[42px] leading-tight text-text-black max-w-3xl">
              Bringing Physical AI Innovation to Organizations, Robotics, and Agriculture
            </h2>
            <p className="font-sans text-text-mid text-[17px] mt-4 max-w-3xl leading-relaxed">
              Dpulseai is an AI startup pioneering Physical AI. We bridge foundational intelligence with physical 
              actuation—developing Robotics Brains (VLM/VLA), alleviating labor shortages in agriculture, and deploying 
              tested enterprise software platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {domains.map((dom, idx) => (
              <motion.div
                key={dom.id}
                id={dom.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-cream rounded-2xl overflow-hidden border border-gray-mid shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] relative overflow-hidden bg-gray-200">
                    <img 
                      src={dom.img} 
                      alt={dom.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[11px] font-rajdhani font-bold tracking-widest uppercase text-text-black">
                      Domain 0{idx + 1}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-serif text-[28px] text-text-black mb-4 leading-snug">{dom.title}</h3>
                    <p className="font-sans text-text-mid text-[15px] leading-relaxed mb-6">{dom.desc}</p>
                    
                    <div className="space-y-2.5 pt-4 border-t border-gray-200 mb-6">
                      {dom.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-gold font-bold text-xs mt-0.5">✓</span>
                          <span className="font-sans text-[13px] text-text-dark font-medium leading-normal">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    href={`/contact?solution=${dom.id}`}
                    className="inline-flex items-center gap-2 text-gold font-rajdhani font-bold text-[12px] tracking-widest uppercase hover:gap-3 transition-all"
                  >
                    Partner on this Domain <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
