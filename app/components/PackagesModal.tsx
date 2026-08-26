"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import { useSiteLanguage } from "./siteLanguage";

export type Localized = { en: string; th: string };

export type PackageTier = {
  id: string;
  title: Localized;
  /** Tier this one builds on, rendered as an "Everything in ..." chip. */
  inherits?: Localized | null;
  features: readonly Localized[];
};

type PackagesModalProps = {
  open: boolean;
  onClose: () => void;
  packages: readonly PackageTier[];
  eyebrow: Localized;
  title: Localized;
  ctaHref?: string;
};

const accents = [
  { glow: "bg-emerald-400/25", dot: "bg-emerald-300", border: "hover:border-emerald-300/45" },
  { glow: "bg-teal-400/25", dot: "bg-teal-300", border: "hover:border-teal-300/45" },
  { glow: "bg-amber-300/25", dot: "bg-amber-300", border: "hover:border-amber-200/45" }
];

const labels = {
  th: { includes: "รวมทุกอย่างใน", quotation: "ขอใบเสนอราคา", close: "ปิด" },
  en: { includes: "Everything in", quotation: "Get Quotation", close: "Close" }
};

export default function PackagesModal({
  open,
  onClose,
  packages,
  eyebrow,
  title,
  ctaHref = "/contact"
}: PackagesModalProps) {
  const { language } = useSiteLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const copy = labels[language];

  // Kept in a ref so the lock effect below depends only on `open`; an inline
  // onClose would otherwise re-register the listener on every parent render.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close on Escape + lock background scroll while open
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      // Cleared outright rather than restored from a saved value: a remount
      // while open would capture the already-locked "hidden" and leave the
      // page permanently unscrollable. Body overflow comes from globals.css,
      // so clearing the inline style falls back to the stylesheet.
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!isMounted) return null;

  // Portalled to body: host sections are transformed by BidirectionalScrollReveal
  // and clip overflow, so a nested fixed overlay would be clipped and positioned
  // against the section rather than the viewport.
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="packages-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title[language]}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-y-auto rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-emerald-900 via-emerald-950 to-teal-950 p-5 shadow-[0_40px_120px_-24px_rgba(0,0,0,0.85)] sm:rounded-[1.75rem] sm:p-8 lg:p-10"
          >
            {/* Decorative accents */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label={copy.close}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl leading-none text-white/70 backdrop-blur-md transition hover:border-white/40 hover:bg-white/15 hover:text-white active:scale-90 sm:right-6 sm:top-6"
            >
              &times;
            </button>

            {/* Header */}
            <div className="relative flex flex-col items-center pr-10 text-center sm:pr-0">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300/70 sm:text-[11px]">
                {eyebrow[language]}
              </span>
              <h3 className="mt-2 bg-gradient-to-r from-[#7dffc4] to-[#3BB97B] bg-clip-text text-2xl font-extrabold tracking-tight text-transparent drop-shadow-[0_12px_34px_rgba(59,185,123,0.28)] sm:text-3xl lg:text-4xl">
                {title[language]}
              </h3>
              <div className="mt-4 h-px w-28 bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
            </div>

            {/* Package cards */}
            <div className="mt-7 grid gap-4 sm:mt-9 sm:gap-5 md:grid-cols-3">
              {packages.map((item, index) => {
                const accent = accents[index % accents.length];

                return (
                  <div
                    key={item.id}
                    className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-left backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08] sm:p-6 ${accent.border}`}
                  >
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${accent.glow}`}
                    />

                    <span className="relative text-[11px] font-bold tracking-[0.28em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="relative mt-2 text-base font-extrabold leading-snug text-white sm:text-lg">
                      {item.title[language]}
                    </h4>

                    <div className="relative mt-4 h-px w-full bg-white/10" />

                    {item.inherits && (
                      <p className="relative mt-4 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-[12px] font-medium leading-snug text-white/70">
                        <span className="text-emerald-300/90">{copy.includes}</span>{" "}
                        {item.inherits[language]}
                      </p>
                    )}

                    <ul className="relative mt-4 flex flex-col gap-2.5">
                      {item.features.map((feature) => (
                        <li
                          key={feature.en}
                          className="flex items-start gap-2.5 text-[13px] leading-relaxed text-white/80 sm:text-sm"
                        >
                          <span
                            className={`mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${accent.dot}`}
                          />
                          <span>{feature[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Footer CTA */}
            <div className="relative mt-8 flex justify-center">
              <a
                href={ctaHref}
                onClick={onClose}
                className="min-w-[220px] rounded-full bg-[#2eb79f] px-8 py-3 text-center text-[16px] font-semibold text-white shadow-[0_16px_40px_-12px_rgba(46,183,159,0.7)] transition hover:bg-[#38c9b0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-[18px]"
              >
                {copy.quotation}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
