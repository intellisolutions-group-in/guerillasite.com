import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources, Guides & Whitepapers",
  description: "Access our collection of technical guides, engineering whitepapers, and webinars covering enterprise architecture, cloud scaling, and cybersecurity.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Resources, Guides & Whitepapers | Guerilla Site",
    description: "Access our collection of technical guides, engineering whitepapers, and webinars covering enterprise architecture, cloud scaling, and cybersecurity.",
    url: "https://guerillasite.com/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
