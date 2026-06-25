import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "Query Latency",
    "value": "<1.5s"
  },
  {
    "label": "Ingested Rows/Day",
    "value": "150M+"
  },
  {
    "label": "Dashboard Speed",
    "value": "Real-time"
  }
];
  const challenges = [
  {
    "title": "Disconnected Data Pools",
    "desc": "Customer trends, server logs, and financial tables are trapped in disconnected databases."
  },
  {
    "title": "Slow Dashboard Queries",
    "desc": "Running query metrics over large tables takes minutes, locking out decisions."
  },
  {
    "title": "Unreliable Data Quality",
    "desc": "Duplicate rows and missing columns skew analytics, leading to bad business calls."
  }
];
  const methodology = {
  "title": "High-Throughput Analytics Warehouses",
  "desc": "We build unified data warehouses utilizing optimal column-store indexes.\n\nBy automated extracting, transforming, and loading (ETL) operational rows into clean, verified BI tables, we enable business executives to query millions of cells in real-time.",
  "image": "/images/marketing_team_office.png"
};
  const capabilities = [
  {
    "title": "Warehouse Architecture",
    "desc": "Structuring Snowflake and BigQuery engines for fast querying.",
    "icon": "storage"
  },
  {
    "title": "ETL Pipeline Design",
    "desc": "Automating data cleaning, formatting, and database ingestion.",
    "icon": "transform"
  },
  {
    "title": "Interactive Dashboards",
    "desc": "Building custom BI views with charts, filters, and pivot controls.",
    "icon": "dashboard"
  },
  {
    "title": "Anomaly Detection",
    "desc": "Using algorithms to identify trend outliers and dropoffs instantly.",
    "icon": "warning"
  }
];
  const techStack = [
  "Snowflake",
  "dbt",
  "BigQuery",
  "Apache Spark",
  "Python",
  "Tableau",
  "Airflow"
];
  const workflow = [
  {
    "step": "A",
    "title": "Data Map",
    "desc": "Locate data tables and define key business performance indicators."
  },
  {
    "step": "B",
    "title": "Warehouse Setup",
    "desc": "Configure secure cloud warehouses with optimized data schemas."
  },
  {
    "step": "C",
    "title": "Pipeline Creation",
    "desc": "Write Airflow DAGs to execute clean and transform steps."
  },
  {
    "step": "D",
    "title": "Report Launch",
    "desc": "Design fast BI dashboards for target executive teams."
  }
];
  const faqs = [
  {
    "question": "How do you guarantee real-time query speeds?",
    "answer": "We pre-aggregate key metrics hourly and build materialized views, reducing direct dashboard query loads."
  },
  {
    "question": "Is custom data BI better than Tableau?",
    "answer": "Yes. Custom web BI panels integrate with your app, load faster, and don't require user licensing fees."
  }
];

  return (
    <ServicePageTemplate
      category="Business Intelligence"
      title="Data Analytics & BI"
      description="We engineer high-speed data warehouses, automate ETL pipelines, and design custom BI dashboards to turn raw operational logs into decisions."
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
