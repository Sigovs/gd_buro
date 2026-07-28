/* ===========================================================================
   MILLER MOTORCARS — the changing register.

   Selecting a marque rewrites six compositional tokens on the index section:
   crop ratio, focal position, pace, tracking, air and scale. It changes how the
   page is composed, never what colour it is. With JavaScript off the index is
   already rendered in the house register with Ferrari shown, every marque row
   is a real link to its own site, and nothing is hidden — the mechanism is an
   enhancement on top of a page that already works.
   ======================================================================== */
(function () {
  'use strict';

  var list = document.getElementById('marque-index');
  if (!list) return;

  /* The register must be written on an ancestor of BOTH the list and the plate,
     or the tokens never reach the photograph. Writing it on the list itself is
     why the first build recomposed nothing. */
  var index = list.closest('.index') || list;

  var plate    = document.getElementById('plate'),
      plateImg = document.getElementById('plate-img'),
      name     = document.getElementById('mq-name'),
      line     = document.getElementById('mq-line'),
      count    = document.getElementById('mq-count'),
      visit    = document.getElementById('mq-visit'),
      browse   = document.getElementById('mq-browse'),
      rows     = [].slice.call(list.querySelectorAll('.mq'));

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function select(row, focus) {
    var d = row.dataset;

    rows.forEach(function (r) { r.setAttribute('aria-selected', 'false'); });
    row.setAttribute('aria-selected', 'true');

    /* the register: one attribute drives all six tokens, defined in CSS */
    index.setAttribute('data-register', d.register || 'house');

    name.textContent = d.name;
    line.textContent = d.line;
    visit.href = d.href;
    visit.textContent = 'Visit ' + d.name;

    /* a count is shown only when there is real stock behind it */
    if (d.count) {
      count.hidden = false;
      count.innerHTML = '<span class="t-spec">' + d.count + '</span> in the collection';
      browse.hidden = false;
      browse.href = d.href;
    } else {
      count.hidden = true;
      browse.hidden = true;
    }

    /* the plate swaps its photograph, or states plainly that none exists —
       inventing a file would be worse than saying so */
    if (d.img) {
      var next = d.img;
      if (reduce) {
        plateImg.src = next;
        plateImg.alt = d.alt || '';
        plateImg.hidden = false;
      } else {
        plate.classList.add('is-swapping');
        window.setTimeout(function () {
          plateImg.src = next;
          plateImg.alt = d.alt || '';
          plateImg.hidden = false;
          plate.classList.remove('is-swapping');
        }, 180);
      }
      plate.classList.remove('is-empty');
    } else {
      plateImg.hidden = true;
      plate.classList.add('is-empty');
    }

    if (focus) row.focus();
  }

  list.addEventListener('click', function (e) {
    var row = e.target.closest('.mq');
    if (row) select(row, false);
  });

  /* pointer-only selection would strand touch and keyboard, so the rows are
     buttons and the arrow keys walk them */
  list.addEventListener('keydown', function (e) {
    var i = rows.indexOf(document.activeElement);
    if (i < 0) return;
    var next = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = rows[(i + 1) % rows.length];
    if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  next = rows[(i - 1 + rows.length) % rows.length];
    if (next) { e.preventDefault(); select(next, true); }
  });

  /* hover is a shortcut on fine pointers only; it never becomes the only way in */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    rows.forEach(function (r) {
      r.addEventListener('mouseenter', function () { select(r, false); });
    });
  }
})();
