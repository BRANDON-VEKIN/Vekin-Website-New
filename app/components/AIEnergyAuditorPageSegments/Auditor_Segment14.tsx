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
export default function AuditorSegment14() {
  return (
    <section className="w-full bg-white text-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <LocalizedText as="h2" th="ลูกค้าของเรา" en="CLIENT'S" className="text-4xl font-semibold tracking-tight md:text-6xl" />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <div className="flex aspect-[5/2] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-xs font-medium uppercase tracking-[0.25em] text-slate-400 sm:col-span-2 md:col-span-2 lg:col-span-3">
          <LocalizedText as="span" th="พื้นที่โลโก้" en="Logo Placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
}
