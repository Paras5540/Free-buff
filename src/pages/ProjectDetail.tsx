import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import PhotoFrame from "../components/PhotoFrame";
import Lightbox from "../components/Lightbox";
import { Breadcrumbs, CTASection } from "../components/ui";
import { WhatsAppCTA } from "../components/WhatsAppButton";
import { projectBySlug, projects } from "../data/projects";
import { serviceBySlug } from "../data/services";
import { useLanguage } from "../components/LanguageProvider";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectBySlug(slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t, lang } = useLanguage();

  if (!project) return <NotFound />;

  const service = serviceBySlug(project.category);
  const related = projects
    .filter((p) => p.slug !== project.slug)
    .sort((a, b) => (a.category === project.category ? -1 : 0) - (b.category === project.category ? -1 : 0))
    .slice(0, 3);
  const gallery = [project.cover, ...project.gallery];
  const enquiryMessage = t("proj.enquiry", { title: project.title });

  return (
    <>
      <Seo
        title={`${project.title} — ${t("nav.portfolio")} — ${lang === "hi" ? "श्री साफा इवेंट डेकोरेशन" : "Shree Safa Event Decoration"}`}
        description={project.description}
      />

      {/* Cover */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-maroon-800">
        <div className="absolute inset-0 opacity-40" aria-hidden="true">
          <div className="slot-pattern h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-maroon-900/40 to-maroon-900/30" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-36 lg:px-8">
          <Breadcrumbs
            items={[
              { label: t("nav.portfolio"), to: "/portfolio" },
              { label: t(`svc.${project.category}`), to: service ? `/services/${service.slug}` : undefined },
              { label: project.title },
            ]}
          />
          <Reveal>
            <p className="eyebrow mt-8 text-gold-300">{t(`svc.${project.category}`)}</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-ivory sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-ivory/75">{project.description}</p>
          </Reveal>
        </div>
      </section>

      {/* Details + gallery */}
      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div>
              <Reveal>
                <button
                  onClick={() => setLightboxIndex(0)}
                  className="img-zoom block w-full overflow-hidden rounded-3xl border border-gold-300/30 shadow-sm"
                  aria-label="Open project cover"
                >
                  <div className="aspect-[16/10]">
                    <PhotoFrame photo={project.cover} eager />
                  </div>
                </button>
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((photo, i) => (
                  <Reveal key={photo.slot} delay={((i % 2) as 1 | 2)}>
                    <button
                      onClick={() => setLightboxIndex(i + 1)}
                      className="img-zoom block w-full overflow-hidden rounded-2xl border border-gold-300/30 shadow-sm"
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

            {/* Sidebar */}
            <aside className="space-y-6">
              <Reveal>
                <div className="rounded-2xl border border-gold-300/30 bg-cream/60 p-6">
                  <p className="eyebrow text-gold-600">{t("proj.category")}</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-maroon-800">
                    {t(`svc.${project.category}`)}
                  </p>
                  {service && (
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-2 inline-block text-sm text-gold-600 underline underline-offset-4 hover:text-maroon-600"
                    >
                      {t("proj.aboutLink")}
                    </Link>
                  )}
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div className="rounded-2xl border border-gold-300/30 bg-cream/60 p-6">
                  <p className="eyebrow text-gold-600">{t("proj.highlights")}</p>
                  <ul className="mt-3 space-y-2.5 text-sm text-ink-soft">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div className="rounded-2xl bg-maroon-800 p-6 text-center">
                  <p className="font-display text-2xl font-semibold text-gold-200">
                    {t("proj.sidebar.title")}
                  </p>
                  <p className="mt-2 text-sm text-ivory/70">{t("proj.sidebar.body")}</p>
                  <div className="mt-5 flex flex-col gap-3">
                    <WhatsAppCTA message={enquiryMessage} label={t("proj.sidebar.quote")} />
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-gold-300/60 px-6 py-3 text-sm font-medium text-gold-200 transition-colors hover:bg-gold-300/10"
                    >
                      {t("proj.sidebar.request")}
                    </Link>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>

          {/* Related projects */}
          <div className="mt-20">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-maroon-800">
                {t("proj.more.title")}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Reveal key={p.slug}>
                  <Link
                    to={`/portfolio/${p.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-gold-300/30 shadow-sm transition-shadow hover:shadow-xl"
                  >
                    <div className="img-zoom aspect-[4/3]">
                      <PhotoFrame photo={p.cover} />
                    </div>
                    <div className="bg-cream/60 p-4">
                      <p className="eyebrow text-gold-600">{t(`svc.${p.category}`)}</p>
                      <h3 className="mt-1 font-display text-lg font-semibold text-maroon-800 group-hover:text-maroon-500">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection message={enquiryMessage} />

      <Lightbox
        photos={gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
