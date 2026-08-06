"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSiteLanguage } from "../siteLanguage";

const sections = [
    {
        titleEn: "Material sourcing",
        titleTh: "การจัดหาวัตถุดิบ",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide1.png",
        descriptionEn:
            "Raw materials are responsibly sourced from verified suppliers, ensuring transparency, sustainability, and compliance with environmental standards throughout the procurement process.",
        descriptionTh:
            "วัตถุดิบได้รับการจัดหาอย่างมีความรับผิดชอบจากซัพพลายเออร์ที่ผ่านการตรวจสอบ เพื่อความโปร่งใส ความยั่งยืน และการปฏิบัติตามมาตรฐานสิ่งแวดล้อมตลอดกระบวนการจัดซื้อ",
    },
    {
        titleEn: "Logistics",
        titleTh: "โลจิสติกส์",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide2.png",
        descriptionEn:
            "Transportation activities are optimized to reduce fuel consumption and emissions while maintaining efficient movement of goods across the supply chain.",
        descriptionTh:
            "กิจกรรมการขนส่งได้รับการปรับให้เหมาะสมเพื่อลดการใช้เชื้อเพลิงและการปล่อยมลพิษ พร้อมรักษาการเคลื่อนย้ายสินค้าอย่างมีประสิทธิภาพทั่วทั้งซัพพลายเชน",
    },
    {
        titleEn: "Processing & manufacturing",
        titleTh: "การแปรรูปและการผลิต",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide3.png",
        descriptionEn:
            "Production operations utilize energy-efficient processes and resource management practices to minimize environmental impact and improve operational performance.",
        descriptionTh:
            "กระบวนการผลิตใช้กระบวนการประหยัดพลังงานและแนวปฏิบัติการจัดการทรัพยากร เพื่อลดผลกระทบต่อสิ่งแวดล้อมและยกระดับสมรรถนะการดำเนินงาน",
    },
    {
        titleEn: "Distribution",
        titleTh: "การกระจายสินค้า",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide4.png",
        descriptionEn:
            "Products are distributed through strategically planned networks that reduce delivery distances, lower carbon emissions, and improve supply chain efficiency.",
        descriptionTh:
            "สินค้าถูกกระจายผ่านเครือข่ายที่วางแผนเชิงกลยุทธ์ ช่วยลดระยะทางการจัดส่ง ลดการปล่อยคาร์บอน และเพิ่มประสิทธิภาพของซัพพลายเชน",
    },
    {
        titleEn: "Usage",
        titleTh: "การใช้งาน",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide5.png",
        descriptionEn:
            "During the product lifecycle, energy consumption and operational impacts are monitored to support sustainable use and informed decision-making.",
        descriptionTh:
            "ตลอดวงจรชีวิตผลิตภัณฑ์ มีการติดตามการใช้พลังงานและผลกระทบจากการดำเนินงาน เพื่อสนับสนุนการใช้งานอย่างยั่งยืนและการตัดสินใจบนพื้นฐานข้อมูล",
    },
    {
        titleEn: "Waste treatment",
        titleTh: "การจัดการของเสีย",
        image: "/VEKIN Resource all Product/VEKIN 2/Carbon_Slide6.png",
        descriptionEn:
            "End-of-life materials are recovered, recycled, or disposed of through environmentally responsible treatment processes.",
        descriptionTh:
            "วัสดุที่หมดอายุการใช้งานถูกนำกลับมาใช้ รีไซเคิล หรือกำจัดผ่านกระบวนการบำบัดที่รับผิดชอบต่อสิ่งแวดล้อม",
    },
];

export default function CarbonSegment3() {
    const [selected, setSelected] = useState(0);
    const { language } = useSiteLanguage();
    const isThai = language === "th";
    const active = sections[selected];

    return (
        <section
            id="methodology"
            aria-label="Carbon Lifecycle"
            className="relative min-h-screen w-full overflow-hidden bg-black"
        >
            {/* Crossfading backgrounds — all slides stay mounted, only opacity animates */}
            {sections.map((section, index) => (
                <motion.div
                    key={section.image}
                    initial={false}
                    animate={{
                        opacity: selected === index ? 1 : 0,
                        scale: selected === index ? 1 : 1.04,
                    }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("${section.image}")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.6),rgba(0,0,0,0.26)_55%,rgba(0,0,0,0.5))]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/65 to-transparent" />

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-16 md:px-12">
                {/* Section header */}
                <div className="pt-8">
                    <p className="text-sm font-semibold tracking-wide text-[#7fe3ab]">
                        {isThai ? "วงจรชีวิตคาร์บอน" : "Carbon lifecycle"}
                    </p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-[-0.015em] text-white md:text-5xl">
                        {isThai ? "ระเบียบวิธีของเรา" : "Our methodology."}
                    </h1>
                </div>

                {/* Content area */}
                <div className="mt-14 flex flex-1 flex-col items-start justify-between gap-12 md:flex-row md:items-center">
                    {/* Content */}
                    <div className="max-w-xl">
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-5"
                        >
                            <p className="text-xs font-semibold tracking-[0.18em] text-white/50">
                                {`${String(selected + 1).padStart(2, "0")} — ${String(sections.length).padStart(2, "0")}`}
                            </p>
                            <h2 className="text-3xl font-semibold tracking-[-0.015em] text-white md:text-5xl">
                                {isThai ? active.titleTh : active.titleEn}
                            </h2>
                            <p className="text-base font-medium leading-relaxed text-white/70 md:text-lg">
                                {isThai ? active.descriptionTh : active.descriptionEn}
                            </p>
                        </motion.div>
                    </div>

                    {/* Menu */}
                    <div className="flex w-full flex-row gap-5 overflow-x-auto pb-2 md:w-auto md:flex-col md:gap-4 md:overflow-visible md:pb-0 md:text-right">
                        {sections.map((section, index) => (
                            <button
                                key={section.titleEn}
                                onClick={() => setSelected(index)}
                                className={`group flex shrink-0 items-center gap-3 whitespace-nowrap transition-all duration-300 md:justify-end ${
                                    selected === index
                                        ? "text-white"
                                        : "text-white/45 hover:text-white/80"
                                }`}
                            >
                                <span
                                    className={`hidden h-px transition-all duration-300 md:block ${
                                        selected === index
                                            ? "w-9 bg-white"
                                            : "w-3 bg-white/25 group-hover:w-6 group-hover:bg-white/50"
                                    }`}
                                />
                                <span
                                    className={`text-[15px] font-medium tracking-[-0.01em] transition-all duration-300 md:text-base ${
                                        selected === index ? "font-semibold" : ""
                                    }`}
                                >
                                    {isThai ? section.titleTh : section.titleEn}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
