import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import PhotoFrame from "../components/PhotoFrame";
import { PageHero, CTASection } from "../components/ui";
import { WhatsAppCTA } from "../components/WhatsAppButton";
import { waCategoryMessage } from "../data/business";
import { services } from "../data/services";
import { useLanguage } from "../components/LanguageProvider";

export default function Services() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Seo
        title={
          lang === "hi"
            ? "सेवाएं — श्री साफा इवेंट डेकोरेशन"
            : "Services — Shree Safa Event Decoration"
        }
        description={
          lang === "hi"
            ? "साफा व पगड़ी बांधना, हल्दी, मेहंदी, बर्थडे, वेलकम-बेबी, रूम और बैलून डेकोरेशन, साथ में स्मोक व कोल्ड फायर एंट्री।"
            : "Safa & pagdi tying, haldi, mehndi, birthday, welcome-baby, room and balloon decoration, plus smoke & cold fire entries."
        }
      />

      <PageHero
        eyebrow={t("services.hero.eyebrow")}
        title={t("services.hero.title")}
        subtitle={t("services.hero.sub")}
        crumbs={[{ label: t("nav.services") }]}
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-20 px-5 lg:px-8">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="img-zoom group block overflow-hidden rounded-3xl border border-gold-300/30 shadow-sm"
                >
                  <div className={s.hero.ratio ?? "aspect-[4/5]"}>
                    <PhotoFrame photo={s.hero} />
                  </div>
                </Link>
                <div className={i % 2 === 1 ? "lg:pr-8" : "lg:pl-8"}>
                  <p className="eyebrow text-gold-600">{String(i + 1).padStart(2, "0")} · {t("common.service")}</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-maroon-800 sm:text-4xl">
                    {t(`svc.${s.slug}`)}
                  </h2>
                  <p className="mt-4 leading-relaxed text-ink-soft">{s.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                    {s.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      to={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-maroon-700 px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-maroon-600"
                    >
                      {t("services.card.view")}
                    </Link>
                    <WhatsAppCTA
                      message={waCategoryMessage(t(`svc.${s.slug}`))}
                      label={t("services.card.enquire")}
                      variant="outline"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
