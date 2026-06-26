import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support, FAQs & Help Center",
  description: "Get in touch with support, browse through our frequently asked questions, or read articles in our technical help center.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Support, FAQs & Help Center | Guerilla Site",
    description: "Get in touch with support, browse through our frequently asked questions, or read articles in our technical help center.",
    url: "https://guerillasite.com/support",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
