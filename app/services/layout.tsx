import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Engineering Services",
  description: "Explore our range of enterprise-grade software services: custom CRM/ERP development, cloud infrastructure design, zero-trust cybersecurity hardening, and AI/ML integrations.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Enterprise Engineering Services | Guerilla Site",
    description: "Explore our range of enterprise-grade software services: custom CRM/ERP development, cloud infrastructure design, zero-trust cybersecurity hardening, and AI/ML integrations.",
    url: "https://guerillasite.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
