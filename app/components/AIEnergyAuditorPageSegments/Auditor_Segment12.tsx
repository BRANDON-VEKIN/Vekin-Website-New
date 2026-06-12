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


export default function AuditorSegment12() {
  return (
<section className="relative w-full overflow-hidden bg-black text-white">
  <img
    src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG8.png"
    alt="River City background"
    className="block w-full h-auto object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 flex flex-col md:flex-row">
    
    {/* Spacer (desktop only for right-side alignment) */}
    <div className="hidden md:block md:w-1/2" />

    {/* Content */}
    <div className="w-full md:w-1/2 h-full bg-black/50 flex items-center p-6 sm:p-10 md:p-16">
      <div className="max-w-2xl w-full space-y-6">

        <LocalizedText
          as="h3"
          th="ข้อมูลขนาดใหญ่"
          en="Big Data"
          className="text-2xl sm:text-3xl md:text-5xl font-semibold uppercase leading-tight"
        />

        {/* Placeholder block */}
        <div className="flex justify-center md:justify-start">
          <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 rounded-2xl border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center text-xs uppercase tracking-[0.25em] text-white/70 text-center">
            <LocalizedText as="span" th="รูปภาพตัวอย่าง" en="Image Placeholder" />
          </div>
        </div>

        <LocalizedText
          as="p"
          th="ข้อความตัวอย่าง"
          en="Fake text"
          className="text-sm sm:text-base md:text-lg max-w-xl"
        />
      </div>
    </div>
  </div>
</section>
  );
}
