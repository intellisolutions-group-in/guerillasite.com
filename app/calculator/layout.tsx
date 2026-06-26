import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI & Project Cost Calculator",
  description: "Calculate development and maintenance costs for greenfield software engineering, legacy modernization, or cloud migration projects.",
  alternates: {
    canonical: "/calculator",
  },
  openGraph: {
    title: "ROI & Project Cost Calculator | Guerilla Site",
    description: "Calculate development and maintenance costs for greenfield software engineering, legacy modernization, or cloud migration projects.",
    url: "https://guerillasite.com/calculator",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
