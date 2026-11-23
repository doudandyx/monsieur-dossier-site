#!/usr/bin/env node
/* Annonce les pages du site à IndexNow (Bing, Yandex, Seznam, Naver, Yep, Amazon : pas Google).
   Bing sert aussi de base à Copilot. À lancer à la main, APRÈS une mise en ligne qui change un texte :

     node src/indexnow.mjs            envoie les adresses de sitemap.xml
     node src/indexnow.mjs --dry      affiche ce qui serait envoyé, sans rien envoyer

   C'est la seule requête que ce dépôt fait vers l'extérieur. Elle ne contient que des adresses publiques du site.
   Le fichier de la clé doit déjà être en ligne : le moteur le relit pour vérifier l'envoi. */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE } from "./site.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const urlList = [...fs.readFileSync(path.join(root, "sitemap.xml"), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const body = { host: new URL(SITE.origin).host, key: SITE.indexNowKey, keyLocation: `${SITE.origin}/${SITE.indexNowKey}.txt`, urlList };

if (process.argv.includes("--dry")) { console.log(JSON.stringify(body, null, 2)); process.exit(0); }

const live = await fetch(body.keyLocation).then(r => r.ok ? r.text() : "", () => "");
if (live.trim() !== SITE.indexNowKey) { console.error(`✗ ${body.keyLocation} n'est pas en ligne : publier le site d'abord.`); process.exit(1); }

const r = await fetch("https://api.indexnow.org/indexnow", { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body: JSON.stringify(body) });
console.log(r.ok ? `✓ ${urlList.length} adresses annoncées (réponse ${r.status}).` : `✗ Réponse ${r.status} ${r.statusText}`);
process.exit(r.ok ? 0 : 1);
