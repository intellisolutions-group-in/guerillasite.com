import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />
<main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-xxl pb-huge">

<section className="mb-huge">
<div className="gsap-stagger-item border-2 border-[#17184B] rounded-[4px] bg-surface-container-lowest p-lg md:p-xxl flex flex-col md:flex-row gap-xl items-center relative overflow-hidden">
<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="flex-1 z-10">
<span className="inline-block border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase mb-md bg-surface rounded-[4px]">Featured Whitepaper</span>
<h1 className="gsap-hero-animate font-headline-xl text-headline-xl mb-md text-primary">The AI Native Enterprise Architecture</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-2xl">
                        A definitive guide to restructuring legacy systems for generative AI integration. Learn how top tech firms are scaling intelligent operations without compromising security or compliance.
                    </p>
<div className="flex gap-md">
<Link className="gsap-hero-animate btn-accent gap-sm" href="/contact">
<span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>download</span>
                            Download PDF
                        </Link>
<Link className="btn-ghost" href="/contact">
                            Read Abstract
                        </Link>
</div>
</div>
<div className="flex-1 w-full md:w-auto min-h-[16rem] h-auto md:h-96 bg-surface-container border-2 border-[#17184B] rounded-[4px] relative z-10">
<img alt="Systems architect sketching systems architecture on a whiteboard" className="w-full h-full object-cover grayscale mix-blend-multiply rounded-[4px]" data-alt="A realistic photograph of a technical systems architect discussing systems architecture designs on a whiteboard during an office brainstorming session." src="/images/systems_architect_board.png" />
</div>
</div>
</section>

<div className="flex flex-col lg:flex-row gap-xxl">

<aside className="lg:w-1/4 shrink-0">
<div className="sticky top-[120px]">
<div className="flex justify-between items-center mb-lg pb-sm border-b border-[#17184B]">
<h2 className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Filters</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant cursor-pointer hover:text-primary">Clear All</span>
</div>

<div className="mb-xl border-b border-[#17184B] pb-md">
<h3 className="font-label-sm text-label-sm uppercase tracking-widest mb-md text-on-surface-variant">Resource Type</h3>
<div className="space-y-sm">
<label className="flex items-center gap-md cursor-pointer group">
<input defaultChecked={true} className="form-checkbox text-primary border-[#17184B] rounded focus:ring-0 w-4 h-4" type="checkbox" />
<span className="font-body-md text-body-md group-hover:text-secondary transition-colors">Whitepaper</span>
<span className="ml-auto font-label-sm text-label-sm text-outline">12</span>
</label>
<label className="flex items-center gap-md cursor-pointer group">
<input className="form-checkbox text-primary border-[#17184B] rounded focus:ring-0 w-4 h-4" type="checkbox" />
<span className="font-body-md text-body-md group-hover:text-secondary transition-colors">Webinar</span>
<span className="ml-auto font-label-sm text-label-sm text-outline">8</span>
</label>
<label className="flex items-center gap-md cursor-pointer group">
<input className="form-checkbox text-primary border-[#17184B] rounded focus:ring-0 w-4 h-4" type="checkbox" />
<span className="font-body-md text-body-md group-hover:text-secondary transition-colors">Guide</span>
<span className="ml-auto font-label-sm text-label-sm text-outline">24</span>
</label>
<label className="flex items-center gap-md cursor-pointer group">
<input className="form-checkbox text-primary border-[#17184B] rounded focus:ring-0 w-4 h-4" type="checkbox" />
<span className="font-body-md text-body-md group-hover:text-secondary transition-colors">Case Study</span>
<span className="ml-auto font-label-sm text-label-sm text-outline">15</span>
</label>
</div>
</div>

<div className="mb-xl">
<h3 className="font-label-sm text-label-sm uppercase tracking-widest mb-md text-on-surface-variant">Topic</h3>
<div className="flex flex-wrap gap-sm">
<span className="filter-pill active">Artificial Intelligence</span>
<span className="filter-pill">Cloud Infrastructure</span>
<span className="filter-pill">DevOps</span>
<span className="filter-pill">Cybersecurity</span>
<span className="filter-pill">Data Engineering</span>
</div>
</div>
</div>
</aside>

<div className="lg:w-3/4">
<div className="flex justify-between items-center mb-lg border-b border-[#17184B] pb-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Showing 59 Resources</span>
<div className="flex items-center gap-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Sort By:</span>
<select className="bg-transparent border-none font-label-sm text-label-sm uppercase focus:ring-0 cursor-pointer pr-xl">
<option>Most Recent</option>
<option>Most Popular</option>
<option>Alphabetical</option>
</select>
</div>
</div>
<div className="bento-grid">

<article className="bento-item bento-item-large border-2 border-[#17184B] rounded-[4px] bg-surface-container-lowest flex flex-col group hover:border-[#17184B] transition-colors">
<div className="min-h-[12rem] h-auto bg-surface-container border-b border-[#17184B] relative overflow-hidden">
<img alt="Server room racks in cold blue light" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-500 rounded-t-2xl" data-alt="A meticulously organized server room featuring rows of enterprise-grade hardware racks illuminated by stark, clinical white lighting. The composition is highly structured, emphasizing repeating geometric lines and a grid-like precision. Captured in a light-mode, high-contrast monochrome style, the image conveys a sense of immense processing power and unyielding reliability. The mood is cold, calculated, and deeply technical." src="/images/datacenter_racks.png" />
<span className="absolute top-md left-md bg-white border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase rounded-[4px]">Webinar</span>
</div>
<div className="p-lg flex flex-col flex-grow">
<h3 className="font-headline-md text-headline-md mb-sm group-hover:text-secondary transition-colors line-clamp-2">Migrating Monoliths to Microservices: A Phased Approach</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl flex-grow line-clamp-3">Join our Principal Engineers for a deep dive into deconstructing legacy applications. We'll cover risk mitigation, CI/CD pipeline adjustments, and maintaining uptime during the transition.</p>
<div className="flex items-center justify-between border-t border-[#17184B] pt-md mt-auto">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 24, 2024
                                </span>
<button className="text-primary font-label-sm text-label-sm uppercase tracking-widest hover:text-secondary flex items-center gap-xs group/btn">
                                    Register Now
                                    <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</article>

<article className="bento-item bento-item-small border-2 border-[#17184B] rounded-[4px] bg-surface-container-lowest flex flex-col group hover:border-[#17184B] transition-colors">
<div className="p-lg flex flex-col h-full">
<span className="inline-block border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase mb-md w-max rounded-[4px]">Guide</span>
<h3 className="font-headline-md text-headline-md text-[24px] mb-sm group-hover:text-secondary transition-colors">Zero-Trust Security Implementation Checklist</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl flex-grow line-clamp-4">A practical, step-by-step checklist for establishing a zero-trust architecture across distributed teams and hybrid cloud environments.</p>
<Link className="btn-ghost w-full gap-sm mt-auto flex items-center justify-center" href="/contact">
<span className="material-symbols-outlined text-[16px]">download</span> PDF (2.4MB)
                            </Link>
</div>
</article>

<article className="bento-item bento-item-half border-2 border-[#17184B] rounded-[4px] bg-surface-container-lowest flex flex-col group hover:border-[#17184B] transition-colors">
<div className="p-lg flex flex-col h-full border-b border-[#17184B] relative">
<span className="absolute top-lg right-lg text-outline group-hover:text-primary transition-colors"><span className="material-symbols-outlined">description</span></span>
<span className="inline-block border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase mb-md w-max bg-surface rounded-[4px]">Whitepaper</span>
<h3 className="font-headline-md text-headline-md text-[24px] mb-sm group-hover:text-secondary transition-colors">The Cost Analysis of Serverless Architectures</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl flex-grow">An extensive comparative study detailing hidden costs, scaling economies, and break-even points between traditional cloud hosting and serverless functions.</p>
<Link className="text-primary font-label-sm text-label-sm uppercase tracking-widest border-b-2 border-transparent hover:border-secondary transition-colors w-max mt-auto" href="/contact">Download Report</Link>
</div>
</article>

<article className="bento-item bento-item-half border-2 border-[#17184B] rounded-[4px] bg-surface-container-lowest flex flex-col group hover:border-[#17184B] transition-colors">
<div className="p-lg flex flex-col h-full border-b border-[#17184B] relative">
<span className="absolute top-lg right-lg text-outline group-hover:text-primary transition-colors"><span className="material-symbols-outlined">play_circle</span></span>
<span className="inline-block border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm uppercase mb-md w-max bg-surface rounded-[4px]">On-Demand Webinar</span>
<h3 className="font-headline-md text-headline-md text-[24px] mb-sm group-hover:text-secondary transition-colors">Optimizing Kubernetes at Scale</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-xl flex-grow">Watch our panel of SREs discuss advanced orchestration techniques, resource allocation strategies, and monitoring tools for massive K8s clusters.</p>
<Link className="text-primary font-label-sm text-label-sm uppercase tracking-widest border-b-2 border-transparent hover:border-secondary transition-colors w-max mt-auto" href="/contact">Watch Recording</Link>
</div>
</article>
</div>

<div className="mt-xl flex justify-center items-center gap-md">
<button className="gsap-stagger-item border-2 border-[#17184B] w-10 h-10 flex items-center justify-center text-outline hover:border-[#17184B] hover:text-primary rounded-full transition-colors disabled:opacity-50"><span className="material-symbols-outlined">chevron_left</span></button>
<span className="font-label-sm text-label-sm border-2 border-[#17184B] w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full">1</span>
<button className="gsap-stagger-item border-2 border-[#17184B] w-10 h-10 flex items-center justify-center font-label-sm text-label-sm rounded-full hover:border-[#17184B] transition-colors">2</button>
<button className="gsap-stagger-item border-2 border-[#17184B] w-10 h-10 flex items-center justify-center font-label-sm text-label-sm rounded-full hover:border-[#17184B] transition-colors">3</button>
<span className="text-outline">...</span>
<button className="gsap-stagger-item border-2 border-[#17184B] w-10 h-10 flex items-center justify-center text-outline hover:border-[#17184B] hover:text-primary rounded-full transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
</div>
</main>

<section className="border-t border-[#17184B] bg-surface-container-high">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-huge flex flex-col md:flex-row items-center justify-between gap-xl">
<div className="max-w-xl">
<h2 className="font-headline-xl text-headline-xl mb-sm text-primary">Engineering Intel</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Subscribe to our rigorous, no-fluff newsletter. Deep technical insights, architectural blueprints, and industry analysis delivered monthly.</p>
</div>
<div className="w-full md:w-auto flex-1 max-w-md">
<form className="flex flex-col sm:flex-row gap-sm">
<input className="flex-1 bg-surface-container-lowest border-2 border-[#17184B] font-label-sm text-label-sm px-md py-md focus:outline-none focus:border-b-2 focus:border-b-secondary focus:border-t-primary focus:border-l-primary focus:border-r-primary transition-all placeholder:text-outline" placeholder="ENTER YOUR EMAIL" required={true} type="email" />
<button className="btn-primary" type="submit">
                        Subscribe
                    </button>
</form>
<p className="font-label-sm text-label-sm text-outline mt-sm">By subscribing, you agree to our <Link className="underline hover:text-primary" href="/contact">Privacy Policy</Link>.</p>
</div>
</div>
</section>

<Footer />
    </>
  );
}
