---
name: BrokerUX
description: Restrained dark consultancy design with soft lime actions and charcoal glass surfaces.
colors:
  bg: "#080A0D"
  surface: "#151A22"
  accent: "#D7F871"
  text: "#F5F6F7"
  muted: "#929AA5"
  line: "#ffffff1a"
  button-ink: "#161e09"
  accent-hover: "#e3ff97"
  supporting-text: "#adb4bd"
  navigation-text: "#bac0c8"
  headline-highlight: "#c1c8b3"
  card-copy: "#a4adb8"
  badge-text: "#c1c8d0"
  inclusion-text: "#c3c9d1"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(44px, 5.6vw, 78px)"
    fontWeight: 500
    lineHeight: "1.12"
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(32px, 3.5vw, 46px)"
    fontWeight: 500
    lineHeight: "1.18"
    letterSpacing: "-.035em"
  card-title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: "1.35"
    letterSpacing: "-.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.85"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: "1.6"
    letterSpacing: ".12em"
  button:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 700
rounded:
  card: "14px"
  price-card: "16px"
  pill: "999px"
  circle: "50%"
spacing:
  grid-gap: "16px"
  card-padding: "28px"
  price-padding: "40px"
  section-desktop: "86px"
  section-mobile: "58px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.button-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "7px 8px 7px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-nav:
    backgroundColor: "{colors.text}"
    textColor: "{colors.button-ink}"
    rounded: "{rounded.pill}"
    padding: "5px 6px 5px 18px"
  glass-card:
    backgroundColor: "#151a226b"
    rounded: "{rounded.card}"
    padding: "28px"
  price-card:
    backgroundColor: "#151a2270"
    rounded: "{rounded.price-card}"
    padding: "40px"
  badge:
    textColor: "{colors.badge-text}"
    rounded: "{rounded.pill}"
    padding: "5px 10px"
---

# Design System: BrokerUX

## Overview

**Creative North Star: Restrained dark consultancy.**

BrokerUX uses a centered, typographic presentation with near-black foundations, charcoal translucent surfaces, fine borders, and a soft lime accent. The user-authorized redesign replaces the former orange visual system with the palette in `BrokerUX-Website-Restructure.md`. Manrope carries the whole hierarchy; the visual weight comes from scale and spacing rather than illustrations.

Key characteristics: centered headlines, compact explanatory copy, lightly glassy panels, pill actions with circular arrow wells, and precise dividers. This document describes the current source implementation in `src/App.jsx` and `src/App.module.css`; it does not certify rendered appearance.

## Colors

The five brief colors are the normative foundation: near-black **bg**, charcoal **surface**, lime **accent**, off-white **text**, and gray **muted**. The remaining frontmatter colors record supporting values actually used by the implementation.

Use lime for primary actions, process icons, check marks, focus outlines, and small markers. White navigation buttons provide a quieter header action. Secondary text uses muted gray and the supporting gray values; the hero's second line uses the subdued headline highlight. Borders use translucent white, with a translucent lime border around the featured pricing panel.

## Typography

Manrope with a sans-serif fallback is used throughout. Headlines are medium weight with tight tracking and balanced wrapping; labels are compact and spaced.

The hero display uses the frontmatter display role and changes to `clamp(35px, 8vw, 55px)` below 768px. Section headings use the headline role. The final CTA uses `clamp(40px, 4.8vw, 64px)` on desktop and `clamp(36px, 9vw, 52px)` on mobile. Process titles are 21px at desktop, 19px at the intermediate breakpoint, and 22px on mobile. Deliverable titles are 17px. Hero and contact paragraphs are 14px; process and deliverable descriptions are 13px. The hero copy is limited to 585px. Prices use tabular numerals at 52px, dropping to 48px on mobile.

## Layout

Shared containers use `min(1120px, calc(100% - 96px))`. At 1023px and below, horizontal gutters become 32px; at 767px and below they become 20px. Standard sections have 86px vertical padding, reduced to 58px on mobile; hero and final CTA use their own spacing.

The hero has a centered bordered text frame up to 850px wide, followed by its actions and a compact scope row. Process cards use a three-column grid with 16px gaps. Deliverables place a heading beside a ruled list using `.75fr 1.65fr` columns. Pricing uses a single two-column card with a full-width scope note. All three layouts become one column below 768px. Header height changes from 88px to 72px; desktop links and CTA give way to a 44px mobile menu control and expanded navigation. The footer wraps on mobile.

## Elevation & Depth

Depth comes from translucent charcoal panels, subtle gradients, hairline borders, and modest backdrop blur. The header has 14px blur; process cards have 8px blur. There is no panel drop-shadow vocabulary. A faint lime radial wash sits at the bottom of the hero. Reduced-transparency mode removes blur and uses opaque base/surface colors.

## Shapes

Process panels use 14px corners; the pricing panel uses 16px. Buttons and the fixed-scope badge use pill shapes. Button arrow wells and the mobile menu control are circular. The hero frame is rectangular with small lime markers at its upper corners. Dividers remain thin and low contrast.

## Components

**Primary action:** lime pill, at least 52px tall, 13px bold label, and a 36px circular arrow well. Hover lightens the background and moves the action up 2px; active returns it to rest. The compact header variant is off-white, at least 42px tall, with a 30px arrow well and 12px label.

**Process card:** numbered icon header, 28px padding, 14px corners, translucent charcoal, white hairline border, and concise title/body. Mobile padding is 24px.

**Deliverable row:** lime check-circle, title, description, and a bottom divider. The icon spans both text rows. This is a list, not another card grid.

**Pricing card:** 40px desktop padding, 16px corners, translucent lime border, subdued gradient, package summary beside inclusions, then a ruled scope note. Padding becomes 32px at the intermediate breakpoint and 26px 22px on mobile.

**Navigation:** sticky translucent header, quiet gray links that turn lime on hover, explicit mobile open/close control, Escape dismissal, and anchor destinations. Links close the mobile menu when followed.

**Focus and motion:** interactive elements receive a 2px lime outline with 6px offset. A visible-on-focus skip link targets the main content. Color/background and button transform transitions last 0.2s. Reduced-motion mode removes transitions and smooth scrolling. No scroll reveal animation is currently implemented.

## Do's and Don'ts

- **Do** retain the user-pinned five-color foundation and use supporting shades only for hierarchy and translucency.
- **Do** keep headlines spacious, descriptions concise, and action labels readable.
- **Do** preserve visible keyboard focus and both reduced-motion and reduced-transparency treatments.
- **Do** derive future documentation changes from implemented CSS values.
- **Don't** restore the superseded orange reference system.
- **Don't** introduce flashy 3D visuals, large illustrations, dashboard styling, or excessive gradients.
- **Don't** describe unavailable contact destinations or illustrative work as real customer evidence.
