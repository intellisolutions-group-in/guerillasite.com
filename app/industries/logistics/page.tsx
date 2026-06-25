import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      category="Logistics Vertical"
      title="Autonomous Dispatch & Routing Systems"
      description="Real-time fleet orchestration and predictive routing platforms designed to eliminate logistics overhead and optimize supply chains."
      heroImage="/images/datacenter_racks.png"
      stats={[
        { value: "22%+", label: "Route Cost Reduction" },
        { value: "10k+", label: "Active Fleet Nodes Connected" },
        { value: "< 5ms", label: "Dynamic Re-route Latency" }
      ]}
      challenges={[
        { title: "Dynamic Route Latency", desc: "Delays in calculating route adjustments due to traffic or weather anomalies cause supply chain congestion and waste fuel." },
        { title: "Real-Time Tracking Gaps", desc: "Legacy cellular trackers suffer from sync loss, introducing security risks and tracking discrepancies in trans-continental shipments." },
        { title: "Inefficient Twins", desc: "Lack of simulated representation makes it difficult to model distribution scenarios, leading to inventory bottlenecks." }
      ]}
      methodology={{
        title: "Predictive Graph Analytics & Ingestion",
        desc: "We approach logistics optimization by converting networks into dynamic mathematical graphs. By integrating Redis-backed caching with custom Dijkstra-variant search algorithms, our engines recalculate route vectors under 5ms. Ingestion streams process high-frequency GPS coordinate ticks from active trucks via Kafka message brokers.",
        image: "/images/systems_architect.png"
      }}
      capabilities={[
        { title: "Dynamic Graph Routing", desc: "Bespoke routing engines utilizing real-time traffic streams to dispatch drivers along path-optimal vectors.", icon: "route" },
        { title: "Autonomous Telemetry Hubs", desc: "Ingesting thousands of raw GPS, temperature, and speed logs per second with automatic anomaly detection filters.", icon: "sensors" },
        { title: "Supply Chain Twin", desc: "Constructing reactive virtual maps of warehousing clusters to simulate cargo throughput and predict dispatch bottlenecks.", icon: "account_tree" },
        { title: "Fleet Management Dashboard", desc: "High-fidelity, responsive map interfaces showing active trucks, driver status, and compliance logs in one screen.", icon: "dashboard" }
      ]}
      techStack={["Go (Golang)", "Redis Stack", "Apache Kafka", "PostgreSQL", "Terraform", "Docker", "Python ML"]}
      workflow={[
        { step: "01", title: "Route Vector Mapping", desc: "Analyzing warehouse nodes, transport corridors, and traffic sources to build the core network graph model." },
        { step: "02", title: "Simulation Twin Setup", desc: "Deploying the digital twins database to simulate warehousing throughput and model routing algorithms under traffic surges." },
        { step: "03", title: "Fleet Ingestion Integration", desc: "Deploying telemetry receivers on IoT hardware to pipe cellular GPS streams into the Kafka ingestion cluster." },
        { step: "04", title: "Active Control Launch", desc: "Switching route optimization engines into active production, delivering real-time re-route suggestions to mobile apps." }
      ]}
      faqs={[
        { question: "How does the system handle lost connection during transport?", answer: "Our mobile edge applications cache tracking coordinates locally inside SQLite databases. Once cellular connection is restored, logs are batch-synced to the central Kafka queues with accurate timestamps." },
        { question: "What routing algorithms do you use?", answer: "We leverage custom variants of the A* and Contraction Hierarchies search algorithms built on C++ and Go, enabling our servers to evaluate millions of graph vertices within milliseconds." },
        { question: "Can the system monitor temperature-sensitive cargo?", answer: "Yes. Our telemetry ingestion pipelines support custom IoT metrics, letting operators monitor cold-chain parameters (temperature, humidity) and trigger automated alerts on threshold breaches." }
      ]}
    />
  );
}
