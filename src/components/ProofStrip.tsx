"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { ShieldCheck, Briefcase, Layers } from "lucide-react";

interface ProofStripProps {
  className?: string;
}

export default function ProofStrip({ className = "" }: ProofStripProps) {
  return (
    <div className={`w-full bg-[#1A1A1A] text-white py-6 border-y border-white/10 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-rajdhani text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
            PROVEN TRACK RECORD
          </span>
          <span className="hidden md:inline text-white/30">|</span>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 md:gap-14 font-sans text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center">
              <ShieldCheck size={16} />
            </div>
            <div>
              <div className="font-serif text-lg font-bold leading-none text-white">{siteConfig.trackRecord.govProjects}</div>
              <div className="text-xs text-[#AAAAAA] mt-0.5">Government Projects Delivered</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center">
              <Briefcase size={16} />
            </div>
            <div>
              <div className="font-serif text-lg font-bold leading-none text-white">{siteConfig.trackRecord.clientProjects}</div>
              <div className="text-xs text-[#AAAAAA] mt-0.5">Commercial Client Deployments</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center">
              <Layers size={16} />
            </div>
            <div>
              <div className="font-serif text-lg font-bold leading-none text-white">{siteConfig.trackRecord.productsBuilt}</div>
              <div className="text-xs text-[#AAAAAA] mt-0.5">AI Products & Platforms Built</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
