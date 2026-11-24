#!/usr/bin/env node
/* Écrit les pages du site à partir de src/. Aucune dépendance : Node suffit.

     node build.mjs            écrit les pages, puis les contrôle
     node build.mjs --check    n'écrit rien : échoue si une page sur le disque n'est pas à jour

   Ce que le build écrit : une page HTML par langue (texte dans la page, sans JavaScript), sa version Markdown
   (même adresse + « .md »), sitemap.xml, robots.txt, llms.txt, llms-full.txt et 404.html.
   Tout le reste (site.css, site.js, theme.js, polices, images) est écrit à la main. */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE } from "./src/site.mjs";
import { SHARED } from "./src/shared.mjs";
import { html, plain, md, esc, visibleText } from "./src/lib.mjs";
import { documentHtml } from "./src/layout.mjs";
import * as home from "./src/pages/home.mjs";
import * as features from "./src/pages/features.mjs";
import * as dossierfacile from "./src/pages/dossierfacile.mjs";
import * as contact from "./src/pages/contact.mjs";
import * as notfound from "./src/pages/notfound.mjs";
import { guidePage, guidesIndex } from "./src/pages/guide.mjs";
import { GUIDES } from "./src/guides/index.mjs";
import { llmsTxt, llmsFull } from "./src/llms.mjs";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const MODULES = [home, features, dossierfacile, contact, guidesIndex(GUIDES), ...GUIDES.map(g => guidePage(g, GUIDES)), notfound];
const PAGES = Object.fromEntries(MODULES.map(m => [m.page.id, m]));
const CHECK = process.argv.includes("--check");

/* ---------- adresses ---------- */

const fileOf = (id, lang) => PAGES[id].page.file[lang] || PAGES[id].page.file.fr;
const pathOf = (id, lang) => "/" + fileOf(id, lang).replace(/(^|\/)index\.html$/, "$1");
const abs = p => SITE.origin + p;

/* ---------- le contexte passé à chaque page ---------- */

function context(mod, lang) {
  const page = mod.page, other = SITE.langs.find(l => l !== lang);
  const url = (id, hash = "") => pathOf(id, lang) + hash;
  const urlIn = (l, id, hash = "") => pathOf(id, l) + hash;
  /* « page:nom » et « link:nom » dans une chaîne deviennent des adresses. */
  const resolve = (s, absolute) => String(s)
    .replace(/\(page:([a-z0-9-]+)(#[\w-]+)?\)/g, (m, id, hash) => `(${(absolute ? SITE.origin : "") + url(id, hash || "")})`)
    .replace(/\(link:(\w+)\)/g, (m, name) => { if (!SITE.links[name]) throw new Error(`Lien inconnu : link:${name}`); return `(${SITE.links[name]})`; });
  const L = page.T[lang], S = SHARED[lang];
  const c = {
    page, lang, other, L, S, url, urlIn, abs,
    self: url(page.id), selfAbs: abs(url(page.id)),
    alt: Object.fromEntries(SITE.langs.map(l => [l, urlIn(l, page.id)])),
    altAbs: Object.fromEntries(SITE.langs.map(l => [l, abs(urlIn(l, page.id))])),
    mdAbs: abs("/" + fileOf(page.id, lang) + ".md"),
    mdAltAbs: Object.fromEntries(SITE.langs.map(l => [l, abs("/" + fileOf(page.id, l) + ".md")])),
    h: s => html(resolve(s), lang),
    p: s => plain(resolve(s), lang),
    a: s => esc(plain(resolve(s), lang)),
    m: s => md(resolve(s, true), lang),
  };
  c.t = key => { if (L[key] == null) throw new Error(`Texte manquant : ${page.id}.${lang}.${key}`); return c.h(L[key]); };
  return c;
}

/* ---------- les fichiers ---------- */

const out = new Map();           // chemin relatif -> contenu
const contexts = [];             // un par page et par langue, pour sitemap et llms.txt

for (const mod of MODULES) {
  for (const lang of mod.page.langs || SITE.langs) {
    const c = context(mod, lang);
    const meta = mod.meta(c);
    out.set(fileOf(mod.page.id, lang), documentHtml(c, { ...meta, graph: mod.graph(c), body: mod.body(c) }));
    const markdown = mod.markdown(c);
    if (markdown) out.set(fileOf(mod.page.id, lang) + ".md", markdown);
    if (!mod.page.noindex) contexts.push({ c, mod, meta, markdown });
  }
}

out.set("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${contexts.map(({ c }) => `  <url>
    <loc>${c.selfAbs}</loc>
    <lastmod>${c.page.updated}</lastmod>
${SITE.langs.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${c.altAbs[l]}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${c.altAbs[SITE.fallbackLang]}"/>
  </url>`).join("\n")}
</urlset>
`);

out.set("robots.txt", `# Monsieur Dossier — ${SITE.origin}
# Tout le site peut être lu et cité, par les moteurs de recherche comme par les assistants IA.
# The whole site may be read and quoted, by search engines and by AI assistants alike.
# Résumé pour les assistants / summary for assistants: ${SITE.origin}/llms.txt

User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /
# Fichiers de fabrication du site, sans intérêt pour un lecteur.
Disallow: /src/
Disallow: /build.mjs
Disallow: /DESIGN.md
Disallow: /README.md

Sitemap: ${SITE.origin}/sitemap.xml
`);

out.set(`${SITE.indexNowKey}.txt`, SITE.indexNowKey + "\n");
out.set("llms.txt", llmsTxt(contexts));
out.set("llms-full.txt", llmsFull(contexts));

/* ---------- contrôles ---------- */

const problems = [];
const fail = msg => problems.push(msg);

/* Les deux langues ont les mêmes clés, et les listes la même longueur. */
function sameShape(a, b, where) {
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return fail(`${where} : listes différentes en français et en anglais`);
    a.forEach((v, i) => sameShape(v, b[i], `${where}[${i}]`));
  } else if (a && typeof a === "object") {
    if (!b || typeof b !== "object") return fail(`${where} : forme différente en français et en anglais`);
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (!(k in a) || !(k in b)) fail(`${where}.${k} : absent d'une des deux langues`); else sameShape(a[k], b[k], `${where}.${k}`);
    }
  }
}
for (const mod of MODULES) if (mod.page.T.fr !== mod.page.T.en) sameShape(mod.page.T.fr, mod.page.T.en, mod.page.id);

const ids = new Map();   // fichier -> identifiants de la page
for (const [file, content] of out) {
  if (file.endsWith(".html")) {
    const text = visibleText(content);
    /* Règle du site : pas de point-virgule dans le texte lu par le visiteur. */
    if (text.includes(";")) fail(`${file} : un point-virgule dans le texte (« …${text.slice(Math.max(0, text.indexOf(";") - 40), text.indexOf(";") + 1)} »)`);
    const h1 = (content.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) fail(`${file} : ${h1} titres h1, il en faut un seul`);
    if (/\b(page|link):[a-z]/.test(text)) fail(`${file} : une adresse « page: » ou « link: » n'a pas été remplacée`);
    for (const m of content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(m[1]); } catch (e) { fail(`${file} : données structurées illisibles (${e.message})`); }
    }
    ids.set(file, new Set([...content.matchAll(/\sid="([^"]+)"/g)].map(m => m[1])));
  } else if (file.endsWith(".md") || file.endsWith(".txt")) {
    /* Les adresses contiennent parfois un point-virgule : on ne regarde que le texte. */
    const text = content.replace(/\]\([^)]*\)/g, "]").replace(/https?:\/\/\S+/g, "");
    if (file.endsWith(".md") || file.startsWith("llms")) { if (text.includes(";")) fail(`${file} : un point-virgule dans le texte`); }
    if (/\b(page|link):[a-z]/.test(text)) fail(`${file} : une adresse « page: » ou « link: » n'a pas été remplacée`);
  }
}

/* Chaque lien interne mène à un fichier qui existe, et chaque ancre à un identifiant de la page visée. */
const exists = rel => out.has(rel) || fs.existsSync(path.join(ROOT, rel));
for (const [file, content] of out) {
  if (!file.endsWith(".html")) continue;
  for (const m of content.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, "&");
    if (/^(https?:|mailto:)/.test(href)) {
      if (href.startsWith(SITE.origin + "/")) {
        const rel = href.slice(SITE.origin.length + 1).split("#")[0].split("?")[0];
        const target = rel === "" || rel.endsWith("/") ? rel + "index.html" : rel;
        if (!exists(target)) fail(`${file} : ${href} ne mène à aucun fichier`);
      }
      continue;
    }
    const [p, hash] = href.split("#");
    const clean = p.split("?")[0];
    let target = file;
    if (clean) {
      if (!clean.startsWith("/")) { fail(`${file} : lien relatif « ${href} » (écrire le chemin depuis la racine)`); continue; }
      target = clean.slice(1); if (target === "" || target.endsWith("/")) target += "index.html";
      if (!exists(target)) { fail(`${file} : ${href} ne mène à aucun fichier`); continue; }
    }
    if (hash && ids.has(target) && !ids.get(target).has(hash)) fail(`${file} : l'ancre #${hash} n'existe pas dans ${target}`);
  }
}

for (const { c, meta } of contexts) {
  if (meta.title.length > 70) fail(`${c.self} : titre de ${meta.title.length} caractères (70 au plus)`);
  if (meta.description.length < 50 || meta.description.length > 230) fail(`${c.self} : description de ${meta.description.length} caractères (entre 50 et 230)`);
}

/* ---------- écriture ou comparaison ---------- */

let changed = 0;
for (const [file, content] of out) {
  const full = path.join(ROOT, file);
  const current = fs.existsSync(full) ? fs.readFileSync(full, "utf8") : null;
  if (current === content) continue;
  changed++;
  if (CHECK) fail(`${file} n'est pas à jour : lancer « node build.mjs »`);
  else { fs.mkdirSync(path.dirname(full), { recursive: true }); fs.writeFileSync(full, content); }
}

if (problems.length) {
  console.error(problems.map(p => "✗ " + p).join("\n"));
  console.error(`\n${problems.length} problème(s).`);
  process.exit(1);
}
console.log(CHECK ? `✓ ${out.size} fichiers à jour.` : `✓ ${out.size} fichiers contrôlés, ${changed} écrit(s).`);
