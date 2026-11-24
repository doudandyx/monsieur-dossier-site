/* Guide : le dossier de location quand on arrive de l'étranger.
   Sources relues une à une le 24 novembre 2026, dans le navigateur :
   - décret n° 2015-1437, article 1er (copies, français, euros, originaux) et annexe I (Légifrance) ;
   - loi n° 89-462, articles 25-12 (qui peut signer un bail mobilité), 25-14 (durée) et 25-17 (pas de dépôt) ;
   - service-public F1169 (vérifié le 10 avril 2025), F33453 (Visale, vérifié le 23 janvier 2026) et F34759
     (bail mobilité, vérifié le 6 juin 2025) ;
   - blog de DossierFacile (12 mai 2025) : pièce d'identité « passeport ou titre de séjour », traduction ;
   - Campus France (mis à jour le 27 janvier 2025) : Visale pour les étudiants étrangers.
   Corrigé après relecture : le décret ajoute l'avis d'imposition étranger, il ne dit pas qu'il « remplace »
   l'avis français. Le contrat de travail est un justificatif d'activité, pas de ressources. La souplesse sur la
   traduction est celle de DossierFacile, pas une règle. */

/* Notes de rédaction, non publiées (relecture du 24 novembre 2026). Ce que les sources ne disent pas :
   - Le décret demande des pièces en français, sans dire qui traduit ni si la traduction doit être assermentée.
     La souplesse décrite ici est celle de DossierFacile, pas une règle qui s’impose à tous les bailleurs.
   - Le décret cite les bulletins de salaire sans préciser de pays. En déduire que des bulletins étrangers
     conviennent est notre lecture.
   - Les conditions de Visale pour les étudiants étrangers viennent de Campus France, sur une page mise à jour
     le 27 janvier 2025. Pour un salarié qui arrive de l’étranger, nous n’avons pas trouvé de page officielle
     qui les précise.
   - Ce guide ne traite ni des visas ni du droit au séjour. Il ne parle que du dossier de location. */

export default {
  id: "guide-etranger",
  slug: { fr: "dossier-location-arrivee-etranger", en: "rental-file-france-arriving-from-abroad" },
  published: "2026-11-24", updated: "2026-11-24", checked: "2026-11-24",
  related: ["guide-garant", "guide-documents", "guide-filigrane"],
  T: {
fr: {
  title: "Comment faire un dossier de location quand on arrive de l’étranger ?",
  short: "Le dossier quand on arrive de l’étranger",
  desc: "Mêmes quatre types de pièces, avec ce que vous avez : passeport ou titre de séjour, contrat de travail, avis d’imposition étranger, le tout traduit en français.",
  answer: "Quand vous arrivez de l’étranger, votre dossier de location contient les mêmes quatre types de pièces que celui d’un autre candidat, avec les documents que vous avez. Un passeport ou un titre de séjour sert de pièce d’identité. Un contrat de travail, ou une attestation de votre employeur, justifie de votre activité. Si vos revenus ont été imposés dans un autre pays, le [décret n° 2015-1437](src:decret) prévoit l’avis d’imposition de ce pays. Les pièces doivent être rédigées ou traduites en français, et les montants convertis en euros.",
  sections: [
    { h: "Quelle pièce d’identité fournir ?", blocks: [
      "Une pièce en cours de validité, avec votre photo : un passeport, une carte d’identité ou un permis de conduire, français ou étrangers, ou un document qui justifie de votre droit au séjour, comme une carte de séjour ou une carte de résident. C’est la liste du [décret](src:decret).",
    ] },
    { h: "Que fournir sans avis d’imposition français ?", blocks: [
      "Le [décret](src:decret) le prévoit : quand tout ou partie de vos revenus a été imposé dans un autre pays, la pièce est l’avis d’imposition de ce pays, ou un document qui en tient lieu, établi par son administration fiscale. Vous pouvez aussi justifier de vos ressources avec d’autres pièces de la liste, par exemple un avis d’attribution de bourse.",
    ] },
    { h: "Que fournir sans bulletin de salaire français ?", blocks: [
      "Le [décret](src:decret) cite les « trois derniers bulletins de salaires » sans préciser de pays. Notre lecture : des bulletins étrangers, traduits, peuvent être présentés. Si vous commencez un emploi, le contrat de travail ou de stage figure dans la liste des justificatifs d’activité. À défaut, une attestation de l’employeur précise l’emploi, la rémunération proposée, la date d’entrée en fonctions et, s’il y en a une, la durée de la période d’essai. Un étudiant fournit sa carte d’étudiant ou un certificat de scolarité pour l’année en cours.",
    ] },
    { h: "Faut-il traduire ses documents ?", blocks: [
      "Oui. Le [décret](src:decret) demande des pièces rédigées ou traduites en français, avec des montants convertis en euros. Il ne dit pas qui doit traduire. [DossierFacile](src:df), le service de l’État, écrit dans son blog qu’il accepte les traductions assermentées, et que vous pouvez aussi traduire vous-même les points essentiels directement sur le document. Cette souplesse est celle de DossierFacile : un bailleur peut être plus exigeant.",
    ] },
    { h: "Comment faire sans garant en France ?", blocks: [
      "La [garantie Visale](src:visale) d’Action Logement, gratuite, peut tenir lieu de garant. Elle se demande avant la signature du bail. D’après [Campus France](src:campus), un étudiant de 18 à 30 ans qui a besoin d’un visa pour venir en France doit avoir obtenu un visa de long séjour valant titre de séjour, mention « étudiant » ou « passeport talent », et peut commencer la démarche dès que ce visa est délivré. Les autres solutions sont dans le guide [louer sans garant](page:guide-garant).",
    ] },
    { h: "Par où commencer ?", blocks: [
      { ol: [
        "Rassemblez une pièce d’identité, un justificatif d’activité et un justificatif de ressources.",
        "Traduisez en français ce qui ne l’est pas, et convertissez les montants en euros.",
        "Demandez le visa Visale si vous y avez droit : il se présente au bailleur avec le dossier.",
        "Créez un dossier sur DossierFacile si le bailleur accepte son lien. Dans [son blog](src:df), le service cite le passeport ou le titre de séjour comme pièce d’identité.",
        "Ne versez aucune somme avant la signature du bail : d’après [service-public.gouv.fr](src:sp), un propriétaire n’a pas le droit d’en réclamer.",
        "Protégez les copies que vous envoyez par e-mail : voir [que faut-il écrire dans le filigrane](page:guide-filigrane).",
      ] },
      { note: "Pour un séjour d’un à dix mois pendant des études supérieures, un stage, un apprentissage, une formation professionnelle, un service civique, une mutation ou une mission temporaire, le [bail mobilité](src:mobilite) est une option : le logement est meublé et, d’après la [loi](src:loi), le bailleur ne peut pas demander de dépôt de garantie." },
    ] },
  ],
  sources: [
    { k: "decret", t: "Décret n° 2015-1437 du 5 novembre 2015, article 1er et annexe I (Légifrance)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
    { k: "sp", t: "Futur locataire d’un logement privé : justificatifs à donner au propriétaire (service-public.gouv.fr, page vérifiée le 10 avril 2025)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1169" },
    { k: "df", t: "Étudiant étranger et recherche de logement (blog de DossierFacile, 12 mai 2025)", u: "https://www.dossierfacile.logement.gouv.fr/blog/etudiant-etranger-logement" },
    { k: "campus", t: "Visale pour les étudiants (Campus France, page mise à jour le 27 janvier 2025)", u: "https://www.campusfrance.org/en/VISALE-free-rental-deposit-for-students" },
    { k: "visale", t: "Garantie Visale (service-public.gouv.fr, page vérifiée le 23 janvier 2026)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33453" },
    { k: "mobilite", t: "Quelles sont les règles d’un bail mobilité ? (service-public.gouv.fr, page vérifiée le 6 juin 2025)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34759" },
    { k: "loi", t: "Loi n° 89-462 du 6 juillet 1989, articles 25-12, 25-14 et 25-17 (Légifrance)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/" },
  ],
  app: "Monsieur Dossier existe en anglais. Il reconnaît un passeport ou un titre de séjour et repère la ligne de codes au bas du passeport pour la masquer. Votre photo et votre nom restent visibles. L’application ne traduit pas vos pièces.",
},
en: {
  title: "How do I put together a French rental file when I arrive from abroad?",
  short: "The rental file when you arrive from abroad",
  desc: "The same four kinds of documents, with what you have: passport or residence permit, employment contract, a foreign tax notice, all translated into French.",
  answer: "When you arrive from abroad, your French rental file, the “dossier de location”, holds the same four kinds of documents as any other applicant’s, using the papers you have. A passport or a residence permit serves as your identity document. An employment contract, or a letter from your employer, proves your occupation. If your income was taxed in another country, [décret n° 2015-1437](src:decret) provides for that country’s tax notice. The documents must be written in French or translated into French, with amounts converted into euros.",
  sections: [
    { h: "Which identity document should you provide?", blocks: [
      "One valid document showing your photo: a passport, an identity card or a driving licence, French or foreign, or a document proving your right to stay in France, such as a residence permit or a resident card. This is the [decree](src:decret)’s list.",
    ] },
    { h: "What can you provide without a French tax notice?", blocks: [
      "The [decree](src:decret) covers this: when all or part of your income was taxed in another country, the document is that country’s tax notice, or an equivalent document from its tax authority. You can also prove your income with other documents on the list, for example a grant award notice.",
    ] },
    { h: "What can you provide without French payslips?", blocks: [
      "The [decree](src:decret) lists the “last three payslips” without naming a country. Our reading: foreign payslips, translated, can be presented. If you are starting a job, the employment or internship contract is on the list of documents about your occupation. Failing that, a letter from the employer states the job, the proposed pay, the start date and, if there is one, the length of the trial period. A student provides a student card or a certificate of enrolment for the current year.",
    ] },
    { h: "Do you have to translate your documents?", blocks: [
      "Yes. The [decree](src:decret) requires documents written in French or translated into French, with amounts converted into euros. It does not say who must translate. [DossierFacile](src:df), the government service, writes in its blog that it accepts sworn translations, and that you can also translate the key points yourself, directly on the document. That flexibility is DossierFacile’s: a landlord may ask for more.",
    ] },
    { h: "What if you have no guarantor in France?", blocks: [
      "[Visale](src:visale), the free guarantee from Action Logement, can stand in for a guarantor. You apply before signing the lease. According to [Campus France](src:campus), a student aged 18 to 30 who needs a visa to come to France must have obtained a long-stay visa that serves as a residence permit, marked “étudiant” or “passeport talent”, and can start the application as soon as that visa is issued. The other options are in the guide on [renting without a guarantor](page:guide-garant).",
    ] },
    { h: "Where should you start?", blocks: [
      { ol: [
        "Gather one identity document, one document about your occupation and one about your income.",
        "Translate into French anything that is not, and convert the amounts into euros.",
        "Apply for the Visale visa if you qualify: you show it to the landlord with your file.",
        "Create a file on DossierFacile if the landlord accepts its link. In [its blog](src:df), the service names the passport or the residence permit as the identity document.",
        "Pay nothing before the lease is signed: according to [service-public.gouv.fr](src:sp), a landlord has no right to ask.",
        "Protect the copies you send by email: see [what the watermark should say](page:guide-filigrane).",
      ] },
      { note: "For a stay of one to ten months during higher education, an internship, an apprenticeship, vocational training, civic service, a job transfer or a temporary assignment, the [“bail mobilité” lease](src:mobilite) is an option: the home is furnished and, under the [law](src:loi), the landlord cannot ask for a security deposit." },
    ] },
  ],
  sources: [
    { k: "decret", t: "Décret n° 2015-1437 of 5 November 2015, article 1 and annex I (Légifrance, in French)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000031444493" },
    { k: "sp", t: "Documents a future tenant gives a private landlord (service-public.gouv.fr, page verified on 10 April 2025, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1169" },
    { k: "df", t: "International students looking for housing (DossierFacile blog, 12 May 2025, in French)", u: "https://www.dossierfacile.logement.gouv.fr/blog/etudiant-etranger-logement" },
    { k: "campus", t: "Visale for students (Campus France, page updated on 27 January 2025)", u: "https://www.campusfrance.org/en/VISALE-free-rental-deposit-for-students" },
    { k: "visale", t: "Visale guarantee (service-public.gouv.fr, page verified on 23 January 2026, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33453" },
    { k: "mobilite", t: "What are the rules of a bail mobilité? (service-public.gouv.fr, page verified on 6 June 2025, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34759" },
    { k: "loi", t: "Loi n° 89-462 of 6 July 1989, articles 25-12, 25-14 and 25-17 (Légifrance, in French)", u: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310/" },
  ],
  app: "Monsieur Dossier is available in English. It recognises a passport or a residence permit and finds the line of codes at the bottom of the passport so you can hide it. Your photo and name stay visible. The app does not translate your documents.",
},
  },
};
