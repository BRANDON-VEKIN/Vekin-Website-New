"use client";

import React, { useState } from "react";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

type LocalizedTextProps = {
  as?: React.ElementType;
  th: string;
  en: string;
  className?: string;
};

function LocalizedText({
  as: Component = "div",
  th,
  en,
  className,
}: LocalizedTextProps) {
  const { language } = useSiteLanguage();

  return <Component className={className}>{language === "th" ? th : en}</Component>;
}

const successStories = [
  {
    src: "/VEKIN Resource all Product/VEKIN 3/Event_1.png",
    titleTh: "นวัตกรรมที่เปลี่ยนเกม",
    titleEn: "Disruptive Matter",
    descTh:
      "VEKIN นำเสนอกระบวนการด้านความยั่งยืนผ่าน AI Carbon Auditor ที่ช่วยแทนที่การตรวจสอบแบบเดิมที่ล่าช้า ด้วยการตรวจสอบอัตโนมัติแบบเรียลไทม์",
    descEn:
      "VEKIN provides a disruptive process for sustainability through its AI Carbon Auditor, replacing slow manual audits with real-time automated verification.",
  },
  {
    src: "/VEKIN Resource all Product/VEKIN 3/Event_2.png",
    titleTh: "ผู้เชี่ยวชาญด้านการพัฒนาแอป",
    titleEn: "Expert App Devs",
    descTh:
      "Expert App Devs จัดงานเทคโนโลยีในดูไบเป็นเวลาหนึ่งเดือน เพื่อนำเสนอโซลูชันบนมือถือและเชื่อมต่อกับพันธมิตรระดับโลกในงาน GITEX Global",
    descEn:
      "Expert App Devs hosted a month-long tech event in Dubai, showcasing mobile solutions and connecting with global partners at GITEX Global.",
  },
  {
    src: "/VEKIN Resource all Product/VEKIN 3/Event_3.png",
    titleTh: "EXPO 2030",
    titleEn: "EXPO 2030",
    descTh:
      "Expo 2030 สะท้อนความร่วมมือระดับโลก เทคโนโลยีสีเขียว และนวัตกรรมแห่งอนาคตในงาน World Expo ขนาดใหญ่ที่กรุงริยาด",
    descEn:
      "Expo 2030 highlights global unity, green technology, and future innovation at a massive World Expo in Riyadh.",
  },
];

export default function AuditorSegment8() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BidirectionalScrollReveal
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.2}
      duration={1.08}
      offset={64}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG6.png"
        alt="Auditor background"
        className="block w-full min-h-[680px] object-cover sm:min-h-[700px] md:min-h-[660px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.78)),radial-gradient(circle_at_24%_28%,rgba(68,229,208,0.26),transparent_32%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8">
        <div className="absolute inset-0 flex flex-col items-start justify-center p-4 pt-24 sm:p-6 md:p-8 lg:p-10">
          <LocalizedText
            as="p"
            th="แรงขับเคลื่อนที่พิสูจน์แล้ว"
            en="Proven momentum"
            className="mb-4 text-sm font-semibold tracking-wide text-[#73f3df]"
          />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group z-10 cursor-pointer text-left outline-none transition-transform duration-300 hover:scale-[1.01] active:scale-95"
          >
            <LocalizedText
              as="h2"
              th="ความสำเร็จของเรา"
              en="Our success."
              className="max-w-5xl bg-gradient-to-r from-[#3BB97B] to-[#8ff7ea] bg-clip-text text-5xl font-semibold tracking-[-0.02em] leading-[0.95] text-transparent drop-shadow-[0_18px_52px_rgba(59,185,123,0.32)] transition duration-300 group-hover:drop-shadow-[0_22px_64px_rgba(59,185,123,0.44)] sm:text-6xl md:text-7xl lg:text-8xl"
            />
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/[0.1] px-5 py-2.5 text-[15px] font-medium text-white/85 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/[0.16] group-hover:text-white">
              <LocalizedText as="span" th="ดูเรื่องราวความสำเร็จ" en="View success stories" />
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">›</span>
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-3 backdrop-blur-md transition-opacity duration-300 animate-in fade-in sm:p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-7xl overflow-y-auto rounded-[8px] border border-white/15 bg-neutral-950/95 p-4 pt-14 text-white shadow-[0_32px_90px_rgba(0,0,0,0.55)] animate-in fade-in zoom-in-95 duration-200 md:w-[92vw] md:p-10 lg:w-full lg:p-12"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-white/70 transition-all hover:bg-white/20 hover:text-white md:right-6 md:top-6 md:h-10 md:w-10 md:text-base"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="mb-8 max-w-3xl">
              <LocalizedText
                as="p"
                th="หลักฐานความสำเร็จ"
                en="Success evidence"
                className="mb-3 text-sm font-semibold tracking-wide text-[#73f3df]"
              />
              <LocalizedText
                as="h3"
                th="ความสำเร็จที่สร้างความเชื่อมั่น"
                en="Success that builds trust."
                className="bg-gradient-to-r from-[#3BB97B] to-[#8ff7ea] bg-clip-text text-3xl font-semibold tracking-[-0.015em] leading-[1.05] text-transparent sm:text-4xl"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {successStories.map((story, index) => (
                <div
                  key={story.titleEn}
                  className="group overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.06] shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#44e5d0]/50"
                >
                  <div className="flex h-48 w-full items-center justify-center overflow-hidden bg-white/5 sm:h-64 md:h-56 lg:h-72">
                    <img
                      src={story.src}
                      alt={`Story Visual ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-2 p-4 md:p-5">
                    <p className="text-[11px] font-semibold tracking-wide text-[#73f3df]">
                      <LocalizedText as="span" th={`เรื่องที่ 0${index + 1}`} en={`Story 0${index + 1}`} />
                    </p>
                    <LocalizedText
                      as="h3"
                      th={story.titleTh}
                      en={story.titleEn}
                      className="text-lg font-semibold tracking-[-0.01em] leading-tight text-white lg:text-xl"
                    />
                    <LocalizedText
                      as="p"
                      th={story.descTh}
                      en={story.descEn}
                      className="text-[13px] font-medium leading-relaxed text-white/65 lg:text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </BidirectionalScrollReveal>
  );
}
