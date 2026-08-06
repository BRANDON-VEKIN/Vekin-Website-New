"use client";

import React, { useEffect, useState } from "react";
import LocalizedText from "../LocalizedText";

const items = [
  {
    img: "/VEKIN Resource all Product/VEKIN 2/UC_Img1.png",
    title: "PORT AUTHORITY OF THAILAND",
    desc: "Responsible sourcing of verified sustainable materials with full traceability.",
  },
  {
    img: "/VEKIN Resource all Product/VEKIN 2/UC_Img2.png",
    title: "REVENUE DEPARTMENT",
    desc: "Optimized logistics system reducing emissions and improving efficiency.",
  },
  {
    img: "/VEKIN Resource all Product/VEKIN 2/UC_Img3.png",
    title: "INET",
    desc: "Energy-efficient production processes with minimal environmental impact.",
  },
  {
    img: "/VEKIN Resource all Product/VEKIN 2/UC_Img4.png",
    title: "TRUE DIGITAL PARK",
    desc: "Smart distribution networks ensuring low-carbon delivery systems.",
  },
];

export default function ResponsivePhone() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };

    if (active !== null) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
  <section
    className="flex min-h-screen w-full flex-col items-center justify-center gap-10 px-4 py-16"
    style={{
      backgroundImage: "url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG7.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >

      {/* Section header */}
      <div className="max-w-2xl space-y-3 text-center">
        <p className="text-sm font-semibold tracking-wide text-white/80 drop-shadow-sm">
          <LocalizedText as="span" th="กรณีการใช้งานจริง" en="Real use cases" />
        </p>
        <LocalizedText
          as="h2"
          th="องค์กรที่ไว้วางใจ E-Carbon Receipt"
          en="Organizations that trust E-Carbon Receipt."
          className="text-3xl font-semibold tracking-[-0.015em] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl"
        />
      </div>

      {/* =========================
          DESKTOP (HORIZONTAL PHONE)
      ========================= */}
      <div className="hidden md:flex relative items-center justify-center">

        <div className="
          relative
          w-[90vw] max-w-[1100px]
          h-[520px]

          bg-gradient-to-br from-emerald-600 via-teal-500 to-blue-700
          rounded-[50px]
          border-[12px] border-slate-800
          shadow-2xl
          overflow-hidden
        ">

          <div className="
            absolute left-0 top-1/2 -translate-y-1/2
            h-24 w-5 bg-slate-900
            rounded-r-xl
          " />

          <div className="w-full h-full bg-gradient-to-br from-emerald-600 via-teal-500 to-blue-700 flex items-center px-6">
            <div className="flex gap-6 overflow-x-auto w-full py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className="
                    relative
                    flex-shrink-0
                    w-[320px] 
                    h-[420px]
                    rounded-2xl
                    overflow-hidden
                    shadow-xl
                    cursor-pointer
                    transition-all
                    duration-300
                    ease-out
                    hover:scale-[1.03]
                    hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                    group
                  "
                >
                  {/* Base Layer: Full Card Background Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Middle Layer: Smooth Dark Gradient Overlay for optimal text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                  {/* Top Layer: Floating Text Block pinned to the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-1.5 block transform translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Click to view
                    </span>
                    <h3 className="text-xl font-black text-white tracking-tight uppercase leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* =========================
          MOBILE (VERTICAL PHONE)
      ========================= */}
<div className="flex md:hidden items-center justify-center">

  <div className=" relative w-[300px] h-[620px] bg-gradient-to-br from-emerald-600 via-teal-500 to-blue-700 rounded-[50px] border-[12px] border-slate-800 shadow-2xl overflow-hidden flex flex-col">

    {/* NOTCH */}
    <div className=" absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-b-2xlz-10 " />

    {/* SCREEN */}
    <div className="w-full h-full bg-gradient-to-br from-emerald-600 via-teal-500 to-blue-700 flex flex-col p-4 gap-4 overflow-y-auto scroll-smooth scrollbar-none">

    {items.map((item, index) => (
      <div
        key={index}
        onClick={() => setActive(index)}
        className="
          relative
          flex-shrink-0
          h-[260px]
          bg-slate-800
          rounded-2xl
          overflow-hidden
          cursor-pointer
          transition
          hover:scale-[1.02]
        "
      >

        
    {/* IMAGE */}
    <img
      src={item.img}
      className="w-full h-full object-cover"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/30" />

    {/* TEXT OVERLAY */}
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <div className="font-bold text-white text-lg">
        {item.title}
      </div>
    </div>
  </div>
))}

    </div>
  </div>
</div>

      {/* =========================
          MODAL (shared)
      ========================= */}
{active !== null && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
    onClick={() => setActive(null)}
    role="dialog"
    aria-modal="true"
  >
    {/* Modal Box */}
    <div
      className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-slate-100 transition-all animate-in zoom-in-95 duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      
      {/* Floating Close Button */}
      <button
        type="button"
        onClick={() => setActive(null)}
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 md:bg-slate-100 md:text-slate-500 md:hover:bg-slate-200 md:hover:text-slate-800 transition duration-200"
        aria-label="Close dialog"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L12 12M12 12l6-6M12 12l-6-6m6 6l6 6" />
        </svg>
      </button>

      {/* Main Structural Grid split */}
      <div className="flex flex-col md:flex-row w-full min-h-[300px] md:min-h-[420px]">

        {/* Image Canvas Panel */}
        <div className="w-full md:w-1/2 relative bg-slate-50 flex items-center justify-center aspect-video md:aspect-auto">
          <img
            src={items[active].img}
            alt={items[active].title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Info Copy Sheet Content Panel */}
        <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-2 block">
            Product Profile
          </span>
          
          <h2 className="font-black text-2xl sm:text-3xl text-zinc-900 tracking-tight leading-tight">
            {items[active].title}
          </h2>
          
          <div className="my-4 h-px w-10 bg-emerald-500/60" />
          
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium">
            {items[active].desc}
          </p>
        </div>

      </div>
    </div>
  </div>
)}

    </section>
  );
}