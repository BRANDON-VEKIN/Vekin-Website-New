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

const thaiTextOverrides: Record<string, string> = {
  "5+ Years of Experience": "ประสบการณ์มากกว่า 5 ปี",
  "22 Technology Updates": "อัปเดตเทคโนโลยี 22 ครั้ง",
  "250 Sites": "มากกว่า 250 ไซต์งาน",
  "Latest MOU with MEA": "MOU ล่าสุดกับการไฟฟ้านครหลวง (MEA)",
  "OUR SUCCESS": "ความสำเร็จของเรา",
  "View Success Stories": "ดูผลงานความสำเร็จ",
  "Success That Builds Trust": "ความสำเร็จที่สร้างความเชื่อมั่น",
  "Disruptive Matter": "นวัตกรรมที่เปลี่ยนเกม",
  "VEKIN provides a disruptive process for sustainability through its AI Carbon Auditor, replacing slow manual audits with real-time automated verification.":
    "VEKIN นำเสนอกระบวนการเพื่อความยั่งยืนผ่าน AI Carbon Auditor ที่เข้ามาแทนการตรวจสอบด้วยมือที่ล่าช้า ด้วยการตรวจสอบอัตโนมัติแบบเรียลไทม์",
  "Expert App Devs": "ผู้เชี่ยวชาญด้านการพัฒนาแอป",
  "Expert App Devs hosted a month-long tech event in Dubai, showcasing mobile solutions and connecting with global partners at GITEX Global.":
    "Expert App Devs จัดงานเทคโนโลยีในดูไบเป็นเวลาหนึ่งเดือน เพื่อนำเสนอโซลูชันบนมือถือและเชื่อมต่อกับพันธมิตรระดับโลกในงาน GITEX Global",
  "EXPO 2030": "EXPO 2030",
  "Expo 2030 highlights global unity, green technology, and future innovation at a massive World Expo in Riyadh.":
    "Expo 2030 เป็นงานมหกรรมโลกขนาดใหญ่ที่กรุงริยาด เน้นความร่วมมือระดับโลก เทคโนโลยีสีเขียว และนวัตกรรมแห่งอนาคต",
};

function LocalizedText({
  as: Component = "div",
  th,
  en,
  className,
}: LocalizedTextProps) {
  const { language } = useSiteLanguage();

  return (
    <Component className={className}>
      {language === "th" ? thaiTextOverrides[en] ?? th : en}
    </Component>
  );
}

const milestones = [
  { th: "à¸›à¸£à¸°à¸ªà¸šà¸à¸²à¸£à¸“à¹Œà¸¡à¸²à¸à¸à¸§à¹ˆà¸² 5 à¸›à¸µ", en: "5+ Years of Experience" },
  { th: "à¸à¸²à¸£à¸­à¸±à¸›à¹€à¸”à¸•à¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µ 22 à¸„à¸£à¸±à¹‰à¸‡", en: "22 Technology Updates" },
  { th: "à¸¡à¸²à¸à¸à¸§à¹ˆà¸² 250 à¹„à¸‹à¸•à¹Œà¸‡à¸²à¸™", en: "250 Sites" },
  { th: "à¸¥à¸‡à¸™à¸²à¸¡ MOU à¸¥à¹ˆà¸²à¸ªà¸¸à¸”à¸à¸±à¸šà¸à¸²à¸£à¹„à¸Ÿà¸Ÿà¹‰à¸²à¸™à¸„à¸£à¸«à¸¥à¸§à¸‡ (MEA)", en: "Latest MOU with MEA" },
];

const successStories = [
  {
    src: "/VEKIN Resource all Product/VEKIN 3/Event_1.png",
    titleTh: "à¸ªà¸ªà¸²à¸£à¸à¹ˆà¸­à¸à¸§à¸™",
    titleEn: "Disruptive Matter",
    descTh: "VEKIN à¸™à¸³à¹€à¸ªà¸™à¸­à¸à¸£à¸°à¸šà¸§à¸™à¸à¸²à¸£à¸—à¸µà¹ˆà¸žà¸¥à¸´à¸à¹‚à¸‰à¸¡à¸§à¸‡à¸à¸²à¸£à¹€à¸žà¸·à¹ˆà¸­à¸„à¸§à¸²à¸¡à¸¢à¸±à¹ˆà¸‡à¸¢à¸·à¸™à¸œà¹ˆà¸²à¸™ AI Carbon Auditor à¸‚à¸­à¸‡à¸•à¸™ à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­ Digital VVB à¸™à¸µà¹‰à¹€à¸‚à¹‰à¸²à¸¡à¸²à¹à¸—à¸™à¸—à¸µà¹ˆà¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸”à¹‰à¸§à¸¢à¸•à¸™à¹€à¸­à¸‡à¸—à¸µà¹ˆà¸Šà¹‰à¸²à¹à¸¥à¸°à¸¢à¸¸à¹ˆà¸‡à¸¢à¸²à¸ à¸”à¹‰à¸§à¸¢à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸­à¸±à¸•à¹‚à¸™à¸¡à¸±à¸•à¸´à¹à¸šà¸šà¹€à¸£à¸µà¸¢à¸¥à¹„à¸—à¸¡à¹Œ à¸Šà¹ˆà¸§à¸¢à¸¥à¸”à¸•à¹‰à¸™à¸—à¸¸à¸™à¸à¸²à¸£à¸”à¸³à¹€à¸™à¸´à¸™à¸‡à¸²à¸™à¹à¸šà¸šà¸”à¸±à¹‰à¸‡à¹€à¸”à¸´à¸¡à¸¥à¸‡à¹„à¸”à¹‰à¸–à¸¶à¸‡ 80%",
    descEn: "VEKIN provides a disruptive process for sustainability through its AI Carbon Auditor, replacing slow manual audits with real-time automated verification.",
  },
  {
    src: "/VEKIN Resource all Product/VEKIN 3/Event_2.png",
    titleTh: "à¸™à¸±à¸à¸žà¸±à¸’à¸™à¸²à¹à¸­à¸›à¸œà¸¹à¹‰à¹€à¸Šà¸µà¹ˆà¸¢à¸§à¸Šà¸²à¸",
    titleEn: "Expert App Devs",
    descTh: "à¹ƒà¸™à¸›à¸µ 2023 Expert App Devs à¹„à¸”à¹‰à¸ˆà¸±à¸”à¸‡à¸²à¸™à¸­à¸µà¹€à¸§à¸™à¸•à¹Œà¸”à¹‰à¸²à¸™à¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µà¹€à¸›à¹‡à¸™à¹€à¸§à¸¥à¸²à¸«à¸™à¸¶à¹ˆà¸‡à¹€à¸”à¸·à¸­à¸™à¹ƒà¸™à¸”à¸¹à¹„à¸š à¹‚à¸”à¸¢à¸ˆà¸±à¸”à¹à¸ªà¸”à¸‡à¹‚à¸‹à¸¥à¸¹à¸Šà¸±à¸™à¸à¸²à¸£à¸žà¸±à¸’à¸™à¸²à¹à¸­à¸›à¸žà¸¥à¸´à¹€à¸„à¸Šà¸±à¸™à¸šà¸™à¸¡à¸·à¸­à¸–à¸·à¸­à¹à¸¥à¸°à¸ªà¸£à¹‰à¸²à¸‡à¹€à¸„à¸£à¸·à¸­à¸‚à¹ˆà¸²à¸¢à¸à¸±à¸šà¸žà¸±à¸™à¸˜à¸¡à¸´à¸•à¸£à¸£à¸°à¸”à¸±à¸šà¹‚à¸¥à¸à¹ƒà¸™à¸‡à¸²à¸™ GITEX Global",
    descEn: "Expert App Devs hosted a month-long tech event in Dubai, showcasing mobile solutions and connecting with global partners at GITEX Global.",
  },
  {
    src: "/VEKIN Resource all Product/VEKIN 3/Event_3.png",
    titleTh: "à¸‡à¸²à¸™à¹€à¸­à¹‡à¸à¸‹à¹Œà¹‚à¸› 2030",
    titleEn: "EXPO 2030",
    descTh: "à¸‡à¸²à¸™ Expo 2030 à¹€à¸›à¹‡à¸™à¸‡à¸²à¸™à¸¡à¸«à¸à¸£à¸£à¸¡à¹‚à¸¥à¸à¸„à¸£à¸±à¹‰à¸‡à¹ƒà¸«à¸à¹ˆà¸—à¸µà¹ˆà¸ˆà¸°à¸ˆà¸±à¸”à¸‚à¸¶à¹‰à¸™à¸—à¸µà¹ˆà¸£à¸´à¸¢à¸²à¸” à¸›à¸£à¸°à¹€à¸—à¸¨à¸‹à¸²à¸­à¸¸à¸”à¸µà¸­à¸²à¸£à¸°à¹€à¸šà¸µà¸¢ à¹‚à¸”à¸¢à¸ˆà¸°à¹€à¸›à¸´à¸”à¸•à¸±à¸§à¹ƒà¸™à¸§à¸±à¸™à¸—à¸µà¹ˆ 1 à¸•à¸¸à¸¥à¸²à¸„à¸¡ 2030 à¹€à¸žà¸·à¹ˆà¸­à¹€à¸™à¹‰à¸™à¸¢à¹‰à¸³à¸–à¸¶à¸‡à¸„à¸§à¸²à¸¡à¹€à¸›à¹‡à¸™à¹€à¸­à¸à¸ à¸²à¸žà¸‚à¸­à¸‡à¹‚à¸¥à¸ à¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µà¸ªà¸µà¹€à¸‚à¸µà¸¢à¸§ à¹à¸¥à¸°à¸™à¸§à¸±à¸•à¸à¸£à¸£à¸¡à¹à¸«à¹ˆà¸‡à¸­à¸™à¸²à¸„à¸•",
    descEn: "Expo 2030 highlights global unity, green technology, and future innovation at a massive World Expo in Riyadh.",
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
        <div className="z-10 flex max-h-[36%] flex-wrap justify-end gap-2 overflow-y-auto md:max-h-none md:gap-3 md:overflow-visible">
          {milestones.map((item, index) => (
            <div
              key={item.en}
              className="rounded-full border border-white/15 bg-black/55 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-white shadow-[0_14px_35px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs md:px-5 md:py-3 md:text-sm"
              style={{ opacity: 1 - index * 0.05 }}
            >
              <LocalizedText as="span" th={item.th} en={item.en} />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-center p-4 pt-24 sm:p-6 md:p-8 lg:p-10">
          <div className="mb-5 inline-flex rounded-full border border-[#44e5d0]/35 bg-[#44e5d0]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
            Proven Momentum
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group z-10 cursor-pointer text-left outline-none transition-transform duration-300 hover:scale-[1.01] active:scale-95"
          >
            <LocalizedText
              as="h2"
              th="à¸„à¸§à¸²à¸¡à¸ªà¸³à¹€à¸£à¹‡à¸ˆà¸‚à¸­à¸‡à¹€à¸£à¸²"
              en="OUR SUCCESS"
              className="max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-tight text-white transition-colors duration-300 group-hover:text-[#73f3df] sm:text-6xl md:text-8xl lg:text-[10rem]"
            />
            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white/78 transition-colors duration-300 group-hover:border-[#44e5d0]/50 group-hover:text-[#73f3df]">
              <LocalizedText as="span" th="à¸”à¸¹à¸œà¸¥à¸‡à¸²à¸™" en="View Success Stories" />
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
              x
            </button>

            <div className="mb-8 max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-[#44e5d0]/35 bg-[#44e5d0]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
                Success Evidence
              </div>
              <LocalizedText
                as="h3"
                th="à¸„à¸§à¸²à¸¡à¸ªà¸³à¹€à¸£à¹‡à¸ˆà¸—à¸µà¹ˆà¸ªà¸£à¹‰à¸²à¸‡à¸„à¸§à¸²à¸¡à¹€à¸Šà¸·à¹ˆà¸­à¸¡à¸±à¹ˆà¸™"
                en="Success That Builds Trust"
                className="text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl"
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
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#73f3df]">
                      Story 0{index + 1}
                    </p>
                    <LocalizedText
                      as="h3"
                      th={story.titleTh}
                      en={story.titleEn}
                      className="text-xl font-black uppercase leading-tight tracking-tight text-white md:text-lg lg:text-xl"
                    />
                    <LocalizedText
                      as="p"
                      th={story.descTh}
                      en={story.descEn}
                      className="text-xs leading-relaxed text-white/62 sm:text-sm md:text-[13px] lg:text-sm"
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
