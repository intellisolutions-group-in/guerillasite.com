import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
<main className="flex-grow">

<section className="max-w-container-max mx-auto px-margin-desktop py-huge md:py-[120px] grid grid-cols-12 gap-gutter items-center">
<div className="col-span-12 md:col-span-8">
<span className="inline-block font-label-sm text-label-sm text-secondary tracking-widest uppercase mb-md border-2 border-[#17184B] px-sm py-xs">Case Study — Healthcare</span>
<h1 className="gsap-hero-animate font-display-lg text-display-lg text-primary mb-xl">Healthcare Compliance at Scale.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-xl">
                    Engineering a secure, high-availability platform to unify fragmented patient data while navigating rigid regulatory compliance requirements. Precision architecture for zero-tolerance environments.
                </p>
<div className="flex gap-md">
<span className="font-label-sm text-label-sm bg-white border-2 border-[#17184B] px-md py-sm">AWS HealthLake</span>
<span className="font-label-sm text-label-sm bg-white border-2 border-[#17184B] px-md py-sm">React</span>
<span className="font-label-sm text-label-sm bg-white border-2 border-[#17184B] px-md py-sm">Python</span>
</div>
</div>
<div className="col-span-12 md:col-span-4 mt-xl md:mt-0 relative aspect-square border-2 border-[#17184B] bg-white flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-primary opacity-5 grid" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<img alt="Systems architect sketching healthcare data infrastructure on a whiteboard" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 rounded-[4px]" data-alt="A realistic photograph of a cloud architect sketching high-availability healthcare server nodes and API gateways on a whiteboard in an office room, with soft warm lighting." src="/images/systems_architect_board.png" />
</div>
</section>

<section className="bg-white py-xxl">
<div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-12 gap-gutter">
<div className="col-span-12 md:col-span-4 border-t border-[#17184B] pt-md">
<h2 className="font-headline-md text-headline-md text-primary">The Problem</h2>
</div>
<div className="col-span-12 md:col-span-8 border-t border-[#17184B] pt-md">
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-xl">
<div>
<div className="mb-md"><span className="material-symbols-outlined text-secondary text-[32px]">warning</span></div>
<h3 className="font-body-lg text-body-lg font-bold text-primary mb-sm">Compliance Challenges</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                                Legacy infrastructure could not guarantee the stringent data segregation and audit trails required by updated regulatory standards, posing severe legal and operational risks.
                            </p>
</div>
<div>
<div className="mb-md"><span className="material-symbols-outlined text-secondary text-[32px]">dataset</span></div>
<h3 className="font-body-lg text-body-lg font-bold text-primary mb-sm">Fragmented Data</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                                Patient records were siloed across incompatible EHR systems, causing critical delays in diagnostic workflows and reducing overall care quality.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-desktop py-huge">
<div className="gsap-stagger-container grid grid-cols-12 gap-gutter">
<div className="col-span-12 md:col-span-6 flex flex-col justify-center border-2 border-[#17184B] p-xl relative">
<span className="absolute top-0 right-0 bg-primary text-on-primary font-label-sm text-label-sm px-sm py-xs m-sm">Architecture</span>
<h2 className="font-headline-xl text-headline-xl text-primary mb-lg">Secure Data Lake Foundation.</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl">
                         We engineered a centralized, immutable data lake to serve as the single source of truth. The architecture enforces strict access controls at the cell level, ensuring that patient portals retrieve data rapidly without compromising security.
                     </p>
<ul className="space-y-sm font-body-md text-body-md text-primary border-t border-[#17184B] pt-md">
<li className="flex items-center gap-sm"><span className="material-symbols-outlined text-[20px]">check</span> Immutable Audit Logs</li>
<li className="flex items-center gap-sm"><span className="material-symbols-outlined text-[20px]">check</span> Real-time FHIR Ingestion</li>
<li className="flex items-center gap-sm"><span className="material-symbols-outlined text-[20px]">check</span> Zero-Trust Access Model</li>
</ul>
</div>
<div className="col-span-12 md:col-span-6 grid grid-rows-2 gap-gutter">
<div className="gsap-stagger-item border-2 border-[#17184B] p-lg bg-white flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Frontend Stack</span>
<div className="flex justify-between items-end mt-xl">
<h3 className="font-headline-md text-headline-md text-white">React & TypeScript</h3>
<span className="material-symbols-outlined text-[40px] text-neutral-500">code</span>
</div>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] p-lg bg-white flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Backend & Infrastructure</span>
<div className="flex justify-between items-end mt-xl">
<h3 className="font-headline-md text-headline-md text-white">Python / AWS</h3>
<span className="material-symbols-outlined text-[40px] text-neutral-500">cloud</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-huge">
<div className="max-w-container-max mx-auto px-margin-desktop">
<div className="mb-xl">
<h2 className="font-headline-md text-headline-md text-primary border-b border-[#17184B] pb-sm inline-block">Impact & Metrics</h2>
</div>
<div className="gsap-stagger-container grid grid-cols-12 gap-gutter">
<div className="col-span-12 md:col-span-8 border-2 border-[#17184B] p-xl bg-white flex flex-col justify-center">
<div className="font-display-lg text-display-lg text-white">99.9%</div>
<div className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mt-sm">System Uptime Achieved</div>
</div>
<div className="col-span-12 md:col-span-4 border-2 border-[#17184B] p-xl bg-primary text-primary flex flex-col justify-center">
<div className="font-display-lg text-display-lg text-secondary">0</div>
<div className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mt-sm">Data Breaches</div>
</div>
<div className="col-span-12 border-2 border-[#17184B] p-md bg-white flex justify-between items-center">
<span className="font-body-md text-body-md">Compliance Audit Clearance</span>
<span className="bg-secondary text-on-secondary font-label-sm text-label-sm px-sm py-xs">PASSED - 100%</span>
</div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-desktop py-huge">
<div className="border-l-2 border-secondary pl-xl py-md">
<span className="material-symbols-outlined text-[48px] text-neutral-500 mb-md block">format_quote</span>
<blockquote className="font-headline-xl text-headline-xl text-primary mb-lg leading-tight">
                     "GuerillaSite delivered an architecture that transformed our liability into an asset. Their engineering precision is unmatched in the healthcare space."
                 </blockquote>
<div className="flex items-center gap-md">
<div className="w-12 h-12 bg-white border-2 border-[#17184B] overflow-hidden">
<img alt="Portrait of Dr. Sneha Joshi" className="w-full h-full object-cover grayscale rounded-full" data-alt="A high-contrast, black and white professional portrait of a senior medical officer. The lighting is studio-quality, emphasizing crisp details and a serious, authoritative expression. The background is pure white, aligning with a stark, modern, premium enterprise design aesthetic." src="/images/headshot_female.png" />
</div>
<div>
<div className="font-body-lg text-body-lg font-bold text-white">Dr. Sneha Joshi</div>
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Chief Medical Officer</div>
</div>
</div>
</div>
</section>
</main>

<Footer />
    </>
  );
}
