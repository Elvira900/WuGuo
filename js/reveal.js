/**
 * Scroll-driven reveal animations.
 *
 * - [data-reveal] elements fade up as they enter the viewport.
 * - #projects-grid .project-card is handled as a batch (staggered) reveal.
 *
 * Initial state is set immediately so cards never flash visible-then-hidden.
 */
function initReveals() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Generic section reveals
  gsap.utils.toArray('[data-reveal]').forEach(el => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Project cards — batched stagger.
  // Set initial state first so the cards don't flash.
  const cards = gsap.utils.toArray('#projects-grid .project-card');
  if (cards.length) {
    gsap.set(cards, { y: 50, opacity: 0 });

    ScrollTrigger.batch(cards, {
      start: 'top 90%',
      onEnter: batch => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          overwrite: true,
        });
      },
    });
  }
}
