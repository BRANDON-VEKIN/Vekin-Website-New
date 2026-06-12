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

export default function AuditorSegment2() {
  return (
  <section className="relative w-full">

    {/* Background Image */}
    <img
      src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG2.png"
      alt="Auditor Background"
      className="w-full min-h-[500px] object-cover md:min-h-0"
    />

    {/* Overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 sm:px-6">
      <div className="w-full max-w-7xl">

        <LocalizedText
          as="h2"
          th="ธุรกิจที่เหมาะสมกับ VEKIN"
          en="SUITABLE BUSINESS FOR VEKIN"
          className="
            mb-8
            text-center
            text-2xl
            font-bold
            sm:text-3xl
            md:mb-16
            md:text-5xl
          "
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-10">

          <div className="flex flex-col items-center text-center">
            <img
              src="/VEKIN Resource all Product/VEKIN 3/money.png"
              alt="Financial Institutions and Banks"
              className="
                mb-3
                h-14
                w-14
                object-contain
                sm:h-20
                sm:w-20
                md:h-28
                md:w-28
              "
            />
            <LocalizedText
              as="p"
              th="สถาบันการเงินและธนาคาร"
              en="Financial Institutions and Banks"
              className="
                text-xs
                font-semibold
                sm:text-sm
                md:text-lg
              "
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/VEKIN Resource all Product/VEKIN 3/investment.png"
              alt="Eco-Friendly Product Manufacturers"
              className="
                mb-3
                h-14
                w-14
                object-contain
                sm:h-20
                sm:w-20
                md:h-28
                md:w-28
              "
            />
            <LocalizedText
              as="p"
              th="ผู้ผลิตสินค้าเพื่อสิ่งแวดล้อม"
              en="Eco-Friendly Product Manufacturers"
              className="
                text-xs
                font-semibold
                sm:text-sm
                md:text-lg
              "
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/VEKIN Resource all Product/VEKIN 3/benefits.png"
              alt="Sustainable Agriculture"
              className="
                mb-3
                h-14
                w-14
                object-contain
                sm:h-20
                sm:w-20
                md:h-28
                md:w-28
              "
            />
            <LocalizedText
              as="p"
              th="เกษตรกรรมยั่งยืน"
              en="Sustainable Agriculture"
              className="
                text-xs
                font-semibold
                sm:text-sm
                md:text-lg
              "
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/VEKIN Resource all Product/VEKIN 3/recycle.png"
              alt="Renewable Energy Providers"
              className="
                mb-3
                h-14
                w-14
                object-contain
                sm:h-20
                sm:w-20
                md:h-28
                md:w-28
              "
            />
            <LocalizedText
              as="p"
              th="ผู้ให้บริการพลังงานหมุนเวียน"
              en="Renewable Energy Providers"
              className="
                text-xs
                font-semibold
                sm:text-sm
                md:text-lg
              "
            />
          </div>

        </div>
      </div>
    </div>
  </section>
  );
}