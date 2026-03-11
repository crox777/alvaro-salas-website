# Alvaro Salas Personal Website

## Stack
- **Framework:** Astro 6 (static site, zero JS by default)
- **CMS:** Keystatic (git-based, markdown content)
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP (minimal entrance animations)
- **Search:** Pagefind (static search index)
- **Deploy:** Vercel

## Design System — "Manifesto Meets Bloomberg Terminal"
- Dark mode primary
- Background: `#0D0D0D`, Text: `#F0EDE6`, Surface: `#1A1A1A`
- Accent 1 (amber): `#FFB800`, Accent 2 (red): `#E63946`, Gray: `#8B8B8B`
- Headings: Space Grotesk (bold), Body: Inter

## Content Collections
All content lives in `src/content/` as markdown files managed by Keystatic:
- `ideas/` — Essays and articles
- `projects/` — BLISS, Freedom Accelerator, DemoLab, TRF
- `talks/` — Speaking appearances with video embeds
- `podcasts/` — Podcast guest appearances

## Conventions
- Astro components in `src/components/`
- Pages in `src/pages/` (file-based routing)
- Layouts in `src/layouts/`
- Use Astro's Content Collections API for all content
- Prefer `.astro` components over framework components
- Keep JS minimal — leverage Astro's zero-JS-by-default

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build
