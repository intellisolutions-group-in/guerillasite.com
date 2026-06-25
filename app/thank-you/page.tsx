import React from "react";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <header className="w-full px-4 md:px-margin-desktop py-xl border-b border-[#17184B]/10 bg-surface/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="max-w-container-max mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity duration-200">
            <Image
              src="/images/GuerillaSiteLogo-01.png"
              alt="GuerillaSite Logo"
              width={164}
              height={30}
              className="h-[30px] w-auto object-contain"
              priority
            />
          </Link>
          <Link className="font-sans text-xs uppercase tracking-widest text-primary hover:text-secondary transition-colors flex items-center gap-sm font-bold bg-white/70 border border-[#17184B]/10 py-2 px-6 rounded-full shadow-sm hover:translate-y-[-1px]" href="/">
            <span className="material-symbols-outlined text-[18px]">close</span>
            Close
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center py-huge px-4 pb-huge bg-[#F0EEE9]">
        <div className="max-w-4xl w-full mx-auto text-center mb-huge animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary text-[#F0EEE9] mb-xl relative rounded-full shadow-[5px_5px_15px_rgba(23,24,75,0.2)]">
            <div className="absolute inset-2 border border-[#F0EEE9] opacity-35 rounded-full"></div>
            <span className="material-symbols-outlined text-display-lg" style={{fontVariationSettings: '"FILL" 1'}}>check</span>
          </div>
          <h1 className="gsap-hero-animate font-display text-4xl md:text-display-lg uppercase font-bold tracking-tighter text-primary mb-lg leading-tight">
            Submission Received.
          </h1>
          <h2 className="font-display text-lg font-semibold uppercase text-on-surface-variant">Your Infrastructure Audit is Underway.</h2>
        </div>

        <div className="max-w-container-max w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter mb-huge">
          <div className="md:col-span-7 card-neumorphic-exact p-xl md:p-xxl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-md mb-xl border-b border-[#17184B]/10 pb-md">
                <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '"FILL" 1'}}>calendar_today</span>
                <h3 className="font-sans text-xs uppercase tracking-widest text-primary font-bold">Next Steps Sequence</h3>
              </div>
              <p className="font-sans text-md text-on-surface mb-xl leading-relaxed">
                A senior systems engineer has been assigned to review your initial telemetry data. We are preparing a preliminary vulnerability matrix and architecture overview.
              </p>
            </div>
            <div className="bg-surface-container-low/50 border border-[#17184B]/10 p-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-lg rounded-[32px] shadow-sm">
              <div>
                <p className="font-sans text-[10px] text-on-surface-variant uppercase mb-sm font-bold">Action Required</p>
                <p className="font-sans text-sm text-primary font-bold">Schedule your 30-min strategy call</p>
              </div>
              <Link className="btn-accent flex-shrink-0" href="/contact">
                <span className="material-symbols-outlined text-[18px]">event</span>
                Book Calendar
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 card-neumorphic-exact p-xl md:p-xxl flex flex-col">
            <div className="flex items-center gap-md mb-xl border-b border-[#17184B]/10 pb-md">
              <span className="material-symbols-outlined text-primary">library_books</span>
              <h3 className="font-sans text-xs uppercase tracking-widest text-primary font-bold">While You Wait</h3>
            </div>
            <p className="font-sans text-sm text-on-surface-variant mb-xl leading-relaxed">
              Review how our engineering protocols have resolved critical systemic failures in high-availability environments.
            </p>
            <div className="flex flex-col gap-md flex-grow justify-end">
              <Link className="group block p-md border border-[#17184B]/10 hover:shadow-md bg-surface-container-lowest/60 rounded-2xl transition-all duration-300" href="/case-studies/fintech-analytics-platform">
                <div className="flex justify-between items-center mb-xs">
                  <span className="font-sans text-[10px] text-secondary uppercase tracking-widest font-bold">Case Study</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5">arrow_forward</span>
                </div>
                <span className="font-display text-sm text-primary font-bold uppercase block">Global FinTech Migration Protocol</span>
              </Link>
              <Link className="group block p-md border border-[#17184B]/10 hover:shadow-md bg-surface-container-lowest/60 rounded-2xl transition-all duration-300" href="/case-studies/healthcare-digital-platform">
                <div className="flex justify-between items-center mb-xs">
                  <span className="font-sans text-[10px] text-secondary uppercase tracking-widest font-bold">Case Study</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5">arrow_forward</span>
                </div>
                <span className="font-display text-sm text-primary font-bold uppercase block">Healthcare Cloud Compliance Framework</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-container-max w-full mx-auto border-t border-[#17184B]/10 pt-xl flex flex-col md:flex-row justify-between items-center gap-xl">
          <div className="text-center md:text-left">
            <p className="gsap-hero-animate font-sans text-xs uppercase tracking-widest text-on-surface-variant mb-sm font-bold">Need Immediate Intervention?</p>
            <p className="font-sans text-sm text-primary">Our Tier 3 support and sales architects are on standby.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-md w-full md:w-auto">
            <Link className="btn-ghost w-full sm:w-auto text-center" href="/contact">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              Request Support
            </Link>
            <Link className="btn-primary w-full sm:w-auto text-center" href="/contact">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Sales Inquiry
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

