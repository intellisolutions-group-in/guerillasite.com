import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "ROI Improvement",
    "value": "+45%"
  },
  {
    "label": "Lead Conversions",
    "value": "120K+"
  },
  {
    "label": "Attribution Accuracy",
    "value": "98%"
  }
];
  const challenges = [
  {
    "title": "Wasted Advertising Budget",
    "desc": "Bidding blindly on general terms without tracking actual sale conversions."
  },
  {
    "title": "Mismatched Messaging",
    "desc": "Sending high-value ads to generic home pages instead of tailored landing pages."
  },
  {
    "title": "Broken Lead Funnels",
    "desc": "Complex forms and slow load speeds cause users to abandon signup flows."
  }
];
  const methodology = {
  "title": "Performance Attribution Modeling",
  "desc": "We build marketing funnels backed by strict analytics.\n\nBy setting up Server-Side GTM tracking, optimizing landing page core web vitals, and targeting intent keywords, we ensure ad budgets convert directly to sales.",
  "image": "/images/marketing_team_office.png"
};
  const capabilities = [
  {
    "title": "Lead Funnel Design",
    "desc": "Building high-performance landing pages optimized for mobile conversions.",
    "icon": "filter_alt"
  },
  {
    "title": "Ad Optimization",
    "desc": "Managing keyword lists, audience targeting, and bids on Google & Meta.",
    "icon": "campaign"
  },
  {
    "title": "Server-Side Analytics",
    "desc": "Deploying first-party tracking tags that bypass browser ad blocks.",
    "icon": "analytics"
  },
  {
    "title": "Email Marketing Automation",
    "desc": "Setting up drip campaigns based on user database actions.",
    "icon": "mail_outline"
  }
];
  const techStack = [
  "Google Ads",
  "Meta Ads Manager",
  "Google Analytics 4",
  "GTM Server-Side",
  "HubSpot",
  "Zapier"
];
  const workflow = [
  {
    "step": "A",
    "title": "Funnel Discovery",
    "desc": "Audit target customer keywords and current landing page speeds."
  },
  {
    "step": "B",
    "title": "Tracking Setup",
    "desc": "Deploy first-party server-side tracking cookies."
  },
  {
    "step": "C",
    "title": "Landing Page Build",
    "desc": "Design and build fast, responsive landing pages."
  },
  {
    "step": "D",
    "title": "Ad Activation",
    "desc": "Launch targeted ad campaigns and optimize bids weekly."
  }
];
  const faqs = [
  {
    "question": "How does GTM Server-Side help tracking?",
    "answer": "It sends analytics data directly from your server rather than the browser, bypassing ad-blockers and improving data accuracy."
  },
  {
    "question": "What is the timeline to see ad results?",
    "answer": "Initial traffic starts instantly. Bidding algorithms require 14 days of data to optimize for maximum ROI."
  }
];

  return (
    <ServicePageTemplate
      category="Digital Growth"
      title="Digital Marketing Campaigns"
      description="We run high-conversion search campaigns, deploy lead capture systems, and build data attribution pipelines to maximize ROI."
      heroImage="/images/digital_marketing_analytics.png"
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
