# Plutus Andromeda Group

Marketing website for Plutus Andromeda Group, a South African digital consultancy that designs, builds and scales digital products, platforms and experiences.

## Stack

- [Next.js](https://nextjs.org) (App Router, React Server Components)
- TypeScript
- Tailwind CSS v4
- [Framer Motion](https://www.framer.com/motion/) for scroll and interaction animation
- [Lucide](https://lucide.dev) icons
- [Radix UI](https://www.radix-ui.com) primitives (accordion, dialog, label, slot)
- `next-themes` for light/dark mode

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/            Routes (App Router): home, services, work, industries, insights, about, contact
components/     Reusable UI, layout, motion and domain components
sections/       Page sections composed on app/page.tsx
lib/            Site content/data, config and utilities
public/         Static assets
```

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the codebase
