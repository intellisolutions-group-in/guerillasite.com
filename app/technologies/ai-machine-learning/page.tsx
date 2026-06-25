import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
<main className="max-w-container-max mx-auto px-margin-desktop py-huge">

<header className="mb-huge border-b border-[#17184B] pb-xl grid grid-cols-12 gap-gutter">
<div className="col-span-12 md:col-span-8">
<div className="inline-block border-2 border-[#17184B] px-sm py-xs mb-lg bg-surface">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Technology Domain</span>
</div>
<h1 className="gsap-hero-animate font-display-lg text-display-lg text-primary mb-xl">Artificial Intelligence &<br />Machine Learning.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Architecting scalable cognitive systems. We engineer production-ready AI pipelines, LLM integration frameworks, and predictive models designed for enterprise precision and operational resilience.
                </p>
</div>
<div className="col-span-12 md:col-span-4 flex items-end justify-end">
<div className="w-full aspect-square border-2 border-[#17184B] bg-[#F8F7F4] relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A highly structured, abstract visualization of a neural network or cognitive architecture, rendered in a crisp, high-contrast light mode aesthetic. Sharp black geometric nodes are connected by precise, orthogonal white lines against a pale gray #EEEEEE background. Occasional nodes flash with a stark, vibrant crimson #CB2957 accent color, emphasizing precision, calculation, and modern Swiss design principles."></div>
<div className="absolute bottom-0 left-0 bg-primary text-white p-sm font-label-sm text-label-sm uppercase">Cognitive Architecture Fig. 1</div>
</div>
</div>
</header>

<section className="mb-huge">
<div className="flex items-center gap-md mb-xl border-b border-[#17184B] pb-sm">
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '"FILL" 1'}}>account_tree</span>
<h2 className="font-headline-md text-headline-md text-primary">Core Capabilities</h2>
</div>
<div className="gsap-stagger-container grid grid-cols-12 gap-gutter auto-rows-[240px]">

<div className="col-span-12 md:col-span-8 border-2 border-[#17184B] bg-[#F8F7F4] p-xl relative group hover:bg-surface-container-high transition-colors">
<div className="absolute top-xl right-xl border-2 border-[#17184B] px-sm py-xs">
<span className="font-label-sm text-label-sm uppercase">01</span>
</div>
<h3 className="font-headline-md text-headline-md mb-md">Model Lifecycle Management</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">End-to-end MLOps pipelines. From data ingestion and feature engineering to model training, deployment, and continuous monitoring for drift in production environments.</p>
</div>

<div className="col-span-12 md:col-span-4 border-2 border-[#17184B] bg-[#F8F7F4] p-xl relative group hover:bg-surface-container-high transition-colors flex flex-col justify-between">
<div className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs self-start">
<span className="font-label-sm text-label-sm uppercase">02</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md mb-sm">LLM Integration</h3>
<p className="font-body-md text-body-md text-on-surface-variant">RAG architectures and fine-tuning.</p>
</div>
</div>

<div className="col-span-12 md:col-span-4 border-2 border-[#17184B] bg-secondary text-white p-xl relative group">
<div className="border border-white px-sm py-xs self-start mb-auto inline-block">
<span className="font-label-sm text-label-sm uppercase">03</span>
</div>
<h3 className="font-headline-md text-headline-md mt-xl">Intelligence as a Service</h3>
<p className="font-body-md text-body-md mt-sm opacity-90">Scalable API-driven cognitive modules.</p>
</div>

<div className="col-span-12 md:col-span-8 border-2 border-[#17184B] bg-[#F8F7F4] p-xl relative group hover:bg-surface-container-high transition-colors flex items-center">
<div className="flex-1">
<div className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs self-start mb-md inline-block">
<span className="font-label-sm text-label-sm uppercase">04</span>
</div>
<h3 className="font-headline-md text-headline-md mb-md">Predictive Analytics Engine</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">Forecasting and anomaly detection systems engineered for high-throughput, low-latency financial and industrial data streams.</p>
</div>
<div className="hidden md:block w-32 h-32 border-2 border-[#17184B] relative">
<div className="absolute inset-0 flex items-end px-sm pb-sm gap-xs">
<div className="w-full bg-primary h-1/3"></div>
<div className="w-full bg-primary h-2/3"></div>
<div className="w-full bg-secondary h-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-huge">
<div className="flex items-center gap-md mb-xl border-b border-[#17184B] pb-sm">
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '"FILL" 1'}}>grid_on</span>
<h2 className="font-headline-md text-headline-md text-primary">Industry Deployment</h2>
</div>
<div className="w-full border-2 border-[#17184B] bg-[#F8F7F4]">

<div className="gsap-stagger-container grid grid-cols-12 border-b border-[#17184B] bg-surface-container-high p-md">
<div className="col-span-3 font-label-sm text-label-sm uppercase tracking-widest">Sector</div>
<div className="col-span-4 font-label-sm text-label-sm uppercase tracking-widest">Application</div>
<div className="col-span-5 font-label-sm text-label-sm uppercase tracking-widest">Outcome Metric</div>
</div>

<div className="gsap-stagger-container grid grid-cols-12 border-b border-[#17184B] p-md items-center hover:bg-surface-container transition-colors">
<div className="col-span-3 font-body-md text-body-md font-semibold">Financial Services</div>
<div className="col-span-4 font-body-md text-body-md text-on-surface-variant">Algorithmic Fraud Detection</div>
<div className="col-span-5 flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
<span className="font-body-md text-body-md">99.8% True Positive Rate</span>
</div>
</div>

<div className="gsap-stagger-container grid grid-cols-12 border-b border-[#17184B] p-md items-center hover:bg-surface-container transition-colors">
<div className="col-span-3 font-body-md text-body-md font-semibold">Manufacturing</div>
<div className="col-span-4 font-body-md text-body-md text-on-surface-variant">Computer Vision Quality Control</div>
<div className="col-span-5 flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary text-sm">precision_manufacturing</span>
<span className="font-body-md text-body-md">40% Reduction in Defect Escape</span>
</div>
</div>

<div className="gsap-stagger-container grid grid-cols-12 p-md items-center hover:bg-surface-container transition-colors">
<div className="col-span-3 font-body-md text-body-md font-semibold">Healthcare</div>
<div className="col-span-4 font-body-md text-body-md text-on-surface-variant">Predictive Patient Triage</div>
<div className="col-span-5 flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary text-sm">monitor_heart</span>
<span className="font-body-md text-body-md">15% Optimization in Bed Allocation</span>
</div>
</div>
</div>
</section>
</main>

<Footer />
    </>
  );
}
