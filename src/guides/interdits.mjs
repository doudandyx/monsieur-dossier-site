/* Guide : les documents qu'un propriétaire n'a pas le droit de demander.
   Sources relues une à une le 24 novembre 2026, dans le navigateur :
   - décret n° 2015-1437, articles 1er et 1-1 (procédure de l'amende : le préfet informe le bailleur, deux mois
     pour répondre) et loi n° 89-462, articles 22 (dépôt de garantie), 22-2 (amende) et 25-6 (meublé) : Légifrance ;
   - service-public F1169 (vérifié le 10 avril 2025) : amende « pouvant aller jusqu'à 3 000 € », interdiction de
     réclamer de l'argent pour réserver, ADIL citée comme contact ;
   - service-public F31269 (vérifié le 9 juin 2026) : dépôt de garantie versé à la signature ;
   - CNIL (10 octobre 2025) : les six exemples, introduits par « tels que ».
   À savoir : service-public ne publie pas de liste des pièces interdites. Les autres pièces citées ici sont
   déduites de la liste du décret, et le guide le dit. Aucune page ne décrit comment signaler une demande :
   la marche à suivre proposée est notre conseil, présentée comme telle. */

/* Notes de rédaction, non publiées (relecture du 24 novembre 2026). Ce que les sources ne disent pas :
   - Service-public.gouv.fr ne publie pas de liste des pièces interdites. Les six exemples nommés ici viennent
     de la CNIL, qui écrit « tels que » : sa liste n’est pas complète.
   - Le RIB, l’attestation bancaire, le dossier médical et la photo d’identité ne sont nommés par aucune des
     pages lues. Nous les déduisons de la liste du décret, où ils ne figurent pas.
   - Aucune page officielle lue ne décrit comment signaler une demande illégale. Écrire au préfet est notre
     conseil, déduit du fait que la loi lui confie l’amende.
   - Pour l’amende, le décret parle du « bailleur ». Ce sont service-public.gouv.fr et la CNIL qui écrivent « le
     propriétaire ou l’agence immobilière ». */

export default {
  id: "guide-interdits",
  slug: { fr: "documents-interdits-dossier-location", en: "documents-landlord-cannot-ask-france" },
  published: "2026-11-24", updated: "2026-11-24", checked: "2026-11-24",
  related: ["guide-documents", "guide-rib", "guide-escroc"],
  T: {
fr: {
  title: "Quels documents un propriétaire n’a-t-il pas le droit de demander ?",
  short: "Les documents qu’un propriétaire ne peut pas demander",
  desc: "Un propriétaire ne peut exiger aucun document hors de la liste fixée par décret : ni relevé de compte, ni carte Vitale, ni casier judiciaire, ni argent pour réserver.",
  answer: "Un propriétaire ou une agence n’a le droit d’exiger aucun document en dehors de la liste fixée par le [décret n° 2015-1437](src:decret) du 5 novembre 2015. La [CNIL](src:cnil) cite, parmi les pièces qu’on ne peut pas vous demander, les relevés de compte bancaire, la carte Vitale, l’extrait de casier judiciaire, le livret de famille, le contrat de mariage et le jugement de divorce. Aucune somme ne peut non plus être réclamée pour réserver le logement. D’après [service-public.gouv.fr](src:sp), le propriétaire ou l’agence s’expose à une amende pouvant aller jusqu’à 3 000 €, ou 15 000 € pour une personne morale.",
  sections: [
    { h: "Pourquoi ces documents sont-ils interdits ?", blocks: [
      "Parce que la liste des pièces qu’un bailleur peut exiger est fixée par un texte. La [loi du 6 juillet 1989](src:loi) renvoie à un [décret](src:decret), qui énumère les documents autorisés pour le candidat et pour son garant. [Service-public.gouv.fr](src:sp) en tire la conséquence : un propriétaire qui réclame un justificatif non autorisé encourt une amende. La liste complète est dans le guide sur [les documents qu’un propriétaire peut demander](page:guide-documents).",
    ] },
    { h: "Quels exemples la CNIL donne-t-elle ?", blocks: [
      "La [CNIL](src:cnil) écrit que les agences immobilières comme les propriétaires ne peuvent pas demander certains documents, tels que :",
      { ul: [
        "la copie du livret de famille",
        "la carte Vitale",
        "les relevés de compte bancaire",
        "le contrat de mariage",
        "le jugement de divorce",
        "l’extrait de casier judiciaire",
      ] },
      { note: "Ce sont des exemples : la CNIL écrit « tels que ». La règle générale est celle du décret. Ce qui n’est pas dans la liste ne peut pas être exigé." },
    ] },
    { h: "Quels autres documents ne figurent pas dans la liste ?", blocks: [
      "D’autres pièces sont parfois demandées. Aucune des quatre ci-dessous ne figure dans le [décret](src:decret), donc aucune ne peut être exigée. C’est notre lecture de la liste : les pages officielles que nous avons lues ne les nomment pas une à une.",
      { ul: [
        "un RIB, ou une autorisation de prélèvement signée d’avance",
        "une attestation de votre banque sur la tenue de votre compte",
        "un dossier médical",
        "une photo d’identité, en plus de celle qui figure sur votre pièce d’identité",
      ] },
    ] },
    { h: "Peut-on vous demander de l’argent avant la signature du bail ?", blocks: [
      "Non, d’après [service-public.gouv.fr](src:sp) : le propriétaire ou l’agence a interdiction de réclamer une somme d’argent en contrepartie de la réservation du logement, et aucune somme ne peut être réclamée avant la signature du bail. Le dépôt de garantie se verse à la signature, indique sa [page sur le dépôt de garantie](src:depot). La [loi](src:loi) le plafonne à un mois de loyer hors charges pour un logement vide et à deux mois pour un meublé.",
    ] },
    { h: "Que risque le bailleur ?", blocks: [
      "L’[article 22-2 de la loi](src:loi) prévoit une amende administrative, prononcée par le préfet du département : 3 000 € au plus pour une personne physique, 15 000 € pour une personne morale. Son montant dépend de la gravité des faits, et elle ne peut plus être prononcée plus d’un an après leur constatation. Le [décret](src:decret) ajoute que le préfet informe d’abord le bailleur, qui a deux mois pour présenter ses observations.",
    ] },
    { h: "Que faire si on vous demande un document interdit ?", blocks: [
      { ol: [
        "Rappelez la règle par écrit : la liste des pièces est fixée par le [décret n° 2015-1437](src:decret).",
        "Proposez la pièce autorisée qui répond au même besoin, par exemple votre avis d’imposition à la place d’un relevé de compte.",
        "Gardez une trace de la demande : e-mail, message, capture de l’annonce.",
        "Si la demande est maintenue, renseignez-vous auprès de l’ADIL, l’agence départementale d’information sur le logement, que [service-public.gouv.fr](src:sp) indique comme contact. Vous pouvez aussi écrire au préfet de votre département, puisque c’est lui qui prononce l’amende.",
      ] },
      { note: "Ces quatre étapes sont notre conseil. Aucune page officielle que nous avons lue ne décrit la marche à suivre pour signaler une demande illégale." },
    ] },
  ],
  sources: [
    { k: "decret", t: "Décret n° 2015-1437 du 5 novembre 2015, articles 1er et 1-1 (Légifrance)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
    { k: "loi", t: "Loi n° 89-462 du 6 juillet 1989, articles 22, 22-2 et 25-6 (Légifrance)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/" },
    { k: "sp", t: "Futur locataire d’un logement privé : justificatifs à donner au propriétaire (service-public.gouv.fr, page vérifiée le 10 avril 2025)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1169" },
    { k: "cnil", t: "Location d’un bien immobilier : quels justificatifs ? (CNIL, 10 octobre 2025)", u: "https://www.cnil.fr/fr/location-dun-bien-immobilier-quels-justificatifs" },
    { k: "depot", t: "Dépôt de garantie dans un bail d’habitation (service-public.gouv.fr, page vérifiée le 9 juin 2026)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31269" },
  ],
  app: "Quand Monsieur Dossier reconnaît une pièce qui n’est pas dans la liste, il vous prévient, avec la référence du texte. Si vous collez la liste envoyée par une agence, les demandes hors liste ressortent.",
},
en: {
  title: "What documents is a French landlord not allowed to ask for?",
  short: "Documents a landlord cannot ask for",
  desc: "A French landlord cannot require any document outside the list set by decree: no bank statements, no health card, no criminal record, and no money to reserve the home.",
  answer: "A landlord or agency in France is not allowed to require any document outside the list set by [décret n° 2015-1437](src:decret) of 5 November 2015. The [CNIL](src:cnil), the French data protection authority, names among the documents you cannot be asked for: bank statements, the Carte Vitale health card, a criminal record extract, the family record book, a marriage contract and a divorce judgment. No money can be asked to reserve the home either. According to [service-public.gouv.fr](src:sp), the landlord or agency risks a fine of up to €3,000, or €15,000 for a legal entity.",
  sections: [
    { h: "Why are these documents forbidden?", blocks: [
      "Because the list of documents a landlord can require is set by law. The [law of 6 July 1989](src:loi) refers to a [decree](src:decret), which names the documents allowed for the applicant and for the guarantor. [Service-public.gouv.fr](src:sp) draws the consequence: a landlord who demands a document outside the list risks a fine. The full list is in the guide on [the documents a landlord can ask for](page:guide-documents).",
    ] },
    { h: "Which examples does the CNIL give?", blocks: [
      "The [CNIL](src:cnil) writes that estate agencies and landlords alike cannot ask for certain documents, such as:",
      { ul: [
        "a copy of the family record book (livret de famille)",
        "the Carte Vitale health insurance card",
        "bank statements",
        "a marriage contract",
        "a divorce judgment",
        "a criminal record extract",
      ] },
      { note: "These are examples: the CNIL writes “such as”. The general rule is the decree’s. What is not on the list cannot be required." },
    ] },
    { h: "Which other documents are not on the list?", blocks: [
      "Other documents are sometimes asked for. None of the four below is in the [decree](src:decret), so none can be required. This is our reading of the list: the official pages we read do not name them one by one.",
      { ul: [
        "your bank details (RIB), or a direct-debit authorisation signed in advance",
        "a letter from your bank about how your account is run",
        "medical records",
        "an identity photo, on top of the one on your identity document",
      ] },
    ] },
    { h: "Can you be asked for money before the lease is signed?", blocks: [
      "No, according to [service-public.gouv.fr](src:sp): the landlord or agency is forbidden to ask for money in return for reserving the home, and no sum can be asked for before the lease is signed. The security deposit is paid at signing, says its [page on the security deposit](src:depot). The [law](src:loi) caps it at one month of rent excluding charges for an unfurnished home and two months for a furnished one.",
    ] },
    { h: "What does the landlord risk?", blocks: [
      "[Article 22-2 of the law](src:loi) provides for an administrative fine, imposed by the prefect of the département: at most €3,000 for an individual and €15,000 for a legal entity. The amount depends on how serious the facts are, and the fine can no longer be imposed more than a year after they were recorded. The [decree](src:decret) adds that the prefect first informs the landlord, who has two months to respond.",
    ] },
    { h: "What should you do if you are asked for a forbidden document?", blocks: [
      { ol: [
        "State the rule in writing: the list of documents is set by [décret n° 2015-1437](src:decret).",
        "Offer the allowed document that meets the same need, for example your tax notice instead of a bank statement.",
        "Keep a record of the request: email, message, screenshot of the listing.",
        "If the request stands, ask the ADIL, the housing information agency of your département, which [service-public.gouv.fr](src:sp) gives as a contact. You can also write to the prefect of your département, since the prefect is the one who imposes the fine.",
      ] },
      { note: "These four steps are our advice. No official page we read describes how to report an illegal request." },
    ] },
  ],
  sources: [
    { k: "decret", t: "Décret n° 2015-1437 of 5 November 2015, articles 1 and 1-1 (Légifrance, in French)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
    { k: "loi", t: "Loi n° 89-462 of 6 July 1989, articles 22, 22-2 and 25-6 (Légifrance, in French)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/" },
    { k: "sp", t: "Documents a future tenant gives a private landlord (service-public.gouv.fr, page verified on 10 April 2025, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1169" },
    { k: "cnil", t: "Renting a property: which supporting documents? (CNIL, 10 October 2025, in French)", u: "https://www.cnil.fr/fr/location-dun-bien-immobilier-quels-justificatifs" },
    { k: "depot", t: "Security deposit in a residential lease (service-public.gouv.fr, page verified on 9 June 2026, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31269" },
  ],
  app: "When Monsieur Dossier recognises a document that is not on the list, it warns you, with the legal reference. If you paste the list an agency sent you, the requests that go beyond the legal list stand out.",
},
  },
};
