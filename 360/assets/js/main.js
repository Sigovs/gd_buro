/* ===========================================================================
   360 AUTO CARE — behaviour.
   Four jobs, and nothing else: the narrow-screen menu, the section marker in
   the masthead, carrying a chosen service into the form, and validating the
   request. No library, no scroll hijacking, no reveal animations — the page
   has to survive a screenshot.
   ======================================================================== */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- 1. the narrow-screen menu ---------------------------------------- */
  var mh = $('#mh'), burger = $('.burger', mh), nav = $('#nav');
  if (burger && nav) {
    var setOpen = function (on) {
      if (on) { mh.setAttribute('data-open', ''); } else { mh.removeAttribute('data-open'); }
      burger.setAttribute('aria-expanded', on ? 'true' : 'false');
    };
    burger.addEventListener('click', function () {
      setOpen(!mh.hasAttribute('data-open'));
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    /* the menu is a narrow-screen affordance only: if the viewport grows past
       the breakpoint while it is open, the open state has to be dropped or the
       desktop masthead inherits an absolutely positioned nav */
    var mq = window.matchMedia('(min-width:821px)');
    (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))
      (function (e) { if (e.matches) setOpen(false); });
  }

  /* ---- 2. which section the reader is in -------------------------------- */
  var links = $$('.mh nav a[href^="#"]');
  var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);
  if (targets.length && 'IntersectionObserver' in window) {
    var mark = function (id) {
      links.forEach(function (a) {
        if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    };
    var io = new IntersectionObserver(function (entries) {
      /* the topmost section that is genuinely on screen wins, so the marker
         does not flicker between two intersecting bands */
      var best = null;
      entries.forEach(function (en) { if (en.isIntersecting) { if (!best || en.boundingClientRect.top < best.boundingClientRect.top) best = en; } });
      if (best) mark(best.target.id);
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---- 3. a requested service arrives in the form already chosen -------- */
  var select = $('#f-service');
  $$('a[data-service]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (!select) return;
      var want = a.getAttribute('data-service')
        .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();
      var hit = Array.prototype.filter.call(select.options, function (o) {
        return o.text.replace(/\s+/g, ' ').trim() === want;
      })[0];
      if (hit) {
        select.value = hit.value || hit.text;
        select.selectedIndex = hit.index;
        /* announce it, because the reader is being scrolled away from the
           thing they clicked and needs to find their choice already made */
        select.setAttribute('data-preset', '');
        window.setTimeout(function () { select.removeAttribute('data-preset'); }, 2400);
      }
    });
  });

  /* ---- 4. the request ---------------------------------------------------- */
  var form = $('#req'), sent = $('#sent');
  if (form) {
    var fieldOf = function (el) { return el.closest('.f'); };
    var fail = function (el, msg) {
      var f = fieldOf(el); if (!f) return;
      f.setAttribute('data-bad', '');
      el.setAttribute('aria-invalid', 'true');
      var e = $('[data-err]', f); if (e) e.textContent = msg;
    };
    var clear = function (el) {
      var f = fieldOf(el); if (!f) return;
      f.removeAttribute('data-bad');
      el.removeAttribute('aria-invalid');
      var e = $('[data-err]', f); if (e) e.textContent = '';
    };

    var check = function (el) {
      var v = (el.value || '').trim();
      if (el.hasAttribute('required') && !v) { fail(el, 'Required'); return false; }
      if (el.type === 'tel' && v && v.replace(/[^0-9]/g, '').length < 10) {
        fail(el, 'Ten digits, please'); return false;
      }
      if (el.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
        fail(el, 'Check the address'); return false;
      }
      clear(el); return true;
    };

    $$('input, select, textarea', form).forEach(function (el) {
      el.addEventListener('blur', function () { if (el.type !== 'checkbox') check(el); });
      el.addEventListener('input', function () { if (fieldOf(el) && fieldOf(el).hasAttribute('data-bad')) check(el); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true, first = null;
      $$('input, select, textarea', form).forEach(function (el) {
        if (el.type === 'checkbox' || el.type === 'submit') return;
        if (!check(el)) { ok = false; if (!first) first = el; }
      });
      if (!ok) { if (sent) sent.hidden = true; first.focus(); return; }

      /* This is a design study served as static files: there is no endpoint to
         post to, and pretending otherwise would lose somebody's request. Say
         so plainly and hand them the action that does work. */
      if (sent) {
        sent.hidden = false;
        sent.innerHTML = '<b>Nothing was sent — this is a design study.</b>' +
          'The page is static, so there is no server to receive the form. ' +
          'To reach the shop, call <a href="tel:+15168200360">(516)&nbsp;820-0360</a>.';
        sent.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    });
  }
})();
