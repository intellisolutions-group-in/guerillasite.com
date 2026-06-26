import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Enterprise Software Consulting",
  description: "Get in touch with our principal systems architects. Let's discuss your enterprise infrastructure scale, cloud migration, or software engineering requirements.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Guerilla Site Software Consulting",
    description: "Get in touch with our principal systems architects. Let's discuss your enterprise infrastructure scale, cloud migration, or software engineering requirements.",
    url: "https://guerillasite.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
