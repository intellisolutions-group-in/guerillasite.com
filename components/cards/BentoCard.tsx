import React from "react";
import Link from "next/link";

interface BentoCardProps {
  span?: "col-span-4" | "col-span-8" | "col-span-12" | "col-span-6" | "col-span-3";
  title: string;
  description: string;
  badge?: string;
  href?: string;
  bgImageUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BentoCard({
  span = "col-span-4",
  title,
  description,
  badge,
  href = "#",
  bgImageUrl,
  className = "",
  children,
}: BentoCardProps) {
  const cardContentMarkup = (
    <div className="flex flex-col h-full justify-between p-lg relative z-10 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-secondary/5 transition-all duration-300">
      {badge && (
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#17184B] px-3 py-1 self-start bg-[#D3DDE7] mb-md font-bold rounded-full transition-all duration-300 shadow-sm">
          {badge}
        </span>
      )}
      
      <div className="mt-auto">
        <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-primary mb-sm leading-tight uppercase group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-md">
          {description}
        </p>
        
        {href && (
          <span className="font-sans text-xs uppercase tracking-widest font-bold text-primary inline-flex items-center gap-1 group-hover:text-secondary transition-colors">
            Explore Details
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 duration-200">
              arrow_forward
            </span>
          </span>
        )}
      </div>
    </div>
  );

  const wrapperClass = `bento-card overflow-hidden relative group ${span} ${className}`;

  if (bgImageUrl) {
    return (
      <div className={wrapperClass}>
        {/* Background Grayscale Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700 pointer-events-none rounded-[4px]"
          style={{ backgroundImage: `url('${bgImageUrl}')` }}
        />
        {/* Subtle white/light gray overlay for readability */}
        <div className="absolute inset-0 bg-surface/30 backdrop-blur-[1px] group-hover:bg-surface/10 transition-colors duration-300 pointer-events-none rounded-[4px]" />
        
        <Link href={href} className="block h-full w-full">
          {cardContentMarkup}
        </Link>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <Link href={href} className="block h-full w-full">
        {children ? (
          <div className="flex flex-col h-full p-lg relative z-10">
            {badge && (
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#17184B] px-3 py-1 self-start bg-[#D3DDE7] mb-md font-bold rounded-full transition-all duration-300 shadow-sm">
                {badge}
              </span>
            )}
            {children}
          </div>
        ) : (
          cardContentMarkup
        )}
      </Link>
    </div>
  );
}
