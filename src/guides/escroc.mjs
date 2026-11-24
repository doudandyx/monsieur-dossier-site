/* Guide : le dossier envoyé à un escroc.
   Sources relues une à une le 24 novembre 2026, dans le navigateur :
   - Cybermalveillance.gouv.fr, fiche « arnaque à la location » (mise à jour le 28 octobre 2026) : les six étapes
     pour une victime, dans cet ordre, les conseils de prévention (paiements, remise des clés, taxe foncière),
     France Victimes au 116 006, Info Escroqueries ;
   - Cybermalveillance.gouv.fr, fiche « usurpation d'identité » (mise à jour le 23 septembre 2026) : plainte pour
     chaque fait, prévenir ses banques, faire annuler et renouveler ses pièces, FCC, FICP et FICOBA, peines ;
   - service-public F34092 (vérifié le 16 octobre 2024) : cinq signes d'une fausse annonce, peines, délai de six ans ;
   - service-public R47990 (THESEE, vérifié le 28 novembre 2024) : deux conditions cumulatives ;
   - service-public R19620 (plainte en ligne, vérifié le 23 octobre 2024) : atteinte aux biens, auteur inconnu ;
   - service-public F37944 (usurpation d'identité, vérifié le 16 septembre 2025) ;
   - Banque de France, « Agir face à l'usurpation d'identité » : quatre étapes, Ficoba, droit d'accès, 34 14 ;
   - 17cyber.gouv.fr.
   Corrigé après relecture : les étapes suivent mot pour mot l'ordre de Cybermalveillance. Aucune page officielle
   ne parle du garant : le conseil de le prévenir est le nôtre, et le guide le dit ainsi. */

/* Notes de rédaction, non publiées (relecture du 24 novembre 2026). Ce que les sources ne disent pas :
   - Les étapes et leur ordre sont ceux de Cybermalveillance.gouv.fr, sur une page mise à jour le 28 octobre
     2026. Nous les avons résumées.
   - THESEE ne couvre pas tous les cas : d’après service-public.gouv.fr, il faut que l’auteur vous ait demandé
     de l’argent. Si vous n’avez envoyé que des documents, Cybermalveillance.gouv.fr recommande la main
     courante.
   - Prévenir le garant est notre conseil. Aucune des pages lues n’en parle.
   - Nous ne donnons pas les horaires du 116 006 : vérifiez-les avant d’appeler.
   - Cybermalveillance.gouv.fr conseille d’attendre la remise des clés pour verser le dépôt de garantie. La loi,
     elle, prévoit qu’il est versé à la signature du bail. Dans les deux cas, rien ne se paie avant la signature
     : service-public.gouv.fr le rappelle. */

export default {
  id: "guide-escroc",
  slug: { fr: "dossier-location-envoye-escroc", en: "rental-documents-sent-to-scammer-france" },
  published: "2026-11-24", updated: "2026-11-24", checked: "2026-11-24",
  related: ["guide-filigrane", "guide-masquer", "guide-interdits"],
  T: {
fr: {
  title: "J’ai envoyé mon dossier de location à un escroc : que faire ?",
  short: "Dossier envoyé à un escroc",
  desc: "Gardez les preuves, prévenez votre banque, signalez l’annonce et déposez plainte. Si une pièce d’identité est partie, déposez aussi une main courante et surveillez vos comptes.",
  answer: "Si vous avez envoyé votre dossier de location à un faux propriétaire, [Cybermalveillance.gouv.fr](src:arnaque) recommande de garder toutes les preuves, de prévenir votre banque, de signaler l’annonce à la plateforme qui la diffuse, puis de déposer plainte. Si vous avez versé de l’argent, faites opposition au plus vite auprès de votre banque. Si vous avez envoyé la copie d’une pièce d’identité, déposez aussi une main courante. Vos documents peuvent servir à ouvrir un compte ou à souscrire un crédit à votre nom : la [Banque de France](src:bdf) explique comment le vérifier.",
  sections: [
    { h: "Que faire tout de suite ?", blocks: [
      "[Cybermalveillance.gouv.fr](src:arnaque), le service public d’assistance aux victimes, donne ces étapes, dans cet ordre :",
      { ol: [
        "**Gardez les preuves** : captures d’écran de l’annonce, messages, relevés bancaires.",
        "**Informez votre banque** et surveillez régulièrement les opérations sur votre compte.",
        "**Si vous avez versé de l’argent**, par virement, chèque ou carte bancaire, faites opposition au plus vite auprès de votre banque pour tenter de bloquer l’opération.",
        "**Signalez l’annonce** à la plateforme qui l’a publiée.",
        "**Déposez plainte**, avec toutes vos preuves.",
        "**Si vous avez envoyé la copie d’une pièce d’identité, déposez une main courante** au commissariat ou à la gendarmerie. Elle acte les faits en vue de recours ultérieurs.",
      ] },
    ] },
    { h: "Où porter plainte ou demander conseil ?", blocks: [
      { ul: [
        "**THESEE**, le service en ligne pour signaler une escroquerie sur Internet, et pour porter plainte si vous êtes majeur. D’après [service-public.gouv.fr](src:thesee), deux conditions doivent être réunies : vous n’avez jamais rencontré l’auteur, et il vous a demandé de l’argent, que vous en ayez versé ou non. Un signalement n’est pas une plainte.",
        "**La [plainte en ligne](src:plainte)** du ministère de l’Intérieur, pour une atteinte aux biens, escroquerie comprise, quand l’auteur est inconnu. Un policier ou un gendarme peut vous demander de venir compléter votre déclaration.",
        "**Un commissariat ou une gendarmerie**, ou un courrier au procureur de la République.",
        "**France Victimes**, au 116 006. L’appel est gratuit, et l’association peut vous accompagner dans vos démarches ([Cybermalveillance.gouv.fr](src:arnaque)).",
        "**Info Escroqueries**, au 0 805 805 817. L’appel est gratuit, du lundi au vendredi de 9 h à 18 h 30 ([Cybermalveillance.gouv.fr](src:arnaque)).",
        "**[17Cyber](src:cyber17)**, le service d’assistance en ligne de la police, de la gendarmerie et de Cybermalveillance.gouv.fr.",
      ] },
      "D’après [service-public.gouv.fr](src:sp), l’escroquerie est punie de cinq ans de prison et de 375 000 € d’amende, et vous avez six ans pour porter plainte, à compter du dernier acte d’escroquerie.",
    ] },
    { h: "Comment se protéger d’une usurpation d’identité ?", blocks: [
      "La [Banque de France](src:bdf) et [Cybermalveillance.gouv.fr](src:usurpation) conseillent de :",
      { ul: [
        "prévenir toutes vos banques, et votre employeur si vous avez transmis des bulletins de salaire",
        "demander la liste des comptes ouverts à votre nom dans le fichier Ficoba, par la messagerie sécurisée de votre espace sur impots.gouv.fr ou par courrier à votre service des impôts",
        "vérifier auprès de la Banque de France que vous n’êtes pas inscrit au fichier central des chèques (FCC) ni au fichier des incidents de crédit (FICP), et refaire cette vérification de temps en temps. Pour en savoir plus, la Banque de France indique le 34 14",
        "déposer plainte pour chaque utilisation de votre identité. D’après Cybermalveillance.gouv.fr, l’usurpation d’identité est passible d’un an de prison et de 15 000 € d’amende",
        "faire annuler et renouveler une pièce d’identité utilisée par des escrocs",
      ] },
      "[Service-public.gouv.fr](src:spusurp) distingue deux cas. En cas de soupçon, vous pouvez déposer une main courante. Dès que votre identité est utilisée à votre insu, vous pouvez porter plainte.",
    ] },
    { h: "Faut-il prévenir son garant ?", blocks: [
      "Oui, à notre avis, si vous avez aussi envoyé ses pièces. Les pages officielles que nous avons lues n’en parlent pas. Ses documents sont exposés au même risque que les vôtres, et il peut faire les mêmes démarches en son nom.",
    ] },
    { h: "Comment reconnaître une fausse annonce ?", blocks: [
      "[Service-public.gouv.fr](src:sp) cite ces signes :",
      { ul: [
        "un prix très bas pour l’emplacement, la surface ou le standing du logement",
        "des photos visibles dans une autre annonce",
        "un propriétaire au comportement étrange, qui refuse par exemple de vous rencontrer",
        "une demande d’argent avant la signature du bail",
        "une demande de documents officiels, une carte d’identité par exemple, avant la visite",
      ] },
      "[Cybermalveillance.gouv.fr](src:arnaque) ajoute trois conseils. Refusez tout paiement vers un compte à l’étranger, en espèces ou par un service de transfert d’argent. Attendez la remise des clés pour verser le dépôt de garantie et le premier loyer, par virement ou par chèque. Au moindre doute, demandez au propriétaire une copie de sa taxe foncière, pour vous assurer que le logement est bien à lui.",
    ] },
    { h: "Comment protéger ses prochains envois ?", blocks: [
      "[Cybermalveillance.gouv.fr](src:arnaque) recommande de marquer chaque copie avec le motif de l’envoi, la date et le destinataire, et de privilégier la remise en main propre quand c’est possible. Vous pouvez aussi masquer ce dont le destinataire n’a pas besoin. Voir [que faut-il écrire dans le filigrane](page:guide-filigrane) et [ce qu’on peut masquer sur ses pièces](page:guide-masquer).",
    ] },
  ],
  sources: [
    { k: "arnaque", t: "Comment réagir en cas d’arnaque à la location immobilière ? (Cybermalveillance.gouv.fr, page mise à jour le 28 octobre 2026)", u: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/arnaques-location-immobiliere" },
    { k: "usurpation", t: "Usurpation d’identité, que faire ? (Cybermalveillance.gouv.fr, page mise à jour le 23 septembre 2026)", u: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/usurpation-identite-que-faire" },
    { k: "sp", t: "Arnaques à la location immobilière sur internet (service-public.gouv.fr, page vérifiée le 16 octobre 2024)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34092" },
    { k: "thesee", t: "Signaler une escroquerie à la location (fausse annonce), THESEE (service-public.gouv.fr, page vérifiée le 28 novembre 2024)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/R47990" },
    { k: "plainte", t: "Plainte en ligne (service-public.gouv.fr, page vérifiée le 23 octobre 2024)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/R19620" },
    { k: "spusurp", t: "Usurpation d’identité (service-public.gouv.fr, page vérifiée le 16 septembre 2025)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F37944" },
    { k: "bdf", t: "Agir face à l’usurpation d’identité (Banque de France)", u: "https://www.banque-france.fr/fr/a-votre-service/particuliers/agir-usurpation-identite" },
    { k: "cyber17", t: "17Cyber, assistance aux victimes", u: "https://17cyber.gouv.fr" },
  ],
  app: "Monsieur Dossier ne rattrape pas un envoi déjà parti. Pour les suivants, il masque les numéros inutiles au bailleur et marque chaque copie au nom du destinataire, avec l’adresse du logement et la date. Une copie volée devient difficile à réutiliser ailleurs.",
},
en: {
  title: "I sent my rental documents to a scammer in France: what do I do?",
  short: "Rental documents sent to a scammer",
  desc: "Keep the evidence, tell your bank, report the listing and file a complaint. If an identity document went out, also file a “main courante” and watch your accounts.",
  answer: "If you sent your French rental file to a fake landlord, [Cybermalveillance.gouv.fr](src:arnaque), the French government’s help service for victims, recommends keeping all the evidence, telling your bank, reporting the listing to the platform that carries it, then filing a complaint. If you paid money, ask your bank to stop the payment as fast as you can. If you sent a copy of an identity document, also file a “main courante”, a dated police record. Your documents can be used to open an account or take out a loan in your name: the [Banque de France](src:bdf) explains how to check.",
  sections: [
    { h: "What should you do right away?", blocks: [
      "[Cybermalveillance.gouv.fr](src:arnaque), the French government’s help service for victims, gives these steps, in this order:",
      { ol: [
        "**Keep the evidence**: screenshots of the listing, messages, bank statements.",
        "**Tell your bank** and check the transactions on your account regularly.",
        "**If you paid money**, by transfer, cheque or card, ask your bank to stop the payment as fast as you can, to try to block the transaction.",
        "**Report the listing** to the platform that published it.",
        "**File a complaint**, with all your evidence.",
        "**If you sent a copy of an identity document, file a “main courante”** at a police station or a gendarmerie. It puts the facts on record for later action.",
      ] },
    ] },
    { h: "Where can you file a complaint or get advice?", blocks: [
      { ul: [
        "**THESEE**, the online service for reporting an internet scam, and for filing a complaint if you are an adult. According to [service-public.gouv.fr](src:thesee), two conditions must both be met: you never met the scammer in person, and they asked you for money, whether or not you paid. A report is not a complaint.",
        "**The [online complaint service](src:plainte)** of the Interior Ministry, for an offence against property, fraud included, when the offender is unknown. A police officer or gendarme may ask you to come in and complete your statement.",
        "**A police station or a gendarmerie**, or a letter to the public prosecutor.",
        "**France Victimes**, on 116 006. The call is free, and the association can support you through the steps ([Cybermalveillance.gouv.fr](src:arnaque)).",
        "**Info Escroqueries**, on 0 805 805 817. The call is free, Monday to Friday from 9 am to 6.30 pm ([Cybermalveillance.gouv.fr](src:arnaque)).",
        "**[17Cyber](src:cyber17)**, the online help service of the police, the gendarmerie and Cybermalveillance.gouv.fr.",
      ] },
      "According to [service-public.gouv.fr](src:sp), fraud is punished by five years in prison and a €375,000 fine, and you have six years to file a complaint, counted from the last act of fraud.",
    ] },
    { h: "How do you protect yourself against identity theft?", blocks: [
      "The [Banque de France](src:bdf) and [Cybermalveillance.gouv.fr](src:usurpation) advise you to:",
      { ul: [
        "tell all your banks, and your employer if you sent payslips",
        "ask for the list of accounts opened in your name in the Ficoba register, through the secure messaging in your impots.gouv.fr account or by post to your tax office",
        "check with the Banque de France that you are not listed in its register of cheque incidents (FCC) or its register of loan repayment incidents (FICP), and repeat the check from time to time. For more information, the Banque de France gives the number 34 14",
        "file a complaint for each use of your identity. According to Cybermalveillance.gouv.fr, identity theft carries up to one year in prison and a €15,000 fine",
        "have an identity document that scammers used cancelled and renewed",
      ] },
      "[Service-public.gouv.fr](src:spusurp) separates two cases. If you only suspect identity theft, you can file a “main courante”. As soon as your identity is used without your knowledge, you can file a complaint.",
    ] },
    { h: "Should you tell your guarantor?", blocks: [
      "Yes, in our view, if you also sent their documents. The official pages we read do not mention it. Their documents face the same risk as yours, and they can take the same steps in their own name.",
    ] },
    { h: "How do you recognise a fake listing?", blocks: [
      "[Service-public.gouv.fr](src:sp) lists these signs:",
      { ul: [
        "a very low price for the location, size or standard of the home",
        "photos that appear in another listing",
        "a landlord who behaves oddly, for example by refusing to meet you",
        "a request for money before the lease is signed",
        "a request for official documents, an identity card for example, before the viewing",
      ] },
      "[Cybermalveillance.gouv.fr](src:arnaque) adds three pieces of advice. Refuse any payment to an account abroad, in cash or through a money transfer service. Wait until you receive the keys to pay the security deposit and the first rent, by bank transfer or by cheque. If in any doubt, ask the landlord for a copy of their property tax notice, to make sure the home is really theirs.",
    ] },
    { h: "How do you protect the next copies you send?", blocks: [
      "[Cybermalveillance.gouv.fr](src:arnaque) recommends marking each copy with the reason for sending it, the date and the recipient, and handing documents over in person when you can. You can also hide what the recipient does not need. See [what the watermark should say](page:guide-filigrane) and [what you can hide on your documents](page:guide-masquer).",
    ] },
  ],
  sources: [
    { k: "arnaque", t: "How to react to a rental scam (Cybermalveillance.gouv.fr, page updated on 28 October 2026, in French)", u: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/arnaques-location-immobiliere" },
    { k: "usurpation", t: "Identity theft: what to do (Cybermalveillance.gouv.fr, page updated on 23 September 2026, in French)", u: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/usurpation-identite-que-faire" },
    { k: "sp", t: "Rental scams on the internet (service-public.gouv.fr, page verified on 16 October 2024, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34092" },
    { k: "thesee", t: "Report a rental scam (fake listing), THESEE (service-public.gouv.fr, page verified on 28 November 2024, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/R47990" },
    { k: "plainte", t: "Online complaint (service-public.gouv.fr, page verified on 23 October 2024, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/R19620" },
    { k: "spusurp", t: "Identity theft (service-public.gouv.fr, page verified on 16 September 2025, in French)", u: "https://www.service-public.gouv.fr/particuliers/vosdroits/F37944" },
    { k: "bdf", t: "Acting against identity theft (Banque de France, in French)", u: "https://www.banque-france.fr/fr/a-votre-service/particuliers/agir-usurpation-identite" },
    { k: "cyber17", t: "17Cyber, help for victims (in French)", u: "https://17cyber.gouv.fr" },
  ],
  app: "Monsieur Dossier cannot undo a send that has already gone. For the next ones, it hides the numbers a landlord does not need and marks each copy with the recipient’s name, the property address and the date. A stolen copy becomes hard to reuse anywhere else.",
},
  },
};
