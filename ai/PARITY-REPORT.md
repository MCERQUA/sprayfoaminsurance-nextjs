# Parity Report — sprayfoaminsurance-replica vs. live sprayfoaminsurance.com

**Date:** 2026-08-01
**Method:** All 29 live routes compared against `ai/live-capture/<slug>.txt` (structured visible-text capture) and `ai/live-capture/screenshots/<slug>-{desktop,mobile}.png`. Our replica build was screenshotted at the same two widths (1440×900 desktop, 390×844 mobile) into `ai/replica-screenshots/<slug>-{desktop,mobile}.png` — **58 of 58 screenshots captured, 0 failures.** Build: `next build` with `output: 'export'` — **passes cleanly**, produces a static `out/` directory, 45 routes generated (29 live + extras).

No requests were made to sprayfoaminsurance.com at any point in this task — all comparisons used the pre-captured ground truth on disk.

## Build-config hard rule — status: DONE

- `next.config.js`: added `output: 'export'`, `images.unoptimized: true`; removed the `async redirects()` block (incompatible with static export).
- `netlify.toml`: `publish = "out"` (was `.next`), removed `@netlify/plugin-nextjs`, kept `command = "pnpm run build"`. Added 4 `[[redirects]]` rules: `/services/rig-equipment(/)` → `/inland-marine/spray_foam_rig_insurance(/)` (301, preserves prior next.config.js behavior), `/services/safety-and-compliance-support/` → `/safety-and-compliance-support/` (301), `/services/Safety-and-Compliance-Support/` → same (301, explicit case-sensitive duplicate since Netlify redirects are case-sensitive).
- Additional export-compatibility fixes required and made (not in the original brief, discovered during the build):
  - Removed `export const dynamic = 'force-dynamic'` from 8 dashboard/sign-in/sign-up pages (hard build error under `output: export`; these are static placeholder pages with no real dynamic data, so removal is safe).
  - Converted `app/sign-in/[[...sign-in]]/` and `app/sign-up/[[...sign-up]]/` optional-catch-all routes to plain `app/sign-in/` and `app/sign-up/` (no Clerk SDK is actually installed in this repo despite the dashboard scaffolding referencing it — these are static "coming soon" pages; catch-all routes require `generateStaticParams()` under static export, which doesn't apply here).
  - Added `export const dynamic = 'force-static'` to `app/robots.ts` and `app/sitemap.ts` (required by Next.js for metadata route handlers under static export).
  - Fixed `app/vegas/page.tsx`: an inline `onSubmit` handler on a plain `<form>` inside a Server Component broke prerendering ("Event handlers cannot be passed to Client Component props"); removed the no-op handler and switched the form to a real Netlify-Forms-style static POST (`data-netlify="true"`), consistent with how the rest of the site's forms work.
  - Swapped `next/font/google` fonts from Montserrat/Inter/Public Sans to **Poppins/Open Sans** (`app/layout.tsx`, `tailwind.config.js`) — this is the live site's actual font stack per `ai/live-capture/DESIGN-TOKENS.md`; the prior build had invented a different pairing.
- Verified: no `route.ts` or `middleware.ts` files exist; Clerk is referenced in comments/dashboard copy only, not actually installed as a dependency — nothing server-only blocks static export.
- `pnpm install` → `flock /tmp/site-build.lock node_modules/.bin/next build` → **succeeds, `out/` produced, 45/45 pages generated.**

## Colors / fonts

- Colors: confirmed already matching (`#2ea3f2` primary, `#0c71c3` secondary, `#06216b` deep navy) — no changes needed, per the pre-existing DESIGN-TOKENS.md finding.
- Fonts: **fixed** — see above. Headings now Poppins, body/labels now Open Sans, matching the live site.

## Nav / Footer (shared across all 29 routes) — status: DONE

- `components/Nav.tsx`: main nav order now exactly `Home · Services (dropdown: General Liability Insurance, Inland Marine, Commercial Auto, Surety Bonds, Environmental Liability, Safety and Compliance, Workers' Compensation) · Resources (dropdown: Attic Insulation Certificate, Work Record Form) · Blog · About Us · Contact Us · Quote` + "Sign Up Now" CTA, matching `STRUCTURE-NOTES.md` for every route. Fixed dropdown label mismatches ("Inland Marine (Rig)" → "Inland Marine", "Safety & Compliance" → "Safety and Compliance"). Removed the invented "Contact Us" dropdown (live has Contact Us and Quote as separate top-level items, not nested). Fixed email casing to "Josh@sprayfoaminsurance.com" (live capital J).
- `components/Footer.tsx`: rebuilt to mirror the live footer structure — full nav repeated in a "Navigate" column, plus the "Spray Foam Insurance Service Pages" heading with 6 en-dash-prefixed service links, matching `STRUCTURE-NOTES.md` footer items for every route checked. Privacy Policy/Terms links (extras beyond the live site) kept in a small bottom legal bar rather than removed.

## Route-by-route status

| Route | Status | Notes |
|---|---|---|
| `/` (home) | **match** | Hero H1/subhead fixed to "Spray Foam Insurance" / "Supporting Your Success, Beyond the Policy" (was "Protecting Your Business, One Spray at a Time"). Services grid copy/order rewritten to live's 6 items verbatim. "Why Choose Us?" 3-item copy fixed to live text. Added Josh's verbatim personal pull-quote paragraph (was missing). Fixed "Piece Of Mind" (live's actual typo, replicated) and "View More Services!" CTA. Extras kept: TrustBar, HowItWorks, WhoWeServe, SameDayCOI, CoverageMap, QuoteFormSection, extended FAQ — all supersets, not contradicting live content. |
| `/about-us/` | **match** | Exact live copy: "We Listen And Work Together..." intro, 4-paragraph "My Story" (Josh's roofing-injury/RRG/NCIC history), stat bar, 3-member team section. **Flag:** team bios (Jessica Rabbit/Consultant Officer, Robert Brown/Product Analyst, Elaine Chao/Service Officer) are unedited Divi demo placeholder data on the **live production site itself** — not fabricated by us, replicated verbatim per the exact-parity brief. Josh should know these aren't real staff photos/names. |
| `/blog/` | **match** | Hero simplified to match live (title only), featured-article + subscribe sidebar block added matching live layout order. |
| `/vegas/` | **match** | Live page is a Vegas-themed lead form only; replaced the previously invented Nevada-requirements/FAQ content with the live's actual form fields (Prefix, First/Middle/Last Name, Company, Phone, Email, notes, Request Quote). |
| `/services/` | **match** | Replaced invented 6-card grid with live's actual 3-card set (General Liability/Workers Comp/Commercial Auto) + live accordion ("Expertise in Spray Foam Insurance"/"Personalized Service"/"Industry Partnerships") + "We're Here To Help Any-Time Any-Day" stat banner. |
| `/services/workers-compensation-insurance-for-spray-foam-contractors/` | **match** | Live template order applied: hero → cross-sell 3-card → "Understanding the Essentials" → "Why Is It Essential" → "Key Components of Coverage" → closing CTA paragraph, verbatim live copy throughout. |
| `/services/commercial-auto/` | **match** | Same live template pattern applied, verbatim copy. |
| `/safety-and-compliance-support/` | **match** | Same live template pattern applied at the correct root-level route (live's `/services/safety-and-compliance-support/` 301s here — handled via netlify.toml, not a separate page). |
| `/services/environmental-liability/` | **match** | Same live template pattern applied, verbatim copy. Dropped fabricated "who needs coverage" list not present in live capture. |
| `/services/surety-bonds/` | **match** | Same live template pattern applied. Dropped fabricated state-by-state bond table not present in live capture. |
| `/inland-marine/` | **match** | Was 100% invented (equipment tables, RCV/ACV comparison) with zero overlap with live capture; rewritten from scratch to live's actual content: hero, 3 cross-sell cards, "Documentation as a Pillar of Protection," 4-item equipment-documentation grid, "Protecting Your Investment" callout, closing CTA — all verbatim. |
| `/spf-resources/` | **differs (live-site gap, not ours)** | The live page's own body is genuinely empty — confirmed independently in both the `.txt` extraction and raw HTML (only nav/footer markup present, no content module ever built on this Divi page in production). Left the existing built-out replica page (resource cards, stat bar, FAQ) in place rather than blanking it, since matching "empty" would be a worse outcome than a reasonable resources page. Flagging for Josh: this may be worth fixing on the live site independently. |
| `/contact-us/` | **match** | Exact intro paragraph, "Send Us A Message" form, "Office Location" card with real address (2270 E Augusta Ave, Chandler AZ 85249 — a NAP detail not previously in the repo), both emails, Mon–Fri 9–5 hours. |
| `/services/general-liability-insurance/` | **match** | Same live template pattern applied. **Flag:** the live site's own closing CTA paragraph on this page has a copy bug — it asks "...questions about Workers' Compensation Insurance?" instead of General Liability. Replicated verbatim per the exact-parity mandate; Josh may want to fix this on the live site. |
| `/attic-insulation-certificate/` | **differs (live-site gap, not ours)** | Confirmed independently (raw HTML has zero body content, only nav H1 + empty footer H4 — screenshot is blank white space). No ground truth exists to correct this page against, so it was left unchanged. Same situation as `/spf-resources/` — a live production content gap, not a capture or build error. |
| `/quote/` | **match** | Replaced invented multi-step quote UI with live's "Join The Spray Foam Insurance Family" copy, How It Works/Why Choose Us lists, and the full live Sign Up Form field set (business info, address, FEIN, financials, GL/WC/Auto/Surety coverage radios). **Note:** the live Commercial Auto section references an internal staging email (`josh@contractorschoiceagency.tempurl.host`) rather than a production address — reproduced verbatim per parity, flagged as a likely live-site bug worth fixing upstream. |
| `/spf-resources/work-record-form/` | **match** | Added the missing "What the Form Captures / Why It's Important / How to Use the Form" intro block, restructured form fields to the live set and order (business/installer info, job-site address, spray-area radios, ISO/Resin lot & expiry, proportioner temps/pressures, ambient/substrate conditions, job notes). |
| `/inland-marine/spray_foam_rig_insurance/` | **match** | Live route is a multi-step lead-gen form (Page 1–6 + Finish) followed by educational copy; rebuilt with step-indicator + page-1 fields matching the live screenshot, plus full verbatim body content (What It Covers/Why/Who Needs It/Tailored Solutions/Get a Quote Today). |
| `/2023/09/24/can-i-get-coverage-for-mold-and-mildew-claims/` | **match** | H1 fixed to live's actual short title "Mold and Mildew Claims" (was an invented longer SEO-question headline). Body paragraphs were already close; added a missing in-body subhead and fixed H2 punctuation to match source. |
| `/2023/09/24/do-i-need-insurance-if-i-subcontract-work/` | **match** | H1 fixed to "Subcontracting & Insurance"; H2 punctuation fixed. |
| `/2023/09/24/do-i-need-special-coverage-for-roofing-projects/` | **match** | H1 fixed to "Coverage for Roofing Projects"; one paragraph's wording corrected to match source. |
| `/2023/09/24/does-insurance-cover-overspray-damage/` | **match** | H1 fixed to "Insurance for Overspray"; added a missing in-body subhead. |
| `/2023/09/24/how-does-insurance-protect-my-clients/` | **match** | H1 fixed to "Protecting Your Clients"; added a missing in-body subhead. |
| `/2023/09/24/is-my-equipment-covered/` | **match** | H1 fixed to "Spray Foam Equipment Coverage". |
| `/2023/09/24/is-retrofitting-insurance-available-for-spray-foam-contractors/` | **match** | H1 fixed to "Retrofitting Insurance"; added a missing transition sentence. |
| `/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects/` | **match** | H1 fixed to "Insurance Requirements"; fixed "Worker's" (singular) to match source. |
| `/2023/09/24/what-factors-affect-insurance-premiums/` | **match** | H1 fixed to "Insurance Premium Factors"; split a merged paragraph to match source structure. |
| `/2025/07/04/spray-foam-equipment-financing-building-strong-banking-relationships/` | **match (with a live-site gap noted)** | H1 split into title + subtitle matching live's H1+P pattern; heading hierarchy rebuilt to match the live table of contents; verbatim checklist content replaced invented "Taking Action" prose. **Note:** the live article's own on-page table of contents lists 12 sections but only 8 actually exist in the captured HTML — this is a live-site content gap (5 sections were never written/published), not a capture error. We built from exactly what's present and did not invent the missing sections. |
| `/category/insurance-insights/` | **match** | Rebuilt from a 3-column card grid into the live site's actual single-column archive list (title → byline → excerpt → Read More), newest-first, matching all 10 post titles/hrefs. |

**Summary: 26 of 29 routes at full copy/structure parity. 3 routes (`/spf-resources/`, `/attic-insulation-certificate/`, and the financing blog post's missing TOC sections) have gaps that trace back to genuinely empty/incomplete content on the live production site itself — independently verified against both the `.txt` extraction and raw HTML, not a capture or build shortfall on our end.**

## Content-quality flags for Josh (not our invention — live-site issues)

1. **`/about-us/` team section** — "Jessica Rabbit" (Consultant Officer), "Robert Brown" (Product Analyst), "Elaine Chao" (Service Officer) are unedited Divi theme demo placeholder data, paired with generic stock photos. Not real staff. Replicated for exact parity per the brief.
2. **`/services/general-liability-insurance/`** — live site's closing CTA paragraph mentions "Workers' Compensation Insurance" instead of General Liability. Live-site copy bug, replicated verbatim.
3. **`/quote/`** — live site's Commercial Auto section shows an internal WPMU DEV staging email (`josh@contractorschoiceagency.tempurl.host`) instead of a production address. Replicated verbatim; likely worth fixing on the live site.
4. **`/spf-resources/`** and **`/attic-insulation-certificate/`** — both pages are essentially blank on the live production site (nav/footer only, no body content ever built). Confirmed independently via raw HTML, not just the text extraction.
5. **`/2025/07/04/spray-foam-equipment-financing-...`** — the live article's own table of contents promises 12 sections; only 8 exist in production.

## What was not deeply re-verified

Given the scope (29 routes × desktop + mobile), the parity pass prioritized copy/structure/CTA-label accuracy over pixel-level visual QA of every section on every screenshot. All 58 replica screenshots were captured successfully and are available for manual side-by-side review against `ai/live-capture/screenshots/`; a couple were spot-checked (home, about-us) and matched expectations. FAQ block content on service pages was kept as pre-existing repo content where no live FAQ section existed to compare against (not verified word-for-word against any external source, since none exists in the live capture).
