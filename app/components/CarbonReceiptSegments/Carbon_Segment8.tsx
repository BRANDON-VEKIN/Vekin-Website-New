import React from "react";

type LocalizedTextProps = {
    as?: React.ElementType;
    th: string;
    en: string;
    className?: string;
};

function LocalizedText({ as: Component = "div", th, en, className }: LocalizedTextProps) {
    const isThai =
        typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("th");

    return <Component className={className}>{isThai ? th : en}</Component>;
}

export default function CarbonSegment8() {
    return (
<section
  aria-label="Carbon Receipt"
  className="relative flex items-center justify-center min-h-screen w-full overflow-hidden"
>

  {/* =========================
      MOBILE BACKGROUND
  ========================= */}
  <div
    className="absolute inset-0 bg-center bg-cover md:hidden"
    style={{
      backgroundImage:
        "url('/VEKIN Resource all Product/VEKIN 2/Carbon_Mobile_BG5.png')",
    }}
  />

  {/* =========================
      DESKTOP BACKGROUND
  ========================= */}
  <div
    className="absolute inset-0 bg-center bg-cover hidden md:block"
    style={{
      backgroundImage:
        "url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG5.png')",
    }}
  />

  {/* Optional overlay (recommended for readability) */}
  <div className="absolute inset-0 bg-black/10 md:bg-transparent" />

  {/* =========================
      CONTENT
  ========================= */}
  <div className="relative w-full px-4 flex justify-center items-center">

    <div className="
      grid grid-cols-1 md:grid-cols-3
      gap-6 md:gap-20
      w-full max-w-7xl
      place-items-center
    ">

      {/* CARD 1 */}
      <button className="flex flex-col items-center gap-4 w-full max-w-2xl transition hover:scale-105 active:scale-95">
        <img
          src="/VEKIN Resource all Product/VEKIN 2/Carbon_Icon1.png"
          alt="Green Activity"
          className="w-128 h-128 md:w-128 md:h-128 object-contain"
        />
        <div className="w-full rounded-full border border-black bg-white px-6 py-3 text-center font-semibold text-black">
          GREEN ACTIVITY GREEN PRODUCT & SERVICE
        </div>
      </button>

      {/* CARD 2 */}
      <button className="flex flex-col items-center gap-4 w-full max-w-2xl transition hover:scale-105 active:scale-95">
        <img
          src="/VEKIN Resource all Product/VEKIN 2/Carbon_Icon2.png"
          alt="CERO"
          className="w-128 h-128 md:w-128 md:h-128 object-contain"
        />
        <div className="w-full rounded-full border border-black bg-white px-6 py-3 text-center font-semibold text-black">
          CERO
        </div>
      </button>

      {/* CARD 3 */}
      <button className="flex flex-col items-center gap-4 w-full max-w-xl transition hover:scale-105 active:scale-95">
        <img
          src="/VEKIN Resource all Product/VEKIN 2/Carbon_Icon3.png"
          alt="Carbon Footprint"
          className="w-128 h-128 md:w-128 md:h-128 object-contain"
        />
        <div className="w-full rounded-full border border-black bg-white px-6 py-3 text-center font-semibold text-black">
          VERIFIED CARBON FOOTPRINT FRAGMENT CARBON
        </div>
      </button>

    </div>
  </div>
</section>
    );
}

