"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import ProofStrip from "@/components/ProofStrip";
import Link from "next/link";
import { projectsList, productsList } from "@/data/projectsData";
import { ArrowRight, CheckCircle2, ShieldCheck, Box, Layers, Building2 } from "lucide-react";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"projects" | "products">("projects");

  return (
    <main id="main-content" className="min-h-screen bg-cream text-text-black">
      <Navbar />

      <PageHero
        label="PORTFOLIO & TRACK RECORD"
        headline="Delivered Implementations & AI Platforms"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
        alt="Modern enterprise architecture and corporate institutional scale"
      />

      {/* Verified Proof Strip */}
      <ProofStrip />

      <section className="py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Tab Selector */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-white border border-border rounded-xl shadow-sm">
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-8 py-3 rounded-lg font-rajdhani text-[13px] font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "projects"
                    ? "bg-gold text-white shadow-sm"
                    : "text-text-mid hover:text-text-black"
                }`}
              >
                <Building2 size={16} />
                <span>Case Studies ({projectsList.length} Projects)</span>
              </button>
              <button
                onClick={() => setActiveTab("products")}
                className={`px-8 py-3 rounded-lg font-rajdhani text-[13px] font-bold tracking-widest uppercase transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "products"
                    ? "bg-gold text-white shadow-sm"
                    : "text-text-mid hover:text-text-black"
                }`}
              >
                <Box size={16} />
                <span>Products & Platforms ({productsList.length}+ Systems)</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Case Studies */}
          {activeTab === "projects" && (
            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">VERIFIED DELIVERIES</div>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight mb-4">
                  Government & Enterprise Case Studies
                </h2>
                <p className="font-sans text-text-mid text-[16px] leading-relaxed">
                  2 government departments and 8 enterprise clients delivered. Institutional clients are anonymized per non-disclosure covenants.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsList.map((project) => (
                  <div
                    key={project.slug}
                    className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-rajdhani text-[11px] font-bold tracking-widest text-gold uppercase">
                          {project.client}
                        </span>
                        <span className="font-rajdhani text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full bg-cream border border-border text-text-muted">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="font-serif text-[24px] md:text-[26px] text-text-black mb-3 leading-snug">
                        <Link href={`/projects/${project.slug}`} className="hover:text-gold transition-colors">
                          {project.title}
                        </Link>
                      </h3>

                      <p className="font-sans text-text-mid text-[15px] leading-relaxed mb-6">
                        {project.oneLiner}
                      </p>

                      <div className="bg-cream p-5 rounded-xl border border-border mb-6">
                        <div className="font-rajdhani text-[11px] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                          Verified Outcome
                        </div>
                        <div className="font-sans text-[14px] font-medium text-text-dark">
                          {project.results}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="font-mono text-[11px] bg-cream px-2 py-0.5 rounded border border-border text-text-mid"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="font-mono text-[11px] text-text-muted">
                          Deployment: {project.deployment.split(" ")[0]}...
                        </span>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:text-gold-light inline-flex items-center gap-1.5"
                        >
                          View Full Case Study <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Products & Platforms */}
          {activeTab === "products" && (
            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">PROPRIETARY SOFTWARE</div>
                <h2 className="font-serif text-[36px] md:text-[46px] leading-tight mb-4">
                  Proprietary AI Products & Platforms
                </h2>
                <p className="font-sans text-text-mid text-[16px] leading-relaxed">
                  Over 20+ specialized AI products engineered across physical robotics, enterprise resource management, clinical intelligence, and sovereign automated workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsList.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-rajdhani text-[11px] font-bold tracking-widest text-gold uppercase">
                          {product.pillar}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-cream border border-border text-text-muted">
                          {product.status}
                        </span>
                      </div>

                      <h3 className="font-serif text-[22px] text-text-black mb-3">
                        {product.name}
                      </h3>

                      <p className="font-sans text-text-mid text-[14px] leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {product.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 font-sans text-[13px] text-text-dark">
                            <CheckCircle2 size={14} className="text-gold shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border font-mono text-[11px] text-text-muted">
                      Specs: {product.specs}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-24 bg-white border-t border-border text-center">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">START A PROJECT</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
            Deploy Proven Intelligence for Your Organization
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-10">
            Whether you require an air-gapped sovereign enterprise SLM or hardware-agnostic physical AI models, our engineering team is ready to review your requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
              Request a Technical Scoping Call
            </Link>
            <Link
              href="/book-call"
              className="px-8 py-3.5 border border-border hover:border-gold text-text-dark font-rajdhani font-bold text-[13px] tracking-widest uppercase rounded transition-colors w-full sm:w-auto text-center"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
