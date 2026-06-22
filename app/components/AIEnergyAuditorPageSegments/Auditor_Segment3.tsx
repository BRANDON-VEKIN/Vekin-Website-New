import React from "react";
import LocalizedText from "../LocalizedText";

export default function AuditorSegment3() {
  return (
  <section
    aria-labelledby="auditor-hero-3"
    className="relative w-full overflow-hidden"
  >
    {/* Background Image */}
    <img
      src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG3.png"
      alt="AI Energy Auditor Background"
      className="block w-full min-h-[650px] object-cover md:min-h-0"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Content */}
    <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
      <div
        className="
          w-full
          bg-black/70
          px-5
          py-8

          sm:px-8
          sm:py-10

          md:max-w-[80%]

          lg:max-w-[50%]
          lg:h-full
          lg:flex
          lg:items-center
          lg:px-16
        "
      >
        <div className="max-w-xl text-white">

          <LocalizedText
            as="h1"
            th="ผู้ตรวจสอบพลังงานด้วย AI"
            en="AI Energy Auditor"
            className="
              text-2xl
              font-extrabold
              leading-tight

              sm:text-4xl

              lg:text-6xl
            "
          />

          <LocalizedText
            as="p"
            th="AI Energy Auditor คือแพลตฟอร์มอัจฉริยะที่ช่วยเพิ่มประสิทธิภาพการใช้พลังงานผ่านการตรวจสอบแบบเรียลไทม์และการวิเคราะห์เชิงคาดการณ์ โดยการวิเคราะห์ข้อมูลการปฏิบัติงานจากหลายระบบ แพลตฟอร์มนี้ช่วยให้ค้นหาการใช้พลังงานที่สูญเปล่า ลดต้นทุนการดำเนินงาน และยกระดับความยั่งยืน พร้อมมอบข้อมูลเชิงลึกอัตโนมัติและคำแนะนำอัจฉริยะเพื่อการตัดสินใจที่รวดเร็วและแม่นยำยิ่งขึ้น"
            en="AI Energy Auditor is an intelligent platform designed to optimize energy efficiency through real-time monitoring and predictive analytics. By analyzing operational data across multiple systems, it helps organizations identify energy waste, reduce operational costs, and improve sustainability performance. The platform provides automated insights and smart recommendations that support faster and more accurate decision-making. With a modern AI-driven approach, businesses can achieve greater energy transparency while advancing toward long-term environmental goals."
            className="
              mt-4
              text-xs
              leading-relaxed
              text-white/90

              sm:mt-6
              sm:text-sm

              md:text-base

              lg:text-lg
            "
          />

        </div>
      </div>
    </div>
  </section>
  );
}
