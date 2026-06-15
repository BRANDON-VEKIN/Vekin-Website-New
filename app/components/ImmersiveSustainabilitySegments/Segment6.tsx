"use client";

import { useSiteLanguage } from "../siteLanguage";

export default function Segment6() {
  const { language } = useSiteLanguage();
  const copy = {
    th: { primary: "ปุ่มหลัก", secondary: "ปุ่มรอง" },
    en: { primary: "Primary Action", secondary: "Secondary Action" }
  }[language];

  return (
<section className="bg-black py-12 sm:py-20 overflow-hidden">
  {/* OUTER CONTAINER: Breaks out of parents to span the entire screen edge-to-edge */}
  <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col lg:block min-h-0 lg:h-[650px] xl:h-[720px]">
    
    {/* FULL-SCREEN IMMERSIVE CANVAS IMAGE */}
    <div className="absolute inset-0 z-0 w-full h-full">
      <img
        src="/VEKIN Resource all Product/VEKIN 1/IS_BG6.png"
        alt="Carbon neutrality sky with CO2 bubbles"
        className="h-full w-full object-cover select-none pointer-events-none"
      />
      {/* Balanced premium overlay layer to ensure text contrast */}
      <div className="absolute inset-0 bg-black/30 lg:bg-gradient-to-r lg:from-black/50 lg:via-transparent lg:to-black/30 pointer-events-none" />
    </div>

    {/* CONTENT CONTAINER: Locked back into your grid alignment system */}
    <div className="relative z-10 mx-auto h-full max-w-[1180px] px-5 sm:px-8 lg:px-10 flex flex-col justify-between py-8 lg:py-14 gap-8 lg:gap-0">
      
      {/* HEADER SLOGAN */}
      <div className="text-white text-[clamp(2.2rem,7vw,4.5rem)] font-black leading-tight tracking-tight text-left">
        For a Better Goal
      </div>

      {/* EXPLANATORY CARD COMPONENT */}
      <div className="self-end max-w-[700px] w-full bg-neutral-900/90 lg:bg-white/30 text-white lg:text-black p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/5 lg:border-none backdrop-blur-md">
        <h3 className="mb-2 text-xl sm:text-2xl font-black tracking-tight text-emerald-400 lg:text-neutral-900">
          Carbon Neutrality
        </h3>
        <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed opacity-90 lg:opacity-100">
          The process of achieving net-zero carbon emissions by reducing, capturing, or offsetting carbon to minimize environmental impact and address climate change.
        </p>
      </div>

    </div>
  </div>
</section>
  );
}
