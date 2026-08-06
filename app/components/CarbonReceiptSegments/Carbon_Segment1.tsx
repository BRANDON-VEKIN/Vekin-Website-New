"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSiteLanguage } from "../siteLanguage";

const copy = {
    th: {
        badge: "E-Carbon Receipt",
        title: "ขับเคลื่อนอนาคตของโลจิสติกส์และพลังงานด้วยโซลูชันที่ยั่งยืน",
        description:
            "บันทึกทุกธุรกรรมเครดิตคาร์บอนผ่านบันทึกที่ได้รับการตรวจสอบโดยบล็อกเชน เพื่อการตรวจสอบย้อนกลับที่มั่นใจได้ และการรายงานด้านสิ่งแวดล้อมที่ง่ายขึ้น",
        scrollCue: "เลื่อนเพื่อสำรวจ",
    },
    en: {
        badge: "E-Carbon Receipt",
        title: "Driving the future of logistics and energy with sustainable solutions.",
        description:
            "Document every carbon credit transaction through a blockchain-verified record — ensuring traceability and simplifying your environmental reporting.",
        scrollCue: "Scroll to explore",
    },
} as const;

export default function CarbonSegment1() {
    const { language } = useSiteLanguage();
    const text = copy[language];
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Apple-style pinned hero: background settles in, copy drifts up and fades as you scroll on
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);
    const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
    const copyY = useTransform(scrollYProgress, [0, 0.55], [0, -70]);
    const cueOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-[160vh] w-full bg-black">
            <section
                aria-label="Carbon Receipt"
                className="sticky top-0 h-screen w-full overflow-hidden"
            >
                <motion.div
                    style={{
                        scale: bgScale,
                        backgroundImage: "url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG1.png')",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="absolute inset-0"
                />

                {/* Quiet cinematic overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42),rgba(0,0,0,0.18)_45%,rgba(0,0,0,0.5))]" />

                {/* Centered hero copy */}
                <motion.div
                    style={{ opacity: copyOpacity, y: copyY }}
                    className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm font-semibold tracking-wide text-[#7fe3ab]"
                    >
                        {text.badge}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.015em] leading-[1.07] text-white sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        {text.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/75 sm:text-lg md:text-xl"
                    >
                        {text.description}
                    </motion.p>
                </motion.div>

                {/* Scroll cue */}
                <motion.div
                    style={{ opacity: cueOpacity }}
                    className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60"
                >
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase">
                        {text.scrollCue}
                    </span>
                    <motion.span
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md"
                    >
                        <span className="relative -mt-0.5 h-2.5 w-2.5 rotate-45 border-b border-r border-white/80" />
                    </motion.span>
                </motion.div>
            </section>
        </div>
    );
}
