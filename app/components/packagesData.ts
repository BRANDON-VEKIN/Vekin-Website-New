import type { PackageTier } from "./PackagesModal";

// NOTE: priceFrom values below are PLACEHOLDERS for layout purposes only.
// Replace with real commercial pricing before this goes live.

export const packageTiers: readonly PackageTier[] = [
  {
    id: "carbon-event-dashboard",
    priceFrom: 45000,
    title: {
      en: "Carbon Event Dashboard",
      th: "แดชบอร์ดคาร์บอนสำหรับงานอีเวนต์"
    },
    inherits: null,
    features: [
      { en: "Pre Assessment Event", th: "ประเมินคาร์บอนก่อนจัดงาน" },
      { en: "Carbon Event Dashboard", th: "แดชบอร์ดคาร์บอนของงานอีเวนต์" },
      {
        en: "Carbon Offset via LINE OA / WhatsApp",
        th: "ชดเชยคาร์บอนผ่าน LINE OA / WhatsApp"
      }
    ]
  },
  {
    id: "carbon-footprint-of-event",
    priceFrom: 120000,
    title: {
      en: "Carbon Footprint of Event",
      th: "คาร์บอนฟุตพริ้นท์ของงานอีเวนต์"
    },
    inherits: {
      en: "Carbon Event Dashboard",
      th: "แดชบอร์ดคาร์บอนสำหรับงานอีเวนต์"
    },
    features: [
      {
        en: "Carbon Neutral Event Verification",
        th: "การทวนสอบงานอีเวนต์คาร์บอนนิวทรัล"
      },
      {
        en: "Buy Carbon Credit to offset the event",
        th: "ซื้อคาร์บอนเครดิตเพื่อชดเชยการปล่อยของงาน"
      }
    ]
  },
  {
    id: "full-immersive-sustainability",
    priceFrom: 250000,
    title: {
      en: "Full Immersive Sustainability",
      th: "ความยั่งยืนแบบเต็มรูปแบบ"
    },
    inherits: {
      en: "Carbon Footprint of Event",
      th: "คาร์บอนฟุตพริ้นท์ของงานอีเวนต์"
    },
    features: [
      { en: "Onsite Activity Engagement", th: "กิจกรรมสร้างการมีส่วนร่วมภายในงาน" },
      { en: "CERO App synced", th: "เชื่อมต่อกับแอป CERO" }
    ]
  }
];

export const packagesEyebrow = {
  en: "Pick the tier that fits your event",
  th: "เลือกระดับที่ใช่สำหรับงานของคุณ"
};

export const packagesTitle = { en: "Packages", th: "แพคเกจ" };
