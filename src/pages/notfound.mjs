/* Page 404 : une seule page pour tout le site, servie par GitHub Pages quand une adresse n'existe pas.
   Elle est donc écrite dans les deux langues, et n'est pas indexée. */

import { nav, footer } from "../layout.mjs";

const T = {
fr:{
  title:"Page introuvable — Monsieur Dossier",
  desc:"Cette page n’existe pas ou a changé d’adresse.",
  ey:"Erreur 404",
  h:"Cette page n’existe pas.",
  p:"L’adresse a peut-être changé. Tout le site tient en quelques pages.",
  home:"Retour à l’accueil",
  enEy:"Error 404", enH:"This page does not exist.", enP:"The address may have changed. The whole site is a few pages long.", enHome:"Go to the English home page",
  foot1:"Monsieur Dossier — votre dossier de location, prêt et protégé.",
  foot2:"Application indépendante, non affiliée à l’État. Aucune donnée collectée.", footC:"Un avis, un bug ? Écrivez-nous"
}};
T.en = T.fr;

export const page = { id: "notfound", file: { fr: "404.html" }, updated: "2026-11-23", T, noindex: true, langs: ["fr"] };

export function body(c) {
  const { t } = c;
  return `${nav(c)}

<main class="page">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow">${t("ey")}</span>
      <h1>${t("h")}</h1>
      <p>${t("p")}</p>
    </div>
    <p><a class="btn primary" href="${c.url("home")}">${t("home")}</a></p>
    <div class="head notfound-en" lang="en">
      <span class="eyebrow">${t("enEy")}</span>
      <h2>${t("enH")}</h2>
      <p>${t("enP")}</p>
    </div>
    <p lang="en"><a class="btn" href="${c.urlIn("en", "home")}" hreflang="en">${t("enHome")}</a></p>
  </div>
</main>

${footer(c)}`;
}

export const graph = () => null;
export const markdown = () => null;
export const meta = c => ({ title: c.p(c.L.title), description: c.p(c.L.desc), robots: "noindex, follow" });
