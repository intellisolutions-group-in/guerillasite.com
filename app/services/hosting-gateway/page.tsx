import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "PCI Compliance",
    "value": "Level 1"
  },
  {
    "label": "Transaction Uptime",
    "value": "99.999%"
  },
  {
    "label": "Gateway Latency",
    "value": "<180ms"
  }
];
  const challenges = [
  {
    "title": "Transaction Dropouts",
    "desc": "Slow payment gateways and page load timeouts cause cart abandonment."
  },
  {
    "title": "Fraud Risk Exposure",
    "desc": "Lack of 3D-Secure and card scanning exposes portals to fraud charges."
  },
  {
    "title": "PCI DSS Compliance Bloat",
    "desc": "Handling card raw numbers directly exposes databases to security leaks."
  }
];
  const methodology = {
  "title": "PCI-Compliant Payment Pipelines",
  "desc": "We build payment systems that isolate sensitive card logs from your servers.\n\nBy leveraging secure tokenization (Stripe/Adyen) and hosting on micro-segmented servers, we secure financial data and reduce audit workloads.",
  "image": "/images/cloud_ops_engineer.png"
};
  const capabilities = [
  {
    "title": "Secure Payment Systems",
    "desc": "Integrating Stripe and credit card checkout flows under 200ms.",
    "icon": "credit_card"
  },
  {
    "title": "Tokenized Security",
    "desc": "Saving buyer cards securely via remote vault tokens.",
    "icon": "lock_open"
  },
  {
    "title": "Global Edge Hosting",
    "desc": "Hosting page assets on CDN nodes to guarantee speed.",
    "icon": "cloud_queue"
  },
  {
    "title": "Fraud Mitigation",
    "desc": "Configuring 3D-Secure 2.0 and radar rules to block chargebacks.",
    "icon": "gavel"
  }
];
  const techStack = [
  "Stripe API",
  "Adyen",
  "AWS KMS",
  "Docker",
  "Nginx",
  "Cloudflare CDN",
  "Redis"
];
  const workflow = [
  {
    "step": "A",
    "title": "Compliance Audit",
    "desc": "Review transaction schemas and check PCI scope requirements."
  },
  {
    "step": "B",
    "title": "Edge Server Setup",
    "desc": "Configure secure hosting with SSL, firewall, and WAF rules."
  },
  {
    "step": "C",
    "title": "Gateway Tokenization",
    "desc": "Integrate secure payment SDKs on target checkout pages."
  },
  {
    "step": "D",
    "title": "Uptime Diagnostics",
    "desc": "Verify transaction failover routes under network strain."
  }
];
  const faqs = [
  {
    "question": "How do you handle PCI DSS compliance?",
    "answer": "We use hosted fields or elements. Raw credit card data never touches your databases, minimizing security audits."
  },
  {
    "question": "Can this hosting scale during product launch surges?",
    "answer": "Yes. We configure CDN caching and autoscale cloud nodes to handle thousands of concurrent checkouts."
  }
];

  return (
    <ServicePageTemplate
      category="Infrastructure"
      title="Secure Hosting & Payment Gateways"
      description="We deploy secure hosting servers and implement transaction gateways that ensure payment compliance and fast checkouts."
      heroImage="/images/hero_server_room.png"
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
