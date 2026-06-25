import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Target Uptime SLA",
    "value": "99.99%"
  },
  {
    "label": "Migration Efficiency",
    "value": "100%"
  },
  {
    "label": "Cost Optimization",
    "value": "35%+"
  }
];
  const challenges = [
  {
    "title": "Single Points of Failure",
    "desc": "Centralized database nodes cause complete downtime during hardware failures."
  },
  {
    "title": "Escalating Resource Costs",
    "desc": "Provisioning rigid servers without autoscaling wastes thousands of dollars monthly."
  },
  {
    "title": "Slow Network Latency",
    "desc": "Lack of geo-distributed clusters increases request times for international clients."
  }
];
  const methodology = {
  "title": "Immutable Infrastructure Pipelines",
  "desc": "We build multi-region network clusters managed strictly via Infrastructure as Code (IaC).\n\nBy leveraging declarative configurations, we deploy self-healing Kubernetes nodes, load balancers, and geo-replicated databases that scale and recover automatically from hardware loss.",
  "image": "/images/cloud_ops_engineer.png"
};
  const capabilities = [
  {
    "title": "Multi-Region Setups",
    "desc": "Deploying servers across continents to guarantee low latency and backups.",
    "icon": "public"
  },
  {
    "title": "Infrastructure as Code",
    "desc": "Managing cloud setups declaratively via Terraform and CloudFormation.",
    "icon": "settings_ethernet"
  },
  {
    "title": "Serverless Scaling",
    "desc": "Configuring event-driven execution to reduce idle computation bills.",
    "icon": "cloud_done"
  },
  {
    "title": "Kubernetes Clusters",
    "desc": "Orchestrating container fleets to ensure node health and auto-recovery.",
    "icon": "view_in_ar"
  }
];
  const techStack = [
  "AWS",
  "Google Cloud",
  "Terraform",
  "Kubernetes",
  "Docker",
  "Ansible",
  "Cloudflare"
];
  const workflow = [
  {
    "step": "A",
    "title": "Load Diagnostics",
    "desc": "Evaluate current system CPU cycles, memory loads, and data flows."
  },
  {
    "step": "B",
    "title": "Architecture Blueprint",
    "desc": "Draft a multi-region network schematic with redundant data nodes."
  },
  {
    "step": "C",
    "title": "IaC Automation",
    "desc": "Write Terraform modules to manage resources programmatically."
  },
  {
    "step": "D",
    "title": "Failover Drills",
    "desc": "Run drills to verify data integrity and recovery timing under stress."
  }
];
  const faqs = [
  {
    "question": "How do you minimize migration downtime?",
    "answer": "We use dual-database pipelines. Live replication syncs databases in real-time, allowing us to redirect DNS records with zero downtime."
  },
  {
    "question": "What cloud providers do you support?",
    "answer": "We architect hybrid and native setups on Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure."
  }
];

  return (
    <ServicePageTemplate
      category="Cloud Architecture"
      title="Cloud Strategy & Architecture"
      description="We design and deploy robust, multi-region cloud systems that offer high availability, automatic scaling, and absolute operational uptime."
      heroImage="/images/datacenter_racks.png"
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
