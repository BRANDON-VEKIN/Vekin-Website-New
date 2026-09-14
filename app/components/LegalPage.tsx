"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Header from "./Header";
import { useSiteLanguage } from "./siteLanguage";
import type { LegalDocument } from "./legalData";

/**
 * Renders one legal document. Both /privacy and /terms use this, so the two
 * pages stay in step with each other and only their content differs.
 */
export default function LegalPage({ doc }: { doc: LegalDocument }) {
  const { language } = useSiteLanguage();

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#04120f] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 520px at 15% -10%, rgba(59,185,123,0.18), transparent 60%), radial-gradient(800px 560px at 88% 6%, rgba(0,181,159,0.12), transparent 62%)"
          }}
        />

        {/* pt clears the fixed header, which sits out of flow. */}
        <div className="relative mx-auto max-w-[820px] px-6 pb-28 pt-36 sm:px-8 sm:pt-44">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-[#3BB97B] transition hover:text-white"
            >
              <span className="mr-2 text-base leading-none">‹</span>
              {language === "th" ? "กลับหน้าแรก" : "Back to home"}
            </Link>

            <h1 className="mt-6 text-[clamp(2.1rem,5vw,3.2rem)] font-black leading-[1.1] tracking-tight">
              {doc.title[language]}
            </h1>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              {language === "th" ? "ปรับปรุงล่าสุด" : "Last updated"} — {doc.updated[language]}
            </p>

            <p className="mt-7 text-[17px] leading-8 text-white/75">{doc.intro[language]}</p>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-[#3BB97B]/60 via-white/12 to-transparent" />
          </motion.div>

          <div className="mt-12 space-y-11">
            {doc.sections.map((section, index) => (
              <motion.section
                key={section.heading.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="flex items-baseline gap-3 text-[19px] font-bold tracking-tight text-white sm:text-[21px]">
                  <span className="text-sm font-black tabular-nums text-[#3BB97B]/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.heading[language]}
                </h2>

                <div className="mt-4 space-y-4 pl-0 sm:pl-10">
                  {section.blocks.map((block, blockIndex) =>
                    block.type === "p" ? (
                      <p key={blockIndex} className="text-[15.5px] leading-7 text-white/70">
                        {block.text[language]}
                      </p>
                    ) : (
                      <ul key={blockIndex} className="space-y-2.5">
                        {block.items.map((item) => (
                          <li
                            key={item.en}
                            className="relative pl-5 text-[15.5px] leading-7 text-white/70"
                          >
                            <span className="absolute left-0 top-[13px] h-1.5 w-1.5 rounded-full bg-[#3BB97B]/70" />
                            {item[language]}
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </motion.section>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-white/12 bg-white/[0.04] px-6 py-7">
            <p className="text-[15.5px] leading-7 text-white/70">
              {language === "th"
                ? "มีคำถามเกี่ยวกับเอกสารฉบับนี้ หรือต้องการใช้สิทธิของคุณ"
                : "Questions about this document, or want to exercise your rights?"}
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center rounded-full bg-[#3BB97B] px-6 py-3 text-sm font-semibold text-[#04120f] transition hover:bg-[#34a76e]"
            >
              {language === "th" ? "ติดต่อเรา" : "Contact us"}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
