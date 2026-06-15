# Technical SEO Audit — SprayFoamInsurance.com Next.js Site
**Date:** 2026-06-15  
**Auditor:** Worker A (josh-desk-2@mesh)  
**Scope:** All 39 routes in `/app` directory  
**Total issues found:** 31

---

## Summary

| Area | Status | Issues |
|------|--------|--------|
| JSON-LD Schema | ISSUES FOUND | 8 |
| Meta Titles + Descriptions | ISSUES FOUND | 8 |
| Canonical / Sitemap / Robots | ISSUES FOUND | 5 |
| Heading Hierarchy | ISSUES FOUND | 6 |
| Internal Links | ISSUES FOUND | 5 |
| Robots.txt (bot allowlist) | PASS | — |

---

## ISSUES FOUND

---

### 1. JSON-LD Schema

#### CRITICAL — Duplicate FAQPage schema on 5 service pages

Each of the following pages emits two separate `FAQPage` JSON-LD blocks: one in the inline `@graph` const and a second from the `<FAQSection>` component. Google's Rich Results Test flags multiple same-type schemas on a single page.

- `app/services/commercial-auto/page.tsx` lines 28–35 (inline `@graph`) + line 214 (`<FAQSection>`)
- `app/services/environmental-liability/page.tsx` lines 26–33 (inline `@graph`) + line 193 (`<FAQSection>`)
- `app/services/general-liability-insurance/page.tsx` lines 30–37 (inline `@graph`) + line 289 (`<FAQSection>`)
- `app/services/surety-bonds/page.tsx` lines 27–34 (inline `@graph`) + line 213 (`<FAQSection>`)
- `app/services/workers-compensation-insurance-for-spray-foam-contractors/page.tsx` lines 30–35 (inline `@graph`) + line 239 (`<FAQSection>`)

**Fix:** Remove the `FAQPage` node from each page's inline `@graph` and let `FAQSection` handle it exclusively.

---

#### CRITICAL — Duplicate InsuranceAgency schema on every service page

`components/JsonLd.tsx` (rendered in layout) already defines `InsuranceAgency` + `LocalBusiness` with `@id: https://sprayfoaminsurance.com/#organization`. Each service page then defines an anonymous second `InsuranceAgency` node inside its own `@graph` with no `@id`, creating two separate InsuranceAgency entities per page.

- `app/services/commercial-auto/page.tsx` lines 19–26
- `app/services/environmental-liability/page.tsx` lines 19–24
- `app/services/general-liability-insurance/page.tsx` lines 21–28
- `app/services/surety-bonds/page.tsx` lines 20–25
- `app/services/workers-compensation-insurance-for-spray-foam-contractors/page.tsx` lines 21–28

**Fix:** Replace the anonymous `InsuranceAgency` node in each service page `@graph` with an `@id` reference only: `{ "@id": "https://sprayfoaminsurance.com/#organization" }`.

---

#### CRITICAL — No Article/BlogPosting schema on any blog post

All 10 blog posts have zero JSON-LD. They set `openGraph: { type: 'article' }` in metadata (good for social sharing) but there is no `Article` or `BlogPosting` structured data — no Google rich results eligibility for author byline, publish date, or breadcrumbs in SERPs.

- `app/2023/09/24/can-i-get-coverage-for-mold-and-mildew-claims/page.tsx`
- `app/2023/09/24/do-i-need-insurance-if-i-subcontract-work/page.tsx`
- `app/2023/09/24/do-i-need-special-coverage-for-roofing-projects/page.tsx`
- `app/2023/09/24/does-insurance-cover-overspray-damage/page.tsx`
- `app/2023/09/24/how-does-insurance-protect-my-clients/page.tsx`
- `app/2023/09/24/is-my-equipment-covered/page.tsx`
- `app/2023/09/24/is-retrofitting-insurance-available-for-spray-foam-contractors/page.tsx`
- `app/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects/page.tsx`
- `app/2023/09/24/what-factors-affect-insurance-premiums/page.tsx`
- `app/2025/07/04/spray-foam-equipment-financing-building-strong-banking-relationships/page.tsx`

**Fix:** Add a `BlogPosting` JSON-LD block to each post with `headline`, `author` (Josh Cotner), `datePublished`, `dateModified`, `publisher` (org `@id` reference), `url`, and `description`.

---

#### MODERATE — No schema on `app/services/rig-equipment/page.tsx`

This is the only service page with no `InsuranceAgency` or `Service` schema. It only has a `FAQPage` block from `<FAQSection>` at line 176 but lacks the org/service context that all other service pages have.

**Fix:** Add an `@graph` with an `InsuranceAgency` `@id` reference and a `Service` node describing rig/equipment coverage.

---

#### MODERATE — Telephone format inconsistency across service pages

- `components/JsonLd.tsx:10` — E.164 format `'+18449675247'` (correct per schema.org)
- All 5 service page `jsonLd` consts — display format `'844-967-5247'`  
  Affected: `commercial-auto/page.tsx:23`, `environmental-liability/page.tsx:22`, `general-liability-insurance/page.tsx:24`, `surety-bonds/page.tsx:23`, `workers-comp/page.tsx:24`

**Fix:** Change all service page telephone values to `'+18449675247'` to match the layout schema and the schema.org E.164 spec.

---

#### MINOR — `sameAs` in `components/JsonLd.tsx:40` only lists own URL

`sameAs: [BASE_URL]` — pointing to yourself is a no-op. This field is for authoritative external profiles that help Google disambiguate the entity.

**Fix:** Add real external profile URLs: Google Business Profile, LinkedIn company page, Facebook page, BBB listing.

---

#### MINOR — No blog index (`/blog`) or category page schema

`app/blog/page.tsx` and `app/category/insurance-insights/page.tsx` have no JSON-LD. An `ItemList` or `CollectionPage` schema would improve crawlability signals.

**Fix:** Add `CollectionPage` or `Blog` schema to `app/blog/page.tsx`. Lower priority than blog post schemas.

---

### 2. Meta Titles + Descriptions

#### CRITICAL — 7 pages missing metadata export entirely

These pages have no `export const metadata` — they will inherit the root layout default (which sets canonical to the homepage, a mass-canonicalization bug):

- `app/spf-resources/work-record-form/page.tsx` — `'use client'` page with no metadata
- `app/dashboard/page.tsx`
- `app/dashboard/certificates/page.tsx` — `'use client'`
- `app/dashboard/documents/page.tsx`
- `app/dashboard/policies/page.tsx`
- `app/dashboard/quotes/page.tsx` — `'use client'`
- `app/dashboard/profile/page.tsx` — has metadata but missing `description`

**Fix:** Add metadata exports with `robots: { index: false, follow: false }` to all dashboard pages and work-record-form. For `'use client'` pages, move metadata to a parent server component.

---

#### HIGH — Homepage title double-appends brand name

`app/page.tsx` exports `title: 'Spray Foam Insurance | Specialized SPF Contractor Coverage'` but the layout defines `template: '%s | Spray Foam Insurance'`. This renders as:  
`Spray Foam Insurance | Specialized SPF Contractor Coverage | Spray Foam Insurance`

**Fix:** Change the homepage metadata to use `title: { absolute: 'Spray Foam Insurance | Specialized SPF Contractor Coverage' }` to bypass the template.

---

#### HIGH — sign-in and sign-up pages missing descriptions and noindex

- `app/sign-in/[[...sign-in]]/page.tsx` — title present, description MISSING, no `robots: { index: false }`
- `app/sign-up/[[...sign-up]]/page.tsx` — title present, description MISSING, no `robots: { index: false }`

**Fix:** Add description and `robots: { index: false, follow: false }` to both pages.

---

#### MODERATE — Two blog titles exceed 60-character limit (SERP truncation)

- `app/2025/07/04/spray-foam-equipment-financing-building-strong-banking-relationships/page.tsx` — title: `Spray Foam Equipment Financing: Building Strong Banking Relationships` (69 chars)
- `app/2023/09/24/is-retrofitting-insurance-available-for-spray-foam-contractors/page.tsx` — title: `Is Retrofitting Insurance Available for Spray Foam Contractors?` (63 chars)

**Fix:** Shorten to ≤60 chars. E.g., `Equipment Financing for Spray Foam Contractors` and `Retrofitting Insurance for SPF Contractors?`

---

#### MINOR — One blog description exceeds 160-character limit

- `app/2023/09/24/can-i-get-coverage-for-mold-and-mildew-claims/page.tsx` — description is 166 chars (6 over)

**Fix:** Trim to ≤160 chars.

---

#### MINOR — Root layout default description is 230 chars (too long)

`app/layout.tsx` — default fallback description is 230 characters. Pages without their own description will inherit this, causing Google to truncate or rewrite it.

**Fix:** Shorten the default `description` in layout metadata to ≤160 chars.

---

### 3. Canonical Tags / Sitemap / Robots

#### CRITICAL — Root layout canonical bleeds to all pages without their own override

`app/layout.tsx:73` sets `alternates: { canonical: SITE_URL }` globally. Any page that doesn't override `alternates.canonical` in its own metadata export will emit `<link rel="canonical" href="https://sprayfoaminsurance.com">` — telling Google the page is a duplicate of the homepage. Dashboard pages (which have no metadata at all) are the worst affected.

**Fix:** Remove the root-level `alternates.canonical` from the layout entirely, OR ensure every public page overrides it with its own URL. Dashboard pages should use `robots: { index: false }` instead.

---

#### HIGH — All sitemap URLs missing trailing slashes (mismatches `trailingSlash: true`)

`next.config.js:3` sets `trailingSlash: true`, meaning Next.js serves all routes with a trailing slash and 308-redirects requests without one. But `app/sitemap.ts` declares all URLs without trailing slashes (e.g., `https://sprayfoaminsurance.com/quote`). Googlebot will follow the 308s but it wastes crawl budget and creates canonical ambiguity.

**Fix:** Add trailing slashes to every URL in `app/sitemap.ts` except the bare homepage. ~28 URLs need updating.

---

#### MODERATE — Redirect source `/services/rig-equipment` is in the sitemap

`app/sitemap.ts:19` includes `https://sprayfoaminsurance.com/services/rig-equipment`, but `next.config.js` has a `permanent: true` redirect from that path to `/inland-marine/spray_foam_rig_insurance`. Submitting redirecting URLs in a sitemap wastes crawl budget.

**Fix:** Remove the `/services/rig-equipment` entry from `app/sitemap.ts`. The destination (`/inland-marine/spray_foam_rig_insurance`) is already listed at line 21.

---

#### MODERATE — Hardcoded `lastModified` date in sitemap

`app/sitemap.ts:5` — `lastModified: new Date('2026-06-10')` is a static value applied to all entries. Google uses `lastModified` to prioritize recrawling; a frozen date means freshness signals are never sent.

**Fix:** Use dynamic dates (e.g., `fs.statSync` on the source file) or at minimum update when content changes.

---

#### LOW — Dashboard pages lack belt-and-suspenders `robots: noindex`

`app/robots.ts` correctly disallows `/dashboard/` for all bots. However, none of the dashboard page files set `robots: { index: false }` in their metadata exports. If the robots.ts rule is ever removed or narrowed, dashboard pages would become indexable immediately.

**Fix:** Add `robots: { index: false, follow: false }` to metadata exports in all dashboard pages (also fixes the missing metadata issue above).

---

### 4. Heading Hierarchy

#### CRITICAL — Double `<h2>` for one logical heading on homepage

`app/page.tsx:295` and `app/page.tsx:298` — "Beyond Policies:" and "Your Industry's True Support" are rendered as two separate `<h2>` elements for one visual heading, split for gradient styling purposes.

**Fix:** Wrap in a single `<h2>` with inner `<span>` elements for gradient styling: `<h2>Beyond Policies: <span>Your Industry's True Support</span></h2>`.

---

#### CRITICAL — `<h3>` elements appear before first `<h2>` on contact page

`app/contact-us/page.tsx:48`, `59`, `72` — Three `<h3>` elements ("Call Our Specialists", "Coverages We Handle", "Response Time") appear in DOM order before the first `<h2>` ("Send Us a Message" in `<FormCard>` at line 81). Hierarchy goes: `h1` → `h3` → `h2`, which is invalid.

**Fix:** Add a visually hidden or visible `<h2>` before the left-column cards, or demote the three `<h3>` elements to styled `<p>` or `<div>` tags.

---

#### HIGH — `app/category/insurance-insights/page.tsx` has no `<h2>` at all

`app/category/insurance-insights/page.tsx:60` — Article card titles use `<h3>` but there is no `<h2>` in the page body. Hierarchy goes: `h1` (PageHero) → `h3` (article cards).

**Fix:** Add `<h2>Insurance Insights Articles</h2>` (or similar) before the article grid.

---

#### MODERATE — `<h3>` in isolated sections without a parent `<h2>` on vegas page

`app/vegas/page.tsx:166` and `182` — Two `<h3>` elements ("Why Nevada Contractors Choose Us", "Nevada & Las Vegas Spray Foam Insurance") are in standalone sections with no `<h2>` parent of their own. They appear after a different section's `<h2>` at line 142.

**Fix:** Add a `<h2>` to each standalone section or convert to styled `<p>` tags.

---

#### MODERATE — Sidebar `<h3>` elements without `<h2>` parent on work-record-form

`app/spf-resources/work-record-form/page.tsx:517`, `539`, `558` — Sidebar cards use `<h3>` ("Why Use This Form?", "Quick Tips", "Need Coverage?") but have no `<h2>` in their DOM subtree. The nearby `<h2>` in `FormCard` is a sibling column, not an ancestor.

**Fix:** Add a `<h2>` to each sidebar card, or demote headings to styled `<p>` elements.

---

#### MINOR — Standalone `<h3>` without section `<h2>` on attic certificate page

`app/attic-insulation-certificate/page.tsx:336` — `<h3>` "Download Example Certificate" appears in an isolated GlassCard section between two `<h2>` elements (lines 168 and 358) with no `<h2>` of its own.

**Fix:** Wrap in a `<section>` with a `<h2>` or convert to a styled `<p>`.

---

### 5. Internal Links

#### CRITICAL — 3 broken footer links pointing to non-existent routes

- `components/Footer.tsx:4` — `href='/services/general-liability'` — route doesn't exist. Correct path: `/services/general-liability-insurance`
- `components/Footer.tsx:5` — `href='/services/workers-comp'` — route doesn't exist. Correct path: `/services/workers-compensation-insurance-for-spray-foam-contractors`
- `components/Footer.tsx:9` — `href='/services/rig-and-equipment'` — route doesn't exist. Correct path: `/services/rig-equipment`

**Fix:** Update all three href values to their correct slugs. These 404 on every page of the site since footer is global.

---

#### HIGH — Missing legal pages linked from footer

- `components/Footer.tsx:22` — `href='/privacy-policy'` — no `app/privacy-policy/` directory exists
- `components/Footer.tsx:23` — `href='/terms'` — no `app/terms/` directory exists

**Fix:** Either create the pages (`app/privacy-policy/page.tsx`, `app/terms/page.tsx`) or remove the links. Privacy policy is also a legal requirement (CCPA/GDPR) and a trust signal.

---

#### MODERATE — Trailing slash inconsistency on `/quote` links

`next.config.js` has `trailingSlash: true` but link hrefs are inconsistent:  
- Without slash: `app/services/rig-equipment/page.tsx:162`, `app/dashboard/quotes/page.tsx:63,115`, `app/sign-up/[[...sign-up]]/page.tsx:28`, `app/spf-resources/work-record-form/page.tsx:564`  
- With slash: `components/Nav.tsx`, `components/CTABar.tsx`, `app/page.tsx`

**Fix:** Standardize all internal `/quote` links to `/quote/` (with trailing slash, matching `trailingSlash: true`). Do the same audit for `/blog`, `/spf-resources`, and other internally-linked routes.

---

#### MODERATE — `/dashboard/` link visible in public Nav without auth gate

`components/Nav.tsx:272` — `href="/dashboard/"` appears in the main navigation, visible to all visitors including unauthenticated users. Clicking it leads to either a 401 error page or an auth redirect, neither of which is a good user experience.

**Fix:** Conditionally render the dashboard link only when `useAuth()` (Clerk) returns `isSignedIn: true`. Already using Clerk — this should be a one-line guard.

---

#### LOW — `/blog` trailing slash inconsistency between nav and blog article pages

All 10 blog article pages link back with `href="/blog"` (no trailing slash), while `components/Nav.tsx:31` uses `href: '/blog/'` with trailing slash. Each click through a blog article back-link triggers a 308 redirect.

**Fix:** Update all blog article page back-links from `href="/blog"` to `href="/blog/"`.

---

## PASS

### Robots.txt (robots.ts) — All Required Bots Allowed

`app/robots.ts` correctly allows all four target AI crawlers:
- GPTBot — allowed (line 13)
- ClaudeBot — allowed (line 18)
- PerplexityBot — allowed (line 23)
- Google-Extended — allowed (line 28)

Dashboard, sign-in, and sign-up paths are disallowed for all crawlers. Sitemap line is present and correct.

### Schema Fundamentals — Layout Schema is Well-Formed

`components/JsonLd.tsx` — The root InsuranceAgency schema is excellent: dual `['InsuranceAgency', 'LocalBusiness']` type, `@id` for entity disambiguation, E.164 telephone, real email, logo `ImageObject`, founder `Person` node, `areaServed` as `Country` object, `serviceType` array, `priceRange`, and `alternateName`. No fake/placeholder values.

`components/FAQSection.tsx:23–34` — FAQPage implementation is correct: `mainEntity`, `Question`, `Answer` types, and `stripHtml()` to clean answer text before emitting schema.

### Meta — 25+ Pages Have Correct, Unique Metadata

All service pages, inland marine pages, core informational pages (about, contact, quote, safety, spf-resources, attic cert, vegas), and all 10 blog posts have unique, appropriately-lengthed titles and descriptions. No duplicate titles detected across public content pages.

### Heading — No Pages Missing an H1

All 39 pages have exactly one `<h1>`. `PageHero` component consistently renders `<h1>` and is used across 20+ pages. All blog post pages use a consistent direct inline `<h1>`. No missing H1 issues found.

### Internal Links — No Hardcoded Internal Domain URLs

Zero instances of `href="https://sprayfoaminsurance..."` in app or component files. All internal navigation uses relative paths. Social links correctly use `rel="noopener noreferrer"`.

### Nav Service Links — All Slugs Are Correct

`components/Nav.tsx` service dropdown links all match actual route directories. `components/Footer.tsx` main nav links are correct — only the secondary service slugs (findings above) are broken.

### Redirects — Correctly Configured

`next.config.js` has a `permanent: true` redirect from `/services/rig-equipment` (both slash variants) to `/inland-marine/spray_foam_rig_insurance`. Correct 301/308 behavior.

---

## Priority Fix Checklist

### P0 — Do Today
- [ ] Fix 3 broken footer links (`/services/general-liability`, `/services/workers-comp`, `/services/rig-and-equipment`) — `components/Footer.tsx:4,5,9`
- [ ] Add `robots: { index: false }` + metadata to all 6 dashboard pages and work-record-form
- [ ] Fix homepage double-brand title (`title: { absolute: '...' }`) — `app/page.tsx`

### P1 — This Week
- [ ] Remove FAQPage from inline `@graph` on all 5 service pages (keep FAQSection's version)
- [ ] Replace anonymous InsuranceAgency in service pages with `@id` reference
- [ ] Add `BlogPosting` JSON-LD to all 10 blog posts
- [ ] Add trailing slashes to all 28 sitemap URLs in `app/sitemap.ts`
- [ ] Remove `/services/rig-equipment` from sitemap (it's a redirect source)
- [ ] Fix root layout canonical bleed — remove or override `alternates.canonical` in layout

### P2 — This Month
- [ ] Create `/privacy-policy` and `/terms` pages
- [ ] Add `robots: { index: false }` + description to sign-in and sign-up pages
- [ ] Fix contact-us h3-before-h2 issue — `app/contact-us/page.tsx:48,59,72`
- [ ] Add h2 before article grid on category page — `app/category/insurance-insights/page.tsx`
- [ ] Fix homepage double-h2 — `app/page.tsx:295,298`
- [ ] Add auth guard to dashboard link in Nav — `components/Nav.tsx:272`
- [ ] Shorten two over-limit blog titles

### P3 — Backlog
- [ ] Standardize all internal `/quote`, `/blog`, `/spf-resources` links to use trailing slash
- [ ] Fix telephone format in service pages to E.164 `'+18449675247'`
- [ ] Add real external URLs to `sameAs` in `components/JsonLd.tsx:40`
- [ ] Fix vegas page h3 hierarchy — `app/vegas/page.tsx:166,182`
- [ ] Fix work-record-form sidebar h3 hierarchy — `app/spf-resources/work-record-form/page.tsx:517,539,558`
- [ ] Add InsuranceAgency/Service schema to `app/services/rig-equipment/page.tsx`
- [ ] Add schema to `app/blog/page.tsx` (CollectionPage or Blog type)
- [ ] Shorten root layout default description from 230 to ≤160 chars
- [ ] Use dynamic `lastModified` dates in `app/sitemap.ts`
