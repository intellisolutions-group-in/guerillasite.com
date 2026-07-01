import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#17184B] text-[#F0EEE9] pt-16 pb-8 px-4 md:px-margin-desktop border-t-8 border-[#D8E63C] relative overflow-hidden mt-auto select-none">

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Background Subtle Glowing Spheres (Theme Ambient Light) */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D8E63C]/10 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#D3DDE7]/10 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-xl md:gap-y-0 gap-x-gutter relative z-10">

        {/* Left Column (Brand Block) */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-md">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity duration-200">
            <Image
              src="/images/GuerillaSiteLogo-02.png"
              alt="GuerillaSite Logo"
              width={164}
              height={30}
              className="h-[30px] w-auto object-contain"
            />
          </Link>
          <p className="font-sans text-xs text-[#F0EEE9]/80 max-w-[280px] leading-relaxed mt-sm">
            High-performance systems engineering, cloud architecture optimization, and zero-trust security integrations.
          </p>


        </div>

        {/* Solutions Link Column */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-sm">
          <span className="font-display text-xs font-bold uppercase tracking-wider text-white mb-xs flex items-center gap-1.5 border-b-2 border-white/20 pb-1">
            Solutions
          </span>
          {[
            { label: "Strategic Consulting", href: "/services/it-consulting" },
            { label: "Cloud Architecture", href: "/services/cloud-infrastructure" },
            { label: "Cybersecurity", href: "/services/cybersecurity" }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-sans text-xs text-[#F0EEE9]/75 hover:text-[#D8E63C] transition-all hover:translate-x-1 duration-200"
            >
              {item.label}
            </Link>
          ))}
          {/* AI Solutions with visual dot */}
          <div className="flex items-center gap-2 group mt-0.5">
            <Link
              href="/services/ai-machine-learning"
              className="font-sans text-xs text-[#F0EEE9]/75 group-hover:text-[#D8E63C] transition-all group-hover:translate-x-1 duration-200"
            >
              AI Solutions
            </Link>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8E63C] animate-pulse"></span>
          </div>
        </div>

        {/* Industries Link Column */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-sm">
          <span className="font-display text-xs font-bold uppercase tracking-wider text-white mb-xs flex items-center gap-1.5 border-b-2 border-white/20 pb-1">
            Industries
          </span>
          {[
            { label: "Logistics & Supply Chain", href: "/industries/logistics" },
            { label: "Finance & FinTech", href: "/industries/fintech" },
            { label: "Healthcare Lakes", href: "/industries/healthcare" },
            { label: "Smart Manufacturing", href: "/industries/manufacturing" }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-sans text-xs text-[#F0EEE9]/75 hover:text-[#D8E63C] transition-all hover:translate-x-1 duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Corporate Link Column */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-sm">
          <span className="font-display text-xs font-bold uppercase tracking-wider text-white mb-xs flex items-center gap-1.5 border-b-2 border-white/20 pb-1">
            Corporate
          </span>
          {[
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Blogs & Case Studies", href: "/blog" },
            { label: "Privacy Policy", href: "/legal/privacy-policy" }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-sans text-xs text-[#F0EEE9]/75 hover:text-white transition-all hover:translate-x-1 duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Empty col spacer */}
        <div className="col-span-1 md:col-span-2" />

      </div>

      {/* Large Custom Brand Watermark and CTA Section */}
      <div className="w-full max-w-none px-0 mt-16 relative flex flex-col items-center justify-center overflow-visible">
        {/* Watermark with Outline / Stroke text style */}
        <div className="w-full text-center pointer-events-none select-none overflow-visible mb-6">
          <svg viewBox="0 0 900 130" className="w-full h-auto select-none pointer-events-none overflow-visible" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D8E63C" />
                <stop offset="50%" stopColor="#D8E63C" />
                <stop offset="100%" stopColor="#D3DDE7" />
              </linearGradient>
              {/* Fade mask to reduce opacity of the top 1/3 of text height to 25% */}
              <linearGradient id="fadeMask" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.25" />
                <stop offset="33%" stopColor="white" stopOpacity="0.25" />
                <stop offset="50%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
              <mask id="textMask">
                <rect x="0" y="0" width="900" height="130" fill="url(#fadeMask)" />
              </mask>
            </defs>
            <text
              x="50%"
              y="100"
              textAnchor="middle"
              textLength="860"
              lengthAdjust="spacingAndGlyphs"
              fill="none"
              stroke="url(#textGradient)"
              strokeWidth="2.5"
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 900,
                fontSize: "115px",
                textTransform: "uppercase"
              }}
            >
              GuerillaSite
            </text>
          </svg>
        </div>

        {/* Horizontal Line with Intersecting Briefing CTA Button */}
        <div className="w-full h-1 bg-[#D8E63C] relative mt-6 mb-8">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Link
              href="/contact"
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-[#17184B] border-2 border-[#17184B] shadow-[4px_4px_0px_#D8E63C] hover:shadow-[5px_5px_0px_#D8E63C] hover:translate-x-[-1px] hover:translate-y-[-1px] text-[10px] font-sans font-extrabold uppercase tracking-widest transition-all duration-300 group cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#17184B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake group-hover:scale-110 transition-transform duration-300">
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-5xl mx-auto border-t-2 border-white/20 pt-6 mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#D3DDE7]">
        <p className="text-center md:text-left font-sans font-bold">
          {"\u00A9"} 2012 - {new Date().getFullYear()} GuerillaSite. All rights reserved. Precision Enterprise Engineering.
        </p>
        <div className="flex items-center gap-6 font-bold">
          <div className="flex gap-4">
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/legal/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <Link
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border-2 border-[#17184B] bg-white text-[#17184B] shadow-[2px_2px_0px_#D8E63C] p-1.5 flex items-center justify-center hover:bg-[#D3DDE7] hover:translate-y-[-1px] transition-all"
            title="Sitemap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network w-3.5 h-3.5">
              <rect x="16" y="16" width="6" height="6" rx="1" />
              <rect x="2" y="16" width="6" height="6" rx="1" />
              <rect x="9" y="2" width="6" height="6" rx="1" />
              <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
              <path d="M12 12V8" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
