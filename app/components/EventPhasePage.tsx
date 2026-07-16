"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./Header";

type Stat = {
  label: string;
  value: string;
};

type EventPhasePageProps = {
  accent: string;
  backLabel: string;
  image: string;
  imageAlt: string;
  phase: string;
  stats: Stat[];
  steps: string[];
  summary: string;
  title: string;
};

export default function EventPhasePage({
  accent,
  backLabel,
  image,
  imageAlt,
  phase,
  stats,
  steps,
  summary,
  title,
}: EventPhasePageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Header />

      <section className="relative min-h-[calc(100vh-56px)] overflow-hidden md:min-h-[calc(100vh-80px)]">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-90 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/62 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none" />
        <div
          className="absolute left-[8%] top-[16%] h-72 w-72 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: accent }}
        />
        <div
          className="absolute right-[8%] bottom-[14%] h-96 w-96 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: accent }}
        />

        <Link
          href="/"
          className="absolute left-4 top-4 z-30 inline-flex items-center rounded-full border border-white/20 bg-black/45 px-4 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-white/85 backdrop-blur-lg transition hover:border-white/55 hover:text-white active:scale-95 sm:left-6 sm:top-6 sm:text-sm"
        >
          <span className="mr-2 text-lg leading-none">‹</span>
          {backLabel}
        </Link>

        <div className="relative z-20 mx-auto grid min-h-[calc(100vh-56px)] max-w-[1180px] items-end gap-8 px-5 pb-12 pt-28 sm:px-8 md:min-h-[calc(100vh-80px)] lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:px-10 lg:pb-16 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[780px]"
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-[8px] border border-white/15 bg-white/[0.06] px-3 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-white/70">
                {phase}
              </span>
            </div>

            <h1 className="text-[clamp(3rem,9vw,7rem)] font-black leading-[0.95] tracking-normal text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.62)]">
              {title}
            </h1>

            <p className="mt-6 max-w-[680px] text-[clamp(1.05rem,2.2vw,1.45rem)] font-semibold leading-relaxed text-white/78">
              {summary}
            </p>

            <div className="mt-8 grid max-w-[720px] gap-3 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.16 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-lg border border-white/10 bg-white/[0.075] px-4 py-4 shadow-[0_20px_70px_rgba(0,0,0,0.3)] backdrop-blur-md"
                >
                  <p className="text-2xl font-black leading-none text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/48">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 42 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-xl border border-white/12 bg-black/42 p-5 shadow-[0_28px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-6"
          >
            <div className="absolute inset-x-0 top-0 h-1" style={{ background: accent }} />
            <div
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: accent }}
            />
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/45">
              Workflow
            </p>

            <div className="mt-5 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-lg border border-white/8 bg-white/[0.045] p-4">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-sm font-black text-black"
                    style={{ background: accent }}
                  >
                    {index + 1}
                  </div>
                  <p className="whitespace-pre-line text-sm font-semibold leading-relaxed text-white/78 sm:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
