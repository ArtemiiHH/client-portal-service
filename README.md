# BrokerUX consultancy website

Single-page React/Vite website following `BrokerUX-Website-Restructure.md`: Hero, How It Works, What You Get, Pricing, and Final Call to Action, plus minimal header and footer. The supplied reference informs the centered typography, fine borders, pill buttons, and restrained dark surfaces; the brief supplies the lime palette and exact copy.

## Setup

Node.js 22.12+ (or 20.19+) and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

## Configuration

Set real public destinations in `.env.local`, then restart Vite or rebuild:

```dotenv
VITE_BOOKING_URL=
VITE_CONTACT_EMAIL=
VITE_LINKEDIN_URL=
VITE_PRIVACY_URL=
```

All four call buttons use the same validated booking URL. Without one, they scroll to a clearly marked booking placeholder. Contact email and LinkedIn appear only when configured. An unconfigured privacy destination is labeled coming soon rather than linking to an invented policy. Environment values are public: do not include secrets.

## Production

```bash
npm run build
npm run preview
```

Deploy `dist/` to a static host. The default base path is `/`. There is no backend, form, or personal-data storage.

## Browser verification

```bash
npx playwright install --with-deps chromium
npm run dev
# In another terminal:
npm run check
```

Checks cover 320, 390, 768, 1024, and 1440 pixel widths, section order, single package, shared booking destinations, horizontal overflow, headline wrapping, first-viewport CTA, WCAG A/AA axe findings, mobile navigation, process links, booking placeholder, and browser exceptions. Screenshots and results are written to `.impeccable/review/`. Set `CHROMIUM_PATH` to use an existing browser executable.

## Structure

- `src/App.jsx`: reusable navigation, buttons, brand, and five sections.
- `src/App.module.css`: visual tokens, responsive layouts, interaction states, and reduced-motion/transparency support.
- `src/siteConfig.js`: contact configuration and destination validation.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`, and `.impeccable/surface.md`: product and design context.

Fonts are bundled locally from Fontsource Manrope. Icons use Phosphor. No fictitious clients, testimonials, credentials, or sample client work are included. Legacy image assets remain archived and are not loaded by the page.
