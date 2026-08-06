"use client";

import React from "react";
import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

const copy = {
    th: {
        eyebrow: "เริ่มต้นวันนี้",
        title: "ผู้ช่วยที่เชื่อถือได้ ในการตัดสินใจเพื่ออนาคตที่ยั่งยืน",
        cta: "ทดลองใช้เลย",
        learnMore: "ดูระเบียบวิธีของเรา",
    },
    en: {
        eyebrow: "Start today",
        title: "A reliable helper in decision making, for a sustainable future.",
        cta: "Try it now",
        learnMore: "See our methodology",
    },
} as const;

export default function CarbonSegment10() {
    const { language } = useSiteLanguage();
    const text = copy[language];

    return (
        <BidirectionalScrollReveal
            aria-label="Carbon Receipt"
            amount={0.3}
            duration={1}
            offset={44}
            className="relative flex h-screen w-full items-center overflow-hidden"
            style={{
                backgroundImage: `url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG6.png')`,
                backgroundPosition: "right",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex w-full">
                <div className="w-full space-y-6 px-6 sm:px-10 md:w-1/2 md:px-16">
                    <p className="text-sm font-semibold tracking-wide text-[#0aa06e]">
                        {text.eyebrow}
                    </p>

                    <h1 className="bg-gradient-to-r from-[#00464F] to-[#53BC81] bg-clip-text text-3xl font-semibold tracking-[-0.015em] leading-[1.1] text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                        {text.title}
                    </h1>

                    <div className="flex flex-col items-start gap-5 pt-2 sm:flex-row sm:items-center sm:gap-8">
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
            </div>
        </BidirectionalScrollReveal>
    );
}
