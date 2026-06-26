import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Schedule a discovery call, request a technical proposal, or get an architectural project quote from our principal engineers.",
  alternates: {
    canonical: "/consultation",
  },
  openGraph: {
    title: "Book a Consultation | Guerilla Site",
    description: "Schedule a discovery call, request a technical proposal, or get an architectural project quote from our principal engineers.",
    url: "https://guerillasite.com/consultation",
  },
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
