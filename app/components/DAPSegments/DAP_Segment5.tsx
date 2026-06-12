"use client";

import React, { useState } from "react";

type LocalizedTextProps = {
    as?: React.ElementType;
    th: string;
    en: string;
    className?: string;
};

function LocalizedText({ as: Component = "div", th, en, className }: LocalizedTextProps) {
    const [isThai, setIsThai] = React.useState(false);
    React.useEffect(() => {
        if (typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("th")) {
            setIsThai(true);
        }
    }, []);

    return <Component className={className}>{isThai ? th : en}</Component>;
}

type SlideId = "event" | "dashboard" | "report" | "receipts";

interface MenuOption {
    id: SlideId;
    th: string;
    en: string;
}

export default function DAPSegment2() {
    const [currentSlide, setCurrentSlide] = useState<SlideId>("event");

    const menuOptions: MenuOption[] = [
        { id: "event", th: "กิจกรรม", en: "Event" },
        { id: "dashboard", th: "แดชบอร์ด", en: "Dashboard" },
        { id: "report", th: "รายงาน", en: "Report" },
        { id: "receipts", th: "ใบเสร็จรับเงิน", en: "Receipts" },
    ];

    return (
        <section 
            className="min-h-screen md:h-[180vh] relative w-full font-sans overflow-hidden flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 bg-cover bg-center bg-no-repeat bg-slate-900" 
            style={{ backgroundImage: "url('/VEKIN Resource all Product/VEKIN 4/DAP_BG5.png')" }}
        > 
            
            {/* 1. EVENT VIEW */}
            <div 
                className={`w-full max-w-7xl mx-auto transition-all duration-500 transform ease-in-out flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-between ${
                    currentSlide === "event" ? "opacity-100 translate-x-0 relative z-10" : "opacity-0 translate-x-10 absolute pointer-events-none"
                }`}
            >
                {/* LEFT COLUMN: Texts and Navigation */}
                <div className="flex-1 flex flex-col justify-center w-full max-w-2xl text-center lg:text-left mt-16 lg:mt-0">
                    <div className="inline-block bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm px-4 py-1.5 rounded-full font-bold mb-4 md:mb-6 mx-auto lg:mx-0 w-fit backdrop-blur-sm">
                        Workspace
                    </div>
                    <LocalizedText 
                        as="h1" 
                        th="กิจกรรมประยุกต์" 
                        en="Events" 
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-[#808080] mb-4 md:mb-8 tracking-tight drop-shadow-md"
                    />
                    <LocalizedText 
                        as="p" 
                        th="สำรวจและจัดการกิจกรรมองค์กรทั้งหมดผ่านระบบแสดงผลจำลองนี้ ข้อมูลจะซิงค์กับโมดูลโทรศัพท์มือถือโดยอัตโนมัติเพื่อมอบประสบการณ์ใช้งานที่ราบรื่นที่สุดให้กับผู้ใช้ของคุณ" 
                        en="Explore and manage all upcoming corporate happenings here. This workspace synchronizes dynamically with mobile device components to deliver unified user experiences across your entire platform ecosystem." 
                        className="text-[#808080] text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-10 drop-shadow"
                    />
                    
                    {/* HORIZONTAL MENU ON MOBILE / VERTICAL ON DESKTOP */}
                    <div className="flex flex-row flex-wrap justify-center lg:justify-start lg:flex-col gap-3 sm:gap-4 pt-2">
                        {menuOptions.map((opt) => (
                            <button 
                                key={opt.id}
                                disabled={currentSlide === opt.id}
                                onClick={() => setCurrentSlide(opt.id)}
                                className={`group flex items-center text-left text-lg sm:text-xl md:text-2xl font-bold transition-all duration-150 ${
                                    currentSlide === opt.id 
                                        ? "text-emerald-400 cursor-default scale-105 origin-left" 
                                        : "text-slate-300 hover:text-emerald-400 lg:hover:translate-x-1"
                                }`}
                            >
                                <LocalizedText th={opt.th} en={opt.en} />
                            </button>
                        ))}

                        {/* SEE MORE LINK BUTTON */}
                        <a 
                            href="/dap_more" 
                            className="text-lg sm:text-xl md:text-2xl font-bold text-slate-400 hover:text-emerald-300 transition-all duration-150 flex items-center lg:hover:translate-x-1 underline decoration-dotted underline-offset-4"
                        >
                            <LocalizedText th="ดูเพิ่มเติม →" en="See More →" />
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN: Phone Mockup Display */}
                <div className="flex-1 flex items-center justify-center w-full relative mt-6 lg:mt-0">
                    <div className="relative w-full max-w-[540px] h-[280px] md:w-[400px] md:h-[800px] bg-slate-950 rounded-[32px] md:rounded-[54px] p-2 md:p-3.5 shadow-2xl border-4 border-slate-800/80 ring-1 ring-slate-900/10 flex flex-col overflow-hidden">
                        <div className="absolute top-0 md:top-0 left-1/2 transform -translate-x-1/2 h-4 w-24 bg-slate-950 rounded-b-xl z-30 hidden sm:flex items-center justify-center">
                            <div className="w-8 h-1 bg-slate-800 rounded-full mb-0.5" />
                        </div>
                        
                        <div className="w-full h-full bg-slate-900 rounded-[24px] md:rounded-[42px] overflow-hidden relative flex flex-col pt-4 md:pt-6">
                            <div className="px-4 pt-1 pb-2 border-b border-slate-800/60 bg-slate-900/90 backdrop-blur z-20 flex justify-between items-center">
                                <span className="text-[10px] font-bold text-white font-mono">09:41</span>
                                <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Live Feed</span>
                            </div>
                            
                            <div className="flex-1 overflow-x-auto md:overflow-x-hidden overflow-y-hidden md:overflow-y-auto p-4 flex flex-row md:flex-col gap-4 md:space-y-[-24px] md:gap-0 hover:space-y-2 transition-all duration-300 pb-6 md:pb-12 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:none">
                                {[
                                    { tag: "Conference", title: "True Digital Park", src: "/VEKIN Resource all Product/VEKIN 4/Event1.png" },
                                    { tag: "Workshop", title: "One Bangkok", src: "/VEKIN Resource all Product/VEKIN 4/Event2.png" },
                                    { tag: "Networking", title: "Siam Paragon", src: "/VEKIN Resource all Product/VEKIN 4/Event3.png" }
                                ].map((card, i) => (
                                    <div key={i} className="w-48 sm:w-60 md:w-full h-32 md:h-44 shrink-0 rounded-xl md:rounded-2xl shadow-lg border border-white/10 relative overflow-hidden group transform hover:-translate-y-1 md:hover:-translate-y-2 transition duration-200 bg-slate-800 origin-bottom">
                                        <img src={card.src} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                                        <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                                            <span className="text-[8px] font-bold tracking-wider uppercase text-emerald-400">{card.tag}</span>
                                            <h4 className="text-xs md:text-sm font-bold truncate mt-0.5">{card.title}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 md:w-28 h-1 bg-white/40 rounded-full z-20" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. DASHBOARD VIEW */}
            <div 
                className={`w-full max-w-7xl mx-auto transition-all duration-500 transform ease-in-out flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-between ${
                    currentSlide === "dashboard" ? "opacity-100 translate-x-0 relative z-10" : "opacity-0 translate-x-10 absolute pointer-events-none"
                }`}
            >
                {/* LEFT COLUMN */}
                <div className="flex-1 flex flex-col justify-center w-full max-w-2xl text-center lg:text-left mt-16 lg:mt-0">
                    <div className="inline-block bg-emerald-500/20 text-emerald-300 text-sm px-4 py-1.5 rounded-full font-bold mb-4 md:mb-6 mx-auto lg:mx-0 w-fit backdrop-blur-sm">
                        Workspace
                    </div>
                    <LocalizedText 
                        as="h1" 
                        th="แดชบอร์ดข้อมูล" 
                        en="Dashboard" 
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-[#808080] mb-4 md:mb-8 tracking-tight drop-shadow-md"
                    />
                    <LocalizedText 
                        as="p" 
                        th="ติดตามและวิเคราะห์ดัชนีชี้วัดประสิทธิภาพระบบแบบเรียลไทม์ ตรวจสอบสถิติเชิงลึกผ่านการแสดงผลกราฟเพื่อประกอบการตัดสินใจทางธุรกิจได้อย่างแม่นยำ" 
                        en="Monitor systemic metrics and performance tracking trends in real time. Access immediate visualization tools designed to transform operational data points into clear actionable strategic insights." 
                        className="text-[#808080] text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-10 drop-shadow"
                    />
                    <div className="flex flex-row flex-wrap justify-center lg:justify-start lg:flex-col gap-3 sm:gap-4 pt-2">
                        {menuOptions.map((opt) => (
                            <button 
                                key={opt.id}
                                disabled={currentSlide === opt.id}
                                onClick={() => setCurrentSlide(opt.id)}
                                className={`group flex items-center text-left text-lg sm:text-xl md:text-2xl font-bold transition-all duration-150 ${
                                    currentSlide === opt.id 
                                        ? "text-emerald-400 cursor-default scale-105 origin-left" 
                                        : "text-slate-300 hover:text-emerald-400 lg:hover:translate-x-1"
                                }`}
                            >
                                <LocalizedText th={opt.th} en={opt.en} />
                            </button>
                        ))}

                        {/* SEE MORE LINK BUTTON */}
                        <a 
                            href="/your-destination-page" 
                            className="text-lg sm:text-xl md:text-2xl font-bold text-slate-400 hover:text-emerald-300 transition-all duration-150 flex items-center lg:hover:translate-x-1 underline decoration-dotted underline-offset-4"
                        >
                            <LocalizedText th="ดูเพิ่มเติม →" en="See More →" />
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex-1 flex items-center justify-center w-full relative mt-6 lg:mt-0">
                    <div className="relative w-full max-w-[540px] h-[280px] md:w-[400px] md:h-[800px] bg-slate-950 rounded-[32px] md:rounded-[54px] p-2 md:p-3.5 shadow-2xl border-4 border-slate-800/80 ring-1 ring-slate-900/10 flex flex-col overflow-hidden">
                        <div className="w-full h-full bg-slate-900 rounded-[24px] md:rounded-[42px] p-4 md:p-8 flex flex-row md:flex-col justify-center items-center gap-4 text-center">
                            <span className="text-3xl md:text-5xl">📊</span>
                            <div className="text-left md:text-center">
                                <p className="text-sm md:text-lg font-bold text-white">Analytics Rendering Engine</p>
                                <p className="text-xs md:text-sm text-slate-400 mt-1 md:mt-2 max-w-[200px]">Real-time chart calculations display workspace.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. REPORT VIEW */}
            <div 
                className={`w-full max-w-7xl mx-auto transition-all duration-500 transform ease-in-out flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-between ${
                    currentSlide === "report" ? "opacity-100 translate-x-0 relative z-10" : "opacity-0 translate-x-10 absolute pointer-events-none"
                }`}
            >
                {/* LEFT COLUMN */}
                <div className="flex-1 flex flex-col justify-center w-full max-w-2xl text-center lg:text-left mt-16 lg:mt-0">
                    <div className="inline-block bg-emerald-500/20 text-emerald-300 text-sm px-4 py-1.5 rounded-full font-bold mb-4 md:mb-6 mx-auto lg:mx-0 w-fit backdrop-blur-sm">
                        Workspace
                    </div>
                    <LocalizedText 
                        as="h1" 
                        th="รายงานสรุปผล" 
                        en="Reports" 
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-[#808080] mb-4 md:mb-8 tracking-tight drop-shadow-md"
                    />
                    <LocalizedText 
                        as="p" 
                        th="รวบรวม บันทึก และส่งออกสรุปรายงานประจำเดือนสำหรับผู้บริหารได้อย่างเป็นระบบ ตรวจสอบประวัติข้อมูลย้อนหลังแยกตามหมวดหมู่อย่างสมบูรณ์แบบ" 
                        en="Compile, review, and export monthly business performance breakdowns directly to executive spreadsheets. Maintain absolute historical compliance records inside organized systematic archives." 
                        className="text-[#808080] text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-10 drop-shadow"
                    />
                    <div className="flex flex-row flex-wrap justify-center lg:justify-start lg:flex-col gap-3 sm:gap-4 pt-2">
                        {menuOptions.map((opt) => (
                            <button 
                                key={opt.id}
                                disabled={currentSlide === opt.id}
                                onClick={() => setCurrentSlide(opt.id)}
                                className={`group flex items-center text-left text-lg sm:text-xl md:text-2xl font-bold transition-all duration-150 ${
                                    currentSlide === opt.id 
                                        ? "text-emerald-400 cursor-default scale-105 origin-left" 
                                        : "text-slate-300 hover:text-emerald-400 lg:hover:translate-x-1"
                                }`}
                            >
                                <LocalizedText th={opt.th} en={opt.en} />
                            </button>
                        ))}

                        {/* SEE MORE LINK BUTTON */}
                        <a 
                            href="/your-destination-page" 
                            className="text-lg sm:text-xl md:text-2xl font-bold text-slate-400 hover:text-emerald-300 transition-all duration-150 flex items-center lg:hover:translate-x-1 underline decoration-dotted underline-offset-4"
                        >
                            <LocalizedText th="ดูเพิ่มเติม →" en="See More →" />
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex-1 flex items-center justify-center w-full relative mt-6 lg:mt-0">
                    <div className="relative w-full max-w-[540px] h-[280px] md:w-[400px] md:h-[800px] bg-slate-950 rounded-[32px] md:rounded-[54px] p-2 md:p-3.5 shadow-2xl border-4 border-slate-800/80 ring-1 ring-slate-900/10 flex flex-col overflow-hidden">
                        <div className="w-full h-full bg-slate-900 rounded-[24px] md:rounded-[42px] p-4 md:p-8 flex flex-row md:flex-col justify-center items-center gap-4 text-center">
                            <span className="text-3xl md:text-5xl">📋</span>
                            <div className="text-left md:text-center">
                                <p className="text-sm md:text-lg font-bold text-white">Document Compilation Grid</p>
                                <p className="text-xs md:text-sm text-slate-400 mt-1 md:mt-2 max-w-[200px]">Tabular exports and compiled layout summaries ledger.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. RECEIPTS VIEW */}
            <div 
                className={`w-full max-w-7xl mx-auto transition-all duration-500 transform ease-in-out flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-between ${
                    currentSlide === "receipts" ? "opacity-100 translate-x-0 relative z-10" : "opacity-0 translate-x-10 absolute pointer-events-none"
                }`}
            >
                {/* LEFT COLUMN */}
                <div className="flex-1 flex flex-col justify-center w-full max-w-2xl text-center lg:text-left mt-16 lg:mt-0">
                    <div className="inline-block bg-emerald-500/20 text-emerald-300 text-sm px-4 py-1.5 rounded-full font-bold mb-4 md:mb-6 mx-auto lg:mx-0 w-fit backdrop-blur-sm">
                        Workspace
                    </div>
                    <LocalizedText 
                        as="h1" 
                        th="ใบเสร็จรับเงิน" 
                        en="Receipts" 
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-[#808080] mb-4 md:mb-8 tracking-tight drop-shadow-md"
                    />
                    <LocalizedText 
                        as="p" 
                        th="ตรวจสอบและบริหารจัดการเอกสารทางการเงิน ใบเสร็จรับเงิน และบันทึกบัญชีธุรกรรมทั้งหมดอย่างปลอดภัยผ่านระบบการจัดเก็บข้อมูลที่มีประสิทธิภาพขั้นสูง" 
                        en="Audit and verify transactional statement items, invoice distributions, and billing files instantly. Leverage secure relational architectures built for modern rapid financial cross-examinations." 
                        className="text-[#808080] text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-10 drop-shadow"
                    />
                    <div className="flex flex-row flex-wrap justify-center lg:justify-start lg:flex-col gap-3 sm:gap-4 pt-2">
                        {menuOptions.map((opt) => (
                            <button 
                                key={opt.id}
                                disabled={currentSlide === opt.id}
                                onClick={() => setCurrentSlide(opt.id)}
                                className={`group flex items-center text-left text-lg sm:text-xl md:text-2xl font-bold transition-all duration-150 ${
                                    currentSlide === opt.id 
                                        ? "text-emerald-400 cursor-default scale-105 origin-left" 
                                        : "text-slate-300 hover:text-emerald-400 lg:hover:translate-x-1"
                                }`}
                            >
                                <LocalizedText th={opt.th} en={opt.en} />
                            </button>
                        ))}

                        {/* SEE MORE LINK BUTTON */}
                        <a 
                            href="/dap_more" 
                            className="text-lg sm:text-xl md:text-2xl font-bold text-slate-400 hover:text-emerald-300 transition-all duration-150 flex items-center lg:hover:translate-x-1 underline decoration-dotted underline-offset-4"
                        >
                            <LocalizedText th="ดูเพิ่มเติม →" en="See More →" />
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex-1 flex items-center justify-center w-full relative mt-6 lg:mt-0">
                    <div className="relative w-full max-w-[540px] h-[280px] md:w-[400px] md:h-[800px] bg-slate-950 rounded-[32px] md:rounded-[54px] p-2 md:p-3.5 shadow-2xl border-4 border-slate-800/80 ring-1 ring-slate-900/10 flex flex-col overflow-hidden">
                        <div className="w-full h-full bg-slate-900 rounded-[24px] md:rounded-[42px] p-4 md:p-8 flex flex-row md:flex-col justify-center items-center gap-4 text-center">
                            <span className="text-3xl md:text-5xl">🧾</span>
                            <div className="text-left md:text-center">
                                <p className="text-sm md:text-lg font-bold text-white">Billing Repository Ledger</p>
                                <p className="text-xs md:text-sm text-slate-400 mt-1 md:mt-2 max-w-[200px]">Secure structural overview for transaction tracking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}