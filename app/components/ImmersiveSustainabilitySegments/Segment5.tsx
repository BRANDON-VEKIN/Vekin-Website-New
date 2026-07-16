"use client";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { eventCards } from "../homeData";
import { useSiteLanguage } from "../siteLanguage";

const cardEase = [0.16, 1, 0.3, 1] as const;

const cardGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 96,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: cardEase,
    },
  },
};

export default function Segment5() {
  const { language } = useSiteLanguage();

  const images = [
    "/VEKIN Resource all Product/VEKIN 1/pre_event.png",
    "/VEKIN Resource all Product/VEKIN 1/during_event.png",
    "/VEKIN Resource all Product/VEKIN 1/post_event.png",
  ];

  return (
    <BidirectionalScrollReveal
      amount={0.12}
      duration={1.35}
      className="relative bg-black w-full overflow-hidden transform-gpu"
    >
      {/* RESPONSIVE GRID ENGINE */}
      <motion.div
        variants={cardGridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.24 }}
        className="grid grid-cols-1 sm:grid-cols-3 min-h-0 h-auto sm:min-h-[720px] lg:min-h-[780px]"
      >
        {eventCards.map((card, index) => (
            <motion.div
              key={card.href}
              variants={cardVariants}
              className="relative isolate overflow-hidden border-b border-white/10 last:border-b-0
                /* Mobile Viewport Sizing */
                min-h-[300px] w-full
                /* Tablet & Desktop Viewport Reset */
                sm:min-h-[720px] lg:min-h-[780px] sm:border-b-0 sm:border-x sm:border-white/10"
            >
              <Link
                href={card.href}
                className="group relative block h-full w-full overflow-hidden outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label={`Open ${card.title[language]} page`}
              >
                {/* BACKGROUND CANVAS GRAPHIC */}
                <img
                  src={card.image || images[index] || images[0]}
                  alt={`${card.title[language]} preview`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-[1100ms] ease-out group-hover:scale-110 group-hover:brightness-110 group-focus-visible:scale-110 group-focus-visible:brightness-110 select-none pointer-events-none"
                />

                {/* HIGH-CONTRAST MASK LAYERS */}
                <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/18" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                <div className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-white/25 to-transparent sm:block" />
                <div className="absolute -left-32 top-0 h-full w-28 rotate-12 bg-white/15 blur-2xl transition-transform duration-1000 ease-out group-hover:translate-x-[520%]" />

                {/* CONTAINER TITLE TEXT */}
                <div className="absolute inset-x-0 bottom-0 z-40 px-5 pb-8 pt-24 text-center sm:px-7 sm:pb-14">
                  <div className="mx-auto max-w-[360px] transition-transform duration-500 ease-out group-hover:-translate-y-2">
                    <h2 className="text-[clamp(2.1rem,7vw,3rem)] font-black leading-[1.02] tracking-normal text-white drop-shadow-[0_14px_35px_rgba(0,0,0,0.65)] sm:text-[clamp(2rem,3.4vw,3.5rem)]">
                      {card.title[language]}
                    </h2>
                    <span className="mx-auto mt-5 block h-1.5 w-20 rounded-full bg-gradient-to-r from-emerald-300 via-cyan-200 to-white opacity-80 transition-all duration-500 group-hover:w-28 group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            </motion.div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-black via-black/70 to-transparent sm:h-36" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black via-black/70 to-transparent sm:h-36" />
    </BidirectionalScrollReveal>
  );
}
