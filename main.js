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
      return "<span><span class=\"marquee-phrase\">" + escHTML(t.phrase) + "</span>" +
        "<span class=\"marquee-sep\" aria-hidden=\"true\">•</span>" +
        "<span class=\"marquee-stat\">" + escHTML(t.stat) + "</span></span>";
    }).join("");
    track.innerHTML = items;
  }

  function mountOportunidad() {
    var o = data.oportunidad;
    if (!o) return;
    var perfilesTitle = $("[data-oportunidad-perfiles-title]");
    if (perfilesTitle && !perfilesTitle.textContent.trim()) perfilesTitle.textContent = o.perfilesTitle;

    var perfiles = $("[data-oportunidad-perfiles]");
    if (perfiles && perfiles.children.length === 0 && o.perfiles) {
      perfiles.innerHTML = o.perfiles.map(function (p) {
        return '<article class="profile-card reveal">' +
          '<picture>' +
          '<source srcset="assets/img/' + escHTML(p.image) + '.webp" type="image/webp">' +
          '<img class="profile-card-img" src="assets/img/' + escHTML(p.image) + '.png" alt="' + escHTML(p.alt) + '" loading="lazy" width="900" height="600">' +
          '</picture>' +
          '<div class="profile-card-body">' +
          '<h3 class="profile-card-title">' + escHTML(p.title) + '</h3>' +
          '<p class="profile-card-hook">' + escHTML(p.hook) + '</p>' +
          '<p class="profile-card-desc">' + escHTML(p.desc) + '</p>' +
          '</div>' +
          '</article>';
      }).join("");
    }
  }

  function mountEquipo() {
    var e = data.equipo;
    if (!e) return;
    var title = $("[data-equipo-title]");
    if (title && !title.textContent.trim()) title.textContent = e.title;

    var diagramImg = $("[data-equipo-diagram-img]");
    if (diagramImg && !diagramImg.getAttribute("alt")) diagramImg.setAttribute("alt", e.diagramAlt);

    var datos = $("[data-equipo-datos]");
    if (datos && datos.children.length === 0 && e.datos) {
      datos.innerHTML = e.datos.map(function (d) {
        return '<div class="equipo-dato reveal">' +
          '<span class="equipo-dato-value">' + escHTML(d.value) + '</span>' +
          '<span class="equipo-dato-desc">' + escHTML(d.desc) + '</span>' +
          '</div>';
      }).join("");
    }

    var etapasSubtitle = $("[data-equipo-etapas-subtitle]");
    if (etapasSubtitle && !etapasSubtitle.textContent.trim()) etapasSubtitle.textContent = e.etapasSubtitle;

    var etapas = $("[data-equipo-etapas]");
    if (etapas && etapas.children.length === 0 && e.etapas) {
      etapas.innerHTML = e.etapas.map(function (s) {
        return '<article class="cycle-card reveal">' +
          '<span class="cycle-n">' + escHTML(s.n) + '</span>' +
          '<h4 class="cycle-title">' + escHTML(s.title) + '</h4>' +
          '<p class="cycle-desc">' + escHTML(s.desc) + '</p>' +
          '</article>';
      }).join("");
    }

    var etapasClosing = $("[data-equipo-etapas-closing]");
    if (etapasClosing && !etapasClosing.textContent.trim()) etapasClosing.textContent = e.etapasClosing;
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
  }

  function mountSoporte() {
    var s = data.soporte;
    if (!s) return;
    var title = $("[data-soporte-title]");
    if (title && !title.textContent.trim()) title.textContent = s.title;

    var items = $("[data-soporte-items]");
    if (items && items.children.length === 0 && s.items) {
      items.innerHTML = s.items.map(function (it) {
        return '<div class="brand-card reveal"><h3>' + escHTML(it.title) + '</h3><p>' + escHTML(it.desc) + '</p></div>';
      }).join("");
    }
  }

  function mountPrecios() {
    var p = data.precios;
    if (!p) return;
    var title = $("[data-precios-title]");
    if (title && !title.textContent.trim()) title.textContent = p.title;
    var value = $("[data-precios-value]");
    if (value && !value.textContent.trim()) value.textContent = p.value;
    var desc = $("[data-precios-desc]");
    if (desc && !desc.textContent.trim()) desc.textContent = p.desc;
    var plazoValue = $("[data-precios-plazo-value]");
    if (plazoValue && !plazoValue.textContent.trim()) plazoValue.textContent = p.plazoValue;
    var plazoDesc = $("[data-precios-plazo-desc]");
    if (plazoDesc && !plazoDesc.textContent.trim()) plazoDesc.textContent = p.plazoDesc;
    var closing = $("[data-precios-closing]");
    if (closing && !closing.textContent.trim()) closing.textContent = p.closing;
    var cta = $("[data-precios-cta]");
    if (cta && !cta.textContent.trim()) cta.textContent = p.ctaLabel;

    var timeline = $("[data-precios-timeline]");
    if (timeline && timeline.children.length === 0 && p.timeline) {
      timeline.innerHTML = p.timeline.map(function (t, i) {
        var step = '<div class="timeline-step reveal">' +
          '<span class="timeline-amount">' + escHTML(t.monto) + '</span>' +
          '<span class="timeline-label">' + escHTML(t.momento) + '</span>' +
          '</div>';
        var arrow = i < p.timeline.length - 1 ? '<span class="timeline-arrow" aria-hidden="true">' + arrowSVG() + '</span>' : "";
        return step + arrow;
      }).join("");
    }
  }

  function arrowSVG() {
    return '<svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">' +
      '<path d="M2 12H44M44 12L33 2M44 12L33 22" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>';
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
    safe(mountEquipo, "mountEquipo");
    safe(mountComoFunciona, "mountComoFunciona");
    safe(mountSoporte, "mountSoporte");
    safe(mountPrecios, "mountPrecios");
    safe(mountContact, "mountContact");

    safe(initNav, "initNav");
    safe(initSmoothScroll, "initSmoothScroll");
    safe(initReveals, "initReveals");
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
