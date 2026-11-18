"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/content/site";

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#AAAAAA] pt-24 pb-12 border-t border-gold">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Col 1: Brand */}
          <div className="flex flex-col lg:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <div className="font-serif font-bold text-[24px] text-white leading-tight">DPULSE AI</div>
              <div className="font-rajdhani text-[11px] font-bold tracking-[0.2em] text-gold -mt-1 uppercase">Physical AI Startup</div>
            </Link>
            <p className="font-sans text-[13px] leading-relaxed mb-6">
              We build the intelligence, not the machines. Custom AI models for organizations, and a hardware-agnostic brain for physical AI.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Link href="/physical-ai" className="bg-[#1B5FA8]/20 text-[#60A5FA] px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase hover:bg-[#1B5FA8]/30 transition-colors">PHYSICAL AI</Link>
              <Link href="/agriculture" className="bg-[#1A7A6E]/20 text-[#34D399] px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase hover:bg-[#1A7A6E]/30 transition-colors">AGRICULTURE</Link>
              <Link href="/platform/work-chips" className="bg-gold/20 text-gold px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase hover:bg-gold/30 transition-colors">WORK CHIPS</Link>
            </div>
          </div>

          {/* Col 2: Core Focus */}
          <div>
            <h4 className="font-rajdhani font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-8">CORE PILLARS</h4>
            <ul className="space-y-4 font-sans text-[14px]">
              <li><Link href="/enterprise-ai" className="hover:text-white transition-colors">Enterprise AI (LLMs & DSLMs)</Link></li>
              <li><Link href="/physical-ai" className="hover:text-white transition-colors">Physical AI & Robotics Brain</Link></li>
              <li><Link href="/agriculture" className="hover:text-white transition-colors">Agriculture Field Innovation</Link></li>
              <li><Link href="/platform" className="hover:text-white transition-colors">Platform Architecture</Link></li>
              <li><Link href="/platform/work-chips" className="hover:text-white transition-colors">Work Chips & Router</Link></li>
              <li><Link href="/partners" className="hover:text-white transition-colors">Hardware Partners</Link></li>
            </ul>
          </div>

          {/* Col 3: Research & Projects */}
          <div>
            <h4 className="font-rajdhani font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-8">RESEARCH & WORK</h4>
            <ul className="space-y-4 font-sans text-[14px]">
              <li><Link href="/research" className="hover:text-white transition-colors">Research Releases</Link></li>
              <li><Link href="/research/literature" className="hover:text-white transition-colors">arXiv Reading List</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Client Projects (8 delivered)</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Government Projects (2 delivered)</Link></li>
              <li><Link href="/projects?tab=products" className="hover:text-white transition-colors">Products & Platforms (20+)</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers & Collaborations</Link></li>
            </ul>
          </div>

          {/* Col 4: Trust & Legal */}
          <div>
            <h4 className="font-rajdhani font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-8">GOVERNANCE</h4>
            <ul className="space-y-4 font-sans text-[14px]">
              <li><Link href="/about" className="hover:text-white transition-colors">About the Company</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Data Sovereignty & Air-Gap</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
            </ul>
          </div>

          {/* Col 5: Exact Corporate Identity */}
          <div>
            <h4 className="font-rajdhani font-bold text-[11px] text-white tracking-[0.2em] uppercase mb-8">CORPORATE CONTACT</h4>
            <div className="space-y-4 font-sans text-[13px] leading-relaxed">
              <div className="text-white font-medium">{siteConfig.legalName}</div>
              
              <div className="flex items-start gap-2.5 text-xs text-[#AAAAAA]">
                <MapPin size={14} className="mt-0.5 text-gold flex-shrink-0" />
                <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {siteConfig.address.street}, {siteConfig.address.city} - {siteConfig.address.postalCode}, {siteConfig.address.state}, {siteConfig.address.country}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#AAAAAA]">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-medium">
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#AAAAAA]">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <div>
                  <a href={`mailto:${siteConfig.email.general}`} className="hover:text-white transition-colors block">
                    {siteConfig.email.general}
                  </a>
                  <a href={`mailto:${siteConfig.email.support}`} className="hover:text-white transition-colors block text-[11px] text-[#888880]">
                    Support: {siteConfig.email.support}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#888880] pt-1">
                <Clock size={14} className="flex-shrink-0" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[12px]">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. Software only — hardware-agnostic physical AI.
          </p>
          <div className="flex items-center gap-6">
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><LinkedInIcon /></a>
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors"><GithubIcon /></a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-white transition-colors"><TwitterIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
