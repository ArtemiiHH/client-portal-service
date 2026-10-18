# BrokerUX consulting website

React/Vite website with three routes following `BrokerUX-Website-Restructure.md`:

- `/`: approved five-section Home (Hero, How It Works, What You Get, Pricing, Final CTA).
- `/about`: introduction, four-step approach, development-only demo testimonials, and final CTA.
- `/contact`: discovery-call invitation, configurable contact details, and static booking placeholder.

All pages share the dark/lime design, locally bundled Manrope typography, Phosphor icons, header, and footer. No backend or scheduling integration is implemented.

## Setup

Use Node.js 22.12+ (or 20.19+) and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open the local URL printed by Vite. Internal links use client-side History API navigation to switch React pages without reloading the document. Back/forward navigation, section anchors, and modified clicks for new tabs are supported. Direct `/about`, `/contact`, and `/#pricing` links work with Vite's HTML fallback.

## Configuration

Provide real public values in `.env.local`, then restart Vite or rebuild:

```dotenv
VITE_CONTACT_EMAIL=
VITE_CONTACT_PHONE=
VITE_LINKEDIN_URL=
VITE_PRIVACY_URL=
VITE_BOOKING_URL=
```

`src/siteConfig.js` centralizes all contact values. Without configured details, Contact shows explicitly labeled dummy email/phone text without active mailto/tel links. Email, LinkedIn, and Privacy Policy appear in the footer only when their destinations are valid and configured. Phone values accept international numbers with spaces, parentheses, dots, and hyphens.

Every call link currently leads to `/contact`, even if `VITE_BOOKING_URL` is supplied. That variable is reserved for a future integration and does not activate booking. `BookingPlaceholder` in `src/App.jsx` is the isolated replacement point; its visual call button is disabled and labeled available soon. No calendars, available times, forms, registration, API requests, or booking success states exist.

The About page's two fictional sample reviews have conspicuous labels in development. `siteConfig.showDemoTestimonials` is false in production builds, hiding the entire section. Replace samples with genuinely verified, permission-based feedback before publishing that section.

Environment values are public; never include secrets.

## Build and hosting

```bash
npm run build
npm run preview
```

Deploy `dist/` to a static host. **Configure an SPA fallback/rewrite to `/index.html` for `/about` and `/contact`**, so direct navigation and refresh serve the React app instead of a 404. Keep existing assets served normally. The default base path is `/`.

## Verification

```bash
npm run check:markup
```

Checks all three rendered routes, approved Home order, shared navigation and booking destinations, About stages/sample visibility, disabled static booking area, and configured contact-link validation without a browser.

```bash
npx playwright install --with-deps chromium
npm run dev
# In another terminal:
npm run check
```

Browser checks cover all three pages at 320, 390, 768, 1024, and 1440px: overflow, first-viewport Home CTA, heading structure, active navigation, sample labels, disabled booking, WCAG A/AA axe checks, mobile navigation, Escape dismissal, resizing, and cross-page booking anchors. Capture output is `.impeccable/review/{home,about,contact}-{desktop,mobile}.png`. Set `CHROMIUM_PATH` for an existing browser. To check the production preview, set `BASE_URL=http://localhost:4173 EXPECT_PRODUCTION=1`.

## Files

- `src/App.jsx`: page components, shared navigation/footer/actions, and `BookingPlaceholder`.
- `src/App.module.css`: approved visual tokens, responsive layouts, focus/hover/disabled states, and reduced-motion/transparency support.
- `src/siteConfig.js`: public configuration and validators.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`, `.impeccable/surface.md`: product and design context.

Legacy image assets are archived and not loaded by these pages.
