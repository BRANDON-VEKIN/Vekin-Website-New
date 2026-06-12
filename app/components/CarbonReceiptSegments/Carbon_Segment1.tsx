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

export default function CarbonSegment1() {
    return (
<section
  aria-label="Carbon Receipt"
  className="relative h-screen w-full overflow-hidden bg-black"
  style={{
    backgroundImage: "url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG1.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Content wrapper */}
  <div className="relative z-10 flex h-full items-center">
    <div className="w-full px-6 sm:px-10 md:px-16">
      
      <div className="w-full md:w-1/2 space-y-6">

        <LocalizedText
          as="h1"
          th="ขับเคลื่อนอนาคตของโลจิสติกส์และพลังงานด้วยโซลูชันที่ยั่งยืน"
          en="DRIVING THE FUTURE OF LOGISTICS AND ENERGY WITH SUSTAINABLE SOLUTIONS"
          className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent
                     text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight"
        />

        <LocalizedText
          as="p"
          th="บันทึกทุกธุรกรรมเครดิตคาร์บอนผ่านบันทึกที่ได้รับการตรวจสอบโดยบล็อกเชน เพื่อให้มั่นใจถึงการตรวจสอบย้อนกลับและลดความซับซ้อนของภาระผูกพันในการรายงานด้านสิ่งแวดล้อมของคุณ"
          en="DOCUMENT EVERY CARBON CREDIT TRANSACTION THROUGH A BLOCKCHAIN-VERIFIED RECORD, ENSURING TRACEABILITY AND SIMPLIFYING YOUR ENVIROMENTAL REPORTING OBLIGATIONS."
          className="text-white/80 text-sm sm:text-base max-w-2xl"
        />

      </div>

    </div>
  </div>
</section>
    );
}

