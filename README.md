# Wuguo — Personal Portfolio

A light, editorial-style portfolio built for college admissions readers.
Designed to feel calm, considered, and worth a second read.

## Stack

- **HTML / CSS / JavaScript** — no build step, no framework
- **Fraunces** (variable serif) + **Inter** (variable sans) — Google Fonts
- **IntersectionObserver** — scroll-driven reveals (no GSAP / no Lenis)
- All dependencies loaded via CDN (fonts only)

## Design direction

A magazine-style paper aesthetic:

- Warm cream background (`#F5F1E8`), deep ink (`#1A1A1A`), one terracotta accent (`#B8512F`)
- Serif headlines, sans body, asymmetric editorial grids, drop caps, pull quotes
- Generous whitespace, subtle scroll reveals, no flashy motion
- Designed for college admissions officers — clear academic profile, fast to scan

## Local preview

The site is fully static. From this directory:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Or just double-click `index.html` (Google Fonts requires an internet connection).

## Editing content

Most content lives in **`index.html`**. Search for `TODO` comments to find placeholders:

- **Hero** — name, tagline, dateline (`Chongqing, China · Volume I · 2026`)
- **About** — 2–3 paragraph self-introduction
- **Education** — school name, dates, summary, selected coursework (6 cards), academic interests (tags)
- **Contact** — email + GitHub links

To swap colors / typography / spacing: edit `css/variables.css`.

## Project structure

```
portfolio/
├── index.html
├── README.md
├── LICENSE
├── .gitignore
├── css/
│   ├── reset.css
│   ├── variables.css       # colors / type / spacing tokens
│   ├── base.css            # typography + editorial primitives
│   ├── layout.css          # containers + grids
│   └── components.css      # header / hero / cards / contact / footer
├── js/
│   ├── reveal.js           # IntersectionObserver fade-ups
│   ├── scroll.js           # header shadow + native smooth scroll
│   └── main.js             # entry point
└── assets/
    └── README.md           # placeholder for future images
```

## Deployment

The site is plain static HTML — drop the `portfolio/` folder onto any static host:

- **GitHub Pages** — push to a repo, enable Pages in repo settings
- **Netlify / Vercel** — drag-and-drop the folder
- **Cloudflare Pages** — connect repo, build command empty, output dir `.`

## License

MIT — see [LICENSE](./LICENSE).
