import React from "react";
import LocalizedText from "../LocalizedText";

export default function AuditorSegment4() {
  return (
  <section
    aria-labelledby="auditor-carbon-footprint"
    className="relative w-full overflow-hidden"
  >
    {/* Background Image */}
    <img
      src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG4.png"
      alt="Isometric city background"
      className="block w-full min-h-[720px] object-cover sm:min-h-[680px] md:min-h-0"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Content */}
    <div className="absolute inset-0 flex items-center justify-center px-4 py-8 lg:justify-start lg:px-0 lg:py-0">
      <div
        className="
          w-full
          max-h-[86vh]
          overflow-y-auto
          rounded-xl
          bg-black/70
          px-5
          py-6

          sm:px-8
          sm:py-10

          md:max-w-[80%]

          lg:max-w-[50%]
          lg:h-full
          lg:max-h-none
          lg:overflow-visible
          lg:rounded-none
          lg:flex
          lg:items-center
          lg:px-16
        "
      >
        <div className="max-w-xl text-white">
          <LocalizedText
            as="h2"
            th="AI AUDITOR FOR CARBON FOOTPRINT"
            en="AI AUDITOR FOR CARBON FOOTPRINT"
            className="
              text-xl
              font-extrabold
              leading-tight

              sm:text-4xl

              lg:text-6xl
            "
          />

          <LocalizedText
            as="p"
            th={`AI Carbon Auditor ของ VEKIN คือนวัตกรรมเครื่องมือ "Digital VVB" (Validation and Verification Body) ระดับปฏิวัติวงการ ที่ถูกออกแบบมาเพื่อปิดช่องว่างความเชื่อมั่น (Trust Gap) ในตลาดคาร์บอน โดยการเปลี่ยนกระบวนการตรวจสอบแบบเดิมที่ล่าช้าให้เป็นโครงสร้างพื้นฐานดิจิทัลอัตโนมัติที่สอดคล้องตามมาตรฐาน ISO ด้วยขุมพลังของ Hybrid Neuro-Symbolic Framework ระบบได้บูรณาการ Knowledge Graphs ที่ฝังตัวด้วยกฎเกณฑ์มาตรฐาน ISO ระดับโลก (เช่น ISO 14064, 14065 และ 17029) เข้ากับ Neural Networks เพื่อวิเคราะห์ข้อมูล IoT และดาวเทียมได้แบบ 100% พร้อมความแม่นยำเชิงความน่าจะเป็นถึง 95% เทคโนโลยีที่พลิกโฉมนี้ช่วยลดระยะเวลาการตรวจสอบจากเดิมที่ต้องใช้เวลาหลายเดือนให้เหลือเพียงแบบเรียลไทม์ พร้อมลดต้นทุนการดำเนินงานลงกว่า 80% ทำให้การทวนสอบที่มีความน่าเชื่อถือสูงเป็นสิ่งที่เข้าถึงได้ง่ายสำหรับทุกโครงการสีเขียว ด้วยการจัดเก็บทุกจุดข้อมูลอย่างปลอดภัยบนบัญชีแยกประเภท Blockchain ผ่าน "Carbon Receipt" ระบบ AI Auditor จึงช่วยขจัดความผิดพลาดจากมนุษย์และความเสี่ยงในการฟอกเขียว (Greenwashing) ได้อย่างเด็ดขาด พร้อมเปลี่ยนข้อมูลสิ่งแวดล้อมให้เป็นสินทรัพย์ดิจิทัลที่ธนาคารยอมรับ (Bankable Digital Assets) เพื่อปลดล็อกโอกาสในการเข้าถึงเงินทุนเพื่อการเปลี่ยนแปลงสภาพภูมิอากาศ (Climate Finance), สินเชื่อสีเขียว (Green Loans) และตลาดซื้อขายคาร์บอนระดับสากลได้ในทันที`}
            en={`VEKIN’s AI Carbon Auditor is a revolutionary "Digital VVB" (Validation and Verification Body) engine designed to solve the trust gap in carbon markets by replacing slow, manual processes with an ISO-compliant, automated digital infrastructure. Powered by a Hybrid Neuro-Symbolic Framework, it integrates Knowledge Graphs embedded with global ISO rules (such as ISO 14064, 14065, and 17029) and Neural Networks to analyze 100% of IoT and satellite data with 95% probabilistic accuracy. This disruptive technology reduces traditional audit cycles from months to real-time while slashing operational costs by 80%, making high-integrity verification accessible for all green initiatives. By securing every data point on a blockchain ledger via a "Carbon Receipt," the AI Auditor effectively eliminates human error and greenwashing risks, transforming static environmental data into bankable digital assets that unlock immediate access to climate finance, green loans, and premium international carbon trading markets.`}
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
