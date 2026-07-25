"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";
import { useSiteLanguage } from "../siteLanguage";

const mockIcons = [
    { 
        src: "/VEKIN Resource all Product/VEKIN 4/icon4.png", 
        cert1: "/VEKIN Resource all Product/VEKIN 4/cert1.png",
        cert2: "/VEKIN Resource all Product/VEKIN 4/cert2.png",
        cert3: "/VEKIN Resource all Product/VEKIN 4/cert3.png",
        cert4: "/VEKIN Resource all Product/VEKIN 4/cert4.png",
        en: "ISO Base", 
        th: "ฐานไอเอสโอ",
        descEn: "Detailed breakdown of the ISO standardization criteria and compliance metrics tailored for your organizational blueprint.",
        descTh: "รายละเอียดเกณฑ์มาตรฐาน ISO และตัวชี้วัดการปฏิบัติตามข้อกำหนดที่ออกแบบมาสำหรับพิมพ์เขียวขององค์กรคุณ"
    },
    { 
        src: "/VEKIN Resource all Product/VEKIN 4/icon5.png", 
        isometric_img1: "/VEKIN Resource all Product/VEKIN 4/icon5.png",
        isometric_img2: "/VEKIN Resource all Product/VEKIN 4/icon5.png",
        isometric_img3: "/VEKIN Resource all Product/VEKIN 4/icon5.png",
        en: "Product & Service", 
        th: "สินค้าและบริการ",
        descEn: "Explore our dynamic catalogue of green solutions, micro-services, and platform optimizations architecture.",
        descTh: "สำรวจแคตตาล็อกโซลูชันสีเขียว ไมโครเซอร์วิส และสถาปัตยกรรมการเพิ่มประสิทธิภาพแพลตฟอร์มของเรา"
    },
    { 
        src: "/VEKIN Resource all Product/VEKIN 4/icon6.png", 
        isometric_img1: "/VEKIN Resource all Product/VEKIN 4/icon6.png",
        isometric_img2: "/VEKIN Resource all Product/VEKIN 4/icon6.png",
        isometric_img3: "/VEKIN Resource all Product/VEKIN 4/icon6.png",
        isometric_img4: "/VEKIN Resource all Product/VEKIN 4/icon6.png",
        en: "Carbon Emission Reduction", 
        th: "การลดการปล่อยก๊าซคาร์บอน",
        descEn: "Real-time auditing engines detecting greenhouse gas outputs, automating offsets, and suggesting cleaner pipeline alternatives.",
        descTh: "เครื่องมือตรวจสอบแบบเรียลไทม์ที่ตรวจจับการปล่อยก๊าซเรือนกระจก ชดเชยอัตโนมัติ และแนะนำทางเลือกท่อส่งที่สะอาดกว่า"
    },
    { 
        src: "/VEKIN Resource all Product/VEKIN 4/icon7.png", 
        isometric_img1: "/VEKIN Resource all Product/VEKIN 4/icon7.png",
        en: "Organization Product Carbon Neutrality", 
        th: "ความเป็นกลางทางคาร์บอนขององค์กรและผลิตภัณฑ์",
        descEn: "Strategic milestones roadmap leading to verified scopes 1, 2, and 3 carbon-neutral certifications.",
        descTh: "แผนงานความสำเร็จเชิงกลยุทธ์ที่นำไปสู่การรับรองความเป็นกลางทางคาร์บอนในขอบเขตที่ 1, 2 และ 3 ที่ได้รับการตรวจสอบแล้ว"
    },
];

export default function DAPSegment4() {
    const [activeModal, setActiveModal] = useState<number | null>(null);
    const { language } = useSiteLanguage();
    const isThai = language === "th";

    // Close on Escape + lock background scroll while a modal is open
    useEffect(() => {
        if (activeModal === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveModal(null);
        };
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [activeModal]);

    return (
        <section className="relative min-h-screen md:h-[180vh] w-full flex flex-col overflow-hidden bg-white">

            {/* BACKGROUND LAYERS (Desktop Only) */}
            <div className="hidden md:block h-1/2 w-full overflow-hidden">
                <img
                    src="/VEKIN Resource all Product/VEKIN 4/DAP_Slide1.png"
                    className="h-full w-full object-cover object-bottom"
                    alt=""
                />
            </div>
            <div className="hidden md:block h-1/2 w-full overflow-hidden relative">
                <img
                    src="/VEKIN Resource all Product/VEKIN 4/DAP_BG3.png"
                    className="h-full w-full object-cover object-top"
                    alt=""
                />
            </div>

            {/* MAIN CORE CONTAINER */}
            <BidirectionalScrollReveal
                as="div"
                className="flex flex-col gap-12 px-4 py-8 md:p-0 md:block w-full h-full md:absolute md:inset-0 md:z-10"
                amount={0.12}
                duration={0.9}
                exitDuration={0.2}
                offset={36}
            >

                {/* LAYER 1: PHONE MOCKUP FRAME */}
                <div className="w-full max-w-[550px] mx-auto md:absolute md:left-1/4 md:top-1/2 md:z-10 md:-translate-x-1/2 md:-translate-y-1/2">
                    <div className="relative h-[680px] sm:h-[750px] md:h-[1000px] w-full rounded-[2.5rem] md:rounded-[3rem] border-8 md:border-[14px] border-black bg-white shadow-2xl flex flex-col overflow-hidden">
                        {/* Notch */}
                        <div className="absolute left-1/2 top-0 z-30 h-4 md:h-6 w-20 md:w-28 -translate-x-1/2 rounded-b-xl bg-black"></div>
                        
                        {/* Screen Content Stack */}
                        <div className="flex flex-1 flex-col justify-between bg-gradient-to-tr from-blue-600 via-teal-500 to-green-400 p-6 md:p-12 text-left relative">
                            
                            <div className="w-full flex flex-col flex-1">
                                <p className="text-white/40 font-mono text-xs tracking-widest uppercase text-center mt-4 md:mt-6 mb-4">
                                    Vekin Ecosystem
                                </p>

                                {/* MOBILE VIEW: Overlay scrollable container directly ABOVE the methodology header text */}
                                <div className="md:hidden w-full overflow-x-auto flex flex-row gap-4 py-4 mb-6 scrollbar-none snap-x snap-mandatory">
                                    
                                    {/* Container 1 */}
                                    <Link 
                                        href="/dap/segment4-1" 
                                        className="w-[85%] shrink-0 snap-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 flex flex-col justify-between text-center"
                                    >
                                        <div>
                                            <img src="/VEKIN Resource all Product/VEKIN 4/icon1.png" alt="" className="h-16 w-auto object-contain mx-auto mb-2"/>
                                            <p className="text-white font-bold text-sm tracking-wide">{isThai ? "เอไอจัดสรรข้อมูล" : "AI ALLOCATES DATA"} &rarr;</p>
                                            <p className="text-white/70 text-[11px] mb-2">{isThai ? "การจัดการแหล่งที่มาข้อมูล" : "Data Source Management"}</p>
                                        </div>
                                        <div className="flex flex-col gap-1 items-start text-left bg-black/10 p-2 rounded-lg">
                                            <span className="text-white/90 text-xs font-medium">✓ {isThai ? "ทีมงานความยั่งยืน" : "Sustainability Team"}</span>
                                            <span className="text-white/90 text-xs font-medium">✓ {isThai ? "ทีมข้อมูล" : "Data Team"}</span>
                                        </div>
                                    </Link>

                                    {/* Container 2 */}
                                    <Link 
                                        href="/dap/segment4-1" 
                                        className="w-[85%] shrink-0 snap-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 flex flex-col justify-between text-center"
                                    >
                                        <div>
                                            <img src="/VEKIN Resource all Product/VEKIN 4/icon2.png" alt="" className="h-16 w-auto object-contain mx-auto mb-2"/>
                                            <p className="text-white font-bold text-sm tracking-wide">{isThai ? "แดชบอร์ดอัจฉริยะ" : "DYNAMIC DASHBOARD"} &rarr;</p>
                                            <p className="text-white/70 text-[11px] mb-2">{isThai ? "ปรับแต่งมุมมองข้อมูลได้" : "Customized data viewing"}</p>
                                        </div>
                                        <div className="flex flex-col gap-1 items-start text-left bg-black/10 p-2 rounded-lg w-full">
                                            <span className="text-white/90 text-xs font-medium">✓ {isThai ? "ตัวแทนหน่วยงานธุรกิจ" : "BU Reps"}</span>
                                            <span className="text-white/90 text-xs font-medium">✓ {isThai ? "ผู้จัดการโครงการ" : "Project Managers"}</span>
                                            <span className="text-white/90 text-xs font-medium">✓ {isThai ? "ผู้ขาย" : "Vendor"}</span>
                                        </div>
                                    </Link>

                                    {/* Container 3 */}
                                    <Link 
                                        href="/dap/segment4-1" 
                                        className="w-[85%] shrink-0 snap-center bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 flex flex-col justify-between text-center"
                                    >
                                        <div>
                                            <img src="/VEKIN Resource all Product/VEKIN 4/icon3.png" alt="" className="h-16 w-auto object-contain mx-auto mb-2"/>
                                            <p className="text-white font-bold text-sm tracking-wide">{isThai ? "ระบบ OCR-RPA" : "OCR-RPA"} &rarr;</p>
                                            <p className="text-white/70 text-[11px] mb-2">{isThai ? "รองรับเทคโนโลยีที่หลากหลาย" : "Multi-tech support"}</p>
                                        </div>
                                        <div className="flex flex-col gap-1 items-start text-left bg-black/10 p-2 rounded-lg w-full">
                                            <span className="text-white/90 text-xs font-medium">✓ {isThai ? "ผู้จัดการอาคาร" : "Facility Managers"}</span>
                                            <span className="text-white/90 text-xs font-medium">✓ {isThai ? "ผู้ขาย" : "Vendors"}</span>
                                            <span className="text-white/90 text-xs font-medium">✓ {isThai ? "ตัวแทนจำหน่าย" : "Dealer"}</span>
                                        </div>
                                    </Link>
                                </div>

                                {/* MOBILE VIEW ONLY: METHODOLOGY TEXT */}
                                <div className="md:hidden mt-2 mb-6">
                                    <h3 className="mb-3 bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-2xl font-black tracking-tight text-transparent drop-shadow-[0_12px_34px_rgba(59,185,123,0.28)]">
                                        {isThai ? "ระเบียบวิธีของเรา" : "OUR METHODOLOGY"}
                                    </h3>
                                    <p className="text-white/80 text-xs leading-relaxed font-medium max-w-xs">
                                        {isThai
                                            ? "ระบบวิศวกรรมสิ่งแวดล้อมแบบรวมศูนย์ของเราเปลี่ยนข้อมูลการดำเนินงานดิบให้เป็นรายงานตามมาตรฐาน ด้วยการจัดการเส้นทางการรับข้อมูลหลายชั้นพร้อมความปลอดภัยละเอียด องค์กรจึงลดภาระการตรวจสอบคาร์บอนแบบเดิมได้"
                                            : "Our unified environmental engineering pipeline transforms raw operation data into standard compliance reports. By managing multi-layered ingestion pathways with granular security, organizations scale past traditional carbon audit overhead."}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* DESKTOP VIEW ONLY: Combined layout containing the row containers WITH the text directly below them */}
                <div className="hidden md:flex flex-col gap-10 w-full max-w-[1200px] mx-auto absolute left-1/2 top-[42%] z-20 -translate-x-1/2 -translate-y-1/2 px-6">
                    
                    {/* The 3 Cards Row */}
                    <div className="flex flex-row items-stretch justify-center gap-6">
                        {/* Container 1 */}
                        <Link 
                            href="/dap/segment4-1" 
                            className="flex-1 min-w-[260px] bg-[#00B7A3]/30 hover:bg-white/30 border border-white/30 backdrop-blur-lg rounded-2xl p-5 shadow-lg transition-all duration-200 active:scale-[0.98] group text-center flex flex-col items-center justify-between"
                        >
                            <div className="flex flex-col items-center w-full">
                                <div className="mb-3">
                                    <img src="/VEKIN Resource all Product/VEKIN 4/icon1.png" alt="" className="h-24 w-auto object-contain mx-auto"/>
                                </div>
                                <p className="text-white font-bold text-lg group-hover:translate-x-1 transition-transform">{isThai ? "เอไอจัดสรรข้อมูล" : "AI ALLOCATES DATA"} &rarr;</p>
                                <p className="text-white/70 text-sm mt-1 mb-4">{isThai ? "การจัดการแหล่งที่มาข้อมูล" : "Data Source Management"}</p>
                                <div className="flex flex-col gap-2.5 mt-2 mx-auto w-fit items-start">
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-500 text-white text-xs font-bold shadow-sm">✓</div>
                                        <span className="text-white/90 text-sm font-medium leading-5">{isThai ? "ทีมงานความยั่งยืน" : "Sustainability Team"}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-500 text-white text-xs font-bold shadow-sm">✓</div>
                                        <span className="text-white/90 text-sm font-medium leading-5">{isThai ? "ทีมข้อมูล" : "Data Team"}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Container 2 */}
                        <Link 
                            href="/dap/segment4-1" 
                            className="flex-1 min-w-[260px] bg-[#E8FDF4]/30 hover:bg-white/30 border border-white/30 backdrop-blur-lg rounded-2xl p-5 shadow-lg transition-all duration-200 active:scale-[0.98] group text-center flex flex-col items-center justify-between"
                        >
                            <div className="flex flex-col items-center w-full">
                                <div className="mb-3">
                                    <img src="/VEKIN Resource all Product/VEKIN 4/icon2.png" alt="" className="h-24 w-auto object-contain mx-auto"/>
                                </div>
                                <p className="text-white font-bold text-lg group-hover:translate-x-1 transition-transform">{isThai ? "แดชบอร์ดอัจฉริยะ" : "DYNAMIC DASHBOARD"} &rarr;</p>
                                <p className="text-white/70 text-sm mt-1 mb-4">{isThai ? "สามารถปรับแต่งมุมมองข้อมูลได้" : "Able to customize data viewing"}</p>
                                <div className="flex flex-col gap-2.5 mt-2 mx-auto w-fit items-start">
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-500 text-white text-xs font-bold shadow-sm">✓</div>
                                        <span className="text-white/90 text-sm font-medium leading-5">{isThai ? "ตัวแทนหน่วยงานธุรกิจ" : "BU Reps"}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-500 text-white text-xs font-bold shadow-sm">✓</div>
                                        <span className="text-white/90 text-sm font-medium leading-5">{isThai ? "ผู้จัดการโครงการ" : "Project Managers"}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-500 text-white text-xs font-bold shadow-sm">✓</div>
                                        <span className="text-white/90 text-sm font-medium leading-5">{isThai ? "ผู้ขาย" : "Vendor"}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Container 3 */}
                        <Link 
                            href="/dap/segment4-1" 
                            className="flex-1 min-w-[260px] bg-[#01AA71]/30 hover:bg-white/30 border border-white/30 backdrop-blur-lg rounded-2xl p-5 shadow-lg transition-all duration-200 active:scale-[0.98] group text-center flex flex-col items-center justify-between"
                        >
                            <div className="flex flex-col items-center w-full">
                                <div className="mb-3">
                                    <img src="/VEKIN Resource all Product/VEKIN 4/icon3.png" alt="" className="h-24 w-auto object-contain mx-auto"/>
                                </div>
                                <p className="text-white font-bold text-lg group-hover:translate-x-1 transition-transform">{isThai ? "ระบบ OCR-RPA" : "OCR-RPA"} &rarr;</p>
                                <p className="text-white/70 text-sm mt-1 mb-4">{isThai ? "รองรับเทคโนโลยีที่หลากหลาย" : "Supports a variety of technologies"}</p>
                                <div className="flex flex-col gap-2.5 mt-2 mx-auto w-fit items-start">
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-500 text-white text-xs font-bold shadow-sm">✓</div>
                                        <span className="text-white/90 text-sm font-medium leading-5">{isThai ? "ผู้จัดการอาคาร" : "Facility Managers"}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-500 text-white text-xs font-bold shadow-sm">✓</div>
                                        <span className="text-white/90 text-sm font-medium leading-5">{isThai ? "ผู้ขาย" : "Vendors"}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-500 text-white text-xs font-bold shadow-sm">✓</div>
                                        <span className="text-white/90 text-sm font-medium leading-5">{isThai ? "ตัวแทนจำหน่าย" : "Dealer"}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* DESKTOP VIEW ONLY: Methodology block aligned left directly underneath the cards */}
                    <div className="w-full max-w-md self-start pl-4 mt-2">
                        <h3 className="mb-3 bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-3xl font-black tracking-tight text-transparent drop-shadow-[0_12px_34px_rgba(59,185,123,0.28)]">
                            {isThai ? "ระเบียบวิธีของเรา" : "OUR METHODOLOGY"}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed font-medium">
                            {isThai
                                ? "ระบบวิศวกรรมสิ่งแวดล้อมแบบรวมศูนย์ของเราเปลี่ยนข้อมูลการดำเนินงานดิบให้เป็นรายงานตามมาตรฐาน ด้วยการจัดการเส้นทางการรับข้อมูลหลายชั้นพร้อมความปลอดภัยละเอียด องค์กรจึงลดภาระการตรวจสอบคาร์บอนแบบเดิมได้"
                                : "Our unified environmental engineering pipeline transforms raw operation data into standard compliance reports. By managing multi-layered ingestion pathways with granular security, organizations scale past traditional carbon audit overhead."}
                        </p>
                    </div>

                </div>

                {/* LAYER 3: 2x2 ICONS GRID */}
                <div className="w-full max-w-sm mx-auto grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-12 md:gap-y-8 md:absolute md:right-[18%] md:top-[75%] md:-translate-y-1/2 md:z-20">
                    {mockIcons.map((icon, idx) => (
                        <button 
                            key={idx} 
                            onClick={() => setActiveModal(idx)}
                            className="flex flex-col items-center w-full md:w-36 text-center transition-transform hover:scale-105 active:scale-95 focus:outline-none group"
                        >
                            <LocalizedText 
                                th={icon.th} 
                                en={icon.en} 
                                className="mb-2 min-h-[2rem] bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-xs font-semibold tracking-wide text-transparent drop-shadow-md transition-opacity group-hover:opacity-80 md:text-sm line-clamp-2"
                            />
                            <img 
                                src={icon.src} 
                                alt={`Grid Icon ${idx + 1}`} 
                                className="h-24 w-24 md:h-30 md:w-30 object-contain drop-shadow-md"
                            />
                        </button>
                    ))}
                </div>
            </BidirectionalScrollReveal>

            {/* LAYER 4: DETAILED POPUP MODALS */}
            <AnimatePresence>
                {activeModal !== null && (() => {
                    const current = mockIcons[activeModal];
                    const sectionLabel =
                        activeModal === 0
                            ? (isThai ? "การรับรองมาตรฐาน" : "Certifications")
                            : activeModal === 1
                            ? (isThai ? "ไฮไลต์" : "Highlights")
                            : (isThai ? "ขั้นตอนการทำงาน" : "Process");

                    return (
                        <motion.div
                            key="dap-modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
                            onClick={() => setActiveModal(null)}
                        >
                            <motion.div
                                role="dialog"
                                aria-modal="true"
                                aria-label={isThai ? current.th : current.en}
                                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                                transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-y-auto rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-emerald-900 via-emerald-950 to-teal-950 p-6 shadow-[0_40px_120px_-24px_rgba(0,0,0,0.85)] md:p-9"
                            >
                                {/* Decorative accents */}
                                <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />

                                {/* Close */}
                                <button
                                    onClick={() => setActiveModal(null)}
                                    aria-label="Close"
                                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl leading-none text-white/70 backdrop-blur-md transition hover:border-white/40 hover:bg-white/15 hover:text-white active:scale-90"
                                >
                                    &times;
                                </button>

                                {/* Header */}
                                <div className="relative flex flex-col items-center text-center">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner md:h-20 md:w-20">
                                        <img src={current.src} alt="" className="h-9 w-9 object-contain md:h-11 md:w-11" />
                                    </div>
                                    <LocalizedText
                                        th={current.th}
                                        en={current.en}
                                        className="bg-gradient-to-r from-[#7dffc4] to-[#3BB97B] bg-clip-text text-2xl font-extrabold tracking-tight text-transparent drop-shadow-[0_12px_34px_rgba(59,185,123,0.28)] md:text-4xl"
                                    />
                                    <LocalizedText
                                        th={current.descTh}
                                        en={current.descEn}
                                        className="mt-3 max-w-xl text-xs leading-relaxed text-white/75 md:text-sm"
                                    />
                                </div>

                                {/* Section divider label */}
                                <div className="mt-7 flex items-center gap-3">
                                    <span className="h-px flex-1 bg-white/10" />
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300/70">
                                        {sectionLabel}
                                    </span>
                                    <span className="h-px flex-1 bg-white/10" />
                                </div>

                                {/* Media: Certifications */}
                                {activeModal === 0 && (
                                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {[current.cert1, current.cert2, current.cert3, current.cert4].map((cert, index) => cert && (
                                            <div key={index} className="group flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-emerald-300/40 hover:bg-white/[0.08] md:h-36">
                                                <img src={cert} alt="" className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105" />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Media: Product & Service */}
                                {activeModal === 1 && (
                                    <div className="mt-5 flex flex-row flex-wrap justify-center gap-3">
                                        {[current.isometric_img1, current.isometric_img2, current.isometric_img3].map((img, index) => img && (
                                            <div key={index} className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-2.5 shadow-md transition hover:-translate-y-1 md:h-28 md:w-28">
                                                <img src={img} alt="" className="max-h-full max-w-full object-contain" />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Media: Process steps */}
                                {(activeModal === 2 || activeModal === 3) && (
                                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {['isometric_img1', 'isometric_img2', 'isometric_img3', 'isometric_img4'].map((prop, idx) => {
                                            const imgSrc = current[prop as keyof typeof current];
                                            if (!imgSrc || typeof imgSrc !== "string") return null;
                                            return (
                                                <div key={idx} className="relative flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-emerald-300/40 hover:bg-white/[0.08]">
                                                    <span className="absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white shadow">{idx + 1}</span>
                                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 p-2">
                                                        <img src={imgSrc} alt="" className="h-full w-full object-contain" />
                                                    </div>
                                                    <span className="text-[11px] font-medium text-white/70">
                                                        {isThai ? `ขั้นตอน ${idx + 1}` : `Step ${idx + 1}`}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    );
                })()}
            </AnimatePresence>

        </section>
    );
}
