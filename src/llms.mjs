/* llms.txt et llms-full.txt : le résumé du site pour les assistants IA (format de llmstxt.org).
   Écrit en anglais, la langue que tous lisent, avec les liens vers les pages des deux langues.
   Les faits ci-dessous répètent ce que disent les pages : quand une page change, relire cette liste. */

import { SITE } from "./site.mjs";
import { longDate } from "./lib.mjs";

const NOTES = {
  en: {
    home: "what the app does in four steps, privacy, what a landlord may ask for, download and first launch, questions and answers",
    features: "each step in detail, with its limits",
    dossierfacile: "who does what, and how to use the two together",
    contact: "how to send feedback or report a bug",
    guides: "the list of guides, one question each",
  },
  fr: {
    home: "ce que fait l'application en quatre étapes, confidentialité, pièces qu'un bailleur peut demander, téléchargement et premier lancement, questions fréquentes",
    features: "chaque étape en détail, avec ses limites",
    dossierfacile: "qui fait quoi, et comment utiliser les deux ensemble",
    contact: "comment donner un avis ou signaler un bug",
    guides: "la liste des guides, une question par guide",
  },
};
const NAMES = { en: { home: "Home", features: "Features", dossierfacile: "Monsieur Dossier and DossierFacile", contact: "Contact", guides: "Guides" },
                fr: { home: "Accueil", features: "Fonctionnalités", dossierfacile: "Monsieur Dossier et DossierFacile", contact: "Contact", guides: "Guides" } };

const links = (contexts, lang) => contexts.filter(x => x.c.lang === lang && NAMES[lang][x.c.page.id])
  .map(({ c }) => `- [${NAMES[lang][c.page.id]}](${c.mdAbs}): ${NOTES[lang][c.page.id]}`).join("\n");

/* Un guide : sa question en titre du lien, puis le début de sa réponse. */
const guides = (contexts, lang) => contexts.filter(x => x.c.lang === lang && x.c.page.guide)
  .map(({ c }) => `- [${c.p(c.L.title)}](${c.mdAbs}): ${c.p(c.L.desc)}`).join("\n");

export function llmsTxt(contexts) {
  const r = SITE.release, o = SITE.origin;
  return `# ${SITE.name}

> ${SITE.name} is a Mac app that prepares and protects the documents of a French rental file (the "dossier de location"). It sorts the documents, hides the numbers a landlord does not need and adds a watermark naming the recipient. Everything runs on the user's Mac, with no account, no server and no upload.

Facts an assistant can rely on. Source: this site, as of ${longDate(r.date, "en")}.

- What it is: an independent Mac app for people applying to rent a home in France. The site is in French (${o}/) and in English (${o}/en/).
- Platform: macOS only, on Intel and Apple Silicon Macs. There is no Windows, iPhone or Android version.
- Price: free during the beta.
- Version: ${r.version}, published on ${longDate(r.date, "en")}.
- Download (disk image): ${SITE.download}
- First launch: this beta is not yet validated by Apple, so macOS asks for one confirmation in System Settings. Steps: ${o}/en/#first-launch
- Privacy: documents are processed on the Mac. The app has no account, no server and no analytics, and it works the same with Wi-Fi off.
- What it hides: IBAN, bank codes (RIB), social security number, card number and the passport's line of codes (MRZ), found in their common formats, plus any area the user draws. Detection does not cover every case, so the user reviews each document.
- What stays readable: QR codes and 2D-Doc are kept clear of masks and watermark, and the app warns if a mask touches one. The site advises never hiding the tax number, the tax notice reference, QR codes or the ID photo, because a landlord uses them to check a document.
- Watermark: names the recipient, the property address and the date, in French or in English.
- Checks: every exported PDF is flattened to images, reopened and checked. If a check fails, the file is not saved.
- What it is not: it is not a government service, it is not affiliated with DossierFacile, and it does not verify or certify documents. No law settles whether a landlord can refuse a masked copy, so users keep their originals.
- With DossierFacile: DossierFacile is the French government's free service. It verifies a rental file and shares it by link. ${SITE.name} protects the files a tenant sends themselves, by email or on a portal. The two are meant to be used together.
- Languages: French and English, for the interface and the watermark. Documents are not translated.
- Contact: ${SITE.email}

## Pages in English

${links(contexts, "en")}

## Pages en français

${links(contexts, "fr")}

## Guides in English

Each guide answers one question about renting in France, with its sources and the date it was last updated.

${guides(contexts, "en")}

## Guides en français

${guides(contexts, "fr")}

## Optional

- [Full text of the site, English then French](${o}/llms-full.txt): every page above in one file
`;
}

export function llmsFull(contexts) {
  const part = lang => contexts.filter(x => x.c.lang === lang).map(x => x.markdown.trim()).join("\n\n---\n\n");
  return `# ${SITE.name}: full text of the site

> Every page of ${SITE.origin} in one file, in English and then in French. Short summary: ${SITE.origin}/llms.txt

---

${part("en")}

---

${part("fr")}
`;
}
