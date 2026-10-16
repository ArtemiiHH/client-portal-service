# Product

<!-- impeccable:product-schema 1 -->

## Platform
web

## Stack
React.js, Vite, CSS Modules, Phosphor icons, reusable components, responsive layouts, accessible interactions.

## Users
Heads of Product, Product Directors, COOs, and founders of small and mid-sized Forex/CFD brokers. Secondary audience: Forex CRM and client portal technology providers.

## Product Purpose
Convert relevant visitors into discovery calls for a fixed-scope client portal UX audit and improvement roadmap that supports existing product, design, and development teams.

## Capabilities and Constraints
One public package: Client Portal UX Audit & Improvement Roadmap, €3,000 per project, approximately 2–3 weeks. Up to 10 screens and 3 critical journeys; annotated findings with severity and recommendations; benchmark of 2–3 accessible competitor experiences; prioritized backlog with suggested effort and selected acceptance criteria; Figma redesign of 2 high-impact screens or 1 contained workflow; suggested 90-day roadmap; final presentation and one feedback round.

Production implementation, full portal rebuilds, regulatory audits, and guaranteed conversion improvements are excluded. Larger scopes may be discussed privately; smaller and expanded package price ranges are not displayed at launch.

Three routes share the header and footer: Home (`/`), About (`/about`), and Contact (`/contact`). Home retains exactly five sections: Hero, How It Works, What You Get, Pricing, and Final Call to Action. About adds a short introduction, four delivery stages, development-only illustrative feedback, and a closing contact action. Contact places an invitation and contact details beside a static booking placeholder. No additional marketing pages, FAQ, blog, complex form, backend, or scheduling integration.

## Brand Commitments
The three-page extension preserves the approved dark design world. The pinned foundation is near-black #080A0D, charcoal #151A22, soft lime #D7F871, off-white #F5F6F7, and muted gray #929AA5. Keep the tone restrained, credible, industry-specific, and concise, with spacious typography and subtle glass surfaces.

## Evidence on Hand
BrokerUX-Website-Restructure.md is the current implementation brief. Earlier INSTRUCTIONS.md and broker-client-portal-ux-service-description.md provide background where consistent with it. No client credentials, testimonials, logos, or legitimate sample deliverables have been supplied. Do not invent evidence or outcomes.

## Open Decisions
Real email and phone are supplied through `VITE_CONTACT_EMAIL` and `VITE_CONTACT_PHONE` in `src/siteConfig.js`; valid values enable mailto/tel links. Otherwise Contact shows explicitly labeled, inactive placeholders, and the footer omits email. LinkedIn and privacy links appear only with valid configured URLs; unconfigured privacy is absent. Every call link targets `/contact#booking`; About’s Get in Touch targets `/contact`. `bookingUrl` is reserved and ignored until the owner replaces `BookingPlaceholder`, whose CTA is disabled with a visible availability message. Fictional feedback is conspicuously labeled and shown only through `!import.meta.env.PROD`; no production endorsements are supplied. Do not fabricate identity or evidence.

Routes use native anchors and pathname selection, with trailing-slash normalization and route-specific titles. Static hosting must serve the SPA entry for `/about` and `/contact`, including direct visits and refreshes.

## Product Principles
Keep scope and price explicit. Support internal teams. Make deliverables tangible and actionable. Use one discovery-call destination across all conversion CTAs. Distinguish potential benefits from guaranteed outcomes.
