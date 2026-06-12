"use client";

import { useSiteLanguage } from "./siteLanguage";

const navItems = {
  th: ["โซลูชั่น", "แพคเกจ", "ผลงานของเรา", "ติดต่อเรา"],
  en: ["Solutions", "Packages", "Our Work", "Contact Us"],
} as const;

const ctaLabels = {
  th: "ติดต่อ",
  en: "Contact",
} as const;

type Language = keyof typeof navItems;

export default function Header() {
  const { language, toggleLanguage } = useSiteLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95">
      <nav className="mx-auto flex h-[54px] max-w-[1180px] items-center justify-between px-5 md:h-[80px] md:px-8">
        <a href="/vekin_home" className="flex items-center gap-2 text-[12px] font-black tracking-tight">
          <img src="/VEKIN Resource all Product/Vekin_logo.png" alt="VEKIN logo" className="h-6 w-auto" />
          <span className="sr-only">VEKIN</span>
        </a>
        <div className="hidden items-center gap-6 text-[16px] font-bold text-white/80 min-[560px]:flex">
          {navItems[language].map((item) => (
            <a
              key={item}
              href={item === "แพคเกจ" || item === "Packages" ? "/package" : "#"}
              className="transition hover:text-mint"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Switch language"
            aria-pressed={language === "en"}
            onClick={toggleLanguage}
            className="flex h-7 items-center rounded-full border border-white/20 bg-white/5 p-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/70 transition hover:border-mint/70 hover:text-white"
          >
            <span className={`rounded-full px-2 py-1 transition ${language === "th" ? "bg-mint text-black" : ""}`}>
              TH
            </span>
            <span className={`rounded-full px-2 py-1 transition ${language === "en" ? "bg-mint text-black" : ""}`}>
              EN
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
