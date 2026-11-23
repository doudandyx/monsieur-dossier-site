/* Textes communs à toutes les pages : barre du haut, pied de page, mentions des versions Markdown. */

export const SHARED = {
fr:{
  langGroup:"Langue", langName:"Français",
  footNav:"Pages du site", footFeat:"Fonctionnalités", footDf:"Monsieur Dossier et DossierFacile",
  updated:"Page mise à jour le",
  version:"Version {v} du {d}",
  ogAlt:"Monsieur Dossier : un bulletin de paie d’exemple, numéros masqués, avec un filigrane au nom du destinataire.",
  crumbHome:"Accueil",
  mdAlt:"Cette page en Markdown",
  mdLang:"Langue : français", mdOther:"English version", mdWeb:"Page web", mdUpdated:"Mise à jour",
  mdIllus:"Illustration"
},
en:{
  langGroup:"Language", langName:"English",
  footNav:"Site pages", footFeat:"Features", footDf:"Monsieur Dossier and DossierFacile",
  updated:"Page updated on",
  version:"Version {v}, {d}",
  ogAlt:"Monsieur Dossier: a sample payslip with its numbers hidden and a watermark naming the recipient.",
  crumbHome:"Home",
  mdAlt:"This page in Markdown",
  mdLang:"Language: English", mdOther:"Version française", mdWeb:"Web page", mdUpdated:"Updated",
  mdIllus:"Illustration"
}};

/* Proposition de l'autre langue, affichée par site.js quand la langue du navigateur n'est pas celle de la page.
   Chaque texte est écrit dans la langue proposée. */
export const LANG_OFFER = {
  fr:{ link:"Lire cette page en français", close:"Fermer" },
  en:{ link:"Read this page in English", close:"Close" }
};
