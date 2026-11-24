/* Accueil : ce que fait l'application, en une page, jusqu'au téléchargement. */

import { SITE } from "../site.mjs";
import { T } from "../i18n/home.mjs";
import { T as FEATURES } from "../i18n/features.mjs";
import { longDate, dot } from "../lib.mjs";
import { nav, footer, baseGraph, mdHeader, ID } from "../layout.mjs";

export const page = { id: "home", file: { fr: "index.html", en: "en/index.html" }, updated: "2026-11-23", T };

const APPLE = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1zM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.5z"/></svg>`;

/* Le lien de téléchargement : un vrai lien vers le fichier, lisible sans JavaScript. */
const DL = `href="${SITE.download}" type="application/x-apple-diskimage"`;

const versionLine = c => c.S.version.replace("{v}", SITE.release.version).replace("{d}", longDate(SITE.release.date, c.lang));

const moreHref = (c, h) => h.startsWith("page:") ? c.url(h.slice(5)) : h;

export function body(c) {
  const { L, t } = c;
  const steps = keys => keys.map((k, i) => `<li class="step"><div class="n">${String(i + 1).padStart(2, "0")}</div><h3>${t(k + "h")}</h3><p>${t(k + "p")}</p></li>`).join("\n        ");
  const cards = keys => keys.map(k => `<article><h3>${t(k + "h")}</h3><p>${t(k + "p")}</p></article>`).join("\n        ");

  return `${nav(c, {
    markSize: 30,
    links: `<div class="links">
      <a href="${c.url("features")}">${t("navFeat")}</a>
      <a href="#how">${t("navHow")}</a>
      <a href="#privacy">${t("navPriv")}</a>
      <a href="#legal">${t("navLegal")}</a>
      <a href="#faq">${t("navFaq")}</a>
    </div>`,
    cta: `<a class="btn dark small" ${DL}>${t("navDl")}</a>`,
  })}

<main>
<header class="hero" id="top">
  <div class="wrap">
    <span class="eyebrow">${t("eyebrow")}</span>
    <h1>${t("h1")}</h1>
    <p class="lede">${t("lede")}</p>
    <div class="cta">
      <a class="btn primary" ${DL}>
        ${APPLE}
        <span>${t("ctaDl")}</span>
      </a>
      <a class="btn" href="#how">${t("ctaHow")}</a>
    </div>
    <div class="facts">
      <span>${t("f1")}</span>
      <span>${t("f2")}</span>
      <span>${t("f3")}</span>
      <span>${t("f4")}</span>
    </div>
  </div>
</header>

<div class="wrap">
  <div class="stage">
    <figure class="demo" id="demo">
      <figcaption class="sr">${t("demoCap")}</figcaption>
      <div class="sheet" id="sheet" data-nosnippet>
        <div class="hd">
          <div><b>${t("docT")}</b> <small>${t("docSub")}</small></div>
          <span class="bank">ATELIER RHÔNE SAS</span>
        </div>
        <dl class="kv">
          <dt>${t("kName")}</dt><dd>Camille MARTIN</dd>
          <dt>${t("kAddr")}</dt><dd>8 rue Paul Bert, 69003 Lyon</dd>
          <dt>${t("kSecu")}</dt><dd class="m">2 91 04 69 123 456 78</dd>
        </dl>
        <div class="sec">
          <div class="st">${t("kPay")}</div>
          <dl class="kv">
            <dt>${t("kPeriod")}</dt><dd>${t("kPeriodV")}</dd>
            <dt>${t("kGross")}</dt><dd>3 150,00 €</dd>
            <dt>${t("kNet")}</dt><dd>2 450,00 €</dd>
          </dl>
        </div>
        <div class="sec">
          <div class="st">${t("kBank")}</div>
          <dl class="kv">
            <dt>IBAN</dt><dd class="m">FR76 3000 6000 0112 3456 7890 189</dd>
            <dt>BIC</dt><dd class="m">AGRIFRPP882</dd>
          </dl>
        </div>
        <div class="wm" aria-hidden="true">
          ${`<div data-t="${c.a(L.wm)}"></div>`.repeat(14)}
        </div>
      </div>
      <svg class="seal" id="seal" viewBox="0 0 136 136" role="img" aria-label="${c.a(L.sealAria)}">
        <defs><path id="sealRing" d="M68 68 m-50 0 a50 50 0 1 1 100 0 a50 50 0 1 1 -100 0"/></defs>
        <circle cx="68" cy="68" r="64" fill="none" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="68" cy="68" r="40" fill="none" stroke="currentColor" stroke-width="1.2"/>
        <text aria-hidden="true"><textPath href="#sealRing">${t("seal")}</textPath></text>
        <path d="M46 56 L64 68 L46 80Z M90 56 L72 68 L90 80Z" fill="currentColor"/>
        <rect x="63" y="63" width="10" height="10" rx="2.5" fill="currentColor"/>
      </svg>
      <div class="toggle" role="group" aria-label="${c.a(L.toggleAria)}">
        <button type="button" id="bBefore" aria-pressed="false">${t("before")}</button>
        <button type="button" id="bAfter" aria-pressed="true">${t("after")}</button>
      </div>
    </figure>
  </div>
</div>

<section class="block" id="how">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">${t("hEy")}</span>
      <h2>${t("hH")}</h2>
      <p>${t("hP")}</p>
    </div>
    <ol class="steps">
        ${steps(["s1", "s2", "s3", "s4"])}
    </ol>
    <p class="more"><a href="${c.url("features")}">${t("tMore")}</a></p>
  </div>
</section>

<section class="block" id="problem">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">${t("pEy")}</span>
      <h2>${t("pH")}</h2>
      <p>${t("pP")}</p>
    </div>
    <div class="prob">
        ${cards(["p1", "p2", "p3"])}
    </div>
  </div>
</section>

<section class="block" id="newcomer">
  <div class="wrap">
    <div class="band">
      <div class="head">
        <span class="eyebrow">${t("nEy")}</span>
        <h2>${t("nH")}</h2>
        <p>${t("nP")}</p>
      </div>
      <div class="prob four">
        ${cards(["n1", "n2", "n3", "n4"])}
      </div>
      <p class="more"><a href="${c.url("guide-etranger")}">${t("nMore")}</a></p>
    </div>
  </div>
</section>

<section class="block" id="privacy">
  <div class="wrap">
    <div class="band deep">
      <div class="head">
        <span class="eyebrow">${t("vEy")}</span>
        <h2>${t("vH")}</h2>
        <p>${t("vP")}</p>
      </div>
      <div class="proofs">
        ${["c1", "c2", "c3", "c4"].map(k => `<div class="proof"><b>${t(k + "b")}</b> <span>${t(k + "s")}</span></div>`).join("\n        ")}
      </div>
      <div class="proof how"><b>${t("hwH")}</b> <span>${t("hwP")}</span></div>
      <div class="terminal" role="img" aria-label="${c.a(L.termAria)}">
<span class="c">${t("termC")}</span><br>
<span class="k">$</span> lsof -i -a -c Monsieur<br>
COMMAND&nbsp;&nbsp;&nbsp;TYPE&nbsp;&nbsp;NAME<br>
Monsieur&nbsp;&nbsp;IPv4&nbsp;&nbsp;<span class="g">127.0.0.1:49716 (LISTEN)</span><br><br>
<span class="c">${t("termC2")}</span><br>
<span class="k">$</span> pdftotext dossier_filigrane.pdf -<br>
<span class="g">${t("termOk")}</span>
      </div>
    </div>
  </div>
</section>

<section class="block" id="legal">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">${t("lEy")}</span>
      <h2>${t("lH")}</h2>
      <p>${t("lP")}</p>
    </div>
    <div class="legal">
      <div class="list ok"><h3><span class="pill">${t("okPill")}</span> <span>${t("okH")}</span></h3><ul>
        ${L.okL.map(s => `<li>${c.h(s)}</li>`).join("\n        ")}
      </ul></div>
      <div class="list no"><h3><span class="pill">${t("noPill")}</span> <span>${t("noH")}</span></h3><ul>
        ${L.noL.map(s => `<li>${c.h(s)}</li>`).join("\n        ")}
      </ul></div>
    </div>
    <p class="more"><a href="${c.url("guide-documents")}">${t("lMore")}</a></p>
    <p class="src">${t("lSrc")}</p>
  </div>
</section>

<section class="block" id="download">
  <div class="wrap">
    <div class="band blue dl">
      <span class="pill">${t("dBeta")}</span>
      <h2>${t("dH")}</h2>
      <p>${t("dP")}</p>
      <a class="btn" ${DL}><span>${t("dBtn")}</span></a>
      <span class="dl-ver">${c.h(versionLine(c))}</span>
      <a class="dl-more" href="#first-launch">${t("dFirst")}</a>
    </div>
    <div class="first" id="first-launch">
      <div class="head">
        <h3>${t("flH")}</h3>
        <p>${t("flP")}</p>
      </div>
      <ol class="steps">
        ${steps(["fl1", "fl2", "fl3", "fl4"])}
      </ol>
      <p class="src">${t("flNote")}</p>
    </div>
  </div>
</section>

<section class="block" id="faq">
  <div class="wrap">
    <div class="head"><h2>${t("qH")}</h2></div>
    <div class="faq">
      ${L.faq.map(([q, a, more], i) => `<details${i === 0 ? " open" : ""}><summary><h3>${c.h(q)}</h3></summary><p>${c.h(a)}${more ? ` <a href="${moreHref(c, more.h)}">${c.h(more.t)}</a>` : ""}</p></details>`).join("\n      ")}
    </div>
  </div>
</section>
</main>

${footer(c)}`;
}

/* ---------- données structurées ---------- */

export function graph(c) {
  const { L, p } = c;
  const title = p(L.title), description = p(L.desc);
  return [
    ...baseGraph(c, { title, description, about: { "@id": ID.app } }),
    { "@type": "SoftwareApplication", "@id": ID.app, name: SITE.name, alternateName: SITE.shortName, description,
      url: c.selfAbs, applicationCategory: "UtilitiesApplication", operatingSystem: "macOS",
      softwareVersion: SITE.release.version, datePublished: SITE.release.date, downloadUrl: SITE.download,
      inLanguage: SITE.langs, isAccessibleForFree: true,
      offers: { "@type": "Offer", price: SITE.price.amount, priceCurrency: SITE.price.currency, availability: "https://schema.org/InStock" },
      featureList: FEATURES[c.lang].feats.map(f => p(f.h)),
      image: `${SITE.origin}/og-${c.lang}.png`, publisher: { "@id": ID.org } },
    { "@type": "FAQPage", "@id": c.selfAbs + "#faq", inLanguage: c.lang,
      mainEntity: L.faq.map(([q, a]) => ({ "@type": "Question", name: p(q), acceptedAnswer: { "@type": "Answer", text: p(a) } })) },
  ];
}

/* ---------- version Markdown ---------- */

export function markdown(c) {
  const { L, m, p } = c;
  const lead = s => `**${dot(m(s))}**`;
  const steps = keys => keys.map((k, i) => `${i + 1}. ${lead(L[k + "h"])} ${m(L[k + "p"])}`).join("\n");
  const cards = keys => keys.map(k => `- ${lead(L[k + "h"])} ${m(L[k + "p"])}`).join("\n");
  const list = a => a.map(s => `- ${m(s)}`).join("\n");
  return `${mdHeader(c, { title: p(L.title), description: p(L.desc) })}
${m(L.lede)}

- ${[L.f1, L.f2, L.f3, L.f4].map(m).join("\n- ")}
- ${m(versionLine(c))}
- [${m(L.ctaDl)}](${SITE.download})

## ${m(L.hH)}

${m(L.hP)}

${steps(["s1", "s2", "s3", "s4"])}

[${m(L.tMore.replace(" →", ""))}](${c.abs(c.url("features"))})

## ${m(L.pH)}

${m(L.pP)}

${cards(["p1", "p2", "p3"])}

## ${m(L.nH)}

${m(L.nP)}

${cards(["n1", "n2", "n3", "n4"])}

## ${m(L.vH)}

${m(L.vP)}

${["c1", "c2", "c3", "c4"].map(k => `- ${lead(L[k + "b"])} ${m(L[k + "s"])}`).join("\n")}

${lead(L.hwH)} ${m(L.hwP)}

## ${m(L.lH)}

${m(L.lP)}

**${m(L.okPill)}. ${m(L.okH)}**

${list(L.okL)}

**${m(L.noPill)}. ${m(L.noH)}**

${list(L.noL)}

${m(L.lSrc)}

## ${m(L.dH)}

${m(L.dBeta)}. ${m(L.dP)} ${m(versionLine(c))}.

[${m(L.dBtn)}](${SITE.download})

### ${m(L.flH)}

${m(L.flP)}

${steps(["fl1", "fl2", "fl3", "fl4"])}

${m(L.flNote)}

## ${m(L.qH)}

${L.faq.map(([q, a, more]) => `### ${m(q)}\n\n${m(a)}${more && more.h.startsWith("page:") ? ` [${m(more.t)}](${c.abs(moreHref(c, more.h))})` : ""}`).join("\n\n")}

---

${m(L.foot1)} ${m(L.foot2)}
`;
}

export const meta = c => ({ title: c.p(c.L.title), description: c.p(c.L.desc) });
