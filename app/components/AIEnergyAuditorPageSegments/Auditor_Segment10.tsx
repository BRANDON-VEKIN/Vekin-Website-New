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
            th="ข้อความตัวอย่าง"
            en="Fake text"
            className="mt-4 text-sm sm:text-base md:text-lg"
          />
        </div>
      </div>
    </div>
  </section>
  );
}
