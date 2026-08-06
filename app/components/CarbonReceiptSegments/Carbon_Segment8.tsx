"use client";

import React from "react";
import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import LocalizedText from "../LocalizedText";

const cards = [
    {
        icon: "/VEKIN Resource all Product/VEKIN 2/Carbon_Icon1.png",
        labelEn: "Green activity, green product & service",
        labelTh: "กิจกรรมสีเขียว สินค้าและบริการสีเขียว",
        alt: "Green Activity",
    },
    {
        icon: "/VEKIN Resource all Product/VEKIN 2/Carbon_Icon2.png",
        labelEn: "CERO",
        labelTh: "CERO",
        alt: "CERO",
    },
    {
        icon: "/VEKIN Resource all Product/VEKIN 2/Carbon_Icon3.png",
        labelEn: "Verified carbon footprint — Fragment Carbon",
        labelTh: "คาร์บอนฟุตพริ้นท์ที่ผ่านการตรวจสอบ Fragment Carbon",
        alt: "Carbon Footprint",
    },
];

export default function CarbonSegment8() {
    return (
        <BidirectionalScrollReveal
            aria-label="Carbon Receipt"
            amount={0.24}
            duration={1}
            offset={44}
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
        >
            {/* MOBILE BACKGROUND */}
            <div
                className="absolute inset-0 bg-cover bg-center md:hidden"
                style={{
                    backgroundImage:
                        "url('/VEKIN Resource all Product/VEKIN 2/Carbon_Mobile_BG5.png')",
                }}
            />

            {/* DESKTOP BACKGROUND */}
            <div
                className="absolute inset-0 hidden bg-cover bg-center md:block"
                style={{
                    backgroundImage:
                        "url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG5.png')",
                }}
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/10 md:bg-transparent" />

            {/* CONTENT */}
            <div className="relative flex w-full items-center justify-center px-4 py-16">
                <div className="grid w-full max-w-6xl grid-cols-1 place-items-center gap-12 md:grid-cols-3 md:gap-14">
                    {cards.map((card, index) => (
                        <motion.button
                            key={card.labelEn}
                            type="button"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex w-full max-w-sm flex-col items-center gap-6"
                        >
                            <img
                                src={card.icon}
                                alt={card.alt}
                                className="h-44 w-44 object-contain drop-shadow-[0_14px_30px_rgba(0,0,0,0.15)] transition-transform duration-700 ease-out group-hover:scale-[1.05] sm:h-52 sm:w-52 md:h-60 md:w-60"
                            />
                            <div className="w-full rounded-full bg-white/85 px-6 py-3 text-center text-[15px] font-medium tracking-[-0.01em] text-[#1d1d1f] shadow-[0_8px_28px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_14px_40px_rgba(0,0,0,0.16)]">
                                <LocalizedText as="span" th={card.labelTh} en={card.labelEn} />
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </BidirectionalScrollReveal>
    );
}
