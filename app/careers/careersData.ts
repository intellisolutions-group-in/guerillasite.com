export interface JobRequisition {
  slug: string;
  title: string;
  department: string;
  hot: boolean;
  image: string;
  summary: string;
  location: string;
  type: string;
  salaryRange: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobRequisitions: JobRequisition[] = [
  {
    slug: "senior-staff-engineer-infrastructure",
    title: "Senior Staff Engineer, Infrastructure",
    department: "Engineering",
    hot: false,
    image: "/images/job_infrastructure_engineer.png",
    summary: "Lead the design, implementation, and maintenance of our multi-cloud kubernetes clusters, global database replication, and zero-latency internal routing.",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-time",
    salaryRange: "",
    overview: "As a Senior Staff Infrastructure Engineer, you will drive the architectural evolution of our global cloud orchestration framework. You will partner with our product teams to deliver sub-millisecond route resolution, multi-cloud clusters, and robust zero-trust database replication.",
    responsibilities: [
      "Design, provision, and maintain secure infrastructure across AWS and GCP networks.",
      "Develop tooling and custom controllers to manage and auto-scale Kubernetes deployments.",
      "Optimize latency in Kafka streaming clusters and relational DB replication layers.",
      "Mentor staff engineers and audit pipeline security vectors."
    ],
    requirements: [
      "10+ years experience in distributed systems architecture and site reliability engineering.",
      "Deep expertise in Kubernetes, Terraform, Go, and Kafka.",
      "Strong understanding of Linux networking, BGP routing, and Linux kernel tuning.",
      "Proven track record of managing multi-million dollar cloud infrastructure budgets."
    ]
  },
  {
    slug: "cloud-solutions-architect",
    title: "Cloud Solutions Architect",
    department: "Consulting",
    hot: false,
    image: "/images/job_solutions_architect.png",
    summary: "Consult with enterprise clients to architect scalable cloud migration programs, migrate legacy databases, and implement DevOps blueprints.",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-time",
    salaryRange: "",
    overview: "As a Cloud Solutions Architect, you will act as a trusted advisor to our enterprise clients. You will lead technical discovery sessions, design blueprint systems, and guide engineering divisions to execute seamless migrations.",
    responsibilities: [
      "Lead technical discovery workshops and document cloud migration strategies.",
      "Architect multi-cloud hybrid solutions integrating legacy hardware with cloud endpoints.",
      "Establish DevOps blueprints, CI/CD pipeline guidelines, and IAM policies.",
      "Collaborate with client teams to troubleshoot database migration locks and routing delays."
    ],
    requirements: [
      "8+ years experience in cloud architecture consulting (AWS, Azure, or GCP expertise preferred).",
      "Strong coding skills in Python, Go, or Node.js.",
      "Experience with database migrations (Oracle/DB2 to PostgreSQL/Spanner).",
      "Outstanding client-facing presentation and technical writing skills."
    ]
  },
  {
    slug: "lead-systems-designer",
    title: "Lead Systems Designer",
    department: "Design",
    hot: true,
    image: "/images/job_systems_designer.png",
    summary: "Design clean interactive design systems, brand identity guidelines, and wireframes for complex dashboard telemetry interfaces.",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-time",
    salaryRange: "",
    overview: "As the Lead Systems Designer, you will own the user experience and design tokens for our enterprise client platforms. You will design data-dense dashboards, construct flexible typography tokens, and coordinate with engineering to maintain design integrity.",
    responsibilities: [
      "Design intuitive dashboards, interactive charts, and system wireframes.",
      "Own and scale our Figma design systems, establishing reusable component tokens.",
      "Validate UX designs via user research and screen interaction heatmaps.",
      "Collaborate with frontend engineers to build exact CSS implementations."
    ],
    requirements: [
      "6+ years experience designing complex web dashboards, SaaS platforms, or financial software.",
      "Advanced proficiency with Figma, design system structures, and interaction variables.",
      "Strong understanding of CSS/HTML and frontend layout capabilities.",
      "A portfolio demonstrating high-contrast, data-dense, minimalist UI designs."
    ]
  }
];

export const getJobBySlug = (slug: string): JobRequisition | undefined => {
  return jobRequisitions.find(job => job.slug === slug);
};
