/* Guide : caviarder un PDF sur Mac sans l'envoyer sur Internet.
   Source relue le 24 novembre 2026, dans le navigateur : Assistance Apple, « Annoter un fichier PDF dans Aperçu
   sur Mac », en français et en anglais. La page affichait par défaut le guide d'Aperçu pour macOS 27.
   Ce qu'Apple écrit, mot pour mot : « Sélection du caviardage : Sélectionnez du texte pour le masquer. Vous pouvez
   modifier la correction pendant que vous apportez vos modifications, mais une fois le document fermé, la
   correction devient permanente. » En anglais : « Select text to remove it from view. »
   Apple ne dit pas que le texte est effacé du fichier, et ne décrit rien pour un PDF scanné : le guide s'en tient
   là et renvoie à une vérification. Ce guide repose sur cette page, pas sur un essai de notre part.
   Les remarques sur les outils en ligne et sur le rectangle noir sont des constats généraux, dits comme tels. */

/* Notes de rédaction, non publiées (relecture du 24 novembre 2026). Ce que les sources ne disent pas :
   - Apple écrit que l’outil « masque » le texte et que la correction devient permanente à la fermeture. Sa page
     ne dit pas que le texte est effacé du fichier. Ce guide s’appuie sur cette page : faites le test de
     vérification sur votre propre fichier.
   - Les noms d’outils sont ceux du guide d’Aperçu qu’Apple affichait le 24 novembre 2026, pour macOS 27. Ils
     peuvent différer sur une version plus ancienne.
   - Apple ne décrit pas de méthode pour un PDF scanné, où le texte est une image.
   - Que des outils en ligne reçoivent le fichier, et qu’un rectangle dessiné puisse laisser le texte dessous,
     sont des constats généraux. La page d’Apple ne les traite pas.
   - Si votre fichier est rangé dans un dossier synchronisé, iCloud Drive par exemple, il y est synchronisé
     comme vos autres fichiers. Ce guide ne traite pas ce cas. */

export default {
  id: "guide-caviarder",
  slug: { fr: "caviarder-pdf-mac", en: "redact-pdf-mac-without-uploading" },
  published: "2026-11-24", updated: "2026-11-24", checked: "2026-11-24",
  related: ["guide-masquer", "guide-filigrane", "guide-rib"],
  T: {
fr: {
  title: "Comment caviarder un PDF sur Mac sans l’envoyer sur Internet ?",
  short: "Caviarder un PDF sur Mac",
  desc: "Avec Aperçu, l’application de macOS : d’après Apple, l’outil « Sélection du caviardage » masque un texte, et la correction devient permanente à la fermeture du document.",
  answer: "Sur Mac, vous pouvez caviarder un PDF sans l’envoyer sur Internet avec Aperçu, l’application livrée avec macOS. Affichez la barre d’outils d’annotation, choisissez l’outil « Sélection du caviardage », puis sélectionnez le texte à masquer. D’après [Apple](src:apple), la correction reste modifiable tant que le document est ouvert et devient permanente une fois le document fermé. Apple ne précise pas si le texte est effacé du fichier : travaillez sur une copie, puis vérifiez que le texte masqué ne peut plus être sélectionné ni retrouvé.",
  sections: [
    { h: "Pourquoi caviarder sur son Mac plutôt qu’en ligne ?", blocks: [
      "Beaucoup d’outils en ligne reçoivent votre fichier sur leurs serveurs pour le traiter. Pour un bulletin de salaire ou une pièce d’identité, c’est une copie de plus hors de votre contrôle. Aperçu est une application installée sur votre Mac : elle ouvre et modifie le fichier sur place. C’est un constat général, la page d’Apple citée ici n’en parle pas.",
    ] },
    { h: "Comment caviarder un PDF avec Aperçu, pas à pas ?", blocks: [
      { ol: [
        "Dupliquez le fichier et ouvrez la copie dans Aperçu : d’après [Apple](src:apple), la correction devient permanente à la fermeture.",
        "Affichez la barre d’outils d’annotation, si elle n’est pas déjà visible.",
        "Choisissez l’outil « Sélection du caviardage ». C’est le nom que lui donne le guide d’Aperçu pour macOS 27.",
        "Sélectionnez le texte à masquer. Recommencez pour chaque numéro.",
        "Fermez le document, puis faites les vérifications décrites plus bas.",
      ] },
    ] },
    { h: "Quelles sont les limites de l’outil d’Aperçu ?", blocks: [
      { ul: [
        "[Apple](src:apple) décrit l’outil ainsi : « Sélectionnez du texte pour le masquer. » Sa page ne dit pas que le texte est retiré du fichier, d’où les vérifications plus bas.",
        "Il s’applique à du texte que l’on peut sélectionner. Apple ne décrit pas son usage sur un PDF scanné, où le texte est une image.",
        "D’après Apple, si le PDF contient une table des matières, les entrées qui renvoient au texte caviardé ne sont pas supprimées.",
        "Vous repérez vous-même chaque numéro, sur chaque page de chaque document.",
      ] },
    ] },
    { h: "Dessiner un rectangle noir, est-ce pareil ?", blocks: [
      "Non. Une figure dessinée par-dessus le texte le recouvre sans le retirer : le texte peut rester dans le fichier, où il se sélectionne et se copie encore. C’est un constat technique général, que la page d’Apple ne traite pas. Utilisez l’outil de caviardage, puis vérifiez.",
    ] },
    { h: "Comment vérifier que le texte a bien disparu ?", blocks: [
      { ol: [
        "Rouvrez le fichier caviardé.",
        "Essayez de sélectionner la zone masquée et de copier son contenu.",
        "Cherchez le numéro masqué avec Commande + F.",
        "Si le texte se copie ou se retrouve, n’envoyez pas le fichier. Si rien ne se copie et que la recherche ne trouve rien, le texte ne se lit plus par ces moyens.",
      ] },
    ] },
    { h: "Et pour une photo ou un scan ?", blocks: [
      "Pour une image, [Apple](src:apple) décrit l’outil « Sélection rectangulaire », qui sélectionne une zone pour la copier ou la supprimer. Pour un PDF scanné, sa page ne décrit pas de méthode. Dans les deux cas, vérifiez le résultat avant d’envoyer : voir [ce qu’on peut masquer sur ses pièces](page:guide-masquer).",
    ] },
  ],
  sources: [
    { k: "apple", t: "Annoter un fichier PDF dans Aperçu sur Mac (Assistance Apple, guide d’Aperçu pour macOS 27)", u: "https://support.apple.com/fr-fr/guide/preview/prvw11580/mac" },
  ],
  app: "Monsieur Dossier fait ce travail sur tout le dossier. Il repère l’IBAN, le RIB, le numéro de sécurité sociale et la ligne de codes du passeport aux formats courants, y compris sur un scan ou une photo, puis aplatit chaque page en image pour que le texte masqué n’existe plus. Chaque fichier est rouvert et contrôlé avant d’être enregistré. Tout se passe sur votre Mac.",
},
en: {
  title: "How do I redact a PDF on a Mac without uploading it?",
  short: "Redacting a PDF on a Mac",
  desc: "With Preview, the app that comes with macOS: according to Apple, the Redaction Selection tool removes text from view, and the redaction becomes permanent once you close the document.",
  answer: "On a Mac, you can redact a PDF without uploading it by using Preview, the app that comes with macOS. Show the Markup toolbar, choose the Redaction Selection tool, then select the text to hide. According to [Apple](src:apple), you can still change the redaction while the document is open, and it becomes permanent once the document is closed. Apple does not say whether the text is erased from the file: work on a copy, then check that the hidden text can no longer be selected or found.",
  sections: [
    { h: "Why redact on your Mac instead of online?", blocks: [
      "Many online tools receive your file on their servers to process it. For a payslip or an identity document, that is one more copy out of your control. Preview is an app installed on your Mac: it opens and edits the file in place. This is a general observation, which the Apple page cited here does not cover.",
    ] },
    { h: "How do you redact a PDF with Preview, step by step?", blocks: [
      { ol: [
        "Duplicate the file and open the copy in Preview: according to [Apple](src:apple), the redaction becomes permanent on closing.",
        "Show the Markup toolbar, if it is not already visible.",
        "Choose the Redaction Selection tool. That is its name in the Preview guide for macOS 27.",
        "Select the text to hide. Repeat for each number.",
        "Close the document, then run the checks described below.",
      ] },
    ] },
    { h: "What are the limits of Preview’s tool?", blocks: [
      { ul: [
        "[Apple](src:apple) describes the tool this way: “Select text to remove it from view.” Its page does not say that the text is removed from the file, hence the checks below.",
        "It applies to text that can be selected. Apple does not describe using it on a scanned PDF, where the text is an image.",
        "According to Apple, if the PDF has a table of contents, the entries that link to redacted text are not removed.",
        "You find each number yourself, on every page of every document.",
      ] },
    ] },
    { h: "Is drawing a black box the same thing?", blocks: [
      "No. A shape drawn over the text covers it without removing it: the text can stay in the file, where it can still be selected and copied. This is a general technical observation, which Apple’s page does not cover. Use the redaction tool, then check.",
    ] },
    { h: "How do you check that the text is really gone?", blocks: [
      { ol: [
        "Reopen the redacted file.",
        "Try to select the hidden area and copy its content.",
        "Search for the hidden number with Command + F.",
        "If the text can be copied or found, do not send the file. If nothing can be copied and the search finds nothing, the text can no longer be read by these means.",
      ] },
    ] },
    { h: "What about a photo or a scan?", blocks: [
      "For an image, [Apple](src:apple) describes the Rectangular Selection tool, which selects an area to copy or delete. For a scanned PDF, its page describes no method. In both cases, check the result before you send it: see [what you can hide on your documents](page:guide-masquer).",
    ] },
  ],
  sources: [
    { k: "apple", t: "Annotate a PDF in Preview on Mac (Apple Support, Preview guide for macOS 27)", u: "https://support.apple.com/guide/preview/annotate-a-pdf-prvw11580/mac" },
  ],
  app: "Monsieur Dossier does this across the whole file. It finds the IBAN, bank codes, social security number and the passport’s line of codes in their common formats, on a scan or a photo too, then flattens each page into an image so that the hidden text no longer exists. Every file is reopened and checked before it is saved. It all happens on your Mac.",
},
  },
};
