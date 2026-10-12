/**
 * Reads /tmp/all_media.txt (from extract-all-ig.ts), picks the largest
 * unique media image per owned post (dedupes shared carousel items by
 * media id), skips < 300px and profile-pic format, downloads to
 * public/images/raw/<postid>.jpg, and prints a manifest.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";

const text = readFileSync("/tmp/all_media.txt", "utf8");
mkdirSync("public/images/raw", { recursive: true });

const posts = [];
let current = null;
for (const line of text.split("\n")) {
  const head = line.match(/^== (\S+) — caption: "(.*)" — media: \d+/);
  if (head) {
    current = { id: head[1], caption: head[2], media: [] };
    posts.push(current);
    continue;
  }
  const item = line.match(/^\s+(\d+) \(w=(\d+)\) (\S+)/);
  if (item && current) current.media.push({ mediaId: item[1], w: +item[2], url: item[3] });
}

const seenMedia = new Set();
const manifest = [];

for (const post of posts) {
  // largest image >= 300px that we haven't already taken from another post
  const best = [...post.media]
    .filter((m) => m.w >= 300 && !seenMedia.has(m.mediaId))
    .sort((a, b) => b.w - a.w)[0];
  if (!best) {
    console.log(`${post.id}\tSKIP (no new large media)`);
    continue;
  }
  seenMedia.add(best.mediaId);
  const dest = `public/images/raw/${post.id}.jpg`;
  const res = await fetch(best.url, {
    headers: { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)" },
  });
  if (!res.ok) {
    console.log(`${post.id}\tFAIL http ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) {
    console.log(`${post.id}\tFAIL too small (${buf.length}B)`);
    continue;
  }
  writeFileSync(dest, buf);
  manifest.push({ post: post.id, caption: post.caption, file: dest, bytes: buf.length, width: best.w });
  console.log(`${post.id}\tOK ${buf.length}B w=${best.w} "${post.caption.slice(0, 60)}"`);
}

writeFileSync("/tmp/ig_manifest.json", JSON.stringify(manifest, null, 2));
console.log(`\nDownloaded: ${manifest.length}`);
