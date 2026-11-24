/* Les guides, dans l'ordre où la page « Guides » les affiche.
   Pour en ajouter un : un fichier dans ce dossier, sur le modèle des autres, et une ligne ci-dessous. */
import documents from "./documents.mjs";
import interdits from "./interdits.mjs";
import rib from "./rib.mjs";
import garant from "./garant.mjs";
import etranger from "./etranger.mjs";
import filigrane from "./filigrane.mjs";
import masquer from "./masquer.mjs";
import caviarder from "./caviarder.mjs";
import escroc from "./escroc.mjs";

export const GUIDES = [documents, interdits, rib, garant, etranger, filigrane, masquer, caviarder, escroc];
