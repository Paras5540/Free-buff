import { useState, type FormEvent } from "react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { PageHero } from "../components/ui";
import { business, waDefaultMessage, waLink } from "../data/business";
import { services } from "../data/services";
import { useLanguage } from "../components/LanguageProvider";

const inputClass =
  "w-full rounded-lg border border-gold-300/50 bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-maroon-500 focus:outline-none focus:ring-2 focus:ring-maroon-500/15";

const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-ink-soft";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: services[0].name,
    eventDate: "",
    venue: "",
    requirement: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  /** The form composes a structured WhatsApp message — leads go straight to the business chat. */
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      lang === "hi"
        ? "नमस्ते श्री साफा इवेंट डेकोरेशन, मुझे डेकोरेशन कोटेशन चाहिए।"
        : "Hello Shree Safa Event Decoration, I would like a decoration quote.",
      ``,
      `${t("contact.form.name").replace(" *", "")}: ${form.name}`,
      `${t("contact.form.phone").replace(" *", "")}: ${form.phone}`,
      `${t("contact.form.eventType").replace(" *", "")}: ${form.eventType}`,
      form.eventDate && `${t("contact.form.eventDate")}: ${form.eventDate}`,
      form.venue && `${t("contact.form.venue")}: ${form.venue}`,
      form.requirement && `${t("contact.form.requirement")}: ${form.requirement}`,
      form.budget && `${t("contact.form.budget")}: ${form.budget}`,
      form.message && `${t("contact.form.message")}: ${form.message}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  };

  return (
    <>
      <Seo
        title={
          lang === "hi"
            ? "संपर्क करें — श्री साफा इवेंट डेकोरेशन"
            : "Contact — Shree Safa Event Decoration"
        }
        description={
          lang === "hi"
            ? "श्री साफा इवेंट डेकोरेशन से डेकोरेशन कोटेशन का अनुरोध करें — WhatsApp 97133 55304 या अपनी इवेंट जानकारी भेजें।"
            : "Request a decoration quote from Shree Safa Event Decoration — WhatsApp 97133 55304 or send your event details."
        }
      />

      <PageHero
        eyebrow={t("contact.hero.eyebrow")}
        title={t("contact.hero.title")}
        subtitle={t("contact.hero.sub")}
        crumbs={[{ label: t("nav.contact") }]}
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          {/* Form */}
          <Reveal>
            <form onSubmit={submit} className="rounded-3xl border border-gold-300/30 bg-cream/50 p-6 sm:p-9">
              <h2 className="font-display text-2xl font-semibold text-maroon-800 sm:text-3xl">
                {t("contact.form.title")}
              </h2>
              <p className="mt-2 text-sm text-ink-soft">{t("contact.form.sub")}</p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>{t("contact.form.name")}</label>
                  <input id="name" required value={form.name} onChange={(e) => set("name")(e.target.value)} className={inputClass} placeholder={t("contact.form.namePh")} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>{t("contact.form.phone")}</label>
                  <input id="phone" required type="tel" value={form.phone} onChange={(e) => set("phone")(e.target.value)} className={inputClass} placeholder={t("contact.form.phonePh")} />
                </div>
                <div>
                  <label htmlFor="eventType" className={labelClass}>{t("contact.form.eventType")}</label>
                  <select id="eventType" value={form.eventType} onChange={(e) => set("eventType")(e.target.value)} className={inputClass}>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Other Celebration">{lang === "hi" ? "अन्य सेलिब्रेशन" : "Other Celebration"}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="eventDate" className={labelClass}>{t("contact.form.eventDate")}</label>
                  <input id="eventDate" type="date" value={form.eventDate} onChange={(e) => set("eventDate")(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="venue" className={labelClass}>{t("contact.form.venue")}</label>
                  <input id="venue" value={form.venue} onChange={(e) => set("venue")(e.target.value)} className={inputClass} placeholder={t("contact.form.venuePh")} />
                </div>
                <div>
                  <label htmlFor="budget" className={labelClass}>{t("contact.form.budget")}</label>
                  <input id="budget" value={form.budget} onChange={(e) => set("budget")(e.target.value)} className={inputClass} placeholder={t("contact.form.budgetPh")} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="requirement" className={labelClass}>{t("contact.form.requirement")}</label>
                  <input id="requirement" value={form.requirement} onChange={(e) => set("requirement")(e.target.value)} className={inputClass} placeholder={t("contact.form.requirementPh")} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>{t("contact.form.message")}</label>
                  <textarea id="message" rows={4} value={form.message} onChange={(e) => set("message")(e.target.value)} className={inputClass} placeholder={t("contact.form.messagePh")} />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-maroon-700 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-maroon-600 active:scale-[0.99] sm:w-auto"
              >
                {t("contact.form.submit")}
              </button>
              {sent && (
                <p className="mt-4 rounded-lg border border-[#1faa53]/40 bg-[#e8f7ee] px-4 py-3 text-sm text-[#128c47]">
                  {t("contact.form.sent", { phone: business.phoneDisplay })}{" "}
                  <a href={waLink(waDefaultMessage)} target="_blank" rel="noopener noreferrer" className="underline">
                    {business.phoneDisplay}
                  </a>
                </p>
              )}
            </form>
          </Reveal>

          {/* Contact details — only verified information */}
          <Reveal delay={1}>
            <div className="space-y-5">
              <div className="rounded-2xl border border-gold-300/30 bg-cream/50 p-6">
                <p className="eyebrow text-gold-600">{t("contact.waPhone")}</p>
                <a href={`tel:${business.phoneIntl}`} className="mt-2 block font-display text-3xl font-semibold text-maroon-800 hover:text-maroon-500">
                  {business.phoneDisplay}
                </a>
                <p className="mt-1 text-sm text-ink-soft">{t("contact.waPhoneSub")}</p>
                <a
                  href={waLink(t("wa.defaultMessage"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1faa53] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#178a43]"
                >
                  {t("contact.waChat")}
                </a>
              </div>

              <div className="rounded-2xl border border-gold-300/30 bg-cream/50 p-6">
                <p className="eyebrow text-gold-600">Instagram</p>
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-display text-xl font-semibold text-maroon-800 hover:text-maroon-500"
                >
                  {business.instagramHandle}
                </a>
                <p className="mt-1 text-sm text-ink-soft">{t("contact.insta.sub")}</p>
              </div>

              <div className="rounded-2xl border border-gold-300/30 bg-cream/50 p-6">
                <p className="eyebrow text-gold-600">{t("contact.area")}</p>
                <p className="mt-2 font-display text-xl font-semibold text-maroon-800">{business.serviceArea}</p>
                <p className="mt-1 text-sm text-ink-soft">{t("contact.area.sub")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
