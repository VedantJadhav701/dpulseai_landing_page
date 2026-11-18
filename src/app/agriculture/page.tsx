import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { 
  Users, 
  Sprout, 
  Eye, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  SunMedium, 
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Physical AI in Agriculture | Autonomous Field Intelligence | DPULSE AI",
  description: "Solving critical agricultural labor shortages with hardware-agnostic physical AI. Autonomous selective harvesting, precision weeding, and real-time crop analytics.",
};

export default function AgriculturePage() {
  const challenges = [
    {
      title: "Severe Seasonal Labor Deficits",
      stat: "70%+",
      description: "Farms worldwide face an acute shortage of skilled seasonal pickers and weeding crews, leaving ripe crops unharvested.",
    },
    {
      title: "Rising Operational Overhead",
      stat: "40-60%",
      description: "Labor represents the single largest operational expenditure in specialty crops, horticulture, and high-value agriculture.",
    },
    {
      title: "Narrow Harvesting Windows",
      stat: "48-72h",
      description: "High-value fruits and vegetables risk rapid quality degradation if not harvested at peak physiological maturity.",
    },
  ];

  const modelPipeline = [
    {
      step: "01",
      name: "Perception & Canopy Ingestion",
      desc: "Multimodal RGB-D cameras capture real-time high-resolution imagery under variable sunlight, heavy shadows, and dusty field conditions.",
    },
    {
      step: "02",
      name: "Maturity & Stem Localization",
      desc: "Vision-Language Models segment fruits, assess ripeness indices, and pinpoint exact peduncle cut coordinates in 3D Euclidean space.",
    },
    {
      step: "03",
      name: "Predictive World Model Simulation",
      desc: "Simulates branch compliance and foliage deformation to forecast non-destructive actuator trajectories before physical motion.",
    },
    {
      step: "04",
      name: "High-Frequency Closed-Loop Actuation",
      desc: "The VLA runtime sends continuous 6-DoF end-effector velocity targets at <15ms intervals via CAN bus or ROS2 motor drivers.",
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-cream text-text-black">
      <Navbar />

      <PageHero
        label="FLAGSHIP PHYSICAL AI EMBODIMENT"
        headline="Alleviating Agricultural Labor Shortages with Autonomous Physical AI"
        image="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1920"
        alt="Automated agricultural smart farming technology in crop fields"
      />

      {/* The Problem Statement */}
      <section className="py-24 px-6 md:px-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="section-label mb-4 text-gold after:bg-gold-rule">THE MACRO CRISIS</div>
            <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
              Farms Are Running Out of Hands
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-relaxed">
              Global agriculture faces a generational inflection point: aging farm demographics, rapid rural-to-urban migration, and stringent seasonal migrant restrictions have produced severe, chronic labor deficits. When crops cannot be harvested on time, food security diminishes and farm margins collapse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-cream border border-border">
                <span className="font-serif text-[48px] text-gold font-light block mb-2">{item.stat}</span>
                <h3 className="font-serif text-[22px] text-text-black mb-3">{item.title}</h3>
                <p className="font-sans text-[15px] text-text-mid leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Software Approach */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="section-label mb-4 text-gold after:bg-gold-rule">SOFTWARE INTELLIGENCE LAYER</div>
              <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
                We Build the Brain, Not the Machinery
              </h2>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-6">
                Building proprietary farm hardware is capital-inefficient and slow to scale. Instead, DPULSE AI partners with agricultural equipment manufacturers, tractor builders, and autonomous vehicle integrators to supply the cognitive software brain.
              </p>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-8">
                Our vision-language-action (VLA) stack and specialized agricultural Work Chips convert standard hydraulic arms, boom sprayers, and autonomous carriers into dexterous, high-precision harvesting and maintenance robots.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-1" />
                  <div>
                    <strong className="font-sans text-text-black text-[15px] block">Hardware Agnostic</strong>
                    <span className="font-sans text-text-mid text-[14px]">Runs on any industrial chassis via standard CAN bus, ROS2, or direct serial protocols.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-1" />
                  <div>
                    <strong className="font-sans text-text-black text-[15px] block">Edge-Native Inference</strong>
                    <span className="font-sans text-text-mid text-[14px]">Operates 100% offline in remote acreage without cloud dependency or connectivity.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-1" />
                  <div>
                    <strong className="font-sans text-text-black text-[15px] block">Day & Night Operational Capability</strong>
                    <span className="font-sans text-text-mid text-[14px]">Active infrared illumination paired with robust multimodal VLM enables continuous 24/7 harvesting.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
                <div className="font-rajdhani text-[11px] font-bold tracking-widest text-gold uppercase mb-4">
                  MODEL RUNTIME SPECIFICATION
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="font-sans text-[14px] text-text-muted">Targeted Workforce Reduction</span>
                    <span className="font-mono text-[14px] font-bold text-text-black">70%+ per Acre</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="font-sans text-[14px] text-text-muted">Vision Detection Precision</span>
                    <span className="font-mono text-[14px] font-bold text-text-black">99.1% F1 Score</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="font-sans text-[14px] text-text-muted">Inference Latency Target</span>
                    <span className="font-mono text-[14px] font-bold text-text-black">&lt; 15ms Closed-Loop</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="font-sans text-[14px] text-text-muted">Deployment Footprint</span>
                    <span className="font-mono text-[14px] font-bold text-text-black">On-board Ruggedized NPU</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="font-sans text-[14px] text-text-muted">Connectivity Requirement</span>
                    <span className="font-mono text-[14px] font-bold text-text-black">Zero (Fully Air-Gapped)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the Model Sees and Decides */}
      <section className="py-24 px-6 md:px-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">THE AUTONOMOUS PIPELINE</div>
            <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
              How the Brain Sees, Evaluates, and Acts
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-relaxed">
              A sequence of real-time multi-modal transformations turning raw unstructured field imagery into millimeter-accurate robotic actuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modelPipeline.map((step) => (
              <div key={step.step} className="bg-cream border border-border p-8 rounded-xl relative flex flex-col justify-between">
                <div>
                  <span className="font-serif text-[40px] text-gold/30 font-light block mb-2">{step.step}</span>
                  <h3 className="font-serif text-[20px] text-text-black mb-3">{step.name}</h3>
                  <p className="font-sans text-[14px] text-text-mid leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="font-mono text-[11px] text-gold uppercase tracking-wider">Closed Loop Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Compatibility / Hardware Agnostic Notice */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-5xl mx-auto bg-white border border-border p-10 md:p-14 rounded-2xl shadow-sm">
          <div className="section-label mb-4 text-gold after:bg-gold-rule">EQUIPMENT INTEGRATION</div>
          <h2 className="font-serif text-[32px] md:text-[44px] leading-tight mb-6">
            Deploy on Your Existing Farm Fleet
          </h2>
          <p className="font-sans text-text-mid text-[16px] leading-relaxed mb-8">
            Whether you are a farm equipment manufacturer seeking autonomous features or an agricultural enterprise retrofitting existing utility vehicles, our software runtime interfaces cleanly with modern agricultural electronics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-cream rounded-xl border border-border">
              <h4 className="font-serif text-[18px] text-text-black mb-2">Tractors & Implement Booms</h4>
              <p className="font-sans text-[13px] text-text-mid leading-relaxed">ISOBUS / CAN bus compatible integration for automated guidance and variable rate spraying.</p>
            </div>
            <div className="p-6 bg-cream rounded-xl border border-border">
              <h4 className="font-serif text-[18px] text-text-black mb-2">Multi-Axis Robotic Arms</h4>
              <p className="font-sans text-[13px] text-text-mid leading-relaxed">Direct joint velocity control via ROS2 / micro-ROS for high-speed fruit picking.</p>
            </div>
            <div className="p-6 bg-cream rounded-xl border border-border">
              <h4 className="font-serif text-[18px] text-text-black mb-2">Autonomous Mobile Bases</h4>
              <p className="font-sans text-[13px] text-text-mid leading-relaxed">Trajectory tracking and dynamic obstacle avoidance across uneven orchard berms.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
            <div>
              <div className="font-serif text-[20px] text-text-black">Request a Field Demonstration Pilot</div>
              <div className="font-sans text-[14px] text-text-muted">Deploy our agricultural brain on your trial acreage.</div>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              Inquire for Field Pilot →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
