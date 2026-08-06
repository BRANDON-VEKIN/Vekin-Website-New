"use client";

import React from "react";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

type LocalizedTextProps = {
  as?: React.ElementType;
  th: string;
  en: string;
  className?: string;
};

const thaiTextOverrides: Record<string, string> = {
  "AI ENERGY AUDITOR ECOSYSTEM": "ระบบนิเวศ AI Energy Auditor",
  "SUITABLE BUSINESS FOR VEKIN": "ธุรกิจที่เหมาะกับ VEKIN",
  "Turn energy data into verifiable advantage for organizations ready to grow with trusted sustainability.":
    "เปลี่ยนข้อมูลพลังงานให้เป็นความได้เปรียบที่ตรวจสอบได้ สำหรับองค์กรที่พร้อมเติบโตอย่างยั่งยืนและน่าเชื่อถือ",
  "Financial Institutions and Banks": "สถาบันการเงินและธนาคาร",
  "Eco-Friendly Product Manufacturers": "ผู้ผลิตสินค้าที่เป็นมิตรต่อสิ่งแวดล้อม",
  "Sustainable Agriculture": "เกษตรกรรมยั่งยืน",
  "Renewable Energy Providers": "ผู้ให้บริการพลังงานหมุนเวียน",
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

const businessTypes = [
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/money.png",
    alt: "Financial Institutions and Banks",
    th: "สถาบันการเงินและธนาคาร",
    en: "Financial Institutions and Banks",
  },
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/investment.png",
    alt: "Eco-Friendly Product Manufacturers",
    th: "ผู้ผลิตสินค้าที่เป็นมิตรต่อสิ่งแวดล้อม",
    en: "Eco-Friendly Product Manufacturers",
  },
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/benefits.png",
    alt: "Sustainable Agriculture",
    th: "เกษตรกรรมยั่งยืน",
    en: "Sustainable Agriculture",
  },
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/recycle.png",
    alt: "Renewable Energy Providers",
    th: "ผู้ให้บริการพลังงานหมุนเวียน",
    en: "Renewable Energy Providers",
  },
];

export default function AuditorSegment2() {
  return (
    <BidirectionalScrollReveal
      className="relative -mt-16 w-full overflow-hidden bg-[#020706] text-white sm:-mt-24"
      amount={0.2}
      duration={1.25}
      exitDuration={0.85}
      offset={36}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG2.png"
        alt="Auditor Background"
        className="block w-full min-h-[660px] object-cover sm:min-h-[640px] md:min-h-[600px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,167,155,0.32),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.38),rgba(0,0,0,0.78))]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#020706] via-[#020706]/90 to-transparent sm:h-80" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/55 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center px-4 py-12 sm:px-6 md:py-16">
        <div className="w-full max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <LocalizedText
              as="p"
              th="AI ENERGY AUDITOR ECOSYSTEM"
              en="AI ENERGY AUDITOR ECOSYSTEM"
              className="text-[10px] font-black uppercase tracking-[0.28em] text-[#44e5d0] sm:text-xs"
            />
            <LocalizedText
              as="h2"
              th="ธุรกิจที่เหมาะกับ VEKIN"
              en="SUITABLE BUSINESS FOR VEKIN"
              className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl"
            />
            <LocalizedText
              as="p"
              th="เปลี่ยนข้อมูลพลังงานให้เป็นความได้เปรียบที่ตรวจสอบได้ สำหรับองค์กรที่พร้อมเติบโตอย่างยั่งยืนและน่าเชื่อถือ"
              en="Turn energy data into verifiable advantage for organizations ready to grow with trusted sustainability."
              className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/78 sm:text-base md:text-lg"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 md:grid-cols-4 lg:gap-6">
            {businessTypes.map((item, index) => (
              <div
                key={item.en}
                className="group relative flex min-h-[170px] flex-col items-center justify-between overflow-hidden rounded-[8px] border border-white/15 bg-white/[0.08] p-4 text-center shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#44e5d0]/70 hover:bg-white/[0.13] sm:min-h-[220px] sm:p-6"
                style={{ transitionDelay: `${index * 45}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(68,229,208,0.18),transparent_48%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-black/30 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:h-24 sm:w-24 sm:p-5 md:h-28 md:w-28">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <LocalizedText
                  as="p"
                  th={item.th}
                  en={item.en}
                  className="relative mt-4 text-[11px] font-black uppercase leading-tight text-white sm:text-sm md:text-base"
                />
                <div className="relative mt-4 h-1 w-9 rounded-full bg-[#44e5d0]/70 shadow-[0_0_20px_rgba(68,229,208,0.5)] transition-all duration-300 group-hover:w-14" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
