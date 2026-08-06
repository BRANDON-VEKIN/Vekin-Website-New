"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSiteLanguage } from "../siteLanguage";


const slideData = [
    {
        id: "ocr",
        icon: "/VEKIN Resource all Product/VEKIN 4/icon1.png",
        displayImage: "/VEKIN Resource all Product/VEKIN 4/Icon12.png",
        title: { en: "OCR-RPA", th: "ระบบ OCR-RPA" },
        subtitle: { en: "Supports a variety of technologies.", th: "รองรับเทคโนโลยีที่หลากหลาย" },
        features: [
            { en: "Facility managers", th: "ผู้จัดการอาคาร" },
            { en: "Vendors", th: "ผู้ขาย" },
            { en: "Dealers", th: "ตัวแทนจำหน่าย" },
            { en: "Project customers", th: "ลูกค้าโครงการ" },
            { en: "Suppliers", th: "ซัพพลายเออร์" }
        ]
    },
    {
        id: "dashboard",
        icon: "/VEKIN Resource all Product/VEKIN 4/icon1.png",
        displayImage: "/VEKIN Resource all Product/VEKIN 4/Icon11.png",
        title: { en: "Dynamic dashboard", th: "แดชบอร์ดอัจฉริยะ" },
        subtitle: { en: "Customize how you view your data.", th: "สามารถปรับแต่งมุมมองข้อมูลได้" },
        features: [
            { en: "BU reps", th: "ตัวแทนหน่วยงานธุรกิจ" },
            { en: "Project managers", th: "ผู้จัดการโครงการ" },
            { en: "Vendors", th: "ผู้ขาย" }
        ]
    },
    {
        id: "ai",
        icon: "/VEKIN Resource all Product/VEKIN 4/icon1.png",
        displayImage: "/VEKIN Resource all Product/VEKIN 4/Icon10.png",
        title: { en: "AI allocates data", th: "เอไอจัดสรรข้อมูล" },
        subtitle: { en: "Data source management, handled for you.", th: "การจัดการแหล่งที่มาข้อมูล" },
        features: [
            { en: "Sustainability teams", th: "ทีมงานความยั่งยืน" },
            { en: "Data teams", th: "ทีมข้อมูล" }
        ]
    }
];

function SliderContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { language } = useSiteLanguage();
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab) {
            const foundIdx = slideData.findIndex((slide) => slide.id === tab);
            if (foundIdx !== -1) {
                setCurrentIdx(foundIdx);
            }
        }
    }, [searchParams]);

    const handlePrev = () => {
        setCurrentIdx((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIdx((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    };

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const activeSlide = slideData[currentIdx];

    return (
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-4 md:p-0">

            {/* Top Bar: Absolute Back Button (offset below the fixed header) */}
            <div className="absolute top-[74px] left-4 md:top-[104px] md:left-8 z-30">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
                >
                    ‹ {language === "th" ? "กลับ" : "Back"}
                </button>
            </div>

            {/* Layout Wrapper: Centers content vertically AND horizontally */}
            <div className="relative mt-14 flex h-full w-full flex-1 flex-col items-center justify-center md:mt-0 md:flex-row">

                {/* TWO-COLUMN CONTAINER CARD */}
                <div className="relative grid h-auto max-h-[75vh] w-full grid-cols-1 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 shadow-[0_40px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:w-11/12 md:h-[80vh] md:w-3/4 md:grid-cols-2 md:rounded-[2.5rem]">

                    {/* LEFT COLUMN: Icon + Core Content */}
                    <div className="order-2 flex flex-col justify-between overflow-y-auto border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6 text-left text-white sm:p-10 md:order-1 md:border-b-0 md:border-r md:p-14">
                        <motion.div
                            key={currentIdx}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Icon above Title */}
                            <div className="mb-4 hidden sm:block md:mb-6">
                                <img
                                    src={activeSlide.icon}
                                    alt=""
                                    className="h-10 w-auto object-contain md:h-14"
                                />
                            </div>

                            {/* Eyebrow: slide counter */}
                            <p className="text-xs font-semibold tracking-[0.18em] text-emerald-300/80">
                                {`${String(currentIdx + 1).padStart(2, "0")} — ${String(slideData.length).padStart(2, "0")}`}
                            </p>

                            {/* Title */}
                            <h1 className="mt-2 text-2xl font-semibold tracking-[-0.015em] leading-[1.08] text-white sm:text-3xl md:text-4xl">
                                {activeSlide.title[language]}
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-2 mb-5 text-sm font-medium leading-relaxed text-white/65 md:mb-8 md:text-base">
                                {activeSlide.subtitle[language]}
                            </p>

                            {/* Feature list */}
                            <p className="mb-3 text-xs font-semibold tracking-wide text-white/50">
                                {language === "th" ? "เหมาะสำหรับ" : "Made for"}
                            </p>
                            <div className="flex flex-col items-start gap-2.5 sm:gap-3.5">
                                {activeSlide.features.map((feat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.1 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white shadow-[0_0_14px_rgba(16,185,129,0.4)]">
                                            ✓
                                        </div>
                                        <span className="text-sm font-medium tracking-[-0.01em] text-white/90 md:text-base">
                                            {feat[language]}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Slider Dot Controls */}
                        <div className="mt-6 flex flex-row items-center justify-center gap-2 md:mt-8 md:justify-start">
                            {slideData.map((slide, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIdx(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIdx ? "w-7 bg-emerald-400" : "w-2 bg-white/20 hover:bg-white/40"}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Display Image (all slides stay mounted, crossfade) */}
                    <div className="relative order-1 h-40 w-full overflow-hidden bg-black/10 sm:h-52 md:order-2 md:h-full">
                        {slideData.map((slide, index) => (
                            <motion.img
                                key={slide.id}
                                src={slide.displayImage}
                                alt={slide.title.en}
                                initial={false}
                                animate={{
                                    opacity: currentIdx === index ? 1 : 0,
                                    scale: currentIdx === index ? 1 : 1.05,
                                }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        ))}
                    </div>

                </div>

                {/* --- DESKTOP SIDE NAVIGATION ARROWS --- */}
                <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="absolute left-2 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/25 active:scale-90 md:flex lg:left-8"
                >
                    ‹
                </button>
                <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="absolute right-2 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/25 active:scale-90 md:flex lg:right-8"
                >
                    ›
                </button>

                {/* --- MOBILE/TABLET NAVIGATION ARROWS --- */}
                <div className="z-30 mt-4 flex items-center justify-center gap-6 md:hidden">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous slide"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white shadow-md backdrop-blur-md transition-all active:bg-white/25"
                    >
                        ‹
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next slide"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white shadow-md backdrop-blur-md transition-all active:bg-white/25"
                    >
                        ›
                    </button>
                </div>

            </div>
        </div>
    );
}

export default function DAPSegment4_1() {
    return (
        <section
            aria-label="DAP Segment 4 Details"
            className="relative h-screen w-full overflow-hidden"
            style={{
                backgroundImage: `url('/VEKIN Resource all Product/VEKIN 4/DAP_Slide1.png')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 z-0 bg-slate-950/25 mix-blend-multiply" />

            <Suspense fallback={<div className="flex h-full w-full items-center justify-center font-medium text-white">Loading...</div>}>
                <SliderContent />
            </Suspense>
        </section>
    );
}
