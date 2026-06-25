"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    inquiryType: "cloud",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request and redirect to thank you
    router.push("/thank-you");
  };

  const inputStyles = "w-full border border-neutral-200/60 bg-neutral-50/60 py-3 px-6 text-sm text-primary placeholder-neutral-400 focus:border-secondary transition-all outline-none rounded-full shadow-inner";

  return (
    <>
      <TopNavBar active="Contact" />

      <main className="flex-grow bg-[#F0EEE9]">
        <section className="px-4 md:px-margin-desktop pt-huge pb-xxl border-b border-neutral-200/40 max-w-container-max mx-auto w-full">
          <div className="max-w-4xl">
            <h1 className="gsap-hero-animate font-display text-4xl md:text-display-lg uppercase font-bold tracking-tighter text-primary mb-md leading-tight">
              Systems Precision.<br />Always Available.
            </h1>
            <p className="gsap-hero-animate font-sans text-md md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Connect with our enterprise engineering and consulting teams. We provide architect-level guidance to ensure continuous operational excellence.
            </p>
          </div>
        </section>

        <section className="w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-xl bg-[#F0EEE9] relative">
          {/* Soft pulsing decorative ambient background halos */}
          <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#D8E63C]/5 rounded-full filter blur-[100px] pointer-events-none -z-10"></div>
          <div className="absolute bottom-1/2 right-1/4 w-[350px] h-[350px] bg-[#D3DDE7]/10 rounded-full filter blur-[80px] pointer-events-none -z-10"></div>

          <div className="flex justify-center w-full">
            <div className="card-neumorphic p-xl flex flex-col justify-between min-h-[240px] max-w-md w-full transition-all duration-300 text-primary bg-white/70 backdrop-blur-sm border border-neutral-200/40 rounded-[32px] shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <div>
                <div className="flex items-center mb-md border-b border-neutral-200/30 pb-xs">
                  <span className="material-symbols-outlined mr-sm text-secondary">mail</span>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-on-surface-variant font-bold">Inquiries & Support</h3>
                </div>
                <p className="font-display text-xl font-bold uppercase text-[#17184B] mb-sm">Contact Email</p>
                <p className="font-sans text-xs text-on-surface-variant mb-lg leading-relaxed">
                  For enterprise sales, technical support, or career inquiries, connect directly with our engineering team.
                </p>
              </div>
              <a className="font-sans text-xs uppercase tracking-widest text-[#17184B] border-b border-neutral-300 hover:text-secondary hover:border-secondary pb-0.5 inline-block font-bold transition-all w-fit" href="mailto:info@guerillasite.com">info@guerillasite.com</a>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 border-b border-neutral-200/40 bg-[#F0EEE9]">
          <div className="p-margin-mobile md:p-margin-desktop lg:border-r border-neutral-200/40 bg-[#F0EEE9] text-primary">
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-primary mb-lg">Contact Us</h2>
            <p className="font-sans text-sm text-on-surface-variant mb-xl leading-relaxed">Provide details regarding your technical requirements, and an architect will respond within 4 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-lg">
              <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div>
                  <input 
                    className={inputStyles} 
                    placeholder="First Name" 
                    required 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <input 
                    className={inputStyles} 
                    placeholder="Last Name" 
                    required 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <input 
                  className={inputStyles} 
                  placeholder="Corporate Email Address" 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <input 
                  className={inputStyles} 
                  placeholder="Company Name" 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div className="pt-sm">
                <label className="font-sans text-xs uppercase tracking-widest text-on-surface-variant block mb-sm font-bold">Inquiry Type</label>
                <div className="relative">
                  <select 
                    className="w-full border border-neutral-200/60 bg-neutral-50/60 py-3 px-6 text-sm text-primary appearance-none rounded-full outline-none focus:border-secondary cursor-pointer shadow-inner pr-10"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                  >
                    <option value="cloud">Cloud Strategy & Migration</option>
                    <option value="cyber">Cybersecurity Audit</option>
                    <option value="software">Custom Software Engineering</option>
                    <option value="ai">AI Integration</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-neutral-450 pointer-events-none">expand_more</span>
                </div>
              </div>
              <div>
                <textarea 
                  className={`${inputStyles.replace("rounded-full", "rounded-[24px]")} resize-none`} 
                  placeholder="Technical Requirements Details" 
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>
              <div className="pt-lg">
                <button 
                  className="btn-primary w-full md:w-auto rounded-full font-bold uppercase tracking-widest text-xs px-xl py-3 shadow-md"
                  type="submit"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          <div className="bg-[#F0EEE9] h-full min-h-[500px] relative border-t lg:border-t-0 border-neutral-200/40 overflow-hidden flex flex-col justify-end p-lg">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center grayscale opacity-10 pointer-events-none rounded-[32px]" 
              style={{backgroundImage: 'url("/images/hero_server_room.png")'}}
            ></div>
            <div className="absolute inset-0 border border-transparent pointer-events-none z-20"></div>
            <div className="relative p-xl z-10 self-start m-4 md:m-8">
              <div className="bg-white/80 backdrop-blur-sm p-lg border border-neutral-200/50 rounded-[32px] max-w-sm shadow-lg text-primary">
                <h3 className="font-sans text-xs uppercase tracking-widest text-secondary mb-md font-bold">Systems Operations</h3>
                <p className="font-display text-md font-bold uppercase text-primary">Distributed Engineering</p>
                <p className="font-sans text-sm text-on-surface-variant mt-sm leading-relaxed">
                  Our engineering pods deliver continuous deployment, system monitoring, and rapid architectural support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-huge bg-surface">
          <h2 className="font-display text-3xl font-bold uppercase text-primary mb-xl">Frequent Inquiries</h2>
          <div className="w-full border-t border-neutral-200/40 flex flex-col gap-md pt-md">
            <details className="group border border-neutral-200/60 bg-white/70 backdrop-blur-sm p-md open:bg-neutral-50/40 text-primary transition-all duration-200 cursor-pointer select-none rounded-[24px] shadow-sm">
              <summary className="flex justify-between items-center font-display text-md font-bold text-primary uppercase list-none focus:outline-none">
                <span>What is the typical SLA for enterprise support?</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-secondary">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-md font-sans text-sm text-on-surface-variant leading-relaxed border-t border-neutral-200/20 pt-md cursor-text">
                Our standard enterprise SLA guarantees an initial response time of 15 minutes for critical (Sev-1) incidents and 4 hours for standard inquiries. Dedicated engineering pods are assigned to all enterprise accounts for continuity.
              </div>
            </details>

            <details className="group border border-neutral-200/60 bg-white/70 backdrop-blur-sm p-md open:bg-neutral-50/40 text-primary transition-all duration-200 cursor-pointer select-none rounded-[24px] shadow-sm">
              <summary className="flex justify-between items-center font-display text-md font-bold text-primary uppercase list-none focus:outline-none">
                <span>Do you provide on-site consultation?</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-secondary">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-md font-sans text-sm text-on-surface-variant leading-relaxed border-t border-neutral-200/20 pt-md cursor-text">
                Yes, for major architectural overhauls and security audits, we deploy our senior architects to your premises globally. Remote hybrid models are also available to optimize cost and efficiency.
              </div>
            </details>

            <details className="group border border-neutral-200/60 bg-white/70 backdrop-blur-sm p-md open:bg-neutral-50/40 text-primary transition-all duration-200 cursor-pointer select-none rounded-[24px] shadow-sm">
              <summary className="flex justify-between items-center font-display text-md font-bold text-primary uppercase list-none focus:outline-none">
                <span>How is billing structured for ongoing engineering support?</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-secondary">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-md font-sans text-sm text-on-surface-variant leading-relaxed border-t border-neutral-200/20 pt-md cursor-text">
                Billing is structured on a retained engineering model based on expected velocity and capacity, billed monthly. Ad-hoc project work is estimated and billed via fixed-price milestone contracts.
              </div>
            </details>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

