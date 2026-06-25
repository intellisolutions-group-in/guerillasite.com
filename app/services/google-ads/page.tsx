import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Conversion Rate",
    "value": "+24%"
  },
  {
    "label": "Cost-Per-Lead Cut",
    "value": "-30%"
  },
  {
    "label": "Monthly Impressions",
    "value": "15M+"
  }
];
  const challenges = [
  {
    "title": "Irrelevant Search Clicks",
    "desc": "Broad match settings capture irrelevant traffic, consuming advertising budget."
  },
  {
    "title": "Low Quality Scores",
    "desc": "Slow landing page loads and bad ad-text relevance raise bid costs."
  },
  {
    "title": "Attribution Gap",
    "desc": "Inability to connect PPC clicks to sales dashboard deals."
  }
];
  const methodology = {
  "title": "Intent-Targeted Bidding Framework",
  "desc": "We build exact-match PPC campaigns targeting high-intent buyer searches.\n\nEvery ad group points to an optimized landing page, raising Google Quality Scores to lower bid costs and maximize lead conversions.",
  "image": "/images/advertiser_hands_keyboard.png"
};
  const capabilities = [
  {
    "title": "Search Ads Optimization",
    "desc": "Targeting specific search keywords that buyer prospects use.",
    "icon": "ads_click"
  },
  {
    "title": "Quality Score Tuning",
    "desc": "Optimizing pages to lower bidding costs.",
    "icon": "insights"
  },
  {
    "title": "Attribution Pipelines",
    "desc": "Syncing Google Ads data directly to sales HubSpot dashboards.",
    "icon": "join_right"
  },
  {
    "title": "Retargeting Campaigns",
    "desc": "Displaying relevant ads to past landing page visitors.",
    "icon": "replay"
  }
];
  const techStack = [
  "Google Ads",
  "GTM",
  "GA4",
  "HubSpot",
  "Google Sheets API",
  "Optimizely"
];
  const workflow = [
  {
    "step": "A",
    "title": "Keyword Analysis",
    "desc": "Audit search volumes, bids, and competitor ad strategies."
  },
  {
    "step": "B",
    "title": "Account Structure",
    "desc": "Build highly relevant ad campaigns and ad groups."
  },
  {
    "step": "C",
    "title": "Conversion Tracking",
    "desc": "Configure exact conversion tracking on checkout buttons."
  },
  {
    "step": "D",
    "title": "Bidding Tuning",
    "desc": "Launch campaigns and run A/B copy tests weekly."
  }
];
  const faqs = [
  {
    "question": "How do you improve Google Quality Score?",
    "answer": "By optimizing landing page mobile load speeds, structuring header hierarchies, and matching ad text to search queries."
  },
  {
    "question": "Do you manage negative keywords?",
    "answer": "Yes. We filter out irrelevant searches daily to ensure ad spend goes only to buyers."
  }
];

  return (
    <ServicePageTemplate
      category="Search Marketing"
      title="Google Ads & PPC Management"
      description="We structure Google search and display campaigns, design intent-focused ad groups, and optimize bid parameters to maximize business leads."
      heroImage="/images/advertiser_hands_keyboard.png"
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
