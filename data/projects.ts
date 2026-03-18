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
    id: "pallet-automation",
    title: "Pallet QC Automation",
    tagline: "End-to-end BOL generation pipeline triggered by email",
    description:
      "A fully automated pipeline that monitors a Gmail inbox, processes ERP Excel reports, generates Bill of Lading documents, and delivers them via email — all without manual intervention.",
    problem:
      "Each weekly pallet shipment required manually downloading an ERP report, cleaning data, calculating totals, filling out a BOL template, and emailing it — a repetitive 20-minute process prone to human error.",
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
    category: "Automation",
    githubUrl: "https://github.com/CFCT95/pallet-automation",
    images: [
      { src: "/images/bol-output.png",   alt: "Generated Bill of Lading document" },
      { src: "/images/erp-report.png",   alt: "Raw ERP Excel report (input)" },
      { src: "/images/email-trigger.png", alt: "Email trigger and delivery flow" },
    ],
    featured: true,
  },
];
