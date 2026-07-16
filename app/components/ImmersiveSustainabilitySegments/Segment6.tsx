"use client";

import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

export default function Segment6() {
  const { language } = useSiteLanguage();
  
  const copy = {
    th: { 
      slogan: "เพื่อเป้าหมายที่ดีกว่า",
      title: "ความเป็นกลางทางคาร์บอน",
      description: "กระบวนการบรรลุการปล่อยคาร์บอนสุทธิเป็นศูนย์ โดยการลด การกักเก็บ หรือการชดเชยคาร์บอน เพื่อลดผลกระทบต่อสิ่งแวดล้อมและร่วมแก้ไขปัญหาการเปลี่ยนแปลงสภาพภูมิอากาศ"
    },
    en: { 
      slogan: "For a Better Goal",
      title: "Carbon Neutrality",
      description: "The process of achieving net-zero carbon emissions by reducing, capturing, or offsetting carbon to minimize environmental impact and address climate change."
    }
  }[language] || { th: {}, en: {} }; // Fallback protection

  return (
    <BidirectionalScrollReveal
      amount={0.12}
      duration={1.35}
      className="bg-black py-10 sm:py-16 overflow-hidden transform-gpu"
    >
      {/* OUTER CONTAINER: Breaks out of parents to span the entire screen edge-to-edge */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex min-h-[620px] flex-col lg:block lg:h-[650px] xl:h-[720px]">
        
        {/* FULL-SCREEN IMMERSIVE CANVAS IMAGE */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img
            src="/VEKIN Resource all Product/VEKIN 1/IS_BG6.png"
            alt="Carbon neutrality sky with CO2 bubbles"
            className="h-full w-full object-cover select-none pointer-events-none"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-black via-black/75 to-transparent sm:h-44" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-black via-black/75 to-transparent sm:h-44" />

        {/* CONTENT CONTAINER: Locked back into your grid alignment system */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1180px] flex-col justify-between gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          
          {/* HEADER SLOGAN */}
          <motion.div
            initial={{ opacity: 0, x: -42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.05, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[720px] text-left"
          >
            <div className="mb-5 h-1 w-24 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,0.55)]" />
            <h2 className="text-[clamp(2.35rem,7vw,4.75rem)] font-black leading-[0.98] tracking-tight text-white drop-shadow-[0_5px_22px_rgba(0,0,0,0.5)]">
              {copy.slogan}
            </h2>
          </motion.div>

          {/* EXPLANATORY CARD COMPONENT */}
          <motion.div
            initial={{ opacity: 0, x: 52, y: 28 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.15, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[700px] self-end overflow-hidden rounded-xl border border-emerald-200/80 bg-white p-6 text-slate-950 shadow-[0_28px_80px_rgba(0,0,0,0.32)] sm:p-8 lg:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-300 to-lime-300" />
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-emerald-100/80" />

            <div className="relative">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-emerald-700">
                Net Zero Pathway
              </p>
              <h3 className="mb-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                {copy.title}
              </h3>
              <p className="max-w-[620px] text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                {copy.description}
              </p>

              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-slate-200 pt-5 text-left">
                <div>
                  <p className="text-lg font-black text-emerald-700 sm:text-2xl">Reduce</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Emissions</p>
                </div>
                <div>
                  <p className="text-lg font-black text-cyan-700 sm:text-2xl">Capture</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Carbon</p>
                </div>
                <div>
                  <p className="text-lg font-black text-lime-700 sm:text-2xl">Offset</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Impact</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
