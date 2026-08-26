"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { useSiteLanguage } from "../components/siteLanguage";
import { solutions } from "./solutionsData";

const AUTOPLAY_MS = 4200;

export default function SolutionsPage() {
  const { language } = useSiteLanguage();
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = solutions.length;

  const go = useCallback(
    (direction: number) => {
      setActive((prev) => (prev + direction + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, go]);

  // keyboard navigation
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const activeSolution = solutions[active];

  // prefetch destinations for snappy navigation
  useEffect(() => {
    solutions.forEach((solution) => router.prefetch(`/solutions/${solution.slug}`));
  }, [router]);

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#04120f] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(1100px 620px at 12% -8%, rgba(59,185,123,0.22), transparent 60%), radial-gradient(900px 620px at 92% 4%, rgba(0,181,159,0.16), transparent 62%), radial-gradient(1200px 900px at 50% 112%, rgba(0,70,78,0.55), transparent 66%)",
          }}
        />
        {/* accent glow follows the active solution */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[120px] transition-colors duration-700"
          style={{ background: activeSolution.accent }}
        />

        <section className="relative z-10 mx-auto flex max-w-[1240px] flex-col items-center px-6 pt-36 sm:pt-40">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-[#3BB97B]/30 bg-[#3BB97B]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7BE4B4]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#3BB97B]" />
            {language === "th" ? "โซลูชันของเรา" : "Our Solutions"}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-3xl text-center text-[clamp(2.2rem,6vw,4.4rem)] font-semibold leading-[1] tracking-[-0.03em]"
          >
            {language === "th" ? (
              <>
                ระบบนิเวศเดียว{" "}
                <span className="bg-gradient-to-r from-[#3BB97B] via-[#43dcae] to-[#00b59f] bg-clip-text text-transparent">
                  ความยั่งยืนที่ไม่สิ้นสุด
                </span>
              </>
            ) : (
              <>
                One Ecosystem,{" "}
                <span className="bg-gradient-to-r from-[#3BB97B] via-[#43dcae] to-[#00b59f] bg-clip-text text-transparent">
                  Endless Sustainability
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl text-center text-sm leading-relaxed text-white/65 sm:text-base"
          >
            {language === "th"
              ? "เครื่องมือ AI และบล็อกเชนที่ทำงานร่วมกัน เพื่อวัด ทวนสอบ และลดคาร์บอนในทุกขั้นตอน หมุนเพื่อสำรวจ แล้วคลิกเพื่อดูรายละเอียด"
              : "AI and blockchain tools that work together to measure, verify, and reduce carbon at every step. Spin through them, then click to dive in."}
          </motion.p>
        </section>

        {/* ---------------------------- CAROUSEL ---------------------------- */}
        <section
          className="relative z-10 mx-auto mt-12 w-full max-w-[1240px] px-4 sm:mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="relative mx-auto h-[380px] sm:h-[440px]"
            style={{ perspective: "1600px" }}
            aria-roledescription="carousel"
          >
            <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
              {solutions.map((solution, index) => {
                let offset = index - active;
                if (offset > count / 2) offset -= count;
                if (offset < -count / 2) offset += count;

                const abs = Math.abs(offset);
                const isActive = offset === 0;
                const hidden = abs > 2;

                const translateX = offset * 200;
                const rotateY = offset * -34;
                const translateZ = -abs * 180;
                const scale = isActive ? 1 : Math.max(0.72, 1 - abs * 0.12);
                const opacity = hidden ? 0 : abs === 0 ? 1 : abs === 1 ? 0.72 : 0.4;

                return (
                  <div
                    key={solution.slug}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      zIndex: 100 - abs,
                      transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease",
                      pointerEvents: hidden ? "none" : "auto",
                    }}
                  >
                    <SolutionCard
                      solution={solution}
                      isActive={isActive}
                      language={language}
                      onClick={() => {
                        if (isActive) {
                          router.push(`/solutions/${solution.slug}`);
                        } else {
                          setActive(index);
                        }
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* arrows */}
            <button
              type="button"
              aria-label="Previous solution"
              onClick={() => go(-1)}
              className="absolute left-1 top-1/2 z-[120] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-4"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M15.4 7.4L14 6l-6 6 6 6 1.4-1.4L10.8 12z" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next solution"
              onClick={() => go(1)}
              className="absolute right-1 top-1/2 z-[120] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-4"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4L13.2 12z" />
              </svg>
            </button>
          </div>

          {/* active info */}
          <div className="mx-auto mt-8 max-w-xl text-center">
            <motion.div
              key={activeSolution.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-xl font-semibold tracking-[-0.01em] sm:text-2xl">
                {activeSolution.fullName[language]}
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/60">
                {activeSolution.tagline[language]}
              </p>
              <Link
                href={`/solutions/${activeSolution.slug}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-[#04120f] shadow-lg transition hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(90deg, ${activeSolution.accent}, #00b59f)`,
                }}
              >
                {language === "th" ? `สำรวจ ${activeSolution.name}` : `Explore ${activeSolution.name}`}
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>

          {/* dots */}
          <div className="mt-7 flex items-center justify-center gap-2.5">
            {solutions.map((solution, index) => (
              <button
                key={solution.slug}
                type="button"
                aria-label={`Go to ${solution.name}`}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active ? "w-7 bg-[#3BB97B]" : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </section>

        {/* ---------------------- FULL GRID (fallback) ---------------------- */}
        <section className="relative z-10 mx-auto max-w-[1180px] px-6 pb-28 pt-24">
          <h2 className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
            {language === "th" ? "โซลูชันทั้งหมด" : "All solutions"}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#3BB97B]/40 hover:bg-white/[0.06]"
              >
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: `${solution.accent}1f` }}
                >
                  <img src={solution.icon} alt="" className="h-9 w-9 object-contain" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-white">{solution.name}</span>
                  <span className="mt-0.5 block truncate text-xs text-white/50">
                    {solution.fullName[language]}
                  </span>
                </span>
                <span
                  className="ml-auto shrink-0 text-white/30 transition group-hover:translate-x-1 group-hover:text-[#7BE4B4]"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function SolutionCard({
  solution,
  isActive,
  language,
  onClick,
}: {
  solution: (typeof solutions)[number];
  isActive: boolean;
  language: "th" | "en";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      tabIndex={isActive ? 0 : -1}
      className={`group relative flex h-[340px] w-[240px] flex-col items-center justify-between overflow-hidden rounded-[28px] border p-7 text-center transition-colors sm:h-[400px] sm:w-[290px] ${
        isActive
          ? "border-white/25 bg-white/[0.07] shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          : "border-white/10 bg-white/[0.03]"
      }`}
      style={
        isActive
          ? { boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px ${solution.accent}44` }
          : undefined
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl transition-opacity duration-500"
        style={{ background: solution.accent, opacity: isActive ? 0.35 : 0.12 }}
      />

      <div className="relative flex flex-1 flex-col items-center justify-center">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-3xl sm:h-28 sm:w-28"
          style={{ background: `${solution.accent}22` }}
        >
          <img
            src={solution.icon}
            alt={solution.name}
            className="h-14 w-14 object-contain transition duration-500 group-hover:scale-110 sm:h-16 sm:w-16"
          />
        </div>
        <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] text-white sm:text-xl">
          {solution.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/55 sm:text-[13px]">
          {solution.fullName[language]}
        </p>
      </div>

      {isActive && (
        <span
          className="relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-[#04120f]"
          style={{ background: solution.accent }}
        >
          {language === "th" ? "ดูรายละเอียด" : "View details"}
          <span aria-hidden="true">→</span>
        </span>
      )}
    </button>
  );
}
