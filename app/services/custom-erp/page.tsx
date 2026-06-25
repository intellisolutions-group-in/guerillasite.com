import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Uptime Target",
    "value": "99.99%"
  },
  {
    "label": "Operational Speed",
    "value": "2.5x"
  },
  {
    "label": "Data Consistency",
    "value": "100%"
  }
];
  const challenges = [
  {
    "title": "Fragmented Accounting",
    "desc": "Using separate software for sales and accounting leads to data mismatch."
  },
  {
    "title": "Inventory Mismatch",
    "desc": "Lagging inventory updates cause supply shortages and delay fulfillment."
  },
  {
    "title": "Manual Compliance Logs",
    "desc": "Generating audit reports manually takes days and increases compliance risks."
  }
];
  const methodology = {
  "title": "Unified Operations Engine",
  "desc": "We design custom ERP databases that operate as a single source of truth.\n\nBy uniting sales, warehouse logs, accounting tables, and compliance rules in a single system, we eliminate digital bottlenecks and allow automation of operations across departments.",
  "image": "/images/database_network.png"
};
  const capabilities = [
  {
    "title": "Inventory Tracking",
    "desc": "Real-time logging of stock levels, warehouse allocations, and reorder levels.",
    "icon": "inventory"
  },
  {
    "title": "Automated Billing",
    "desc": "Generating financial reports, tax invoices, and balance ledgers.",
    "icon": "receipt_long"
  },
  {
    "title": "HR Administration",
    "desc": "Tracking employee metrics, payroll runs, and department structures.",
    "icon": "badge"
  },
  {
    "title": "Supply Chain Twin",
    "desc": "Simulating order logistics and optimizing fulfillment routes.",
    "icon": "account_tree"
  }
];
  const techStack = [
  "React",
  "Python",
  "PostgreSQL",
  "Kafka",
  "Docker",
  "Go",
  "AWS"
];
  const workflow = [
  {
    "step": "A",
    "title": "Audit & Discovery",
    "desc": "Review business databases and map cross-department logic."
  },
  {
    "step": "B",
    "title": "Database Engineering",
    "desc": "Engineer ACID-compliant schemas to ensure transaction safety."
  },
  {
    "step": "C",
    "title": "Module Development",
    "desc": "Build custom accounting, inventory, and HR panels."
  },
  {
    "step": "D",
    "title": "System Integration",
    "desc": "Sync modules and run integration tests before deployment."
  }
];
  const faqs = [
  {
    "question": "How do you ensure financial records are audit-ready?",
    "answer": "We enforce strict database ledger patterns: financial rows are immutable and write-only, providing a perfect audit trail."
  },
  {
    "question": "Can this ERP integrate with industrial barcode scanners?",
    "answer": "Yes. We build native device integrations that process hardware inputs directly via WebSockets under 20ms."
  }
];

  return (
    <ServicePageTemplate
      category="Enterprise Systems"
      title="Custom ERP Systems"
      description="We build unified Enterprise Resource Planning software to centralize inventory, automate accounting, manage human resources, and track supply chains."
      heroImage="/images/erp_operations_control.png"
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
