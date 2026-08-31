import type { Metadata } from "next";
import React from "react";

import { ORGANIZATION, SITE_NAME, SITE_URL } from "../siteConfig";
import BlogIndex from "./BlogIndex";
import { blogPosts } from "./blogData";

const title = "Blog — Customer stories from VEKIN";
const description =
  "How organisations across Thailand use VEKIN's AI and blockchain technology to measure, verify and reduce their carbon footprint.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: blogPosts[0].image ?? "", width: 2068, height: 1082, alt: title }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: blogPosts[0].image ? [blogPosts[0].image] : []
  }
};

export default function BlogIndexPage() {
  // ItemList tells crawlers what this index contains and in what order.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: title,
    description,
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
      logo: ORGANIZATION.logo
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title.en,
      description: post.excerpt.en,
      url: `${SITE_URL}/blog/${post.slug}`,
      ...(post.image ? { image: `${SITE_URL}${post.image}` } : {})
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogIndex />
    </>
  );
}
