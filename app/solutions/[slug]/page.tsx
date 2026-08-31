import type { Metadata } from "next";
import React from "react";

import { ORGANIZATION, SITE_NAME, SITE_URL } from "../../siteConfig";
import SolutionDetailClient from "./SolutionDetailClient";
import { getSolution, solutions } from "../solutionsData";

type PageProps = { params: Promise<{ slug: string }> };

/** Pre-renders each solution page at build time. */
export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

/** Trims a long description down to a usable meta description. */
function toDescription(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= 300) return clean;
  const cut = clean.slice(0, 297);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) return { title: "Solution not found" };

  const title = `${solution.fullName.en} — ${SITE_NAME}`;
  const description = toDescription(solution.description.en);
  const url = `${SITE_URL}/solutions/${solution.slug}`;
  const image = solution.icon ? `${SITE_URL}${solution.icon}` : undefined;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title,
      description,
      ...(image ? { images: [{ url: image, alt: solution.fullName.en }] } : {})
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {})
    }
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  const jsonLd = solution
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: solution.fullName.en,
        description: toDescription(solution.description.en),
        url: `${SITE_URL}/solutions/${solution.slug}`,
        brand: { "@type": "Organization", name: ORGANIZATION.name, url: ORGANIZATION.url },
        ...(solution.icon ? { image: `${SITE_URL}${solution.icon}` } : {})
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <SolutionDetailClient />
    </>
  );
}
