"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import { useSiteLanguage } from "../components/siteLanguage";
import { packageTiers } from "../components/packagesData";

/** Whole-baht formatting, e.g. ฿45,000 — these services are not priced in satang. */
const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "THB",
  currencyDisplay: "narrowSymbol",
  maximumFractionDigits: 0
});

/** Accent per tier, matching the packages modal so the two read as one system. */
const accents = [
  { glow: "bg-emerald-400/25", dot: "bg-emerald-300", border: "hover:border-emerald-300/45" },
  { glow: "bg-teal-400/25", dot: "bg-teal-300", border: "hover:border-teal-300/45" },
  { glow: "bg-amber-300/25", dot: "bg-amber-300", border: "hover:border-amber-200/45" }
];

const copy = {
  th: {
    eyebrow: "VEKIN NEXUS",
    titleLead: "แพคเกจ",
    titleAccent: "สำหรับงานของคุณ",
    intro:
      "เลือกระดับที่เหมาะกับงานของคุณ ตั้งแต่การวัดคาร์บอนพื้นฐาน ไปจนถึงการทวนสอบและประสบการณ์ความยั่งยืนแบบเต็มรูปแบบ แต่ละระดับต่อยอดจากระดับก่อนหน้า",
    includes: "รวมทุกอย่างใน",
    priceFrom: "เริ่มต้น",
    priceUnit: "ต่อหนึ่งงาน",
    priceNote: "ราคาโดยประมาณ ราคาสุดท้ายขึ้นอยู่กับขนาดและขอบเขตของงาน",
    cta: "ขอใบเสนอราคา",
    tierCta: "สอบถามแพคเกจนี้",
    helpTitle: "ไม่แน่ใจว่าแพคเกจไหนเหมาะกับคุณ",
    helpBody:
      "บอกรายละเอียดงานของคุณกับเรา แล้วทีมงานจะแนะนำระดับที่เหมาะสมพร้อมใบเสนอราคา",
    helpCta: "ติดต่อเรา"
  },
  en: {
    eyebrow: "VEKIN NEXUS",
    titleLead: "Packages",
    titleAccent: "for your event",
    intro:
      "Pick the tier that fits your event — from baseline carbon measurement through to verification and a full immersive sustainability experience. Each tier builds on the one before it.",
    includes: "Everything in",
    priceFrom: "From",
    priceUnit: "per event",
    priceNote: "Indicative pricing. Final quotation depends on the size and scope of your event.",
    cta: "Get Quotation",
    tierCta: "Ask about this tier",
    helpTitle: "Not sure which tier fits?",
    helpBody:
      "Tell us about your event and we'll recommend the right tier and put a quotation together.",
    helpCta: "Contact us"
  }
};

export default function PackagesClient() {
  const { language } = useSiteLanguage();
  const t = copy[language];

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#04120f] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(1100px 620px at 12% -8%, rgba(59,185,123,0.22), transparent 60%), radial-gradient(900px 620px at 92% 4%, rgba(0,181,159,0.16), transparent 62%), radial-gradient(1200px 900px at 50% 112%, rgba(0,70,78,0.55), transparent 66%)"
          }}
        />

        {/* ---------------------------------------------------------- hero */}
        <section className="relative z-10 mx-auto flex max-w-[1240px] flex-col items-center px-6 pt-32 text-center sm:pt-40">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7BE4B4]"
          >
            {t.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-3xl text-[clamp(2.2rem,6vw,4.4rem)] font-semibold leading-[1] tracking-[-0.03em]"
          >
            {t.titleLead}{" "}
            <span className="bg-gradient-to-r from-[#3BB97B] via-[#43dcae] to-[#00b59f] bg-clip-text text-transparent">
              {t.titleAccent}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            {t.intro}
          </motion.p>
        </section>

        {/* ------------------------------------------------------- tiers */}
        <section className="relative z-10 mx-auto mt-16 max-w-[1240px] px-6 sm:mt-20">
          <div className="grid gap-6 md:grid-cols-3">
            {packageTiers.map((tier, index) => {
              const accent = accents[index % accents.length];

              return (
                <motion.article
                  key={tier.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:p-8 ${accent.border}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${accent.glow}`}
                  />

                  <span className="relative text-[11px] font-bold tracking-[0.28em] text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="relative mt-3 text-xl font-extrabold leading-snug tracking-[-0.01em] text-white sm:text-2xl">
                    {tier.title[language]}
                  </h2>

                  {tier.priceFrom && (
                    <p className="relative mt-4 flex flex-wrap items-baseline gap-x-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                        {t.priceFrom}
                      </span>
                      <span className="text-2xl font-extrabold tracking-tight text-[#7BE4B4] sm:text-3xl">
                        {priceFormatter.format(tier.priceFrom)}
                      </span>
                      <span className="text-[12px] text-white/45">{t.priceUnit}</span>
                    </p>
                  )}

                  <div className="relative mt-5 h-px w-full bg-white/10" />

                  {tier.inherits && (
                    <p className="relative mt-5 rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-[13px] font-medium leading-snug text-white/70">
                      <span className="text-emerald-300/90">{t.includes}</span>{" "}
                      {tier.inherits[language]}
                    </p>
                  )}

                  <ul className="relative mt-5 flex flex-1 flex-col gap-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature.en}
                        className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-[8px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${accent.dot}`}
                        />
                        <span>{feature[language]}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="relative mt-7 inline-flex items-center justify-center rounded-full border border-[#3BB97B]/40 bg-[#3BB97B]/12 px-6 py-2.5 text-sm font-semibold text-[#7BE4B4] transition hover:border-[#3BB97B]/70 hover:bg-[#3BB97B]/22"
                  >
                    {t.tierCta}
                  </Link>
                </motion.article>
              );
            })}
          </div>

          <p className="mt-6 text-center text-[12px] text-white/35">{t.priceNote}</p>
        </section>

        {/* --------------------------------------------------------- CTA */}
        <section className="relative z-10 mx-auto mt-20 max-w-[1240px] px-6 pb-28">
          <div className="overflow-hidden rounded-3xl border border-[#3BB97B]/25 bg-gradient-to-br from-[#0a2a21] via-[#072019] to-[#04120f] p-8 text-center sm:p-14">
            <h2 className="mx-auto max-w-2xl text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
              {t.helpTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              {t.helpBody}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#3BB97B] px-8 py-3 text-[15px] font-semibold text-[#04120f] transition-colors duration-300 hover:bg-[#43dcae]"
            >
              {t.helpCta}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
