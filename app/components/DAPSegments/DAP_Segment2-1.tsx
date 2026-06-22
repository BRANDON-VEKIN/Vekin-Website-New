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
        <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white">

            {/* BACKGROUND */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{ backgroundImage: `url("${encodeURI(backgroundImage)}")` }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* MAIN CONTENT WRAPPER */}
            <div className="relative z-10 flex w-full max-w-6xl items-center justify-between px-10 gap-12">

                {/* LEFT BUTTONS */}
                <div className="flex w-1/4 flex-col gap-4">

                    {/* HEADER */}
                    <div className="mb-4">
                        <LocalizedText
                            as="h1"
                            th="กระบวนการของเรา"
                            en="Our Process"
                            className="text-4xl uppercase tracking-widest text-white/70 whitespace-nowrap"
                        />
                        <div className="mt-2 h-px w-20 bg-white/50"></div>
                    </div>

                    {/* BUTTONS */}
                    {sections.map((s, index) => (
                        <button
                            key={s.title}
                            onClick={() => setActive(index)}
                            className={`rounded-full border px-6 py-3 font-semibold transition-all text-left ${
                                active === index
                                    ? "bg-white text-black"
                                    : "border-white text-white hover:bg-white/10"
                            }`}
                        >
                            {s.title}
                        </button>
                    ))}
                </div>

                {/* CENTER TEXT CONTAINER */}
                <div className="w-1/2 rounded-2xl bg-white/10 p-8 text-white border border-white/20">
                    
                    {/* MAIN TITLE (e.g. Stage 1) */}
                    <LocalizedText
                        as="h1"
                        th={sections[active].title}
                        en={sections[active].title}
                        className="text-4xl font-bold mb-6"
                    />

                    {/* MAIN TEXT */}
                    <LocalizedText
                        as="p"
                        th={sections[active].textTh}
                        en={sections[active].textEn}
                        className="text-lg text-white/90 leading-normal mb-6"
                    />

                    {/* EXTRA TEXT FIELD (NEW) */}
                    <LocalizedText
                        as="p"
                        th={sections[active].extraTh}
                        en={sections[active].extraEn}
                        className="text-sm text-white/70 leading-normal"
                    />

                </div>

            </div>
        </section>
    );
}