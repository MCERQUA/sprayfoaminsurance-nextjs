# Spray Foam Insurance — Design System Bible

> Reference for Workers B and C. All tokens are baked into tailwind.config.js and globals.css.

---

## Color Tokens

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| `background` | `#080d16` | `bg-background` | Page background, deepest layer |
| `surface` | `#0d1421` | `bg-surface` | Sidebar, nav backdrop, elevated sections |
| `card` | `#111827` | `bg-card` | Base for glass-card before blur |
| `primary` | `#2ea3f2` | `text-primary`, `bg-primary`, `border-primary` | CTA buttons, links, accents, icons |
| `accent` | `#29c4a9` | `text-accent`, `bg-accent` | Secondary actions, stat highlights, teal glow |
| `highlight` | `#f59e0b` | `text-highlight`, `bg-highlight` | Amber CTAs, warning states, badge callouts |
| `text` | `#f0f4f8` | `text-text` | Body text, headings |
| `muted` | `#94a3b8` | `text-muted` | Secondary text, placeholders, captions |

---

## Typography Scale

### Fonts
- **Headline / Display** — `Montserrat` (weights: 600, 700, 800) — all h1-h6, hero titles
- **Body** — `Inter` (weights: 400, 500, 600) — paragraphs, descriptions, nav links
- **Label** — `Public Sans` (weights: 500, 600, 700) — buttons, badges, nav labels, form labels

### Tailwind Font Classes
```
font-headline  →  Montserrat
font-display   →  Montserrat
font-body      →  Inter
font-label     →  Public Sans
```

### Letter Spacing
- `tracking-tighter` (`-0.02em`) — all headings (applied globally via globals.css)
- `tracking-widest` (`0.1em`) — `.label-text` / ALL CAPS labels

### Scale Reference
| Use | Size | Weight | Class |
|---|---|---|---|
| Page hero H1 | 48–72px | 800 | `text-5xl lg:text-6xl font-headline font-extrabold` |
| Section H2 | 30–36px | 700 | `text-3xl font-headline font-bold` |
| Card H3 | 18–20px | 700 | `text-lg font-headline font-bold` |
| Nav link | 14px | 500 | `text-sm font-medium` |
| Label badge | 11–12px | 600 | `text-xs font-label label-text` |
| Body | 14–16px | 400 | `text-sm` or `text-base` |
| Caption | 12px | 400 | `text-xs text-muted` |

---

## Component Variants

### `.glass-card`
Dark glassmorphism card. Applied via CSS utility class.
```css
background: rgba(17, 24, 39, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(46, 163, 242, 0.1);
border-radius: 1rem;
/* hover: border-color rgba(46,163,242,0.4), box-shadow glow, translateY(-4px) */
```
**Use for:** service cards, stat boxes, FAQ items, form containers, info panels.

### `.blue-gradient-text`
Hero titles, logo, emphasis text.
```css
background: linear-gradient(135deg, #2ea3f2, #29c4a9);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### `.primary-btn`
Blue gradient CTA button.
```css
background: linear-gradient(135deg, #2ea3f2, #1a7ebf);
/* hover: glow box-shadow + scale(1.02) */
```
Combine with: `px-6 py-3 rounded-full font-semibold font-label`

### `.secondary-btn`
Teal outline button.
```css
border: 1px solid #29c4a9;
color: #29c4a9;
/* hover: bg-teal/10 + glow */
```

### `.amber-cta`
Amber filled CTA (high-conversion). Dark text on bright amber.
```css
background-color: #f59e0b;
color: #080d16;
```

### `.nav-glass`
Navigation bar backdrop.
```css
background: rgba(8, 13, 22, 0.85);
backdrop-filter: blur(16px);
border-bottom: 1px solid rgba(46, 163, 242, 0.1);
```

### `.label-text`
ALL CAPS label / badge text.
```css
font-family: 'Public Sans';
text-transform: uppercase;
letter-spacing: 0.1em;
```

### `.dot-grid`
Subtle dot pattern background for hero sections.
```css
background-image: radial-gradient(rgba(46, 163, 242, 0.1) 1px, transparent 1px);
background-size: 32px 32px;
```

### `.ambient-orb`
Decorative blur orbs for depth in hero / auth backgrounds.
```html
<div class="ambient-orb w-96 h-96 bg-primary opacity-10 -top-20 -left-20" />
```

---

## Shared Components (components/)

| File | Props | Notes |
|---|---|---|
| `Nav.tsx` | none | Clerk-aware, services dropdown, mobile hamburger |
| `Footer.tsx` | none | 4-col dark footer with brand + links |
| `PageHero.tsx` | `title, subtitle?, ctaText?, ctaHref?, badge?` | Dot-grid bg, blue gradient title, ambient orbs |
| `GlassCard.tsx` | `children, className?` | Wraps glass-card CSS class |
| `CTABar.tsx` | none | "Ready to protect?" bar with Quote + Phone CTA |
| `StatBar.tsx` | `stats: {label, value}[]` | Row of large gradient stat numbers |
| `ServiceCard.tsx` | `title, description, href, icon?` | Glass card with hover + arrow link |
| `FAQSection.tsx` | `items: {q, a}[]` | Client-side accordion, Plus icon rotates 45° |
| `FormCard.tsx` | `children, title?, subtitle?, className?` | Centered glass form container |
| `Breadcrumbs.tsx` | `items: {label, href?}[]` | Muted breadcrumb trail |

---

## Layout Patterns

### Page with hero + content
```tsx
<>
  <PageHero title="..." subtitle="..." ctaText="Get a Quote" ctaHref="/quote" badge="SPF Specialists" />
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {/* content */}
  </section>
  <CTABar />
</>
```

### Service page with stats
```tsx
<>
  <PageHero ... />
  <StatBar stats={[{label: 'Years Experience', value: '15+'}, ...]} />
  <section className="...">...</section>
  <FAQSection items={[...]} />
  <CTABar />
</>
```

### Section headings
```tsx
<div className="text-center mb-12">
  <p className="text-xs label-text text-accent mb-3">Section Label</p>
  <h2 className="text-3xl font-headline font-bold text-text mb-4">Section Heading</h2>
  <p className="text-muted max-w-2xl mx-auto">Supporting description.</p>
</div>
```

---

## Stitch Screen Reference

| Screen | File |
|---|---|
| Homepage | `ai/stitch-restyle/screens/homepage.html` |
| General Liability | `ai/stitch-restyle/screens/general-liability.html` |
| Commercial Auto | `ai/stitch-restyle/screens/commercial-auto.html` |
| Environmental Liability | `ai/stitch-restyle/screens/environmental-liability.html` |
| Contact | `ai/stitch-restyle/screens/contact.html` |
| Get Quote | `ai/stitch-restyle/screens/get-quote.html` |
| Resources Hub | `ai/stitch-restyle/screens/resources-hub.html` |
| Blog Index | `ai/stitch-restyle/screens/blog-index.html` |

---

## Do's and Don'ts

**Do:**
- Always `className="dark"` on `<html>` — Tailwind dark mode is class-based
- Use `pt-16` on page `<main>` to clear the fixed nav
- Use `font-headline` for all headings, `font-label` for all buttons/badges
- Use `glass-card` for information boxes, never plain `bg-card` alone
- Wrap dashboard in the server-side auth check in `dashboard/layout.tsx`

**Don't:**
- Don't use light backgrounds or white text on white — everything is dark-first
- Don't use Tailwind's built-in `font-sans` — we override it to Inter via body CSS
- Don't add `"use client"` unless you need interactivity — keep pages server components
- Don't duplicate Nav/Footer — they're in root layout
