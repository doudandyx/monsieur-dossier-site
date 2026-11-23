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

| Page | Fichier | Rôle |
|---|---|---|
| Accueil | `index.html` | Ce que fait l'app, en une page, jusqu'au téléchargement |
| Fonctionnalités | `fonctionnalites.html` | Le détail, étape par étape, avec une illustration par section |
| DossierFacile | `dossierfacile.html` | Ce que fait chacun des deux services, et comment les utiliser ensemble |
| Contact | `contact.html` | Formulaire d'avis et de signalement |
| Mentions légales | `mentions-legales.html` | Prête, **non publiée** tant que les informations du Kbis manquent |

**Ordre de l'accueil.** Barre du haut, titre et bouton, document d'exemple, « Le temps gagné » (six cartes), « Comment ça marche » (quatre étapes), « Le problème », « Vous arrivez en France ? », « Confidentialité » (bande sombre), « Ce que dit la loi », téléchargement (bande bleue), questions fréquentes, pied de page.

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
| `.prob` | 3, puis 1 sous 820 px | `--paper` | Le temps gagné, le problème |
| `.prob.four`, `.legal` | 2, puis 1 sous 820 px | `--paper` ; vert et rouge doux pour la loi | Arrivée en France, pièces autorisées et interdites |
| `.steps` | 4, puis 2 sous 980 px, puis 1 sous 560 px | `--tint`, numéro en bleu | Comment ça marche |
| `.proofs` | comme `.steps` | blanc à 8 % | Confidentialité, sur la bande sombre |

**Bandes (`.band`).** Grise par défaut ; `.deep` pour la confidentialité ; `.blue` pour le téléchargement. Une seule bande bleue et une seule bande sombre par page.

**Document d'exemple (`.stage`, `.sheet`).** Une feuille blanche sur le fond bleu. Elle reste blanche dans les deux thèmes, pour que les masques noirs ressortent : ses couleurs sont fixées sur `.sheet`. Le bouton « Original / Copie » pose les masques, le filigrane et le tampon.

**Tampon (`.seal`).** Disque blanc, texte bleu en cercle. Un seul par page, sur le document d'exemple.

**Illustrations (`.shot`, `.mk`).** Sur la page Fonctionnalités : une carte blanche sur le fond bleu, qui dessine en HTML un fragment de l'application. Comme la feuille, elle reste claire dans les deux thèmes. Briques disponibles : ligne (`.row`), étiquette (`.tag`, `.ok`, `.no`), fichier et dossier (`.file`, `.dir`), barre de masque (`.bar`), pages (`.pg`), champ (`.field`), aperçu de filigrane (`.prev`), terminal (`.mk.term`). Chaque illustration porte un `aria-label` qui la décrit. La page dit que ce sont des illustrations, pas des captures.

**Tableau (`.cmp`).** Page DossierFacile seulement. Trois colonnes ; sous 680 px, chaque ligne s'empile et reprend le nom de la colonne.

**Questions fréquentes (`details`).** Une ligne par question, un « + » qui tourne à l'ouverture.

**Sommaire en pastilles (`.toc`).** Page Fonctionnalités.

**Pied de page.** Une ligne : la signature, la mention d'indépendance, le lien de contact.

## Mouvement

Discret, et toujours au service du document.

- À l'ouverture de l'accueil, le document s'affiche en clair, puis se protège une fois, après 0,9 s : les masques glissent de gauche à droite (0,5 s), le filigrane apparaît, le tampon se pose.
- Le « + » de la FAQ tourne ; les boutons changent de fond au survol.
- Rien d'autre ne bouge. Pas d'apparition au défilement, pas de parallaxe.
- Avec `prefers-reduced-motion`, toutes les transitions sont coupées et le document s'affiche déjà protégé.

## Langue

Français et anglais sur chaque page. La langue suit le navigateur ; sans indication, le français. Le choix du visiteur est gardé dans le navigateur (`monsieurdossier-site-lang`).

Chaque page porte ses textes dans un dictionnaire `T = { fr, en }`, dans son propre `<script>`. Un élément marqué `data-i="clé"` reçoit le texte de la clé. **Aucune phrase n'est écrite dans le HTML** (seuls y figurent le nom de la marque, « FR / EN » et les valeurs du document d'exemple) : un texte ajouté l'est dans les deux langues.

**Pas de point-virgule dans les textes du site**, en français comme en anglais (règle posée par Tommy le 23 novembre 2026 : il donne au texte un air écrit par une IA). On coupe en deux phrases, ou on relie par une virgule et « et ». Avant de publier, chercher ` ;` et `; ` dans les chaînes des dictionnaires `T`. La règle vaut pour le texte lu par le visiteur, pas pour le code ni pour ce fichier.

## Accessibilité

- Zones cliquables de 44 px au moins, en largeur et en hauteur : boutons, sélecteurs de langue et de thème, liens de la barre du haut, du sommaire et du pied de page. Quand le dessin doit rester fin, la zone de clic dépasse le dessin (remplissage compensé par une marge négative, ou fond tracé en retrait). Seule exception : un lien placé dans une phrase. Mesuré le 22 novembre 2026 sur les quatre pages en ligne, à 320, 375 et 1200 px de large.
- Focus visible : contour bleu de 3 px sur les boutons, liens et questions.
- Contraste du texte : au moins 4,5 pour 1, dans les deux thèmes. Mesuré le 22 novembre 2026 sur toutes les pages, thème clair et thème sombre : tout le texte passe. Le couple le plus faible est le rouge d'erreur sur son fond teinté en thème sombre (4,8 pour 1). Le filigrane dessiné sur les documents d'exemple est un décor, il n'est pas concerné. Un nouveau couple de couleurs est mesuré avant d'être utilisé.
- Aucun défilement horizontal, du téléphone à l'écran large.
- Les images dessinées ont un texte de remplacement ; ce qui est décoratif est caché aux lecteurs d'écran.

## Règles de code

- HTML et CSS écrits à la main, **sans étape de build**. Le site est publié tel quel par GitHub Pages depuis `main`.
- **Une seule feuille de style**, `site.css`. Pas de bloc `<style>` ni d'attribut `style` dans les pages, sauf un réglage ponctuel de mise en page.
- **Aucune ressource externe** : ni police, ni script, ni image depuis un autre domaine.
- Les points de rupture sont ceux de `site.css` : 1 040, 980, 820, 700, 680, 560 et 380 px. On n'en ajoute pas sans raison.
- Une page dont les styles changent appelle `site.css?v=N` avec un numéro augmenté, pour ne pas tomber sur une feuille en cache.
- Un changement se vérifie dans le navigateur avant publication : clair et sombre, ordinateur et téléphone, français et anglais.
- Rien n'est mis en ligne sans accord explicite.
