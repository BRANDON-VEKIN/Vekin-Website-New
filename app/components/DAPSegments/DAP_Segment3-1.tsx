"use client";

import React, { useState } from "react";

type LocalizedTextProps = {
    as?: React.ElementType;
    th: string;
    en: string;
    className?: string;
};

function LocalizedText({
    as: Component = "div",
    th,
    en,
    className,
}: LocalizedTextProps) {
    const isThai =
        typeof navigator !== "undefined" &&
        navigator.language.toLowerCase().startsWith("th");

    return <Component className={className}>{isThai ? th : en}</Component>;
}

export default function DAPSegment3_1() {
    const [active, setActive] = useState(0);

    return (
<section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white px-8 md:px-16">
    
    {/* BACKGROUND IMAGE CONTAINER */}
    <div className="absolute inset-0 z-0">
        <img 
            src="/VEKIN Resource all Product/VEKIN 4/DAP_BG3.png" 
            alt="Background" 
            className="h-full w-full object-cover"
        />
    </div>
    
    {/* MAIN CONTENT LAYER */}
    <div className="relative z-10 w-full max-w-5xl flex flex-col gap-12">
    
        {/* HEADER & IMAGE DIV - UPDATED TO 2-COLUMN ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 border-b border-gray-100 pb-6">
            
            {/* COLUMN 1: CONCEPT TEXT */}
            <div>
                <LocalizedText 
                    as="h2"
                    en="Concept" 
                    th="แนวคิด" 
                    className="text-3xl md:text-6xl font-bold text-gray-900" 
                />
            </div>
            
            {/* COLUMN 2: NEW TEXT DIRECTION + IMAGE */}
<div className="flex items-center justify-start md:justify-end gap-4 md:gap-6 w-full md:w-auto">
    {/* ENLARGED WORKFLOW CONTAINER */}
    <div className="flex items-center justify-between gap-8 md:gap-12 text-xl md:text-3xl font-bold text-gray-800 px-8 py-6 md:px-12 md:py-8 rounded-2xl border border-gray-100 shadow-md bg-white w-full md:max-w-2xl">
        
        {/* LEFT COLUMN: AI ALLOCATE + SUBTEXT */}
        <div className="flex flex-col items-center text-center flex-1">
            <LocalizedText en="AI ALLOCATE DATA" th="การจัดสรรข้อมูลด้วย AI" />
            <LocalizedText 
                as="span" 
                en="*DATA SOURCE MANAGEMENT" 
                th="*การจัดการแหล่งที่มาข้อมูล" 
                className="text-xs md:text-base text-gray-400 font-medium tracking-wider mt-2"
            />
        </div>

        {/* LARGE CONNECTING ARROW */}
        <span className="text-[#258974] font-extrabold text-3xl md:text-5xl self-center mb-6">➔</span>

        {/* RIGHT COLUMN: ESG DATA HUB */}
        <div className="flex flex-col items-center text-center flex-1 self-start">
            <LocalizedText en="ESG DATA HUB" th="ศูนย์รวมข้อมูล ESG" />
        </div>
        
    </div>
</div>
        </div>
        
        {/* TIMELINE WRAPPER */}
        <div className="relative">
        
            {/* FULL WIDTH CONNECTING LINE */}
            <div className="absolute left-0 right-0 top-2 h-px bg-gray-300 -translate-y-1/2 z-0" />

            {/* 3-COLUMN GRID FOR POINTS & CONTENT */}
            <div className="relative z-10 grid grid-cols-3 w-full gap-4">
                
                {/* PHASE 1 */}
                <div className="flex flex-col items-center text-center px-2">
                    {/* Dot */}
                    <div className="h-4 w-4 rounded-full bg-[#258974] border-2 border-white shadow mb-6" />
                    {/* Content */}
                    <LocalizedText 
                        as="h3" 
                        en="System" 
                        th="ระบบ" 
                        className="font-semibold text-gray-800 text-2xl md:text-4xl mb-3" 
                    />
                    <ul className="text-sm text-gray-500 space-y-2 text-left list-disc list-inside">
                        <li><LocalizedText as="span" en="EPR System" th="ระบบ EPR" /></li>
                        <li><LocalizedText as="span" en="API / IoT Integration" th="การเชื่อมต่อ API / IoT" /></li>
                        <li><LocalizedText as="span" en="Building Management System" th="ระบบจัดการอาคาร" /></li>
                        <li><LocalizedText as="span" en="Frameworks & Standards" th="กรอบการทำงานและมาตรฐาน" /></li>
                        <li><LocalizedText as="span" en="Emission Factors Databases" th="ฐานข้อมูลค่าการปล่อยก๊าซ" /></li>
                    </ul>
                </div>

                {/* PHASE 2 */}
                <div className="flex flex-col items-center text-center px-2">
                    {/* Dot */}
                    <div className="h-4 w-4 rounded-full bg-[#258974] border-2 border-white shadow mb-6" />
                    {/* Content */}
                    <LocalizedText 
                        as="h3" 
                        en="ESG Data Hub" 
                        th="ศูนย์รวมข้อมูล ESG" 
                        className="font-semibold text-gray-800 text-2xl md:text-4xl mb-3" 
                    />
                    <ul className="text-sm text-gray-500 space-y-2 text-left list-disc list-inside">
                        <li><LocalizedText as="span" en="Primary Activity Data" th="ข้อมูลกิจกรรมหลัก" /></li>
                        <li><LocalizedText as="span" en="Business Data" th="ข้อมูลธุรกิจ" /></li>
                        <li><LocalizedText as="span" en="Energy Data" th="ข้อมูลพลังงาน" /></li>
                        <li><LocalizedText as="span" en="Activity Composition Data" th="ข้อมูลองค์ประกอบกิจกรรม" /></li>
                        <li><LocalizedText as="span" en="Carbon Emission Intensity Data" th="ข้อมูลความเข้มข้นการปล่อยคาร์บอน" /></li>
                    </ul>
                </div>

                {/* PHASE 3 */}
                <div className="flex flex-col items-center text-center px-2">
                    {/* Dot */}
                    <div className="h-4 w-4 rounded-full bg-[#258974] border-2 border-white shadow mb-6" />
                    {/* Content */}
                    <LocalizedText 
                        as="h3" 
                        en="Outcome" 
                        th="ผลลัพธ์ที่ได้" 
                        className="font-semibold text-gray-800 text-2xl md:text-4xl mb-3" 
                    />
                    <ul className="text-sm text-gray-500 space-y-2 text-left list-disc list-inside">
                        <li><LocalizedText as="span" en="On Demand Visualization" th="การแสดงผลข้อมูลตามสั่ง" /></li>
                        <li><LocalizedText as="span" en="Seamless & Fully Automated" th="ระบบอัตโนมัติที่ไร้รอยต่อ" /></li>
                        <li><LocalizedText as="span" en="Carbon Receipt" th="ใบเสร็จคาร์บอน" /></li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
</section>
    );
}