/**
 * Header shadow on scroll + native smooth anchor scrolling.
 *
 * Smooth scrolling itself is handled by `html { scroll-behavior: smooth }`
 * in CSS; this module just keeps the header in sync with scroll position
 * and ensures anchor links update the URL hash without a hard jump.
 */
function initSmoothScroll() {
  const header = document.querySelector('.site-header');

  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Anchor links — let CSS scroll-behavior handle smoothness, just keep hash updated.
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id.length <= 1) return;

      const target = document.querySelector(id);
      if (!target) return;

      // Native smooth scroll is in CSS; we only need to handle hash history.
      // (If the browser doesn't support smooth scroll, this still works as a normal jump.)
      if ('scrollBehavior' in document.documentElement.style) return;

      // Fallback for browsers without CSS smooth-scroll:
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    });
  });
}