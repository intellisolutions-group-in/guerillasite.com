"use client";

import React, { useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Page() {

  // Project Types
  const projectTypes = [
    { id: "web", name: "Web Application", cost: 50000, desc: "React, Next.js, TypeScript", icon: "web" },
    { id: "mobile", name: "Mobile App", cost: 75000, desc: "iOS, Android, React Native", icon: "smartphone" },
    { id: "ai", name: "AI / Machine Learning", cost: 120000, desc: "LLMs, Predictive Models", icon: "memory" }
  ];

  // Features list
  const coreFeatures = [
    { id: "auth", name: "User Authentication & SSO", cost: 15000 },
    { id: "sync", name: "Real-time Data Sync", cost: 25000 },
    { id: "payment", name: "Payment Gateway Integration", cost: 20000 },
    { id: "viz", name: "Complex Data Visualization", cost: 35000 }
  ];

  // Cloud options
  const cloudOptions = [
    { id: "aws", name: "Amazon Web Services", multiplier: 1.0, desc: "Industry standard scalable infrastructure" },
    { id: "azure", name: "Microsoft Azure", multiplier: 1.05, desc: "Enterprise integrated cloud solutions" }
  ];

  // State variables
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedCloud, setSelectedCloud] = useState(cloudOptions[0]);
  const [timelineVal, setTimelineVal] = useState(1.0); // 0.8 to 1.5

  const handleFeatureToggle = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Timeline description text
  const getTimelineText = (val: number) => {
    if (val < 1.0) return `Slower (x${val} Cost)`;
    if (val === 1.0) return "Standard (1x Cost)";
    return `Expedited (x${val} Cost)`;
  };

  return (
    <>
      <TopNavBar active="Calculator" />
      <main className="flex-grow flex flex-col bg-[#F0EEE9] pb-huge">
        <section className="w-full px-4 md:px-margin-desktop py-huge md:py-xxl max-w-container-max mx-auto text-center border-b border-[#17184B]/10">
          <h1 className="gsap-hero-animate font-display text-4xl md:text-display-lg uppercase font-bold tracking-tighter text-primary mb-md leading-tight">
            Calculate Your Infrastructure Investment
          </h1>
          <p className="gsap-hero-animate font-sans text-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Get a real-time estimate for your next major engineering initiative. Select your requirements below to configure a high-level budget.
          </p>
        </section>

        <section className="w-full px-4 md:px-margin-desktop py-huge max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
          {/* Main Controls */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-xxl pr-0 lg:pr-xl border-b lg:border-b-0 lg:border-r border-[#17184B]/10 pb-xxl lg:pb-0">
            {/* Step 1: Project Type */}
            <div className="step-section">
              <div className="flex items-center gap-sm mb-lg">
                <span className="bg-primary text-[#F0EEE9] w-8 h-8 flex items-center justify-center font-sans text-xs font-bold rounded-full shadow-sm">01</span>
                <h2 className="font-display text-xl font-bold uppercase text-primary">Project Type</h2>
              </div>
              <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-3 gap-md">
                {projectTypes.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`border p-lg flex flex-col items-center text-center gap-sm rounded-[24px] shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${
                        isSelected ? "border-[#D8E63C]/40 bg-white text-primary shadow-[5px_5px_15px_rgba(23,24,75,0.08)] font-semibold" : "border-[#17184B]/10 bg-white text-on-surface-variant hover:border-neutral-300 hover:text-primary"
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[32px] ${isSelected ? "text-secondary font-bold animate-pulse" : "text-on-surface-variant"}`}>
                        {type.icon}
                      </span>
                      <span className={`font-sans text-xs uppercase tracking-widest font-bold ${isSelected ? "text-primary font-extrabold" : "text-primary"}`}>{type.name}</span>
                      <span className="font-sans text-xs mt-auto text-on-surface-variant">{type.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Core Features */}
            <div className="step-section">
              <div className="flex items-center gap-sm mb-lg">
                <span className="bg-primary text-[#F0EEE9] w-8 h-8 flex items-center justify-center font-sans text-xs font-bold rounded-full shadow-sm">02</span>
                <h2 className="font-display text-xl font-bold uppercase text-primary">Core Features</h2>
              </div>
              <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-md">
                {coreFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <label
                      key={feat.id}
                      className={`border p-md cursor-pointer flex items-center justify-between rounded-2xl shadow-sm hover:-translate-y-0.5 transition-all duration-300 ${
                        isChecked ? "border-[#D8E63C]/40 bg-white text-primary shadow-[5px_5px_15px_rgba(23,24,75,0.08)] font-semibold" : "border-[#17184B]/10 bg-white text-on-surface-variant hover:border-neutral-300 hover:text-primary"
                      }`}
                    >
                      <div className="flex items-center gap-md select-none">
                        <input
                          type="checkbox"
                          className="h-5 w-5 text-secondary border-neutral-200 bg-white rounded focus:ring-secondary/50 cursor-pointer"
                          checked={isChecked}
                          onChange={() => handleFeatureToggle(feat.id)}
                        />
                        <span className={`font-sans text-sm font-bold ${isChecked ? "text-primary" : "text-on-surface-variant"}`}>{feat.name}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Cloud Infrastructure */}
            <div className="step-section">
              <div className="flex items-center gap-sm mb-lg">
                <span className="bg-primary text-[#F0EEE9] w-8 h-8 flex items-center justify-center font-sans text-xs font-bold rounded-full shadow-sm">03</span>
                <h2 className="font-display text-xl font-bold uppercase text-primary">Cloud Infrastructure</h2>
              </div>
              <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 gap-md">
                {cloudOptions.map((cloud) => {
                  const isSelected = selectedCloud.id === cloud.id;
                  return (
                    <button
                      key={cloud.id}
                      onClick={() => setSelectedCloud(cloud)}
                      className={`border p-md flex flex-col gap-xs text-left rounded-2xl shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-pointer w-full ${
                        isSelected ? "border-[#D8E63C]/40 bg-white text-primary shadow-[5px_5px_15px_rgba(23,24,75,0.08)] font-semibold" : "border-[#17184B]/10 bg-white text-on-surface-variant hover:border-neutral-300 hover:text-primary"
                      }`}
                    >
                      <span className={`font-sans text-xs uppercase tracking-widest font-bold ${isSelected ? "text-primary font-extrabold" : "text-primary"}`}>{cloud.name}</span>
                      <span className="font-sans text-xs text-on-surface-variant">{cloud.desc}</span>
                      {cloud.multiplier > 1 && (
                        <span className="font-sans text-[10px] text-secondary font-bold uppercase mt-xs">+{Math.round((cloud.multiplier - 1) * 100)}% integration premium</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Estimated Timeline */}
            <div className="step-section">
              <div className="flex items-center gap-sm mb-lg">
                <span className="bg-primary text-[#F0EEE9] w-8 h-8 flex items-center justify-center font-sans text-xs font-bold rounded-full shadow-sm">04</span>
                <h2 className="font-display text-xl font-bold uppercase text-primary">Estimated Timeline</h2>
              </div>
              <div className="gsap-stagger-item border border-[#17184B]/10 bg-white p-lg flex flex-col gap-lg rounded-2xl shadow-sm text-primary">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-primary font-bold">Speed vs Cost Trade-off</span>
                  <span className="font-sans text-xs text-secondary uppercase tracking-widest font-bold">
                    {getTimelineText(timelineVal)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="1.5"
                  step="0.1"
                  className="w-full accent-secondary cursor-pointer bg-neutral-200"
                  value={timelineVal}
                  onChange={(e) => setTimelineVal(parseFloat(e.target.value))}
                />
                <div className="flex justify-between font-sans text-xs text-on-surface-variant">
                  <span>Slower (-20%)</span>
                  <span>Standard</span>
                  <span>Expedited (+50%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Budget Display Card */}
          <div className="col-span-12 lg:col-span-4 sticky top-[120px] card-neumorphic-exact p-lg flex flex-col gap-lg text-primary">
            <h3 className="font-display text-xl font-bold uppercase text-primary border-b border-[#17184B]/10 pb-md">Enterprise Assessment</h3>
            <div className="flex flex-col gap-sm">
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                <strong>Custom Enterprise Pricing:</strong> Our engineering architects will calculate a precise blueprint and quote based on your specific requirements.
              </p>
            </div>

            <div className="border-t border-[#17184B]/10 pt-md mt-sm">
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Final scope, pricing, and timeline details are subject to technical design and service level agreements.
              </p>
            </div>

            <div className="flex flex-col gap-md mt-md">
              <Link
                href="/contact"
                className="btn-accent w-full text-center flex justify-center items-center gap-xs font-bold"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span> Request Custom Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


