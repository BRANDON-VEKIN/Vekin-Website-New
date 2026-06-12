"use client";

import React from "react";
// 1. Import your global language hook
import { useSiteLanguage } from "../siteLanguage";

// 2. Define translations dictionary
const translations = {
    en: {
        title: "WHEN CARBON BECOMES CORE TO YOUR STRATEGY, START TO LEAD.",
        subtitle: "LET DATA DRIVE YOUR DECISIONS.",
        desc: "Growth brings complexity. DAP Main brings clarity. Unify all your carbon data into one dashboard — track progress, stay compliant, and turn every emission insight into a competitive advantage."
    },
    th: {
        title: "เมื่อคาร์บอนกลายเป็นหัวใจหลักของกลยุทธ์ ถึงเวลาเริ่มต้นเป็นผู้นำ",
        subtitle: "ให้ข้อมูลขับเคลื่อนทุกการตัดสินใจของคุณ",
        desc: "การเติบโตมาพร้อมกับความซับซ้อน แต่ DAP Main ช่วยสร้างความชัดเจนให้คุณได้ ด้วยการรวมข้อมูลคาร์บอนทั้งหมดของคุณไว้ในแดชบอร์ดเดียว เพื่อติดตามความคืบหน้า ปฏิบัติตามข้อกำหนดได้อย่างถูกต้อง และเปลี่ยนทุกข้อมูลเชิงลึกของการปล่อยมลพิษให้กลายเป็นความได้เปรียบทางการแข่งขัน"
    }
} as const;

export default function Vekin_Home_Segment7() {
    // 3. Destructure language and map to active translations
    const { language } = useSiteLanguage();
    const t = translations[language];

    return (
        <section className="w-full">
            <div className="relative w-full">

                {/* BACKGROUND */}
                <img
                    src="/VEKIN Resource all Product/VEKIN 5/Home_BG7.png"
                    alt="DAP background"
                    className="block h-auto w-full object-contain"
                />

                {/* RESPONSIVE TEXT BOX */}
                <div className="absolute left-1/2 top-[5%] z-40 w-[90%] max-w-[850px] -translate-x-1/2 rounded-xl bg-white/70 p-3 text-[#6D6E71] backdrop-blur-md sm:top-[42%] sm:w-[85%] sm:p-4 md:top-[5%] md:left-[50%] md:w-[75%] lg:left-[45%] lg:top-[8%] lg:w-[60%] lg:p-6">
                    
                    {/* 1. TITLE: Edit mobile size here (Change 'text-xs') */}
                    <h2 className="text-xs sm:text-lg md:text-2xl lg:text-4xl font-bold leading-tight">
                        {t.title}
                    </h2>

                    {/* 2. SUBTITLE: Edit mobile size here (Change 'text-[10px]') */}
                    <p className="mt-1 text-[10px] sm:text-base md:text-xl lg:text-2xl font-normal opacity-90 leading-tight">
                        {t.subtitle}
                    </p>

                    {/* 3. DESCRIPTION: Edit mobile size here (Change 'text-[8px]') */}
                    <p className="mt-3 text-[8px] sm:text-xs md:text-sm lg:text-lg leading-relaxed">
                        {t.desc}
                    </p>

                </div>

            </div>
        </section>
    );
}