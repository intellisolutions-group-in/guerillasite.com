import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Deployment Speed",
    "value": "<8m"
  },
  {
    "label": "Release Success Rate",
    "value": "99.9%"
  },
  {
    "label": "Rollback Recovery",
    "value": "Sub-60s"
  }
];
  const challenges = [
  {
    "title": "Fragile Deployment Sprints",
    "desc": "Updating production manually via SSH causes configuration drift and system breaks."
  },
  {
    "title": "Slow Developer Feedback",
    "desc": "CI runs that take an hour to run unit tests block developer momentum and releases."
  },
  {
    "title": "Missing Telemetry",
    "desc": "Deploying code updates blindly without error-rate or memory alarms."
  }
];
  const methodology = {
  "title": "Infrastructure Declarative Operations",
  "desc": "We build fully automated pipelines that deploy code changes on pull requests.\n\nEvery commit triggers lint checks, security scanning, and unit testing before containerizing the application and deploying to auto-healing clusters with zero downtime.",
  "image": "/images/systems_architect.png"
};
  const capabilities = [
  {
    "title": "Automated CI Pipelines",
    "desc": "Writing GitHub Actions and GitLab CI rules to test code on commit.",
    "icon": "autorenew"
  },
  {
    "title": "Docker Setup",
    "desc": "Containerizing system modules to run consistently across servers.",
    "icon": "layers_clear"
  },
  {
    "title": "Active Monitoring",
    "desc": "Setting up Prometheus and Grafana boards to monitor CPU and error rates.",
    "icon": "monitoring"
  },
  {
    "title": "Kubernetes Orchestration",
    "desc": "Auto-scaling containers to handle sudden traffic load spikes.",
    "icon": "grid_view"
  }
];
  const techStack = [
  "GitHub Actions",
  "GitLab CI",
  "Prometheus",
  "Grafana",
  "Docker",
  "Kubernetes",
  "Argocd"
];
  const workflow = [
  {
    "step": "A",
    "title": "Pipeline Audit",
    "desc": "Review current build processes and locate build slowdowns."
  },
  {
    "step": "B",
    "title": "Docker Packaging",
    "desc": "Package the code in secure, minimal container images."
  },
  {
    "step": "C",
    "title": "CI Automation",
    "desc": "Write test and scanning tasks to run on commit triggers."
  },
  {
    "step": "D",
    "title": "CD Orchestration",
    "desc": "Set up GitOps (ArgoCD) to sync repository state to clusters."
  }
];
  const faqs = [
  {
    "question": "What is GitOps?",
    "answer": "A workflow where Git repositories act as the single source of truth for infrastructure configuration files."
  },
  {
    "question": "How do you prevent configuration drift?",
    "answer": "All servers are configured immutable. Manual changes are disabled, and updates are run strictly via Git pipelines."
  }
];

  return (
    <ServicePageTemplate
      category="Platform Engineering"
      title="DevOps & Continuous Integration"
      description="We automate deployment pipelines, coordinate container clustering, and build platform tooling to speed up developer release velocity."
      heroImage="/images/cloud_cluster_nodes.png"
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
