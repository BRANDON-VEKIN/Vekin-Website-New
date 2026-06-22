import LocalizedText from "../LocalizedText";



export default function AuditorSegment10() {
  return (
  <section className="relative w-full overflow-hidden bg-black text-white">
    <img
      src="/VEKIN Resource all Product/VEKIN 3/Human.png"
      alt="Human background"
      className="block w-full h-auto object-cover"
    />

    {/* Overlay container */}
    <div className="absolute inset-0 flex flex-col md:flex-row">
      
      {/* Spacer (only for desktop split effect) */}
      <div className="hidden md:block md:w-1/2" />

      {/* Content panel */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-start bg-black/50 p-6 sm:p-10 md:p-16">
        <div className="max-w-xl text-center md:text-left">
          <LocalizedText
            as="h3"
            th="แบบดั้งเดิม"
            en="Traditional"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase"
          />

          <LocalizedText
            as="p"
            th="การตรวจสอบแบบดั้งเดิมต้องพึ่งพากระบวนการและประมาณการแบบทำมือที่ล่าช้า ซึ่งมักใช้เวลานานหลายเดือน การทำงานที่แยกส่วนเหล่านี้ต้องใช้แรงงานจำนวนมาก มีต้นทุนสูง และเสี่ยงต่อความผิดพลาดจากมนุษย์หรือการฟอกเขียว (Greenwashing) ส่งผลให้องค์กรต้องเผชิญกับความสูญเสียทางเศรษฐกิจที่รุนแรง และยากที่จะขยายขอบเขตการรายงานผลท่ามกลางข้อกำหนดด้านกฎระเบียบระดับโลกที่มีความซับซ้อนเพิ่มขึ้นเรื่อยๆ"
            en="Traditional auditing relies on slow, manual processes and estimates that often take months to complete. These siloed operations are labor-intensive, costly, and prone to human error or greenwashing risks. Organizations face significant economic losses and struggle to scale reporting as global regulatory requirements become increasingly complex."
            className="mt-4 text-sm sm:text-base md:text-lg"
          />
        </div>
      </div>
    </div>
  </section>
  );
}
