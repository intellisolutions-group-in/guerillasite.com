import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FAQSection({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Technical inquiries regarding implementation, delivery, and audits.",
  className = "",
}: FAQSectionProps) {
  return (
    <section className={`px-4 md:px-margin-desktop py-huge max-w-container-max mx-auto bg-surface-container/30 border-b border-light ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Header Block */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-sm mb-lg md:mb-0">
          <span className="font-sans text-xs uppercase tracking-widest text-secondary font-bold">
            Diagnostics
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary uppercase leading-tight">
            {title}
          </h2>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed max-w-sm">
            {subtitle}
          </p>
        </div>

        {/* Accordions */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-md">
          {items.map((item, index) => (
            <details 
              key={index}
              className="group border-2 border-[#17184B] bg-white rounded-[4px] p-md open:bg-neutral-50 hover:border-neutral-300 shadow-sm transition-all duration-300 cursor-pointer select-none text-primary"
            >
              <summary className="flex justify-between items-center font-display text-md font-bold text-primary uppercase list-none focus:outline-none">
                <span>{item.question}</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-secondary">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-md font-sans text-sm text-on-surface-variant leading-relaxed border-t border-[#17184B] pt-md cursor-text">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
