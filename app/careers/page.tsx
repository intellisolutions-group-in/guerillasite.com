"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { jobRequisitions } from "./careersData";

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

  const [department, setDepartment] = useState("All Departments");

  const filteredJobs = jobRequisitions.filter(job => {
    return department === "All Departments" || job.department === department;
  });

  const pipelineStages = [
    {
      step: "01",
      phase: "STAGE_COMMIT",
      name: "Application",
      check: "LINT: PASSED",
      desc: "Submit your engineering profile. We compile qualifications against active technical demands."
    },
    {
      step: "02",
      phase: "UNIT_VERIFY",
      name: "Recruiter Screen",
      check: "TEST: PASSED",
      desc: "A 30-minute sync to evaluate role alignment, core values, and baseline logistics."
    },
    {
      step: "03",
      phase: "INTEGRATION_TEST",
      name: "Technical Deep Dive",
      check: "BUILD: SUCCESS",
      desc: "Audit of systems architecture principles, distributed layouts, and state configurations."
    },
    {
      step: "04",
      phase: "LOAD_SIMULATION",
      name: "Pair Programming",
      check: "RUN: SUCCESS",
      desc: "Collaborative session debugging and constructing high-throughput algorithms in real time."
    },
    {
      step: "05",
      phase: "PRE_FLIGHT_DEPLOY",
      name: "Leadership Interview",
      check: "VERIFY: OK",
      desc: "Deep review of professional aspirations, telemetry standards, and culture fit variables."
    },
    {
      step: "06",
      phase: "PROD_RELEASE",
      name: "Offer",
      check: "DEPLOY: ACTIVE",
      desc: "Final node onboard coordinates and SLA configuration guidelines finalized."
    }
  ];

  return (
    <>
      <TopNavBar active="Careers" />
      <main className="flex-grow bg-[#F0EEE9] relative overflow-hidden pb-12">
        {/* Soft pulsing decorative ambient background halos */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#D8E63C]/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse duration-[10000ms] -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#D3DDE7]/15 rounded-full filter blur-[80px] pointer-events-none animate-pulse duration-[8000ms] -z-10"></div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-[#17184B]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center relative z-10">
            {/* Left side info */}
            <div className="col-span-1 lg:col-span-8 flex flex-col justify-center">
              <span className="font-sans text-xs uppercase tracking-widest text-[#17184B]/60 font-extrabold mb-sm block bg-white/50 border border-[#17184B]/10 px-4 py-1 rounded-full w-max shadow-sm">
                Join GuerillaSite
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-[60px] uppercase font-extrabold tracking-tighter text-[#17184B] mb-lg leading-[0.95]">
                Engineering <br />
                <span className="font-serif italic font-normal text-[#D8E63C]">Excellence</span>.
              </h1>
              <p className="font-sans text-sm md:text-body-lg text-[#17184B]/80 mb-xl max-w-2xl leading-relaxed">
                We don't just write code; we architect solutions that drive enterprise scale. Join a team where precision meets innovation, and your work directly impacts global infrastructure.
              </p>
              <div className="flex flex-wrap gap-md">
                <Link className="btn-accent px-8 py-4 text-xs font-bold uppercase tracking-widest text-center" href="#jobs">
                  View Open Roles
                </Link>
                <Link className="btn-ghost px-8 py-4 text-xs font-bold uppercase tracking-widest text-center flex items-center gap-2" href="/careers/life-at-guerillasite">
                  Our Culture & Life
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Right side Visual Card */}
            <div className="col-span-1 lg:col-span-4 mt-xl lg:mt-0 flex justify-center">
              <div 
                className="w-full aspect-[16/10] relative overflow-hidden rounded-[50px] bg-white group cursor-pointer shadow-[20px_20px_60px_#bebebe,_-20px_-20px_60px_#ffffff]"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <img 
                  alt="Engineering team collaborating in office environment" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] rounded-[50px]" 
                  src="/images/careers_hero_visual.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#17184B]/20 to-transparent pointer-events-none rounded-[50px]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Principles Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-[#17184B]/10" id="culture">
          <div className="mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#17184B]/60 font-extrabold block mb-sm">01 // Engineering DNA</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#17184B]">Our Operating Principles</h2>
            <p className="font-sans text-sm md:text-body-md text-[#17184B]/70 max-w-3xl mt-xs">The rigid standards we hold ourselves to every single day.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-stretch">
            {/* Card 1: Architectural Integrity */}
            <div 
              className="col-span-12 lg:col-span-8 card-neumorphic-exact p-lg md:p-xl flex flex-col justify-between cursor-pointer group text-[#17184B]"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div>
                <div className="flex justify-between items-center border-b border-[#17184B]/10 pb-sm mb-lg">
                  <span className="font-mono text-xs text-[#17184B]/50 font-semibold">PRINCIPLE_01</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold bg-[#D8E63C]/35 px-2.5 py-0.5 rounded-full">TOPOLOGY_AUDIT: OK</span>
                </div>
                <span className="material-symbols-outlined text-[48px] text-[#17184B]/80 group-hover:text-[#D8E63C] transition-colors duration-300 mb-md block">architecture</span>
                <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase text-[#17184B] mb-md">Architectural Integrity First</h3>
                <p className="font-sans text-xs md:text-sm text-[#17184B]/70 max-w-xl leading-relaxed">
                  We prioritize scalable, secure, and maintainable systems over quick hacks. Every line of code is an asset or a liability. We design for absolute runtime stability and fault isolation.
                </p>
              </div>
            </div>

            {/* Card 2: Velocity & Precision */}
            <div 
              className="col-span-12 md:col-span-6 lg:col-span-4 card-neumorphic p-lg flex flex-col justify-between cursor-pointer group text-[#17184B]"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div>
                <div className="flex justify-between items-center border-b border-[#17184B]/10 pb-sm mb-lg">
                  <span className="font-mono text-xs text-[#17184B]/50 font-semibold">PRINCIPLE_02</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold bg-[#D3DDE7] px-2.5 py-0.5 rounded-full">VELOCITY: 99.9%</span>
                </div>
                <span className="material-symbols-outlined text-[36px] text-[#17184B]/80 mb-md block">speed</span>
                <h4 className="font-display text-lg font-bold uppercase text-[#17184B] mb-sm">Velocity & Precision</h4>
                <p className="font-sans text-xs md:text-sm text-[#17184B]/70 leading-relaxed">
                  Moving fast doesn't mean breaking things. We deploy with absolute confidence through rigorous end-to-end testing, robust type verification, and isolated sandbox systems.
                </p>
              </div>
            </div>

            {/* Card 3: Radical Transparency */}
            <div 
              className="col-span-12 md:col-span-6 lg:col-span-4 card-neumorphic p-lg flex flex-col justify-between cursor-pointer group text-[#17184B]"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div>
                <div className="flex justify-between items-center border-b border-[#17184B]/10 pb-sm mb-lg">
                  <span className="font-mono text-xs text-[#17184B]/50 font-semibold">PRINCIPLE_03</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold bg-neutral-200 px-2.5 py-0.5 rounded-full">COMMITS: OPEN</span>
                </div>
                <span className="material-symbols-outlined text-[36px] text-[#17184B]/80 mb-md block">forum</span>
                <h4 className="font-display text-lg font-bold uppercase text-[#17184B] mb-sm">Radical Transparency</h4>
                <p className="font-sans text-xs md:text-sm text-[#17184B]/70 leading-relaxed">
                  Open communication across all layers. We maintain honest feedbacks, publicly auditable code reviews, and absolute clarity on roadmap dependencies and scaling objectives.
                </p>
              </div>
            </div>

            {/* Card 4: Continuous Learning */}
            <div 
              className="col-span-12 lg:col-span-8 card-neumorphic-exact p-lg md:p-xl flex flex-col justify-between cursor-pointer group text-[#17184B]"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div>
                <div className="flex justify-between items-center border-b border-[#17184B]/10 pb-sm mb-lg">
                  <span className="font-mono text-xs text-[#17184B]/50 font-semibold">PRINCIPLE_04</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold bg-[#D3DDE7] px-2.5 py-0.5 rounded-full">EVOLUTION: UPGRADE</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-lg">
                  <div className="max-w-xl">
                    <span className="material-symbols-outlined text-[48px] text-[#17184B]/80 group-hover:text-[#D8E63C] transition-colors duration-300 mb-md block">school</span>
                    <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase text-[#17184B] mb-md">Continuous Learning</h3>
                    <p className="font-sans text-xs md:text-sm text-[#17184B]/70 leading-relaxed">
                      The technology landscape shifts constantly. We allocate dedicated time, budget, and compute resources for our engineers to master emerging paradigms, contribute to open-source protocols, and lead design spikes.
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-[72px] text-[#17184B]/10 hidden md:block select-none">terminal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Pipeline Verification Suite Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-[#17184B]/10 bg-grid-pattern relative">
          <div className="absolute inset-0 bg-[#F0EEE9]/90"></div>
          
          <div className="relative z-10">
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <span className="font-sans text-xs uppercase tracking-widest text-[#17184B]/60 font-extrabold block mb-sm">02 // The Recruitment Pipeline</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-[#17184B] mb-md">Pipeline Verification Suite</h2>
              <p className="font-sans text-sm text-[#17184B]/70">A structured, predictable, and fully transparent compiler path to joining our engineering nodes.</p>
            </div>

            <div className="relative mt-12">
              {/* Connector line for desktop view */}
              <div className="absolute top-[48px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-[#D8E63C]/30 via-[#D3DDE7]/40 to-[#17184B]/20 hidden lg:block -z-0" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-md relative">
                {pipelineStages.map((stage, idx) => (
                  <div 
                    key={idx}
                    className="card-neumorphic-exact p-md flex flex-col justify-between min-h-[220px] transition-all duration-300 text-[#17184B] cursor-pointer relative z-10 group bg-white"
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-md">
                        <span className="font-mono text-[9px] text-[#17184B]/40 font-bold uppercase tracking-widest">{stage.phase}</span>
                        <span className="font-mono text-[9px] uppercase tracking-wider font-extrabold text-[#D8E63C] bg-[#17184B] px-2 py-0.5 rounded-md shadow-sm">
                          {stage.step}
                        </span>
                      </div>
                      <h4 className="font-display text-xs font-bold uppercase text-[#17184B] mb-sm border-b border-[#17184B]/5 pb-xs group-hover:text-[#D8E63C] transition-colors duration-300">
                        {stage.name}
                      </h4>
                      <p className="font-sans text-[11px] text-[#17184B]/70 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                    <div className="mt-md pt-sm border-t border-[#17184B]/5 flex justify-between items-center">
                      <span className="font-mono text-[8px] font-bold text-neutral-450 tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D8E63C]"></span>
                        {stage.check}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Requisitions Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="jobs">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-lg">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#17184B]/60 font-extrabold block mb-sm">03 // Careers Index</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-[#17184B]">Open Requisitions</h2>
              <p className="font-sans text-sm text-[#17184B]/70 mt-xs">Filter active roles and query current parameters.</p>
            </div>

            {/* Interactive Category Selector Pills */}
            <div className="flex flex-wrap gap-xs bg-[#EBE8E1] p-1.5 rounded-full border border-neutral-250 max-md:w-full max-md:justify-center">
              {["All Departments", "Engineering", "Design", "Consulting"].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setDepartment(dept)}
                  className={`px-5 py-2 font-sans text-xs uppercase tracking-widest rounded-full transition-all duration-300 font-bold cursor-pointer ${
                    department === dept 
                      ? "bg-[#17184B] text-white shadow-sm"
                      : "text-[#17184B]/70 border-transparent hover:text-[#17184B] hover:bg-white/40"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl relative z-10">
            {filteredJobs.map((job) => (
              <Link 
                key={job.slug} 
                href={`/careers/jobs/${job.slug}`}
                className="flex flex-col card-neumorphic-exact overflow-hidden group cursor-pointer transition-all duration-300 text-primary w-full p-md bg-white hover:scale-[1.01]"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                {/* Visual Image container with margin and curves */}
                <div className="aspect-[16/10] relative overflow-hidden rounded-[36px] bg-neutral-100 w-full border border-neutral-200/50 shadow-inner">
                  <img 
                    alt={job.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.04]" 
                    src={job.image} 
                  />
                  {job.hot && (
                    <div className="absolute top-md right-md bg-white/90 backdrop-blur-sm px-3 py-1 border border-neutral-200/20 rounded-full shadow-sm">
                      <span className="font-label-sm text-[8px] uppercase tracking-widest text-secondary font-extrabold">Hot Role</span>
                    </div>
                  )}
                </div>

                {/* Card description details */}
                <div className="px-sm pt-lg pb-sm flex flex-col flex-grow gap-sm justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between text-on-surface-variant font-mono text-[9px] uppercase tracking-widest mb-xs">
                      <span className="text-secondary font-bold">{job.department}</span>
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-extrabold uppercase text-[#17184B] leading-tight group-hover:text-secondary transition-colors duration-300 mt-xs">
                      {job.title}
                    </h3>
                    <p className="font-sans text-xs text-[#17184B]/70 line-clamp-3 mt-xs leading-relaxed">
                      {job.summary}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-lg pt-sm border-t border-[#17184B]/5 w-full">
                    <span className="font-sans text-[9px] uppercase tracking-widest font-extrabold text-[#17184B] group-hover:text-secondary inline-flex items-center gap-1 transition-colors duration-300">
                      Query Parameters & Apply <span className="material-symbols-outlined text-[12px] group-hover:translate-x-0.5 transition-transform duration-300">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {filteredJobs.length === 0 && (
              <div className="col-span-full card-neumorphic-exact bg-white flex flex-col items-center justify-center py-20 text-[#17184B]">
                <span className="material-symbols-outlined text-[48px] text-[#17184B]/20 mb-sm">search_off</span>
                <p className="font-sans text-sm font-semibold">No active requisitions match your filter criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
