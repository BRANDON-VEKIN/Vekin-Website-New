import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "./siteConfig";

type PageMetaInput = {
  /** Page name only — the site name is appended automatically. */
  title: string;
  description: string;
  /** Route path, e.g. "/auditor". Used for the canonical and og:url. */
  path: string;
  /** Optional share image, as a path under /public. */
  image?: string;
};

/**
 * Builds the per-page title, description, canonical and social tags.
 * Without this every route inherits the root layout's metadata, which makes
 * each page look like a duplicate of the homepage to a crawler.
 */
export function pageMetadata({ title, description, path, image }: PageMetaInput): Metadata {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image ? `${SITE_URL}${image}` : undefined;

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      ...(imageUrl ? { images: [{ url: imageUrl, alt: title }] } : {})
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {})
    }
  };
}
