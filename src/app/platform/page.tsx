import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import StackDiagram from "@/components/StackDiagram";
import WorkChipsDiagram from "@/components/WorkChipsDiagram";
import { Terminal, Cpu, ShieldCheck, ArrowRight, Layers, Code2, Network, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform & APIs | Hardware-Agnostic Intelligence Runtime | DPULSE AI",
  description: "The DPULSE AI software platform: C++ inference runtime, ROS2/gRPC bridges, modular Work Chips, and hardware-agnostic physical intelligence.",
};

export default function PlatformPage() {
  const deliveryArtifacts = [
    {
      title: "Edge Inference Runtime",
      format: "C++20 / ONNX / TensorRT",
      desc: "Ultra-low-latency, zero-copy inference engine designed to execute on ruggedized on-machine NPUs with deterministic timing under 15ms.",
    },
    {
      title: "Hardware Integration Bridge",
      format: "ROS2 / gRPC / CAN Bus",
      desc: "Standardized motor abstraction layer translating high-level policy actions into joint velocity or steering angle commands across any machine chassis.",
    },
    {
      title: "Modular Work Chip Adapters",
      format: "Parameter-Efficient Skill Weights",
      desc: "Compact, swappable skill modules that extend the base multimodal model to new tasks without risking catastrophic forgetting or requiring full model retraining.",
    },
    {
      title: "Digital Twin & World Simulation",
      format: "USD / MuJoCo / Isaac Sim",
      desc: "Synthetic environment generation and generative world model rollouts for zero-risk software testing prior to physical hardware deployment.",
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-cream text-text-black">
      <Navbar />

      <PageHero
        label="SOFTWARE INFRASTRUCTURE"
        headline="Hardware-Agnostic Intelligence Runtime for Physical Systems"
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920"
        alt="Data center servers and high speed cloud computing runtime infrastructure"
      />

      {/* Overview */}
      <section className="py-20 px-6 md:px-24 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="section-label mb-6 text-gold after:bg-gold-rule">THE RUNTIME LAYER</div>
          <h2 className="font-serif text-[32px] md:text-[44px] leading-tight mb-8">
            Decoupling Physical Hardware from Autonomous Intelligence
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-6">
            Historically, robotics development suffered from tight hardware-software coupling: software written for one robotic arm or tractor chassis could not be transferred to another without extensive re-engineering. DPULSE AI solves this by delivering a hardware-agnostic cognitive layer.
          </p>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed">
            Our platform ingests sensor streams through standardized perception drivers, evaluates actions in a shared multimodal latent space, and dispatches kinematics-agnostic control tokens to machine actuators through a lightweight C++ edge runtime.
          </p>
        </div>
      </section>

      {/* End-to-End Stack Diagram */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4 text-gold after:bg-gold-rule">ARCHITECTURE CONTINUUM</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
            End-to-End Execution Pipeline
          </h2>
          <p className="font-sans text-text-mid text-[17px] max-w-3xl leading-relaxed mb-12">
            How enterprise domain corpora, multimodal sensor inputs, and physical actuators interconnect into one unified system.
          </p>

          <StackDiagram />
        </div>
      </section>

      {/* Work Chips Concept Highlight */}
      <section className="py-24 px-6 md:px-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="max-w-2xl">
              <div className="section-label mb-4 text-gold after:bg-gold-rule">MODULAR SKILL ENGINE</div>
              <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
                Work Chips: Dynamic Skill Routing
              </h2>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed">
                A Work Chip is a specialized software skill module trained for one specific operational task. When a robot receives an instruction or perceives an operational shift, our task router selects and mounts the appropriate skill package in real time.
              </p>
            </div>
            <Link
              href="/platform/work-chips"
              className="btn-primary shrink-0"
            >
              Explore Full Work Chips Spec →
            </Link>
          </div>

          <WorkChipsDiagram />
        </div>
      </section>

      {/* Delivered Artifacts & APIs */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4 text-gold after:bg-gold-rule">INTEGRATION DELIVERABLES</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-16">
            What We Deliver to Commercial Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliveryArtifacts.map((item) => (
              <div key={item.title} className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm">
                <div className="font-mono text-[12px] text-gold uppercase tracking-wider mb-2">{item.format}</div>
                <h3 className="font-serif text-[24px] text-text-black mb-4">{item.title}</h3>
                <p className="font-sans text-text-mid text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Build-with-us CTA */}
      <section className="py-24 px-6 md:px-24 bg-white border-t border-border text-center">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">COLLABORATION</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
            Build on the DPULSE AI Platform
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-10">
            We partner with machine builders, equipment manufacturers, and robotics developers seeking to add production-ready physical AI capabilities to their hardware fleets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/partners" className="btn-primary w-full sm:w-auto text-center">
              Partner With Us
            </Link>
            <Link
              href="/platform/work-chips"
              className="px-8 py-3.5 border border-border hover:border-gold text-text-dark font-rajdhani font-bold text-[13px] tracking-widest uppercase rounded transition-colors w-full sm:w-auto text-center"
            >
              Learn About Work Chips
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
