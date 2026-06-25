import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Visual Consistency",
    "value": "100%"
  },
  {
    "label": "Identity Reach",
    "value": "42M+"
  },
  {
    "label": "Assets Crafted",
    "value": "15K+"
  }
];
  const challenges = [
  {
    "title": "Inconsistent Design",
    "desc": "Fragmented typography, colors, and layout patterns dilute brand trust across platforms."
  },
  {
    "title": "Visual Fatigue",
    "desc": "Standard default stock templates fail to engage high-value enterprise prospects."
  },
  {
    "title": "Undefined Voice",
    "desc": "A weak brand narrative makes communicating complex technical products difficult."
  }
];
  const methodology = {
  "title": "Strategic Visual Systems",
  "desc": "We treat corporate brand design as an extension of product engineering.\n\nEvery element, color weight, and typography choice is selected based on target market research, creating a robust design system that communicates stability, high-tech capability, and premium reliability.",
  "image": "/images/brand_designer_work.png"
};
  const capabilities = [
  {
    "title": "Corporate Identity",
    "desc": "Creating logos, visual systems, and comprehensive brand guidelines.",
    "icon": "palette"
  },
  {
    "title": "Digital Assets Design",
    "desc": "Crafting premium visual media for website portals and product designs.",
    "icon": "layers"
  },
  {
    "title": "Design Systems",
    "desc": "Building comprehensive Figma libraries and CSS component guidelines.",
    "icon": "grid_view"
  },
  {
    "title": "Visual Strategy",
    "desc": "Structuring typography and visual hierarchies to optimize customer trust.",
    "icon": "auto_awesome"
  }
];
  const techStack = [
  "Figma",
  "Adobe CC",
  "TailwindCSS",
  "Google Fonts",
  "Cinema 4D",
  "Spline"
];
  const workflow = [
  {
    "step": "A",
    "title": "Market Diagnostics",
    "desc": "Analyze competitor design choices and target customer demographics."
  },
  {
    "step": "B",
    "title": "Concept Drafts",
    "desc": "Draft multiple distinct vector concepts and layout frameworks."
  },
  {
    "step": "C",
    "title": "System Engineering",
    "desc": "Establish formal visual tokens, colors, and font systems."
  },
  {
    "step": "D",
    "title": "Asset Packaging",
    "desc": "Export production-ready graphic packages and guidelines."
  }
];
  const faqs = [
  {
    "question": "What assets are delivered in a branding package?",
    "answer": "You receive a complete visual guidelines document, custom logo variations, corporate typography sets, design system files (Figma format), and vector assets."
  },
  {
    "question": "How does branding integrate with web development?",
    "answer": "We translate design choices directly into Tailwind / CSS tokens, ensuring 100% visual consistency when developers build pages."
  }
];

  return (
    <ServicePageTemplate
      category="Corporate Branding"
      title="Branding & Identity Design"
      description="We establish consistent visual guidelines, digital brand parameters, and design vocabularies that command authority and trust in enterprise markets."
      heroImage="/images/team_collaboration.png"
      stats={stats}
      challenges={challenges}
      methodology={methodology}
      capabilities={capabilities}
      techStack={techStack}
      workflow={workflow}
      faqs={faqs}
    />
  );
}
