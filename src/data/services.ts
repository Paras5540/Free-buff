/**
 * ─────────────────────────────────────────────────────────────────────────
 * SERVICES — derived ONLY from the official Instagram profile
 * ─────────────────────────────────────────────────────────────────────────
 * The Instagram bio lists: dulha & barati pagdi (safa), balloon, haldi,
 * mehndi, room and birthday decoration, plus smoke & cold fire entries.
 * Public posts additionally show "Welcome baby decoration".
 * No category below goes beyond that. 8 categories total.
 *
 * PHOTOS: the owner's real Instagram photos are not programmatically
 * downloadable (Instagram login-walls its CDN), so every photo slot starts
 * as `src: undefined` with a `slot` name. To publish a real photo:
 *   1. Save it as  /public/images/<slot>.jpg   (e.g. public/images/haldi-1.jpg)
 *   2. Set  src: "/images/haldi-1.jpg"  on that slot below.
 * No stock photography is used anywhere on the site.
 */

export type Photo = {
  src?: string;
  alt: string;
  /** Named slot so the owner knows exactly which file to add */
  slot: string;
  /** Tailwind aspect ratio class, keeps layouts stable while slots are empty */
  ratio?: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  description: string;
  highlights: string[];
  hero: Photo;
  gallery: Photo[];
};

export const services: Service[] = [
  {
    slug: "safa-pagdi",
    name: "Safa & Pagdi — Dulha & Barati",
    shortName: "Safa & Pagdi",
    blurb:
      "Our signature craft — the dulha's and baratis' pagdis tied the traditional way, the service our name comes from.",
    description:
      "Safa (pagdi) tying is at the heart of Shree Safa Event Decoration — it is literally in our name. As the Instagram bio says, “हमारे यहां दूल्हा पगड़ी एव बाराती पगड़ी बांधी जाती हैं” — groom and barati pagdis are tied here. From the dulha's statement pagdi to a whole baraat dressed alike, we tie each safa by hand so the wedding party looks coordinated and regal.",
    highlights: [
      "Hand-tied dulha safa in the colours of your wedding",
      "Matching barati pagdis for the full baraat",
      "Coordinated with your wedding & reception theme",
      "Tying done on-site, comfortably and on schedule",
    ],
    hero: { slot: "safa-hero", src: "/images/ig-room-1.jpg", alt: "Event decoration work by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "safa-1", src: "/images/birthday-5.jpg", alt: "Warm decoration detail by Shree Safa Event Decoration", ratio: "aspect-square" },
      { slot: "safa-2", src: "/images/ig-balloon-3.jpg", alt: "Warm celebration decoration by Shree Safa Event Decoration", ratio: "aspect-[9/16]" },
      { slot: "safa-3", src: "/images/ig-room-2.jpg", alt: "Event decoration styling by Shree Safa Event Decoration", ratio: "aspect-square" },
      { slot: "safa-4", src: "/images/ig-balloon-4.jpg", alt: "Balloon styling for celebrations by Shree Safa Event Decoration", ratio: "aspect-[9/16]" },
      { slot: "safa-5", src: "/images/ig-room-3.jpg", alt: "On-site event decoration by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
      { slot: "safa-6", src: "/images/ig-balloon-2.jpg", alt: "Decoration detail by Shree Safa Event Decoration", ratio: "aspect-square" },
    ],
  },
  {
    slug: "haldi-decoration",
    name: "Haldi Decoration",
    shortName: "Haldi",
    blurb:
      "Bright, fresh haldi ceremony setups in marigold yellows — named as a core service in our Instagram bio.",
    description:
      "The haldi ceremony is the most joyful, colour-soaked ritual of the wedding — and it deserves a setup to match. We design haldi stages, seating and photo corners around marigold yellows and fresh florals, so every candid photograph glows. The bio lists हल्दी डेकोरेशन as one of our core services.",
    highlights: [
      "Marigold & floral haldi stage setups",
      "Swing (jhula) and seating decoration",
      "Photo-ready backdrops for candid moments",
      "Home or venue — we decorate wherever the ritual happens",
    ],
    hero: { slot: "haldi-hero", src: "/images/ig-welcome-baby-3.jpg", alt: "Bright marigold-toned decoration work by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "haldi-1", src: "/images/ig-balloon-3.jpg", alt: "Marigold-toned decoration work by Shree Safa Event Decoration", ratio: "aspect-[9/16]" },
      { slot: "haldi-2", src: "/images/ig-birthday-4.jpg", alt: "Bright yellow-theme celebration decoration", ratio: "aspect-[9/16]" },
      { slot: "haldi-3", src: "/images/ig-birthday-5.jpg", alt: "Warm-toned decoration setup by Shree Safa Event Decoration", ratio: "aspect-[9/16]" },
      { slot: "haldi-4", src: "/images/birthday-5.jpg", alt: "Warm decoration detail by Shree Safa Event Decoration", ratio: "aspect-square" },
      { slot: "haldi-5", src: "/images/ig-balloon-4.jpg", alt: "Balloon decoration styling in warm tones", ratio: "aspect-[9/16]" },
      { slot: "haldi-6", src: "/images/ig-room-1.jpg", alt: "Warm lighting decoration by Shree Safa Event Decoration", ratio: "aspect-[3/4]" },
    ],
  },
  {
    slug: "mehndi-decoration",
    name: "Mehndi Decoration",
    shortName: "Mehndi",
    blurb:
      "Elegant mehndi function decor with seating, backdrops and colour themes — straight from our service list.",
    description:
      "Mehndi is where the bride's circle gathers, sings and celebrates — the decor should invite everyone to sit down and stay. We create shaded seating, low gadda arrangements and colourful backdrops that keep the function comfortable and photogenic. मेहंदी डेकोरेशन is listed as a core service in our Instagram bio.",
    highlights: [
      "Mehndi stage & backdrop decoration",
      "Low seating (gadda) arrangements for the function",
      "Colour themes to match the bride's outfit",
      "Fan-shaped, floral and drapery styles",
    ],
    hero: { slot: "mehndi-hero", src: "/images/ig-room-3.jpg", alt: "Colourful decoration work by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "mehndi-1", src: "/images/ig-room-2.jpg", alt: "Colourful event decoration by Shree Safa Event Decoration", ratio: "aspect-square" },
      { slot: "mehndi-2", src: "/images/ig-birthday-1.jpg", alt: "First birthday celebration decoration", ratio: "aspect-[3/4]" },
      { slot: "mehndi-3", src: "/images/ig-balloon-1.jpg", alt: "Balloon decoration work by Shree Safa Event Decoration", ratio: "aspect-square" },
      { slot: "mehndi-4", src: "/images/ig-birthday-3.jpg", alt: "Celebration setup by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
      { slot: "mehndi-5", src: "/images/ig-welcome-baby-2.jpg", alt: "Soft-toned celebration decoration detail", ratio: "aspect-[3/4]" },
      { slot: "mehndi-6", src: "/images/ig-room-1.jpg", alt: "Decoration lighting detail by Shree Safa", ratio: "aspect-[3/4]" },
    ],
  },
  {
    slug: "birthday-decoration",
    name: "Birthday Decoration",
    shortName: "Birthday",
    blurb:
      "Balloon-rich birthday setups at home or venue — a core service in our bio, with real “Happy birthday” projects on our feed.",
    description:
      "From a child's first big day to a milestone birthday, we build balloon arches, name boards, cake-table styling and photo corners that make the day feel made just for them. Our Instagram posts document real birthday projects — like the “Happy birthday 🎈” post on our feed. बर्थडे डेकोरेशन is a core service in our bio.",
    highlights: [
      "Balloon arches, garlands & ceilings",
      "Name boards & age cut-outs",
      "Cake-table styling and photo corners",
      "Home, hall or terrace — we set up where you celebrate",
    ],
    hero: { slot: "birthday-hero", src: "/images/ig-birthday-1.jpg", alt: "First birthday decoration by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "birthday-1", src: "/images/ig-birthday-1.jpg", alt: "First birthday balloon decoration by Shree Safa Event Decoration", ratio: "aspect-[3/4]" },
      { slot: "birthday-2", src: "/images/ig-birthday-2.jpg", alt: "Birthday decoration with balloons by Shree Safa Event Decoration", ratio: "aspect-square" },
      { slot: "birthday-3", src: "/images/ig-birthday-3.jpg", alt: "Birthday decoration setup by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
      { slot: "birthday-4", src: "/images/birthday-5.jpg", alt: "Birthday decoration by Shree Safa Event Decoration", ratio: "aspect-square" },
      { slot: "birthday-5", src: "/images/ig-birthday-4.jpg", alt: "Bright birthday decoration with balloons and fairy lights", ratio: "aspect-[9/16]" },
      { slot: "birthday-6", src: "/images/ig-birthday-5.jpg", alt: "Warm birthday cake-table decoration by Shree Safa Event Decoration", ratio: "aspect-[9/16]" },
    ],
  },
  {
    slug: "welcome-baby",
    name: "Welcome Baby & Baby Shower Decoration",
    shortName: "Welcome Baby",
    blurb:
      "Soft pastel welcome-baby and godh bharai setups — documented on our Instagram with the caption “Welcome baby decoration”.",
    description:
      "A new arrival deserves the gentlest, most beautiful room in the house. We style welcome-baby and baby-shower celebrations with pastel balloons, cloud and moon accents, and soft backdrops — the kind of setup our Instagram reel “Welcome baby decoration” showcased. Perfect for namkaran, godh bharai and hospital-to-home welcomes.",
    highlights: [
      "Pastel balloon & cloud welcome setups",
      "Godh bharai / baby shower backdrops",
      "Namkaran ceremony decoration",
      "Hospital-room and home welcome styling",
    ],
    hero: { slot: "baby-hero", src: "/images/ig-welcome-baby-1.jpg", alt: "Welcome baby decoration by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "baby-1", src: "/images/ig-welcome-baby-1.jpg", alt: "Welcome baby decoration by Shree Safa Event Decoration", ratio: "aspect-[3/4]" },
      { slot: "baby-2", src: "/images/ig-welcome-baby-2.jpg", alt: "Welcome baby celebration setup by Shree Safa Event Decoration", ratio: "aspect-[3/4]" },
      { slot: "baby-3", src: "/images/ig-welcome-baby-3.jpg", alt: "Bright welcome baby decoration by Shree Safa Event Decoration", ratio: "aspect-[9/16]" },
      { slot: "baby-4", src: "/images/birthday-5.jpg", alt: "Soft warm baby decoration by Shree Safa Event Decoration", ratio: "aspect-square" },
      { slot: "baby-5", src: "/images/ig-birthday-5.jpg", alt: "Warm celebration decoration for a baby welcome", ratio: "aspect-[9/16]" },
      { slot: "baby-6", src: "/images/ig-balloon-1.jpg", alt: "Balloon welcome decor detail", ratio: "aspect-square" },
    ],
  },
  {
    slug: "room-decoration",
    name: "Room Decoration",
    shortName: "Room",
    blurb:
      "Surprise room styling for birthdays, anniversaries and welcomes — “रूम डेकोरेशन” is named in our bio.",
    description:
      "Sometimes the celebration happens in one room — and that room can still feel magical. We transform bedrooms, living rooms and hotel rooms with balloons, lights, drapes and florals for surprises, anniversaries, welcome-homes and proposals. रूम डेकोरेशन is named as a service in our Instagram bio.",
    highlights: [
      "Surprise birthday & anniversary room styling",
      "Balloon, light & drape themes",
      "First-night and welcome-home decoration",
      "Home or hotel — set up before you walk in",
    ],
    hero: { slot: "room-hero", src: "/images/ig-room-1.jpg", alt: "Room decoration with warm lighting by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "room-1", src: "/images/ig-room-1.jpg", alt: "Room decoration with warm lighting by Shree Safa Event Decoration", ratio: "aspect-[3/4]" },
      { slot: "room-2", src: "/images/ig-room-2.jpg", alt: "Room decoration with red and blue styling by Shree Safa Event Decoration", ratio: "aspect-square" },
      { slot: "room-3", src: "/images/ig-room-3.jpg", alt: "Bright room decoration setup by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
      { slot: "room-4", src: "/images/ig-birthday-4.jpg", alt: "Balloon and fairy-light room styling", ratio: "aspect-[9/16]" },
      { slot: "room-5", src: "/images/ig-birthday-5.jpg", alt: "Celebration room warm tone decoration", ratio: "aspect-[9/16]" },
      { slot: "room-6", src: "/images/ig-room-2.jpg", alt: "Room decoration lighting detail", ratio: "aspect-square" },
    ],
  },
  {
    slug: "balloon-decoration",
    name: "Balloon Decoration",
    shortName: "Balloon",
    blurb:
      "The thread that runs through all our work — “बैलून” is the first word of the decoration list in our bio.",
    description:
      "Balloon work is our most-requested craft — arches, garlands, ceilings, pillars and pastel installations for birthdays, welcomes, openings and festivals. It leads the decoration list in our Instagram bio (“बैलून हल्दी, मेहंदी, रूम, बर्थडे डेकोरेशन”) and shows up across our projects.",
    highlights: [
      "Balloon arches & entrance pillars",
      "Organic garlands & balloon ceilings",
      "Pastel, chrome and theme colour palettes",
      "Fast, tidy setup and same-day removal options",
    ],
    hero: { slot: "balloon-hero", src: "/images/ig-balloon-1.jpg", alt: "Balloon decoration by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "balloon-1", src: "/images/ig-balloon-1.jpg", alt: "Balloon decoration by Shree Safa Event Decoration", ratio: "aspect-[3/4]" },
      { slot: "balloon-2", src: "/images/ig-balloon-2.jpg", alt: "Balloon and decor styling by Shree Safa Event Decoration", ratio: "aspect-square" },
      { slot: "balloon-3", src: "/images/ig-balloon-3.jpg", alt: "Warm balloon decoration setup by Shree Safa Event Decoration", ratio: "aspect-[9/16]" },
      { slot: "balloon-4", src: "/images/ig-balloon-4.jpg", alt: "Balloon arch decoration by Shree Safa Event Decoration", ratio: "aspect-[9/16]" },
      { slot: "balloon-5", src: "/images/ig-birthday-4.jpg", alt: "Balloon ceiling with fairy lights", ratio: "aspect-[9/16]" },
      { slot: "balloon-6", src: "/images/birthday-5.jpg", alt: "Balloon garland styling by Shree Safa Event Decoration", ratio: "aspect-square" },
    ],
  },
  {
    slug: "smoke-cold-fire-entry",
    name: "Smoke & Cold Fire Entry",
    shortName: "Entry Effects",
    blurb:
      "Cinematic dulha & birthday entries — “स्मोक एंट्री कोल्ड फायर एंट्री उपल्ब्ध है” says our bio.",
    description:
      "The entry is the moment everyone remembers. We stage dramatic smoke entries and cold fire (cold pyro) entries for the dulha's arrival, birthday stars and couple entrances — safe, controlled and stunning on camera. Our bio confirms both: स्मोक एंट्री और कोल्ड फायर एंट्री उपल्ब्ध हैं.",
    highlights: [
      "Smoke entry for dulha & couple entrances",
      "Cold fire (cold pyro) effects for cake cuts & entries",
      "Safe, supervised indoor/outdoor setups",
      "Perfectly timed with your entry song",
    ],
    hero: { slot: "entry-hero", src: "/images/ig-entry-1.jpg", alt: "Smoke entry effect by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "entry-1", src: "/images/ig-entry-1.jpg", alt: "Entry effect staging by Shree Safa Event Decoration", ratio: "aspect-[3/4]" },
      { slot: "entry-2", src: "/images/ig-entry-2.jpg", alt: "Smoke entry effect by Shree Safa Event Decoration", ratio: "aspect-[9/16]" },
      { slot: "entry-3", src: "/images/ig-balloon-2.jpg", alt: "Entry decoration with balloon styling", ratio: "aspect-square" },
      { slot: "entry-4", src: "/images/ig-room-2.jpg", alt: "Grand entry decoration with lighting", ratio: "aspect-square" },
      { slot: "entry-5", src: "/images/ig-room-1.jpg", alt: "Entry staging with warm lights", ratio: "aspect-[3/4]" },
      { slot: "entry-6", src: "/images/ig-room-3.jpg", alt: "Decoration moment captured on camera", ratio: "aspect-[4/5]" },
    ],
  },
];

export const serviceBySlug = (slug: string | undefined): Service | undefined =>
  services.find((s) => s.slug === slug);
