"use client";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import Bubble from "../Bubble";
import { companyCards } from "../homeData";
import { useSiteLanguage } from "../siteLanguage";

export default function Segment10() {
  const { language } = useSiteLanguage();

  return (
<BidirectionalScrollReveal
  amount={0.12}
  duration={1.35}
  className="relative overflow-hidden bg-black px-5 py-20 text-center text-white transform-gpu sm:px-8 sm:py-32"
>
  {/* Ambient Background Blur Elements */}
  <Bubble className="-left-40 bottom-10 h-80 w-80 opacity-60 pointer-events-none" />
  <Bubble className="-right-20 top-8 h-44 w-44 opacity-70 sm:h-56 sm:w-56 pointer-events-none" />

  <div className="relative z-10 mx-auto max-w-[1120px]">
    {/* Section Header */}
    <h2 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold tracking-tight leading-none">
      {language === "th" ? "ผลงานของเรา" : "Our Work"}
    </h2>

    {/* 1. MOBILE VIEW ONLY: Transparent Image Stream / Carousel */}
    <div className="mt-14 flex w-full items-center gap-10 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none min-[560px]:hidden">
      {companyCards.map((card, index) => (
        <div
          key={`mobile-carousel-${index}`}
          className="w-[50vw] flex-shrink-0 snap-center"
        >
          <div className="flex h-24 w-full items-center justify-center">
            <img
              src={card.image}
              alt={`${card.title[language]} brand logo`}
              className="h-full w-full object-contain brightness-110"
            />
          </div>
        </div>
      ))}
    </div>

    {/* 2. TABLET & DESKTOP VIEW ONLY: Full Grid Cards */}
    <div className="mx-auto mt-16 hidden max-w-[980px] gap-6 min-[560px]:grid min-[560px]:grid-cols-2 lg:grid-cols-4">
      {companyCards.map((card) => (
        <article
          key={`${card.title[language]}-${card.date[language]}`}
          className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white text-black shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(29,244,188,0.2)] w-full"
        >
          {/* Card Content Top */}
          <div className="flex flex-col p-6 text-left">
            <h3 className="text-lg font-bold leading-snug text-zinc-900 line-clamp-2">
              {card.title[language]}
            </h3>
            <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {card.date[language]}
            </p>
          </div>

          {/* Card Logo Bottom Container */}
          <div className="bg-zinc-50/50 px-6 pb-6 pt-2">
            <div className="flex h-16 w-full items-center justify-center overflow-hidden">
              <img
                src={card.image}
                alt={`${card.title[language]} brand logo`}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* Call to Action Footer */}
    <div className="mt-12 sm:mt-16">
      <a
        href="#"
        className="group inline-flex items-center gap-3 text-[clamp(1.2rem,3.5vw,1.75rem)] font-bold text-white transition-colors duration-200 hover:text-mint"
      >
        <span>{language === "th" ? "ดูเพิ่มเติมทั้งหมด" : "See all"}</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true">
          →
        </span>
      </a>
    </div>
  </div>
</BidirectionalScrollReveal>
  );
}
