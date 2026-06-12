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
export default function AuditorSegment15() {
  return (
<section className="relative w-full overflow-hidden bg-black text-white min-h-[400px] sm:min-h-[500px] md:min-h-0 flex items-center justify-center">
  {/* Background Image: Changed to absolute object-cover so it behaves like a true background on tiny screens */}
  <img
    src="/VEKIN Resource all Product/VEKIN 3/BKK_Park_2.jpg"
    alt="Bangkok Park background"
    className="absolute inset-0 w-full h-full object-cover md:relative md:block md:h-auto"
  />

  {/* Background Tint Overlay for better text readability */}
  <div className="absolute inset-0 bg-black/30 md:hidden" />

  {/* Text Wrapper */}
  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 w-full">
    <div className="bg-black/60 md:bg-black/50 w-full py-8 md:py-14 px-4 sm:px-6 md:px-12 backdrop-blur-sm md:backdrop-blur-none">
      <div className="mx-auto max-w-7xl space-y-6 md:space-y-8 text-center">
        
        {/* Responsive Text Size: Added text-xl base for mobile devices */}
        <LocalizedText 
          as="h3" 
          th="การลงทุนที่เชื่อถือได้ด้วย AI Energy Auditor ที่ไว้วางใจได้" 
          en="Trusted Investment with AI Energy Auditor which can be trusted" 
          className="mx-auto max-w-4xl text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight px-2" 
        />

        {/* Buttons: Clean stack on mobile, horizontal row on tablet/desktop */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap w-full max-w-xs mx-auto sm:max-w-none">
          <a
            href="/package"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-slate-200"
          >
            <LocalizedText as="span" th="แพ็กเกจ" en="Package" />
          </a>
          
          <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600">
            <LocalizedText as="span" th="เพิ่ม LINE ผ่าน QR Code" en="Add LINE via QR Code" />
          </button>
        </div>

      </div>
    </div>
  </div>
</section>
  );
}
