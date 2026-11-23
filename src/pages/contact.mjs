/* Contact : l'adresse e-mail, et un formulaire quand SITE.formEndpoint est renseigné. */

import { SITE } from "../site.mjs";
import { T } from "../i18n/contact.mjs";
import { nav, footer, baseGraph, mdHeader } from "../layout.mjs";

export const page = { id: "contact", file: { fr: "contact.html", en: "en/contact.html" }, updated: "2026-11-23", T };

export function body(c) {
  const { L, t } = c;
  const hasForm = !!SITE.formEndpoint;
  const mailto = `mailto:${SITE.email}`;
  const subject = encodeURIComponent(c.p(L.subject));

  /* Le formulaire n'est écrit dans la page que s'il peut envoyer : sinon un robot y lirait des champs sans effet. */
  const form = !hasForm ? "" : `
    <form class="card" id="form" novalidate action="${SITE.formEndpoint}" method="post"
      data-send="${c.a(L.send)}" data-sending="${c.a(L.sending)}" data-need-msg="${c.a(L.needMsg)}" data-bad-mail="${c.a(L.badMail)}" data-fail="${c.a(L.fail)}" data-fail-mail="${c.a(L.failMail)}" data-email="${SITE.email}">
      <fieldset class="field">
        <legend>${t("kL")}</legend>
        <div class="kinds">
          <label><input type="radio" name="type" value="avis" checked> <span>${t("k1")}</span></label>
          <label><input type="radio" name="type" value="bug"> <span>${t("k2")}</span></label>
          <label><input type="radio" name="type" value="question"> <span>${t("k3")}</span></label>
        </div>
      </fieldset>
      <div class="field">
        <label for="msg">${t("mL")}</label>
        <textarea id="msg" name="message" required maxlength="5000" aria-describedby="msgHint"></textarea>
        <span class="hint" id="msgHint">${t("mHint")}</span>
      </div>
      <div class="field">
        <label for="em">${t("eL")}</label>
        <input id="em" name="email" type="email" autocomplete="email" aria-describedby="emHint">
        <span class="hint" id="emHint">${t("eHint")}</span>
      </div>
      <div class="hp" aria-hidden="true"><label>Ne pas remplir <input name="_gotcha" tabindex="-1" autocomplete="off"></label></div>
      <div class="send">
        <button type="submit" class="btn primary" id="sendBtn">${t("send")}</button>
        <span class="err" id="err" role="alert" hidden></span>
      </div>
      <p class="fine">${t("fine")}</p>
    </form>

    <div class="done" id="done" role="status" tabindex="-1" hidden>
      <h2>${t("okH")}</h2>
      <p>${t("okP")}</p>
    </div>`;

  /* Sans formulaire, l'e-mail est le moyen principal : bouton, copie de l'adresse et conseils. */
  const mailExtras = hasForm ? "" : `
      <div class="mailrow">
        <a class="btn primary" href="${mailto}?subject=${subject}">${t("mailBtn")}</a>
        <button type="button" class="btn" id="copyBtn" data-email="${SITE.email}" data-copy="${c.a(L.copy)}" data-copied="${c.a(L.copied)}" hidden>${t("copy")}</button>
      </div>
      <p class="fine">${t("mailFine")}</p>`;

  return `${nav(c)}

<main class="page">
  <div class="wrap contact">
    <a class="back" href="${c.url("home")}">${t("back")}</a>
    <div class="head">
      <span class="eyebrow">${t("cEy")}</span>
      <h1>${t("cH")}</h1>
      <p>${t("cP")}</p>
    </div>

    <div class="warn"><div><b>${t("wT")}</b> <span>${t("wP")}</span></div></div>
${form}
    <div class="mail" id="mail">
      <p><span>${t(hasForm ? "mailForm" : "mailOnly")}</span> <a href="${mailto}">${SITE.email}</a></p>${mailExtras}
    </div>
  </div>
</main>

${footer(c, { contactLink: false })}`;
}

export function graph(c) {
  const { L, p } = c;
  const nodes = baseGraph(c, { title: p(L.title), description: p(L.desc) });
  nodes.find(n => n["@type"] === "WebPage")["@type"] = ["WebPage", "ContactPage"];
  nodes.find(n => n["@type"] === "Organization").contactPoint = { "@type": "ContactPoint", contactType: "customer support", email: SITE.email, availableLanguage: ["French", "English"] };
  return nodes;
}

export function markdown(c) {
  const { L, m, p } = c;
  return `${mdHeader(c, { title: p(L.title), description: p(L.desc) })}
## ${m(L.cH)}

${m(L.cP)}

**${m(L.wT)}** ${m(L.wP)}

${m(L.mailOnly)} [${SITE.email}](mailto:${SITE.email})

${m(L.mailFine)}

---

${m(L.foot1)} ${m(L.foot2)}
`;
}

export const meta = c => ({ title: c.p(c.L.title), description: c.p(c.L.desc) });
