import React from "react";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";

export default function AuditorSegment15() {
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
          <div className="mb-5 inline-flex rounded-full border border-[#44e5d0]/35 bg-[#44e5d0]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
            <LocalizedText th="พร้อมเติบโตอย่างตรวจสอบได้" en="Ready For Verified Growth" />
          </div>

          <LocalizedText
            as="h3"
            th="ทำให้ทุกการลงทุนด้านพลังงานตรวจสอบได้"
            en="Make Every Energy Investment Verifiable"
            className="mx-auto max-w-4xl text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl"
          />

          <LocalizedText
            as="p"
            th="เปลี่ยนข้อมูลพลังงานให้เป็นหลักฐานที่เชื่อถือได้สำหรับการประหยัด เงินทุนสีเขียว และโอกาสด้านคาร์บอน"
            en="Turn energy data into trusted proof for savings, green finance, and carbon opportunities."
            className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/72 sm:text-base md:text-lg"
          />

          <div className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/package"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-slate-200 sm:w-auto"
            >
              <LocalizedText as="span" th="ดูแพ็กเกจ" en="View Package" />
            </a>

            <button className="inline-flex w-full items-center justify-center rounded-full bg-[#10b981] px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#0ea371] sm:w-auto">
              <LocalizedText as="span" th="เพิ่ม LINE ผ่าน QR Code" en="Add LINE via QR Code" />
            </button>
          </div>
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
