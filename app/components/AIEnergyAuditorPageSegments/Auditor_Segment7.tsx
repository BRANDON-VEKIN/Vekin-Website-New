"use client";

import React, { useMemo, useRef, useState } from "react";
import { useSiteLanguage } from "../siteLanguage";

type Step = {
  bg: string;
  phoneImage: string;
  stepLabel: string;
  title: string;
  body: string;
  phoneGlow: string;
};

export default function AuditorSegment7() {
  const { language } = useSiteLanguage();

  const steps = useMemo<Step[]>(
    () => [
      {
        bg: "/VEKIN Resource all Product/VEKIN 3/Slide_BG1.png",
        phoneImage: "/VEKIN Resource all Product/VEKIN 3/Phone_Img1.png",
        stepLabel: language === "th" ? "ขั้นตอนที่ 1" : "1st Step",
        title:
          language === "th"
            ? "ประเมินฐานพลังงานอย่างแม่นยำ"
            : "Accurate Energy Baseline Assessment",
        body: language === "th" ? "การประเมินฐานข้อมูลพลังงานที่แม่นยำของ VEKIN ใช้ Hybrid Neuro-Symbolic AI สิทธิบัตรเฉพาะ เพื่อวิเคราะห์ข้อมูล IoT แบบ 100% ด้วยความแม่นยำสูงถึง 95% ระบบนี้เปลี่ยนการประมาณการแบบเดิมเป็นการทวนสอบแบบเรียลไทม์เพื่อสร้างฐานข้อมูลที่มีความน่าเชื่อถือสูง ข้อมูลเชิงลึกเหล่านี้จะเปลี่ยนข้อมูลการใช้พลังงานให้เป็นสินทรัพย์ดิจิทัลที่ธนาคารยอมรับ ช่วยปลดล็อกโอกาสในการเข้าถึงสินเชื่อสีเขียวและตลาดซื้อขายคาร์บอนระดับพรีเมียมได้ในทันที" : "VEKIN’s Accurate Energy Baseline Assessment utilizes patented Hybrid Neuro-Symbolic AI to analyze 100% of IoT data with 95% probabilistic accuracy. This replaces manual estimates with real-time verification to establish high-integrity baselines. These insights transform energy consumption metrics into bankable digital assets, unlocking immediate access to green loans and premium carbon markets.",
        phoneGlow: "from-cyan-500/40 via-sky-500/30 to-blue-600/40",
      },
      {
        bg: "/VEKIN Resource all Product/VEKIN 3/Slide_BG2.png",
        phoneImage: "/VEKIN Resource all Product/VEKIN 3/Phone_Img2.png",
        stepLabel: language === "th" ? "ขั้นตอนที่ 2" : "2nd Step",
        title:
          language === "th"
            ? "ค้นหาตัวเลือกและข้อเสนอที่ดีที่สุดจากการสนับสนุนทางการเงิน"
            : "Find the Best Choice & Financial Support Opportunities",
        body: language === "th" ? "VEKIN ช่วยคุณค้นหาทางเลือกที่ดีที่สุดด้วยระบบ AI แกนคู่ (Dual-Core AI) ที่ทำหน้าที่เป็นทั้งที่ปรึกษาเชิงกลยุทธ์และผู้ทวนสอบอิสระ 'โครงสร้างพื้นฐานแห่งความไว้วางใจ' นี้เปลี่ยนข้อมูลสิ่งแวดล้อมให้เป็นสินทรัพย์ที่ธนาคารยอมรับ ช่วยเปิดโอกาสในการเข้าถึงแหล่งเงินทุนและการสนับสนุนทางการเงิน เช่น สินเชื่อสีเขียวและกองทุนเพื่อสภาพภูมิอากาศ พร้อมแผนสมัครสมาชิกที่ยืดหยุ่นเพื่อตอบโจทย์ทุกองค์กรอย่างคุ้มค่าและมีความน่าเชื่อถือสูง" : "VEKIN helps you Find the Best Choice through its dual-core AI, acting as either a strategic consultant or an independent verifier. This 'Trust Infrastructure' transforms environmental data into bankable assets, unlocking Financial Support Opportunities like green loans and climate finance. Flexible subscription tiers ensure a high-integrity, cost-effective fit for any organization.",
        phoneGlow: "from-emerald-500/40 via-teal-500/30 to-cyan-500/40",
      },
      {
        bg: "/VEKIN Resource all Product/VEKIN 3/Slide_BG3.png",
        phoneImage: "/VEKIN Resource all Product/VEKIN 3/Phone_Img3.png",
        stepLabel: language === "th" ? "ขั้นตอนที่ 3" : "3rd Step",
        title:
          language === "th"
            ? "ROI ที่แม่นยำผ่าน AI Energy Auditor (การประหยัด)"
            : "Accurate ROI through AI Energy Auditor (Saving)",
        body: language === "th" ? "AI Energy Auditor ของ VEKIN ช่วยเพิ่มผลตอบแทนสูงสุด (ROI) โดยการแทนที่การทวนสอบแบบเดิมด้วยระบบอัตโนมัติแบบเรียลไทม์ ซึ่งช่วยลดต้นทุนการดำเนินงานลงกว่า 80% ด้วยนวัตกรรม AI สิทธิบัตรเฉพาะที่มีความแม่นยำสูงถึง 95% ระบบจะเปลี่ยนข้อมูลพลังงานให้เป็นสินทรัพย์ดิจิทัลที่ธนาคารยอมรับเพื่อเปิดทางเข้าถึงเงินทุนเพื่อสภาพภูมิอากาศได้ทันที โครงสร้างพื้นฐานอัจฉริยะนี้ช่วยขจัดความสูญเสียทางเศรษฐกิจแบบเดิมๆ มอบการประหยัดที่มีความน่าเชื่อถือสูงในทุกโครงการสีเขียว" : "VEKIN’s AI Energy Auditor maximizes ROI by replacing manual verification with real-time automation, slashing operational costs by 80%. Utilizing patented AI with 95% accuracy, it transforms energy data into bankable assets, unlocking immediate access to climate finance. This intelligent infrastructure eliminates traditional economic losses, delivering high-integrity savings for every green initiative.",
        phoneGlow: "from-amber-500/40 via-orange-500/30 to-rose-600/40",
      },
    ],
    [language]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const activeStep = steps[activeIndex];

  function goToNextStep() {
    setActiveIndex((current) => (current + 1) % steps.length);
  }

  function goToPreviousStep() {
    setActiveIndex((current) => (current - 1 + steps.length) % steps.length);
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    pointerStartX.current = event.clientX;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (pointerStartX.current === null) return;

    const deltaX = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(deltaX) < 40) return;

    if (deltaX < 0) {
      goToNextStep();
    } else {
      goToPreviousStep();
    }
  }

  function handleStepButtonClick(index: number) {
    setActiveIndex(index);
  }

  return (
    <section
      aria-labelledby="auditor-protocol"
      className="relative w-full min-h-screen overflow-hidden bg-neutral-950"
    >
      {/* Background Section Layer */}
      <img
        src={activeStep.bg}
        alt="Future Bangkok background"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />

      {/* Dark Dimmer Backdrop Tint */}
      <div className="absolute inset-0 bg-black/40 lg:bg-black/20 pointer-events-none" />

      {/* Main Dynamic Container Frame */}
      <div className="relative lg:absolute lg:inset-0 z-10 flex items-center w-full min-h-screen py-10 md:py-20 lg:py-0 overflow-y-auto lg:overflow-visible">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-7xl
            grid-cols-1
            items-center
            gap-6
            px-4
            sm:px-10
            lg:grid-cols-[1fr_1.1fr]
            lg:gap-16
          "
        >
          {/* CONTAINER FOR IPHONE MOCKUP */}
          <div className="flex justify-center lg:justify-start order-1 w-full h-full items-center py-2 sm:py-8 lg:py-12">
            <div
              className="
                relative
                w-[min(58vw,220px)]
                sm:w-[270px]
                md:w-[300px]
                lg:w-[320px]
                xl:w-[340px]
                aspect-[9/21]
                max-h-[58vh] sm:max-h-[70vh] md:max-h-[76vh] lg:max-h-[82vh]
                touch-pan-y
                select-none
              "
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => {
                pointerStartX.current = null;
              }}
              onPointerLeave={() => {
                pointerStartX.current = null;
              }}
            >
              {/* Dynamic Fluid Glow Ambient Backlight Effect */}
              <div
                className={`absolute -inset-5 -z-20 rounded-[4rem] bg-gradient-to-tr ${activeStep.phoneGlow} opacity-80 blur-[42px] transition-all duration-700 ease-in-out sm:-inset-7 sm:blur-[70px]`}
              />
              <div className="absolute -inset-2 -z-10 rounded-[3.4rem] bg-white/10 blur-sm" />

              {/* iPhone Steel Chassis Rim with Surgical Stainless Steel Sheen */}
              <div className="relative h-full w-full overflow-visible rounded-[2.35rem] bg-[linear-gradient(135deg,#f8fafc_0%,#64748b_10%,#111827_32%,#030712_58%,#94a3b8_86%,#f8fafc_100%)] p-[5px] shadow-[0_26px_80px_-20px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.22),inset_0_1px_0_rgba(255,255,255,0.65)] transition-transform duration-500 hover:scale-[1.015] sm:rounded-[2.95rem] sm:p-[7px]">
                <div className="absolute -left-1.5 top-[23%] h-12 w-1 rounded-l-full bg-gradient-to-b from-slate-200 via-slate-500 to-slate-900 shadow-[inset_-1px_0_1px_rgba(255,255,255,0.55)] sm:h-16" />
                <div className="absolute -right-1.5 top-[30%] h-20 w-1 rounded-r-full bg-gradient-to-b from-slate-200 via-slate-500 to-slate-900 shadow-[inset_1px_0_1px_rgba(255,255,255,0.45)] sm:h-24" />
                <div className="absolute inset-[3px] rounded-[2.15rem] bg-gradient-to-b from-white/25 via-transparent to-black/25 pointer-events-none sm:rounded-[2.7rem]" />
                
                {/* Ultra Thin Display Mask Rim */}
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-neutral-950 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),inset_0_0_28px_rgba(0,0,0,0.95)] ring-1 ring-black/90 sm:rounded-[2.55rem]">
                  
                  {/* Phone Screen Graphical Render Output Canvas */}
                  <img
                    src={activeStep.phoneImage}
                    alt="Application Dashboard Display Frame"
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out"
                  />

                  {/* Anti-Glare Soft Screen Reflection Polish Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_0%,rgba(255,255,255,0.24),transparent_34%),linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.12)_18%,transparent_36%,transparent_100%)] mix-blend-screen" />
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 sm:rounded-[2.55rem]" />

                  {/* iPhone Dynamic Island Interface Element */}
                  <div className="absolute left-1/2 top-2.5 z-30 flex h-4 w-20 -translate-x-1/2 items-center justify-end rounded-full bg-black/95 px-2.5 shadow-[0_1px_5px_rgba(255,255,255,0.12),inset_0_1px_1px_rgba(255,255,255,0.18)] sm:top-3.5 sm:h-5 sm:w-24">
                    {/* TrueDepth Camera Lens Array Reflection */}
                    <div className="h-1 w-1 rounded-full border border-neutral-700/80 bg-[#101318] shadow-[inset_0_0_2px_rgba(0,167,155,0.45),0_0_5px_rgba(0,167,155,0.18)] sm:h-1.5 sm:w-1.5" />
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="pointer-events-none absolute bottom-2 left-1/2 z-30 h-1 w-20 -translate-x-1/2 rounded-full bg-white/55 shadow-[0_0_12px_rgba(255,255,255,0.22)] sm:w-28" />

                  {/* Interactive Dashboard Step Control Segment Deck */}
                  <div className="absolute bottom-5 left-4 right-4 z-20 sm:bottom-7 sm:left-5 sm:right-5">
                    <div className="rounded-2xl border border-white/15 bg-black/35 p-1.5 shadow-[0_12px_28px_rgba(0,0,0,0.45)] ring-1 ring-black/20 backdrop-blur-2xl sm:p-2">
                      <div className="grid grid-cols-3 gap-1.5">
                        {steps.map((step, index) => (
                          <button
                            key={step.stepLabel}
                            type="button"
                            onClick={() => handleStepButtonClick(index)}
                            className={`rounded-xl px-1.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] transition-all duration-300 sm:py-2 sm:text-[10px] ${
                              index === activeIndex
                                ? "bg-[#00A79B] text-white shadow-[0_0_18px_rgba(0,167,155,0.45)] scale-[1.03]"
                                : "bg-white/8 text-white/75 hover:bg-white/15 hover:text-white"
                            }`}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* SIDE INFORMATION CARD LOGIC */}
          <div className="text-white flex justify-center lg:justify-start order-2 w-full">
            <div
              className="
                w-full
                max-w-xl
                rounded-2xl
                sm:rounded-3xl
                border
                border-white/15
                bg-black/65
                max-h-[44vh]
                overflow-y-auto
                p-4
                sm:p-8
                lg:p-10
                lg:max-h-none
                lg:overflow-visible
                shadow-2xl
                backdrop-blur-md
              "
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-xs sm:tracking-[0.4em]">
                {language === "th" ? "โปรโตคอลของเรา" : "OUR PROTOCOL"}
              </p>

              <p className="mt-2 sm:mt-4 text-lg font-extrabold uppercase leading-none sm:text-3xl text-[#00A79B]">
                {activeStep.stepLabel}
              </p>

              <h2
                id="auditor-protocol"
                className="mt-2 sm:mt-4 text-base font-bold leading-tight sm:text-2xl lg:text-4xl"
              >
                {activeStep.title}
              </h2>

              <p className="mt-3 sm:mt-4 text-xs leading-relaxed text-white/80 sm:text-sm lg:text-base">
                {activeStep.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
