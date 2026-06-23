import React from "react";
import LocalizedText from "../LocalizedText";

export default function AuditorSegment9() {
  return (
<section className="relative w-full overflow-hidden bg-black text-white">

  {/* Background */}
  <img
    src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG7.png"
    alt="Robot Human background"
    className="block w-full min-h-[620px] object-cover sm:min-h-[680px] md:min-h-0"
  />

  <div className="absolute inset-0 bg-black/10" />

  {/* Bottom Content Card */}
  <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 sm:px-0 sm:pb-0">
    <div
      className="
        w-full
        bg-black/60
        backdrop-blur-sm
        text-white
        max-h-[78vh]
        overflow-y-auto
        rounded-xl
        p-4
        sm:p-8
        sm:rounded-none
        md:p-12
        lg:p-16
      "
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-16">

          {/* LEFT TITLE */}
          <div>
            <LocalizedText
              as="h3"
              th="การเปรียบเทียบระหว่างแบบดั้งเดิมและ AI"
              en="COMPARISON BETWEEN TRADITIONAL & AI"
              className="
                text-lg
                font-semibold
                uppercase
                leading-tight
                sm:text-2xl
                lg:text-4xl
              "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-3 sm:space-y-5">

            <LocalizedText
              as="p"
              th="ขั้นตอนที่ 1 เสียเวลาและคนทำงานตึงตัวเกินไป"
              en="1st Step Time is wasted and people are stretched thin"
              className="
                text-xs
                font-medium
                leading-relaxed
                sm:text-base
                lg:text-lg
              "
            />

            <LocalizedText
              as="p"
              th="ขั้นตอนที่ 2 ความไว้วางใจเกิดขึ้นเมื่อ VEKIN เข้ามาช่วย"
              en="2nd Step Trust is earned when VEKIN is in play"
              className="
                text-xs
                font-medium
                leading-relaxed
                sm:text-base
                lg:text-lg
              "
            />

            <LocalizedText
              as="p"
              th="วิธีการแบบดั้งเดิมยังไม่แม่นยำพอในการวัด"
              en="Traditional methods fall short, lacking the precision to measure"
              className="
                text-xs
                font-medium
                leading-relaxed
                sm:text-base
                lg:text-lg
              "
            />

          </div>

        </div>

      </div>
    </div>
  </div>

</section>
  );
}
