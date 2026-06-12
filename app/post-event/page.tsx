"use client";

import Link from "next/link";
import Header from "../components/Header";
import { useSiteLanguage } from "../components/siteLanguage";

export default function PostEventPage() {
  const { language } = useSiteLanguage();
  const copy = {
    th: {
      back: "กลับ",
      title: "หลังงาน",
      lines: [
        "การรับรองรายงานการปล่อยก๊าซ",
        "การทวนสอบตัวเลขการปล่อย",
        "การซื้อ carbon credits มาชดเชยทำให้งานปลดปล่อยเป็น 0",
        "ยื่นขอออกใบ certificate จากทาง อบก"
      ]
    },
    en: {
      back: "Back",
      title: "Post-Event",
      lines: [
        "Validate the emissions report",
        "Verify emissions figures",
        "Purchase carbon credits to offset the event to net zero",
        "Apply for a certificate from TGO"
      ]
    }
  }[language];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Header />
      {/* FULL-SCREEN IMMERSIVE GRAPHIC BACKGROUND */}
      <img
        src="/VEKIN Resource all Product/VEKIN 1/post_event.png"
        alt="Post-event approved report documents"
        className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
      />
      
      {/* SMART BACKDROP MASKS - Smooth dark tinting optimized for mobile content viewports */}
      <div className="absolute inset-0 bg-black/30 md:bg-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-black/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* FLOATING ACTION NAVIGATION RETURN ACTION */}
      <Link
        href="/"
        className="absolute left-4 top-4 sm:left-6 sm:top-6 z-30 rounded-full border border-white/20 bg-black/40 px-4 py-2.5 text-xs sm:text-sm font-bold backdrop-blur-lg transition-all duration-300 hover:border-white/50 active:scale-95"
      >
        ‹ {copy.back}
      </Link>

      {/* HERO SECTION CORE VIEW WRAPPER */}
      <section className="relative z-20 flex min-h-screen items-end px-5 pb-12 pt-24 sm:px-12 lg:px-[7vw] lg:pb-[8vh]">
        <div className="max-w-[860px] w-full text-left">
          
          {/* TITLE HEADER COMPONENT */}
          <h1 className="text-[clamp(2.4rem,7.5vw,5.2rem)] font-black leading-[1.1] tracking-tight text-white">
            {copy.title}
          </h1>
          
          {/* SECURE STACKED LIST ITEMS - Programmatic clean indentation layout rendering */}
          <div className="mt-6 sm:mt-10 space-y-4 text-[clamp(1.05rem,2.45vw,1.62rem)] font-bold sm:font-black leading-relaxed sm:leading-[1.4] text-white/90">
            {copy.lines.map((line, idx) => (
              <div key={idx} className="flex items-start gap-2.5 pl-4 -indent-4">
                <span className="text-emerald-400 select-none">•</span>
                <p>{line}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}