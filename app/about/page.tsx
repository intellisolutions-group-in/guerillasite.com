"use client";

import React from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Page() {
  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    const rotX = -normalizedY * 6; // Max 6 degrees tilt
    const rotY = normalizedX * 6;
    
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.01, 1.01, 1.01)`;
    card.style.transition = "transform 0.1s ease-out, box-shadow 0.3s ease";
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease";
  };

  return (
    <>
      <TopNavBar active="About" />
      <main className="flex-grow flex flex-col items-center w-full gap-xl pb-huge bg-[#F0EEE9] overflow-hidden">
        
        {/* Hero Section */}
        <section className="w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile pt-28 pb-12 md:pt-36 md:pb-20 relative overflow-hidden">
          {/* Soft pulsing decorative ambient background halos */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D8E63C]/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse duration-[10000ms] -z-10"></div>
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#D3DDE7]/25 rounded-full filter blur-[90px] pointer-events-none -z-10"></div>
          
          <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter items-center z-10 relative">
            <div className="col-span-12 md:col-span-8 flex flex-col justify-center animate-in fade-in slide-in-from-left duration-700">
              <p className="gsap-hero-animate font-label-sm text-label-sm text-on-surface-variant mb-md">Our Purpose</p>
              <h1 className="gsap-hero-animate font-display text-4xl md:text-5xl lg:text-display-lg uppercase font-extrabold tracking-tight text-primary mb-lg leading-tight">
                Engineering Reliability <br /> at Enterprise Scale.
              </h1>
              <p className="gsap-hero-animate font-sans text-body-md md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We don't just solve problems; we architect resilient systems. GuerillaSite exists to bridge the gap between complex technical debt and streamlined, future-proof operational excellence.
              </p>
            </div>
            
            <div className="col-span-12 md:col-span-4 flex items-end justify-end mt-xl md:mt-0 animate-in fade-in slide-in-from-right duration-700 w-full">
              <div 
                className="gsap-stagger-item border border-neutral-200/50 bg-white/70 backdrop-blur-md p-lg w-full relative rounded-[32px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden text-primary cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                {/* Soft decorative glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D8E63C]/30 to-transparent rounded-full filter blur-xl pointer-events-none"></div>
                
                <div className="flex flex-col gap-md relative z-10">
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Founded</p>
                    <p className="font-display text-3xl font-extrabold text-primary">2012</p>
                  </div>
                  <div className="h-[1px] bg-neutral-200/40 w-full"></div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Global Reach</p>
                    <p className="font-display text-3xl font-extrabold text-primary">42 Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile py-12 relative z-10">
          <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div 
              className="gsap-stagger-item flex flex-col gap-md border border-neutral-200/50 bg-white/70 backdrop-blur-md p-xl rounded-[32px] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary bg-[#D8E63C]/20 border border-[#D8E63C]/30 p-2.5 rounded-full flex items-center justify-center w-11 h-11 shadow-sm">flag</span>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-primary">Mission</h2>
              </div>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                To eliminate digital friction through precise, uncompromising engineering. We empower enterprises to operate with absolute confidence by delivering robust, scalable infrastructure and support ecosystems.
              </p>
            </div>
            
            <div 
              className="gsap-stagger-item flex flex-col gap-md border border-neutral-200/50 bg-white/70 backdrop-blur-md p-xl rounded-[32px] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary bg-[#D3DDE7]/35 border border-[#D3DDE7]/50 p-2.5 rounded-full flex items-center justify-center w-11 h-11 shadow-sm">visibility</span>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-primary">Vision</h2>
              </div>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                A technological landscape where operational downtime is obsolete, and enterprise software functions as a silent, flawless engine of continuous growth.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile py-xl md:py-xxl border border-neutral-200/40 bg-white/40 backdrop-blur-sm rounded-[48px] shadow-sm my-lg">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-primary mb-xl px-margin-mobile md:px-lg">Core Engineering Values</h2>
          
          <div className="gsap-stagger-container grid grid-cols-12 gap-gutter p-sm md:p-md auto-rows-[250px]">
            <div 
              className="col-span-12 md:col-span-8 border border-neutral-200/50 p-xl flex flex-col justify-between bg-white/80 backdrop-blur-sm text-primary rounded-[32px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="material-symbols-outlined text-primary bg-secondary/20 border border-secondary/30 p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm text-2xl group-hover:scale-105 transition-transform">architecture</span>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-primary mb-xs">Structural Integrity</h3>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">We build foundations that do not crumble under load. Every solution is architected for maximum fault tolerance.</p>
               </div>
            </div>

            <div 
              className="col-span-12 md:col-span-4 border border-neutral-200/50 p-xl flex flex-col justify-between bg-white/80 backdrop-blur-sm text-primary rounded-[32px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="material-symbols-outlined text-primary bg-[#D3DDE7]/35 border border-[#D3DDE7]/50 p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm text-2xl group-hover:scale-105 transition-transform">speed</span>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-primary mb-xs">Velocity</h3>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">Speed without friction. Rapid deployment paired with rigorous testing.</p>
              </div>
            </div>

            <div 
              className="col-span-12 md:col-span-4 border border-neutral-200/50 p-xl flex flex-col justify-between bg-white/80 backdrop-blur-sm text-primary rounded-[32px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="material-symbols-outlined text-primary bg-[#D3DDE7]/35 border border-[#D3DDE7]/50 p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm text-2xl group-hover:scale-105 transition-transform">security</span>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-primary mb-xs">Zero Trust</h3>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">Security is not a feature; it is the baseline of our architecture.</p>
              </div>
            </div>

            <div 
              className="col-span-12 md:col-span-8 border border-neutral-200/50 p-xl flex flex-col justify-between bg-white/80 backdrop-blur-sm text-primary rounded-[32px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
              <span className="material-symbols-outlined text-primary bg-secondary/20 border border-secondary/30 p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-sm text-2xl relative z-10 group-hover:scale-105 transition-transform">analytics</span>
              <div className="relative z-10">
                <h3 className="font-display text-xl font-bold uppercase text-primary mb-xs">Data Determinism</h3>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">Decisions driven by hard metrics, not intuition. We measure everything to improve continuously.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Milestones Timeline */}
        <section className="w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile py-16 relative">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-tr from-[#D8E63C]/5 to-[#D8E63C]/5 rounded-full filter blur-xl pointer-events-none z-0"></div>
          
          <div className="max-w-3xl mb-xxl gsap-slide-up relative z-10">
            <span className="font-label-sm text-label-sm text-on-surface-variant block mb-sm">03 // Our History</span>
            <h2 className="font-display text-3xl font-extrabold uppercase text-primary tracking-tight">Engineering Milestones</h2>
            <p className="font-sans text-body-md text-on-surface-variant mt-xs">Over a decade of constructing deterministic systems, scaling infrastructure, and establishing global engineering nodes.</p>
          </div>

          <div className="relative border-l-[3px] border-neutral-200/60 ml-4 md:ml-8 pl-8 md:pl-12 py-4 space-y-xl z-10">
            {[
              { year: "2012", title: "Systems Foundation", desc: "GuerillaSite is established, specializing in high-availability UNIX server clustering and redundant datacenter design.", icon: "home" },
              { year: "2015", title: "DevOps & Cloud Acceleration", desc: "Expanded DevOps operations. Built our first Kubernetes cluster automation systems and type-safe API gateways for logistics clients.", icon: "cloud_done" },
              { year: "2018", title: "IIoT Twin Division", desc: "Launched predictive telemetry pipelines for heavy manufacturing plants, syncing over 50,000 active Edge nodes to dynamic timeseries databases.", icon: "precision_manufacturing" },
              { year: "2024", title: "Active-Active Global Scale", desc: "Deployed synchronous multi-region, zero-data-loss databases across our network, running under sub-45ms SLA response bounds.", icon: "public" }
            ].map((milestone, idx) => (
              <div key={idx} className="relative group gsap-slide-up">
                <span className="absolute -left-[53px] md:-left-[70px] top-3 w-10 h-10 rounded-full bg-white border border-neutral-200/50 shadow-md flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-primary transition-all duration-300 z-10">
                  <span className="material-symbols-outlined text-[18px]">{milestone.icon}</span>
                </span>
                
                <div 
                  className="border border-neutral-200/50 bg-white/70 backdrop-blur-sm p-lg rounded-[28px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <span className="font-mono text-xs uppercase tracking-widest font-bold text-secondary bg-primary px-3 py-1 rounded-full w-fit block mb-sm shadow-sm">
                    {milestone.year}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-primary mb-xs">{milestone.title}</h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed max-w-3xl">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section Card Island */}
        <section className="mx-4 md:mx-margin-desktop max-w-container-max md:w-[calc(100%-128px)] bg-primary text-[#F0EEE9] text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-xl p-lg md:p-[64px] rounded-[32px] md:rounded-[48px] shadow-xl hover:shadow-2xl my-huge relative overflow-hidden self-center border border-white/5 transition-all duration-500">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-[#D8E63C]/15 to-[#D8E63C]/5 rounded-full filter blur-[80px] pointer-events-none" />
          
          <div className="max-w-2xl relative z-10 gsap-slide-up flex flex-col gap-sm">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight leading-tight text-white">Ready to re-architect your operations?</h2>
            <p className="font-sans text-body-md text-neutral-300">Engage with our senior engineering team to discuss your infrastructure challenges.</p>
          </div>
          
          <div className="relative z-10 whitespace-nowrap shrink-0 gsap-scale-in">
            <Link href="/contact" className="bg-secondary text-primary px-8 py-4 font-sans text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-primary shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 font-bold w-fit">
              Schedule Assessment
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
