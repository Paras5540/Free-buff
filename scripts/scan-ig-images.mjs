/**
 * Scans all downloaded Instagram photos so each can be placed in the right
 * website section:
 *  - sharp: average colour, brightness, saturation, top hues
 *  - tesseract OCR: any event text printed in the photo (name boards etc.)
 * Prints one line per image with classification hints.
 */
import sharp from "sharp";
import { execSync } from "node:child_process";
import { readdirSync } from "node:fs";

const HUE_NAMES = ["red", "orange", "yellow", "green", "cyan", "blue", "purple", "magenta"];
const dir = "public/images/raw";

for (const f of readdirSync(dir).filter((x) => x.endsWith(".jpg"))) {
  const path = `${dir}/${f}`;
  const { data, info } = await sharp(path).resize(64, 64, { fit: "inside" }).raw().toBuffer({ resolveWithObject: true });

  let r = 0, g = 0, b = 0;
  const hues = new Array(8).fill(0);
  let satSum = 0, brightSum = 0;
  const n = info.width * info.height;
  for (let i = 0; i < n; i++) {
    const R = data[i * info.channels], G = data[i * info.channels + 1], B = data[i * info.channels + 2];
    r += R; g += G; b += B;
    const max = Math.max(R, G, B), min = Math.min(R, G, B);
    const d = max - min;
    satSum += max === 0 ? 0 : d / max;
    brightSum += max / 255;
    if (d > 18) {
      let h;
      if (max === R) h = ((G - B) / d) % 6;
      else if (max === G) h = (B - R) / d + 2;
      else h = (R - G) / d + 4;
      hues[Math.round(((h * 60) + 360) % 360 / 45) % 8]++;
    }
  }
  const avgHex = "#" + [r, g, b].map((v) => Math.round(v / n).toString(16).padStart(2, "0")).join("");
  const topHues = hues
    .map((c, i) => ({ c, name: HUE_NAMES[i] }))
    .sort((a, b) => b.c - a.c)
    .slice(0, 3)
    .filter((x) => x.c > n * 0.08)
    .map((x) => `${x.name} ${Math.round((x.c / n) * 100)}%`);

  let ocr = "";
  try {
    ocr = execSync(`tesseract "${path}" - 2>/dev/null`, { encoding: "utf8" })
      .split("\n").map((l) => l.trim()).filter((l) => l.length > 2).slice(0, 6).join(" | ");
  } catch { ocr = "-"; }

  console.log(`${f}\t${info.width}x${info.height}\t${avgHex}\tbr=${Math.round(brightSum / n * 100)}%\tsat=${Math.round(satSum / n * 100)}%\t${topHues.join(",") || "low-sat"}\tOCR: ${ocr.slice(0, 140) || "-"}`);
}
