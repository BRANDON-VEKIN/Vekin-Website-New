"use client";

import React, { useState, useEffect } from "react";

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
  // Simple state to track which image is currently brought to the front
  const [isModelB, setIsModelB] = useState(false);
  
  // Safe client-side check for mobile 3D angle (Prevents Next.js SSR crashes)
  const [isMobileAngle, setIsMobileAngle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileAngle(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      aria-label="Carbon Receipt"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-zinc-200 py-12 md:py-0"
    >
      {/* 10. Ambient Soft Glow Element (Optimized sizes) */}
      <div className="absolute top-1/4 left-1/4 h-[220px] w-[220px] md:h-[450px] md:w-[450px] rounded-full bg-emerald-500/5 blur-[80px] md:blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 z-10">
        {/* 2. Main Layout (Flex direction reversed on mobile) */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-8 w-full">

          {/* LEFT COLUMN: Dynamically Changing Text Content based on active state */}
          {/* 3. Text Container (Responsive min-height) */}
          <div className="w-full md:w-1/2 max-w-xl text-center md:text-left flex flex-col justify-center min-h-[220px] md:min-h-[280px]">
            {!isModelB ? (
              /* TEXT SET A (For Carbon_BG3) */
              <div className="animate-fade-in duration-300">
                {/* 4. Headings (Responsive text sizes) */}
                <LocalizedText
                  as="h1"
                  th="การจัดเรียง AI ที่แข็งแกร่ง"
                  en="STRONG ARRANGEMENT OF AI"
                  className="text-slate-900 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
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
                {/* 4. Headings (Responsive text sizes) */}
                <LocalizedText
                  as="h1"
                  th="รูปแบบการเผยแพร่แบบสมัครสมาชิก"
                  en="THE PUBLISH-SUBSCRIBE PUB MODEL"
                  className="text-slate-900 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
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
            <button 
              onClick={() => setIsModelB(!isModelB)}
              className="cursor-pointer mt-8 flex items-center justify-center md:justify-start gap-2.5 text-xs font-bold tracking-widest text-emerald-700 uppercase hover:opacity-80 transition-opacity"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {/* 9. Hide helper text on mobile */}
              <span className="hidden sm:inline">
                Click the workspace to toggle isometric stack
              </span>
            </button>
          </div>

          {/* RIGHT COLUMN: Flipped Isometric Layered Stack with High-Thickness Glass Panels */}
          {/* 5. Phone stack wrapper (Responsive perspective and padding) */}
          <div className="w-full md:w-1/2 flex items-center justify-center [perspective:1800px] md:[perspective:2500px] py-4 md:py-20">
            
            {/* 3D ISOMETRIC CANVAS FRAME */}
            {/* 6. Phone size (Responsive step increments) */}
            <button 
              onClick={() => setIsModelB(!isModelB)}
              className="relative w-[180px] xs:w-[200px] sm:w-[240px] md:w-[295px] aspect-[9/19] block select-none cursor-pointer border-0 outline-none p-0 bg-transparent group"
              style={{ 
                // 7. Mobile-friendly 3D angle condition safely bound to client state
                transform: isMobileAngle
                  ? "rotateX(42deg) rotateZ(24deg) rotateY(-8deg)"
                  : "rotateX(54deg) rotateZ(36deg) rotateY(-14deg)", 
                transformStyle: "preserve-3d" 
              }}
              aria-label="Toggle card stack perspective"
            >
              
              {/* --- LEVEL 0: HEAVY CHASSIS PHONE BASE --- */}
              <div 
                className="absolute inset-0 rounded-[44px] bg-slate-950 border-[6px] border-slate-900
                           transition-transform duration-500"
                style={{ 
                  transform: "translateZ(0px)",
                  transformStyle: "preserve-3d",
                  // Multilayered slate box-shadow to simulate a thick titanium metal base rim
                  boxShadow: `
                    -1px 1px 0px #1e293b,
                    -2px 2px 0px #1e293b,
                    -3px 3px 0px #0f172a,
                    -4px 4px 0px #0f172a,
                    -5px 5px 0px #020617,
                    -6px 6px 0px #020617,
                    -35px 45px 70px rgba(2,6,23,0.6)
                  `
                }}
              >
                {/* Screen Bed Grid */}
                <div className="absolute inset-2 rounded-[36px] bg-slate-950 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                  <div className="h-1.5 w-14 rounded-full bg-slate-800/80 absolute top-3" />
                </div>
              </div>


              {/* --- LEVEL 1 & 2: FLOATING ULTRA-THICK GLASS PHONE PANELS --- */}

              {/* IMAGE LAYER B: Carbon_BG4.png */}
              <div 
                className="absolute inset-0.5 rounded-[40px] transition-all duration-700 ease-out border border-white/40 overflow-hidden"
                style={{
                  backgroundImage: `url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG4.png')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  // 8. Card offsets applied (18px layout shift instead of 35px)
                  transform: isModelB 
                    ? "translateZ(140px) translateX(0px) translateY(0px)" 
                    : "translateZ(50px) translateX(18px) translateY(18px)",
                  opacity: isModelB ? 1 : 0.7,
                  zIndex: isModelB ? 30 : 10,
                  boxShadow: isModelB
                    ? `
                      -1px 1px 0px rgba(255,255,255,0.45),
                      -2px 2px 0px rgba(255,255,255,0.25),
                      -3px 3px 1px rgba(15,23,42,0.15),
                      -4px 4px 0px rgba(255,255,255,0.15),
                      -5px 5px 2px rgba(15,23,42,0.2),
                      -6px 6px 0px rgba(255,255,255,0.08),
                      -25px 35px 55px rgba(15,23,42,0.55)
                    `
                    : `
                      -1px 1px 0px rgba(255,255,255,0.3),
                      -2px 2px 0px rgba(255,255,255,0.15),
                      -3px 3px 0px rgba(15,23,42,0.2),
                      -4px 4px 0px rgba(255,255,255,0.05),
                      -12px 16px 30px rgba(0,0,0,0.45)
                    `
                }}
              >
                {/* Native Smartphone UI Glass Bezel Accessories */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-black/95 border border-white/10 z-50 flex items-center justify-center shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-zinc-900 ml-auto mr-2.5 opacity-60" />
                </div>
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-white/50 z-50 shadow-sm" />

                {/* Specular Diagonal Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none mix-blend-overlay z-40" />
              </div>


              {/* IMAGE LAYER A: Carbon_BG3.png */}
              <div 
                className="absolute inset-0.5 rounded-[40px] transition-all duration-700 ease-out border border-white/40 overflow-hidden"
                style={{
                  backgroundImage: `url('/VEKIN Resource all Product/VEKIN 2/Carbon_BG3.png')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  // 8. Card offsets applied (18px layout shift instead of 35px)
                  transform: !isModelB 
                    ? "translateZ(140px) translateX(0px) translateY(0px)" 
                    : "translateZ(50px) translateX(18px) translateY(18px)",
                  opacity: !isModelB ? 1 : 0.7,
                  zIndex: !isModelB ? 30 : 10,
                  boxShadow: !isModelB
                    ? `
                      -1px 1px 0px rgba(255,255,255,0.45),
                      -2px 2px 0px rgba(255,255,255,0.25),
                      -3px 3px 1px rgba(15,23,42,0.15),
                      -4px 4px 0px rgba(255,255,255,0.15),
                      -5px 5px 2px rgba(15,23,42,0.2),
                      -6px 6px 0px rgba(255,255,255,0.08),
                      -25px 35px 55px rgba(15,23,42,0.55)
                    `
                    : `
                      -1px 1px 0px rgba(255,255,255,0.3),
                      -2px 2px 0px rgba(255,255,255,0.15),
                      -3px 3px 0px rgba(15,23,42,0.2),
                      -4px 4px 0px rgba(255,255,255,0.05),
                      -12px 16px 30px rgba(0,0,0,0.45)
                    `
                }}
              >
                {/* Native Smartphone UI Glass Bezel Accessories */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-black/95 border border-white/10 z-50 flex items-center justify-center shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-zinc-900 ml-auto mr-2.5 opacity-60" />
                </div>
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-white/50 z-50 shadow-sm" />

                {/* Specular Diagonal Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none mix-blend-overlay z-40" />
              </div>


              {/* --- BACKGROUND HOVER GLOW RADIAL --- */}
              <div 
                className="absolute inset-0 rounded-[44px] bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                style={{ transform: "translateZ(-30px)" }}
              />

            </button>

          </div>

          {/* End of columns row */}
        </div>
      </div>
    </section>
  );
}