import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import CitationBlock from "@/components/CitationBlock";
import Link from "next/link";
import { notFound } from "next/navigation";
import { researchArticles } from "@/data/researchData";
import { ArrowLeft, Calendar, User, Tag, ShieldCheck, Mail, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return researchArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = researchArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Research Note Not Found | DPULSE AI" };

  return {
    title: `${article.title} | DPULSE AI Research`,
    description: article.summary,
  };
}

export default async function ResearchArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = researchArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // JSON-LD ScholarlyArticle
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: article.title,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    description: article.summary,
    publisher: {
      "@type": "Organization",
      name: "DPULSE AI PRIVATE LIMITED",
      logo: "https://dpulseai.com/logo.png",
    },
  };

  return (
    <main id="main-content" className="min-h-screen bg-cream text-text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <PageHero
        label="RESEARCH PUBLICATION"
        headline={article.title}
        image="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1920"
        alt="Scientific research and technical publication"
      />

      <article className="py-20 px-6 md:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/research"
            className="inline-flex items-center gap-2 font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:text-gold-light mb-12"
          >
            <ArrowLeft size={14} />
            <span>Back to Research Index</span>
          </Link>

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center gap-4 py-4 px-6 bg-white rounded-xl border border-border mb-12">
            <span className="font-mono text-[12px] font-bold bg-cream px-3 py-1 rounded border border-border text-gold uppercase">
              {article.version}
            </span>
            <div className="flex items-center gap-1.5 font-sans text-[13px] text-text-muted">
              <Calendar size={14} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5 font-sans text-[13px] text-text-muted">
              <User size={14} />
              <span>{article.author}</span>
            </div>
            {article.status === "needs-owner-review" && (
              <span className="font-mono text-[11px] bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded ml-auto">
                Status: Needs Review
              </span>
            )}
          </div>

          {/* Abstract / Summary */}
          <div className="p-8 rounded-2xl bg-white border border-border mb-12">
            <div className="font-rajdhani text-[11px] font-bold text-gold tracking-widest uppercase mb-3">ABSTRACT</div>
            <p className="font-serif text-[20px] md:text-[22px] text-text-black leading-relaxed font-normal">
              {article.summary}
            </p>
          </div>

          {/* Verified Results Metrics Table */}
          {article.results && article.results.length > 0 && (
            <div className="mb-14">
              <div className="section-label mb-6 text-gold after:bg-gold-rule">VERIFIED BENCHMARKS & TARGETS</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {article.results.map((res) => (
                  <div key={res.label} className="bg-white border border-border p-6 rounded-xl">
                    <div className="font-serif text-[32px] text-gold font-light mb-1">{res.value}</div>
                    <div className="font-rajdhani text-[11px] uppercase tracking-wider text-text-black font-semibold mb-2">
                      {res.label}
                    </div>
                    <div className="font-sans text-[13px] text-text-mid leading-relaxed">{res.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article Main Text Body */}
          <div className="bg-white border border-border p-8 md:p-12 rounded-2xl mb-14 prose prose-neutral max-w-none">
            <div className="whitespace-pre-line font-sans text-[16px] text-text-mid leading-relaxed space-y-6">
              {article.content}
            </div>
          </div>

          {/* Citation Block */}
          <div className="mb-14">
            <CitationBlock bibtex={article.citationBibtex} />
          </div>

          {/* Collaboration & Hiring Footer */}
          <div className="bg-white border border-border p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-[20px] text-text-black mb-1">Collaborate With DPULSE AI Research</h4>
              <p className="font-sans text-[14px] text-text-mid">
                Researchers and PhD candidates: reach out for joint experiments and open roles.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="mailto:info@dpulseai.com?subject=Research%20Collaboration"
                className="px-5 py-2.5 bg-cream border border-border hover:border-gold rounded font-rajdhani font-bold text-[11px] tracking-widest uppercase text-text-dark transition-colors inline-flex items-center gap-2"
              >
                <Mail size={14} />
                <span>Contact Research</span>
              </a>
              <Link href="/careers" className="btn-primary text-[11px] py-2.5 px-5">
                We Are Hiring →
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
