import React from "react";

import { pageMetadata } from "../seo";
import PhaseClient from "./PhaseClient";

export const metadata = pageMetadata({
  title: "Pre-Event Carbon Planning",
  description:
    "Estimate an event's baseline carbon impact before it begins: capture venue, attendee, travel, accommodation and operations data, and prepare the IoT and display integration between the venue and the VEKIN platform.",
  path: "/pre-event"
});

export default function Page() {
  return <PhaseClient />;
}
