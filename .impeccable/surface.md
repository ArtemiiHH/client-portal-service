# BrokerUX three-page website

Mode: Persuade. Audience: Forex/CFD broker product leaders. Job: understand the audit, deliverables, price, and next step, then arrange a discovery call.

## Direction contract

THESIS: A client portal audit turns usability friction into a prioritized improvement plan for the existing team.

OWN-WORLD: User-pinned near-black #080A0D, charcoal #151A22, lime #D7F871, off-white #F5F6F7, and gray #929AA5. Manrope typography, centered hero, lightly glassy panels, precise hairlines, and pill actions replace the previous orange design.

STORY: Home (`/`) retains exactly five main sections, in order: Hero → How It Works → What You Get → Pricing → Final Call to Action. Shared sticky navigation and restrained footer sit outside that sequence. About (`/about`) presents introduction → 2×2 approach cards → two development-only sample feedback cards → final contact CTA. Contact (`/contact`) presents a two-column invitation/contact-details and static BookingPlaceholder layout. Inner-page grids stack on mobile.

FIRST VIEWPORT: Centered eyebrow, large two-line headline inside a fine rectangular frame, concise explanation, discovery-call action, process text link, and understated scope indicators. No large illustration.

FORM: Three numbered process cards become stacked on mobile. Deliverables are a ruled list, without invented sample client work. Pricing presents one €2,500 fixed package with approximately 2–3 week delivery, inclusions, and exclusions. The final CTA is centered and spacious. No FAQ or contact form.

ACTION: All call links target `/contact#booking`; About’s Get in Touch targets `/contact`. The reserved `bookingUrl` is ignored. BookingPlaceholder has a focusable `#booking` target, a disabled visual CTA, and visible “Booking available soon” status. There are no slots, calendar API, embed, backend, or booking state. Valid configured real email/phone enable mailto/tel links; missing details remain labeled inactive placeholders. Footer email/LinkedIn/privacy appear only with valid configuration; unconfigured privacy is absent.

NAVIGATION: Native anchors select `/`, `/about`, and `/contact` from pathname; each route has a title and current-page navigation state. Static hosting requires SPA fallback to the entry HTML for direct visits and refreshes on inner routes. Home’s process link uses `/#process`.

EVIDENCE: Sample feedback is visibly labeled fictional and gated by `!import.meta.env.PROD`, so production omits it. No verified client evidence is available.

FINISH: Documentation reflects source implementation. Production build and static rendered-markup checks passed for all three routes and required content/CTA behavior. Browser checks remain blocked by unavailable Chromium / missing libnspr4.so; no valid current screenshots or successful visual review are claimed. Detector warnings for contextual font sizes/radii are advisory; the disabled-action shade #343e25 is intentional and documented.
