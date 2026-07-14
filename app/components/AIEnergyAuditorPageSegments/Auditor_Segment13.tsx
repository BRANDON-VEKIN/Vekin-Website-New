import React from "react";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";


export default function AuditorSegment13() {
  return (
<BidirectionalScrollReveal className="relative w-full overflow-hidden bg-black text-white" amount={0.2} duration={1.08} offset={64}>
  <img
    src="/VEKIN Resource all Product/VEKIN 3/BKK_Park_1.jpg"
    alt="River City background"
    className="block w-full min-h-[640px] object-cover sm:min-h-[680px] md:min-h-0 md:h-auto"
  />

  {/* Overlay */}
  <div className="absolute inset-0 flex flex-col md:flex-row">
    
    {/* Spacer for right-side layout on desktop */}
    <div className="hidden md:block md:w-1/2" />

    {/* Content */}
    <div className="flex h-full w-full items-center overflow-y-auto bg-black/55 px-5 py-8 md:w-1/2 md:px-12">
      <div className="ml-auto flex max-h-[88vh] w-full max-w-3xl flex-col items-start gap-5 rounded-xl bg-black/35 p-4 text-left backdrop-blur-sm sm:p-0 sm:bg-transparent md:max-h-none md:gap-6 md:backdrop-blur-0">

        <div>
          <LocalizedText
            as="h3"
            th="AI Energy Auditor ได้รับการยืนยันโดย"
            en="AI Energy Auditor Verified By"
            className="text-xl font-semibold uppercase tracking-wide sm:text-2xl md:text-4xl"
          />

          <LocalizedText
            as="p"
            th="AI Energy Auditor ได้รับการยืนยันโดยโปรโตคอลการรับรองที่เป็นที่ยอมรับในอุตสาหกรรม และผ่านการเปรียบเทียบกับมาตรฐานประสิทธิภาพอาคารจริง เพื่อให้ได้ข้อมูลเชิงลึกด้านพลังงานที่แม่นยำและเชื่อถือได้"
            en="AI Energy Auditor Verified By industry-recognized validation protocols and benchmarked against real-world building performance standards to ensure accurate and reliable energy efficiency insights."
            className="mt-3 text-xs leading-relaxed text-white/80 md:text-base"
          />
        </div>

        {/* Icons row */}
<div className="grid w-full grid-cols-3 items-center gap-3 sm:flex sm:flex-wrap sm:gap-4 md:gap-6">
          {[
            "/VEKIN Resource all Product/VEKIN 3/Cert1.png",
            "/VEKIN Resource all Product/VEKIN 3/Cert2.png",
            "/VEKIN Resource all Product/VEKIN 3/Cert3.png"
          ].map((src, i) => (
            <div
              key={i}
              className="flex aspect-square w-full items-center justify-center sm:h-32 sm:w-32 md:h-48 md:w-48"
            >
              <img 
                src={src} 
                alt={`Certification Badge ${i + 1}`} 
                className="h-full w-full object-contain opacity-95"
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
