import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { waLink } from "../data/business";
import { useLanguage } from "../components/LanguageProvider";

export default function NotFound() {
  const { t, lang } = useLanguage();
  return (
    <>
      <Seo
        title={
          lang === "hi"
            ? "पेज नहीं मिला — श्री साफा इवेंट डेकोरेशन"
            : "Page Not Found — Shree Safa Event Decoration"
        }
        description={t("common.notFound.body")}
      />
      <section className="flex min-h-[80svh] items-center justify-center bg-maroon-800 px-5 pt-24 text-center">
        <div>
          <p className="eyebrow gold-rule text-gold-300">404</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ivory sm:text-5xl">
            {t("common.notFound.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-ivory/70">{t("common.notFound.body")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-maroon-900 transition-colors hover:bg-gold-300"
            >
              {t("common.backHome")}
            </Link>
            <a
              href={waLink(t("wa.defaultMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ivory/40 px-7 py-3 text-sm font-medium text-ivory transition-colors hover:border-gold-300 hover:text-gold-200"
            >
              {t("wa.book")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
