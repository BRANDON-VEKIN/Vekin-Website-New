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
      className="block w-full min-h-[650px] object-cover md:min-h-0"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Content */}
    <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
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
            as="h2"
            th="AI AUDITOR FOR CARBON FOOTPRINT"
            en="AI AUDITOR FOR CARBON FOOTPRINT"
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
            th="ข้อความตัวอย่าง"
            en="Fake text"
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