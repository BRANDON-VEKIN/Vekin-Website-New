import React from "react";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";

const trustSignals = [
  { value: "ISO", label: "Aligned Rules" },
  { value: "95%", label: "Probabilistic Accuracy" },
  { value: "80%", label: "Lower Audit Cost" },
  { value: "VVB", label: "Digital Verification" },
];

export default function AuditorSegment4() {
  return (
    <BidirectionalScrollReveal
      aria-labelledby="auditor-carbon-footprint"
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.2}
      duration={1.1}
      offset={68}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG4.png"
        alt="Isometric city background"
        className="block w-full min-h-[780px] object-cover sm:min-h-[740px] md:min-h-[720px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.64)_44%,rgba(0,0,0,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_17%_30%,rgba(68,229,208,0.26),transparent_28%),radial-gradient(circle_at_72%_38%,rgba(14,165,233,0.16),transparent_32%)]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center px-4 py-8 lg:justify-start lg:px-10">
        <div
          className="
            w-full
            max-w-3xl
            max-h-[88vh]
            overflow-y-auto
            rounded-[8px]
            border
            border-white/15
            bg-black/64
            px-5
            py-6
            shadow-[0_28px_90px_rgba(0,0,0,0.42)]
            backdrop-blur-md

            sm:px-8
            sm:py-10

            md:max-w-[82%]

            lg:max-w-[54%]
            lg:max-h-none
            lg:overflow-visible
            lg:px-12
            xl:px-16
          "
        >
          <div className="max-w-2xl text-white">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#44e5d0]/35 bg-[#44e5d0]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
              <span className="h-2 w-2 rounded-full bg-[#44e5d0] shadow-[0_0_18px_rgba(68,229,208,0.9)]" />
              Carbon Trust Engine
            </div>

            <LocalizedText
              as="h2"
              th="AI AUDITOR FOR CARBON FOOTPRINT"
              en="AI AUDITOR FOR CARBON FOOTPRINT"
              className="text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl"
            />

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustSignals.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[8px] border border-white/12 bg-white/[0.07] px-3 py-3 shadow-[0_14px_35px_rgba(0,0,0,0.22)]"
                >
                  <p className="text-lg font-black uppercase leading-none text-[#44e5d0] sm:text-xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/60 sm:text-[10px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <LocalizedText
              as="p"
              th="AI Carbon Auditor à¸‚à¸­à¸‡ VEKIN à¹€à¸›à¹‡à¸™ Digital VVB à¸—à¸µà¹ˆà¹ƒà¸Šà¹‰ Hybrid Neuro-Symbolic AI à¹à¸¥à¸°à¸à¸Ž ISO à¹€à¸žà¸·à¹ˆà¸­à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸‚à¹‰à¸­à¸¡à¸¹à¸¥ IoT à¹à¸¥à¸°à¸”à¸²à¸§à¹€à¸—à¸µà¸¢à¸¡à¹à¸šà¸šà¹€à¸£à¸µà¸¢à¸¥à¹„à¸—à¸¡à¹Œ à¸Šà¹ˆà¸§à¸¢à¸¥à¸”à¸•à¹‰à¸™à¸—à¸¸à¸™à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸¥à¸‡à¸à¸§à¹ˆà¸² 80% à¹à¸¥à¸°à¸¥à¸”à¸„à¸§à¸²à¸¡à¹€à¸ªà¸µà¹ˆà¸¢à¸‡ Greenwashing à¸”à¹‰à¸§à¸¢ Carbon Receipt à¸šà¸™ Blockchain à¸žà¸£à¹‰à¸­à¸¡à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸„à¸²à¸£à¹Œà¸šà¸­à¸™à¹ƒà¸«à¹‰à¹€à¸›à¹‡à¸™à¸ªà¸´à¸™à¸—à¸£à¸±à¸žà¸¢à¹Œà¸”à¸´à¸ˆà¸´à¸—à¸±à¸¥à¸—à¸µà¹ˆà¸™à¹ˆà¸²à¹€à¸Šà¸·à¹ˆà¸­à¸–à¸·à¸­ à¹€à¸žà¸·à¹ˆà¸­à¸›à¸¥à¸”à¸¥à¹‡à¸­à¸à¹€à¸‡à¸´à¸™à¸—à¸¸à¸™à¸ªà¸µà¹€à¸‚à¸µà¸¢à¸§à¹à¸¥à¸°à¸•à¸¥à¸²à¸”à¸„à¸²à¸£à¹Œà¸šà¸­à¸™à¸„à¸¸à¸“à¸ à¸²à¸žà¸ªà¸¹à¸‡"
              en="VEKIN's AI Carbon Auditor acts as a Digital VVB, using Hybrid Neuro-Symbolic AI and ISO-aligned rules to verify IoT and satellite data in real time. It cuts audit costs by over 80%, reduces greenwashing risk with blockchain Carbon Receipts, and turns carbon data into trusted digital assets for green finance and premium carbon markets."
              className="mt-6 text-xs leading-relaxed text-white/82 sm:text-sm md:text-base lg:text-lg"
            />
          </div>
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
