"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

const items = [
    {
        titleEn: "Decentralized data storage",
        titleTh: "การจัดเก็บข้อมูลแบบกระจายศูนย์",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Button1.png",
        descriptionEn:
            "Every carbon record is distributed across the blockchain network instead of a single server, so your data stays tamper-proof, always available, and independently verifiable.",
        descriptionTh:
            "ทุกบันทึกคาร์บอนถูกกระจายไปทั่วเครือข่ายบล็อกเชนแทนการเก็บบนเซิร์ฟเวอร์เดียว ข้อมูลของคุณจึงแก้ไขไม่ได้ พร้อมใช้งานเสมอ และตรวจสอบได้อย่างอิสระ",
    },
    {
        titleEn: "Smart contract",
        titleTh: "สมาร์ทคอนแทรกต์",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Button2.png",
        descriptionEn:
            "Carbon receipts are issued automatically the moment transaction conditions are met — no manual paperwork, no delays, and no room for human error.",
        descriptionTh:
            "ใบเสร็จคาร์บอนถูกออกโดยอัตโนมัติทันทีที่เงื่อนไขธุรกรรมครบถ้วน ไม่ต้องใช้เอกสารด้วยมือ ไม่มีความล่าช้า และไม่มีช่องว่างสำหรับข้อผิดพลาดของมนุษย์",
    },
    {
        titleEn: "Public key encryption",
        titleTh: "การเข้ารหัสกุญแจสาธารณะ",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Button3.png",
        descriptionEn:
            "Cryptographic key pairs secure every record and signature, so only authorized parties can issue receipts while anyone can verify their authenticity.",
        descriptionTh:
            "คู่กุญแจเข้ารหัสช่วยรักษาความปลอดภัยของทุกบันทึกและลายเซ็น เฉพาะผู้ที่ได้รับอนุญาตเท่านั้นที่ออกใบเสร็จได้ ขณะที่ทุกคนสามารถตรวจสอบความถูกต้องได้",
    },
];

export default function CarbonSegment5() {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const { language } = useSiteLanguage();
    const isThai = language === "th";

    // Escape Key Listener to close Modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedIdx(null);
        };
        if (selectedIdx !== null) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden"; // Block page background scrolling
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedIdx]);

    const activeItem = selectedIdx !== null ? items[selectedIdx] : null;

    return (
        <BidirectionalScrollReveal
            amount={0.2}
            duration={1}
            offset={44}
            className="flex min-h-screen items-center bg-[#f5f5f7] px-6 py-24 sm:px-10"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-14">

                {/* Header Context */}
                <div className="max-w-2xl space-y-4 text-center">
                    <p className="text-sm font-semibold tracking-wide text-[#0aa06e]">
                        {isThai ? "ใบเสร็จคาร์บอน" : "Carbon Receipt"}
                    </p>
                    <h2 className="text-4xl font-semibold tracking-[-0.015em] text-[#1d1d1f] sm:text-5xl">
                        {isThai ? "สร้างมาเพื่อความน่าเชื่อถือ" : "Built for trust."}
                    </h2>
                    <p className="text-base font-medium leading-relaxed text-[#6e6e73] sm:text-lg">
                        {isThai
                            ? "สามเทคโนโลยีหลักที่ทำให้ทุกใบเสร็จคาร์บอนตรวจสอบได้และแก้ไขไม่ได้"
                            : "Three core technologies that make every carbon receipt verifiable and tamper-proof."}
                    </p>
                </div>

                {/* Card Grid */}
                <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {items.map((item, index) => (
                        <motion.button
                            key={item.titleEn}
                            type="button"
                            onClick={() => setSelectedIdx(index)}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -6 }}
                            className="group flex flex-col items-center rounded-[28px] bg-white p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                        >
                            {/* Product image */}
                            <div className="flex h-[240px] w-full items-center justify-center overflow-hidden sm:h-[280px]">
                                <img
                                    src={item.image}
                                    alt={isThai ? item.titleTh : item.titleEn}
                                    className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                />
                            </div>

                            <span className="mt-6 text-lg font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                                {isThai ? item.titleTh : item.titleEn}
                            </span>
                            <span className="mt-2 inline-flex items-center gap-1 text-[15px] font-medium text-[#0aa06e]">
                                {isThai ? "ดูรายละเอียด" : "Learn more"}
                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                                >
                                    ›
                                </span>
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX MODAL DIALOG */}
            {activeItem && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Frosted background mask */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-[#1d1d1f]/30 backdrop-blur-xl"
                        onClick={() => setSelectedIdx(null)}
                    />

                    {/* Modal Window Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 14 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-8 overflow-hidden rounded-[28px] bg-white p-8 shadow-[0_32px_80px_rgba(0,0,0,0.2)] sm:p-12 md:flex-row"
                    >
                        {/* Close Button top-right corner */}
                        <button
                            type="button"
                            onClick={() => setSelectedIdx(null)}
                            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] text-[#6e6e73] transition duration-200 hover:bg-[#e8e8ed] hover:text-[#1d1d1f]"
                            aria-label="Close dialog"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Image */}
                        <div className="flex h-[200px] w-full max-w-[220px] shrink-0 items-center justify-center sm:h-[240px] sm:max-w-[240px]">
                            <img
                                src={activeItem.image}
                                alt={isThai ? activeItem.titleTh : activeItem.titleEn}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Info Content Block */}
                        <div className="flex-1 text-center md:text-left">
                            <span className="text-sm font-semibold tracking-wide text-[#0aa06e]">
                                {isThai ? "ข้อมูลฟีเจอร์" : "Feature"}
                            </span>
                            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.015em] leading-tight text-[#1d1d1f] sm:text-3xl">
                                {isThai ? activeItem.titleTh : activeItem.titleEn}
                            </h3>
                            <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#6e6e73]">
                                {isThai ? activeItem.descriptionTh : activeItem.descriptionEn}
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </BidirectionalScrollReveal>
    );
}
