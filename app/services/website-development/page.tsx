import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Page Load Speed",
    "value": "<0.6s"
  },
  {
    "label": "Lighthouse Index",
    "value": "100/100"
  },
  {
    "label": "Code Portability",
    "value": "100%"
  }
];
  const challenges = [
  {
    "title": "Slow Page Loading",
    "desc": "Heavy legacy server frameworks block page rendering, losing visitors."
  },
  {
    "title": "Broken Responsive Layouts",
    "desc": "Buttons and text boxes overlapping on mobile viewports."
  },
  {
    "title": "Fragile Static Compiling",
    "desc": "Lack of server actions and dynamic database content in static builds."
  }
];
  const methodology = {
  "title": "Next.js Static Assembly",
  "desc": "We build websites utilizing Next.js App Router and static HTML compilation.\n\nBy shipping zero client-side JavaScript by default and styling with Tailwind, we ensure sub-second page loads and responsive visual layout alignment.",
  "image": "/images/systems_architect.png"
};
  const capabilities = [
  {
    "title": "Next.js Web Applications",
    "desc": "Building fast, dynamic pages with Server Actions and static builds.",
    "icon": "javascript"
  },
  {
    "title": "Responsive UI Styling",
    "desc": "Creating layouts that adjust seamlessly to mobile, tablet, and wide monitors.",
    "icon": "devices"
  },
  {
    "title": "API Gateway Sync",
    "desc": "Connecting frontends to databases via secure REST or GraphQL.",
    "icon": "swap_horiz"
  },
  {
    "title": "Edge Asset Delivery",
    "desc": "Caching static pages on global CDN nodes to speed up load times.",
    "icon": "flash_on"
  }
];
  const techStack = [
  "Next.js",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Node.js",
  "Go",
  "Cloudflare"
];
  const workflow = [
  {
    "step": "A",
    "title": "Wireframe Handshake",
    "desc": "Review Figma mockups and confirm Tailwind configuration tokens."
  },
  {
    "step": "B",
    "title": "API Assembly",
    "desc": "Write type-safe API gateways and set up database triggers."
  },
  {
    "step": "C",
    "title": "Component Assembly",
    "desc": "Assemble responsive UI components using Next.js and Tailwind."
  },
  {
    "step": "D",
    "title": "Edge Deployment",
    "desc": "Deploy to CDN edge servers and run speed audits."
  }
];
  const faqs = [
  {
    "question": "Why do you use Next.js for corporate websites?",
    "answer": "Next.js pre-renders pages into static HTML. This ensures fast loads, high search rankings, and zero database stress."
  },
  {
    "question": "How do you manage client edits?",
    "answer": "We connect static pages to headless CMS backends (like Sanity/Strapi), letting clients edit text easily."
  }
];

  return (
    <ServicePageTemplate
      category="Web Engineering"
      title="Website Development & Web Apps"
      description="We engineer high-speed static websites and complex React applications, compiled for speed, responsive design, and search ranking."
      heroImage="/images/frontend_dev_workspace.png"
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
