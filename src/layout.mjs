/* Squelette commun des pages : en-tête du document, barre du haut, pied de page, données structurées. */

import { SITE } from "./site.mjs";
import { LANG_OFFER } from "./shared.mjs";
import { esc, longDate } from "./lib.mjs";

const OG_LOCALE = { fr: "fr_FR", en: "en_GB" };

export const mark = size => `<svg width="${size}" height="${size}" viewBox="0 0 64 64" aria-hidden="true"><rect x="2" y="2" width="60" height="60" rx="14" fill="#2d5bd7"/><rect x="18" y="12" width="28" height="40" rx="3" fill="#fff"/><rect x="22" y="19" width="20" height="3" rx="1.5" fill="#cdd4e4"/><rect x="22" y="26" width="20" height="5" rx="1" fill="#1b1e24"/><rect x="22" y="35" width="14" height="3" rx="1.5" fill="#cdd4e4"/><path d="M32 45 L24.5 40.5 V49.5 Z M32 45 L39.5 40.5 V49.5 Z" fill="#1b1e24"/><circle cx="32" cy="45" r="2.2" fill="#1b1e24"/></svg>`;

/* ---------- données structurées (schema.org) ---------- */

export const ID = { org: SITE.origin + "/#org", app: SITE.origin + "/#app" };
const SITE_ID = SITE.origin + "/#website";   /* un seul site, en deux langues */

export function orgNode() {
  return { "@type": "Organization", "@id": ID.org, name: SITE.name, url: SITE.origin + "/", email: SITE.email,
    logo: { "@type": "ImageObject", url: SITE.origin + "/icon-512.png", width: 512, height: 512 } };
}

/* Les nœuds communs : l'éditeur, le site, la page et son fil d'Ariane. */
export function baseGraph(c, { title, description, about }) {
  const nodes = [
    orgNode(),
    { "@type": "WebSite", "@id": SITE_ID, url: SITE.origin + "/", name: SITE.name, inLanguage: SITE.langs, publisher: { "@id": ID.org } },
    { "@type": "WebPage", "@id": c.selfAbs + "#webpage", url: c.selfAbs, name: title, description, inLanguage: c.lang,
      isPartOf: { "@id": SITE_ID }, dateModified: c.page.updated,
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE.origin}/og-${c.lang}.png`, width: 1200, height: 630 },
      ...(about ? { about } : {}) },
  ];
  if (c.page.id !== "home") {
    nodes.push({ "@type": "BreadcrumbList", "@id": c.selfAbs + "#breadcrumb", itemListElement: [
      { "@type": "ListItem", position: 1, name: c.S.crumbHome, item: c.abs(c.url("home")) },
      { "@type": "ListItem", position: 2, name: c.p(c.L.crumb || c.L.title), item: c.selfAbs },
    ] });
  }
  return nodes;
}

/* L'application, en version courte, pour les pages qui en parlent sans la décrire en entier. */
export function appRef() {
  return { "@type": "SoftwareApplication", "@id": ID.app, name: SITE.name, operatingSystem: "macOS", applicationCategory: "UtilitiesApplication", url: SITE.origin + "/" };
}

const ldScript = graph => `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")}</script>`;

/* ---------- document ---------- */

export function documentHtml(c, { title, description, graph, body, robots, bodyClass }) {
  const v = SITE.assets;
  const alternates = c.page.noindex ? "" : `
<link rel="canonical" href="${c.selfAbs}">
${SITE.langs.map(l => `<link rel="alternate" hreflang="${l}" href="${c.altAbs[l]}">`).join("\n")}
<link rel="alternate" hreflang="x-default" href="${c.altAbs[SITE.fallbackLang]}">
<link rel="alternate" type="text/markdown" href="${c.mdAbs}" title="${esc(c.S.mdAlt)}">
<link rel="describedby" href="${SITE.origin}/llms.txt">`;
  const offer = LANG_OFFER[c.other];
  return `<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${robots || "index, follow, max-snippet:-1, max-image-preview:large"}">${alternates}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${c.selfAbs}">
<meta property="og:locale" content="${OG_LOCALE[c.lang]}">
<meta property="og:locale:alternate" content="${OG_LOCALE[c.other]}">
<meta property="og:image" content="${SITE.origin}/og-${c.lang}.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(c.S.ogAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0f1420" media="(prefers-color-scheme: dark)">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="stylesheet" href="/site.css?v=${v}">
<script src="/theme.js?v=${v}"></script>
<script src="/site.js?v=${v}" defer></script>
${graph ? ldScript(graph) : ""}
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ""} data-offer-link="${esc(offer.link)}" data-offer-close="${esc(offer.close)}">
<!-- Page écrite par build.mjs à partir de src/. Ne pas la modifier à la main : changer src/, puis lancer « node build.mjs ». -->
${body}
</body>
</html>
`;
}

/* ---------- barre du haut ---------- */

const NAMES = { fr: "Français", en: "English" };

/* Une page écrite dans une seule langue (la 404) renvoie vers l'accueil de chaque langue. */
export function langSwitch(c) {
  return `<div class="lang" role="group" aria-label="${esc(c.S.langGroup)}">
      ${SITE.langs.map(l => `<a href="${c.page.langs ? c.urlIn(l, "home") : c.alt[l]}" hreflang="${l}" lang="${l}"${l === c.lang ? ' aria-current="true"' : ""}>${l.toUpperCase()}<span class="sr"> – ${NAMES[l]}</span></a>`).join(" ")}
    </div>`;
}

/* links : liens de section (accueil seulement). cta : le bouton de droite, déjà écrit. */
export function nav(c, { links = "", cta = "", markSize = 28 } = {}) {
  const home = c.page.id === "home" ? "#top" : c.url("home");
  return `<nav id="nav">
  <div class="wrap">
    <a class="brand" href="${home}" aria-label="${SITE.name}">
      ${mark(markSize)}
      <span class="full">${SITE.name}</span> <span class="short" aria-hidden="true">${SITE.shortName}</span>
    </a>
    ${links}
    ${langSwitch(c)}
    ${cta}
  </div>
</nav>`;
}

/* ---------- pied de page ---------- */

export function footer(c, { contactLink = true } = {}) {
  const { L, S } = c;
  const pages = [["features", S.footFeat], ["dossierfacile", S.footDf]].filter(([id]) => id !== c.page.id);
  return `<footer>
  <div class="wrap">
    <span>${c.h(L.foot1)}</span>
    <span>${c.h(L.foot2)}</span>
    ${contactLink && L.footC ? `<a href="${c.url("contact")}">${c.h(L.footC)}</a>` : ""}
    <div class="foot-nav" role="navigation" aria-label="${esc(S.footNav)}">
      ${pages.map(([id, label]) => `<a href="${c.url(id)}">${c.h(label)}</a>`).join("\n      ")}
      <span class="upd">${c.h(S.updated)} <time datetime="${c.page.updated}">${longDate(c.page.updated, c.lang)}</time></span>
    </div>
  </div>
</footer>`;
}

/* En-tête d'une version Markdown : titre, résumé, et où trouver les autres versions. */
export function mdHeader(c, { title, description }) {
  const { S } = c;
  return `# ${title}

> ${description}

${c.p(S.mdLang)} · [${S.mdOther}](${c.mdAltAbs[c.other]}) · [${S.mdWeb}](${c.selfAbs}) · ${c.p(S.mdUpdated + (c.lang === "fr" ? " :" : ":"))} ${longDate(c.page.updated, c.lang)}
`;
}
