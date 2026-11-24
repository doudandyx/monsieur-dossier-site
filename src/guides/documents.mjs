/* Guide : les documents qu'un propriétaire peut demander.
   Sources relues une à une le 24 novembre 2026, dans le navigateur :
   - décret n° 2015-1437 (Légifrance) : articles 1er et 1-1, annexes I et II en vigueur depuis le 1er janvier 2023,
     comparées ligne à ligne avec les listes de ce guide ;
   - loi n° 89-462 (Légifrance) : articles 22-2 (liste, cosignature, amende), 25-3 (meublés) et 25-12 (bail mobilité) ;
   - service-public F1169 (vérifié le 10 avril 2025) : amende, « le propriétaire (ou l'agence immobilière) ».
   Corrigé après relecture : le décret dit « une pièce » d'identité et ne dit pas qui la choisit ; la loi parle
   d'ascendant et de descendant ; l'amende est un plafond. */

/* Notes de rédaction, non publiées (relecture du 24 novembre 2026). Ce que les sources ne disent pas :
   - Le décret fixe ce qu’un bailleur peut exiger. Il ne dit rien des pièces qu’un candidat ajoute de lui-même à
     son dossier.
   - Quand la liste propose plusieurs pièces pour un même justificatif, le décret ne dit pas qui choisit, du
     bailleur ou du candidat.
   - Les listes de ce guide reprennent les annexes du décret en vigueur depuis le 1er janvier 2023. Nous avons
     simplifié la formulation : en cas de doute, le texte publié sur Légifrance fait foi. */

export default {
  id: "guide-documents",
  slug: { fr: "documents-proprietaire-peut-demander", en: "documents-landlord-can-ask-france" },
  published: "2026-11-24", updated: "2026-11-24", checked: "2026-11-24",
  related: ["guide-interdits", "guide-rib", "guide-etranger"],
  T: {
fr: {
  title: "Quels documents un propriétaire peut-il demander pour une location ?",
  short: "Les documents qu’un propriétaire peut demander",
  desc: "Pour louer un logement en France, un propriétaire peut demander quatre types de justificatifs : identité, domicile, activité et ressources. La liste est fixée par décret.",
  answer: "Pour une location en France, un propriétaire ou une agence peut demander quatre types de justificatifs : une pièce d’identité, un seul justificatif de domicile, un ou plusieurs justificatifs d’activité professionnelle et un ou plusieurs justificatifs de ressources. La liste est fixée par le [décret n° 2015-1437](src:decret) du 5 novembre 2015. Un bailleur ne peut pas exiger un document qui n’y figure pas : d’après [service-public.gouv.fr](src:sp), il s’expose alors à une amende.",
  sections: [
    { h: "À quelles locations cette liste s’applique-t-elle ?", blocks: [
      "Elle s’applique aux logements loués comme résidence principale, vides ou meublés, et au bail mobilité : la [loi du 6 juillet 1989](src:loi) étend la règle à ces trois cas. Le [décret](src:decret) précise qu’elle ne s’applique pas aux demandes d’attribution de logements sociaux.",
    ] },
    { h: "Quelle pièce d’identité peut-il demander ?", blocks: [
      "Une pièce d’identité en cours de validité, qui porte votre photo. L’[annexe I du décret](src:decret) en donne la liste :",
      { ul: [
        "une carte nationale d’identité, française ou étrangère",
        "un passeport, français ou étranger",
        "un permis de conduire, français ou étranger",
        "un document justifiant du droit au séjour, par exemple une carte de séjour temporaire, une carte de résident ou une carte de ressortissant d’un État de l’Union européenne ou de l’Espace économique européen",
      ] },
    ] },
    { h: "Quel justificatif de domicile peut-il demander ?", blocks: [
      "Un seul justificatif de domicile, parmi ceux que liste le [décret](src:decret) :",
      { ul: [
        "vos trois dernières quittances de loyer, ou à défaut une attestation de votre bailleur précédent, ou de son mandataire, indiquant que vous êtes à jour de vos loyers et charges",
        "une attestation d’élection de domicile auprès d’un organisme agréé",
        "une attestation sur l’honneur de la personne qui vous héberge",
        "votre dernier avis de taxe foncière, ou à défaut le titre de propriété de votre résidence principale",
      ] },
      { note: "La liste du candidat locataire ne comprend pas de facture d’électricité, de gaz ou d’eau. Ces factures figurent dans la liste du garant." },
    ] },
    { h: "Quels justificatifs d’activité professionnelle peut-il demander ?", blocks: [
      "Un ou plusieurs documents, selon votre situation. La liste est celle du [décret](src:decret) :",
      { ul: [
        "**Salarié ou stagiaire.** Le contrat de travail ou de stage, ou à défaut une attestation de l’employeur qui précise l’emploi, la rémunération proposée, la date d’entrée en fonctions et, s’il y en a une, la durée de la période d’essai.",
        "**Étudiant.** La carte d’étudiant ou un certificat de scolarité pour l’année en cours.",
        "**Entreprise commerciale.** Un extrait K ou K bis de moins de trois mois.",
        "**Artisan.** La fiche d’immatriculation au Registre national des entreprises, de moins de trois mois.",
        "**Travailleur indépendant.** La copie du certificat d’identification de l’INSEE.",
        "**Profession libérale.** La copie de la carte professionnelle.",
        "**Autres professionnels.** Toute pièce récente qui atteste de l’activité.",
      ] },
    ] },
    { h: "Quels justificatifs de ressources peut-il demander ?", blocks: [
      "Un ou plusieurs documents, parmi ceux que liste le [décret](src:decret) :",
      { ul: [
        "le dernier ou l’avant-dernier avis d’imposition ou de non-imposition. Si tout ou partie de vos revenus a été imposé dans un autre pays, l’avis d’imposition de ce pays ou un document qui en tient lieu, établi par son administration fiscale",
        "les trois derniers bulletins de salaire",
        "un justificatif de versement des indemnités de stage",
        "pour les non-salariés, les deux derniers bilans, ou à défaut une attestation de ressources établie par un comptable pour l’exercice en cours",
        "un justificatif de versement des indemnités, retraites, pensions, prestations sociales et familiales et allocations des trois derniers mois, ou un justificatif d’ouverture des droits, établis par l’organisme payeur",
        "une simulation des aides au logement, établie par l’organisme payeur ou par vous-même",
        "l’avis d’attribution de bourse, pour un étudiant boursier",
        "un titre de propriété d’un bien immobilier, ou le dernier avis de taxe foncière",
        "un justificatif de revenus fonciers, de rentes viagères ou de revenus de valeurs et capitaux mobiliers",
      ] },
    ] },
    { h: "Faut-il fournir les originaux ?", blocks: [
      "Non. L’[article 1er du décret](src:decret) prévoit que les pièces peuvent être des copies des documents originaux. Elles sont rédigées ou traduites en français, et les montants sont convertis en euros. Les originaux doivent pouvoir être présentés à la demande du bailleur.",
    ] },
    { h: "Quels documents peut-il demander au garant ?", blocks: [
      "Le [décret](src:decret) fixe une seconde liste, en annexe II, pour la personne qui se porte caution : une pièce d’identité, un seul justificatif de domicile, et des justificatifs d’activité et de ressources. Pour le domicile, la liste du garant est différente : dernière quittance de loyer, facture d’eau, de gaz ou d’électricité de moins de trois mois, attestation d’assurance logement de moins de trois mois, dernier avis de taxe foncière ou titre de propriété.",
      "Si la caution est une société ou un organisme, le décret prévoit un extrait K bis de moins de trois mois, des statuts ou une autre pièce qui prouve son existence légale, et un justificatif d’identité de son représentant.",
    ] },
    { h: "Que risque un propriétaire qui demande autre chose ?", blocks: [
      "D’après [service-public.gouv.fr](src:sp), le propriétaire ou l’agence qui réclame un justificatif non autorisé encourt une amende pouvant aller jusqu’à 3 000 €, ou 15 000 € pour une personne morale, une société par exemple. L’[article 22-2 de la loi](src:loi) précise que cette amende est prononcée par le préfet et que son montant dépend de la gravité des faits.",
      "Le même article interdit aussi au bailleur d’imposer la cosignature d’un ascendant ou d’un descendant du candidat, un parent ou un enfant par exemple. Voir [les documents qu’un propriétaire n’a pas le droit de demander](page:guide-interdits).",
    ] },
  ],
  sources: [
    { k: "decret", t: "Décret n° 2015-1437 du 5 novembre 2015, article 1er et annexes I et II (Légifrance)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
    { k: "loi", t: "Loi n° 89-462 du 6 juillet 1989, articles 22-2, 25-3 et 25-12 (Légifrance)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/" },
    { k: "sp", t: "Futur locataire d’un logement privé : justificatifs à donner au propriétaire (service-public.gouv.fr, page vérifiée le 10 avril 2025)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1169" },
  ],
  app: "Monsieur Dossier range vos pièces dans ces quatre rubriques et vous signale celles qu’un bailleur n’a pas le droit de demander. Collez la liste envoyée par l’agence : vous voyez ce qui manque, et ce qui sort de la liste.",
},
en: {
  title: "What documents can a landlord ask for when you rent in France?",
  short: "Documents a landlord can ask for",
  desc: "To rent a home in France, a landlord can ask for four kinds of documents: identity, current address, occupation and income. The list is set by decree.",
  answer: "To rent a home in France, a landlord or agency can ask for four kinds of supporting documents: one identity document, one proof of your current address, one or more documents about your occupation, and one or more documents about your income. The list is set by [décret n° 2015-1437](src:decret) of 5 November 2015. A landlord cannot require a document that is not on it: according to [service-public.gouv.fr](src:sp), the French government’s information site, a landlord who does so risks a fine.",
  sections: [
    { h: "Which rentals does this list apply to?", blocks: [
      "It applies to homes rented as a main residence, furnished or unfurnished, and to the short “bail mobilité” lease: the [law of 6 July 1989](src:loi) extends the rule to all three. The [decree](src:decret) states that it does not apply to applications for social housing.",
    ] },
    { h: "Which identity document can a landlord ask for?", blocks: [
      "One valid identity document that carries your photo. [Annex I of the decree](src:decret) gives the list:",
      { ul: [
        "a national identity card, French or foreign",
        "a passport, French or foreign",
        "a driving licence, French or foreign",
        "a document proving your right to stay in France, such as a temporary residence permit, a resident card or the card of a citizen of the European Union or the European Economic Area",
      ] },
    ] },
    { h: "Which proof of address can a landlord ask for?", blocks: [
      "One proof of your current address, from those listed in the [decree](src:decret):",
      { ul: [
        "your last three rent receipts, or failing that a statement from your previous landlord, or the landlord’s agent, that your rent and charges are paid up",
        "a certificate of domiciliation from an approved organisation",
        "a signed statement from the person who hosts you",
        "your latest property tax notice, or failing that the title deed of your main home",
      ] },
      { note: "The tenant’s list does not include an electricity, gas or water bill. Those bills are on the guarantor’s list." },
    ] },
    { h: "Which documents about your occupation can a landlord ask for?", blocks: [
      "One or more documents, depending on your situation. The list is the [decree](src:decret)’s:",
      { ul: [
        "**Employee or intern.** The employment or internship contract, or failing that a letter from the employer stating the job, the proposed pay, the start date and, if there is one, the length of the trial period.",
        "**Student.** A student card or a certificate of enrolment for the current year.",
        "**Trading company.** A K or K bis extract from the company register, less than three months old.",
        "**Craft business.** The registration record in the Registre national des entreprises, less than three months old.",
        "**Self-employed.** A copy of the INSEE identification certificate.",
        "**Independent professional (profession libérale).** A copy of the professional card.",
        "**Other professionals.** Any recent document that proves the activity.",
      ] },
    ] },
    { h: "Which documents about your income can a landlord ask for?", blocks: [
      "One or more documents, from those listed in the [decree](src:decret):",
      { ul: [
        "your latest or second-latest tax notice, or notice of non-taxation. If all or part of your income was taxed in another country, the tax notice of that country or an equivalent document from its tax authority",
        "your last three payslips",
        "proof of payment of an internship allowance",
        "for the self-employed, the last two balance sheets, or failing that a statement of income for the current year drawn up by an accountant",
        "proof of payment over the last three months of benefits, pensions and allowances, or proof that the entitlement has been opened, issued by the paying body",
        "a housing benefit simulation, drawn up by the paying body or by you",
        "the grant award notice, for a student on a grant",
        "the title deed of a property, or the latest property tax notice",
        "proof of rental income, life annuities or investment income",
      ] },
    ] },
    { h: "Do you have to hand over originals?", blocks: [
      "No. [Article 1 of the decree](src:decret) says the documents can be copies of the originals. They are written in French or translated into French, and amounts are converted into euros. The originals must be available if the landlord asks to see them.",
    ] },
    { h: "Which documents can a landlord ask the guarantor for?", blocks: [
      "The [decree](src:decret) sets a second list, in annex II, for the person who acts as guarantor: one identity document, one proof of address, and documents about occupation and income. For the address, the guarantor’s list is different: latest rent receipt, a water, gas or electricity bill less than three months old, a home insurance certificate less than three months old, the latest property tax notice or a title deed.",
      "If the guarantor is a company or an organisation, the decree provides for a K bis extract less than three months old, the articles of association or another document proving that it legally exists, and proof of identity for its representative.",
    ] },
    { h: "What does a landlord risk by asking for anything else?", blocks: [
      "According to [service-public.gouv.fr](src:sp), a landlord or agency that demands a document outside the list risks a fine of up to €3,000, or €15,000 for a legal entity such as a company. [Article 22-2 of the law](src:loi) states that the fine is imposed by the prefect and that its amount depends on how serious the facts are.",
      "The same article also bars a landlord from requiring an ascendant or a descendant of the applicant, a parent or a child for example, to co-sign. See [the documents a French landlord is not allowed to ask for](page:guide-interdits).",
    ] },
  ],
  sources: [
    { k: "decret", t: "Décret n° 2015-1437 of 5 November 2015, article 1 and annexes I and II (Légifrance, in French)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
    { k: "loi", t: "Loi n° 89-462 of 6 July 1989, articles 22-2, 25-3 and 25-12 (Légifrance, in French)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/" },
    { k: "sp", t: "Documents a future tenant gives a private landlord (service-public.gouv.fr, page verified on 10 April 2025, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1169" },
  ],
  app: "Monsieur Dossier files your documents under these four categories and flags the ones a landlord is not allowed to ask for. Paste the list the agency sent you: you see what is missing, and what goes beyond the legal list.",
},
  },
};
