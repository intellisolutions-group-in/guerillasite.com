"use client";

import React, { useState, useEffect, useRef } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TelemetrySimulator2D from "@/components/ui/TelemetrySimulator2D";
import HeroVideoTriptych from "@/components/ui/HeroVideoTriptych";

const techStackData = {
  frontend: [
    { name: "Next.js", desc: "React Framework for web apps", level: "Production", color: "from-black to-neutral-800" },
    { name: "React 19", desc: "UI Library with Server Actions", level: "Production", color: "from-blue-600 to-cyan-500" },
    { name: "TypeScript", desc: "Type-safe JavaScript dialect", level: "Standard", color: "from-blue-700 to-indigo-600" },
    { name: "Tailwind CSS v4", desc: "Utility-first layout engine", level: "Standard", color: "from-teal-500 to-cyan-400" },
  ],
  backend: [
    { name: "Go (Golang)", desc: "High-performance systems language", level: "Production", color: "from-cyan-600 to-blue-500" },
    { name: "Node.js", desc: "Asynchronous runtime engine", level: "Production", color: "from-green-600 to-emerald-500" },
    { name: "gRPC / Protobuf", desc: "Sub-millisecond microservice RPC", level: "Standard", color: "from-purple-600 to-indigo-600" },
    { name: "Python", desc: "ML analytics and script orchestration", level: "Standard", color: "from-yellow-600 to-amber-500" },
  ],
  cloud: [
    { name: "AWS", desc: "Amazon Cloud Web Infrastructure", level: "Multi-Region", color: "from-orange-500 to-amber-600" },
    { name: "Google Cloud", desc: "GCP BigQuery & Compute Engines", level: "Hybrid", color: "from-blue-500 to-red-500" },
    { name: "Kubernetes", desc: "Containerized node orchestration", level: "Scale-Out", color: "from-blue-600 to-indigo-500" },
    { name: "Terraform", desc: "Declarative Infrastructure as Code", level: "Standard", color: "from-purple-700 to-violet-600" },
  ],
  databases: [
    { name: "PostgreSQL", desc: "Relational database consistency", level: "High-Availability", color: "from-blue-800 to-indigo-700" },
    { name: "Redis", desc: "In-memory cache & pub/sub broker", level: "Sub-millisecond", color: "from-red-600 to-rose-500" },
    { name: "MongoDB", desc: "Document-store flexible schemas", level: "Standard", color: "from-green-600 to-emerald-500" },
    { name: "Apache Kafka", desc: "Distributed event streaming log", level: "Event-Sourced", color: "from-neutral-700 to-black" },
  ]
};

const coreOfferings = [
  {
    title: "Cloud Infrastructure",
    tag: "High Availability",
    icon: "cloud",
    desc: "Designing and executing resilient, scalable cloud architectures. We migrate legacy monolithic structures to modern distributed node arrays without downtime.",
    features: ["Multi-Region Active-Active Clusters", "Declarative IaC (Terraform)", "Self-Healing Container Mesh Configs"],
    image: "/images/cloud_infrastructure_ai.png",
    link: "/services/cloud-infrastructure"
  },
  {
    title: "Cybersecurity Hardening",
    tag: "Zero-Trust Security",
    icon: "security",
    desc: "Implementing absolute data sovereignty and active security matrices. We integrate zero-trust authentication loops, payload encryption, and proactive warning triggers.",
    features: ["End-to-End Encrypted Data Pipes", "Multi-Factor Access Hardening", "Continuous Threat Simulation Vectors"],
    image: "/images/cybersecurity_hardening_ai.png",
    link: "/services/cybersecurity"
  },
  {
    title: "AI & Machine Learning",
    tag: "Autonomous Systems",
    icon: "memory",
    desc: "Deploying production-ready analytics engines and custom cognitive architectures. We embed fine-tuned predictive models directly into operations logic.",
    features: ["Time-Series Anomaly Forecasters", "Fine-Tuned LLM Agent Integrations", "Optimized Training Pipelines on Edge"],
    image: "/images/artificial_intelligence_ai.png",
    link: "/services/ai-machine-learning"
  },
  {
    title: "Custom Software Engineering",
    tag: "Full-Stack Scale",
    icon: "code_blocks",
    desc: "Bespoke engineering of high-throughput corporate systems. We build type-safe, compile-time verified database ledgers and API gateways.",
    features: ["Robust CRM & ERP Core Engines", "High-Throughput Relational Databases", "Custom API Middleware Interfaces"],
    image: "/images/software_engineering_ai.png",
    link: "/services/website-development"
  }
];

const processStages = [
  {
    phase: "01",
    name: "Telemetry Audit",
    metric: "100+ Indicators Analyzed",
    details: "We deploy passive telemetry probes to analyze throughput bottleneck metrics, database lock patterns, and memory allocations of your legacy servers.",
    icon: "analytics"
  },
  {
    phase: "02",
    name: "Architecture Drafting",
    metric: "Zero Single Points of Failure",
    details: "Our principal architects draft an eventually consistent microservices architecture, mapping state machines to low-latency message buses.",
    icon: "schema"
  },
  {
    phase: "03",
    name: "Distributed Engineering",
    metric: "Pure Typed Verification",
    details: "Engineers build microservices in Go and TypeScript, implementing automated integration suites and end-to-end type safety tests.",
    icon: "code"
  },
  {
    phase: "04",
    name: "SLA Verification",
    metric: "99.99% Uptime Verified",
    details: "We launch load tests simulating 10x peak traffic patterns and verify sub-45ms responses before pushing production DNS records.",
    icon: "verified"
  }
];

const domainVerticals = [
  {
    title: "Fintech & High-Frequency Ledgers",
    metric: "Sub-2ms Reconciliation",
    image: "/images/systems_architect_board.png",
    themeColor: "text-secondary",
    desc: "Deploying deterministic ledger architectures capable of handling 100k+ TPS with synchronous audit trails and risk-mitigation layers.",
    features: ["Double-entry ledger engines", "Secure payment pipelines", "Anti-money laundering detection engines"],
    link: "/industries/fintech"
  },
  {
    title: "Healthcare Digital Infrastructures",
    metric: "FHIR-Compliant Secure Mesh",
    image: "/images/systems_architect.png",
    themeColor: "text-[#D3DDE7]",
    desc: "Unifying legacy healthcare databases into encrypted, secure patient record meshes with granular telemetry.",
    features: ["End-to-end payload encryption", "HL7 / FHIR compatibility integrations", "Audit-trail validation logs"],
    link: "/industries/healthcare"
  },
  {
    title: "Smart Logistics & Edge Routing",
    metric: "100k+ Connected Devices",
    image: "/images/cloud_ops_engineer.png",
    themeColor: "text-[#D8E63C]",
    desc: "Orchestrating real-time GPS telemetry streams and dynamic delivery route solving systems for multi-modal carrier fleets.",
    features: ["Dynamic routing heuristics", "Edge node offline synchronization", "Geo-fencing push trigger systems"],
    link: "/industries/logistics"
  },
  {
    title: "Manufacturing & Industrial Twins",
    metric: "35% Asset Downtime Reduction",
    image: "/images/erp_operations_control.png",
    themeColor: "text-secondary",
    desc: "Streaming industrial IIoT timeseries sensor points into predictive digital twin simulations to forecast machinery breakdown.",
    features: ["Vibration anomaly alert triggers", "Continuous MTBF analytics loops", "Industrial SCADA link aggregators"],
    link: "/industries/manufacturing"
  }
];

const revealWords = [
  { type: "text", word: "GuerillaSite" },
  { type: "text", word: "is" },
  { type: "text", word: "the" },
  { type: "text", word: "platform" },
  { type: "text", word: "where" },
  { type: "text", word: "architecture," },
  { type: "text", word: "telemetry," },
  { type: "text", word: "and" },
  { type: "text", word: "container" },
  { type: "text", word: "meshes" },
  { type: "text", word: "are" },
  { type: "text", word: "integrated" },
  { type: "text", word: "to" },
  { type: "text", word: "deliver" },
  { 
    type: "highlight", 
    icon: "shield", 
    text: "uncompromised security",
    color: "bg-[#D8E63C]" 
  },
  { type: "text", word: "and" },
  { 
    type: "highlight", 
    icon: "bolt", 
    text: "microsecond speed.",
    color: "bg-[#D3DDE7]" 
  }
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "cloud" | "databases">("frontend");
  const [activeOffering, setActiveOffering] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const horizontalTriggerRef = useRef<HTMLDivElement>(null);
  const revealTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop: Active step highlighting + overlapping stacked transitions
    mm.add("(min-width: 1024px)", () => {
      processStages.forEach((stage, idx) => {
        // Active indicator on scroll
        ScrollTrigger.create({
          trigger: `#step-card-${idx}`,
          start: "top 220px",
          end: "bottom 220px",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveStep(idx);
            }
          },
          onEnterBack: () => {
            setActiveStep(idx);
          }
        });

        // Layered overlapping animation: scale down and fade previous card as next card enters
        if (idx < processStages.length - 1) {
          gsap.to(`#step-card-${idx}`, {
            scrollTrigger: {
              trigger: `#step-card-${idx + 1}`,
              start: "top 95%",
              end: "top 180px",
              scrub: true,
            },
            opacity: 0.15,
            scale: 0.9,
            y: -50,
            ease: "none"
          });
        }
      });

      // Case Studies: Horizontal Scroll Pinning & Translation Animation
      const pinContainer = horizontalTriggerRef.current;
      const scrollContainer = horizontalScrollRef.current;
      if (pinContainer && scrollContainer) {
        gsap.to(scrollContainer, {
          x: () => -(scrollContainer.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: pinContainer,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollContainer.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });
      }
    });

    // Industries: Split Screen Active Indicator Scroll Trigger (All viewports)
    const industryCards = gsap.utils.toArray(".gsap-industry-card") as Element[];
    industryCards.forEach((card, idx: number) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 350px",
        end: "bottom 350px",
        onToggle: (self) => {
          if (self.isActive) {
            setActiveIndustry(idx);
          }
        },
        onEnterBack: () => {
          setActiveIndustry(idx);
        }
      });
    });

    // Mobile: Highlight vertical card as it enters focus
    mm.add("(max-width: 1023px)", () => {
      processStages.forEach((stage, idx) => {
        ScrollTrigger.create({
          trigger: `#step-card-${idx}`,
          start: "top 40%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveStep(idx);
            }
          },
          onEnterBack: () => {
            setActiveStep(idx);
          }
        });
      });
    });

    // Animate hero text on enter
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-fade-in",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power4.out" }
    );

    // Scroll Text Reveal Animation
    const revealContainer = revealTextRef.current;
    if (revealContainer) {
      const items = revealContainer.querySelectorAll(".reveal-item");
      gsap.to(items, {
        scrollTrigger: {
          trigger: revealContainer,
          start: "top 75%",
          end: "bottom 35%",
          scrub: true,
        },
        opacity: 1,
        stagger: 0.05,
        duration: 0.001,
        ease: "none",
      });
    }

    // Refresh ScrollTrigger to calculate correct bounds after component mount
    ScrollTrigger.refresh();

    return () => {
      mm.revert();
    };
  }, []);

  const scrollToStep = (idx: number) => {
    const el = document.getElementById(`step-card-${idx}`);
    if (el) {
      const yOffset = -150; // account for sticky navbar header
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).lenis) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).lenis.scrollTo(el, { offset: yOffset });
      } else {
        const originalPosition = el.style.position;
        el.style.position = "relative"; // Reset sticky temporarily to calculate natural offsetTop
        
        let top = 0;
        let curr: HTMLElement | null = el;
        while (curr) {
          top += curr.offsetTop;
          curr = curr.offsetParent as HTMLElement | null;
        }
        
        el.style.position = originalPosition; // Restore original sticky setting
        
        const y = top + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setActiveStep(idx);
    }
  };

  const scrollToIndustry = (idx: number) => {
    const el = document.getElementById(`industry-card-${idx}`);
    if (el) {
      const yOffset = -150; // account for sticky navbar header
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).lenis) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).lenis.scrollTo(el, { offset: yOffset });
      } else {
        const originalPosition = el.style.position;
        el.style.position = "relative";
        
        let top = 0;
        let curr: HTMLElement | null = el;
        while (curr) {
          top += curr.offsetTop;
          curr = curr.offsetParent as HTMLElement | null;
        }
        
        el.style.position = originalPosition;
        
        const y = top + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setActiveIndustry(idx);
    }
  };


  return (
    <>
      <TopNavBar />
      <main className="flex-grow block w-full pb-16 bg-[#F0EEE9]">
        
        {/* Immersive Split Hero Section */}
        <section className="w-full min-h-[92vh] max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-52 md:pt-56 pb-20 flex items-center justify-center relative overflow-hidden z-0">
          
          {/* Background Video in Rounded Corner Box */}
          <div className="absolute top-24 bottom-4 left-4 right-4 md:top-28 md:bottom-8 md:left-8 md:right-8 rounded-[50px] overflow-hidden -z-20 shadow-[20px_20px_60px_rgba(23,24,75,0.05),-20px_-20px_60px_rgba(255,255,255,0.7)] bg-[#EBE8E1]">
            <HeroVideoTriptych />
            {/* Soft gradient overlay to blend edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F0EEE9]/40 via-transparent to-[#F0EEE9]/20 pointer-events-none" />
          </div>

          {/* Soft ambient decorative halos */}
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#D8E63C]/10 rounded-full filter blur-[100px] -z-10 pointer-events-none animate-pulse duration-[10000ms]"></div>
          <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#D3DDE7]/15 rounded-full filter blur-[80px] -z-10 pointer-events-none animate-pulse duration-[8000ms]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center w-full">
            {/* Left side: Texts */}
            <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-left gap-lg z-10">
              <span className="hero-fade-in font-sans text-xs uppercase tracking-widest text-[#17184B] font-extrabold block bg-white/70 border border-[#17184B]/10 px-4 py-1.5 rounded-full shadow-sm">
                Systems Architect & Developer Operations
              </span>
              <h1 className="hero-fade-in font-display text-4xl md:text-[68px] lg:text-[76px] uppercase font-extrabold tracking-tighter text-white leading-[0.95] mt-md" style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.4)" }}>
                Engineering Fluidity <br />
                <span className="font-serif italic font-normal text-[#D8E63C]">for Enterprise Scale</span>.
              </h1>
              <p className="hero-fade-in font-sans text-md md:text-body-lg text-white/90 max-w-2xl leading-relaxed mt-md" style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)" }}>
                We design, construct, and manage high-performance software systems. Delivering robust, microsecond-accurate technological foundations that drive operational excellence and absolute market security.
              </p>

              <div className="hero-fade-in flex flex-wrap gap-md mt-xl">
                <Link className="btn-primary" href="/services">
                  Explore Solutions
                </Link>
                <Link className="btn-ghost flex items-center gap-2" href="/technologies">
                  View Technology Stack
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>


          </div>
        </section>

        {/* Horizontal separator */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-[#17184B]/10" />
        </div>

        {/* Scroll-Triggered Text Reveal Section */}
        <section className="w-full max-w-none px-margin-mobile md:px-margin-desktop py-28 flex flex-col items-start gap-md bg-[#F0EEE9]">
          <div className="font-mono text-xs uppercase tracking-widest text-[#17184B]/60 bg-white border border-[#17184B]/10 px-4 py-1.5 rounded-full shadow-sm mb-md">
            The architecture, rebuilt on telemetry
          </div>
          
          <h2 ref={revealTextRef} className="font-display text-4xl md:text-6xl lg:text-[72px] xl:text-[80px] font-extrabold uppercase tracking-tight text-[#17184B] leading-[1.1] w-full max-w-none">
            {revealWords.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.type === "highlight" ? (
                  <span className="reveal-item inline-flex items-center align-middle mx-2 my-1 opacity-20">
                    <span className={`${item.color} text-[#17184B] h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-l-xl border-2 border-r-0 border-[#17184B]`}>
                      <span className="material-symbols-outlined text-[18px] md:text-[22px] font-bold">{item.icon}</span>
                    </span>
                    <span className="bg-[#17184B] text-white px-4 md:px-5 h-10 md:h-12 flex items-center rounded-r-xl border-2 border-[#17184B] font-display text-xs md:text-sm font-extrabold uppercase tracking-wide">
                      {item.text}
                    </span>
                  </span>
                ) : (
                  <span className="inline-flex whitespace-nowrap">
                    {(item.word ?? "").split("").map((char, cidx) => (
                      <span key={cidx} className="reveal-item opacity-20">
                        {char}
                      </span>
                    ))}
                  </span>
                )}
                {idx < revealWords.length - 1 && " "}
              </React.Fragment>
            ))}
          </h2>
        </section>

        {/* Horizontal separator */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-[#17184B]/10" />
        </div>

        {/* Redesigned Offering Showcase (Interactive sliding tabs layout) */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <div className="max-w-3xl mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D8E63C] font-extrabold block mb-sm">01 // Strategic Solutions</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#17184B]">Core Offerings</h2>
            <p className="font-sans text-sm md:text-body-md text-[#17184B]/70 mt-sm">Strategic engineering services built with raw structural precision to scale global enterprise infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-stretch">
            {/* Interactive Offering Selector Links (Left) */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-md">
              {coreOfferings.map((offering, idx) => (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveOffering(idx)}
                  className={`w-full text-left p-lg rounded-[24px] transition-all duration-300 flex items-center justify-between cursor-pointer border-l-4 ${
                    activeOffering === idx
                      ? "border-[#17184B] bg-[#EBE8E1] shadow-[inset_4px_4px_10px_rgba(23,24,75,0.08),inset_-4px_-4px_10px_rgba(255,255,255,0.7)] scale-[1.01] text-[#17184B]"
                      : "border-transparent bg-transparent opacity-70 hover:opacity-100 text-[#17184B]/80 hover:bg-[#EBE8E1]/30"
                  }`}
                >
                  <div className="flex items-center gap-md">
                    {/* Small image thumbnail on the left */}
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-neutral-250/50 bg-white relative">
                      <img
                        src={offering.image}
                        alt={offering.title}
                        className={`w-full h-full object-cover transition-all duration-300 ${
                          activeOffering === idx ? "grayscale-0 opacity-100" : "grayscale opacity-60"
                        }`}
                      />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold uppercase text-[#17184B] leading-none">{offering.title}</h4>
                      <span className="font-sans text-[10px] text-[#17184B]/60 font-semibold tracking-wide uppercase mt-1 block">{offering.tag}</span>
                    </div>
                  </div>
                  <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${
                    activeOffering === idx ? "translate-x-1 text-[#D8E63C]" : "text-neutral-300"
                  }`}>
                    chevron_right
                  </span>
                </button>
              ))}
            </div>

            {/* Offering details Display panel (Right) */}
            <div className="col-span-12 lg:col-span-7 card-neumorphic p-xl md:p-xxl min-h-[480px] flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center h-full w-full">
                {/* Text column */}
                <div className="col-span-12 md:col-span-7 flex flex-col gap-md">
                  <div className="flex justify-between items-center border-b border-[#17184B]/10 pb-sm">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#17184B]/60">OFFERING // 0{activeOffering + 1}</span>
                    <span className="font-mono text-[9px] bg-[#D3DDE7] text-[#17184B] px-3.5 py-1 rounded-full font-extrabold uppercase tracking-wider">{coreOfferings[activeOffering].tag}</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase text-[#17184B] tracking-tight">
                    {coreOfferings[activeOffering].title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-[#17184B]/75 leading-relaxed">
                    {coreOfferings[activeOffering].desc}
                  </p>

                  <ul className="space-y-3 mt-sm">
                    {coreOfferings[activeOffering].features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 font-sans text-xs text-[#17184B]/80 font-medium">
                        <span className="material-symbols-outlined text-[10px] bg-[#D8E63C]/20 text-[#17184B] p-1 rounded-full font-bold">check</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-md">
                    <Link href={coreOfferings[activeOffering].link} className="btn-primary py-2.5 px-6 font-mono text-[10px] uppercase font-bold tracking-wider inline-flex items-center gap-1.5 shadow-sm">
                      Explore Technical Specs
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>

                {/* AI Image column */}
                <div className="col-span-12 md:col-span-5 h-full min-h-[260px] flex items-center justify-center">
                  <div className="w-full h-full min-h-[260px] relative overflow-hidden rounded-[32px] shadow-[8px_8px_24px_rgba(23,24,75,0.05),-8px_-8px_24px_rgba(255,255,255,0.7)] border border-neutral-250/50 bg-white">
                    <img 
                      src={coreOfferings[activeOffering].image} 
                      alt={coreOfferings[activeOffering].title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator Line */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-[#17184B]/10" />
        </div>

        {/* fluid Process Timeline (Split-Screen Vertical Layout) */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 select-none relative card-neumorphic mb-12">
          <div className="absolute top-10 left-1/4 w-[350px] h-[350px] bg-[#D8E63C]/5 rounded-full filter blur-[80px] -z-10 pointer-events-none animate-pulse duration-[8000ms]"></div>
          <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-[#D3DDE7]/5 rounded-full filter blur-[70px] -z-10 pointer-events-none animate-pulse duration-[6000ms]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start relative z-10">
            {/* Left Sticky Navigation Column */}
            <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-[160px] self-start flex flex-col gap-lg pr-4">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-[#D8E63C] font-extrabold block mb-sm">02 // Operations Roadmap</span>
                <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#17184B] leading-none mb-md">Process Flow</h2>
                <p className="font-sans text-sm text-[#17184B]/70 max-w-xl">Observe our structured pipeline that aligns targets and scales architectures without friction.</p>
              </div>

              {/* Vertical Navigation Buttons */}
              <div className="flex flex-col gap-md relative pl-1 w-full mt-4">
                {processStages.map((stage, idx) => (
                  <button
                    key={stage.phase}
                    onClick={() => scrollToStep(idx)}
                    className={`flex items-center gap-lg border p-md text-left transition-all duration-300 w-full rounded-[24px] cursor-pointer ${
                      activeStep === idx 
                        ? "border-neutral-250 bg-white shadow-md scale-[1.02] text-[#17184B]"
                        : "border-transparent bg-transparent hover:bg-[#D3DDE7]/30 text-[#17184B]/50 hover:text-[#17184B]"
                    }`}
                  >
                    <span className={`font-display text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full border shrink-0 transition-all duration-300 ${
                      activeStep === idx 
                        ? "bg-[#D3DDE7] text-[#17184B] border-neutral-300 shadow-sm scale-110" 
                        : "bg-[#17184B]/10 border-transparent text-[#17184B]"
                    }`}>
                      {stage.phase}
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-bold uppercase leading-none">{stage.name}</h4>
                      <span className="font-sans text-[10px] text-[#17184B]/60 font-semibold uppercase tracking-wider block mt-1.5">{stage.metric}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Scrollable Cards Panel */}
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-12 lg:gap-[50vh] w-full pb-[10vh]">
              {processStages.map((stage, idx) => {
                // Mix-and-match card layouts:
                // Card 1: Neumorphic cloud dancer style (light theme blended neumorphism)
                // Card 2: LilaRest Conic Style original
                // Card 3: Neumorphic exact gray style (requested by user)
                // Card 4: Light Conic CRT style
                let cardClass = "";
                let overlayEl = null;
                let innerClass = "";

                if (idx === 0) {
                  cardClass = "card-neumorphic p-xl min-h-[350px]";
                } else if (idx === 1) {
                  cardClass = "card-larest w-full min-h-[350px]";
                  overlayEl = <div className="card-larest-overlay" />;
                  innerClass = "card-larest-inner w-full p-xl h-full min-h-[332px]";
                } else if (idx === 2) {
                  cardClass = "card-neumorphic-exact p-xl min-h-[350px]";
                } else {
                  cardClass = "card-crt-light w-full min-h-[350px]";
                  overlayEl = <div className="card-crt-light-overlay" />;
                  innerClass = "card-crt-light-inner w-full p-xl h-full min-h-[332px]";
                }

                return (
                  <div
                    key={stage.phase}
                    id={`step-card-${idx}`}
                    style={{
                      top: "160px",
                      zIndex: 10 + idx
                    }}
                    className={`w-full relative overflow-hidden transition-all duration-300 lg:sticky ${cardClass}`}
                  >
                    {overlayEl}
                    <div className={`${innerClass} flex flex-col justify-between h-full`}>
                      <div className="flex flex-col gap-md">
                        <div className="flex justify-between items-center border-b border-[#17184B]/10 pb-sm z-10">
                          <div className="flex items-center gap-xs">
                            <span className="material-symbols-outlined text-[24px] text-[#17184B] bg-[#D8E63C] p-1.5 rounded-full">{stage.icon}</span>
                            <span className="font-sans text-[10px] uppercase tracking-widest text-[#17184B] font-extrabold bg-white border border-neutral-250 px-3 py-1 rounded-full ml-sm">PHASE {stage.phase}</span>
                          </div>
                          <span className="font-mono text-[9px] bg-[#D8E63C] text-[#17184B] px-3 py-0.5 rounded-full font-bold uppercase tracking-wider z-10">{stage.metric}</span>
                        </div>

                        <h3 className="font-display text-2xl font-bold uppercase text-[#17184B] tracking-tight mt-sm z-10">
                          {stage.name}
                        </h3>

                        <p className="font-sans text-xs md:text-sm text-[#17184B]/75 leading-relaxed mt-xs z-10">
                          {stage.details}
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-md border-t border-[#17184B]/10 mt-xl z-10">
                        <span className="material-symbols-outlined text-[24px] text-[#17184B]/60">{stage.icon}</span>
                        <span className="font-mono text-[9px] text-[#17184B]/50 uppercase tracking-widest font-semibold">STAGE_PROCESSED</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Separator Line */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-[#17184B]/10" />
        </div>

        {/* Featured Case Studies (Horizontal Scroll Section with Deep Black Separator Styling) */}
        <section 
          ref={horizontalTriggerRef} 
          className="relative z-10 w-full bg-[#000000] text-white py-24 select-none overflow-hidden border-t border-b border-white/5 min-h-[90vh] flex flex-col justify-center"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#D8E63C]/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D8E63C]/5 rounded-full filter blur-[100px] pointer-events-none animate-pulse duration-[6000ms]" />
          
          {/* Section Header */}
          <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 relative z-10 shrink-0">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D8E63C] font-extrabold block mb-sm">
              03 // Proof of Performance
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
              Case Studies
            </h2>
            <p className="font-sans text-sm text-[#D3DDE7]/70 mt-sm max-w-xl">
              Real-world implementations detailing microsecond ledgers, multi-region failovers, and digital models.
            </p>
          </div>

          {/* Horizontal Scroll Deck */}
          <div className="w-full overflow-hidden relative z-10 flex-grow flex items-center">
            <div 
              ref={horizontalScrollRef} 
              className="flex flex-row gap-lg px-margin-mobile md:px-margin-desktop w-full lg:w-max pb-8 overflow-x-auto lg:overflow-visible scrollbar-none snap-x snap-mandatory lg:snap-none"
              style={{ willChange: "transform" }}
            >
              {[
                {
                  title: "Cloud Infrastructure Migration",
                  metric: "45% Cloud Cost Reduction",
                  image: "/images/cloud_infrastructure_ai.png",
                  tags: ["Kubernetes", "AWS", "Terraform", "CI/CD"],
                  desc: "Designing and executing a zero-downtime migration of a legacy enterprise core network cluster into multi-region Kubernetes nodes.",
                  bg: "from-[#202142] to-[#1c1d3a]"
                },
                {
                  title: "Fintech Real-Time Telemetry Hub",
                  metric: "Sub-2ms Processing Bounds",
                  image: "/images/artificial_intelligence_ai.png",
                  tags: ["Go (Golang)", "Apache Kafka", "gRPC", "Redis"],
                  desc: "Engineering a transaction processing ledger scaling to 10B+ daily requests with auditing tracks and verification checks.",
                  bg: "from-[#202142] to-[#1a182b]"
                },
                {
                  title: "Industrial IIoT Digital Twin",
                  metric: "35% Asset Downtime Reduction",
                  image: "/images/software_engineering_ai.png",
                  tags: ["C++", "TimescaleDB", "MQTT", "Python ML"],
                  desc: "Mapping a factory floor to simulated timeseries engines, predicting machine component wear hours before structural breakdown.",
                  bg: "from-[#202142] to-[#162725]"
                },
                {
                  title: "Enterprise CRM & ERP Systems",
                  metric: "99.99% SLA Uptime Verified",
                  image: "/images/cybersecurity_hardening_ai.png",
                  tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
                  desc: "Consolidating siloed corporate databases into unified patient record logs running under active load warning loops.",
                  bg: "from-[#202142] to-[#2b211a]"
                }
              ].map((panel, index) => (
                <div 
                  key={index} 
                  className="gsap-case-study-card w-[85vw] md:w-[600px] lg:w-[680px] h-[450px] md:h-[480px] card-crt-black shrink-0 relative snap-center"
                >
                  {/* CRT Screen Scanline Overlay */}
                  <div className="card-crt-black-overlay" />
                  
                  {/* CRT Screen Inner Container */}
                  <div className="card-crt-black-inner w-full h-full p-lg md:p-xl flex flex-col md:flex-row gap-lg justify-between items-stretch">
                    <div className="flex-1 flex flex-col justify-between z-10">
                      <div className="flex flex-col gap-md">
                        <div className="flex justify-between items-center border-b border-white/5 pb-sm">
                          <span className="font-mono text-xs text-neutral-500 font-semibold">PROJECT_{index + 1}</span>
                          <span className="font-sans text-[10px] bg-[#D8E63C] text-[#17184B] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">{panel.metric}</span>
                        </div>
                        
                        <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase text-white tracking-tight mt-xs leading-tight">
                          {panel.title}
                        </h3>
                        
                        <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed max-w-xl mt-2">
                          {panel.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-xs mt-lg pt-sm">
                        {panel.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="font-sans text-[9px] uppercase tracking-wider font-semibold text-neutral-300 bg-[#17184B] border border-white/10 px-2.5 py-0.5 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Card Image */}
                    <div className="flex-1 min-h-[160px] md:min-h-0 relative rounded-[24px] overflow-hidden border border-white/10 z-10 shrink-0">
                      <img 
                        src={panel.image} 
                        alt={panel.title} 
                        className="w-full h-full object-cover opacity-85 hover:scale-105 transition-all duration-700 rounded-[24px]" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-[24px]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Separator Line */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-[#17184B]/10" />
        </div>

        {/* Domain Verticals Vertical Split Layout (Light/Brutalist themed) */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 select-none relative card-neumorphic mb-12">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#D8E63C]/5 rounded-full filter blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start relative z-10">
            {/* Left Sticky Title and Tab Indicator Navigation Panel */}
            <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-[160px] self-start flex flex-col gap-lg pr-4">
              <div>
                <span className="font-sans text-xs uppercase tracking-widest text-[#D8E63C] font-extrabold block mb-xs">
                  04 // Domain Expertise
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#17184B] leading-tight mb-md">
                  Industries <br />We Transform
                </h2>
                <p className="font-sans text-sm text-[#17184B]/70 max-w-md">
                  We build <strong>specialized, compliant technology architectures</strong> tailored to scale vertical-specific business modules.
                </p>
              </div>

              {/* Vertical Navigation Tabs */}
              <div className="flex flex-col gap-md relative pl-1 w-full mt-4">
                {domainVerticals.map((vertical, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndustry(idx)}
                    className={`flex items-center gap-lg border p-md text-left transition-all duration-300 w-full rounded-[24px] cursor-pointer ${
                      activeIndustry === idx 
                        ? "border-neutral-250 bg-white shadow-md scale-[1.02] text-[#17184B]"
                        : "border-transparent bg-transparent hover:bg-[#D3DDE7]/30 text-neutral-500 hover:text-[#17184B]"
                    }`}
                  >
                    <span className={`font-display text-sm font-extrabold w-8 h-8 flex items-center justify-center rounded-full border shrink-0 transition-all duration-300 ${
                      activeIndustry === idx 
                        ? "bg-[#D3DDE7] text-[#17184B] border-neutral-300 shadow-sm scale-110" 
                        : "bg-[#17184B]/10 border-transparent text-neutral-600"
                    }`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-display text-xs font-extrabold uppercase leading-tight tracking-wider transition-colors duration-300">
                        {vertical.title.split(" & ")[0].split(" Digital ")[0].split(" We ")[0]}
                      </h4>
                      <span className="font-sans text-[9px] text-[#17184B]/50 uppercase tracking-widest">{vertical.metric}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Scrollable Cards Panel */}
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-12 lg:gap-xxl w-full pr-md lg:pr-xl pb-[10vh]">
              {domainVerticals.map((vertical, index) => {
                // Mix-and-match card layouts:
                // Card 1: card-neumorphic-exact (User's specific neumorphic layout)
                // Card 2: LilaRest Conic Light style
                // Card 3: card-neumorphic (Cloud Dancer theme soft neumorphic style)
                // Card 4: LilaRest Conic original style

                let cardClass = "";
                let overlayEl = null;
                let innerClass = "";

                if (index === 0) {
                  cardClass = "card-neumorphic-exact p-lg md:p-xl";
                } else if (index === 1) {
                  cardClass = "card-larest w-full";
                  overlayEl = <div className="card-larest-overlay" />;
                  innerClass = "card-larest-inner w-full p-lg md:p-xl h-full";
                } else if (index === 2) {
                  cardClass = "card-neumorphic p-lg md:p-xl";
                } else {
                  cardClass = "card-crt-light w-full";
                  overlayEl = <div className="card-crt-light-overlay" />;
                  innerClass = "card-crt-light-inner w-full p-lg md:p-xl h-full";
                }

                return (
                  <div 
                    key={index}
                    id={`industry-card-${index}`}
                    className={`gsap-industry-card w-full min-h-[380px] md:min-h-[450px] relative transition-all duration-300 ${cardClass}`}
                  >
                    {overlayEl}
                    <div className={`${innerClass} flex flex-col justify-between h-full`}>
                      <div className="flex flex-col gap-md">
                        <div className="flex justify-between items-center border-b border-[#17184B]/10 pb-sm">
                          <span className="font-mono text-xs text-[#17184B]/50 font-semibold">VERTICAL_0{index + 1}</span>
                          <span className={`font-sans text-[10px] bg-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${vertical.themeColor}`}>{vertical.metric}</span>
                        </div>
                        
                        <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase text-[#17184B] tracking-tight mt-xs">
                          {vertical.title}
                        </h3>
                        
                        <p className="font-sans text-xs md:text-sm text-[#17184B]/70 leading-relaxed max-w-xl mt-xs">
                          {vertical.desc}
                        </p>
                      </div>

                      {/* Image asset container */}
                      <div className="w-full h-[18vh] min-h-[120px] relative rounded-[24px] overflow-hidden border border-neutral-200 mt-md z-10 bg-white">
                        <img 
                          src={vertical.image} 
                          alt={vertical.title} 
                          className="w-full h-full object-cover opacity-90 hover:scale-105 transition-all duration-700 rounded-[24px]" 
                        />
                      </div>

                      <div className="flex justify-between items-center mt-lg pt-sm z-10 border-t border-[#17184B]/10">
                        <div className="flex flex-wrap gap-xs">
                          {vertical.features.slice(0, 2).map((feature, fIdx) => (
                            <span key={fIdx} className="font-sans text-[9px] uppercase tracking-wider font-semibold text-neutral-500 bg-neutral-100 border border-neutral-200/50 px-2.5 py-0.5 rounded-full">{feature}</span>
                          ))}
                        </div>
                        <Link href={vertical.link} className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-[#17184B] hover:text-[#D8E63C] inline-flex items-center gap-1">
                          Explore Vertical <span className="material-symbols-outlined text-[12px]">arrow_right_alt</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dynamic Tech Catalog Selector */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-lg">
            <div className="max-w-2xl">
              <span className="font-sans text-xs uppercase tracking-widest text-[#D8E63C] font-extrabold block mb-sm">Our Engineering Matrix</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#17184B]">Technology Catalog</h2>
              <p className="font-sans text-sm md:text-body-md text-[#17184B]/70 mt-sm">Filter our stack components to view production-ready system blocks.</p>
            </div>
            
            {/* Soft tab selector wrapper -> Brutalist Tab Selector */}
            <div className="flex flex-wrap gap-xs bg-[#EBE8E1] p-1.5 rounded-full border border-neutral-250 max-md:w-full max-md:justify-center">
              {(Object.keys(techStackData) as Array<keyof typeof techStackData>).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 font-sans text-xs uppercase tracking-widest rounded-full transition-all duration-300 font-bold cursor-pointer ${
                    activeTab === tab 
                      ? "bg-[#17184B] text-white shadow-sm"
                      : "text-[#17184B]/70 border-transparent hover:text-[#17184B] hover:bg-white/40"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Grid nodes with brutalist corners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {techStackData[activeTab].map((node, nIdx) => (
              <div
                key={node.name}
                className={`p-xl text-[#17184B] flex flex-col justify-between group overflow-hidden relative ${
                  nIdx % 2 === 0 ? "card-neumorphic-exact" : "card-neumorphic"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D8E63C] to-[#D8E63C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div>
                  <div className="flex justify-between items-center mb-md">
                    <span className="font-display text-lg font-bold text-[#17184B]">{node.name}</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#17184B] px-3 py-0.5 rounded-full font-bold bg-[#D8E63C]">{node.level}</span>
                  </div>
                  <p className="font-sans text-xs text-[#17184B]/70 leading-relaxed mb-md">{node.desc}</p>
                </div>
                <div className="mt-lg pt-md border-t border-neutral-250/40 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-[#17184B]/50 uppercase tracking-widest font-bold">Standard Spec</span>
                  <span className="material-symbols-outlined text-sm text-[#17184B]/60 group-hover:text-[#D8E63C] transition-colors">check_circle</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Separator Line */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-[#17184B]/10" />
        </div>

        {/* Testimonials Masonry Speech Blocks (Organic flow layout) */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <div className="max-w-3xl mb-16 text-center md:text-left">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D8E63C] font-extrabold block mb-sm">04 // Client Voice</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#17184B]">Trusted Partnerships</h2>
            <p className="font-sans text-sm text-[#17184B]/70 mt-sm">Observe telemetry satisfaction scores directly from engineering managers.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-lg space-y-lg">
            {[
              {
                text: "GuerillaSite re-architected our legacy financial ledger system from scratch. Their systems engineering team brought total clarity, delivering sub-2ms ledger reconciliations under extreme concurrent load limits.",
                author: "Amit Sharma",
                role: "Director of Core Platforms",
                gradient: "from-[#D8E63C]/10 to-transparent"
              },
              {
                text: "Their zero-trust integration framework was flawless. They mapped our entire healthcare mesh securely, implementing complete FHIR compliancy loops while pruning operational server latency by over 30%.",
                author: "Priya Nair",
                role: "VP of Technical Architecture",
                gradient: "from-[#D3DDE7]/20 to-transparent"
              },
              {
                text: "The telemetry warning dashboard is brilliant. We now identify memory allocation spikes and database lock vectors minutes before they threaten production SLAs. Exceptional execution.",
                author: "Rahul Verma",
                role: "Lead DevOps Specialist",
                gradient: "from-[#D8E63C]/10 to-transparent"
              }
            ].map((test, index) => {
              let cardClass = "";
              let overlayEl = null;
              let innerClass = "";

              if (index === 0) {
                cardClass = "card-neumorphic-exact p-xl";
              } else if (index === 1) {
                cardClass = "card-larest w-full";
                overlayEl = <div className="card-larest-overlay" />;
                innerClass = "card-larest-inner w-full p-xl h-full";
              } else {
                cardClass = "card-neumorphic p-xl";
              }

              return (
                <div 
                  key={index} 
                  className={`break-inside-avoid relative overflow-hidden transition-all duration-300 text-[#17184B] mb-lg ${cardClass}`}
                >
                  {overlayEl}
                  <div className={`${innerClass} flex flex-col justify-between h-full`}>
                    <div>
                      <span className="material-symbols-outlined text-[32px] text-[#D8E63C] mb-md block">format_quote</span>
                      <p className="font-sans text-xs md:text-sm text-[#17184B]/80 leading-relaxed italic">{test.text}</p>
                    </div>
                    <div className="mt-lg pt-md border-t border-[#17184B]/10 flex items-center justify-between">
                      <div>
                        <span className="font-display text-xs font-bold text-[#17184B] block">{test.author}</span>
                        <span className="font-sans text-[10px] text-[#17184B]/50 block">{test.role}</span>
                      </div>
                      <span className="material-symbols-outlined text-sm text-[#17184B]/40">verified</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Separator Line */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-[#17184B]/10" />
        </div>

        {/* Telemetry Dashboard Simulator */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <div className="max-w-3xl mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-[#D8E63C] font-extrabold block mb-sm">05 // System Health</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#17184B]">Telemetry Sandbox</h2>
            <p className="font-sans text-sm text-[#17184B]/70 mt-sm">Observe interactive database requests and balancing paths running inside our virtual node clusters.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-stretch">
            {/* Left box: Live node simulation */}
            <div className="col-span-12 lg:col-span-7 bg-[#17184B] text-white rounded-[50px] p-lg md:p-xl flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.15)] min-h-[400px] group relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
              
              <div className="z-10 relative">
                <div className="flex justify-between items-center border-b border-white/5 pb-sm mb-lg">
                  <div className="flex items-center gap-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 absolute"></span>
                    <span className="font-mono text-xs text-neutral-300 ml-sm font-semibold">load-balancer-routing.config</span>
                  </div>
                  <span className="font-mono text-[9px] bg-[#D8E63C] text-[#17184B] px-3.5 py-0.5 rounded-full font-bold tracking-widest uppercase animate-pulse">Simulator Running</span>
                </div>
                
                <h3 className="font-display text-xl font-bold uppercase text-white mb-sm">
                  Active Packet Forwarding Topology
                </h3>
                <p className="font-sans text-xs text-neutral-300 leading-relaxed mb-lg max-w-md">
                  Observe the distribution of simulated ingress requests directed into secondary failover databases. Heavy loads automatically trigger dynamic balancing vectors to prevent memory starvation.
                </p>
              </div>

              {/* Connected interactive 2D vector simulator */}
              <TelemetrySimulator2D />
            </div>

            {/* Right column: Stat grid & information */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-lg justify-between">
              <div className="card-neumorphic-exact p-xl flex flex-col justify-between flex-grow">
                <div>
                  <span className="material-symbols-outlined text-[#17184B] text-[24px] bg-[#D3DDE7] p-2.5 rounded-full mb-md block w-fit">schema</span>
                  <h4 className="font-display text-lg font-bold uppercase text-[#17184B] mb-sm">Deterministic Load Balancer</h4>
                  <p className="font-sans text-xs text-[#17184B]/75 leading-relaxed">
                    Our routing engines evaluate real-time queue lengths at edge nodes and dynamically forward incoming streams to lower load clusters.
                  </p>
                </div>
                <div className="mt-lg pt-sm border-t border-neutral-200/40 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">ALGORITHM // round-robin-telemetry</span>
                  <span className="font-mono text-[10px] bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Active</span>
                </div>
              </div>

              <div className="card-neumorphic p-xl flex flex-col justify-between flex-grow">
                <div>
                  <span className="material-symbols-outlined text-[#17184B] text-[24px] bg-[#D8E63C] p-2.5 rounded-full mb-md block w-fit">network_node</span>
                  <h4 className="font-display text-lg font-bold uppercase text-[#17184B] mb-sm">State Machine Reconciliation</h4>
                  <p className="font-sans text-xs text-[#17184B]/75 leading-relaxed">
                    Zero single points of failure. If any server node fails health checks, DNS records instantly direct incoming traffic to active standby targets.
                  </p>
                </div>
                <div className="mt-lg pt-sm border-t border-neutral-200/40 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">RECOVERY // instant-failover-dns</span>
                  <span className="font-mono text-[10px] bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator Line */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-[#17184B]/10" />
        </div>

        {/* CTA Section Card Island */}
        <section className="mx-auto max-w-container-max w-[calc(100%-32px)] md:w-[calc(100%-128px)] my-12 relative z-10">
          <div className="card-crt-dark w-full">
            <div className="card-crt-dark-overlay" />
            <div className="card-crt-dark-inner w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-xl p-xl md:p-[64px] relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-[#D8E63C]/10 to-[#D8E63C]/5 rounded-full filter blur-[80px] pointer-events-none" />
              
              <div className="max-w-2xl relative z-10">
                <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-md leading-tight text-white">
                  Ready to optimize your infrastructure?
                </h2>
                <p className="font-sans text-sm md:text-md text-[#D3DDE7] leading-relaxed">
                  Engage with our senior engineering team to audit your current architecture and chart a path to scalable efficiency.
                </p>
              </div>
              <div className="relative z-10 shrink-0">
                <Link className="btn-accent px-10 py-5 font-bold uppercase tracking-widest text-xs" href="/contact">
                  Request Architecture Audit
                  <span className="material-symbols-outlined text-sm ml-1.5">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
