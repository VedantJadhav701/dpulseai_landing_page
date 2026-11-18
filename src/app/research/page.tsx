import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { researchArticles } from "@/data/researchData";
import { literatureList } from "@/data/literatureData";
import { ArrowRight, BookOpen, FileText, ExternalLink, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Technical Publications | DPULSE AI",
  description: "Peer-reviewed research, architectural notes, and theoretical foundations for modular Vision-Language-Action models, robotics brains, and physical AI.",
};

export default function ResearchIndexPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream text-text-black">
      <Navbar />

      <PageHero
        label="TECHNICAL FRONTIERS"
        headline="Research, Architecture Notes & Theoretical Foundations"
        image="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1920"
        alt="Scientific laboratory and advanced machine intelligence research"
      />

      {/* Research Releases & Notes */}
      <section className="py-24 px-6 md:px-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="section-label mb-4 text-gold after:bg-gold-rule">ORIGINAL RESEARCH & DRAFTS</div>
              <h2 className="font-serif text-[36px] md:text-[48px] leading-tight">
                DPULSE AI Technical Releases
              </h2>
            </div>
            <Link
              href="/research/literature"
              className="inline-flex items-center gap-2 font-rajdhani font-bold text-[13px] tracking-widest uppercase text-gold hover:text-gold-light"
            >
              <BookOpen size={16} />
              <span>Browse arXiv Literature Index ({literatureList.length} Papers) →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {researchArticles.map((article) => (
              <div
                key={article.slug}
                className="bg-cream border border-border rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="font-mono text-[11px] font-bold bg-white px-3 py-1 rounded border border-border text-gold uppercase">
                    {article.version}
                  </span>
                  <span className="font-rajdhani text-[11px] uppercase tracking-wider text-text-muted">
                    {article.date} · {article.type}
                  </span>
                  {article.status === "needs-owner-review" && (
                    <span className="font-mono text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded">
                      Draft / Needs Review
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-[28px] md:text-[36px] text-text-black mb-4 leading-tight">
                  <Link href={`/research/${article.slug}`} className="hover:text-gold transition-colors">
                    {article.title}
                  </Link>
                </h3>

                <p className="font-sans text-text-mid text-[16px] leading-relaxed mb-8 max-w-4xl">
                  {article.summary}
                </p>

                {article.results && article.results.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-white p-6 rounded-xl border border-border">
                    {article.results.map((res) => (
                      <div key={res.label}>
                        <div className="font-serif text-[26px] text-text-black font-light mb-1">{res.value}</div>
                        <div className="font-rajdhani text-[11px] uppercase tracking-wider text-text-muted">{res.label}</div>
                        <div className="font-sans text-[12px] text-text-mid mt-1">{res.note}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {article.pillar.map((p) => (
                      <span key={p} className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-border text-text-mid">
                        {p}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/research/${article.slug}`}
                    className="font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:text-gold-light inline-flex items-center gap-1.5"
                  >
                    Read Technical Paper <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Literature Seed Highlight */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="max-w-2xl">
              <div className="section-label mb-4 text-gold after:bg-gold-rule">FOUNDATIONAL LITERATURE</div>
              <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
                Curated arXiv Reading List
              </h2>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed">
                We track and synthesize third-party peer-reviewed literature in skill-routed VLAs, continual learning, and generative world models that inform our Work Chips architecture.
              </p>
            </div>
            <Link
              href="/research/literature"
              className="btn-primary shrink-0"
            >
              View Full Reading List →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {literatureList.slice(0, 6).map((item) => (
              <div
                key={item.arxivId}
                className="bg-white border border-border p-8 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-gold font-bold">arXiv:{item.arxivId}</span>
                    <span className="font-rajdhani text-[11px] uppercase tracking-wider text-text-muted">{item.year}</span>
                  </div>
                  <h4 className="font-serif text-[20px] text-text-black mb-3 leading-snug">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors inline-flex items-center gap-1"
                    >
                      <span>{item.title}</span>
                      <ExternalLink size={12} className="text-text-muted shrink-0" />
                    </a>
                  </h4>
                  <p className="font-sans text-[14px] text-text-mid leading-relaxed mb-6">{item.summary}</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="font-rajdhani text-[11px] uppercase tracking-wider text-text-muted mb-1">Why It Matters</div>
                  <p className="font-sans text-[13px] text-text-dark font-medium leading-relaxed">{item.ourTake}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Callout */}
      <section className="py-24 px-6 md:px-24 bg-white border-t border-border text-center">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4 justify-center text-gold after:bg-gold-rule">ACADEMIC & LAB COLLABORATION</div>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight mb-6">
            Collaborate With Our Research Team
          </h2>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-10">
            We collaborate with academic research labs and independent roboticists working on Vision-Language-Action architectures, mixture-of-experts skill routing, and physical simulation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:info@dpulseai.com?subject=Research%20Collaboration" className="btn-primary w-full sm:w-auto text-center">
              Inquire for Research Collaboration
            </a>
            <Link
              href="/careers"
              className="px-8 py-3.5 border border-border hover:border-gold text-text-dark font-rajdhani font-bold text-[13px] tracking-widest uppercase rounded transition-colors w-full sm:w-auto text-center"
            >
              View Research Careers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
