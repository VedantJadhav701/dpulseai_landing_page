import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Wrench, 
  Truck, 
  Boxes,
  Handshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us | Hardware & Equipment Integration | DPULSE AI",
  description: "Collaborate with DPULSE AI. We build software brains, not hardware. Partner with us to bring autonomous physical intelligence to your machinery.",
};

export default function PartnersPage() {
  const partnerTracks = [
    {
      icon: Truck,
      title: "Agricultural Equipment & Tractor OEMs",
      description:
        "Embed autonomous crop harvesting, selective weeding, and canopy inspection directly into your tractor cabs, boom sprayers, or mobile field carriers.",
      benefits: ["Pre-integrated CAN bus & ISOBUS drivers", "Offline edge execution", "New recurring software subscription revenue"],
    },
    {
      icon: Cpu,
      title: "Robotic Manipulator & Chassis Builders",
      description:
        "Equip your multi-axis arms, AMRs, and industrial delta robots with our VLA model runtime and dynamic Work Chips for dexterous manipulation.",
      benefits: ["ROS2 & C++ zero-copy APIs", "Sub-15ms closed-loop latency", "Swappable skill modules without retraining"],
    },
    {
      icon: Boxes,
      title: "Simulation & Digital Twin Platforms",
      description:
        "Partner with us to create verified physics environments, domain synthetic datasets, and world model simulation benchmarks.",
      benefits: ["USD & MuJoCo asset co-development", "Synthetic sensor benchmark validation", "Joint research publication opportunities"],
    },
  ];

  const integrationSteps = [
    {
      step: "01",
      title: "Hardware Interface Audit",
      desc: "Our engineers review your sensor suite (RGB-D, LiDAR, IMU) and motor communication bus (CAN, EtherCAT, ROS2).",
    },
    {
      step: "02",
      title: "Digital Twin Sandbox",
      desc: "We build a high-fidelity kinematic simulation of your machine to benchmark perception and policy control before touching physical metal.",
    },
    {
      step: "03",
      title: "On-Machine Edge Pilot",
      desc: "We deploy our ruggedized C++ runtime onto an onboard NPU or edge GPU, validating safety stops and closed-loop actuation in real field trials.",
    },
    {
      step: "04",
      title: "Commercial Fleet Rollout",
      desc: "Scale the software stack across production machine units with over-the-air Work Chip updates and enterprise telemetry.",
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-cream text-text-black">
      <Navbar />

      <PageHero
        label="BUILD WITH US"
        headline="We Build the Brain, Not the Machine. Partner With Us."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1920"
        alt="Engineers collaborating on industrial machinery and robotic automation"
      />

      {/* The Core Pitch */}
      <section className="py-20 px-6 md:px-24 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="section-label mb-6 text-gold after:bg-gold-rule">THE HARDWARE-AGNOSTIC PLEDGE</div>
          <h2 className="font-serif text-[32px] md:text-[44px] leading-tight mb-8">
            We Are Your Software Partner, Never Your Hardware Competitor
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-6">
            Building reliable tractors, robust hydraulic booms, and certified industrial robotic arms takes decades of mechanical engineering mastery. We respect that expertise. DPULSE AI never manufactures hardware or competes with machinery builders.
          </p>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed">
            Instead, we deliver the cognitive software brain that makes your existing machines intelligent. By decoupling machine learning from mechanical chassis design, we help OEMs bring autonomous Physical AI to market in months rather than years.
          </p>
        </div>
      </section>

      {/* Partner Profiles */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4 text-gold after:bg-gold-rule">COLLABORATION TRACKS</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-16">
            Who We Partner With
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTracks.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.title}
                  className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-gold mb-6 border border-border">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-serif text-[24px] text-text-black mb-4 leading-tight">
                      {track.title}
                    </h3>
                    <p className="font-sans text-text-mid text-[15px] leading-relaxed mb-8">
                      {track.description}
                    </p>
                  </div>

                  <ul className="space-y-3 pt-6 border-t border-border">
                    {track.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 font-sans text-[13px] text-text-dark">
                        <CheckCircle2 size={16} className="text-gold shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Integration Flow */}
      <section className="py-24 px-6 md:px-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4 text-gold after:bg-gold-rule">THE INTEGRATION PROCESS</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-16">
            A Disciplined Path to Hardware Deployment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step) => (
              <div key={step.step} className="p-8 rounded-xl bg-cream border border-border relative flex flex-col justify-between">
                <div>
                  <span className="font-serif text-[44px] text-gold/30 font-light block mb-2">{step.step}</span>
                  <h3 className="font-serif text-[20px] text-text-black mb-3">{step.title}</h3>
                  <p className="font-sans text-[14px] text-text-mid leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <span className="font-mono text-[11px] text-gold uppercase tracking-wider">Engineered Milestones</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Inquiry Form / CTA */}
      <section className="py-24 px-6 md:px-24 bg-cream text-center">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">INITIATE PARTNERSHIP</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
            Deploy Our Brain on Your Machines
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-10">
            Reach out to our platform integration engineering group to discuss sensor specifications, simulation testing, or scheduling an on-machine pilot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto text-center"
            >
              Submit Partner Inquiry
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
