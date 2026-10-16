/* PharaCoin UI V10 — motion layer (visual only, no app logic) */
(function () {
  'use strict';
  var root = document.documentElement;
  root.setAttribute('data-ui', 'v10');

  var GLASS = '.card,.box,.welcome-card,.info-card,.level-card,.event-card,.contest-card,.statue-card,.tool-card,.vip-card,.task-card,.offer-card,.stat-card,.reward-card,.request-card,.progress-card,.timer-card,.game-card,.mining-box,.balance-box,.data-box,.terms-box,.title-box,.register-box,.info-panel,.transaction-item,.leaderboard-item,.task-item,.clickable-card';
  var LIFT = '.card,.info-card,.level-card,.event-card,.contest-card,.statue-card,.tool-card,.vip-card,.task-card,.offer-card,.stat-card,.reward-card,.request-card,.game-card,.clickable-card,.transaction-item,.leaderboard-item';
  var ENTER = GLASS + ',.quick-actions,.section-header,.statues-title,.page-main-title,.page-title,.main-title';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io = null;
  if ('IntersectionObserver' in window && !reduce) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        io.unobserve(el);
        el.classList.add('v10-show');
        setTimeout(function () { el.classList.add('v10-done'); }, 900);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  }

  var seen = new WeakSet();
  var batch = 0;
  function decorate(scope) {
    var i = 0;
    scope.querySelectorAll(GLASS).forEach(function (el) {
      el.classList.add('v10-glass');
      if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    });
    scope.querySelectorAll(LIFT).forEach(function (el) {
      el.classList.add('v10-lift');
    });
    if (!io) return;
    scope.querySelectorAll(ENTER).forEach(function (el) {
      if (seen.has(el)) return;
      seen.add(el);
      el.style.setProperty('--v10-d', Math.min(i++, 8) * 55 + 'ms');
      el.classList.add('v10-in');
      io.observe(el);
    });
  }

  ready(function () {
    decorate(document);
    if (io) {
      root.classList.add('v10-ready');
      // safety net: never leave content hidden
      setTimeout(function () {
        document.querySelectorAll('.v10-in:not(.v10-show)').forEach(function (el) { el.classList.add('v10-show'); });
      }, 2500);
    }

    // dynamic content (firebase-rendered lists) gets the same treatment
    if ('MutationObserver' in window) {
      var t = null;
      new MutationObserver(function () {
        clearTimeout(t);
        t = setTimeout(function () { decorate(document); }, 120);
      }).observe(document.body, { childList: true, subtree: true });
    }

    // cursor spotlight on glass cards
    document.addEventListener('pointermove', function (ev) {
      var el = ev.target.closest && ev.target.closest('.v10-glass');
      if (!el) return;
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
      el.style.setProperty('--my', (ev.clientY - r.top) + 'px');
    }, { passive: true });
  });
})();
