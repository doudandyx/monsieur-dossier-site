/* Guide : ce qu'on peut masquer sur ses pièces.
   Sources relues une à une le 24 novembre 2026 :
   - décret n° 2015-1437, article 1er (copies, originaux à la demande) et annexe I (pièce d'identité « comportant
     la photographie du titulaire ») : Légifrance ;
   - impots.gouv.fr (modifié le 6 janvier 2026) : numéro fiscal et référence de l'avis à 13 chiffres, code 2D-Doc ;
   - CNIL, fiche n° 4 du guide du logement social (PDF) : passage sur les fiches de paie et le caviardage, et
     numéro de sécurité sociale des majeurs demandé pour un logement social ;
   - CNIL (10 octobre 2025) : DossierFacile permet de déposer les justificatifs et de les faire parvenir.
   Trois précautions, toutes dites dans le guide. Aucun texte ne tranche le droit de masquer : la liste est notre
   lecture. La fiche de la CNIL parle des fiches de paie que des bailleurs sociaux transmettent pour justifier des
   charges, pas du dossier d'un candidat. Les remarques techniques (rectangle noir, flou, MRZ) sont des constats
   généraux, sans source officielle citée. */

/* Notes de rédaction, non publiées (relecture du 24 novembre 2026). Ce que les sources ne disent pas :
   - Aucun texte ne dit ce qu’un candidat peut masquer, ni qu’un bailleur doit accepter une copie masquée. La
     liste de ce guide est notre lecture, fondée sur ce qui sert à juger un dossier et à vérifier une pièce.
   - La fiche de la CNIL citée porte sur un autre cas : des bailleurs sociaux qui transmettent les fiches de
     paie de leurs salariés pour justifier des charges. Nous la citons pour son raisonnement, pas comme une
     règle sur le dossier du candidat.
   - Les remarques sur le rectangle noir, le flou et la ligne de codes sont des constats techniques généraux.
     Les pages officielles citées ne les traitent pas.
   - Le test de la sélection et de la recherche repère un texte resté sous le masque. Il ne prouve pas qu’aucune
     trace ne subsiste ailleurs dans le fichier. */

export default {
  id: "guide-masquer",
  slug: { fr: "masquer-informations-dossier-location", en: "what-to-hide-rental-documents-france" },
  published: "2026-11-24", updated: "2026-11-24", checked: "2026-11-24",
  related: ["guide-filigrane", "guide-caviarder", "guide-rib"],
  T: {
fr: {
  title: "Que peut-on masquer sur les pièces d’un dossier de location ?",
  short: "Ce qu’on peut masquer sur ses pièces",
  desc: "Aucun texte ne le fixe. Notre lecture : masquez ce qui ne sert ni à juger le dossier ni à vérifier la pièce, comme l’IBAN ou le numéro de sécurité sociale. Jamais le numéro fiscal.",
  answer: "Aucun texte ne fixe ce qu’un candidat peut masquer sur ses pièces. Notre lecture : vous pouvez masquer ce qui ne sert ni à juger votre dossier ni à vérifier la pièce, comme l’IBAN, le numéro de sécurité sociale ou la ligne de codes au bas d’un passeport. Laissez visibles le numéro fiscal, la référence de l’avis d’imposition et le code 2D-Doc, qui servent à vérifier l’avis, ainsi que votre photo, votre nom et vos revenus. À notre connaissance, rien n’oblige un bailleur à accepter une copie masquée, et le [décret n° 2015-1437](src:decret) lui permet de demander l’original.",
  sections: [
    { h: "Qu’est-ce qu’un bailleur n’a pas besoin de voir ?", blocks: [
      "C’est notre lecture, pas une règle écrite. Ces trois informations ne servent ni à juger votre solvabilité ni à vérifier la pièce :",
      { ul: [
        "**L’IBAN et le RIB**, qu’un bulletin de salaire affiche parfois. Le RIB ne figure pas dans la liste du [décret](src:decret).",
        "**Le numéro de sécurité sociale**, qu’un bulletin de salaire peut contenir. À propos d’un autre cas, la [CNIL](src:fiche) le range parmi les données d’une fiche de paie qui ne sont en principe pas nécessaires.",
        "**La ligne de codes au bas d’un passeport ou d’une carte d’identité**, appelée MRZ, qui reprend vos données sous une forme lisible par une machine.",
      ] },
      { note: "Pour une demande de logement social, les règles sont différentes : d’après la [CNIL](src:fiche), le numéro de sécurité sociale des adultes qui vivront dans le logement fait partie des informations demandées." },
    ] },
    { h: "Que faut-il laisser visible ?", blocks: [
      { ul: [
        "**Le numéro fiscal et la référence de l’avis d’imposition.** D’après [impots.gouv.fr](src:impots), ce sont les deux identifiants de treize chiffres à saisir dans le service de vérification des avis, qu’un bailleur peut utiliser.",
        "**Le code 2D-Doc.** D’après impots.gouv.fr, le code apposé sur l’avis d’imposition sert à en vérifier l’intégrité. Laissez de même tout QR code de vérification.",
        "**Votre photo et votre nom**, sur la pièce d’identité : le [décret](src:decret) demande une pièce qui comporte la photographie de son titulaire.",
        "**Vos revenus, votre employeur et les dates** : c’est ce qui sert à juger le dossier.",
      ] },
    ] },
    { h: "A-t-on le droit de masquer une partie d’un document ?", blocks: [
      "À notre connaissance, aucun texte ne tranche. Le [décret n° 2015-1437](src:decret) permet de fournir des copies, et prévoit que les originaux doivent pouvoir être présentés à la demande du bailleur. Notre conseil : masquez peu, dites-le, et gardez vos originaux.",
      "La [CNIL](src:fiche) s’est prononcée sur un cas voisin, qui n’est pas celui d’un candidat locataire. À propos des fiches de paie de leurs salariés que des bailleurs sociaux transmettent pour justifier des charges, elle relève que le numéro de sécurité sociale ou l’adresse ne sont en principe pas nécessaires, et que les communiquer peut être contraire au principe de minimisation « en l’absence de caviardage de l’ensemble des éléments non pertinents ».",
    ] },
    { h: "Pourquoi un rectangle noir ne suffit-il pas ?", blocks: [
      "Parce qu’un rectangle dessiné dans un éditeur PDF peut laisser le texte dessous, où il reste copiable. Un flou ou une pixelisation peuvent parfois être inversés. Ce sont des constats techniques généraux, que les pages citées ici ne traitent pas. Dans le doute, vérifiez : un masque fiable retire l’information du fichier. Voir [comment caviarder un PDF sur Mac](page:guide-caviarder).",
    ] },
    { h: "Comment vérifier qu’un masque tient ?", blocks: [
      { ol: [
        "Ouvrez la copie masquée.",
        "Essayez de sélectionner le texte sous le masque, puis de le copier.",
        "Cherchez le numéro masqué avec la fonction de recherche.",
        "Si le texte se copie ou se retrouve, le masque n’a rien supprimé : recommencez avec un autre outil.",
      ] },
    ] },
    { h: "Et si le bailleur refuse la copie masquée ?", blocks: [
      "Montrez l’original lors de la visite ou de la signature : le [décret](src:decret) prévoit que les originaux peuvent être demandés. Vous pouvez aussi passer par DossierFacile, le service de l’État : d’après la [CNIL](src:cnil), il permet au locataire de déposer les justificatifs autorisés et de les faire parvenir au propriétaire.",
    ] },
  ],
  sources: [
    { k: "decret", t: "Décret n° 2015-1437 du 5 novembre 2015, article 1er et annexe I (Légifrance)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
    { k: "impots", t: "Précisions sur le service de vérification des avis (impots.gouv.fr, page modifiée le 6 janvier 2026)", u: "https://www.impots.gouv.fr/precisions-sur-le-service-de-verification-en-ligne" },
    { k: "fiche", t: "Guide du logement social, fiche n° 4 : quelles données peuvent être collectées ? (CNIL, PDF)", u: "https://www.cnil.fr/sites/default/files/2025-11/logement_social-fiche04.pdf" },
    { k: "cnil", t: "Location d’un bien immobilier : quels justificatifs ? (CNIL, 10 octobre 2025)", u: "https://www.cnil.fr/fr/location-dun-bien-immobilier-quels-justificatifs" },
  ],
  app: "Monsieur Dossier pose ces masques pour vous. IBAN, RIB, numéro de sécurité sociale et ligne de codes du passeport sont repérés aux formats courants, même sur un scan. Les QR codes et 2D-Doc restent lisibles, et vous êtes prévenu si un masque en touche un. La détection ne couvre pas tous les cas : vous vérifiez chaque pièce.",
},
en: {
  title: "What can I hide on my French rental documents?",
  short: "What you can hide on your documents",
  desc: "No law settles it. Our reading: hide what serves neither to assess your file nor to verify the document, such as your IBAN or social security number. Never your tax number.",
  answer: "No law sets out what an applicant can hide on French rental documents. Our reading: you can hide what serves neither to assess your file nor to verify the document, such as your IBAN, your social security number or the line of codes at the bottom of a passport. Leave visible your tax number, the tax notice reference and the 2D-Doc code, which are used to verify the notice, plus your photo, name and income. As far as we know, nothing obliges a landlord to accept a redacted copy, and [décret n° 2015-1437](src:decret) lets them ask for the original.",
  sections: [
    { h: "What does a landlord not need to see?", blocks: [
      "This is our reading, not a written rule. These three items serve neither to assess your ability to pay nor to verify the document:",
      { ul: [
        "**Your IBAN and bank details (RIB)**, which a payslip sometimes shows. The RIB is not on the [decree](src:decret)’s list.",
        "**Your social security number**, which a payslip may contain. About a different case, the [CNIL](src:fiche) counts it among the payslip data that are in principle not needed.",
        "**The line of codes at the bottom of a passport or identity card**, called the MRZ, which repeats your details in a machine-readable form.",
      ] },
      { note: "For a social housing application the rules are different: according to the [CNIL](src:fiche), the social security number of the adults who will live in the home is part of the information requested." },
    ] },
    { h: "What must stay visible?", blocks: [
      { ul: [
        "**Your tax number and the tax notice reference.** According to [impots.gouv.fr](src:impots), these are the two thirteen-digit identifiers to type into the tax notice verification service, which a landlord can use.",
        "**The 2D-Doc code.** According to impots.gouv.fr, the code printed on the tax notice is used to check that the notice has not been altered. Likewise, leave any verification QR code.",
        "**Your photo and your name**, on the identity document: the [decree](src:decret) asks for a document that carries its holder’s photograph.",
        "**Your income, your employer and the dates**: this is what serves to assess the file.",
      ] },
    ] },
    { h: "Are you allowed to hide part of a document?", blocks: [
      "As far as we know, no law settles it. [Décret n° 2015-1437](src:decret) allows copies, and says the originals must be available if the landlord asks for them. Our advice: hide little, say that you did, and keep your originals.",
      "The [CNIL](src:fiche), the French data protection authority, has commented on a neighbouring case, which is not that of a rental applicant. About the payslips of their own staff that social landlords pass on to justify service charges, it notes that the social security number or the address are in principle not needed, and that sharing them can breach the principle of data minimisation unless all the irrelevant items are redacted.",
    ] },
    { h: "Why is a black box not enough?", blocks: [
      "Because a box drawn in a PDF editor can leave the text underneath, where it can still be copied. Blur and pixelation can sometimes be reversed. These are general technical observations, which the pages cited here do not cover. When in doubt, check: a reliable mask removes the information from the file. See [how to redact a PDF on a Mac](page:guide-caviarder).",
    ] },
    { h: "How do you check that a mask holds?", blocks: [
      { ol: [
        "Open the redacted copy.",
        "Try to select the text under the mask, then to copy it.",
        "Search for the hidden number with the search function.",
        "If the text can be copied or found, the mask removed nothing: start again with another tool.",
      ] },
    ] },
    { h: "What if the landlord refuses the redacted copy?", blocks: [
      "Show the original at the viewing or at signing: the [decree](src:decret) says originals can be asked for. You can also go through DossierFacile, the government service: according to the [CNIL](src:cnil), it lets the tenant upload the authorised documents and pass them on to the landlord.",
    ] },
  ],
  sources: [
    { k: "decret", t: "Décret n° 2015-1437 of 5 November 2015, article 1 and annex I (Légifrance, in French)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
    { k: "impots", t: "About the tax notice verification service (impots.gouv.fr, page modified on 6 January 2026, in French)", u: "https://www.impots.gouv.fr/precisions-sur-le-service-de-verification-en-ligne" },
    { k: "fiche", t: "Social housing guide, sheet 4: which data may be collected? (CNIL, PDF in French)", u: "https://www.cnil.fr/sites/default/files/2025-11/logement_social-fiche04.pdf" },
    { k: "cnil", t: "Renting a property: which supporting documents? (CNIL, 10 October 2025, in French)", u: "https://www.cnil.fr/fr/location-dun-bien-immobilier-quels-justificatifs" },
  ],
  app: "Monsieur Dossier places these masks for you. IBAN, bank codes, social security number and the passport’s line of codes are found in their common formats, on scans too. QR codes and 2D-Doc stay readable, and you are warned if a mask touches one. Detection does not cover every case: you review each document.",
},
  },
};
