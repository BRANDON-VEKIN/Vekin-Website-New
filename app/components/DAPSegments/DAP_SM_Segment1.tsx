"use client";

import React from "react";
import Link from "next/link";

import LocalizedText from "../LocalizedText";


interface WorkspaceCard {
    id: string;
    titleTh: string;
    titleEn: string;
    descTh: string;
    descEn: string;
    imgSrc: string;
    tag: string;
    linkUrl: string; // Dynamic path binding property
}

// Only off-site destinations open in a new tab; in-app routes navigate in place.
const isExternal = (url: string) => /^https?:\/\//.test(url);

export default function DAP_Segment3() {
    const workspaces: WorkspaceCard[] = [
        {
            id: "immersive-sustainability",
            tag: "Product 01",
            titleTh: "Immersive Sustainability",
            titleEn: "Immersive Sustainability",
            descTh: "สัมผัสประสบการณ์การจัดการความยั่งยืนรูปแบบใหม่ ผ่านระบบจำลองพื้นที่เสมือนจริงที่ช่วยให้องค์กรเห็นภาพรวมการใช้ทรัพยากรได้อย่างลึกซึ้ง",
            descEn: "Experience next-generation sustainability management through rich virtual simulation environments, transforming environmental data into structural spatial awareness.",
            imgSrc: "/VEKIN Resource all Product/VEKIN 4/SM_Icon1.png",
            linkUrl: "/",
        },
        {
            id: "one-click-dap-lite",
            tag: "Product 02",
            titleTh: "ONE CLICK (DAP LITE)",
            titleEn: "ONE CLICK (DAP LITE)",
            descTh: "แพลตฟอร์มบริหารจัดการข้อมูลคาร์บอนแบบสำเร็จรูป เข้าถึงแดชบอร์ดสรุปผลวิเคราะห์ และสถิติสำคัญขององค์กรได้ทันทีด้วยการคลิกเพียงครั้งเดียว",
            descEn: "Streamlined carbon data platform giving you instant access to essential compliance dashboards and corporate tracking tools with a single click.",
            imgSrc: "/VEKIN Resource all Product/VEKIN 4/SM_Icon2.png", 
            linkUrl: "https://oneclick-dev.vekin.co.th/",
        },
        {
            id: "ai-energy-auditor",
            tag: "Product 03",
            titleTh: "AI ENERGY AUDITOR",
            titleEn: "AI ENERGY AUDITOR",
            descTh: "ระบบตรวจสอบและประเมินการใช้พลังงานอัจฉริยะ ขับเคลื่อนด้วย AI เพื่อวิเคราะห์ ค้นหาจุดสูญเสีย และแนะนำแนวทางประหยัดพลังงานได้อย่างแม่นยำสูงสุด",
            descEn: "Intelligent energy auditing infrastructure powered by advanced AI models. Analyze performance load and pinpoint core operational inefficiencies instantly.",
            imgSrc: "/VEKIN Resource all Product/VEKIN 4/SM_Icon3.png",
            linkUrl: "/auditor",
        },
        {
            id: "e-carbon-receipts",
            tag: "Product 04",
            titleTh: "E-CARBON RECEIPTS",
            titleEn: "E-CARBON RECEIPTS",
            descTh: "ระบบออกใบเสร็จรับเงินดิจิทัลควบคู่ไปกับการบันทึกเครดิตคาร์บอน ตรวจสอบมูลค่าธุรกรรมไปพร้อมๆ กับรอยเท้าคาร์บอนในระบบบัญชีอย่างปลอดภัย",
            descEn: "Digital invoice issuance meets precise carbon credit indexing. Audit corporate transactional statement chains alongside explicit greenhouse gas calculations.",
            imgSrc: "/VEKIN Resource all Product/VEKIN 4/SM_Icon4.png",
            linkUrl: "/new_ec",
        },
    ];

    // pt clears the fixed header, which sits out of flow and would otherwise
    // cover the heading.
    return (
        <section className="w-full font-sans pb-20 pt-32 md:pt-36 px-4 sm:px-6 md:px-8 flex flex-col items-center bg-slate-950">
            {/* Header Area */}
            <div className="w-full max-w-[1600px] text-center mb-12 md:mb-16">
                <LocalizedText 
                    as="h2" 
                    th="ภาพรวมผลิตภัณฑ์ทั้งหมด" 
                    en="Product Suite Overview" 
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 tracking-tight drop-shadow-md mb-4"
                />
                <LocalizedText 
                    as="p" 
                    th="เข้าถึงและจัดการเครื่องมือเทคโนโลยีเพื่อความยั่งยืนและการจัดการพลังงานขั้นสูงจาก VEKIN ภายในที่เดียว" 
                    en="Access and fully orchestrate specialized environmental data suites and smart energy automation utilities inside a unique ecosystem." 
                    className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
                />
            </div>

            {/* 4 Clickable Containers Grid Layout */}
            <div className="w-full max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {workspaces.map((card) => {
                    const external = isExternal(card.linkUrl);
                    const CardTag = external ? "a" : Link;

                    return (
                    <CardTag
                        key={card.id}
                        href={card.linkUrl}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/80 p-5 md:p-6 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-emerald-500/5 group cursor-pointer decoration-none outline-none"
                    >
                        {/* Upper Content Box */}
                        <div className="mb-6">
                            <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full mb-3.5">
                                {card.tag}
                            </span>
                            <LocalizedText 
                                as="h3" 
                                th={card.titleTh} 
                                en={card.titleEn} 
                                className="text-lg md:text-xl font-black text-slate-200 mb-2.5 group-hover:text-emerald-300 transition-colors tracking-tight"
                            />
                            <LocalizedText 
                                as="p" 
                                th={card.descTh} 
                                en={card.descEn} 
                                className="text-slate-400 text-xs md:text-sm leading-relaxed"
                            />
                        </div>

                        {/* Image aligned at the bottom */}
                        <div className="w-full h-40 sm:h-44 rounded-xl overflow-hidden relative mt-auto border border-slate-800/60">
                            <img 
                                src={card.imgSrc} 
                                alt={card.titleEn} 
                                className="absolute inset-0 w-full h-full object-cover transform scale-100 transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>
                    </CardTag>
                    );
                })}
            </div>
        </section>
    );
}