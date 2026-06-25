import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Conversion Boost",
    "value": "+65%"
  },
  {
    "label": "Usability Score",
    "value": "94/100"
  },
  {
    "label": "Design Variables",
    "value": "200+"
  }
];
  const challenges = [
  {
    "title": "High Bounce Rates",
    "desc": "Unclear button placements and confusing layouts cause users to leave pages."
  },
  {
    "title": "Slow Development Hand-off",
    "desc": "Unstructured design mockups lead to translation errors during coding."
  },
  {
    "title": "Inconsistent Design Library",
    "desc": "Changing button shapes and colors on different pages look unprofessional."
  }
];
  const methodology = {
  "title": "Conversational UX Paradigms",
  "desc": "We design interfaces backed by user interaction science.\n\nEvery button spacing, visual hierarchy, and color density is selected to direct user focus toward conversions, packaging designs in clean Figma libraries for developer coding.",
  "image": "/images/ux_designer_wireframing.png"
};
  const capabilities = [
  {
    "title": "Interactive Prototypes",
    "desc": "Building clickable mockups in Figma to test user flows.",
    "icon": "touch_app"
  },
  {
    "title": "Visual Hierarchy Design",
    "desc": "Structuring typography and sizes to emphasize key content.",
    "icon": "format_size"
  },
  {
    "title": "Component Design Systems",
    "desc": "Structuring modular color variables and UI buttons.",
    "icon": "grid_view"
  },
  {
    "title": "Usability Diagnostics",
    "desc": "Auditing layouts using analytics and hotmaps.",
    "icon": "search_insights"
  }
];
  const techStack = [
  "Figma",
  "Adobe Illustrator",
  "Prototyping",
  "Google Fonts",
  "Tailwind Variables",
  "Zeplin"
];
  const workflow = [
  {
    "step": "A",
    "title": "User Flow Audit",
    "desc": "Audit competitor app flows and draft initial wireframes."
  },
  {
    "step": "B",
    "title": "High-Fidelity Mockups",
    "desc": "Design complete UI panels and layouts in Figma."
  },
  {
    "step": "C",
    "title": "Design Tokens Build",
    "desc": "Define colors, spacings, and font variables."
  },
  {
    "step": "D",
    "title": "Developer Hand-off",
    "desc": "Deliver clean assets, spacing specs, and style sheets."
  }
];
  const faqs = [
  {
    "question": "How do you ensure designs are easy to build?",
    "answer": "We design using Tailwind's 4px spacing variables and flex-box layouts, matching standard developer workflows."
  },
  {
    "question": "Do you test designs on actual devices?",
    "answer": "Yes. Clickable prototypes are tested on multiple iOS, Android, and desktop screen sizes."
  }
];

  return (
    <ServicePageTemplate
      category="Interface Design"
      title="UI/UX Interface Design"
      description="We design responsive wireframes, construct pixel-perfect interface libraries, and build prototypes centered on customer conversion."
      heroImage="/images/ux_designer_wireframing.png"
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
