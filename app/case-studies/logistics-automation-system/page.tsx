import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
<main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-xxl md:py-huge flex flex-col gap-huge">

<section className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter items-end border-b border-[#17184B] pb-huge">
<div className="col-span-1 md:col-span-8 flex flex-col gap-xl">
<div className="flex items-center gap-sm">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest border border-secondary px-sm py-xs bg-neutral-50 rounded-[4px]">Case Study</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Logistics & Supply Chain</span>
</div>
<h1 className="gsap-hero-animate font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tighter">
                    Global Supply Chain Visibility
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                    Engineering a high-performance logistics automation system to eliminate route inefficiencies, prevent asset loss, and deliver real-time operational intelligence across global networks.
                </p>
</div>
<div className="col-span-1 md:col-span-4 flex justify-start md:justify-end">
<button className="gsap-hero-animate btn-accent gap-sm group">
                    View Technical Documentation
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</section>

<section className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="col-span-1 md:col-span-5 bg-white border-2 border-[#17184B] rounded-[4px] p-xl flex flex-col gap-lg justify-between">
<div>
<div className="flex items-center gap-sm mb-lg">
<span className="material-symbols-outlined text-secondary" data-icon="warning">warning</span>
<h2 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">The Problem</h2>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-md">Operational Blind Spots</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                        Legacy infrastructure resulted in critical visibility gaps. Route inefficiencies caused extensive delivery delays, while a lack of real-time tracking led to significant annual asset loss across cross-border transit.
                    </p>
<ul className="flex flex-col gap-sm">
<li className="flex items-start gap-md border-b border-[#17184B] pb-sm">
<span className="material-symbols-outlined text-primary" data-icon="route">route</span>
<span className="font-body-md text-body-md">Suboptimal routing increasing fuel consumption</span>
</li>
<li className="flex items-start gap-md border-b border-[#17184B] pb-sm">
<span className="material-symbols-outlined text-primary" data-icon="inventory_2">inventory_2</span>
<span className="font-body-md text-body-md">High rate of unaccounted assets in transit</span>
</li>
</ul>
</div>
</div>

<div className="col-span-1 md:col-span-7 bg-primary text-on-primary border-2 border-[#17184B] rounded-[4px] p-xl flex flex-col gap-lg justify-between relative overflow-hidden group">
<div className="absolute inset-0 grid-bg opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="relative z-10">
<div className="flex items-center gap-sm mb-lg">
<span className="material-symbols-outlined text-secondary" data-icon="lightbulb">lightbulb</span>
<h2 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">The Solution</h2>
</div>
<h3 className="font-headline-xl text-headline-xl mb-md">Real-Time Intelligence</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-2xl">
                        A bespoke automation platform leveraging AI for dynamic route optimization and deep IoT integration for continuous, high-fidelity asset tracking globally.
                    </p>
<div className="gsap-stagger-container grid grid-cols-1 sm:grid-cols-2 gap-gutter">
<div className="gsap-stagger-item border-2 border-[#17184B] rounded-[4px] p-md bg-neutral-50">
<span className="material-symbols-outlined text-secondary mb-sm block" data-icon="my_location">my_location</span>
<h4 className="font-label-sm text-label-sm uppercase tracking-widest mb-xs text-on-primary">Real-Time Tracking</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Sub-second latency telemetry data from across the fleet.</p>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] rounded-[4px] p-md bg-neutral-50">
<span className="material-symbols-outlined text-secondary mb-sm block" data-icon="network_node">network_node</span>
<h4 className="font-label-sm text-label-sm uppercase tracking-widest mb-xs text-on-primary">AI Optimization</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Predictive algorithms adjusting routes dynamically based on live conditions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-[#17184B] py-xxl flex flex-col gap-xl">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="code">code</span>
<h2 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Architecture & Stack</h2>
</div>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="gsap-stagger-item border-2 border-[#17184B] rounded-[4px] p-lg flex flex-col gap-md hover:bg-white transition-colors">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-white">Node.js</h3>
<span className="font-label-sm text-label-sm px-sm py-xs border-2 border-[#17184B] bg-white text-primary rounded-[4px]">API Layer</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant border-t border-[#17184B] pt-md mt-auto">
                        High-throughput asynchronous event handling for managing concurrent telemetry streams from thousands of endpoints.
                    </p>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] rounded-[4px] p-lg flex flex-col gap-md hover:bg-white transition-colors">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-white">IoT</h3>
<span className="font-label-sm text-label-sm px-sm py-xs border-2 border-[#17184B] bg-white text-primary rounded-[4px]">Edge Devices</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant border-t border-[#17184B] pt-md mt-auto">
                        Custom firmware integration on ruggedized sensors providing reliable GPS and environmental data over cellular networks.
                    </p>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] rounded-[4px] p-lg flex flex-col gap-md hover:bg-white transition-colors">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-white">Go</h3>
<span className="font-label-sm text-label-sm px-sm py-xs border-2 border-[#17184B] bg-white text-primary rounded-[4px]">Processing Core</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant border-t border-[#17184B] pt-md mt-auto">
                        High-performance microservices dedicated to complex spatial calculations and running the AI routing models with minimal latency.
                    </p>
</div>
</div>
</section>

<section className="bg-white p-xl md:p-xxl border-2 border-[#17184B] rounded-[4px] flex flex-col gap-xl">
<h2 className="font-headline-xl text-headline-xl text-primary text-center">Measurable Impact</h2>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto w-full">
<div className="gsap-stagger-item border-2 border-[#17184B] bg-white rounded-[4px] p-lg text-center flex flex-col gap-sm justify-center">
<span className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-secondary block">15%</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant border-t border-[#17184B] pt-sm mt-sm">Reduction in Fuel Costs</span>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] bg-white rounded-[4px] p-lg text-center flex flex-col gap-sm justify-center">
<span className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary block">99.9%</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant border-t border-[#17184B] pt-sm mt-sm">Asset Accountability Rate</span>
</div>
</div>
</section>

<section className="py-huge flex flex-col items-center justify-center text-center gap-lg border-b border-[#17184B] pb-huge">
<h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tighter max-w-2xl">
                Ready to optimize your operations?
            </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-md">
                Leverage our enterprise engineering expertise to build a robust, AI-driven logistics network.
            </p>
<button className="btn-accent">
                Audit your logistics infrastructure
            </button>
</section>
</main>

<Footer />
    </>
  );
}
