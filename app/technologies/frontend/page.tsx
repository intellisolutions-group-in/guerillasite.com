import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
<main className="flex-grow flex flex-col">


<header className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-huge pb-xxl">
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="col-span-1 md:col-span-8">
<h1 className="gsap-hero-animate font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg mb-md">
                    Modern Frontend Engineering
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-xl">
                    We construct robust, scalable, and highly performant web interfaces. Our approach centers on component-driven architecture, treating design systems as code, and relentless performance optimization to deliver premium user experiences.
                </p>
<button className="gsap-hero-animate btn-accent inline-flex items-center">
                    Hire our Frontend Experts
                    <span className="material-symbols-outlined ml-sm text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</header>

<section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-xxl">
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px]">

<div className="col-span-1 md:col-span-7 bg-surface-container border-2 border-[#17184B] p-lg flex flex-col justify-between group hover:border-[#17184B] transition-colors">
<div>
<div className="flex items-center mb-md">
<span className="material-symbols-outlined text-[#17184B] mr-sm">account_tree</span>
<h3 className="font-headline-md text-headline-md">Component-Driven Architecture</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                        Building UIs from the bottom up. We isolate components for independent development, testing, and reuse, ensuring consistency and accelerating delivery cycles across large-scale enterprise applications.
                    </p>
</div>
<div className="bg-primary text-on-primary p-md text-sm font-mono border-2 border-[#17184B] overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
<pre><code>import {"{"} Button {"}"} from '@core/ui';

export const Hero = () ={">"} (
  {"<"}section className="hero"{">"}
    {"<"}h1{">"}Scalable UI{"<"}/h1{">"}
    {"<"}Button variant="primary"{">"}Initialize{"<"}/Button{">"}
  {"<"}/section{">"}
);</code></pre>
</div>
</div>

<div className="col-span-1 md:col-span-5 bg-surface border-2 border-[#17184B] p-lg flex flex-col justify-between">
<div>
<div className="flex items-center mb-md">
<span className="material-symbols-outlined text-primary mr-sm">design_services</span>
<h3 className="font-headline-md text-headline-md">Design Systems as Code</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                        Bridging the gap between design and engineering. We codify design tokens, typography, and spacing into exact, consumable code packages to eliminate visual drift.
                    </p>
</div>
<div className="gsap-stagger-container grid grid-cols-3 gap-sm mt-md">
<div className="h-16 bg-primary"></div>
<div className="h-16 bg-[#D8E63C]"></div>
<div className="h-16 bg-surface-container border-2 border-[#17184B]"></div>
</div>
</div>

<div className="col-span-1 md:col-span-12 bg-surface-container-high border-2 border-[#17184B] p-lg grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
<div>
<div className="flex items-center mb-md">
<span className="material-symbols-outlined text-primary mr-sm">speed</span>
<h3 className="font-headline-md text-headline-md">Performance Optimization</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">
                        Metrics driven engineering. We obsess over Core Web Vitals, implementing advanced techniques like code splitting, lazy loading, and intelligent caching strategies to achieve sub-second TTI.
                    </p>
<ul className="space-y-sm font-label-sm text-label-sm uppercase tracking-widest text-primary">
<li className="flex justify-between border-b border-[#17184B] pb-xs"><span className="">LCP (Largest Contentful Paint)</span> <span className="">{"<"} 1.2s</span></li>
<li className="flex justify-between border-b border-[#17184B] pb-xs"><span className="">FID (First Input Delay)</span> <span className="">{"<"} 50ms</span></li>
<li className="flex justify-between border-b border-[#17184B] pb-xs"><span className="">CLS (Cumulative Layout Shift)</span> <span className="">0.01</span></li>
</ul>
</div>
<div className="relative h-full min-h-[200px] border-2 border-[#17184B] bg-[#F8F7F4] overflow-hidden">

<div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-surface-variant to-transparent opacity-50 border-t border-dashed border-[#17184B]"></div>
<div className="absolute bottom-md left-md right-md flex items-end justify-between space-x-2 h-32">
<div className="w-1/4 bg-primary h-[40%]"></div>
<div className="w-1/4 bg-[#D8E63C] h-[90%]"></div>
<div className="w-1/4 bg-primary h-[30%]"></div>
<div className="w-1/4 bg-primary h-[60%]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-huge border-t border-[#17184B]">
<h2 className="font-headline-xl text-headline-xl mb-xl text-center">Core Stack</h2>
<div className="gsap-stagger-container grid grid-cols-2 md:grid-cols-4 gap-gutter">
<div className="gsap-stagger-item border-2 border-[#17184B] p-md flex flex-col items-center justify-center aspect-square hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-display-lg mb-sm">code_blocks</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest">React</span>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] p-md flex flex-col items-center justify-center aspect-square hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-display-lg mb-sm">javascript</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest">Vue</span>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] p-md flex flex-col items-center justify-center aspect-square hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-display-lg mb-sm">data_object</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest">TypeScript</span>
</div>
<div className="gsap-stagger-item border-2 border-[#17184B] p-md flex flex-col items-center justify-center aspect-square hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-display-lg mb-sm">format_paint</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest">Tailwind CSS</span>
</div>
</div>
</section>

<Footer />
</main>
    </>
  );
}
