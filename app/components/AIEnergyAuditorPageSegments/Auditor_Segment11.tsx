import LocalizedText from "../LocalizedText";



export default function AuditorSegment11() {
  return (
  <section className="relative w-full overflow-hidden bg-black text-white">
    <img
      src="/VEKIN Resource all Product/VEKIN 3/Robot.png"
      alt="Robot background"
      className="block w-full min-h-[560px] object-cover sm:min-h-[600px] md:min-h-0 md:h-auto"
    />

    {/* Overlay container */}
    <div className="absolute inset-0 flex flex-col md:flex-row">
      
      {/* Content panel (LEFT on desktop, FULL on mobile) */}
      <div className="flex h-full w-full items-center justify-center overflow-y-auto bg-black/55 p-5 sm:p-10 md:w-1/2 md:justify-start md:p-16">
        <div className="max-h-[86vh] max-w-lg rounded-xl bg-black/35 p-4 text-center backdrop-blur-sm sm:p-0 sm:bg-transparent md:max-h-none md:text-left md:backdrop-blur-0">
          <LocalizedText
            as="h3"
            th="เอไอ"
            en="AI"
            className="text-xl sm:text-2xl md:text-4xl font-semibold uppercase"
          />

          <LocalizedText
            as="p"
            th="AI Carbon Auditor ของ VEKIN เปลี่ยนการทวนสอบให้เป็นแบบเรียลไทม์อัตโนมัติ ช่วยลดต้นทุนการดำเนินงานลงกว่า 80% ด้วยนวัตกรรม AI สิทธิบัตรเฉพาะที่วิเคราะห์ข้อมูลแบบ 100% ด้วยความแม่นยำสูงถึง 95% พร้อมขจัดความเสี่ยงเรื่องการฟอกเขียว การจัดเก็บข้อมูลอย่างปลอดภัยบน Blockchain ช่วยเปลี่ยนตัวชี้วัดด้านสิ่งแวดล้อมให้เป็นสินทรัพย์ดิจิทัลที่ธนาคารยอมรับ เพื่อปลดล็อกโอกาสในการเข้าถึงสินเชื่อสีเขียวและเงินทุนเพื่อสภาพภูมิอากาศระดับสากลได้ในทันที"
            en="VEKIN’s AI Carbon Auditor automates verification into real-time, slashing operational costs by 80%. Utilizing patented AI, it analyzes 100% of data with 95% accuracy while eliminating greenwashing. By securing data on blockchain, it transforms environmental metrics into bankable digital assets, unlocking immediate access to green loans and international climate finance."
            className="mt-4 text-xs leading-relaxed sm:text-base md:text-lg"
          />
        </div>
      </div>

      {/* Right side spacer (only desktop visual balance) */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  </section>
  );
}
