/* Guide : le RIB dans un dossier de location.
   Sources relues une à une le 24 novembre 2026, dans le navigateur :
   - décret n° 2015-1437, annexes (le RIB n'y figure pas) et loi n° 89-462, article 4 c) (Légifrance) ;
   - service-public F1686 (vérifié le 1er octobre 2026) : clause interdite qui oblige à payer par prélèvement ;
   - service-public F34092 (vérifié le 16 octobre 2024) : documents officiels demandés avant la visite ;
   - CNIL (10 octobre 2025) : relevés de compte bancaire parmi les pièces qu'on ne peut pas demander.
   À savoir : aucune page officielle ne parle du RIB en toutes lettres. Dire qu'on ne peut pas l'exiger est une
   déduction de la liste du décret. Le guide le dit ainsi, sans prêter cette phrase à une source. */

/* Notes de rédaction, non publiées (relecture du 24 novembre 2026). Ce que les sources ne disent pas :
   - Aucune des pages officielles lues ne nomme le RIB. Dire qu’un bailleur ne peut pas l’exiger est une
     déduction : le RIB ne figure pas dans la liste du décret.
   - Que des bulletins de salaire affichent l’IBAN est un constat courant. Nous n’avons pas de source officielle
     à citer sur ce point.
   - La loi interdit d’imposer le prélèvement automatique. Elle ne dit pas à quel moment un locataire qui
     choisit ce mode de paiement donne son RIB : « à la signature du bail » est notre conseil. */

export default {
  id: "guide-rib",
  slug: { fr: "rib-dossier-location", en: "bank-details-rib-rental-france" },
  published: "2026-11-24", updated: "2026-11-24", checked: "2026-11-24",
  related: ["guide-interdits", "guide-masquer", "guide-documents"],
  T: {
fr: {
  title: "Faut-il donner son RIB pour un dossier de location ?",
  short: "Le RIB dans un dossier de location",
  desc: "Non. Le RIB ne figure pas dans la liste des pièces qu’un propriétaire peut exiger avant la signature du bail, et la CNIL cite les relevés de compte parmi les pièces interdites.",
  answer: "Non, vous n’avez pas à donner votre RIB pour un dossier de location. Le RIB ne figure pas dans la liste des pièces qu’un propriétaire peut exiger d’un candidat, fixée par le [décret n° 2015-1437](src:decret). Nous le déduisons de cette liste : aucune page officielle que nous avons lue ne nomme le RIB. La [CNIL](src:cnil), elle, cite les relevés de compte parmi les pièces qu’on ne peut pas demander. Une fois le bail signé, vous donnez votre RIB si vous choisissez le prélèvement, que la [loi](src:loi) interdit de vous imposer.",
  sections: [
    { h: "À quoi sert un RIB pour un propriétaire ?", blocks: [
      "À mettre en place le prélèvement du loyer. Ce besoin n’existe qu’une fois le bail signé. Avant, un RIB ne dit rien de vos revenus : pour cela, le [décret](src:decret) prévoit des justificatifs de ressources, comme vos bulletins de salaire ou votre avis d’imposition.",
    ] },
    { h: "Un propriétaire peut-il imposer le prélèvement automatique ?", blocks: [
      "Non. L’article 4 de la [loi du 6 juillet 1989](src:loi) répute non écrite la clause qui impose le prélèvement automatique sur le compte du locataire comme mode de paiement du loyer. [Service-public.gouv.fr](src:clauses) la range parmi les clauses interdites d’un bail. Vous pouvez choisir le prélèvement, on ne peut pas vous l’imposer.",
    ] },
    { h: "Peut-il demander des relevés de compte ?", blocks: [
      "Non. La [CNIL](src:cnil) cite les relevés de compte bancaire parmi les documents que les agences comme les propriétaires ne peuvent pas demander, avec la carte Vitale ou l’extrait de casier judiciaire. Une attestation de votre banque sur la tenue de votre compte ne figure pas non plus dans la liste du [décret](src:decret).",
    ] },
    { h: "Mon IBAN apparaît sur une autre pièce : que faire ?", blocks: [
      "Il arrive qu’un bulletin de salaire affiche l’IBAN du compte sur lequel vous êtes payé. À notre avis, le bailleur n’en a pas besoin pour juger votre dossier. Vous pouvez le masquer avant d’envoyer la copie : voir [ce qu’on peut masquer sur ses pièces](page:guide-masquer).",
    ] },
    { h: "Que répondre si on vous demande quand même votre RIB ?", blocks: [
      { ul: [
        "Rappelez que le RIB ne fait pas partie des pièces prévues par le [décret n° 2015-1437](src:decret).",
        "Proposez de le transmettre à la signature du bail, si vous choisissez le prélèvement.",
        "Si on vous demande vos papiers avant toute visite, méfiez-vous : [service-public.gouv.fr](src:arnaques) cite la demande de documents officiels avant la visite, une carte d’identité par exemple, parmi les signes d’une fausse annonce. Voir [que faire si le dossier est parti chez un escroc](page:guide-escroc).",
      ] },
    ] },
  ],
  sources: [
    { k: "decret", t: "Décret n° 2015-1437 du 5 novembre 2015, annexes I et II (Légifrance)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
    { k: "loi", t: "Loi n° 89-462 du 6 juillet 1989, article 4 (Légifrance)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/" },
    { k: "clauses", t: "Clauses interdites dans un bail d’habitation (service-public.gouv.fr, page vérifiée le 1er octobre 2026)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1686" },
    { k: "cnil", t: "Location d’un bien immobilier : quels justificatifs ? (CNIL, 10 octobre 2025)", u: "https://www.cnil.fr/fr/location-dun-bien-immobilier-quels-justificatifs" },
    { k: "arnaques", t: "Arnaques à la location immobilière sur internet (service-public.gouv.fr, page vérifiée le 16 octobre 2024)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34092" },
  ],
  app: "Monsieur Dossier repère l’IBAN et le RIB aux formats courants sur vos pièces, même scannées, et pose les masques avant l’envoi. Le texte masqué est détruit, pas seulement recouvert. Vous vérifiez chaque pièce.",
},
en: {
  title: "Do I have to give my bank details (RIB) to rent in France?",
  short: "Bank details (RIB) in a rental file",
  desc: "No. Your bank details (RIB) are not on the list of documents a French landlord can require before the lease is signed, and the CNIL names bank statements as off limits.",
  answer: "No, you do not have to give your bank details to apply for a rental in France. The RIB, the slip that shows your IBAN, is not on the list of documents a landlord can require from an applicant, set by [décret n° 2015-1437](src:decret). We infer this from the list: no official page we read names the RIB. The [CNIL](src:cnil), for its part, names bank statements among the documents that cannot be asked for. Once the lease is signed, you give your RIB if you choose direct debit, which the [law](src:loi) forbids forcing on you.",
  sections: [
    { h: "What does a landlord use a RIB for?", blocks: [
      "To set up a direct debit for the rent. That need only exists once the lease is signed. Before that, a RIB says nothing about your income: for that, the [decree](src:decret) lists proof of income, such as your payslips or your tax notice.",
    ] },
    { h: "Can a landlord impose direct debit?", blocks: [
      "No. Article 4 of the [law of 6 July 1989](src:loi) treats as void any clause that imposes automatic direct debit from the tenant’s account as the way to pay the rent. [Service-public.gouv.fr](src:clauses) lists it among the clauses forbidden in a lease. You can choose direct debit, but it cannot be forced on you.",
    ] },
    { h: "Can a landlord ask for bank statements?", blocks: [
      "No. The [CNIL](src:cnil), the French data protection authority, names bank statements among the documents that agencies and landlords alike cannot ask for, along with the Carte Vitale health card and a criminal record extract. A letter from your bank about how your account is run is not on the [decree](src:decret)’s list either.",
    ] },
    { h: "My IBAN shows on another document: what should I do?", blocks: [
      "A payslip sometimes shows the IBAN of the account your salary is paid into. In our view, the landlord does not need it to assess your file. You can hide it before you send the copy: see [what you can hide on your documents](page:guide-masquer).",
    ] },
    { h: "What should you answer if you are asked for your RIB anyway?", blocks: [
      { ul: [
        "Point out that the RIB is not among the documents listed in [décret n° 2015-1437](src:decret).",
        "Offer to hand it over when the lease is signed, if you choose direct debit.",
        "If you are asked for your papers before any viewing, be careful: [service-public.gouv.fr](src:arnaques) lists a request for official documents before the viewing, an identity card for example, among the signs of a fake listing. See [what to do if your file went to a scammer](page:guide-escroc).",
      ] },
    ] },
  ],
  sources: [
    { k: "decret", t: "Décret n° 2015-1437 of 5 November 2015, annexes I and II (Légifrance, in French)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
    { k: "loi", t: "Loi n° 89-462 of 6 July 1989, article 4 (Légifrance, in French)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/" },
    { k: "clauses", t: "Forbidden clauses in a residential lease (service-public.gouv.fr, page verified on 1 October 2026, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1686" },
    { k: "cnil", t: "Renting a property: which supporting documents? (CNIL, 10 October 2025, in French)", u: "https://www.cnil.fr/fr/location-dun-bien-immobilier-quels-justificatifs" },
    { k: "arnaques", t: "Rental scams on the internet (service-public.gouv.fr, page verified on 16 October 2024, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34092" },
  ],
  app: "Monsieur Dossier finds the IBAN and bank codes on your documents in their common formats, on scans too, and places the masks before you send. Masked text is destroyed, not just covered. You review each document.",
},
  },
};
