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
        body: language === "th" ? "ข้อความตัวอย่าง" : "Fake text",
        phoneGlow: "from-cyan-300/70 via-sky-400/60 to-blue-600/70",
      },
      {
        bg: "/VEKIN Resource all Product/VEKIN 3/Slide_BG2.png",
		    phoneImage: "/VEKIN Resource all Product/VEKIN 3/Phone_Img2.png",
        stepLabel: language === "th" ? "ขั้นตอนที่ 2" : "2nd Step",
        title:
          language === "th"
            ? "ค้นหาตัวเลือกและข้อเสนอที่ดีที่สุดจากการสนับสนุนทางการเงิน"
            : "Find the Best Choice & Financial Support Opportunities",
        body: language === "th" ? "ข้อความตัวอย่าง" : "Fake text",
        phoneGlow: "from-emerald-300/70 via-teal-400/60 to-cyan-500/70",
      },
      {
        bg: "/VEKIN Resource all Product/VEKIN 3/Slide_BG3.png",
		    phoneImage: "/VEKIN Resource all Product/VEKIN 3/Phone_Img3.png",
        stepLabel: language === "th" ? "ขั้นตอนที่ 3" : "3rd Step",
        title:
          language === "th"
            ? "ROI ที่แม่นยำผ่าน AI Energy Auditor (การประหยัด)"
            : "Accurate ROI through AI Energy Auditor (Saving)",
        body: language === "th" ? "ข้อความตัวอย่าง" : "Fake text",
        phoneGlow: "from-amber-300/70 via-orange-400/60 to-rose-500/70",
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
    className="relative w-full overflow-hidden"
  >
    {/* Background */}
    <img
      src={activeStep.bg}
      alt="Future Bangkok background"
      className="block w-full min-h-[800px] object-cover md:min-h-0"
    />

    <div className="absolute inset-0 bg-black/20" />

    <div className="absolute inset-0 flex items-center">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-8
          px-4
          py-12
          sm:px-6
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-12
          lg:px-10
        "
      >
        {/* PHONE */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="
              relative
              w-64
              touch-pan-y
              select-none
              transition-transform
              duration-500
              ease-out
              sm:w-80
              lg:w-[28rem]
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
            <div className="absolute inset-0 -z-10 rounded-[3.1rem] bg-black/35 blur-3xl" />

            <div className="relative overflow-hidden rounded-[3rem] border-[10px] border-slate-950 bg-slate-900 p-[0.4rem] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <div className="relative h-[32rem] overflow-hidden rounded-[2.35rem] sm:h-[42rem]">

                <img
                  src={activeStep.phoneImage}
                  alt="Phone Background"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />

                {/* Notch */}
                <div className="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black/90 sm:w-36" />

                <div className="absolute left-4 top-4 z-20 h-3 w-3 rounded-full border border-white/15 bg-black/90" />
                <div className="absolute right-4 top-4 z-20 h-3 w-3 rounded-full border border-white/15 bg-black/90" />

                <div className="relative z-10 flex h-full flex-col rounded-[1.8rem] p-4 pt-10 text-white">
                  <div className="flex-1" />

                  <div className="mb-4">
                    <div className="rounded-full border border-white/20 bg-black/40 p-2 backdrop-blur-md">
                      <div className="grid grid-cols-3 gap-2">
                        {steps.map((step, index) => (
                          <button
                            key={step.stepLabel}
                            type="button"
                            onClick={() => handleStepButtonClick(index)}
                            className={`rounded-full px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] transition sm:px-3 sm:text-[11px] ${
                              index === activeIndex
                                ? "bg-white text-slate-950"
                                : "bg-white/10 text-white hover:bg-white/20"
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
        </div>

        {/* CONTENT */}
        <div className="text-white">
          <div
            className="
              w-full
              max-w-xl
              rounded-3xl
              border
              border-white/15
              bg-black/55
              p-5
              shadow-2xl
              backdrop-blur-md
              sm:p-8
              lg:p-10
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75 sm:text-sm sm:tracking-[0.4em]">
              {language === "th" ? "โปรโตคอลของเรา" : "OUR PROTOCOL"}
            </p>

            <p className="mt-4 text-2xl font-extrabold uppercase leading-none sm:text-3xl">
              {activeStep.stepLabel}
            </p>

            <h2
              id="auditor-protocol"
              className="mt-4 text-xl font-bold leading-tight sm:text-3xl lg:text-4xl"
            >
              {activeStep.title}
            </h2>

            <p className="mt-4 text-xs leading-relaxed text-white/90 sm:text-base">
              {activeStep.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}