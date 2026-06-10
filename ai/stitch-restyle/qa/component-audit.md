# Component Usage Audit

Audited: 2026-06-10

## Summary

Overall the codebase is in very good shape. The dark design system (`glass-card`, `blue-gradient-text`, `primary-btn`, `secondary-btn`, `label-text`, `font-headline`, `font-body`, `font-label`, token colors `text-text`, `text-muted`, `bg-surface`, `bg-background`, `text-primary`, `text-accent`) is applied consistently across all pages. No old light-theme classes (`bg-white`, `text-gray-*`, `bg-light`, old `font-heading`) were found anywhere.

Key issues:
- **Nav links point to wrong service slugs** — Nav.tsx and Footer.tsx use short slugs (e.g., `/services/general-liability`, `/services/workers-comp`) that don't match actual page routes (e.g., `/services/general-liability-insurance`, `/services/workers-compensation-insurance-for-spray-foam-contractors`).
- **about-us is missing FAQSection** — the only service/about page without one.
- **One hardcoded color** — `text-yellow-400` / `bg-yellow-500/10` used directly in several service pages for warning/AlertTriangle contexts (design system has `text-highlight` but the yellow color isn't routed through it consistently).
- **surety-bonds imports `next/image` for a `/images/bond-diagram.png`** that likely doesn't exist yet.
- **Dashboard layout correctly excludes Nav/Footer** — no double-wrapping issues.

---

## Page-by-Page

### app/layout.tsx (Root Layout)
- Nav: PRESENT — renders `<Nav />` before `<main>`
- Footer: PRESENT — renders `<Footer />` after `<main>`
- `<main className="pt-16">` wraps all children — correct offset for fixed nav
- Design system classes: PASS — `bg-background text-text font-body antialiased`
- Notes: Root layout correctly wraps all non-dashboard pages via Next.js route nesting.

---

### app/dashboard/layout.tsx (Dashboard Layout)
- Nav: CORRECTLY ABSENT — does not re-import Nav or Footer
- Footer: CORRECTLY ABSENT
- Uses own sidebar (`DashboardSidebarNav`) and sets `top-16` on aside — relies on root layout's Nav being at 64px
- Design system classes: PASS — `bg-background`, `bg-surface`, `border-primary/10`, `text-text`, `text-muted`, `text-primary`, `font-headline`
- Notes: Clean separation. Root layout still provides Nav/Footer above the dashboard route segment. This is correct Next.js nested layout behavior.

---

### app/page.tsx (Homepage)
- PageHero: N/A — custom hero section (acceptable per spec)
- CTABar: YES — `<CTABar />` at end
- FAQSection: YES — inline FAQ with 5 items
- Design system classes: PASS — `blue-gradient-text`, `primary-btn`, `secondary-btn`, `label-text`, `font-headline`, `font-body`, `font-label`, `glass-card`, `ambient-orb`, `dot-grid`, `bg-background`, `bg-surface`, `text-text`, `text-muted`, `text-primary`, `text-accent`
- Notes: Excellent. Uses all major design system components. StatBar, ServiceCard, GlassCard, FAQSection, CTABar all present.

---

### app/services/page.tsx (Services Index)
- PageHero: YES — `<PageHero title="Insurance Coverage for Spray Foam Contractors" />`
- CTABar: YES — `<CTABar />` at end
- FAQSection: NO — services index page; acceptable (it's a listing page, not a deep-dive service page)
- Design system classes: PASS — `label-text`, `font-headline`, `text-text`, `text-muted`, `font-label`, `bg-background`, `bg-surface`, `border-primary/10`
- Notes: Clean. Uses ServiceCard and GlassCard correctly.

---

### app/services/general-liability-insurance/page.tsx
- PageHero: YES — `<PageHero title="General Liability Insurance for Spray Foam Contractors" />`
- CTABar: YES — `<CTABar />` at end
- FAQSection: YES — 6 FAQ items with `<FAQSection items={faqs} />`
- Design system classes: PASS — all tokens used correctly
- Hardcoded styles: MINOR — `bg-yellow-500/10` and `text-yellow-400` used for AlertTriangle warning cards. Design system has `text-highlight` (presumably amber/yellow), but this is a direct Tailwind yellow instead of the token.
- Notes: Most complete service page. JSON-LD structured data included. StatBar not used here (fine).

---

### app/services/commercial-auto/page.tsx
- PageHero: YES — `<PageHero title="Commercial Auto Insurance for Spray Foam Contractors" />`
- CTABar: YES — `<CTABar />` at end
- FAQSection: YES — 5 FAQ items with `<FAQSection items={faqItems} />`
- Design system classes: PASS — all tokens used correctly
- Hardcoded styles: MINOR — `text-highlight` used for AlertTriangle (this is correct token usage); however the GlassCards in the coverage grid don't have inner padding class (they rely on GlassCard default `p-6` but wrap content in a `<div className="flex flex-col gap-4">` without explicit padding call — renders fine since GlassCard adds `p-6` by default).
- Notes: Clean. JSON-LD structured data included.

---

### app/services/surety-bonds/page.tsx
- PageHero: YES — `<PageHero title="Surety Bonds for Spray Foam Contractors" />`
- CTABar: YES — `<CTABar />` at end
- FAQSection: YES — 6 FAQ items with `<FAQSection items={faqItems} />`
- Design system classes: PASS — all tokens used correctly
- Hardcoded styles: NONE
- Notes: Uses `next/image` for `/images/bond-diagram.png` (line 93–99). This image file likely does not exist yet — will render a broken image or Next.js error at runtime. Should be verified or replaced with a placeholder. JSON-LD structured data included.

---

### app/services/environmental-liability/page.tsx
- PageHero: YES — `<PageHero title="Environmental Liability Insurance for Spray Foam Contractors" />`
- CTABar: YES — `<CTABar />` at end
- FAQSection: YES — 5 FAQ items with `<FAQSection items={faqs} />`
- Design system classes: PASS — all tokens used correctly
- Hardcoded styles: MINOR — `bg-yellow-500/10` used for AlertTriangle warning cards (same pattern as GL page). Should use design system token if `bg-highlight/10` maps to yellow.
- Notes: Clean structure. JSON-LD structured data included.

---

### app/services/workers-compensation-insurance-for-spray-foam-contractors/page.tsx
- PageHero: YES — `<PageHero title="Workers' Compensation Insurance for Spray Foam Contractors" />`
- CTABar: YES — `<CTABar />` at end
- FAQSection: YES — 5 FAQ items with `<FAQSection items={faqs} />`
- Design system classes: PASS — all tokens used correctly
- Hardcoded styles: MINOR — `bg-yellow-500/10` used for AlertTriangle warning cards (same pattern)
- Notes: Uses StatBar with industry stats — good. No JSON-LD (minor omission vs other service pages).

---

### app/about-us/page.tsx
- PageHero: YES — `<PageHero title="About Spray Foam Insurance" />`
- CTABar: YES — `<CTABar />` at end
- FAQSection: NO — **MISSING**. An About Us FAQ section (e.g., "Are you licensed in my state?", "How long have you been in business?") would strengthen the page and is expected per spec.
- Design system classes: PASS — all tokens used correctly; uses `label-text`, `font-headline`, `font-label`, `glass-card`, `bg-background`, `bg-surface`
- Hardcoded styles: NONE
- Notes: Uses `<img>` (plain HTML) instead of Next.js `<Image>` for the Josh Cotner founder photo at line 55. This bypasses Next.js image optimization (no lazy loading, no WebP conversion, no size optimization). Should use `import Image from 'next/image'` with explicit `width`/`height`.

---

### app/dashboard/page.tsx (Dashboard Home)
- PageHero: N/A — dashboard page
- CTABar: N/A — dashboard page
- FAQSection: N/A — dashboard page
- Design system classes: PASS — `glass-card`, `font-headline`, `label-text`, `blue-gradient-text`, `primary-btn`, `secondary-btn`, `text-text`, `text-muted`, `text-primary`, `text-accent`, `text-highlight`
- Notes: No Nav/Footer imports — correct. Imports only from `@clerk/nextjs/server` and `next/link`/lucide. Clean dashboard implementation.

---

### app/dashboard/policies/page.tsx
- PageHero: N/A
- CTABar: N/A
- FAQSection: N/A
- Design system classes: PASS — `glass-card`, `font-headline`, `label-text`, `primary-btn`, `secondary-btn`, `text-text`, `text-muted`, `text-primary`, `text-accent`
- Notes: No component imports from `@/components/` — uses design system utility classes directly on divs. Correct for a dashboard page. No Nav/Footer.

---

### app/dashboard/certificates/page.tsx
- PageHero: N/A
- CTABar: N/A
- FAQSection: N/A
- Design system classes: PASS — `glass-card`, `font-headline`, `label-text`, `primary-btn`, `text-text`, `text-muted`, `text-primary`, `text-accent`, `text-highlight`
- Notes: `'use client'` — correct (uses useState for form). `inputClass` variable used consistently for all form inputs. No Nav/Footer.

---

### app/dashboard/quotes/page.tsx
- PageHero: N/A
- CTABar: N/A
- FAQSection: N/A
- Design system classes: PASS — `glass-card`, `font-headline`, `label-text`, `primary-btn`, `text-text`, `text-muted`, `text-primary`, `text-accent`, `text-highlight`
- Notes: `'use client'` — correct (accordion expand/collapse). Status badge colors map correctly to design tokens (`bg-highlight/10`, `bg-accent/10`, `bg-surface`). No Nav/Footer.

---

### app/dashboard/documents/page.tsx
- PageHero: N/A
- CTABar: N/A
- FAQSection: N/A
- Design system classes: PASS — `glass-card`, `font-headline`, `label-text`, `secondary-btn`, `text-text`, `text-muted`, `text-primary`, `text-accent`, `text-highlight`
- Notes: Server component (no 'use client'). Dynamic category badge colors sourced from data array strings — works but creates a dynamic class generation pattern that Tailwind's JIT may or may not purge correctly depending on config. Should be confirmed that `bg-primary/10 text-primary border-primary/20`, `bg-accent/10 text-accent border-accent/20`, `bg-highlight/10 text-highlight border-highlight/20` are safelisted or statically referenced. No Nav/Footer.

---

### app/dashboard/profile/page.tsx
- PageHero: N/A
- CTABar: N/A
- FAQSection: N/A
- Design system classes: PASS — `glass-card`, `font-headline`, `label-text`, `primary-btn`, `text-text`, `text-muted`, `text-primary`, `text-accent`
- Notes: `'use client'` — correct (form state + Clerk UserProfile). `inputClass` variable for consistent form styling. Clerk `UserProfile` component appearance overrides use `bg-transparent` / `shadow-none` to blend with dark theme — good practice. No Nav/Footer.

---

## Issues Found

1. **Nav.tsx and Footer.tsx have wrong service slugs.** The navigation links use short slugs that don't match actual page routes:
   - Nav/Footer: `/services/general-liability` → Actual page: `/services/general-liability-insurance`
   - Nav/Footer: `/services/workers-comp` → Actual page: `/services/workers-compensation-insurance-for-spray-foam-contractors`
   - Nav/Footer: `/services/rig-and-equipment` → No page exists yet (placeholder)
   - This means clicking "General Liability" or "Workers' Comp" in the nav will 404.

2. **about-us/page.tsx is missing FAQSection.** Every other content page (services, homepage) includes a FAQ. The About Us page should include one (e.g., licensing questions, coverage questions, contact info).

3. **about-us/page.tsx uses `<img>` instead of `<Image>` from next/image** for the founder photo. This misses Next.js image optimization (WebP conversion, lazy loading, CLS prevention via explicit dimensions). Fix: `import Image from 'next/image'` with `width={600} height={400}`.

4. **surety-bonds/page.tsx references `/images/bond-diagram.png`** which is a static asset that likely doesn't exist. Either create the asset or swap in a placeholder/remove the image block until the asset is ready.

5. **workers-compensation page has no JSON-LD structured data.** All other service pages include `<script type="application/ld+json">` with `InsuranceAgency` + `FAQPage` schema. The workers-comp page is missing this, which is an SEO gap.

6. **Dynamic Tailwind class strings in documents/page.tsx** — the `categoryColor` field in the documents array contains full Tailwind class strings (e.g., `'bg-primary/10 text-primary border-primary/20'`). These are dynamically injected via template literals, which can cause Tailwind JIT to miss them during purge if not safelisted. Verify `safelist` in `tailwind.config` covers these patterns, or refactor to use a lookup map with static class strings.

---

## Hardcoded Styles Found

No `style={{ ... }}` JSX inline style attributes were found on any page. All styling is via Tailwind utility classes.

**Design-token bypass (Tailwind color references that should use CSS tokens):**

| File | Class Used | Should Be |
|---|---|---|
| `app/services/general-liability-insurance/page.tsx` (lines 178, 202, 213) | `bg-yellow-500/10`, `text-yellow-400` | `bg-highlight/10`, `text-highlight` |
| `app/services/environmental-liability/page.tsx` (lines 90, 99, 108) | `bg-yellow-500/10` | `bg-highlight/10` |
| `app/services/workers-compensation-insurance-for-spray-foam-contractors/page.tsx` (lines 71, 80, 88, 97) | `bg-yellow-500/10` | `bg-highlight/10` |

Note: `text-highlight` is already used on some of these pages (e.g., commercial-auto line 149, workers-comp line 91 uses `text-highlight` for AlertTriangle icon colors). The inconsistency is that the icon background `bg-yellow-500/10` was hardcoded with a Tailwind yellow while the icon color uses the token. These should be aligned: use `bg-highlight/10` for the container background in all cases. Confirm the `highlight` CSS variable resolves to the same yellow before switching.
