/**
 * Scans each photo with sharp: average colour, brightness, hue buckets
 * (marigold-yellow = haldi, pastel = welcome-baby, dark+warm = entry/room…)
 * to help place each image in the right website section.
 */
import sharp from "sharp";
import { readdirSync } from "node:fs";

const HUE_NAMES = ["red", "orange", "yellow", "green", "cyan", "blue", "purple", "magenta"];

const files = readdirSync("public/images").filter((f) => f.endsWith(".jpg"));

for (const f of files) {
  const { data, info } = await sharp(`public/images/${f}`)
    .resize(64, 64, { fit: "inside" })
    .raw()
    .toBuffer({ resolveWithObject: true });

  let r = 0, g = 0, b = 0;
  const hueBuckets = new Array(8).fill(0);
  let satSum = 0, brightSum = 0;
  const n = info.width * info.height;

  for (let i = 0; i < n; i++) {
    const R = data[i * info.channels], G = data[i * info.channels + 1], B = data[i * info.channels + 2];
    r += R; g += G; b += B;
    const max = Math.max(R, G, B), min = Math.min(R, G, B);
    const l = (max + min) / 2;
    const d = max - min;
    const s = max === 0 ? 0 : d / max;
    satSum += s;
    brightSum += max / 255;
    if (d > 18) {
      let h;
      if (max === R) h = ((G - B) / d) % 6;
      else if (max === G) h = (B - R) / d + 2;
      else h = (R - G) / d + 4;
      h = Math.round(((h * 60) + 360) % 360 / 45) % 8;
      hueBuckets[h]++;
    }
  }

  const avg = [Math.round(r / n), Math.round(g / n), Math.round(b / n)];
  const avgHex = "#" + avg.map((v) => v.toString(16).padStart(2, "0")).join("");
  const topHues = hueBuckets
    .map((c, i) => ({ c, name: HUE_NAMES[i] }))
    .sort((a, b) => b.c - a.c)
    .slice(0, 3)
    .filter((x) => x.c > n * 0.08)
    .map((x) => `${x.name} ${Math.round((x.c / n) * 100)}%`);

  console.log(
    `${f}\t${info.width}x${info.height}\tavg ${avgHex}\tbright ${Math.round(brightSum / n * 100)}%\tsat ${Math.round(satSum / n * 100)}%\thues: ${topHues.join(", ") || "low-sat"}`,
  );
}
