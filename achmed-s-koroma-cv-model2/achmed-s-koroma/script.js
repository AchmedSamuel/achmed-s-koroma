/* =====================================================================
   Achmed Samuel Koroma — portfolio behaviour
   Content for publications, research, projects, certificates, videos
   and gallery comes from data/content.js.
   ===================================================================== */
(function () {
  'use strict';

  var DATA = window.SITE_CONTENT;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function safeUrl(u) {
    u = String(u || '').trim();
    if (/^(https?:|mailto:)/i.test(u)) return u;
    if (/^[a-z0-9._\-\/#]+$/i.test(u) && !/^\/\//.test(u)) return u;   // relative paths only
    return '#';
  }
  function linksHTML(links) {
    if (!links || !links.length) return '';
    return '<div class="card-links">' + links.map(function (l) {
      var url = safeUrl(l.url);
      var ext = /^https?:/i.test(url);
      return '<a href="' + esc(url) + '"' + (ext ? ' target="_blank" rel="noopener" class="ext"' : '') + '>' +
        esc(l.label) + (ext ? '<span class="sr-only"> (opens in a new tab)</span>' : '') + '</a>';
    }).join('') + '</div>';
  }
  function boldName(authors) {
    return esc(authors).replace(/Koroma, A\. S\./, '<strong>Koroma, A. S.</strong>');
  }
  function contentError(el) {
    if (el) el.innerHTML = '<p class="empty-note">This list could not be loaded. Check <code>data/content.js</code> for a missing comma or quote.</p>';
  }

  /* ---------- render content lists ---------- */
  function renderAll() {
    var pubEl = $('#publications-list'), resEl = $('#research-list'), projEl = $('#projects-list'),
        devEl = $('#development-list'), vidEl = $('#video-list'), galEl = $('#gallery');

    if (!DATA) {
      [pubEl, resEl, projEl, devEl].forEach(contentError);
      if (window.console) console.error('SITE_CONTENT missing — data/content.js failed to load or has a syntax error.');
      return;
    }

    if (pubEl) pubEl.innerHTML = (DATA.publications || []).map(function (p) {
      return '<article class="card pub-card">' +
        '<div class="card-kind">' + esc(p.type) + ' &middot; ' + esc(p.year) + '</div>' +
        '<h3 class="pub-title">' + esc(p.title) + '</h3>' +
        '<div class="pub-authors">' + boldName(p.authors) + '</div>' +
        '<div class="pub-venue">' + esc(p.venue) + '</div>' +
        (p.summary ? '<p class="card-text">' + esc(p.summary) + '</p>' : '') +
        linksHTML(p.links) + '</article>';
    }).join('');

    if (resEl) resEl.innerHTML = (DATA.research || []).map(function (r) {
      return '<article class="card reveal">' +
        '<div class="card-kind">' + esc(r.label) + '</div>' +
        '<h3 class="card-title">' + esc(r.title) + '</h3>' +
        '<p class="card-text">' + esc(r.summary) + '</p>' +
        (r.meta ? '<div class="card-meta">' + esc(r.meta) + '</div>' : '') +
        linksHTML(r.links) + '</article>';
    }).join('');

    if (projEl) projEl.innerHTML = (DATA.projects || []).map(function (p) {
      return '<article class="card proj-card reveal">' +
        '<div class="proj-top"><div class="card-kind">' + esc(p.kind) + '</div>' +
        (p.status ? '<span class="badge neutral">' + esc(p.status) + '</span>' : '') + '</div>' +
        '<h3 class="card-title">' + esc(p.title) + '</h3>' +
        '<p class="card-text">' + esc(p.summary) + '</p>' +
        (p.stack && p.stack.length ? '<div class="stack">' + p.stack.map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') + '</div>' : '') +
        (p.build ? '<div class="build-line">Built with: <span class="badge' + (/ai-assisted/i.test(p.build) ? ' neutral' : /independent/i.test(p.build) ? ' solid' : '') + '">' + esc(p.build) + '</span></div>' : '') +
        linksHTML(p.links) + '</article>';
    }).join('');

    if (devEl) {
      var groups = [], byGroup = {};
      (DATA.development || []).forEach(function (d) {
        var g = d.group || 'Other';
        if (!byGroup[g]) { byGroup[g] = []; groups.push(g); }
        byGroup[g].push(d);
      });
      devEl.innerHTML = groups.map(function (g) {
        return '<div class="reveal"><div class="group-title">' + esc(g) + '</div>' + byGroup[g].map(function (d) {
          var detail = [d.issuer, d.date].filter(Boolean).map(esc).join(' &middot; ');
          return '<div class="dev-item"><span class="dev-dot" aria-hidden="true"></span><div>' +
            '<div class="dev-name">' + esc(d.name) + '</div>' +
            '<div class="dev-detail">' + detail + (d.status ? '<span class="badge neutral">' + esc(d.status) + '</span>' : '') + '</div>' +
            '</div></div>';
        }).join('') + '</div>';
      }).join('');
    }

    if (vidEl) vidEl.innerHTML = (DATA.videos || []).map(function (v) {
      var id = String(v.id || '').replace(/[^A-Za-z0-9_\-]/g, '');
      if (!id) return '';
      return '<div><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/' + id +
        '" title="' + esc(v.title || 'YouTube video') + '" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>' +
        '<p class="video-caption">' + esc(v.label || 'Video') + ' &middot; <a href="https://www.youtube.com/shorts/' + id + '" target="_blank" rel="noopener" class="ext">Watch on YouTube<span class="sr-only"> (opens in a new tab)</span></a></p></div>';
    }).join('');

    renderGallery(galEl);
  }

  function renderGallery(galEl) {
    var block = $('#gallery-block');
    if (!galEl || !block) return;
    var items = (DATA && DATA.gallery) || [];
    if (!items.length) { block.hidden = true; return; }
    galEl.innerHTML = items.map(function (g) {
      var src = safeUrl(g.src);
      return '<figure><button type="button" data-full="' + esc(src) + '" aria-label="Enlarge: ' + esc(g.caption || g.alt || 'image') + '">' +
        '<img src="' + esc(src) + '" alt="' + esc(g.alt || g.caption || '') + '" loading="lazy" width="400" height="500" /></button>' +
        (g.caption ? '<figcaption>' + esc(g.caption) + '</figcaption>' : '') + '</figure>';
    }).join('');
    // Hide images whose files are missing; hide the block if none remain.
    $$('img', galEl).forEach(function (img) {
      img.addEventListener('error', function () {
        var fig = img.closest('figure'); if (fig) fig.remove();
        if (!galEl.querySelector('figure')) block.hidden = true;
      });
    });
  }

  /* ---------- theme toggle ---------- */
  function initTheme() {
    var btn = $('#theme-toggle'); if (!btn) return;
    function sync() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.setAttribute('aria-pressed', String(dark));
      btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    btn.addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') !== 'dark';
      if (dark) document.documentElement.setAttribute('data-theme', 'dark');
      else document.documentElement.removeAttribute('data-theme');
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
      sync();
    });
    sync();
  }

  /* ---------- mobile menu ---------- */
  function initMenu() {
    var btn = $('#menu-toggle'), links = $('#nav-links'); if (!btn || !links) return;
    function setOpen(open) {
      links.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    btn.addEventListener('click', function () { setOpen(!links.classList.contains('open')); });
    $$('a', links).forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) { setOpen(false); btn.focus(); }
    });
  }

  /* ---------- experience tabs (WAI-ARIA tabs pattern) ---------- */
  function initTabs() {
    var tabs = $$('.tab-btn');
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        else if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (e.key === 'Home') n = tabs[0];
        else if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
  }

  /* ---------- lightbox ---------- */
  function initLightbox() {
    var lb = $('#lightbox'), gal = $('#gallery'), closeBtn = $('#lightbox-close'); if (!lb || !gal) return;
    var img = $('img', lb), lastFocus = null;
    function close() { lb.classList.remove('open'); if (lastFocus) lastFocus.focus(); }
    gal.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-full]'); if (!b) return;
      lastFocus = b;
      img.src = b.getAttribute('data-full');
      var inner = $('img', b); img.alt = inner ? inner.alt : '';
      lb.classList.add('open'); closeBtn.focus();
    });
    closeBtn.addEventListener('click', close);
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && lb.classList.contains('open')) close(); });
  }

  /* ---------- nav: shadow + active section ---------- */
  function initNav() {
    var nav = $('#site-nav');
    window.addEventListener('scroll', function () { nav.classList.toggle('scrolled', window.scrollY > 10); }, { passive: true });
    if (!('IntersectionObserver' in window)) return;
    var map = {};
    $$('.nav-links a').forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          $$('.nav-links a').forEach(function (a) { a.classList.remove('active'); a.removeAttribute('aria-current'); });
          map[en.target.id].classList.add('active');
          map[en.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { io.observe(s); });
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    var els = $$('.reveal');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('visible'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
    }, { threshold: 0.06 });
    els.forEach(function (el) { io.observe(el); });
  }

  renderAll();
  initTheme();
  initMenu();
  initTabs();
  initLightbox();
  initNav();
  initReveal();
  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
