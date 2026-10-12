---
name: Broker Portal UX
description: Dark architectural surfaces with muted orange accents.
colors:
  bg: "#101110"
  surface: "#181a18"
  text: "#f4f3ef"
  muted: "#b1b3aa"
  accent: "#ef9369"
  line: "#323630"
  button-ink: "#191b17"
  accent-hover: "#f5a782"
  supporting-text: "#c6c7c0"
  input-bg: "#111310"
  input-border: "#4d5048"
  placeholder: "#9ca093"
  error: "#ffc5a6"
  price-border: "#72533f"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(42px, 4.8vw, 70px)"
    fontWeight: 500
    lineHeight: "1.12"
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(34px, 3.6vw, 50px)"
    fontWeight: 500
    lineHeight: "1.17"
    letterSpacing: "-.04em"
  card-title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "27px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "-.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.85"
    letterSpacing: "normal"
  button:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: "1.35"
    letterSpacing: "normal"
rounded:
  panel: "16px"
  input: "8px"
  pill: "999px"
spacing:
  grid-gap: "16px"
  panel-inline: "36px"
  panel-block: "34px"
  section-desktop: "100px"
  section-mobile: "65px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.button-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "17px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-nav:
    backgroundColor: "{colors.text}"
    textColor: "{colors.button-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 18px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "17px 24px"
  input:
    backgroundColor: "{colors.input-bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.input}"
    padding: "12px 13px"
  glass-card:
    backgroundColor: "#181a18bd"
    rounded: "{rounded.panel}"
    padding: "34px 36px"
  tag:
    textColor: "{colors.supporting-text}"
    rounded: "{rounded.pill}"
    padding: "7px 11px"
---

# Design System: Broker Portal UX

## Overview

**Creative North Star: "Near-black architectural surfaces"**

The user-pinned black, dark glass, and orange reference establishes the visual authority. Near-black architectural surfaces, subtle borders, generous spacing, and restrained animation support a concrete professional offer. Manrope supplies both large headlines and compact labels; pill actions and softly rounded panels recur throughout.

**Key Characteristics:**

- Near-black surfaces and muted orange accents.
- Hairline boundaries and restrained glass.
- Generous section spacing with compact supporting text.

## Colors

Orange `accent` highlights primary actions, hero emphasis, icons, caret, selection, and keyboard focus. `bg` is the page canvas, `surface` the form panel, `text` the principal copy, and `muted` supporting copy and secondary heading spans. `line` separates sections and outlines panels. Warm brown and olive gradients distinguish deliverable panels without introducing a second action color. Values in the frontmatter are extracted from CSS, not a separate palette proposal.

## Typography

Manrope, sans-serif throughout. Local Fontsource Latin files provide weights 400, 500, 600, 700, and 800. The hero uses the display token, section headings the headline token, and deliverable titles the card-title token. Section copy uses body; hero copy is 15px/1.8. Labels commonly use 10–12px. Phosphor supplies regular line icons, usually 18–28px.

## Layout

The shared container is `min(1180px, calc(100% - 96px))`. At 1023px and below the total inset becomes 64px; at 767px and below it becomes 40px. Desktop navigation is 80px high, mobile 72px. Desktop sections use 100px vertical padding; mobile uses 65px, with explicit section overrides. Deliverables use a 1.15fr/1fr grid with a 16px gap; process uses three columns. Two-column content and pricing layouts collapse to one column at 767px, as do form fields. Mobile replaces desktop navigation with a toggle-controlled link list. Hero height is capped at 660px with a 490px minimum; mobile uses 570px and a vertically layered image scrim.

## Elevation & Depth

No box shadows are implemented. Depth comes from the abstract glass image, directional scrims, thin borders, translucent panel fills, and 12px backdrop blur on glass cards. The four deliverable variants use olive and warm brown gradients. Reduced-transparency preference removes backdrop blur and supplies an opaque panel background.

Motion is restrained: buttons transition for .2s, lifting 2px on hover and scaling to .98 while active. The hero enters over .8s with cubic-bezier(.16,1,.3,1), moving 12px. FAQ plus signs rotate 45 degrees on opening. Reduced-motion preference removes animations and transitions and disables smooth scrolling.

## Shapes

Panels use 16px corners; inputs and the skip link use 8px. Actions, tags, and duration badges use 999px pill corners. Borders are generally 1px. The two-bar brand mark uses 3px corners.

## Components

Primary buttons pair orange fill with dark text and an up-right arrow. Navigation CTA uses an off-white fill, 11px type, and tighter padding; the reusable secondary variant has transparent fill and a line border. All inherit the same orange hover fill. Keyboard focus uses a 2px orange outline offset 6px. Disabled buttons use .6 opacity and a wait cursor.

Glass cards use 34px/36px padding, 27px headings, orange icons, and bottom-aligned outlined tags. Native FAQ disclosures use divider rows and a rotating plus. Form fields use dark inset fills, 8px corners, muted placeholders, and orange carets; mobile input text increases to 16px. Enquiry status appears beneath the action with an aria-live announcement, orange success copy, and pale orange error copy. The enquiry form copies text to the clipboard; it does not submit or store it.

## Do's and Don'ts

- Do reuse the implemented palette, Manrope, pill actions, and 16px panels.
- Do retain visible keyboard focus and reduced-motion support.
- Do keep scope explicit and imagery abstract when identity evidence is absent.
- Do not substitute a new visual world for the user-pinned reference.
- Do not invent credentials, testimonials, client logos, or contact identity.
- Do not turn subtle glass into heavy shadows or ornamental motion.
