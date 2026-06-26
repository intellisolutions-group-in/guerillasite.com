import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Technology Stack",
  description: "Examine the programming languages, database structures, DevOps setups, and containerization frameworks we use to engineer high-throughput systems.",
  alternates: {
    canonical: "/technologies",
  },
  openGraph: {
    title: "Our Technology Stack | Guerilla Site",
    description: "Examine the programming languages, database structures, DevOps setups, and containerization frameworks we use to engineer high-throughput systems.",
    url: "https://guerillasite.com/technologies",
  },
};

export default function TechnologiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
