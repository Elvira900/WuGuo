/**
 * Scroll-driven reveal animations using IntersectionObserver.
 *
 * - `[data-reveal]` elements fade up as they enter the viewport.
 * - Initial hidden state is gated on `.js-loaded` (added in init),
 *   so the page is fully visible without JS — no FOUC for noscript users.
 * - Respects `prefers-reduced-motion`.
 */
function initReveals() {
  // Tell CSS that JS is ready. Until this class is on <body>,
  // [data-reveal] elements are visible (default).
  document.body.classList.add('js-loaded');

  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supported = 'IntersectionObserver' in window;

  // Reduced motion OR no IO support → just show everything.
  if (reduceMotion || !supported) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  });

  targets.forEach(el => observer.observe(el));
}