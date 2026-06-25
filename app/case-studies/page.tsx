"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />

<main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-xl xl:px-margin-desktop py-xxl md:py-huge">

<header className="mb-huge max-w-4xl">
<h1 className="gsap-hero-animate font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-lg">
                Engineering Outcomes:<br />
                Enterprise Transformations
            </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-xl">
                Real-world case studies detailing how we resolve complex architectural bottlenecks, implement scalable cloud strategies, and drive measurable ROI for global enterprises.
            </p>
<div className="flex flex-wrap gap-md">
<Link className="gsap-hero-animate btn-accent font-label-sm text-label-sm uppercase flex items-center gap-xs" href="/contact">
<span className="material-symbols-outlined text-sm" data-icon="mail">mail</span>
                    Request 2024 Impact Report
                </Link>
</div>
</header>

<section className="mb-xxl flex flex-col md:flex-row justify-between items-start md:items-center gap-md border-b border-[#17184B] pb-md">
<div className="flex flex-wrap gap-sm">
<button className="filter-pill active px-md py-sm font-label-sm text-label-sm uppercase transition-colors">All Industries</button>
<button className="filter-pill px-md py-sm font-label-sm text-label-sm uppercase transition-colors">Manufacturing</button>
<button className="filter-pill px-md py-sm font-label-sm text-label-sm uppercase transition-colors">Healthcare</button>
<button className="filter-pill px-md py-sm font-label-sm text-label-sm uppercase transition-colors">Financial Services</button>
<button className="filter-pill px-md py-sm font-label-sm text-label-sm uppercase transition-colors">Retail</button>
</div>
<div className="flex flex-wrap gap-sm">
<div className="relative">
<select className="appearance-none border-2 border-[#17184B] bg-white px-md py-sm pr-xl font-label-sm text-label-sm uppercase text-primary focus:ring-0 focus:border-b-2 focus:border-b-secondary transition-all outline-none rounded-[4px] cursor-pointer">
<option value="">All Services</option>
<option value="cloud">Cloud Strategy</option>
<option value="cyber">Cybersecurity</option>
<option value="ai">AI Integration</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-primary" data-icon="arrow_drop_down">arrow_drop_down</span>
</div>
</div>
</section>

<section className="mb-huge">
<h2 className="font-headline-md text-headline-md text-primary mb-lg uppercase tracking-tight">Featured Transformations</h2>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter">

<article className="col-span-1 md:col-span-8 card-outline flex flex-col group relative overflow-hidden h-[500px]">
<div className="absolute inset-0 bg-cover bg-center animate-image-zoom duration-1000" data-alt="A modern, high-tech manufacturing facility floor seen from above." style={{backgroundImage: 'url("/images/iiot_digital_twin.png")'}}></div>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="relative z-10 flex-grow p-xl flex flex-col justify-end">
<div className="flex flex-wrap gap-sm mb-md">
<span className="bg-secondary text-white px-sm py-xs font-label-sm text-label-sm uppercase rounded-full">Manufacturing</span>
<span className="bg-neutral-100 text-primary border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase rounded-full">Cloud Migration</span>
</div>
<h3 className="font-headline-xl text-headline-xl text-primary mb-sm">Global Auto Parts Manufacturer</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-lg">Legacy system overhaul leading to synchronized global supply chain operations across 42 facilities.</p>
<div className="flex items-center gap-xl border-t border-[#17184B] pt-md mt-auto">
<div>
<span className="block font-display-lg text-display-lg text-secondary leading-none">95%</span>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">ROI Year 1</span>
</div>
<div className="h-12 w-px bg-neutral-800 hidden sm:block"></div>
<div>
<span className="block font-display-lg text-display-lg text-primary leading-none">99.99%</span>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Uptime SLA Met</span>
</div>
<Link className="ml-auto btn-primary font-label-sm text-label-sm uppercase" href="/contact">View Study</Link>
</div>
</div>
</article>

<article className="col-span-1 md:col-span-4 card-outline flex flex-col relative overflow-hidden h-[500px]">
<div className="p-xl flex flex-col h-full">
<div className="flex gap-sm mb-lg">
<span className="gsap-stagger-item border-2 border-[#17184B] bg-neutral-50 text-white px-sm py-xs font-label-sm text-label-sm uppercase rounded-full">Healthcare</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-md">National Health Network</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl flex-grow">Implementation of zero-trust architecture protecting 50M+ patient records across disparate regional databases.</p>
<div className="bg-neutral-50 p-md border-2 border-[#17184B] mb-lg rounded-[4px]">
<span className="block font-headline-xl text-headline-xl text-secondary mb-xs">0</span>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Breaches Post-Deployment</span>
</div>
<Link className="border-2 border-[#17184B] hover:bg-neutral-50 text-primary font-label-sm text-label-sm uppercase w-full text-center mt-auto flex items-center justify-center gap-xs rounded-full py-3" href="/contact">
                            Read Detail <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</article>
</div>
</section>

<section>
<h2 className="font-headline-md text-headline-md text-primary mb-lg uppercase tracking-tight border-b border-[#17184B] pb-sm">Complete Archive</h2>
<div className="masonry-grid">

<article className="masonry-item card-outline flex flex-col transition-colors group cursor-pointer">
<img alt="Data visualization dashboard" className="w-full min-h-[12rem] h-auto object-cover border-b border-[#17184B] grayscale group-hover:grayscale-0 transition-all duration-500 rounded-t-2xl" src="/images/systems_architect_board.png" />
<div className="p-lg">
<div className="flex justify-between items-start mb-md">
<span className="bg-neutral-100 border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase text-neutral-600 rounded-full">Financial Services</span>
<span className="material-symbols-outlined text-secondary" data-icon="bar_chart">bar_chart</span>
</div>
<h3 className="font-headline-md text-lg font-bold text-primary mb-sm leading-tight">Tier-1 Investment Bank Core Modernization</h3>
<div className="mt-md pt-md border-t border-[#17184B] grid grid-cols-1 gap-md">
<div>
<h4 className="font-label-sm text-label-sm uppercase text-primary mb-xs">The Problem</h4>
<p className="font-body-md text-sm text-on-surface-variant">Monolithic trading platform causing microsecond latency during high-volume market events.</p>
</div>
<div>
<h4 className="font-label-sm text-label-sm uppercase text-secondary mb-xs">The Solution</h4>
<p className="font-body-md text-sm text-on-surface-variant">Microservices containerization reducing latency by 42% and enabling horizontal scaling.</p>
</div>
</div>
</div>
</article>

<article className="masonry-item card-outline p-lg flex flex-col transition-colors group cursor-pointer">
<div className="flex justify-between items-start mb-md">
<span className="bg-neutral-100 border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase text-neutral-600 rounded-full">Retail E-Commerce</span>
<span className="material-symbols-outlined text-secondary" data-icon="shopping_cart">shopping_cart</span>
</div>
<h3 className="font-headline-md text-lg font-bold text-primary mb-sm leading-tight">Black Friday Infrastructure Resiliency</h3>
<div className="my-md p-md bg-neutral-100 text-primary border-2 border-[#17184B] rounded-[4px]">
<span className="block font-headline-xl text-headline-xl text-secondary mb-xs">100%</span>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Uptime During 50x Traffic Spike</span>
</div>
<div className="gsap-stagger-container grid grid-cols-1 gap-md">
<div>
<h4 className="font-label-sm text-label-sm uppercase text-primary mb-xs">The Problem</h4>
<p className="font-body-md text-sm text-on-surface-variant">Historical outages during peak holiday shopping events costing millions in lost revenue.</p>
</div>
<div>
<h4 className="font-label-sm text-label-sm uppercase text-secondary mb-xs">The Solution</h4>
<p className="font-body-md text-sm text-on-surface-variant">Auto-scaling serverless architecture implemented across multi-cloud environments for redundancy.</p>
</div>
</div>
</article>

<article className="masonry-item card-outline flex flex-col transition-colors group cursor-pointer">
<div className="p-lg">
<div className="flex justify-between items-start mb-md">
<span className="bg-neutral-100 border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase text-neutral-600 rounded-full">Logistics</span>
<span className="material-symbols-outlined text-secondary" data-icon="local_shipping">local_shipping</span>
</div>
<h3 className="font-headline-md text-lg font-bold text-primary mb-sm leading-tight">AI-Driven Route Optimization</h3>
<div className="mt-md pt-md border-t border-[#17184B] grid grid-cols-1 gap-md">
<div>
<h4 className="font-label-sm text-label-sm uppercase text-primary mb-xs">The Problem</h4>
<p className="font-body-md text-sm text-on-surface-variant">Inefficient last-mile delivery routes resulting in excessive fuel costs and missed delivery windows.</p>
</div>
<div>
<h4 className="font-label-sm text-label-sm uppercase text-secondary mb-xs">The Solution</h4>
<p className="font-body-md text-sm text-on-surface-variant">Custom ML algorithm analyzing traffic, weather, and load constraints in real-time, reducing fleet fuel consumption by 18%.</p>
</div>
</div>
</div>
</article>

<article className="masonry-item card-outline flex flex-col transition-colors group cursor-pointer">
<img alt="Server room" className="w-full min-h-[16rem] h-auto object-cover border-b border-[#17184B] grayscale group-hover:grayscale-0 transition-all duration-500 rounded-t-2xl" src="/images/datacenter_racks.png" />
<div className="p-lg">
<div className="flex justify-between items-start mb-md">
<span className="bg-neutral-100 border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase text-neutral-600 rounded-full">Telecommunications</span>
<span className="material-symbols-outlined text-secondary" data-icon="router">router</span>
</div>
<h3 className="font-headline-md text-lg font-bold text-primary mb-sm leading-tight">5G Edge Compute Deployment</h3>
<div className="mt-md pt-md border-t border-[#17184B] grid grid-cols-1 gap-md">
<div>
<h4 className="font-label-sm text-label-sm uppercase text-primary mb-xs">The Problem</h4>
<p className="font-body-md text-sm text-on-surface-variant">Centralized data processing creating unacceptable latency for IoT device networks.</p>
</div>
<div>
<h4 className="font-label-sm text-label-sm uppercase text-secondary mb-xs">The Solution</h4>
<p className="font-body-md text-sm text-on-surface-variant">Distributed edge node architecture bringing processing power closer to endpoints.</p>
</div>
</div>
</div>
</article>
</div>
<div className="mt-xl flex justify-center border-t border-[#17184B] pt-xl">
<button className="btn-ghost font-label-sm text-label-sm uppercase flex items-center gap-xs">
                    Load More Studies <span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
</button>
</div>
</section>
</main>

<Footer />
    </>
  );
}
