/* Textes communs à toutes les pages : barre du haut, pied de page, mentions des versions Markdown. */

export const SHARED = {
fr:{
  langGroup:"Langue", langName:"Français",
  footNav:"Pages du site", footFeat:"Fonctionnalités", footDf:"Monsieur Dossier et DossierFacile", footGuides:"Guides",
  foot1:"Monsieur Dossier — votre dossier de location, prêt et protégé.",
  foot2:"Application indépendante, non affiliée à l’État. Aucune donnée collectée.",
  footC:"Un avis, un bug ? Écrivez-nous",
  navDl:"Télécharger",
  gEy:"Guide", gBack:"← Tous les guides", gUpdated:"Mis à jour le", gSources:"Sources",
  gChecked:"Sources consultées le",
  gNote:"Ce guide donne une information générale, à jour à la date indiquée. Il ne remplace pas un conseil juridique : en cas de doute, le texte en vigueur fait foi.",
  gAppH:"Avec Monsieur Dossier", gAppBtn:"Télécharger pour Mac", gAppFine:"Application pour Mac, gratuite pendant la bêta. Vos documents restent sur votre Mac.",
  gMore:"À lire aussi",
  giTitle:"Guides du dossier de location — Monsieur Dossier", giCrumb:"Guides",
  giDesc:"Des réponses courtes et sourcées aux questions que pose un dossier de location en France : pièces autorisées, garant, filigrane, masquage, arnaques.",
  giEy:"Guides", giH:"Le dossier de location, question par question.",
  giP:"Chaque guide répond à une question, cite le texte ou la source officielle, et porte sa date de mise à jour.",
  giBack:"← Retour à l’accueil",
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
  footNav:"Site pages", footFeat:"Features", footDf:"Monsieur Dossier and DossierFacile", footGuides:"Guides",
  foot1:"Monsieur Dossier — your French rental file, ready and protected.",
  foot2:"Independent app, not affiliated with the French government. No data collected.",
  footC:"Feedback or a bug? Contact us",
  navDl:"Download",
  gEy:"Guide", gBack:"← All guides", gUpdated:"Updated on", gSources:"Sources",
  gChecked:"Sources checked on",
  gNote:"This guide gives general information, current on the date shown. It is not legal advice: if in doubt, the law in force prevails.",
  gAppH:"With Monsieur Dossier", gAppBtn:"Download for Mac", gAppFine:"A Mac app, free during the beta. Your documents stay on your Mac.",
  gMore:"Read next",
  giTitle:"French rental file guides — Monsieur Dossier", giCrumb:"Guides",
  giDesc:"Short, sourced answers to the questions a French rental file raises: allowed documents, guarantors, watermarks, redaction, scams.",
  giEy:"Guides", giH:"The French rental file, one question at a time.",
  giP:"Each guide answers one question, cites the law or the official source, and shows the date it was last updated.",
  giBack:"← Back to home",
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
