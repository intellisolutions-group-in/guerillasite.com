import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
<main className="w-full">

<section className="w-full py-huge border-b border-[#17184B] bg-neutral-50/50">
<div className="grid-container items-end min-h-[60vh]">
<div className="col-span-4 md:col-span-8 lg:col-span-9 flex flex-col gap-xl">
<div className="flex items-center gap-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest border-2 border-[#17184B] px-sm py-xs">Case Study</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Manufacturing</span>
</div>
<h1 className="gsap-hero-animate font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-[800px]">Manufacturing ERP Transformation</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px]">Precision engineering applied to legacy operations. Architecting a unified data ecosystem to drive efficiency and eliminate manual silos.</p>
</div>
<div className="col-span-4 md:col-span-8 lg:col-span-3 flex flex-col gap-md lg:border-l lg:border-[#17184B] lg:pl-lg">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-xs">Client Partner</p>
<div className="h-16 w-48 bg-white flex items-center justify-center border-2 border-[#17184B]">

<span className="font-headline-md text-headline-md text-on-surface-variant opacity-50">GlobalCorp</span>
</div>
</div>
</div>

<div className="border-t border-[#17184B] mt-huge">
<div className="grid-container pt-xl pb-md">
<div className="col-span-4 md:col-span-4 lg:col-span-4 border-l-2 border-secondary pl-md">
<p className="font-display-lg-mobile text-display-lg-mobile text-white">70%</p>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Reduction in Downtime</p>
</div>
<div className="col-span-4 md:col-span-4 lg:col-span-4 border-l-2 border-secondary pl-md">
<p className="font-display-lg-mobile text-display-lg-mobile text-white">4.2x</p>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Data Processing Speed</p>
</div>
<div className="col-span-4 md:col-span-8 lg:col-span-4 border-l-2 border-secondary pl-md mt-lg md:mt-0 lg:mt-0">
<p className="font-display-lg-mobile text-display-lg-mobile text-white">Zero</p>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Manual Data Entry Errors</p>
</div>
</div>
</div>
</section>

<section className="w-full py-huge border-b border-[#17184B]">
<div className="grid-container">
<div className="col-span-4 lg:col-span-4">
<h2 className="font-headline-md text-headline-md text-primary sticky top-huge">The Challenge</h2>
</div>
<div className="col-span-4 md:col-span-8 lg:col-span-8 flex flex-col gap-xl">
<p className="font-body-lg text-body-lg text-on-surface">GlobalCorp operated on a fragmented architecture of localized servers and disconnected spreadsheet logic. The resulting data silos caused critical delays in supply chain visibility, frequent manual data entry errors, and an inability to scale predictive maintenance.</p>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-lg mt-md">
<div className="card-line p-lg flex flex-col gap-sm">
<span className="material-symbols-outlined text-secondary text-3xl">dns</span>
<h3 className="font-label-sm text-label-sm uppercase tracking-widest text-white">Legacy Silos</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Data trapped in isolated on-premise systems preventing cross-plant visibility.</p>
</div>
<div className="card-line p-lg flex flex-col gap-sm">
<span className="material-symbols-outlined text-secondary text-3xl">warning</span>
<h3 className="font-label-sm text-label-sm uppercase tracking-widest text-white">Manual Errors</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Reliance on human transcription led to recurring inventory inaccuracies.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-huge bg-white border-b border-[#17184B]">
<div className="grid-container">
<div className="col-span-4 lg:col-span-12 mb-xl">
<h2 className="font-headline-md text-headline-md text-primary">Solution Architecture</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-sm max-w-[800px]">A highly available, event-driven architecture designed for real-time telemetry processing and seamless ERP integration.</p>
</div>
<div className="col-span-4 md:col-span-8 lg:col-span-12 blueprint-bg border-2 border-[#17184B] h-[500px] relative overflow-hidden flex items-center justify-center">

<div className="flex gap-huge items-center relative z-10 w-full px-huge overflow-x-auto">

<div className="flex flex-col items-center gap-sm shrink-0">
<div className="w-32 h-32 bg-white border-2 border-[#17184B] flex items-center justify-center rounded-[4px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
<span className="material-symbols-outlined text-5xl text-white">sensors</span>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-widest bg-primary text-primary px-sm py-xs rounded-full">IoT Edge</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">MQTT</span>
</div>

<div className="flex-1 h-px bg-primary border-t border-dashed border-[#17184B] relative shrink-0 min-w-[64px]">
<span className="material-symbols-outlined absolute right-0 -top-3 text-primary bg-white px-xs">arrow_forward</span>
</div>

<div className="flex flex-col items-center gap-sm shrink-0">
<div className="w-48 min-h-[12rem] h-auto bg-white border-2 border-[#17184B] flex flex-col items-center justify-center p-md rounded-[4px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
<span className="material-symbols-outlined text-5xl text-primary mb-sm">cloud</span>
<div className="w-full h-px bg-outline-variant my-sm"></div>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">Processing Core</span>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-widest bg-primary text-primary px-sm py-xs rounded-full">Azure Cloud</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">Java Spring</span>
</div>

<div className="flex-1 h-px bg-primary border-t border-dashed border-[#17184B] relative shrink-0 min-w-[64px]">
<span className="material-symbols-outlined absolute right-0 -top-3 text-primary bg-white px-xs">arrow_forward</span>
</div>

<div className="flex flex-col items-center gap-sm shrink-0">
<div className="w-32 h-32 bg-white border-2 border-[#17184B] flex items-center justify-center rounded-[4px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
<span className="material-symbols-outlined text-5xl text-white">database</span>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-widest bg-primary text-primary px-sm py-xs rounded-full">ERP Core</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">PostgreSQL</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-huge bg-primary text-primary border-b border-[#17184B]">
<div className="grid-container">
<div className="col-span-4 md:col-span-8 lg:col-span-5 flex flex-col justify-between">
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-xl">Operational Results</h2>
<ul className="flex flex-col gap-md border-t border-[#17184B] pt-lg">
<li className="flex items-start gap-md">
<span className="material-symbols-outlined text-secondary">check_circle</span>
<p className="font-body-md text-body-md text-primary">70% reduction in unplanned maintenance downtime through predictive MQTT telemetry.</p>
</li>
<li className="flex items-start gap-md">
<span className="material-symbols-outlined text-secondary">check_circle</span>
<p className="font-body-md text-body-md text-primary">Complete elimination of manual data transcription errors via direct API integration.</p>
</li>
<li className="flex items-start gap-md">
<span className="material-symbols-outlined text-secondary">check_circle</span>
<p className="font-body-md text-body-md text-primary">Global visibility achieved across 12 manufacturing plants within 6 months.</p>
</li>
</ul>
</div>
</div>
<div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-7 mt-xl lg:mt-0 relative">
<span className="material-symbols-outlined text-secondary text-9xl absolute -top-8 -left-8 opacity-20 pointer-events-none">format_quote</span>
<div className="border-2 border-[#17184B] p-xl relative z-10 bg-primary/50 backdrop-blur-sm rounded-[4px]">
<p className="font-headline-md text-headline-md text-primary mb-xl leading-snug">"GuerillaSite didn't just install software; they engineered a fundamental shift in how we process reality on the factory floor. The architectural rigor they brought was exactly what our enterprise needed."</p>
<div className="flex items-center gap-md pt-lg border-t border-[#17184B]">
<div className="w-12 h-12 bg-neutral-50 rounded-full border-2 border-[#17184B] flex items-center justify-center">
<span className="material-symbols-outlined text-primary">person</span>
</div>
              <div>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Jyoti Dixit</p>
                <p className="font-body-md text-body-md text-on-surface-variant">Chief Technology Officer</p>
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-huge bg-white border-b border-[#17184B]">
<div className="grid-container text-center">
<div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3 flex flex-col items-center gap-xl">
<h2 className="font-display-lg-mobile md:font-headline-xl text-display-lg-mobile md:text-headline-xl text-primary">Re-architect your manufacturing operations.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px]">Engage our engineering teams to build resilient, scalable systems that drive measurable ROI.</p>
<button className="gsap-hero-animate btn-accent flex items-center gap-sm mt-md">
                        Start the Conversation
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</section>
</main>

<Footer />
    </>
  );
}
