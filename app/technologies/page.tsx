import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="flex-grow w-full max-w-container-max mx-auto relative overflow-hidden bg-[#F0EEE9]">
        
        {/* Pulsing Gradient Blobs */}
        <div className="absolute top-10 left-1/4 w-[350px] h-[350px] bg-secondary/15 rounded-full filter blur-[80px] -z-10 pointer-events-none animate-pulse duration-[8000ms]"></div>
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-[#D8E63C]/10 rounded-full filter blur-[70px] -z-10 pointer-events-none animate-pulse duration-[6000ms]"></div>
 
        <section className="px-margin-mobile md:px-margin-desktop py-huge md:py-[120px] bg-transparent border-b border-[#17184B] relative">
          <div className="gsap-stagger-container grid grid-cols-4 md:grid-cols-12 gap-gutter relative z-10">
            <div className="col-span-4 md:col-span-8 md:col-start-1 flex flex-col justify-center">
              <span className="font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-secondary to-[#D8E63C] text-transparent bg-clip-text font-bold block mb-md">
                Technology Hub
              </span>
              <h1 className="gsap-hero-animate font-display text-4xl md:text-display-lg uppercase font-bold tracking-tighter text-primary mb-xl leading-none">
                Our Engineering Stack: <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-[#D8E63C] text-transparent bg-clip-text">The Tools of Reliability</span>
              </h1>
              <p className="gsap-hero-animate font-sans text-md md:text-body-lg text-on-surface-variant max-w-2xl mb-xxl">
                A transparent view into the foundational technologies that power our enterprise solutions. Built for scale, security, and uncompromising performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-md">
                <Link className="btn-accent flex items-center gap-sm w-fit" href="/contact">
                  Consult with our Architects
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
                <button className="btn-ghost flex items-center gap-sm w-fit">
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  Download Architecture Spec
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute right-margin-desktop top-1/2 -translate-y-1/2 w-1/3 h-[400px] border-2 border-[#17184B] bg-gradient-to-br from-surface to-surface-container-low p-md rounded-[4px] shadow-[5px_5px_0px_0px_#17184B]">
            <div className="w-full h-full bg-blueprint-dense border-2 border-[#17184B] flex items-center justify-center relative overflow-hidden rounded-[4px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-surface-container opacity-50 animate-pulse duration-[7000ms]"></div>
              <div className="gsap-stagger-item border-2 border-[#17184B] p-xl bg-white/80 backdrop-blur-sm relative z-10 shadow-sm rounded-[4px]">
                <span className="material-symbols-outlined text-[64px] text-primary">architecture</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-huge bg-transparent">
          <div className="gsap-stagger-container grid grid-cols-4 md:grid-cols-12 gap-gutter">

            <div className="col-span-4 md:col-span-12 mb-xxl border-b border-[#17184B] pb-md flex justify-between items-end">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-primary">Technology Domains</h2>
              <span className="font-sans text-xs text-on-surface-variant uppercase tracking-widest hidden md:block font-bold">07 Core Categories</span>
            </div>

            <Link href="/technologies/frontend" className="col-span-4 md:col-span-6 tech-card border-2 border-[#17184B] bg-white/90 p-xl cursor-pointer group flex flex-col h-[320px] rounded-[4px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block text-primary">
              <div className="flex justify-between items-start mb-auto">
                <span className="material-symbols-outlined text-[32px] text-on-surface-variant tech-icon transition-colors group-hover:text-secondary">web</span>
                <span className="font-sans text-[10px] text-primary border-2 border-[#17184B] px-2 py-0.5 uppercase tracking-widest font-bold rounded-full">Client-Side</span>
              </div>
              <div>
                <h3 className="font-display text-lg uppercase font-bold text-primary mb-md">Frontend</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-lg">High-performance, accessible, and responsive user interfaces.</p>
                <ul className="flex flex-wrap gap-sm">
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">React</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">Vue.js</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">TypeScript</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">Tailwind CSS</li>
                </ul>
              </div>
            </Link>

            <Link href="/technologies/backend" className="col-span-4 md:col-span-6 tech-card border-2 border-[#17184B] bg-white/90 p-xl cursor-pointer group flex flex-col h-[320px] rounded-[4px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block text-primary">
              <div className="flex justify-between items-start mb-auto">
                <span className="material-symbols-outlined text-[32px] text-on-surface-variant tech-icon transition-colors group-hover:text-secondary">dns</span>
                <span className="font-sans text-[10px] text-primary border-2 border-[#17184B] px-2 py-0.5 uppercase tracking-widest font-bold rounded-full">Server-Side</span>
              </div>
              <div>
                <h3 className="font-display text-lg uppercase font-bold text-primary mb-md">Backend</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-lg">Robust APIs, microservices, and core business logic processing.</p>
                <ul className="flex flex-wrap gap-sm">
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">Node.js</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">Python / Django</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">Go</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">Java / Spring</li>
                </ul>
              </div>
            </Link>

            <Link href="/technologies/cloud" className="col-span-4 md:col-span-4 tech-card border-2 border-[#17184B] bg-white/90 p-xl cursor-pointer group flex flex-col h-[320px] rounded-[4px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block text-primary">
              <div className="flex justify-between items-start mb-auto">
                <span className="material-symbols-outlined text-[32px] text-on-surface-variant tech-icon transition-colors group-hover:text-secondary">cloud</span>
                <span className="font-sans text-[10px] text-primary border-2 border-[#17184B] px-2 py-0.5 uppercase tracking-widest font-bold rounded-full">Infra</span>
              </div>
              <div>
                <h3 className="font-display text-lg uppercase font-bold text-primary mb-md">Cloud</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-lg">Scalable, resilient infrastructure and container orchestration.</p>
                <ul className="flex flex-wrap gap-sm">
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">AWS</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">Azure</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">GCP</li>
                </ul>
              </div>
            </Link>

            <Link href="/technologies/ai-machine-learning" className="col-span-4 md:col-span-4 tech-card border border-[#17184B] bg-gradient-to-br from-neutral-900 to-black text-white p-xl cursor-pointer group flex flex-col h-[320px] relative overflow-hidden rounded-[4px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
              <div className="flex justify-between items-start mb-auto relative z-10">
                <span className="material-symbols-outlined text-[32px] text-secondary-container">psychology</span>
                <span className="font-sans text-[10px] text-secondary-container border border-secondary-container/50 px-2 py-0.5 uppercase tracking-widest font-bold rounded-full">Emerging Tech</span>
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-lg uppercase font-bold text-white mb-md">AI/ML</h3>
                <p className="font-sans text-sm text-neutral-300 mb-lg">Advanced predictive models, natural language processing, and automation.</p>
                <ul className="flex flex-wrap gap-sm">
                  <li className="font-sans text-xs text-white bg-white/10 px-3 py-1 border border-white/20 rounded-full">TensorFlow</li>
                  <li className="font-sans text-xs text-white bg-white/10 px-3 py-1 border border-white/20 rounded-full">PyTorch</li>
                  <li className="font-sans text-xs text-white bg-white/10 px-3 py-1 border border-white/20 rounded-full">OpenAI APIs</li>
                </ul>
              </div>
            </Link>

            <Link href="/technologies/databases" className="col-span-4 md:col-span-4 tech-card border-2 border-[#17184B] bg-white/90 p-xl cursor-pointer group flex flex-col h-[320px] rounded-[4px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block text-primary">
              <div className="flex justify-between items-start mb-auto">
                <span className="material-symbols-outlined text-[32px] text-on-surface-variant tech-icon transition-colors group-hover:text-secondary">database</span>
                <span className="font-sans text-[10px] text-primary border-2 border-[#17184B] px-2 py-0.5 uppercase tracking-widest font-bold rounded-full">Storage</span>
              </div>
              <div>
                <h3 className="font-display text-lg uppercase font-bold text-primary mb-md">Databases</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-lg">High-availability storage, relational and NoSQL data structures.</p>
                <ul className="flex flex-wrap gap-sm">
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">PostgreSQL</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">MongoDB</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">Redis</li>
                </ul>
              </div>
            </Link>

            <Link href="/technologies/devops" className="col-span-4 md:col-span-6 tech-card border-2 border-[#17184B] bg-white/90 p-xl cursor-pointer group flex flex-col h-[320px] rounded-[4px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block text-primary">
              <div className="flex justify-between items-start mb-auto">
                <span className="material-symbols-outlined text-[32px] text-on-surface-variant tech-icon transition-colors group-hover:text-secondary">all_inclusive</span>
                <span className="font-sans text-[10px] text-primary border-2 border-[#17184B] px-2 py-0.5 uppercase tracking-widest font-bold rounded-full">Ops</span>
              </div>
              <div>
                <h3 className="font-display text-lg uppercase font-bold text-primary mb-md">DevOps</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-lg">Continuous integration, deployment pipelines, and infrastructure as code.</p>
                <ul className="flex flex-wrap gap-sm">
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">Docker & K8s</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">GitLab CI</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">Terraform</li>
                </ul>
              </div>
            </Link>

            <Link href="/technologies/cybersecurity" className="col-span-4 md:col-span-6 tech-card border-2 border-[#17184B] bg-white/90 p-xl cursor-pointer group flex flex-col h-[320px] rounded-[4px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block text-primary">
              <div className="flex justify-between items-start mb-auto">
                <span className="material-symbols-outlined text-[32px] text-on-surface-variant tech-icon transition-colors group-hover:text-secondary">shield</span>
                <span className="font-sans text-[10px] text-secondary border border-secondary/50 px-2 py-0.5 uppercase tracking-widest font-bold rounded-full">Critical</span>
              </div>
              <div>
                <h3 className="font-display text-lg uppercase font-bold text-primary mb-md">Security</h3>
                <p className="font-sans text-sm text-on-surface-variant mb-lg">Zero-trust architecture, encryption, and automated vulnerability scanning.</p>
                <ul className="flex flex-wrap gap-sm">
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">OAuth2 / OIDC</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">HashiCorp Vault</li>
                  <li className="font-sans text-xs text-primary bg-neutral-100 px-3 py-1 border-2 border-[#17184B]/85 rounded-full">SonarQube</li>
                </ul>
              </div>
            </Link>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-huge bg-gradient-to-br from-surface to-surface-container-low border-t border-[#17184B] text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-primary mb-lg">Ready to build with precision?</h2>
            <p className="font-sans text-sm md:text-body-lg text-on-surface-variant max-w-2xl mb-xl">Discuss your technical requirements, architectural challenges, and scaling needs with our senior engineering team.</p>
            <Link className="btn-accent flex items-center gap-sm w-fit" href="/contact">
              Consult with our Architects
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            </Link>
          </div>
        </section>
      </main>

<Footer />
    </>
  );
}
