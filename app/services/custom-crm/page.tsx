import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Data Synchronization",
    "value": "Real-time"
  },
  {
    "label": "Lead Response Speed",
    "value": "4.2x"
  },
  {
    "label": "Integration Parity",
    "value": "100%"
  }
];
  const challenges = [
  {
    "title": "Rigid Off-The-Shelf SaaS",
    "desc": "Generic software forces businesses to change their workflows to fit limitations."
  },
  {
    "title": "Disconnected Data Pools",
    "desc": "Customer touchpoints and logs are trapped in multiple unrelated platforms."
  },
  {
    "title": "Poor User Adoption",
    "desc": "Overly complex, generic UIs confuse employees and reduce data accuracy."
  }
];
  const methodology = {
  "title": "Tailored Sales Pipelines",
  "desc": "We build custom CRM portals centered around your business logic.\n\nEvery dashboard and pipeline view is structured around your team's workflow, optimizing operations and reducing data entry times while integrating seamlessly with your main database servers.",
  "image": "/images/frontend_dev_workspace.png"
};
  const capabilities = [
  {
    "title": "Custom Pipeline Layouts",
    "desc": "Structuring workflows, deal trackers, and communication timelines.",
    "icon": "view_week"
  },
  {
    "title": "Automated Integrations",
    "desc": "Linking CRM tables to databases, ERPs, email systems, and chat platforms.",
    "icon": "link"
  },
  {
    "title": "Real-time Reporting",
    "desc": "Rendering sales trends, client metrics, and staff task metrics.",
    "icon": "bar_chart"
  },
  {
    "title": "Contact Management",
    "desc": "Maintaining unified, encrypted client logs and historical communications.",
    "icon": "contact_page"
  }
];
  const techStack = [
  "Next.js",
  "Go",
  "PostgreSQL",
  "Node.js",
  "GraphQL",
  "TailwindCSS",
  "Redis"
];
  const workflow = [
  {
    "step": "A",
    "title": "Workflow Blueprint",
    "desc": "Map your existing sales cycle and define required CRM entities."
  },
  {
    "step": "B",
    "title": "API Framework Setup",
    "desc": "Build performant API gateways to manage relational tables."
  },
  {
    "step": "C",
    "title": "Dashboard Design",
    "desc": "Design simple, fast, and responsive user panels."
  },
  {
    "step": "D",
    "title": "Deployment & Training",
    "desc": "Load test database queries and onboard your core sales team."
  }
];
  const faqs = [
  {
    "question": "How secure is customer data inside custom CRMs?",
    "answer": "All records are encrypted at rest using AES-256 and in transit via TLS 1.3, with strict role-based access control (RBAC)."
  },
  {
    "question": "Can this custom CRM handle millions of client records?",
    "answer": "Yes. We configure advanced PostgreSQL database indexing and Redis read-caches to load search results under 100ms."
  }
];

  return (
    <ServicePageTemplate
      category="Enterprise CRM"
      title="Custom CRM Platforms"
      description="We engineer tailored Customer Relationship Management platforms designed to automate operations, track pipelines, and integrate with legacy business databases."
      heroImage="/images/integration_lead.png"
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
