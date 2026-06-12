import React from "react";

type LocalizedTextProps = {
    as?: React.ElementType;
    th: string;
    en: string;
    className?: string;
};

function LocalizedText({ as: Component = "div", th, en, className }: LocalizedTextProps) {
    const isThai =
        typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("th");

    return <Component className={className}>{isThai ? th : en}</Component>;
}

export default function CarbonSegment7() {
    return (
<section
  aria-label="Carbon Receipt"
  className="relative flex items-center justify-center h-screen w-full overflow-hidden"
  style={{
    backgroundImage: `url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG4.png')`,
    backgroundPosition: "right",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>

  {/* Mobile overlay */}
  <div className="absolute inset-0 bg-black/40 md:hidden" />

  {/* Optional light desktop overlay (remove if not needed) */}
  <div className="absolute inset-0 bg-black/0 md:bg-transparent" />

  <div className="flex w-full relative z-10">
    <div className="w-full md:w-1/2 px-6">

      <LocalizedText
        as="h1"
        th="รูปแบบการเผยแพร่แบบสมัครสมาชิก"
        en="THE PUBLISH-SUBSCRIBE PUB MODEL"
        className="
          text-white md:text-black
          drop-shadow-[0_8px_30px_rgba(0,0,0,0.2)]
          text-2xl sm:text-3xl md:text-5xl
          font-extrabold
          tracking-tight
          leading-tight
        "
      />

      <LocalizedText
        as="p"
        th="สามารถรวบรวมข้อมูลจากแหล่งต่างๆ ได้อย่างราบรื่นเพื่อสร้างศูนย์ข้อมูลที่แข็งแกร่ง > DATA NEXUS"
        en="ABLE TO COLLECT DATA FROM VARIOUS SOURCES SMOOTHLY TO CREATE A STRONG DATA NEXUS"
        className="
          mt-6 max-w-2xl
          text-white/90 md:text-black/80
          text-sm sm:text-base
        "
      />

    </div>
  </div>
</section>
    );
}

