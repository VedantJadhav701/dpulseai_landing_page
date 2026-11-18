"use client";

import React from "react";
import { ArrowDown, Cpu, Layers, Split, Bot } from "lucide-react";

export default function WorkChipsDiagram() {
  const chips = [
    { name: "Chip: Harvest", desc: "Crop picking, selective pruning, yield cutting", status: "pilot", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Chip: Weed", desc: "Centimeter-precision laser/micro-spray eradication", status: "pilot", color: "bg-teal-50 text-teal-700 border-teal-200" },
    { name: "Chip: Sort", desc: "Quality grading, defect rejection, conveyor packing", status: "in-training", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Chip: Inspect", desc: "Multi-spectral pathology, hydration, structural defect", status: "available", color: "bg-amber-50 text-amber-700 border-amber-200" },
    { name: "Chip: Load", desc: "Palletizing, bin manipulation, obstacle avoidance", status: "planned", color: "bg-purple-50 text-purple-700 border-purple-200" },
  ];

  return (
    <div className="w-full bg-white p-8 md:p-12 rounded-3xl border border-gray-mid shadow-sm my-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="font-rajdhani font-bold text-[11px] tracking-widest uppercase text-[#1B5FA8]">
          MODULAR ROBOTICS INTELLIGENCE
        </span>
        <h3 className="font-serif text-3xl text-text-black mt-2">
          One General Base Brain. Modular Work Chips.
        </h3>
        <p className="font-sans text-sm text-text-mid mt-2 leading-relaxed">
          A Work Chip is a specialized software skill module for one specific job. 
          An intelligent semantic router analyzes the visual scene and task prompt, dispatching control to the right chip without retraining the foundation model.
        </p>
      </div>

      {/* Top: Inputs */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-6">
        <div className="w-full text-center bg-gray-50 border border-gray-200 py-3 px-4 rounded-xl text-xs font-sans font-medium text-text-black">
          Natural Language Prompt ("Weed block 4")
        </div>
        <div className="text-text-muted">+</div>
        <div className="w-full text-center bg-gray-50 border border-gray-200 py-3 px-4 rounded-xl text-xs font-sans font-medium text-text-black">
          RGB-D Camera & LiDAR Stream
        </div>
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center text-text-muted mb-6">
        <ArrowDown size={20} className="animate-bounce" />
      </div>

      {/* Middle: Semantic Router */}
      <div className="max-w-lg mx-auto bg-[#1B5FA8] text-white p-5 rounded-2xl text-center shadow-md mb-8">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Split size={18} />
          <span className="font-rajdhani text-xs font-bold tracking-widest uppercase">DYNAMIC TASK ROUTER</span>
        </div>
        <p className="text-xs text-white/80">
          Fast zero-shot classification determining required skill primitives & safety boundaries
        </p>
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center text-text-muted mb-6">
        <ArrowDown size={20} />
      </div>

      {/* Chips Library */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto mb-8">
        {chips.map((chip, idx) => (
          <div key={idx} className={`p-4 rounded-xl border text-center flex flex-col justify-between ${chip.color}`}>
            <div>
              <span className="text-[9px] font-rajdhani font-bold uppercase tracking-wider block opacity-75 mb-1">
                {chip.status}
              </span>
              <h5 className="font-serif font-bold text-sm text-text-black mb-1">{chip.name}</h5>
              <p className="text-[11px] leading-tight opacity-90">{chip.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Foundation Base Model Floor */}
      <div className="max-w-4xl mx-auto bg-gray-100 border border-gray-300 p-5 rounded-2xl text-center">
        <div className="flex items-center justify-center gap-2 mb-1 text-text-black font-serif font-bold text-base">
          <Cpu size={18} className="text-gold" />
          <span>Shared Generalist VLA Foundation Model (Frozen Backbone)</span>
        </div>
        <p className="text-xs text-text-mid max-w-xl mx-auto">
          Supplies invariant 3D spatial representations, physical affordances, and continuous motor safety guarantees to all Work Chips.
        </p>
      </div>

      {/* Bottom: Action Output */}
      <div className="flex justify-center mt-6">
        <div className="inline-flex items-center gap-2 bg-cream-dark border border-gold/30 px-6 py-2.5 rounded-full text-xs font-sans font-bold text-text-black">
          <Bot size={16} className="text-gold" />
          <span>Output: Sub-15ms Real-Time Actuator Signals & Trajectories</span>
        </div>
      </div>
    </div>
  );
}
