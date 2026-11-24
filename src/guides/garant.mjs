/* Guide : louer sans garant.
   Sources relues une à une le 24 novembre 2026, dans le navigateur :
   - loi n° 89-462, articles 22, 22-1, 22-2, 25-6, 25-12, 25-14 et 25-17 (Légifrance) : lus en entier ;
   - service-public F33453, Visale (vérifié le 23 janvier 2026) : âge, 1 710 €, plafonds de loyer charges comprises,
     36 mois, dégradations, demande avant la signature, remboursement par le locataire, validation par le bailleur ;
   - service-public F31267, caution (vérifié le 10 avril 2025) : qui peut être caution, assurance et étudiant ;
   - actionlogement.fr : « 30 ans et moins (jusqu'au 31e anniversaire) », 1 710 €, bail mobilité à tout âge ;
   - Campus France (mis à jour le 27 janvier 2025) : étudiants étrangers ;
   - blog de DossierFacile (12 mai 2025) : garantie bancaire, garant à l'étranger.
   Retiré après relecture, faute de l'avoir lu : « pas besoin d'adresse en France », « par exemple votre employeur ».
   Corrigé : la loi interdit d'imposer la cosignature d'un parent ou d'un enfant, pas de choisir le garant. */

/* Notes de rédaction, non publiées (relecture du 24 novembre 2026). Ce que les sources ne disent pas :
   - La limite d’âge n’est pas formulée partout de la même façon. Service-public.gouv.fr écrit « jusqu’à moins
     de 30 ans » à un endroit et « 30 ans et moins » à un autre. Action Logement écrit « 30 ans et moins
     (jusqu’au 31ème anniversaire) ». Le test d’éligibilité officiel tranche.
   - Les montants cités ont été lus le 24 novembre 2026 sur une page de service-public.gouv.fr vérifiée le 23
     janvier 2026. Ils varient selon la commune et la situation du locataire, et ils changent.
   - Les pages lues ne disent pas si un bailleur est tenu d’accepter Visale. Elles disent qu’il doit accepter
     l’acte de cautionnement pour que la garantie joue.
   - Pour un salarié qui arrive de l’étranger, nous n’avons pas trouvé de page officielle qui précise les
     conditions de Visale. Campus France ne traite que des étudiants. */

export default {
  id: "guide-garant",
  slug: { fr: "louer-sans-garant", en: "rent-in-france-without-guarantor" },
  published: "2026-11-24", updated: "2026-11-24", checked: "2026-11-24",
  related: ["guide-etranger", "guide-documents", "guide-interdits"],
  T: {
fr: {
  title: "Peut-on louer un logement en France sans garant ?",
  short: "Louer sans garant",
  desc: "Oui. La loi n’oblige pas à avoir un garant, et la garantie Visale d’Action Logement, gratuite, peut en tenir lieu pour les jeunes jusqu’à 30 ans et certains salariés.",
  answer: "Oui, on peut louer en France sans garant. La loi n’oblige pas un locataire à en avoir un : c’est le bailleur qui choisit d’en demander. Si aucun proche ne peut se porter caution pour vous, la [garantie Visale](src:visale) d’Action Logement peut en tenir lieu. Elle est gratuite et s’adresse aux jeunes jusqu’à 30 ans, à certains salariés plus âgés et aux locataires en bail mobilité. Il faut la demander avant de signer le bail.",
  sections: [
    { h: "Un propriétaire peut-il exiger un garant ?", blocks: [
      "Oui, la [loi du 6 juillet 1989](src:loi) le lui permet, avec des limites, fixées à ses articles 22-1 et 22-2.",
      { ul: [
        "Un bailleur qui a souscrit une assurance contre les loyers impayés ne peut pas demander de garant en plus, sauf si le locataire est étudiant ou apprenti.",
        "Un bailleur ne peut pas refuser un garant au motif qu’il n’a pas la nationalité française ou qu’il ne réside pas en France métropolitaine.",
        "Un bailleur ne peut pas imposer qu’un ascendant ou un descendant du candidat, un parent ou un enfant par exemple, cosigne le bail.",
        "Quand le bailleur est une société, autre qu’une société civile familiale, il ne peut demander une caution que si elle est apportée par un organisme figurant sur une liste fixée par décret, ou si le logement est loué à un étudiant qui ne touche pas de bourse de l’enseignement supérieur.",
      ] },
      { note: "En pratique, [DossierFacile](src:df), le service de l’État, écrit que « certains propriétaires acceptent un garant vivant à l’étranger, mais cela reste rare »." },
    ] },
    { h: "Qu’est-ce que la garantie Visale ?", blocks: [
      "Visale est une caution gratuite accordée par [Action Logement](src:al). En cas de loyer impayé ou de dégradations, Action Logement verse d’abord au bailleur la somme due, puis se fait rembourser par le locataire.",
      "D’après [service-public.gouv.fr](src:visale), elle couvre au maximum 36 mois d’impayés pendant les trois premières années du bail, et les dégradations jusqu’à deux mois de loyer et de charges. La demande se fait en ligne, avant la signature du bail. Vous obtenez un visa à remettre au bailleur. Pour que la garantie s’applique, le bailleur doit ensuite accepter l’acte de cautionnement.",
    ] },
    { h: "Qui peut obtenir Visale ?", blocks: [
      "D’après [service-public.gouv.fr](src:visale) et [Action Logement](src:al), lus le 24 novembre 2026 :",
      { ul: [
        "les jeunes de 30 ans et moins, quelle que soit leur situation professionnelle, étudiants et alternants compris",
        "les salariés du secteur privé plus âgés, si leur salaire net ne dépasse pas 1 710 € par mois, ou s’ils viennent d’être embauchés ou mutés, avec une demande dans les six mois",
        "les locataires qui signent un bail mobilité, quel que soit leur âge",
      ] },
      "Le loyer, charges comprises, est plafonné : 1 940 € en Île-de-France, 1 575 € ou 1 365 € ailleurs selon la commune. Une condition de ressources s’ajoute selon votre situation, et des plafonds plus bas s’appliquent aux étudiants et aux alternants qui ne justifient pas de ressources. Le test d’éligibilité officiel, sur [service-public.gouv.fr](src:visale), donne la réponse pour votre cas.",
    ] },
    { h: "Visale est-elle ouverte aux étudiants étrangers ?", blocks: [
      "Oui, d’après [Campus France](src:campus) : il suffit d’avoir entre 18 et 30 ans. Un étudiant qui a besoin d’un visa pour venir en France doit avoir obtenu un visa de long séjour valant titre de séjour, mention « étudiant » ou « passeport talent ». Un étudiant citoyen d’un pays de l’Union européenne présente une carte d’étudiant et un passeport valide. Campus France recommande de commencer la démarche dès que le visa est délivré.",
    ] },
    { h: "Quelles autres solutions sans garant ?", blocks: [
      { ul: [
        "**La garantie bancaire.** D’après [DossierFacile](src:df), vous pouvez déposer une somme auprès d’une banque française, qui sert de caution en cas d’impayé.",
        "**Une personne morale.** D’après [service-public.gouv.fr](src:caution), la caution peut être une personne physique, comme un parent ou un ami, ou une personne morale : Action Logement, une entreprise, une banque.",
        "**Le bail mobilité.** D’après la [loi](src:loi), un bail d’un à dix mois pour un logement meublé, réservé aux personnes en études supérieures, en stage, en apprentissage, en formation professionnelle, en service civique, en mutation ou en mission temporaire. Le bailleur ne peut pas demander de dépôt de garantie.",
      ] },
    ] },
    { h: "Que peut demander un propriétaire comme somme d’argent ?", blocks: [
      "Aucune somme avant la signature du bail, d’après [service-public.gouv.fr](src:sp). Ensuite, la [loi](src:loi) limite le dépôt de garantie à un mois de loyer hors charges pour un logement vide et à deux mois pour un meublé, et l’interdit pour un bail mobilité. Si le loyer est payable d’avance pour plus de deux mois, aucun dépôt de garantie ne peut être prévu.",
    ] },
    { h: "Quels documents peut-on demander à un garant ?", blocks: [
      "D’après le [décret n° 2015-1437](src:decret) : une pièce d’identité, un seul justificatif de domicile, et des justificatifs d’activité et de ressources. La liste est dans le guide sur [les documents qu’un propriétaire peut demander](page:guide-documents).",
    ] },
  ],
  sources: [
    { k: "visale", t: "Garantie Visale (service-public.gouv.fr, page vérifiée le 23 janvier 2026)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33453" },
    { k: "al", t: "La garantie Visale (Action Logement)", u: "https://www.actionlogement.fr/la-garantie-visale" },
    { k: "caution", t: "Caution du locataire dans un logement privé (service-public.gouv.fr, page vérifiée le 10 avril 2025)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31267" },
    { k: "loi", t: "Loi n° 89-462 du 6 juillet 1989, articles 22, 22-1, 22-2, 25-6, 25-12 à 25-17 (Légifrance)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/" },
    { k: "sp", t: "Futur locataire : justificatifs à donner au propriétaire (service-public.gouv.fr, page vérifiée le 10 avril 2025)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1169" },
    { k: "campus", t: "Visale pour les étudiants (Campus France, page mise à jour le 27 janvier 2025)", u: "https://www.campusfrance.org/en/VISALE-free-rental-deposit-for-students" },
    { k: "df", t: "Étudiant étranger et recherche de logement (blog de DossierFacile, 12 mai 2025)", u: "https://www.dossierfacile.logement.gouv.fr/blog/etudiant-etranger-logement" },
    { k: "decret", t: "Décret n° 2015-1437 du 5 novembre 2015, annexe II (Légifrance)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
  ],
  app: "Monsieur Dossier prépare aussi le dossier de votre garant. Ses pièces sont rangées à part, et protégées comme les vôtres : numéros inutiles masqués, copie au nom du destinataire. Un garant confie autant de documents sensibles que vous.",
},
en: {
  title: "Can I rent a home in France without a guarantor?",
  short: "Renting without a guarantor",
  desc: "Yes. French law does not require a guarantor, and Visale, a free guarantee from Action Logement, can stand in for one if you are aged up to 30 or a recent hire.",
  answer: "Yes, you can rent in France without a guarantor. The law does not require a tenant to have one: it is the landlord who chooses to ask. If nobody close to you can act as guarantor, [Visale](src:visale), a guarantee from Action Logement, can stand in for one. It is free and open to people aged up to 30, to some older employees and to tenants on a “bail mobilité” lease. You have to apply before you sign the lease.",
  sections: [
    { h: "Can a landlord insist on a guarantor?", blocks: [
      "Yes, the [law of 6 July 1989](src:loi) allows it, within limits set in its articles 22-1 and 22-2.",
      { ul: [
        "A landlord who has taken out insurance against unpaid rent cannot ask for a guarantor as well, unless the tenant is a student or an apprentice.",
        "A landlord cannot refuse a guarantor on the ground that the person is not French or does not live in mainland France.",
        "A landlord cannot require an ascendant or a descendant of the applicant, a parent or a child for example, to co-sign the lease.",
        "When the landlord is a company, other than a family property company, it can ask for a guarantor only if the guarantee comes from a body on a list set by decree, or if the home is let to a student who does not receive a higher-education grant.",
      ] },
      { note: "In practice, [DossierFacile](src:df), the government service, writes that some landlords accept a guarantor living abroad, but that this remains rare." },
    ] },
    { h: "What is the Visale guarantee?", blocks: [
      "Visale is a free guarantee granted by [Action Logement](src:al). If rent goes unpaid or the home is damaged, Action Logement first pays the landlord the sum owed, then gets it back from the tenant.",
      "According to [service-public.gouv.fr](src:visale), it covers at most 36 months of unpaid rent during the first three years of the lease, and damage up to two months of rent and charges. You apply online, before signing the lease. You receive a “visa” to hand to the landlord. For the guarantee to apply, the landlord must then accept the guarantee deed.",
    ] },
    { h: "Who can get Visale?", blocks: [
      "According to [service-public.gouv.fr](src:visale) and [Action Logement](src:al), read on 24 November 2026:",
      { ul: [
        "people aged 30 and under, whatever their work situation, students and work-study trainees included",
        "older private-sector employees, if their net pay does not exceed €1,710 a month, or if they have just been hired or transferred and apply within six months",
        "tenants who sign a “bail mobilité” lease, whatever their age",
      ] },
      "The rent, charges included, is capped: €1,940 in the Paris region, €1,575 or €1,365 elsewhere depending on the town. An income condition applies depending on your situation, and lower caps apply to students and work-study trainees who cannot show proof of income. The official eligibility test, on [service-public.gouv.fr](src:visale), gives the answer for your case.",
    ] },
    { h: "Is Visale open to international students?", blocks: [
      "Yes, according to [Campus France](src:campus): you only need to be between 18 and 30. A student who needs a visa to come to France must have obtained a long-stay visa that serves as a residence permit, marked “étudiant” or “passeport talent”. A student who is a citizen of a European Union country shows a student card and a valid passport. Campus France recommends starting the application as soon as the visa is issued.",
    ] },
    { h: "What are the other options without a guarantor?", blocks: [
      { ul: [
        "**A bank guarantee.** According to [DossierFacile](src:df), you can deposit a sum with a French bank, which serves as security if rent goes unpaid.",
        "**A legal entity.** According to [service-public.gouv.fr](src:caution), the guarantor can be a person, such as a parent or a friend, or a legal entity: Action Logement, a company, a bank.",
        "**The “bail mobilité” lease.** Under the [law](src:loi), a lease of one to ten months for a furnished home, reserved for people in higher education, on an internship, in an apprenticeship, in vocational training, in civic service, on a job transfer or on a temporary assignment. The landlord cannot ask for a security deposit.",
      ] },
    ] },
    { h: "What money can a landlord ask for?", blocks: [
      "No sum before the lease is signed, according to [service-public.gouv.fr](src:sp). After that, the [law](src:loi) caps the security deposit at one month of rent excluding charges for an unfurnished home and two months for a furnished one, and forbids it for a “bail mobilité”. If rent is payable more than two months in advance, no security deposit is allowed.",
    ] },
    { h: "Which documents can a guarantor be asked for?", blocks: [
      "According to [décret n° 2015-1437](src:decret): one identity document, one proof of address, and documents about occupation and income. The list is in the guide on [the documents a landlord can ask for](page:guide-documents).",
    ] },
  ],
  sources: [
    { k: "visale", t: "Visale guarantee (service-public.gouv.fr, page verified on 23 January 2026, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33453" },
    { k: "al", t: "The Visale guarantee (Action Logement, in French)", u: "https://www.actionlogement.fr/la-garantie-visale" },
    { k: "caution", t: "A tenant’s guarantor in private housing (service-public.gouv.fr, page verified on 10 April 2025, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31267" },
    { k: "loi", t: "Loi n° 89-462 of 6 July 1989, articles 22, 22-1, 22-2, 25-6, 25-12 to 25-17 (Légifrance, in French)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/" },
    { k: "sp", t: "Future tenant: documents to give the landlord (service-public.gouv.fr, page verified on 10 April 2025, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1169" },
    { k: "campus", t: "Visale for students (Campus France, page updated on 27 January 2025)", u: "https://www.campusfrance.org/en/VISALE-free-rental-deposit-for-students" },
    { k: "df", t: "International students looking for housing (DossierFacile blog, 12 May 2025, in French)", u: "https://www.dossierfacile.logement.gouv.fr/blog/etudiant-etranger-logement" },
    { k: "decret", t: "Décret n° 2015-1437 of 5 November 2015, annex II (Légifrance, in French)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
  ],
  app: "Monsieur Dossier also prepares your guarantor’s file. Their documents are kept apart and protected like yours: unneeded numbers hidden, each copy in the recipient’s name. A guarantor hands over as many sensitive documents as you do.",
},
  },
};
