import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Vulnerability Resolution",
    "value": "100%"
  },
  {
    "label": "Response SLA",
    "value": "<15m"
  },
  {
    "label": "Threat Block Rate",
    "value": "99.9%"
  }
];
  const challenges = [
  {
    "title": "Compromised Access Control",
    "desc": "Weak user permission rules expose confidential files to unauthorized users."
  },
  {
    "title": "Undetected Lateral Movement",
    "desc": "Hackers inside a flat network move freely between systems without triggering alarms."
  },
  {
    "title": "Compliance Violations",
    "desc": "Failure to satisfy industry-standard security guidelines risks massive fines."
  }
];
  const methodology = {
  "title": "Zero-Trust Architecture",
  "desc": "We operate under the assumption that the network is always compromised.\n\nWe design micro-segmented layouts, implement multi-factor credential requirements (MFA) at every API layer, and run continuous telemetry monitoring to track and neutralize anomalies instantly.",
  "image": "/images/cloud_server_racks.png"
};
  const capabilities = [
  {
    "title": "Penetration Testing",
    "desc": "Simulating real cyber attacks to find vulnerabilities before bad actors do.",
    "icon": "shield"
  },
  {
    "title": "Access Management",
    "desc": "Enforcing fine-grained Role-Based Access Control (RBAC) and SSO.",
    "icon": "admin_panel_settings"
  },
  {
    "title": "Data Encryption",
    "desc": "Encrypting files at rest and in transit via advanced cryptographic layers.",
    "icon": "vpn_key"
  },
  {
    "title": "Compliance Audits",
    "desc": "Aligning your servers to satisfy industry-standard security guidelines.",
    "icon": "verified_user"
  }
];
  const techStack = [
  "Snort",
  "Wireshark",
  "Vault",
  "Cloudflare",
  "OpenSSL",
  "Wazuh",
  "Linux"
];
  const workflow = [
  {
    "step": "A",
    "title": "System Audit",
    "desc": "Audit your servers and code to map vulnerability exposure."
  },
  {
    "step": "B",
    "title": "Access Segmenting",
    "desc": "Implement micro-segmentation and lock down port rules."
  },
  {
    "step": "C",
    "title": "Cryptography Setup",
    "desc": "Deploy TLS, database encryption, and KMS keys."
  },
  {
    "step": "D",
    "title": "Penetration Testing",
    "desc": "Attack the updated system to verify security strength."
  }
];
  const faqs = [
  {
    "question": "How often should penetration tests be conducted?",
    "answer": "We recommend full external audits annually, and automated vulnerability scanning after every major code release."
  },
  {
    "question": "What is Zero-Trust Architecture?",
    "answer": "A security model where every request is authenticated and authorized before granting access, regardless of source location."
  }
];

  return (
    <ServicePageTemplate
      category="Digital Security"
      title="Cybersecurity Engineering"
      description="We deploy zero-trust network setups, implement proactive threat prevention, and run penetration testing to secure enterprise data."
      heroImage="/images/cyber_security_shield.png"
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
