"use client";

import React from "react";
import Link from "next/link";
// 1. Import your global language hook
import { useSiteLanguage } from "../siteLanguage";

// 2. Define translations dictionary
const translations = {
    en: {
        title: "WHEN YOUR BRAND STEPS INTO THE SPOTLIGHT.",
        subtitle: "Start to show. Make your impact visible.",
        desc: "From pop-up booths to national events, carbon matters. Immersive Sustainability lets you track emissions before, during, and after every event — making your brand's actions measurable, visible, and unforgettable."
    },
    th: {
        title: "เมื่อแบรนด์ของคุณก้าวเข้าสู่สปอตไลท์",
        subtitle: "เริ่มแสดงจุดยืน และทำให้ความตั้งใจของคุณชัดเจน",
        desc: "ตั้งแต่บูธป๊อปอัพไปจนถึงงานอีเวนต์ระดับประเทศ เรื่องคาร์บอนเป็นสิ่งสำคัญ Immersive Sustainability ช่วยให้คุณติดตามการปล่อยมลพิษได้ทั้งก่อน ระหว่าง และหลังการจัดงาน เพื่อทำให้ทุกการดำเนินการของแบรนด์สามารถวัดผลได้ มองเห็นได้ชัดเจน และน่าจดจำ"
    }
} as const;

export default function Vekin_Home_Segment2() {
    // 3. Destructure language and map to the active translations
    const { language } = useSiteLanguage();
    const t = translations[language];

    return (
        <section className="w-full">
            <div className="relative w-full">

                {/* BACKGROUND */}
                <img
                    src="/VEKIN Resource all Product/VEKIN 5/Home_BG2.png"
                    alt="DAP background"
                    className="block h-auto w-full object-contain"
                />

                {/* IMMERSIVE SUSTAINABILITY BUTTON */}
                <div
                    className="
                        absolute
                        left-1/3
                        top-[10%]
                        z-40
                        w-[45%]
                        -max-w-[600px]
                        -translate-x-1/2

                        sm:w-[55%]

                        md:left-[35%]
                        md:w-[45%]

                        lg:left-[30%]
                        lg:w-[40%]
                    "
                >
                    <Link
                        href="/"
                        className="block cursor-pointer"
                    >
                        <img
                            src="/VEKIN Resource all Product/VEKIN 5/3D_Immersive_Sustainability.png"
                            alt="Immersive Sustainability"
                            className="h-auto w-full object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                </div>

                {/* RESPONSIVE TEXT BOX */}
				<div className="absolute left-1/2 top-[65%] z-40 w-[90%] max-w-[700px] -translate-x-1/2 rounded-xl bg-white/70 p-3 text-[#6D6E71] backdrop-blur-md sm:w-[85%] sm:p-4 md:left-[35%] md:w-[55%] lg:left-[30%] lg:w-[46%] lg:p-6">
					
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

                {/* REMOVED FLOATING TOGGLE BUTTONS - Handled globally by header */}

            </div>
        </section>
    );
}