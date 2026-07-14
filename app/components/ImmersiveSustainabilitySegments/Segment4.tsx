"use client";

import { motion } from "framer-motion";
import ScrollRevealPhones from "../../ScrollRevealPhones";
import { useSiteLanguage } from "../siteLanguage";

export default function Segment4() {
  const { language } = useSiteLanguage();
  const copy = {
    th: { title1: "จัดสรรค์อย่างสมาร์ทยิ่งภาพให้พื้นที่งานเป็นตัวคุณ", label: "Organizer" },
    en: { title1: "Smartly organize. Make the space yours", label: "Organizer" }
  }[language];

  return (
    <motion.section
      initial={{ opacity: 0, y: 72 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto min-h-[760px] max-w-[1180px] overflow-hidden px-5 pb-8 pt-16 text-center transform-gpu sm:min-h-[930px] sm:px-8 sm:pt-20 lg:min-h-[1040px] lg:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#030504] via-[#030504]/55 to-transparent sm:h-44" />

      <motion.div
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 1.15, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mx-auto max-w-[980px]"
      >
        <h2 className="text-[clamp(2.45rem,9.5vw,5.35rem)] font-black leading-[1.08]">
          <span className="block text-mint">{copy.title1}</span>
        </h2>
        <p className="mt-16 text-[clamp(3rem,10vw,5.25rem)] font-light leading-none text-white sm:mt-20">
          {copy.label}
        </p>
      </motion.div>

      <ScrollRevealPhones />
    </motion.section>
  );
}
