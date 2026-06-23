"use client";

import { useState } from "react";
import { useSiteLanguage } from "./siteLanguage";

const navItems = {
  th: [
    { label: "โซลูชัน", href: "/vekin_home" },
    { label: "แพ็กเกจ", href: "/package" },
    { label: "ผลงานของเรา", href: "/vekin_home#work" },
    { label: "ติดต่อเรา", href: "/vekin_home#contact" },
  ],
  en: [
    { label: "Solutions", href: "/vekin_home" },
    { label: "Packages", href: "/package" },
    { label: "Our Work", href: "/vekin_home#work" },
    { label: "Contact Us", href: "/vekin_home#contact" },
  ],
} as const;

export default function Header() {
  const { language, toggleLanguage } = useSiteLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentNavItems = navItems[language];

  function handleLanguageToggle() {
    toggleLanguage();
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[56px] max-w-[1180px] items-center justify-between px-4 sm:px-5 md:h-[80px] md:px-8">
        <a href="/vekin_home" className="flex min-w-0 items-center gap-2 text-[12px] font-black tracking-tight">
          <img src="/VEKIN Resource all Product/Vekin_logo.png" alt="VEKIN logo" className="h-6 w-auto md:h-7" />
          <span className="sr-only">VEKIN</span>
        </a>

        <div className="hidden items-center gap-5 text-[15px] font-bold text-white/80 md:flex lg:gap-6 lg:text-[16px]">
          {currentNavItems.map((item) => (
            <a key={item.label} href={item.href} className="whitespace-nowrap transition hover:text-mint">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Switch language"
            aria-pressed={language === "en"}
            onClick={handleLanguageToggle}
            className="flex h-7 items-center rounded-full border border-white/20 bg-white/5 p-1 text-[9px] font-black uppercase tracking-[0.14em] text-white/70 transition hover:border-mint/70 hover:text-white sm:tracking-[0.18em]"
          >
            <span className={`rounded-full px-2 py-1 transition ${language === "th" ? "bg-mint text-black" : ""}`}>
              TH
            </span>
            <span className={`rounded-full px-2 py-1 transition ${language === "en" ? "bg-mint text-black" : ""}`}>
              EN
            </span>
          </button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-mint/70 hover:text-mint md:hidden"
          >
            <span className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition ${
                  isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-4 rounded-full bg-current transition ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-4 rounded-full bg-current transition ${
                  isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-white/10 bg-black/95 transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-80 border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1180px] flex-col px-4 py-3">
          {currentNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-bold text-white/85 transition hover:bg-white/10 hover:text-mint"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
