"use client";

import React, { useState } from "react";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";

const certificationBadges = [
  "/VEKIN Resource all Product/VEKIN 3/Cert1.png",
  "/VEKIN Resource all Product/VEKIN 3/Cert2.png",
  "/VEKIN Resource all Product/VEKIN 3/Cert3.png",
];

export default function AuditorSegment13() {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  return (
    <BidirectionalScrollReveal
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.2}
      duration={1.08}
      offset={64}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/BKK_Park_1.jpg"
        alt="Bangkok Park background"
        className="block w-full min-h-[780px] object-cover sm:min-h-[740px] md:min-h-[720px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.52)_44%,rgba(0,0,0,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(68,229,208,0.28),transparent_32%),radial-gradient(circle_at_72%_70%,rgba(22,163,74,0.18),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 flex items-center justify-start px-4 py-10 sm:px-6 lg:px-10">
        <div className="w-full max-w-4xl rounded-[8px] border border-white/15 bg-black/68 p-5 text-white shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md sm:p-8 lg:p-10">
          <div className="mb-5 inline-flex rounded-full border border-[#44e5d0]/35 bg-[#44e5d0]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
            <LocalizedText th="ความน่าเชื่อถือที่ผ่านการรับรอง" en="Verified Trust" />
          </div>

          <div className="space-y-7">
            <div>
              <LocalizedText
                as="h3"
                th="AI Energy Auditor ได้รับการรับรองโดย"
                en="AI Energy Auditor Verified By"
                className="max-w-3xl text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.95] tracking-tight text-white"
              />

              <LocalizedText
                as="p"
                th="มาตรฐานการตรวจสอบที่อุตสาหกรรมยอมรับและเกณฑ์อ้างอิงจากสมรรถนะอาคารจริง ช่วยให้ทุกข้อมูลเชิงลึกมีความแม่นยำ น่าเชื่อถือ และพร้อมใช้สำหรับการตัดสินใจระดับงานตรวจประเมิน"
                en="Industry-recognized validation protocols and real building-performance benchmarks help keep every insight accurate, reliable, and ready for audit-grade decisions."
                className="mt-5 max-w-3xl text-sm font-medium leading-relaxed text-white/76 sm:text-base lg:text-lg"
              />
            </div>

            <div className="flex snap-x gap-3 overflow-x-auto px-1 pb-4 pt-3 [scrollbar-width:thin] [scrollbar-color:rgba(68,229,208,0.55)_rgba(255,255,255,0.08)] sm:gap-4">
              {certificationBadges.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setSelectedBadge(src)}
                  className="group relative flex aspect-square w-[150px] shrink-0 snap-start items-center justify-center overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.08] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#44e5d0]/60 hover:bg-white/[0.12] sm:w-[190px] sm:p-5 lg:w-[210px]"
                  aria-label={`View certification badge ${index + 1}`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(68,229,208,0.18),transparent_48%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src={src}
                    alt={`Certification Badge ${index + 1}`}
                    className="relative h-full w-full object-contain opacity-95 transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedBadge && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 p-4 backdrop-blur-xl"
          onClick={() => setSelectedBadge(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[8px] border border-white/15 bg-[#061311]/92 p-4 text-white shadow-[0_34px_100px_rgba(0,0,0,0.62),0_0_60px_rgba(68,229,208,0.12)] ring-1 ring-[#44e5d0]/10 sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(68,229,208,0.2),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_42%)]" />

            <div className="relative mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
                  <LocalizedText th="ใบรับรอง" en="Certification" />
                </p>
                <p className="mt-1 text-sm font-semibold text-white/72">
                  <LocalizedText th="รายละเอียดการรับรองมาตรฐาน" en="Verified standard preview" />
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBadge(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg font-bold text-white transition hover:border-[#44e5d0]/60 hover:bg-[#44e5d0]/15 hover:text-[#73f3df]"
                aria-label="Close certification preview"
              >
                x
              </button>
            </div>

            <div className="relative flex max-h-[72vh] items-center justify-center overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(68,229,208,0.12),transparent_45%,rgba(255,255,255,0.06))]" />
              <img
                src={selectedBadge}
                alt="Expanded certification badge"
                className="relative max-h-[64vh] w-full object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>
      )}
    </BidirectionalScrollReveal>
  );
}
