"use client";

import { useState } from "react";
import { useSiteLanguage } from "./siteLanguage";

const navItems = {
  th: [
    { label: "โซลูชั่น", href: "/solutions" },
    { label: "แพคเกจ", href: "/package" },
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "ผลงานของเรา", href: "/vekin_home#work" },
    { label: "บล็อก", href: "/blog" },
    { label: "ติดต่อเรา", href: "/contact" },
  ],
  en: [
    { label: "Solutions", href: "/solutions" },
    { label: "Packages", href: "/package" },
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/vekin_home#work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
} as const;

function LanguageFlag({ country }: { country: "us" | "th" }) {
  if (country === "us") {
    return (
      <span
        aria-hidden="true"
        className="relative h-3.5 w-3.5 shrink-0 overflow-hidden rounded-full ring-1 ring-black/15"
      >
        <span
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #b22234 0%, #b22234 7.69%, #ffffff 7.69%, #ffffff 15.38%)",
          }}
        />
        <span className="absolute left-0 top-0 h-[54%] w-[56%] bg-[#3c3b6e]" />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 rounded-full ring-1 ring-black/15"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #a51931 0%, #a51931 16.67%, #ffffff 16.67%, #ffffff 33.33%, #2d2a4a 33.33%, #2d2a4a 66.67%, #ffffff 66.67%, #ffffff 83.33%, #a51931 83.33%, #a51931 100%)",
      }}
    />
  );
}

export default function Header() {
  const { language, toggleLanguage } = useSiteLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentNavItems = navItems[language];

  function handleLanguageToggle() {
    toggleLanguage();
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 py-2 sm:px-3 lg:px-4">
      <nav className="relative mx-auto flex h-[58px] max-w-[1440px] items-center rounded-[22px] border border-white/40 bg-[linear-gradient(180deg,rgba(82,80,78,0.42)_0%,rgba(48,46,45,0.28)_100%)] px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_34px_rgba(0,0,0,0.2)] backdrop-blur-[22px] backdrop-saturate-150 sm:px-6 md:h-[76px] md:rounded-[26px] md:px-8">
        <a
          href="/vekin_home"
          aria-label="VEKIN home"
          className="flex shrink-0 items-center"
        >
          <img
            src="/VEKIN Resource all Product/Vekin_logo.png"
            alt="VEKIN"
            className="h-[22px] w-auto sm:h-6 md:h-[27px]"
          />
        </a>

        <div className="absolute left-1/2 hidden w-[54%] max-w-[620px] min-w-[470px] -translate-x-1/2 items-center justify-between text-[16px] font-normal text-white/85 lg:flex">
          {currentNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 transition duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2.5">
          <button
            type="button"
            aria-label={
              language === "th" ? "Switch language to English" : "เปลี่ยนภาษาเป็นภาษาไทย"
            }
            aria-pressed={language === "en"}
            onClick={handleLanguageToggle}
            className="flex h-[28px] items-center overflow-hidden rounded-full bg-white p-[2px] text-[9px] font-bold uppercase text-[#707173] shadow-[0_2px_8px_rgba(0,0,0,0.14)] transition hover:shadow-[0_2px_12px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <span
              className={`flex h-6 items-center gap-1 rounded-full px-2 transition ${
                language === "en" ? "bg-[#2d998e] text-white" : ""
              }`}
            >
              <LanguageFlag country="us" />
              EN
            </span>
            <span
              className={`flex h-6 items-center gap-1 rounded-full px-2 transition ${
                language === "th" ? "bg-[#2d998e] text-white" : ""
              }`}
            >
              <LanguageFlag country="th" />
              TH
            </span>
          </button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 lg:hidden"
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
        className={`mx-auto max-w-[1440px] overflow-hidden rounded-[20px] border-white/30 bg-[linear-gradient(180deg,rgba(70,68,67,0.52)_0%,rgba(42,40,39,0.36)_100%)] shadow-xl backdrop-blur-[22px] backdrop-saturate-150 transition-[max-height,opacity,margin,border-width] duration-300 lg:hidden ${
          isMenuOpen
            ? "mt-2 max-h-80 border opacity-100"
            : "mt-0 max-h-0 border-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-2">
          {currentNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/85 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
