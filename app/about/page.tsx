"use client";

import React, { useEffect } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the vertical timeline line height
      gsap.fromTo(
        ".timeline-progress-line",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        }
      );

      // Animate each milestone row as it enters the viewport
      const items = document.querySelectorAll(".timeline-item");
      items.forEach((item) => {
        const yearTags = item.querySelectorAll(".timeline-year");
        const iconCircle = item.querySelector(".timeline-icon-circle");
        const card = item.querySelector(".timeline-card");

        if (yearTags.length > 0 && iconCircle && card) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });

          tl.fromTo(
            yearTags,
            { scale: 0.3, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.5)",
            }
          )
          .fromTo(
            iconCircle,
            { scale: 0, rotation: -60 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "back.out(1.5)",
            },
            "<"
          )
          .fromTo(
            card,
            { x: 30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.3"
          );
        }
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <TopNavBar active="About" />
      <main className="flex-grow flex flex-col items-center w-full gap-xl pb-huge bg-[#F0EEE9] overflow-hidden">
        
        {/* Hero Section */}
        <section className="w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile pt-28 pb-12 md:pt-36 md:pb-20 relative overflow-hidden">
          {/* Soft pulsing decorative ambient background halos */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D8E63C]/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse duration-[10000ms] -z-10"></div>
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#D3DDE7]/25 rounded-full filter blur-[90px] pointer-events-none -z-10"></div>
          
          <div className="about-hero-container grid grid-cols-1 lg:grid-cols-12 gap-huge items-center z-10 relative">
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center animate-in fade-in slide-in-from-left duration-700">
              <p className="gsap-hero-animate font-label-sm text-label-sm text-on-surface-variant mb-md">Our Purpose</p>
              <h1 className="gsap-hero-animate font-display text-4xl md:text-5xl lg:text-display-lg uppercase font-extrabold tracking-tight text-primary mb-lg leading-[1.05]">
                Engineering Reliability <br /> at Enterprise Scale.
              </h1>
              <p className="gsap-hero-animate font-sans text-body-md md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We don't just solve problems; we architect resilient systems. GuerillaSite exists to bridge the gap between complex technical debt and streamlined, future-proof operational excellence.
              </p>
              
              <div className="gsap-hero-animate flex flex-wrap gap-md mt-xl">
                <Link href="/contact" className="btn-accent px-8 py-4 text-xs font-bold uppercase tracking-widest text-center shadow-md">
                  Consult with our Architects
                </Link>
                <Link href="#milestones" className="btn-ghost px-8 py-4 text-xs font-bold uppercase tracking-widest text-center flex items-center gap-2 border-2 border-primary">
                  View Milestones
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </Link>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-5 flex items-center justify-center mt-xl lg:mt-0 animate-in fade-in slide-in-from-right duration-700 w-full">
              <div 
                className="gsap-scale-in border-2 border-[#17184B] bg-[#17184B]/5 p-md w-full relative rounded-[32px] shadow-2xl overflow-hidden cursor-pointer backdrop-blur-sm group transition-all duration-300"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                {/* Decorative window headers */}
                <div className="flex items-center gap-1.5 pb-3 border-b border-[#17184B]/10 mb-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D3DDE7]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#17184B]/30"></span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#17184B]/60 ml-2">SYSTEMS_BLUEPRINT.MD</span>
                </div>

                <div className="aspect-[16/10] relative overflow-hidden rounded-[20px] bg-neutral-900 w-full border border-[#17184B]/20 mb-md shadow-inner">
                  <img 
                    alt="Technical Systems Blueprint" 
                    src="/images/about_systems_design.png"
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-750 group-hover:scale-102 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
                  <span className="absolute bottom-md left-md bg-secondary text-primary border border-secondary px-3 py-1 font-mono text-[9px] uppercase tracking-widest rounded-full font-bold shadow-md">
                    GEN_AI_MODEL: ACTIVE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-sm border-t border-[#17184B]/10 pt-md mt-sm">
                  <div className="bg-white/80 p-sm rounded-[16px] border border-[#17184B]/5 shadow-sm hover:bg-white transition-colors">
                    <p className="font-label-sm text-[10px] uppercase text-on-surface-variant mb-xs">Founded</p>
                    <p className="font-display text-2xl font-extrabold text-[#17184B]">2012</p>
                  </div>
                  <div className="bg-white/80 p-sm rounded-[16px] border border-[#17184B]/5 shadow-sm hover:bg-white transition-colors">
                    <p className="font-label-sm text-[10px] uppercase text-on-surface-variant mb-xs">Global Reach</p>
                    <p className="font-display text-2xl font-extrabold text-[#17184B]">42 Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-8 relative z-10">
          <div className="border border-white/10 bg-[#17184B] text-[#F0EEE9] rounded-[40px] p-lg md:p-xxl shadow-2xl relative overflow-hidden">
            {/* Ambient glows inside dark container */}
            <div className="absolute -top-1/4 -right-1/4 w-[250px] h-[250px] bg-[#D8E63C]/10 rounded-full filter blur-[60px] pointer-events-none"></div>
            
            <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-gutter relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="flex flex-col gap-sm pb-lg md:pb-0 md:pr-xl group cursor-pointer">
                <div className="flex items-center gap-sm mb-xs">
                  <span className="material-symbols-outlined text-secondary bg-white/5 border border-white/10 p-2.5 rounded-full flex items-center justify-center w-11 h-11 shadow-sm group-hover:scale-105 transition-transform duration-300">flag</span>
                  <h2 className="font-display text-xl font-bold uppercase tracking-tight text-white">Our Mission</h2>
                </div>
                <p className="font-sans text-body-md text-neutral-300 leading-relaxed max-w-xl">
                  To eliminate digital friction through precise, uncompromising engineering. We empower enterprises to operate with absolute confidence by delivering robust, scalable infrastructure and support ecosystems.
                </p>
              </div>
              
              <div className="flex flex-col gap-sm pt-lg md:pt-0 md:pl-xl group cursor-pointer">
                <div className="flex items-center gap-sm mb-xs">
                  <span className="material-symbols-outlined text-secondary bg-white/5 border border-white/10 p-2.5 rounded-full flex items-center justify-center w-11 h-11 shadow-sm group-hover:scale-105 transition-transform duration-300">visibility</span>
                  <h2 className="font-display text-xl font-bold uppercase tracking-tight text-white">Our Vision</h2>
                </div>
                <p className="font-sans text-body-md text-neutral-300 leading-relaxed max-w-xl">
                  A technological landscape where operational downtime is obsolete, and enterprise software functions as a silent, flawless engine of continuous growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile py-xl md:py-xxl border border-neutral-200/45 bg-white/50 backdrop-blur-sm rounded-[48px] shadow-sm my-lg">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-primary mb-xl px-margin-mobile md:px-lg">Core Engineering Values</h2>
          
          <div className="gsap-stagger-container grid grid-cols-12 gap-gutter p-sm md:p-md auto-rows-[250px]">
            <div 
              className="col-span-12 md:col-span-8 border border-neutral-200/50 p-xl flex flex-col justify-between bg-white/80 backdrop-blur-sm text-primary rounded-[32px] shadow-md hover:shadow-[0_0_30px_rgba(216,230,60,0.12)] hover:border-[#D8E63C]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
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
              className="col-span-12 md:col-span-4 border border-neutral-200/50 p-xl flex flex-col justify-between bg-white/80 backdrop-blur-sm text-primary rounded-[32px] shadow-md hover:shadow-[0_0_30px_rgba(216,230,60,0.12)] hover:border-[#D8E63C]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
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
              className="col-span-12 md:col-span-4 border border-neutral-200/50 p-xl flex flex-col justify-between bg-white/80 backdrop-blur-sm text-primary rounded-[32px] shadow-md hover:shadow-[0_0_30px_rgba(216,230,60,0.12)] hover:border-[#D8E63C]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
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
              className="col-span-12 md:col-span-8 border border-neutral-200/50 p-xl flex flex-col justify-between bg-white/80 backdrop-blur-sm text-primary rounded-[32px] shadow-md hover:shadow-[0_0_30px_rgba(216,230,60,0.12)] hover:border-[#D8E63C]/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-pointer"
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
        <section className="w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile py-16 relative" id="milestones">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-tr from-[#D8E63C]/5 to-[#D8E63C]/5 rounded-full filter blur-xl pointer-events-none z-0"></div>
          
          <div className="max-w-3xl mb-xxl gsap-slide-up relative z-10">
            <span className="font-label-sm text-label-sm text-on-surface-variant block mb-sm">03 // Our History</span>
            <h2 className="font-display text-3xl font-extrabold uppercase text-primary tracking-tight">Engineering Milestones</h2>
            <p className="font-sans text-body-md text-on-surface-variant mt-xs">Over a decade of constructing deterministic systems, scaling infrastructure, and establishing global engineering nodes.</p>
          </div>

          <div className="timeline-container relative ml-4 md:ml-8 py-4 space-y-xl z-10">
            {/* Static background track line */}
            <div className="absolute left-[19px] md:left-[140px] top-0 bottom-0 w-[3px] bg-neutral-200/50 z-0 rounded-full" />
            {/* Animated progress track line */}
            <div className="timeline-progress-line absolute left-[19px] md:left-[140px] top-0 w-[3px] bg-[#D8E63C] z-0 origin-top h-0 rounded-full shadow-[0_0_8px_#D8E63C]" />

            {[
              { year: "2012", phase: "PHASE 01", title: "Systems Foundation", desc: "GuerillaSite is established, specializing in high-availability UNIX server clustering and redundant datacenter design.", icon: "home" },
              { year: "2015", phase: "PHASE 02", title: "DevOps & Cloud Acceleration", desc: "Expanded DevOps operations. Built our first Kubernetes cluster automation systems and type-safe API gateways for logistics clients.", icon: "cloud_done" },
              { year: "2018", phase: "PHASE 03", title: "IIoT Twin Division", desc: "Launched predictive telemetry pipelines for heavy manufacturing plants, syncing over 50,000 active Edge nodes to dynamic timeseries databases.", icon: "precision_manufacturing" },
              { year: "2024", phase: "PHASE 04", title: "Active-Active Global Scale", desc: "Deployed synchronous multi-region, zero-data-loss databases across our network, running under sub-45ms SLA response bounds.", icon: "public" }
            ].map((milestone, idx) => (
              <div key={idx} className="timeline-item relative group pl-12 md:pl-[200px] min-h-[120px]">
                {/* Desktop Year Label */}
                <div className="timeline-year absolute left-0 w-[100px] text-right top-3 hidden md:flex flex-col opacity-0">
                  <span className="font-mono text-3xl font-extrabold text-primary leading-none">
                    {milestone.year}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#17184B] bg-[#D8E63C] border border-[#17184B] px-1.5 py-0.5 rounded mt-1.5 w-fit ml-auto font-bold shadow-[2px_2px_0px_#17184B]">
                    {milestone.phase}
                  </span>
                </div>

                {/* Timeline Icon Node */}
                <span className="timeline-icon-circle absolute left-0 md:left-[120px] top-3 w-10 h-10 rounded-full bg-white border border-neutral-200/50 shadow-md flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-primary group-hover:scale-105 group-hover:border-[#17184B] transition-all duration-300 z-10 scale-0">
                  <span className="material-symbols-outlined text-[18px]">{milestone.icon}</span>
                </span>
                
                {/* Content Card (Outer container for GSAP transitions) */}
                <div className="timeline-card opacity-0">
                  {/* Inner card (Handles hover tilt, border transitions, and shadow animations) */}
                  <div 
                    className="border border-neutral-200/50 bg-white/70 backdrop-blur-sm p-lg rounded-[28px] shadow-md hover:border-[#D8E63C] hover:shadow-[5px_5px_0px_0px_#17184B] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    {/* Mobile Year Badge */}
                    <div className="timeline-year md:hidden flex items-center gap-2 mb-sm opacity-0">
                      <span className="font-mono text-xs uppercase tracking-widest font-bold text-secondary bg-primary px-3 py-1 rounded-full shadow-sm">
                        {milestone.year}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary px-2 py-0.5 rounded-full font-bold">
                        {milestone.phase}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold uppercase text-primary mb-xs">{milestone.title}</h3>
                    <p className="font-sans text-body-md text-on-surface-variant leading-relaxed max-w-3xl">{milestone.desc}</p>
                  </div>
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
            <p className="font-sans text-body-md text-neutral-350">Engage with our senior engineering team to discuss your infrastructure challenges.</p>
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
