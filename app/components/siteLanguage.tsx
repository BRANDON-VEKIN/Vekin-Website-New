"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "th" | "en";

type SiteLanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const SiteLanguageContext = createContext<SiteLanguageContextValue | null>(null);

export function SiteLanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("th");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("vek-in-language");

    if (savedLanguage === "th" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("vek-in-language", language);
  }, [language]);

  return (
    <SiteLanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage: () => setLanguage((currentLanguage) => (currentLanguage === "th" ? "en" : "th"))
      }}
    >
      {children}
    </SiteLanguageContext.Provider>
  );
}

export function useSiteLanguage() {
  const context = useContext(SiteLanguageContext);

  if (!context) {
    throw new Error("useSiteLanguage must be used within a SiteLanguageProvider");
  }

  return context;
}