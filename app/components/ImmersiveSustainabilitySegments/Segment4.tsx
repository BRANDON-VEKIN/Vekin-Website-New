"use client";

import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import ScrollRevealPhones from "../../ScrollRevealPhones";
import { useSiteLanguage } from "../siteLanguage";

export default function Segment4() {
  const { language } = useSiteLanguage();
  const copy = {
    th: { title1: "จัดสรรค์อย่างสมาร์ทยิ่งภาพให้พื้นที่งานเป็นตัวคุณ", label: "Organizer" },
    en: { title1: "Smartly organize. Make the space yours", label: "Organizer" }
  }[language];

  return (
    <BidirectionalScrollReveal
      amount={0.12}
      duration={1.35}
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[820px] w-screen overflow-hidden bg-black px-5 pb-10 pt-16 text-center transform-gpu sm:min-h-[980px] sm:px-8 sm:pt-20 lg:min-h-[1120px] lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_18%_58%,rgba(34,211,238,0.1),transparent_28%),radial-gradient(circle_at_82%_56%,rgba(132,204,22,0.1),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#030504] via-[#030504]/70 to-transparent sm:h-44" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <motion.img
        src="/VEKIN Resource all Product/VEKIN 1/Bubble.png"
        alt=""
        animate={{ y: [0, -24, 0], x: [0, 14, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 top-[22%] z-0 w-52 opacity-55 sm:left-[3%] sm:w-72 lg:w-80"
      />
      <motion.img
        src="/VEKIN Resource all Product/VEKIN 1/Bubble O2.png"
        alt=""
        animate={{ y: [0, 18, 0], x: [0, -12, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="pointer-events-none absolute right-[4%] top-[18%] z-0 w-24 opacity-80 sm:w-36 lg:right-[12%]"
      />
      <motion.img
        src="/VEKIN Resource all Product/VEKIN 1/Bubble O2.png"
        alt=""
        animate={{ y: [0, -16, 0], x: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="pointer-events-none absolute bottom-[24%] left-[8%] z-0 w-16 opacity-65 sm:w-24 lg:left-[18%]"
      />

      <motion.div
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.22 }}
        transition={{ duration: 1.15, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mx-auto max-w-[1120px]"
      >
        <p className="mx-auto mb-5 inline-flex rounded-[8px] border border-emerald-200/20 bg-white/[0.06] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-emerald-100 shadow-[0_16px_50px_rgba(16,185,129,0.12)] backdrop-blur-md">
          Smart Venue Control
        </p>
        <h2 className="text-[clamp(2.5rem,8.8vw,5.6rem)] font-black leading-[1.04] tracking-normal drop-shadow-[0_18px_50px_rgba(0,0,0,0.65)]">
          <span className="block text-mint">{copy.title1}</span>
        </h2>
        <p className="mt-10 text-[clamp(3.2rem,10vw,6.6rem)] font-black uppercase leading-none text-white sm:mt-14">
          {copy.label}
        </p>
      </motion.div>

      <div className="relative z-20 mx-auto mt-10 max-w-[1180px] sm:mt-12">
        <ScrollRevealPhones />
      </div>
    </BidirectionalScrollReveal>
  );
}
