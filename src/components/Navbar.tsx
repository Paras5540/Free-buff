import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { business } from "../data/business";
import { LanguageToggle, useLanguage } from "./LanguageProvider";
import type { TranslationKey } from "../data/translations";

const links: { to: string; key: TranslationKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/portfolio", key: "nav.portfolio" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/contact", key: "nav.contact" },
];

export function GetQuoteButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <Link
      to="/contact"
      className={className || "rounded-full border border-gold-400 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.14em] text-gold-500 transition-colors hover:bg-gold-400 hover:text-maroon-900"}
    >
      {t("home.hero.quoteBtn")}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-gold-300/30 bg-ivory/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label={business.name}>
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border font-display text-lg transition-colors ${
              scrolled || open
                ? "border-gold-400 text-maroon-700"
                : "border-gold-300/70 text-ivory"
            }`}
          >
            SS
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-lg font-semibold tracking-wide transition-colors ${
                scrolled || open ? "text-maroon-800" : "text-ivory"
              }`}
            >
              Shree Safa
            </span>
            <span
              className={`block text-[9px] uppercase tracking-[0.3em] transition-colors ${
                scrolled || open ? "text-gold-600" : "text-gold-200"
              }`}
            >
              Event Decoration
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? scrolled
                      ? "text-maroon-600"
                      : "text-gold-200"
                    : scrolled
                      ? "text-ink-soft hover:text-maroon-700"
                      : "text-ivory/85 hover:text-gold-200"
                }`
              }
            >
              {t(l.key)}
            </NavLink>
          ))}
          <LanguageToggle dark={!scrolled && !open} />
          <Link
            to="/contact"
            className="whitespace-nowrap rounded-full border border-gold-400 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.14em] text-gold-500 transition-colors hover:bg-gold-400 hover:text-maroon-900"
          >
            {t("home.hero.quoteBtn")}
          </Link>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <div className={scrolled || open ? "" : "brightness-95"}>
            <span className="[&_button]:!text-[10px]">
              <LanguageToggle dark={!(scrolled || open)} />
            </span>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 ${
              scrolled || open ? "text-maroon-800" : "text-ivory"
            }`}
          >
            <span className={`h-px w-6 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gold-300/20 bg-ivory transition-[max-height] duration-500 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm font-medium uppercase tracking-[0.14em] ${
                  isActive ? "bg-maroon-50 text-maroon-700" : "text-ink-soft"
                }`
              }
            >
              {t(l.key)}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 rounded-lg bg-maroon-700 px-3 py-2.5 text-center text-sm font-medium uppercase tracking-[0.12em] text-ivory"
          >
            {t("home.hero.quoteBtn")}
          </Link>
        </div>
      </div>
    </header>
  );
}
