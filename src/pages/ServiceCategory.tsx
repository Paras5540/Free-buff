import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import PhotoFrame from "../components/PhotoFrame";
import Lightbox from "../components/Lightbox";
import { PageHero, CTASection } from "../components/ui";
import { WhatsAppCTA } from "../components/WhatsAppButton";
import { waCategoryMessage } from "../data/business";
import { serviceBySlug, services, type Photo } from "../data/services";
import { projectsByCategory } from "../data/projects";
import { useLanguage } from "../components/LanguageProvider";
import NotFound from "./NotFound";

export default function ServiceCategory() {
  const { slug } = useParams();
  const service = serviceBySlug(slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t, lang } = useLanguage();

  if (!service) return <NotFound />;

  const name = t(`svc.${service.slug}`);
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const categoryProjects = projectsByCategory(service.slug);
  const gallery: Photo[] = [service.hero, ...service.gallery];

  return (
    <>
      <Seo
        title={`${name} — ${lang === "hi" ? "श्री साफा इवेंट डेकोरेशन" : "Shree Safa Event Decoration"}`}
        description={service.blurb}
      />

      <PageHero
        eyebrow={t("common.service")}
        title={name}
        subtitle={service.blurb}
        crumbs={[{ label: t("nav.services"), to: "/services" }, { label: name }]}
      >
        <Reveal delay={2}>
          <div className="mt-8">
            <WhatsAppCTA
              message={waCategoryMessage(name)}
              label={`${t("services.card.enquire")} — ${name}`}
            />
          </div>
        </Reveal>
      </PageHero>

      {/* Introduction */}
      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <Reveal>
            <p className="eyebrow text-gold-600">{t("svc.about.eyebrow")}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-maroon-800">
              {t("svc.about.title", { short: name })}
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">{service.description}</p>
            <ul className="mt-6 grid gap-2.5 text-sm text-ink-soft sm:grid-cols-2">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-400" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={1}>
            <div className="img-zoom overflow-hidden rounded-3xl border border-gold-300/30 shadow-sm">
              <div className="aspect-[4/3]">
                <PhotoFrame photo={service.hero} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured projects in this category */}
      {categoryProjects.length > 0 && (
        <section className="bg-cream py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-maroon-800">
                {t("svc.projects.title", { short: name })}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProjects.map((p, i) => (
                <Reveal key={p.slug} delay={((i % 3) as 1 | 2) || undefined}>
                  <Link
                    to={`/portfolio/${p.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-gold-300/30 shadow-sm transition-shadow hover:shadow-xl"
                  >
                    <div className="img-zoom aspect-[4/3]">
                      <PhotoFrame photo={p.cover} />
                    </div>
                    <div className="bg-ivory p-5">
                      <h3 className="font-display text-xl font-semibold text-maroon-800 group-hover:text-maroon-500">
                        {p.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{p.description}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full gallery */}
      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-maroon-800">
              {t("svc.gallery.title", { short: name })}
            </h2>
            <p className="mt-2 text-sm text-ink-soft">{t("svc.gallery.sub")}</p>
          </Reveal>
          <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            {gallery.map((photo, i) => (
              <Reveal key={photo.slot} delay={((i % 3) as 1 | 2) || undefined}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="img-zoom block w-full overflow-hidden rounded-xl border border-gold-300/30 shadow-sm"
                  aria-label={`View photo: ${photo.alt}`}
                >
                  <div className={photo.ratio ?? "aspect-[4/5]"}>
                    <PhotoFrame photo={photo} />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related categories */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-maroon-800">
              {t("svc.related.title")}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((s) => (
              <Reveal key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-gold-300/30 bg-ivory px-5 py-4 transition-shadow hover:shadow-md"
                >
                  <span className="font-display text-lg font-semibold text-maroon-800 group-hover:text-maroon-500">
                    {t(`svc.${s.slug}`)}
                  </span>
                  <span className="text-gold-600">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t("svc.cta.title", { short: name })}
        message={waCategoryMessage(name)}
      />

      <Lightbox
        photos={gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
