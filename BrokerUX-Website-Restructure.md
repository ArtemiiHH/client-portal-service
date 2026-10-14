# BrokerUX — Website Restructure & Implementation Brief

## Project overview

**Brand:** BrokerUX  
**Website type:** Three-page, premium B2B consulting website (Home, About Us, Contact)  
**Audience:** Small to mid-sized Forex/CFD brokers, primarily Heads of Product, Product Directors, COOs, and founders. Secondary audience: Forex CRM and client portal technology providers.  
**Primary objective:** Convert relevant visitors into discovery calls.  
**Primary offer:** Client Portal UX Audit & Improvement Roadmap — **€2,500 fixed project fee**, approximately **2–3 weeks**.

BrokerUX audits existing Forex/CFD client portals, identifies usability friction, and delivers prioritized, development-ready recommendations. It **supports** existing product, design, and engineering teams rather than replacing them. This is a specialized consulting engagement, **not** a SaaS product or a full portal rebuild.

## Core implementation instruction

Restructure the existing website into **three routes** using a shared header, footer, design system, and responsive React components:

1. **Home (`/`)** — keep exactly five sections, in this order: Hero → How It Works → What You Get → Pricing → Final CTA.
2. **About Us (`/about`)** — Introduction → How We Work → Testimonials (clearly labeled demo placeholders) → Final CTA.
3. **Contact (`/contact`)** — Introductory copy and contact details beside a **nonfunctional booking-widget placeholder**, then footer.

Do not create any additional marketing pages, functional scheduling system, backend, calendar API, or booking availability data. The site's aim is to invite discovery calls, but **Calendly (or an equivalent external scheduler) will be connected later by the owner**. Reserve one isolated, easy-to-replace booking component. Until configured, booking buttons must lead to `/contact#booking` (or scroll to the booking placeholder when already on Contact), **not** claim that an appointment is booked. Email/phone links only become active after real contact details have been supplied.

Keep the writing clear, direct, premium, credible, and tailored to Forex/CFD broker decision-makers.

---

## Design references & direction

Use the supplied reference images as *stylistic guidance*, not as content to copy:

- **`aeo-engine-reference` — primary layout inspiration:** direct hero, clear step-by-step explanation, transparent deliverables and pricing, prominent CTAs. Make BrokerUX **much shorter and simpler** than this reference.
- **`fspadvisory-reference` — tone and credibility:** restrained, premium, industry-relevant fintech/consulting presentation and typography.
- **`redditagency-reference` — accessible copy and CTA clarity:** conversational, problem-first messaging and simple navigation. Do **not** recreate lengthy marketing sections.
- **`aeo-about` — About page inspiration:** short introduction, method/process steps, and compact review cards. No inflated statistics, huge team directory, or multi-section case studies.
- **`aeo-contact` — Contact page inspiration:** simple two-column call invitation and scheduling area. No client-logo strips, performance claims, FAQ, or complex scheduler build.

### Visual system

| Element | Direction |
|---|---|
| Overall style | Minimal premium B2B consultancy; modern dark mode |
| Page background | Near-black `#080A0D` |
| Surface / card background | Charcoal `#151A22` |
| Primary accent | Soft lime `#D7F871` |
| Primary text | Off-white `#F5F6F7` |
| Secondary text | Muted gray `#929AA5` |
| Typography | Contemporary sans serif, bold clear headlines, compact readable body text |
| Cards | Restrained glass/translucent effect, subtle 1px borders, modest blur and radius |
| Layout | Spacious, centered content; strong hierarchy; consistent max-width |
| Animations | Subtle hover and scroll reveals only; respect reduced-motion preferences |
| Responsive | Home process cards stack on mobile; About uses 2×2 desktop process cards that stack on mobile; Contact two columns stack on mobile; no horizontal overflow |

Avoid excessive gradients, floating objects, flashy 3D effects, large illustrations, and SaaS-dashboard styling. A small original annotated UX audit or portal mockup may be used when it concretely demonstrates the deliverables.

---

## Shared header / navigation

**Left:** BrokerUX wordmark linking to `/`.  
**Right:** `Home` · `About` · `Contact` · primary button `Book a Call ↗`.

- Home links to `/`; About links to `/about`; Contact links to `/contact`.
- `Book a Call` routes to `/contact#booking` until a real scheduling service is configured.
- On the Home page, the `View Our Process` link scrolls to `/#process`; pricing anchor is `/#pricing`.
- Keep the header compact, optionally sticky with a restrained translucent glass surface; provide a simple accessible mobile navigation pattern.
- Shared footer includes BrokerUX, links to About and Contact, a Privacy Policy link **only if a real page/URL is provided**, and optional configured LinkedIn/email. No broken links, invented details, or nonfunctional promises.

---

## Section 1 — Hero

**Purpose:** A visitor should understand the target audience and service in five seconds.

**Eyebrow:**
> UX CONSULTING FOR FOREX & CFD BROKERS

**H1:**
> Better Client Portals for Forex Brokers.

**Supporting copy:**
> We audit your client portal, identify usability issues, and deliver a prioritized improvement plan your product and development teams can execute.

**Primary CTA:** `Book a Discovery Call →` (navigate to `/contact#booking` until Calendly is connected)  
**Secondary text link:** `View Our Process ↓` (scroll to `#process`)

**Trust / scope indicators**, presented in one understated horizontal row:
- Fixed project pricing
- 2–3 week delivery
- Built for brokers

**Layout:** Large prominent headline; narrow, centered text column; generous vertical whitespace. Use the lime accent sparingly for the main CTA. Optional subtle portal-audit visual only if it does not crowd the hero.

---

## Section 2 — How It Works

**Purpose:** Explain the full engagement in three simple steps.

**Section heading:**
> How BrokerUX Works

Use **three numbered cards side by side on desktop**, stacked on mobile, with consistent small icons.

### 01. We Audit Your Portal
> We review up to 10 screens and 3 critical user journeys, identifying usability issues, confusing flows, and friction points.

### 02. We Prioritize Improvements
> Every finding is documented and assessed by severity, with recommended fixes and a prioritized backlog for your team.

### 03. We Deliver Your Roadmap
> You receive selected screen redesigns in Figma, a competitor benchmark, and a suggested 90-day improvement roadmap.

**Closing reassurance, below cards:**
> Everything is designed to help your existing product, design, and development teams move forward — without replacing them.

Keep cards visually simple and copy short. No unnecessary extra process stages.

---

## Section 3 — What You Get

**Purpose:** Make the purchase tangible, concrete, and credible.

**Section heading:**
> What You Get

**Suggested desktop layout:** Two columns: deliverables on the left; a realistic **original sample** annotated audit, Figma screen, or before-and-after mockup on the right. On mobile, stack vertically. If no legitimate sample asset exists, build the clean deliverables list without fake client work.

Show these five deliverable groups:

1. **UX Audit Report** — Annotated screenshots, usability issues, severity ratings, and recommendations.
2. **Competitor Benchmark** — Comparison against 2–3 accessible competitor experiences.
3. **Prioritized Backlog** — Clear improvement recommendations, suggested effort, and selected acceptance criteria.
4. **Figma Redesign** — Two high-impact screens or one contained workflow redesigned.
5. **90-Day Roadmap** — A suggested implementation plan, plus a final presentation and one feedback round.

Use small check-circle icons and concise descriptions. A sample deliverable should be labeled **Sample / Illustrative**, not presented as actual client results.

---

## Section 4 — Pricing

**Purpose:** Show one clear offer and remove pricing ambiguity.

**Section heading:**
> One Clear Package

Use **one featured pricing card only**, not a three-tier pricing table.

**Card eyebrow:** `BROKERUX CORE PACKAGE`  
**Badge:** `Fixed Scope`

**Package name:**
> Client Portal UX Audit & Improvement Roadmap

**Price:** `€2,500 / project`  
**Timing:** `Delivered in approximately 2–3 weeks.`

**Inclusions:**
- Audit of up to 10 portal screens
- Review of 3 key user journeys
- Competitor benchmark (2–3 accessible experiences)
- Detailed UX findings and priorities
- 2 redesigned screens or 1 contained workflow
- Suggested 90-day improvement roadmap
- Final presentation + 1 feedback round

**Pricing CTA:** `Discuss Your Portal →` (navigate to `/contact#booking`)

**Small scope note:**
> Larger scopes available upon request. Production implementation, complete portal rebuilds, regulatory audits, and guaranteed conversion improvements are not included.

Do **not** display the optional focused audit (€800–€1,200) or expanded optimization (€3,500–€5,000+) as additional public packages at launch. They can be discussed privately if relevant.

---

## Section 5 — Final CTA

**Purpose:** Offer a clear next step to visitors who have reviewed the offer.

**Heading:**
> Your Client Portal Can Be Better.

**Supporting copy:**
> Let's identify what's holding it back and discuss how BrokerUX can help your team improve it.

**CTA:** `Book a Discovery Call →` (navigate to `/contact#booking`)  
**Reassurance line:**
> No commitment. Just a conversation about your portal.

Use a centered, spacious, prominent ending with a single clear button. No complex form or additional sales sections.

---

## Page 2 — About Us (`/about`)

**Purpose:** Establish domain focus, describe the consulting engagement in more detail, and eventually build genuine trust through client feedback. Keep the page much shorter than the AEO example.

### A. About introduction

**Eyebrow:** `ABOUT BROKERUX`

**H1:**
> Built Around Better Client Experiences.

**Supporting copy:**
> BrokerUX is an independent UX consulting service helping Forex and CFD brokers identify usability problems and turn them into actionable improvements.

Use a centered, generous hero area and no large photography or invented team portraits. Do not imply that BrokerUX has a team if it operates solo.

### B. How We Work

**Eyebrow:** `OUR APPROACH`  
**Heading:** `How We Work`  
**Supporting line:** `A simple, transparent process from start to finish.`

Present **four cards** as a restrained 2-by-2 grid on desktop, stacked on smaller screens:

1. **01 — Discovery** — We discuss your portal, its users, and the workflows that need attention.
2. **02 — Audit & Research** — We review selected screens, examine user journeys, and benchmark competitors.
3. **03 — Recommendations** — We document issues, propose redesigns, and prioritize improvements.
4. **04 — Delivery** — You receive the audit findings, Figma designs, and a suggested 90-day roadmap.

These four detailed delivery stages intentionally complement, rather than replace, the concise three-step summary on the Home page.

### C. Testimonials — demo only

**Eyebrow:** `CLIENT FEEDBACK`  
**Heading:** `What Clients Say`  
**Supporting text while no verified reviews exist:** `Illustrative examples — replace with verified client feedback before publication.`

Use **two simple testimonial-style cards side by side on desktop**, stacked on mobile. Use the following text strictly as **clearly visible sample content**:

**Sample card 1:**
> “The audit gave our team a much clearer picture of where users were struggling, with practical recommendations we could act on.”

Attribution: `Example only · Forex Product Lead (fictional)`

**Sample card 2:**
> “We appreciated the structured approach and the fact that the deliverables were designed for our existing product team.”

Attribution: `Example only · Brokerage Operations Director (fictional)`

**Non-negotiable:** These are **invented design placeholders, not customer endorsements**. They must never be shown as real client feedback, given fictitious names/photos, or marked as verified. Add conspicuous `SAMPLE / NOT A REAL TESTIMONIAL` labels on each card, and make the section easy to hide until genuine, permission-based quotes are available. Prefer real testimonials on a production launch; if none exist, hiding the whole section is acceptable while retaining the components in code.

### D. Final CTA

**Heading:** `Let's Improve Your Client Portal.`

**Copy:** `Tell us about your portal and the challenges your team is facing.`

**CTA:** `Get in Touch →` → `/contact`.

---

## Page 3 — Contact (`/contact`)

**Purpose:** Help prospective clients understand what a discovery call covers and find real contact information or the future booking integration. Use AEO Contact's two-column composition but substantially simplify it.

### A. Left column — invitation and contact details

**Eyebrow:** `CONTACT BROKERUX`

**H1:**
> Let's Talk About Your Client Portal.

**Supporting copy:**
> Book a discovery call to discuss your portal, current challenges, and whether BrokerUX is the right fit for your team.

**Subheading:** `What we'll discuss:`

Show four short checked points:
- Your existing client portal
- The workflows that need improvement
- Our audit process and deliverables
- Scope, timeline, and next steps

**Contact details:** Display two small rows, each with an icon and label:
- **Email:** `your-email@example.com` — **placeholder, must be replaced before publishing**.
- **Phone:** `+XXX XX XXX XXX` — **placeholder, must be replaced before publishing**.

Use a single configuration/constants location for both real details, and only activate `mailto:` and `tel:` links when real values are configured. Never invent a real number or email address.

### B. Right column — booking placeholder

A charcoal/glass card with:
- Calendar icon and heading: `Schedule a Call`
- Explanation: `Choose a convenient time to speak with BrokerUX.`
- A clearly marked framed region with `Booking Calendar` and `Calendly integration placeholder`
- Visual CTA: `Book a Discovery Call →`
- Small note: `No commitment · Introductory call`

**Important functional requirements:**
- Do **not** build a calendar, appointment selector, time slots, registration form, back end, booking state, Calendly embed, or API integration at this stage.
- Use a well-named `BookingPlaceholder` component with an element `id="booking"` to support the site's anchors.
- The visual CTA inside the placeholder should be **disabled or labeled `Booking available soon`** until a real scheduling URL/embed is set; never be an inert button that looks functional or suggests booking succeeded.
- In the future, the owner can replace this component with Calendly. Keep sizing/padding suitable for an embedded scheduler without pretending one is operational.
- On mobile, stack the left column above the booking card.

### C. End of page

Directly follow with the shared minimal footer. **Do not** add statistics, logo carousels, client results, an FAQ, case studies, or redundant sections.

---

## Shared footer

Keep very small and restrained across all three pages:

- BrokerUX wordmark
- `Home` / `About` / `Contact`
- Actual contact email and LinkedIn **only if provided**
- Privacy Policy **only if a valid destination exists**
- Copyright year and BrokerUX

Never invent contact information, verified testimonials, clients, partner logos, or credentials.

---

## Three-page structure at a glance

```text
SHARED HEADER
  BrokerUX             Home | About | Contact | Book a Call

HOME (/)
  01 Hero
  02 How It Works (Audit → Prioritize → Roadmap)
  03 What You Get (deliverables + optional sample)
  04 Pricing (one €2,500 package)
  05 Final CTA → /contact#booking

ABOUT (/about)
  01 Short Introduction
  02 How We Work (Discovery → Audit → Recommendations → Delivery)
  03 Testimonials (two visually labeled fictional placeholders;
      hide in production until verified feedback is available)
  04 Final CTA → /contact

CONTACT (/contact)
  01 Introduction + what the call covers
  02 Email and phone (configuration placeholders)
  03 BookingPlaceholder (#booking, not a working scheduler)

SHARED FOOTER
  BrokerUX · Home · About · Contact · optional real contact links
```

## Content and conversion rules

1. **Write for brokerage decision-makers**, not general consumers or traders.
2. Explicitly say **Forex/CFD broker client portals**; avoid generic agency language.
3. Present the offer as **UX audit + recommendations + targeted Figma redesign + implementation roadmap** — **not** development or a completed portal overhaul.
4. Use short, credible claims. Never guarantee conversion uplift, regulatory compliance, or measurable results without evidence.
5. Use one primary conversion journey: visitors navigate to `/contact#booking` to discuss a call; only enable real booking after the owner connects a scheduler.
6. The **two fictional testimonials** are *clearly labeled design-only samples*. Hide them before production unless genuinely verified feedback replaces them; never pass them off as customer statements.
7. Do not add extra marketing sections, generic FAQ, blog, staff directory, fictional case studies, partner logos, or performance metrics.
8. Keep the **€2,500 fixed price** and **2–3 week timeline** consistent.
9. Ensure accessible color contrast, logical heading hierarchy, keyboard navigation, focus states, mobile responsiveness, and reduced-motion support.
10. Reuse existing React.js project architecture and components where feasible. Use consistent header/footer and a single visual system. Remove obsolete sections and dead routes.
11. Keep phone, email, and future scheduler URL in a clearly marked configuration location and do not publish dummy values as real contact details.

## Acceptance criteria

- Three responsive React routes: `/`, `/about`, `/contact`.
- Home has **exactly the five approved sections** in order.
- About has a short introduction, four-step working process, two **unmistakably fictional** testimonial placeholders, and a closing CTA.
- Contact has a short introduction, four discussion points, configurable phone/email, and a static calendar-integration placeholder.
- No functional booking logic, fake available times, invented client successes, or fake verified endorsements.
- All call-related navigation goes to `/contact#booking` until the owner configures Calendly.
- Shared dark visual style: near-black base, muted glass cards, soft lime accent, generous spacing.
- Pages are legible, elegant, and easy to navigate on desktop and mobile.
