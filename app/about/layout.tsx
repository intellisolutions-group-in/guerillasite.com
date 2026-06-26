import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Enterprise Tech Partners",
  description: "Learn about Guerilla Site's mission, our core engineering values, and our decade-long history of constructing deterministic enterprise software systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Guerilla Site Enterprise Tech Partners",
    description: "Learn about Guerilla Site's mission, our core engineering values, and our decade-long history of constructing deterministic enterprise software systems.",
    url: "https://guerillasite.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
