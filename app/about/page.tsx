import React from "react";

import { ORGANIZATION } from "../siteConfig";
import { pageMetadata } from "../seo";
import AboutClient from "./AboutClient";

export const metadata = pageMetadata({
  title: "About",
  description:
    "VEKIN leverages deep-tech solutions—integrating AI and blockchain—to empower organizations in accurately measuring, verifying, and enhancing their sustainability performance.",
  path: "/about"
});

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    description:
      "VEKIN leverages deep-tech solutions—integrating AI and blockchain—to empower organizations in accurately measuring, verifying, and enhancing their sustainability performance.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "89 AIA Capital Center, 12th Floor, Ratchadapisek Road, Din Daeng",
      addressLocality: "Bangkok",
      postalCode: "10400",
      addressCountry: "TH"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+66 2 714 2490",
      email: "contact@vekin.co.th",
      contactType: "customer service"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
