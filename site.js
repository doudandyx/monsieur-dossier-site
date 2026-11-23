/* Comportements communs aux pages. Tout le texte des pages est dans le HTML : rien n'est écrit ici, sauf la
   proposition de l'autre langue, dont les mots viennent des attributs de <body>.
   Chargé avec « defer » : le document est lu quand ce fichier s'exécute. Rien n'est envoyé. */
(function () {
  var root = document.documentElement, here = root.lang === "en" ? "en" : "fr";
  var LANG_KEY = "monsieurdossier-site-lang";
  function store(v) { try { localStorage.setItem(LANG_KEY, v); } catch (e) {} }
  function stored() { try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; } }

  /* Barre du haut : un filet apparaît au défilement. */
  var nav = document.getElementById("nav");
  if (nav) addEventListener("scroll", function () { nav.classList.toggle("scrolled", scrollY > 8); }, { passive: true });

  /* Langue. Chaque langue a sa propre adresse : la page n'en change jamais d'elle-même.
     Le choix du visiteur est gardé dans le navigateur, et l'ancre en cours suit le changement de langue. */
  var langLinks = document.querySelectorAll(".lang a[hreflang]");
  langLinks.forEach(function (a) {
    a.addEventListener("click", function () {
      store(a.hreflang);
      if (location.hash) a.href = a.href.split("#")[0] + location.hash;
    });
  });

  /* Si la langue du navigateur n'est pas celle de la page, et que le visiteur n'a rien choisi,
     une pastille propose l'autre langue. Elle ne redirige pas. */
  (function offer() {
    if (stored()) return;
    var wants = (navigator.language || "").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
    if (wants === here) return;
    var other = document.querySelector('.lang a[hreflang="' + wants + '"]');
    var link = document.body.dataset.offerLink, close = document.body.dataset.offerClose;
    if (!other || !link) return;
    var bar = document.createElement("div");
    bar.className = "langbar"; bar.lang = wants;
    var a = document.createElement("a");
    a.href = other.getAttribute("href") + location.hash; a.hreflang = wants; a.textContent = link;
    a.addEventListener("click", function () { store(wants); });
    var x = document.createElement("button");
    x.type = "button"; x.textContent = "×"; x.setAttribute("aria-label", close);
    x.addEventListener("click", function () { store(here); bar.remove(); });
    bar.appendChild(a); bar.appendChild(x);
    document.body.appendChild(bar);
  })();

  /* Accueil : le document d'exemple s'affiche en clair, puis se protège une fois.
     Les masques glissent, le filigrane et le tampon suivent. */
  var sheet = document.getElementById("sheet"), demo = document.getElementById("demo");
  if (sheet && demo) {
    var before = document.getElementById("bBefore"), after = document.getElementById("bAfter");
    var setOn = function (on) {
      sheet.classList.toggle("on", on); demo.classList.toggle("on", on);
      before.setAttribute("aria-pressed", String(!on));
      after.setAttribute("aria-pressed", String(on));
    };
    before.addEventListener("click", function () { setOn(false); });
    after.addEventListener("click", function () { setOn(true); });
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setOn(true);
    else { setOn(false); setTimeout(function () { setOn(true); }, 900); }
  }

  /* Contact : copie de l'adresse. */
  var copyBtn = document.getElementById("copyBtn");
  if (copyBtn && navigator.clipboard) {
    copyBtn.hidden = false;
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(copyBtn.dataset.email).then(function () {
        copyBtn.textContent = copyBtn.dataset.copied;
        setTimeout(function () { copyBtn.textContent = copyBtn.dataset.copy; }, 2500);
      }, function () {});
    });
  }

  /* Contact : envoi du formulaire, quand la page en a un (SITE.formEndpoint dans src/site.mjs). */
  var form = document.getElementById("form");
  if (form) {
    var err = document.getElementById("err"), sendBtn = document.getElementById("sendBtn"), done = document.getElementById("done");
    var d = form.dataset, sending = false;
    var showErr = function (key) {
      err.textContent = ""; err.hidden = !key;
      if (!key) return;
      err.appendChild(document.createTextNode(d[key]));
      if (key === "fail") {
        err.appendChild(document.createTextNode(d.failMail));
        var m = document.createElement("a"); m.href = "mailto:" + d.email; m.textContent = d.email; err.appendChild(m);
        err.appendChild(document.createTextNode("."));
      }
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (sending) return;
      var msg = form.elements.message, em = form.elements.email;
      if (!msg.value.trim()) { showErr("needMsg"); msg.focus(); return; }
      if (em.value.trim() && !em.checkValidity()) { showErr("badMail"); em.focus(); return; }
      showErr(null); sending = true; sendBtn.disabled = true; sendBtn.textContent = d.sending;
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) { return r.ok; }, function () { return false; })
        .then(function (ok) {
          sending = false; sendBtn.disabled = false; sendBtn.textContent = d.send;
          if (ok) { form.hidden = true; done.hidden = false; done.focus(); } else showErr("fail");
        });
    });
  }
})();
