"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { featuredPost, allPosts } from "./blogData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Insights");

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    const rotX = -normalizedY * 8; // Max 8 degrees tilt
    const rotY = normalizedX * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.1s ease-out, box-shadow 0.3s ease";
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease";
  };



  // Filtering Logic
  const filteredPosts = selectedCategory === "All Insights"
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  // Pagination Logic
  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Safety check for page out of bounds when category changes
  const activePage = Math.min(currentPage, totalPages || 1);
  
  const startIndex = (activePage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Resize Lenis and refresh ScrollTrigger when page or category changes
  // to recalculate scroll heights and bounds after DOM content updates.
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.resize();
    }
    ScrollTrigger.refresh();
  }, [activePage, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis;
    if (lenis) {
      // Use Lenis scroll engine for cinematic smooth scrolling without browser conflicts
      lenis.scrollTo(350, { duration: 1.0 });
    } else {
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const categories = ["All Insights", "Engineering", "AI Integration", "Cloud Strategy", "Cybersecurity"];

  return (
    <>
      <Navbar />

      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-desktop pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col gap-huge bg-[#F0EEE9] relative overflow-hidden">
        {/* Soft pulsing decorative ambient background halos */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#D8E63C]/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse duration-[10000ms] -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#D3DDE7]/15 rounded-full filter blur-[80px] pointer-events-none animate-pulse duration-[8000ms] -z-10"></div>

        {/* Featured Analysis Section - Only visible on first page of All Insights */}
        {activePage === 1 && selectedCategory === "All Insights" && (
          <Link 
            href={featuredPost.link}
            className="gsap-stagger-container grid grid-cols-1 md:grid-cols-12 gap-gutter items-center p-md bg-white/70 backdrop-blur-md border border-neutral-200/50 rounded-[32px] text-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer z-10 relative animate-in fade-in duration-500"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="md:col-span-7 aspect-video relative overflow-hidden group border border-neutral-200/30 rounded-[24px]">
              <img 
                alt={featuredPost.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={featuredPost.image} 
              />
              <div className="absolute top-md left-md bg-white/90 backdrop-blur-sm px-md py-xs border border-neutral-200/50 rounded-full shadow-sm">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Featured Analysis</span>
              </div>
            </div>
            <div className="md:col-span-5 min-w-0 flex flex-col gap-md p-lg">
              <div className="flex items-center gap-sm text-on-surface-variant font-label-sm text-label-sm">
                <span className="">{featuredPost.category}</span>
                <span className="">•</span>
                <span className="">{featuredPost.date}</span>
                <span className="">•</span>
                <span className="">{featuredPost.readTime}</span>
              </div>
              <h1 className="gsap-hero-animate font-display text-3xl md:text-[24px] lg:text-[34px] xl:text-[42px] font-extrabold uppercase leading-[1.1] tracking-tight text-primary group-hover:text-secondary transition-colors">
                {featuredPost.title}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant line-clamp-3">
                {featuredPost.desc}
              </p>
              <div className="mt-md">
                <div 
                  className="border border-neutral-200/60 bg-white hover:bg-neutral-50 text-[#17184B] font-sans text-xs uppercase tracking-widest px-md py-3 rounded-full flex items-center gap-xs transition-colors w-fit font-bold shadow-sm"
                >
                  Read Article 
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Filters */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-lg border-b border-neutral-200/40 pb-md z-10 relative">
          <div className="flex flex-wrap gap-sm">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`filter-pill cursor-pointer ${selectedCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-auto">
            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-neutral-400 text-[20px]">filter_list</span>
            <select 
              value={selectedCategory}
              onChange={(e) => handleCategorySelect(e.target.value)}
              className="pl-[36px] pr-xxl py-xs border border-neutral-200/60 bg-white text-primary focus:outline-none focus:border-secondary font-label-sm text-label-sm appearance-none w-full md:w-[200px] uppercase tracking-widest cursor-pointer rounded-full outline-none shadow-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-neutral-450 text-[20px] pointer-events-none">expand_more</span>
          </div>
        </section>

        {/* Grid of Articles */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter z-10 relative min-h-[400px]">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => (
              <Link 
                href={post.link}
                key={post.slug}
                className="flex flex-col border border-neutral-200/50 bg-white/70 backdrop-blur-sm rounded-[32px] overflow-hidden group cursor-pointer hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-primary animate-in fade-in duration-300"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="aspect-[16/9] relative border-b border-neutral-200/30 overflow-hidden bg-neutral-100 w-full">
                  <img 
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]" 
                    src={post.image} 
                  />
                </div>
                <div className="p-lg flex flex-col flex-grow gap-sm justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest mb-xs">
                      <span className="text-secondary font-bold">{post.category}</span>
                      <span className="">{post.date.split(",")[0]}</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary leading-tight group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-xs">
                      {post.desc}
                    </p>
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-neutral-400 group-hover:text-secondary inline-flex items-center gap-1 mt-md transition-colors w-fit">
                    Read Article <span className="material-symbols-outlined text-[12px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-on-surface-variant">
              <span className="material-symbols-outlined text-[48px] text-neutral-300 mb-sm">search_off</span>
              <p className="font-sans text-sm">No insights found under this category.</p>
            </div>
          )}
        </section>

        {/* Dynamic Pagination */}
        {totalPages > 1 && (
          <section className="flex justify-center items-center gap-sm pt-xl border-t border-neutral-200/40 z-10 relative">
            <button 
              disabled={activePage === 1}
              onClick={() => handlePageChange(activePage - 1)}
              className="border border-neutral-200/60 w-10 h-10 flex items-center justify-center hover:border-secondary rounded-full transition-colors group disabled:opacity-30 disabled:cursor-not-allowed bg-white shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-neutral-450 group-hover:text-secondary transition-colors text-[20px]">chevron_left</span>
            </button>
            
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`border font-label-sm text-label-sm w-10 h-10 flex items-center justify-center rounded-full transition-all cursor-pointer ${
                    activePage === pageNum
                      ? "bg-secondary text-white border-secondary font-bold shadow-md"
                      : "bg-white text-primary border-neutral-200/60 hover:border-secondary hover:text-secondary shadow-sm"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button 
              disabled={activePage === totalPages}
              onClick={() => handlePageChange(activePage + 1)}
              className="border border-neutral-200/60 w-10 h-10 flex items-center justify-center hover:border-secondary rounded-full transition-colors group disabled:opacity-30 disabled:cursor-not-allowed bg-white shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-neutral-450 group-hover:text-secondary transition-colors text-[20px]">chevron_right</span>
            </button>
          </section>
        )}

        {/* Newsletter Subscription Box */}
        <section className="bg-white/80 backdrop-blur-md text-primary p-xl md:p-xxl border border-white/50 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-xl relative overflow-hidden mt-xxl shadow-lg z-10">
          <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#D8E63C]"></div>
          <div className="md:w-1/2 flex flex-col gap-sm z-10">
            <h2 className="font-headline-xl text-headline-xl leading-tight text-primary font-bold">Engineering Intel, Delivered.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Subscribe to receive technical deep-dives, architectural blueprints, and industry analysis directly to your inbox. No marketing fluff, just signal.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-sm z-10">
            <form className="flex flex-col sm:flex-row gap-sm w-full">
              <input 
                className="flex-grow bg-neutral-50/60 border border-neutral-200/60 text-primary px-lg py-[12px] font-sans text-xs focus:outline-none focus:border-[#D8E63C] placeholder:text-neutral-450 rounded-full outline-none" 
                placeholder="ENTER ENTERPRISE EMAIL" 
                type="email" 
              />
              <button className="btn-accent rounded-full font-bold uppercase tracking-widest text-xs px-xl py-3" type="submit">
                Subscribe
              </button>
            </form>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-xs">One precise email per week. Unsubscribe anytime.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
