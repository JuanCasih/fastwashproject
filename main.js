(function () {
  "use strict";

  var data = window.__BRAND__ || {};
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };
  var escHTML = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "]", e); }
  }
  function digitsOnly(s) { return String(s || "").replace(/[^0-9]/g, ""); }

  /* ---------- Mounts (idempotent) ---------- */

  function mountHero() {
    var h = data.hero;
    if (!h) return;
    var title = $("[data-hero-title]");
    if (title && !title.textContent.trim() && h.titleLines) {
      title.innerHTML = h.titleLines.map(escHTML).join("<br>");
    }
    var sub = $("[data-hero-sub]");
    if (sub && !sub.textContent.trim()) sub.textContent = h.sub;
    var secondary = $("[data-hero-cta-secondary]");
    if (secondary && !secondary.textContent.trim()) secondary.textContent = h.ctaSecondary;

    var stats = $("[data-hero-stats]");
    if (stats && stats.children.length === 0 && h.stats) {
      stats.innerHTML = h.stats.map(function (s) {
        var prefix = s.prefix ? '<span class="hero-stat-prefix">' + escHTML(s.prefix) + '</span> ' : "";
        return '<div class="hero-stat reveal">' +
          '<span class="hero-stat-value">' + prefix + escHTML(s.value) + '</span>' +
          '<span class="hero-stat-unit">' + escHTML(s.unit) + '</span>' +
          '</div>';
      }).join("");
    }
  }

  function mountMarquee() {
    var track = $("[data-marquee]");
    if (!track || track.children.length > 0 || !data.marquee) return;
    var items = data.marquee.concat(data.marquee).map(function (t) {
      return "<span>" + escHTML(t) + "</span>";
    }).join("");
    track.innerHTML = items;
  }

  function mountOportunidad() {
    var o = data.oportunidad;
    if (!o) return;
    var kicker = $("[data-oportunidad-kicker]");
    if (kicker && !kicker.textContent.trim()) kicker.textContent = o.kicker;
    var title = $("[data-oportunidad-title]");
    if (title && !title.textContent.trim()) title.textContent = o.title;

    var parrafos = $("[data-oportunidad-parrafos]");
    if (parrafos && parrafos.children.length === 0 && o.parrafos) {
      parrafos.innerHTML = o.parrafos.map(function (p, i) {
        return '<p class="section-lede reveal"' + (i > 0 ? ' style="margin-top:1rem;"' : "") + '>' + escHTML(p) + '</p>';
      }).join("");
    }

    var perfilesTitle = $("[data-oportunidad-perfiles-title]");
    if (perfilesTitle && !perfilesTitle.textContent.trim()) perfilesTitle.textContent = o.perfilesTitle;

    var perfiles = $("[data-oportunidad-perfiles]");
    if (perfiles && perfiles.children.length === 0 && o.perfiles) {
      perfiles.innerHTML = o.perfiles.map(function (p) {
        return '<article class="benefit-card reveal"><h3 class="benefit-title">' + escHTML(p) + '</h3></article>';
      }).join("");
    }
  }

  function mountCombo() {
    var c = data.combo;
    if (!c) return;
    var kicker = $("[data-combo-kicker]");
    if (kicker && !kicker.textContent.trim()) kicker.textContent = c.kicker;
    var title = $("[data-combo-title]");
    if (title && !title.textContent.trim()) title.textContent = c.title;
    var intro = $("[data-combo-intro]");
    if (intro && !intro.textContent.trim()) intro.textContent = c.intro;

    var maquinas = $("[data-combo-maquinas]");
    if (maquinas && maquinas.children.length === 0 && c.maquinas) {
      maquinas.innerHTML = c.maquinas.map(function (m) {
        return '<article class="combo-card reveal">' +
          '<span class="combo-card-name">' + escHTML(m.nombre) + '</span>' +
          '<h3 class="combo-card-role">' + escHTML(m.rol) + '</h3>' +
          '<p class="combo-card-desc">' + escHTML(m.desc) + '</p>' +
          '</article>';
      }).join("");
    }

    var specsTitle = $("[data-combo-specs-title]");
    if (specsTitle && !specsTitle.textContent.trim()) specsTitle.textContent = c.tt303SpecsTitle;

    var specs = $("[data-combo-specs]");
    if (specs && specs.children.length === 0 && c.tt303Specs) {
      specs.innerHTML = c.tt303Specs.map(function (s) {
        return '<div class="spec-row reveal">' +
          '<span class="spec-label">' + escHTML(s.label) + '</span>' +
          '<span class="spec-value">' + escHTML(s.value) + '</span>' +
          '</div>';
      }).join("");
    }
  }

  function mountComoFunciona() {
    var cf = data.comoFunciona;
    if (!cf) return;
    var kicker = $("[data-como-funciona-kicker]");
    if (kicker && !kicker.textContent.trim()) kicker.textContent = cf.kicker;
    var title = $("[data-como-funciona-title]");
    if (title && !title.textContent.trim()) title.textContent = cf.title;

    var pasos = $("[data-como-funciona-pasos]");
    if (pasos && pasos.children.length === 0 && cf.pasos) {
      pasos.innerHTML = cf.pasos.map(function (p) {
        return '<article class="cycle-card reveal">' +
          '<span class="cycle-n">' + escHTML(p.n) + '</span>' +
          '<h3 class="cycle-title">' + escHTML(p.title) + '</h3>' +
          '<p class="cycle-desc">' + escHTML(p.desc) + '</p>' +
          '</article>';
      }).join("");
    }

    var featuresTitle = $("[data-features-title]");
    if (featuresTitle && !featuresTitle.textContent.trim()) featuresTitle.textContent = cf.featuresTitle;
    var featuresLede = $("[data-features-lede]");
    if (featuresLede && !featuresLede.textContent.trim()) featuresLede.textContent = cf.featuresLede;

    var features = $("[data-features]");
    if (features && features.children.length === 0 && cf.features) {
      features.innerHTML = cf.features.map(function (f) {
        return '<article class="benefit-card reveal">' +
          '<h3 class="benefit-title">' + escHTML(f.title) + '</h3>' +
          '<p class="benefit-desc">' + escHTML(f.desc) + '</p>' +
          '</article>';
      }).join("");
    }
  }

  function mountModos() {
    var m = data.modos;
    if (!m) return;
    var kicker = $("[data-modos-kicker]");
    if (kicker && !kicker.textContent.trim()) kicker.textContent = m.kicker;
    var title = $("[data-modos-title]");
    if (title && !title.textContent.trim()) title.textContent = m.title;
    var lede = $("[data-modos-lede]");
    if (lede && !lede.textContent.trim()) lede.textContent = m.lede;

    var table = $("[data-modos-tabla]");
    var tbody = table ? $("tbody", table) : null;
    if (tbody && tbody.children.length === 0 && m.tabla) {
      tbody.innerHTML = m.tabla.map(function (r) {
        return "<tr><td>" + escHTML(r.modo) + "</td><td>" + escHTML(r.incluye) + "</td><td>" + escHTML(r.tiempo) + "</td></tr>";
      }).join("");
    }
  }

  function mountNumeros() {
    var n = data.numeros;
    if (!n) return;
    var kicker = $("[data-numeros-kicker]");
    if (kicker && !kicker.textContent.trim()) kicker.textContent = n.kicker;
    var title = $("[data-numeros-title]");
    if (title && !title.textContent.trim()) title.textContent = n.title;
    var consumoTitle = $("[data-consumo-title]");
    if (consumoTitle && !consumoTitle.textContent.trim()) consumoTitle.textContent = n.consumoTitle;

    var table = $("[data-consumo-tabla]");
    var tbody = table ? $("tbody", table) : null;
    if (tbody && tbody.children.length === 0 && n.consumo) {
      tbody.innerHTML = n.consumo.map(function (r) {
        return "<tr><td>" + escHTML(r.label) + "</td><td>" + escHTML(r.value) + "</td></tr>";
      }).join("");
    }

    var calc = n.calculadora;
    if (!calc) return;
    var calcTitle = $("[data-calc-title]");
    if (calcTitle && !calcTitle.textContent.trim()) calcTitle.textContent = calc.title;
    var autosLabel = $("[data-calc-autos-label]");
    if (autosLabel && !autosLabel.textContent.trim()) autosLabel.textContent = calc.autosLabel;
    var precioLabel = $("[data-calc-precio-label]");
    if (precioLabel && !precioLabel.textContent.trim()) precioLabel.textContent = calc.precioLabel;
    var resultLabel = $("[data-calc-result-label]");
    if (resultLabel && !resultLabel.textContent.trim()) resultLabel.textContent = calc.resultLabel;
    var disclaimer = $("[data-calc-disclaimer]");
    if (disclaimer && !disclaimer.textContent.trim()) disclaimer.textContent = calc.disclaimer;

    var range = $("[data-calc-autos-range]");
    if (range && !range.dataset.mounted) {
      range.min = calc.autosMin;
      range.max = calc.autosMax;
      range.value = calc.autosDefault;
      range.dataset.mounted = "1";
    }
    var precioInput = $("[data-calc-precio-input]");
    if (precioInput && !precioInput.dataset.mounted) {
      precioInput.value = calc.precioDefault;
      precioInput.step = calc.precioStep;
      precioInput.min = "0";
      precioInput.dataset.mounted = "1";
    }
  }

  function mountControl() {
    var c = data.control;
    if (!c) return;
    var kicker = $("[data-control-kicker]");
    if (kicker && !kicker.textContent.trim()) kicker.textContent = c.kicker;
    var title = $("[data-control-title]");
    if (title && !title.textContent.trim()) title.textContent = c.title;
    var lede = $("[data-control-lede]");
    if (lede && !lede.textContent.trim()) lede.textContent = c.lede;

    var items = $("[data-control-items]");
    if (items && items.children.length === 0 && c.items) {
      items.innerHTML = c.items.map(function (it) {
        return '<div class="contact-card reveal">' +
          '<span class="label">' + escHTML(it.title) + '</span>' +
          '<span class="value">' + escHTML(it.desc) + '</span>' +
          '</div>';
      }).join("");
    }
  }

  function mountIncluye() {
    var i = data.incluye;
    if (!i) return;
    var kicker = $("[data-incluye-kicker]");
    if (kicker && !kicker.textContent.trim()) kicker.textContent = i.kicker;
    var title = $("[data-incluye-title]");
    if (title && !title.textContent.trim()) title.textContent = i.title;

    var items = $("[data-incluye-items]");
    if (items && items.children.length === 0 && i.items) {
      items.innerHTML = i.items.map(function (it) {
        return '<li class="include-item reveal">' + checkSVG() + '<span>' + escHTML(it) + '</span></li>';
      }).join("");
    }

    var panel = $("[data-personalizacion]");
    var p = i.personalizacion;
    if (panel && panel.children.length === 0 && p) {
      panel.innerHTML =
        '<h3 class="personalizacion-title">' + escHTML(p.title) + '</h3>' +
        '<p class="personalizacion-intro">' + escHTML(p.intro) + '</p>' +
        '<ul class="color-swatches">' +
        (p.colores || []).map(function (c) {
          return '<li class="color-swatch"><span class="color-dot" data-color="' + escHTML(c) + '"></span>' + escHTML(c) + '</li>';
        }).join("") +
        '</ul>' +
        '<p class="personalizacion-marca">' + escHTML(p.marca) + '</p>';
    }
  }

  function mountRespaldo() {
    var r = data.respaldo;
    if (!r) return;
    var kicker = $("[data-respaldo-kicker]");
    if (kicker && !kicker.textContent.trim()) kicker.textContent = r.kicker;
    var title = $("[data-respaldo-title]");
    if (title && !title.textContent.trim()) title.textContent = r.title;

    var comps = $("[data-respaldo-componentes]");
    if (comps && comps.children.length === 0 && r.componentes) {
      comps.innerHTML = r.componentes.map(function (c) {
        return '<div class="spec-row reveal">' +
          '<span class="spec-label">' + escHTML(c.label) + '</span>' +
          '<span class="spec-value">' + escHTML(c.value) + '</span>' +
          '</div>';
      }).join("");
    }

    var highlights = $("[data-respaldo-highlights]");
    if (highlights && highlights.children.length === 0 && r.highlights) {
      highlights.innerHTML = r.highlights.map(function (h) {
        return '<div class="brand-card reveal"><h3>' + escHTML(h.title) + '</h3><p>' + escHTML(h.desc) + '</p></div>';
      }).join("");
    }
  }

  function mountFAQ() {
    var f = data.faq;
    if (!f) return;
    var kicker = $("[data-faq-kicker]");
    if (kicker && !kicker.textContent.trim()) kicker.textContent = f.kicker;
    var title = $("[data-faq-title]");
    if (title && !title.textContent.trim()) title.textContent = f.title;

    var list = $("[data-faq-list]");
    if (list && list.children.length === 0 && f.items) {
      list.innerHTML = f.items.map(function (item, i) {
        return '<div class="faq-item reveal" data-faq-item>' +
          '<button type="button" class="faq-question" data-faq-toggle aria-expanded="false" aria-controls="faq-answer-' + i + '">' +
          '<span>' + escHTML(item.q) + '</span>' +
          '<span class="faq-icon" aria-hidden="true"></span>' +
          '</button>' +
          '<div class="faq-answer" id="faq-answer-' + i + '" data-faq-answer>' +
          '<div class="faq-answer-inner">' + item.a + '</div>' +
          '</div>' +
          '</div>';
      }).join("");
    }
  }

  function mountContacto() {
    var c = data.contacto;
    if (!c) return;
    var kicker = $("[data-contacto-kicker]");
    if (kicker && !kicker.textContent.trim()) kicker.textContent = c.kicker;
    var title = $("[data-contacto-title]");
    if (title && !title.textContent.trim()) title.textContent = c.title;
    var lede = $("[data-contacto-lede]");
    if (lede && !lede.textContent.trim()) lede.textContent = c.lede;
    var note = $("[data-contacto-whatsapp-note]");
    if (note && !note.textContent.trim()) note.textContent = c.whatsappNote;
  }

  function mountContact() {
    var c = data.contact || {};
    $$("[data-contact-whatsapp]").forEach(function (el) {
      if (c.whatsapp) {
        el.setAttribute("href", "https://wa.me/" + digitsOnly(c.whatsapp));
      } else {
        el.removeAttribute("href");
        el.setAttribute("aria-disabled", "true");
      }
    });
    var number = $("[data-contact-whatsapp-number]");
    if (number && !number.textContent.trim()) {
      number.textContent = c.whatsapp || c.whatsappDisplay || "WhatsApp (a confirmar)";
    }
  }

  function checkSVG() {
    return '<svg class="include-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  /* ---------- Calculator ---------- */

  function formatCurrency(n) {
    try {
      return "$" + Math.round(n).toLocaleString("es-AR");
    } catch (e) {
      return "$" + Math.round(n);
    }
  }

  function initCalculator() {
    var calc = $("[data-calculator]");
    if (!calc) return;
    var range = $("[data-calc-autos-range]", calc);
    var autosValue = $("[data-calc-autos-value]", calc);
    var precioInput = $("[data-calc-precio-input]", calc);
    var resultValue = $("[data-calc-result-value]", calc);
    if (!range || !precioInput || !resultValue) return;

    var recompute = function () {
      var autos = parseFloat(range.value) || 0;
      var precio = parseFloat(precioInput.value) || 0;
      if (autosValue) autosValue.textContent = String(Math.round(autos));
      var total = autos * precio * 30;
      resultValue.textContent = formatCurrency(total);
    };

    range.addEventListener("input", recompute);
    precioInput.addEventListener("input", recompute);
    recompute();
  }

  /* ---------- FAQ accordion ---------- */

  function initFAQ() {
    var items = $$("[data-faq-item]");
    if (!items.length) return;
    items.forEach(function (item) {
      var toggle = $("[data-faq-toggle]", item);
      if (!toggle) return;
      toggle.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");
        items.forEach(function (other) {
          other.classList.remove("is-open");
          var t = $("[data-faq-toggle]", other);
          if (t) t.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("is-open");
          toggle.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ---------- Contact form: builds a prefilled WhatsApp message ---------- */
  /* Sitio estático sin backend: no hay dónde enviar el formulario, así que
     al enviarlo armamos un mensaje de WhatsApp con los datos cargados y
     abrimos wa.me con ese texto, en vez de hacer un POST a un servidor. */

  function initContactForm() {
    var form = $("[data-contact-form]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var nombre = (fd.get("nombre") || "").toString().trim();
      var telefono = (fd.get("telefono") || "").toString().trim();
      var negocio = (fd.get("negocio") || "").toString().trim();
      var ubicacion = (fd.get("ubicacion") || "").toString().trim();

      var lines = [
        "Hola, quiero información sobre la M-LM535.",
        "Nombre: " + nombre,
        "Teléfono: " + telefono,
        "Tipo de negocio: " + negocio,
        "Ubicación: " + ubicacion
      ];
      var msg = encodeURIComponent(lines.join("\n"));
      var whatsapp = (data.contact || {}).whatsapp;
      if (!whatsapp) return;
      window.open("https://wa.me/" + digitsOnly(whatsapp) + "?text=" + msg, "_blank", "noopener");
    });
  }

  /* ---------- Nav ---------- */

  function initNav() {
    var nav = $("[data-nav]");
    if (!nav) return;
    var toggle = $("[data-nav-toggle]");
    var menu = $("[data-nav-menu]");

    var onScroll = function () {
      if (window.scrollY > 40) nav.classList.add("is-solid");
      else nav.classList.remove("is-solid");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        document.documentElement.classList.toggle("nav-open", open);
      });
      $$("a", menu).forEach(function (a) {
        a.addEventListener("click", function () {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          document.documentElement.classList.remove("nav-open");
        });
      });
    }
  }

  /* ---------- Smooth anchor scroll (native) ---------- */

  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var navEl = $("[data-nav]");
      var offset = navEl ? navEl.offsetHeight : 0;
      var top = el.getBoundingClientRect().top + window.scrollY - offset - 8;
      window.scrollTo({ top: top, behavior: reduced ? "auto" : "smooth" });
    });
  }

  /* ---------- Reveal on scroll ---------- */

  function initReveals() {
    var els = $$(".reveal");
    if (!els.length) return;

    if (typeof IntersectionObserver === "undefined") {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -2% 0px" });

    els.forEach(function (el) { io.observe(el); });

    setTimeout(function () {
      $$(".reveal:not(.is-visible)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
      });
    }, 6000);
  }

  /* ---------- Card tilt (desktop only) ---------- */

  function initTilt() {
    if (!fineHover) return;
    var cards = $$("[data-tilt]");
    cards.forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "perspective(700px) rotateX(" + (py * -6) + "deg) rotateY(" + (px * 6) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseout", function (e) {
        if (card.contains(e.relatedTarget)) return;
        card.style.transform = "";
      });
    });
  }

  /* ---------- GSAP stagger reveals ---------- */

  function initStaggerReveals() {
    $$("[data-stagger]").forEach(function (group) {
      var items = $$(".reveal", group);
      if (!items.length) return;
      gsap.set(items, { clearProps: "opacity,transform" });
      ScrollTrigger.batch(items, {
        start: "top 88%",
        onEnter: function (batch) {
          gsap.fromTo(batch, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" });
          batch.forEach(function (el) { el.classList.add("is-visible"); });
        }
      });
    });
  }

  /* ---------- Boot ---------- */

  function boot() {
    safe(mountHero, "mountHero");
    safe(mountMarquee, "mountMarquee");
    safe(mountOportunidad, "mountOportunidad");
    safe(mountCombo, "mountCombo");
    safe(mountComoFunciona, "mountComoFunciona");
    safe(mountModos, "mountModos");
    safe(mountNumeros, "mountNumeros");
    safe(mountControl, "mountControl");
    safe(mountIncluye, "mountIncluye");
    safe(mountRespaldo, "mountRespaldo");
    safe(mountFAQ, "mountFAQ");
    safe(mountContacto, "mountContacto");
    safe(mountContact, "mountContact");

    safe(initNav, "initNav");
    safe(initSmoothScroll, "initSmoothScroll");
    safe(initReveals, "initReveals");
    safe(initCalculator, "initCalculator");
    safe(initFAQ, "initFAQ");
    safe(initContactForm, "initContactForm");
    safe(initTilt, "initTilt");

    if (window.gsap && window.ScrollTrigger) {
      try { gsap.registerPlugin(ScrollTrigger); } catch (e) {}
      safe(initStaggerReveals, "initStaggerReveals");
    }

    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
