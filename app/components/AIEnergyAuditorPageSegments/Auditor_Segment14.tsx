import React from "react";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";

export default function ClientCarousel() {
  const logos = [
    "/VEKIN Resource all Product/VEKIN 3/Partner1.jpg",
    "/VEKIN Resource all Product/VEKIN 3/Partner2.png",
    "/VEKIN Resource all Product/VEKIN 3/Partner3.jpg",
    "/VEKIN Resource all Product/VEKIN 3/Partner4.jpg",
    "/VEKIN Resource all Product/VEKIN 3/Partner5.png",
    "/VEKIN Resource all Product/VEKIN 3/Partner6.jpg",
    "/VEKIN Resource all Product/VEKIN 3/Partner7.png",
    "/VEKIN Resource all Product/VEKIN 3/Partner8.png",
    "/VEKIN Resource all Product/VEKIN 3/Partner9.jpg",
    "/VEKIN Resource all Product/VEKIN 3/Partner10.png",
    "/VEKIN Resource all Product/VEKIN 3/Partner11.jpg",
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <BidirectionalScrollReveal
      className="w-full overflow-hidden bg-slate-950 py-16 text-white sm:py-20 md:py-28"
      amount={0.2}
      duration={1.08}
      offset={64}
    >
      <style>{`
        @keyframes inlineMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .self-contained-marquee {
          animation: inlineMarquee 35s linear infinite;
        }
      `}</style>

      <div className="mx-auto mb-10 grid max-w-7xl gap-5 px-5 sm:px-6 md:mb-14 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <LocalizedText
            as="p"
            th="เครือข่ายที่ไว้วางใจ"
            en="Trusted network"
            className="mb-4 text-sm font-semibold tracking-wide text-[#73f3df]"
          />
          <LocalizedText
            as="h2"
            th="ลูกค้าและพันธมิตร"
            en="Clients & partners."
            className="text-4xl font-semibold tracking-[-0.015em] leading-[1.02] sm:text-5xl md:text-6xl"
          />
        </div>

        <LocalizedText
          as="p"
          th="องค์กรและพันธมิตรที่ร่วมสร้างข้อมูลพลังงานและคาร์บอนที่ตรวจสอบได้กับ VEKIN"
          en="Organizations and partners building verified energy and carbon intelligence with VEKIN."
          className="max-w-2xl text-base font-medium leading-relaxed text-white/70 sm:text-lg lg:justify-self-end"
        />
      </div>

      <div className="relative w-full select-none overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none sm:w-28" />
        <div className="absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none sm:w-28" />

        <div className="flex shrink-0 items-center gap-6 self-contained-marquee py-6 sm:gap-8">
          {duplicatedLogos.map((src, index) => (
            <div
              key={index}
              className="group flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.96] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#44e5d0]/50 sm:h-44 sm:w-44 sm:p-5 md:h-52 md:w-52"
            >
              <img
                src={src}
                alt={`Client Logo ${index + 1}`}
                className="h-full w-full rounded-full object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
