export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  metrics: string[];
  stack: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  images?: { src: string; alt: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "edtech-qa",
    title: "EdTech QA Automation",
    tagline: "Cloud-native test automation pipeline for an educational platform on AWS",
    description:
      "End-to-end QA automation suite built for an EdTech company, containerized with Docker and deployed on AWS Fargate. Tests run automatically on every code push, with reports stored in S3 and logs centralized in CloudWatch.",
    problem:
      "Validating the platform across multiple user roles (teachers, administrators, coordinators) required manual QA sessions after every release — slow, inconsistent, and impossible to scale as the product grew.",
    solution:
      "Built a Playwright + pytest test suite following Page Object Model architecture. Containerized with Docker and deployed serverlessly on AWS Fargate via CI/CD. Every push triggers automatic execution across all user profiles, uploading HTML reports and screenshots to S3 with execution logs streamed to CloudWatch.",
    result:
      "Full platform validation — login, module navigation, PowerBI dashboards, evaluation grids — now runs in under 10 minutes automatically. Zero manual QA sessions required post-deploy. Evidence permanently stored and accessible to the whole team.",
    metrics: [
      "100% pass rate across login, navigation, content and screenshots",
      "7–10 min automated validation vs hours of manual testing",
      "Triggers automatically on every code push via CI/CD",
      "HTML reports + screenshots stored in S3, logs in CloudWatch",
    ],
    stack: ["Python", "Playwright", "pytest", "Docker", "AWS Fargate", "AWS Lambda", "AWS S3", "AWS CloudWatch", "CI/CD"],
    category: "Cloud QA",
    featured: true,
  },
  {
    id: "pallet-automation",
    title: "Aerospace Freight Automation",
    tagline: "End-to-end BOL generation pipeline for aerospace shipments",
    description:
      "A fully automated logistics pipeline for an aerospace company that monitors a Gmail inbox, processes ERP Excel reports, generates Bill of Lading documents, and delivers them via email — all without manual intervention.",
    problem:
      "Each weekly aerospace pallet shipment required manually downloading an ERP report, cleaning data, calculating totals, filling out a BOL template, and emailing it — a repetitive 20-minute process prone to human error.",
    solution:
      "Built a Python daemon that polls Gmail via IMAP every 60 seconds. When a forwarded pallet email with an ERP Excel attachment is detected, it automatically cleans the data, fills the BOL template, and sends the completed documents for review.",
    result:
      "The entire pipeline completes in under 3 seconds. The process runs 24/7 as a macOS system service (LaunchAgent), requiring zero manual steps after the initial email forward.",
    metrics: [
      "< 3 seconds end-to-end processing",
      "100% reduction in manual BOL preparation",
      "Runs 24/7 as a system service — no manual restart needed",
    ],
    stack: ["Python", "pandas", "openpyxl", "IMAP/SMTP", "macOS LaunchAgent"],
    category: "Aerospace · Logistics",
    githubUrl: "https://github.com/CFCT95/pallet-automation",
    featured: true,
  },
];
