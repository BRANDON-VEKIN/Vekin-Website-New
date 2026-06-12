"use client";

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
  <section className="w-full bg-white h-auto aspect-video sm:h-[370px] md:h-[520px]">
    <video
      className="h-full w-full object-cover"
      src="/videos/vekin-video.mp4"
      autoPlay
      muted
      loop
      playsInline
      controls
    >
      Your browser does not support the video tag.
    </video>
  </section>

  {/* SECOND SECTION: NOW SPANNING FULL SCREEN WIDTH */}
  {/* Changed max-w-[1180px] to w-full so background/bubbles span across the entire screen */}
  <section className="relative w-full min-h-[480px] pt-16 text-center sm:pt-[110px] md:min-h-[680px] md:pt-[145px] overflow-hidden bg-black">
    
    {/* DECORATIVE BUBBLES - Spanning out to the far edges of the window */}
    {/* On desktop, they now anchor relative to the full window edge instead of being boxed in */}
    <Bubble className="-left-16 top-[190px] h-36 w-36 sm:h-[250px] sm:w-[250px] md:-left-[40px] lg:-left-[86px] opacity-40 sm:opacity-100" />
    <Bubble className="-right-12 top-[116px] h-28 w-28 sm:h-[190px] sm:w-[190px] md:-right-[30px] lg:-right-[62px] opacity-40 sm:opacity-100" />
    <Bubble className="left-1/2 -translate-x-1/2 -top-10 h-24 w-24 sm:h-[170px] sm:w-[170px] sm:top-[-52px] sm:left-[52%] sm:translate-x-0" />
    <Bubble className="-bottom-6 left-4 h-12 w-12 sm:h-[78px] sm:w-[78px] sm:left-12 md:left-24 sm:-bottom-8" />
    
    {/* INNER CONTENT WRAPPER: Safely constraints text for optimal readability */}
    <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
      <SectionCopy eyebrow={copy.eyebrow} title={copy.title}>
        <p className="text-sm sm:text-base md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">{copy.lead}</p>
        <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-3xl mx-auto">{copy.detail}</p>
      </SectionCopy>
    </div>

  </section>
</>
    </>
  );
}
