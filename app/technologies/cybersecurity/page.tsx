import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />
<main className="w-full">

<section className="relative w-full min-h-[819px] flex flex-col justify-center border-b border-[#17184B] overflow-hidden">
<div className="absolute inset-0 blueprint-grid opacity-30 z-0"></div>
<div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
<div className="md:col-span-7 flex flex-col space-y-xl py-huge">
<div className="inline-block border-2 border-[#17184B] px-md py-sm w-fit bg-surface">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-accent">Zero-Trust Architecture</span>
</div>
<h1 className="gsap-hero-animate font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
                        Absolute Verification.<br />
                        Resilient Defense.
                    </h1>
<p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant">
                        Engineering a security posture that assumes breach. We implement rigorous identity validation, micro-segmentation, and continuous monitoring to protect your critical infrastructure.
                    </p>
<div className="flex flex-col sm:flex-row space-y-md sm:space-y-0 sm:space-x-lg pt-md">
<button className="bg-accent text-white font-label-sm text-label-sm py-md px-xl uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center space-x-sm">
<span className="">Deploy Framework</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="gsap-stagger-item border-2 border-[#17184B] text-primary bg-transparent font-label-sm text-label-sm py-md px-xl uppercase tracking-wider hover:bg-surface-container transition-colors">
                            Read Architecture Paper
                        </button>
</div>
</div>
<div className="md:col-span-5 h-[400px] md:h-[600px] relative border-l border-[#17184B] md:border-l-0 border-t md:border-t-0 p-lg bg-surface-container flex items-center justify-center">
<div className="absolute top-0 right-0 p-md border-l border-b border-[#17184B] bg-surface font-label-sm text-label-sm text-primary">MATRIX_ACTIVE</div>
<div className="w-full h-full border-2 border-[#17184B] bg-white relative overflow-hidden group">
<div className="absolute inset-0 bg-primary opacity-[0.02] group-hover:opacity-[0.05] transition-opacity"></div>
<img alt="Secure server room containing rows of datacenter racks" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" data-alt="A realistic photograph of a professional corporate server room with rows of dark datacenter racks, cooling indicators, organized power cabling, and ambient soft lighting." src="/images/cyber_security_shield.png" />
<div className="absolute bottom-lg left-lg right-lg border-2 border-[#17184B] bg-[#F8F7F4]/90 backdrop-blur-sm p-md flex justify-between items-center">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-xs">THREAT LEVEL</span>
<span className="font-headline-md text-headline-md text-accent">SECURE</span>
</div>
<span className="material-symbols-outlined text-primary text-[32px]">shield_lock</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#17184B] bg-surface-container">
<div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-x border-[#17184B]">
<div className="p-xl flex flex-col justify-center items-center text-center">
<span className="font-display-lg text-display-lg text-primary mb-md">99.9%</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Threat Mitigation Rate</span>
</div>
<div className="p-xl flex flex-col justify-center items-center text-center bg-white border-[#17184B]">
<span className="font-display-lg text-display-lg text-accent mb-md">{"<"}2ms</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Identity Verification Latency</span>
</div>
<div className="p-xl flex flex-col justify-center items-center text-center">
<span className="font-display-lg text-display-lg text-primary mb-md">Zero</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Implicit Trust Zones</span>
</div>
</div>
</section>

<section className="py-huge px-margin-desktop max-w-container-max mx-auto border-b border-[#17184B]">
<div className="mb-xxl">
<h2 className="font-headline-xl text-headline-xl text-primary mb-md">Core Defense Protocols</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Architectural pillars enforcing strict access controls and continuous validation across the entire digital estate.</p>
</div>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-8 border-2 border-[#17184B] bg-[#F8F7F4] p-xl group hover:bg-surface-container-low transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary-container opacity-5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
<div className="flex justify-between items-start mb-xxl relative z-10">
<span className="material-symbols-outlined text-[48px] text-primary" style={{fontVariationSettings: '"FILL" 1'}}>fingerprint</span>
<div className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs">
<span className="font-label-sm text-label-sm uppercase text-primary">Protocol 01</span>
</div>
</div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md text-primary mb-md">Identity & Access Management</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-lg">Granular, context-aware access policies. We implement MFA, SSO, and continuous authentication mechanisms to ensure only verified entities reach critical assets.</p>
<Link className="inline-flex items-center space-x-sm font-label-sm text-label-sm uppercase text-accent hover:opacity-80" href="/contact">
<span className="">Explore IAM Architecture</span>
<span className="material-symbols-outlined text-[16px]">arrow_outward</span>
</Link>
</div>
</div>

<div className="md:col-span-4 border-2 border-[#17184B] bg-primary text-on-primary p-xl relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
<div className="flex justify-between items-start mb-xxl relative z-10">
<span className="material-symbols-outlined text-[48px] text-accent">cloud_done</span>
<div className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs">
<span className="font-label-sm text-label-sm uppercase text-outline">Protocol 02</span>
</div>
</div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md text-white mb-md">Cloud Posture</h3>
<p className="font-body-md text-body-md text-inverse-primary mb-lg">Automated misconfiguration detection and remediation across multi-cloud environments.</p>
</div>
</div>

<div className="md:col-span-12 border-2 border-[#17184B] bg-[#F8F7F4] p-xl grid grid-cols-1 md:grid-cols-2 gap-xl items-center relative">
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary hidden md:block"></div>
<div className="pr-xl">
<div className="flex items-center space-x-md mb-lg">
<span className="material-symbols-outlined text-[32px] text-accent">warning</span>
<h3 className="font-headline-md text-headline-md text-primary">Incident Response</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Rapid containment and forensic analysis protocols. Our automated playbooks isolate threats within milliseconds, minimizing blast radius and preserving system integrity.</p>
</div>
<div className="pl-xl">
<ul className="space-y-md">
<li className="flex items-center justify-between border-b border-[#17184B] pb-sm">
<span className="font-label-sm text-label-sm uppercase text-primary">Threat Detection</span>
<span className="font-label-sm text-label-sm text-accent">Real-time</span>
</li>
<li className="flex items-center justify-between border-b border-[#17184B] pb-sm">
<span className="font-label-sm text-label-sm uppercase text-primary">Containment SLA</span>
<span className="font-label-sm text-label-sm text-primary">{"<"} 15 mins</span>
</li>
<li className="flex items-center justify-between border-b border-[#17184B] pb-sm">
<span className="font-label-sm text-label-sm uppercase text-primary">Forensic Logging</span>
<span className="font-label-sm text-label-sm text-primary">Immutable</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-huge px-margin-desktop max-w-container-max mx-auto">
<div className="text-center mb-xxl">
<h2 className="font-headline-xl text-headline-xl text-primary mb-sm">Compliance Verification</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Built to exceed global security standards.</p>
</div>
<div className="gsap-stagger-container grid grid-cols-1 sm:grid-cols-3 gap-md">
<div className="gsap-stagger-item border-2 border-[#17184B] p-lg text-center bg-surface hover:bg-white transition-colors">
<span className="material-symbols-outlined text-[40px] text-primary mb-md">verified_user</span>
<h4 className="font-headline-md text-headline-md text-primary mb-xs">Auditing & Control</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Verified</p>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] p-lg text-center bg-surface hover:bg-white transition-colors">
<span className="material-symbols-outlined text-[40px] text-primary mb-md">security</span>
<h4 className="font-headline-md text-headline-md text-primary mb-xs">Data Privacy</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Compliant</p>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] p-lg text-center bg-surface hover:bg-white transition-colors">
<span className="material-symbols-outlined text-[40px] text-primary mb-md">policy</span>
<h4 className="font-headline-md text-headline-md text-primary mb-xs">Data Policy</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Aligned</p>
</div>
</div>
</section>
</main>

<Footer />
    </>
  );
}
