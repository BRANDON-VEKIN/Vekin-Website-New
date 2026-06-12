import React from "react";

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

export default function AuditorSegment13() {
  return (
<section className="relative w-full overflow-hidden bg-black text-white">
  <img
    src="/VEKIN Resource all Product/VEKIN 3/BKK_Park_1.jpg"
    alt="River City background"
    className="block w-full h-auto object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 flex flex-col md:flex-row">
    
    {/* Spacer for right-side layout on desktop */}
    <div className="hidden md:block md:w-1/2" />

    {/* Content */}
    <div className="w-full md:w-1/2 h-full bg-black/50 flex items-center px-6 py-10 md:px-12">
      <div className="w-full max-w-3xl ml-auto flex flex-col items-start gap-6 text-left">

        <div>
          <LocalizedText
            as="h3"
            th="AI Energy Auditor ได้รับการยืนยันโดย"
            en="AI Energy Auditor Verified By"
            className="text-2xl md:text-4xl font-semibold uppercase tracking-wide"
          />

          <LocalizedText
            as="p"
            th="AI Energy Auditor ได้รับการยืนยันโดยโปรโตคอลการรับรองที่เป็นที่ยอมรับในอุตสาหกรรม และผ่านการเปรียบเทียบกับมาตรฐานประสิทธิภาพอาคารจริง เพื่อให้ได้ข้อมูลเชิงลึกด้านพลังงานที่แม่นยำและเชื่อถือได้"
            en="AI Energy Auditor Verified By industry-recognized validation protocols and benchmarked against real-world building performance standards to ensure accurate and reliable energy efficiency insights."
            className="mt-3 text-xs md:text-base text-white/80"
          />
        </div>

        {/* Icons row */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          {["Icon", "Icon", "Icon"].map((item, i) => (
            <div
              key={i}
              className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-xl border border-white/40 bg-white/10 text-[10px] uppercase tracking-[0.2em] text-white/70"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>
  );
}
