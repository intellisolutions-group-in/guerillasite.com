import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-[100px] w-full">
        <div className="flex flex-col gap-lg max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">System Index Node</span>
          <h1 className="gsap-hero-animate font-display-lg text-[40px] md:text-display-lg text-primary tracking-tighter font-bold">
            Cloud Migration Program
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-md">
            Re-platforming legacy monolith systems onto secure, multi-cloud clusters with zero service interruption.
          </p>
          <div className="flex flex-wrap gap-md mt-xl">
            <Link 
              href="/contact"
              className="accent-bg px-[24px] py-[12px] font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary transition-colors text-center inline-block"
            >
              Contact Us
            </Link>
            <Link 
              href="/"
              className="bg-transparent text-primary px-[24px] py-[12px] font-label-sm text-label-sm uppercase tracking-widest hover:bg-white transition-colors border-2 border-[#17184B] flex items-center gap-2"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
