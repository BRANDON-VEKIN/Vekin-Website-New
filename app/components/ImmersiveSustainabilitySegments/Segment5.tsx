"use client";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import Link from "next/link";
import { eventCards } from "../homeData";
import { useSiteLanguage } from "../siteLanguage";

export default function Segment5() {
  const { language } = useSiteLanguage();

  const images = [
    "/VEKIN Resource all Product/VEKIN 1/pre_event.png",
    "/VEKIN Resource all Product/VEKIN 1/during_event.png",
    "/VEKIN Resource all Product/VEKIN 1/post_event.png",
  ];

  return (
    <BidirectionalScrollReveal
      amount={0.12}
      duration={1.35}
      className="relative bg-black w-full overflow-hidden transform-gpu"
    >
      {/* RESPONSIVE GRID ENGINE */}
      <div className="grid grid-cols-1 sm:grid-cols-3 min-h-0 h-auto sm:min-h-[720px] lg:min-h-[780px]">
        {eventCards.map((card, index) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative overflow-hidden border-b border-white/10 last:border-b-0 outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-400
              /* Mobile Viewport Sizing */
              min-h-[260px] w-full
              /* Tablet & Desktop Viewport Reset */
              sm:min-h-[720px] lg:min-h-[780px] sm:border-b-0 sm:border-x sm:border-white/10"
            aria-label={`Open ${card.title[language]} page`}
          >
            {/* BACKGROUND CANVAS GRAPHIC */}
            <img
              src={images[index] || images[0]}
              alt={`${card.title[language]} preview`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105 select-none pointer-events-none"
            />

            {/* HIGH-CONTRAST MASK LAYERS */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/80" />

            {/* CONTAINER TITLE TEXT */}
            <div className="absolute inset-x-0 px-5 text-center bottom-6 sm:bottom-14 z-20">
              {/* Changed leading-none to leading-[1.1] to safe-guard multi-line wrapping strings */}
              <h2 className="text-[clamp(1.85rem,6.5vw,2.5rem)] font-black leading-[1.1] text-white drop-shadow-md sm:text-[clamp(1.6rem,2.8vw,3rem)] tracking-tight">
                {card.title[language]}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </BidirectionalScrollReveal>
  );
}
