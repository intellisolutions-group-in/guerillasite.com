import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      category="Manufacturing Vertical"
      title="Industrial IoT & Predictive Twin Systems"
      description="Connecting physical factory floors to real-time digital twins. Proactively predict machine fatigue and optimize production pipelines."
      heroImage="/images/iiot_digital_twin.png"
      stats={[
        { value: "35%+", label: "Unplanned Downtime Reduction" },
        { value: "50k+", label: "Active Sensor Nodes Connected" },
        { value: "99.999%", label: "Telemetry SLA Reliability" }
      ]}
      challenges={[
        { title: "Unplanned Asset Downtime", desc: "Sudden component failures on assembly lines cause massive supply chain disruptions and accumulate expensive operational losses." },
        { title: "Sensory Data Overflow", desc: "Thousands of IIoT Edge sensors stream millions of vibration, temperature, and current metrics daily, overwhelming legacy database architectures." },
        { title: "Industrial Integration Gaps", desc: "Legacy machinery running old PLCs and industrial protocols (Modbus, OPC-UA) struggle to communicate with cloud-based analytics dashboards." }
      ]}
      methodology={{
        title: "Real-Time Sensor Orchestration",
        desc: "We bridge the gap between heavy hardware machinery and high-fidelity cloud dashboards. Edge gateways ingest telemetry streams from Modbus and OPC-UA devices, serializing raw metrics into structured binary payloads. Data streams enter highly scalable Kafka topics, feeding timeseries database structures and predictive machine models.",
        image: "/images/datacenter_racks.png"
      }}
      capabilities={[
        { title: "IIoT Telemetry Receivers", desc: "Constructing high-frequency MQTT brokers and edge gateway connectors that ingest raw sensor logs with zero data loss.", icon: "settings_remote" },
        { title: "Predictive Analytics Models", desc: "Leveraging custom machine-learning models to analyze sensor fluctuations and predict hardware failures before they occur.", icon: "precision_manufacturing" },
        { title: "Factory Digital Twins", desc: "Building live digital representations of assembly chains, mapping physical sensory bounds to coordinate nodes on our dashboard.", icon: "hub" },
        { title: "Dynamic Warning System", desc: "Piping predictive alerts to operational engineers' mobile apps and locking assembly PLCs during critical failures.", icon: "warning" }
      ]}
      techStack={["C++ / Go", "MQTT", "Apache Kafka", "TimescaleDB", "Kubernetes", "Docker", "Python ML"]}
      workflow={[
        { step: "01", title: "Assembly Sensor Audits", desc: "Inspecting physical machinery, operational corridors, and PLC modules to map telemetry requirements." },
        { step: "02", title: "Edge Collector Gateway Setup", desc: "Deploying secure, local gateway collectors to aggregate sensory data from Modbus/OPC-UA ports." },
        { step: "03", title: "Anomaly Model Training", desc: "Training predictive models on historical vibration and temperature datasets to define precise failure thresholds." },
        { step: "04", title: "Twin Dashboard Launch", desc: "Enabling the virtual twin maps and starting live ingestion scripts under active telemetry checks." }
      ]}
      faqs={[
        { question: "How does the system connect to legacy machines?", answer: "We deploy industrial IoT edge collectors that physical bridge to serial ports (RS-485, Modbus TCP) and OPC-UA servers, converting old protocol registers to JSON formats." },
        { question: "What timeseries database does this platform use?", answer: "We implement TimescaleDB (built on PostgreSQL) paired with Redis caches to handle ingestion workloads exceeding 50,000 writes per second while enabling sub-10ms query times." },
        { question: "How secure is the Edge collector connection?", answer: "All data from the factory floor is sent over TLS 1.3 encrypted routes. Gateway nodes require client certificates (mTLS) to authenticate with the central MQTT brokers, ensuring complete network safety." }
      ]}
    />
  );
}
