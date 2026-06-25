import React from "react";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export default function CTASection({
  title = "Ready to Optimize Your Operations?",
  description = "Connect with our principal engineers for a comprehensive architecture review and performance assessment of your enterprise systems.",
  primaryCtaText = "Request Proposal",
  primaryCtaHref = "/consultation/request-proposal",
  secondaryCtaText = "Schedule Tech Review",
  secondaryCtaHref = "/contact",
  className = "",
}: CTASectionProps) {
  return (
    <section className={`w-full bg-secondary text-white py-huge px-4 md:px-margin-desktop text-center border-y border-primary relative overflow-hidden ${className}`}>
      {/* Structural visual lines to evoke Swiss grid style */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto flex flex-col gap-lg items-center relative z-10">
        <span className="font-sans text-[10px] uppercase tracking-widest bg-white text-secondary px-3 py-1 font-bold border border-white">
          Architectural Audit
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-tight">
          {title}
        </h2>
        <p className="font-sans text-md md:text-lg text-white/80 leading-relaxed max-w-2xl">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-md justify-center mt-md">
          <Link href={primaryCtaHref}>
            <button className="bg-primary text-white border border-primary px-[24px] py-[12px] font-sans text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-colors cursor-pointer font-bold">
              {primaryCtaText}
            </button>
          </Link>
          <Link href={secondaryCtaHref}>
            <button className="bg-transparent text-white border border-white px-[24px] py-[12px] font-sans text-xs uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer font-bold">
              {secondaryCtaText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
