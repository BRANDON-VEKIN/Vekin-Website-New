"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import LocalizedText from "../LocalizedText";

const detailPanels = {
  traditional: {
    image: "/VEKIN Resource all Product/VEKIN 3/Human_Left.png",
    sideLabel: "Human Left",
    labelEn: "Legacy Workflow",
    labelTh: "กระบวนการแบบเดิม",
    titleEn: "Traditional",
    titleTh: "แบบดั้งเดิม",
    copyEn:
      "Traditional auditing depends on manual collection, estimates, and disconnected review cycles. It is slow, expensive, difficult to scale, and exposed to human error or greenwashing risk.",
    copyTh:
      "การตรวจสอบแบบเดิมพึ่งพาการเก็บข้อมูลด้วยมือ การประมาณค่า และรอบการตรวจทานที่แยกส่วน ทำให้กระบวนการช้า มีต้นทุนสูง ขยายผลได้ยาก และเสี่ยงต่อข้อผิดพลาดของมนุษย์หรือ Greenwashing",
    accent: "red",
    stats: [
      { value: "MONTHS", labelEn: "Audit Cycle", labelTh: "รอบการตรวจสอบ" },
      { value: "MANUAL", labelEn: "Data Handling", labelTh: "การจัดการข้อมูล" },
      { value: "HIGH", labelEn: "Error Risk", labelTh: "ความเสี่ยงผิดพลาด" },
    ],
  },
  ai: {
    image: "/VEKIN Resource all Product/VEKIN 3/AI_Right.png",
    sideLabel: "AI Right",
    labelEn: "Intelligent Verification",
    labelTh: "การตรวจสอบอัจฉริยะ",
    titleEn: "AI",
    titleTh: "AI",
    copyEn:
      "VEKIN turns verification into a real-time AI workflow. It reduces operating cost, lowers greenwashing risk, and converts environmental performance into trusted digital assets for finance and carbon markets.",
    copyTh:
      "VEKIN เปลี่ยนการตรวจสอบให้เป็นกระบวนการ AI แบบเรียลไทม์ ช่วยลดต้นทุนการดำเนินงาน ลดความเสี่ยง Greenwashing และเปลี่ยนผลลัพธ์ด้านสิ่งแวดล้อมให้เป็นสินทรัพย์ดิจิทัลที่น่าเชื่อถือสำหรับการเงินและตลาดคาร์บอน",
    accent: "green",
    stats: [
      { value: "REAL-TIME", labelEn: "Verification", labelTh: "การตรวจสอบ" },
      { value: "95%", labelEn: "AI Accuracy", labelTh: "ความแม่นยำของ AI" },
      { value: "80%", labelEn: "Lower Cost", labelTh: "ลดต้นทุน" },
    ],
  },
} as const;

type PanelId = keyof typeof detailPanels;

const accentClasses = {
  red: {
    chip: "border-red-300/30 bg-red-500/10 text-red-100",
    stat: "text-red-100",
    glow: "bg-[radial-gradient(circle_at_28%_24%,rgba(239,68,68,0.24),transparent_36%)]",
    line: "bg-red-300",
  },
  green: {
    chip: "border-[#44e5d0]/35 bg-[#44e5d0]/10 text-[#73f3df]",
    stat: "text-[#44e5d0]",
    glow: "bg-[radial-gradient(circle_at_72%_24%,rgba(52,211,153,0.24),transparent_36%)]",
    line: "bg-[#44e5d0]",
  },
} as const;

export default function A_Segment3() {
  const [activePanel, setActivePanel] = useState<PanelId | null>(null);
  const panel = activePanel ? detailPanels[activePanel] : null;
  const accent = panel ? accentClasses[panel.accent] : null;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#020706] pb-16 pt-0 text-white sm:pb-20"
    >
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[720px] overflow-hidden bg-black shadow-[0_28px_90px_rgba(0,0,0,0.44)]"
        >
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
            <button
              type="button"
              onClick={() => setActivePanel("traditional")}
              className="group relative min-h-[360px] overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200 md:min-h-0"
              aria-label="Show traditional audit information"
            >
              <img
                src={detailPanels.traditional.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105 group-hover:opacity-92"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58),rgba(0,0,0,0.2)_70%,rgba(0,0,0,0.58))]" />
              <div className="absolute bottom-5 left-5 z-10 rounded-full border border-red-200/25 bg-black/35 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-red-100 backdrop-blur-md sm:bottom-8 sm:left-8">
                <LocalizedText th="มนุษย์" en="Human Left" />
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActivePanel("ai")}
              className="group relative min-h-[360px] overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#44e5d0] md:min-h-0"
              aria-label="Show AI audit information"
            >
              <img
                src={detailPanels.ai.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105 group-hover:opacity-92"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58),rgba(0,0,0,0.2)_30%,rgba(0,0,0,0.58))]" />
              <div className="absolute bottom-5 right-5 z-10 rounded-full border border-[#44e5d0]/30 bg-black/35 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#73f3df] backdrop-blur-md sm:bottom-8 sm:right-8">
                <LocalizedText th="AI" en="AI Right" />
              </div>
            </button>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(68,229,208,0.18),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.74)_78%,rgba(0,0,0,0.9))]" />
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-white/18 md:block" />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 text-center"
          >
            <div className="max-w-4xl">
              <div className="mx-auto mb-5 inline-flex rounded-full border border-[#44e5d0]/35 bg-black/40 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df] backdrop-blur-md">
                <LocalizedText th="เลือกฝั่ง" en="Choose a side" />
              </div>
              <LocalizedText
                as="h2"
                th="การตรวจสอบแบบเดิมเทียบกับความน่าเชื่อถือจาก AI"
                en="Traditional Audit vs AI Trust"
                className="text-4xl font-black uppercase leading-[0.9] tracking-normal sm:text-6xl lg:text-7xl"
              />
              <LocalizedText
                as="p"
                th="คลิกฝั่งมนุษย์เพื่อดูข้อมูลการตรวจสอบแบบเดิม หรือคลิกฝั่ง AI เพื่อดูข้อมูลการตรวจสอบด้วย AI"
                en="Click Human Left for the Traditional workflow, or AI Right for the AI verification story."
                className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-relaxed text-white/74 sm:text-base"
              />
            </div>
          </motion.div>

          <AnimatePresence>
            {panel && accent && (
              <motion.div
                key={activePanel}
                initial={{ opacity: 0, x: activePanel === "traditional" ? -120 : 120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: activePanel === "traditional" ? -120 : 120 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-20"
              >
                <img
                  src={panel.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-82"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.72)_56%,rgba(0,0,0,0.96))]" />
                <div className={`absolute inset-0 ${accent.glow}`} />

                <button
                  type="button"
                  onClick={() => setActivePanel(null)}
                  className="absolute right-5 top-5 z-30 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/78 backdrop-blur-md transition hover:border-[#44e5d0]/60 hover:text-[#44e5d0]"
                >
                  <LocalizedText th="กลับ" en="Back" />
                </button>

                <div className="relative z-10 flex min-h-[720px] flex-col justify-end p-5 pt-24 sm:p-8 lg:p-10">
                  <div className={`mb-5 inline-flex w-fit rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] ${accent.chip}`}>
                    <LocalizedText th={panel.labelTh} en={panel.labelEn} />
                  </div>
                  <LocalizedText
                    as="h3"
                    th={panel.titleTh}
                    en={panel.titleEn}
                    className="text-5xl font-black uppercase leading-[0.88] tracking-normal sm:text-7xl lg:text-8xl"
                  />
                  <LocalizedText
                    as="p"
                    th={panel.copyTh}
                    en={panel.copyEn}
                    className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/76 sm:text-base lg:text-lg"
                  />

                  <div className="mt-7 grid max-w-2xl grid-cols-3 gap-3">
                    {panel.stats.map((item) => (
                      <div
                        key={item.labelEn}
                        className="rounded-[8px] border border-white/12 bg-white/[0.08] px-3 py-4 backdrop-blur-sm"
                      >
                        <p className={`text-base font-black uppercase leading-none ${accent.stat} sm:text-xl`}>
                          {item.value}
                        </p>
                        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-white/58">
                          <LocalizedText as="span" th={item.labelTh} en={item.labelEn} />
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className={`mt-7 h-1 w-16 rounded-full ${accent.line} shadow-[0_0_22px_rgba(68,229,208,0.45)]`} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
