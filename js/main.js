/**
 * Entry point. Order matters: reveals first (so [data-reveal] targets
 * are observed before paint), then scroll-driven header state.
 */
function init() {
  initReveals();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}