


"use client";

import React, { useState, useRef, useEffect } from "react";

type LocalizedTextProps = {
    as?: React.ElementType;
    th?: string;
    en?: string;
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
        Boolean(navigator.language) &&
        navigator.language.toLowerCase().startsWith("th");

    return <Component className={className}>{isThai ? th ?? en : en ?? th}</Component>;
}



export default function CarbonSegmentDoubleImage() {
  const [sliderPos, setSliderPos] = useState(50); // Split percentage value (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Core touch/cursor positional computations
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  // Determine which text to show based on slider position (cutoff at 50%)
  const isLeftDominant = sliderPos > 50;

  return (
    <section
      aria-label="Carbon Receipt"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-zinc-200 py-20 md:py-0"
    >
      {/* Ambient Soft Glow Element */}
      <div className="absolute top-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8 w-full">

          {/* LEFT COLUMN: Dynamically Changing Text Content */}
          <div className="w-full md:w-1/2 max-w-xl text-center md:text-left flex flex-col justify-center min-h-[280px]">
            {isLeftDominant ? (
              /* TEXT SET A (For Carbon_BG3) */
              <div className="animate-fade-in duration-300">
                <LocalizedText
                  as="h1"
                  th="การจัดเรียง AI ที่แข็งแกร่ง"
                  en="STRONG ARRANGEMENT OF AI"
                  className="text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
                />
                <LocalizedText
                  as="p"
                  th="เมื่อรวบรวมข้อมูลแล้ว AI จะประมวลผลข้อมูลโดยใช้เกณฑ์มาตรฐานที่สามารถปรับเปลี่ยนได้ตามภูมิภาคและอุตสาหกรรม"
                  en="WHEN DATA IS COLLECTED, AI PROCESSES IT USING BENCHMARKS THAT CAN BE ADJUSTED BY REGION AND INDUSTRY."
                  className="mt-6 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-semibold uppercase tracking-wider opacity-90"
                />
              </div>
            ) : (
              /* TEXT SET B (For Carbon_BG4) */
              <div className="animate-fade-in duration-300">
                <LocalizedText
                  as="h1"
                  th="รูปแบบการเผยแพร่แบบสมัครสมาชิก"
                  en="THE PUBLISH-SUBSCRIBE PUB MODEL"
                  className="text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
                />
                <LocalizedText
                  as="p"
                  th="สามารถรวบรวมข้อมูลจากแหล่งต่างๆ ได้อย่างราบรื่นเพื่อสร้างศูนย์ข้อมูลที่แข็งแกร่ง > DATA NEXUS"
                  en="ABLE TO COLLECT DATA FROM VARIOUS SOURCES SMOOTHLY TO CREATE A STRONG DATA NEXUS"
                  className="mt-6 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-semibold uppercase tracking-wider opacity-90"
                />
              </div>
            )}
            
            {/* Interactive hint micro-copy */}
            <div className="mt-8 flex items-center justify-center md:justify-start gap-2.5 text-xs font-bold tracking-widest text-emerald-700 uppercase">
              <span className="flex h-2 w-2 animate-ping rounded-full bg-emerald-500" />
              Drag the slider to swap features and data profiles
            </div>
          </div>

          {/* RIGHT COLUMN: Upright 3D Angled Phone Workspace */}
          <div className="w-full md:w-1/2 flex items-center justify-center [perspective:1500px]">
            
            {/* 3D Y-ROTATION FRAME */}
            <div 
              className="relative w-[260px] sm:w-[300px] aspect-[9/19] rounded-[44px] bg-slate-950 p-3 select-none
                         shadow-[-25px_20px_50px_rgba(15,23,42,0.2),-10px_10px_30px_rgba(0,0,0,0.1)]"
              style={{ 
                transform: "rotateY(-38deg) rotateX(8deg) rotateZ(4deg)", 
                transformStyle: "preserve-3d" 
              }}
            >
              {/* Phone Side Rim Thickness Chassis Extrusion */}
              <div 
                className="absolute inset-0 rounded-[44px] bg-slate-800 border-l-[6px] border-slate-700/80 pointer-events-none" 
                style={{ transform: "translateZ(-10px)", transformStyle: "preserve-3d" }}
              />

              {/* PHONE INNER INTERACTION DISPLAY CONTAINER */}
              <div 
                ref={containerRef}
                className="relative h-full w-full overflow-hidden rounded-[34px] bg-slate-950 shadow-inner cursor-ew-resize"
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
              >
                
                {/* IMAGE A: Carbon_BG3.png (Revealed on the Left side) */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG3.png')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* IMAGE B: Carbon_BG4.png (Revealed on the Right side via dynamic crop mask) */}
                <div 
                  className="absolute inset-0 transition-all duration-75 pointer-events-none"
                  style={{
                    backgroundImage: `url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG4.png')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // Custom split-polygon clip path logic to mask out the right half
                    clipPath: `polygon(${sliderPos}% 0%, 100% 0%, 100% 100%, ${sliderPos}% 100%)`
                  }}
                />

                {/* VISUAL CENTER VERTICAL SPLITTER LINE */}
                <div 
                  className="absolute top-0 bottom-0 w-[2px] bg-white/70 backdrop-blur-sm z-30 pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Floating Thumb Controller Ring with Chevron Glyphs */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-white text-slate-950 shadow-xl border border-slate-200/50 flex items-center justify-center">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                    </svg>
                  </div>
                </div>

                {/* Physical Device Glass Shine Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none mix-blend-overlay z-40" />

                {/* Top Camera Notch & Safe-Area Indicators */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-black z-50" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-white/30 z-50" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}