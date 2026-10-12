import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import PhotoFrame from "../components/PhotoFrame";
import { PageHero, CTASection } from "../components/ui";
import { business } from "../data/business";
import { services } from "../data/services";
import { useLanguage } from "../components/LanguageProvider";

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Seo
        title={
          lang === "hi"
            ? "हमारे बारे में — श्री साफा इवेंट डेकोरेशन"
            : "About Us — Shree Safa Event Decoration"
        }
        description={
          lang === "hi"
            ? "श्री साफा इवेंट डेकोरेशन: हाथ से बंधी दूल्हा व बाराती पगड़ी, और हल्दी, मेहंदी, रूम, बर्थडे व बैलून डेकोरेशन स्मोक व कोल्ड फायर एंट्री के साथ।"
            : "Shree Safa Event Decoration: hand-tied dulha & barati pagdis plus haldi, mehndi, room, birthday and balloon decoration with smoke & cold fire entries."
        }
      />

      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={t("about.hero.title")}
        subtitle={t("about.hero.sub", { handle: business.instagramHandle })}
        crumbs={[{ label: t("nav.about") }]}
      />

      {/* Who we are */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow text-gold-600">{t("about.who.eyebrow")}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-maroon-800 sm:text-4xl">
              {t("about.who.title")}
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              {t("about.who.para1", { location: business.location })}{" "}
              {lang === "hi" && (
                <em>“हमारे यहां दूल्हा पगड़ी एवं बाराती पगड़ी बांधी जाती हैं”</em>
              )}
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">{t("about.who.para2")}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">{t("about.who.para3")}</p>
          </Reveal>
          <div className="space-y-4">
            <Reveal>
              <div className="img-zoom overflow-hidden rounded-2xl border border-gold-300/30 shadow-sm">
                <div className="aspect-[16/10]">
                  <PhotoFrame photo={{ slot: "about-studio", src: "/images/ig-room-3.jpg", alt: "Shree Safa Event Decoration at work", ratio: "aspect-[16/10]" }} />
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={1}>
                <div className="img-zoom overflow-hidden rounded-2xl border border-gold-300/30 shadow-sm">
                  <div className="aspect-[4/5]">
                    <PhotoFrame photo={services[0].hero} />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div className="img-zoom overflow-hidden rounded-2xl border border-gold-300/30 shadow-sm">
                  <div className="aspect-[4/5]">
                    <PhotoFrame photo={services[3].hero} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow gold-rule text-gold-600">{t("about.approach.eyebrow")}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-maroon-800 sm:text-4xl">
              {t("about.approach.title")}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: t("about.step1.title"), body: t("about.step1.body") },
              { step: "02", title: t("about.step2.title"), body: t("about.step2.body") },
              { step: "03", title: t("about.step3.title"), body: t("about.step3.body") },
            ].map((s, i) => (
              <Reveal key={s.step} delay={((i % 3) as 1 | 2) || undefined}>
                <div className="h-full rounded-2xl border border-gold-300/30 bg-ivory p-7 shadow-sm">
                  <span className="font-display text-4xl font-semibold text-gold-400">{s.step}</span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-maroon-800">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* What we value */}
          <div className="mt-16 grid gap-6 rounded-3xl border border-gold-300/30 bg-maroon-800 p-8 text-ivory sm:p-12 md:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold text-gold-200 sm:text-3xl">
                {t("about.values.title")}
              </h3>
              <p className="mt-4 leading-relaxed text-ivory/75">{t("about.values.body")}</p>
            </Reveal>
            <Reveal delay={1}>
              <ul className="space-y-3 text-sm text-ivory/80">
                {([
                  "about.value1",
                  "about.value2",
                  "about.value3",
                  "about.value4",
                  "about.value5",
                ] as const).map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-400" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title={t("wa.ctaTitle")}
        message={t("wa.defaultMessage")}
      />
    </>
  );
}
