"use client";

import { motion } from "framer-motion";
import Bubble from "../Bubble";
import SectionCopy from "../SectionCopy";
import { useSiteLanguage } from "../siteLanguage";

export default function Segment1() {
  const { language } = useSiteLanguage();
  const copy = {
    th: {
      eyebrow: "Immersive Sustainability",
      title: "คืออะไร ?",
      lead: "เทคโนโลยีที่ผสานข้อมูลความยั่งยืนเข้ากับประสบการณ์หน้างาน เพื่อให้ผู้เข้าร่วมเห็นคุณค่าของการลดคาร์บอนได้อย่างเข้าใจง่าย",
      detail: "สร้างการรับรู้แบบมีส่วนร่วม พร้อมเปลี่ยนข้อมูลที่ซับซ้อนให้กลายเป็นเรื่องเล่าที่จับต้องได้"
    },
    en: {
      eyebrow: "Immersive Sustainability",
      title: "What is it?",
      lead: "Technology that blends sustainability data with on-site experiences, helping attendees understand the value of reducing carbon in a clear way.",
      detail: "Builds participatory awareness while turning complex data into something tangible and easy to understand."
    }
  }[language];

  return (
    <>
<>
  {/* VIDEO SECTION */}
<section className="w-full bg-white">
  <div className="relative w-full aspect-video">
    <iframe
      src="https://www.youtube.com/embed/1t-9dRvF8q8?autoplay=1&mute=1&loop=1&playlist=1t-9dRvF8q8&playsinline=1"
      title="Vekin Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 w-full h-full border-0"
    />
  </div>
</section>

  {/* SECOND SECTION: NOW SPANNING FULL SCREEN WIDTH */}
  {/* Changed max-w-[1180px] to w-full so background/bubbles span across the entire screen */}
  <motion.section
    initial={{ opacity: 0, y: 72 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
    className="relative w-full min-h-[480px] pt-16 text-center sm:pt-[110px] md:min-h-[680px] md:pt-[145px] overflow-hidden bg-black transform-gpu"
  >
    
    {/* DECORATIVE BUBBLES - Spanning out to the far edges of the window */}
    {/* On desktop, they now anchor relative to the full window edge instead of being boxed in */}
    <motion.div
      animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-16 top-[190px] h-36 w-36 sm:h-[250px] sm:w-[250px] md:-left-[40px] lg:-left-[86px]"
    >
      <Bubble className="inset-0 h-full w-full opacity-40 sm:opacity-100" />
    </motion.div>
    <motion.div
      animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
      transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      className="absolute -right-12 top-[116px] h-28 w-28 sm:h-[190px] sm:w-[190px] md:-right-[30px] lg:-right-[62px]"
    >
      <Bubble className="inset-0 h-full w-full opacity-40 sm:opacity-100" />
    </motion.div>
    <motion.div
      animate={{ y: [0, -12, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
      className="absolute left-1/2 -top-10 h-24 w-24 -translate-x-1/2 sm:left-[52%] sm:top-[-52px] sm:h-[170px] sm:w-[170px] sm:translate-x-0"
    >
      <Bubble className="inset-0 h-full w-full" />
    </motion.div>
    <motion.div
      animate={{ y: [0, 10, 0], x: [0, 6, 0], scale: [1, 0.96, 1] }}
      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
      className="absolute -bottom-6 left-4 h-12 w-12 sm:-bottom-8 sm:left-12 sm:h-[78px] sm:w-[78px] md:left-24"
    >
      <Bubble className="inset-0 h-full w-full" />
    </motion.div>
    
    {/* INNER CONTENT WRAPPER: Safely constraints text for optimal readability */}
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 1.15, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto max-w-[1180px] px-6 sm:px-8"
    >
      <SectionCopy eyebrow={copy.eyebrow} title={copy.title}>
        <p className="text-sm sm:text-base md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">{copy.lead}</p>
        <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-3xl mx-auto">{copy.detail}</p>
      </SectionCopy>
    </motion.div>

  </motion.section>
</>
    </>
  );
}
