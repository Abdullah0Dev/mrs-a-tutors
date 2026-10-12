# Mrs A Tutors – Next.js site

Next.js 15 (App Router) + TypeScript. Fully static, SEO-ready, no UI library.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Your logo
Drop your `logo.png` into `public/` (replace the placeholder). The header sizes it to 68px tall automatically.

## Structure
```
src/
  app/            layout (fonts + SEO metadata), page, robots, sitemap, OG image, favicon
  components/
    layout/       Header (client: menu, scroll state), Footer
    sections/     Hero · Services · About · Trust · HowItWorks · Testimonials · Faq · Contact
                  (each folder = component + its own .css)
    ui/           Icon, SectionHead, SvgSprite (shared illustrations), RevealObserver
  data/           all copy: site info, services, trust, steps, testimonials, faqs
  lib/            reveal() scroll-animation helper, JSON-LD schema
  styles/         base.css, animations.css, reveal.css
```
Edit text in `src/data/*` – components just render it.

## SEO
Metadata + Open Graph + Twitter cards, canonical URL, `sitemap.xml`, `robots.txt`, generated OG image,
JSON-LD (EducationalOrganization + FAQPage), semantic HTML, self-hosted fonts via `next/font`.
Set your live domain: copy `.env.example` to `.env.local` (and add `NEXT_PUBLIC_SITE_URL` on Vercel).

## Animations
Hero entrance + float, scroll-reveal (`reveal()` + `RevealObserver`), card/button hovers, FAQ open,
header shadow, mobile menu. All disabled for `prefers-reduced-motion`.

- arrows