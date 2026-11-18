"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Globe, Accessibility, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { siteConfig } from "@/content/site";

const CommandPalette = dynamic(() => import("./CommandPalette"), {
  ssr: false,
});

interface NavbarProps {
  darkMode?: boolean;
}

const Navbar = ({ darkMode = false }: NavbarProps) => {
  const pathname = usePathname();
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "ENTERPRISE AI", href: "/enterprise-ai" },
    { name: "PHYSICAL AI", href: "/physical-ai" },
    { name: "AGRICULTURE", href: "/agriculture" },
    { name: "RESEARCH", href: "/research" },
    { name: "PROJECTS", href: "/projects" },
    { name: "PLATFORM", href: "/platform" },
    { name: "COMPANY", href: "/about" },
  ];

  const companySubLinks = [
    { name: "About DPULSE AI", href: "/about", desc: "Corporate identity, history, and principles" },
    { name: "Work Chips Architecture", href: "/platform/work-chips", desc: "Modular robot skill adapters & router" },
    { name: "Partners & OEMs", href: "/partners", desc: "Build-with-us program for hardware makers" },
    { name: "Careers & Collaboration", href: "/careers", desc: "Open positions and research fellowship" },
  ];

  const platformSubLinks = [
    { name: "Platform Overview", href: "/platform", desc: "Hardware-agnostic runtime and integration SDKs" },
    { name: "Work Chips Engine", href: "/platform/work-chips", desc: "One brain, modular swappable skill adapters" },
    { name: "Applied Domains", href: "/applied-domains", desc: "Robotics, agriculture, healthcare, and SaaS" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* Top Utility Bar */}
      <div className="h-9 bg-[#141414] flex items-center justify-between px-6 md:px-12 text-[#AAAAAA] font-sans text-[12px] border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-white/90">DPULSE AI PRIVATE LIMITED</span>
          <span className="text-white/30">|</span>
          <span>Pune, India</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+919175790779" className="hidden sm:inline hover:text-white transition-colors">
            +91 91 75 79 0779
          </a>
          <a href="mailto:info@dpulseai.com" className="hover:text-white transition-colors">
            info@dpulseai.com
          </a>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <Globe size={13} />
            <span>EN</span>
          </button>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav
        className={cn(
          "h-16 border-b flex items-center justify-between px-6 md:px-12 relative transition-colors duration-300",
          darkMode ? "bg-[#060608]/90 backdrop-blur-md border-white/10" : "bg-white border-[#E0DDD6]"
        )}
      >
        {/* Left: Brand Wordmark */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gold rounded flex items-center justify-center text-white font-serif font-bold text-[18px]">
              D
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-serif font-bold text-[20px] leading-tight tracking-tight transition-colors",
                  darkMode ? "text-white" : "text-text-black group-hover:text-gold"
                )}
              >
                DPULSE AI
              </span>
              <span className="font-rajdhani text-[9px] font-bold tracking-[0.2em] text-gold -mt-0.5 uppercase">
                Physical AI & Enterprise
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden xl:flex items-center gap-7 h-full justify-center">
          {navLinks.map((link) => {
            const isCompany = link.name === "COMPANY";
            const isPlatform = link.name === "PLATFORM";

            return (
              <div
                key={link.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => {
                  if (isCompany) setIsCompanyOpen(true);
                  if (isPlatform) setIsPlatformOpen(true);
                }}
                onMouseLeave={() => {
                  if (isCompany) setIsCompanyOpen(false);
                  if (isPlatform) setIsPlatformOpen(false);
                }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "font-sans text-[13px] font-semibold tracking-wider transition-colors cursor-pointer h-full border-b-2 flex items-center gap-1",
                    pathname === link.href || (isCompany && (pathname?.startsWith("/about") || pathname?.startsWith("/partners") || pathname?.startsWith("/careers")))
                      ? "text-gold border-gold"
                      : darkMode
                      ? "text-white/70 border-transparent hover:text-white"
                      : "text-text-mid border-transparent hover:text-text-black"
                  )}
                >
                  {link.name}
                  {(isCompany || isPlatform) && <ChevronDown size={13} className="opacity-70" />}
                </Link>

                {/* Company Dropdown */}
                {isCompany && isCompanyOpen && (
                  <div className="absolute top-full right-0 w-[300px] bg-white border border-border shadow-xl p-4 animate-fade-up rounded-b-xl text-text-black">
                    <div className="flex flex-col gap-2">
                      {companySubLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="p-3 rounded-lg hover:bg-cream transition-colors group block"
                        >
                          <div className="font-serif text-[16px] text-text-black group-hover:text-gold transition-colors">
                            {item.name}
                          </div>
                          <div className="font-sans text-[12px] text-text-muted mt-0.5">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Platform Dropdown */}
                {isPlatform && isPlatformOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] bg-white border border-border shadow-xl p-4 animate-fade-up rounded-b-xl text-text-black">
                    <div className="flex flex-col gap-2">
                      {platformSubLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="p-3 rounded-lg hover:bg-cream transition-colors group block"
                        >
                          <div className="font-serif text-[16px] text-text-black group-hover:text-gold transition-colors">
                            {item.name}
                          </div>
                          <div className="font-sans text-[12px] text-text-muted mt-0.5">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Search + Pilot Request CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSearchOpen(true)}
            className={cn(
              "w-9 h-9 border rounded-full flex items-center justify-center transition-colors cursor-pointer group",
              darkMode ? "border-white/10 text-white hover:bg-white/5" : "border-[#E0DDD6] text-text-dark hover:bg-gray-light"
            )}
            aria-label="Search site"
          >
            <Search size={16} className="group-hover:text-gold transition-colors" />
          </button>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-gold hover:bg-gold-light text-white font-rajdhani font-bold text-[12px] tracking-widest uppercase rounded transition-colors shadow-sm"
          >
            <span>Request a Pilot</span>
            <ArrowRight size={13} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("xl:hidden p-2 transition-colors", darkMode ? "text-white" : "text-text-dark")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-[150] pt-24 px-8 xl:hidden text-text-black overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-xl font-serif border-b border-border pb-3",
                    pathname === link.href ? "text-gold font-bold" : "text-text-black"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-border flex flex-col gap-3 font-rajdhani text-[13px] tracking-wider uppercase text-text-muted">
                <Link href="/platform/work-chips" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold">
                  Work Chips Architecture →
                </Link>
                <Link href="/partners" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold">
                  Hardware Partners →
                </Link>
                <Link href="/research/literature" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold">
                  arXiv Research Literature →
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gold font-bold">
                  Request a Pilot →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Search Palette */}
      <CommandPalette open={isSearchOpen} setOpen={setIsSearchOpen} />
    </header>
  );
};

export default Navbar;
