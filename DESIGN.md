---
name: Jollof Factory
description: Bold West African flavor — a tomato-free, pepper-based cooking sauce.
colors:
  primary: "#FF4D00"
  secondary: "#FFD93D"
  accent: "#0D4232"
  background: "#F9F5F0"
  dark: "#121212"
  neutral: "#E5E5E5"
typography:
  display:
    fontFamily: "Archivo Black"
    fontSize: "clamp(2.5rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    textTransform: uppercase
  headline:
    fontFamily: "Archivo Black"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.05
    textTransform: uppercase
  body:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.65
  label:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "0.8125rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.08em"
    textTransform: uppercase
  marker:
    fontFamily: "Permanent Marker"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  none: 0px
spacing:
  xs: 8px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 96px
  xxl: 128px
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-accent:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    padding: "16px 32px"
imagery:
  filter: "grayscale(1) contrast(1.05)"
  hover: "grayscale(0)"
  overlay: "multiply"
---

# Jollof Factory — Neo-brutalist

## Overview

Loud, blocky, and fun: the page is assembled from flat cardboard-color bands with thick black outlines and hard offset shadows. Every element looks like a sticker slapped onto the page — slightly rotated badges, marker-pen quotes, giant poster headlines with hard black drop-shadows. Commerce blocks (products, cart) follow the same rules: bordered cards on white, hard shadows, no rounding anywhere.

## Colors

- `primary` #FF4D00 (vibrant orange) — hero ground, CTA bands, price ticks, hover states. Dominant.
- `secondary` #FFD93D (golden yellow) — header band, alternate section bands, sticker badges, secondary buttons.
- `accent` #0D4232 (deep green) — small caps badges ("The Secret Sauce"), used sparingly for contrast.
- `background` #F9F5F0 (cream) — default page ground.
- `dark` #121212 (near-black) — text, borders, dark bands, hard shadows.
- White #FFFFFF — card surfaces on cream/yellow bands.
- Never blend colors into gradients; fields are flat and separated by 2px black borders.

## Typography

- `display` (Archivo Black) — hero and section headlines, always uppercase, tight leading. Hard text-shadow of 4px 4px 0 #121212 on hero over orange.
- `headline` (Archivo Black) — card and band headings.
- `body` (Plus Jakarta Sans 500) — paragraphs; bold (700/800) for lead-ins.
- `label` (Plus Jakarta Sans 800) — small uppercase tags, nav items, meta.
- `marker` (Permanent Marker) — quotes, sticker text, handwritten asides; may rotate -2deg…2deg.

## Layout

Concept: **Stacked bands** (adapted from the original site).

- Header: sticky yellow band, 2px black bottom border; logo left, uppercase nav center-right, dark "Get The Sauce" button + mini-cart right.
- Home, in order: full-bleed orange hero (grayscale photo under multiply overlay, floating yellow sticker, poster headline, two buttons, yellow marquee banner pinned to the band's bottom edge) → yellow testimonial band (3 white cards) → cream product highlight (white photo card rotated -2deg with black shadow, text right, green badge) → dark value-props band (4 outlined cards, orange icon tiles with white offset shadows) → yellow how-it-works band (3 white cards under giant ghost numerals) → light-gray recipes band (3 white cards, grayscale images) → orange CTA band (dotted pattern, yellow rotated badge, dark Buy button) → dark footer band (3 columns, newsletter, bottom bar).
- Recipes page: yellow header band, then one white "poster card" per recipe on cream, image on top with a rotated orange time-tick, ingredients (1 col) beside directions (2 cols).
- Story page: cream ground; rotated polaroid card with marker caption; yellow + dark side-by-side cards; green left rule for the pull section; white promise grid of 4.
- Shop/woocommerce archives: product cards as white bordered tiles with hard shadows on cream; keep full-bleed square corners on bands.
- Spacing rhythm: bands use 96px vertical padding (64px on mobile); content on the wide grid (1280px), reading text max 640px.

## Elevation & Depth

No soft shadows, ever. Hard offset shadows in solid black, moving with hover:

- `neo` 4px 4px 0 #121212 — badges, buttons, small cards.
- `neo-lg` 8px 8px 0 #121212 — recipe/testimonial cards.
- `neo-xl` 12px 12px 0 #121212 — product photo card, recipe posters.
- On dark bands, white offset shadows (4px 4px 0 #FFFFFF) replace black.

## Shapes

- Zero border-radius on everything: buttons, cards, images, badges, inputs, product tiles.
- All borders 2px solid #121212 (white borders on dark bands).
- Full-bleed bands keep square corners at the viewport edge.
- Playful rotation (-6°…6°) on stickers/badges only, straightening on hover.

## Components

- Buttons: 2px black border, uppercase display/nav font, hard shadow; hover = translate +2px/+2px with shadow shrinking to 2px; active = +4px with no shadow.
  - Primary: dark bg, white text. Secondary: yellow bg, dark text. Accent: orange bg, white text. Outline: transparent bg, current-color border.
- Sticker badge: colored field, 2px black border, hard shadow, marker or label type, slight rotation.
- Cards: white field, 2px black border, neo shadow; hover lifts -4px with shadow growing one step.
- Icon tiles: 80px square (or circle) colored field, 2px border, offset shadow in the band's contrast color.

## Do's and Don'ts

- Do keep every field flat, bordered, and hard-shadowed; do keep type loud and uppercase.
- Do use grayscale photography that snaps to full color on hover.
- Don't round corners, use soft shadows, or fade borders.
- Don't place text over busy un-treated photos; photos get grayscale + overlay first.
- Don't use more than two accent colors inside one band.

## Imagery

- Food and kitchen photography, treated `grayscale(1) contrast(1.05)`, restoring color on hover/interaction.
- Hero: photo under the orange band as a multiply overlay at ~50% opacity, grayscale.
- Cards: images get 2px black borders; recipe images are full-bleed inside their card's border.

## Motion

- Marquee: infinite horizontal scroll, 25s linear, on the hero's bottom banner; duplicated content for a seamless loop.
- Hover transitions: 200–500ms ease — color swaps, shadow lifts, slight translate/rotate. Buttons translate into their shadow; cards lift off.
- Bounce: the "NEW STAPLE" sticker bounces gently (2s ease-in-out infinite).
- All motion disabled under `prefers-reduced-motion: reduce`.

## Voice

Bold, warm, and a little cocky. Short punchy lines, second person, food-slang ("It slaps", "Take all the credit"). Uppercase for shouting, marker font for asides. Never corporate, never apologetic; the sauce is the hero and the copy brags for it.
