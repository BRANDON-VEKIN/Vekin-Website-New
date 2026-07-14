"use client";

import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

const impactMetrics = [
  {
    th: ["ช่วย Offset", "ไปแล้ว", "33,000", "เมตริกตัน"],
    en: ["Offsetted", "so far", "33,000", "metric tons"]
  },
  {
    th: ["ช่วยประเมิน CO2", "มาแล้ว", "20", "งาน"],
    en: ["CO2 assessments", "completed", "20", "events"]
  },
  {
    th: ["เป็น Carbon", "nurture", "200", "งาน"],
    en: ["Carbon", "nurture", "200", "events"]
  }
];

export default function Segment9() {
  const { language } = useSiteLanguage();
  const copy = {
    th: {
      title1: "ให้ตัวเลข",
      title2: "ช่วยเล่าผลงาน",
      body: "ความยั่งยืนกำลังกลายเป็นจุดสนใจสำคัญในอุตสาหกรรมอีเวนต์ จากที่เคยเป็นเพียงคำที่ถูกพูดถึงทั่วไป สู่การเป็นความจำเป็นในอนาคต สถานที่จัดงานต้องให้ความสำคัญกับความยั่งยืนตั้งแต่วันนี้เพื่อคงความสามารถ ในการแข่งขันและตอบสนองต่อความต้องการที่กำลังจะเกิดขึ้น"
    },
    en: {
      title1: "Let numbers",
      title2: "tell the story",
      body: "Sustainability is becoming a major focus in the events industry. What was once just a commonly mentioned term is now becoming a future necessity. Venues must prioritize sustainability today to stay competitive and meet rising expectations."
    }
  }[language];

  return (
<BidirectionalScrollReveal
  amount={0.12}
  duration={1.35}
  className="relative overflow-hidden bg-black px-4 pb-20 pt-20 text-center text-white transform-gpu sm:px-8 sm:pb-36 sm:pt-32"
>
  {/* Ambient background bubble */}
  <motion.img
    src="/VEKIN Resource all Product/VEKIN 1/Group.png"
    alt=""
    animate={{ y: [0, -18, 0], x: [0, 10, 0], scale: [1, 1.04, 1] }}
    transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.08, rotate: -3 }}
    className="pointer-events-auto absolute -left-24 top-10 z-0 w-56 opacity-55 sm:-left-20 sm:top-8 sm:w-80 lg:-left-10 lg:top-14 lg:w-[380px]"
  />

  <div className="relative z-10 mx-auto max-w-[1120px]">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.45 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-tight leading-[1.1] sm:leading-[1.04]"
    >
      <span className="block text-ember">{copy.title1}</span>
      <span className="mt-2 block text-white sm:mt-4">{copy.title2}</span>
    </motion.h2>

    {/* Impact Metrics Grid */}
    <div className="mx-auto mt-12 grid max-w-[940px] grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-3 sm:gap-0">
      {impactMetrics.map((metric, index) => {
        const [lineOne, lineTwo, value, unit] = metric[language];

        return (
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col items-center justify-between px-4 py-4 sm:px-8 sm:py-0
              ${index > 0 ? "border-t border-white/10 pt-8 sm:border-l-2 sm:border-t-0 sm:border-white/80" : ""}
            `}
          >
            {/* Metric Labels */}
            <p className="text-[clamp(1.2rem,4vw,1.8rem)] font-medium leading-snug text-white/90">
              {lineOne}
              {lineTwo && (
                <>
                  <br />
                  {lineTwo}
                </>
              )}
            </p>

            {/* Metric Numbers */}
            <div className="mt-6 sm:mt-8">
              <p className="text-[clamp(3.5rem,10vw,4.5rem)] font-black leading-none text-[#ffc04d] tracking-tight">
                {value}
              </p>
              <p className="mt-1 text-[clamp(1.3rem,4vw,1.8rem)] font-bold uppercase tracking-wide text-[#ffc04d]/90">
                {unit}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Body Copy */}
    <motion.p
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.45 }}
      transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto mt-12 max-w-[760px] px-2 text-[clamp(1rem,2.2vw,1.25rem)] leading-relaxed text-white/80 sm:mt-20"
    >
      {copy.body}
    </motion.p>

    {/* Feature Image */}
    <motion.div
      initial={{ opacity: 0, y: 44, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.24 }}
      transition={{ duration: 1.05, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto mt-12 max-w-[1080px] overflow-hidden rounded-2xl border border-white/10 sm:mt-24 sm:rounded-[24px]"
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 1/island_img.png"
        alt="Green island landscape representing carbon impact"
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
      />
    </motion.div>
  </div>
</BidirectionalScrollReveal>
  );
}
