import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsList } from "@/data/projectsData";
import { ArrowLeft, CheckCircle2, ShieldCheck, Server, Lightbulb, Wrench, AlertTriangle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsList.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsList.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found | DPULSE AI" };

  return {
    title: `${project.title} | Case Study | DPULSE AI`,
    description: project.oneLiner,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsList.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content" className="min-h-screen bg-cream text-text-black">
      <Navbar />

      <PageHero
        label="CASE STUDY"
        headline={project.title}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
        alt="Institutional engineering and technology case study"
      />

      <article className="py-20 px-6 md:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-rajdhani font-bold text-[12px] tracking-widest uppercase text-gold hover:text-gold-light mb-12"
          >
            <ArrowLeft size={14} />
            <span>Back to Case Studies & Projects</span>
          </Link>

          {/* Meta Overview Box */}
          <div className="bg-white border border-border p-8 rounded-2xl mb-12 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
              <div>
                <span className="font-rajdhani text-[11px] font-bold text-gold tracking-widest uppercase block mb-1">
                  CLIENT PROFILE (ANONYMIZED)
                </span>
                <span className="font-serif text-[22px] text-text-black">{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase bg-cream px-3 py-1 rounded border border-border text-text-dark">
                  Pillar: {project.pillar}
                </span>
                <span className="font-mono text-[11px] uppercase bg-cream px-3 py-1 rounded border border-border text-text-muted">
                  Status: {project.status}
                </span>
              </div>
            </div>

            <p className="font-sans text-text-dark text-[17px] leading-relaxed pt-6">
              {project.oneLiner}
            </p>
          </div>

          {/* Key Outcome Highlight Banner */}
          <div className="bg-white border-l-4 border-l-gold border-y border-r border-border p-8 rounded-xl mb-12 shadow-sm">
            <div className="font-rajdhani text-[11px] uppercase tracking-wider text-text-muted mb-2 font-bold">
              VERIFIED RESULT
            </div>
            <div className="font-serif text-[24px] md:text-[28px] text-text-black font-light leading-snug">
              "{project.results}"
            </div>
          </div>

          {/* Case Study Sections */}
          <div className="space-y-12 mb-16">
            {/* 1. Problem */}
            <div className="bg-white border border-border p-8 md:p-10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center text-gold border border-border">
                  <AlertTriangle size={18} />
                </div>
                <h3 className="font-serif text-[24px] text-text-black">1. The Problem</h3>
              </div>
              <p className="font-sans text-text-mid text-[16px] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* 2. Approach */}
            <div className="bg-white border border-border p-8 md:p-10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center text-gold border border-border">
                  <Wrench size={18} />
                </div>
                <h3 className="font-serif text-[24px] text-text-black">2. The Technical Approach</h3>
              </div>
              <p className="font-sans text-text-mid text-[16px] leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* 3. Tech Stack */}
            <div className="bg-white border border-border p-8 md:p-10 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center text-gold border border-border">
                  <Server size={18} />
                </div>
                <h3 className="font-serif text-[24px] text-text-black">3. Architecture & Model Stack</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[13px] bg-cream px-4 py-2 rounded-lg border border-border text-text-black font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Deployment */}
            <div className="bg-white border border-border p-8 md:p-10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center text-gold border border-border">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-serif text-[24px] text-text-black">4. Deployment & Infrastructure Security</h3>
              </div>
              <p className="font-sans text-text-mid text-[16px] leading-relaxed">
                {project.deployment}
              </p>
            </div>

            {/* 5. What We Learned */}
            <div className="bg-white border border-border p-8 md:p-10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center text-gold border border-border">
                  <Lightbulb size={18} />
                </div>
                <h3 className="font-serif text-[24px] text-text-black">5. What We Learned</h3>
              </div>
              <p className="font-sans text-text-mid text-[16px] leading-relaxed">
                {project.learnings}
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-white border border-border p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-[20px] text-text-black mb-1">
                Explore a Similar Implementation
              </h4>
              <p className="font-sans text-[14px] text-text-mid">
                Talk to our platform engineering team about deploying custom models for your organization.
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 text-center">
              Discuss Your Use Case →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
