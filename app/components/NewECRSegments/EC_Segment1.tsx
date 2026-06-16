"use client"; 

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ECSegment1() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    const isThai =
        typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("th");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // ==========================================
    // 1. SEQUENCE ONE OPACITY & VISIBILITY TIMELINES
    // ==========================================
    const phone1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.52], [1, 1, 0]);
    const phone1Visibility = useTransform(scrollYProgress, (v) => v >= 0.52 ? "hidden" : "visible");

    // Smooth entry curves for Card Layers 1.1 and 1.2
    const imgLayers1Opacity = useTransform(scrollYProgress, [0.05, 0.18, 0.32, 0.42], [0, 1, 1, 0]);
    const imgLayers1Y = useTransform(scrollYProgress, [0.05, 0.18, 0.32, 0.42], [40, 0, 0, -20]);
    const imgLayers1Scale = useTransform(scrollYProgress, [0.05, 0.18], [0.92, 1]);
    const imgLayers1Visibility = useTransform(scrollYProgress, (v) => v >= 0.42 ? "hidden" : "visible");

    // Cinematic entry curves for Card Layer 2
    const imgLayer2Opacity = useTransform(scrollYProgress, [0.26, 0.36, 0.45, 0.52], [0, 1, 1, 0]);
    const imgLayer2Y = useTransform(scrollYProgress, [0.26, 0.36, 0.45, 0.52], [50, 0, 0, -30]);
    const imgLayer2Scale = useTransform(scrollYProgress, [0.26, 0.36], [0.90, 1]);
    const imgLayer2Visibility = useTransform(scrollYProgress, (v) => v >= 0.52 ? "hidden" : "visible");


    // ==========================================
    // 2. SEQUENCE TWO OPACITY & VISIBILITY TIMELINES
    // ==========================================
    const phone2Opacity = useTransform(scrollYProgress, [0.0, 0.52, 0.60, 0.96, 0.98], [0, 0, 1, 1, 0]);
    const phone2Scale = useTransform(scrollYProgress, [0.52, 0.60], [0.95, 1]);
    const phone2Visibility = useTransform(scrollYProgress, (v) => v < 0.52 || v >= 0.98 ? "hidden" : "visible");

    // Card Layer 3 spatial slide entry
    const seq2Anim3Opacity = useTransform(scrollYProgress, [0.0, 0.64, 0.74, 0.85, 0.88], [0, 0, 1, 1, 0]);
    const seq2Anim3Y = useTransform(scrollYProgress, [0.64, 0.74, 0.85, 0.88], [30, 0, 0, -20]);

    // Hotspot Layer 4 staggered cinematic bounce entry
    const seq2Anim4Opacity = useTransform(scrollYProgress, [0.0, 0.68, 0.78, 0.85, 0.88], [0, 0, 1, 1, 0]);
    const seq2Anim4Y = useTransform(scrollYProgress, [0.68, 0.78, 0.85, 0.88], [40, 0, 0, -20]);
    const seq2Anim4Scale = useTransform(scrollYProgress, [0.68, 0.78], [0.88, 1]);
    
    const seq2AnimationsVisibility = useTransform(scrollYProgress, (v) => v < 0.64 || v >= 0.88 ? "hidden" : "visible");


    // ==========================================
    // 3. START FOR FUTURE TEXT OVERLAY TIMELINE 
    // ==========================================
    const finalTextOverlayOpacity = useTransform(scrollYProgress, [0.0, 0.85, 0.88, 0.95, 0.98], [0, 0, 1, 1, 0]);
    const finalTextOverlayScale = useTransform(scrollYProgress, [0.85, 0.88], [0.75, 1]);
    const finalTextOverlayVisibility = useTransform(scrollYProgress, (v) => v < 0.85 || v >= 0.98 ? "hidden" : "visible");


    // ==========================================
    // 4. ABSOLUTE END TEXT SEQUENCE: "TRY NOW"
    // ==========================================
    const tryNowOpacity = useTransform(scrollYProgress, [0.0, 0.97, 0.99, 1.0], [0, 0, 1, 1]);
    const tryNowScale = useTransform(scrollYProgress, [0.97, 1.0], [0.8, 1]);
    const tryNowVisibility = useTransform(scrollYProgress, (v) => v < 0.97 ? "hidden" : "visible");


    // ==========================================
    // 5. MAIN SIDEBAR TEXT OPACITY TIMELINE
    // ==========================================
    const leftTextOpacity = useTransform(scrollYProgress, [0, 0.82, 0.88, 1.0], [1, 1, 0, 0]);
    const leftTextVisibility = useTransform(scrollYProgress, (v) => v >= 0.88 ? "hidden" : "visible");


    // ==========================================
    // 6. MAIN SIDEBAR TEXT SWAPPING TIMELINE
    // ==========================================
    const headingText = useTransform(
        scrollYProgress,
        [0, 0.25, 0.26, 0.62, 0.63, 1],
        isThai 
          ? [
                "ขับเคลื่อนอนาคตของโลจิสติกส์และพลังงานด้วยโซลูชันที่ยั่งยืน",
                "ขับเคลื่อนอนาคตของโลจิสติกส์และพลังงานด้วยโซลูชันที่ยั่งยืน",
                "การจัดเตรียมระบบ AI ที่แข็งแกร่ง",
                "การจัดเตรียมระบบ AI ที่แข็งแกร่ง",
                "โมเดล PUBLISH-SUBSCRIBE (PUB/SUB)",
                "โมเดล PUBLISH-SUBSCRIBE (PUB/SUB)"
            ]
          : [
                "DRIVING THE FUTURE OF LOGISTICS AND ENERGY WITH SUSTAINABLE SOLUTIONS",
                "DRIVING THE FUTURE OF LOGISTICS AND ENERGY WITH SUSTAINABLE SOLUTIONS",
                "STRONG ARRANGEMENT OF AI",
                "STRONG ARRANGEMENT OF AI",
                "THE PUBLISH-SUBSCRIBE (PUB/SUB) MODEL",
                "THE PUBLISH-SUBSCRIBE (PUB/SUB) MODEL"
            ]
    );

    const descText = useTransform(
        scrollYProgress,
        [0, 0.25, 0.26, 0.62, 0.63, 1],
        isThai
          ? [
                "บันทึกทุกธุรกรรมคาร์บอนเครดิตผ่านบันทึกที่ตรวจสอบด้วยบล็อกเชน เพื่อความโปร่งใสที่ตรวจสอบได้ และช่วยลดความยุ่งยากในรายงานด้านสิ่งแวดล้อมของคุณ",
                "บันทึกทุกธุรกรรมคาร์บอนเครดิตผ่านบันทึกที่ตรวจสอบด้วยบล็อกเชน เพื่อความโปร่งใสที่ตรวจสอบได้ และช่วยลดความยุ่งยากในรายงานด้านสิ่งแวดล้อมของคุณ",
                "เมื่อมีการรวบรวมข้อมูล > AI จะประมวลผลโดยใช้เกังก์ชันมาตรฐานที่สามารถปรับเปลี่ยนตามภูมิภาคและอุตสาหกรรมได้",
                "เมื่อมีการรวบรวมข้อมูล > AI จะประมวลผลโดยใช้เกณฑ์มาตรฐานที่สามารถปรับเปลี่ยนตามภูมิภาคและอุตสาหกรรมได้",
                "เมื่อมีการรวบรวมข้อมูล > AI จะประมวลผลโดยใช้เกณฑ์มาตรฐานที่สามารถปรับเปลี่ยนตามภูมิภาคและอุตสาหกรรมได้",
                "เมื่อมีการรวบรวมข้อมูล > AI จะประมวลผลโดยใช้เกณฑ์มาตรฐานที่สามารถปรับเปลี่ยนตามภูมิภาคและอุตสาหกรรมได้"
            ]
          : [
                "DOCUMENT EVERY CARBON CREDIT TRANSACTION THROUGH A BLOCKCHAIN-VERIFIED RECORD, ENSURING TRACEABILITY AND SIMPLIFYING YOUR ENVIRONMENTAL REPORTING OBLIGATIONS.",
                "DOCUMENT EVERY CARBON CREDIT TRANSACTION THROUGH A BLOCKCHAIN-VERIFIED RECORD, ENSURING TRACEABILITY AND SIMPLIFYING YOUR ENVIRONMENTAL REPORTING OBLIGATIONS.",
                "WHEN DATA IS COLLECTED > AI PROCESSES IT USING BENCHMARKS THAT CAN BE ADJUSTED BY REGION AND INDUSTRY",
                "WHEN DATA IS COLLECTED > AI PROCESSES IT USING BENCHMARKS THAT CAN BE ADJUSTED BY REGION AND INDUSTRY",
                "WHEN DATA IS COLLECTED > AI PROCESS IT USING BENCHMARK THAT CAN BE ADJSUTED BY REGION AND INDUSTRY",
                "WHEN DATA IS COLLECTED > AI PROCESS IT USING BENCHMARK THAT CAN BE ADJSUTED BY REGION AND INDUSTRY"
            ]
    );

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-neutral-50">
            <section
                aria-label="Carbon Receipt"
                className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden p-6 sm:p-8 md:p-12 lg:justify-center lg:p-16"
                style={{
                    backgroundImage: "url('/VEKIN Resource all Product/VEKIN 6/EC_BG.png')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Top Left Corner Text Layout */}
                <motion.div 
                    style={{ opacity: leftTextOpacity, visibility: leftTextVisibility }}
                    className="z-20 w-full max-w-sm space-y-2 sm:space-y-3 md:max-w-md lg:max-w-lg lg:absolute lg:top-12 lg:left-12 xl:top-16 xl:left-16"
                >
                    <motion.h1 className="text-base font-black tracking-wider sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase leading-tight bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                        {headingText}
                    </motion.h1>
                    <motion.p className="text-[10px] tracking-wide text-black sm:text-xs leading-relaxed uppercase font-semibold">
                        {descText}
                    </motion.p>
                </motion.div>

                {/* Shared Showcase Canvas Wrapper */}
                <div className="relative flex w-full h-full flex-1 items-center justify-center mt-4 lg:mt-0">
                    
                    {/* Bounded phone container */}
                    <div className="relative w-[210px] xs:w-[240px] sm:w-[280px] md:w-[340px] lg:w-[460px] xl:w-[520px] max-h-[52vh] xs:max-h-[58vh] sm:max-h-[65vh] lg:max-h-[80vh] aspect-[9/19.5] transition-all duration-300">
                        
                        {/* SEQUENCE ONE CONTAINER */}
                        <motion.div 
                            style={{ opacity: phone1Opacity, visibility: phone1Visibility }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src="/VEKIN Resource all Product/VEKIN 6/E_Carbon_Phone.png"
                                alt="Carbon Credit Phone Frame 1"
                                className="h-full w-full object-contain"
                                draggable={false}
                            />
                            {/* Card Layer 1.1: Organic Slide + Scale In */}
                            <motion.div style={{ opacity: imgLayers1Opacity, y: imgLayers1Y, scale: imgLayers1Scale, visibility: imgLayers1Visibility }} className="absolute inset-0 pointer-events-none transition-shadow">
                                <img src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_1.1.png" alt="Overlay 1.1" className="h-full w-full object-fill" draggable={false} />
                            </motion.div>
                            {/* Card Layer 1.2: Follows 1.1 but stacks cleanly */}
                            <motion.div style={{ opacity: imgLayers1Opacity, y: imgLayers1Y, scale: imgLayers1Scale, visibility: imgLayers1Visibility }} className="absolute inset-0 pointer-events-none">
                                <img src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_1.2.png" alt="Overlay 1.2" className="h-full w-full object-fill" draggable={false} />
                            </motion.div>
                            {/* Card Layer 2: Elevates upwards into place */}
                            <motion.div style={{ opacity: imgLayer2Opacity, y: imgLayer2Y, scale: imgLayer2Scale, visibility: imgLayer2Visibility }} className="absolute inset-0 pointer-events-none">
                                <img src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_2.png" alt="Overlay 2" className="h-full w-full object-fill" draggable={false} />
                            </motion.div>
                        </motion.div>


                        {/* SEQUENCE TWO CONTAINER */}
                        <motion.div 
                            style={{ opacity: phone2Opacity, scale: phone2Scale, visibility: phone2Visibility }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src="/VEKIN Resource all Product/VEKIN 6/E_Carbon_Phone2.png"
                                alt="Carbon Credit Phone Frame 2"
                                className="h-full w-full object-contain"
                                draggable={false}
                            />

                            {/* Card Layer 3: Staggered entry from beneath */}
                            <motion.div style={{ opacity: seq2Anim3Opacity, y: seq2Anim3Y, visibility: seq2AnimationsVisibility }} className="absolute inset-0 pointer-events-none">
                                <img src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_3.png" alt="Overlay 3" className="h-full w-full object-fill" draggable={false} />
                            </motion.div>

                            {/* Interactive Hotspot Layer 4: Bounces into visual frame dynamically */}
                            <motion.div 
                                style={{ opacity: seq2Anim4Opacity, y: seq2Anim4Y, scale: seq2Anim4Scale, visibility: seq2AnimationsVisibility }} 
                                className="absolute inset-0 z-20"
                            >
                                <motion.a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full h-full cursor-pointer focus:outline-none"
                                    whileHover={!isMobile ? { 
                                        scale: 1.04,
                                        filter: "drop-shadow(0 0 25px rgba(52, 211, 153, 0.5)) drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))"
                                    } : {}}
                                    whileTap={{
                                        scale: 0.96,
                                        filter: "brightness(0.9)"
                                    }}
                                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                                >
                                    <img 
                                        src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_4.png" 
                                        alt="Interactive Overlay Hotspot" 
                                        className="h-full w-full object-fill" 
                                        draggable={false} 
                                    />
                                </motion.a>
                            </motion.div>

                            {/* TEXT OVERLAY: "START FOR FUTURE" */}
                            <motion.div
                                style={{ 
                                    opacity: finalTextOverlayOpacity, 
                                    scale: finalTextOverlayScale,
                                    visibility: finalTextOverlayVisibility
                                }}
                                className="absolute inset-0 z-30 flex flex-col items-center justify-center px-2 text-center select-none whitespace-nowrap"
                                animate={{ 
                                    filter: ["drop-shadow(0 0 8px rgba(255,255,255,0.15))", "drop-shadow(0 0 20px rgba(255,255,255,0.4))", "drop-shadow(0 0 8px rgba(255,255,255,0.15))"] 
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <h2 className="text-black text-2xl font-black tracking-widest uppercase leading-none sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                    START FOR FUTURE
                                </h2>
                            </motion.div>
                        </motion.div>

                    </div>

                    {/* ABSOLUTE END SCREEN: "TRY NOW" BUTTON LAYER */}
                    <motion.div
                        style={{
                            opacity: tryNowOpacity,
                            scale: tryNowScale,
                            visibility: tryNowVisibility
                        }}
                        className="absolute inset-0 z-40 flex items-center justify-center pointer-events-auto"
                    >
                        <motion.button
                            onClick={() => window.open("https://www.google.com", "_blank")}
                            className="px-6 py-3 text-xl font-black tracking-widest text-white uppercase rounded-full select-none cursor-pointer focus:outline-none shadow-xl bg-gradient-to-r from-emerald-400 to-blue-500 sm:px-8 sm:py-4 sm:text-2xl md:text-3xl lg:text-4xl"
                            whileHover={!isMobile ? { 
                                scale: 1.06,
                                filter: "brightness(1.1) drop-shadow(0 0 25px rgba(52, 211, 153, 0.45))"
                            } : {}}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            TRY NOW
                        </motion.button>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}