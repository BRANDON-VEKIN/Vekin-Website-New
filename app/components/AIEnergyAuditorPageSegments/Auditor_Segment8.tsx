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

const tabs = [
  { th: "ประสบการณ์ 5 ปี", en: "5 Year of Experience" },
  { th: "250 ไซต์", en: "250 Sites" },
  { th: "ข่าวล่าสุด", en: "Latest News" },
  { th: "โซเชียลมีเดีย", en: "Social Media" },
];

export default function AuditorSegment8() {
  return (
<section className="relative w-full overflow-hidden bg-black text-white">

  {/* Background */}
  <img
    src="/VEKIN Resource all Product/VEKIN 3/Auditor_BG6.png"
    alt="Auditor background"
    className="block w-full min-h-[500px] object-cover md:min-h-0"
  />

  <div className="absolute inset-0 bg-black/10" />

  {/* Content Wrapper */}
  <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8">

    {/* Pills */}
    <div className="flex flex-wrap justify-end gap-2 md:gap-3">
      {tabs.map((tab, index) => (
        <div
          key={tab.en}
          className="
            rounded-full
            border border-white/40
            bg-black/45
            px-3 py-2
            text-[10px]
            font-medium
            uppercase
            tracking-[0.12em]
            text-white
            backdrop-blur-sm
            sm:px-4
            sm:text-xs
            md:px-5
            md:py-3
            md:text-sm
          "
          style={{ opacity: 1 - index * 0.07 }}
        >
          <LocalizedText
            as="span"
            th={tab.th}
            en={tab.en}
          />
        </div>
      ))}
    </div>

    {/* Title */}
    <div className="pb-8 md:pb-12 lg:pb-20">
      <LocalizedText
        as="h2"
        th="ความสำเร็จของเรา"
        en="OUR SUCCESS"
        className="
          max-w-4xl
          text-3xl
          font-semibold
          tracking-tight
          sm:text-5xl
          md:text-6xl
          lg:text-8xl
        "
      />
    </div>

  </div>
</section>
  );
}