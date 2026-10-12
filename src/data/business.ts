/**
 * ─────────────────────────────────────────────────────────────────────────
 * BUSINESS FACTS — single source of truth
 * ─────────────────────────────────────────────────────────────────────────
 * Every fact below is taken from the business's official Instagram profile
 * (@shree_safa_event_decoration_) — its bio and public post captions:
 *
 *   Bio (Hindi): "हमारे यहां दूल्हा पगड़ी एव बाराती पगड़ी बांधी जाती हैं।
 *   बैलून हल्दी, मेहंदी, रूम, बर्थडे डेकोरेशन। स्मोक एंट्री कोल्ड फायर
 *   एंट्री उपल्ब्ध है। मो.9713355304"
 *
 * Nothing here is invented. If a detail needs to change, edit this one file.
 */

export const business = {
  name: "Shree Safa Event Decoration",
  nameUpper: "SHREE SAFA EVENT DECORATION",
  shortName: "Shree Safa",
  tagline: "We Turn Every Celebration Into a Beautiful Memory.",

  /** From the Instagram bio: "मो.9713355304" */
  phoneDisplay: "97133 55304",
  phoneIntl: "+919713355304",
  whatsapp: "919713355304",

  instagram: "https://www.instagram.com/shree_safa_event_decoration_/",
  instagramHandle: "@shree_safa_event_decoration_",

  /** The account itself captions posts "Shree safa event barhi" —
   *  Barhi, Katni district, Madhya Pradesh. Edit here if this changes. */
  location: "Barhi, Madhya Pradesh",
  serviceArea: "Barhi & surrounding areas, Madhya Pradesh",

  copyright: "© 2026 Shree Safa Event Decoration. All Rights Reserved.",

  /** Short bio line, translated from the official Instagram bio */
  bioLine:
    "Dulha & barati pagdis tied with care — plus balloon, haldi, mehndi, room and birthday decoration, with smoke & cold fire entries available.",
} as const;

/** Build a WhatsApp enquiry link with a contextual pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Default WhatsApp enquiry message (used by the floating button). */
export const waDefaultMessage = `Hello Shree Safa Event Decoration, I would like to enquire about decoration for my event.`;

/** Category-specific enquiry message. */
export function waCategoryMessage(serviceName: string): string {
  return `Hello, I am interested in your ${serviceName} services. Please share the details and quotation.`;
}
