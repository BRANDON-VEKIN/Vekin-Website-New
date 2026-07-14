import React from "react";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";

const comparisonSteps = [
  {
    step: "01",
    th: "à¹€à¸ªà¸µà¸¢à¹€à¸§à¸¥à¸²à¸à¸±à¸šà¸à¸²à¸£à¹€à¸à¹‡à¸šà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹à¸¥à¸°à¸—à¸µà¸¡à¸‡à¸²à¸™à¸—à¸µà¹ˆà¸–à¸¹à¸à¸à¸”à¸”à¸±à¸™",
    en: "Time is lost and teams are stretched thin",
  },
  {
    step: "02",
    th: "VEKIN à¹€à¸‚à¹‰à¸²à¸¡à¸²à¸ªà¸£à¹‰à¸²à¸‡à¸„à¸§à¸²à¸¡à¹„à¸§à¹‰à¸§à¸²à¸‡à¹ƒà¸ˆà¸”à¹‰à¸§à¸¢ AI",
    en: "Trust is earned when VEKIN is in play",
  },
  {
    step: "03",
    th: "à¸§à¸´à¸˜à¸µà¹€à¸”à¸´à¸¡à¹„à¸¡à¹ˆà¹à¸¡à¹ˆà¸™à¸¢à¸³à¸žà¸­à¸ªà¸³à¸«à¸£à¸±à¸šà¸à¸²à¸£à¸§à¸±à¸”à¸œà¸¥",
    en: "Traditional methods lack the precision to measure",
  },
];

export default function AuditorSegment9() {
  return (
    <BidirectionalScrollReveal
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.2}
      duration={1.08}
      offset={64}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG7.png"
        alt="Robot Human background"
        className="block w-full min-h-[760px] object-cover sm:min-h-[720px] md:min-h-[680px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.76)_76%,rgba(0,0,0,0.94))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(68,229,208,0.22),transparent_32%),radial-gradient(circle_at_22%_62%,rgba(14,165,233,0.18),transparent_34%)]" />

      <div className="absolute inset-x-0 bottom-0 px-4 pb-5 sm:px-6 sm:pb-8 lg:px-10 lg:pb-12">
        <div className="mx-auto max-w-7xl rounded-[8px] border border-white/15 bg-black/68 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-[#44e5d0]/35 bg-[#44e5d0]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
                Audit Shift
              </div>
              <LocalizedText
                as="h3"
                th="à¹€à¸¡à¸·à¹ˆà¸­à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¹à¸šà¸šà¹€à¸”à¸´à¸¡à¸žà¸š AI"
                en="Traditional Audit vs AI Trust"
                className="text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
              />
              <LocalizedText
                as="p"
                th="à¸ˆà¸²à¸à¸à¸²à¸£à¸—à¸³à¸‡à¸²à¸™à¸Šà¹‰à¸² à¹„à¸›à¸ªà¸¹à¹ˆà¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸—à¸µà¹ˆà¹€à¸Šà¸·à¹ˆà¸­à¸–à¸·à¸­à¹„à¸”à¹‰ à¹à¸¡à¹ˆà¸™à¸¢à¸³ à¹à¸¥à¸°à¸žà¸£à¹‰à¸­à¸¡à¸‚à¸¢à¸²à¸¢"
                en="A cleaner view of the shift from slow manual work to verifiable, scalable intelligence."
                className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-white/72 sm:text-base"
              />
            </div>

            <div className="grid gap-3">
              {comparisonSteps.map((item) => (
                <div
                  key={item.step}
                  className="group grid grid-cols-[auto_1fr] items-center gap-4 rounded-[8px] border border-white/12 bg-white/[0.07] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#44e5d0]/60 hover:bg-white/[0.11]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#44e5d0]/40 bg-black/35 text-lg font-black text-[#44e5d0] shadow-[0_0_30px_rgba(68,229,208,0.16)]">
                    {item.step}
                  </div>
                  <LocalizedText
                    as="p"
                    th={item.th}
                    en={item.en}
                    className="text-sm font-bold leading-snug text-white/84 sm:text-base lg:text-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
