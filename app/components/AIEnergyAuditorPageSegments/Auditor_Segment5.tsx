import React from "react";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";

type LocalizedTextProps = {
  as?: React.ElementType;
  th: string;
  en: string;
  className?: string;
};

function LocalizedText({
  as: Component = "div",
  th,
  en,
  className,
}: LocalizedTextProps) {
  const isThai =
    typeof navigator !== "undefined" &&
    navigator.language.toLowerCase().startsWith("th");

  return (
    <Component className={className}>
      {isThai ? th : en}
    </Component>
  );
}

const scopes = [
  {
    number: "01",
    titleTh: "à¸‚à¸­à¸šà¹€à¸‚à¸• 1",
    titleEn: "Scope 1",
    descTh: "à¸à¸²à¸£à¸›à¸¥à¹ˆà¸­à¸¢à¸—à¸²à¸‡à¸•à¸£à¸‡à¸ˆà¸²à¸à¸à¸´à¸ˆà¸à¸£à¸£à¸¡à¸‚à¸­à¸‡à¸­à¸‡à¸„à¹Œà¸à¸£",
    descEn: "Direct emissions from owned or controlled operations.",
  },
  {
    number: "02",
    titleTh: "à¸‚à¸­à¸šà¹€à¸‚à¸• 2",
    titleEn: "Scope 2",
    descTh: "à¸à¸²à¸£à¸›à¸¥à¹ˆà¸­à¸¢à¸ˆà¸²à¸à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¹„à¸Ÿà¸Ÿà¹‰à¸²à¸—à¸µà¹ˆà¸‹à¸·à¹‰à¸­à¸¡à¸²à¹ƒà¸Šà¹‰",
    descEn: "Purchased electricity and energy-related emissions.",
  },
  {
    number: "03",
    titleTh: "à¸‚à¸­à¸šà¹€à¸‚à¸• 3",
    titleEn: "Scope 3",
    descTh: "à¸à¸²à¸£à¸›à¸¥à¹ˆà¸­à¸¢à¸—à¸µà¹ˆà¹€à¸à¸´à¸”à¸‚à¸¶à¹‰à¸™à¸•à¸¥à¸­à¸”à¸«à¹ˆà¸§à¸‡à¹‚à¸‹à¹ˆà¸„à¸¸à¸“à¸„à¹ˆà¸²",
    descEn: "Value-chain emissions across suppliers, logistics, and use.",
  },
];

export default function AuditorSegment5() {
  return (
    <BidirectionalScrollReveal
      as="section"
      aria-labelledby="auditor-scope"
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.2}
      duration={1.08}
      offset={64}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Scope_BG.jpg"
        alt="Scope background"
        className="block w-full min-h-[760px] object-cover sm:min-h-[720px] md:min-h-[680px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.38),rgba(0,0,0,0.78)),radial-gradient(circle_at_50%_28%,rgba(68,229,208,0.28),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center px-4 py-12 sm:px-6 md:py-16">
        <div className="w-full max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <LocalizedText
              as="p"
              th="CARBON ACCOUNTING COVERAGE"
              en="CARBON ACCOUNTING COVERAGE"
              className="text-[10px] font-black uppercase tracking-[0.28em] text-[#44e5d0] sm:text-xs"
            />
            <LocalizedText
              as="h2"
              th="à¸„à¸£à¸­à¸šà¸„à¸¥à¸¸à¸¡à¸à¸²à¸£à¸›à¸¥à¹ˆà¸­à¸¢à¸„à¸²à¸£à¹Œà¸šà¸­à¸™à¸—à¸±à¹‰à¸‡ 3 à¸‚à¸­à¸šà¹€à¸‚à¸•"
              en="Scope 1, 2, and 3 Emissions Intelligence"
              className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl"
            />
            <LocalizedText
              as="p"
              th="à¸£à¸§à¸¡à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸ˆà¸²à¸à¸à¸´à¸ˆà¸à¸£à¸£à¸¡ à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™ à¹à¸¥à¸°à¸«à¹ˆà¸§à¸‡à¹‚à¸‹à¹ˆà¸„à¸¸à¸“à¸„à¹ˆà¸²à¹€à¸žà¸·à¹ˆà¸­à¸ªà¸£à¹‰à¸²à¸‡à¸ à¸²à¸žà¸£à¸§à¸¡à¸„à¸²à¸£à¹Œà¸šà¸­à¸™à¸—à¸µà¹ˆà¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹„à¸”à¹‰"
              en="Unify operational, energy, and value-chain data into one verified carbon view."
              className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/78 sm:text-base md:text-lg"
            />
          </div>

          <div className="relative mt-9 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:gap-8">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-[52px] hidden h-px bg-gradient-to-r from-transparent via-[#44e5d0]/60 to-transparent sm:block" />

            {scopes.map((scope) => (
              <div
                key={scope.titleEn}
                className="group relative overflow-hidden rounded-[8px] border border-white/15 bg-white/[0.08] p-5 text-center shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#44e5d0]/70 hover:bg-white/[0.13] sm:min-h-[260px] sm:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(68,229,208,0.18),transparent_46%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#44e5d0]/40 bg-black/45 shadow-[0_0_40px_rgba(68,229,208,0.18)] sm:h-28 sm:w-28">
                  <div className="absolute inset-3 rounded-full border border-white/15" />
                  <span className="relative text-3xl font-black text-[#44e5d0] sm:text-4xl">
                    {scope.number}
                  </span>
                </div>

                <LocalizedText
                  as="h3"
                  th={scope.titleTh}
                  en={scope.titleEn}
                  className="relative mt-5 text-2xl font-black uppercase leading-none text-white sm:text-3xl"
                />
                <LocalizedText
                  as="p"
                  th={scope.descTh}
                  en={scope.descEn}
                  className="relative mx-auto mt-3 max-w-xs text-xs font-medium leading-relaxed text-white/68 sm:text-sm"
                />
                <div className="relative mx-auto mt-5 h-1 w-10 rounded-full bg-[#44e5d0]/75 shadow-[0_0_20px_rgba(68,229,208,0.5)] transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
