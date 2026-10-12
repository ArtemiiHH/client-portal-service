# Broker Portal UX consultancy website

A complete one-page React/Vite website with CSS Modules, based on the supplied dark glass/orange reference. Includes the hero, portal problems, deliverables, discovery/audit/handover process, pricing, consultant introduction, FAQ, discovery-call contact, and footer.

## Requirements and setup

Node.js 22.12+ (or 20.19+) and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Contact configuration

Set the following in `.env.local`, then restart Vite or rebuild:

```dotenv
VITE_CONSULTANT_NAME=Your real name
VITE_BOOKING_URL=https://your-real-booking-page.example
VITE_CONTACT_EMAIL=your-real-email@example.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-real-profile
```

The example values above are documentation placeholders; replace them with actual destinations. These values are public client-side configuration, so never put secrets here.

The discovery-call action opens the configured booking URL. If there is no valid booking URL, it opens an email when supplied. Until neither is supplied, the page explicitly shows that contact details are coming soon. The enquiry form validates its fields and copies a brief to the clipboard; it never submits or stores personal data. It has loading, success, and clipboard failure states. A live lead-capture launch requires your real contact destination.

The name and LinkedIn profile appear only when configured. No credentials, customer logos, portrait, or testimonials have been invented.

## Production

```bash
npm run build
npm run preview
```

Deploy the contents of `dist/` to a static host. The default Vite base path is `/`; for a subdirectory deployment, set `base` in `vite.config.js` before building. Configure public environment values in your host's build environment. This project has no server or database.

## Browser verification

```bash
npx playwright install --with-deps chromium
npm run dev
# In another terminal:
npm run check
```

`npm run check` uses Chromium and checks 320, 390, 768, 1024, and 1440 pixel widths, horizontal overflow, hero line count, first-viewport CTA, WCAG A/AA axe findings, mobile menu anchors, FAQ disclosure, clipboard success/error, and browser exceptions. Screenshots and results go to `.impeccable/review/`. To use an already installed Chromium, set `CHROMIUM_PATH` to its executable.

For production Lighthouse:

```bash
npm run preview
# In another terminal:
npx lighthouse http://localhost:4173 --chrome-flags="--headless --no-sandbox"
```

## Project structure

- `src/App.jsx`: reusable sections, navigation, FAQ, and contact interactions.
- `src/App.module.css`: visual tokens, component styles, and responsive behavior.
- `src/siteConfig.js`: public identity/contact configuration and URL validation.
- `public/images/glass-study.webp`: original AI-generated supporting image, compressed to about 96 KB. Created with the built-in imagegen tool; exact prompt is in `glass-study.prompt.txt` and its provenance sidecar. Original PNG retained under `.impeccable/assets/`.
- `PRODUCT.md`: factual service context and open identity details.
- `DESIGN.md` and `.impeccable/design.json`: implemented design system.
- `.impeccable/surface.md`: development-only design direction contract.

The page uses the dark theme explicitly requested in INSTRUCTIONS.md. Reduced motion and reduced transparency preferences are supported. Fonts are locally bundled from Fontsource Manrope; icons use one Phosphor family. Pricing and boundaries follow the supplied service description.
