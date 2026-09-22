---
name: Editorial Utility Ops
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#58413c'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#8c716b'
  outline-variant: '#e0bfb9'
  surface-tint: '#aa361e'
  primary: '#a6331b'
  on-primary: '#ffffff'
  primary-container: '#c84b31'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4a4'
  secondary: '#5f5e61'
  on-secondary: '#ffffff'
  secondary-container: '#e4e1e5'
  on-secondary-container: '#656467'
  tertiary: '#5b5b64'
  on-tertiary: '#ffffff'
  tertiary-container: '#74747d'
  on-tertiary-container: '#fffcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a4'
  on-primary-fixed: '#3e0500'
  on-primary-fixed-variant: '#891e07'
  secondary-fixed: '#e4e1e5'
  secondary-fixed-dim: '#c8c6c9'
  on-secondary-fixed: '#1b1b1e'
  on-secondary-fixed-variant: '#47464a'
  tertiary-fixed: '#e3e1ec'
  tertiary-fixed-dim: '#c6c5cf'
  on-tertiary-fixed: '#1a1b22'
  on-tertiary-fixed-variant: '#46464e'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-desktop: 1rem
  margin: 1rem
  margin-desktop: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system establishes an architectural, editorial back-office environment tailored for urban discovery curation, city guide operations, place verification, and community moderation across Indonesian metropolitan areas. It translates the cultural richness, warmth, and vibrancy of street-level urban exploration into a rigorous, high-density, professional command deck.

The visual style merges **Editorial Architecture** with **Utilitarian Density**:
- **Tone:** Methodical, discerning, grounded, and authoritative. It respects the curator’s cognitive focus during prolonged administrative sessions.
- **Visual Tension:** Crisp, razor-sharp hairline borders structure warm, parchment-tinted surfaces. High-contrast typography evokes broadsheet publishing while operating with spreadsheet precision.
- **Anti-Patterns:** No floating glassmorphic panels, no neon accents, no decorative pastel gradients, no pill-shaped bulbous inputs, no oversized metric cards, and no whimsical cartoon illustrations. Every pixel serves verification throughput, auditability, and dense information retrieval.

## Colors

The palette balances warm organic undertones with high-contrast text and disciplined status signifiers.

### Canvas & Structural Surfaces
- **Canvas Base:** `#F9F8F6` (Parchment White) — soft, natural background that mitigates ocular fatigue over extended 8-hour operational shifts.
- **Canvas Sub-level:** `#F3F1ED` (Warm Muted Wash) — used for table headers, sidebar backdrops, and nested control panels.
- **Surface Layer:** `#FFFFFF` (Crisp White) — reserved for card containers, data cells, modal dialogues, and active input fields.
- **Structural Dividers & Outlines:** `#E4E1DA` (Light Sand Hairline) and `#D1CDC3` (Strong Border for boundaries and focused row states).

### Typography & Content
- **Text Primary:** `#18181B` (Deep Carbon Zinc) — delivers AA/AAA contrast for place titles, street addresses, and core numbers.
- **Text Secondary:** `#71717A` (Muted Slate Zinc) — metadata tags, timestamps, coordinates, and table headers.
- **Text Inverted:** `#FFFFFF` — text on primary terracotta action surfaces.

### Accent & Interaction
- **Primary Operational Accent:** `#C84B31` (Terracotta Brick) — reserved strictly for primary affirmative decisions (e.g., "Publish Guide", "Verify Location", "Commit Batch"), active navigation indicators, and focused form outlines.
- **Primary Hover/Active:** `#B03F27` / `#94341E`.

### Semantic Operations
- **Verified / Published / Active:** Text `#166534`, Fill `#DCFCE7`, Border `#BBF7D0`.
- **Pending Review / Escalated:** Text `#B45309`, Fill `#FEF3C7`, Border `#FDE68A`.
- **Rejected / Flagged / Suspended:** Text `#991B1B`, Fill `#FEE2E2`, Border `#FECACA`.
- **Draft / Inactive / System Log:** Text `#334155`, Fill `#F1F5F9`, Border `#E2E8F0`.

## Typography

Typography prioritizes information scanning and data parsing over expressive scale. 

- **Primary Pairing:** `Plus Jakarta Sans` governs page headers, structural panel titles, and entity banners, lending an authentic urban architectural character. `Inter` handles all dense grid rows, tabular data sets, forms, metadata badges, and operational payloads.
- **Tabular Figures:** All numeric rendering (coordinates, view tallies, curation IDs, operational timestamps) must enforce OpenType tabular figures (`font-feature-settings: "tnum" 1, "cv05" 1`).
- **Micro-Labels:** Metadata identifiers (`label-md`, `label-sm`) use uppercase styling with controlled letter-spacing (`0.04em` to `0.05em`) to render field categories (e.g., `KELURAHAN`, `STATUS`, `LAT/LONG`, `REVISION LOG`) without visual clutter.

## Layout & Spacing

The layout is built for high data density, keyboard-driven navigation, and simultaneous split-screen validation (e.g., verifying user-submitted photo evidence side-by-side with map coordinate telemetry).

### Layout Structure
- **Global Shell:** Fixed compact sidebar (240px default, collapsable to 56px icon-rail) + persistent micro-utility top bar (44px) + fluid multi-pane workspace.
- **Split-View Canvas:** Workspaces utilize 50/50 or 60/40 split screens for moderation: list queue on the left, full verification detail inspector on the right.
- **Data Tables:** Enforce strict row heights (compact: 36px, standard: 44px) to maximize above-the-fold record scanning.
- **Breakpoints:**
  - **Desktop Core (≥1440px):** 16-column layout with split triage inspection panels open simultaneously.
  - **Standard Desktop (1024px – 1439px):** 12-column layout with sliding overlay inspection drawers.
  - **Tablet/Utility (768px – 1023px):** Single-pane full-width tables with modal inspection sheets. Mobile access is strictly emergency read/reject fallback.

## Elevation & Depth

This design system rejects deep drop shadows and blurred elevations. Depth is achieved via **tonal planar stepping** and **1px structural hairpins**.

- **Level 0 (App Canvas):** `#F9F8F6` base wash. No border.
- **Level 1 (Docked Surfaces & Panels):** `#FFFFFF` surface bordered by `1px solid #E4E1DA`. No shadow.
- **Level 2 (Dropdowns, Popovers, Filter Menus):** `#FFFFFF` surface with `1px solid #D1CDC3` and a tight utilitarian shadow: `0 2px 4px rgba(24, 24, 27, 0.04), 0 4px 8px rgba(24, 24, 27, 0.06)`.
- **Level 3 (Modal Confirmation Dialogues):** `#FFFFFF` surface framed by `1px solid #18181B` with shadow `0 8px 16px rgba(24, 24, 27, 0.08), 0 16px 24px rgba(24, 24, 27, 0.06)`. Backdrop overlay: `#18181B` at `40%` opacity with no blur.

## Shapes

The design system employs a disciplined, subtle corner radius (`0.25rem` / `4px`) for inputs, buttons, and status tags, transitioning to `0.375rem` / `6px` for structural cards and modal shells. 

Sharp lines convey editorial discipline and utility. Elements never use pill shapes (`9999px`) or hyper-rounded friendly bubbles. Chips, badges, and avatars maintain structured perimeter geometry:
- Default interactive tokens: `rounded` (`4px`).
- Panels and inspection surfaces: `rounded-md` (`6px`).
- Media thumbnails (venue snapshots, event posters): `rounded` (`3px`) with a `1px` inner boundary inset border (`rgba(0, 0, 0, 0.08)`).

## Components

### Buttons & Action Triggers
- **Primary:** Solid `#C84B31` terracotta background, `#FFFFFF` text, `4px` radius, `0 1px 2px rgba(0,0,0,0.05)` shadow. Height: `32px` (dense) or `36px` (regular). Never bloated.
- **Secondary / Outlined:** `#FFFFFF` background, `1px solid #D1CDC3`, `#18181B` text. Hover state shifts background to `#F3F1ED`.
- **Ghost / Destructive Action:** Direct flat buttons with `#991B1B` text; active state provides `#FEE2E2` tint.

### Data Tables & Moderation Lists
- **Headers:** `#F3F1ED` background, height `32px`, `label-md` uppercase typography (`#71717A`), `1px solid #E4E1DA` bottom border.
- **Rows:** Alternating row highlights disabled in favor of clear hover states (`#F9F8F6`). Selected/pinned items feature a persistent `2px` left border marker in `#C84B31`.
- **Inline Cell Metrics:** Strict numeric alignment to the right; textual labels to the left.

### Status Chips & Metadata Pills
- Compact rectangular badges with `2px` border-radius and `1px` outline.
- Padding: `2px 6px`. Typography: `label-sm` uppercase.
- Colors mapped directly to semantics:
  - *Verified:* `#DCFCE7` bg, `#166534` text, `#BBF7D0` border.
  - *Pending:* `#FEF3C7` bg, `#B45309` text, `#FDE68A` border.
  - *Flagged:* `#FEE2E2` bg, `#991B1B` text, `#FECACA` border.
  - *Draft:* `#F1F5F9` bg, `#334155` text, `#E2E8F0` border.

### Input Fields & Filter Controls
- Compact height (`32px`), `#FFFFFF` background, `1px solid #D1CDC3`, `4px` radius.
- Text: `body-md` (`#18181B`), placeholder `#A1A1AA`.
- Focus state: `1px solid #C84B31` with an outer ring of `2px solid rgba(200, 75, 49, 0.15)`.

### Checkboxes & Radios
- Size: `14px × 14px`. Border: `1.5px solid #A1A1AA`. Radius: `2px` for checkboxes; circular for radios. Checked state: `#C84B31` solid fill with white check glyph.

### Cards & Inspector Panels
- Flat white containers (`#FFFFFF`) with a `1px solid #E4E1DA` border.
- Panel header features integrated breadcrumbs and action triggers within a unified `40px` toolbar.