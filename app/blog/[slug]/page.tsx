import React from "react";
import { getPostBySlug, allPosts } from "../blogData";
import BlogDetailClient from "./BlogDetailClient";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.desc,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Guerilla Site Blog`,
      description: post.desc,
      url: `https://guerillasite.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailClient post={post} />;
}

