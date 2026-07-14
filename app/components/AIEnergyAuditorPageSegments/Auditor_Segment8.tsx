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

  return (
    <Component className={className}>
      {language === "th" ? th : en}
    </Component>
  );
}

const milestones = [
  { th: "ประสบการณ์มากกว่า 5 ปี", en: "5+ Years of Experience" },
  { th: "การอัปเดตเทคโนโลยี 22 ครั้ง", en: "22 Technology Updates" },
  { th: "มากกว่า 250 ไซต์งาน", en: "250 Sites" },
  { th: "ลงนาม MOU ล่าสุดกับการไฟฟ้านครหลวง (MEA)", en: "Latest MOU with MEA" },
];

const successStories = [
  {
    src: "/VEKIN Resource all Product/VEKIN 3/Event_1.png",
    titleTh: "สสารก่อกวน",
    titleEn: "Disruptive Matter",
    descTh: "VEKIN นำเสนอกระบวนการที่พลิกโฉมวงการเพื่อความยั่งยืนผ่าน AI Carbon Auditor ของตน เครื่องมือ Digital VVB นี้เข้ามาแทนที่การตรวจสอบด้วยตนเองที่ช้าและยุ่งยาก ด้วยการตรวจสอบอัตโนมัติแบบเรียลไทม์ ช่วยลดต้นทุนการดำเนินงานแบบดั้งเดิมลงได้ถึง 80%",
    descEn: "VEKIN provides a disruptive process for sustainability through its AI Carbon Auditor. This Digital VVB engine replaces slow, manual audits with real-time automated verification, reducing traditional operational costs by 80%"
  },
  {
    src: "/VEKIN Resource all Product/VEKIN 3/Event_2.png",
    titleTh: "นักพัฒนาแอปผู้เชี่ยวชาญ",
    titleEn: "Expert App Devs",
    descTh: "ในปี 2023 Expert App Devs ได้จัดงานอีเวนต์ด้านเทคโนโลยีเป็นเวลาหนึ่งเดือนในดูไบ โดยจัดแสดงโซลูชันการพัฒนาแอปพลิเคชันบนมือถือและสร้างเครือข่ายกับพันธมิตรระดับโลกในงาน GITEX Global",
    descEn: "Expert App Devs hosted a month-long tech event in Dubai in 2023, showcasing mobile development solutions and networking with global partners at GITEX Global."
  },
  {
    src: "/VEKIN Resource all Product/VEKIN 3/Event_3.png",
    titleTh: "งานเอ็กซ์โป 2030",
    titleEn: "EXPO 2030",
    descTh: "งาน Expo 2030 เป็นงานมหกรรมโลกครั้งใหญ่ที่จะจัดขึ้นที่ริยาด ประเทศซาอุดีอาระเบีย โดยจะเปิดตัวในวันที่ 1 ตุลาคม 2030 เพื่อเน้นย้ำถึงความเป็นเอกภาพของโลก เทคโนโลยีสีเขียว และนวัตกรรมแห่งอนาคต",
    descEn: "Expo 2030 is a massive World Expo in Riyadh, Saudi Arabia, launching on October 1, 2030, highlighting global unity, green technology, and future innovations."
  }
];

export default function AuditorSegment8() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BidirectionalScrollReveal className="relative w-full overflow-hidden bg-black text-white" amount={0.2} duration={1.08} offset={64}>

      {/* Background Image */}
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG6.png"
        alt="Auditor background"
        className="block w-full min-h-[540px] object-cover sm:min-h-[580px] md:min-h-0"
      />

      <div className="absolute inset-0 bg-black/10" />

      {/* Content Wrapper */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8">

        {/* Milestone Pills Display */}
        <div className="z-10 flex max-h-[36%] flex-wrap justify-end gap-2 overflow-y-auto md:max-h-none md:gap-3 md:overflow-visible">
          {milestones.map((item, index) => (
            <div
              key={item.en}
              className="
                rounded-full
                border border-white/40
                bg-black/45
                px-2.5 py-1.5
                text-[8px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white
                backdrop-blur-sm
                sm:px-4
                sm:py-2
                sm:text-xs
                md:px-5
                md:py-3
                md:text-sm
              "
              style={{ opacity: 1 - index * 0.07 }}
            >
              <LocalizedText as="span" th={item.th} en={item.en} />
            </div>
          ))}
        </div>

        {/* CLICKABLE TITLE BLOCK */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-4 pt-24 sm:p-6 md:p-8">
          <button
            onClick={() => setIsOpen(true)}
            className="
              group
              text-left
              cursor-pointer
              outline-none
              transition-transform
              duration-300
              hover:scale-[1.01]
              active:scale-95
              z-10
            "
          >
            <LocalizedText
              as="h2"
              th="ความสำเร็จของเรา"
              en="OUR SUCCESS"
              className="
                max-w-4xl
                font-bold
                tracking-tight
                leading-none
                text-4xl
                sm:text-6xl
                md:text-8xl
                lg:text-[10rem]
                text-white
                group-hover:text-emerald-400
                transition-colors
                duration-300
              "
            />
          </button>
        </div>

        {/* Layout Spacing Spacer */}
        <div className="w-full h-2 pointer-events-none" />
      </div>

      {/* FULLY RESPONSIVE SIDE-BY-SIDE MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-md transition-opacity duration-300 animate-in fade-in sm:p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
              relative w-full max-w-7xl md:w-[92vw] lg:w-full rounded-2xl md:rounded-3xl border border-white/10 
              bg-neutral-950/95 p-4 pt-12 sm:p-8 md:p-10 lg:p-12 shadow-2xl text-white
              animate-in fade-in zoom-in-95 duration-200 max-h-[88vh] overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Layout Target */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 md:right-6 md:top-6 h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all text-sm md:text-base z-20"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Response Column Matrix (Stacked on mobile viewports, Grid rows on desktop screen scopes) */}
            <div className="grid grid-cols-1 gap-6 md:mt-4 md:grid-cols-3 md:gap-6 lg:gap-10">
              {successStories.map((story, i) => (
                <div key={i} className="flex flex-col gap-4 md:gap-5 last:border-0 max-md:border-b max-md:border-white/10 max-md:pb-6">
                  
                  {/* Aspect Locked Responsive Card Images Frame */}
                  <div className="flex h-44 sm:h-64 md:h-52 lg:h-72 xl:h-80 w-full items-center justify-center rounded-xl md:rounded-2xl bg-white/5 overflow-hidden border border-white/5 shadow-inner">
                    <img
                      src={story.src}
                      alt={`Story Visual ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Responsive Bottom Text Block */}
                  <div className="space-y-1.5 md:space-y-2 px-0.5">
                    <LocalizedText
                      as="h3"
                      th={story.titleTh}
                      en={story.titleEn}
                      className="text-lg md:text-base lg:text-xl font-bold text-emerald-400 tracking-tight"
                    />
                    <LocalizedText
                      as="p"
                      th={story.descTh}
                      en={story.descEn}
                      className="text-xs sm:text-sm md:text-[13px] lg:text-sm text-neutral-300 leading-relaxed font-normal"
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
