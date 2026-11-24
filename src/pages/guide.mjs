/* Guides : une question en titre, la réponse dans le premier paragraphe, puis le détail et les sources.
   Un guide est un fichier de src/guides/. Ce module en fait une page, et écrit aussi la page qui les liste.

   Pourquoi cette forme : un moteur ou un assistant IA retient la page dont le titre et le meilleur paragraphe
   répondent à la question posée. Le titre est donc la question, telle qu'on la pose, et le paragraphe qui suit
   y répond en entier, sans renvoyer à la suite. Chaque section reprend le même principe avec son sous-titre.

   Les sources. Chaque source de la liste du bas de page porte une clé courte (« k »). Dans le texte, un lien écrit
   « [service-public.gouv.fr](src:clé) » mène à cette source : un lien posé près d'une affirmation renvoie donc
   toujours à une source listée, avec son détail et sa date. Une clé inconnue, ou une source listée que le texte ne
   cite nulle part, arrête le build. Le champ « checked » date la dernière lecture des sources.

   Ce qui est une déduction, un conseil de notre part ou un constat général est nommé comme tel dans la phrase. Il n'y
   a pas de section « Ce que les sources ne disent pas » : Tommy l'a retirée le 24 novembre 2026. Les notes de
   rédaction restent en tête du fichier de chaque guide, hors page. */

import { SITE } from "../site.mjs";
import { SHARED } from "../shared.mjs";
import { esc, longDate } from "../lib.mjs";
import { nav, footer, baseGraph, mdHeader, ID } from "../layout.mjs";

const bar = c => nav(c, { cta: `<a class="btn dark small" href="${c.url("home", "#download")}">${c.h(c.S.navDl)}</a>` });

/* Un bloc de texte : un paragraphe (une chaîne), une liste, une liste numérotée ou une note. */
function blockHtml(c, b, where) {
  if (typeof b === "string") return `<p>${c.h(b)}</p>`;
  const items = list => list.map(x => `<li>${c.h(x)}</li>`).join("\n        ");
  if (b.ul) return `<ul>\n        ${items(b.ul)}\n      </ul>`;
  if (b.ol) return `<ol>\n        ${items(b.ol)}\n      </ol>`;
  if (b.note) return `<p class="note">${c.h(b.note)}</p>`;
  throw new Error(`Bloc inconnu dans ${where}`);
}
function blockMd(c, b) {
  if (typeof b === "string") return c.m(b);
  if (b.ul) return b.ul.map(x => `- ${c.m(x)}`).join("\n");
  if (b.ol) return b.ol.map((x, i) => `${i + 1}. ${c.m(x)}`).join("\n");
  return `> ${c.m(b.note)}`;
}

/* Remplace « (src:clé) » par l'adresse de la source, dans tous les textes d'un guide, et contrôle les clés. */
function withSources(def) {
  const T = {};
  for (const lang of Object.keys(def.T)) {
    const L = def.T[lang];
    const byKey = Object.fromEntries(L.sources.map(x => [x.k, x.u]));
    if (L.sources.some(x => !x.k) || Object.keys(byKey).length !== L.sources.length) throw new Error(`${def.id} (${lang}) : une source sans clé, ou deux sources avec la même clé`);
    const used = new Set();
    const fix = v => typeof v === "string"
      ? v.replace(/\(src:([a-z0-9-]+)\)/g, (m, k) => { if (!byKey[k]) throw new Error(`${def.id} (${lang}) : source inconnue, src:${k}`); used.add(k); return `(${byKey[k]})`; })
      : Array.isArray(v) ? v.map(fix)
      : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fix(x)]))
      : v;
    T[lang] = fix(L);
    if (JSON.stringify(T[lang]).includes("src:")) throw new Error(`${def.id} (${lang}) : une adresse « src: » mal écrite n'a pas été remplacée`);
    const unused = L.sources.filter(x => !used.has(x.k)).map(x => x.k);
    if (unused.length) throw new Error(`${def.id} (${lang}) : source listée mais jamais citée dans le texte, ${unused.join(", ")}`);
  }
  const keys = lang => def.T[lang].sources.map(x => x.k).join(" ");
  if (keys("fr") !== keys("en")) throw new Error(`${def.id} : les sources n'ont pas les mêmes clés dans les deux langues`);
  return T;
}

/* ---------- un guide ---------- */

export function guidePage(def, all) {
  const page = {
    id: def.id, guide: true, updated: def.updated, published: def.published, T: withSources(def),
    file: { fr: `guides/${def.slug.fr}.html`, en: `en/guides/${def.slug.en}.html` },
  };
  const byId = Object.fromEntries(all.map(g => [g.id, g]));
  for (const id of def.related) if (!byId[id]) throw new Error(`${def.id} : guide lié inconnu, ${id}`);

  function body(c) {
    const { L, S } = c;
    return `${bar(c)}

<main class="page">
  <article class="wrap guide">
    <a class="back" href="${c.url("guides")}">${c.h(S.gBack)}</a>
    <header class="head">
      <span class="eyebrow">${c.h(S.gEy)}</span>
      <h1>${c.h(L.title)}</h1>
      <p class="answer">${c.h(L.answer)}</p>
      <p class="when">${c.h(S.gUpdated)} <time datetime="${page.updated}">${longDate(page.updated, c.lang)}</time></p>
    </header>
    ${L.sections.map(s => `<section>
      <h2>${c.h(s.h)}</h2>
      ${s.blocks.map(b => blockHtml(c, b, def.id)).join("\n      ")}
    </section>`).join("\n    ")}
    <section class="sources">
      <h2>${c.h(S.gSources)}</h2>
      <p class="when">${c.h(S.gChecked)} <time datetime="${def.checked}">${longDate(def.checked, c.lang)}</time></p>
      <ul>
        ${L.sources.map(x => `<li><a href="${esc(x.u)}">${c.h(x.t)}</a></li>`).join("\n        ")}
      </ul>
      <p class="fine">${c.h(S.gNote)}</p>
    </section>
    <aside class="app">
      <h2>${c.h(S.gAppH)}</h2>
      <p>${c.h(L.app)}</p>
      <a class="btn primary" href="${c.url("home", "#download")}">${c.h(S.gAppBtn)}</a>
      <p class="fine">${c.h(S.gAppFine)}</p>
    </aside>
    <section class="more-guides">
      <h2>${c.h(S.gMore)}</h2>
      <ul>
        ${def.related.map(id => `<li><a href="${c.url(id)}">${c.h(byId[id].T[c.lang].title)}</a></li>`).join("\n        ")}
      </ul>
    </section>
  </article>
</main>

${footer(c)}`;
  }

  function graph(c) {
    const { L, S, p } = c;
    const title = p(L.title), description = p(L.desc);
    return [
      ...baseGraph(c, { title, description, crumbs: [
        { name: S.giCrumb, url: c.abs(c.url("guides")) },
        { name: p(L.short), url: c.selfAbs },
      ] }),
      { "@type": "Article", "@id": c.selfAbs + "#article", headline: title, description, abstract: p(L.answer), inLanguage: c.lang,
        datePublished: page.published, dateModified: page.updated,
        author: { "@id": ID.org }, publisher: { "@id": ID.org },
        mainEntityOfPage: { "@id": c.selfAbs + "#webpage" }, image: `${SITE.origin}/og-${c.lang}.png`,
        citation: L.sources.map(x => x.u) },
    ];
  }

  function markdown(c) {
    const { L, S, m, p } = c;
    return `${mdHeader(c, { title: p(L.title), description: m(L.answer) })}
${L.sections.map(s => `## ${m(s.h)}\n\n${s.blocks.map(b => blockMd(c, b)).join("\n\n")}`).join("\n\n")}

## ${S.gSources}

${m(S.gChecked)} ${longDate(def.checked, c.lang)}.

${L.sources.map(x => `- [${m(x.t)}](${x.u})`).join("\n")}

${m(S.gNote)}

## ${S.gAppH}

${m(L.app)} ${m(S.gAppFine)} [${S.gAppBtn}](${c.abs(c.url("home", "#download"))})
`;
  }

  const meta = c => ({ title: c.p(c.L.title), description: c.p(c.L.desc), ogType: "article", published: page.published });
  return { page, body, graph, markdown, meta };
}

/* ---------- la page qui liste les guides ---------- */

export function guidesIndex(all) {
  const pick = S => ({ title: S.giTitle, crumb: S.giCrumb, desc: S.giDesc, ey: S.giEy, h: S.giH, p: S.giP, back: S.giBack });
  const page = {
    id: "guides", file: { fr: "guides/index.html", en: "en/guides/index.html" },
    updated: all.map(g => g.updated).sort().pop(), T: { fr: pick(SHARED.fr), en: pick(SHARED.en) },
  };

  function body(c) {
    const { t } = c;
    return `${bar(c)}

<main class="page">
  <div class="wrap">
    <a class="back" href="${c.url("home")}">${t("back")}</a>
    <div class="head">
      <span class="eyebrow">${t("ey")}</span>
      <h1>${t("h")}</h1>
      <p>${t("p")}</p>
    </div>
    <div class="prob four guides-list">
      ${all.map(g => `<article><h2><a href="${c.url(g.id)}">${c.h(g.T[c.lang].title)}</a></h2><p>${c.h(g.T[c.lang].desc)}</p></article>`).join("\n      ")}
    </div>
  </div>
</main>

${footer(c)}`;
  }

  function graph(c) {
    const { L, p } = c;
    return [
      ...baseGraph(c, { title: p(L.title), description: p(L.desc) }),
      { "@type": "ItemList", "@id": c.selfAbs + "#guides", name: p(L.h), numberOfItems: all.length,
        itemListElement: all.map((g, i) => ({ "@type": "ListItem", position: i + 1, name: p(g.T[c.lang].title), url: c.abs(c.url(g.id)) })) },
    ];
  }

  function markdown(c) {
    const { L, m, p } = c;
    return `${mdHeader(c, { title: p(L.title), description: p(L.desc) })}
## ${m(L.h)}

${m(L.p)}

${all.map(g => `- [${m(g.T[c.lang].title)}](${c.abs(c.url(g.id))}) ${m(g.T[c.lang].desc)}`).join("\n")}
`;
  }

  const meta = c => ({ title: c.p(c.L.title), description: c.p(c.L.desc) });
  return { page, body, graph, markdown, meta };
}
