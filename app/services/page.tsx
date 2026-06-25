"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Page() {
  const corePillars = [
    {
      step: "01",
      title: "Systems Engineering",
      desc: "We design and build deep, type-safe software systems. From distributed database schemas with rigid ACID transactional guarantees to multi-threaded service modules.",
      icon: "terminal",
      color: "from-[#6366F1]/10 to-transparent",
      border: "hover:border-[#6366F1]/40",
      badge: "Scale-Ready"
    },
    {
      step: "02",
      title: "Zero-Trust Security",
      desc: "We operate under the absolute model of zero trust. Every API requests credentials, database nodes are micro-segmented, and all payloads are encrypted at rest and in transit.",
      icon: "shield",
      color: "from-[#14B8A6]/10 to-transparent",
      border: "hover:border-[#14B8A6]/40",
      badge: "Defense Grade"
    },
    {
      step: "03",
      title: "DevOps & Cloud Scale",
      desc: "Orchestrating high-availability AWS/GCP clusters with self-healing nodes. We write declarative infrastructure as code, ensuring 100% deployment parity.",
      icon: "cloud",
      color: "from-[#CB2957]/10 to-transparent",
      border: "hover:border-[#CB2957]/40",
      badge: "99.99% SLA"
    },
    {
      step: "04",
      title: "AI & Event Ingestion",
      desc: "Piping high-throughput event metrics into analytical hubs. We construct real-time telemetry processing pipelines and fine-tune cognitive machine learning models.",
      icon: "psychology",
      color: "from-[#8B5CF6]/10 to-transparent",
      border: "hover:border-[#8B5CF6]/40",
      badge: "Sub-2ms Ingest"
    }
  ];

  const servicesCatalog = [
    {
      category: "Development & Systems",
      desc: "We build custom ERP, CRM, and high-performance web and mobile platforms centered around your business logic.",
      icon: "terminal",
      color: "text-secondary",
      items: [
        { 
          label: "Custom ERP Systems", 
          desc: "Centralize inventory, automate accounting, manage human resources, and track supply chains.", 
          link: "/services/custom-erp", 
          icon: "business",
          tech: ["PostgreSQL", "Python", "React"] 
        },
        { 
          label: "Custom CRM Platforms", 
          desc: "Tailored sales pipelines, customer touchpoint logs, and automated lead response tracking.", 
          link: "/services/custom-crm", 
          icon: "groups",
          tech: ["Node.js", "MongoDB", "TypeScript"] 
        },
        { 
          label: "Website Development", 
          desc: "Premium, responsive web applications engineered for speed, SEO, and visual excellence.", 
          link: "/services/website-development", 
          icon: "code",
          tech: ["Next.js", "React", "Tailwind"] 
        },
        { 
          label: "Mobile App Development", 
          desc: "Native and cross-platform mobile apps for iOS and Android with offline-first support.", 
          link: "/services/mobile-app-development", 
          icon: "smartphone",
          tech: ["Flutter", "Swift", "Kotlin"] 
        }
      ]
    },
    {
      category: "Cloud & Security",
      desc: "Orchestrating high-availability cloud setups, CI/CD pipelines, and zero-trust security layouts.",
      icon: "shield",
      color: "text-teal-500",
      items: [
        { 
          label: "Cloud Infrastructure", 
          desc: "High-availability, multi-region AWS and GCP setups with autoscaling Kubernetes clusters.", 
          link: "/services/cloud-infrastructure", 
          icon: "cloud",
          tech: ["AWS", "Kubernetes", "Terraform"] 
        },
        { 
          label: "Cybersecurity Services", 
          desc: "Zero-trust network setups, identity-aware API proxies, and comprehensive penetration diagnostics.", 
          link: "/services/cybersecurity", 
          icon: "lock",
          tech: ["Wazuh", "Snort", "HashiCorp Vault"] 
        },
        { 
          label: "DevOps & CI/CD", 
          desc: "Automated code integration, unit testing runners, and blue-green staging-to-prod deployment setups.", 
          link: "/services/devops-cicd", 
          icon: "sync_alt",
          tech: ["GitHub Actions", "Docker", "Ansible"] 
        },
        { 
          label: "Hosting & Gateways", 
          desc: "Premium, managed hosting and low-latency API gateways with edge network caching and caching checks.", 
          link: "/services/hosting-gateway", 
          icon: "dns",
          tech: ["Nginx", "Cloudflare", "Redis"] 
        }
      ]
    },
    {
      category: "Data & AI",
      desc: "Leveraging custom machine-learning models, timeseries pipelines, and analytics telemetry.",
      icon: "psychology",
      color: "text-indigo-500",
      items: [
        { 
          label: "AI & Machine Learning", 
          desc: "Custom predictive models, text processing models, and deep learning pipelines.", 
          link: "/services/ai-machine-learning", 
          icon: "memory",
          tech: ["Python ML", "PyTorch", "OpenAI API"] 
        },
        { 
          label: "Data Analytics & BI", 
          desc: "Real-time log analytics, database visualization dashboards, and executive performance reviews.", 
          link: "/services/data-analytics-bi", 
          icon: "monitoring",
          tech: ["Apache Kafka", "TimescaleDB", "Metabase"] 
        },
        { 
          label: "IT Consulting", 
          desc: "System validation workshops, migration advisory, and modern architecture design reviews.", 
          link: "/services/it-consulting", 
          icon: "support_agent",
          tech: ["Systems Design", "Scale Auditing", "RFC Mapping"] 
        },
        { 
          label: "UI/UX Design", 
          desc: "Interactive wireframes, screen flow prototyping, and consistent CSS styling systems.", 
          link: "/services/ui-ux-design", 
          icon: "brush",
          tech: ["Figma", "Design Systems", "Usability Tests"] 
        }
      ]
    },
    {
      category: "Digital Growth",
      desc: "Optimizing conversion funnels, Google Ads campaigns, organic search authority, and brand footprints.",
      icon: "campaign",
      color: "text-rose-500",
      items: [
        { 
          label: "Digital Marketing", 
          desc: "Conversion tracking, marketing telemetry loops, and creative lead funnel analytics.", 
          link: "/services/digital-marketing", 
          icon: "public",
          tech: ["Meta Pixel", "HubSpot", "Google Analytics"] 
        },
        { 
          label: "Google Ads", 
          desc: "Optimized pay-per-click setups, audience segmentation, and ROI-driven tracking tools.", 
          link: "/services/google-ads", 
          icon: "ads_click",
          tech: ["PPC Strategy", "Conversion Tracking", "Search Ads"] 
        },
        { 
          label: "SEO Optimization", 
          desc: "Technical SEO audits, semantic tag structure checks, and core web vitals optimization.", 
          link: "/services/seo", 
          icon: "search",
          tech: ["SEO Audit", "Page Speed", "Structured Data"] 
        },
        { 
          label: "Branding & Identity", 
          desc: "Corporate brand systems, visual style guidelines, typography palettes, and asset packs.", 
          link: "/services/branding", 
          icon: "palette",
          tech: ["Brand Strategy", "Logo Assets", "Visual Systems"] 
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="w-full pb-16 bg-cloud-dancer relative overflow-x-clip text-tetsu-kon cyber-grid-container">
        
        {/* Hero Section with AI Visual Integration */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
          <div className="absolute top-20 left-10 md:left-1/4 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-[#D8E63C]/10 rounded-full filter blur-[100px] -z-10 pointer-events-none animate-pulse duration-[8000ms]"></div>
          <div className="absolute bottom-20 right-10 md:right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#D3DDE7]/10 rounded-full filter blur-[90px] -z-10 pointer-events-none animate-pulse duration-[6000ms]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-lg z-10">
              <span className="gsap-hero-animate font-sans text-xs uppercase tracking-widest bg-white/70 text-primary border border-primary/10 px-4 py-1.5 rounded-full font-extrabold w-fit block mb-xs shadow-sm">
                Capabilities Directory
              </span>
              <h1 className="gsap-hero-animate font-display text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold tracking-tighter text-tetsu-kon leading-none">
                Engineered solutions for <br />
                <span className="brutal-text-outline block mt-2">Complex Enterprise</span> environments.
              </h1>
              <p className="gsap-hero-animate font-sans text-md md:text-body-lg text-tetsu-kon/80 max-w-2xl mt-md leading-relaxed">
                We deliver technical excellence across the entire software lifecycle. Our services are architected for scalability, security, and measurable business impact, executed with Swiss-level precision.
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-5 z-10">
              <div 
                className="gsap-hero-animate card-neumorphic-exact w-full aspect-[16/10] relative overflow-hidden group transition-all duration-500 gsap-image-reveal cursor-pointer"
              >
                <img 
                  alt="Server terminal" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 rounded-[50px]" 
                  src="/images/brutalist_terminal.png" 
                />
                <div className="absolute inset-0 bg-tetsu-kon/5 pointer-events-none rounded-[50px]" />
                <div className="absolute bottom-4 left-4 bg-white/80 border border-tetsu-kon/10 px-4 py-1.5 font-sans text-[10px] uppercase font-bold rounded-full shadow-sm">Tech Monolith</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-px bg-tetsu-kon/30 gsap-border-draw" />
        </div>

        {/* Horizontal Scroll Showcase (Core Pillars) */}
        <section className="service-horizontal-scroll-section w-full h-screen overflow-hidden bg-black text-white relative flex flex-col justify-center select-none py-12">
          {/* Grid pattern background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          
          <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 z-10 relative">
              <span className="font-sans text-xs uppercase tracking-widest bg-[#D8E63C] text-tetsu-kon px-3 py-1 rounded-full border border-tetsu-kon/10 font-bold block w-fit mb-xs">
                01 // Engineering Foundations
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">Our Core Pillars</h2>
          </div>

          <div className="service-horizontal-scroll-content flex gap-xl px-margin-mobile md:px-[8vw] w-max items-center h-[60vh]">
            {corePillars.map((pillar, index) => (
              <div 
                key={index} 
                className="w-[85vw] md:w-[45vw] lg:w-[36vw] shrink-0 h-[50vh] min-h-[360px] border border-white/10 p-lg bg-neutral-900 flex flex-col justify-between shadow-[15px_15px_40px_rgba(0,0,0,0.5),-10px_-10px_30px_rgba(255,255,255,0.02)] hover:shadow-[15px_15px_45px_rgba(216,230,60,0.12)] transition-all duration-500 group relative overflow-hidden rounded-[32px]"
              >
                {/* Glow effect */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${pillar.color} rounded-full filter blur-3xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700 pointer-events-none`} />

                <div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-sm mb-lg">
                    <span className="material-symbols-outlined text-[36px] text-duranta-yellow bg-white/5 p-1.5 rounded-2xl border border-white/10">{pillar.icon}</span>
                    <span className="font-sans text-[10px] bg-[#D8E63C] text-tetsu-kon border border-tetsu-kon/10 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm">{pillar.badge}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase text-white mb-md tracking-tight">{pillar.title}</h3>
                  <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed">{pillar.desc}</p>
                </div>
                
                <div className="border-t border-white/10 pt-md mt-md flex justify-between items-center">
                  <span className="font-display text-3xl font-extrabold text-neutral-500 group-hover:text-duranta-yellow transition-colors duration-500">{pillar.step}</span>
                  <span className="material-symbols-outlined text-neutral-500 group-hover:text-duranta-yellow group-hover:translate-x-1 transition-all duration-300">arrow_right_alt</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wrapper with solid background and z-index to prevent overlapping during scroll pinning */}
        <div className="relative z-10 bg-cloud-dancer w-full pb-12">
          {/* Section Divider */}
          <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="w-full h-px bg-tetsu-kon/30 gsap-border-draw" />
          </div>

          {/* Complete In-Depth Catalog (Vertical Sections) */}
          <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 bg-transparent flex flex-col gap-24">
            <div className="max-w-3xl gsap-slide-up">
              <span className="font-sans text-xs uppercase tracking-widest bg-white/70 text-primary border border-primary/10 px-4 py-1.5 rounded-full font-extrabold w-fit mb-sm block shadow-sm">02 // Services Matrix</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-tetsu-kon">In-Depth Capabilities Directory</h2>
              <p className="font-sans text-sm md:text-body-lg text-tetsu-kon/80 mt-sm">Explore our comprehensive directory of vertical and horizontal services built for modern enterprises.</p>
            </div>

            {servicesCatalog.map((catalog, cIdx) => (
              <div key={cIdx} className="grid grid-cols-1 lg:grid-cols-12 gap-xl border-t border-tetsu-kon/10 pt-12 gsap-slide-up">
                {/* Category info */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-md lg:pr-6">
                  <div className="flex items-center gap-sm">
                    <span className={`material-symbols-outlined text-[32px] text-tetsu-kon bg-white border border-tetsu-kon/10 p-1.5 rounded-2xl shadow-sm`}>{catalog.icon}</span>
                    <h3 className="font-display text-xl font-extrabold uppercase text-tetsu-kon tracking-tight">
                      {catalog.category}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-tetsu-kon/80 leading-relaxed">
                    {catalog.desc}
                  </p>
                </div>

                {/* Category items grid */}
                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-md">
                  {catalog.items.map((item, iIdx) => (
                    <Link 
                      key={iIdx}
                      href={item.link}
                      className="group bento-card p-lg flex flex-col justify-between min-h-[200px] cursor-pointer"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-md border-b border-tetsu-kon/5 pb-2">
                          <span className="material-symbols-outlined text-tetsu-kon text-2xl">{item.icon}</span>
                          <div className="flex gap-1 flex-wrap">
                            {item.tech.map((t, tIdx) => (
                              <span key={tIdx} className="font-sans text-[9px] uppercase px-2 py-0.5 bg-white/60 text-tetsu-kon border border-tetsu-kon/10 rounded-full font-bold shadow-sm">{t}</span>
                            ))}
                          </div>
                        </div>
                        <h4 className="font-display text-md font-extrabold uppercase text-tetsu-kon group-hover:text-duranta-yellow transition-colors mb-xs">
                          {item.label}
                        </h4>
                        <p className="font-sans text-xs text-tetsu-kon/70 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <span className="font-sans text-[10px] uppercase tracking-wider font-extrabold text-tetsu-kon/60 group-hover:text-tetsu-kon inline-flex items-center gap-1 mt-md transition-colors w-fit border-b-2 border-transparent group-hover:border-tetsu-kon pb-0.5">
                        View Service Details <span className="material-symbols-outlined text-[12px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Section Divider */}
          <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="w-full h-px bg-tetsu-kon/30 gsap-border-draw" />
          </div>

          {/* Action / Engagement Section */}
          <section className="mx-4 md:mx-margin-desktop max-w-container-max md:w-[calc(100%-128px)] bg-black my-12 self-center shadow-[20px_20px_50px_rgba(23,24,75,0.25)] relative overflow-hidden p-lg md:p-[64px] z-10 flex flex-col md:flex-row items-center justify-between gap-xl rounded-[50px]">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-56 h-56 bg-light-violet/10 rounded-full filter blur-2xl pointer-events-none z-0" />
            <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-duranta-yellow/5 rounded-full filter blur-2xl pointer-events-none z-0" />

            <div className="max-w-2xl relative z-10 gsap-slide-up text-left flex flex-col gap-md">
              <span className="font-sans text-xs uppercase tracking-widest text-duranta-yellow font-extrabold">Engage Our Team</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight leading-tight text-white">Ready to verify your requirements?</h2>
              <p className="font-sans text-sm text-neutral-300 leading-relaxed">
                We offer structured validation workshops and legacy telemetry diagnostics to verify project scopes before engineering kickoff.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm mt-md border-t border-white/10 pt-4">
                <div className="flex items-center gap-xs font-sans text-xs text-neutral-350 font-bold">
                  <span className="material-symbols-outlined text-duranta-yellow text-sm">check_circle</span>
                  Project-Based Fixed Budgets
                </div>
                <div className="flex items-center gap-xs font-sans text-xs text-neutral-350 font-bold">
                  <span className="material-symbols-outlined text-duranta-yellow text-sm">check_circle</span>
                  Active SLA Guarantee
                </div>
              </div>
            </div>
            <div className="relative z-10 shrink-0 gsap-scale-in">
              <Link 
                className="btn-accent px-8 py-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2" 
                href="/contact"
              >
                Book Architecture Audit <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
