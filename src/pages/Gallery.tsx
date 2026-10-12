import { useMemo, useState } from "react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import PhotoFrame from "../components/PhotoFrame";
import Lightbox from "../components/Lightbox";
import { PageHero, CTASection } from "../components/ui";
import { portfolioFilters } from "../data/projects";
import { services, type Photo } from "../data/services";
import { useLanguage } from "../components/LanguageProvider";

/** All category galleries flattened into one browsable collection. */
const allPhotos: { photo: Photo; category: string }[] = services.flatMap((s) =>
  [s.hero, ...s.gallery].map((photo) => ({ photo, category: s.slug })),
);

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t, lang } = useLanguage();

  const visible = useMemo(
    () =>
      (filter === "all"
        ? allPhotos
        : allPhotos.filter((p) => p.photo.slot.startsWith(categorySlotPrefix(filter)))
      ).map((p) => p.photo),
    [filter],
  );

  return (
    <>
      <Seo
        title={
          lang === "hi"
            ? "गैलरी — श्री साफा इवेंट डेकोरेशन"
            : "Gallery — Shree Safa Event Decoration"
        }
        description={
          lang === "hi"
            ? "श्री साफा इवेंट डेकोरेशन की पूरी फोटो गैलरी — साफा, हल्दी, मेहंदी, बर्थडे, बेबी वेलकम, रूम, बैलून और एंट्री इफेक्ट।"
            : "Full photo gallery of decoration work by Shree Safa Event Decoration — safas, haldi, mehndi, birthdays, baby welcomes, rooms, balloons and entry effects."
        }
      />

      <PageHero
        eyebrow={t("gallery.hero.eyebrow")}
        title={t("gallery.hero.title")}
        subtitle={t("gallery.hero.sub")}
        crumbs={[{ label: t("nav.gallery") }]}
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
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
                  {f.slug === "all" ? t("portfolio.filter.all") : t(`svc.${f.slug}`)}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="masonry mt-10">
            {visible.map((photo, i) => (
              <Reveal key={`${filter}-${photo.slot}`} delay={((i % 3) as 1 | 2) || undefined}>
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

      <CTASection />

      <Lightbox
        photos={visible}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}

/** Map a service slug back to its photo-slot prefix (e.g. haldi-decoration → haldi-). */
function categorySlotPrefix(slug: string): string {
  const map: Record<string, string> = {
    "safa-pagdi": "safa-",
    "haldi-decoration": "haldi-",
    "mehndi-decoration": "mehndi-",
    "birthday-decoration": "birthday-",
    "welcome-baby": "baby-",
    "room-decoration": "room-",
    "balloon-decoration": "balloon-",
    "smoke-cold-fire-entry": "entry-",
  };
  return map[slug] ?? "";
}
