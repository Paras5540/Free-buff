import { business, waLink } from "../data/business";
import { useLanguage } from "./LanguageProvider";

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Zm-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.88-9.9 9.88Zm8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.33-1.66a11.88 11.88 0 0 0 5.66 1.44h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41Z" />
    </svg>
  );
}

/**
 * The one shared WhatsApp button. Two professional variants:
 *  - solid: green filled (primary CTA)
 *  - outline: quiet, used where a solid green would compete with other CTAs
 */
export function WhatsAppCTA({
  message,
  label,
  variant = "solid",
  className = "",
}: {
  message?: string;
  label?: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const { t } = useLanguage();
  const href = waLink(message ?? t("wa.defaultMessage"));
  const styles =
    variant === "solid"
      ? "bg-[#1faa53] text-white hover:bg-[#178a43] hover:shadow-lg"
      : "border border-[#1faa53]/50 bg-ivory text-[#128c47] hover:bg-[#e8f7ee]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all active:scale-[0.98] ${styles} ${className}`}
    >
      <WhatsAppIcon />
      {label ?? t("wa.book")}
    </a>
  );
}

/**
 * Floating WhatsApp button — desktop only. On mobile the sticky
 * Call/WhatsApp bar does this job, so we never show two at once.
 */
export function WhatsAppFloat() {
  const { t } = useLanguage();
  return (
    <a
      href={waLink(t("wa.defaultMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${business.name}`}
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#1faa53] text-white shadow-xl transition-transform hover:scale-105 md:flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

/** Sticky mobile bottom bar with a direct call/WhatsApp CTA. */
export function MobileCTABar() {
  const { t } = useLanguage();
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold-300/40 bg-ivory/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${business.phoneIntl}`}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-maroon-700"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9Z" />
        </svg>
        {t("nav.contact")}
      </a>
      <a
        href={waLink(t("wa.defaultMessage"))}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#1faa53] py-3.5 text-sm font-medium text-white"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
