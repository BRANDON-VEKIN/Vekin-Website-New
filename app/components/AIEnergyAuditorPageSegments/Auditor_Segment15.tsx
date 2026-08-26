"use client";

import React, { useState } from "react";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";
import PackagesModal from "../PackagesModal";
import { packageTiers, packagesEyebrow, packagesTitle } from "../packagesData";

export default function AuditorSegment15() {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  return (
    <BidirectionalScrollReveal
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.24}
      duration={1}
      offset={52}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/BKK_Park_2.jpg"
        alt="Bangkok Park background"
        className="block w-full min-h-[560px] object-cover object-center sm:min-h-[620px] md:min-h-0 md:h-auto"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.26),rgba(0,0,0,0.72)),radial-gradient(circle_at_50%_28%,rgba(68,229,208,0.24),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 z-10 flex w-full items-center justify-center px-4 py-16 sm:px-6 md:px-10">
        <div className="mx-auto max-w-5xl rounded-[8px] border border-white/15 bg-black/68 p-5 text-center shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md sm:p-8 md:p-12">
          <LocalizedText
            as="p"
            th="พร้อมเติบโตอย่างตรวจสอบได้"
            en="Ready for verified growth"
            className="mb-4 text-sm font-semibold tracking-wide text-[#73f3df]"
          />

          <LocalizedText
            as="h3"
            th="ทำให้ทุกการลงทุนด้านพลังงานตรวจสอบได้"
            en="Make every energy investment verifiable."
            className="mx-auto max-w-4xl text-3xl font-semibold tracking-[-0.015em] leading-[1.05] sm:text-4xl md:text-5xl"
          />

          <LocalizedText
            as="p"
            th="เปลี่ยนข้อมูลพลังงานให้เป็นหลักฐานที่เชื่อถือได้สำหรับการประหยัด เงินทุนสีเขียว และโอกาสด้านคาร์บอน"
            en="Turn energy data into trusted proof for savings, green finance, and carbon opportunities."
            className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/72 md:text-lg"
          />

          <div className="mx-auto mt-9 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <button
              type="button"
              onClick={() => setIsPackagesOpen(true)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#10b981] px-6 py-3 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-[#0ea371] sm:w-auto"
            >
              <LocalizedText as="span" th="ขอใบเสนอราคา" en="Get Quotation" />
            </button>
          </div>
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
