import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />
<main>

<section className="py-huge px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-surface-variant">
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
<div className="col-span-1 md:col-span-7 space-y-xl">
<h1 className="gsap-hero-animate font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
                        Scalable Backend Infrastructure
                    </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                        Architecting resilient, high-throughput systems. We build the hidden engines that power enterprise performance, leveraging modern distributed methodologies to ensure zero-downtime scalability.
                    </p>
<div className="pt-md">
<button className="bg-secondary text-on-secondary font-label-sm text-label-sm px-xl py-md uppercase tracking-widest hover-lift border border-secondary inline-flex items-center gap-2">
                            Build for high throughput
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
<div className="col-span-1 md:col-span-5 relative min-h-[16rem] h-auto md:h-full min-h-[400px] border-2 border-[#17184B] bg-[#F0EEE9] flex items-center justify-center overflow-hidden group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034')] bg-cover bg-center opacity-20 grayscale mix-blend-multiply" data-alt="A stark, high-contrast abstract representation of a modern server cluster. The image features repeating geometric patterns resembling server racks in a minimalist data center. The lighting is harsh and directional, emphasizing the rigid lines and industrial nature of the hardware. The palette is strictly monochromatic—deep blacks, stark whites, and varying shades of slate gray—evoking a sense of engineered precision and immense computational power without any soft or organic elements."></div>
<div className="relative z-10 grid grid-cols-3 gap-sm p-lg w-full max-w-[300px]">

<div className="h-12 border-2 border-[#17184B] bg-[#F8F7F4] flex items-center justify-center"><span className="material-symbols-outlined text-primary">dns</span></div>
<div className="h-12 border-2 border-[#17184B] bg-primary text-on-primary flex items-center justify-center"><span className="material-symbols-outlined">router</span></div>
<div className="h-12 border-2 border-[#17184B] bg-[#F8F7F4] flex items-center justify-center"><span className="material-symbols-outlined text-primary">dns</span></div>
<div className="col-span-3 h-[1px] bg-primary my-xs"></div>
<div className="h-12 border-2 border-[#17184B] bg-[#F8F7F4] flex items-center justify-center"><span className="material-symbols-outlined text-primary">database</span></div>
<div className="h-12 border-2 border-[#17184B] bg-[#F8F7F4] flex items-center justify-center"><span className="material-symbols-outlined text-primary">database</span></div>
<div className="h-12 border-2 border-[#17184B] bg-[#F8F7F4] flex items-center justify-center"><span className="material-symbols-outlined text-primary">storage</span></div>
</div>
</div>
</div>
</section>

<section className="py-huge px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="mb-xxl">
<h2 className="font-headline-xl text-headline-xl text-primary border-b-2 border-[#17184B] inline-block pb-xs">Architectural Paradigms</h2>
</div>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-md h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-8 row-span-1 border-2 border-[#17184B] bg-[#F8F7F4] p-xl flex flex-col justify-between group hover:bg-surface-container-low transition-colors duration-300">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-headline-md" style={{fontVariationSettings: '"FILL" 1'}}>hub</span>
<span className="font-label-sm text-label-sm uppercase border-2 border-[#17184B] px-2 py-1">Core</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm">Microservices</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                            Decoupling monolithic structures into independent, deployable services. This allows targeted scaling, isolated failure domains, and rapid, independent iteration across engineering squads.
                        </p>
</div>
</div>

<div className="col-span-1 md:col-span-4 row-span-1 border-2 border-[#17184B] bg-primary text-on-primary p-xl flex flex-col justify-between group">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-headline-md text-secondary" style={{fontVariationSettings: '"FILL" 1'}}>api</span>
<span className="font-label-sm text-label-sm uppercase border border-secondary text-secondary px-2 py-1">Standard</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md mb-sm">API-First Design</h3>
<p className="font-body-md text-body-md opacity-80">
                            Treating APIs as first-class citizens. Contracts are defined before code, ensuring seamless integration between front-end, back-end, and third-party consumers.
                        </p>
</div>
</div>

<div className="col-span-1 md:col-span-12 row-span-1 border-2 border-[#17184B] bg-[#F8F7F4] p-0 flex flex-col md:flex-row overflow-hidden group">
<div className="p-xl flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#17184B] hover:bg-surface-container-low transition-colors duration-300">
<div>
<span className="material-symbols-outlined text-headline-md mb-lg" style={{fontVariationSettings: '"FILL" 1'}}>lan</span>
<h3 className="font-headline-md text-headline-md text-primary mb-sm">Distributed Systems</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                                Engineering for eventual consistency, consensus protocols, and partitioning. We design systems that span multiple geographical zones, ensuring high availability and fault tolerance even during catastrophic regional failures.
                            </p>
</div>
<div className="mt-lg">
<Link className="font-label-sm text-label-sm uppercase text-secondary hover:underline underline-offset-4 flex items-center gap-1" href="/contact">
                                 View our consensus models <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</Link>
</div>
</div>
<div className="w-full md:w-1/3 bg-surface-container relative min-h-[200px]">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 grayscale mix-blend-multiply" data-alt="A highly detailed, technical blueprint-style image showing complex network routing diagrams. The visual consists of thin, precise black lines on a light gray background, depicting nodes, data flows, and load balancing configurations in a strict, orthogonal layout. The image is devoid of color, relying entirely on the contrast of structural lines to convey complex information architecture, perfectly aligning with a stark, engineered aesthetic."></div>
</div>
</div>
</div>
</section>

<section className="py-huge px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-surface-variant">
<div className="max-w-container-max mx-auto">
<div className="mb-xxl flex justify-between items-end border-b border-[#17184B] pb-sm">
<h2 className="font-headline-xl text-headline-xl text-primary">Technology Stack</h2>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant hidden md:block">Supported Environments</span>
</div>
<div className="flex flex-col border-x border-[#17184B] bg-surface">

<div className="gsap-stagger-container grid grid-cols-12 border-b border-[#17184B] bg-surface-container p-sm font-label-sm text-label-sm uppercase tracking-widest">
<div className="col-span-4 pl-md">Language/Framework</div>
<div className="col-span-6 border-l border-[#17184B] pl-sm hidden md:block">Primary Application</div>
<div className="col-span-8 md:col-span-2 border-l border-[#17184B] pl-sm text-right pr-md">Status</div>
</div>

<div className="gsap-stagger-container grid grid-cols-12 border-b border-[#17184B] hover:bg-surface-container transition-colors items-center">
<div className="col-span-4 p-md font-headline-md text-headline-md text-primary flex items-center gap-sm">
<span className="w-2 h-2 bg-secondary block"></span> Node.js
                        </div>
<div className="col-span-6 border-l border-[#17184B] p-md h-full flex items-center text-on-surface-variant hidden md:flex">
                            High-concurrency I/O bound services, real-time data streaming, API gateways.
                        </div>
<div className="col-span-8 md:col-span-2 border-l border-[#17184B] p-md h-full flex items-center justify-end">
<span className="font-label-sm text-label-sm border-2 border-[#17184B] px-2 py-1">Active Core</span>
</div>
</div>

<div className="gsap-stagger-container grid grid-cols-12 border-b border-[#17184B] hover:bg-surface-container transition-colors items-center">
<div className="col-span-4 p-md font-headline-md text-headline-md text-primary flex items-center gap-sm">
<span className="w-2 h-2 bg-primary block"></span> Go
                        </div>
<div className="col-span-6 border-l border-[#17184B] p-md h-full flex items-center text-on-surface-variant hidden md:flex">
                            High-performance microservices, concurrent processing, infrastructure tooling.
                        </div>
<div className="col-span-8 md:col-span-2 border-l border-[#17184B] p-md h-full flex items-center justify-end">
<span className="font-label-sm text-label-sm border-2 border-[#17184B] px-2 py-1">Active Core</span>
</div>
</div>

<div className="gsap-stagger-container grid grid-cols-12 border-b border-[#17184B] hover:bg-surface-container transition-colors items-center">
<div className="col-span-4 p-md font-headline-md text-headline-md text-primary flex items-center gap-sm">
<span className="w-2 h-2 bg-outline block"></span> Python / Django
                        </div>
<div className="col-span-6 border-l border-[#17184B] p-md h-full flex items-center text-on-surface-variant hidden md:flex">
                            Data-intensive applications, rapid prototyping, machine learning integration pipelines.
                        </div>
<div className="col-span-8 md:col-span-2 border-l border-[#17184B] p-md h-full flex items-center justify-end">
<span className="font-label-sm text-label-sm border-2 border-[#17184B] text-outline px-2 py-1">Supported</span>
</div>
</div>

<div className="gsap-stagger-container grid grid-cols-12 hover:bg-surface-container transition-colors items-center">
<div className="col-span-4 p-md font-headline-md text-headline-md text-primary flex items-center gap-sm">
<span className="w-2 h-2 bg-outline block"></span> Java / Spring
                        </div>
<div className="col-span-6 border-l border-[#17184B] p-md h-full flex items-center text-on-surface-variant hidden md:flex">
                            Legacy enterprise systems, heavy transactional workloads, rigid monolithic migrations.
                        </div>
<div className="col-span-8 md:col-span-2 border-l border-[#17184B] p-md h-full flex items-center justify-end">
<span className="font-label-sm text-label-sm border-2 border-[#17184B] text-outline px-2 py-1">Supported</span>
</div>
</div>
</div>
</div>
</section>
</main>

<Footer />
    </>
  );
}
