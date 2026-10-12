# Teknikguider

Swedish beginner tech education site — live at **https://teknikguider.pages.dev**

Tydliga guider om datorteknik på svenska, skrivna för alla.

---

## Development

**Prerequisites:** Node.js 20+, npm

```bash
npm install
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
```

## Project Structure

```
teknikguider/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BaseHead.astro   # <head> metadata (title, OG, canonical)
│   │   └── Nav.astro        # Accessible navigation with skip-link
│   ├── content/
│   │   └── guider/          # MDX guide files
│   ├── content.config.ts    # Content collection schema (Astro Content Layer)
│   ├── i18n/
│   │   ├── index.ts         # useTranslations(), getLangFromUrl()
│   │   └── sv.ts            # Swedish UI strings
│   ├── layouts/
│   │   └── BaseLayout.astro # Page wrapper with nav and footer
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── guider/
│   │       ├── index.astro  # Guide listing
│   │       └── [slug].astro # Individual guide page
│   └── styles/
│       └── global.css       # CSS custom properties and base styles
├── astro.config.mjs
└── wrangler.toml
```

## Adding a New Guide

1. Create a new `.mdx` file in `src/content/guider/`, e.g. `wifi-forklaring.mdx`.

2. Add the required frontmatter:

```yaml
---
title: "Din guide-titel"
description: "En kort beskrivning av guiden, visas i listningsvyn."
pubDate: 2024-12-01
category: Hårdvara         # or: Internet, Säkerhet, Operativsystem, Mobiler
readingTimeMinutes: 6      # optional
draft: false               # set true to hide from listings
---
```

3. Write the content in Swedish using Markdown/MDX.

4. Run `npm run build` to verify it builds without errors.

## Deploying to Cloudflare Pages

### Dashboard (recommended)

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/) and create a new project.
2. Connect to the `haxxsimd/teknikguider` GitHub repository.
3. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add environment variable: `NODE_VERSION` = `20`
5. Deploy. Cloudflare Pages will redeploy automatically on every push to `main`.

### Manual CLI

```bash
npm run build
npx wrangler pages deploy dist --project-name teknikguider
```

## i18n — Adding English

The site uses an additive i18n pattern. To add English:

1. Create `src/i18n/en.ts` mirroring `sv.ts` with English translations.
2. Add `'en'` to the `locales` array in `src/i18n/index.ts`.
3. Add English pages under `src/pages/en/` (e.g. `src/pages/en/index.astro`).

No existing Swedish files need to change.

## Accessibility

- Body text ≥ 1.25rem (20px) for readability
- Touch targets ≥ 44×44px for mobile usability
- Skip-to-content link for keyboard navigation
- `<nav aria-label>` landmark for screen readers
- `aria-current="page"` on active navigation link
- Dark mode via `prefers-color-scheme` media query
- WCAG AA contrast ratios on all text/background pairs
- Swedish language declared with `<html lang="sv">`
