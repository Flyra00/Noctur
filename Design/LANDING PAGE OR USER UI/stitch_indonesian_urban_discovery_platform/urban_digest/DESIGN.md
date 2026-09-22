---
name: Urban Digest
colors:
  surface: '#fff8f3'
  surface-dim: '#dfd9d4'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2ed'
  surface-container: '#f3ede7'
  surface-container-high: '#ede7e2'
  surface-container-highest: '#e7e1dc'
  on-surface: '#1d1b18'
  on-surface-variant: '#5a413b'
  inverse-surface: '#32302d'
  inverse-on-surface: '#f6f0ea'
  outline: '#8e7069'
  outline-variant: '#e2bfb6'
  surface-tint: '#b22c0b'
  primary: '#ae2a08'
  on-primary: '#ffffff'
  primary-container: '#d14221'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4a3'
  secondary: '#5a5e69'
  on-secondary: '#ffffff'
  secondary-container: '#dee2ef'
  on-secondary-container: '#60646f'
  tertiary: '#426353'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a7c6b'
  on-tertiary-container: '#f5fff7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad2'
  primary-fixed-dim: '#ffb4a3'
  on-primary-fixed: '#3d0700'
  on-primary-fixed-variant: '#8b1b00'
  secondary-fixed: '#dee2ef'
  secondary-fixed-dim: '#c2c6d3'
  on-secondary-fixed: '#171c25'
  on-secondary-fixed-variant: '#424751'
  tertiary-fixed: '#c6ebd7'
  tertiary-fixed-dim: '#abcfbb'
  on-tertiary-fixed: '#002115'
  on-tertiary-fixed-variant: '#2d4d3e'
  background: '#fff8f3'
  on-background: '#1d1b18'
  surface-variant: '#e7e1dc'
typography:
  display-hero:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Newsreader
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
  meta-compact:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an authentic, culturally rooted urban discovery platform tailored to Indonesian city life—from the street stalls of Pasar Santa and Blok M to the underground listening bars of Senopati and the heritage pockets of Yogyakarta and Bandung. It combines the rigorous curation of *Time Out* and *Atlas Obscura* with the subcultural clarity of *Resident Advisor* and the pragmatic utility of local discovery tools.

The visual style is **Contemporary Editorial Minimalism with Tactile Warmth**. It completely rejects generic SaaS paradigms: no glassmorphism, no artificial neon or violet gradients, no floating drop shadows, and no decorative AI illustrations. Instead, the interface adopts a tactile print aesthetic—crisp hairline gridlines, warm paper tones, stark ink typography, and expansive documentary-style photography capturing the unfiltered texture of Indonesian streetscapes.

The emotional tone balances civic utility with sharp cultural authority:
- **Curated & Discerning:** Feels authored by seasoned local insiders rather than an opaque ranking algorithm.
- **Rooted & Tactile:** Uses physical paper values, high contrast typography, and dense informational metadata rows.
- **Immediate & Frictionless:** Gives immediate access to essential neighborhood context (operating hours, price tiers in Rupiah, district locations, and public transit links).

## Colors

The palette draws inspiration from newsprint, architectural unglazed terracotta, and tropical dusk:

- **Primary (`#D94826` / Terracotta Vermilion):** The single high-energy functional accent. Used decisively for primary CTAs, active curation tags, editorial highlights, map pins, and directional signifiers. Its hover state is `#BC3B1B`, and its light wash (`#FDF1ED`) serves as a tinted backing for badges and notice banners.
- **Secondary (`#181D26` / Night Ink):** A deep, saturated charcoal with blue-black depth. Dedicated to late-night programming, DJ lineups, subterranean events, and high-impact inverted editorial callouts.
- **Tertiary (`#4A6B5B` / Muted Olive-Sage):** A botanical functional green utilized exclusively for practical operational status—"Buka Sekarang" (Open Now), verified local curator badges, and public transit/heritage proximity indicators.
- **Neutral Base & Canvas:**
  - Base Canvas (`#F9F8F6`): A warm, unbleached paper surface that prevents screen glare and gives the UI an editorial foundation.
  - Card & Surface Elevated (`#FFFFFF`): Pure white, used intentionally to elevate interactive cards, input fields, and modular panels above the warm canvas.
  - Subtle Warm Tint (`#F3EFEA`): Employed for secondary chips, meta info containers, table headers, and image placeholder scaffolds.
  - Hairline Rule / Border (`#EAE6DF`): Crisp 1px structural framing defining grid modules, dividers, and card envelopes without heavy drop shadows.
- **Typography & Text Contrast:**
  - Ink Charcoal (`#1C1A17`): High-legibility, off-black primary copy.
  - Umber Grey (`#6E6B65`): Muted secondary text for contextual descriptions and metadata keys.
  - Warm Sandstone Caption (`#8C8880`): Timestamps, currency ranges, and subtle dot separators.

## Typography

The typographic pairing reflects contemporary independent publishing:

- **Headline Display (`Newsreader`):** A transitional, literary editorial serif with sharp terminals and a warm cadence. Used for hero titles, section headlines, storytelling quotes, and curatorial lead-ins. It anchors the guide's identity as a respected cultural digest.
- **Interface & Body (`Plus Jakarta Sans`):** A crisp, geometric sans-serif engineered in Indonesia with balanced metrics and contemporary legibility. It provides structured clarity across dense city data, menus, district labels, and navigation.

### Editorial Data Formatting Rules
- **Price Ranges:** Always formatted explicitly as Indonesian Rupiah using compact shorthand: `Rp25K–50K`, `Rp75K–120K`, or `Rp150K+`.
- **Metadata Composition:** Micro-information strings (Area, Price, Category, Time) must be arranged in single compact lines using center dot separators (`·` / `U+00B7`) flanked by equal spacing: `Blok M · Rp35K–65K · Kopi & Santai · Buka`.
- **Badges and Section Kicker:** Set in uppercase using `label-md` or `label-sm` with slight positive tracking (`+0.04em`) to simulate linotype publication sluglines.

## Layout & Spacing

The layout philosophy mirrors an architectural broadsheet: structured, rhythmically aligned, and balanced between dense tabular rows and generous editorial imagery.

- **Grid Architecture:**
  - **Desktop (1024px+):** 12-column fluid grid locked inside a max content width of `1360px`. Gutters are `2rem` (`space-xl` / 32px), side margins are `3rem` (48px). Main directory sections support asymmetric compositions: 8-column curatorial feeds paired with 4-column sticky district maps or event calenders.
  - **Tablet (768px – 1023px):** 8-column grid with `1.5rem` gutters and `2rem` margins. Side panels fold into contextual pull-downs or bottom sheets.
  - **Mobile (< 768px):** 4-column layout with `1rem` outer canvas padding and `1rem` gutters. Venue listings alternate strictly between high-impact full-bleed 16:9 imagery and compact list rows to preserve high scan-efficiency.
- **Rhythm & Division:**
  - Vertical modules are punctuated by `1px solid #EAE6DF` horizontal rules instead of arbitrary empty blocks.
  - Dense lists (e.g., street food directories, indie gig schedules) use compact item padding (`space-sm` top/bottom, `space-md` horizontal).

## Elevation & Depth

This design system eschews floating, diffused drop shadows and glassmorphic blurs in favor of **Tonal Layering and Hairline Boundaries**.

1. **Base Foundation (Level 0):** The raw unbleached ground `#F9F8F6`. Used for canvas background, outer margins, and inactive panel segments.
2. **Elevated Content Tier (Level 1):** Solid `#FFFFFF` surfaces bounded by a crisp `1px solid #EAE6DF` border. Used for article panels, venue cards, interactive search controls, and bottom navigation.
3. **Stacked / Filter Overlay Tier (Level 2):** Sheet modals, search dialogs, and sticky bottom navigation trays maintain `#FFFFFF` fills accompanied by a stark architectural hairline border and a very subtle non-diffused ground line: `0 4px 12px rgba(28, 26, 23, 0.06)`.
4. **Night Mode Callouts:** Specialized nightlife and late-night gig sections adopt high-contrast inverted containment: `#181D26` background, crisp borders in `rgba(255, 255, 255, 0.12)`, and off-white typography (`#F9F8F6`).

## Shapes

The system uses **Soft Geometry (Level 1)** to maintain the crispness of printed publications while feeling ergonomic on touch devices:

- Standard controls, cards, input frames, and image containers use `0.25rem` (4px) radii.
- Medium components, such as nested photo cards or modal dialogue sheets, use `rounded-lg` (`0.5rem` / 8px).
- Status chips, categorical pills, and avatar badges use true capsule curves (`9999px`) to create an intentional counterpoint against the strict rectilinear boundaries of the grid.
- Photography preserves strict corner discipline (`4px` radius max), retaining full editorial authority.

## Components

### Buttons & Interactive Triggers
- **Primary Action:** Solid Terracotta Vermilion (`#D94826`), text `#FFFFFF`, 4px radius, sans-serif semibold (`14px`), horizontal padding `1.25rem`, vertical padding `0.625rem`. Hover state deepens to `#BC3B1B`. No box shadow; physical presence is communicated purely by color contrast.
- **Secondary Action:** Transparent fill, bounded by `1px solid #EAE6DF`, text `#1C1A17`. On hover: surface transitions to `#F3EFEA`.
- **Nightlife / Dark Trigger:** Solid `#181D26`, text `#F9F8F6`. On hover: surface transitions to `#2C323D`.

### Filter Chips & Badges
- **Category Filter Chips:** Capsule pills (`9999px`), `1px solid #EAE6DF`, background `#FFFFFF`, text `#6E6B65`. When selected: background switches to `#1C1A17`, text to `#FFFFFF`, border color matches background.
- **Operational Status Badge ("Buka" / "Tutup"):** Compact pill containing a 6px status circle indicator.
  - *Open:* Background `#F0F4F2`, text `#4A6B5B`, dot `#4A6B5B`.
  - *Closed:* Background `#F3EFEA`, text `#8C8880`, dot `#8C8880`.

### Cards & Discovery Listings
- **Editorial Feature Card:** Rectilinear card on `#FFFFFF` with `1px solid #EAE6DF`. Top element features a photo with a subtle aspect ratio (3:2 desktop, 16:9 mobile), displaying a category tag (e.g., *PASAR SANTA*, *SENOPATI*) top-left. Content beneath: headline in `Newsreader` (`20px`), two-line curatorial preview, and a compact metadata line: `Kopi Manual · Rp25K–40K · Stasiun MRT Blok M (400m)`.
- **Compact Venue Row (Mobile/Directory view):** 80x80px square image thumbnail on the left, right-hand column stacked with: Title (`15px` Semibold), Location + Price (`13px` Muted), and live status badge. Separated by `1px solid #EAE6DF` bottom borders.

### Inputs & Search Bars
- **Omni-Search Bar:** `#FFFFFF` background with a `1px solid #EAE6DF` border, `4px` radius. Features icon-based district filter dropdowns (e.g., "Semua Area", "Jakarta Selatan", "Bandung") separated by fine vertical rules (`1px solid #EAE6DF`). Input font: `Plus Jakarta Sans` `15px`, placeholder text in `#8C8880`. Focus state: border shifts to `#D94826` without generic glowing rings.

### Checkboxes, Radios, and Toggles
- **Checkboxes & Radios:** `18px` boxes with `1.5px solid #8C8880`. When active: solid fill `#D94826` with clean white micro-checkmark or center radio dot.

### Specialized Urban Discovery Elements
- **Curator Notes Block:** A light sand tinted box (`#F3EFEA`) with a left accent border (`3px solid #D94826`), featuring concise editor commentary ("Catatan SINI") set in `Newsreader` italic.
- **Rupiah Affordability Gauge:** A clean 4-tier indicator (`$ / $$ / $$$ / $$$$`) expressed locally as `Rp / RpRp / RpRpRp / RpRpRpRp`, where active tiers use `#1C1A17` and inactive tiers use `#EAE6DF`.