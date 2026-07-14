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
  className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden transform-gpu"
>
  {/* BACKGROUND IMAGE - Reconfigured to cover the space smoothly on mobile without leaving layout gaps */}
  <img
    src="/VEKIN Resource all Product/VEKIN 1/IS_BG3.png"
    alt=""
    className="absolute inset-0 z-0 w-full h-full object-cover lg:object-fill pointer-events-none"
  />
  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-[#030504] via-[#030504]/70 to-transparent sm:h-56" />

  {/* CONTENT CONTAINER - Removed strict min-h on mobile to eliminate artificial empty space */}
  <motion.div
    initial={{ opacity: 0, y: 44 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.22 }}
    transition={{ duration: 1.15, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
    className="relative z-20 mx-auto flex min-h-0 h-auto lg:min-h-[1240px] max-w-[1180px] flex-col items-center justify-between px-5 pb-16 pt-12 text-center sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-32 gap-16 lg:gap-0"
  >
    
    {/* HEADER COPY */}
    <h2 className="text-[clamp(2.2rem,9vw,5.5rem)] font-medium leading-[1.1] text-white">
      {copy.title}
    </h2>

    {/* HERO CALLOUT STAT */}
    <div className="pointer-events-none w-full">
      <p className="text-[clamp(2.5rem,11vw,5.4rem)] font-black uppercase tracking-tight leading-none text-white bg-clip-text">
        {copy.reduce}
      </p>
    </div>
    
  </motion.div>
</BidirectionalScrollReveal>
  );
}
