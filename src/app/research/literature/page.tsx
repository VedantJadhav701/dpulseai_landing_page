"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { literatureList, LiteratureItem } from "@/data/literatureData";
import { BookOpen, ExternalLink, Filter, AlertCircle, ArrowLeft } from "lucide-react";

export default function LiteraturePage() {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const tags = [
    { id: "all", label: "All Papers" },
    { id: "skill-routing", label: "Skill Routing & MoE" },
    { id: "vla", label: "VLA Foundation Models" },
    { id: "world-models", label: "World Models & Simulation" },
    { id: "continual-learning", label: "Continual Learning" },
    { id: "foundations", label: "Foundations" },
  ];

  const filteredList =
    selectedTag === "all"
      ? literatureList
      : literatureList.filter((item) =>
          item.tags.includes(selectedTag as any)
        );

  return (
    <main id="main-content" className="min-h-screen bg-cream text-text-black">
      <Navbar />

      <PageHero
        label="RESEARCH REPOSITORY"
        headline="Foundational Literature: arXiv Reading List"
        image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1920"
        alt="Academic library and foundational scientific papers"
      />

      {/* Third Party Research Disclaimer Banner */}
      <section className="bg-white border-b border-border py-6 px-6 md:px-24">
        <div className="max-w-5xl mx-auto flex items-start gap-4 p-4 rounded-xl bg-cream border border-border">
          <AlertCircle size={20} className="text-gold shrink-0 mt-0.5" />
          <div className="font-sans text-[14px] text-text-mid leading-relaxed">
            <strong className="text-text-black font-semibold">Third-Party Research Notice:</strong> The publications listed on this page represent foundational peer-reviewed literature authored by independent research institutions. DPULSE AI maintains this annotated reading list to transparently ground our Work Chips and Physical AI research directions in established academic theory.
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            href="/research"
            className="inline-flex items-center gap-2 font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:text-gold-light mb-8"
          >
            <ArrowLeft size={14} />
            <span>Back to Research Releases</span>
          </Link>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-border">
            <span className="font-rajdhani text-[12px] font-bold tracking-widest uppercase text-text-muted mr-3 flex items-center gap-1.5">
              <Filter size={14} /> Filter By Domain:
            </span>
            {tags.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTag(t.id)}
                className={`px-4 py-2 rounded-full font-rajdhani text-[12px] font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                  selectedTag === t.id
                    ? "bg-gold text-white"
                    : "bg-white text-text-mid hover:bg-cream-dark border border-border"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredList.map((paper) => (
              <div
                key={paper.arxivId}
                className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[12px] text-gold font-bold">
                      arXiv:{paper.arxivId}
                    </span>
                    <span className="font-rajdhani text-[11px] uppercase tracking-wider text-text-muted px-2 py-0.5 rounded bg-cream border border-border">
                      Third-Party Research · {paper.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-[22px] md:text-[24px] text-text-black mb-3 leading-snug">
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{paper.title}</span>
                      <ExternalLink size={14} className="text-text-muted shrink-0" />
                    </a>
                  </h3>

                  <div className="font-sans text-[13px] text-text-muted mb-4">
                    Authors: {paper.authors}
                  </div>

                  <p className="font-sans text-text-mid text-[15px] leading-relaxed mb-6">
                    {paper.summary}
                  </p>
                </div>

                <div>
                  <div className="bg-cream p-4 rounded-xl border border-border mb-6">
                    <div className="font-rajdhani text-[11px] uppercase tracking-wider text-text-muted mb-1 font-semibold">
                      Why It Matters For DPULSE AI
                    </div>
                    <p className="font-sans text-[13px] text-text-dark font-medium leading-relaxed">
                      {paper.ourTake}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-1.5">
                      {paper.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] bg-cream px-2 py-0.5 rounded text-text-mid"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-rajdhani font-bold text-[11px] tracking-widest uppercase text-gold hover:underline inline-flex items-center gap-1"
                    >
                      View on arXiv <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredList.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-border">
              <p className="font-sans text-text-mid text-[16px]">No papers found for the selected tag.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
