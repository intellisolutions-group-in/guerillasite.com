"use client";

import React from "react";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full flex justify-between items-center px-margin-mobile md:px-margin-desktop h-huge bg-surface border-b border-[#17184B]">
<Link className="flex items-center hover:opacity-90 transition-opacity duration-200" href="/contact">
  <Image
    src="/images/GuerillaSiteLogo-01.png"
    alt="GuerillaSite Logo"
    width={164}
    height={30}
    className="h-[30px] w-auto object-contain"
    priority
  />
</Link>
<div className="flex items-center gap-md">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hidden md:inline-block">Secure Checkout</span>
<span className="material-symbols-outlined" data-icon="lock" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>lock</span>
</div>
</header>

<main className="flex-grow flex flex-col md:flex-row w-full max-w-container-max mx-auto">

<aside className="hidden md:flex flex-col w-4/12 bg-surface-container border-r border-[#17184B] p-xl justify-between">
<div>
<h2 className="font-headline-md text-headline-md mb-xl text-primary">Why Partner With Us</h2>
<ul className="space-y-lg mb-xxl">
<li className="flex items-start gap-md">
<span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
<div>
<strong className="block font-label-sm text-label-sm uppercase tracking-widest mb-xs">Precision Engineering</strong>
<p className="font-body-md text-body-md text-on-surface-variant">Architectural patterns rigorously tested in enterprise environments.</p>
</div>
</li>
<li className="flex items-start gap-md">
<span className="material-symbols-outlined text-secondary" data-icon="speed">speed</span>
<div>
<strong className="block font-label-sm text-label-sm uppercase tracking-widest mb-xs">Accelerated Delivery</strong>
<p className="font-body-md text-body-md text-on-surface-variant">Streamlined pipelines reducing time-to-market by up to 40%.</p>
</div>
</li>
<li className="flex items-start gap-md">
<span className="material-symbols-outlined text-secondary" data-icon="security">security</span>
<div>
<strong className="block font-label-sm text-label-sm uppercase tracking-widest mb-xs">Zero-Trust Security</strong>
<p className="font-body-md text-body-md text-on-surface-variant">Baked-in compliance and threat mitigation from day one.</p>
</div>
</li>
</ul>
</div>
<div>
<p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-md border-b border-[#17184B] pb-xs">Trusted By Industry Leaders</p>
<div className="gsap-stagger-container grid grid-cols-2 gap-lg opacity-60">

<div className="font-display-lg text-display-lg-mobile font-bold tracking-tighter">ACME</div>
<div className="font-display-lg text-display-lg-mobile font-bold tracking-tighter">GLOBEX</div>
<div className="font-display-lg text-display-lg-mobile font-bold tracking-tighter">SOYUZ</div>
<div className="font-display-lg text-display-lg-mobile font-bold tracking-tighter">INITECH</div>
</div>
</div>
</aside>

<section className="w-full md:w-8/12 p-margin-mobile md:p-margin-desktop bg-surface flex flex-col">

<div className="w-full mb-xxl">
<div className="flex justify-between items-center mb-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" id="step-indicator">Step 1 of 4</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold" id="step-title">Identity</span>
</div>
<div className="w-full h-1 bg-surface-container">
<div className="h-full bg-primary progress-bar-transition" id="progress-bar" style={{width: '25%'}}></div>
</div>
</div>

<div className="flex-grow flex flex-col justify-center">
<form className="max-w-2xl w-full mx-auto" id="proposal-form">

<div className="step-container" id="step-1">
<h1 className="gsap-hero-animate font-headline-xl text-headline-xl mb-xl text-primary">Let's establish your baseline.</h1>
<div className="space-y-lg">
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="fullName">Full Name</label>
<input className="w-full border-b border-[#17184B] bg-transparent py-md font-body-lg text-body-lg text-primary focus:border-b-2 focus:border-secondary transition-colors" id="fullName" placeholder="Jane Doe" required={true} type="text" />
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="workEmail">Work Email</label>
<input className="w-full border-b border-[#17184B] bg-transparent py-md font-body-lg text-body-lg text-primary focus:border-b-2 focus:border-secondary transition-colors" id="workEmail" placeholder="jane@company.com" required={true} type="email" />
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="companyName">Company Name</label>
<input className="w-full border-b border-[#17184B] bg-transparent py-md font-body-lg text-body-lg text-primary focus:border-b-2 focus:border-secondary transition-colors" id="companyName" placeholder="Acme Corp" required={true} type="text" />
</div>
</div>
</div>

<div className="step-container hidden" id="step-2">
<h2 className="font-headline-xl text-headline-xl mb-xl text-primary">Define the architectural scope.</h2>
<div className="space-y-lg">
<fieldset>
<legend className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-md">Primary Objective</legend>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-md">
<label className="gsap-stagger-item border-2 border-[#17184B] rounded-[4px] p-md cursor-pointer hover:bg-surface-container transition-colors flex items-center gap-md">
<input className="text-secondary focus:ring-secondary border-[#17184B]" name="objective" required={true} type="radio" defaultValue="greenfield" />
<span className="font-body-md text-body-md">Greenfield Development</span>
</label>
<label className="gsap-stagger-item border-2 border-[#17184B] rounded-[4px] p-md cursor-pointer hover:bg-surface-container transition-colors flex items-center gap-md">
<input className="text-secondary focus:ring-secondary border-[#17184B]" name="objective" type="radio" defaultValue="legacy" />
<span className="font-body-md text-body-md">Legacy Modernization</span>
</label>
<label className="gsap-stagger-item border-2 border-[#17184B] rounded-[4px] p-md cursor-pointer hover:bg-surface-container transition-colors flex items-center gap-md">
<input className="text-secondary focus:ring-secondary border-[#17184B]" name="objective" type="radio" defaultValue="cloud" />
<span className="font-body-md text-body-md">Cloud Migration</span>
</label>
<label className="gsap-stagger-item border-2 border-[#17184B] rounded-[4px] p-md cursor-pointer hover:bg-surface-container transition-colors flex items-center gap-md">
<input className="text-secondary focus:ring-secondary border-[#17184B]" name="objective" type="radio" defaultValue="audit" />
<span className="font-body-md text-body-md">Security/Performance Audit</span>
</label>
</div>
</fieldset>
<div className="flex flex-col gap-xs mt-xl">
<label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant" htmlFor="projectDetails">Brief Context (Optional)</label>
<textarea className="w-full border-b border-[#17184B] bg-transparent py-md font-body-lg text-body-lg text-primary focus:border-b-2 focus:border-secondary transition-colors resize-none" id="projectDetails" placeholder="We need to scale our microservices..." rows={3}></textarea>
</div>
</div>
</div>

<div className="mt-huge flex justify-between items-center pt-xl border-t border-[#17184B]">
<button className="hidden font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors items-center gap-xs" id="btn-back" type="button">
<span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                            Back
                        </button>
<div className="flex-grow"></div> 
<button className="btn-primary gap-sm" id="btn-next" type="submit">
                    Next Step
                    <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</form>
</div>
</section>
</main>

<Footer />
    </>
  );
}
