"use client";

import EventPhasePage from "../components/EventPhasePage";
import { useSiteLanguage } from "../components/siteLanguage";

export default function PreEventPage() {
  const { language } = useSiteLanguage();
  const copy = {
    th: {
      back: "กลับ",
      phase: "Phase 01",
      title: "ก่อนงาน",
      summary:
        "วางแผนคาร์บอนฟุตพรินต์ของงานก่อนเริ่มงาน รวบรวมข้อมูลสถานที่ ผู้เข้าร่วม การเดินทาง ที่พัก และการดำเนินงาน เพื่อคาดการณ์ผลกระทบด้านคาร์บอนตั้งแต่เนิ่น ๆ",
      steps: [
        "เจ้าของสถานที่ / ผู้จัดงานกรอกรายละเอียดของงาน เช่น จำนวนผู้เข้าร่วม การเดินทาง ที่พัก และการตกแต่ง",
        "ประเมินผลกระทบคาร์บอนพื้นฐานก่อนเริ่มงาน",
        "เตรียมการเชื่อมต่อระบบ IoT และระบบแสดงผลระหว่างสถานที่จัดงานกับแพลตฟอร์ม VEKIN",
      ],
      stats: [
        { label: "ความพร้อม", value: "85%" },
        { label: "จุดข้อมูล", value: "120+" },
        { label: "เวลาติดตั้ง", value: "1 วัน" },
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
