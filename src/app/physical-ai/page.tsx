import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import StackDiagram from "@/components/StackDiagram";
import WorkChipsDiagram from "@/components/WorkChipsDiagram";
import { ArrowRight, Eye, Brain, Move, ShieldAlert, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Physical AI | The Software Brain for Physical Machines | DPULSE AI",
  description: "Hardware-agnostic intelligence for the physical world: World Models, Vision-Language-Action (VLA) architectures, and modular Work Chips.",
};

export default function PhysicalAIPage() {
  const pillars = [
    {
      id: "world-models",
      title: "World Models & Generative Simulation",
      badge: "PHYSICAL SIMULATION",
      icon: Eye,
      description:
        "World models learn the predictive dynamics of physical reality—forecasting how lighting shifts, soil deforms, crops bend under mechanical load, and terrain obstacles evolve across time horizons. By simulating outcomes in latent space before executing physical actuators, our system anticipates collisions and optimizes robotic trajectories safely.",
      features: [
        "Self-supervised predictive video representations",
        "Latent state space trajectory rollout",
        "Counterfactual safety verification before motor actuation",
      ],
      researchLink: "/research/literature?tag=world-models",
    },
    {
      id: "vlm",
      title: "Vision-Language Models (VLM)",
      badge: "MULTIMODAL PERCEPTION",
      icon: Brain,
      description:
        "High-fidelity visual understanding that moves beyond simple bounding-box object detection. Our multi-modal perception layer parses complex unstructured environments—such as dense crop foliage, varying maturity stages, or cluttered sorting conveyors—grounding high-level human directives into structured scene graphs.",
      features: [
        "Real-time semantic panoptic segmentation",
        "Spatial-temporal scene graph construction",
        "Robustness to harsh ambient sunlight, dust, and rain",
      ],
      researchLink: "/research",
    },
    {
      id: "vla",
      title: "Vision-Language-Action Models (VLA)",
      badge: "CLOSED-LOOP EMBODIMENT",
      icon: Move,
      description:
        "Translating perception and semantic reasoning directly into 6-DoF continuous motor control actions. Inspired by modern flow-matching and diffusion-policy paradigms, our VLA models generate smooth end-effector trajectories with sub-15ms inference latencies on edge accelerators.",
      features: [
        "Tokenized continuous action space prediction",
        "Flow-matching & diffusion policy action heads",
        "Zero-shot transfer across distinct mechanical kinematics",
      ],
      researchLink: "/research/literature?tag=vla",
    },
    {
      id: "robotics-brain",
      title: "Robotics Brain & Work Chips",
      badge: "MODULAR COGNITION",
      icon: Cpu,
      description:
        "Rather than relying on brittle, monolithic networks that suffer from catastrophic forgetting, our architecture decouples general spatial reasoning from specific physical skills. A frozen multimodal base model coordinates with an intelligent task router that dynamically engages specialized 'Work Chips' for individual agricultural and industrial tasks.",
      features: [
        "Dynamic task router over modular skill adapters",
        "Zero performance regression on legacy capabilities",
        "Independent simulation testing and validation per chip",
      ],
      researchLink: "/platform/work-chips",
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-cream text-text-black">
      <Navbar />

      <PageHero
        label="PHYSICAL INTELLIGENCE"
        headline="The Software Brain for Physical AI. Hardware-Agnostic."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920"
        alt="Robotic arm and automated physical artificial intelligence systems"
      />

      {/* Software Only Notice Banner */}
      <section className="bg-white border-b border-border py-8 px-6 md:px-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-xl bg-cream border border-border">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 mt-0.5">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h3 className="font-serif text-[18px] text-text-black mb-1">
                Software Only — No Hardware Manufacturing
              </h3>
              <p className="font-sans text-text-mid text-[14px] leading-relaxed">
                DPULSE AI does not manufacture tractors, robotic arms, or silicon chips. We engineer the hardware-agnostic cognitive software stack that integrates directly into equipment manufactured by our commercial partners via high-speed C++/Python APIs and ROS2/gRPC bridges.
              </p>
            </div>
          </div>
          <Link
            href="/partners"
            className="shrink-0 px-5 py-2.5 bg-white border border-border hover:border-gold rounded font-rajdhani font-bold text-[11px] tracking-widest uppercase text-text-dark transition-colors"
          >
            Partner With Us →
          </Link>
        </div>
      </section>

      {/* Architecture Continuum */}
      <section className="py-24 px-6 md:px-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4 text-gold after:bg-gold-rule">UNIFIED ARCHITECTURE</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
            From Enterprise Data to Closed-Loop Physical Action
          </h2>
          <p className="font-sans text-text-mid text-[17px] max-w-3xl leading-relaxed mb-12">
            Physical intelligence cannot operate in isolation. It requires rich domain knowledge from the enterprise layer, multimodal spatial perception from the VLM, generative safety evaluation through world models, and high-frequency motor actuation via the VLA runtime.
          </p>

          <StackDiagram />
        </div>
      </section>

      {/* Four Core Pillars */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">THE CORE STACK</div>
            <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
              Four Pillars of Physical Embodiment
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-relaxed">
              Every layer of our physical intelligence stack is designed for deterministic safety, low latency on edge compute, and hardware portability.
            </p>
          </div>

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={pillar.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-16 bg-white p-8 md:p-14 rounded-2xl border border-border shadow-sm`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-rajdhani text-[11px] font-bold tracking-widest text-gold uppercase px-3 py-1 rounded bg-cream border border-border">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-[30px] md:text-[38px] text-text-black leading-tight mb-6">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-text-mid text-[16px] leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {pillar.features.map((f) => (
                      <div key={f} className="flex items-center gap-3 font-sans text-[15px] text-text-dark">
                        <CheckCircle2 size={16} className="text-gold shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={pillar.researchLink}
                    className="inline-flex items-center gap-2 font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:text-gold-light group"
                  >
                    <span>Explore Research Foundation</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="w-full lg:w-1/2 bg-cream p-8 rounded-xl border border-border">
                  <div className="aspect-[4/3] rounded-lg bg-white border border-border flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                    <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-gold mb-4 border border-border">
                      <Icon size={32} />
                    </div>
                    <div className="font-serif text-[20px] text-text-black mb-2">{pillar.badge} Runtime</div>
                    <div className="font-mono text-[12px] text-text-muted">Edge NPU & GPU Verified · Closed Loop</div>
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      <span className="font-mono text-[11px] bg-cream px-2 py-1 rounded border border-border text-text-dark">ROS2 Native</span>
                      <span className="font-mono text-[11px] bg-cream px-2 py-1 rounded border border-border text-text-dark">C++20 Zero-Copy</span>
                      <span className="font-mono text-[11px] bg-cream px-2 py-1 rounded border border-border text-text-dark">&lt;15ms Latency</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Work Chips Highlight */}
      <section className="py-24 px-6 md:px-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="max-w-2xl">
              <div className="section-label mb-4 text-gold after:bg-gold-rule">MODULAR SKILL ARCHITECTURE</div>
              <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
                Work Chips: One Brain, Specialized Skills
              </h2>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed">
                Rather than retraining general foundation models when introducing a new farm or warehouse primitive, we deploy swappable skill modules ("Work Chips"). An instruction-aware router invokes the appropriate specialist on demand.
              </p>
            </div>
            <Link
              href="/platform/work-chips"
              className="btn-primary shrink-0"
            >
              Explore Work Chips Architecture →
            </Link>
          </div>

          <WorkChipsDiagram />
        </div>
      </section>

      {/* Flagship Agriculture Callout */}
      <section className="py-24 px-6 md:px-24 bg-cream border-t border-border">
        <div className="max-w-5xl mx-auto bg-white p-10 md:p-14 rounded-2xl border border-border shadow-sm text-center">
          <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">FLAGSHIP EMBODIMENT USE CASE</div>
          <h2 className="font-serif text-[34px] md:text-[46px] leading-tight mb-6">
            Transforming Agriculture with Physical AI
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed max-w-3xl mx-auto mb-8">
            Severe agricultural labor shortages compromise harvesting yields and crop vitality across millions of acres. Our hardware-agnostic physical AI stack embeds into standard tractors and sprayers, performing autonomous selective harvesting, precision weeding, and yield monitoring.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/agriculture" className="btn-primary w-full sm:w-auto">
              Read Agriculture Deep-Dive
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-border hover:border-gold text-text-dark font-rajdhani font-bold text-[13px] tracking-widest uppercase rounded transition-colors w-full sm:w-auto"
            >
              Request Field Pilot
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
