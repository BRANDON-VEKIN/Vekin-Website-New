"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSiteLanguage } from "../siteLanguage";

export default function Segment2() {
  const { language } = useSiteLanguage();
  
  // Clean, modern frame class with subtle glassmorphism and smooth mobile-to-desktop padding
  const slideFrameClass =
    "relative mx-auto mt-4 w-full max-w-none min-h-0 overflow-visible px-4 py-6 sm:px-8 sm:py-12 lg:min-h-[780px] lg:px-10 xl:min-h-[820px]";

  const slideSurfaceClass =
    "rounded-[8px] border border-white/20 bg-white/[0.96] p-5 text-slate-950 shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-6";

  const darkPanelClass =
    "rounded-[8px] border border-emerald-100/10 bg-slate-950/72 p-5 text-white shadow-[0_20px_70px_rgba(0,0,0,0.28)]";

  const badgeClass =
    "mb-3 inline-flex items-center rounded-[8px] border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-200";

  const copy = {
    th: {
      title: "กรณีการใช้งาน",
      description: "การนำไปใช้ในส่วนอื่นๆที่ไม่ใช่งาน event จาก Line OA Cero\nที่เชื่อมโยงกับ Smart Dashboard",
      slide1Title: "Information",
      slide1Lead: "การสอบถามข้อมูลเกี่ยวกับสัตว์ในสวนสัตว์ :",
      slide1Body:
        "ผู้เยี่ยมชมสามารถสอบถามข้อมูลเกี่ยวกับสัตว์ ต่าง ๆ ได้ เช่น ชื่อ, อายุ, ถิ่นที่อยู่ และพฤติกรรมของสัตว์ โดย LINE OA ที่ใช้ AI จะตอบกลับได้อย่างรวดเร็วและแม่นยำ เช่น \"เสือโคร่งตัวนี้ชื่อ สิงห์\" อายุ 5 ปี และอาศัยอยู่ในบริเวณป่า...",
      tigerTitle: "Tiger - Daihan",
      details: "Details",
      speed: "Speed : 49 - 65 km/h",
      residence: "Residence : South and Southeast Asia, China, Eastern Russia, and The Indonesian island of Sumatra.",
      behavior: "Behavior : Tigers mark their territory by scratching marks on trees. Urinating is another way to mark territory.",
      slide2Title1: "Greenhouse",
      slide2Title2: "Gases",
      slide2Lead: "การติดตามการปล่อยก๊าซเรือนกระจก :",
      slide2Body:
        "ผู้ใช้งานสามารถรับข้อมูลเกี่ยวกับกิจกรรมต่าง ๆ ในสวนสัตว์ที่เกี่ยวข้องกับการปล่อยมลพิษ เช่น การใช้พลังงานไฟฟ้าในโซนต่าง ๆ ของสวนสัตว์, การขนส่งภายในสวนสัตว์, และการปล่อยก๊าซจากเครื่องจักร เช่น \"ในวันนี้สวนสัตว์ปล่อย CO₂ จากการใช้พลังงานไฟฟ้า 120 กิโลกรัม และการขนส่งภายในสวนสัตว์ปล่อย CO₂ 30 กิโลกรัม\"",
      slide3Title: "Sustainability Solutions",
      slide3Lead: "การให้คำแนะนำเพื่อความยั่งยืน :",
      slide3Body:
        "ระบบสามารถแนะนำวิธีการลดการปล่อยมลพิษให้กับผู้ใช้ เช่น \"เพื่อช่วยลดการปล่อย CO₂ ในสวนสัตว์ เราขอแนะนำให้ท่านเลือกใช้การเดินเท้าภายในสวนสัตว์แทนการใช้รถขนส่ง\"",
      slide3CardTitle: "Recommendations for sustainability",
      slide3Bullets: [
        "To help reduce CO₂ emissions at the zoo, we recommend that you choose to walk within the zoo instead of using transportation.",
        "Support native species by creating wildlife corridors and pollinator gardens within the zoo.",
        "Train staff on sustainable practices and encourage them to act as ambassadors.",
        "Reduce single-use plastics by offering reusable alternatives."
      ]
    },
    en: {
      title: "Use cases",
      description: "Applications beyond events from Line OA Cero connected to the Smart Dashboard.",
      slide1Title: "Information",
      slide1Lead: "Ask about zoo animals:",
      slide1Body:
        "Visitors can ask about different animals such as name, age, habitat, and behavior. The AI-powered LINE OA can respond quickly and accurately, for example: \"This tiger is named Singh\", is 5 years old, and lives in the forest area...",
      tigerTitle: "Tiger - Daihan",
      details: "Details",
      speed: "Speed : 49 - 65 km/h",
      residence: "Residence : South and Southeast Asia, China, Eastern Russia, and The Indonesian island of Sumatra.",
      behavior: "Behavior : Tigers mark their territory by scratching marks on trees. Urinating is another way to mark territory.",
      slide2Title1: "Greenhouse",
      slide2Title2: "Gases",
      slide2Lead: "Track greenhouse gas emissions:",
      slide2Body:
        "Users can receive information about different zoo activities related to emissions, such as electricity use in zones, internal transport, and machinery emissions. For example: \"Today the zoo emitted 120 kg of CO₂ from electricity use and 30 kg of CO₂ from internal transport.\"",
      slide3Title: "Sustainability Solutions",
      slide3Lead: "Sustainability guidance:",
      slide3Body:
        "The system can recommend ways to reduce emissions for users. For example: \"To help reduce CO₂ emissions at the zoo, we recommend walking within the zoo instead of using transportation.\"",
      slide3CardTitle: "Recommendations for sustainability",
      slide3Bullets: [
        "To help reduce CO₂ emissions at the zoo, we recommend that you choose to walk within the zoo instead of using transportation.",
        "Support native species by creating wildlife corridors and pollinator gardens within the zoo.",
        "Train staff on sustainable practices and encourage them to act as ambassadors.",
        "Reduce single-use plastics by offering reusable alternatives."
      ]
    }
  }[language];

  const slides = [
    (
      <div className="px-1 py-2 sm:px-4" key="slide-1">
        <div className={slideFrameClass}>
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            
            {/* ANIMAL IMAGE CARD FRAME - Hidden on mobile, shows on desktop */}
            <div className="hidden lg:block relative mx-auto h-[650px] w-full max-w-[430px] lg:mx-0 order-2 lg:order-1">
              <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full border border-emerald-200/10 bg-emerald-300/10 blur-xl" />
              <img
                src="/VEKIN Resource all Product/VEKIN 1/Tiger.png"
                alt="Tiger emerging from phone"
                className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 object-contain drop-shadow-[0_30px_55px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-[1.03] lg:w-[500px] lg:max-w-none lg:left-[48%]"
              />
            </div>

            {/* CONTENT FRAME */}
            <div className="relative z-20 mx-auto w-full max-w-[680px] text-left order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <span className={badgeClass}>Zoo AI Feature</span>
                <h3 className="bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-[clamp(2.2rem,6vw,3.65rem)] font-semibold tracking-normal text-transparent drop-shadow-[0_18px_44px_rgba(59,185,123,0.28)]">
                  {copy.slide1Title}
                </h3>
              </div>

              <article className={`${slideSurfaceClass} mt-5`}>
                <p className="text-[clamp(1.05rem,4vw,1.3rem)] font-extrabold text-emerald-950 leading-tight">{copy.slide1Lead}</p>
                <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">{copy.slide1Body}</p>
              </article>

              <article className={`${darkPanelClass} mt-4`}>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-[1fr_200px] sm:items-center">
                  <h4 className="bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-center text-xl font-bold text-transparent sm:text-left">{copy.tigerTitle}</h4>
                  <div className="grid h-[86px] w-full max-w-[200px] mx-auto sm:mx-0 place-items-end bg-emerald-950/50 border border-emerald-300/20 p-3 rounded-[8px] backdrop-blur-sm">
                    <div className="h-12 w-full bg-[linear-gradient(150deg,transparent_0_12%,#10b981_13%_22%,transparent_23%_28%,#10b981_29%_100%)] opacity-80" />
                    <p className="-mt-9 place-self-center text-lg font-black text-emerald-200">45%</p>
                  </div>
                </div>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{copy.details}</p>
                  <div className="mt-2.5 w-full space-y-2 text-xs sm:text-sm text-slate-300">
                    <span className="block leading-relaxed bg-white/[0.06] p-2.5 rounded-[8px] border border-white/5">{copy.speed}</span>
                    <span className="block leading-relaxed bg-white/[0.06] p-2.5 rounded-[8px] border border-white/5">{copy.residence}</span>
                    <span className="block leading-relaxed bg-white/[0.06] p-2.5 rounded-[8px] border border-white/5">{copy.behavior}</span>
                  </div>
                </div>
              </article>
            </div>

          </div>
        </div>
      </div>
    ),
    (
      <div className="px-1 py-2 sm:px-4" key="slide-2">
        <div className={slideFrameClass}>
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="grid items-start gap-8 lg:grid-cols-[42%_58%] lg:gap-12">
            
            {/* ANIMAL IMAGE CARD FRAME - Hidden on mobile, shows on desktop */}
            <div className="hidden lg:block relative mx-auto h-[650px] w-full max-w-[430px] lg:mx-0 order-2 lg:order-1">
              <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full border border-emerald-200/10 bg-emerald-300/10 blur-xl" />
              <img
                src="/VEKIN Resource all Product/VEKIN 1/Deer.png"
                alt="Deer emerging from phone frame"
                className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 object-contain drop-shadow-[0_30px_55px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-[1.03] lg:w-[500px] lg:max-w-none lg:left-[48%]"
              />
            </div>

            <div className="mx-auto w-full text-left order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <span className={badgeClass}>Live Eco Matrix</span>
                <h3 className="bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-[clamp(2rem,6vw,3.65rem)] font-semibold leading-tight tracking-normal text-transparent drop-shadow-[0_18px_44px_rgba(59,185,123,0.28)]">
                  {copy.slide2Title1} <br className="hidden lg:inline" /> {copy.slide2Title2}
                </h3>
              </div>

              <article className={`${slideSurfaceClass} mt-5`}>
                <p className="text-[clamp(1.05rem,4vw,1.3rem)] font-extrabold text-emerald-950 leading-tight">{copy.slide2Lead}</p>
                <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">{copy.slide2Body}</p>
              </article>

              <div className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 max-w-[840px]">
                <div className="flex flex-col items-center justify-center p-3 bg-slate-950/62 rounded-[8px] border border-white/10 shadow-xl group">
                  <img src="/VEKIN Resource all Product/VEKIN 1/electric.png" alt="Electrical energy" className="h-auto max-h-[140px] sm:max-h-[200px] w-auto rounded-[8px] object-contain transition duration-300 group-hover:scale-[1.02]" />
                  <span className="text-[11px] font-medium tracking-wider text-slate-400 mt-2 uppercase">Zone Grid Power</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-slate-950/62 rounded-[8px] border border-white/10 shadow-xl group">
                  <img src="/VEKIN Resource all Product/VEKIN 1/transport.png" alt="Internal transport" className="h-auto max-h-[140px] sm:max-h-[200px] w-auto rounded-[8px] object-contain transition duration-300 group-hover:scale-[1.02]" />
                  <span className="text-[11px] font-medium tracking-wider text-slate-400 mt-2 uppercase">Internal Fleet Logistics</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    ),
    (
      <div className="px-1 py-2 sm:px-4" key="slide-3">
        <div className={slideFrameClass}>
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* ANIMAL IMAGE CARD FRAME - Hidden on mobile, shows on desktop */}
            <div className="hidden lg:block relative mx-auto h-[650px] w-full max-w-[430px] lg:mx-0 order-2 lg:order-1">
              <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full border border-emerald-200/10 bg-emerald-300/10 blur-xl" />
              <img
                src="/VEKIN Resource all Product/VEKIN 1/Giraffe.png"
                alt="Giraffe"
                className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 object-contain drop-shadow-[0_30px_55px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-[1.03] lg:w-[500px] lg:max-w-none lg:left-[48%]"
              />
            </div>

            <div className="relative z-20 mx-auto w-full max-w-[680px] text-left order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <span className={badgeClass}>Green Intelligence</span>
                <h3 className="bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-[clamp(2rem,6vw,3.65rem)] font-semibold tracking-normal text-transparent drop-shadow-[0_18px_44px_rgba(59,185,123,0.28)]">
                  {copy.slide3Title}
                </h3>
              </div>

              <div className="mt-5 flex flex-col gap-4">
                <article className={slideSurfaceClass}>
                  <p className="text-[clamp(1.05rem,4vw,1.3rem)] font-extrabold text-emerald-950 leading-tight">
                    {copy.slide3Lead}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                    {copy.slide3Body}
                  </p>
                </article>

                <div className={darkPanelClass}>
                  <p className="font-bold text-[14px] text-emerald-400 tracking-wide border-b border-white/10 pb-2 mb-3">
                    {copy.slide3CardTitle}
                  </p>
                  <ul className="list-none space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {copy.slide3Bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 bg-white/[0.06] p-2.5 rounded-[8px] border border-white/5">
                        <span className="text-emerald-400 mt-0.5">✔</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    ),
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section
      className="relative ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen max-w-none px-4 pb-16 pt-12 text-center sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-28 overflow-visible"
    >
      <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/[0.08] blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-[1180px]"
      >
        <p className="mx-auto mb-3 inline-flex rounded-[8px] border border-emerald-300/20 bg-white/[0.04] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-200">
          LINE OA Cero + Smart Dashboard
        </p>
        <h2 className="bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-[clamp(2.4rem,8vw,4.7rem)] font-semibold leading-tight tracking-normal text-transparent drop-shadow-[0_18px_44px_rgba(59,185,123,0.24)]">
          {copy.title}
        </h2>
        <div className="mx-auto mt-4 h-px w-28 bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent" />
        <p className="mx-auto mt-4 max-w-[760px] whitespace-pre-line text-[clamp(1rem,4vw,1.35rem)] font-medium leading-relaxed text-white/78 sm:mt-6">
          {copy.description}
        </p>
      </motion.div>

      {/* Slider view shell container */}
      <div
        className="relative mx-auto mt-6 w-full max-w-none overflow-visible pb-12 sm:mt-12 sm:pb-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div className="flex w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((slide, i) => (
              <div key={i} className="w-full flex-shrink-0">
                {slide}
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Navigation Indicator Array */}
        <div className="absolute bottom-0 sm:bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={(language === "th" ? "ไปยังสไลด์ที่ " : "Go to slide ") + (i + 1)}
              className={`h-1.5 transition-all duration-300 rounded-full ${i === index ? "w-9 bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.45)]" : "w-2.5 bg-white/25 hover:bg-white/[0.45]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
