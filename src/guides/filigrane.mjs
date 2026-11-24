/* Guide : le texte du filigrane.
   Sources relues une à une le 24 novembre 2026, dans le navigateur :
   - Cybermalveillance.gouv.fr, fiche « usurpation d'identité » (mise à jour le 23 septembre 2026) : marquer les
     copies « en inscrivant par-dessus le motif de l'envoi, la date et le destinataire » ;
   - Cybermalveillance.gouv.fr, fiche « arnaque à la location » (mise à jour le 28 octobre 2026) : même conseil,
     et « des sites officiels comme Dossier Facile ou Filigrane Facile » ;
   - CNIL (10 octobre 2025) : FiligraneFacile « proposé par l'État » ;
   - FiligraneFacile, page d'accueil : formats, 100 caractères, exemple de mention, effacement, document vierge ;
   - France Identité, page « justificatif » : destinataire, durée, motif, PDF signé ;
   - impots.gouv.fr (modifié le 6 janvier 2026) : le code 2D-Doc sert à vérifier l'intégrité d'un avis.
   Les phrases d'exemple sont les nôtres : aucune page officielle n'en donne avec destinataire et date.
   Le placement du filigrane et la remarque sur la retouche sont nos conseils : le guide le dit. */

/* Notes de rédaction, non publiées (relecture du 24 novembre 2026). Ce que les sources ne disent pas :
   - Cybermalveillance.gouv.fr recommande trois éléments : le motif, la date et le destinataire. Il ne donne pas
     de formule. Les exemples de ce guide sont les nôtres.
   - Aucune source lue ne mesure l’effet d’un filigrane sur la fraude. Dire qu’il dissuade est un avis, pas un
     résultat établi.
   - Le placement en travers de la page et la remarque sur la retouche sont nos conseils. Les pages officielles
     lues n’en disent pas plus que le mot « par-dessus ».
   - Les délais d’effacement de FiligraneFacile sont ceux que le service affiche. Nous ne les avons pas
     contrôlés. */

export default {
  id: "guide-filigrane",
  slug: { fr: "texte-filigrane-dossier-location", en: "watermark-text-rental-documents-france" },
  published: "2026-11-24", updated: "2026-11-24", checked: "2026-11-24",
  related: ["guide-masquer", "guide-caviarder", "guide-escroc"],
  T: {
fr: {
  title: "Que faut-il écrire dans le filigrane d’un dossier de location ?",
  short: "Le texte du filigrane",
  desc: "Écrivez à qui la copie est destinée, pour quel usage et à quelle date : c’est le conseil de Cybermalveillance.gouv.fr pour éviter qu’une copie soit réutilisée.",
  answer: "Écrivez trois choses dans le filigrane d’un dossier de location : à qui la copie est destinée, pour quel usage, et à quelle date. C’est le conseil de [Cybermalveillance.gouv.fr](src:arnaque), qui recommande d’inscrire sur chaque copie « le motif de l’envoi, la date et le destinataire » pour éviter qu’elle soit réutilisée à des fins frauduleuses. Un exemple, rédigé par nos soins : « Copie – Dossier location 12 rue des Lilas – Usage exclusif Agence Saône – 11/2026 ».",
  sections: [
    { h: "Pourquoi nommer le destinataire et dater la copie ?", blocks: [
      "[Cybermalveillance.gouv.fr](src:arnaque) le recommande pour éviter que vos documents soient réutilisés à des fins frauduleuses. Notre explication : une mention générale ne dit pas d’où vient la copie. [FiligraneFacile](src:ff), le service de l’État, propose en exemple « Document exclusivement destiné à la location immobilière ». Une telle mention limite l’usage, mais elle vaudrait encore pour une autre location. Avec le nom de l’agence ou du bailleur et la date, chaque copie est liée à un seul envoi.",
    ] },
    { h: "Quelle formule utiliser ?", blocks: [
      "Aucune page officielle ne donne de formule avec destinataire et date. Les trois exemples ci-dessous sont les nôtres : une ligne courte, lisible, avec le destinataire, l’objet et le mois.",
      { ul: [
        "pour une agence : « Copie – Dossier location 12 rue des Lilas – Usage exclusif Agence Saône – 11/2026 »",
        "pour un particulier : « Copie – Location 5 place Carnot – Pour M. Durand uniquement – 11/2026 »",
        "en anglais : « Copy – Rental application 12 rue des Lilas – For Agence Saône only – 11/2026 »",
      ] },
      { note: "[FiligraneFacile](src:ff) limite la mention à 100 caractères. Les trois exemples tiennent dans cette limite." },
    ] },
    { h: "Où placer le filigrane ?", blocks: [
      "[Cybermalveillance.gouv.fr](src:usurpation) parle d’inscrire la mention « par-dessus » la copie. Notre conseil va dans le même sens : en travers de toute la page, répété, par-dessus le texte, car une mention posée dans une marge peut être recadrée. Le document doit rester lisible. Ne couvrez pas le code 2D-Doc d’un avis d’imposition : d’après [impots.gouv.fr](src:impots), il sert à vérifier l’intégrité de l’avis.",
    ] },
    { h: "Avec quel outil ajouter un filigrane ?", blocks: [
      { ul: [
        "**[FiligraneFacile](src:ff)**, le service en ligne de l’État. Vous déposez un fichier jpg, png, heic ou pdf, vous écrivez la mention et vous récupérez un PDF. Le service indique effacer les originaux de ses serveurs après la génération du fichier, et le fichier filigrané après son premier téléchargement, ou au bout d’un jour. La [CNIL](src:cnil) le présente comme un moyen de protéger des documents sensibles avant de les transmettre.",
        "**DossierFacile**, le service de l’État pour le dossier de location. [Cybermalveillance.gouv.fr](src:arnaque) le cite, avec FiligraneFacile, parmi les sites officiels qui aident à sécuriser un dossier ou à marquer ses copies d’un filigrane.",
        "**[France Identité](src:fi)**, l’application de l’État. Elle crée un justificatif d’identité à usage unique : un PDF signé par le ministère de l’Intérieur, pour lequel vous précisez un destinataire, une durée et un motif, à la place d’une photocopie de votre titre d’identité. Les conditions pour l’utiliser sont sur son site.",
      ] },
    ] },
    { h: "Un filigrane suffit-il à protéger une copie ?", blocks: [
      "Non, à notre avis. Un filigrane dissuade et indique d’où vient une copie, mais une retouche d’image peut l’atténuer ou le retirer. Il ne remplace pas le masquage des numéros dont le bailleur n’a pas besoin : voir [ce qu’on peut masquer sur ses pièces](page:guide-masquer).",
    ] },
    { h: "Un document filigrané peut-il être refusé ?", blocks: [
      "Oui, c’est possible. [FiligraneFacile](src:ff) le signale lui-même : l’ajout d’un filigrane est une bonne pratique, mais certains organismes, comme les banques ou les services publics, peuvent avoir besoin d’un document vierge. Gardez toujours vos originaux.",
    ] },
  ],
  sources: [
    { k: "usurpation", t: "Usurpation d’identité, que faire ? (Cybermalveillance.gouv.fr, page mise à jour le 23 septembre 2026)", u: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/usurpation-identite-que-faire" },
    { k: "arnaque", t: "Comment réagir en cas d’arnaque à la location immobilière ? (Cybermalveillance.gouv.fr, page mise à jour le 28 octobre 2026)", u: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/arnaques-location-immobiliere" },
    { k: "cnil", t: "Location d’un bien immobilier : quels justificatifs ? (CNIL, 10 octobre 2025)", u: "https://www.cnil.fr/fr/location-dun-bien-immobilier-quels-justificatifs" },
    { k: "ff", t: "FiligraneFacile, service de l’État", u: "https://filigrane.beta.gouv.fr/" },
    { k: "fi", t: "Justificatif d’identité à usage unique (France Identité)", u: "https://france-identite.gouv.fr/justificatif/" },
    { k: "impots", t: "Précisions sur le service de vérification des avis (impots.gouv.fr, page modifiée le 6 janvier 2026)", u: "https://www.impots.gouv.fr/precisions-sur-le-service-de-verification-en-ligne" },
  ],
  app: "Monsieur Dossier rédige cette mention pour vous. Vous indiquez l’agence et l’adresse du logement : le filigrane est appliqué à toutes vos pièces, en dehors des QR codes de vérification. Changez de destinataire, et toutes les copies sont refaites. Rien n’est envoyé sur Internet.",
},
en: {
  title: "What should the watermark on my French rental documents say?",
  short: "What the watermark should say",
  desc: "Write who the copy is for, what it is for and the date: that is the advice of Cybermalveillance.gouv.fr, the French government’s service, to keep a copy from being reused.",
  answer: "Write three things in the watermark on your French rental documents: who the copy is for, what it is for, and the date. This is the advice of [Cybermalveillance.gouv.fr](src:arnaque), the French government’s cybersecurity help service, which recommends writing on each copy the reason for sending it, the date and the recipient, so that it cannot be reused for fraud. An example, written by us: “Copy – Rental application 12 rue des Lilas – For Agence Saône only – 11/2026”.",
  sections: [
    { h: "Why name the recipient and date the copy?", blocks: [
      "[Cybermalveillance.gouv.fr](src:arnaque) recommends it to keep your documents from being reused for fraud. Our explanation: a general phrase does not say where the copy came from. [FiligraneFacile](src:ff), the government’s watermarking service, suggests “Document exclusivement destiné à la location immobilière”, meaning for property rental only. Such a phrase limits the use, but it would still hold for another rental. With the name of the agency or landlord and the date, each copy is tied to a single send.",
    ] },
    { h: "Which wording should you use?", blocks: [
      "No official page gives a wording with recipient and date. The three examples below are ours: one short, readable line with the recipient, the purpose and the month.",
      { ul: [
        "for an agency: “Copy – Rental application 12 rue des Lilas – For Agence Saône only – 11/2026”",
        "for a private landlord: “Copy – Rental 5 place Carnot – For Mr Durand only – 11/2026”",
        "in French: “Copie – Dossier location 12 rue des Lilas – Usage exclusif Agence Saône – 11/2026”",
      ] },
      { note: "[FiligraneFacile](src:ff) limits the text to 100 characters. All three examples fit within that limit." },
    ] },
    { h: "Where should the watermark go?", blocks: [
      "[Cybermalveillance.gouv.fr](src:usurpation) speaks of writing the mention “over” the copy. Our advice goes the same way: across the whole page, repeated, over the text, because a mention placed in a margin can be cropped out. The document must stay readable. Do not cover the 2D-Doc code on a tax notice: according to [impots.gouv.fr](src:impots), it is used to check that the notice has not been altered.",
    ] },
    { h: "Which tool can add a watermark?", blocks: [
      { ul: [
        "**[FiligraneFacile](src:ff)**, the government’s online service. You upload a jpg, png, heic or pdf file, type the text and get a PDF back. The service says it erases the originals from its servers once the file is generated, and the watermarked file after its first download, or after one day. The [CNIL](src:cnil), the French data protection authority, presents it as a way to protect sensitive documents before sending them.",
        "**DossierFacile**, the government’s service for rental files. [Cybermalveillance.gouv.fr](src:arnaque) names it, with FiligraneFacile, among the official sites that help secure a file or mark copies with a watermark.",
        "**[France Identité](src:fi)**, the government’s app. It creates a single-use proof of identity: a PDF signed by the Interior Ministry, for which you set a recipient, a duration and a purpose, in place of a photocopy of your identity document. The conditions for using it are on its site.",
      ] },
    ] },
    { h: "Is a watermark enough to protect a copy?", blocks: [
      "No, in our view. A watermark deters misuse and shows where a copy came from, but image retouching can fade or remove it. It does not replace hiding the numbers the landlord does not need: see [what you can hide on your documents](page:guide-masquer).",
    ] },
    { h: "Can a watermarked document be refused?", blocks: [
      "Yes, it can happen. [FiligraneFacile](src:ff) says so itself: adding a watermark is good practice, but some organisations, such as banks or public services, may need a clean document. Always keep your originals.",
    ] },
  ],
  sources: [
    { k: "usurpation", t: "Identity theft: what to do (Cybermalveillance.gouv.fr, page updated on 23 September 2026, in French)", u: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/usurpation-identite-que-faire" },
    { k: "arnaque", t: "How to react to a rental scam (Cybermalveillance.gouv.fr, page updated on 28 October 2026, in French)", u: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/arnaques-location-immobiliere" },
    { k: "cnil", t: "Renting a property: which supporting documents? (CNIL, 10 October 2025, in French)", u: "https://www.cnil.fr/fr/location-dun-bien-immobilier-quels-justificatifs" },
    { k: "ff", t: "FiligraneFacile, a French government service (in French)", u: "https://filigrane.beta.gouv.fr/" },
    { k: "fi", t: "Single-use proof of identity (France Identité, in French)", u: "https://france-identite.gouv.fr/justificatif/" },
    { k: "impots", t: "About the tax notice verification service (impots.gouv.fr, page modified on 6 January 2026, in French)", u: "https://www.impots.gouv.fr/precisions-sur-le-service-de-verification-en-ligne" },
  ],
  app: "Monsieur Dossier writes this wording for you. You enter the agency and the property address: the watermark is applied to all your documents, clear of the verification QR codes. Change the recipient, and every copy is redone. Nothing is sent over the internet.",
},
  },
};
