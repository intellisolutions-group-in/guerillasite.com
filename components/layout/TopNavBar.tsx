"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface TopNavBarProps {
  active?: string;
}

export default function TopNavBar({ active }: TopNavBarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const servicesGroups = [
    {
      category: "Development & Systems",
      items: [
        { label: "Custom ERP Systems", href: "/services/custom-erp", icon: "business" },
        { label: "Custom CRM Platforms", href: "/services/custom-crm", icon: "groups" },
        { label: "Website Development", href: "/services/website-development", icon: "code" },
        { label: "Mobile App Development", href: "/services/mobile-app-development", icon: "smartphone" },
      ]
    },
    {
      category: "Cloud & Security",
      items: [
        { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure", icon: "cloud" },
        { label: "Cybersecurity Services", href: "/services/cybersecurity", icon: "shield" },
        { label: "DevOps & CI/CD", href: "/services/devops-cicd", icon: "sync_alt" },
        { label: "Hosting & Gateways", href: "/services/hosting-gateway", icon: "dns" },
      ]
    },
    {
      category: "Data & AI",
      items: [
        { label: "AI & Machine Learning", href: "/services/ai-machine-learning", icon: "psychology" },
        { label: "Data Analytics & BI", href: "/services/data-analytics-bi", icon: "monitoring" },
        { label: "IT Consulting", href: "/services/it-consulting", icon: "support_agent" },
        { label: "UI/UX Design", href: "/services/ui-ux-design", icon: "brush" },
      ]
    },
    {
      category: "Digital Growth",
      items: [
        { label: "Digital Marketing", href: "/services/digital-marketing", icon: "campaign" },
        { label: "Google Ads", href: "/services/google-ads", icon: "ads_click" },
        { label: "SEO Optimization", href: "/services/seo", icon: "search" },
        { label: "Branding & Identity", href: "/services/branding", icon: "palette" },
      ]
    }
  ];

  const navItems = [
    { 
      label: "Services", 
      href: "/services",
      subItems: servicesGroups.flatMap(group => group.items)
    },
    { 
      label: "Industries", 
      href: "/industries",
      subItems: [
        { label: "Manufacturing & IoT", href: "/industries/manufacturing", icon: "precision_manufacturing" },
        { label: "FinTech & Ledger Tech", href: "/industries/fintech", icon: "payments" },
        { label: "Logistics & Fleet Systems", href: "/industries/logistics", icon: "local_shipping" },
        { label: "Healthcare Data Lakes", href: "/industries/healthcare", icon: "medical_services" },
      ]
    },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4 md:px-6 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-5xl h-16 bg-white/95 border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full px-6 relative transition-all duration-300">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center hover:opacity-90 transition-opacity duration-200"
        >
          <Image
            src="/images/GuerillaSiteLogo-01.png"
            alt="GuerillaSite Logo"
            width={164}
            height={30}
            className="h-[30px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-md items-center h-full">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href) || active === item.label;
            return (
              <div key={item.label} className={`group h-full flex items-center ${item.label === "Services" ? "" : "relative"}`}>
                <Link
                  href={item.href}
                  className={`font-sans text-xs uppercase tracking-widest py-1.5 px-4 rounded-full transition-all duration-200 flex items-center gap-1 font-bold ${
                    isActive
                      ? "text-[#17184B] bg-[#D3DDE7] shadow-sm"
                      : "text-[#17184B]/80 hover:text-[#17184B] hover:bg-[#EBE8E1]"
                  }`}
                >
                  {item.label}
                  {item.subItems && (
                    <span className="material-symbols-outlined text-[14px] leading-none transition-transform duration-200 group-hover:rotate-180">
                      keyboard_arrow_down
                    </span>
                  )}
                </Link>
                
                {item.subItems && (
                  item.label === "Services" ? (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-[720px] lg:w-[840px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white border border-neutral-100 p-6 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] grid grid-cols-4 gap-6">
                        {servicesGroups.map((group) => (
                          <div key={group.category} className="flex flex-col gap-1.5">
                            <span className="font-sans text-[10px] font-extrabold uppercase tracking-wider text-[#17184B] border-b-2 border-[#17184B]/20 pb-1.5 mb-2 block">
                              {group.category}
                            </span>
                            {group.items.map((sub) => (
                              <Link 
                                key={sub.label} 
                                href={sub.href}
                                className="font-sans text-[11px] text-[#17184B] hover:text-[#17184B] hover:bg-[#D3DDE7] px-3 py-2 rounded-xl transition-all duration-200 font-bold flex items-center gap-2 group/item border border-transparent hover:border-neutral-100 shadow-sm"
                              >
                                <span className="material-symbols-outlined text-[15px] text-[#17184B]/60 group-hover/item:text-[#17184B] transition-colors shrink-0">
                                  {sub.icon}
                                </span>
                                <span>{sub.label}</span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white border border-neutral-100 p-3 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col gap-1">
                        {item.subItems.map((sub) => (
                          <Link 
                            key={sub.label} 
                            href={sub.href}
                            className="font-sans text-xs text-[#17184B] hover:text-[#17184B] hover:bg-[#D3DDE7] px-4 py-2.5 rounded-xl transition-all duration-200 font-bold flex items-center gap-2 group/item border border-transparent hover:border-neutral-100 shadow-sm"
                          >
                            <span className="material-symbols-outlined text-[16px] text-[#17184B]/60 group-hover/item:text-[#17184B] transition-colors shrink-0">
                              {sub.icon}
                            </span>
                            <span>{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            );
          })}
        </div>

        {/* Actions Container */}
        <div className="flex items-center gap-md">
          <Link 
            href="/contact"
            className="hidden md:flex btn-accent px-6 py-2 text-[10px]"
          >
            Contact Us
          </Link>
          
          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#17184B] border border-neutral-200 bg-white shadow-sm cursor-pointer flex items-center justify-center rounded-full hover:bg-[#D3DDE7] transition-all"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border border-neutral-100 p-6 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col gap-4 md:hidden pointer-events-auto z-50 animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col gap-md">
              {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href) || active === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-sans text-sm uppercase tracking-widest py-2.5 px-4 rounded-full transition-all font-bold ${
                      isActive
                        ? "text-[#17184B] bg-[#D3DDE7]"
                        : "text-[#17184B] hover:text-[#17184B] hover:bg-neutral-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="border-t-2 border-neutral-100 pt-md mt-sm">
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-3 btn-accent text-xs"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
