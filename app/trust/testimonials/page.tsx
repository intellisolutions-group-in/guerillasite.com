import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />
<main>

<section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-huge md:py-[120px]">
<div className="gsap-stagger-container grid grid-cols-4 md:grid-cols-12 gap-gutter">
<div className="col-span-4 md:col-span-10 md:col-start-2 text-center">
<h1 className="gsap-hero-animate font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg mb-lg">Engineering Excellence, Verified.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-xl">
                        Industry leaders rely on our technical precision and strategic vision. Don't just take our word for it—listen to the partners who have transformed their enterprise architecture with GuerillaSite.
                    </p>
</div>
</div>
</section>

<section className="border-y border-[#17184B] bg-surface-container">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl">
<div className="gsap-stagger-container grid grid-cols-2 md:grid-cols-4 gap-gutter text-center divide-x divide-outline-variant">
<div className="flex flex-col items-center justify-center p-md">
<span className="font-headline-xl text-headline-xl text-primary mb-xs">99%</span>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Client Retention</span>
</div>
<div className="flex flex-col items-center justify-center p-md">
<span className="font-headline-xl text-headline-xl text-primary mb-xs">$2B+</span>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Revenue Protected</span>
</div>
<div className="flex flex-col items-center justify-center p-md">
<span className="font-headline-xl text-headline-xl text-primary mb-xs">150+</span>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Deployments</span>
</div>
<div className="flex flex-col items-center justify-center p-md">
<span className="font-headline-xl text-headline-xl text-primary mb-xs">0</span>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Critical Failures</span>
</div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-huge">
<h2 className="font-headline-md text-headline-md border-b border-[#17184B] pb-sm mb-xl uppercase tracking-wider text-primary">Executive Briefings</h2>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-xl">

<div className="group relative aspect-video border-2 border-[#17184B] bg-white overflow-hidden cursor-pointer rounded-[4px] shadow-[4px_4px_0px_0px_#17184B]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 rounded-[4px]" data-alt="A professional corporate interview setting." style={{backgroundImage: 'url("/images/team_collaboration.png")'}}>
</div>
<div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300 rounded-[4px]"></div>
<button aria-label="Play video" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 border-2 border-[#17184B] rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-on-secondary group-hover:border-secondary transition-all duration-300 shadow-[4px_4px_0px_0px_#17184B]">
<span className="material-symbols-outlined text-3xl" data-icon="play_arrow" data-weight="fill">play_arrow</span>
</button>
<div className="absolute bottom-0 left-0 w-full p-lg bg-gradient-to-t from-neutral-950 to-transparent">
<h3 className="font-headline-md text-headline-md text-white mb-xs">Sunita Joshi</h3>
<p className="font-label-sm text-label-sm text-neutral-300 uppercase">CTO</p>
</div>
</div>

<div className="group relative aspect-video border-2 border-[#17184B] bg-white overflow-hidden cursor-pointer rounded-[4px] shadow-[4px_4px_0px_0px_#17184B]">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 rounded-[4px]" data-alt="A premium corporate video production still." style={{backgroundImage: 'url("/images/team_collaboration.png")'}}>
</div>
<div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300 rounded-[4px]"></div>
<button aria-label="Play video" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 border-2 border-[#17184B] rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-on-secondary group-hover:border-secondary transition-all duration-300 shadow-[4px_4px_0px_0px_#17184B]">
<span className="material-symbols-outlined text-3xl" data-icon="play_arrow" data-weight="fill">play_arrow</span>
</button>
<div className="absolute bottom-0 left-0 w-full p-lg bg-gradient-to-t from-neutral-950 to-transparent">
<h3 className="font-headline-md text-headline-md text-white mb-xs">Deepak Chaudhari</h3>
<p className="font-label-sm text-label-sm text-neutral-300 uppercase">VP Engineering</p>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-huge border-y border-[#17184B]">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<h2 className="font-headline-md text-headline-md border-b border-[#17184B] pb-sm mb-xl uppercase tracking-wider text-primary">Client Testimonials</h2>
<div className="columns-1 md:columns-2 lg:columns-3 gap-lg space-y-lg">

<div className="break-inside-avoid border-2 border-[#17184B] bg-white p-xl flex flex-col hover:border-[#17184B] hover:shadow-[5px_5px_0px_0px_#D8E63C] hover:-translate-y-1 transition-all duration-300 rounded-[4px] text-primary">
<span className="material-symbols-outlined text-secondary mb-md text-4xl" data-icon="format_quote">format_quote</span>
<p className="font-body-lg text-body-lg mb-xl text-on-surface-variant">"Their approach to cloud migration wasn't just technical; it was deeply strategic. They understood our legacy constraints and delivered a modern architecture without disrupting our daily operations."</p>
<div className="mt-auto flex items-center gap-md border-t border-[#17184B] pt-md">
<div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-50 border-2 border-[#17184B]">
<img alt="Esha Rao" className="w-full h-full object-cover" data-alt="Esha Rao" src="/images/headshot_female.png" />
</div>
<div>
<h4 className="font-label-sm text-label-sm font-bold text-primary">Esha Rao</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Director of IT</p>
</div>
</div>
</div>

<div className="break-inside-avoid border-2 border-[#17184B] bg-white p-xl flex flex-col hover:border-[#17184B] hover:shadow-[5px_5px_0px_0px_#D8E63C] hover:-translate-y-1 transition-all duration-300 rounded-[4px] text-primary">
<span className="material-symbols-outlined text-secondary mb-md text-4xl" data-icon="format_quote">format_quote</span>
<p className="font-body-lg text-body-lg mb-xl text-on-surface-variant">"GuerillaSite engineers don't just write code; they build highly resilient systems. When our primary data center went offline, their failover protocols executed flawlessly. Not a single transaction was lost."</p>
<div className="mt-auto flex items-center gap-md border-t border-[#17184B] pt-md">
<div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-50 border-2 border-[#17184B]">
<img alt="Manish Jagtiani" className="w-full h-full object-cover" data-alt="Manish Jagtiani" src="/images/headshot_male.png" />
</div>
<div>
<h4 className="font-label-sm text-label-sm font-bold text-primary">Manish Jagtiani</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">CISO</p>
</div>
</div>
</div>

<div className="break-inside-avoid border border-secondary bg-white text-primary p-xl flex flex-col rounded-[4px] shadow-[4px_4px_0px_0px_#17184B]">
<span className="material-symbols-outlined text-secondary mb-md text-4xl" data-icon="format_quote">format_quote</span>
<p className="font-headline-md text-headline-md mb-xl">"The standard by which we measure all other technical consultancies."</p>
<div className="mt-auto flex items-center gap-md border-t border-[#17184B] pt-md">
<div>
<h4 className="font-label-sm text-label-sm font-bold text-primary">Dr. Aisha Patel</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Chief AI Officer</p>
</div>
</div>
</div>

<div className="break-inside-avoid border-2 border-[#17184B] bg-white p-xl flex flex-col hover:border-[#17184B] hover:shadow-[5px_5px_0px_0px_#D8E63C] hover:-translate-y-1 transition-all duration-300 rounded-[4px] text-primary">
<span className="material-symbols-outlined text-secondary mb-md text-4xl" data-icon="format_quote">format_quote</span>
<p className="font-body-lg text-body-lg mb-xl text-on-surface-variant">"Integrating legacy manufacturing hardware with modern IoT analytics seemed impossible. They delivered a solution that was elegant, maintainable, and highly secure."</p>
<div className="mt-auto flex items-center gap-md border-t border-[#17184B] pt-md">
<div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-50 border-2 border-[#17184B]">
<img alt="Ekta Lamba" className="w-full h-full object-cover" data-alt="Ekta Lamba" src="/images/headshot_female.png" />
</div>
<div>
<h4 className="font-label-sm text-label-sm font-bold text-primary">Ekta Lamba</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">VP Operations</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-huge text-center">
<h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-lg">Ready to build with precision?</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-2xl mx-auto">Join the industry leaders who trust our engineering expertise for their most critical infrastructure.</p>
<Link className="btn-accent inline-flex" href="/contact">
                Request a Technical Assessment
            </Link>
</section>
</main>

<Footer />
    </>
  );
}
