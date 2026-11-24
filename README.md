# Monsieur Dossier — site

Site de [monsieurdossier.com](https://monsieurdossier.com), publié avec GitHub Pages depuis la branche `main`. Les règles de design et de code sont dans `DESIGN.md`.

## Modifier le site

Les pages sont écrites par un script, à partir des fichiers de `src/`. **On ne modifie pas une page `.html` à la main.**

```bash
node build.mjs
```

Le script écrit les pages et les contrôle (liens, textes des deux langues, point-virgule, données structurées). Il n'a aucune dépendance : Node suffit. `node build.mjs --check` n'écrit rien et échoue si une page n'est pas à jour.

| Pour changer | Fichier |
|---|---|
| Un texte | `src/i18n/` (un fichier par page, français et anglais), `src/shared.mjs` pour le pied de page |
| La structure d'une page | `src/pages/` |
| L'en-tête, la barre du haut, le pied de page | `src/layout.mjs` |
| La version de l'app, le lien de téléchargement, l'adresse de contact | `src/site.mjs` |
| Un guide | `src/guides/` (un fichier par guide, les deux langues), et `src/guides/index.mjs` pour l'ordre |
| La mise en page des guides | `src/pages/guide.mjs` |
| Le résumé pour les assistants IA (`llms.txt`) | `src/llms.mjs` |
| Les styles, les comportements | `site.css`, `site.js`, `theme.js` (écrits à la main) |

## À chaque version de l'application

1. Publier la version dans les *Releases* de ce dépôt, avec le fichier `MonsieurDossier.dmg`. Le bouton du site télécharge toujours la dernière.
2. Changer `release` (numéro et date) dans `src/site.mjs`.
3. Lancer `node build.mjs`, puis commiter et pousser.

## Après une mise en ligne

Quand un texte a changé, on peut annoncer les pages à Bing et aux autres moteurs du protocole IndexNow (pas Google) :

```bash
node src/indexnow.mjs
```

La commande envoie les adresses de `sitemap.xml` à `api.indexnow.org`. C'est la seule requête que ce dépôt fait vers l'extérieur. `--dry` affiche l'envoi sans l'envoyer. Le fichier de la clé (32 caractères, `.txt`, à la racine) est écrit par le build et doit être en ligne avant l'envoi.

## Ce que contient le dépôt

- `index.html`, `fonctionnalites.html`, `dossierfacile.html`, `contact.html` : les pages en français. `en/` : les mêmes en anglais. `404.html` : la page introuvable. **Écrites par le build.**
- `guides/` et `en/guides/` : les guides, une question par page, et leur liste. **Écrits par le build.** Les règles d'écriture sont dans `DESIGN.md`, section « Guides ».
- `*.html.md` : la version Markdown de chaque page, pour les assistants IA. `llms.txt` et `llms-full.txt` : le résumé et le texte complet du site. `sitemap.xml`, `robots.txt`, le fichier de la clé IndexNow. **Écrits par le build.**
- `src/`, `build.mjs` : les sources et le script.
- `site.css`, `site.js`, `theme.js` : la feuille de style et les scripts, communs à toutes les pages.
- `fonts/` : les polices, servies par le site (Bricolage Grotesque, Inter, JetBrains Mono, licence OFL). Aucun appel à Google Fonts.
- `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-512.png` : les icônes. `og-fr.png`, `og-en.png` : l'image affichée quand un lien vers le site est partagé.
- `CNAME` : le nom de domaine.

## Images

Les icônes sont dessinées par `src/icons.py` (Pillow) à partir du symbole de la marque :

```bash
python3 src/icons.py
```

Les images de partage sont des captures de `src/og.html`, en 1200 × 630, prises avec Chrome pendant que le site est servi en local (remplacer le port et la langue) :

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1200,630 --screenshot=og-fr.png "http://127.0.0.1:8793/src/og.html?lang=fr"
```
