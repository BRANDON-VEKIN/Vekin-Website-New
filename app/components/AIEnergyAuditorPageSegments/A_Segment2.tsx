"use client";

import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";

const featureRows = [
  {
    image: "/VEKIN Resource all Product/VEKIN 3/Auditor_BG3.png",
    imageAlt: "AI energy auditor monitoring city systems",
    eyebrowEn: "ENERGY",
    eyebrowTh: "พลังงาน",
    titleEn: "MEASURE ACCURACY",
    titleTh: "วัดผลอย่างแม่นยำ",
    copyEn:
      "AI-powered measurement turns complex building data into clear, audit-ready energy insight.",
    copyTh:
      "การวัดผลด้วย AI เปลี่ยนข้อมูลอาคารที่ซับซ้อนให้เป็นข้อมูลเชิงลึกด้านพลังงานที่ชัดเจนและพร้อมสำหรับการตรวจสอบ",
    layout: "imageFirst",
  },
  {
    image: "/VEKIN Resource all Product/VEKIN 3/Auditor_BG4.png",
    imageAlt: "Carbon footprint city model with verified building data",
    eyebrowEn: "AI",
    eyebrowTh: "AI",
    titleEn: "ENERGY AUDITOR",
    titleTh: "ผู้ตรวจสอบพลังงาน",
    copyEn:
      "VEKIN helps teams verify consumption, surface savings opportunities, and connect energy performance to trusted carbon decisions.",
    copyTh:
      "VEKIN ช่วยทีมตรวจสอบการใช้พลังงาน ค้นหาโอกาสในการประหยัด และเชื่อมโยงสมรรถนะด้านพลังงานกับการตัดสินใจด้านคาร์บอนที่น่าเชื่อถือ",
    layout: "textFirst",
  },
];

export default function A_Segment2() {
  return (
    <BidirectionalScrollReveal
      amount={0.16}
      duration={1.25}
      exitDuration={0.8}
      offset={28}
      className="relative w-full overflow-hidden bg-[#f8fbf8] px-5 pb-20 pt-20 text-[#5d6962] shadow-[0_-18px_55px_rgba(20,92,70,0.08)] sm:px-8 sm:pb-24 sm:pt-24 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,251,248,0.82)_46%,rgba(248,251,248,0)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90" />

      <div className="relative mx-auto flex max-w-[1180px] flex-col gap-20 sm:gap-24 lg:gap-28">
        {featureRows.map((row, index) => (
          <motion.div
            key={row.titleEn}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.28 }}
            transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={[
                "relative overflow-hidden rounded-[28px] bg-[#eaf5ef] shadow-[0_28px_80px_rgba(32,118,91,0.16)] ring-1 ring-[#2f9d71]/10",
                row.layout === "textFirst" ? "md:order-2" : "",
              ].join(" ")}
            >
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(36,155,111,0.18)_100%)]" />
              <img
                src={row.image}
                alt={row.imageAlt}
                className="aspect-[1.12/1] h-full w-full object-cover saturate-[1.05]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: row.layout === "textFirst" ? -56 : 56 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                duration: 0.95,
                delay: 0.18 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={[
                "text-center md:text-left",
                row.layout === "textFirst" ? "md:order-1 md:text-center" : "",
              ].join(" ")}
            >
              <LocalizedText
                as="p"
                th={row.eyebrowTh}
                en={row.eyebrowEn}
                className="text-[clamp(2.6rem,10.4vw,7.8rem)] font-black uppercase leading-[0.78] tracking-normal text-[#62bd88]"
              />
              <LocalizedText
                as="h2"
                th={row.titleTh}
                en={row.titleEn}
                className="mt-2 text-[clamp(2rem,5.1vw,4.75rem)] font-black uppercase leading-[0.92] tracking-normal text-[#62bd88]"
              />
              <LocalizedText
                as="p"
                th={row.copyTh}
                en={row.copyEn}
                className="mx-auto mt-6 max-w-[460px] text-sm font-semibold leading-relaxed text-[#65706a] sm:text-base md:mx-0"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </BidirectionalScrollReveal>
  );
}
