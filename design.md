# DESIGN.md: DPULSE AI Website Design System

> **For the coding agent.** This file defines how the site must look and feel. It pairs with `website_build_spec.md` (what to build). If the two conflict on visuals, **this file wins**. Implement the tokens exactly. Do not substitute colours, fonts or spacing "close enough".

---

## 0. Design Intent

**One sentence:** a calm, precise, research-lab website with a living field of motion, made for a software-only company that builds the *brain* for physical AI and custom models for organizations.

**Feel:** editorial, technical, confident, fresh. Think "research publication meets modern infrastructure", not "AI startup template".

**Keywords:** precise · airy · typographic · alive (not busy) · grown-from-the-ground (agriculture) · modular (work chips).

**What the visitor should feel in 5 seconds:** "These people are serious researchers, they ship real models, and they work with any robot."

### References studied (structure and tone only; never copy)
| Reference | What to learn |
|---|---|
| **Physical Intelligence** (physicalintelligence.company / pi.website) | Extremely minimal navigation (Home, Research, Join Us). Hero is a short paragraph, not a slogan wall. The homepage is a **dated list of releases**, each with a title, date and one-line description. A single quiet call to action (waitlist). A supporters line and social link at the bottom. Research-first credibility. |
| **Skild AI** (skild.ai) | A bold, short claim: one brain for any robot and any task. Use-case "platform" sections that show where the brain is applied. Blog posts presented as vision and technical-progress writing. |
| **Bonsai / Carbon Robotics** | How an agriculture problem and its result are told simply. |

> The agent must open these sites in a browser and study spacing, type scale, section rhythm and motion. The text of Physical Intelligence's homepage was reviewed for structure; visual styling must be observed directly. **Do not copy any text, images, icons or exact layouts.** Our identity is defined below.

---

## 1. Brand Foundations

- **Name in UI:** DPULSE AI (wordmark). Legal name only in footer and legal pages.
- **Logo:** use the owner's logo file when supplied (`/public/brand/`). Until then, render a typographic wordmark: "DPULSE" in Geist Semibold, tracking +0.04em, followed by a small pulse glyph (a 3-point line: flat, spike, flat) in the accent colour.
- **Voice:** plain, precise, confident. Short sentences. Outcome first. No hype words.
- **Tagline candidates:** "The brain for physical AI." · "Custom AI for organizations. A brain for robots."

---

## 2. Colour System

Dark is the default theme ("Deep Field"). Light is a full equal theme ("Paper"). All colours are CSS variables. **Never hard-code hex values in components.**

### 2.1 Tokens

```css
:root {
  /* Paper (light) */
  --bg:            #F6F8F4;
  --bg-elevated:   #FFFFFF;
  --surface:       #EDF1EA;
  --border:        #D9E0D6;
  --border-strong: #B9C4B5;
  --text:          #0D1511;
  --text-muted:    #56655B;
  --text-faint:    #7E8D82;
  --accent:        #0B7A43;   /* Sprout, darkened for AA on light */
  --accent-hover:  #086436;
  --accent-soft:   #DDF1E5;
  --signal:        #B7791F;   /* Amber, for highlights and warnings */
  --focus:         #0B7A43;
  --shadow-sm: 0 1px 2px rgba(13,21,17,.06);
  --shadow-md: 0 8px 30px rgba(13,21,17,.08);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { /* Deep Field */
    --bg:            #0A0E0C;
    --bg-elevated:   #101613;
    --surface:       #131A16;
    --border:        #1F2A24;
    --border-strong: #2E3C34;
    --text:          #EAF1EC;
    --text-muted:    #93A69A;
    --text-faint:    #6B7D72;
    --accent:        #5CE6A0;   /* Sprout */
    --accent-hover:  #86F0BA;
    --accent-soft:   #11271C;
    --signal:        #F5C76B;
    --focus:         #5CE6A0;
    --shadow-sm: 0 1px 2px rgba(0,0,0,.4);
    --shadow-md: 0 12px 40px rgba(0,0,0,.45);
  }
}
:root[data-theme="dark"] { /* same values as the dark block above */ }
:root[data-theme="light"] { /* same values as :root above */ }
```

### 2.2 Usage rules
- **One accent only** (Sprout). Amber (`--signal`) appears sparingly for status and highlights, never as a second brand colour.
- Backgrounds stay near-neutral. Never use pure `#000` or pure `#FFF` for large areas.
- Accent is used for: primary buttons, links on hover, active nav, diagram highlights, key numbers. Never for large body text.
- Text contrast: body text must meet WCAG AA (4.5:1) on its background in both themes. Verify with a contrast checker; adjust `--text-muted` upward if it fails.
- Subtle gradient allowed only as a soft radial glow of `--accent` at 6% to 10% opacity behind the hero. No rainbow or purple-blue "AI gradients".

---

## 3. Typography

| Role | Font | Notes |
|---|---|---|
| Display / headings | **Geist** (600) | tight tracking |
| Editorial accent | **Instrument Serif** (italic) | used for one emphasized word or phrase per hero or section heading, never whole paragraphs |
| Body / UI | **Geist** (400, 500) | |
| Technical labels, versions, dates, IDs | **Geist Mono** (400, 500) | uppercase, small, tracked |

Self-host via `next/font`. Provide system fallbacks (`ui-sans-serif, system-ui`, `ui-serif, Georgia`, `ui-monospace, SFMono-Regular`).

### 3.1 Type scale (fluid)
```css
--fs-hero:   clamp(2.75rem, 1.6rem + 5.2vw, 5.75rem); /* lh 1.02, ls -0.035em */
--fs-h1:     clamp(2.25rem, 1.5rem + 3.2vw, 4rem);    /* lh 1.05, ls -0.03em  */
--fs-h2:     clamp(1.75rem, 1.3rem + 1.9vw, 2.75rem); /* lh 1.1,  ls -0.025em */
--fs-h3:     clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);/* lh 1.2,  ls -0.015em */
--fs-body-l: 1.1875rem;                                /* lh 1.6  */
--fs-body:   1rem;                                     /* lh 1.65 */
--fs-small:  0.875rem;                                 /* lh 1.55 */
--fs-label:  0.75rem;   /* mono, uppercase, ls +0.08em, lh 1.3 */
```

### 3.2 Rules
- Max line length for paragraphs: **68ch**. Hero headline max width: **18ch**.
- Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs (no orphans or widows).
- Left-align all text except short centred CTAs. Never justify.
- Heading hierarchy must be semantic (one `<h1>` per page).
- Numerals in tables and stats use `font-variant-numeric: tabular-nums`.

---

## 4. Layout, Grid and Spacing (this is what makes it look "perfectly aligned")

### 4.1 Grid
- **Container:** max-width `1200px`; wide variant `1360px` for hero and media; side padding `clamp(20px, 4vw, 48px)`.
- **12 columns**, gutter `24px` (16px on mobile).
- Every section aligns to the **same left edge** and the same container. Nothing is "almost" aligned.

### 4.2 Spacing scale (8px base)
`4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160`. Use only these values. Tokens: `--space-1 ... --space-11`.

- **Section vertical padding:** `clamp(72px, 10vw, 140px)` top and bottom.
- Gap between heading block and content: `48px` desktop, `32px` mobile.
- Card padding: `32px` desktop, `24px` mobile. Card radius `16px`. Button radius `999px` (pill) for primary CTAs, `10px` for form controls.

### 4.3 Alignment rules (non-negotiable)
1. Everything snaps to the 8px scale. No arbitrary pixel values.
2. Cards in a row have **equal heights** (CSS grid, `align-items: stretch`) and their buttons or links sit on a shared bottom line.
3. Icons are optically centred in their boxes (same stroke width 1.5, same size 20px or 24px).
4. Hairline borders are always `1px` using `--border`. No shadows heavier than `--shadow-md`.
5. Text in a row of cards starts at the same baseline: reserve the same title line count (`min-height` using `lh`) or use subgrid.
6. Hero text, section headings and body copy share one left edge.
7. Media (video, images) keep fixed aspect ratios: 16:9 for demos, 4:3 for figures, 1:1 for avatars. Use `aspect-ratio` to prevent layout shift.
8. Check at 360, 390, 768, 1024, 1280, 1440 and 1920 px. No horizontal scroll at any width.

### 4.4 Breakpoints
`sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`. Mobile-first.

---

## 5. Signature Visual Language

### 5.1 The Router Field (hero visual and brand motif)
A calm, animated SVG showing the **Work Chips + router** idea:
- A central node labelled "Brain" (subtle pulsing ring in `--accent`).
- 4 to 6 satellite nodes labelled with chips: *Harvest, Sort, Inspect, Load* (from owner content; fall back to generic labels).
- Thin lines (`--border-strong`) from the centre to each chip. Every 3 to 4 seconds a small accent pulse travels along **one** line and that chip lights up, then fades. This reads as "route the task to the right chip".
- Behind it, faint **topographic contour lines** (SVG pattern, `--border` at 40% opacity) that suggest farmland terrain without a single photo.
- Implementation: inline SVG + CSS animation (or Framer Motion). 60fps, `will-change: transform, opacity` only on pulses. Provide a static fallback for `prefers-reduced-motion: reduce`.

### 5.2 Imagery rules (we have no hardware)
- Preferred: **simulation renders, model-output overlays** (segmentation masks, attention heatmaps, trajectory traces on real crop images), architecture diagrams, benchmark charts.
- Photos, if any, get a duotone treatment (`--bg` to `--accent` at low opacity) so they feel consistent.
- Never use stock robot or "glowing brain" imagery.
- All media has alt text. Videos: muted, loop, `playsInline`, poster image, lazy-loaded, under 4 MB each (WebM + MP4).

### 5.3 Diagrams
- Inline SVG, drawn with 1.5px strokes, rounded caps, `--text-muted` for lines, `--accent` for the active path, labels in Geist Mono 12px uppercase.
- Always themeable (use `currentColor` and CSS variables).
- Every diagram has a caption and an accessible `<title>`/`<desc>`.

### 5.4 Charts
- Recharts, no gridline clutter: light horizontal grid in `--border`, labels in `--text-muted`, accent for our series, neutral grey for baselines.
- Show data labels directly; avoid legends when there are two series or fewer.
- Only display numbers supplied by the owner or taken from cited papers.

---

## 6. Components

### 6.1 Header
- Height `64px`. Sticky. Transparent at top; after 16px scroll becomes `--bg` at 80% with `backdrop-filter: blur(12px)` and a 1px bottom border.
- Left: wordmark. Centre/right nav: Enterprise AI · Physical AI · Agriculture · Research · Projects · Company ▾.
- Right: theme toggle (icon button) and **"Request a pilot"** pill button.
- Mobile: full-screen sheet menu with large 24px links, 48px tap targets.
- Active link: accent underline `2px` offset `6px`.

### 6.2 Buttons
| Type | Style |
|---|---|
| Primary | Pill, `--accent` background, `--bg` text, 48px tall, 24px horizontal padding, hover: `--accent-hover` + 1px upward translate, arrow icon slides 4px |
| Secondary | Pill, 1px `--border-strong`, transparent, hover fills `--surface` |
| Link | Text with arrow `->`; underline animates left to right on hover |
Focus ring: `2px` `--focus` with `2px` offset, always visible.

### 6.3 Pillar Card (Home, five of them)
- Mono label top-left: `01`, `02`... in `--text-faint`.
- Icon (24px line icon), title (h3), one-line outcome, "Learn more ->" link pinned to the bottom.
- Border `1px --border`, background `--bg-elevated`, radius 16px. Hover: border becomes `--border-strong`, a faint accent glow (`box-shadow: 0 0 0 1px var(--accent-soft)`), card lifts 2px.

### 6.4 Release Row (Research list, inspired by the dated-list pattern)
Used on the Home "Latest research" block and `/research`.
```
[ 16 APR 2026 ]  [ v0.1 · WORLD MODEL ]
Title of the release in h3                                   ->
One-line description in muted body text (max 2 lines)
-------------------------------------------------------------- (hairline)
```
- Date and tag in Geist Mono, uppercase, `--text-faint`.
- Whole row is one link. Hover: title colour becomes `--accent`, arrow shifts right 6px, background `--surface` at 50%.
- Rows separated by 1px hairlines, no boxes.

### 6.5 Literature Entry (third-party arXiv papers)
- Same row pattern with a small badge **"Third-party"** (outlined, mono) and the arXiv ID (`arXiv:2507.01843`) as a link.
- Below the one-line summary, an "Our take" line prefixed by a small accent dot.
- Tag chips for filtering (pillar tags).

### 6.6 Stat Strip ("proof strip")
Three or four large numerals separated by vertical hairlines: **2 / 8 / 20+** with labels "government projects delivered", "client projects", "AI products and platforms". Numerals use Geist 600 at `--fs-h1`, tabular figures; labels in mono uppercase. Count-up animation once on first view (disabled for reduced motion). Never show unapproved or inflated figures.

### 6.7 Work Chip Card (on `/platform/work-chips`)
- A rounded rectangle with a subtle "chip" motif: a 1px inner border inset 6px and small notch marks at the corners (pure CSS/SVG, decorative).
- Content: chip name, one-line job description, status badge (`available` in accent, `in training` in amber, `planned` in muted).

### 6.8 Timeline (process)
Vertical on mobile, horizontal on desktop. Nodes are 12px circles on a 1px line; the active node uses `--accent`. Step labels in mono; descriptions in body text.

### 6.9 Forms
- Labels above fields, 14px medium. Inputs 48px tall, radius 10px, 1px `--border-strong`, focus ring `--focus`.
- Audience selector as segmented pills (Enterprise · Farm or equipment partner · Researcher · Investor · Other).
- Inline validation messages in `--signal`, never red-only; include icons and text.
- Success state: replace the form with a confirmation card, no page reload.

### 6.9a Footer
- Large closing CTA band: "Build with us." plus three pill links (Enterprise customer, Farm or equipment partner, Researcher).
- Below: 4 link columns, the corporate identity block (legal name, address, phone, emails, hours) in `--text-muted` small text, social icons, theme toggle, and `© year DPULSE AI PRIVATE LIMITED`.
- A single, quiet "supported by / partners" line only if the owner supplies real names.

### 6.10 Citation / Code blocks
Mono 13px, `--surface` background, 1px border, radius 12px, copy button top-right with "Copied" toast (aria-live).

### 6.11 Tables
No zebra stripes. Header row in mono uppercase `--text-faint`, rows separated by hairlines, numeric columns right-aligned with tabular figures. Wide tables scroll inside their own container.

---

## 7. Page Layouts (wireframes)

### 7.1 Home
```
[Header]
HERO (wide container, ~88vh)
  left (cols 1-7):  label "DPULSE AI"  (mono)
                    H1: "The brain for *physical* AI."   <- one serif-italic word
                    sub (body-l, 52ch): one sentence on software-only, hardware-agnostic
                    [Request a pilot]  [Read our research ->]
  right (cols 8-12): Router Field SVG
  bottom strip: "Works with any robot, tractor, drone or camera system."
PROOF STRIP: 2 | 8 | 20+
STACK DIAGRAM: domain data -> custom LLM/DSLM -> VLM/VLA + world model -> robot action
FIVE PILLARS: 3+2 grid of Pillar Cards
FEATURED: Agriculture (50/50 media + text)
LATEST RESEARCH: 4 Release Rows + "All research ->"
WORK CHIPS teaser: mini router diagram + 3 bullets
PROJECTS: 3 cards
CLOSING CTA band
[Footer]
```

### 7.2 Research index (`/research`)
```
H1 "Research"      sub: one sentence
Filter bar (sticky under header): All | Models | Papers | Datasets | Benchmarks | Reading list   [search]
Year-grouped Release Rows (our work first)
Section "Research radar": what's new in the field (third-party), see build spec Section 19
Footer note: research contact + hiring line
```

### 7.3 Research detail (`/research/[slug]`)
Single-column reading layout, content width `68ch`, with a sticky mini table of contents on the right at xl. Order: mono meta (date, version, tags) -> H1 -> summary -> hero media -> results -> method + diagrams -> demos -> links row (Paper, Model, Code, Dataset) -> citation block -> collaboration/hiring footer block.

### 7.4 Agriculture
Alternating media/text sections on a subtle topographic background. A pull-quote style "problem" line in Instrument Serif italic. Results shown as stat strip plus one chart. Clear "Pilot request" form at the end.

### 7.5 Work Chips
Hero with the Router Field enlarged, then chip catalogue grid (Work Chip Cards), "how routing works" two-column explainer, related-research list.

### 7.6 Contact
Left: form. Right: sticky card with address, phone, emails, hours, and an "Open in Maps" link.

---

## 8. Motion

- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)`. **Durations:** 180ms (hover), 320ms (reveal), 600ms (hero entrance).
- **Scroll reveal:** fade + 12px translateY, staggered 60ms, once only.
- **Hero:** headline lines slide up 16px with a clip mask; router pulses begin after 600ms.
- **No** parallax, no scroll-jacking, no cursor trailers, no auto-playing audio.
- **Reduced motion:** disable all transforms and pulses; show end states instantly.
- Page transitions: simple 200ms opacity fade.

---

## 9. Iconography
`lucide-react`, stroke 1.5, size 20 or 24. Colour `currentColor`. Never mix icon sets. Custom icons (chip, router, field) are drawn in the same stroke style.

---

## 10. Accessibility and Performance Targets
- WCAG 2.2 AA: contrast, focus visibility, target size (min 44px), keyboard order, skip-to-content link, semantic landmarks.
- Every interactive element reachable and operable by keyboard; dialogs trap focus.
- Lighthouse mobile 90+ on all four categories for Home, Research index and one Research detail.
- LCP under 2.5s: hero is text plus inline SVG (no large image dependency). Fonts preloaded with `font-display: swap`. Images via `next/image` with explicit sizes.
- CLS under 0.05: reserve media space with `aspect-ratio`.
- Total JS on Home under 180KB gzipped (no heavy animation libraries beyond Framer Motion tree-shaken).

---

## 11. Tailwind Mapping (reference)

```ts
// tailwind.config.ts (excerpt)
theme: {
  extend: {
    colors: {
      bg: "var(--bg)", elevated: "var(--bg-elevated)", surface: "var(--surface)",
      border: "var(--border)", "border-strong": "var(--border-strong)",
      text: "var(--text)", muted: "var(--text-muted)", faint: "var(--text-faint)",
      accent: "var(--accent)", "accent-soft": "var(--accent-soft)", signal: "var(--signal)",
    },
    fontFamily: {
      sans: ["var(--font-geist)", "ui-sans-serif", "system-ui"],
      serif: ["var(--font-instrument)", "ui-serif", "Georgia"],
      mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
    },
    borderRadius: { card: "16px", control: "10px" },
    maxWidth: { container: "1200px", wide: "1360px", prose: "68ch" },
  },
}
```

---

## 12. Do and Don't

**Do**
- Let whitespace and typography do the work.
- Lead with research and real model outputs.
- Keep one accent, one grid, one rhythm.
- Make dark and light both feel intentional.
- Show "software only, hardware-agnostic" wherever physical AI is discussed.

**Don't**
- Don't copy any reference site's text, images, icons or layouts.
- Don't use stock robot photos, neon "AI brain" art, purple gradients, glassmorphism everywhere, or emoji in UI.
- Don't show fake logos, fake numbers or revenue.
- Don't use more than one serif-italic phrase per heading block.
- Don't add carousels or auto-advancing sliders.
- Don't hard-code colours or pixel values outside the token scales.

---

## 13. Design QA Checklist (agent must pass before delivery)

- [ ] All colours come from tokens; both themes pass AA contrast.
- [ ] Only Geist, Geist Mono and Instrument Serif are used; no layout shift from fonts.
- [ ] Every section uses the same container and left edge (verify with an overlay grid at 1280 and 1440).
- [ ] Card rows have equal heights; CTAs share a baseline.
- [ ] Spacing uses only the 8px scale values.
- [ ] Router Field animates smoothly, has a reduced-motion fallback, and does not tank Lighthouse.
- [ ] Release rows, literature entries and stat strip match the component specs above.
- [ ] No horizontal scroll at 360, 390, 768, 1024, 1280, 1440, 1920.
- [ ] Keyboard-only run-through of Home, Research, Contact succeeds; focus rings visible.
- [ ] Screenshots of Home, Research index, Research detail, Agriculture, Work Chips and Contact in both themes attached to the delivery notes.
