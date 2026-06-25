import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
<main className="w-full max-w-container-max mx-auto">

<section className="px-margin-mobile md:px-margin-desktop py-huge md:py-[120px] grid grid-cols-1 md:grid-cols-12 gap-gutter items-center border-b border-subtle">
<div className="md:col-span-6 flex flex-col gap-xl">
<h1 className="gsap-hero-animate font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tighter">
                    Continuous <br /><span className="accent-text">Velocity.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                    Accelerate your delivery pipeline with engineered precision. We build unbreakable CI/CD workflows and resilient infrastructure.
                </p>
<div className="flex gap-md pt-sm">
<button className="accent-bg text-on-primary sharp-edge px-[24px] py-[12px] font-label-sm text-label-sm">
                        Start Audit
                    </button>
<button className="bg-transparent border-base text-primary sharp-edge px-[24px] py-[12px] font-label-sm text-label-sm hover:bg-surface-container">
                        View Architecture
                    </button>
</div>
</div>
<div className="md:col-span-6 h-[400px] bg-level-1 border-base relative overflow-hidden flex items-center justify-center">

<img className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" data-alt="A highly structured, modern minimalist digital illustration of a CI/CD software pipeline. Crisp geometric shapes connected by precise lines representing code flow, testing, and deployment stages. The palette is stark monochromatic—deep blacks and pristine whites—with strategic, high-contrast red accents indicating active data flow. The aesthetic is extremely clean, resembling an engineered blueprint rather than a realistic server room." src="/images/datacenter_racks.png" />
<div className="z-10 w-full px-lg flex flex-col gap-md">
<div className="h-12 border-base bg-surface-container flex items-center px-md justify-between">
<span className="font-label-sm text-label-sm">COMMIT</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</div>
<div className="h-12 border-base bg-surface-container flex items-center px-md justify-between ml-xl border-l-2 border-l-[#D8E63C]">
<span className="font-label-sm text-label-sm accent-text">BUILD & TEST</span>
<span className="material-symbols-outlined text-sm">science</span>
</div>
<div className="h-12 border-base bg-surface-container flex items-center px-md justify-between ml-[64px]">
<span className="font-label-sm text-label-sm">DEPLOY</span>
<span className="material-symbols-outlined text-sm">cloud_upload</span>
</div>
</div>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop py-huge border-b border-subtle bg-surface">
<div className="mb-xxl">
<h2 className="font-headline-xl text-headline-xl text-primary">Engineered Operations</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-sm">Scalable infrastructure management.</p>
</div>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-8 bg-level-1 border-base p-xl flex flex-col justify-between min-h-[300px]">
<div>
<span className="material-symbols-outlined text-[32px] mb-md block">code_blocks</span>
<h3 className="font-headline-md text-headline-md mb-sm">Infrastructure as Code (IaC)</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                            Codify your entire environment. Eliminate manual configuration drift with declarative infrastructure provisioning using Terraform and Ansible.
                        </p>
</div>
<div className="mt-lg">
<span className="inline-block border-base px-2 py-1 font-label-sm text-label-sm mr-sm">TERRAFORM</span>
<span className="inline-block border-base px-2 py-1 font-label-sm text-label-sm">CLOUDFORMATION</span>
</div>
</div>

<div className="md:col-span-4 bg-tertiary text-on-primary border-base p-xl flex flex-col justify-between min-h-[300px]">
<div>
<span className="material-symbols-outlined text-[32px] mb-md block">schema</span>
<h3 className="font-headline-md text-headline-md mb-sm text-on-primary">Kubernetes Orchestration</h3>
<p className="font-body-md text-body-md text-on-primary-fixed-variant">
                            Container management at enterprise scale. High availability, auto-scaling, and seamless deployments.
                        </p>
</div>
<div className="mt-lg">
<span className="material-symbols-outlined">anchor</span>
</div>
</div>

<div className="md:col-span-5 bg-level-1 border-base p-xl flex flex-col justify-between min-h-[250px]">
<div>
<span className="material-symbols-outlined text-[32px] mb-md block accent-text">monitoring</span>
<h3 className="font-headline-md text-headline-md mb-sm">Observability Stack</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            Deep visibility into distributed systems. Logs, metrics, and traces combined for rapid root-cause analysis.
                        </p>
</div>
</div>

<div className="md:col-span-7 bg-surface-container-high border-base p-xl flex flex-col justify-between min-h-[250px] relative overflow-hidden">
<div className="relative z-10">
<span className="material-symbols-outlined text-[32px] mb-md block">security</span>
<h3 className="font-headline-md text-headline-md mb-sm">DevSecOps</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                            Security embedded at every pipeline stage. Shift-left vulnerability scanning and automated compliance checks.
                        </p>
</div>

<div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
<svg height="200" viewBox="0 0 100 100" width="200" xmlns="http://www.w3.org/2000/svg">
<path d="M0,0 L100,100 M100,0 L0,100 M50,0 L50,100 M0,50 L100,50" stroke="#000" strokeWidth="1"></path>
<circle cx="50" cy="50" fill="none" r="40" stroke="#000" strokeWidth="1"></circle>
</svg>
</div>
</div>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop py-huge">
<h2 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-xl text-center">Supported Toolchains</h2>
<div className="flex flex-wrap justify-center gap-lg">
<div className="border-base bg-level-1 px-xl py-md font-headline-md text-headline-md flex items-center gap-sm">
                    Jenkins
                </div>
<div className="border-base bg-level-1 px-xl py-md font-headline-md text-headline-md flex items-center gap-sm">
                    Docker
                </div>
<div className="border-base bg-level-1 px-xl py-md font-headline-md text-headline-md flex items-center gap-sm">
                    Terraform
                </div>
<div className="border-base bg-level-1 px-xl py-md font-headline-md text-headline-md flex items-center gap-sm">
                    GitLab CI
                </div>
<div className="border-base bg-level-1 px-xl py-md font-headline-md text-headline-md flex items-center gap-sm">
                    ArgoCD
                </div>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop py-[120px] bg-tertiary text-on-primary border-y-2 border-[#17184B] relative">
<div className="max-w-2xl mx-auto text-center relative z-10">
<h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-lg tracking-tighter">
                    Ready for Structural Integrity?
                </h2>
<p className="font-body-lg text-body-lg text-on-primary-fixed-variant mb-xl">
                    Request a comprehensive Infrastructure Audit. We will analyze your current pipeline, identify bottlenecks, and propose a modernized, scalable architecture.
                </p>
<button className="accent-bg text-on-primary sharp-edge px-[32px] py-[16px] font-label-sm text-label-sm tracking-widest hover:bg-primary-container border-base border-on-primary transition-colors">
                    REQUEST AUDIT
                </button>
</div>

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</section>
</main>

<Footer />
    </>
  );
}
