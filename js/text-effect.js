/**
 * Split text inside [data-text-effect] into per-character spans,
 * then animate the chars up from below on load.
 *
 * Skipped entirely when the user prefers reduced motion.
 */
function initTextEffect() {
  if (typeof gsap === 'undefined') return;

  const targets = document.querySelectorAll('[data-text-effect]');
  if (!targets.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  targets.forEach(el => {
    const text = el.textContent;
    el.innerHTML = text.split('').map(c => {
      if (c === ' ') return '<span class="char-wrap"><span class="char">&nbsp;</span></span>';
      return `<span class="char-wrap"><span class="char">${c}</span></span>`;
    }).join('');
  });

  if (reduceMotion) return;

  gsap.fromTo(
    '[data-text-effect] .char',
    { yPercent: 100 },
    {
      yPercent: 0,
      duration: 0.9,
      ease: 'power4.out',
      stagger: 0.035,
      delay: 0.15,
    }
  );
}
