import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Debt Reduction",
    "value": "40%+"
  },
  {
    "label": "SLA Alignment",
    "value": "100%"
  },
  {
    "label": "Capital Efficiency",
    "value": "1.8x"
  }
];
  const challenges = [
  {
    "title": "Accumulated Tech Debt",
    "desc": "Legacy database systems block feature additions and slow query speeds."
  },
  {
    "title": "Mismatched Software Plans",
    "desc": "Buying generic enterprise tools that don't solve actual business needs."
  },
  {
    "title": "Scale Bottlenecks",
    "desc": "Single-point-of-failure servers that crash under 3x demand load spikes."
  }
];
  const methodology = {
  "title": "Systems Telemetry Discovery",
  "desc": "We treat IT consulting as an empirical, data-driven science.\n\nWe deploy profiling scripts to map your actual database response times, compute costs, and code dependencies, presenting a concrete blueprint to modernize your systems.",
  "image": "/images/systems_architect_board.png"
};
  const capabilities = [
  {
    "title": "Debt Auditing",
    "desc": "Mapping database bottlenecks, memory leaks, and legacy modules.",
    "icon": "biotech"
  },
  {
    "title": "Software Selection",
    "desc": "Evaluating software parameters to fit your operational needs.",
    "icon": "schema"
  },
  {
    "title": "Modernization Roadmap",
    "desc": "Constructing actionable step blueprints to transition to modern systems.",
    "icon": "timeline"
  },
  {
    "title": "Disaster Planning",
    "desc": "Designing multi-region server recovery plans to prevent data loss.",
    "icon": "settings_backup_restore"
  }
];
  const techStack = [
  "Prometheus",
  "Grafana",
  "Jira",
  "Terraform",
  "Lucidchart",
  "Git",
  "Figma"
];
  const workflow = [
  {
    "step": "A",
    "title": "Telemetry Profile",
    "desc": "Analyze server resource logs and interview engineering leads."
  },
  {
    "step": "B",
    "title": "Bottleneck Mapping",
    "desc": "Pinpoint database slow queries and single points of failure."
  },
  {
    "step": "C",
    "title": "Strategy Drafting",
    "desc": "Draft a detailed migration plan with clear timeline phases."
  },
  {
    "step": "D",
    "title": "Migration Support",
    "desc": "Direct your developers during initial system deployment phases."
  }
];
  const faqs = [
  {
    "question": "How do you calculate legacy technical debt?",
    "answer": "By tracking developer time spent fixing bugs versus writing features, combined with compute bills from unoptimized code."
  },
  {
    "question": "Do you write code during strategy consultations?",
    "answer": "We write architecture blueprints and configuration scripts, acting as advisory guides for your in-house team."
  }
];

  return (
    <ServicePageTemplate
      category="Enterprise Advisory"
      title="Enterprise IT Consulting & Strategy"
      description="We analyze legacy technical debt, audit architectural bottlenecks, and construct robust technology blueprints that align with business growth."
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
