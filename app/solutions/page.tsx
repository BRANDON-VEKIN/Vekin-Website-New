import React from "react";

import { SITE_URL } from "../siteConfig";
import { pageMetadata } from "../seo";
import SolutionsClient from "./SolutionsClient";
import { solutions } from "./solutionsData";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "VEKIN NEXUS: one ecosystem, endless sustainability. Explore DEMP, DAP, CERO, the AI Carbon Auditor, Carbon Receipt and our Validate & Verify service.",
  path: "/solutions"
});

export default function SolutionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VEKIN NEXUS solutions",
    itemListElement: solutions.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: solution.fullName.en,
      url: `${SITE_URL}/solutions/${solution.slug}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolutionsClient />
    </>
  );
}
