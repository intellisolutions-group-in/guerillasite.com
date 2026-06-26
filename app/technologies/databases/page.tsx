import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
<main className="flex-grow">

<section className="w-full max-w-container-max mx-auto px-margin-desktop py-huge grid grid-cols-1 md:grid-cols-12 gap-gutter relative border-b border-surface-variant">
<div className="md:col-span-7 flex flex-col justify-center z-10 pr-xl">
<div className="inline-flex items-center border-2 border-[#17184B] px-sm py-xs mb-lg w-max bg-surface-container-lowest">
<span className="w-2 h-2 bg-secondary rounded-full mr-sm animate-pulse"></span>
<span className="font-label-sm text-label-sm text-primary uppercase">Deep Dive: Data Determinism</span>
</div>
<h1 className="gsap-hero-animate font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-xl">
                    Engineering Absolute Consistency.
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-[600px]">
                    A rigorous examination of distributed SQL protocols, NoSQL consensus mechanisms, and the mathematical foundations of real-time data synchronization across global topologies.
                </p>
</div>
<div className="md:col-span-5 relative h-[500px] border-2 border-[#17184B] bg-[#F8F7F4] grid-bg overflow-hidden flex items-center justify-center">

<div className="w-full h-full bg-cover bg-center opacity-80 mix-blend-multiply" data-alt="A realistic photograph of a developer's desktop workspace featuring dual monitors displaying code editor layouts and data panels, with a clean and professional modern tech setting." style={{backgroundImage: 'url("/images/systems_architect.png")'}}>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border-2 border-[#17184B] flex items-center justify-center bg-surface-container-lowest relative">
<span className="material-symbols-outlined text-[48px] text-primary" data-icon="database">database</span>

<div className="absolute w-[200px] h-[1px] bg-primary top-1/2 -right-[200px]"></div>
<div className="absolute w-[1px] h-[200px] bg-primary -top-[200px] left-1/2"></div>
<div className="absolute w-[200px] h-[1px] bg-primary top-1/2 -left-[200px]"></div>
<div className="absolute w-[1px] h-[200px] bg-primary -bottom-[200px] left-1/2"></div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-container-max mx-auto px-margin-desktop py-huge border-b border-surface-variant">
<h2 className="font-headline-xl text-headline-xl text-primary mb-xxl pb-md border-b border-surface-variant">Architectural Paradigms</h2>
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[250px]">

<div className="md:col-span-8 border-2 border-[#17184B] p-xl bg-surface-container-lowest relative group hover:bg-surface-container-high transition-colors duration-300">
<div className="flex justify-between items-start mb-lg">
<span className="material-symbols-outlined text-[32px] text-primary" data-icon="share">share</span>
<span className="font-label-sm text-label-sm border-2 border-[#17184B] px-sm py-xs uppercase">ACID Compliant</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-md">Distributed SQL Topology</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-[500px]">
                        Scaling relational workloads seamlessly across geography while maintaining strict serializability and strong consistency guarantees.
                    </p>
<div className="absolute bottom-xl right-xl opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-secondary" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>

<div className="md:col-span-4 border-2 border-[#17184B] p-xl bg-surface-container-lowest relative group hover:bg-surface-container-high transition-colors duration-300">
<div className="flex justify-between items-start mb-lg">
<span className="material-symbols-outlined text-[32px] text-primary" data-icon="blur_on">blur_on</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-md">NoSQL Scale-Out</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                        Eventual consistency models and tunable partition tolerance for massive throughput scenarios.
                    </p>
</div>

<div className="md:col-span-4 border-2 border-[#17184B] p-xl bg-surface-container-lowest relative group hover:bg-surface-container-high transition-colors duration-300">
<div className="flex justify-between items-start mb-lg">
<span className="material-symbols-outlined text-[32px] text-primary" data-icon="water">water</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-md">Lakehouse Fusion</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                        Bridging data warehouses and lakes via open table formats (Iceberg, Delta) for unified analytical pipelines.
                    </p>
</div>

<div className="md:col-span-8 border-2 border-[#17184B] p-xl bg-surface-container-lowest relative group hover:bg-surface-container-high transition-colors duration-300">
<div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-lg">
<span className="material-symbols-outlined text-[32px] text-primary" data-icon="sync_alt">sync_alt</span>
<span className="font-label-sm text-label-sm border border-secondary text-secondary px-sm py-xs uppercase">Sub-millisecond</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-md">Real-Time Sync Protocols</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-[500px]">
                            Log-structured merge trees and CDC (Change Data Capture) streams driving immediate state propagation across distributed boundaries.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-container-max mx-auto px-margin-desktop py-huge">
<div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="md:col-span-4">
<h2 className="font-headline-xl text-headline-xl text-primary sticky top-[120px]">Operational Rigor</h2>
</div>
<div className="md:col-span-8 flex flex-col">

<div className="border-t border-surface-variant py-xl flex flex-col md:flex-row gap-xl items-start group">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase w-[200px] shrink-0 pt-xs">
                            Index 01
                        </div>
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm group-hover:text-secondary transition-colors">Performance Tuning Heuristics</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">
                                Systematic optimization of query execution plans, buffer pool management, and I/O scheduling to minimize latency in high-concurrency environments. Focus on reducing lock contention and optimizing indexing strategies.
                            </p>
<div className="flex gap-md">
<span className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm">Query Profiling</span>
<span className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm">Index B-Trees</span>
</div>
</div>
</div>

<div className="border-t border-surface-variant py-xl flex flex-col md:flex-row gap-xl items-start group">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase w-[200px] shrink-0 pt-xs">
                            Index 02
                        </div>
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm group-hover:text-secondary transition-colors">Global Data Sovereignty</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">
                                Architectural patterns for enforcing geo-partitioning and row-level localization to comply with strict regional data residency requirements without sacrificing global query capabilities.
                            </p>
<div className="flex gap-md">
<span className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm">Geo-Partitioning</span>
<span className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm">Compliance Policies</span>
</div>
</div>
</div>

<div className="border-t border-b border-surface-variant py-xl flex flex-col md:flex-row gap-xl items-start group">
<div className="font-label-sm text-label-sm text-on-surface-variant uppercase w-[200px] shrink-0 pt-xs">
                            Index 03
                        </div>
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm group-hover:text-secondary transition-colors">Consensus Algorithms</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">
                                Deep analysis of Paxos and Raft implementations driving leader election and replicated log management in distributed state machines. Ensuring fault tolerance in partition events.
                            </p>
<div className="flex gap-md">
<span className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm">Raft Protocol</span>
<span className="gsap-stagger-item border-2 border-[#17184B] px-sm py-xs font-label-sm text-label-sm">Fault Tolerance</span>
</div>
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
