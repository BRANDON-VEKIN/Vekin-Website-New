"use client";

import React, { useState } from "react";
import LocalizedText from "../LocalizedText";

const sections = [
    {
        title: "Stage 1",
        bg: "/VEKIN Resource all Product/VEKIN 4/Stage1_BG.png",
        textEn: "DATA HUB FOR SEAMLESS AI AUTOMATION",
        textTh: "ศูนย์กลางข้อมูลเพื่อระบบอัตโนมัติ AI ที่ไร้รอยต่อ",
        extraEn: "Additional insight: This section provides deeper context about stage 1, focusing on operational efficiency, sustainability metrics, and system integration across the supply chain.",
        extraTh: "ข้อมูลเชิงลึกเพิ่มเติม: ส่วนนี้ให้ข้อมูลบริบทที่ลึกซึ้งยิ่งขึ้นเกี่ยวกับขั้นตอนที่ 1 โดยมุ่งเน้นไปที่ประสิทธิภาพการดำเนินงาน ตัวชี้วัดความยั่งยืน และการรวมระบบตลอดห่วงโซ่อุปทาน"
    },
    {
        title: "Stage 2",
        bg: "/VEKIN Resource all Product/VEKIN 4/Stage2_BG.png",
        textEn: "COMPLIANT REPORTING AND DYNAMIC VISUALIZATION",
        textTh: "การรายงานที่เป็นไปตามมาตรฐานและการแสดงข้อมูลเชิงภาพแบบไดนามิก",
        extraEn: "Additional insight: This section provides deeper context about stage 2, focusing on operational efficiency, sustainability metrics, and system integration across the supply chain.",
        extraTh: "ข้อมูลเชิงลึกเพิ่มเติม: ส่วนนี้ให้ข้อมูลบริบทที่ลึกซึ้งยิ่งขึ้นเกี่ยวกับขั้นตอนที่ 2 โดยมุ่งเน้นไปที่ประสิทธิภาพการดำเนินงาน ตัวชี้วัดความยั่งยืน และการรวมระบบตลอดห่วงโซ่อุปทาน"
    },
    {
        title: "Stage 3",
        bg: "/VEKIN Resource all Product/VEKIN 4/Stage3_BG.png",
        textEn: "ESG VALUE TRANSFER",
        textTh: "การส่งต่อคุณค่าและการเปลี่ยนผ่านมูลค่า ESG",
        extraEn: "Additional insight: This section provides deeper context about stage 3, focusing on operational efficiency, sustainability metrics, and system integration across the supply chain.",
        extraTh: "ข้อมูลเชิงลึกเพิ่มเติม: ส่วนนี้ให้ข้อมูลบริบทที่ลึกซึ้งยิ่งขึ้นเกี่ยวกับขั้นตอนที่ 3 โดยมุ่งเน้นไปที่ประสิทธิภาพการดำเนินงาน ตัวชี้วัดความยั่งยืน และการรวมระบบตลอดห่วงโซ่อุปทาน"
    },
];

export default function DAPSegment2_1() {
    const [active, setActive] = useState(0);
    const backgroundImage = sections[active]?.bg ?? sections[0].bg;

    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white py-8 sm:py-10 lg:h-screen lg:py-0">

            {/* BACKGROUND */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{ backgroundImage: `url("${encodeURI(backgroundImage)}")` }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50 lg:bg-black/40" />

            {/* MAIN CONTENT WRAPPER */}
            <div className="relative z-10 flex w-full max-w-6xl flex-col gap-5 px-4 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10">

                {/* LEFT BUTTONS */}
                <div className="flex w-full flex-col gap-4 lg:w-1/4">

                    {/* HEADER */}
                    <div className="mb-0 text-center lg:mb-4 lg:text-left">
                        <LocalizedText
                            as="h1"
                            th="กระบวนการของเรา"
                            en="Our Process"
                            className="text-2xl uppercase tracking-[0.18em] text-white/80 sm:text-3xl lg:text-4xl lg:tracking-widest"
                        />
                        <div className="mx-auto mt-2 h-px w-20 bg-white/50 lg:mx-0"></div>
                    </div>

                    {/* BUTTONS */}
                    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible lg:pb-0">
                        {sections.map((s, index) => (
                            <button
                                key={s.title}
                                onClick={() => setActive(index)}
                                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all sm:px-6 sm:py-3 sm:text-base lg:text-left ${
                                    active === index
                                        ? "bg-white text-black shadow-lg shadow-black/20"
                                        : "border-white/80 text-white hover:bg-white/10"
                                }`}
                            >
                                {s.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CENTER TEXT CONTAINER */}
                <div className="max-h-[68vh] w-full overflow-y-auto rounded-2xl border border-white/20 bg-black/35 p-5 text-white backdrop-blur-md sm:p-6 md:max-h-[72vh] lg:w-1/2 lg:bg-white/10 lg:p-8">
                    
                    {/* MAIN TITLE (e.g. Stage 1) */}
                    <LocalizedText
                        as="h1"
                        th={sections[active].title}
                        en={sections[active].title}
                        className="mb-4 text-2xl font-bold sm:text-3xl lg:mb-6 lg:text-4xl"
                    />

                    {/* MAIN TEXT */}
                    <LocalizedText
                        as="p"
                        th={sections[active].textTh}
                        en={sections[active].textEn}
                        className="mb-5 text-base leading-relaxed text-white/90 sm:text-lg lg:mb-6"
                    />

                    {/* EXTRA TEXT FIELD (NEW) */}
                    <LocalizedText
                        as="p"
                        th={sections[active].extraTh}
                        en={sections[active].extraEn}
                        className="text-sm leading-relaxed text-white/75"
                    />

                </div>

            </div>
        </section>
    );
}
