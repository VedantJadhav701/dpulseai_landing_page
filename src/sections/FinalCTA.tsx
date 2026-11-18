"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, Cpu, GraduationCap } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="cta" className="py-24 bg-[#141414] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-[2px] bg-gold mx-auto mb-8" />
          <div className="font-rajdhani text-[12px] font-bold tracking-[0.25em] text-gold uppercase mb-4">
            INITIATE COLLABORATION
          </div>
          <h2 className="font-serif text-3xl md:text-[50px] leading-tight text-white mb-6">
            Build With DPULSE AI
          </h2>
          <p className="font-sans text-white/70 text-[17px] leading-relaxed">
            Choose your track to begin partnering with our engineering group.
          </p>
        </div>

        {/* Three Distinct Paths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Path 1: Enterprise */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-gold/50 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-6">
                <Building2 size={24} />
              </div>
              <h3 className="font-serif text-[24px] text-white mb-3">Enterprise Client</h3>
              <p className="font-sans text-white/70 text-[15px] leading-relaxed mb-6">
                Deploy sovereign, air-gapped domain models and automated enterprise workflows trained on your private institutional records.
              </p>
            </div>
            <Link
              href="/contact?track=enterprise"
              className="inline-flex items-center gap-2 font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:text-gold-light"
            >
              <span>Explore Enterprise AI</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Path 2: Farm & Hardware Partner */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-gold/50 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="font-serif text-[24px] text-white mb-3">Equipment / OEM Partner</h3>
              <p className="font-sans text-white/70 text-[15px] leading-relaxed mb-6">
                Embed our hardware-agnostic robotics brain and modular Work Chips into your tractors, boom sprayers, or robotic chassis.
              </p>
            </div>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:text-gold-light"
            >
              <span>OEM Integration</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Path 3: Researcher */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-gold/50 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-serif text-[24px] text-white mb-3">Researcher & Talent</h3>
              <p className="font-sans text-white/70 text-[15px] leading-relaxed mb-6">
                Collaborate on vision-language-action architectures, mixture-of-experts routing, or join our physical AI engineering group.
              </p>
            </div>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:text-gold-light"
            >
              <span>Research Collaboration</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Request a Pilot Demonstration</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
