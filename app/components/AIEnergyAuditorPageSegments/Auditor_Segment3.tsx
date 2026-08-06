import React from "react";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";

const capabilityHighlights = [
  { value: "REAL-TIME", label: "Monitoring" },
  { value: "AI", label: "Recommendations" },
  { value: "SMART", label: "Energy Insights" },
];

export default function AuditorSegment3() {
  return (
    <BidirectionalScrollReveal
      aria-labelledby="auditor-hero-3"
      className="relative -mt-24 w-full overflow-hidden bg-[#020706] text-white sm:-mt-32"
      amount={0.2}
      duration={1.25}
      exitDuration={0.85}
      offset={36}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG3.png"
        alt="AI Energy Auditor Background"
        className="block w-full min-h-[720px] object-cover sm:min-h-[700px] md:min-h-[680px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.18),rgba(0,0,0,0.48)_42%,rgba(0,0,0,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_24%,rgba(68,229,208,0.24),transparent_28%),radial-gradient(circle_at_78%_68%,rgba(22,163,74,0.18),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#020706] via-[#020706]/90 to-transparent sm:h-96" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#020706] via-[#020706]/85 to-transparent sm:h-80" />

      <div className="absolute inset-0 flex items-center justify-center px-4 py-8 lg:justify-end lg:px-10">
        <div
          className="
            w-full
            max-w-2xl
            max-h-[86vh]
            overflow-y-auto
            rounded-[8px]
            border
            border-white/15
            bg-black/62
            px-5
            py-6
            shadow-[0_28px_90px_rgba(0,0,0,0.42)]
            backdrop-blur-md

            sm:px-8
            sm:py-10

            md:max-w-[80%]

            lg:min-h-[72%]
            lg:max-w-[50%]
            lg:max-h-none
            lg:overflow-visible
            lg:flex
            lg:items-center
            lg:px-12
            xl:px-16
          "
        >
          <div className="relative max-w-xl text-white">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#44e5d0]/35 bg-[#44e5d0]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
              <span className="h-2 w-2 rounded-full bg-[#44e5d0] shadow-[0_0_18px_rgba(68,229,208,0.9)]" />
              AI Powered Audit
            </div>

            <LocalizedText
              as="h1"
              th="à¸œà¸¹à¹‰à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¸”à¹‰à¸§à¸¢ AI"
              en="AI Energy Auditor"
              className="text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-7xl"
            />

            <LocalizedText
              as="p"
              th="AI Energy Auditor à¸„à¸·à¸­à¹à¸žà¸¥à¸•à¸Ÿà¸­à¸£à¹Œà¸¡à¸­à¸±à¸ˆà¸‰à¸£à¸´à¸¢à¸°à¸—à¸µà¹ˆà¸Šà¹ˆà¸§à¸¢à¹€à¸žà¸´à¹ˆà¸¡à¸›à¸£à¸°à¸ªà¸´à¸—à¸˜à¸´à¸ à¸²à¸žà¸à¸²à¸£à¹ƒà¸Šà¹‰à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¸œà¹ˆà¸²à¸™à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹à¸šà¸šà¹€à¸£à¸µà¸¢à¸¥à¹„à¸—à¸¡à¹Œà¹à¸¥à¸°à¸à¸²à¸£à¸§à¸´à¹€à¸„à¸£à¸²à¸°à¸«à¹Œà¹€à¸Šà¸´à¸‡à¸„à¸²à¸”à¸à¸²à¸£à¸“à¹Œ à¹‚à¸”à¸¢à¸à¸²à¸£à¸§à¸´à¹€à¸„à¸£à¸²à¸°à¸«à¹Œà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸à¸²à¸£à¸›à¸à¸´à¸šà¸±à¸•à¸´à¸‡à¸²à¸™à¸ˆà¸²à¸à¸«à¸¥à¸²à¸¢à¸£à¸°à¸šà¸š à¹à¸žà¸¥à¸•à¸Ÿà¸­à¸£à¹Œà¸¡à¸™à¸µà¹‰à¸Šà¹ˆà¸§à¸¢à¹ƒà¸«à¹‰à¸„à¹‰à¸™à¸«à¸²à¸à¸²à¸£à¹ƒà¸Šà¹‰à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¸—à¸µà¹ˆà¸ªà¸¹à¸à¹€à¸›à¸¥à¹ˆà¸² à¸¥à¸”à¸•à¹‰à¸™à¸—à¸¸à¸™à¸à¸²à¸£à¸”à¸³à¹€à¸™à¸´à¸™à¸‡à¸²à¸™ à¹à¸¥à¸°à¸¢à¸à¸£à¸°à¸”à¸±à¸šà¸„à¸§à¸²à¸¡à¸¢à¸±à¹ˆà¸‡à¸¢à¸·à¸™ à¸žà¸£à¹‰à¸­à¸¡à¸¡à¸­à¸šà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹€à¸Šà¸´à¸‡à¸¥à¸¶à¸à¸­à¸±à¸•à¹‚à¸™à¸¡à¸±à¸•à¸´à¹à¸¥à¸°à¸„à¸³à¹à¸™à¸°à¸™à¸³à¸­à¸±à¸ˆà¸‰à¸£à¸´à¸¢à¸°à¹€à¸žà¸·à¹ˆà¸­à¸à¸²à¸£à¸•à¸±à¸”à¸ªà¸´à¸™à¹ƒà¸ˆà¸—à¸µà¹ˆà¸£à¸§à¸”à¹€à¸£à¹‡à¸§à¹à¸¥à¸°à¹à¸¡à¹ˆà¸™à¸¢à¸³à¸¢à¸´à¹ˆà¸‡à¸‚à¸¶à¹‰à¸™"
              en="AI Energy Auditor is an intelligent platform designed to optimize energy efficiency through real-time monitoring and predictive analytics. By analyzing operational data across multiple systems, it helps organizations identify energy waste, reduce operational costs, and improve sustainability performance. The platform provides automated insights and smart recommendations that support faster and more accurate decision-making. With a modern AI-driven approach, businesses can achieve greater energy transparency while advancing toward long-term environmental goals."
              className="mt-5 text-xs leading-relaxed text-white/82 sm:mt-6 sm:text-sm md:text-base lg:text-lg"
            />

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {capabilityHighlights.map((item) => (
                <div
                  key={item.value}
                  className="rounded-[8px] border border-white/12 bg-white/[0.07] px-4 py-3 shadow-[0_14px_35px_rgba(0,0,0,0.22)]"
                >
                  <p className="text-sm font-black uppercase leading-none text-[#44e5d0] sm:text-base">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
