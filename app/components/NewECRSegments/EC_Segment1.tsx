"use client"; 

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSiteLanguage } from "../siteLanguage";

export default function ECSegment1() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const { language } = useSiteLanguage();

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    const isThai = language === "th";

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // ==========================================
    // 1. SEQUENCE ONE OPACITY & VISIBILITY TIMELINES
    // ==========================================
    const phone1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.52], [1, 1, 0]);
    const phone1Visibility = useTransform(scrollYProgress, (v) => v >= 0.52 ? "hidden" : "visible");

    const imgLayers1Opacity = useTransform(scrollYProgress, [0.05, 0.18, 0.32, 0.42], [0, 1, 1, 0]);
    const imgLayers1Y = useTransform(scrollYProgress, [0.05, 0.18, 0.32, 0.42], [40, 0, 0, -20]);
    const imgLayers1Scale = useTransform(scrollYProgress, [0.05, 0.18], [0.92, 1]);
    const imgLayers1Visibility = useTransform(scrollYProgress, (v) => v >= 0.42 ? "hidden" : "visible");

    const imgLayer2Opacity = useTransform(scrollYProgress, [0.26, 0.36, 0.45, 0.52], [0, 1, 1, 0]);
    const imgLayer2Y = useTransform(scrollYProgress, [0.26, 0.36, 0.45, 0.52], [50, 0, 0, -30]);
    const imgLayer2Scale = useTransform(scrollYProgress, [0.26, 0.36], [0.90, 1]);
    const imgLayer2Visibility = useTransform(scrollYProgress, (v) => v >= 0.52 ? "hidden" : "visible");


    // ==========================================
    // 2. SEQUENCE TWO MAIN CONTAINER
    // ==========================================
    const phone2Opacity = useTransform(scrollYProgress, [0.0, 0.52, 0.60, 0.96, 0.98], [0, 0, 1, 1, 0]);
    const phone2Scale = useTransform(scrollYProgress, [0.52, 0.60], [0.95, 1]);
    const phone2Visibility = useTransform(scrollYProgress, (v) => v < 0.52 || v >= 0.98 ? "hidden" : "visible");


    // ==========================================
    // 3. WIDER FLIGHT TIMELINES (LAYERS 3, 4, 5, 6)
    // ==========================================
    const seq2AnimationsVisibility = useTransform(scrollYProgress, (v) => v < 0.58 || v >= 0.92 ? "hidden" : "visible");

    // --- LAYER 3 (Top Left - Pushed further left) ---
    const layer3Opacity = useTransform(scrollYProgress, [0.0, 0.58, 0.66, 0.86, 0.90], [0, 0, 1, 1, 0]);
    const layer3X = useTransform(scrollYProgress, [0.58, 0.66, 0.86, 0.90], [-80, -20, -20, -40]);
    const layer3Y = useTransform(scrollYProgress, [0.58, 0.66, 0.86, 0.90], [-40, 0, 0, -20]);
    const layer3Scale = useTransform(scrollYProgress, [0.58, 0.66], [0.85, 1]);

    // --- LAYER 4 (Top Right - Pushed further right) ---
    const layer4Opacity = useTransform(scrollYProgress, [0.0, 0.62, 0.70, 0.86, 0.90], [0, 0, 1, 1, 0]);
    const layer4X = useTransform(scrollYProgress, [0.62, 0.70, 0.86, 0.90], [80, 20, 20, 40]);
    const layer4Y = useTransform(scrollYProgress, [0.62, 0.70, 0.86, 0.90], [-40, 0, 0, -20]);
    const layer4Scale = useTransform(scrollYProgress, [0.62, 0.70], [0.85, 1]);

    // --- LAYER 5 (Bottom Left - Pushed further left) ---
    const layer5Opacity = useTransform(scrollYProgress, [0.0, 0.66, 0.74, 0.86, 0.90], [0, 0, 1, 1, 0]);
    const layer5X = useTransform(scrollYProgress, [0.66, 0.74, 0.86, 0.90], [-80, -20, -20, -40]);
    const layer5Y = useTransform(scrollYProgress, [0.66, 0.74, 0.86, 0.90], [40, 0, 0, 20]);
    const layer5Scale = useTransform(scrollYProgress, [0.66, 0.74], [0.85, 1]);

    // --- LAYER 6 (Bottom Right - Pushed further right) ---
    const layer6Opacity = useTransform(scrollYProgress, [0.0, 0.70, 0.78, 0.86, 0.90], [0, 0, 1, 1, 0]);
    const layer6X = useTransform(scrollYProgress, [0.70, 0.78, 0.86, 0.90], [80, 20, 20, 40]);
    const layer6Y = useTransform(scrollYProgress, [0.70, 0.78, 0.86, 0.90], [40, 0, 0, 20]);
    const layer6Scale = useTransform(scrollYProgress, [0.70, 0.78], [0.85, 1]);


    // ==========================================
    // 4. TEXT OVERLAYS & SIDEBARS
    // ==========================================
    const finalTextOverlayOpacity = useTransform(scrollYProgress, [0.0, 0.85, 0.88, 0.95, 0.98], [0, 0, 1, 1, 0]);
    const finalTextOverlayScale = useTransform(scrollYProgress, [0.85, 0.88], [0.75, 1]);
    const finalTextOverlayVisibility = useTransform(scrollYProgress, (v) => v < 0.85 || v >= 0.98 ? "hidden" : "visible");

    const tryNowOpacity = useTransform(scrollYProgress, [0.0, 0.97, 0.99, 1.0], [0, 0, 1, 1]);
    const tryNowScale = useTransform(scrollYProgress, [0.97, 1.0], [0.8, 1]);
    const tryNowVisibility = useTransform(scrollYProgress, (v) => v < 0.97 ? "hidden" : "visible");

    const leftTextOpacity = useTransform(scrollYProgress, [0, 0.82, 0.88, 1.0], [1, 1, 0, 0]);
    const leftTextVisibility = useTransform(scrollYProgress, (v) => v >= 0.88 ? "hidden" : "visible");

    const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const scrollCueVisibility = useTransform(scrollYProgress, (v) => v >= 0.05 ? "hidden" : "visible");

    const headingText = useTransform(
        scrollYProgress,
        [0, 0.25, 0.26, 0.62, 0.63, 1],
        isThai 
          ? ["ขับเคลื่อนอนาคตของโลจิสติกส์และพลังงานด้วยโซลูชันที่ยั่งยืน", "ขับเคลื่อนอนาคตของโลจิสติกส์และพลังงานด้วยโซลูชันที่ยั่งยืน", "การจัดเตรียมระบบ AI ที่แข็งแั่ง", "การจัดเตรียมระบบ AI ที่แข็งแกร่ง", "โมเดล PUBLISH-SUBSCRIBE (PUB/SUB)", "โมเดล PUBLISH-SUBSCRIBE (PUB/SUB)"]
          : ["Driving the future of logistics and energy with sustainable solutions.", "Driving the future of logistics and energy with sustainable solutions.", "A strong arrangement of AI.", "A strong arrangement of AI.", "The publish-subscribe (pub/sub) model.", "The publish-subscribe (pub/sub) model."]
    );

    const descText = useTransform(
        scrollYProgress,
        [0, 0.25, 0.26, 0.62, 0.63, 1],
        isThai
          ? ["บันทึกทุกธุรกรรมคาร์บอนเครดิตผ่านบันทึกที่ตรวจสอบด้วยบล็อกเชน เพื่อความโปร่งใสที่ตรวจสอบได้ และช่วยลดความยุ่งยากในรายงานด้านสิ่งแวดล้อมของคุณ", "บันทึกทุกธุรกรรมคาร์บอนเครดิตผ่านบันทึกที่ตรวจสอบด้วยบล็อกเชน เพื่อความโปร่งใสที่ตรวจสอบได้ และช่วยลดความยุ่งยากในรายงานด้านสิ่งแวดล้อมของคุณ", "เมื่อมีการรวบรวมข้อมูล > AI จะประมวลผลโดยใช้เกณฑ์มาตรฐานที่สามารถปรับเปลี่ยนตามภูมิภาคและอุตสาหกรรมได้", "เมื่อมีการรวบรวมข้อมูล > AI จะประมวลผลโดยใช้เกณฑ์มาตรฐานที่สามารถปรับเปลี่ยนตามภูมิภาคและอุตสาหกรรมได้", "เมื่อมีการรวบรวมข้อมูล > AI จะประมวลผลโดยใช้เกณฑ์มาตรฐานที่สามารถปรับเปลี่ยนตามภูมิภาคและอุตสาหกรรมได้", "เมื่อมีการรวบรวมข้อมูล > AI จะประมวลผลโดยใช้เกณฑ์มาตรฐานที่สามารถปรับเปลี่ยนตามภูมิภาคและอุตสาหกรรมได้"]
          : ["Document every carbon credit transaction through a blockchain-verified record — ensuring traceability and simplifying your environmental reporting.", "Document every carbon credit transaction through a blockchain-verified record — ensuring traceability and simplifying your environmental reporting.", "When data is collected, AI processes it using benchmarks that can be adjusted by region and industry.", "When data is collected, AI processes it using benchmarks that can be adjusted by region and industry.", "When data is collected, AI processes it using benchmarks that can be adjusted by region and industry.", "When data is collected, AI processes it using benchmarks that can be adjusted by region and industry."]
    );

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-neutral-50">
            <section
                aria-label="Carbon Receipt"
                className="sticky top-[80px] flex h-screen w-full flex-col justify-between overflow-hidden p-6 sm:p-8 md:p-12 lg:justify-center lg:p-16"
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
                    <motion.h1 className="bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-xl font-semibold tracking-[-0.015em] leading-[1.12] text-transparent sm:text-2xl md:text-3xl lg:text-4xl">
                        {headingText}
                    </motion.h1>
                    <motion.p className="text-xs font-medium leading-relaxed text-[#1d1d1f]/70 sm:text-sm md:text-base">
                        {descText}
                    </motion.p>
                </motion.div>

                {/* Shared Showcase Canvas Wrapper */}
                <div className="relative flex w-full h-full flex-1 items-center justify-center mt-4 lg:mt-0">
                    
                    {/* Main Sizing Context Container */}
                    <div className="relative w-[240px] xs:w-[280px] sm:w-[340px] md:w-[420px] lg:w-[540px] xl:w-[620px] max-h-[55vh] xs:max-h-[62vh] sm:max-h-[70vh] lg:max-h-[86vh] aspect-[9/19.5] transition-all duration-300">
                        
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
                            <motion.div style={{ opacity: imgLayers1Opacity, y: imgLayers1Y, scale: imgLayers1Scale, visibility: imgLayers1Visibility }} className="absolute inset-0 pointer-events-none">
                                <img src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_1.1.png" alt="Overlay 1.1" className="h-full w-full object-contain" draggable={false} />
                            </motion.div>
                            <motion.div style={{ opacity: imgLayers1Opacity, y: imgLayers1Y, scale: imgLayers1Scale, visibility: imgLayers1Visibility }} className="absolute inset-0 pointer-events-none">
                                <img src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_1.2.png" alt="Overlay 1.2" className="h-full w-full object-contain" draggable={false} />
                            </motion.div>
                            <motion.div style={{ opacity: imgLayer2Opacity, y: imgLayer2Y, scale: imgLayer2Scale, visibility: imgLayer2Visibility }} className="absolute inset-0 pointer-events-none">
                                <img src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_2.png" alt="Overlay 2" className="h-full w-full object-contain" draggable={false} />
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

                            {/* Card Layer 3 (Top Left - Spans further outside phone boundaries via negative coordinates) */}
                            <motion.div 
                                style={{ opacity: layer3Opacity, x: layer3X, y: layer3Y, scale: layer3Scale, visibility: seq2AnimationsVisibility }} 
                                className="absolute top-2 left-[-15%] w-[50%] h-[45%] pointer-events-none"
                            >
                                <img src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_3.png" alt="Overlay 3" className="h-full w-full object-contain object-left-top" draggable={false} />
                            </motion.div>

                            {/* Interactive Hotspot Layer 4 (Top Right) */}
                            <motion.div 
                                style={{ opacity: layer4Opacity, x: layer4X, y: layer4Y, scale: layer4Scale, visibility: seq2AnimationsVisibility }} 
                                className="absolute top-2 right-[-15%] w-[50%] h-[45%] z-20"
                            >
                                <motion.a
                                    href="/methodology"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full h-full cursor-pointer focus:outline-none"
                                    whileHover={!isMobile ? { 
                                        scale: 1.05,
                                        filter: "drop-shadow(0 0 15px rgba(52, 211, 153, 0.5))"
                                    } : {}}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    <img 
                                        src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_4.png" 
                                        alt="Interactive Overlay Hotspot" 
                                        className="h-full w-full object-contain object-right-top" 
                                        draggable={false} 
                                    />
                                </motion.a>
                            </motion.div>

                            {/* Card Layer 5 (Bottom Left) */}
                            <motion.div 
                                style={{ opacity: layer5Opacity, x: layer5X, y: layer5Y, scale: layer5Scale, visibility: seq2AnimationsVisibility }} 
                                className="absolute bottom-6 left-[-15%] w-[50%] h-[45%] pointer-events-none"
                            >
                                <img src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_5.png" alt="Overlay 5" className="h-full w-full object-contain object-left-bottom" draggable={false} />
                            </motion.div>

                            {/* Card Layer 6 (Bottom Right) */}
                            <motion.div 
                                style={{ opacity: layer6Opacity, x: layer6X, y: layer6Y, scale: layer6Scale, visibility: seq2AnimationsVisibility }} 
                                className="absolute bottom-6 right-[-15%] w-[50%] h-[45%] pointer-events-none"
                            >
                                <img src="/VEKIN Resource all Product/VEKIN 6/EC_Animation_6.png" alt="Overlay 6" className="h-full w-full object-contain object-right-bottom" draggable={false} />
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
                                <h2 className="bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-3xl font-semibold tracking-[-0.02em] leading-none text-transparent drop-shadow-[0_14px_36px_rgba(59,185,123,0.3)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                    Start for future.
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
                            className="cursor-pointer select-none rounded-full bg-gradient-to-r from-[#00464E] to-[#3BB97B] px-7 py-3 text-lg font-medium tracking-[-0.01em] text-white shadow-[0_18px_45px_rgba(0,70,79,0.3)] focus:outline-none sm:px-9 sm:py-4 sm:text-xl md:text-2xl"
                            whileHover={!isMobile ? { 
                                scale: 1.06,
                                filter: "brightness(1.1) drop-shadow(0 0 25px rgba(52, 211, 153, 0.45))"
                            } : {}}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            Try now
                        </motion.button>
                    </motion.div>

                </div>

                {/* SCROLL CUE: fades out as the story begins */}
                <motion.div
                    style={{ opacity: scrollCueOpacity, visibility: scrollCueVisibility }}
                    className="pointer-events-none absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2 text-[#00464E]"
                >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                        {isThai ? "เลื่อนเพื่อดูเรื่องราว" : "Scroll to explore"}
                    </span>
                    <motion.span
                        animate={{ y: [0, 7, 0] }}
                        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#00464E]/40 bg-white/60 backdrop-blur-sm"
                    >
                        <span className="relative -mt-1 h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#00464E]" />
                    </motion.span>
                </motion.div>
            </section>
        </div>
    );
}
