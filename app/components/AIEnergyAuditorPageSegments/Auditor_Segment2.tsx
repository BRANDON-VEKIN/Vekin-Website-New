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
  <section className="relative w-full overflow-hidden">

    {/* Background Image */}
    <img
      src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG2.png"
      alt="Auditor Background"
      className="w-full min-h-[560px] object-cover sm:min-h-[520px] md:min-h-0"
    />

    {/* Overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-black/55 px-4 py-10 sm:px-6">
      <div className="w-full max-w-7xl">

        <LocalizedText
          as="h2"
          th="ธุรกิจที่เหมาะสมกับ VEKIN"
          en="SUITABLE BUSINESS FOR VEKIN"
          className="
            mb-6
            text-center
            text-xl
            font-bold
            leading-tight
            sm:text-3xl
            md:mb-16
            md:text-5xl
          "
        />

        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-6 md:grid-cols-4 md:gap-10">

          <div className="flex flex-col items-center text-center">
            <img
              src="/VEKIN Resource all Product/VEKIN 3/money.png"
              alt="Financial Institutions and Banks"
              className="
                mb-2
                h-12
                w-12
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
                text-[11px]
                font-semibold
                leading-tight
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
                mb-2
                h-12
                w-12
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
                text-[11px]
                font-semibold
                leading-tight
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
                mb-2
                h-12
                w-12
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
                text-[11px]
                font-semibold
                leading-tight
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
                mb-2
                h-12
                w-12
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
                text-[11px]
                font-semibold
                leading-tight
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
