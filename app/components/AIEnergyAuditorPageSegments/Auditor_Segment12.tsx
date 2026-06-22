import React from "react";

import LocalizedText from "../LocalizedText";



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

          <LocalizedText
          as="h3"
          th="วิธีการของเรา"
          en="Our Methodology"
          className="text-2xl sm:text-3xl md:text-5xl font-semibold uppercase leading-tight"
        />


        <LocalizedText
          as="p"
          th="ระเบียบวิธีของ VEKIN ใช้ระบบ Hybrid Neuro-Symbolic AI ที่ได้รับสิทธิบัตรในการวิเคราะห์ข้อมูล Big Data จากแหล่งข้อมูล IoT และดาวเทียมแบบ 100% ด้วยการรวม Knowledge Graphs เข้ากับมาตรฐาน ISO ระดับโลกและ Neural Networks ทำให้เราบรรลุความแม่นยำสูงถึง 95% แบบเรียลไทม์ พร้อมจัดเก็บข้อมูลอย่างปลอดภัยบน Blockchain มอบโครงสร้างพื้นฐานดิจิทัลแห่งความไว้วางใจที่โปร่งใสและพร้อมสำหรับการตรวจสอบ"
          en="VEKIN’s methodology utilizes a patented Hybrid Neuro-Symbolic AI to analyze 100% of Big Data from IoT and satellite sources. By integrating Knowledge Graphs with global ISO standards and Neural Networks, we achieve 95% accuracy in real-time. Secured on blockchain, this provides a transparent, audit-grade digital trust infrastructure."
          className="text-sm sm:text-base md:text-lg max-w-xl"
        />
      </div>
    </div>
  </div>
</section>
  );
}
