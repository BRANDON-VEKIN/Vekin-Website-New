"use client";

import React from "react";
// 1. Import your existing site language hook
import { useSiteLanguage } from "../siteLanguage"; 

// 2. Map translations using your Language type
const translations = {
    en: {
        expertise: "My expertise as a",
        carbon: "CARBON",
        verifier: "VERIFIER",
        complexities: "allows me to navigate complexities",
        results: "and deliver reliable results",
        infoTitle: "WHEN YOUR BUSINESS BEGINS",
        infoDesc: "YOU DON'T HAVE TO WAIT UNTIL YOU'RE BIG TO TAKE CARBON SERIOUSLY. WITH ONE CLICK, EVEN THE SMALLEST BUSINESS CAN GENERATE VERIFIED CARBON REPORTS — LAYING A FOUNDATION FOR FUTURE FUNDING, CREDIBILITY, AND LONG-TERM GROWTH."
    },
    th: {
        expertise: "ความเชี่ยวชาญของฉันในฐานะ",
        carbon: "ผู้ทวนสอบคาร์บอน",
        verifier: "ผู้ตรวจสอบ",
        complexities: "ช่วยให้ฉันจัดการกับความซับซ้อนต่างๆ",
        results: "และส่งมอบผลลัพธ์ที่น่าเชื่อถือได้",
        infoTitle: "เมื่อธุรกิจของคุณเริ่มต้นขึ้น",
        infoDesc: "คุณไม่จำเป็นต้องรอให้ธุรกิจเติบโตจนใหญ่โต ถึงจะเริ่มให้ความสำคัญกับคาร์บอน เพียงคลิกเดียว แม้แต่ธุรกิจที่เล็กที่สุดก็สามารถสร้างรายงานคาร์บอนที่ผ่านการทวนสอบแล้ว เพื่อวางรากฐานสำหรับเงินทุน ความน่าเชื่อถือ และการเติบโตในระยะยาว"
    }
} as const;

export default function Vekin_Home_Segment1() {
    // 3. Destructure 'language' from your global hook
    const { language } = useSiteLanguage();
    const t = translations[language];

    return (
        <section className="w-full">
            <div className="relative w-full">

                {/* BACKGROUND */}
                <img
                    src="/VEKIN Resource all Product/VEKIN 5/Home_BG1.png"
                    alt="DAP background"
                    className="block h-auto w-full object-contain"
                />

                {/* HERO TEXT */}
                <div className="absolute left-1/2 top-[8%] z-40 w-full -translate-x-1/2 px-4 text-[#6D6E71]">
                    <div className="text-center">

                        {/* LOGO */}
                        <div className="mb-2 flex justify-center">
                            <img
                                src="/VEKIN Resource all Product/VEKIN 5/Logo.png"
                                alt="Logo"
                                className="h-5 sm:h-6 md:h-8 lg:h-10 object-contain"
                            />
                        </div>

                        {/* TRANSLATED CONTENT */}
                        <p className="text-[10px] sm:text-sm md:text-lg lg:text-2xl font-bold leading-none">
                            {t.expertise}
                        </p>

                        <h1 className="text-[clamp(1.75rem,8vw,8rem)] font-bold leading-[0.82] mt-1">
                            {t.carbon}
                        </h1>

                        <h1 className="text-[clamp(1.75rem,8vw,8rem)] font-bold leading-[0.82]">
                            {t.verifier}
                        </h1>

                        <p className="mt-2 text-[10px] sm:text-xs md:text-base lg:text-xl font-bold leading-tight">
                            {t.complexities}
                        </p>

                        <p className="text-[10px] sm:text-xs md:text-base lg:text-xl font-bold leading-tight">
                            {t.results}
                        </p>
                    </div>
                </div>

                {/* INFORMATION BOX */}
                <div className="absolute left-1/2 top-[40%] z-40 w-[80%] max-w-[700px] -translate-x-1/2 rounded-xl bg-white/75 p-3 text-[#6D6E71] backdrop-blur-md sm:top-[60%] sm:w-[85%] sm:p-4 md:left-[70%] md:w-[55%] lg:left-[76%] lg:w-[46%] lg:p-6">
                    
                    {/* 1. INFO TITLE: Edit mobile size here (Change 'text-xs') */}
                    <p className="text-xs sm:text-lg md:text-2xl lg:text-4xl font-bold leading-tight">
                        {t.infoTitle}
                    </p>

                    {/* 2. INFO DESCRIPTION: Edit mobile size here (Change 'text-[8px]') */}
                    <p className="mt-2 text-[8px] sm:text-xs md:text-sm lg:text-lg leading-relaxed">
                        {t.infoDesc}
                    </p>

                </div>

                {/* CTA IMAGE */}
                <div
                    className="
                        absolute
                        left-1/2
                        top-[82%]
                        z-40
                        w-[45%]
                        -translate-x-1/2

                        sm:w-[45%]

                        md:left-[58%]
                        md:w-[35%]

                        lg:left-[55%]
                        lg:w-[40%]
                    "
                >
                    <a
                        href="https://oneclick-dev.vekin.co.th/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer"
                    >
                        <img
                            src="/VEKIN Resource all Product/VEKIN 5/3D_One_Click.png"
                            alt="One Click"
                            className="h-auto w-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </a>
                </div>

            </div>
        </section>
    );
}