"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slides = [
  {
    label: "ENTERPRISE AI & AUTOMATION",
    headline: "Pioneering Enterprise Intelligence for Organizations.",
    body: "Scalable AI-powered analytics, custom software engineering, and sovereign on-premise models transforming business operations.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=85&w=1920",
    href: "/enterprise-ai"
  },
  {
    label: "PHYSICAL AI · ROBOTICS BRAIN",
    headline: "Foundational VLM & VLA Models for Autonomous Robotics.",
    body: "Engineering the cognitive brain for physical robots with Vision-Language-Action models, real-time edge processing, and embodied intelligence.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=85&w=1920",
    href: "/physical-ai"
  },
  {
    label: "PHYSICAL AI · AGRICULTURE DOMAIN",
    headline: "Autonomous Field AI to Alleviate Agricultural Labor.",
    body: "Deploying Physical AI in agriculture to drastically reduce workforce demand, automate field operations, and optimize crop yields.",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=85&w=1920",
    href: "/agriculture"
  },
  {
    label: "TURNKEY AI PRODUCTS",
    headline: "From Healthcare Bots to ERMS & E-Estimate Platforms.",
    body: "Delivering production-grade AI applications across clinical assistance, retirement administration, and digital project estimation.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=85&w=1920",
    href: "/projects"
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-100px)] mt-[100px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <Image 
            src={slides[currentSlide].image}
            alt={slides[currentSlide].headline}
            fill
            priority={currentSlide === 0}
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute bottom-24 md:bottom-32 left-6 md:left-24 max-w-4xl z-10 pr-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="font-rajdhani font-bold text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-gold mb-4 md:mb-6 block">
                {slides[currentSlide].label}
              </span>
              <h1 className="font-serif font-light text-3xl md:text-[72px] leading-[1.1] mb-4 md:mb-6 text-white max-w-[90%] md:max-w-none">
                {slides[currentSlide].headline}
              </h1>
              <p className="font-sans text-sm md:text-[16px] mb-6 md:mb-8 max-w-xl text-white/80 line-clamp-3 md:line-clamp-none">
                {slides[currentSlide].body}
              </p>
              
              <Link href={slides[currentSlide].href} className="cta-circle group text-white w-10 h-10 md:w-12 md:h-12">
                <span className="text-lg md:text-xl group-hover:text-white">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Tab Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-black/20 backdrop-blur-sm border-t border-white/10 z-20">
        <div className="flex px-4 md:px-24 overflow-x-auto no-scrollbar">
          {[
            "ENTERPRISE AI",
            "PHYSICAL AI & ROBOTICS",
            "AGRICULTURE INNOVATION",
            "FLAGSHIP PRODUCTS",
          ].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "flex-1 min-w-[120px] md:min-w-0 py-4 md:py-6 text-[9px] md:text-[11px] font-rajdhani font-bold tracking-[0.2em] uppercase text-center transition-all relative",
                currentSlide === idx ? "text-white" : "text-white/50 hover:text-white"
              )}
            >
              <span className="truncate block px-2">{tab}</span>
              {currentSlide === idx && (
                <motion.div 
                  layoutId="activeHeroTab"
                  className="absolute bottom-0 left-0 w-full h-1 bg-gold"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
