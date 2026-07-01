"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BlogPost } from "../blogData";
import Link from "next/link";

interface BlogDetailClientProps {
  post: BlogPost;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  return (
    <>
      <Navbar />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-[#F0EEE9]">
        {/* Soft pulsing decorative ambient background halos */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#D8E63C]/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse duration-[10000ms] -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#D3DDE7]/15 rounded-full filter blur-[80px] pointer-events-none animate-pulse duration-[8000ms] -z-10"></div>

        <div className="z-10 relative flex flex-col gap-xl">
          {/* Header */}
          <header className="max-w-[800px] mx-auto w-full pb-xl border-b border-[#17184B]/10 flex flex-col gap-md">
            <div className="flex flex-wrap items-center gap-sm">
              <span className="font-mono text-[10px] uppercase text-[#17184B] px-3 py-1 bg-[#D8E63C] font-bold rounded-full">
                {post.category}
              </span>
              <span className="font-mono text-[10px] uppercase text-[#17184B]/60 px-3 py-1 bg-white/70 border border-[#17184B]/10 font-semibold rounded-full">
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl lg:text-[52px] text-[#17184B] font-extrabold uppercase tracking-tight leading-[1.05] mt-sm">
              {post.title}
            </h1>

            <p className="font-sans text-md md:text-body-lg text-[#17184B]/70 leading-relaxed max-w-3xl mt-sm">
              {post.desc}
            </p>
          </header>

          {/* Article Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl max-w-[800px] mx-auto w-full items-start">
            <article className="lg:col-span-12 flex flex-col gap-lg text-[#17184B] leading-relaxed font-body-lg text-body-lg">

              {/* Introduction */}
              <p className="font-sans text-body-lg text-[#17184B] leading-relaxed font-bold border-l-4 border-[#D8E63C] pl-md">
                {post.introduction}
              </p>

              {/* Sections */}
              {post.sections.map((section, idx) => {
                switch (section.type) {
                  case "heading":
                    return (
                      <h2 key={idx} className="font-display text-2xl md:text-3xl font-bold uppercase text-[#17184B] tracking-tight mt-md mb-xs">
                        {section.value}
                      </h2>
                    );
                  case "paragraph":
                    return (
                      <p key={idx} className="font-sans text-body-md text-[#17184B]/85 leading-relaxed">
                        {section.value}
                      </p>
                    );
                  case "blockquote":
                    return (
                      <blockquote key={idx} className="border-l-4 border-[#17184B]/40 bg-white/55 p-lg my-sm font-serif italic text-md text-[#17184B]/90 rounded-r-2xl shadow-sm">
                        <p className="mb-xs">"{section.value}"</p>
                        {section.authorName && (
                          <cite className="font-sans text-xs uppercase tracking-wider text-[#17184B]/60 font-semibold not-italic block mt-2">
                            — {section.authorName}
                          </cite>
                        )}
                      </blockquote>
                    );
                  case "code":
                    return (
                      <pre key={idx} className="bg-[#17184B] text-[#D8E63C] p-lg rounded-2xl overflow-x-auto font-mono text-xs md:text-sm border border-neutral-800/80 shadow-md leading-relaxed my-sm">
                        <code className={section.language ? `language-${section.language}` : ""}>
                          {section.value}
                        </code>
                      </pre>
                    );
                  case "list":
                    return (
                      <ul key={idx} className="list-disc pl-lg space-y-sm border-l border-[#17184B]/10 ml-sm font-sans text-body-md text-[#17184B]/85 my-xs">
                        {section.items?.map((item, lidx) => (
                          <li key={lidx} className="pl-xs">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}



              {/* Back to Blog Button */}
              <div className="mt-lg flex justify-center">
                <Link href="/blog" className="btn-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Back to Insights Hub
                </Link>
              </div>

            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
