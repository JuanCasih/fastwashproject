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

  /* ---------- Mounts (idempotent) ---------- */

  function mountFlashStats() {
    var target = $("[data-flash-stats]");
    if (!target || target.children.length > 0 || !data.flashStats) return;
    target.innerHTML = data.flashStats.map(function (s) {
      return '<div class="flash-stat">' +
        '<span class="flash-stat-value">' + escHTML(s.value) + '<span class="flash-stat-unit">' + escHTML(s.unit) + '</span></span>' +
        '<span class="flash-stat-label">' + escHTML(s.label) + '</span>' +
        '</div>';
    }).join("");
  }

  function mountComparison() {
    var target = $("[data-comparison]");
    if (!target || target.children.length > 0 || !data.comparison) return;
    target.innerHTML = data.comparison.map(function (row) {
      return '<li class="compare-row reveal">' +
        '<span class="compare-old">' + escHTML(row.old) + '</span>' +
        '<span class="compare-arrow" aria-hidden="true">' + arrowSVG() + '</span>' +
        '<span class="compare-new">' + escHTML(row.neu) + '</span>' +
        '</li>';
    }).join("");
  }

  function mountCycle() {
    var target = $("[data-cycle]");
    if (!target || target.children.length > 0 || !data.cycleSteps) return;
    target.innerHTML = data.cycleSteps.map(function (s) {
      return '<article class="cycle-card reveal">' +
        '<span class="cycle-n">' + escHTML(s.n) + '</span>' +
        '<h3 class="cycle-title">' + escHTML(s.title) + '</h3>' +
        '<p class="cycle-desc">' + escHTML(s.desc) + '</p>' +
        '</article>';
    }).join("");
  }

  function mountSpecs() {
    var target = $("[data-specs]");
    if (!target || target.children.length > 0 || !data.specs) return;
    target.innerHTML = data.specs.map(function (s) {
      return '<div class="spec-row reveal">' +
        '<span class="spec-label">' + escHTML(s.label) + '</span>' +
        '<span class="spec-value">' + escHTML(s.value) + '</span>' +
        '</div>';
    }).join("");
  }

  function washStageMuteIcons() {
    return '<svg class="icon-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5 6 9H3v6h3l5 4V5Z" stroke-linejoin="round"/><path d="M16 9a3 3 0 0 1 0 6M18.5 6.5a7 7 0 0 1 0 11" stroke-linecap="round"/><path d="M2 2l20 20" stroke-linecap="round"/></svg>' +
      '<svg class="icon-unmuted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5 6 9H3v6h3l5 4V5Z" stroke-linejoin="round"/><path d="M16 9a3 3 0 0 1 0 6M18.5 6.5a7 7 0 0 1 0 11" stroke-linecap="round"/></svg>';
  }

  function mountWashStages() {
    var target = $("[data-wash-stages]");
    if (!target || target.children.length > 0 || !data.washStages) return;
    target.innerHTML = data.washStages.map(function (s) {
      return '<section class="wash-stage" data-wash-stage>' +
        '<video class="wash-stage-media" src="' + escHTML(s.video) + '" poster="' + escHTML(s.poster) + '" ' +
        'muted loop playsinline preload="metadata" data-wash-video></video>' +
        '<div class="wash-stage-scrim"></div>' +
        '<div class="wash-stage-indicator">' +
        '<span class="wash-stage-indicator-n">' + escHTML(s.n) + '</span>' +
        '<span class="wash-stage-indicator-name">' + escHTML(s.name) + '</span>' +
        '</div>' +
        '<button type="button" class="wash-stage-mute" data-wash-mute aria-label="Activar sonido">' +
        washStageMuteIcons() +
        '</button>' +
        '</section>';
    }).join("");
  }

  function mountBenefits() {
    var target = $("[data-benefits]");
    if (!target || target.children.length > 0 || !data.benefits) return;
    target.innerHTML = data.benefits.map(function (b, i) {
      return '<article class="benefit-card reveal">' +
        '<span class="benefit-n">' + String(i + 1).padStart(2, "0") + '</span>' +
        '<h3 class="benefit-title">' + escHTML(b.title) + '</h3>' +
        '<p class="benefit-desc">' + escHTML(b.desc) + '</p>' +
        '</article>';
    }).join("");
  }

  function mountMarket() {
    var target = $("[data-market-stats]");
    if (target && target.children.length === 0 && data.marketStats) {
      target.innerHTML = data.marketStats.map(function (s) {
        return '<div class="market-stat reveal">' +
          '<span class="market-stat-value">' + escHTML(s.value) + '</span>' +
          '<p class="market-stat-label">' + escHTML(s.label) + '</p>' +
          '<span class="market-stat-source">' + escHTML(s.source) + '</span>' +
          '</div>';
      }).join("");
    }
    var closing = $("[data-market-closing]");
    if (closing && !closing.textContent.trim() && data.marketClosing) {
      closing.textContent = data.marketClosing;
    }
  }

  function mountContact() {
    var c = data.contact || {};
    $$("[data-contact-whatsapp]").forEach(function (el) {
      if (c.whatsapp) {
        el.setAttribute("href", "https://wa.me/" + c.whatsapp.replace(/[^0-9]/g, ""));
        el.textContent = c.whatsapp;
      } else {
        el.removeAttribute("href");
        el.setAttribute("aria-disabled", "true");
        el.textContent = c.whatsappDisplay || "WhatsApp (a confirmar)";
      }
    });
    $$("[data-contact-email]").forEach(function (el) {
      if (c.email) {
        el.setAttribute("href", "mailto:" + c.email);
        el.textContent = c.email;
      } else {
        el.removeAttribute("href");
        el.setAttribute("aria-disabled", "true");
        el.textContent = c.emailDisplay || "email a confirmar";
      }
    });
  }

  function arrowSVG() {
    return '<svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">' +
      '<path d="M2 12H44M44 12L33 2M44 12L33 22" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>';
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

  /* ---------- Wash stages: full-bleed sequential video showcase ---------- */

  function initWashStages() {
    var stages = $$("[data-wash-stage]");
    if (!stages.length) return;

    stages.forEach(function (stage) {
      var video = $("[data-wash-video]", stage);
      var muteBtn = $("[data-wash-mute]", stage);
      if (muteBtn && video) {
        muteBtn.addEventListener("click", function () {
          video.muted = !video.muted;
          muteBtn.classList.toggle("is-unmuted", !video.muted);
          muteBtn.setAttribute("aria-label", video.muted ? "Activar sonido" : "Silenciar");
        });
      }
    });

    var reveal = function (stage) {
      stage.classList.add("is-visible");
    };

    if (typeof IntersectionObserver === "undefined") {
      stages.forEach(function (stage) {
        reveal(stage);
        var v = $("[data-wash-video]", stage);
        if (v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
      });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var stage = entry.target;
        var v = $("[data-wash-video]", stage);
        if (entry.isIntersecting) {
          reveal(stage);
          if (v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        } else if (v) {
          v.pause();
        }
      });
    }, { threshold: 0.35 });

    stages.forEach(function (stage) { io.observe(stage); });

    setTimeout(function () {
      stages.forEach(function (stage) {
        if (!stage.classList.contains("is-visible") && stage.getBoundingClientRect().top < window.innerHeight) {
          reveal(stage);
        }
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

  /* ---------- GSAP-enhanced parallax (progressive) ---------- */

  function initHeroParallax() {
    var media = $("[data-hero-media]");
    if (!media) return;
    gsap.to(media, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: 0.4 }
    });
  }

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
    safe(mountFlashStats, "mountFlashStats");
    safe(mountComparison, "mountComparison");
    safe(mountCycle, "mountCycle");
    safe(mountSpecs, "mountSpecs");
    safe(mountWashStages, "mountWashStages");
    safe(mountBenefits, "mountBenefits");
    safe(mountMarket, "mountMarket");
    safe(mountContact, "mountContact");

    safe(initNav, "initNav");
    safe(initSmoothScroll, "initSmoothScroll");
    safe(initReveals, "initReveals");
    safe(initWashStages, "initWashStages");
    safe(initTilt, "initTilt");

    if (window.gsap && window.ScrollTrigger) {
      try { gsap.registerPlugin(ScrollTrigger); } catch (e) {}
      safe(initHeroParallax, "initHeroParallax");
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
