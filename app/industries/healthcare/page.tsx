import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      category="Healthcare Vertical"
      title="Data-Driven Patient Care Systems"
      description="A secure, HIPAA-compliant platform engineered for modern healthcare management, patient data integrity, and seamless telemedicine integration."
      heroImage="/images/hero_server_room.png"
      stats={[
        { value: "100%", label: "HIPAA & GDPR Compliance" },
        { value: "99.99%", label: "API Sync SLA Uptime" },
        { value: "50+", label: "Active EHR Integrations" }
      ]}
      challenges={[
        { title: "Data Privacy & Compliance", desc: "Ensuring rigorous compliance with HIPAA and GDPR standards while maintaining seamless, secure data access for authorized clinical staff." },
        { title: "Fragmented EHR Records", desc: "Overcoming isolated silo databases across legacy hospitals to form a single, unified, real-time longitudinal patient record." },
        { title: "Administrative Burden", desc: "Reducing manual paperwork overhead and inefficient clinical software layouts that cause physician burnout and inflate operational overhead." }
      ]}
      methodology={{
        title: "HIPAA-Grade Security & Scalable Sync",
        desc: "We engineer healthcare platforms with a security-first stance. By utilizing end-to-end data encryption (AES-256 in transit and at rest), isolated virtual private clouds, and strict OAuth2 clinical access layers, we verify patient safety boundaries. Integration pipelines pull patient data streams from HL7/FHIR servers via asynchronous queue architectures.",
        image: "/images/system_architecture_diagram.png"
      }}
      capabilities={[
        { title: "FHIR API Hubs", desc: "Constructing scalable modern Fast Healthcare Interoperability Resources (FHIR) gateways mapping legacy records to type-safe JSON payloads.", icon: "api" },
        { title: "Real-Time Patient Vitals", desc: "Deploying secure, low-latency telemetry ingestion lines to capture and display patient monitoring metrics instantly.", icon: "monitor_heart" },
        { title: "Secure EHR Data Lakes", desc: "Consolidating structured clinical records and unstructured doctor annotations into encrypted, query-optimized analytical hubs.", icon: "storage" },
        { title: "Clinical Anomaly Alerts", desc: "Running predictive rules against vital telemetry loops to trigger warning notifications before patient conditions worsen.", icon: "notifications_active" }
      ]}
      techStack={["Next.js", "TypeScript", "PostgreSQL", "AWS PrivateLink", "Docker", "Apache Kafka", "Redis"]}
      workflow={[
        { step: "01", title: "Compliance Gap Analysis", desc: "Reviewing legacy database structures and access endpoints against strict HIPAA and security guidelines." },
        { step: "02", title: "FHIR Gateway Mapping", desc: "Writing parser modules to convert HL7 protocols into clean, JSON-based FHIR structures for modern frontend consumption." },
        { step: "03", title: "Scale & Penetration Testing", desc: "Simulating system queries under heavy peak traffic while executing security audits to discover potential leaks." },
        { step: "04", title: "Zero-Downtime EMR Launch", desc: "Phased deployment of synchronization scripts to populate production databases with zero disruptions to active care." }
      ]}
      faqs={[
        { question: "How is patient data protected inside the platform?", answer: "All data is encrypted using military-grade AES-256 encryption at rest and TLS 1.3 in transit. Network access is restricted to authorized VPN tunnels via AWS PrivateLink, ensuring complete isolation from public routes." },
        { question: "Does the system support HL7 and FHIR specifications?", answer: "Yes. Our integration engine parses old HL7 V2 messages and translates them dynamically into standard FHIR R4 JSON schemas, matching the latest interoperability mandates." },
        { question: "Can we integrate with Epic or Cerner platforms?", answer: "Yes. We construct secure API wrappers utilizing OAuth2 consent flows to securely push and pull EHR information with mainstream EMR platforms." }
      ]}
    />
  );
}
