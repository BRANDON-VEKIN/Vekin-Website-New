import React from "react";

import { pageMetadata } from "../seo";
import PhaseClient from "./PhaseClient";

export const metadata = pageMetadata({
  title: "Post-Event Verification",
  description:
    "Verify emissions figures across activity, travel, resources and operations, then validate and certify the emissions report with clear event documentation.",
  path: "/post-event"
});

export default function Page() {
  return <PhaseClient />;
}
