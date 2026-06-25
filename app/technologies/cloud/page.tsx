import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

<main className="flex-grow flex flex-col">

<section className="w-full pt-xxl pb-huge px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-container-max mx-auto border-b border-surface-variant">
<div className="col-span-1 md:col-span-8 flex flex-col justify-center">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-md block">Technology Practice</span>
<h1 className="gsap-hero-animate font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-lg">Multi-Cloud Architecture & Orchestration</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-2xl">
                    Architecting resilient, scalable, and cost-efficient cloud environments. We engineer precise orchestration across AWS, Azure, and GCP, ensuring operational supremacy and business continuity.
                </p>
<div className="flex flex-wrap gap-md">
<button className="gsap-hero-animate btn-accent flex items-center gap-sm">
                        Request a Cloud Audit
                        <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="btn-ghost">
                        Explore Case Studies
                    </button>
</div>
</div>
<div className="col-span-1 md:col-span-4 mt-xl md:mt-0 relative min-h-[300px]">
<div className="absolute inset-0 bg-surface-container border-2 border-[#17184B] p-md flex flex-col rounded-[4px] shadow-[3px_3px_0px_0px_#17184B]">
<div className="flex justify-between items-center mb-md pb-xs border-b border-[#17184B]">
<span className="font-label-sm text-label-sm uppercase tracking-widest">Global Nodes</span>
<span className="w-2 h-2 bg-secondary block rounded-full"></span>
</div>
<div className="flex-grow bg-surface-container-low border-2 border-[#17184B] relative overflow-hidden rounded-[4px]">
<img alt="Global infrastructure map" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale" data-alt="A highly detailed, schematic world map rendered in a stark, minimalist black, white, and grey palette. Glowing red nodes indicate server locations connected by thin, precise geometric lines simulating data transfer networks. The overall aesthetic is strictly technical, evoking a professional cloud infrastructure dashboard without any extraneous decorative elements. High contrast lighting emphasizes the precision of the network topology." src="/images/cloud_ops_engineer.png" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="w-full py-xxl px-margin-mobile md:px-margin-desktop bg-surface-container max-w-container-max mx-auto border-b border-surface-variant">
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-4 gap-gutter mb-xl border-b border-[#17184B] pb-md">
<div className="col-span-1 md:col-span-1">
<h2 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Supported Ecosystems</h2>
</div>
<div className="col-span-1 md:col-span-3 flex justify-between items-center">
<span className="font-headline-md text-headline-md text-primary">AWS</span>
<span className="font-headline-md text-headline-md text-primary">Azure</span>
<span className="font-headline-md text-headline-md text-primary">GCP</span>
<span className="font-headline-md text-headline-md text-primary opacity-50">Private Cloud</span>
</div>
</div>
</section>

<section className="w-full py-huge px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto">
<div className="mb-xxl max-w-3xl border-l-2 border-[#17184B] pl-md">
<h2 className="font-headline-xl text-headline-xl text-primary mb-md">Engineering Core Capabilities</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                    Our methodology abstracts complexity, delivering deterministic performance and hardened security across distributed architectures.
                </p>
</div>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[minmax(200px,auto)]">

<div className="col-span-1 md:col-span-8 bg-surface-container border-2 border-[#17184B] p-xl flex flex-col justify-between hover:bg-surface-container-high transition-colors">
<div className="flex justify-between items-start mb-lg">
<span className="material-symbols-outlined text-primary text-headline-md" data-icon="memory">memory</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest border-2 border-[#17184B] px-xs py-[2px]">01</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm">Serverless Architectures</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                            Decouple logic from infrastructure. We implement event-driven, serverless computing models that scale automatically, reducing operational overhead and aligning costs directly with execution execution duration.
                        </p>
</div>
</div>

<div className="col-span-1 md:col-span-4 bg-primary text-on-primary border-2 border-[#17184B] p-xl flex flex-col justify-between">
<div className="flex justify-between items-start mb-lg">
<span className="material-symbols-outlined text-secondary text-headline-md" data-icon="monitoring">monitoring</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest border-2 border-[#17184B] px-xs py-[2px] text-outline-variant">02</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-primary mb-sm">FinOps & Cost Optimization</h3>
<p className="font-body-md text-body-md text-on-primary-container">
                            Continuous right-sizing, reserved instance management, and programmatic cost anomaly detection to maximize ROI.
                        </p>
</div>
</div>

<div className="col-span-1 md:col-span-6 bg-surface border-2 border-[#17184B] p-xl flex flex-col justify-between hover:border-[#17184B] transition-colors">
<div className="flex justify-between items-start mb-lg">
<span className="material-symbols-outlined text-primary text-headline-md" data-icon="security">security</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest border-2 border-[#17184B] px-xs py-[2px] text-on-surface-variant">03</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm">Disaster Recovery (DRaaS)</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            Geographically dispersed failover strategies ensuring minimal RTO (Recovery Time Objective) and RPO (Recovery Point Objective) under critical duress.
                        </p>
</div>
</div>

<div className="col-span-1 md:col-span-6 bg-surface-container border-2 border-[#17184B] p-0 relative overflow-hidden min-h-[300px]">
<div className="absolute inset-0 p-md z-10 flex flex-col justify-between pointer-events-none">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm bg-surface text-primary px-sm py-xs uppercase tracking-widest border-2 border-[#17184B]">Roadmap Visualization</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest bg-surface text-primary px-xs py-[2px] border-2 border-[#17184B]">04</span>
</div>
</div>
<img alt="Cloud migration roadmap" className="w-full h-full object-cover mix-blend-multiply opacity-60 grayscale" data-alt="A highly structured, top-down view of a complex technical diagram or blueprint spread across a sterile white surface. The diagram features sharp, intersecting black lines and rigid geometric shapes denoting a multi-stage migration workflow. A distinct, severe red accent highlights a critical pathway within the schematic. The lighting is completely flat and shadowless, emphasizing the rigorous, precision-engineered aesthetic of Swiss International Style." src="/images/cloud_ops_engineer.png" />
</div>
</div>
</section>
</main>

<Footer />
    </>
  );
}
