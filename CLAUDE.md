# Millet Melodies — project memory

## What this is

Marketing site for **Millet Melodies** (brand name) / **Nellai Thati Bellam Coffee** (legal business name) — a Telangana millet breakfast + catering spot in Bachupally, Hyderabad. Single-location restaurant; site doubles as catering lead generator.

- Live domain: `https://milletmelodies.com` (note: NOT `milletmillodies.com` — that's a legacy misspelling, see [`data/site.json`](data/site.json) and recent commit `d16a566`)
- Contact email: `svadhistamgroup@gmail.com`
- Parent group: Svadhistam Group
- Phone / WhatsApp: `+91 70759 27006`

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 3.4
- MDX via `@next/mdx` (used for blog posts under [`app/blog/[slug]`](app/blog/[slug]))
- Fonts: Playfair Display (display) + Lato (body), loaded via `next/font/google`
- Icons: `lucide-react`
- **Package manager: pnpm** (`pnpm-lock.yaml` is the source of truth — don't run `npm install`)

## Layout

- [`app/page.tsx`](app/page.tsx) is a thin shell that renders [`components/PremiumSite.tsx`](components/PremiumSite.tsx) — that ~700-line component IS the homepage (hero, menu, story, FAQs, contact, etc.)
- [`app/layout.tsx`](app/layout.tsx) holds all the SEO metadata, JSON-LD schema, fonts, Open Graph
- [`data/*.json`](data/) drives content — edit JSON, not the component, when changing menu items, FAQs, hours, story
  - `site.json` — business name, address, hours, phone, social, geo
  - `menu.json` — menu items
  - `millets.json` — millet varieties used
  - `faqs.json` — FAQ content
  - `story.json` — origin story
- Static legal pages: [`app/privacy-policy`](app/privacy-policy), [`app/terms`](app/terms)
- SEO infrastructure: [`app/sitemap.ts`](app/sitemap.ts), [`app/robots.ts`](app/robots.ts), JSON-LD schema in `layout.tsx`

## Working with content

Almost every "update X on the site" request is a JSON edit:
- New menu item → `data/menu.json`
- Change hours / address / phone → `data/site.json` (then verify the JSON-LD in `layout.tsx` still matches)
- New FAQ → `data/faqs.json`
- New blog post → `app/blog/[slug]/page.tsx` or an MDX file

When changing `site.json` fields that also appear in `layout.tsx` metadata or JSON-LD (address, hours, phone, geo), update both — they're not auto-linked.

## Dev commands

```
pnpm install
pnpm dev      # next dev
pnpm build    # next build
pnpm start    # production server
pnpm lint
```

## Deployment

Not yet documented — TBD. When deploy pipeline is wired up, capture it here (host, env vars, CI workflow, prod backup ritual).

## SEO discipline (don't break)

- Domain everywhere is `milletmelodies.com` (single L). The legacy `milletmillodies` only appears intentionally in the keyword list for backlink coverage.
- Google Search Console verification meta tag lives in `layout.tsx` — don't strip on refactors.
- JSON-LD `LocalBusiness` schema in `layout.tsx` must stay in sync with `site.json`.
- `sitemap.ts` and `robots.ts` are dynamic — adding new routes means they show up automatically only if the routes are statically discoverable; verify after adding new top-level pages.

## When user says…

- "the site" → this project
- "the brand" → Millet Melodies (consumer-facing)
- "the business" → Nellai Thati Bellam Coffee (legal entity, GST, GBP)
- "the menu" → `data/menu.json`
- "fix the domain" → check for `milletmillodies.com` typos
