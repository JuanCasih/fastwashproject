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

  function formatNum(n) {
    n = Math.round(n);
    return n.toLocaleString("es-AR");
  }

  function marketVisualSVG(visual) {
    if (visual === "sparkline") {
      return '<svg class="market-visual market-visual-sparkline" viewBox="0 0 84 30" fill="none">' +
        '<polyline class="spark-path" points="2,25 18,20 34,22 50,11 66,13 80,3" pathLength="100" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>';
    }
    if (visual === "ring") {
      return '<svg class="market-visual market-visual-ring" viewBox="0 0 100 100" data-ring>' +
        '<circle class="ring-track" cx="50" cy="50" r="42" fill="none" stroke-width="9"/>' +
        '<circle class="ring-fill" cx="50" cy="50" r="42" fill="none" stroke-width="9" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>' +
        '</svg>';
    }
    if (visual === "bar") {
      return '<div class="market-visual market-visual-bar"><div class="market-bar-track"><div class="market-bar-fill" data-bar></div></div></div>';
    }
    if (visual === "trophy") {
      return '<svg class="market-visual market-visual-trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z"/>' +
        '<path d="M7 5H4a1 1 0 0 0-1 1c0 2.5 1.8 4.5 4.2 4.9M17 5h3a1 1 0 0 1 1 1c0 2.5-1.8 4.5-4.2 4.9"/>' +
        '</svg>';
    }
    return "";
  }

  function mountMarket() {
    var target = $("[data-market-stats]");
    if (target && target.children.length === 0 && data.marketStats) {
      target.innerHTML = data.marketStats.map(function (s) {
        var prefix = s.prefix || "";
        var suffix = s.suffix || "";
        var staticBefore = s.showFromStatic
          ? (prefix + formatNum(s.from) + suffix + " → " + prefix)
          : prefix;
        return '<div class="market-stat reveal is-' + escHTML(s.size) + '">' +
          marketVisualSVG(s.visual) +
          '<span class="market-stat-value">' +
          (staticBefore ? '<span class="market-stat-prefix">' + escHTML(staticBefore) + '</span>' : "") +
          '<span class="market-stat-count" data-count data-from="' + s.from + '" data-to="' + s.to + '">' + escHTML(formatNum(s.from)) + '</span>' +
          (suffix ? '<span class="market-stat-suffix">' + escHTML(suffix) + '</span>' : "") +
          '</span>' +
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

  /* ---------- Market stats: count-up + ring/bar reveal ---------- */

  function initMarketCountUp() {
    var cards = $$(".market-stat");
    if (!cards.length) return;

    var easeOutCubic = function (t) { return 1 - Math.pow(1 - t, 3); };

    var animateCard = function (card) {
      if (card.dataset.counted) return;
      card.dataset.counted = "1";
      var countEl = $("[data-count]", card);
      var duration = reduced ? 1 : 1200;
      var start = null;

      if (countEl) {
        var from = parseFloat(countEl.getAttribute("data-from")) || 0;
        var to = parseFloat(countEl.getAttribute("data-to")) || 0;
        var step = function (ts) {
          if (!start) start = ts;
          var t = Math.min(1, (ts - start) / duration);
          var eased = easeOutCubic(t);
          var val = from + (to - from) * eased;
          countEl.textContent = formatNum(val);
          if (t < 1) requestAnimationFrame(step);
          else countEl.textContent = formatNum(to);
        };
        requestAnimationFrame(step);
      }

      var ring = $("[data-ring] .ring-fill", card);
      if (ring) {
        var target = parseFloat(countEl ? countEl.getAttribute("data-to") : 0) || 0;
        requestAnimationFrame(function () {
          ring.style.transition = "stroke-dashoffset " + duration + "ms cubic-bezier(0.16,1,0.3,1)";
          ring.style.strokeDashoffset = String(100 - target);
        });
      }

      var bar = $("[data-bar]", card);
      if (bar) {
        var barTarget = countEl ? parseFloat(countEl.getAttribute("data-to")) || 0 : 0;
        requestAnimationFrame(function () {
          bar.style.transition = "width " + duration + "ms cubic-bezier(0.16,1,0.3,1)";
          bar.style.width = barTarget + "%";
        });
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      cards.forEach(animateCard);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCard(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    cards.forEach(function (card) { io.observe(card); });

    setTimeout(function () {
      cards.forEach(function (card) {
        if (!card.dataset.counted && card.getBoundingClientRect().top < window.innerHeight) {
          animateCard(card);
        }
      });
    }, 6000);
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
    safe(initMarketCountUp, "initMarketCountUp");
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
