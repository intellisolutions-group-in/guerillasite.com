"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "consulting",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@guerillasite.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/thank-you");
    }, 1200);
  };

  return (
    <>
      <TopNavBar active="Contact" />

      <main className="flex-grow bg-[#F0EEE9] flex flex-col w-full overflow-hidden pt-36 pb-huge">
        {/* Form and Support Grid */}
        <section className="w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-4 grid grid-cols-1 lg:grid-cols-12 gap-xl relative z-10">
          {/* Left Column: Strategic Inquiry Form (8 Columns) */}
          <div className="lg:col-span-8 gsap-slide-up">
            <div className="border border-[#17184B]/15 bg-white p-lg md:p-xl rounded-[28px] shadow-[4px_4px_0px_rgba(23,24,75,0.05)] text-primary">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary mb-xl border-b border-[#17184B]/10 pb-md text-left">
                Send a Strategic Inquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-lg text-left">
                
                {/* Row 1: Full Name & Corporate Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs text-[#17184B]/80 font-bold">Full Name</label>
                    <input 
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs text-[#17184B]/80 font-bold">Corporate Email</label>
                    <input 
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Row 2: Department of Interest */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs text-[#17184B]/80 font-bold">Department of Interest</label>
                  <div className="relative w-full">
                    <select 
                      className="w-full appearance-none bg-white cursor-pointer pr-10"
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                    >
                      <option value="consulting">Strategic Consulting</option>
                      <option value="cyber">Cybersecurity Hardening</option>
                      <option value="software">Custom Software Engineering</option>
                      <option value="ai">AI Integration</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none text-[20px]">expand_more</span>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs text-[#17184B]/80 font-bold">Message</label>
                  <textarea 
                    required
                    placeholder="Briefly describe your requirements..."
                    rows={5}
                    className="w-full font-sans"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-md">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto font-bold uppercase tracking-widest text-xs px-xl py-4 rounded-full cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Direct Support Card (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-lg gsap-slide-up">
            <div className="border border-[#17184B]/15 bg-white p-lg rounded-[28px] shadow-[4px_4px_0px_rgba(23,24,75,0.05)] flex flex-col min-h-[140px] text-left">
              <h3 className="font-display text-md font-bold uppercase text-primary mb-md pb-xs border-b border-[#17184B]/10">
                Direct Support
              </h3>
              
              <div className="flex items-center gap-md pt-sm">
                <span className="material-symbols-outlined text-[#17184B] bg-[#D8E63C]/20 p-3 rounded-full flex items-center justify-center border border-[#D8E63C]/30 shadow-inner text-[20px]">
                  mail
                </span>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] text-[#17184B]/60 font-bold uppercase">General Support</span>
                  <a 
                    href="mailto:info@guerillasite.com"
                    className="font-sans text-xs text-primary font-bold hover:text-secondary hover:underline transition-colors mt-0.5"
                  >
                    info@guerillasite.com
                  </a>
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
