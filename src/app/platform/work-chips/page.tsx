import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import WorkChipsDiagram from "@/components/WorkChipsDiagram";
import { literatureList } from "@/data/literatureData";
import { 
  Cpu, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Split,
  Puzzle,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Work Chips | Modular Skill Architecture & Router | DPULSE AI",
  description: "One brain. Many Work Chips. Specialized software skill modules coordinated by an intelligent task router for hardware-agnostic physical AI robotics.",
};

export default function WorkChipsPage() {
  const skillRoutingPapers = literatureList.filter((item) =>
    item.tags.includes("skill-routing")
  );

  const chipsCatalogue = [
    {
      id: "harvest",
      name: "Selective Crop Harvesting Chip",
      domain: "Agriculture",
      status: "in-training" as const,
      statusLabel: "In Training / Field Simulation",
      description: "Vision-guided peduncle identification, maturity classification, and non-destructive fruit detachment for specialty crops.",
      kinematics: "3-DoF to 6-DoF end effectors",
      targetLatency: "< 14ms",
    },
    {
      id: "weeding",
      name: "Precision Weed Eradication Chip",
      domain: "Agriculture",
      status: "in-training" as const,
      statusLabel: "In Training / Field Simulation",
      description: "Millimeter-level targeted mechanical or micro-spray weed neutralization, discriminating commercial crops from invasive flora at high travel velocities.",
      kinematics: "Boom sprayers & delta arms",
      targetLatency: "< 10ms",
    },
    {
      id: "sorting",
      name: "Conveyor Material Sorting Chip",
      domain: "Industrial Logistics",
      status: "planned" as const,
      statusLabel: "Planned Architecture",
      description: "Rapid tactile and visual surface classification for high-speed parcel and scrap separation on high-throughput sorting lines.",
      kinematics: "High-speed Delta / SCARA robots",
      targetLatency: "< 8ms",
    },
    {
      id: "inspection",
      name: "Infrastructure Defect Inspection Chip",
      domain: "Public Works & Civil Infrastructure",
      status: "available" as const,
      statusLabel: "Available / Pilot Ready",
      description: "Multi-angle structural crack detection, surface spalling assessment, and digital ledger verification against CAD specifications.",
      kinematics: "UAV & PTZ camera platforms",
      targetLatency: "< 25ms",
    },
    {
      id: "palletizing",
      name: "Adaptive Pallet Loading Chip",
      domain: "Warehousing",
      status: "planned" as const,
      statusLabel: "Planned Architecture",
      description: "Spatial 3D bin packing and compliance-controlled carton placement under shifting payload centers of gravity.",
      kinematics: "6-DoF Industrial Articulated Arms",
      targetLatency: "< 18ms",
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-cream text-text-black">
      <Navbar />

      <PageHero
        label="MODULAR PHYSICAL AI"
        headline="One Brain. Many Work Chips."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920"
        alt="Robotic manufacturing and modular software skill execution"
      />

      {/* Software Only Notice */}
      <section className="bg-white border-b border-border py-6 px-6 md:px-24">
        <div className="max-w-5xl mx-auto flex items-start gap-4 p-4 rounded-xl bg-cream border border-border">
          <AlertCircle size={20} className="text-gold shrink-0 mt-0.5" />
          <div className="font-sans text-[14px] text-text-mid leading-relaxed">
            <strong className="text-text-black font-semibold">Architectural Note:</strong> A Work Chip is a <strong>specialized software skill module</strong> (a parameter-efficient adapter or flow-matching action policy), <em>not</em> physical silicon hardware. DPULSE AI is a pure software company; our Work Chips run on standard on-device NPUs, edge GPUs, or onboard processors.
          </div>
        </div>
      </section>

      {/* Core Concept Intro */}
      <section className="py-20 px-6 md:px-24 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="section-label mb-6 text-gold after:bg-gold-rule">THE PARADIGM SHIFT</div>
          <h2 className="font-serif text-[32px] md:text-[44px] leading-tight mb-8">
            Why Monolithic Foundation Models Struggle in Physical Robotics
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-6">
            When training language models, adding more internet text rarely destroys past grammar. In physical robotics, however, fine-tuning an entire end-to-end network on a new manipulation skill almost inevitably causes <em>catastrophic forgetting</em>: training an arm to grasp soft ripe strawberries frequently degrades its prior ability to navigate muddy tractor ruts.
          </p>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed">
            The DPULSE AI <strong>Work Chips</strong> architecture solves this by cleanly decoupling spatial representation from task execution. A frozen, robust foundation model provides invariant visual and spatial understanding. When a specific job is commanded, an intelligent <strong>task router</strong> mounts the corresponding Work Chip—executing the specialist task with zero regression on existing skills.
          </p>
        </div>
      </section>

      {/* Interactive / SVG Diagram */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">ROUTER & SKILL FLOW</div>
            <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
              How Instruction & Vision Route to Work Chips
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-relaxed">
              The router evaluates both high-level semantic instructions ("harvest row 4") and sensory scene context to determine which specialized Work Chip assumes motor control.
            </p>
          </div>

          <WorkChipsDiagram />
        </div>
      </section>

      {/* Why Modular Skills */}
      <section className="py-24 px-6 md:px-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4 text-gold after:bg-gold-rule">DESIGN PRINCIPLES</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-16">
            Four Key Advantages of Work Chip Modularity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl bg-cream border border-border">
              <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-gold mb-6">
                <Puzzle size={20} />
              </div>
              <h3 className="font-serif text-[22px] text-text-black mb-3">Zero Catastrophic Forgetting</h3>
              <p className="font-sans text-[14px] text-text-mid leading-relaxed">
                New skill modules are trained in isolation. Adding an autumn pruning skill leaves spring strawberry harvesting weights completely untouched.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-cream border border-border">
              <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-gold mb-6">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-serif text-[22px] text-text-black mb-3">Independent Safety Verification</h3>
              <p className="font-sans text-[14px] text-text-mid leading-relaxed">
                Each Work Chip is benchmarked across thousands of simulated edge cases and collision hazards in digital twins before being certified for field deployment.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-cream border border-border">
              <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-gold mb-6">
                <Layers size={20} />
              </div>
              <h3 className="font-serif text-[22px] text-text-black mb-3">Compact Edge Footprint</h3>
              <p className="font-sans text-[14px] text-text-mid leading-relaxed">
                Work Chips are lightweight parameter adapters (typically 50MB to 200MB) that can be dynamically loaded into onboard NPU SRAM in milliseconds.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-cream border border-border">
              <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-gold mb-6">
                <Split size={20} />
              </div>
              <h3 className="font-serif text-[22px] text-text-black mb-3">Continuous Skill Catalog</h3>
              <p className="font-sans text-[14px] text-text-mid leading-relaxed">
                Equipment owners can expand their machines' utility over time by downloading newly certified Work Chips without replacing physical hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chip Catalogue */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4 text-gold after:bg-gold-rule">CHIP CATALOGUE</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-16">
            Current & Planned Work Chips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chipsCatalogue.map((chip) => {
              const isAvailable = chip.status === "available";
              const isTraining = chip.status === "in-training";

              return (
                <div
                  key={chip.id}
                  className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-rajdhani text-[11px] font-bold tracking-widest text-gold uppercase">
                        {chip.domain}
                      </span>
                      <span
                        className={`font-rajdhani text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full border ${
                          isAvailable
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : isTraining
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-gray-50 text-gray-500 border-gray-200"
                        }`}
                      >
                        {chip.statusLabel}
                      </span>
                    </div>

                    <h3 className="font-serif text-[22px] text-text-black mb-3">{chip.name}</h3>
                    <p className="font-sans text-text-mid text-[14px] leading-relaxed mb-6">{chip.description}</p>
                  </div>

                  <div className="pt-6 border-t border-border space-y-2 font-mono text-[12px] text-text-muted">
                    <div className="flex justify-between">
                      <span>Kinematics:</span>
                      <span className="text-text-black">{chip.kinematics}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Execution Latency:</span>
                      <span className="text-text-black">{chip.targetLatency}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Routing Works: Research Foundation */}
      <section className="py-24 px-6 md:px-24 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="section-label mb-6 text-gold after:bg-gold-rule">THEORETICAL FOUNDATIONS</div>
          <h2 className="font-serif text-[32px] md:text-[44px] leading-tight mb-8">
            Two Approaches to Skill Routing in the Literature
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-6">
            Our Work Chips architecture builds directly upon peer-reviewed research in modular Vision-Language-Action modeling. The literature currently outlines two prominent architectural families:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="p-8 rounded-xl bg-cream border border-border">
              <span className="font-rajdhani text-[11px] font-bold text-gold tracking-widest uppercase block mb-2">FAMILY 1</span>
              <h3 className="font-serif text-[22px] text-text-black mb-3">In-Model Mixture-of-Experts</h3>
              <p className="font-sans text-[14px] text-text-mid leading-relaxed mb-4">
                Routing occurs directly within the neural network transformer layers. Gating networks distribute computational tokens to domain-specialized expert sub-layers (e.g., MoSE, AtomicVLA, LAR-MoE).
              </p>
              <div className="font-mono text-[12px] text-text-muted">Strength: End-to-end differentiable backpropagation.</div>
            </div>

            <div className="p-8 rounded-xl bg-cream border border-border">
              <span className="font-rajdhani text-[11px] font-bold text-gold tracking-widest uppercase block mb-2">FAMILY 2</span>
              <h3 className="font-serif text-[22px] text-text-black mb-3">External Router Over Modular Adapters</h3>
              <p className="font-sans text-[14px] text-text-mid leading-relaxed mb-4">
                A frozen generalist backbone combined with an external semantic router that hot-swaps lightweight skill adapters based on language instructions and visual cues (e.g., CORAL, MoIRA).
              </p>
              <div className="font-mono text-[12px] text-text-muted">Strength: Zero retraining of foundation backbone; complete skill isolation.</div>
            </div>
          </div>

          <p className="font-sans text-text-mid text-[16px] leading-relaxed mb-10">
            DPULSE AI evaluates a hybrid design: a stable, frozen multimodal spatial backbone paired with hot-swappable Work Chips coordinated by a high-speed semantic router.
          </p>

          <div className="border border-border rounded-xl p-8 bg-cream">
            <h4 className="font-serif text-[20px] text-text-black mb-4">Related arXiv Research Papers</h4>
            <div className="space-y-4">
              {skillRoutingPapers.map((paper) => (
                <div key={paper.arxivId} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b border-border last:border-none">
                  <div>
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-[17px] text-text-black hover:text-gold transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{paper.title}</span>
                      <ExternalLink size={12} className="text-text-muted shrink-0" />
                    </a>
                    <div className="font-sans text-[13px] text-text-mid mt-0.5">{paper.ourTake}</div>
                  </div>
                  <span className="font-mono text-[11px] text-gold shrink-0">arXiv:{paper.arxivId}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/research/literature?tag=skill-routing"
                className="font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:underline inline-flex items-center gap-1"
              >
                View Full Curated Research Literature →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 md:px-24 bg-cream text-center">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">DEPLOY WORK CHIPS</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
            Bring Modular Intelligence to Your Machinery
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-10">
            Partner with DPULSE AI to pilot specialized Work Chips on your agricultural implements, industrial sorting rigs, or autonomous robotic fleets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
              Request a Pilot
            </Link>
            <Link
              href="/partners"
              className="px-8 py-3.5 border border-border hover:border-gold text-text-dark font-rajdhani font-bold text-[13px] tracking-widest uppercase rounded transition-colors w-full sm:w-auto text-center"
            >
              Hardware Maker Partnership
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
