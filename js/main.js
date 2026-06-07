/**
 * Entry point. Order matters:
 *   1. Render projects (so reveal targets exist in the DOM).
 *   2. Smooth scroll (Lenis, needs to be in place before ScrollTrigger.batch).
 *   3. ScrollTrigger-based reveals.
 *   4. Hero / contact text reveal (independent of scroll).
 */
function init() {
  renderProjects();
  initSmoothScroll();
  initReveals();
  initTextEffect();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
