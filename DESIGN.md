# Monsieur Dossier — design du site

*Posé le 22 novembre 2026. La marque (nom, ton, promesses) est dans `BRAND.md`, dans le dépôt de l'application ; le design de l'application est dans son propre `DESIGN.md`. Ce fichier décrit le site monsieurdossier.com.*

Ce fichier fait foi. Une page qui s'en écarte est corrigée, ou ce fichier est mis à jour d'abord.

## Principes

1. **Sobre, administratif, professionnel.** Une page blanche, de grands titres, beaucoup d'air. Pas d'ombre, pas de dégradé, pas d'illustration décorative.
2. **Une action : télécharger.** Le bouton de téléchargement est dans la barre du haut, sous le titre et dans la bande bleue. Aucune autre action ne lui fait concurrence.
3. **On dit ce que fait l'application, rien d'autre.** Pas de comparaison avec le travail à la main ni avec d'autres outils : elle reste sous-entendue (décision du 22/11). Deux exceptions gardées : la carte « Le faux masquage », qui décrit un risque, et la page DossierFacile, qui présente un service complémentaire.
4. **Le temps gagné d'abord.** Ce qui est mis en avant : les masques trouvés d'office, toutes les copies refaites d'un coup, l'enregistrement en une fois.
5. **Chaque promesse a sa limite, écrite à côté.** « Aux formats courants », « vous vérifiez », « avertit sans bloquer ». Les formules interdites sont listées dans `BRAND.md`, section « Ce qu'on ne dit jamais ».
6. **Le document est la seule image.** Le site montre une feuille blanche avec des masques noirs et un filigrane, jamais une photo ni une capture d'écran. Tous les documents montrés sont fictifs.
7. **Rien ne sort du site.** Aucune police, aucun script, aucune mesure d'audience chargés depuis un autre domaine. C'est la même promesse que l'application.

## Pages

Chaque page existe en français et en anglais, à deux adresses.

| Page | Français | Anglais | Rôle |
|---|---|---|---|
| Accueil | `/` | `/en/` | Ce que fait l'app, en une page, jusqu'au téléchargement |
| Fonctionnalités | `/fonctionnalites.html` | `/en/features.html` | Le détail, étape par étape, avec une illustration par section |
| DossierFacile | `/dossierfacile.html` | `/en/dossierfacile.html` | Ce que fait chacun des deux services, et comment les utiliser ensemble |
| Contact | `/contact.html` | `/en/contact.html` | L'adresse e-mail. Le formulaire d'avis s'ajoute quand son adresse d'envoi est renseignée dans `src/site.mjs` |
| Page introuvable | `/404.html` | la même | Écrite dans les deux langues, non indexée |
| Mentions légales | `mentions-legales.html` | | Prête, **non publiée** tant que les informations du Kbis manquent. Encore écrite à l'ancienne manière (texte posé par JavaScript) : à porter dans `src/` avant publication |

**Ordre de l'accueil.** Barre du haut, titre et bouton, document d'exemple, « Comment ça marche » (quatre étapes), « Le problème », « Vous arrivez en France ? », « Confidentialité » (bande sombre), « Ce que dit la loi », téléchargement (bande bleue) et premier lancement, questions fréquentes, pied de page.

**Page Fonctionnalités.** Un sommaire en pastilles, puis huit sections dans l'ordre d'usage : ajouter, ce qui manque, masquer, pages, filigrane, contrôle, enregistrer, sur votre Mac. Chaque section a un numéro, un titre, une phrase, des points, une ligne « À savoir » qui dit la limite, et une illustration. Le texte et l'illustration alternent de côté d'une section à l'autre.

## Tokens

Tous les tokens sont dans `site.css`, sur `:root`. **Aucune couleur ni police en dur dans les pages.** Deux exceptions voulues : la feuille de papier et les illustrations, qui restent claires dans les deux thèmes (voir plus bas).

### Couleurs

| Token | Clair | Sombre | Usage |
|---|---|---|---|
| `--page` | `#ffffff` | `#0f1420` | Fond de page |
| `--paper` | `#eef1f6` | `#182033` | Cartes grises, bandes, fonds secondaires |
| `--sheet` | `#ffffff` | `#1c2538` | Surface posée sur une bande |
| `--ink` | `#14213d` | `#e7ebf4` | Texte, bouton sombre |
| `--ink-2` | `#56607a` | `#9aa5bd` | Texte secondaire |
| `--rule` | `#d5dbe6` | `#2f3a56` | Contour (formulaire, tableau, FAQ) |
| `--rule-2` | `#e3e7ef` | `#26304a` | Séparateur de ligne |
| `--accent` | `#2d5bd7` | `#7b9bff` | Action principale, liens, numéros d'étape |
| `--accent-ink` | `#ffffff` | `#0b1022` | Texte sur le bleu |
| `--tint` | `#e4ebfb` | `#1f2b4a` | Cartes teintées de bleu (les quatre étapes) |
| `--stage` | `#2d5bd7` | `#2d5bd7` | Fond derrière un document, bande de téléchargement |
| `--deep` | `#14213d` | `#16224a` | Bande sombre (confidentialité) |
| `--mask` | `#1b1e24` | `#05070b` | Le masque |
| `--ok`, `--ok-soft` | `#14613a`, `#dff3e8` | `#4cc38a`, translucide | Pièces autorisées, « fournie », « contrôlé » |
| `--no`, `--no-soft` | `#9c1f18`, `#fbe4e2` | `#ff7a66`, translucide | Pièces interdites, « manquante », avertissement |

**Le bleu a un sens.** Il sert à l'action principale, aux liens, aux numéros d'étape, au filigrane, au tampon et au fond derrière un document. Pas à la décoration.

**Vert et rouge ne portent jamais le sens seuls** : ils sont toujours accompagnés d'un mot (« Autorisé », « Manquante »).

### Thème

Trois choix : clair, sombre, celui du système (par défaut). Le choix est gardé dans le navigateur (`monsieurdossier-site-theme`), rien n'est envoyé. `theme.js` est chargé dans `<head>` pour appliquer le thème avant le premier affichage ; il pose `data-theme` sur `<html>`. Le sélecteur est dans la barre du haut, et en pied de page sous 700 px.

Les valeurs sombres sont écrites deux fois dans `site.css` : sous `prefers-color-scheme: dark` et sous `:root[data-theme="dark"]`. **Une couleur changée dans l'un se change dans l'autre.**

### Typographie

Trois polices variables, servies par le site depuis `fonts/`.

| Rôle | Police | Usage |
|---|---|---|
| Titres | Bricolage Grotesque, graisse 500 | `h1`, `h2`, `h3`, nom de la marque |
| Texte | Inter | Tout le reste |
| Chiffres et code | JetBrains Mono | Numéros d'étape, contenu du document, filigrane, tampon, terminal |

| Élément | Taille |
|---|---|
| Titre de l'accueil | `clamp(40px, 6.6vw, 84px)`, interligne 1 |
| Titre de section, titre d'une page secondaire | `clamp(30px, 4vw, 52px)`, interligne 1,05 |
| Titre d'une section de fonctionnalité | `clamp(26px, 3vw, 38px)` |
| Titre de carte | 21 px, graisse 600 |
| Chapeau | 18 px, en `--ink-2` |
| Texte | 16 px, interligne 1,5 |
| Texte de carte | 15 px |
| Surtitre, notes | 14 px |

Les titres sont équilibrés (`text-wrap: balance`) et serrés (`letter-spacing: -.02em`). En français, une espace insécable précède `?`, `:`, `;` et entoure les guillemets.

### Formes et espacements

- **Boutons et pastilles** : rayon 999 px. Bouton de 46 px de haut, 44 px pour le petit.
- **Cartes** : rayon 22 px, marge intérieure 24 px (20 px sous 560 px).
- **Bandes** : rayon 24 px.
- **Colonne** : 1 200 px au plus ; gouttière `clamp(20px, 4vw, 40px)`. La FAQ tient en 900 px.
- **Entre deux sections** : `clamp(64px, 9vw, 112px)`.
- **Entre deux cartes** : 16 px.
- **Pas d'ombre.** Une carte se détache par son fond, pas par un filet ni une ombre.

## Composants

**Bouton (`.btn`).** Contour par défaut ; `.primary` en bleu plein pour télécharger ; `.dark` en encre pleine dans la barre du haut ; `.small`. Sur la bande bleue, le bouton est blanc.

**Barre du haut (`nav`).** Collante, fond de page à 90 % avec flou. Marque, liens, langue, thème, bouton de téléchargement. Sous 1 040 px, les liens disparaissent ; sous 560 px, la marque devient « M. Dossier ».

**Surtitre et en-tête de section (`.eyebrow`, `.head`).** Un mot en petit, le titre, parfois un chapeau. L'en-tête tient en 820 px.

**Cartes.** Toujours en colonnes égales : une carte ne s'étire jamais pour remplir une ligne.

| Classe | Colonnes | Fond | Où |
|---|---|---|---|
| `.prob` | 3, puis 1 sous 820 px | `--paper` | Le problème, les trois étapes de la page DossierFacile |
| `.prob.four`, `.legal` | 2, puis 1 sous 820 px | `--paper` ; vert et rouge doux pour la loi | Arrivée en France, pièces autorisées et interdites |
| `.steps` | 4, puis 2 sous 980 px, puis 1 sous 560 px | `--tint`, numéro en bleu | Comment ça marche |
| `.proofs` | comme `.steps` | blanc à 8 % | Confidentialité, sur la bande sombre |

**Bandes (`.band`).** Grise par défaut ; `.deep` pour la confidentialité ; `.blue` pour le téléchargement. Une seule bande bleue et une seule bande sombre par page.

**Document d'exemple (`.stage`, `.sheet`).** Une feuille blanche sur le fond bleu. Elle reste blanche dans les deux thèmes, pour que les masques noirs ressortent : ses couleurs sont fixées sur `.sheet`. Le bouton « Original / Copie » pose les masques, le filigrane et le tampon. Sans JavaScript, la copie s'affiche protégée et le bouton n'apparaît pas.

**Tampon (`.seal`).** Disque blanc, texte bleu en cercle. Un seul par page, sur le document d'exemple.

**Illustrations (`.shot`, `.mk`).** Sur la page Fonctionnalités : une carte blanche sur le fond bleu, qui dessine en HTML un fragment de l'application. Comme la feuille, elle reste claire dans les deux thèmes. Briques disponibles : ligne (`.row`), étiquette (`.tag`, `.ok`, `.no`), fichier et dossier (`.file`, `.dir`), barre de masque (`.bar`), pages (`.pg`), champ (`.field`), aperçu de filigrane (`.prev`), terminal (`.mk.term`). Chaque illustration porte un `aria-label` qui la décrit. La page dit que ce sont des illustrations, pas des captures.

**Tableau (`.cmp`).** Page DossierFacile seulement. Un vrai `<table>`, dessiné en grille. Trois colonnes ; sous 680 px, chaque ligne s'empile et reprend le nom de la colonne (attribut `data-l`).

**Questions fréquentes (`details`).** Une ligne par question, un « + » qui tourne à l'ouverture. La question est un `h3` dans le `summary`. La première répond à « Qu'est-ce que Monsieur Dossier ? » et reste ouverte.

**Sommaire en pastilles (`.toc`).** Page Fonctionnalités.

**Pied de page.** Une ligne : la signature, la mention d'indépendance, le lien de contact. Dessous, les liens vers les autres pages et la date de mise à jour de la page.

**Pastille de langue (`.langbar`).** En bas de l'écran, fond d'encre, un lien et une croix. Ajoutée par `site.js` quand la langue du navigateur n'est pas celle de la page.

**Texte hors de l'affichage (`.sr`).** Pour les lecteurs d'écran et les robots : légende d'une illustration, nom complet d'une langue, titre d'un tableau.

## Mouvement

Discret, et toujours au service du document.

- À l'ouverture de l'accueil, le document s'affiche en clair, puis se protège une fois, après 0,9 s : les masques glissent de gauche à droite (0,5 s), le filigrane apparaît, le tampon se pose.
- Le « + » de la FAQ tourne ; les boutons changent de fond au survol.
- Rien d'autre ne bouge. Pas d'apparition au défilement, pas de parallaxe.
- Avec `prefers-reduced-motion`, toutes les transitions sont coupées et le document s'affiche déjà protégé.

## Langue

Français et anglais, **une adresse par langue** : le français à la racine, l'anglais sous `/en/`. Chaque page annonce l'autre version (`hreflang`). La version proposée à qui ne lit ni l'une ni l'autre est l'anglais (`x-default`).

**Une page ne change jamais de langue d'elle-même** (décision du 23 novembre 2026). Avant, la langue suivait le navigateur à la même adresse : un moteur de recherche ne voyait qu'une des deux langues, et un robot sans JavaScript ne voyait aucun texte. Aujourd'hui, si la langue du navigateur n'est pas celle de la page, une pastille en bas de l'écran propose l'autre version. Elle ne redirige pas. Le choix du visiteur est gardé dans le navigateur (`monsieurdossier-site-lang`) et la pastille ne revient plus.

Les textes sont dans `src/i18n/`, un fichier par page, dans un dictionnaire `T = { fr, en }`. Les textes communs à toutes les pages sont dans `src/shared.mjs`. **Un texte ajouté l'est dans les deux langues** : le build échoue si une clé manque d'un côté.

Dans une chaîne, deux notations : `[texte](adresse)` pour un lien, `*texte*` pour une mise en valeur. L'adresse `page:nom` désigne une page du site dans la langue en cours, `link:nom` une source listée dans `src/site.mjs`.

Typographie française : on écrit une espace simple dans les dictionnaires, et le build pose l'espace insécable avant `?`, `!`, `:`, `%`, `»` et après `«`.

**Pas de point-virgule dans les textes du site**, en français comme en anglais (règle posée par Tommy le 23 novembre 2026 : il donne au texte un air écrit par une IA). On coupe en deux phrases, ou on relie par une virgule et « et ». Le build échoue s'il en trouve un dans le texte d'une page, d'une version Markdown ou de `llms.txt`. La règle vaut pour le texte lu par le visiteur, pas pour le code ni pour ce fichier.

## Lisible sans JavaScript, par les moteurs et les assistants IA

Posé le 23 novembre 2026. Un robot qui ne lance pas JavaScript, comme ceux de la plupart des assistants IA, doit lire le site en entier. Ces règles valent pour toute page ajoutée.

1. **Tout le texte est dans le HTML.** JavaScript n'ajoute que des comportements : thème, animation du document d'exemple, pastille de langue, copie de l'adresse. Sans JavaScript, la page se lit en entier et le document d'exemple s'affiche déjà protégé.
2. **Un seul `h1` par page**, puis des titres dans l'ordre. Chaque question de la FAQ est un `h3`.
3. **Un lien est un vrai lien** (`<a href>`), téléchargement compris. Pas de bouton qui navigue par script.
4. **Un tableau est un `<table>`, une suite d'étapes un `<ol>`.** La feuille de style les dessine comme elle veut, le sens reste dans le HTML.
5. **Un document ou un écran dessiné est un exemple, et la page le dit.** Chaque illustration est précédée d'une légende (`figcaption`, classe `.sr`) et porte `data-nosnippet`. Un texte répété pour le décor, comme le filigrane, passe par un attribut et la feuille de style, pas par le texte de la page.
6. **L'en-tête de chaque page** porte un titre descriptif (70 caractères au plus), une description, l'adresse canonique, les `hreflang`, les balises Open Graph avec l'image de partage, et des données structurées schema.org : éditeur, site, page, plus l'application et la FAQ sur l'accueil.
7. **Chaque page a une version Markdown**, à la même adresse suivie de `.md`, annoncée dans l'en-tête. `llms.txt` résume le site pour les assistants (format de llmstxt.org, version 2 : chaque page y renvoie par `rel="describedby"`) et `llms-full.txt` contient tout le texte. Les faits de `llms.txt` sont écrits à la main dans `src/llms.mjs` : on les relit quand une page change. À savoir : en novembre 2026, aucun grand assistant ne dit lire `llms.txt`, et Google dit l'ignorer. Il coûte peu, on n'en attend pas de miracle.
8. **`robots.txt` laisse tout lire**, aux moteurs comme aux assistants, et le dit (`Content-Signal`, recherche, réponses et entraînement autorisés). `sitemap.xml` liste chaque page avec sa date. Après une mise en ligne qui change un texte, `node src/indexnow.mjs` annonce les pages à Bing et aux autres moteurs du protocole IndexNow : c'est une requête vers l'extérieur, lancée à la main, jamais sans accord.
9. **Chaque page est datée.** La date (`updated`, dans son fichier de `src/pages/`) s'affiche en pied de page et part dans le plan du site : on la change quand le texte change.
10. **On cite la source.** Un texte de loi ou un service officiel nommé dans la page porte un lien vers lui. C'est un lien, pas une ressource chargée : le principe 7 reste entier.

Le build contrôle ce qui peut l'être : mêmes clés dans les deux langues, pas de point-virgule, un seul `h1`, liens internes et ancres valides, données structurées lisibles, longueur des titres et des descriptions.

## Accessibilité

- Zones cliquables de 44 px au moins, en largeur et en hauteur : boutons, sélecteurs de langue et de thème, liens de la barre du haut, du sommaire et du pied de page. Quand le dessin doit rester fin, la zone de clic dépasse le dessin (remplissage compensé par une marge négative, ou fond tracé en retrait). Seule exception : un lien placé dans une phrase. Mesuré le 22 novembre 2026 sur les quatre pages en ligne, à 320, 375 et 1200 px de large.
- Focus visible : contour bleu de 3 px sur les boutons, liens et questions.
- Contraste du texte : au moins 4,5 pour 1, dans les deux thèmes. Mesuré le 22 novembre 2026 sur toutes les pages, thème clair et thème sombre : tout le texte passe. Le couple le plus faible est le rouge d'erreur sur son fond teinté en thème sombre (4,8 pour 1). Le filigrane dessiné sur les documents d'exemple est un décor, il n'est pas concerné. Un nouveau couple de couleurs est mesuré avant d'être utilisé.
- Aucun défilement horizontal, du téléphone à l'écran large.
- Les images dessinées ont un texte de remplacement ; ce qui est décoratif est caché aux lecteurs d'écran.

## Règles de code

- **Les pages sont écrites par `build.mjs` à partir de `src/`** : `node build.mjs`. Aucune dépendance, Node suffit. Ce que le build écrit (`*.html`, `*.html.md`, `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`) est commité, car GitHub Pages publie `main` tel quel. **On ne modifie jamais à la main une page écrite par le build** : on change `src/`, puis on relance. `node build.mjs --check` échoue si une page n'est pas à jour.
- CSS et scripts sont écrits à la main : `site.css`, `site.js` (les comportements) et `theme.js` (le thème, chargé avant l'affichage).
- **Une seule feuille de style**, `site.css`. Pas de bloc `<style>` ni d'attribut `style` dans les pages, sauf un réglage ponctuel de mise en page.
- **Aucune ressource externe** : ni police, ni script, ni image depuis un autre domaine.
- Tous les chemins partent de la racine (`/site.css`, `/en/`), pour valoir aussi sous `/en/` et sur la page 404.
- Les points de rupture sont ceux de `site.css` : 1 040, 980, 820, 700, 680, 560 et 380 px. On n'en ajoute pas sans raison.
- Quand `site.css`, `site.js` ou `theme.js` change, on augmente `assets` dans `src/site.mjs` : les pages les appellent avec `?v=N`, pour ne pas tomber sur un fichier en cache.
- **À chaque version publiée de l'application** : changer `release` dans `src/site.mjs`, puis relancer le build. Le numéro s'affiche sous le bouton de téléchargement.
- Un changement se vérifie dans le navigateur avant publication : clair et sombre, ordinateur et téléphone, français et anglais.
- Rien n'est mis en ligne sans accord explicite.
