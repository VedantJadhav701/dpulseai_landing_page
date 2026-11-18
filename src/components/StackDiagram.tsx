"use client";

import React from "react";
import { Database, BrainCircuit, Eye, MoveRight, Bot } from "lucide-react";

export default function StackDiagram() {
  const steps = [
    {
      num: "01",
      title: "Domain Data",
      subtitle: "Enterprise telemetry & field sensors",
      icon: Database,
      color: "border-gray-300 text-text-black",
      badge: "INPUT LAYER",
    },
    {
      num: "02",
      title: "Custom LLMs / DSLMs",
      subtitle: "Domain small language models",
      icon: BrainCircuit,
      color: "border-gold text-gold",
      badge: "COGNITIVE STACK",
    },
    {
      num: "03",
      title: "VLM / VLA + World Models",
      subtitle: "Spatial reasoning & simulation",
      icon: Eye,
      color: "border-[#1B5FA8] text-[#1B5FA8]",
      badge: "PHYSICAL AI BRAIN",
    },
    {
      num: "04",
      title: "Physical Robot Action",
      subtitle: "Real-time edge motor execution",
      icon: Bot,
      color: "border-[#1A7A6E] text-[#1A7A6E]",
      badge: "ACTION LAYER",
    },
  ];

  return (
    <div className="w-full bg-cream py-16 px-6 md:px-12 rounded-3xl border border-gray-mid shadow-xs my-12">
      <div className="text-center mb-12">
        <span className="font-rajdhani font-bold text-[11px] tracking-widest uppercase text-gold">
          ARCHITECTURE CONTINUUM
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-text-black mt-2">
          One Pipeline, From Enterprise Data to Physical Action
        </h3>
        <p className="font-sans text-sm text-text-muted mt-2 max-w-xl mx-auto">
          We bridge digital organizational records with physical robotics action through a unified hardware-agnostic intelligence stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="relative flex flex-col justify-between">
              <div className="bg-white p-6 rounded-2xl border border-gray-mid shadow-xs h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-rajdhani text-[10px] font-bold tracking-widest uppercase text-text-muted">
                      {step.badge}
                    </span>
                    <span className="font-serif text-lg font-bold text-gray-300">{step.num}</span>
                  </div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${step.color}`}>
                    <Icon size={24} />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-text-black mb-1">{step.title}</h4>
                  <p className="font-sans text-xs text-text-mid leading-relaxed">{step.subtitle}</p>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-gray-mid items-center justify-center text-text-muted">
                  <MoveRight size={12} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 pt-6 border-t border-gray-mid text-center text-xs font-sans text-text-muted">
        Software-Only Architecture · Hardware-Agnostic · Zero Cloud Dependency for Critical Sensorimotor Loops
      </div>
    </div>
  );
}
