/* Thème du site : clair, sombre ou celui du système. Le choix est gardé dans le navigateur, rien n'est envoyé.
   Chargé dans <head> pour appliquer le thème avant le premier affichage. */
(function () {
  var KEY = "monsieurdossier-site-theme", root = document.documentElement;
  var ICON = {
    light: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    dark: '<path d="M20.5 13.5A8.5 8.5 0 1 1 10.5 3.5a6.6 6.6 0 0 0 10 10z"/>',
    system: '<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'
  };
  var LABEL = {
    fr: { group: "Thème", light: "Thème clair", dark: "Thème sombre", system: "Thème du système" },
    en: { group: "Theme", light: "Light theme", dark: "Dark theme", system: "System theme" }
  };
  function get() {
    try { var v = localStorage.getItem(KEY); return v === "light" || v === "dark" ? v : "system"; } catch (e) { return "system"; }
  }
  function apply(v) {
    if (v === "system") root.removeAttribute("data-theme"); else root.setAttribute("data-theme", v);
    document.querySelectorAll(".theme button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.t === v)); });
  }
  function set(v) {
    try { if (v === "system") localStorage.removeItem(KEY); else localStorage.setItem(KEY, v); } catch (e) {}
    apply(v);
  }
  function build() {
    var el = document.createElement("div");
    el.className = "theme"; el.setAttribute("role", "group");
    ["light", "dark", "system"].forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button"; b.dataset.t = t;
      b.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[t] + "</svg>";
      el.appendChild(b);
    });
    return el;
  }
  function labels() {
    var L = LABEL[root.lang === "en" ? "en" : "fr"];
    document.querySelectorAll(".theme").forEach(function (g) { g.setAttribute("aria-label", L.group); });
    document.querySelectorAll(".theme button").forEach(function (b) { b.setAttribute("aria-label", L[b.dataset.t]); b.title = L[b.dataset.t]; });
  }
  apply(get());
  document.addEventListener("DOMContentLoaded", function () {
    var lang = document.querySelector("nav .lang");
    if (lang) lang.insertAdjacentElement("afterend", build());
    var foot = document.querySelector("footer .wrap");
    if (foot) { var f = build(); f.classList.add("in-footer"); foot.appendChild(f); }
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest(".theme button");
      if (b) set(b.dataset.t);
    });
    apply(get()); labels();
    new MutationObserver(labels).observe(root, { attributes: true, attributeFilter: ["lang"] });
  });
})();
