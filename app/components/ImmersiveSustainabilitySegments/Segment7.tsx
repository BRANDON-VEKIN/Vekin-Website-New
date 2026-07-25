"use client";

import { motion } from "framer-motion";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";
import { useSiteLanguage } from "../siteLanguage";

const bubbleImage = "/VEKIN Resource all Product/VEKIN 1/billboard_BB.png";

const esgScopes = [
  {
    title: "Scope I",
    metric: "Direct energy",
    value: "18 kg CO2e",
    delta: "-12% vs baseline",
    detail: "On-site fuel",
    progress: 48,
    accent: "linear-gradient(90deg, #6ee7b7, #a5f3fc)",
  },
  {
    title: "Scope II",
    metric: "Venue power",
    value: "29 kg CO2e",
    delta: "64% renewable",
    detail: "Grid electricity",
    progress: 64,
    accent: "linear-gradient(90deg, #67e8f9, #bfdbfe)",
  },
  {
    title: "Scope III",
    metric: "Travel + waste",
    value: "76 kg CO2e",
    delta: "21 partners",
    detail: "Supplier impact",
    progress: 82,
    accent: "linear-gradient(90deg, #bef264, #a7f3d0)",
  },
];

export default function Segment7() {
  const { language } = useSiteLanguage();

  const copy = {
    th: {
      srLabel: "ให้ทุกพื้นที่ เพื่อก้าวสู่เวทีโลก Venue",
      headline: "Fulfilling value", // Usually kept in English for slogans, change to th if needed
      subheading: "ให้ทุกพื้นที่ เพื่อก้าวสู่เวทีโลก"
    },
    en: {
      srLabel: "Providing opportunities for everyone to step onto the world stage.",
      headline: "Fulfilling value",
      subheading: "Providing opportunities for everyone to step onto the world stage."
    }
  }[language] || { th: {}, en: {} };

  return (
    <BidirectionalScrollReveal
      amount={0.12}
      duration={1.35}
      className="relative overflow-hidden bg-black text-white transform-gpu"
    >
      <h2 className="sr-only">{copy.srLabel}</h2>

      <div className="relative mx-auto flex min-h-0 w-full max-w-[1440px] flex-col items-center px-4 pb-24 pt-16 sm:px-8 sm:pt-24 lg:min-h-[1260px] lg:pb-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(20,184,166,0.12),transparent_32%),radial-gradient(circle_at_50%_68%,rgba(56,189,248,0.1),transparent_28%)]" />

        <motion.img
          src={bubbleImage}
          alt=""
          animate={{ y: [0, -26, 0], x: [0, 16, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[3%] top-[14%] z-0 w-28 opacity-80 sm:w-44 lg:w-60"
        />
        <motion.img
          src={bubbleImage}
          alt=""
          animate={{ y: [0, 30, 0], x: [0, -18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-12 top-[9%] z-0 w-44 opacity-[0.85] sm:w-64 lg:right-[2%] lg:w-80"
        />
        <motion.img
          src={bubbleImage}
          alt=""
          animate={{ y: [0, -18, 0], x: [0, -10, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[12%] top-[46%] z-0 w-16 opacity-75 sm:w-24 lg:w-32"
        />
        <motion.img
          src={bubbleImage}
          alt=""
          animate={{ y: [0, -34, 0], x: [0, 20, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-10 top-[54%] z-0 w-36 opacity-80 sm:w-56 lg:right-[7%] lg:w-72"
        />

        <div className="relative z-10 flex w-full flex-col items-center">
          <div className="mb-8 max-w-[860px] text-center sm:mb-12">
            <p className="bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text py-1 text-[clamp(2rem,5vw,4.2rem)] font-black leading-tight text-transparent drop-shadow-[0_18px_44px_rgba(59,185,123,0.24)]">
              {copy.headline}
            </p>
            <p className="mx-auto mt-3 max-w-[760px] text-[clamp(1rem,2vw,1.65rem)] font-medium leading-snug text-neutral-200 sm:mt-5">
              {copy.subheading}
            </p>
          </div>

          <div className="relative w-full max-w-[1120px]">
            <motion.img
              src="/VEKIN Resource all Product/VEKIN 1/billboard.png"
              alt="VEKIN digital billboard with blue wireframe building"
              initial={{ opacity: 0, y: 46, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.28 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 mx-auto w-full max-w-[520px] object-contain drop-shadow-[0_34px_90px_rgba(56,189,248,0.22)] sm:max-w-[620px] lg:max-w-[720px]"
            />

            {esgScopes.map((scope, index) => (
              <motion.div
                key={scope.title}
                initial={{ opacity: 0, y: 38, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.85, delay: 0.16 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`relative z-20 mx-auto mt-6 w-full max-w-[420px] overflow-hidden rounded-xl border border-cyan-100/20 bg-slate-950/55 p-5 text-left shadow-[0_24px_90px_rgba(0,0,0,0.48)] backdrop-blur-xl lg:absolute lg:mx-0 lg:mt-0 lg:max-w-[400px] lg:p-6
                  ${index === 0 ? "lg:left-[0%] lg:top-[19%]" : ""}
                  ${index === 1 ? "lg:right-[0%] lg:top-[27%]" : ""}
                  ${index === 2 ? "lg:left-[8%] lg:top-[48%]" : ""}
                `}
              >
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: scope.accent }} />
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-300/10 blur-2xl" />

                <div className="relative flex items-start justify-between gap-3 sm:gap-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-100/75">
                      {scope.title}
                    </p>
                    <p className="mt-2 text-lg font-black leading-tight text-white lg:text-xl">
                      {scope.metric}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-right">
                    <p className="text-lg font-black leading-none text-cyan-100 lg:text-xl">
                      {scope.value}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-white/45">
                      Emissions
                    </p>
                  </div>
                </div>

                <div className="relative mt-5 h-2.5 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full shadow-[0_0_24px_rgba(103,232,249,0.42)]"
                    style={{
                      width: `${scope.progress}%`,
                      background: scope.accent,
                    }}
                  />
                </div>

                <div className="relative mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">Signal</p>
                    <p className="mt-1 text-sm font-bold text-white/85">{scope.delta}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">Source</p>
                    <p className="mt-1 text-sm font-bold text-white/85">{scope.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative left-1/2 z-10 mt-36 w-screen max-w-none -translate-x-1/2 sm:mt-48 lg:mt-64">
          <div className="pointer-events-none absolute inset-x-0 -top-36 h-44 bg-gradient-to-b from-transparent via-black/70 to-black sm:-top-48 sm:h-56" />
          <motion.img
            src="/VEKIN Resource all Product/VEKIN 1/3_Build.png"
            alt="Blue wireframe city buildings"
            initial={{ opacity: 0, y: 96, scale: 0.98 }}
            whileInView={{ opacity: 0.95, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.24 }}
            transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
            className="h-auto w-full object-cover object-center opacity-95"
          />
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
