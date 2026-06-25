import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
<main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-xxl md:py-huge grid grid-cols-4 md:grid-cols-12 gap-gutter">

<section className="col-span-4 md:col-span-12 grid grid-cols-4 md:grid-cols-12 gap-gutter mb-huge">
<div className="col-span-4 md:col-span-6 flex flex-col justify-center pr-0 md:pr-xl">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-md border-l-2 border-secondary pl-base">Case Study // FinTech</span>
<h1 className="gsap-hero-animate font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-lg">Algorithmic Financial Intelligence</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">Deploying a real-time risk engine to mitigate sophisticated fraud vectors across global transaction networks.</p>
<div className="flex gap-md">
<span className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase rounded-[4px]">Go</span>
<span className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase rounded-[4px]">Python</span>
<span className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase rounded-[4px]">AWS</span>
</div>
</div>
<div className="col-span-4 md:col-span-6 mt-lg md:mt-0 relative border-2 border-[#17184B] p-base rounded-[4px] bg-white grid-blueprint aspect-[4/3] flex items-center justify-center overflow-hidden">
<img alt="Systems architect sketching risk model nodes on a whiteboard" className="w-full h-full object-cover filter grayscale contrast-125 rounded-[4px]" data-alt="A realistic photograph of a financial systems architect sketching ledger and consensus nodes on a whiteboard in a corporate conference room, natural lighting." src="/images/systems_architect_board.png" />
</div>
</section>

<section className="col-span-4 md:col-span-12 border-t border-[#17184B] pt-xl mb-huge grid grid-cols-4 md:grid-cols-12 gap-gutter">
<div className="col-span-4 md:col-span-4">
<h2 className="font-headline-md text-headline-md text-white">The Fraud Vector</h2>
</div>
<div className="col-span-4 md:col-span-8">
<p className="font-body-md text-body-md text-on-surface-variant mb-lg">Legacy rule-based systems were failing to detect synthetic identity fraud and multi-hop laundering techniques, resulting in unacceptable false positive rates that strained compliance operations.</p>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-md mt-xl">
<div className="border-l-2 border-secondary pl-md py-sm bg-white border-2 border-[#17184B] rounded-r-xl">
<span className="material-symbols-outlined text-secondary block mb-xs" style={{fontVariationSettings: '"FILL" 1'}}>warning</span>
<h3 className="font-label-sm text-label-sm uppercase text-primary mb-xs">False Positive Rate</h3>
<p className="font-headline-md text-headline-md text-primary text-display-md">87%</p>
</div>
<div className="border-l-2 border-secondary pl-md py-sm bg-white border-2 border-[#17184B] rounded-r-xl">
<span className="material-symbols-outlined text-secondary block mb-xs" style={{fontVariationSettings: '"FILL" 1'}}>timer</span>
<h3 className="font-label-sm text-label-sm uppercase text-primary mb-xs">Processing Latency</h3>
<p className="font-headline-md text-headline-md text-primary text-display-md">{">"} 2.5s</p>
</div>
</div>
</div>
</section>

<section className="col-span-4 md:col-span-12 border-t border-[#17184B] pt-xl mb-huge">
<h2 className="font-headline-md text-headline-md text-primary mb-xl">Solution: Real-Time Risk Engine</h2>

<div className="gsap-stagger-container grid grid-cols-4 md:grid-cols-12 gap-base auto-rows-min">

<div className="col-span-4 md:col-span-8 border-2 border-[#17184B] rounded-[4px] p-xl bg-white">
<div className="flex justify-between items-start mb-xxl">
<span className="material-symbols-outlined text-secondary text-display-lg" style={{fontVariationSettings: '"FILL" 0'}}>account_tree</span>
<span className="bg-primary text-on-primary font-label-sm text-label-sm uppercase px-sm py-xs rounded-[4px]">Architecture</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-md">Graph-Based Detection</h3>
<p className="font-body-md text-body-md text-on-surface-variant">We architected a distributed graph database capable of mapping millions of entity relationships in real-time, uncovering hidden networks invisible to relational queries.</p>
</div>

<div className="col-span-4 md:col-span-4 flex flex-col gap-base">
<div className="flex-1 border-2 border-[#17184B] rounded-[4px] p-lg bg-white">
<h4 className="font-label-sm text-label-sm uppercase text-primary mb-sm">Throughput</h4>
<p className="font-headline-xl text-headline-xl text-white">10k <span className="font-body-md text-body-md text-on-surface-variant">TPS</span></p>
</div>
<div className="flex-1 border-2 border-[#17184B] rounded-[4px] p-lg bg-white">
<h4 className="font-label-sm text-label-sm uppercase text-primary mb-sm">Latency SLA</h4>
<p className="font-headline-xl text-headline-xl text-white">{"<"} 50 <span className="font-body-md text-body-md text-on-surface-variant">ms</span></p>
</div>
</div>
</div>
</section>

<section className="col-span-4 md:col-span-12 border-t border-[#17184B] pt-xl grid grid-cols-4 md:grid-cols-12 gap-gutter items-center">
<div className="col-span-4 md:col-span-6 bg-primary text-on-primary p-xl border-2 border-[#17184B] rounded-[4px] h-full flex flex-col justify-center">
<h2 className="font-label-sm text-label-sm uppercase tracking-widest mb-lg text-secondary">Return on Investment</h2>
<div className="mb-lg">
<span className="font-display-lg text-display-lg-mobile md:text-display-lg block mb-xs">40%</span>
<span className="font-body-md text-body-md">Reduction in False Positives</span>
</div>
<div className="w-full h-px bg-neutral-50 mb-lg"></div>
<div>
<span className="font-display-lg text-display-lg-mobile md:text-display-lg block mb-xs">$12M</span>
<span className="font-body-md text-body-md">Annual Operational Savings</span>
</div>
</div>
<div className="col-span-4 md:col-span-6 pl-0 md:pl-xl border-l-0 md:border-l border-[#17184B] py-xl">
<span className="material-symbols-outlined text-secondary text-display-lg mb-md opacity-20" style={{fontVariationSettings: '"FILL" 1'}}>format_quote</span>
<blockquote className="font-headline-md text-headline-md text-primary mb-xl">
                    "The precision of the new engine completely transformed our compliance operations. We're catching smarter fraud faster, with less human intervention."
                </blockquote>
<div className="flex items-center gap-md">
<div className="w-12 h-12 bg-white border-2 border-[#17184B] rounded-full overflow-hidden shadow-[3px_3px_0px_0px_#17184B]">
<img alt="Portrait of CTO" className="w-full h-full object-cover rounded-full" data-alt="A stark, high-contrast, black-and-white portrait of a serious, middle-aged male executive in a tailored dark suit. The lighting is dramatic and directional, creating a sharp, modern corporate aesthetic against a pure white background. The image exudes authority and technical competence, fitting a light-mode enterprise financial setting." src="/images/headshot_male.png" />
</div>
      <div>
        <p className="font-label-sm text-label-sm uppercase text-white">Manoj Verma</p>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm">Chief Technology Officer</p>
      </div>
</div>
</div>
</section>
</main>

<Footer />
    </>
  );
}
