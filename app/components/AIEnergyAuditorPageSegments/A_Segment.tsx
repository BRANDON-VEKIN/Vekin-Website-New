"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";

const businessTypes = [
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/money.png",
    en: "Financial Institutions and Banks",
    th: "สถาบันการเงินและธนาคาร",
  },
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/investment.png",
    en: "Eco-Friendly Product Manufacturers",
    th: "ผู้ผลิตสินค้าที่เป็นมิตรต่อสิ่งแวดล้อม",
  },
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/benefits.png",
    en: "Sustainable Agriculture",
    th: "เกษตรกรรมยั่งยืน",
  },
  {
    icon: "/VEKIN Resource all Product/VEKIN 3/recycle.png",
    en: "Renewable Energy Providers",
    th: "ผู้ให้บริการพลังงานหมุนเวียน",
  },
];

export default function A_Segment() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerControls = useAnimationControls();
  const prefersReducedMotion = useReducedMotion();
  const isContainerInView = useInView(containerRef, { amount: 0.25 });

  useEffect(() => {
    if (prefersReducedMotion) {
      containerControls.set({ opacity: 1, y: 0, scale: 1 });
      return;
    }

    if (isContainerInView) {
      containerControls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1.1, delay: 1.28, ease: [0.16, 1, 0.3, 1] },
      });
      return;
    }

    containerControls.start({
      opacity: 0,
      y: 96,
      scale: 0.96,
      transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
    });
  }, [containerControls, isContainerInView, prefersReducedMotion]);

  return (
    <BidirectionalScrollReveal
      amount={0.16}
      duration={1.25}
      exitDuration={0.85}
      offset={36}
      className="relative overflow-hidden bg-[#c8eff1] transform-gpu"
    >
      <motion.img
        src="/VEKIN Resource all Product/VEKIN 3/I1.png"
        alt="Bright sky with soft clouds"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="block h-auto w-full origin-top select-none pointer-events-none"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-[#d9f3f3]/20" />

      <div className="absolute inset-0 z-20 mx-auto flex max-w-[1180px] flex-col items-center px-5 pb-[25%] pt-[8%] text-center sm:px-8 sm:pb-[38%] sm:pt-[8%]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.95, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-[8%] text-white drop-shadow-[0_8px_20px_rgba(24,77,86,0.22)] sm:mt-[10%]"
        >
          <LocalizedText
            as="h1"
            th="แม่นยำ"
            en="Accurate"
            className="text-[clamp(3.4rem,9vw,6rem)] font-black uppercase leading-[0.9] tracking-normal"
          />
          <LocalizedText
            as="p"
            th="ข้อมูลเชิงลึกด้านพลังงาน"
            en="Energy Insights"
            className="mt-3 text-[clamp(2rem,5.6vw,4rem)] font-black uppercase leading-none tracking-normal"
          />
          <LocalizedText
            as="p"
            th="ส่งมอบได้ทันที"
            en="Delivered in an instant."
            className="mt-4 text-[clamp(1.1rem,2.8vw,1.75rem)] font-black uppercase tracking-[0.02em]"
          />
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 96, scale: 0.96 }}
          animate={containerControls}
          className="relative z-0 mt-auto w-full max-w-[980px] overflow-hidden rounded-[24px] bg-[#20A37B]/60 px-6 pb-16 pt-8 text-white shadow-[0_30px_90px_rgba(28,122,122,0.28)] backdrop-blur-sm sm:px-10 sm:pb-20 sm:pt-10 lg:px-12 lg:pb-24 lg:pt-12"
        >
          <LocalizedText
            as="h2"
            th="ธุรกิจที่เหมาะกับ VEKIN"
            en="Suitable Business For VEKIN"
            className="text-[clamp(2rem,4.6vw,3.15rem)] font-black uppercase leading-tight"
          />

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 lg:mt-10">
            {businessTypes.map((item) => (
              <div key={item.en} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
                  <img
                    src={item.icon}
                    alt=""
                    className="h-full w-full object-contain brightness-0 invert"
                  />
                </div>
                <LocalizedText
                  as="p"
                  th={item.th}
                  en={item.en}
                  className="mt-4 text-sm font-black leading-tight sm:text-base"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.img
        src="/VEKIN Resource all Product/VEKIN 3/C4TNUp.tif.png"
        alt="Green mountain landscape"
        initial={{ opacity: 0, y: 80, scale: 1.03 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-0 z-30 h-auto w-full object-cover select-none pointer-events-none"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 bg-gradient-to-t from-[#f8fbf8] via-[#f8fbf8]/78 to-transparent sm:h-56" />
    </BidirectionalScrollReveal>
  );
}
