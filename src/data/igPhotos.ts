/**
 * ─────────────────────────────────────────────────────────────────────────
 * REAL INSTAGRAM PHOTOS — downloaded & classified
 * ─────────────────────────────────────────────────────────────────────────
 * Every photo below was downloaded from the business's own Instagram posts
 * (embed pages, ownership verified by handle) and classified using:
 *   1. the post caption ("Welcome bsby decortion", "#roomdecoration"…)
 *   2. colour profile scan (bright/warm = birthday balloons, low-sat =
 *      smoke entry, soft high-bright = welcome baby)
 *   3. external snippet text for the post ("1st birthday 🎉🎈",
 *      "Room decoration", "Welcome baby … BOY")
 *
 * Unknown-purpose photos go to the generic "more work" gallery — they are
 * never given an invented category.
 */

export type IgPhoto = {
  file: string;
  /** service slug this photo belongs to */
  category: string;
  alt: string;
  /** aspect ratio hint (width/height) */
  ratio?: string;
};

export const igPhotos: IgPhoto[] = [
  {
    file: "ig-welcome-baby-1.jpg",
    category: "welcome-baby",
    alt: "Welcome baby decoration by Shree Safa Event Decoration",
  },
  {
    file: "ig-room-1.jpg",
    category: "room-decoration",
    alt: "Room decoration with warm lighting by Shree Safa Event Decoration",
  },
  {
    file: "ig-birthday-1.jpg",
    category: "birthday-decoration",
    alt: "First birthday balloon decoration by Shree Safa Event Decoration",
  },
  {
    file: "ig-birthday-2.jpg",
    category: "birthday-decoration",
    alt: "Birthday decoration with balloons by Shree Safa Event Decoration",
  },
  {
    file: "ig-balloon-1.jpg",
    category: "balloon-decoration",
    alt: "Balloon decoration by Shree Safa Event Decoration",
  },
  {
    file: "ig-room-2.jpg",
    category: "room-decoration",
    alt: "Room decoration with red and blue styling by Shree Safa Event Decoration",
  },
  {
    file: "ig-room-3.jpg",
    category: "room-decoration",
    alt: "Bright room decoration setup by Shree Safa Event Decoration",
  },
  {
    file: "ig-welcome-baby-2.jpg",
    category: "welcome-baby",
    alt: "Welcome baby celebration setup by Shree Safa Event Decoration",
  },
  {
    file: "ig-birthday-3.jpg",
    category: "birthday-decoration",
    alt: "Birthday decoration setup by Shree Safa Event Decoration",
  },
  {
    file: "ig-entry-1.jpg",
    category: "smoke-cold-fire-entry",
    alt: "Entry effect staging by Shree Safa Event Decoration",
  },
  {
    file: "ig-balloon-2.jpg",
    category: "balloon-decoration",
    alt: "Balloon and decor styling by Shree Safa Event Decoration",
  },
];

export const igPhotosByCategory = (slug: string): IgPhoto[] =>
  igPhotos.filter((p) => p.category === slug);
