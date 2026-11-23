/* Fonctionnalités : le détail, étape par étape, avec une illustration par section. */

import { T } from "../i18n/features.mjs";
import { esc, dot } from "../lib.mjs";
import { nav, footer, baseGraph, appRef, mdHeader } from "../layout.mjs";

export const page = { id: "features", file: { fr: "fonctionnalites.html", en: "en/features.html" }, updated: "2026-11-23", T };

/* Illustrations : des fragments d'écran simplifiés, dessinés en HTML, avec des documents fictifs.
   Le filigrane répété est écrit par la feuille de style (attribut data-t), pas dans le texte de la page. */
const row = (a, b) => `<div class="row"><span>${a}</span> ${b || ""}</div>`;   /* l'espace sépare les mots pour qui lit le texte brut */
const tag = (t, c) => `<span class="tag ${c || ""}">${esc(t)}</span>`;
const bar = w => `<span class="bar" style="width:100%;max-width:${w}px"></span>`;
const lines = n => "<i></i>".repeat(n);
const file = (t, cls = "file") => `<span class="${cls}">${esc(t)}</span>`;
const MOCK = {
  ajouter: M => `${[0, 1, 2, 3, 3].map((c, i) => row(file(M.files[i]), tag(M.cat[c]))).join("")}${row(file(M.files[5]), tag(M.notDue, "no"))}`,
  manque: M => `<div class="mh">${esc(M.listT)}</div>${M.list.map((t, i) => row(esc(t), i === 4 ? tag(M.miss, "no") : tag(M.ok, "ok"))).join("")}`,
  masquer: M => `<div class="mh">${esc(M.doc)}</div>
    <div class="row"><span class="k">${esc(M.name)}</span> <span class="v">Camille MARTIN</span></div>
    <div class="row"><span class="k">${esc(M.secu)}</span> <span class="v">${bar(120)}</span> ${tag(M.hid)}</div>
    <div class="row"><span class="k">${esc(M.net)}</span> <span class="v">2 450,00 €</span></div>
    <div class="row"><span class="k">IBAN</span> <span class="v">${bar(150)}</span> ${tag(M.hid)}</div>
    <div class="row"><span class="k">BIC</span> <span class="v">${bar(70)}</span> ${tag(M.hid)}</div>`,
  pages: M => `<div class="pgs">${[1, 2, 3, 4].map(n => `<div class="pgc"><div class="pg${n > 2 ? " off" : ""}" style="width:100%">${lines(7)}</div> ${n > 2 ? tag(M.off, "no") : n}</div>`).join(" ")}</div>`,
  filigrane: M => `<div class="field"><small>${esc(M.to)}</small> ${esc(M.toV)}</div><div class="field"><small>${esc(M.addr)}</small> ${esc(M.addrV)}</div>
    <div class="prev">${lines(9)}<div class="w">${`<span data-t="${esc(M.wm)}"></span>`.repeat(9)}</div></div>`,
  controle: M => `${M.out.map(t => row(file(t), tag("✓ " + M.checked, "ok"))).join("")} <div class="sum">${esc(M.sum)}</div>`,
  enregistrer: M => `${row(`<span class="dir"><b>${esc(M.dir)}</b></span>`)}${M.out.map(t => row(file(t, "file in"))).join("")}`,
  mac: M => `<span class="c">${esc(M.term)}</span><br><span class="q">$</span> lsof -i -a -c Monsieur<br>COMMAND&nbsp;&nbsp;&nbsp;TYPE&nbsp;&nbsp;NAME<br>Monsieur&nbsp;&nbsp;IPv4&nbsp;&nbsp;<span class="g">127.0.0.1:49716 (LISTEN)</span><br><span class="c">${esc(M.term2)}</span>`,
};

export function body(c) {
  const { L, t, S } = c;
  const feat = (f, i) => `<section class="feat" id="${f.id}">
      <div class="txt">
        <div class="n">${String(i + 1).padStart(2, "0")}</div>
        <h2>${c.h(f.h)}</h2>
        <p>${c.h(f.p)}</p>
        <ul>
          ${f.pts.map(([b, rest]) => `<li><b>${c.h(b)}</b> ${c.h(rest)}</li>`).join("\n          ")}
        </ul>
        ${f.note ? `<p class="note">${c.h(L.noteLab + f.note)}</p>` : ""}
      </div>
      <figure class="shot">
        <figcaption class="sr">${c.h(S.mdIllus + (c.lang === "fr" ? " : " : ": ") + f.shot)}</figcaption>
        <div class="mk${f.id === "mac" ? " term" : ""}" aria-hidden="true" data-nosnippet>${MOCK[f.id](L.mk)}</div>
      </figure>
    </section>`;

  return `${nav(c, { cta: `<a class="btn dark small" href="${c.url("home", "#download")}">${t("navDl")}</a>` })}

<main class="page">
  <div class="wrap">
    <a class="back" href="${c.url("home")}">${t("back")}</a>
    <div class="head">
      <span class="eyebrow">${t("ey")}</span>
      <h1>${t("h")}</h1>
      <p>${t("p")}</p>
    </div>
    <p class="illus">${t("illus")}</p>
    <div class="toc" role="navigation" aria-label="${c.a(L.tocAria)}">
      ${L.feats.map(f => `<a href="#${f.id}">${c.h(f.short)}</a>`).join("\n      ")}
    </div>
    <div id="feats">
    ${L.feats.map(feat).join("\n    ")}
    </div>

    <div class="band blue dl endband">
      <h2>${t("dlH")}</h2>
      <p>${t("dlP")}</p>
      <a class="btn" href="${c.url("home", "#download")}">${t("dlBtn")}</a>
    </div>
  </div>
</main>

${footer(c)}`;
}

export function graph(c) {
  const { L, p } = c;
  return [
    ...baseGraph(c, { title: p(L.title), description: p(L.desc), about: appRef() }),
    { "@type": "ItemList", "@id": c.selfAbs + "#features", name: p(L.h), numberOfItems: L.feats.length,
      itemListElement: L.feats.map((f, i) => ({ "@type": "ListItem", position: i + 1, name: p(f.h), description: p(f.p), url: `${c.selfAbs}#${f.id}` })) },
  ];
}

export function markdown(c) {
  const { L, m, p } = c;
  return `${mdHeader(c, { title: p(L.title), description: p(L.desc) })}
${m(L.p)}

${L.feats.map((f, i) => `## ${i + 1}. ${m(f.h)}

${m(f.p)}

${f.pts.map(([b, rest]) => `- **${dot(m(b))}** ${m(rest)}`).join("\n")}
${f.note ? `\n${m(L.noteLab + f.note)}\n` : ""}`).join("\n")}
## ${m(L.dlH)}

${m(L.dlP)} [${m(L.dlBtn)}](${c.abs(c.url("home", "#download"))})

---

${m(L.foot1)} ${m(L.foot2)}
`;
}

export const meta = c => ({ title: c.p(c.L.title), description: c.p(c.L.desc) });
