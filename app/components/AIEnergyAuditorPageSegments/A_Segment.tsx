"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useInView,
  useReducedMotion,
} from "framer-motion";
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
        transition: { duration: 1.1, delay: 1.75, ease: [0.16, 1, 0.3, 1] },
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
        className="absolute inset-0 z-0 block h-full w-full origin-top object-cover select-none pointer-events-none lg:static lg:h-auto"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-[#d9f3f3]/20" />

      <div className="relative z-20 mx-auto flex max-w-[1180px] flex-col items-center px-5 pb-[30%] pt-24 text-center sm:px-8 sm:pb-[38%] lg:absolute lg:inset-0 lg:pb-[38%] lg:pt-[8%]">
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
          className="relative z-0 mt-12 w-full max-w-[1040px] overflow-hidden rounded-[24px] lg:mt-auto border border-white/16 bg-[#20A37B9C] px-5 pb-16 pt-8 text-white shadow-[0_34px_110px_rgba(2,24,28,0.45),0_0_50px_rgba(26,145,255,0.16)] backdrop-blur-xl ring-1 ring-[#67f3ff]/10 sm:px-8 sm:pb-20 sm:pt-10 lg:px-10 lg:pb-24 lg:pt-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(255,177,67,0.24),transparent_34%),radial-gradient(circle_at_84%_0%,rgba(0,137,255,0.26),transparent_36%),linear-gradient(145deg,rgba(255,255,255,0.1),transparent_42%)]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#67f3ff]/45 to-transparent" />

          <LocalizedText
            as="h2"
            th="ธุรกิจที่เหมาะกับ VEKIN"
            en="Suitable Business For VEKIN"
            className="relative text-[clamp(2rem,4.6vw,3.15rem)] font-black uppercase leading-tight drop-shadow-[0_10px_28px_rgba(0,0,0,0.36)]"
          />

          <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:mt-10">
            {businessTypes.map((item) => (
              <div
                key={item.en}
                className="group relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-[18px] border border-white/12 bg-white/[0.07] p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#67f3ff]/45 hover:bg-white/[0.1] sm:min-h-[180px] sm:p-5"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(103,243,255,0.18),transparent_48%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
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
                  className="relative mt-4 text-sm font-black leading-tight text-white/90 sm:text-base"
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
        transition={{ duration: 1.05, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-0 z-30 h-auto w-full object-cover select-none pointer-events-none"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 bg-gradient-to-t from-[#f8fbf8] via-[#f8fbf8]/78 to-transparent sm:h-56" />
    </BidirectionalScrollReveal>
  );
}
