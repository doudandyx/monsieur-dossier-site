/* DossierFacile : ce que fait chacun des deux services, et comment les utiliser ensemble. */

import { SITE } from "../site.mjs";
import { T } from "../i18n/dossierfacile.mjs";
import { dot } from "../lib.mjs";
import { nav, footer, baseGraph, appRef, mdHeader } from "../layout.mjs";

export const page = { id: "dossierfacile", file: { fr: "dossierfacile.html", en: "en/dossierfacile.html" }, updated: "2026-11-23", T };

export function body(c) {
  const { L, t } = c;
  const [, colA, colB] = L.cmpHd;
  /* Un vrai tableau, pour qu'un lecteur d'écran ou un robot sache à quelle colonne appartient chaque cellule.
     La feuille de style le dessine en grille ; les rôles ARIA gardent le sens du tableau. */
  const table = `<table class="cmp" role="table">
      <caption class="sr">${t("cmpCap")}</caption>
      <thead role="rowgroup">
        <tr class="r hd" role="row"><td role="cell"></td><th scope="col" role="columnheader">${c.h(colA)}</th><th scope="col" role="columnheader">${c.h(colB)}</th></tr>
      </thead>
      <tbody role="rowgroup">
        ${L.cmp.map(([label, a, b]) => `<tr class="r" role="row"><th scope="row" role="rowheader">${c.h(label)}</th><td role="cell" data-l="${c.a(colA)}">${c.h(a)}</td><td role="cell" data-l="${c.a(colB)}">${c.h(b)}</td></tr>`).join("\n        ")}
      </tbody>
    </table>`;

  return `${nav(c)}

<main class="page">
  <div class="wrap">
    <a class="back" href="${c.url("home")}">${t("back")}</a>
    <div class="head">
      <span class="eyebrow">${t("dfEy")}</span>
      <h1>${t("dfH")}</h1>
      <p>${t("dfP")}</p>
    </div>
    ${table}
    <h2 class="sr">${t("togetherH")}</h2>
    <div class="prob together">
      ${["t1", "t2", "t3"].map(k => `<article><h3>${t(k + "h")}</h3><p>${t(k + "p")}</p></article>`).join("\n      ")}
    </div>
    <p class="src">${t("dfSrc")}</p>
  </div>
</main>

${footer(c)}`;
}

export function graph(c) {
  const { L, p } = c;
  return baseGraph(c, { title: p(L.title), description: p(L.desc), about: [
    appRef(),
    { "@type": "GovernmentService", name: "DossierFacile", url: SITE.links.dossierfacile },
  ] });
}

export function markdown(c) {
  const { L, m, p } = c;
  const [, colA, colB] = L.cmpHd;
  return `${mdHeader(c, { title: p(L.title), description: p(L.desc) })}
## ${m(L.dfH)}

${m(L.dfP)}

| | ${colA} | ${colB} |
|---|---|---|
${L.cmp.map(([label, a, b]) => `| ${m(label)} | ${m(a)} | ${m(b)} |`).join("\n")}

## ${m(L.togetherH)}

${["t1", "t2", "t3"].map(k => `${m(L[k + "h"]).replace(/^(\d+\.) (.*)$/, (x, n, title) => `${n} **${dot(title)}**`)} ${m(L[k + "p"])}`).join("\n")}

${m(L.dfSrc)}

---

${m(L.foot1)} ${m(L.foot2)}
`;
}

export const meta = c => ({ title: c.p(c.L.title), description: c.p(c.L.desc) });
