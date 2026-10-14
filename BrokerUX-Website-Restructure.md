# BrokerUX — Website Restructure & Implementation Brief

## Project overview

**Brand:** BrokerUX  
**Website type:** Single-page, premium B2B consulting landing page  
**Audience:** Small to mid-sized Forex/CFD brokers, primarily Heads of Product, Product Directors, COOs, and founders. Secondary audience: Forex CRM and client portal technology providers.  
**Primary objective:** Convert relevant visitors into discovery calls.  
**Primary offer:** Client Portal UX Audit & Improvement Roadmap — **€2,500 fixed project fee**, approximately **2–3 weeks**.

BrokerUX audits existing Forex/CFD client portals, identifies usability friction, and delivers prioritized, development-ready recommendations. It **supports** existing product, design, and engineering teams rather than replacing them. This is a specialized consulting engagement, **not** a SaaS product or a full portal rebuild.

## Core implementation instruction

**Restructure the existing website to follow exactly the five sections below, in this order:**

1. Hero
2. How It Works
3. What You Get
4. Pricing
5. Final Call to Action

Keep a minimal navigation header and footer outside these five sections. Build a **single scrolling page**; do not add separate About, Services, or Pricing pages. Use only one prominent conversion action throughout: **Book a Discovery Call** (or **Discuss Your Portal** where specified), linking to the same booking destination. If no booking URL is configured, use a clearly marked placeholder rather than inventing one.

The experience must feel clean, direct, premium, and credible. Prioritize precise copy and legibility over decorative elements.

---

## Design references & direction

Use the supplied reference images as *stylistic guidance*, not as content to copy:

- **`aeo-engine-reference` — primary layout inspiration:** direct hero, clear step-by-step explanation, transparent deliverables and pricing, prominent CTAs. Make BrokerUX **much shorter and simpler** than this reference.
- **`fspadvisory-reference` — tone and credibility:** restrained, premium, industry-relevant fintech/consulting presentation and typography.
- **`redditagency-reference` — accessible copy and CTA clarity:** conversational, problem-first messaging and simple navigation. Do **not** recreate lengthy marketing sections.

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
| Responsive | Three-column process becomes stacked on mobile; no horizontal overflow |

Avoid excessive gradients, floating objects, flashy 3D effects, large illustrations, and SaaS-dashboard styling. A small original annotated UX audit or portal mockup may be used when it concretely demonstrates the deliverables.

---

## Header / navigation

**Left:** BrokerUX wordmark.  
**Right:** `How It Works` · `Pricing` · `Contact` · primary button `Book a Call ↗`.

- `How It Works` scrolls to Section 2.
- `Pricing` scrolls to Section 4.
- `Contact` scrolls to Section 5.
- `Book a Call` opens the configured discovery-call booking destination.
- Keep the header compact, polished and optionally sticky with a restrained translucent background.
- On mobile, use a clean accessible navigation pattern; do not clutter the header.

---

## Section 1 — Hero

**Purpose:** A visitor should understand the target audience and service in five seconds.

**Eyebrow:**
> UX CONSULTING FOR FOREX & CFD BROKERS

**H1:**
> Better Client Portals for Forex Brokers.

**Supporting copy:**
> We audit your client portal, identify usability issues, and deliver a prioritized improvement plan your product and development teams can execute.

**Primary CTA:** `Book a Discovery Call →`  
**Secondary text link:** `View Our Process ↓` (scroll to Section 2)

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

**Pricing CTA:** `Discuss Your Portal →` (same booking destination)

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

**CTA:** `Book a Discovery Call →`  
**Reassurance line:**
> No commitment. Just a conversation about your portal.

Use a centered, spacious, prominent ending with a single clear button. No complex form or additional sales sections.

---

## Footer

Keep very small and restrained:

- BrokerUX wordmark
- Contact email (only if configured)
- LinkedIn profile (only if provided)
- Privacy Policy
- Copyright year and BrokerUX

Do not invent contact information, testimonials, partner logos, or credentials.

---

## Page structure at a glance

```text
HEADER
  BrokerUX                         How It Works | Pricing | Contact | Book a Call

01 HERO
  UX CONSULTING FOR FOREX & CFD BROKERS
  Better Client Portals for Forex Brokers.
  One-sentence explanation
  [Book a Discovery Call]   View Our Process
  Fixed pricing · 2–3 weeks · Built for brokers

02 HOW IT WORKS
  [01 Audit]    [02 Prioritize]    [03 Roadmap]
  One-sentence reassurance about internal teams

03 WHAT YOU GET
  Deliverables list        Optional illustrative audit mockup

04 PRICING
  One Clear Package
  [Client Portal UX Audit & Improvement Roadmap — €2,500]
  Inclusions + [Discuss Your Portal]

05 FINAL CTA
  Your Client Portal Can Be Better.
  [Book a Discovery Call]

FOOTER
  BrokerUX · Contact · LinkedIn · Privacy Policy
```

## Content and conversion rules

1. **Write for brokerage decision-makers**, not general consumers or traders.
2. Explicitly say **Forex/CFD broker client portals**; avoid generic agency language.
3. Present the offer as **UX audit + recommendations + targeted Figma redesign + implementation roadmap** — **not** development or a completed portal overhaul.
4. Use short, precise, credible claims. Do not promise increased conversion, fewer support tickets, regulatory compliance, or other unverified results.
5. Maintain **one primary action** throughout the page: booking an introductory call. Repeat it in the hero, pricing, final CTA, and header.
6. Never add fake client logos, revenue metrics, case studies, quotes, or badges.
7. Keep total page length intentionally short. No separate About section, long FAQ, blog feed, comparison table, or irrelevant service catalogue.
8. Keep the **€2,500 fixed price** and **2–3 week timeline** consistent throughout.
9. Ensure high-contrast accessible text, logical heading hierarchy, keyboard navigation, visible focus states, responsive behavior, and a fast-loading page.
10. If restructuring an existing codebase, **reuse its established framework/components where suitable** rather than rebuilding unrelated parts. Remove obsolete sections and dead navigation links.

## Acceptance criteria

The completed site should have exactly five main sections in the prescribed order, plus header/footer. It should convey within one glance **who BrokerUX serves, what it does, what the deliverables are, what it costs, and how to engage**. All CTAs should lead to the same configurable discovery-call destination. It should match the specified dark, restrained, lightly glassy aesthetic and look polished on desktop and mobile.
