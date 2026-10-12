/**
 * Extracts EVERY unique post-media image (including carousel items) from the
 * five verified owned-post embed HTMLs, picking the largest size per media,
 * and prints: post-id, media-id, best URL, and the post caption.
 */
import { readFileSync } from "node:fs";

const OWNED = [
  "DdxlKFpK1Sx",
  "Ddp31xiK6B5",
  "DeDs719KpbU",
  "DECxCvszm-R",
  "DDb_wRmIiM_",
  "DC9jZgLo1YR",
  "DC_nqpcI8NZ",
  "DdsZ-I_KKLv",
  "Ddu60_uTkeR",
  "Dd8_-6KNHxt",
  "Dd6Ok4lNs4d",
];

function captionOf(html: string): string {
  const m = html.match(/class="Caption[^"]*">(.*?)(?:<div class="Footer"|$)/s);
  if (!m) return "";
  return htmlDecode(m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ")).trim().slice(0, 120);
}
function htmlDecode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

for (const id of OWNED) {
  const html = readFileSync(`/tmp/igpost/${id}.html`, "utf8");
  // all scontent urls for post media (exclude profile pic format & tiny sizes)
  const urls = [...html.matchAll(/https[^"'\s\\]*scontent[^"'\s\\]*/g)]
    .map((m) => htmlDecode(m[0]))
    .filter((u) => !u.includes("t51.2885-19") && !u.includes("CAROUSEL_ITEM"));

  // group by media id = the long filename component
  const byMedia = new Map<string, { url: string; w: number }>();
  for (const u of urls) {
    const media = (u.match(/(\d{15,25})_n\.jpg/) ?? [])[1];
    if (!media) continue;
    const w = Number((u.match(/[._](?:s)?(\d{3,4})x\d{3,4}/) ?? [])[1] ?? 0);
    const prev = byMedia.get(media);
    if (!prev || w > prev.w) byMedia.set(media, { url: u, w });
  }
  console.log(`== ${id} — caption: "${captionOf(html)}" — media: ${byMedia.size}`);
  for (const [media, { url, w }] of byMedia) {
    console.log(`   ${media} (w=${w}) ${url}`); // full URL — no truncation
  }
}
