import React from "react";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";

const methodLayers = [
  {
    titleTh: "IoT + ดาวเทียม",
    titleEn: "IoT + Satellite",
    bodyTh: "ครอบคลุมแหล่งข้อมูลครบถ้วน",
    bodyEn: "Full source coverage",
  },
  {
    titleTh: "ISO Knowledge Graph",
    titleEn: "ISO Knowledge Graph",
    bodyTh: "แปลงกฎมาตรฐานเป็นตรรกะตรวจสอบ",
    bodyEn: "Rules mapped into logic",
  },
  {
    titleTh: "Neural Intelligence",
    titleEn: "Neural Intelligence",
    bodyTh: "ให้คะแนนความเชื่อมั่นแบบเรียลไทม์",
    bodyEn: "Real-time confidence scoring",
  },
];

export default function AuditorSegment12() {
  return (
    <BidirectionalScrollReveal
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.2}
      duration={1.08}
      offset={64}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG8.png"
        alt="River City background"
        className="block w-full min-h-[820px] object-cover sm:min-h-[780px] md:min-h-[720px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.12),rgba(0,0,0,0.52)_42%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(68,229,208,0.3),transparent_32%),radial-gradient(circle_at_24%_72%,rgba(14,165,233,0.2),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center px-4 py-10 sm:px-6 lg:justify-end lg:px-10">
        <div className="w-full max-w-3xl rounded-[8px] border border-white/15 bg-black/68 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md sm:p-8 lg:p-10">
          <div className="mb-5 inline-flex rounded-full border border-[#44e5d0]/35 bg-[#44e5d0]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
            Verification Method
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div>
              <LocalizedText
                as="h3"
                th="Big Data"
                en="Big Data"
                className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl"
              />

              <LocalizedText
                as="h3"
                th="Our Methodology"
                en="Our Methodology"
                className="mt-2 text-2xl font-black uppercase leading-tight tracking-tight text-[#44e5d0] sm:text-4xl lg:text-5xl"
              />
            </div>

            <div className="rounded-[8px] border border-[#44e5d0]/20 bg-[#44e5d0]/10 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#73f3df]">
                Confidence Target
              </p>
              <p className="mt-2 text-4xl font-black leading-none text-white">95%</p>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[95%] rounded-full bg-[#44e5d0] shadow-[0_0_20px_rgba(68,229,208,0.55)]" />
              </div>
            </div>
          </div>

          <LocalizedText
            as="p"
            th="VEKIN combines IoT, satellite data, ISO-aware Knowledge Graphs, and Neural Networks into one transparent audit-grade intelligence layer."
            en="VEKIN combines IoT, satellite data, ISO-aware Knowledge Graphs, and Neural Networks into one transparent audit-grade intelligence layer."
            className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-white/76 sm:text-base lg:text-lg"
          />

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {methodLayers.map((layer, index) => (
              <div
                key={layer.titleEn}
                className="group rounded-[8px] border border-white/12 bg-white/[0.07] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#44e5d0]/60 hover:bg-white/[0.11]"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#44e5d0]">
                  Layer 0{index + 1}
                </p>
                <LocalizedText
                  as="p"
                  th={layer.titleTh}
                  en={layer.titleEn}
                  className="mt-3 text-base font-black uppercase leading-tight text-white"
                />
                <LocalizedText
                  as="p"
                  th={layer.bodyTh}
                  en={layer.bodyEn}
                  className="mt-2 text-xs font-semibold leading-relaxed text-white/58"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
