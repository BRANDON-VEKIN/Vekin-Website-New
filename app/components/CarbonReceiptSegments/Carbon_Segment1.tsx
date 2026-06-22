"use client";

import React from "react";
import { useSiteLanguage } from "../siteLanguage";

const copy = {
    th: {
        title: "ขับเคลื่อนอนาคตของโลจิสติกส์และพลังงานด้วยโซลูชันที่ยั่งยืน",
        description: "บันทึกทุกธุรกรรมเครดิตคาร์บอนผ่านบันทึกที่ได้รับการตรวจสอบโดยบล็อกเชน เพื่อให้มั่นใจถึงการตรวจสอบย้อนกลับและลดความซับซ้อนของภาระผูกพันในการรายงานด้านสิ่งแวดล้อมของคุณ",
    },
    en: {
        title: "DRIVING THE FUTURE OF LOGISTICS AND ENERGY WITH SUSTAINABLE SOLUTIONS",
        description: "DOCUMENT EVERY CARBON CREDIT TRANSACTION THROUGH A BLOCKCHAIN-VERIFIED RECORD, ENSURING TRACEABILITY AND SIMPLIFYING YOUR ENVIRONMENTAL REPORTING OBLIGATIONS.",
    },
} as const;

export default function CarbonSegment1() {
    const { language } = useSiteLanguage();
    const text = copy[language];

    return (
<section
  aria-label="Carbon Receipt"
  className="relative h-screen w-full overflow-hidden bg-black"
  style={{
    backgroundImage: "url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG1.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Content wrapper */}
  <div className="relative z-10 flex h-full items-center">
    <div className="w-full px-6 sm:px-10 md:px-16">
      
      <div className="w-full md:w-1/2 space-y-6">

        <h1
          className="bg-gradient-to-r from-[#00464F] to-[#53BC81] bg-clip-text text-transparent
                     text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight"
        >
          {text.title}
        </h1>

        <p className="text-white/80 text-sm sm:text-base max-w-2xl">
          {text.description}
        </p>

      </div>

    </div>
  </div>
</section>
    );
}

