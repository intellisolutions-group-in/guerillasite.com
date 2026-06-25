import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Organic Traffic",
    "value": "+95%"
  },
  {
    "label": "Lighthouse Index",
    "value": "100/100"
  },
  {
    "label": "First Input Delay",
    "value": "<50ms"
  }
];
  const challenges = [
  {
    "title": "Slow Lighthouse Scores",
    "desc": "Large JavaScript bundles delay page load, lowering search rankings."
  },
  {
    "title": "Missing Schema Tags",
    "desc": "Google crawlers fail to read service categories due to missing metadata."
  },
  {
    "title": "Inefficient Site Indexing",
    "desc": "Broken link paths prevent search spiders from indexing subpages."
  }
];
  const methodology = {
  "title": "Core Web Vital Search Optimization",
  "desc": "We treat SEO as a codebase performance challenge.\n\nBy compiling static pages using Next.js, optimizing image sizes, and embedding JSON-LD metadata, we ensure 100/100 Lighthouse scores, raising search authority.",
  "image": "/images/seo_code_optimization.png"
};
  const capabilities = [
  {
    "title": "Page Speed Tuning",
    "desc": "Eliminating render-blocking assets and optimizing styles.",
    "icon": "speed"
  },
  {
    "title": "JSON-LD Metadata",
    "desc": "Injecting semantic tags to help search engines catalog services.",
    "icon": "code"
  },
  {
    "title": "Keyword Intent Mapping",
    "desc": "Locating high-volume search queries that indicate intent to buy.",
    "icon": "saved_search"
  },
  {
    "title": "Sitemap Diagnostics",
    "desc": "Configuring search crawlers and resolving broken links.",
    "icon": "lan"
  }
];
  const techStack = [
  "Next.js",
  "Lighthouse",
  "Google Search Console",
  "Screaming Frog",
  "Ahrefs",
  "Semrush"
];
  const workflow = [
  {
    "step": "A",
    "title": "Speed Audit",
    "desc": "Analyze pages using Lighthouse to locate slow assets."
  },
  {
    "step": "B",
    "title": "Metadata Layout",
    "desc": "Write custom JSON-LD schema metadata for core pages."
  },
  {
    "step": "C",
    "title": "Asset Compiling",
    "desc": "Configure image resizing and bundle minification scripts."
  },
  {
    "step": "D",
    "title": "Indexing Check",
    "desc": "Submit XML sitemaps and monitor crawling reports daily."
  }
];
  const faqs = [
  {
    "question": "Why is page speed critical for SEO?",
    "answer": "Google's Core Web Vitals directly use loading metrics (like LCP) as ranking signals. Faster sites rank higher."
  },
  {
    "question": "How long until we see organic ranking growth?",
    "answer": "Code speed changes index in 7 days. Domain search rankings climb steadily over 3 to 6 months."
  }
];

  return (
    <ServicePageTemplate
      category="Search Engineering"
      title="Technical SEO & Search Optimization"
      description="We optimize codebase schema markup, tune server response times, and target buyer keywords to capture organic search traffic."
      heroImage="/images/seo_code_optimization.png"
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
