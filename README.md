# Yimi Ni — Personal Portfolio

A minimal, editorial-style personal portfolio. Built to accompany my college application materials — designed to feel calm, honest, and considered.

## Stack

- **HTML / CSS / JavaScript** — no build step
- **GSAP 3.12** + **ScrollTrigger** — scroll-driven animations
- **Lenis 1.1** — smooth scroll
- **Inter Variable** — typography (Google Fonts)
- All dependencies loaded via CDN

## Local preview

The site is fully static. To preview locally:

```bash
cd portfolio
python -m http.server 8000
# then open http://localhost:8000
```

Or just double-click `index.html` (CDN scripts require an internet connection).

## Editing content

Most of the content lives in **two places**:

### 1. `index.html`
- Your name, tagline, location, about text, email, and social links.
- Search for `TODO` comments to find placeholder sections.

### 2. `js/projects.js`
- Each project is an object in the `projects` array:
  ```js
  {
    title: 'Project name',
    year: '2025',
    role: 'Designer & Developer',
    description: 'One sentence — what it is and why it matters.',
    tech: ['React', 'Node'],
    link: 'https://github.com/Yimi339/project',
    image: 'assets/images/projects/cover.jpg', // or null for placeholder
  }
  ```
- Add or remove objects from the array. The grid renders automatically.

### Adding project images
Drop files into `assets/images/projects/` and reference them as `image: 'assets/images/projects/yourfile.jpg'`. Leave `image: null` for a clean gray placeholder.

## Project structure

```
portfolio/
├── index.html
├── README.md
├── LICENSE
├── .gitignore
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   └── components.css
├── js/
│   ├── main.js
│   ├── smooth-scroll.js
│   ├── text-effect.js
│   ├── reveal.js
│   └── projects.js
└── assets/
    ├── images/projects/
    └── svg/
```

## Deployment

The site is plain static HTML — drop the `portfolio/` folder onto any static host:

- **GitHub Pages** — push to a repo, enable Pages in settings
- **Netlify / Vercel** — drag-and-drop the folder
- **Cloudflare Pages** — connect repo, build command empty, output dir `.`

## License

MIT — see [LICENSE](./LICENSE).
