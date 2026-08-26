"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

const CONTACT_HREF = "/contact";

const packages = [
  {
    id: "carbon-event-dashboard",
    tier: "01",
    glow: "bg-emerald-400/25",
    dot: "bg-emerald-300",
    border: "hover:border-emerald-300/45",
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
    tier: "02",
    glow: "bg-teal-400/25",
    dot: "bg-teal-300",
    border: "hover:border-teal-300/45",
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
    tier: "03",
    glow: "bg-amber-300/25",
    dot: "bg-amber-300",
    border: "hover:border-amber-200/45",
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
] as const;

export default function Segment11() {
  const { language } = useSiteLanguage();
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const copy = {
    th: {
      titleLine1: "ร่วมสร้างสิ่งแวดล้อมไทย",
      titleLine2: "เพื่อก้าวไปสู่สังคมโลก",
      quotation: "ขอใบเสนอราคา",
      modalEyebrow: "เลือกระดับที่ใช่สำหรับงานของคุณ",
      modalTitle: "แพคเกจ",
      includes: "รวมทุกอย่างใน",
      close: "ปิด"
    },
    en: {
      titleLine1: "Build Thailand's environment together",
      titleLine2: "to move toward a global society",
      quotation: "Get Quotation",
      modalEyebrow: "Pick the tier that fits your event",
      modalTitle: "Packages",
      includes: "Everything in",
      close: "Close"
    }
  }[language];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close on Escape + lock background scroll while the packages modal is open
  useEffect(() => {
    if (!isPackagesOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPackagesOpen(false);
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isPackagesOpen]);

  // Rendered through a portal: this section is transformed by the scroll reveal
  // and clips overflow, so a fixed overlay nested inside it would be mispositioned.
  const packagesModal = (
    <AnimatePresence>
      {isPackagesOpen && (
        <motion.div
          key="packages-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setIsPackagesOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={copy.modalTitle}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-y-auto rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-emerald-900 via-emerald-950 to-teal-950 p-5 shadow-[0_40px_120px_-24px_rgba(0,0,0,0.85)] sm:rounded-[1.75rem] sm:p-8 lg:p-10"
          >
            {/* Decorative accents */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />

            {/* Close */}
            <button
              type="button"
              onClick={() => setIsPackagesOpen(false)}
              aria-label={copy.close}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl leading-none text-white/70 backdrop-blur-md transition hover:border-white/40 hover:bg-white/15 hover:text-white active:scale-90 sm:right-6 sm:top-6"
            >
              &times;
            </button>

            {/* Header */}
            <div className="relative flex flex-col items-center pr-10 text-center sm:pr-0">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300/70 sm:text-[11px]">
                {copy.modalEyebrow}
              </span>
              <h3 className="mt-2 bg-gradient-to-r from-[#7dffc4] to-[#3BB97B] bg-clip-text text-2xl font-extrabold tracking-tight text-transparent drop-shadow-[0_12px_34px_rgba(59,185,123,0.28)] sm:text-3xl lg:text-4xl">
                {copy.modalTitle}
              </h3>
              <div className="mt-4 h-px w-28 bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
            </div>

            {/* Package cards */}
            <div className="mt-7 grid gap-4 sm:mt-9 sm:gap-5 md:grid-cols-3">
              {packages.map((item) => (
                <div
                  key={item.id}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-left backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08] sm:p-6 ${item.border}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${item.glow}`}
                  />

                  <span className="relative text-[11px] font-bold tracking-[0.28em] text-white/35">
                    {item.tier}
                  </span>
                  <h4 className="relative mt-2 text-base font-extrabold leading-snug text-white sm:text-lg">
                    {item.title[language]}
                  </h4>

                  <div className="relative mt-4 h-px w-full bg-white/10" />

                  {item.inherits && (
                    <p className="relative mt-4 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-[12px] font-medium leading-snug text-white/70">
                      <span className="text-emerald-300/90">{copy.includes}</span>{" "}
                      {item.inherits[language]}
                    </p>
                  )}

                  <ul className="relative mt-4 flex flex-col gap-2.5">
                    {item.features.map((feature) => (
                      <li
                        key={feature.en}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-white/80 sm:text-sm"
                      >
                        <span
                          className={`mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${item.dot}`}
                        />
                        <span>{feature[language]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="relative mt-8 flex justify-center">
              <a
                href={CONTACT_HREF}
                onClick={() => setIsPackagesOpen(false)}
                className="min-w-[220px] rounded-full bg-[#2eb79f] px-8 py-3 text-center text-[16px] font-semibold text-white shadow-[0_16px_40px_-12px_rgba(46,183,159,0.7)] transition hover:bg-[#38c9b0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-[18px]"
              >
                {copy.quotation}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <BidirectionalScrollReveal
      id="contact"
      amount={0.12}
      duration={1.35}
      className="relative min-h-[560px] overflow-hidden bg-black transform-gpu sm:min-h-[720px] lg:min-h-[900px]"
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 1/IS_BG9.png"
        alt="Children creating a miniature sustainable environment together"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-black via-black/70 to-transparent sm:h-48 lg:h-56" />

      <div className="relative z-10 flex min-h-[560px] flex-col justify-center px-6 py-[8%] sm:min-h-[720px] sm:px-12 lg:min-h-[900px] lg:px-16">
        <h2 className="mx-auto max-w-[620px] text-center text-[clamp(2rem,3vw,4.3rem)] font-black leading-[1.18] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">
          {copy.titleLine1}
          <br />
          {copy.titleLine2}
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-5 sm:mt-10">
          <button
            type="button"
            onClick={() => setIsPackagesOpen(true)}
            className="min-w-[260px] rounded-full bg-[#2eb79f] px-8 py-3 text-center text-[18px] font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#38c9b0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {copy.quotation}
          </button>
        </div>
      </div>

      {isMounted && createPortal(packagesModal, document.body)}
    </BidirectionalScrollReveal>
  );
}
