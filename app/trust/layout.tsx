import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust, Client Testimonials & Success Stories",
  description: "Read reviews from our global enterprise clients, learn about our technology partners, and check out verified success stories.",
  alternates: {
    canonical: "/trust",
  },
  openGraph: {
    title: "Trust, Client Testimonials & Success Stories | Guerilla Site",
    description: "Read reviews from our global enterprise clients, learn about our technology partners, and check out verified success stories.",
    url: "https://guerillasite.com/trust",
  },
};

export default function TrustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
