"use client";

import React from "react";
import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

const copy = {
    th: {
        title: "เพื่อช่วยให้คุณเข้าใจปริมาณคาร์บอนจากสิ่งที่คุณสร้างขึ้น",
        description:
            "ด้วยข้อมูลที่ชัดเจนและตรวจสอบได้ คุณจึงส่งมอบผลิตภัณฑ์ที่ยั่งยืนแก่ลูกค้าได้อย่างมั่นใจและแท้จริง",
        cta: "รับบริการ",
    },
    en: {
        title: "To help you understand the carbon footprint of what you create.",
        description:
            "With clear, verifiable data, you can confidently deliver a truly sustainable product to your customers.",
        cta: "Get service",
    },
} as const;

export default function CarbonSegment4() {
    const { language } = useSiteLanguage();
    const text = copy[language];

    return (
        <BidirectionalScrollReveal
            aria-label="Carbon Receipt"
            amount={0.3}
            duration={1}
            offset={44}
            className="relative flex h-screen w-full items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG2.png')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 flex max-w-3xl flex-col items-center px-6 text-center">
                <h1 className="text-3xl font-semibold tracking-[-0.015em] leading-[1.1] text-white sm:text-4xl md:text-6xl">
                    {text.title}
                </h1>

                <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/75 sm:text-lg">
                    {text.description}
                </p>

                <motion.a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="mt-10 inline-flex items-center rounded-full border border-white/60 bg-white/10 px-6 py-3 text-[15px] font-medium text-white backdrop-blur-md transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                    {text.cta}
                </motion.a>
            </div>
        </BidirectionalScrollReveal>
    );
}
