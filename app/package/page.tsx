import React from "react";

import { ORGANIZATION, SITE_URL } from "../siteConfig";
import { pageMetadata } from "../seo";
import { packageTiers } from "../components/packagesData";
import PackagesClient from "./PackagesClient";

export const metadata = pageMetadata({
  title: "Packages",
  description:
    "Carbon packages for events, from a baseline dashboard through carbon-neutral verification to a full immersive sustainability experience.",
  path: "/package"
});

export default function PackagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VEKIN event carbon packages",
    itemListElement: packageTiers.map((tier, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: tier.title.en,
        provider: { "@type": "Organization", name: ORGANIZATION.name, url: ORGANIZATION.url },
        url: `${SITE_URL}/package`
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PackagesClient />
    </>
  );
}
