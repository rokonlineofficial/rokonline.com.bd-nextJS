# Rok Online — rokonline.com.bd

Next.js (App Router) + TypeScript + Tailwind CSS v4 + GSAP/Lenis.

## Run locally

```sh
npm install
npm run dev        # http://localhost:3000
```

## Production

```sh
npm run build
npm run start
```

Deploys as-is on Vercel, or any Node host (`npm run build && npm run start`).

## Structure

- `src/app/` — routes (`/`, `/about`, `/services`, `/services/[slug]`, `/team`, `/process`, `/portfolio`, `/testimonials`, `/contact`), `sitemap.ts`, `robots.ts`
- `src/components/` — layout, sections, animation helpers
- `src/lib/site-data.ts` — all site content (company info, services, team, portfolio, testimonials)
- `src/lib/seo.ts` — shared page metadata helper

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) if the domain changes.
