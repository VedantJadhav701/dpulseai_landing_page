import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | DPULSE AI PRIVATE LIMITED",
  description: "Terms and conditions governing the use of DPULSE AI software platforms, models, and technical services.",
};

export default function TermsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        label="LEGAL TERMS"
        headline="Terms of Service"
        image="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1920"
        alt="Legal agreement and enterprise terms documentation"
      />

      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <div className="section-label mb-12">OPERATIONAL GOVERNANCE [TODO: LEGAL REVIEW]</div>
          <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-8">
            These Terms of Service govern your access to and use of software platforms, runtime libraries, models, and technical services provided by <strong>DPULSE AI PRIVATE LIMITED</strong> ("DPULSE AI", "we", "our").
          </p>

          <h2 className="font-serif text-[32px] text-text-black mt-12 mb-6">1. Nature of Services</h2>
          <p className="font-sans text-text-mid text-[16px] leading-relaxed mb-6">
            DPULSE AI is a pure software and machine learning intelligence enterprise. We provide software models, inference runtimes (including Work Chips), edge binaries, and cloud/on-premise APIs. DPULSE AI does not manufacture, assemble, or distribute physical hardware, machinery, or silicon chips. All hardware execution is carried out on client or partner equipment.
          </p>

          <h2 className="font-serif text-[32px] text-text-black mt-12 mb-6">2. Intellectual Property & Customer Data Sovereignty</h2>
          <p className="font-sans text-text-mid text-[16px] leading-relaxed mb-6">
            Clients retain 100% full, exclusive ownership of their proprietary datasets, operational records, and business workflows. Customer data provided for custom model fine-tuning or evaluation in sovereign tenant environments is never used to train public models or shared with third parties.
          </p>

          <h2 className="font-serif text-[32px] text-text-black mt-12 mb-6">3. Model Deployment & Operational Safety</h2>
          <p className="font-sans text-text-mid text-[16px] leading-relaxed mb-6">
            When deploying models for physical robotics, autonomous vehicles, or industrial actuation, partners are responsible for maintaining hardware safety interlocks, emergency stop switches, and compliance with applicable regional safety standards (such as ISO 13849 / ISO 25119 for agricultural machinery).
          </p>

          <h2 className="font-serif text-[32px] text-text-black mt-12 mb-6">4. Contact & Inquiries</h2>
          <p className="font-sans text-text-mid text-[16px] leading-relaxed">
            For contractual inquiries, legal notices, or enterprise master service agreements, contact our legal counsel at <a href="mailto:info@dpulseai.com" className="text-gold font-bold hover:underline">info@dpulseai.com</a> or mail our registered headquarters:
            <br /><br />
            <strong>DPULSE AI PRIVATE LIMITED</strong><br />
            Shubham Apt., Flat No. 6B, Sr. No. 23, Baner Gaon, Haveli, Pune - 411045, Maharashtra, India.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
