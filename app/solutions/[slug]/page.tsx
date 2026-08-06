"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import { useSiteLanguage } from "../../components/siteLanguage";
import { solutions, getSolution } from "../solutionsData";

const featureIcons = [
  "M12 3l2.2 5.8L20 9.3l-4.5 3.7L17 19l-5-3.4L7 19l1.5-6L4 9.3l5.8-.5z",
  "M12 2l7 3v6c0 4.5-3 8.3-7 9.5C8 19.3 5 15.5 5 11V5l7-3zm-1 12.5l5-5-1.4-1.4L11 11.7 9.4 10 8 11.4z",
  "M4 13h6v7H4v-7zm5-9h6v16H9V4zm5 4h6v12h-6V8z",
  "M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l5 3 1-1.7-4-2.3V7z",
  "M3 3h18v4H3V3zm0 7h12v4H3v-4zm0 7h18v4H3v-4z",
  "M12 1l3 2.5L19 3l.9 4L23 9l-2 3.4L23 16l-3.1 2L19 22l-4-.5L12 24l-3-2.5L5 22l-.9-4L1 16l2-3.6L1 9l3.1-2L5 3l4 .5z",
];

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

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const { language } = useSiteLanguage();
  const solution = slug ? getSolution(slug) : undefined;

  if (!solution) {
    return (
      <>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#04120f] px-6 text-center text-white">
          <p className="text-lg text-white/70">
            {language === "th" ? "ไม่พบโซลูชันนี้" : "Solution not found."}
          </p>
          <Link
            href="/solutions"
            className="mt-6 rounded-full bg-[#3BB97B] px-6 py-3 text-sm font-semibold text-[#04120f]"
          >
            {language === "th" ? "กลับไปหน้าโซลูชัน" : "Back to Solutions"}
          </Link>
        </main>
      </>
    );
  }

  const index = solutions.findIndex((item) => item.slug === solution.slug);
  const prev = solutions[(index - 1 + solutions.length) % solutions.length];
  const next = solutions[(index + 1) % solutions.length];
  const accent = solution.accent;

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#04120f] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(1100px 620px at 12% -8%, rgba(59,185,123,0.18), transparent 60%), radial-gradient(1000px 700px at 90% 2%, rgba(0,181,159,0.14), transparent 62%), radial-gradient(1200px 900px at 50% 110%, rgba(0,70,78,0.5), transparent 66%)",
          }}
        />

        {/* ============================ HERO ============================ */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 pt-36 sm:pt-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[6%] top-24 -z-10 h-[420px] w-[420px] rounded-full opacity-40 blur-[110px]"
            style={{ background: accent }}
          />

          <Reveal>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-sm text-white/55 transition hover:text-white"
            >
              <span aria-hidden="true">←</span>
              {language === "th" ? "โซลูชันทั้งหมด" : "All Solutions"}
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Reveal delay={0.05}>
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
                  style={{ borderColor: `${accent}55`, backgroundColor: `${accent}18`, color: accent }}
                >
                  {solution.name}
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="mt-6 max-w-2xl text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
                  {solution.fullName[language]}
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
                  {solution.tagline[language]}
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full px-7 py-3 text-sm font-semibold text-[#04120f] shadow-lg transition hover:-translate-y-0.5"
                    style={{ background: `linear-gradient(90deg, ${accent}, #00b59f)` }}
                  >
                    {language === "th" ? "เริ่มต้นใช้งาน" : "Get Started"}
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {language === "th" ? "พูดคุยกับเรา" : "Talk to Us"}
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="order-first lg:order-last">
              <div
                className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-[36px] border border-white/15 sm:h-56 sm:w-56"
                style={{ background: `${accent}1a` }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[36px] blur-2xl"
                  style={{ background: `${accent}22` }}
                />
                <img
                  src={solution.icon}
                  alt={solution.name}
                  className="relative h-24 w-24 object-contain sm:h-32 sm:w-32"
                />
              </div>
            </Reveal>
          </div>

          {/* highlights */}
          {solution.highlights && (
            <Reveal delay={0.28}>
              <div className="mt-12 flex flex-wrap gap-3">
                {solution.highlights.map((highlight) => (
                  <span
                    key={highlight.en}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/75"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" style={{ fill: accent }} aria-hidden="true">
                      <path d="M9.5 16.2L5.3 12l-1.4 1.4 5.6 5.6L20.1 8.4 18.7 7z" />
                    </svg>
                    {highlight[language]}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
        </section>

        {/* ========================= DESCRIPTION ========================= */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 py-16">
          <Reveal>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 sm:p-12">
              <div className="flex items-center gap-3">
                <span className="h-px w-10" style={{ background: accent }} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>
                  {language === "th" ? "ภาพรวม" : "Overview"}
                </span>
              </div>
              <p className="mt-5 text-lg leading-relaxed text-white/80 sm:text-xl sm:leading-relaxed">
                {solution.description[language]}
              </p>
            </div>
          </Reveal>
        </section>

        {/* =========================== FEATURES =========================== */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 py-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: accent }}>
              {language === "th" ? "ความสามารถ" : "Capabilities"}
            </span>
            <h2 className="mt-4 text-[clamp(1.7rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-[-0.02em]">
              {language === "th" ? "สิ่งที่ทำให้แตกต่าง" : "What sets it apart"}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solution.features.map((feature, i) => (
              <Reveal key={feature.title.en} delay={(i % 3) * 0.06}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: `${accent}22` }}
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6" style={{ fill: accent }} aria-hidden="true">
                      <path d={featureIcons[i % featureIcons.length]} />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-snug text-white">
                    {feature.title[language]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {feature.body[language]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============================ STEPS ============================ */}
        {solution.steps && (
          <section className="relative z-10 mx-auto max-w-[1180px] px-6 py-16">
            <Reveal className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: accent }}>
                {language === "th" ? "ขั้นตอนการทำงาน" : "How it works"}
              </span>
              <h2 className="mt-4 text-[clamp(1.7rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-[-0.02em]">
                {language === "th" ? "จากข้อมูลสู่ผลลัพธ์" : "From data to results"}
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {solution.steps.map((step, i) => (
                <Reveal key={step.en} delay={i * 0.08}>
                  <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <span
                      className="text-3xl font-bold"
                      style={{ color: `${accent}` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-white">
                      {step[language]}
                    </h3>
                    {i < solution.steps!.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute right-5 top-6 hidden text-2xl text-white/20 lg:block"
                      >
                        →
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* =========================== BENEFITS =========================== */}
        {solution.benefits && (
          <section className="relative z-10 mx-auto max-w-[1180px] px-6 py-16">
            <Reveal>
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
                <h2 className="text-[clamp(1.6rem,3.4vw,2.5rem)] font-semibold leading-tight tracking-[-0.02em]">
                  {language === "th" ? "สิ่งที่คุณจะได้รับ" : "What you gain"}
                </h2>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit.en} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        style={{ background: `${accent}22` }}
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" style={{ fill: accent }} aria-hidden="true">
                          <path d="M9.5 16.2L5.3 12l-1.4 1.4 5.6 5.6L20.1 8.4 18.7 7z" />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-white/75">{benefit[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </section>
        )}

        {/* ===================== PREV / NEXT NAV ===================== */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 pb-24 pt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/solutions/${prev.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <span className="text-xl text-white/40 transition group-hover:-translate-x-1" aria-hidden="true">
                ←
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-wide text-white/40">
                  {language === "th" ? "ก่อนหน้า" : "Previous"}
                </span>
                <span className="mt-0.5 block truncate text-sm font-semibold text-white">
                  {prev.name}
                </span>
              </span>
            </Link>
            <Link
              href={`/solutions/${next.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-right transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <span className="ml-auto min-w-0">
                <span className="block text-[11px] uppercase tracking-wide text-white/40">
                  {language === "th" ? "ถัดไป" : "Next"}
                </span>
                <span className="mt-0.5 block truncate text-sm font-semibold text-white">
                  {next.name}
                </span>
              </span>
              <span className="text-xl text-white/40 transition group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
