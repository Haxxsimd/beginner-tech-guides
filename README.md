# Teknikguider

Swedish beginner tech education site. Repository: **github.com/Haxxsimd/beginner-tech-guides**. Not yet deployed — see [Deploying to Cloudflare Pages](#deploying-to-cloudflare-pages).

Tydliga guider om datorteknik på svenska, skrivna för alla.

---

## Development

**Prerequisites:** Node.js 22.12+ (see `.node-version`), npm

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
│   ├── lib/
│   │   └── formatDate.ts    # Shared sv-SE date formatting (UTC-anchored)
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── 404.astro        # Not-found page
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
2. Connect to the `Haxxsimd/beginner-tech-guides` GitHub repository.
3. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Project name:** `teknikguider` (keeps `astro.config.mjs`'s `site` URL accurate; Cloudflare defaults to the repo name otherwise — update `site` to match if you pick something else)
4. Add environment variable: `NODE_VERSION` = `22`
5. Deploy. Cloudflare Pages will redeploy automatically on every push to `main`.

### Manual CLI

```bash
npm run build
npx wrangler pages deploy dist --project-name teknikguider
```

## Comments (Supabase)

Guide pages show moderated reader comments backed by Supabase. Without the env vars below the comments section is simply not rendered.

1. Create a Supabase project and run `supabase/migrations/20261012000000_comments.sql` (SQL Editor, or `supabase db push`).
2. Copy `.env.example` to `.env` and fill in `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Use the publishable key only, never the `service_role`/secret key.
3. In Cloudflare Pages → Settings → Environment variables, add the same two variables **before** building (Astro inlines them at build time), then redeploy.
4. Approve comments in the Supabase dashboard: Table Editor → `comments` → set `status` to `approved`.

Visitors can only read approved comments and insert pending ones (row level security). A hidden honeypot field and a 3-second minimum delay filter simple bots; add Cloudflare Turnstile if spam becomes a problem.

## i18n — Adding English

The site uses an additive i18n pattern. To add English:

1. Create `src/i18n/en.ts` mirroring `sv.ts`'s shape (`Partial<Record<UIStringKey, string>>`) with English translations.
2. Add `'en'` to the `locales` array and `{ sv, en }` to the translations map in `src/i18n/index.ts`.
3. Add English pages under `src/pages/en/` (e.g. `src/pages/en/index.astro`).

`BaseLayout` and `Nav` read the locale from the URL via `getLangFromUrl` — they set `<html lang>` and localize nav hrefs automatically, with no changes needed to the components themselves or to any existing Swedish page.

## Accessibility

- Body text ≥ 1.25rem (20px) for readability
- Touch targets ≥ 44×44px for mobile usability
- Skip-to-content link for keyboard navigation
- `<nav aria-label>` landmark for screen readers
- `aria-current="page"` on active navigation link
- Dark mode via `prefers-color-scheme` media query
- WCAG AA contrast ratios on all text/background pairs
- Swedish language declared with `<html lang="sv">`
