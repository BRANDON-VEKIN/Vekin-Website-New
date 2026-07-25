"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { useSiteLanguage } from "../siteLanguage";

type ProtocolStep = {
  label: string;
  title: string;
  body: string;
  align: "left" | "right";
  y: string;
  revealAt: number;
};

const backgroundImage = "/VEKIN Resource all Product/VEKIN 3/Slide_BG1.png";

function ProtocolStepCard({
  index,
  scrollYProgress,
  step,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
  step: ProtocolStep;
}) {
  const revealStart = Math.max(0, step.revealAt - 0.09);
  const opacity = useTransform(
    scrollYProgress,
    [revealStart, step.revealAt, 1],
    [0, 1, 1]
  );
  const yOffset = useTransform(
    scrollYProgress,
    [revealStart, step.revealAt, 1],
    [28, 0, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [revealStart, step.revealAt, 1],
    [0.96, 1, 1]
  );

  return (
    <motion.article
      key={step.label}
      className={`absolute ${step.y} left-20 w-[calc(100%-5rem)] text-left sm:w-[min(46vw,380px)] lg:w-[420px] ${
        step.align === "left"
          ? "sm:left-auto sm:right-[calc(50%+42px)] sm:text-right"
          : "sm:left-[calc(50%+42px)]"
      }`}
      style={{ opacity, scale, y: yOffset }}
    >
      <div
        className="rounded-[8px] border border-white/18 bg-white/22 p-5 shadow-[0_22px_52px_rgba(0,0,0,0.32)] backdrop-blur-md ring-1 ring-white/10 sm:p-6"
        style={{
          animation: `protocolCardFloat ${4.6 + index * 0.5}s ease-in-out infinite`,
        }}
      >
        <span className="inline-flex rounded-full bg-[#00A79B] px-4 py-1.5 text-[10px] font-black uppercase tracking-normal text-white shadow-[0_0_18px_rgba(0,167,155,0.38)] sm:text-[11px]">
          {step.label}
        </span>
        <h3 className="mt-4 text-xl font-black leading-[1.02] tracking-normal text-white sm:text-2xl">
          {step.title}
        </h3>
        <p className="mt-4 text-xs font-medium leading-relaxed text-white/68 sm:text-sm">
          {step.body}
        </p>
      </div>
    </motion.article>
  );
}

export default function A_Segment4() {
  const { language } = useSiteLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 35%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scannerY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps: ProtocolStep[] = [
    {
      label: language === "th" ? "ขั้นตอนที่ 1" : "1st step",
      title:
        language === "th"
          ? "ประเมินฐานพลังงานอย่างแม่นยำ"
          : "Accurate in Energy baseline",
      body:
        language === "th"
          ? "สร้างฐานข้อมูลพลังงานที่ผ่านการตรวจสอบจากข้อมูล IoT ครบถ้วน ก่อนตัดสินใจด้านการประหยัดพลังงานทุกครั้ง"
          : "Establish a verified energy baseline from complete IoT data before every savings decision.",
      align: "right",
      y: "top-[16%]",
      revealAt: 0.16,
    },
    {
      label: language === "th" ? "ขั้นตอนที่ 2" : "2nd step",
      title:
        language === "th"
          ? "ค้นหาทางเลือกและข้อเสนอสนับสนุนทางการเงินที่เหมาะสม"
          : "Find best choice & deal from financial support",
      body:
        language === "th"
          ? "เปรียบเทียบแนวทางเพิ่มประสิทธิภาพ ตัวเลือกทางการเงิน และโครงการสนับสนุนด้วยความมั่นใจจาก AI"
          : "Compare efficient pathways, financing options, and support programs with AI-backed confidence.",
      align: "left",
      y: "top-[39%]",
      revealAt: 0.39,
    },
    {
      label: language === "th" ? "ขั้นตอนสุดท้าย" : "3rd Final step",
      title:
        language === "th"
          ? "คำนวณ ROI ที่แม่นยำผ่าน AI Energy Auditor"
          : "Accurate ROI Through AI Energy Auditor (Saving)",
      body:
        language === "th"
          ? "เปลี่ยนผลการดำเนินงานที่ตรวจสอบได้ให้เป็นหลักฐานด้านการประหยัด ROI และความพร้อมสำหรับการเข้าถึงเงินทุนด้านสภาพภูมิอากาศ"
          : "Turn verified performance into credible savings, ROI, and climate-finance ready evidence.",
      align: "right",
      y: "top-[64%]",
      revealAt: 0.64,
    },
  ];

  return (
    <section
      aria-labelledby="auditor-protocol-timeline"
      className="relative min-h-screen w-full overflow-hidden bg-[#02100f] pb-0 pt-16 text-white sm:pt-20 lg:pt-24"
    >
      <style>{`
        @keyframes protocolNodePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(68, 229, 208, 0.36), 0 0 22px rgba(68, 229, 208, 0.36); }
          50% { box-shadow: 0 0 0 10px rgba(68, 229, 208, 0), 0 0 34px rgba(68, 229, 208, 0.64); }
        }
        @keyframes protocolCardFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -8px, 0); }
        }
        @keyframes protocolArrowDrop {
          0%, 100% { transform: translateY(0); opacity: 0.72; }
          50% { transform: translateY(7px); opacity: 1; }
        }
      `}</style>

      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-82"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.36)_46%,rgba(0,25,26,0.82)),linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,35,40,0.2)_50%,rgba(0,0,0,0.66))]" />

      <div className="relative z-10 mx-auto flex min-h-[920px] w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl pt-4 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8ff7ea]/80">
            {language === "th" ? "โปรโตคอลของเรา" : "Our Protocol"}
          </p>
          <h2
            id="auditor-protocol-timeline"
            className="mt-3 text-5xl font-black uppercase leading-[0.85] tracking-normal sm:text-7xl lg:text-8xl"
          >
            {language === "th" ? (
              <>
                โปรโตคอล
                <br />
                ของเรา
              </>
            ) : (
              <>
                Our
                <br />
                Protocol
              </>
            )}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-xs font-medium leading-relaxed text-white/68 sm:text-sm">
            {language === "th"
              ? "เส้นทางการตรวจสอบ 3 ขั้นตอนที่เปลี่ยนข้อมูลพลังงานดิบให้เป็นหลักฐานด้านการประหยัดที่พร้อมใช้สำหรับการเงิน"
              : "A three-step verification path that turns raw energy data into finance-ready savings evidence."}
          </p>
          <div className="mx-auto mt-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/10 text-white shadow-[0_0_24px_rgba(255,255,255,0.24)] backdrop-blur-sm animate-[protocolArrowDrop_1.7s_ease-in-out_infinite]">
            <span className="relative h-3.5 w-3.5 border-b-2 border-r-2 border-white rotate-45" />
          </div>
        </div>

        <div
          ref={timelineRef}
          className="relative mx-auto mt-10 min-h-[1180px] w-full max-w-[820px] sm:mt-14 sm:min-h-[760px] lg:min-h-[820px]"
        >
          <div className="absolute bottom-0 left-8 top-0 w-0 sm:left-1/2">
            <div className="absolute left-0 top-0 h-full w-px -translate-x-1/2 bg-white/38" />
            <motion.div
              className="absolute -left-0.5 top-0 h-full w-[4px] origin-top rounded-full bg-[#f7fffb] shadow-[0_0_20px_rgba(255,255,255,0.88),0_0_44px_rgba(68,229,208,0.52)]"
              style={{ scaleY: lineScale }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute -left-12 top-0 h-24 w-24 -translate-y-12 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(68,229,208,0.3)_38%,transparent_68%)] blur-sm"
              style={{ y: scannerY }}
            />
          </div>

          {steps.map((step, index) => (
            <ProtocolStepCard
              key={step.label}
              index={index}
              scrollYProgress={scrollYProgress}
              step={step}
            />
          ))}

          {steps.map((step) => (
            <div
              key={`${step.label}-node`}
              className={`absolute left-8 ${step.y} z-20 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-white sm:left-1/2 sm:h-[18px] sm:w-[18px]`}
              style={{ animation: "protocolNodePulse 2.2s ease-in-out infinite" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
