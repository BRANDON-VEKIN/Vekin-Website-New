"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { useSiteLanguage } from "../components/siteLanguage";

type Localized = { th: string; en: string };

/* ------------------------------------------------------------------ */
/*  Content (verbatim from vekin.tech/about, with Thai translations)  */
/* ------------------------------------------------------------------ */

const hero = {
  eyebrow: { th: "เกี่ยวกับ VEKIN", en: "About VEKIN" } as Localized,
  titleTop: { th: "เทคโนโลยีเชิงลึก", en: "Deep Tech" } as Localized,
  titleBottom: { th: "เพื่อความยั่งยืน", en: "for Sustainability" } as Localized,
  lead: {
    th: "VEKIN นำโซลูชันเทคโนโลยีเชิงลึก—ผสาน AI และบล็อกเชน—มาช่วยให้องค์กรวัดผล ตรวจสอบ และยกระดับประสิทธิภาพด้านความยั่งยืนได้อย่างแม่นยำ",
    en: "VEKIN leverages deep-tech solutions—integrating AI and blockchain—to empower organizations in accurately measuring, verifying, and enhancing their sustainability performance.",
  } as Localized,
};

const stats: { value: string; label: Localized }[] = [
  { value: "6", label: { th: "โซลูชันหลัก", en: "Core Solutions" } },
  { value: "6", label: { th: "การรับรอง ISO", en: "ISO Certifications" } },
  { value: "AI + ⛓", label: { th: "ขับเคลื่อนด้วยเทคโนโลยีเชิงลึก", en: "Deep-Tech Powered" } },
  { value: "100%", label: { th: "ข้อมูลที่ตรวจสอบได้", en: "Verifiable Data" } },
];

const vision = {
  kicker: { th: "วิสัยทัศน์ของผู้ก่อตั้ง", en: "Founder's Vision" } as Localized,
  quote: {
    th: "เมื่อผมก่อตั้ง VEKIN ผมวาดภาพโลกที่ความยั่งยืนไม่ใช่เรื่องที่คิดทีหลัง แต่เป็นรากฐานของทุกการตัดสินใจทางธุรกิจ ด้วยพลังของ AI ที่ล้ำสมัย เสริมความน่าเชื่อถือด้วยการตรวจสอบผ่านบล็อกเชน และยึดมั่นในมาตรฐานระดับสากลอย่างไม่ลดละ เราจึงเปลี่ยนข้อมูลสิ่งแวดล้อมดิบให้กลายเป็นข้อมูลเชิงลึกที่แม่นยำและนำไปปฏิบัติได้จริง วิสัยทัศน์ของผมคือการเสริมพลังให้องค์กรทั่วโลกบรรลุความก้าวหน้าด้านสิ่งแวดล้อมที่วัดผลได้ โปร่งใส และยั่งยืน ที่ VEKIN เราเชื่อว่าเราจะร่วมกันนิยามความสำเร็จขึ้นใหม่ได้—ทีละคาร์บอนฟุตพรินต์ที่รับรู้ ทีละคาร์บอนเครดิตที่ผ่านการตรวจสอบ ทีละหมุดหมายของการลดคาร์บอน และทีละทางเลือกที่รับผิดชอบต่อโลก",
    en: "When I founded VEKIN, I envisioned a world where sustainability is not an afterthought, but the foundation of every business decision. Driven by cutting-edge AI, fortified by the trust of blockchain verification, and guided by a relentless commitment to global standards, we set out to transform raw environmental data into precise, actionable intelligence. My vision is to empower organizations everywhere to achieve measurable, transparent, and lasting environmental progress. At VEKIN, we believe that together, we can redefine what it means to be successful — one recognized carbon footprint, one verified carbon credit, one decarbonization milestone, and one responsible choice at a time.",
  } as Localized,
  attribution: { th: "ผู้ก่อตั้งและประธานเจ้าหน้าที่บริหาร VEKIN", en: "Founder & CEO, VEKIN" } as Localized,
};

const differentiators: {
  icon: string;
  title: Localized;
  body: Localized;
}[] = [
  {
    icon: "M12 3l2.2 5.8L20 9.3l-4.5 3.7L17 19l-5-3.4L7 19l1.5-6L4 9.3l5.8-.5z",
    title: {
      th: "ข้อมูลเชิงลึกด้านคาร์บอนที่นำไปใช้ได้จริง ด้วยเทคโนโลยีเชิงลึก",
      en: "Actionable Carbon Insights by Deep Tech",
    },
    body: {
      th: "AI เปลี่ยนข้อมูลสิ่งแวดล้อมดิบให้กลายเป็นข้อมูลเชิงลึกที่แม่นยำและพร้อมนำไปตัดสินใจ",
      en: "AI turns raw environmental data into precise intelligence you can act on with confidence.",
    },
  },
  {
    icon: "M12 2l7 3v6c0 4.5-3 8.3-7 9.5C8 19.3 5 15.5 5 11V5l7-3zm-1 12.5l5-5-1.4-1.4L11 11.7 9.4 10 8 11.4z",
    title: {
      th: "ข้อมูลที่ผ่านการตรวจสอบ น่าเชื่อถือ และสอดคล้องมาตรฐาน",
      en: "Verified, Trustworthy & Compliant Data",
    },
    body: {
      th: "บล็อกเชนและมาตรฐานสากลรับประกันความถูกต้อง แก้ไขไม่ได้ และพร้อมสำหรับการกำกับดูแล",
      en: "Blockchain and global standards guarantee accuracy, tamper-proofing, and regulatory readiness.",
    },
  },
  {
    icon: "M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z",
    title: {
      th: "ประสบการณ์ใช้งานที่ออกแบบเพื่อผู้คน",
      en: "Human-Centered User Experience",
    },
    body: {
      th: "ออกแบบให้ใช้งานง่ายและเข้าใจได้ ทำให้ความยั่งยืนเข้าถึงได้สำหรับทุกทีม",
      en: "Designed to be intuitive and clear, making sustainability approachable for every team.",
    },
  },
  {
    icon: "M4 13h6v7H4v-7zm5-9h6v16H9V4zm5 4h6v12h-6V8z",
    title: {
      th: "เชื่อมต่อได้ราบรื่นและขยายผลได้",
      en: "Seamless Integration & Scalability",
    },
    body: {
      th: "เชื่อมต่อเข้ากับระบบเดิมได้อย่างลื่นไหล และเติบโตไปพร้อมกับองค์กรของคุณ",
      en: "Connects smoothly with your existing systems and grows alongside your organization.",
    },
  },
];

const solutions: { name: string; tag: Localized; href?: string }[] = [
  {
    name: "DEMP",
    tag: { th: "แพลตฟอร์มจัดการการปล่อยคาร์บอนดิจิทัล", en: "Digital Emission Management Platform" },
  },
  {
    name: "DAP",
    tag: { th: "แดชบอร์ดวิเคราะห์ข้อมูลคาร์บอนแบบรวมศูนย์", en: "Unified carbon data & analytics dashboard" },
    href: "/dap_new",
  },
  {
    name: "CERO",
    tag: { th: "การจัดการคาร์บอนเครดิตแบบครบวงจร", en: "End-to-end carbon credit management" },
  },
  {
    name: "AI Carbon Auditor",
    tag: { th: "ตรวจสอบพลังงานและคาร์บอนอัตโนมัติด้วย AI", en: "Automated AI energy & carbon auditing" },
    href: "/auditor",
  },
  {
    name: "Carbon Receipt",
    tag: { th: "หลักฐานการปล่อยคาร์บอนบนบล็อกเชน", en: "Tamper-proof emission records on blockchain" },
    href: "/new_ec",
  },
  {
    name: "Validate & Verify",
    tag: {
      th: "การตรวจสอบและรับรองอย่างเป็นธรรม สม่ำเสมอ และปราศจากอคติ",
      en: "Verification conducted fairly, consistently, and without bias",
    },
  },
];

const aboutAssetBase = "/VEKIN Resource all Product/VEKIN About";

const leaders: { name: string; role: Localized; bio: Localized; photo: string }[] = [
  {
    name: "Arnut Suptaweekul",
    role: { th: "ประธานเจ้าหน้าที่ฝ่ายปฏิบัติการ", en: "Chief Operating Officer" },
    bio: {
      th: "ประสบการณ์กว่า 20 ปีในการบริหาร SCG และอีกกว่าทศวรรษในตำแหน่งผู้นำระดับบริหาร",
      en: "Over 20 years of expertise in SCG administration and an additional decade in executive leadership.",
    },
    photo: `${aboutAssetBase}/COO.png`,
  },
  {
    name: "Dr. Ekasit Phermphoonphiphat",
    role: { th: "ประธานเจ้าหน้าที่ฝ่ายเทคโนโลยี", en: "Chief Technology Officer" },
    bio: {
      th: "ปริญญาเอกด้านปัญญาประดิษฐ์จากมหาวิทยาลัยโอซาก้า พร้อมประสบการณ์ AI และเทคโนโลยีเชิงลึกที่กว้างขวาง",
      en: "Holds a Ph.D in Artificial Intelligence from Osaka University with extensive AI and Deep Tech experience.",
    },
    photo: `${aboutAssetBase}/CTO.png`,
  },
  {
    name: "Vasin Vongcharoenrat",
    role: { th: "ประธานเจ้าหน้าที่ฝ่ายพาณิชย์", en: "Chief Commercial Officer" },
    bio: {
      th: "ปริญญาโทด้านการพัฒนาธุรกิจจากมหาวิทยาลัยแบรนไดส์ และประสบการณ์ 10 ปีในสายงานการค้า",
      en: "Holds a Master's Degree in Business Development from Brandeis University and 10 years in commercialization.",
    },
    photo: `${aboutAssetBase}/CCO.png`,
  },
  {
    name: "Somkiet Siripattananun",
    role: { th: "กรรมการ", en: "Director" },
    bio: {
      th: "กรรมการบริษัท ผู้ร่วมกำกับทิศทางเชิงกลยุทธ์ของ VEKIN",
      en: "Company Director, helping steer VEKIN's strategic direction.",
    },
    photo: `${aboutAssetBase}/Director.png`,
  },
];

const committee = {
  kicker: { th: "การกำกับดูแล", en: "Governance" } as Localized,
  title: { th: "คณะกรรมการความเป็นกลาง", en: "Impartiality Committee" } as Localized,
  body: {
    th: "คณะผู้เชี่ยวชาญอิสระ 4 ท่าน ที่กำกับให้ทุกกิจกรรมการตรวจสอบและรับรองดำเนินไปอย่างเป็นธรรม สม่ำเสมอ และปราศจากอคติ",
    en: "Four independent experts who ensure that all verification and auditing activities are conducted fairly, consistently, and without bias.",
  } as Localized,
  members: [
    { name: "Natee Sithiprasasana", photo: `${aboutAssetBase}/Natee Sithiprasasana.png` },
    { name: "Witsarut Duangchinda", photo: `${aboutAssetBase}/Witsarut Duangchinda.png` },
    { name: "Pornarun Suwanplai", photo: `${aboutAssetBase}/Pornarun Suwanplai.png` },
    { name: "Suvit Toraninpanich", photo: `${aboutAssetBase}/Suvit Toraninpanich.png` },
  ],
};

const certifications: { code: string; desc: Localized }[] = [
  { code: "ISO 9001", desc: { th: "การจัดการคุณภาพ", en: "Quality Management" } },
  { code: "ISO 14001", desc: { th: "การจัดการสิ่งแวดล้อม", en: "Environmental Management" } },
  { code: "ISO 14065", desc: { th: "การตรวจสอบก๊าซเรือนกระจก", en: "GHG Validation & Verification" } },
  { code: "ISO 17029", desc: { th: "หน่วยตรวจสอบความสอดคล้อง", en: "Conformity Assessment" } },
  { code: "ISO 27001", desc: { th: "ความมั่นคงปลอดภัยสารสนเทศ", en: "Information Security" } },
  { code: "ISO 29110", desc: { th: "วิศวกรรมซอฟต์แวร์", en: "Software Engineering" } },
];

/* ------------------------------------------------------------------ */
/*  Reveal helper                                                     */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#3BB97B]/30 bg-[#3BB97B]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7BE4B4]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#3BB97B]" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  const { language } = useSiteLanguage();
  const t = (value: Localized) => value[language];

  const heroRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.3 });

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const handleMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      setPointer({
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      });
    };

    element.addEventListener("mousemove", handleMove);
    return () => element.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#04120f] text-white">
        {/* ambient background glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(1100px 620px at 12% -8%, rgba(59,185,123,0.22), transparent 60%), radial-gradient(900px 620px at 92% 4%, rgba(0,181,159,0.16), transparent 62%), radial-gradient(1200px 900px at 50% 108%, rgba(0,70,78,0.55), transparent 66%)",
          }}
        />

        {/* ============================ HERO ============================ */}
        <section
          ref={heroRef}
          className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1180px] flex-col items-center justify-center px-6 pb-24 pt-40 text-center sm:pt-44"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl transition-transform duration-300 ease-out"
            style={{
              background:
                "radial-gradient(circle, rgba(59,185,123,0.45), rgba(0,181,159,0.12) 55%, transparent 72%)",
              transform: `translate(calc(-50% + ${(pointer.x - 0.5) * 60}px), calc(-50% + ${(pointer.y - 0.5) * 60}px))`,
            }}
          />

          <Reveal>
            <SectionKicker>{t(hero.eyebrow)}</SectionKicker>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-[clamp(2.7rem,8vw,6.2rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
          >
            <span className="block">{t(hero.titleTop)}</span>
            <span className="block bg-gradient-to-r from-[#3BB97B] via-[#43dcae] to-[#00b59f] bg-clip-text text-transparent">
              {t(hero.titleBottom)}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {t(hero.lead)}
          </motion.p>

          {/* stats */}
          <Reveal
            delay={0.42}
            className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={t(stat.label)} className="bg-white/[0.02] px-4 py-6">
                <div className="bg-gradient-to-r from-[#7BE4B4] to-[#00b59f] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[11px] font-medium leading-tight text-white/55 sm:text-xs">
                  {t(stat.label)}
                </div>
              </div>
            ))}
          </Reveal>
        </section>

        {/* ========================= FOUNDER VISION ========================= */}
        <section className="relative z-10 mx-auto max-w-[1000px] px-6 py-24">
          <Reveal className="text-center">
            <SectionKicker>{t(vision.kicker)}</SectionKicker>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <figure className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-md sm:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#3BB97B]/20 blur-3xl"
              />
              <span className="block font-serif text-7xl leading-none text-[#3BB97B]/40">
                &ldquo;
              </span>
              <blockquote className="-mt-6 text-lg font-light leading-relaxed text-white/85 sm:text-2xl sm:leading-relaxed">
                {t(vision.quote)}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#00464E] to-[#3BB97B] ring-1 ring-white/20">
                  <img
                    src={`${aboutAssetBase}/CEO.png`}
                    alt={t(vision.attribution)}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="text-sm font-medium text-[#7BE4B4]">
                  {t(vision.attribution)}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </section>

        {/* ======================= DIFFERENTIATORS ======================= */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 py-16">
          <Reveal className="max-w-2xl">
            <SectionKicker>
              {language === "th" ? "จุดเด่นของเรา" : "Why VEKIN"}
            </SectionKicker>
            <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em]">
              {language === "th" ? "สิ่งที่ทำให้เราแตกต่าง" : "What makes us different"}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {differentiators.map((item, index) => (
              <Reveal key={t(item.title)} delay={index * 0.08}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#3BB97B]/40 hover:bg-white/[0.06]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3BB97B] to-[#00b59f] shadow-[0_10px_30px_rgba(59,185,123,0.35)]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-white"
                      aria-hidden="true"
                    >
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-snug text-white">
                    {t(item.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {t(item.body)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* =========================== SOLUTIONS =========================== */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 py-16">
          <Reveal className="max-w-2xl">
            <SectionKicker>
              {language === "th" ? "แพลตฟอร์ม" : "The Platform"}
            </SectionKicker>
            <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em]">
              {language === "th" ? "โซลูชันหลักของเรา" : "Our core solutions"}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, index) => {
              const card = (
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#3BB97B]/40 hover:bg-white/[0.06]">
                  <span className="text-[13px] font-semibold text-[#7BE4B4]/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em] text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {t(item.tag)}
                  </p>
                  {item.href && (
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#3BB97B] opacity-0 transition group-hover:opacity-100">
                      {language === "th" ? "เรียนรู้เพิ่มเติม" : "Learn more"}
                      <span aria-hidden="true">→</span>
                    </span>
                  )}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#3BB97B]/10 blur-2xl transition group-hover:bg-[#3BB97B]/25"
                  />
                </div>
              );

              return (
                <Reveal key={item.name} delay={index * 0.06}>
                  {item.href ? (
                    <Link href={item.href} className="block h-full">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ============================ LEADERSHIP ============================ */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 py-16">
          <Reveal className="max-w-2xl">
            <SectionKicker>
              {language === "th" ? "ทีมของเรา" : "Our People"}
            </SectionKicker>
            <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em]">
              {language === "th" ? "ทีมผู้บริหาร" : "Leadership team"}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, index) => (
              <Reveal key={leader.name} delay={index * 0.08}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#3BB97B]/40 hover:bg-white/[0.06]">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-[#00464E] to-[#3BB97B] ring-1 ring-white/20 ring-offset-2 ring-offset-[#04120f]">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-snug text-white">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#7BE4B4]">
                    {t(leader.role)}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/55">
                    {t(leader.bio)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============================ COMMITTEE ============================ */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 py-16">
          <Reveal>
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#00464E]/40 to-white/[0.02] p-8 backdrop-blur-md sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <SectionKicker>{t(committee.kicker)}</SectionKicker>
                  <h2 className="mt-6 text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-tight tracking-[-0.02em]">
                    {t(committee.title)}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                    {t(committee.body)}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {committee.members.map((member) => (
                    <div
                      key={member.name}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                    >
                      <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#3BB97B]/15 ring-1 ring-white/15">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span className="text-sm font-medium leading-snug text-white/85">
                        {member.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ========================= CERTIFICATIONS ========================= */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 py-16">
          <Reveal className="text-center">
            <SectionKicker>
              {language === "th" ? "มาตรฐานสากล" : "Global Standards"}
            </SectionKicker>
            <h2 className="mx-auto mt-6 max-w-xl text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em]">
              {language === "th" ? "การรับรองมาตรฐานที่เราถือครอง" : "Certifications we hold"}
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {certifications.map((cert, index) => (
              <Reveal key={cert.code} delay={index * 0.05}>
                <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#3BB97B]/40 hover:bg-white/[0.06]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3BB97B]/30 bg-[#3BB97B]/10 transition group-hover:bg-[#3BB97B]/20">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-[#7BE4B4]" aria-hidden="true">
                      <path d="M12 1l3 2.5L19 3l.9 4L23 9l-2 3.4L23 16l-3.1 2L19 22l-4-.5L12 24l-3-2.5L5 22l-.9-4L1 16l2-3.6L1 9l3.1-2L5 3l4 .5z" />
                      <path d="M11 14.2l-2.3-2.3-1.4 1.4L11 17l6-6-1.4-1.4z" className="fill-[#04120f]" />
                    </svg>
                  </div>
                  <div className="mt-4 text-sm font-bold text-white">{cert.code}</div>
                  <div className="mt-1 text-[11px] leading-tight text-white/50">
                    {t(cert.desc)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="pb-12" />
      </main>
    </>
  );
}
