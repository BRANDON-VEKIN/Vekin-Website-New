import React from "react";

import { pageMetadata } from "../seo";
import ContactClient from "./ContactClient";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Whether you're a customer, a partner, or looking for the right team, we're here to listen and answer every question about your sustainability journey.",
  path: "/contact"
});

export default function ContactPage() {
  return <ContactClient />;
}
