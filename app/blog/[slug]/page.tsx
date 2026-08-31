import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { ORGANIZATION, SITE_NAME, SITE_URL } from "../../siteConfig";
import { blogPosts, getPost } from "../blogData";
import BlogArticle from "./BlogArticle";

type PageProps = { params: Promise<{ slug: string }> };

/** Pre-renders every article at build time instead of on first request. */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Story not found" };
  }

  const title = `${post.title.en} — ${SITE_NAME}`;
  const description = post.excerpt.en;
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.image ? `${SITE_URL}${post.image}` : undefined;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      title,
      description,
      section: post.category.en,
      ...(image ? { images: [{ url: image, alt: post.title.en }] } : {})
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {})
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.en,
    description: post.excerpt.en,
    articleSection: post.category.en,
    inLanguage: "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
      logo: ORGANIZATION.logo
    },
    ...(post.image ? { image: `${SITE_URL}${post.image}` } : {})
    // datePublished is deliberately absent: the source stories carry no
    // publication date, and inventing one would misdate real customer work.
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticle slug={slug} />
    </>
  );
}
