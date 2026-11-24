/* Outils de texte du build.
   Les chaînes des dictionnaires sont du texte simple. Trois notations sont admises :
   [texte](adresse) pour un lien, *texte* pour une mise en valeur, **texte** pour un mot en gras.
   Une adresse « page:nom » ou « page:nom#ancre » désigne une page du site, dans la langue en cours. */

const NBSP = String.fromCharCode(160);   /* espace insécable */
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const STRONG = /\*\*([^*]+)\*\*/g;
const EM = /\*([^*]+)\*/g;

/* Typographie française : espace insécable avant ? ! : % » et après «. */
export function typo(s, lang) {
  if (lang !== "fr") return s;
  return s.replace(/ ([?!:%»])/g, NBSP + "$1").replace(/« /g, "«" + NBSP);
}

export const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* HTML : texte échappé, liens et mises en valeur traduits en balises. */
export function html(s, lang) {
  return esc(typo(s, lang)).replace(LINK, (m, t, u) => `<a href="${u}">${t}</a>`).replace(STRONG, "<strong>$1</strong>").replace(EM, "<em>$1</em>");
}

/* Texte brut : attributs, métadonnées, données structurées. */
export function plain(s, lang) {
  return typo(s, lang).replace(LINK, "$1").replace(STRONG, "$1").replace(EM, "$1");
}

/* Markdown : les liens et le gras restent, la mise en valeur disparaît. */
export function md(s, lang) {
  return typo(s, lang).replace(STRONG, "<b>$1</b>").replace(EM, "$1").replace(/<b>/g, "**").replace(/<\/b>/g, "**");
}

const MONTHS = {
  fr: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

/* « 2026-11-23 » devient « 23 novembre 2026 » ou « 23 November 2026 ». */
export function longDate(iso, lang) {
  const [y, m, d] = iso.split("-").map(Number);
  const day = lang === "fr" && d === 1 ? "1er" : String(d);
  return `${day} ${MONTHS[lang][m - 1]} ${y}`;
}

/* Texte lu par un visiteur ou un robot dans une page HTML : sans balises, sans scripts, entités décodées. */
export function visibleText(page) {
  return page
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
    .replace(/\s+/g, " ").trim();
}

/* Un titre repris en tête de phrase dans une version Markdown : il se termine par un point. */
export const dot = s => /[.?!…:]$/.test(s) ? s : s + ".";
