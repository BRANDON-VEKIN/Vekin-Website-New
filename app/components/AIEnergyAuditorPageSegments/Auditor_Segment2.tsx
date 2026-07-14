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

const businessTypes = [
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/money.png",
    alt: "Financial Institutions and Banks",
    th: "à¸ªà¸–à¸²à¸šà¸±à¸™à¸à¸²à¸£à¹€à¸‡à¸´à¸™à¹à¸¥à¸°à¸˜à¸™à¸²à¸„à¸²à¸£",
    en: "Financial Institutions and Banks",
  },
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/investment.png",
    alt: "Eco-Friendly Product Manufacturers",
    th: "à¸œà¸¹à¹‰à¸œà¸¥à¸´à¸•à¸ªà¸´à¸™à¸„à¹‰à¸²à¹€à¸žà¸·à¹ˆà¸­à¸ªà¸´à¹ˆà¸‡à¹à¸§à¸”à¸¥à¹‰à¸­à¸¡",
    en: "Eco-Friendly Product Manufacturers",
  },
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/benefits.png",
    alt: "Sustainable Agriculture",
    th: "à¹€à¸à¸©à¸•à¸£à¸à¸£à¸£à¸¡à¸¢à¸±à¹ˆà¸‡à¸¢à¸·à¸™",
    en: "Sustainable Agriculture",
  },
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/recycle.png",
    alt: "Renewable Energy Providers",
    th: "à¸œà¸¹à¹‰à¹ƒà¸«à¹‰à¸šà¸£à¸´à¸à¸²à¸£à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¸«à¸¡à¸¸à¸™à¹€à¸§à¸µà¸¢à¸™",
    en: "Renewable Energy Providers",
  },
];

export default function AuditorSegment2() {
  return (
    <BidirectionalScrollReveal
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.2}
      duration={1.05}
      offset={64}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG2.png"
        alt="Auditor Background"
        className="block w-full min-h-[660px] object-cover sm:min-h-[640px] md:min-h-[600px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,167,155,0.32),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.38),rgba(0,0,0,0.78))]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/55 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center px-4 py-12 sm:px-6 md:py-16">
        <div className="w-full max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <LocalizedText
              as="p"
              th="AI ENERGY AUDITOR ECOSYSTEM"
              en="AI ENERGY AUDITOR ECOSYSTEM"
              className="text-[10px] font-black uppercase tracking-[0.28em] text-[#44e5d0] sm:text-xs"
            />
            <LocalizedText
              as="h2"
              th="à¸˜à¸¸à¸£à¸à¸´à¸ˆà¸—à¸µà¹ˆà¹€à¸«à¸¡à¸²à¸°à¸ªà¸¡à¸à¸±à¸š VEKIN"
              en="SUITABLE BUSINESS FOR VEKIN"
              className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl"
            />
            <LocalizedText
              as="p"
              th="à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™à¹ƒà¸«à¹‰à¹€à¸›à¹‡à¸™à¸„à¸§à¸²à¸¡à¹„à¸”à¹‰à¹€à¸›à¸£à¸µà¸¢à¸šà¸—à¸µà¹ˆà¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹„à¸”à¹‰à¸ªà¸³à¸«à¸£à¸±à¸šà¸˜à¸¸à¸£à¸à¸´à¸ˆà¸—à¸µà¹ˆà¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¹€à¸•à¸´à¸šà¹‚à¸•à¸­à¸¢à¹ˆà¸²à¸‡à¸¢à¸±à¹ˆà¸‡à¸¢à¸·à¸™"
              en="Turn energy data into verifiable advantage for organizations ready to grow with trusted sustainability."
              className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/78 sm:text-base md:text-lg"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 md:grid-cols-4 lg:gap-6">
            {businessTypes.map((item, index) => (
              <div
                key={item.en}
                className="group relative flex min-h-[170px] flex-col items-center justify-between overflow-hidden rounded-[8px] border border-white/15 bg-white/[0.08] p-4 text-center shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#44e5d0]/70 hover:bg-white/[0.13] sm:min-h-[220px] sm:p-6"
                style={{ transitionDelay: `${index * 45}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(68,229,208,0.18),transparent_48%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-black/30 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:h-24 sm:w-24 sm:p-5 md:h-28 md:w-28">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <LocalizedText
                  as="p"
                  th={item.th}
                  en={item.en}
                  className="relative mt-4 text-[11px] font-black uppercase leading-tight text-white sm:text-sm md:text-base"
                />
                <div className="relative mt-4 h-1 w-9 rounded-full bg-[#44e5d0]/70 shadow-[0_0_20px_rgba(68,229,208,0.5)] transition-all duration-300 group-hover:w-14" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
