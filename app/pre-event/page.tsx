"use client";

import EventPhasePage from "../components/EventPhasePage";
import { useSiteLanguage } from "../components/siteLanguage";

export default function PreEventPage() {
  const { language } = useSiteLanguage();
  const copy = {
    th: {
      back: "à¸à¸¥à¸±à¸š",
      phase: "Phase 01",
      title: "à¸à¹ˆà¸­à¸™à¸‡à¸²à¸™",
      summary:
        "Plan the event footprint before doors open. Collect venue, attendee, travel, lodging, and operation details to forecast carbon impact early.",
      steps: [
        "Venue owner / organizer enters event details such as attendees, travel, lodging, and decorations.",
        "Estimate the baseline carbon impact before the event begins.",
        "Prepare IoT and display system integration between the venue and VEKIN platform.",
      ],
      stats: [
        { label: "Readiness", value: "85%" },
        { label: "Data points", value: "120+" },
        { label: "Setup time", value: "1 day" },
      ],
    },
    en: {
      back: "Back",
      phase: "Phase 01",
      title: "Pre-Event",
      summary:
        "Plan the event footprint before doors open. Collect venue, attendee, travel, lodging, and operation details to forecast carbon impact early.",
      steps: [
        "Venue owner / organizer enters event details such as attendees, travel, lodging, and decorations.",
        "Estimate the baseline carbon impact before the event begins.",
        "Prepare IoT and display system integration between the venue and VEKIN platform.",
      ],
      stats: [
        { label: "Readiness", value: "85%" },
        { label: "Data points", value: "120+" },
        { label: "Setup time", value: "1 day" },
      ],
    },
  }[language];

  return (
    <EventPhasePage
      accent="#6ee7b7"
      backLabel={copy.back}
      image="/VEKIN Resource all Product/VEKIN 1/pre_event.png"
      imageAlt="Pre-event planning meeting with event data charts"
      phase={copy.phase}
      stats={copy.stats}
      steps={copy.steps}
      summary={copy.summary}
      title={copy.title}
    />
  );
}
