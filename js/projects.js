/**
 * Project data + render.
 *
 * To add a new project: append an object to the `projects` array.
 * To remove: delete the object.
 * To replace a placeholder: edit the object in place.
 *
 * Fields:
 *   title       — string, shown as card heading
 *   year        — string, e.g. "2025" or "2024 — 2025"
 *   role        — string, e.g. "Designer & Developer"
 *   description — one sentence, max ~140 chars reads best
 *   tech        — array of short strings, e.g. ['React', 'Node']
 *   link        — full URL (will open in a new tab)
 *   image       — path under assets/images/projects/, or null for placeholder
 */

const projects = [
  {
    title: 'Project 01',
    year: '2025',
    role: 'Designer & Developer',
    description: 'Replace this with a one-sentence summary of what the project is and why it matters.',
    tech: ['Tool A', 'Tool B', 'Tool C'],
    link: 'https://github.com/Yimi339',
    image: null,
  },
  {
    title: 'Project 02',
    year: '2025',
    role: 'Developer',
    description: 'Replace this with a one-sentence summary of what the project is and why it matters.',
    tech: ['Tool A', 'Tool B'],
    link: 'https://github.com/Yimi339',
    image: null,
  },
  {
    title: 'Project 03',
    year: '2024',
    role: 'Designer & Developer',
    description: 'Replace this with a one-sentence summary of what the project is and why it matters.',
    tech: ['Tool A', 'Tool B'],
    link: 'https://github.com/Yimi339',
    image: null,
  },
];

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(p => {
    const media = p.image
      ? `<img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy">`
      : `<div class="project-card__placeholder" aria-hidden="true">Image</div>`;

    const tech = p.tech && p.tech.length
      ? `<ul class="project-card__tech">${p.tech.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul>`
      : '';

    return `
      <a href="${escapeAttr(p.link)}" target="_blank" rel="noopener noreferrer" class="project-card">
        <div class="project-card__image">${media}</div>
        <div class="project-card__content">
          <div class="project-card__meta">
            <span>${escapeHtml(p.year)}</span>
            <span>${escapeHtml(p.role)}</span>
          </div>
          <h3 class="project-card__title">${escapeHtml(p.title)}</h3>
          <p class="project-card__description">${escapeHtml(p.description)}</p>
          ${tech}
        </div>
      </a>
    `;
  }).join('');
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(s) {
  return escapeHtml(s);
}
