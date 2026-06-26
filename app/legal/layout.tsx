import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Policies",
  description: "Terms and conditions, privacy policy, cookie policy, and legal disclaimers for Guerilla Site.",
  alternates: {
    canonical: "/legal",
  },
  openGraph: {
    title: "Legal & Policies | Guerilla Site",
    description: "Terms and conditions, privacy policy, cookie policy, and legal disclaimers for Guerilla Site.",
    url: "https://guerillasite.com/legal",
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
