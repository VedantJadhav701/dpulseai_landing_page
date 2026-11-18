import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import ProofStrip from "@/components/ProofStrip";
import StackDiagram from "@/components/StackDiagram";
import WorkChipsDiagram from "@/components/WorkChipsDiagram";
import CompanyVideo from "@/components/video/CompanyVideo";
import Discover from "@/sections/Discover";
import Believe from "@/sections/Believe";
import Stats from "@/sections/Stats";
import RoboticsBrain from "@/sections/RoboticsBrain";
import PhysicalAgri from "@/sections/PhysicalAgri";
import FlagshipProducts from "@/sections/FlagshipProducts";
import Solutions from "@/sections/Solutions";
import Industries from "@/sections/Industries";
import Process from "@/sections/Process";
import Differentiators from "@/sections/Differentiators";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/sections/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Navigation & Hero */}
      <Navbar darkMode={false} />
      <Hero />

      {/* 2. Owner-Supplied Proof Strip (Track Record) */}
      <ProofStrip />

      {/* 3. One-Stack Architecture Continuum */}
      <section className="py-24 px-6 md:px-24 bg-cream border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">UNIFIED ARCHITECTURE</div>
            <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-4">
              One Pipeline: From Enterprise Data to Physical Action
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-relaxed">
              We build the intelligence, not the machines. A continuous software stack connecting private enterprise data, domain language models, world simulation, and closed-loop robot control.
            </p>
          </div>

          <StackDiagram />
        </div>
      </section>

      {/* 4. Discover DPULSE AI (Five Pillars) */}
      <div id="discover">
        <Discover />
      </div>

      {/* 5. Work Chips Architecture Highlight */}
      <section className="py-24 px-6 md:px-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="max-w-2xl">
              <div className="section-label mb-4 text-gold after:bg-gold-rule">ROBOTICS BRAIN INNOVATION</div>
              <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-4">
                Work Chips: One Brain, Many Skills
              </h2>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed">
                A Work Chip is a specialized software skill module for one job. An intelligent router selects the right chip on the fly, eliminating catastrophic forgetting and making physical robots modular.
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

      {/* 6. Company Film Section */}
      <section className="py-24 bg-cream px-6 md:px-24 border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="section-label mb-8 text-gold after:bg-gold-rule">COMPANY FILM</div>
            <h2 className="font-serif text-[42px] md:text-[52px] leading-tight text-text-black mb-8">
              See What We're Building.
            </h2>
            <p className="font-sans text-text-mid text-[18px] leading-relaxed mb-10 max-w-xl">
              A look at DPULSE AI—our mission, our physical AI and robotics brain innovations, and the autonomous agricultural intelligence we're deploying in India.
            </p>
            <Link
              href="/video"
              className="inline-flex items-center gap-4 text-gold font-rajdhani font-bold tracking-[0.2em] text-[13px] uppercase group border border-gold px-8 py-4 rounded-full hover:bg-gold hover:text-white transition-all"
            >
              Watch Full Film
              <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                →
              </div>
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <CompanyVideo />
          </div>
        </div>
      </section>

      {/* 7. What We Believe */}
      <Believe />

      {/* 8. Stats */}
      <Stats />

      {/* 9. Physical AI & Robotics Brain (VLM/VLA) */}
      <div id="robotics-brain">
        <RoboticsBrain />
      </div>

      {/* 10. Flagship Agriculture Physical AI */}
      <div id="agriculture-physical-ai">
        <PhysicalAgri />
      </div>

      {/* 11. Turnkey AI Products */}
      <div id="products">
        <FlagshipProducts />
      </div>

      {/* 12. Capabilities & Solutions */}
      <div id="solutions">
        <Solutions />
      </div>

      {/* 13. Industries */}
      <div id="industries">
        <Industries />
      </div>

      {/* 14. Our Process */}
      <div id="process">
        <Process />
      </div>

      {/* 15. Why DPULSE AI (Differentiators) */}
      <Differentiators />

      {/* 16. Final CTA (3 Collaboration Tracks) & Footer */}
      <FinalCTA />
      <Footer />
    </main>
  );
}
