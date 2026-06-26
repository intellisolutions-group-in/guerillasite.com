import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Jobs",
  description: "Join a high-performance team of systems architects, software developers, and cloud operations engineers. Explore open technical positions and internships.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers & Jobs | Guerilla Site",
    description: "Join a high-performance team of systems architects, software developers, and cloud operations engineers. Explore open technical positions and internships.",
    url: "https://guerillasite.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
