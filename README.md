# Plutus Andromeda Group

Marketing website for Plutus Andromeda Group, a South African digital consultancy that designs, builds and scales digital products, platforms and experiences.

Plain HTML, CSS and vanilla JavaScript — no framework, no bundler, no build step.

## Getting started

Open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```bash
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

## Project structure

```
index.html            Home page
services.html          Services
work.html              Work (case studies)
industries.html        Industries
insights.html          Insights index
insights/*.html        Individual insight articles
about.html             About
contact.html           Contact (mailto-based form)
css/style.css          All styling: design tokens, light/dark themes, components
js/main.js             All behavior: nav, theme toggle, scroll reveal, accordions, contact form
assets/fonts/          Self-hosted Geist Sans + Bricolage Grotesque (woff2)
assets/img/            Favicon, apple touch icon, OG image
robots.txt, sitemap.xml
```

Every page is a standalone `.html` file with its own copy of the header/nav/footer markup — there is no templating layer, so shared markup must be edited consistently across files when it changes.

## Notes

- Light/dark theme is toggled via a `data-theme` attribute on `<html>`, persisted to `localStorage`, and applied before first paint via an inline script in each page's `<head>` to avoid a flash of the wrong theme.
- The contact form submits via a `mailto:` link (opens the visitor's email client) — there is no backend or API route.
- Fonts are self-hosted (no external font CDN at runtime).
