# Live Capture Report — sprayfoaminsurance.com
**Date:** 2026-08-01
**Method:** Throttled GET-only capture (curl --resolve to 155.138.156.240 for HTML/CSS/images; playwright-cli for screenshots, resolved normally — container DNS turned out to work fine, resolves correctly and served from cache (`x-cache: HIT`) on test).
**Rate limiting:** Single-threaded, minimum 4s between HTML/CSS/image requests, minimum 6s between screenshot page navigations. **Zero HTTP 403s, zero lockouts** across the entire capture (see LOCKOUT.md absence — file was never created).

## Routes captured (29 of 29 discovered)

Discovered via `/sitemap.xml` → `page-sitemap1.xml` (18 pages incl. home) + `post-sitemap1.xml` (10 posts, 1 dup of home) + `category-sitemap1.xml` (1 category). All 29 unique routes captured successfully (HTTP 200):

- `/` (home), `/about-us/`, `/blog/`, `/vegas/`, `/services/`
- `/services/{workers-compensation-insurance-for-spray-foam-contractors,commercial-auto,environmental-liability,surety-bonds,general-liability-insurance}/`
- `/safety-and-compliance-support/`, `/inland-marine/`, `/inland-marine/spray_foam_rig_insurance/`
- `/spf-resources/`, `/spf-resources/work-record-form/`, `/contact-us/`, `/attic-insulation-certificate/`, `/quote/`
- 9× `/2023/09/24/<slug>/` blog posts, 1× `/2025/07/04/<slug>/` blog post
- `/category/insurance-insights/`

Per route, captured: raw HTML (`<slug>.html`), structured visible-text extraction tagged by element (`<slug>.txt`), and nav/footer/CTA structure with exact labels + hrefs (`STRUCTURE-NOTES.md`, all 29 routes).

## Redirect check (the safety-and-compliance-support ambiguity)

Both `/services/safety-and-compliance-support/` and `/services/Safety-and-Compliance-Support/` return **HTTP 301 → `/safety-and-compliance-support/`** (WordPress case-insensitive rewrite). No separate page needed — just 2 Netlify redirect rules to the canonical root-level route, which is exactly where our starter repo already has it.

## Assets

- **Images:** 11 of 11 found real content images downloaded (`images/`). Site is text/icon-heavy (Divi builder, not photo-heavy) — Josh's headshot (2 variants) + 3 "team member" stock photos tied to placeholder bios (see Content Quality Issue below).
- **CSS:** 29 dynamic Divi per-page CSS files + 7 WP-Hummingbird combined framework bundles + 4 Google Fonts bundles + Font Awesome 6.4.0 — all in `css/`.
- **Design tokens:** `DESIGN-TOKENS.md` — primary blue `#2ea3f2` (buttons/accents), secondary `#0c71c3`, deep navy `#06216b` dark-section bg, body text `#333`/`#777771`. **Our existing starter repo's primary blue already matches** (`#2ea3f2` used throughout). Headings: Poppins. Body: Open Sans. Stack fingerprint: Divi + Forminator (forms) + WP Hummingbird (cache) + Smush (images).

## Screenshots (Phase 2)

**58 of 58 captured** — all 29 routes at both widths, zero failures:
- Desktop 1440×900: `screenshots/<slug>-desktop.png` (29 files)
- Mobile 390×844 (2x DPR, touch emulation): `screenshots/<slug>-mobile.png` (29 files)

playwright-cli's `resize`/`run-code`/`eval` subcommands have a wrapper bug (reject the forced `--config` flag their own arg parser doesn't declare) — worked around via a custom viewport config passed only on session-open, then driving `goto`/`screenshot` on the already-open session without `--config`.

## Content quality issue found (flag for Josh, not silently replicated as fact)

The live `/about-us/` page has team member bios that are **unedited Divi demo placeholder data**: "Jessica Rabbit" (Consultant Officer), "Robert Brown" (Product Analyst), "Elaine Chao" (Service Officer) — paired with generic stock photos (`team-01/02/03`). These are not real staff. Per the brief's instruction for an exact content replica, this is being replicated verbatim for parity, but flagged here and in PARITY-REPORT.md as a live-site content issue Josh likely wants to fix independently of this replica task.

## Requests made (total, cumulative)

~29 HTML + 29 CSS + 11 images + 2 redirect-check HEAD requests + 58 screenshot navigations (each triggering normal browser subresource loads) ≈ 130 explicit throttled requests + browser-driven subresource fetches. No 403s encountered at any point.
