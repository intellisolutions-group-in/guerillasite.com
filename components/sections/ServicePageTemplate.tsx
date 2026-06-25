"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

interface Stat {
  label: string;
  value: string;
}

interface Challenge {
  title: string;
  desc: string;
}

interface Capability {
  title: string;
  desc: string;
  icon: string;
}

interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageTemplateProps {
  category: string;
  title: string;
  description: string;
  heroImage: string;
  stats: Stat[];
  challenges: Challenge[];
  methodology: {
    title: string;
    desc: string;
    image: string;
  };
  capabilities: Capability[];
  techStack: string[];
  workflow: WorkflowStep[];
  faqs: FAQ[];
}

export default function ServicePageTemplate({
  category,
  title,
  description,
  heroImage,
  stats,
  challenges,
  methodology,
  capabilities,
  techStack,
  workflow,
  faqs,
}: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease";
  };

  const cardGlows = [
    "from-[#D8E63C]/10 to-transparent",
    "from-[#D8E63C]/10 to-transparent",
    "from-[#D3DDE7]/15 to-transparent",
    "from-[#17184B]/5 to-transparent"
  ];

  const stepTextGradients = [
    "from-[#17184B] via-[#D8E63C] to-[#D3DDE7]",
    "from-[#D8E63C] to-[#17184B]",
    "from-[#D8E63C] to-[#17184B]",
    "from-[#D3DDE7] to-[#17184B]"
  ];

  const bulletColors = [
    "bg-[#D8E63C]",
    "bg-[#D8E63C]",
    "bg-[#D3DDE7]",
    "bg-[#17184B]"
  ];

  return (
    <>
      <Navbar />

      <main className="w-full pb-12 bg-surface-container/10 relative overflow-x-clip">
        
        {/* 1. Hero Section */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-12 md:pt-36 md:pb-20 relative">
          {/* Soft ambient decorative halos */}
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#D8E63C]/10 rounded-full filter blur-[100px] -z-10 pointer-events-none animate-pulse duration-[10000ms]"></div>
          <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#D3DDE7]/15 rounded-full filter blur-[80px] -z-10 pointer-events-none animate-pulse duration-[8000ms]"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            
            {/* Left Column (Meta & Info) */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
              <span className="gsap-hero-animate font-sans text-xs uppercase tracking-widest text-secondary font-bold block mb-sm">
                {category} {"//"} Service Detail
              </span>
              <h1 className="gsap-hero-animate font-display text-3xl md:text-display-lg uppercase font-bold tracking-tighter text-primary leading-none mb-md">
                {title}
              </h1>
              <p className="gsap-hero-animate font-sans text-md md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-xl">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="gsap-hero-animate flex flex-wrap gap-md mb-xxl">
                <Link 
                  href="/contact"
                  className="gsap-scale-in btn-primary px-8 py-4 text-xs font-bold uppercase tracking-widest"
                >
                  Start Project
                </Link>
                <Link 
                  href="#blueprint" 
                  className="gsap-scale-in btn-ghost px-8 py-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                >
                  View Blueprint
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </Link>
              </div>

              {/* Performance Indicators */}
              <div className="gsap-hero-animate grid grid-cols-2 md:grid-cols-3 gap-md border-t border-[#17184B] pt-xl">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-display text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</span>
                    <span className="font-sans text-[11px] uppercase tracking-widest text-on-surface-variant font-bold mt-xs">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (AI Generated Rounded Image) */}
            <div className="col-span-1 lg:col-span-5 flex justify-center mt-xl lg:mt-0">
              <div 
                className="w-full aspect-[16/10] relative overflow-hidden rounded-[50px] bg-surface-container-low group gsap-image-reveal cursor-pointer shadow-[20px_20px_60px_#bebebe,_-20px_-20px_60px_#ffffff]"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <Image 
                  src={heroImage} 
                  alt={title} 
                  fill
                  sizes="(max-w-[768px]) 100vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  priority
                />
                <div className="absolute inset-0 rounded-[50px] pointer-events-none transition-colors duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* 2. Challenges Section (Pain Points) */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
          <div className="max-w-3xl mb-xxl gsap-slide-up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold block mb-sm">01 // Strategic Obstacles</span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-primary">Core Challenges We Resolve</h2>
          </div>

          <div className="gsap-stagger-scale grid grid-cols-1 md:grid-cols-3 gap-md">
            {challenges.map((challenge, index) => (
              <div 
                key={index} 
                className="gsap-stagger-item card-neumorphic-exact p-lg flex flex-col justify-between min-h-[12rem] text-[#17184B] cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-primary mb-sm">{challenge.title}</h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{challenge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* 3. Our Solution & Methodology Section */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 gsap-slide-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
            
            {/* Left side: Content */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold block mb-sm">02 // The Blueprint Approach</span>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-primary mb-lg">
                {methodology.title}
              </h2>
              <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed max-w-2xl whitespace-pre-line">
                {methodology.desc}
              </p>
            </div>

            {/* Right side: Rounded Methodology Image */}
            <div className="col-span-1 lg:col-span-5">
              <div 
                className="card-neumorphic-exact w-full aspect-[16/10] relative overflow-hidden group transition-all duration-500 gsap-image-reveal cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <Image 
                  src={methodology.image} 
                  alt={methodology.title} 
                  fill
                  sizes="(max-w-[768px]) 100vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-[1.03] rounded-[50px]"
                />
                <div className="absolute inset-0 rounded-[50px] pointer-events-none transition-colors duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* 2.5 Operational Execution Procedures (New Section for Page Length and Detail) */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
          <div className="max-w-3xl mb-xxl">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold block mb-sm">02.5 // Execution Mechanics</span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-primary">Operational Procedures</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            
            {/* Card 1: Initial System Integration */}
            <div 
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="card-neumorphic-exact p-lg flex flex-col sm:flex-row gap-lg justify-between cursor-pointer group"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-primary mb-md border-b border-neutral-100 pb-sm flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D8E63C]"></span>
                    1. Initial System Integration
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-md">
                    We establish a non-disruptive parallel runtime context to map data dependencies, network boundaries, and state flows of your active services.
                  </p>
                </div>
                <div className="bg-neutral-50 p-md rounded-xl border border-neutral-200 text-xs font-sans text-on-surface-variant mt-auto">
                  <span className="font-bold text-primary block mb-xs">Protocol Compliance Check:</span>
                  Passive traffic inspection ensures absolutely zero load on active production channels.
                </div>
              </div>
              <div className="w-full sm:w-[140px] h-[140px] sm:h-auto sm:aspect-square relative overflow-hidden rounded-[20px] border border-neutral-200 shadow-sm bg-neutral-50 shrink-0 self-center">
                <img 
                  alt="System Integration" 
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700 rounded-[20px]" 
                  src="/images/systems_architect.png" 
                />
              </div>
            </div>

            {/* Card 2: Redundant Failover Validation */}
            <div 
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="card-neumorphic p-lg flex flex-col sm:flex-row gap-lg justify-between cursor-pointer group"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-primary mb-md border-b border-neutral-100 pb-sm flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D3DDE7]"></span>
                    2. Redundant Failover Validation
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-md">
                    We design and test self-healing failover pipelines that redirect operational traffic to secondary clusters within a sub-50ms window.
                  </p>
                </div>
                <div className="bg-neutral-50 p-md rounded-xl border border-neutral-200 text-xs font-sans text-on-surface-variant mt-auto">
                  <span className="font-bold text-primary block mb-xs">Telemetry Metrics:</span>
                  Continuous health probes track replica synchronization state and cluster quorum variables.
                </div>
              </div>
              <div className="w-full sm:w-[140px] h-[140px] sm:h-auto sm:aspect-square relative overflow-hidden rounded-[20px] border border-neutral-200 shadow-sm bg-neutral-50 shrink-0 self-center">
                <img 
                  alt="Failover Validation" 
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700 rounded-[20px]" 
                  src="/images/cloud_ops_engineer.png" 
                />
              </div>
            </div>

            {/* Card 3: Security Auditing & Shielding */}
            <div 
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="card-neumorphic-exact p-lg flex flex-col sm:flex-row gap-lg justify-between cursor-pointer group"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-primary mb-md border-b border-neutral-100 pb-sm flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D8E63C]"></span>
                    3. Security Auditing & Shielding
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-md">
                    Applying identity-aware API proxies, end-to-end payload encryption, and strict permission roles across all cloud resources.
                  </p>
                </div>
                <div className="bg-neutral-50 p-md rounded-xl border border-neutral-200 text-xs font-sans text-on-surface-variant mt-auto">
                  <span className="font-bold text-primary block mb-xs">Sovereignty Target:</span>
                  Zero unencrypted database fields, keeping records strictly mapped to privacy zones.
                </div>
              </div>
              <div className="w-full sm:w-[140px] h-[140px] sm:h-auto sm:aspect-square relative overflow-hidden rounded-[20px] border border-neutral-200 shadow-sm bg-neutral-50 shrink-0 self-center">
                <img 
                  alt="Security Auditing" 
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700 rounded-[20px]" 
                  src="/images/cyber_security_shield.png" 
                />
              </div>
            </div>

            {/* Card 4: Continuous Performance Refactoring */}
            <div 
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="card-neumorphic p-lg flex flex-col sm:flex-row gap-lg justify-between cursor-pointer group"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-primary mb-md border-b border-neutral-100 pb-sm flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#17184B]"></span>
                    4. Continuous Performance Refactoring
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-md">
                    Deploying runtime telemetry loops that collect performance traces, identifying latency hotspots and compiler optimization targets.
                  </p>
                </div>
                <div className="bg-neutral-50 p-md rounded-xl border border-neutral-200 text-xs font-sans text-on-surface-variant mt-auto">
                  <span className="font-bold text-primary block mb-xs">Optimization Goal:</span>
                  Continuous profiling keeps cpu utilization optimized and memory leaks eliminated.
                </div>
              </div>
              <div className="w-full sm:w-[140px] h-[140px] sm:h-auto sm:aspect-square relative overflow-hidden rounded-[20px] border border-neutral-200 shadow-sm bg-neutral-50 shrink-0 self-center">
                <img 
                  alt="Performance Refactoring" 
                  className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700 rounded-[20px]" 
                  src="/images/seo_code_optimization.png" 
                />
              </div>
            </div>

          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* 4. Core Capabilities Bento Grid */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
          <div className="max-w-3xl mb-xxl gsap-slide-up">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold block mb-sm">03 // Service Capabilities</span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-primary">Technical Competencies</h2>
          </div>

          <div className="gsap-stagger-scale grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {capabilities.map((cap, index) => (
              <div 
                key={index} 
                className="gsap-stagger-item bento-card p-lg min-h-[16rem] justify-between text-[#17184B] cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div>
                  <span className="material-symbols-outlined text-[#17184B] text-3xl mb-md block">{cap.icon}</span>
                  <h3 className="font-display text-md font-bold uppercase text-[#17184B] mb-sm">{cap.title}</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* 5. Technology DNA (Stack Badges) */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 gsap-slide-up">
          <div className="max-w-3xl mb-xl">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold block mb-sm">04 // Technology DNA</span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-primary">Integration Stack</h2>
          </div>

          <div className="flex flex-wrap gap-sm">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="font-sans text-xs font-semibold uppercase tracking-wider px-md py-sm bg-white/60 border border-neutral-200/50 text-[#17184B] rounded-full hover:bg-[#D8E63C]/20 transition-colors cursor-default shadow-[2px_2px_6px_rgba(0,0,0,0.03)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-[#17184B]/10 gsap-border-draw" />
        </div>

        {/* 6. Process Timeline Blueprint (Horizontal Scroll Pinning) */}
        <section id="blueprint" className="service-horizontal-scroll-section w-full h-screen overflow-hidden bg-neutral-950 text-white relative flex flex-col justify-center select-none py-12">
          <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 z-10 relative">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold block mb-sm">05 // Operational Workflow</span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white">Process Blueprint</h2>
          </div>

          <div className="service-horizontal-scroll-content flex gap-xl px-margin-mobile md:px-[8vw] w-max items-center h-[60vh]">
            {workflow.map((flow, index) => (
              <div 
                key={index} 
                className="w-[85vw] md:w-[45vw] lg:w-[36vw] shrink-0 h-[50vh] min-h-[360px] border border-white/10 p-lg md:p-xl bg-neutral-900 flex flex-col justify-between shadow-[15px_15px_40px_rgba(0,0,0,0.5),-10px_-10px_30px_rgba(255,255,255,0.02)] hover:shadow-[15px_15px_45px_rgba(216,230,60,0.12)] transition-all duration-500 group relative overflow-hidden rounded-[32px]"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                {/* Ambient glow decoration */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${cardGlows[index % cardGlows.length]} rounded-full filter blur-3xl opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-700 pointer-events-none`} />

                {/* Premium colored top-accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${stepTextGradients[index % stepTextGradients.length]} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <div>
                  <span className={`font-display text-5xl font-extrabold bg-gradient-to-r ${stepTextGradients[index % stepTextGradients.length]} bg-clip-text text-transparent block mb-md transition-transform duration-500 group-hover:scale-110 origin-left`}>
                    {flow.step}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-md">{flow.title}</h3>
                  <p className="font-sans text-sm text-neutral-300 leading-relaxed leading-6">{flow.desc}</p>
                </div>
                
                {/* Detailed Deliverables/Procedures for length and depth */}
                <div className="border-t border-neutral-800 pt-md mt-md">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-neutral-400 font-bold block mb-xs group-hover:text-white transition-colors duration-300">Phase Deliverables:</span>
                  <ul className="space-y-2">
                    {[
                      "Detailed systems integration specifications",
                      "Redundant environment verification checklist",
                      "Operational architecture performance reports"
                    ].map((deliv, dIdx) => (
                      <li 
                        key={dIdx} 
                        className="flex items-center gap-2 font-sans text-xs text-neutral-450 transition-all duration-300 group-hover:translate-x-1 hover:text-white"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${bulletColors[index % bulletColors.length]} shrink-0 transition-transform duration-300 group-hover:scale-125`} />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wrapper with solid background and z-index to prevent overlapping during scroll pinning */}
        <div className="relative z-10 bg-surface-container w-full pb-12">
          {/* Section Divider */}
          <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
          </div>

        {/* 7. Accordion FAQ Section */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 gsap-slide-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            
            {/* Title Column */}
            <div className="col-span-1 lg:col-span-4">
              <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold block mb-sm">06 // Inquiries</span>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-primary mb-md">
                Technical Specifications
              </h2>
              <p className="font-sans text-sm text-on-surface-variant max-w-xs">
                Answers to essential integration questions regarding operational parameters, compliance, and deployment schedules.
              </p>
            </div>

            {/* Accordion Column */}
            <div className="col-span-1 lg:col-span-8 flex flex-col gap-sm">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className="border border-[#17184B]/10 bg-white/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 text-[#17184B]"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center px-lg py-5 text-left font-display font-bold text-sm md:text-base text-[#17184B] uppercase tracking-tight hover:bg-[#17184B]/5 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        keyboard_arrow_down
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-lg pb-5 border-t border-[#17184B]/10 pt-sm bg-white/40">
                        <p className="font-sans text-sm text-on-surface-variant leading-relaxed leading-6 whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-neutral-200/80 gsap-border-draw" />
        </div>

        {/* 8. Ready to Engage CTA */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
          <div className="bg-[#17184B] text-[#F0EEE9] p-xl md:p-[60px] rounded-[50px] shadow-[20px_20px_50px_rgba(23,24,75,0.25)] flex flex-col md:flex-row items-center justify-between gap-xl relative overflow-hidden">
            {/* Background grids */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
            
            <div className="max-w-2xl relative z-10 gsap-slide-up">
              <span className="font-sans text-xs uppercase tracking-widest text-[#D8E63C] font-bold block mb-sm">Consultation</span>
              <h2 className="font-display text-2xl md:text-4xl font-bold uppercase text-white mb-md leading-tight">
                Accelerate Your Systems Strategy.
              </h2>
              <p className="font-sans text-sm md:text-base text-surface-dim leading-relaxed">
                Connect with our principal architects for a technical assessment of your legacy infrastructure. We will identify performance bottlenecks and outline a clear roadmap for scaling.
              </p>
            </div>
            
            <div className="relative z-10 whitespace-nowrap shrink-0 gsap-scale-in">
              <Link 
                href="/contact"
                className="btn-accent px-8 py-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2"
              >
                Schedule Assessment
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
