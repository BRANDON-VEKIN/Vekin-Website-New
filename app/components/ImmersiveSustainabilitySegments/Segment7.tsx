"use client";

import { useSiteLanguage } from "../siteLanguage";

export default function Segment7() {
  const { language } = useSiteLanguage();

  const copy = {
    th: {
      srLabel: "ให้ทุกพื้นที่ เพื่อก้าวสู่เวทีโลก Venue",
      headline: "Fulfilling value", // Usually kept in English for slogans, change to th if needed
      subheading: "ให้ทุกพื้นที่ เพื่อก้าวสู่เวทีโลก"
    },
    en: {
      srLabel: "Providing opportunities for everyone to step onto the world stage.",
      headline: "Fulfilling value",
      subheading: "Providing opportunities for everyone to step onto the world stage."
    }
  }[language] || { th: {}, en: {} };

  return (
    <section className="bg-black relative">
      <h2 className="sr-only">{copy.srLabel}</h2>

      <div className="relative w-full">
        <img
          src="/VEKIN Resource all Product/VEKIN 1/IS_BG7.png"
          alt="VEKIN venue display with blue wireframe buildings and sustainability bubbles"
          className="w-full h-auto object-contain"
        />

        {/* Added responsive padding and set a max-width so text doesn't hit the screen edges on mobile */}
        <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 text-center text-white w-full max-w-[90%] md:max-w-[800px] px-4">
          
          {/* Changed text-5xl to a fluid clamp */}
          <p className="text-[clamp(1.5rem,5vw,3rem)] font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent py-1 sm:py-2 leading-tight">
            {copy.headline}
          </p>

          {/* Changed text-4xl to a fluid clamp and reduced mobile margin-top */}
          <p className="text-[clamp(0.95rem,3.2vw,2.25rem)] font-medium mt-2 sm:mt-6 md:mt-10 leading-snug text-neutral-200">
            {copy.subheading}
          </p>
          
        </div>
      </div>
    </section>
  );
}