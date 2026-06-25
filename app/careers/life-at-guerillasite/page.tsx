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
    
    const rotX = -normalizedY * 8; // Max 8 degrees tilt
    const rotY = normalizedX * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.1s ease-out, box-shadow 0.3s ease";
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease";
  };

  return (
    <>
      <TopNavBar active="Careers" />
      <main className="bg-[#F0EEE9]">

        {/* Hero Section */}
        <section className="w-full px-margin-mobile md:px-margin-desktop pt-28 pb-12 md:pt-36 md:pb-20 max-w-container-max mx-auto border-b border-surface-variant relative overflow-hidden">
          {/* Soft pulsing decorative ambient background halos */}
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#D8E63C]/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse duration-[10000ms] -z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#D3DDE7]/15 rounded-full filter blur-[80px] pointer-events-none animate-pulse duration-[8000ms] -z-10"></div>
          <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter items-center z-10 relative">
            <div className="md:col-span-8 flex flex-col gap-lg">
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Life at GuerillaSite</p>
              <h1 className="gsap-hero-animate font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary animate-in fade-in slide-in-from-left duration-700">
                Engineering Excellence is a Culture
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px]">
                We don't just build software; we build systems of impact. Join a team where precision, innovation, and continuous learning are the foundational protocols of our daily operations.
              </p>
              <div className="pt-md">
                <Link className="btn-accent inline-block" href="#open-positions">
                  Explore Open Positions
                </Link>
              </div>
            </div>
            <div className="md:col-span-4 mt-xl md:mt-0 relative aspect-square border-2 border-[#17184B] p-xs bg-surface-container rounded-[4px] shadow-md overflow-hidden cursor-pointer">
              <div 
                className="w-full h-full"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <img 
                  alt="Team collaborating" 
                  className="w-full h-full object-cover rounded-[4px]" 
                  src="/images/team_collaboration.png" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Principles */}
        <section className="w-full px-margin-mobile md:px-margin-desktop py-huge max-w-container-max mx-auto border-b border-surface-variant">
          <div className="mb-xxl">
            <h2 className="font-headline-xl text-headline-xl text-primary mb-md">Engineering Principles</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px]">Code as an asset. We adhere to strict standards to ensure maintainability, scalability, and security across all enterprise deployments.</p>
          </div>
          <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-sm auto-rows-[240px]">

            <div 
              className="md:col-span-8 border-2 border-[#17184B] bg-surface-container-low p-xl flex flex-col justify-between hover:bg-surface-container transition-colors group cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="material-symbols-outlined text-[32px] text-primary mb-md">code_blocks</span>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-sm">Modular Architecture</h3>
                <p className="text-on-surface-variant">We build decoupled systems that evolve independently, minimizing technical debt.</p>
              </div>
            </div>

            <div 
              className="md:col-span-4 border-2 border-[#17184B] bg-surface-container p-xl flex flex-col justify-between hover:border-[#17184B] transition-colors cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="material-symbols-outlined text-[32px] text-secondary mb-md">security</span>
              <div>
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-sm">Zero Trust Protocol</h3>
                <p className="text-on-surface-variant text-sm">Security embedded at compile time.</p>
              </div>
            </div>

            <div 
              className="md:col-span-4 border-2 border-[#17184B] bg-surface-container p-xl flex flex-col justify-between hover:border-[#17184B] transition-colors cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="material-symbols-outlined text-[32px] text-primary mb-md">speed</span>
              <div>
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-sm">Performance First</h3>
                <p className="text-on-surface-variant text-sm">Latency is a bug. We optimize for millisecond responses.</p>
              </div>
            </div>

            <div 
              className="md:col-span-8 border-2 border-[#17184B] bg-surface-container-low p-xl flex flex-col justify-between hover:bg-surface-container transition-colors relative overflow-hidden group cursor-pointer"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <span className="material-symbols-outlined text-[32px] text-secondary mb-md relative z-10">integration_instructions</span>
              <div className="relative z-10">
                <h3 className="font-headline-md text-headline-md text-primary mb-sm">Continuous Integration</h3>
                <p className="text-on-surface-variant">Automated testing and deployment pipelines ensure rapid, reliable delivery cycles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Framework */}
        <section className="w-full px-margin-mobile md:px-margin-desktop py-huge bg-surface-container-lowest border-b border-surface-variant">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-4 sticky top-huge h-fit">
              <h2 className="font-headline-xl text-headline-xl text-primary mb-lg">Growth Framework</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">Clear career paths designed for technical leaders and management visionaries alike. Upward mobility is structured, transparent, and merit-based.</p>
              <Link className="inline-flex items-center gap-sm font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors" href="/contact">
                View Matrix <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
            <div className="md:col-span-7 md:col-start-6 flex flex-col gap-xl">
              <div className="border-b border-[#17184B] pb-xl flex gap-lg items-start">
                <div className="w-12 h-12 shrink-0 bg-primary flex items-center justify-center text-on-primary font-headline-md font-bold rounded-full">1</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-sm">Individual Contributor (IC) Track</h3>
                  <p className="text-on-surface-variant">Focus purely on technical excellence. Progress from Software Engineer to Distinguished Architect without taking on people management responsibilities.</p>
                </div>
              </div>
              <div className="border-b border-[#17184B] pb-xl flex gap-lg items-start">
                <div className="w-12 h-12 shrink-0 border-2 border-[#17184B] flex items-center justify-center text-primary font-headline-md font-bold rounded-full">2</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-sm">Engineering Management Track</h3>
                  <p className="text-on-surface-variant">Lead teams, optimize delivery processes, and mentor the next generation of engineers. Progress from Tech Lead to VP of Engineering.</p>
                </div>
              </div>
              <div className="flex gap-lg items-start">
                <div className="w-12 h-12 shrink-0 bg-secondary flex items-center justify-center text-on-secondary font-headline-md font-bold rounded-full">3</div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-sm">Fluid Mobility</h3>
                  <p className="text-on-surface-variant">We recognize that career goals evolve. Our framework allows lateral movement between the IC and Management tracks at corresponding seniority levels.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
