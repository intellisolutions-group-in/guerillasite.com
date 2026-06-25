import React from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  const contents = [
    { label: "Introduction", id: "introduction" },
    { label: "1. Data Collection", id: "data-collection" },
    { label: "2. Security Measures", id: "security" },
    { label: "3. Your Rights", id: "your-rights" }
  ];

  return (
    <>
      <TopNavBar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-4 md:px-margin-desktop py-huge flex flex-col md:flex-row gap-xl bg-[#F0EEE9]">
        <aside className="w-full md:w-3/12 shrink-0">
          <div className="sticky top-[120px] bg-white p-md border-2 border-[#17184B]">
            <h2 className="font-display text-xs uppercase tracking-widest text-on-surface-variant mb-md font-bold">Contents</h2>
            <div className="flex flex-col gap-sm">
              {contents.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="font-sans text-xs uppercase tracking-widest text-primary hover:text-secondary font-semibold border-b border-transparent hover:border-[#17184B] pb-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="w-full md:w-9/12 bg-white p-xl md:p-xxl border-2 border-[#17184B]">
          <div className="mb-xxl border-b border-[#17184B] pb-lg">
            <h1 className="gsap-hero-animate font-display text-3xl md:text-display-lg uppercase font-bold tracking-tighter text-primary mb-sm leading-tight">Privacy Policy</h1>
            <p className="font-sans text-xs text-on-surface-variant uppercase font-bold">Last Updated: October 24, 2023</p>
          </div>
          <article className="prose prose-slate max-w-none space-y-xl">
            <section id="introduction" className="scroll-mt-[100px]">
              <p className="font-sans text-md text-on-surface mb-md leading-relaxed">
                GuerillaSite ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our enterprise engineering services.
              </p>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>
            
            <section id="data-collection" className="scroll-mt-[100px] border-t border-[#17184B] pt-xl">
              <h2 className="font-display text-xl font-bold uppercase text-primary mb-md">1. Data Collection</h2>
              <p className="font-sans text-sm text-on-surface-variant mb-md leading-relaxed">
                We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <ul className="list-disc pl-lg space-y-sm font-sans text-sm text-on-surface-variant">
                <li><strong>Personal Information:</strong> Names, phone numbers, email addresses, mailing addresses, job titles, and contact preferences.</li>
                <li><strong>Log and Usage Data:</strong> Service-related, diagnostic, usage, and performance information our servers automatically collect.</li>
                <li><strong>Device Data:</strong> Information about your computer, phone, tablet, or other device you use to access the Services.</li>
              </ul>
            </section>
            
            <section id="security" className="scroll-mt-[100px] border-t border-[#17184B] pt-xl">
              <h2 className="font-display text-xl font-bold uppercase text-primary mb-md">2. Security Measures</h2>
              <p className="font-sans text-sm text-on-surface-variant mb-md leading-relaxed">
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process.
              </p>
              <div className="bg-surface-container-low p-md border-2 border-[#17184B] mt-lg">
                <h3 className="font-sans text-xs uppercase tracking-widest text-primary font-bold mb-sm">Security Protocol Statement</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  Despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. We utilize industry-standard encryption protocols (TLS 1.3) for data in transit and AES-256 for data at rest.
                </p>
              </div>
            </section>
            
            <section id="your-rights" className="scroll-mt-[100px] border-t border-[#17184B] pt-xl">
              <h2 className="font-display text-xl font-bold uppercase text-primary mb-md">3. Your Rights</h2>
              <p className="font-sans text-sm text-on-surface-variant mb-md leading-relaxed">
                In certain regions, you have certain rights under applicable local data protection laws. These may include the right to:
              </p>
              <ul className="list-none space-y-md">
                <li className="flex items-start gap-md">
                  <span className="material-symbols-outlined text-primary mt-1">check</span>
                  <div>
                    <strong className="font-sans text-sm text-primary block font-bold">Request Access</strong>
                    <span className="font-sans text-sm text-on-surface-variant block">Obtain a copy of your personal information.</span>
                  </div>
                </li>
                <li className="flex items-start gap-md">
                  <span className="material-symbols-outlined text-primary mt-1">delete</span>
                  <div>
                    <strong className="font-sans text-sm text-primary block font-bold">Request Deletion</strong>
                    <span className="font-sans text-sm text-on-surface-variant block">Ask us to erase your personal data.</span>
                  </div>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

