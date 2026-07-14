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

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.18),rgba(0,0,0,0.5)_44%,rgba(0,0,0,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(68,229,208,0.28),transparent_32%),radial-gradient(circle_at_28%_70%,rgba(22,163,74,0.18),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center px-4 py-10 sm:px-6 lg:justify-end lg:px-10">
        <div className="w-full max-w-4xl rounded-[8px] border border-white/15 bg-black/68 p-5 text-white shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md sm:p-8 lg:p-10">
          <div className="mb-5 inline-flex rounded-full border border-[#44e5d0]/35 bg-[#44e5d0]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
            Verified Trust
          </div>

          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <LocalizedText
                as="h3"
                th="AI Energy Auditor Verified By"
                en="AI Energy Auditor Verified By"
                className="text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl"
              />

              <LocalizedText
                as="p"
                th="Industry-recognized validation protocols and real building-performance benchmarks help keep every insight accurate, reliable, and ready for audit-grade decisions."
                en="Industry-recognized validation protocols and real building-performance benchmarks help keep every insight accurate, reliable, and ready for audit-grade decisions."
                className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-white/76 sm:text-base lg:text-lg"
              />
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {certificationBadges.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setSelectedBadge(src)}
                  className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.08] p-3 shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#44e5d0]/60 hover:bg-white/[0.12] sm:p-5"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/86 p-4 backdrop-blur-md"
          onClick={() => setSelectedBadge(null)}
        >
          <div
            className="relative flex max-h-[88vh] w-full max-w-3xl items-center justify-center rounded-[8px] border border-white/15 bg-white p-5 shadow-[0_32px_90px_rgba(0,0,0,0.5)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedBadge(null)}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-xl font-bold text-slate-700 transition hover:bg-black/18"
              aria-label="Close certification preview"
            >
              x
            </button>
            <img
              src={selectedBadge}
              alt="Expanded certification badge"
              className="max-h-[76vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </BidirectionalScrollReveal>
  );
}
