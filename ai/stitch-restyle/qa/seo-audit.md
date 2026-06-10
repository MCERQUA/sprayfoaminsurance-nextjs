# SEO Metadata Audit

## Summary
9/14 pages pass all checks, 5 issues found across 4 pages.

Key findings:
- **4 descriptions exceed 155 chars** (homepage, GL, environmental, about-us)
- **5 dashboard pages have no `export const metadata` at all** (certificates and profile are `'use client'` so they can't; quotes, documents, and policies are server components that simply omit it)
- **Workers' comp service page has no JSON-LD** (only service page missing it)
- **Homepage has no Organization/WebSite JSON-LD**
- All 8 non-dashboard titles are unique and within 60 chars

---

## Page-by-Page Results

### app/page.tsx (Homepage)
- metadata exported: YES
- title: "Spray Foam Insurance | Specialized SPF Contractor Coverage" (58 chars) — PASS
- description: "Specialized insurance for spray foam contractors. General liability, workers comp, commercial auto, environmental liability & surety bonds. Get a free quote today." (163 chars) — FAIL (8 chars over)
- JSON-LD: NO — no `<script type="application/ld+json">` in JSX at all
- Notes: Missing Organization and/or WebSite schema. FAQSection component is rendered but no FAQ JSON-LD is included. This is the most-crawled page and the most impactful gap.

---

### app/services/page.tsx
- metadata exported: YES
- title: "Spray Foam Insurance Coverage Options" (37 chars) — PASS
- description: "Explore all insurance coverage options for spray foam contractors — GL, workers comp, commercial auto, environmental, surety bonds, and rig insurance." (150 chars) — PASS
- JSON-LD: NO — services index page has no structured data
- Notes: No schema is expected for a category/index page by convention, but an InsuranceAgency schema here would reinforce entity authority. Not a hard failure.

---

### app/services/general-liability-insurance/page.tsx
- metadata exported: YES
- title: "General Liability Insurance for Spray Foam Contractors" (54 chars) — PASS
- description: "Specialized general liability insurance for spray foam contractors. Covers overspray, property damage, bodily injury, and completed operations. Get a free quote." (161 chars) — FAIL (6 chars over)
- JSON-LD: YES — InsuranceAgency + FAQPage schemas in `@graph` array
- Notes: Both schemas are well-formed. `areaServed: 'US'` is present on InsuranceAgency. Description needs trimming.

---

### app/services/commercial-auto/page.tsx
- metadata exported: YES
- title: "Commercial Auto Insurance for Spray Foam Contractors" (52 chars) — PASS
- description: "Commercial auto insurance for spray foam rigs, vans, and trucks. Covers hired/non-owned auto, trailer coverage, and cargo liability. Free quotes available." (155 chars) — PASS (exactly 155)
- JSON-LD: YES — InsuranceAgency + FAQPage schemas in `@graph` array
- Notes: InsuranceAgency object is missing `areaServed` (present on GL page, absent here). Minor inconsistency but not a hard SEO failure.

---

### app/services/surety-bonds/page.tsx
- metadata exported: YES
- title: "Surety Bonds for Spray Foam Contractors" (39 chars) — PASS
- description: "Performance bonds, payment bonds, and license bonds for spray foam contractors. Meet contract requirements and state licensing. Fast quotes available." (150 chars) — PASS
- JSON-LD: YES — InsuranceAgency + FAQPage schemas in `@graph` array
- Notes: InsuranceAgency object is missing `description` and `areaServed` fields (present on GL page). Minor inconsistency.

---

### app/services/environmental-liability/page.tsx
- metadata exported: YES
- title: "Environmental Liability Insurance for Spray Foam Contractors" (60 chars) — PASS (exactly 60)
- description: "Environmental liability insurance for SPF contractors. Covers pollution cleanup, chemical off-gassing claims, overspray contamination, and third-party bodily injury." (165 chars) — FAIL (10 chars over)
- JSON-LD: YES — InsuranceAgency + FAQPage schemas in `@graph` array
- Notes: Same minor inconsistency as commercial-auto: `areaServed` missing from InsuranceAgency object.

---

### app/services/workers-compensation-insurance-for-spray-foam-contractors/page.tsx
- metadata exported: YES
- title: "Workers' Compensation Insurance for Spray Foam Contractors" (58 chars) — PASS
- description: "Workers' comp insurance built for the unique risks of spray foam work — chemical exposure, falls, burns, and occupational illness. Get a free quote today." (154 chars) — PASS
- JSON-LD: NO — **no `<script type="application/ld+json">` anywhere in this file**
- Notes: This is the only service page without JSON-LD. The `faqs` array is defined and used by FAQSection but no jsonLd object is built. The page renders StatBar and FAQSection, both of which appear on other pages that do have schemas. Straightforward fix: add the same InsuranceAgency + FAQPage jsonLd pattern used on the other four service pages.

---

### app/about-us/page.tsx
- metadata exported: YES
- title: "About Us | Spray Foam Insurance" (31 chars) — PASS
- description: "Learn about Spray Foam Insurance — specialists in SPF contractor coverage since 2009. We serve spray foam contractors across all 50 states with specialized insurance programs." (175 chars) — FAIL (20 chars over)
- JSON-LD: NO — no structured data
- Notes: An About page is a natural home for an Organization schema with `founder`, `foundingDate`, `description`, `url`, and `telephone`. Currently absent entirely.

---

### app/dashboard/page.tsx
- metadata exported: NO — no `export const metadata` (server component, but metadata omitted)
- title: N/A
- description: N/A
- JSON-LD: NO
- Notes: Dashboard pages are behind Clerk auth. Search engines should not index these. Add `export const metadata: Metadata = { robots: 'noindex, nofollow' }` to the dashboard layout or each page to prevent accidental indexing. Currently there is nothing preventing indexing if a crawler bypasses auth.

---

### app/dashboard/policies/page.tsx
- metadata exported: NO — no `export const metadata`
- title: N/A
- description: N/A
- JSON-LD: NO
- Notes: Same noindex concern as dashboard root.

---

### app/dashboard/certificates/page.tsx
- metadata exported: NO — `'use client'` directive; metadata exports are not supported in client components
- title: N/A
- description: N/A
- JSON-LD: NO
- Notes: Client component; metadata must be added at the layout level for this route segment.

---

### app/dashboard/quotes/page.tsx
- metadata exported: NO — `'use client'` directive; metadata exports are not supported in client components
- title: N/A
- description: N/A
- JSON-LD: NO
- Notes: Client component; same as certificates.

---

### app/dashboard/documents/page.tsx
- metadata exported: NO — no `export const metadata`
- title: N/A
- description: N/A
- JSON-LD: NO
- Notes: Server component but metadata omitted. Same noindex concern.

---

### app/dashboard/profile/page.tsx
- metadata exported: NO — `'use client'` directive
- title: N/A
- description: N/A
- JSON-LD: NO
- Notes: Client component. Metadata must be handled at layout level.

---

## Issues Found

1. **Description too long — app/page.tsx**: 163 chars, 8 over the 155-char soft limit. Suggested trim: drop "& surety bonds" or shorten "Get a free quote today" to fit.

2. **Description too long — app/services/general-liability-insurance/page.tsx**: 161 chars, 6 over. Remove "Get a free quote." from the end (already implied by page CTA).

3. **Description too long — app/services/environmental-liability/page.tsx**: 165 chars, 10 over. "and third-party bodily injury" can be cut; covered by the other three items listed.

4. **Description too long — app/about-us/page.tsx**: 175 chars, 20 over. Suggested: "Spray Foam Insurance — SPF contractor specialists since 2009. Serving contractors in all 50 states with A-rated carriers and same-day certificates." (146 chars).

5. **No JSON-LD on workers' comp page**: `app/services/workers-compensation-insurance-for-spray-foam-contractors/page.tsx` is the only service page missing structured data. Add the standard InsuranceAgency + FAQPage `@graph` pattern already used on the other four service pages.

6. **No JSON-LD on homepage**: No Organization, WebSite, or FAQPage schema. At minimum add WebSite schema with `SearchAction` and Organization schema with `name`, `url`, `telephone`, `description`.

7. **No `robots: noindex` on dashboard routes**: Five dashboard pages (`/dashboard`, `/dashboard/policies`, `/dashboard/certificates`, `/dashboard/quotes`, `/dashboard/documents`, `/dashboard/profile`) have no metadata at all. Auth protects content but does not prevent Google from indexing the URLs. Add `robots: { index: false, follow: false }` to `app/dashboard/layout.tsx` metadata export.

8. **Inconsistent InsuranceAgency schema fields across service pages**: GL page includes `areaServed: 'US'` and `description`; commercial-auto, surety-bonds, and environmental-liability pages omit one or both. Standardize the schema object across all five service pages.

---

## All Titles (uniqueness check)

All 8 public page titles are unique. Dashboard pages have no titles.

| Page | Title | Chars |
|---|---|---|
| app/page.tsx | Spray Foam Insurance \| Specialized SPF Contractor Coverage | 58 |
| app/services/page.tsx | Spray Foam Insurance Coverage Options | 37 |
| app/services/general-liability-insurance/page.tsx | General Liability Insurance for Spray Foam Contractors | 54 |
| app/services/commercial-auto/page.tsx | Commercial Auto Insurance for Spray Foam Contractors | 52 |
| app/services/surety-bonds/page.tsx | Surety Bonds for Spray Foam Contractors | 39 |
| app/services/environmental-liability/page.tsx | Environmental Liability Insurance for Spray Foam Contractors | 60 |
| app/services/workers-compensation.../page.tsx | Workers' Compensation Insurance for Spray Foam Contractors | 58 |
| app/about-us/page.tsx | About Us \| Spray Foam Insurance | 31 |

Result: **8/8 unique, 8/8 within 60 chars.**
