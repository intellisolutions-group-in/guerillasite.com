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

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
