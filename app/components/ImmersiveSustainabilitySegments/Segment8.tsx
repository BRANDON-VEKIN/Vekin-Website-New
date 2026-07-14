"use client";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

export default function Segment8() {
  const { language } = useSiteLanguage();

  const copy = {
    th: {
      srLabel: "ส่วนแดชบอร์ดอัจฉริยะ",
      title: "Smart Dashboard", // Kept in English as it represents a core product feature name, change if needed
      description: "อินเทอร์เฟซการแสดงผลข้อมูลจำลองภาพที่นำเสนอข้อมูลสำคัญในรูปแบบที่จัดระเบียบและเข้าใจง่าย ช่วยให้ผู้ใช้งานสามารถติดตาม วิเคราะห์ และตัดสินใจได้อย่างแม่นยำตามข้อมูลจริงที่รวบรวมไว้แบบเรียลไทม์"
    },
    en: {
      srLabel: "Smart Dashboard Segment",
      title: "Smart Dashboard",
      description: "A visual interface that presents key information and data in an organized and easy-to-understand format, enabling users to track, analyze, and make decisions based on real-time or collected data."
    }
  }[language] || { th: {}, en: {} };

  return (
    <BidirectionalScrollReveal
      amount={0.12}
      duration={1.35}
      className="bg-black relative overflow-hidden transform-gpu"
    >
      <h2 className="sr-only">{copy.srLabel}</h2>

      {/* MOBILE: Flex stack layout | DESKTOP: Traditional absolute layer anchor */}
      <div className="relative w-full flex flex-col md:block">
        
        {/* BACKGROUND IMAGE FRAME */}
        <div className="absolute inset-0 z-0 w-full h-full hidden md:block">
          <img
            src="/VEKIN Resource all Product/VEKIN 1/IS_BG8.png"
            alt="Background"
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>

        {/* CONTENT CANVAS: Flows naturally on mobile to prevent layout clipping */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center text-white px-5 py-12 md:py-16 lg:py-24">
          
          {/* RESPONSIVE TYPOGRAPHY COMPONENT */}
          <div className="w-full max-w-4xl">
            <p className="text-[clamp(2.2rem,6.5vw,3.5rem)] font-black tracking-tight leading-tight">
              {copy.title}
            </p>

            <p className="text-[clamp(1rem,3.2vw,1.25rem)] font-medium mt-4 md:mt-8 leading-relaxed text-neutral-300 max-w-3xl mx-auto">
              {copy.description}
            </p>
          </div>

          {/* INNER DASHBOARD GRAPHIC: Fluid width containment scales perfectly */}
          <div className="w-full max-w-4xl mt-8 md:mt-12 rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-sm md:bg-transparent md:border-none p-1 md:p-0">
            <img
              src="/VEKIN Resource all Product/VEKIN 1/IS_Dashboard.png"
              alt="Dashboard layout"
              className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>

        </div>

        {/* MOBILE COMPLEMENTARY BACKGROUND BACKING: Ensures consistent dark mode styling on phone screens */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black z-0 md:hidden pointer-events-none" />
      </div>
    </BidirectionalScrollReveal>
  );
}
