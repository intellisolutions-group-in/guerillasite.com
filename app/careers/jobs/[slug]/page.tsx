import React from "react";
import { getJobBySlug, jobRequisitions } from "../../careersData";
import JobDetailClient from "./JobDetailClient";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return jobRequisitions.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {};
  }

  return {
    title: job.title,
    description: job.summary,
    alternates: {
      canonical: `/careers/jobs/${job.slug}`,
    },
    openGraph: {
      title: `${job.title} | Guerilla Site Careers`,
      description: job.summary,
      url: `https://guerillasite.com/careers/jobs/${job.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}

