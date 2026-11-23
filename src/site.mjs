/* Réglages du site. Tout ce qui change d'une version de l'application à l'autre est ici. */

export const SITE = {
  origin: "https://monsieurdossier.com",
  name: "Monsieur Dossier",
  shortName: "M. Dossier",
  email: "contact@monsieurdossier.com",

  /* Le lien mène toujours à la dernière version publiée dans les Releases du dépôt. */
  download: "https://github.com/doudandyx/monsieur-dossier-site/releases/latest/download/MonsieurDossier.dmg",

  /* À CHANGER À CHAQUE VERSION PUBLIÉE, puis relancer le build. Affiché sous le bouton de téléchargement,
     repris dans les données structurées, llms.txt et les versions Markdown. */
  release: { version: "1.2.0", date: "2026-11-23" },

  /* Gratuit pendant la bêta. À revoir avec l'achat intégré : le prix est repris dans les données structurées. */
  price: { amount: "0", currency: "EUR" },

  /* Adresse d'envoi du service de formulaires de la page de contact (POST, réponse JSON).
     Vide : la page n'affiche que l'adresse e-mail, et le formulaire n'est pas écrit dans la page. */
  formEndpoint: "",

  /* Numéro à augmenter quand site.css ou site.js change, pour ne pas tomber sur un fichier en cache. */
  assets: 7,

  /* Clé IndexNow : elle prouve à Bing et aux autres moteurs du protocole que l'annonce d'une page vient du site.
     Elle est publique par nature. Le build l'écrit dans un fichier à la racine, et src/indexnow.mjs s'en sert. */
  indexNowKey: "5b04751eabed0cef2f065087078772a3",

  langs: ["fr", "en"],
  /* Langue proposée aux visiteurs qui ne lisent ni le français ni l'anglais (hreflang x-default). */
  fallbackLang: "en",

  /* Sources citées. */
  links: {
    decree: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493",
    dossierfacile: "https://www.dossierfacile.logement.gouv.fr/",
    visale: "https://www.visale.fr/",
  },
};
