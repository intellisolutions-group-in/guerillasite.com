import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

<main className="flex-grow relative overflow-hidden">

<div className="narrative-line hidden md:block"></div>

<section className="relative pt-huge pb-xxl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-b border-surface-variant bg-blueprint">
<div className="gsap-stagger-container grid grid-cols-4 md:grid-cols-12 gap-gutter items-center">
<div className="col-span-4 md:col-span-6 z-10 bg-white/90 backdrop-blur-sm p-xl border-2 border-[#17184B] rounded-[4px]">
<div className="inline-flex items-center space-x-base border border-secondary px-base py-xs mb-lg rounded-full">
<span className="w-2 h-2 bg-secondary rounded-full"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Case Study</span>
</div>
<h1 className="gsap-hero-animate font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-lg">
                        Intelligent Business Automation
                    </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-xl">
                        A narrative analysis of implementing multi-agent LLM orchestration to bridge the operational chasm, resulting in unprecedented deployment velocity.
                    </p>
<div className="flex flex-wrap gap-md">
<div className="gsap-stagger-item border-2 border-[#17184B] px-md py-base rounded-[4px]">
<span className="font-label-sm text-label-sm text-neutral-500 uppercase block mb-xs">Industry</span>
<span className="font-body-md text-body-md text-primary">Enterprise Software</span>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] px-md py-base rounded-[4px]">
<span className="font-label-sm text-label-sm text-neutral-500 uppercase block mb-xs">Timeline</span>
<span className="font-body-md text-body-md text-primary">12 Weeks</span>
</div>
</div>
</div>
<div className="col-span-4 md:col-span-6 relative mt-xl md:mt-0">
<div className="aspect-square md:aspect-[4/3] bg-white border-2 border-[#17184B] relative overflow-hidden group rounded-[4px]">
<img alt="Professional systems architect sketching network nodes on a whiteboard" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-500" data-alt="A realistic, high-quality photograph of a cloud architect sketching server and network nodes on a whiteboard in a clean office conference room setting, with natural lighting." src="/images/systems_architect_board.png" />

<div className="absolute top-1/4 left-1/4 bg-white border-2 border-[#17184B] p-md shadow-none transform -translate-x-1/2 -translate-y-1/2">
<span className="font-label-sm text-label-sm uppercase block mb-xs">Agent Alpha</span>
<div className="h-1 w-12 bg-secondary"></div>
</div>
<div className="absolute bottom-1/3 right-1/4 bg-white border-2 border-[#17184B] p-md shadow-none transform translate-x-1/2 translate-y-1/2">
<span className="font-label-sm text-label-sm uppercase block mb-xs">Orchestrator</span>
<div className="h-1 w-full bg-primary"></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<path d="M 25% 25% L 75% 66%" fill="none" stroke="black" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-huge px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="gsap-stagger-container grid grid-cols-4 md:grid-cols-12 gap-gutter">
<div className="col-span-4 md:col-span-5 md:col-start-2">
<h2 className="font-headline-xl text-headline-xl text-primary mb-lg">
                        The Operational Chasm
                    </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
                        Before implementation, the client faced a severe disconnect between strategic intent and execution velocity. Traditional automation scripts were brittle, requiring constant manual intervention and creating a massive bottleneck in deployment pipelines.
                    </p>
<ul className="space-y-md font-body-md text-body-md text-primary border-l border-[#17184B] pl-lg">
<li className="flex items-start">
<span className="material-symbols-outlined text-secondary mr-md mt-xs">warning</span>
<span className="">Deployment frequency stalled at bi-weekly cycles due to manual QA overhead.</span>
</li>
<li className="flex items-start">
<span className="material-symbols-outlined text-secondary mr-md mt-xs">warning</span>
<span className="">Context loss between development and operations teams resulting in 30% rework.</span>
</li>
<li className="flex items-start">
<span className="material-symbols-outlined text-secondary mr-md mt-xs">warning</span>
<span className="">Inability to scale infrastructure provisioning without linear headcount growth.</span>
</li>
</ul>
</div>
<div className="col-span-4 md:col-span-4 md:col-start-8 mt-xl md:mt-0">

<div className="bg-white border-2 border-[#17184B] p-xl h-full flex flex-col justify-between rounded-[4px]">
<div>
<span className="font-label-sm text-label-sm text-neutral-500 uppercase tracking-widest block mb-md">Pre-Intervention Metrics</span>
<div className="text-display-lg font-display-lg text-primary mb-xs">14<span className="text-headline-md font-headline-md">days</span></div>
<div className="font-body-md text-body-md text-on-surface-variant border-b border-surface-variant pb-md mb-md">Average Deployment Cycle</div>
<div className="text-headline-xl font-headline-xl text-primary mb-xs">30<span className="text-headline-md font-headline-md">%</span></div>
<div className="font-body-md text-body-md text-on-surface-variant">Rework Rate</div>
</div>
<div className="mt-xl pt-lg border-t border-[#17184B]">
<div className="w-full bg-neutral-100 h-2 mb-xs">
<div className="bg-secondary h-2 w-[85%]"></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-neutral-500 uppercase">
<span className="">Manual Effort</span>
<span className="">85%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-huge px-margin-mobile md:px-margin-desktop bg-white border-y border-[#17184B]">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-xxl max-w-3xl mx-auto">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-md border-b border-secondary inline-block pb-xs">The Architecture</span>
<h2 className="font-headline-xl text-headline-xl text-primary mb-lg">
                        Multi-Agent LLM Orchestration
                    </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                        We designed a bespoke architecture where specialized LLM agents collaborate, acting as autonomous actors within bounded contexts, overseen by a deterministic orchestrator.
                    </p>
</div>

<div className="gsap-stagger-container grid grid-cols-4 md:grid-cols-12 gap-gutter auto-rows-[200px]">

<div className="col-span-4 md:col-span-8 row-span-2 bg-white border-2 border-[#17184B] p-xl relative overflow-hidden flex flex-col justify-end group rounded-[4px]">
<div className="absolute inset-0 bg-blueprint opacity-50 z-0"></div>
<div className="relative z-10 w-2/3 bg-white border-2 border-[#17184B] p-lg rounded-[4px]">
<h3 className="font-headline-md text-headline-md text-primary mb-md">Context-Aware Agents</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                                Deploying specialized models finetuned on discrete operational domains (QA, Provisioning, Audit). They communicate via structured JSON contracts, ensuring zero hallucination in execution paths.
                            </p>
</div>

<div className="absolute top-xl right-xl w-32 h-32 border border-secondary rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute top-xl right-xl w-32 h-32 border-2 border-[#17184B] rounded-[4px] rotate-45 opacity-10 group-hover:rotate-90 transition-transform duration-1000"></div>
</div>

<div className="col-span-4 md:col-span-4 row-span-1 bg-tertiary border-2 border-[#17184B] p-lg flex flex-col justify-center rounded-[4px]">
<span className="material-symbols-outlined text-secondary mb-md text-[32px]">hub</span>
<h4 className="font-label-sm text-label-sm text-surface-variant uppercase tracking-widest mb-xs">Agent Nodes</h4>
<div className="font-display-lg text-display-lg text-on-tertiary">24<span className="text-secondary">+</span></div>
</div>

<div className="col-span-4 md:col-span-4 row-span-1 bg-white border-2 border-[#17184B] p-lg flex flex-col justify-center hover:bg-white transition-colors cursor-pointer rounded-[4px]">
<div className="flex justify-between items-center mb-md">
<h4 className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Orchestrator Logic</h4>
<span className="material-symbols-outlined text-white">arrow_forward</span>
</div>
<div className="h-px bg-outline-variant w-full mb-md"></div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Deterministic routing based on confidence scoring and semantic analysis.</p>
</div>
</div>
</div>
</section>

<section className="py-huge px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-xxl border-b border-[#17184B] pb-lg">
<div>
<h2 className="font-headline-xl text-headline-xl text-white">
                        10x Deployment Velocity
                    </h2>
</div>
<div className="mt-lg md:mt-0 max-w-md">
<p className="font-body-md text-body-md text-on-surface-variant">
                        The integration of agentic workflows fundamentally altered the delivery pipeline, replacing rigid scripts with adaptive, intelligent automation.
                    </p>
</div>
</div>
<div className="gsap-stagger-container grid grid-cols-4 md:grid-cols-12 gap-gutter">

<div className="col-span-4 md:col-span-4 flex flex-col gap-md">
<div className="gsap-stagger-item border-2 border-[#17184B] p-lg bg-white rounded-[4px]">
<div className="flex justify-between items-end mb-md">
<span className="font-label-sm text-label-sm text-neutral-500 uppercase tracking-widest">Deployment Freq.</span>
<span className="material-symbols-outlined text-secondary">trending_up</span>
</div>
<div className="font-headline-xl text-headline-xl text-primary mb-xs">Daily</div>
<div className="font-body-md text-body-md text-on-surface-variant text-sm border-t border-surface-variant pt-sm">Up from bi-weekly</div>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] p-lg bg-white rounded-[4px]">
<div className="flex justify-between items-end mb-md">
<span className="font-label-sm text-label-sm text-neutral-500 uppercase tracking-widest">QA Automation</span>
<span className="material-symbols-outlined text-white">check_circle</span>
</div>
<div className="font-headline-xl text-headline-xl text-primary mb-xs">94%</div>
<div className="font-body-md text-body-md text-on-surface-variant text-sm border-t border-surface-variant pt-sm">Autonomous test generation</div>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] p-lg bg-white rounded-[4px]">
<div className="flex justify-between items-end mb-md">
<span className="font-label-sm text-label-sm text-neutral-500 uppercase tracking-widest">Incident MTTR</span>
<span className="material-symbols-outlined text-white">timer</span>
</div>
<div className="font-headline-xl text-headline-xl text-primary mb-xs">-60%</div>
<div className="font-body-md text-body-md text-on-surface-variant text-sm border-t border-surface-variant pt-sm">Mean time to resolution</div>
</div>
</div>

<div className="col-span-4 md:col-span-8 mt-xl md:mt-0">
<div className="bg-white border-2 border-[#17184B] p-sm h-full w-full rounded-[4px]">

<div className="flex items-center space-x-sm border-b border-[#17184B] pb-sm mb-md px-md">
<div className="w-3 h-3 border-2 border-[#17184B] bg-white rounded-full"></div>
<div className="w-3 h-3 border-2 border-[#17184B] bg-white rounded-full"></div>
<div className="w-3 h-3 border-2 border-[#17184B] bg-white rounded-full"></div>
<div className="ml-md font-label-sm text-label-sm text-neutral-500 uppercase">Orchestrator Dashboard v2.0</div>
</div>

<div className="gsap-stagger-container grid grid-cols-2 md:grid-cols-3 gap-sm p-sm">

<div className="col-span-2 md:col-span-3 bg-white border-2 border-[#17184B] p-md min-h-[12rem] h-auto relative flex flex-col justify-end rounded-[4px]">
<span className="font-label-sm text-label-sm text-primary uppercase absolute top-md left-md">Agent Activity Topology</span>
<div className="flex items-end justify-between h-24 gap-sm">

<div className="w-full bg-neutral-100 h-[20%] border-t border-[#17184B] relative group"><div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10"></div></div>
<div className="w-full bg-neutral-100 h-[40%] border-t border-[#17184B] relative group"><div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10"></div></div>
<div className="w-full bg-secondary h-[80%] border-t border-tertiary relative group"><div className="absolute inset-0 bg-tertiary opacity-0 group-hover:opacity-20"></div></div>
<div className="w-full bg-neutral-100 h-[30%] border-t border-[#17184B] relative group"><div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10"></div></div>
<div className="w-full bg-neutral-100 h-[60%] border-t border-[#17184B] relative group"><div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10"></div></div>
<div className="w-full bg-secondary h-[100%] border-t border-tertiary relative group"><div className="absolute inset-0 bg-tertiary opacity-0 group-hover:opacity-20"></div></div>
<div className="w-full bg-neutral-100 h-[50%] border-t border-[#17184B] relative group"><div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10"></div></div>
</div>
</div>

<div className="col-span-2 md:col-span-2 bg-white border-2 border-[#17184B] p-md h-32 overflow-hidden rounded-[4px]">
<span className="font-label-sm text-label-sm text-primary uppercase block mb-sm border-b border-[#17184B] pb-xs">Active Deployments</span>
<div className="space-y-xs">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="">Microservice_Auth</span> <span className="text-secondary border border-secondary px-1">Active</span>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="">Data_Pipeline_ETL</span> <span className="text-primary border-2 border-[#17184B] px-1">Success</span>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-neutral-500">
<span className="">Legacy_API_Gateway</span> <span className="">Queued</span>
</div>
</div>
</div>

<div className="col-span-2 md:col-span-1 bg-white border-2 border-[#17184B] p-md h-32 flex flex-col justify-center items-center text-center rounded-[4px]">
<span className="material-symbols-outlined text-secondary text-[48px] mb-xs">check_circle</span>
<span className="font-label-sm text-label-sm text-primary uppercase">System Optimal</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-huge px-margin-mobile md:px-margin-desktop bg-tertiary text-on-tertiary text-center">
<div className="max-w-2xl mx-auto flex flex-col items-center">
<h2 className="font-headline-xl text-headline-xl mb-lg">Ready to bridge your operational chasm?</h2>
<p className="font-body-lg text-body-lg text-on-tertiary-container mb-xl">
                    Engage our engineering team to architect your deterministic AI workflow.
                </p>
<button className="gsap-hero-animate btn-accent">
                    Initiate Consultation
                </button>
</div>
</section>
</main>

<Footer />
    </>
  );
}
