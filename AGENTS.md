# Plutus Andromeda Group — static site

This is a plain HTML/CSS/JS site. No framework, no bundler, no build step.

- `css/style.css` holds all styling (design tokens as CSS custom properties, light/dark themes via `[data-theme]`).
- `js/main.js` holds all behavior (nav, theme toggle, scroll reveal, accordions, marquee, contact form).
- Every page is a standalone `.html` file with its own copy of the header/nav/footer markup — there is no templating layer, so shared markup must be edited consistently across files.
- Fonts are self-hosted under `assets/fonts/` (Geist Sans, Bricolage Grotesque) via `@font-face` — no external font CDN.
- The contact form submits via a `mailto:` link — there is no backend/API route.
