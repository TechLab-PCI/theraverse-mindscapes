import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang } from "./i18n";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle: () => setLang(lang === "pt" ? "en" : "pt") }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
