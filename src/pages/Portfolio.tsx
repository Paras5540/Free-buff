import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import PhotoFrame from "../components/PhotoFrame";
import { PageHero, CTASection } from "../components/ui";
import { portfolioFilters, projects } from "../data/projects";
import { useLanguage } from "../components/LanguageProvider";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const { t, lang } = useLanguage();

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const filterLabel = (slug: string) =>
    slug === "all" ? t("portfolio.filter.all") : t(`svc.${slug}`);

  return (
    <>
      <Seo
        title={
          lang === "hi"
            ? "पोर्टफोलियो — श्री साफा इवेंट डेकोरेशन"
            : "Portfolio — Shree Safa Event Decoration"
        }
        description={
          lang === "hi"
            ? "श्री साफा इवेंट डेकोरेशन का असली डेकोरेशन काम — साफा व पगड़ी, हल्दी, मेहंदी, बर्थडे, वेलकम-बेबी, रूम, बैलून और एंट्री इफेक्ट।"
            : "Real decoration work by Shree Safa Event Decoration — safa & pagdi, haldi, mehndi, birthday, welcome-baby, room, balloon and entry effects."
        }
      />

      <PageHero
        eyebrow={t("portfolio.hero.eyebrow")}
        title={t("portfolio.hero.title")}
        subtitle={t("portfolio.hero.sub")}
        crumbs={[{ label: t("nav.portfolio") }]}
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
              {portfolioFilters.map((f) => (
                <button
                  key={f.slug}
                  role="tab"
                  aria-selected={filter === f.slug}
                  onClick={() => setFilter(f.slug)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-all ${
                    filter === f.slug
                      ? "border-maroon-700 bg-maroon-700 text-ivory"
                      : "border-gold-300/50 bg-ivory text-ink-soft hover:border-gold-400 hover:text-maroon-700"
                  }`}
                >
                  {filterLabel(f.slug)}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {visible.map((p, i) => (
              <Reveal key={p.slug} delay={((i % 3) as 1 | 2) || undefined}>
                <Link
                  to={`/portfolio/${p.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-gold-300/30 bg-ivory shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="img-zoom">
                    <div className={p.cover.ratio ?? "aspect-[4/5]"}>
                      <PhotoFrame photo={p.cover} />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="eyebrow text-gold-600">{t(`svc.${p.category}`)}</p>
                    <h2 className="mt-1.5 font-display text-2xl font-semibold text-maroon-800 group-hover:text-maroon-500">
                      {p.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{p.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-16 text-center text-ink-soft">{t("portfolio.empty")}</p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
