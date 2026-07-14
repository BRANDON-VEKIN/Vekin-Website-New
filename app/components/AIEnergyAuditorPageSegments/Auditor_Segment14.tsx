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

  // Duplicated to create a seamless infinite scroll loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <BidirectionalScrollReveal className="w-full bg-white py-14 text-slate-900 sm:py-20 md:py-28 overflow-hidden" amount={0.2} duration={1.08} offset={64}>
      {/* Self-contained CSS Animation injected directly into the TSX */}
      <style>{`
        @keyframes inlineMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .self-contained-marquee {
          animation: inlineMarquee 35s linear infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 mb-8 sm:mb-12">
        <LocalizedText
          as="h2"
          th="ลูกค้าของเรา"
          en="CLIENT'S"
          className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl"
        />
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative w-full flex overflow-hidden select-none">
        
        {/* Left/Right Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <div className="flex gap-10 items-center shrink-0 self-contained-marquee py-6">
          {duplicatedLogos.map((src, index) => (
            <div
              key={index}
              className="flex h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 shadow-sm p-6 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Client Logo ${index + 1}`}
                className="h-full w-full rounded-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
