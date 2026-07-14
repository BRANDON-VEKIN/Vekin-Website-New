import React from "react";
import { BidirectionalScrollReveal } from "../BidirectionalScrollReveal";

type LocalizedTextProps = {
  as?: React.ElementType;
  th: string;
  en: string;
  className?: string;
};

function LocalizedText({
  as: Component = "div",
  th,
  en,
  className,
}: LocalizedTextProps) {
  const isThai =
    typeof navigator !== "undefined" &&
    navigator.language.toLowerCase().startsWith("th");

  return (
    <Component className={className}>
      {isThai ? th : en}
    </Component>
  );
}

const metricCards = [
  { value: "100%", label: "Data Coverage" },
  { value: "95%", label: "AI Accuracy" },
  { value: "80%", label: "Cost Reduction" },
];

const chartBars = ["h-1/3", "h-1/2", "h-2/3", "h-5/6", "h-3/5", "h-4/5", "h-1/2"];

export default function AuditorSegment6() {
  return (
    <BidirectionalScrollReveal
      as="section"
      aria-labelledby="auditor-analytics"
      className="relative w-full overflow-hidden bg-black text-white"
      amount={0.2}
      duration={1.08}
      offset={64}
    >
      <img
        src="/VEKIN Resource all Product/VEKIN 3/CentralWorld_BG.jpg"
        alt="CentralWorld background"
        className="block w-full min-h-[820px] object-cover sm:min-h-[780px] md:min-h-[720px] lg:min-h-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.24),rgba(0,0,0,0.58)_48%,rgba(0,0,0,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_34%,rgba(68,229,208,0.26),transparent_32%),radial-gradient(circle_at_28%_68%,rgba(14,165,233,0.18),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center px-4 py-10 sm:px-6 lg:justify-end lg:px-10">
        <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-6 lg:grid-cols-[0.9fr_1fr]">
          <div className="hidden lg:block" />

          <div className="rounded-[8px] border border-white/15 bg-black/64 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md sm:p-8 lg:p-10">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#44e5d0]/35 bg-[#44e5d0]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#73f3df]">
              <span className="h-2 w-2 rounded-full bg-[#44e5d0] shadow-[0_0_18px_rgba(68,229,208,0.9)]" />
              Live Intelligence Layer
            </div>

            <LocalizedText
              as="h2"
              th="à¸à¸²à¸£à¸§à¸´à¹€à¸„à¸£à¸²à¸°à¸«à¹Œ AI ENERGY AUDITOR"
              en="AI ENERGY AUDITOR ANALYTICS"
              className="text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
            />

            <LocalizedText
              as="p"
              th="AI Energy Auditor à¸§à¸´à¹€à¸„à¸£à¸²à¸°à¸«à¹Œà¸‚à¹‰à¸­à¸¡à¸¹à¸¥ IoT à¹à¸¥à¸°à¸”à¸²à¸§à¹€à¸—à¸µà¸¢à¸¡à¹à¸šà¸šà¹€à¸£à¸µà¸¢à¸¥à¹„à¸—à¸¡à¹Œ à¹€à¸žà¸·à¹ˆà¸­à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹‚à¸„à¸£à¸‡à¸à¸²à¸£à¸žà¸¥à¸±à¸‡à¸‡à¸²à¸™ à¸¥à¸”à¸•à¹‰à¸™à¸—à¸¸à¸™à¸à¸²à¸£à¸•à¸£à¸§à¸ˆ à¹à¸¥à¸°à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹ƒà¸«à¹‰à¹€à¸›à¹‡à¸™ Carbon Receipt à¸šà¸™ Blockchain à¸—à¸µà¹ˆà¸žà¸£à¹‰à¸­à¸¡à¸ªà¸³à¸«à¸£à¸±à¸šà¸à¸²à¸£à¹€à¸‡à¸´à¸™à¸ªà¸µà¹€à¸‚à¸µà¸¢à¸§"
              en="VEKIN analyzes IoT and satellite data in real time, validating energy projects with AI precision while turning verified results into blockchain-backed Carbon Receipts for green finance."
              className="mt-5 text-xs leading-relaxed text-white/82 sm:text-sm md:text-base"
            />

            <div className="mt-6 grid grid-cols-3 gap-3">
              {metricCards.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[8px] border border-white/12 bg-white/[0.07] px-3 py-3 shadow-[0_14px_35px_rgba(0,0,0,0.22)]"
                >
                  <p className="text-lg font-black uppercase leading-none text-[#44e5d0] sm:text-2xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/60 sm:text-[10px]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-[8px] border border-white/12 bg-slate-950/78 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="mb-4 flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.14em] text-white/58 sm:text-xs">
                <LocalizedText as="span" th="à¹à¸”à¸Šà¸šà¸­à¸£à¹Œà¸”à¸ªà¸”" en="Live Dashboard" />
                <span className="inline-flex items-center gap-2 text-[#73f3df]">
                  <span className="h-2 w-2 rounded-full bg-[#44e5d0]" />
                  Active
                </span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="h-44 rounded-[8px] bg-[linear-gradient(135deg,rgba(68,229,208,0.88),rgba(14,165,233,0.58)_52%,rgba(15,23,42,0.9))] p-4 shadow-inner sm:h-52">
                  <div className="flex h-full items-end gap-2 sm:gap-3">
                    {chartBars.map((height, index) => (
                      <div
                        key={`${height}-${index}`}
                        className={`${height} w-full rounded-t-md bg-black/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/52">
                      Verified Load
                    </p>
                    <p className="mt-2 text-2xl font-black text-white">742 kW</p>
                  </div>
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/52">
                      Carbon Signal
                    </p>
                    <p className="mt-2 text-2xl font-black text-[#44e5d0]">-18%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BidirectionalScrollReveal>
  );
}
