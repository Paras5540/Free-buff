/**
 * SCANS downloaded Instagram photos so each can be placed in the right
 * website section. Two signals, no external AI service:
 *   1. OCR (tesseract) — event names/labels printed on the photo
 *   2. Colour profile — haldi = yellow/gold, baby = pastel pink/blue,
 *      birthday = mixed bright, room = warm/red tones
 */
import { execSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";

const files = readdirSync("public/images").filter(
  (f) => f.endsWith(".jpg") && statSync(`public/images/${f}`).size > 10_000,
);

for (const f of files) {
  const path = `public/images/${f}`;
  let ocr = "";
  try {
    ocr = execSync(`tesseract "${path}" - 2>/dev/null`, { encoding: "utf8" })
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 2 && /[a-zA-Z0-9]/.test(l))
      .slice(0, 8)
      .join(" | ");
  } catch {
    ocr = "(ocr unavailable)";
  }
  let colors = "";
  try {
    colors = execSync(
      `convert "${path}" -resize 50x50\\! -format %c histogram:info:- 2>/dev/null | sort -rn | head -6`,
      { encoding: "utf8" },
    )
      .split("\n")
      .map((l) => {
        const m = l.match(/\((\d+),(\d+),(\d+)/);
        if (!m) return "";
        const [r, g, b] = [+m[1], +m[2], +m[3]].map((v) => Math.round((v / 65535) * 255));
        return `rgb(${r},${g},${b})`;
      })
      .filter(Boolean)
      .join(", ");
  } catch {
    colors = "(imagemagick unavailable)";
  }
  console.log(`── ${f}`);
  console.log(`   OCR:   ${ocr.slice(0, 220)}`);
  console.log(`   COLOURS: ${colors}`);
}
