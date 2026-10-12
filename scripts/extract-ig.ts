/**
 * Extracts the HERO image URL (largest size) of each post from the saved
 * Instagram /embed/captioned/ HTML files in /tmp/igpost, verifies each post
 * actually belongs to @shree_safa_event_decoration_, and prints id + URL.
 */
import { readdirSync, readFileSync } from "node:fs";

const dir = "/tmp/igpost";

for (const file of readdirSync(dir).filter((f) => f.endsWith(".html"))) {
  const html = readFileSync(`${dir}/${file}`, "utf8");
  const id = file.replace(".html", "");

  // Ownership check: the embed must reference our handle or the account name
  const ownerOk =
    html.includes("shree_safa_event_decoration_") ||
    html.includes("Shree safa") ||
    html.includes("Racer Alok Soni");
  if (!ownerOk) {
    console.log(`${id}\tSKIP\t(embed does not belong to our account)`);
    continue;
  }

  // The post's own media uses ig_cache_key-encoded URLs inside the
  // carousel/photo section. The profile pic (s150x150 / t51.2885-19) is not
  // post media — filter it out.
  const urls = [...html.matchAll(/https[^"'\s\\]*scontent[^"'\s\\]*/g)]
    .map((m) => m[0].replaceAll("&amp;", "&"))
    .filter((u) => !u.includes("t51.2885-19") && !u.includes("s150x150") && !u.includes("CAROUSEL_ITEM"));

  // Prefer the biggest declared width
  const best = urls
    .map((u) => ({ u, w: Number((u.match(/s(\d{3,4})x\d{3,4}/) ?? [])[1] ?? 0) }))
    .filter((x) => x.w >= 640)
    .sort((a, b) => b.w - a.w)[0];

  if (best) console.log(`${id}\tOK\t${best.u}`);
  else console.log(`${id}\tNOPHOTO\t(reel without thumbnail)`);
}
