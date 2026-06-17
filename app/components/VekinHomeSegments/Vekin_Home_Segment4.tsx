"use client";

import React from "react";
import Link from "next/link";
// 1. Import your global language hook
import { useSiteLanguage } from "../siteLanguage";

// 2. Define translations dictionary for both content blocks
const translations = {
    en: {
        box1Title: "WHEN YOUR FACTORY RAMPS UP, START TO OPTIMIZE.",
        box1Subtitle: "TURN ENERGY INTO ADVANTAGE.",
        box1Desc: "As operations grow, costs follow. Our AI Energy Auditor reads electricity flows, detects energy leaks, and reveals carbon hotspots — so you can cut emissions and bills, without cutting growth.",
        
        box2Title: "WHEN YOUR LOGISTICS NETWORK SCALES.",
        box2Subtitle: " START BUILDING TRUST. EVERY RECEIPT TELLS A STORY.",
        box2Desc: "Each shipment carries more than goods — it carries emissions. E-Carbon Receipt tracks every fuel transaction and stores it on blockchain, giving you tamper-proof proof that builds trust across supply chains, regulators, and partners."
    },
    th: {
        box1Title: "เมื่อโรงงานของคุณเพิ่มกำลังการผลิต ถึงเวลาเริ่มปรับแต่งระบบ",
        box1Subtitle: "เปลี่ยนพลังงานให้กลายเป็นความได้เปรียบ",
        box1Desc: "เมื่อการดำเนินงานเติบโต ค่าใช้จ่ายมักจะตามมา AI Energy Auditor ของเราจะเข้ามาช่วยอ่านกระแสไฟฟ้า ตรวจจับการรั่วไหลของพลังงาน และเผยจุดวิกฤตที่มีการปล่อยคาร์บอนสูง เพื่อให้คุณสามารถลดทั้งการปล่อยมลพิษและค่าใช้จ่ายลง โดยไม่ต้องลดทอนการเติบโตของธุรกิจ",
        
        box2Title: "เมื่อเครือข่ายโลจิสติกส์ของคุณขยายตัว ถึงเวลาสร้างความน่าเชื่อถือ",
        box2Subtitle: "เพราะใบเสร็จทุกใบมีเรื่องราวซ่อนอยู่",
        box2Desc: "ทุกการจัดส่งไม่ได้มีเพียงแค่สินค้า แต่ยังมีการปล่อยมลพิษร่วมด้วย E-Carbon Receipt จะติดตามทุกธุรกรรมการใช้น้ำมันเชื้อเพลิงและจัดเก็บไว้บนบล็อกเชน ทำให้คุณได้หลักฐานที่ปลอดภัยจากการปลอมแปลง ช่วยสร้างความเชื่อมั่นอย่างแท้จริงให้กับซัพพลายเชน หน่วยงานกำกับดูแล และพันธมิตรของคุณ"
    }
} as const;

export default function Vekin_Home_Segment4() {
    // 3. Destructure language and map to active translations
    const { language } = useSiteLanguage();
    const t = translations[language];

    return (
        <section className="w-full">
            <div className="relative w-full">

                {/* BACKGROUND */}
                <img
                    src="/VEKIN Resource all Product/VEKIN 5/Home_BG4V2.png"
                    alt="Background"
                    className="block w-full h-auto object-contain"
                />

                {/* TEXT BOX 1 (AI Energy Auditor) */}
                <div className="absolute left-1/2 top-[15%] z-40 w-[90%] max-w-[700px] -translate-x-1/2 rounded-xl bg-white/70 p-3 text-[#6D6E71] backdrop-blur-md sm:w-[85%] sm:p-4 md:left-[65%] md:w-[55%] lg:left-[60%] lg:w-[46%] lg:p-6">
                    
                    {/* 1. TITLE: Edit mobile size here (Change 'text-xs') */}
                    <h2 className="text-xs sm:text-lg md:text-2xl lg:text-4xl font-bold leading-tight">
                        {t.box1Title}
                    </h2>

                    {/* 2. SUBTITLE: Edit mobile size here (Change 'text-[10px]') */}
                    <p className="mt-1 text-[10px] sm:text-base md:text-xl lg:text-2xl font-normal opacity-90 leading-tight">
                        {t.box1Subtitle}
                    </p>

                    {/* 3. DESCRIPTION: Edit mobile size here (Change 'text-[8px]') */}
                    <p className="mt-3 text-[8px] sm:text-xs md:text-sm lg:text-lg leading-relaxed">
                        {t.box1Desc}
                    </p>

                </div>

                {/* CLICKABLE IMAGE (E-Carbon Receipt) */}
                <Link href="/new_ec">
                    <img
                        src="/VEKIN Resource all Product/VEKIN 5/E_CARBON_RECEIPT.png"
                        alt="E Carbon Receipt"
                        className="
                            absolute
                            left-2/4
                            top-[55%]
                            -translate-x-1/2
                            z-40
                            w-[40%]
                            max-w-[500px]
                            cursor-pointer
                            transition-transform
                            duration-300
                            hover:scale-105

                            md:left-[45%]
                            md:w-[40%]
                        "
                    />
                </Link>

                {/* TEXT BOX 2 (Logistics Network / Blockchain) */}
                <div className="absolute left-1/2 top-[82%] z-40 w-[90%] max-w-[850px] -translate-x-1/2 rounded-xl bg-white/70 p-3 text-[#6D6E71] backdrop-blur-md sm:w-[85%] sm:left-[65%] md:w-[65%] lg:left-[60%] lg:w-[60%] lg:p-6">
                    
                    {/* 1. TITLE: Edit mobile size here (Change 'text-xs') */}
                    <h2 className="text-xs sm:text-lg md:text-2xl lg:text-4xl font-bold leading-tight">
                        {t.box2Title}
                    </h2>

                    {/* 2. SUBTITLE: Edit mobile size here (Change 'text-[10px]') */}
                    <p className="mt-1 text-[10px] sm:text-base md:text-xl lg:text-2xl font-normal opacity-90 leading-tight">
                        {t.box2Subtitle}
                    </p>

                    {/* 3. DESCRIPTION: Edit mobile size here (Change 'text-[8px]') */}
                    <p className="mt-3 text-[8px] sm:text-xs md:text-sm lg:text-lg leading-relaxed">
                        {t.box2Desc}
                    </p>

                </div>

            </div>
        </section>
    );
}