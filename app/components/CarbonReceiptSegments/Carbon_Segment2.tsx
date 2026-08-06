"use client";

import React from "react";
import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

const copy = {
    th: {
        eyebrow: "บล็อกเชน",
        title: "สำหรับทุกธุรกรรม ขับเคลื่อนด้วยเทคโนโลยีบล็อกเชน",
        cta: "รับ E-Carbon Receipt",
        learnMore: "ดูวิธีการทำงาน",
    },
    en: {
        eyebrow: "Blockchain",
        title: "For every transaction. Powered by blockchain technology.",
        cta: "Get E-Carbon Receipt",
        learnMore: "Learn how it works",
    },
} as const;

export default function CarbonSegment2() {
    const { language } = useSiteLanguage();
    const text = copy[language];

    return (
        <BidirectionalScrollReveal
            aria-label="Carbon Receipt"
            amount={0.35}
            duration={1}
            offset={44}
            className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-white"
        >
            <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-28 text-center">
                <p className="text-sm font-semibold tracking-wide text-[#0aa06e]">
                    {text.eyebrow}
                </p>

                <h1 className="mt-4 bg-gradient-to-r from-[#00464F] to-[#53BC81] bg-clip-text text-4xl font-semibold tracking-[-0.015em] leading-[1.08] text-transparent sm:text-5xl md:text-6xl">
                    {text.title}
                </h1>

                <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
                    <motion.a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="inline-flex items-center rounded-full bg-[#0aa06e] px-6 py-3 text-[15px] font-medium text-white shadow-sm transition-colors duration-300 hover:bg-[#0b8f63]"
                    >
                        {text.cta}
                    </motion.a>

                    <a
                        href="#methodology"
                        className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0aa06e] transition-colors hover:text-[#00464F]"
                    >
                        {text.learnMore}
                        <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                            ›
                        </span>
                    </a>
                </div>
            </div>
        </BidirectionalScrollReveal>
    );
}
