import LocalizedText from "../LocalizedText";



export default function AuditorSegment11() {
  return (
  <section className="relative w-full overflow-hidden bg-black text-white">
    <img
      src="/VEKIN Resource all Product/VEKIN 3/Robot.png"
      alt="Robot background"
      className="block w-full h-auto object-cover"
    />

    {/* Overlay container */}
    <div className="absolute inset-0 flex flex-col md:flex-row">
      
      {/* Content panel (LEFT on desktop, FULL on mobile) */}
      <div className="w-full md:w-1/2 h-full flex items-center bg-black/50 p-6 sm:p-10 md:p-16">
        <div className="max-w-lg text-center md:text-left">
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
            className="mt-4 text-sm sm:text-base md:text-lg"
          />
        </div>
      </div>

      {/* Right side spacer (only desktop visual balance) */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  </section>
  );
}
