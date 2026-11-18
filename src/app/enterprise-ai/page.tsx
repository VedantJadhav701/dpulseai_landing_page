import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { projectsList } from "@/data/projectsData";
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Database, Server, Zap, LineChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise AI | Custom LLMs & Domain SLMs | DPULSE AI",
  description: "Custom AI models built on your data, running in your environment. Secure, sovereign, and domain-specialized small language models and enterprise LLMs.",
};

export default function EnterpriseAIPage() {
  const enterpriseProjects = projectsList.filter((p) => p.pillar === "enterprise-ai");

  const offerings = [
    {
      icon: Cpu,
      title: "Custom LLMs",
      description:
        "Full-scale enterprise language models tailored to your proprietary knowledge base, institutional taxonomy, and compliance protocols.",
      bullets: ["Tailored to internal documentation", "Strict contextual governance", "Sovereign tenant isolation"],
    },
    {
      icon: Zap,
      title: "Domain-Specific SLMs (DSLMs)",
      description:
        "High-performance 3B to 8B parameter models optimized for specific corporate functions, reducing operational costs by over 90% compared to generalized cloud APIs.",
      bullets: ["Sub-second inference speeds", "Ultra-low compute footprint", "Deployable on standard CPU/GPU hardware"],
    },
    {
      icon: Database,
      title: "Fine-Tuning & Evaluation",
      description:
        "Curated domain dataset preparation, parameter-efficient fine-tuning (LoRA/QLoRA), and adversarial hallucination testing against custom benchmark suites.",
      bullets: ["Curated enterprise synthetic datasets", "Domain-specific safety guardrails", "Continuous automated regression testing"],
    },
    {
      icon: Server,
      title: "Deployment & Sovereignty",
      description:
        "Air-gapped on-premise infrastructure, isolated cloud clusters, or edge inference appliances. Zero data leakage to public third-party endpoints.",
      bullets: ["100% air-gapped on-premise capability", "Hardware-accelerated edge runtimes", "Comprehensive RBAC & audit logging"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Scope",
      description: "Audit enterprise workflows, data taxonomy, security prerequisites, and performance latency targets.",
    },
    {
      step: "02",
      title: "Data Preparation",
      description: "Extract, clean, anonymize, and synthesize domain corpora into high-quality instruction and preference datasets.",
    },
    {
      step: "03",
      title: "Model Training & Tuning",
      description: "Pre-training adaptation and targeted fine-tuning of domain-specific architectures with specialized vocabulary.",
    },
    {
      step: "04",
      title: "Rigorous Evaluation",
      description: "Adversarial red-teaming, domain benchmark evaluation, and strict zero-hallucination verification tests.",
    },
    {
      step: "05",
      title: "Deployment",
      description: "Seamless rollout into your air-gapped data center, sovereign cloud VPC, or edge appliance cluster.",
    },
    {
      step: "06",
      title: "Monitoring & Drift Guard",
      description: "Real-time latency tracking, token observability, and automated retraining pipelines for continuous accuracy.",
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-cream text-text-black">
      <Navbar />

      <PageHero
        label="ENTERPRISE INTELLIGENCE"
        headline="Custom AI Models Built on Your Data, Running in Your Environment"
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920"
        alt="Enterprise high-performance computing hardware and data architecture"
      />

      {/* Intro & Philosophy */}
      <section className="py-20 px-6 md:px-24 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="section-label mb-6 text-gold after:bg-gold-rule">THE SOVEREIGNTY ADVANTAGE</div>
          <h2 className="font-serif text-[32px] md:text-[44px] leading-tight mb-8">
            Why general-purpose public APIs fail in regulated enterprise environments.
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-6">
            Public consumer language models are trained for broad conversational fluency, not mission-critical operational precision. In high-stakes sectors—infrastructure auditing, legal administration, clinical documentation, and industrial logistics—organizations cannot afford hallucinated metrics, data transmission across public web APIs, or astronomical per-token query costs.
          </p>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed">
            DPULSE AI engineers sovereign, domain-specific models trained specifically on your operational nomenclature. By optimizing compact architectures (3B–8B parameters), we deliver higher accuracy on specialized tasks while enabling local, air-gapped deployment with zero external network dependencies.
          </p>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4 text-gold after:bg-gold-rule">CAPABILITIES</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-16">
            Engineered for Production Reliability
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-border p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-gold mb-6 border border-border">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-serif text-[26px] mb-4 text-text-black">{item.title}</h3>
                    <p className="font-sans text-text-mid text-[16px] leading-relaxed mb-8">{item.description}</p>
                  </div>
                  <ul className="space-y-3 pt-6 border-t border-border">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 font-sans text-[14px] text-text-dark">
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

      {/* Process Timeline */}
      <section className="py-24 px-6 md:px-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4 text-gold after:bg-gold-rule">SYSTEMATIC METHODOLOGY</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-16">
            From Raw Domain Records to Sovereign Deployment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="p-8 rounded-xl bg-cream border border-border relative">
                <span className="font-serif text-[48px] text-gold/30 font-light block mb-2">{step.step}</span>
                <h3 className="font-serif text-[22px] text-text-black mb-3">{step.title}</h3>
                <p className="font-sans text-[15px] text-text-mid leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Case Studies */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4 text-gold after:bg-gold-rule">PROVEN TRACK RECORD</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-16">
            Selected Enterprise AI Implementations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseProjects.slice(0, 4).map((project) => (
              <div
                key={project.slug}
                className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-rajdhani text-[11px] font-bold tracking-widest text-gold uppercase">
                      {project.client}
                    </span>
                    <span className="font-rajdhani text-[11px] tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-cream-dark border border-border text-text-muted">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-[24px] text-text-black mb-4">{project.title}</h3>
                  <p className="font-sans text-[15px] text-text-mid leading-relaxed mb-6">{project.oneLiner}</p>

                  <div className="bg-cream p-4 rounded-lg border border-border mb-6">
                    <div className="font-rajdhani text-[11px] uppercase tracking-wider text-text-muted mb-1">
                      Verified Result
                    </div>
                    <div className="font-sans text-[14px] font-medium text-text-dark">{project.results}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 2).map((s) => (
                      <span key={s} className="font-mono text-[11px] bg-cream-dark px-2 py-0.5 rounded text-text-mid">
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:text-gold-light inline-flex items-center gap-1.5"
                  >
                    Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-rajdhani font-bold text-[13px] tracking-widest uppercase text-gold hover:underline"
            >
              View all delivered enterprise & government projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-24 bg-white border-t border-border text-center">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">INITIATE DISCOVERY</div>
          <h2 className="font-serif text-[38px] md:text-[52px] leading-tight mb-6">
            Ready to Build Sovereign Intelligence for Your Organization?
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-10">
            Schedule a technical consultation to review your proprietary data taxonomy, air-gapped infrastructure specifications, and domain fine-tuning requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto text-center"
            >
              Discuss Your Enterprise Use Case
            </Link>
            <Link
              href="/book-call"
              className="px-8 py-3.5 border border-border hover:border-gold text-text-dark font-rajdhani font-bold text-[13px] tracking-widest uppercase rounded transition-colors w-full sm:w-auto text-center"
            >
              Book Technical Briefing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
