"use client";

import Link from "next/link";
import Header from "../components/Header";
import { useSiteLanguage } from "../components/siteLanguage";

export default function PreEventPage() {
  const { language } = useSiteLanguage();
  const copy = {
    th: {
      back: "กลับ",
      title: "ก่อนงาน",
      body1: "-venue owner / organizer กรอกข้อมูลการจัดงาน เช่นคนเข้าร่วม\nการเดินทาง การพักแรม ส่วนตกแต่งในงาน เพื่อประเมินค่า carbon เบื้องต้น",
      body2: "-การเตรียมความพร้อมของระบบ ในส่วนของการนำอุปกรณ์ IoT เข้าไป integrate\nระหว่างสถานที่กับระบบแสดงผล"
    },
    en: {
      back: "Back",
      title: "Pre-Event",
      body1: "-Venue owner / organizer enters event details such as attendees, travel, lodging, and decorations to estimate baseline carbon impact.",
      body2: "-System preparation for integrating IoT devices\nbetween the venue and the display system."
    }
  }[language];

  return (
<main className="relative min-h-screen overflow-hidden bg-black text-white">
  <Header />
  {/* BACKGROUND CANVAS GRAPHIC */}
  <img
    src="/VEKIN Resource all Product/VEKIN 1/pre_event.png"
    alt="Pre-event planning meeting with event data charts"
    className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
  />
  
  {/* MOBILE BACKDROP SHIELD - Dynamically tints the image on mobile screens to maintain readable text contrast */}
  <div className="absolute inset-0 bg-black/40 lg:bg-transparent z-10 pointer-events-none" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/40 z-10 pointer-events-none" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

  {/* BACK NAVIGATION TARGET BUTTON */}
  <Link
    href="/"
    className="absolute left-4 top-4 sm:left-6 sm:top-6 z-30 rounded-full border border-white/20 bg-black/40 px-4 py-2.5 text-xs sm:text-sm font-bold backdrop-blur-lg transition-all duration-300 hover:border-white/60 active:scale-95"
  >
    ‹ {copy.back}
  </Link>

  {/* HERO SECTION VIEW WRAPPER */}
  <section className="relative z-20 flex min-h-screen items-end px-5 pb-12 pt-24 sm:px-12 lg:px-[7vw] lg:pb-[8vh]">
    <div className="max-w-[880px] w-full text-left">
      
      {/* TITLE HEADLINE - Tweaked leading tag to prevent vertical text collisions on linebreaks */}
      <h1 className="text-[clamp(2.4rem,7.5vw,5.4rem)] font-black leading-[1.1] tracking-tight text-white">
        {copy.title}
      </h1>
      
      {/* BODY COPY COMPOSITION BLOCK */}
      <div className="mt-6 sm:mt-10 space-y-4 text-[clamp(1.05rem,3.2vw,1.7rem)] font-bold sm:font-black leading-relaxed sm:leading-[1.35] text-white/90">
        <p className="whitespace-pre-line">{copy.body1}</p>
        <p className="whitespace-pre-line">{copy.body2}</p>
      </div>

    </div>
  </section>
</main>
  );
}
