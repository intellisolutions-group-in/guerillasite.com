import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Accuracy Rating",
    "value": "99.8%"
  },
  {
    "label": "Throughput Boost",
    "value": "10x"
  },
  {
    "label": "Active Agents",
    "value": "1,200+"
  }
];
  const challenges = [
  {
    "title": "Manual Processing",
    "desc": "Human-dependent data sorting causes massive delays and high error rates at scale."
  },
  {
    "title": "Reactive Scaling",
    "desc": "Responding to demand spikes after they happen leads to system downtime and resource waste."
  },
  {
    "title": "Disorganized Analytics",
    "desc": "Vast amounts of unstructured logs and data remain unutilized and hidden."
  }
];
  const methodology = {
  "title": "Cognitive Workflow Automation",
  "desc": "Our approach centers on embedding lightweight, fine-tuned models directly inside operational pipelines.\n\nWe design end-to-end telemetry systems that continuous-train agentic neural nets, allowing systems to preemptively load-balance, auto-correct errors, and automate decision-making without manual intervention.",
  "image": "/images/seo_code_optimization.png"
};
  const capabilities = [
  {
    "title": "Predictive Modeling",
    "desc": "Forecasting market patterns, device failures, and resource demand curves.",
    "icon": "trending_up"
  },
  {
    "title": "Natural Language processing",
    "desc": "Semantic understanding, automated document classification, and agent chat.",
    "icon": "forum"
  },
  {
    "title": "Computer Vision Systems",
    "desc": "Real-time defect tracking, automated optical recognition, and security monitoring.",
    "icon": "center_focus_strong"
  },
  {
    "title": "Autonomous AI Agents",
    "desc": "Multi-agent orchestration executing complex, multi-step logical logic.",
    "icon": "smart_toy"
  }
];
  const techStack = [
  "PyTorch",
  "TensorFlow",
  "OpenAI API",
  "HuggingFace",
  "Python",
  "LangChain",
  "FastAPI"
];
  const workflow = [
  {
    "step": "A",
    "title": "Telemetry Discovery",
    "desc": "Audit pipelines to capture hidden unstructured data footprints."
  },
  {
    "step": "B",
    "title": "Model Selection",
    "desc": "Select and fine-tune models to match precision requirements."
  },
  {
    "step": "C",
    "title": "Agent Integration",
    "desc": "Embed multi-agent loops directly into API endpoints."
  },
  {
    "step": "D",
    "title": "SLA Verification",
    "desc": "Load test models under 10x traffic to verify latency limits."
  }
];
  const faqs = [
  {
    "question": "How do you ensure AI model accuracy in production?",
    "answer": "We deploy active drift monitoring probes. If the model's accuracy drops below 98%, telemetry systems trigger auto-training jobs on fresh datasets."
  },
  {
    "question": "Can these agents integrate with legacy CRM/ERP systems?",
    "answer": "Yes. We wrap legacy database triggers in custom API endpoints, enabling LLM agents to read and write records securely."
  }
];

  return (
    <ServicePageTemplate
      category="Artificial Intelligence"
      title="AI & Machine Learning Solutions"
      description="We build next-generation predictive algorithms, deep learning models, and autonomous agent systems to solve complex business operations and scale workflows."
      heroImage="/images/systems_architect_board.png"
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
