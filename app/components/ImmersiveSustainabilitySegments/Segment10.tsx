"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { companyCards } from "../homeData";
import { useSiteLanguage } from "../siteLanguage";

export default function Segment10() {
  const { language } = useSiteLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const expandedCompanyCards = [...companyCards, ...companyCards];
  const visibleCompanyCards = isExpanded
    ? expandedCompanyCards
    : expandedCompanyCards.slice(0, 8);

  return (
    <BidirectionalScrollReveal
      amount={0.12}
      duration={1.35}
      className="relative overflow-hidden bg-black px-5 py-20 text-center text-white transform-gpu sm:px-8 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(16,185,129,0.14),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(255,192,77,0.12),transparent_30%)]" />
      <motion.img
        src="/VEKIN Resource all Product/VEKIN 1/Bubble.png"
        alt=""
        animate={{ y: [0, -18, 0], x: [0, 10, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08, rotate: -3 }}
        className="pointer-events-auto absolute -left-24 bottom-16 z-0 w-56 opacity-45 sm:-left-16 sm:w-72 lg:left-2 lg:bottom-24 lg:w-[360px]"
      />
      <motion.img
        src="/VEKIN Resource all Product/VEKIN 1/Bubble.png"
        alt=""
        animate={{ y: [0, 16, 0], x: [0, -8, 0], scale: [1, 0.97, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
        whileHover={{ scale: 1.08, rotate: 3 }}
        className="pointer-events-auto absolute -right-16 top-6 z-0 w-44 opacity-55 sm:-right-14 sm:top-10 sm:w-64 lg:right-8 lg:top-12 lg:w-[300px]"
      />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <p className="mx-auto mb-4 inline-flex rounded-[8px] border border-emerald-300/20 bg-white/[0.05] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-200">
          Impact Portfolio
        </p>
        <h2 className="text-[clamp(2.6rem,7vw,4.8rem)] font-black tracking-normal leading-none drop-shadow-[0_18px_44px_rgba(0,0,0,0.55)]">
          {language === "th" ? "ผลงานของเรา" : "Our Work"}
        </h2>
        <div className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent" />

        <div className="mt-14 flex w-full items-center gap-10 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none min-[560px]:hidden">
          {visibleCompanyCards.map((card, index) => (
            <motion.div
              key={`mobile-carousel-${card.title.en}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.75, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="w-[50vw] flex-shrink-0 snap-center"
            >
              <div className="relative flex h-28 w-full items-center justify-center overflow-hidden rounded-[8px] border border-emerald-200/15 bg-slate-950 px-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.22),transparent_40%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_48%)]" />
                <div className="relative flex h-16 w-full items-center justify-center rounded-[8px] bg-white px-3">
                  <img
                    src={card.image}
                    alt={`${card.title[language]} brand logo`}
                    className="h-full w-full object-contain brightness-110"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-16 hidden max-w-[1120px] gap-6 min-[560px]:grid min-[560px]:grid-cols-2 lg:grid-cols-4">
          {visibleCompanyCards.map((card, index) => (
            <motion.article
              key={`${card.title.en}-${card.date.en}-${index}`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.85, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex w-full flex-col justify-between overflow-hidden rounded-[8px] border border-white/10 bg-slate-950 text-white shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-emerald-200/70 hover:shadow-[0_24px_70px_rgba(29,244,188,0.18)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.2),transparent_38%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_48%)] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-300 via-[#ffc04d] to-emerald-300" />

              <div className="relative z-10 flex min-h-[170px] flex-col p-6 text-left">
                <p className="mb-4 inline-flex w-fit rounded-[8px] border border-emerald-200/20 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-100">
                  Case Study
                </p>
                <h3 className="text-[1.08rem] font-black leading-snug text-white line-clamp-4 xl:text-xl">
                  {card.title[language]}
                </h3>
                <p className="mt-auto pt-5 text-xs font-bold uppercase tracking-wider text-[#ffc04d]">
                  {card.date[language]}
                </p>
              </div>

              <div className="relative z-10 border-t border-white/10 bg-white/[0.07] px-5 pb-5 pt-4 backdrop-blur-sm">
                <div className="flex h-20 w-full items-center justify-center overflow-hidden rounded-[8px] border border-white/10 bg-white px-4 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)]">
                  <img
                    src={card.image}
                    alt={`${card.title[language]} brand logo`}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16"
        >
          <button
            type="button"
            onClick={() => setIsExpanded((expanded) => !expanded)}
            className="group inline-flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.05] px-5 py-3 text-[clamp(1.05rem,3.5vw,1.35rem)] font-black text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-colors duration-200 hover:border-emerald-200/40 hover:text-mint"
          >
            <span>{isExpanded ? "Show less" : "See more"}</span>
            <span
              className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : "group-hover:translate-x-1.5"}`}
              aria-hidden="true"
            >
              -&gt;
            </span>
          </button>
        </motion.div>
      </div>
    </BidirectionalScrollReveal>
  );
}
