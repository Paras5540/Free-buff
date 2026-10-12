import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import PhotoFrame from "../components/PhotoFrame";
import { SectionHeading, CTASection } from "../components/ui";
import { WhatsAppCTA } from "../components/WhatsAppButton";import { services } from "../data/services";
import { useLanguage } from "../components/LanguageProvider";
import { projects } from "../data/projects";

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Seo
        title={
          lang === "hi"
            ? "श्री साफा इवेंट डेकोरेशन — साफा, हल्दी, मेहंदी, बर्थडे व बैलून डेकोरेशन"
            : "Shree Safa Event Decoration — Safa, Haldi, Mehndi, Birthday & Balloon Decoration"
        }
        description={
          lang === "hi"
            ? "दूल्हा और बाराती पगड़ी, हल्दी, मेहंदी, रूम, बर्थडे और बैलून डेकोरेशन, स्मोक व कोल्ड फायर एंट्री। WhatsApp पर बुकिंग करें।"
            : "Dulha & barati safas, haldi, mehndi, room, birthday and balloon decoration with smoke & cold fire entries. Book your celebration on WhatsApp."
        }
      />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-maroon-800">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="slot-pattern h-full w-full opacity-[0.16]" />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/70 via-maroon-800/60 to-maroon-900/85" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-36 lg:px-8">
          <Reveal>
            <p className="eyebrow gold-rule text-gold-300">{t("home.hero.eyebrow")}</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              {t("home.hero.title1")}{" "}
              <em className="text-gold-300">{t("home.hero.title2")}</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75">
              {t("home.hero.sub")}
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-maroon-900 transition-all hover:bg-gold-300 hover:shadow-lg active:scale-[0.98]"
              >
                {t("home.hero.quoteBtn")}
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-ivory transition-colors hover:border-gold-300 hover:text-gold-200"
              >
                {t("home.hero.workBtn")}
              </Link>
              <WhatsAppCTA className="sm:ml-1" />
            </div>
          </Reveal>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden="true">
          <div className="h-12 w-px animate-pulse bg-gradient-to-b from-transparent to-gold-300" />
        </div>
      </section>

      {/* ── 2. PROFESSIONAL INTRODUCTION ────────────────────────── */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow text-gold-600">{t("home.intro.eyebrow")}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-maroon-800 sm:text-4xl">
              {t("home.intro.title1")} <em className="text-gold-500">{t("home.intro.title2")}</em>
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">{t("home.intro.para1")}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">{t("home.intro.para2")}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="text-sm font-semibold uppercase tracking-[0.14em] text-maroon-700 underline decoration-gold-400 decoration-2 underline-offset-8 transition-colors hover:text-maroon-500"
              >
                {t("home.intro.aboutBtn")}
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {[
              services[0].hero,
              services[1].hero,
              services[3].hero,
              services[7].hero,
            ].map((photo, i) => (
              <Reveal key={photo.slot} delay={((i % 2) + 1) as 1 | 2}>
                <div className={`img-zoom ${i % 2 === 0 ? "arch" : ""} border border-gold-300/40 shadow-sm`}>
                  <div className={photo.ratio ?? "aspect-[4/5]"}>
                    <PhotoFrame photo={photo} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. EVENT CATEGORIES ─────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            center
            eyebrow={t("home.categories.eyebrow")}
            title={<>{t("home.categories.title")}</>}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={((i % 4) as 1 | 2 | 3) || undefined}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-gold-300/30 bg-ivory shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="img-zoom aspect-[4/3]">
                    <PhotoFrame photo={s.hero} />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-maroon-800 group-hover:text-maroon-500">
                      {t(`svc.${s.slug}`)}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
                    <span className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">
                      {t("home.categories.view")}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED WORK ────────────────────────────────────── */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow={t("home.featured.eyebrow")} title={t("home.featured.title")} />
            <Reveal>
              <Link
                to="/portfolio"
                className="text-sm font-semibold uppercase tracking-[0.14em] text-maroon-700 underline decoration-gold-400 decoration-2 underline-offset-8 hover:text-maroon-500"
              >
                {t("home.featured.all")}
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={((i % 3) as 1 | 2) || undefined}>
                <Link
                  to={`/portfolio/${p.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-gold-300/30 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="img-zoom aspect-[4/3]">
                    <PhotoFrame photo={p.cover} />
                  </div>
                  <div className="bg-cream/60 p-5">
                    <p className="eyebrow text-gold-600">{t(`svc.${p.category}`)}</p>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-maroon-800 group-hover:text-maroon-500">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHAT WE CREATE (service list) ────────────────────── */}
      <section className="bg-maroon-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            dark
            eyebrow={t("home.services.eyebrow")}
            title={t("home.services.title")}
            center
          />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-x-10 gap-y-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} as="li" className="border-b border-ivory/10" delay={((i % 2) as 1 | 2)}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-4 py-4 text-ivory/85 transition-colors hover:text-gold-200"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs text-gold-400/80">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-lg">{t(`svc.${s.slug}`)}</span>
                  </span>
                  <span className="text-gold-400/60 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE US ────────────────────────────────────── */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading center eyebrow={t("home.why.eyebrow")} title={t("home.why.title")} />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: lang === "hi" ? "विशेष साफा शिल्प" : "Signature Safa Craft",
                body:
                  lang === "hi"
                    ? "दूल्हा व बाराती पगड़ी हाथ से बंधी — जिस शिल्प के नाम पर हमारी दुकान है।"
                    : "Dulha & barati pagdis tied by hand — the skill our studio is named after.",
              },
              {
                title: lang === "hi" ? "एक जगह पूरा डेकोरेशन" : "Decoration Under One Roof",
                body:
                  lang === "hi"
                    ? "साफा, हल्दी, मेहंदी, बैलून, रूम डेकोर और एंट्री इफेक्ट — पूरे उत्सव के लिए एक ही टीम।"
                    : "Safa, haldi, mehndi, balloons, room decor and entry effects — one team for the whole celebration.",
              },
              {
                title: lang === "hi" ? "समय पर, साइट पर" : "On-Site, On Time",
                body:
                  lang === "hi"
                    ? "मेहमान आने से पहले हम आपके घर या वेन्यू में योजना के अनुसार सेटअप कर देते हैं।"
                    : "We set up at your home or venue before your guests arrive, exactly to the plan.",
              },
              {
                title: lang === "hi" ? "आसान बुकिंग" : "Easy Booking",
                body:
                  lang === "hi"
                    ? "एक WhatsApp संदेश — इवेंट, तारीख और स्थान बताएं, बाकी हम संभाल लेंगे।"
                    : "One WhatsApp message with your event, date and venue — we handle the rest.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={((i % 4) as 1 | 2 | 3) || undefined}>
                <div className="h-full rounded-2xl border border-gold-300/30 bg-cream/50 p-6">
                  <span className="font-display text-3xl text-gold-400">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-maroon-800">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FULL-WIDTH VISUAL ────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <div className="slot-pattern absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-maroon-900/55" aria-hidden="true" />
        <div className="relative flex h-full items-center justify-center px-5 text-center">
          <Reveal>
            <p className="eyebrow gold-rule text-gold-300">{t("home.categories.eyebrow")}</p>
            <p className="mx-auto mt-5 max-w-3xl font-display text-3xl font-medium leading-snug text-ivory sm:text-4xl lg:text-5xl">
              {t("home.visual.quote")}
            </p>
            <p className="mt-3 text-sm tracking-wide text-ivory/70">{t("home.visual.attribution")}</p>
          </Reveal>
        </div>
      </section>

      {/* ── 8. PORTFOLIO PREVIEW + 9. CTA ───────────────────────── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading center eyebrow={t("home.portfolio.eyebrow")} title={t("home.portfolio.title")} />
          <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={((i % 3) as 1 | 2) || undefined}>
                <Link
                  to={`/portfolio/${p.slug}`}
                  className="img-zoom block overflow-hidden rounded-xl border border-gold-300/30 shadow-sm"
                >
                  <div className={p.cover.ratio ?? "aspect-[4/5]"}>
                    <PhotoFrame photo={p.cover} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
