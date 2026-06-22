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
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center bg-neutral-950"
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
      <div className="relative lg:absolute lg:inset-0 z-10 flex items-center w-full h-full py-12 md:py-20 lg:py-0 overflow-y-auto lg:overflow-visible">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-7xl
            grid-cols-1
            items-center
            gap-10
            px-6
            sm:px-10
            lg:grid-cols-[1fr_1.1fr]
            lg:gap-16
          "
        >
          {/* CONTAINER FOR IPHONE MOCKUP */}
          <div className="flex justify-center lg:justify-start order-1 w-full h-full items-center py-4 sm:py-8 lg:py-12">
            <div
              className="
                relative
                w-full
                xs:w-[260px]
                sm:w-[310px]
                lg:w-[350px]
                xl:w-[380px]
                aspect-[9/19.5]
                max-h-[68vh] md:max-h-[72vh] lg:max-h-[78vh]
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
                className={`absolute inset-4 -z-10 rounded-[3rem] bg-gradient-to-tr ${activeStep.phoneGlow} opacity-100 blur-[45px] sm:blur-[60px] transition-all duration-700 ease-in-out`}
              />

              {/* iPhone Steel Chassis Rim with Surgical Stainless Steel Sheen */}
              <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] sm:rounded-[3.25rem] bg-gradient-to-b from-slate-800 via-zinc-900 to-neutral-950 p-[7px] sm:p-[9px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] ring-1 ring-white/15">
                
                {/* Ultra Thin Display Mask Rim */}
                <div className="relative w-full h-full overflow-hidden rounded-[2.05rem] sm:rounded-[2.7rem] bg-neutral-950 ring-2 ring-black/80">
                  
                  {/* Phone Screen Graphical Render Output Canvas */}
                  <img
                    src={activeStep.phoneImage}
                    alt="Application Dashboard Display Frame"
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out"
                  />

                  {/* Anti-Glare Soft Screen Reflection Polish Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none mix-blend-overlay" />

                  {/* iPhone Dynamic Island Interface Element */}
                  <div className="absolute left-1/2 top-2.5 sm:top-3.5 z-30 h-4 w-20 sm:h-5 sm:w-26 -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-end px-2.5">
                    {/* TrueDepth Camera Lens Array Reflection */}
                    <div className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-[#111318] border border-neutral-800/80 shadow-[inset_0_0_2px_rgba(0,167,155,0.3)]" />
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="absolute bottom-1.5 left-1/2 z-30 h-1 w-24 sm:w-28 -translate-x-1/2 rounded-full bg-white/40 pointer-events-none" />

                  {/* Interactive Dashboard Step Control Segment Deck */}
                  <div className="absolute bottom-5 left-3 right-3 sm:bottom-6 sm:left-4 sm:right-4 z-20">
                    <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 p-1.5 sm:p-2 backdrop-blur-xl shadow-lg ring-1 ring-black/10">
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                        {steps.map((step, index) => (
                          <button
                            key={step.stepLabel}
                            type="button"
                            onClick={() => handleStepButtonClick(index)}
                            className={`rounded-lg sm:rounded-xl px-1.5 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                              index === activeIndex
                                ? "bg-white text-slate-950 shadow-md scale-[1.02]"
                                : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
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
                p-5
                sm:p-8
                lg:p-10
                shadow-2xl
                backdrop-blur-md
              "
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-xs sm:tracking-[0.4em]">
                {language === "th" ? "โปรโตคอลของเรา" : "OUR PROTOCOL"}
              </p>

              <p className="mt-2 sm:mt-4 text-xl font-extrabold uppercase leading-none sm:text-3xl text-[#00A79B]">
                {activeStep.stepLabel}
              </p>

              <h2
                id="auditor-protocol"
                className="mt-2 sm:mt-4 text-lg font-bold leading-tight sm:text-2xl lg:text-4xl"
              >
                {activeStep.title}
              </h2>

              <p className="mt-3 sm:mt-4 text-xs leading-relaxed text-white/80 sm:text-base">
                {activeStep.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}