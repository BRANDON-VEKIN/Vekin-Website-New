"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSiteLanguage } from "../siteLanguage";


const slideData = [
    {
        id: "ocr",
        icon: "/VEKIN Resource all Product/VEKIN 4/icon1.png",
        displayImage: "/VEKIN Resource all Product/VEKIN 4/Icon12.png", 
        title: { en: "OCR-RPA", th: "ระบบ OCR-RPA" },
        subtitle: { en: "Supports a variety of technologies", th: "รองรับเทคโนโลยีที่หลากหลาย" },
        features: [
            { en: "Facility Managers", th: "ผู้จัดการอาคาร" },
            { en: "Vendors", th: "ผู้ขาย" },
            { en: "Dealer", th: "ตัวแทนจำหน่าย" },
            { en: "Project Customer", th: "ลูกค้าโครงการ" },
            { en: "Supplier", th: "ซัพพลายเออร์" }
        ]
    },
    {
        id: "dashboard",
        icon: "/VEKIN Resource all Product/VEKIN 4/icon1.png",
        displayImage: "/VEKIN Resource all Product/VEKIN 4/Icon11.png", 
        title: { en: "DYNAMIC DASHBOARD", th: "แดชบอร์ดอัจฉริยะ" },
        subtitle: { en: "Able to customize data viewing", th: "สามารถปรับแต่งมุมมองข้อมูลได้" },
        features: [
            { en: "BU Reps", th: "ตัวแทนหน่วยงานธุรกิจ" },
            { en: "Project Managers", th: "ผู้จัดการโครงการ" },
            { en: "Vendor", th: "ผู้ขาย" }
        ]
    },
    {
        id: "ai",
        icon: "/VEKIN Resource all Product/VEKIN 4/icon1.png",
        displayImage: "/VEKIN Resource all Product/VEKIN 4/Icon10.png", 
        title: { en: "AI ALLOCATES DATA", th: "เอไอจัดสรรข้อมูล" },
        subtitle: { en: "Data Source Management", th: "การจัดการแหล่งที่มาข้อมูล" },
        features: [
            { en: "Sustainability Team", th: "ทีมงานความยั่งยืน" },
            { en: "Data Team", th: "ทีมข้อมูล" }
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

    const activeSlide = slideData[currentIdx];

    return (
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-4 md:p-0">
            
            {/* Top Bar: Absolute Back Button */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30">
                <button 
                    onClick={() => router.back()}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-semibold transition-all shadow-md active:scale-95"
                >
                    &larr; Back
                </button>
            </div>

            {/* Layout Wrapper: Centers content vertically AND horizontally */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full flex-1 relative mt-14 md:mt-0">
                
                {/* TWO-COLUMN CONTAINER CARD */}
                <div className="relative w-full sm:w-11/12 md:w-3/4 h-auto max-h-[75vh] md:h-[80vh] bg-black/25 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                    
                    {/* LEFT COLUMN: Icon + Core Content */}
                    <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-between text-left text-white border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-b from-white/5 to-transparent overflow-y-auto order-2 md:order-1">
                        <div>
                            {/* Icon above Title - Hidden or shrunken on micro screens if necessary */}
                            <div className="mb-4 md:mb-6 hidden sm:block">
                                <img 
                                    src={activeSlide.icon} 
                                    alt="Slide Icon" 
                                    className="h-10 md:h-14 w-auto object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-wide text-white drop-shadow-sm">
                                {activeSlide.title[language]}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-white/70 text-xs sm:text-sm md:text-base mt-1 md:mt-2 mb-4 md:mb-8">
                                {activeSlide.subtitle[language]}
                            </p>

                            {/* Aligned Checkbox List */}
                            <div className="flex flex-col gap-2 sm:gap-4 mt-2 md:mt-4 items-start">
                                {activeSlide.features.map((feat, index) => (
                                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                                        <div className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-500 text-white text-[10px] sm:text-xs font-bold shadow-sm">
                                            ✓
                                        </div>
                                        <span className="text-white/90 text-xs sm:text-sm md:text-base font-medium">
                                            {feat[language]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slider Dot Controls */}
                        <div className="flex flex-row gap-2 mt-6 md:mt-8 items-center justify-center md:justify-start">
                            {slideData.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIdx(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIdx ? "w-6 md:w-8 bg-emerald-400" : "w-2 bg-white/20 hover:bg-white/40"}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Display Image */}
                    <div className="relative bg-black/10 flex items-center justify-center overflow-hidden h-40 sm:h-52 md:h-full w-full order-1 md:order-2">
                        <img 
                            src={activeSlide.displayImage} 
                            alt="Display Graphic" 
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* --- DESKTOP SIDE NAVIGATION ARROWS --- */}
                    {/* Left Arrow (Desktop Only) */}
                    <button 
                        onClick={handlePrev}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center bg-white/10 hover:bg-white/25 border border-white/20 text-white text-xl font-bold backdrop-blur-md rounded-full shadow-lg transition-all active:scale-90 z-30"
                    >
                        &#10094;
                    </button>

                    {/* Right Arrow (Desktop Only) */}
                    <button 
                        onClick={handleNext}
                        className="hidden md:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center bg-white/10 hover:bg-white/25 border border-white/20 text-white text-xl font-bold backdrop-blur-md rounded-full shadow-lg transition-all active:scale-90 z-30"
                    >
                        &#10095;
                    </button>

                </div>

                {/* --- MOBILE/TABLET NAVIGATION ARROWS --- */}
                {/* Placed cleanly beneath the primary layout wrapper on small devices */}
                <div className="flex md:hidden items-center justify-center gap-6 mt-4 z-30">
                    <button 
                        onClick={handlePrev}
                        className="h-10 w-10 flex items-center justify-center bg-white/10 active:bg-white/25 border border-white/20 text-white text-lg font-bold backdrop-blur-md rounded-full shadow-md transition-all"
                    >
                        &#10094;
                    </button>
                    <button 
                        onClick={handleNext}
                        className="h-10 w-10 flex items-center justify-center bg-white/10 active:bg-white/25 border border-white/20 text-white text-lg font-bold backdrop-blur-md rounded-full shadow-md transition-all"
                    >
                        &#10095;
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
            <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply z-0" />

            <Suspense fallback={<div className="flex h-full w-full items-center justify-center text-white font-medium">Loading...</div>}>
                <SliderContent />
            </Suspense>
        </section>
    );
}
