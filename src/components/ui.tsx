import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { business } from "../data/business";
import { WhatsAppCTA } from "./WhatsAppButton";
import { useLanguage } from "./LanguageProvider";

export function SectionHeading({
  eyebrow,
  title,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <p className={`eyebrow ${dark ? "text-gold-300" : "text-gold-600"} ${center ? "gold-rule" : ""}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-ivory" : "text-maroon-800"
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  const { t } = useLanguage();
  return (
    <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.18em] text-ivory/70">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/" className="transition-colors hover:text-gold-200">
            {t("nav.home")}
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <span className="text-gold-300/70">/</span>
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-gold-200">
                {item.label}
              </Link>
            ) : (
              <span className="text-gold-200">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Dark page hero used on inner pages. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumbs: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-maroon-800 pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #d9bc7a 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, #d9bc7a 1px, transparent 1.5px)",
          backgroundSize: "36px 36px, 36px 36px",
          backgroundPosition: "0 0, 18px 18px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Breadcrumbs items={crumbs} />
        <Reveal>
          <p className="eyebrow mt-8 text-gold-300">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/70">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/** Full-width enquiry CTA band used at the bottom of pages. */
export function CTASection({
  title,
  message,
}: {
  title?: string;
  message?: string;
}) {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-maroon-800 py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(#d9bc7a 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="eyebrow gold-rule text-gold-300">{t("wa.book")}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ivory sm:text-4xl lg:text-5xl">
            {title ?? t("wa.ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ivory/70">
            {business.phoneDisplay} · {t("wa.ctaBody")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppCTA message={message} />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gold-300/60 px-6 py-3 text-sm font-medium text-gold-200 transition-colors hover:bg-gold-300/10"
            >
              {t("home.hero.quoteBtn")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
