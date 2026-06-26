import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Engineering Proof of Performance",
  description: "Read real-world case studies detailing cloud migrations, fintech real-time telemetry hubs, IIoT twin divisions, and custom enterprise CRM/ERP implementations.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Guerilla Site Proof of Performance",
    description: "Read real-world case studies detailing cloud migrations, fintech real-time telemetry hubs, IIoT twin divisions, and custom enterprise CRM/ERP implementations.",
    url: "https://guerillasite.com/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
