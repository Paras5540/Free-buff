import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { get, type Lang, type TranslationKey } from "../data/translations";
export type { TranslationKey };

/**
 * ─────────────────────────────────────────────────────────────────────────
 * HINDI–ENGLISH LANGUAGE CONTEXT
 * ─────────────────────────────────────────────────────────────────────────
 * Defaults to Hindi (the business's own language), remembers the visitor's
 * choice in localStorage, and updates the <html lang> attribute so screen
 * readers and search engines see the right language.
 */

const STORAGE_KEY = "shree-safa-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** translate: get(lang, key, vars) */
  t: (key: TranslationKey | string, vars?: Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "hi" || saved === "en") return saved;
  } catch {
    /* storage unavailable — fall through */
  }
  return "hi";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const t = useCallback(
    (key: TranslationKey | string, vars?: Record<string, string>) => get(lang, key, vars),
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

/** The visible HI/EN toggle pill — put it in the navbar. */
export function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      role="group"
      aria-label="Language / भाषा"
      className={`inline-flex items-center overflow-hidden rounded-full border text-[11px] font-semibold uppercase tracking-[0.1em] ${
        dark ? "border-gold-300/40" : "border-gold-400/60"
      }`}
    >
      {(["hi", "en"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`px-2.5 py-1.5 transition-colors ${
              active
                ? "bg-gold-400 text-maroon-900"
                : dark
                  ? "text-ivory/80 hover:text-gold-200"
                  : "text-ink-soft hover:text-maroon-700"
            }`}
          >
            {code === "hi" ? "हिं" : "EN"}
          </button>
        );
      })}
    </div>
  );
}
