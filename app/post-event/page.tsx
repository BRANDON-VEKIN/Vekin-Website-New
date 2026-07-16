"use client";

import EventPhasePage from "../components/EventPhasePage";
import { useSiteLanguage } from "../components/siteLanguage";

export default function PostEventPage() {
  const { language } = useSiteLanguage();
  const copy = {
    th: {
      back: "à¸à¸¥à¸±à¸š",
      phase: "Phase 03",
      title: "à¸«à¸¥à¸±à¸‡à¸‡à¸²à¸™",
      summary:
        "Close the loop with verified reporting, carbon credit action, and certificate-ready documentation after the event is complete.",
      steps: [
        "Validate and certify the emissions report with clear event documentation.",
        "Verify emissions figures across activity, travel, resources, and operations.",
        "Purchase carbon credits to offset the event to net zero and prepare certificate submission.",
      ],
      stats: [
        { label: "Report status", value: "100%" },
        { label: "Offset path", value: "Net 0" },
        { label: "Certificate", value: "TGO" },
      ],
    },
    en: {
      back: "Back",
      phase: "Phase 03",
      title: "Post-Event",
      summary:
        "Close the loop with verified reporting, carbon credit action, and certificate-ready documentation after the event is complete.",
      steps: [
        "Validate and certify the emissions report with clear event documentation.",
        "Verify emissions figures across activity, travel, resources, and operations.",
        "Purchase carbon credits to offset the event to net zero and prepare certificate submission.",
      ],
      stats: [
        { label: "Report status", value: "100%" },
        { label: "Offset path", value: "Net 0" },
        { label: "Certificate", value: "TGO" },
      ],
    },
  }[language];

  return (
    <EventPhasePage
      accent="#bef264"
      backLabel={copy.back}
      image="/VEKIN Resource all Product/VEKIN 1/post_event.png"
      imageAlt="Post-event approved report documents"
      phase={copy.phase}
      stats={copy.stats}
      steps={copy.steps}
      summary={copy.summary}
      title={copy.title}
    />
  );
}
