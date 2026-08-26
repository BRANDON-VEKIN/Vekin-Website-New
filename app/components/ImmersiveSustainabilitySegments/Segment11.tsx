"use client";

import { useState } from "react";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import PackagesModal from "../PackagesModal";
import { packageTiers, packagesEyebrow, packagesTitle } from "../packagesData";
import { useSiteLanguage } from "../siteLanguage";

export default function Segment11() {
  const { language } = useSiteLanguage();
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  const copy = {
    th: {
      titleLine1: "ร่วมสร้างสิ่งแวดล้อมไทย",
      titleLine2: "เพื่อก้าวไปสู่สังคมโลก",
      quotation: "ขอใบเสนอราคา"
    },
    en: {
      titleLine1: "Build Thailand's environment together",
      titleLine2: "to move toward a global society",
      quotation: "Get Quotation"
    }
  }[language];

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

      <PackagesModal
        open={isPackagesOpen}
        onClose={() => setIsPackagesOpen(false)}
        packages={packageTiers}
        eyebrow={packagesEyebrow}
        title={packagesTitle}
      />
    </BidirectionalScrollReveal>
  );
}
