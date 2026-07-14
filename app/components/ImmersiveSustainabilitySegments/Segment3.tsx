"use client";

import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

export default function Segment3() {
  const { language } = useSiteLanguage();
  const copy = {
    th: { title: "สร้างสรรค์ไปพร้อมกับเรา", reduce: "Reduce Costs", thai: "ลดต้นทุน" },
    en: { title: "Create with us", reduce: "Reduce Costs", thai: "Lower Costs" }
  }[language];

  return (
<BidirectionalScrollReveal
  amount={0.12}
  duration={1.35}
  className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-black transform-gpu"
>
  <div className="pointer-events-none absolute inset-0 z-0 bg-black" />
  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-[#030504] via-[#030504]/70 to-transparent sm:h-56" />

  {/* VISUAL ASSET LAYERS */}
  <div className="pointer-events-none absolute left-[-18%] top-[24%] z-10 w-[56vw] max-w-[520px] opacity-80 sm:left-[-8%] sm:top-[22%] sm:w-[38vw] lg:left-[4%] lg:top-[30%] lg:w-[28vw]">
    <motion.img
      src="/VEKIN Resource all Product/VEKIN 1/IS_BB1.png"
      alt=""
      animate={{ y: [0, -12, 0], rotate: [0, -1, 0] }}
      transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      className="h-auto w-full"
    />
  </div>
  <div className="pointer-events-none absolute left-1/2 top-[28%] z-10 w-[46vw] max-w-[440px] -translate-x-1/2 opacity-65 blur-[0.2px] sm:top-[24%] sm:w-[34vw] lg:top-[23%] lg:w-[24vw]">
    <motion.img
      src="/VEKIN Resource all Product/VEKIN 1/IS_BB4.png"
      alt=""
      animate={{ y: [0, -24, 0], scale: [1, 1.035, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      className="h-auto w-full"
    />
  </div>
  <div className="pointer-events-none absolute left-1/2 top-[40%] z-20 w-[62vw] max-w-[620px] -translate-x-1/2 opacity-95 drop-shadow-[0_28px_70px_rgba(16,185,129,0.18)] sm:top-[36%] sm:w-[44vw] lg:top-[35%] lg:w-[34vw]">
    <motion.img
      src="/VEKIN Resource all Product/VEKIN 1/IS_BB2.png"
      alt=""
      animate={{ y: [0, 10, 0], scale: [1, 1.015, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
      className="h-auto w-full"
    />
  </div>
  <div className="pointer-events-none absolute right-[-20%] top-[27%] z-10 w-[58vw] max-w-[540px] opacity-80 sm:right-[-8%] sm:top-[24%] sm:w-[40vw] lg:right-[3%] lg:top-[31%] lg:w-[29vw]">
    <motion.img
      src="/VEKIN Resource all Product/VEKIN 1/IS_BB3.png"
      alt=""
      animate={{ y: [0, 12, 0], rotate: [0, 1, 0] }}
      transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 0.55 }}
      className="h-auto w-full"
    />
  </div>

  {/* CONTENT CONTAINER - Removed strict min-h on mobile to eliminate artificial empty space */}
  <motion.div
    initial={{ opacity: 0, y: 44 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.22 }}
    transition={{ duration: 1.15, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
    className="relative z-30 mx-auto flex min-h-[620px] h-auto max-w-[1180px] flex-col items-center justify-between gap-16 px-5 pb-16 pt-12 text-center sm:min-h-[820px] sm:px-8 sm:pb-24 sm:pt-20 lg:min-h-[1040px] lg:px-10 lg:pb-32 lg:gap-0"
  >
    
    {/* HEADER COPY */}
    <div className="relative mx-auto max-w-[860px]">
      <div className="pointer-events-none absolute inset-x-6 -top-6 h-24 rounded-full bg-emerald-300/10 blur-3xl" />
      <p className="relative mx-auto mb-4 inline-flex rounded-[8px] border border-emerald-300/20 bg-white/[0.05] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-200">
        Sustainable Experiences
      </p>
      <h2 className="relative text-[clamp(2.45rem,9vw,5.9rem)] font-black leading-[1.02] tracking-normal text-white drop-shadow-[0_18px_44px_rgba(0,0,0,0.55)]">
        {copy.title}
      </h2>
    </div>

    {/* HERO CALLOUT STAT */}
    <div className="pointer-events-none relative w-full">
      <div className="absolute left-1/2 top-1/2 h-28 w-[min(760px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/12 blur-3xl" />
      <p className="relative mx-auto inline-block text-[clamp(2.6rem,11vw,5.8rem)] font-black uppercase leading-none tracking-normal text-white drop-shadow-[0_18px_48px_rgba(0,0,0,0.65)]">
        {copy.reduce}
      </p>
    </div>
    
  </motion.div>
</BidirectionalScrollReveal>
  );
}
