import { Link } from "react-router-dom";
import { business } from "../data/business";
import { services } from "../data/services";
import { useLanguage } from "./LanguageProvider";
import type { TranslationKey } from "../data/translations";

const navLinks: { to: string; key: TranslationKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/portfolio", key: "nav.portfolio" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/contact", key: "nav.contact" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-maroon-800 text-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 md:pb-12 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-semibold tracking-wide text-gold-200">
              {business.nameUpper}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">
              {t("footer.tagline")}
            </p>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-gold-300 transition-colors hover:text-gold-100"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
              </svg>
              {business.instagramHandle}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow text-gold-400">{t("footer.quickLinks")}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-gold-200">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + contact */}
          <div>
            <p className="eyebrow text-gold-400">{t("footer.ourServices")}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="transition-colors hover:text-gold-200">
                    {t(`svc.${s.slug}`)}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-8 text-gold-400">{t("wa.book")}</p>
            <a
              href={`tel:${business.phoneIntl}`}
              className="mt-3 block font-display text-2xl text-gold-200 transition-colors hover:text-gold-100"
            >
              {business.phoneDisplay}
            </a>
            <p className="mt-1 text-sm text-ivory/60">
              {business.location}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-6 text-center text-xs text-ivory/50">
          {business.copyright} {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
