"use client";

import React, { useState } from "react";

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
  const isThai =
    typeof navigator !== "undefined" &&
    navigator.language.toLowerCase().startsWith("th");

  return (
    <Component className={className}>
      {isThai ? th : en}
    </Component>
  );
}

const tabs = [
  { 
    th: "ประสบการณ์ 5 ปี", 
    en: "5 Years of Experience",
    modalContent: {
      titleTh: "ประสบการณ์ก้าวไกลของเรา",
      titleEn: "Our 5-Year Journey",
      descTh: "ตลอดระยะเวลา 5 ปีที่ผ่านมา เราได้พัฒนาและส่งมอบนวัตกรรมระบบตรวจสอบที่มีเสถียรภาพและได้รับความไว้วางใจระดับมาตรฐานสากลอย่างต่อเนื่อง",
      descEn: "Over the past 5 years, we have continuously developed and delivered robust auditing innovations that are trusted across international standards."
    }
  },
  { 
    th: "250 ไซต์", 
    en: "250 Sites",
    modalContent: {
      titleTh: "ความสำเร็จในกว่า 250 พื้นที่ใช้งาน",
      titleEn: "Trusted Across 250+ Sites",
      descTh: "ระบบของเราติดตั้งและดูแลระบบออดิตเสร็จสิ้นสมบูรณ์ไปแล้วมากกว่า 250 ไซต์งานทั่วประเทศ ครอบคลุมอุตสาหกรรมขนาดเล็กไปจนถึงรัฐวิสาหกิจขนาดใหญ่",
      descEn: "Our systems have been successfully deployed and maintained across more than 250 active sites nationwide, covering everything from small industries to massive enterprises."
    }
  },
  { 
    th: "ข่าวล่าสุด", 
    en: "Latest News",
    modalContent: {
      titleTh: "อัปเดตข่าวสารล่าสุด",
      titleEn: "Latest News Update",
      descTh: "ติดตามข่าวสาร การประกาศอัปเดตสถาปัตยกรรมระบบเวอร์ชันใหม่ และกิจกรรมความร่วมมือทางเทคโนโลยีประจำเดือนนี้ได้ที่นี่",
      descEn: "Stay tuned for monthly announcements, architectural upgrades to our versioned platform, and strategic technology ecosystem partnerships."
    }
  },
  { 
    th: "โซเชียลมีเดีย", 
    en: "Social Media",
    modalContent: {
      titleTh: "ช่องทางการติดตาม",
      titleEn: "Follow Us On Social Media",
      descTh: "เชื่อมต่อกับเราผ่านช่องทางโซเชียลมีเดียต่างๆ เพื่อรับชมวิดีโอแนะนำฟีเจอร์การใช้งาน บทความเจาะลึก และพูดคุยกับวิศวกรผู้เชี่ยวชาญ",
      descEn: "Connect with us across our social media platforms to explore feature walkthroughs, engineering deep dives, and live community discussions."
    }
  },
];

type TabType = typeof tabs[number];

export default function AuditorSegment8() {
  const [activeTab, setActiveTab] = useState<TabType | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-black text-white">

      {/* Background Image */}
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG6.png"
        alt="Auditor background"
        className="block w-full min-h-[500px] object-cover md:min-h-0"
      />

      <div className="absolute inset-0 bg-black/10" />

      {/* Content Wrapper */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8">

        {/* Interactive Pills - Kept tightly grouped in top right */}
        <div className="flex flex-wrap justify-end gap-2 md:gap-3 z-10">
          {tabs.map((tab, index) => (
            <button
              key={tab.en}
              onClick={() => setActiveTab(tab)}
              className="
                cursor-pointer
                transition-all duration-200 hover:scale-105 active:scale-95
                rounded-full
                border border-white/40
                bg-black/45
                px-3 py-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white
                backdrop-blur-sm
                sm:px-4
                sm:text-xs
                md:px-5
                md:py-3
                md:text-sm
              "
              style={{ opacity: 1 - index * 0.07 }}
            >
              <LocalizedText
                as="span"
                th={tab.th}
                en={tab.en}
              />
            </button>
          ))}
        </div>

        {/* Centered Vertically / Aligned Left Title Block */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 pointer-events-none">
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
            "
          />
        </div>

        {/* Empty bottom element to preserve the justify-between spacing layout engine */}
        <div className="w-full h-2 pointer-events-none" />
      </div>

      {/* Modal Overlay Component */}
      {activeTab && (
        <div 
          className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveTab(null)}
        >
          <div 
            className="
              relative w-full max-w-lg rounded-2xl border border-white/20 
              bg-neutral-900/90 p-6 shadow-2xl text-white 
              animate-in fade-in zoom-in-95 duration-200
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveTab(null)}
              className="absolute right-4 top-4 text-white/60 hover:text-white text-xl p-1 transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="mt-2 space-y-4">
              <LocalizedText 
                as="h3" 
                th={activeTab.modalContent.titleTh} 
                en={activeTab.modalContent.titleEn} 
                className="text-xl font-bold tracking-tight sm:text-2xl text-emerald-400"
              />
              <LocalizedText 
                as="p" 
                th={activeTab.modalContent.descTh} 
                en={activeTab.modalContent.descEn} 
                className="text-sm sm:text-base text-neutral-300 leading-relaxed"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}