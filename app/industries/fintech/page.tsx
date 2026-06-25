import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      category="Fintech Vertical"
      title="Algorithmic Financial Intelligence"
      description="High-throughput analytics engines engineered for the rigorous demands of modern FinTech. AI-driven risk modeling meets zero-latency transaction monitoring."
      heroImage="/images/systems_architect_board.png"
      stats={[
        { value: "< 2ms", label: "P99 Execution Latency" },
        { value: "99.999%", label: "System Core Uptime" },
        { value: "10B+", label: "Daily Transactions Processed" }
      ]}
      challenges={[
        { title: "High-Frequency Latency", desc: "Microsecond delays in data processing can invalidate algorithmic trading strategies and compromise high-frequency execution integrity." },
        { title: "Regulatory Compliance", desc: "Constantly evolving global regulations (like KYC, AML, MiFID II) require adaptable, automated auditing trails that manual frameworks cannot support." },
        { title: "Fraud Sophistication", desc: "Legacy rule-based detection systems fail to identify multi-vector fraud attacks in real-time, risking capital security." }
      ]}
      methodology={{
        title: "Deterministic Zero-Trust Engineering",
        desc: "We approach financial systems engineering with an uncompromising posture. By leveraging Go and gRPC, we minimize network protocol overhead, keeping inter-service communication under sub-millisecond boundaries. State transitions are verified against event-sourced ledgers for absolute security and auditability.",
        image: "/images/systems_architect.png"
      }}
      capabilities={[
        { title: "High-Throughput Ledgers", desc: "Double-entry event streams capable of scaling to tens of thousands of concurrent writes with ACID guarantees.", icon: "account_balance" },
        { title: "Predictive Risk Modeling", desc: "Embedded TensorFlow pipelines calculating real-time margin bounds and exposure parameters on live ticks.", icon: "query_stats" },
        { title: "Zero-Latency API Gateways", desc: "Bespoke load-balancing ingress layers engineered to throttle DDOS spikes and handle critical microservice routing.", icon: "lan" },
        { title: "Automated Compliance Audits", desc: "Continuous auditing layers generating cryptographic transaction proofs for seamless regulatory filing.", icon: "gavel" }
      ]}
      techStack={["Go (Golang)", "Apache Kafka", "gRPC / Protobuf", "PostgreSQL", "Kubernetes", "Redis", "TimescaleDB"]}
      workflow={[
        { step: "01", title: "Latency Telemetry Audit", desc: "We deploy active profiling probes to trace thread locks, allocation thrashing, and database queries under peak load scenarios." },
        { step: "02", title: "State Machine Modeling", desc: "Drafting strict mathematical representations of all ledger transitions to eliminate race conditions and floating balance states." },
        { step: "03", title: "Engine Integration & Load Testing", desc: "Full-scale stress simulations hitting 10x target transaction frequency to map latency spikes under extreme load." },
        { step: "04", title: "SLA Deployment", desc: "Pushing fault-tolerant multi-region clusters into active production under active monitoring checks." }
      ]}
      faqs={[
        { question: "How do you achieve sub-millisecond execution times?", answer: "We eliminate runtime garbage collection overhead by compiling deterministic services in Go and Rust, and bypass HTTP/REST serialization limits by utilizing binary gRPC protocol payloads over TCP streams." },
        { question: "Are your ledgers compliant with financial regulations?", answer: "Yes. Our ledger architectures implement strict double-entry record keeping and event sourcing, providing an immutable, cryptographically verifiable audit trail matching regulatory and MiFID II specifications." },
        { question: "What is your fallback strategy during regional outages?", answer: "We deploy hybrid multi-region clusters across AWS and GCP with synchronous state replication via highly-available databases, ensuring automatic database failovers with zero data loss (RPO=0)." }
      ]}
    />
  );
}
