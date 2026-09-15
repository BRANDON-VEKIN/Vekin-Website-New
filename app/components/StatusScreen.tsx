"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Header from "./Header";
import { useSiteLanguage } from "./siteLanguage";

type Action = {
  href?: string;
  label: { th: string; en: string };
  onClick?: () => void;
};

/**
 * The shared shell behind the 404 and error screens, so a visitor who hits one
 * still lands on the site rather than on a bare browser page: same header, same
 * ground, and a way back into the content.
 */
export default function StatusScreen({
  code,
  title,
  body,
  actions,
  detail
}: {
  code: string;
  title: { th: string; en: string };
  body: { th: string; en: string };
  actions: Action[];
  detail?: string;
}) {
  const { language } = useSiteLanguage();

  return (
    <>
      <Header />

      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#04120f] px-6 py-32 text-center text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 520px at 50% -10%, rgba(59,185,123,0.20), transparent 62%), radial-gradient(700px 500px at 82% 92%, rgba(0,181,159,0.14), transparent 60%)"
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[560px]"
        >
          <p className="bg-gradient-to-r from-[#00464E] to-[#3BB97B] bg-clip-text text-[clamp(4rem,14vw,7rem)] font-black leading-none tracking-tight text-transparent">
            {code}
          </p>

          <h1 className="mt-4 text-[clamp(1.5rem,4vw,2.2rem)] font-bold tracking-tight">
            {title[language]}
          </h1>

          <p className="mx-auto mt-5 max-w-[440px] text-[15.5px] leading-7 text-white/65">
            {body[language]}
          </p>

          {detail && (
            <p className="mx-auto mt-5 max-w-[440px] break-words rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-xs leading-5 text-white/45">
              {detail}
            </p>
          )}

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {actions.map((action, index) =>
              action.href ? (
                <Link
                  key={action.label.en}
                  href={action.href}
                  className={
                    index === 0
                      ? "rounded-full bg-[#3BB97B] px-6 py-3 text-sm font-semibold text-[#04120f] transition hover:bg-[#34a76e]"
                      : "rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  }
                >
                  {action.label[language]}
                </Link>
              ) : (
                <button
                  key={action.label.en}
                  type="button"
                  onClick={action.onClick}
                  className={
                    index === 0
                      ? "rounded-full bg-[#3BB97B] px-6 py-3 text-sm font-semibold text-[#04120f] transition hover:bg-[#34a76e]"
                      : "rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  }
                >
                  {action.label[language]}
                </button>
              )
            )}
          </div>
        </motion.div>
      </main>
    </>
  );
}
