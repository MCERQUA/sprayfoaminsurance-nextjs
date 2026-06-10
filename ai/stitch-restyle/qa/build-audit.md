# Build Audit

## Build Result: PASS (after fixing 3 type errors)

The build initially failed with TypeScript errors. Three bugs were found and fixed before the final clean build was captured.

---

## Bugs Fixed Before Final Build

### Bug 1 — `app/contact-us/page.tsx` line 44: Apostrophe inside single-quoted string
```
a: 'Yes — we work with contractors at all stages. ... but we'll find the best available rate.'
```
The `we'll` apostrophe terminated the string literal early. Fixed by changing outer delimiters to double quotes.

### Bug 2 — `app/contact-us/page.tsx` line 184: Wrong FAQSection props
```
<FAQSection faqs={faqs} heading="Frequently Asked Questions" />
```
`FAQSection` accepts `items`, not `faqs`. Also, `heading` is not a prop. Fixed to `<FAQSection items={faqs} />`.

### Bug 3 — `app/vegas/page.tsx` line 201: Same wrong FAQSection props
```
<FAQSection faqs={faqs} heading="Nevada Spray Foam Insurance FAQs" />
```
Same mismatch as above. Fixed to `<FAQSection items={faqs} />`.

### Bug 4 — `app/services/rig-equipment/page.tsx` line 193: Same wrong FAQSection props
```
<FAQSection faqs={faqs} heading="Rig & Equipment Insurance FAQs" />
```
Fixed to `<FAQSection items={faqs} />`.

---

## Full Build Output (Final Clean Build)

```
> sprayfoaminsurance-com@1.0.0 build
> next build

   ▲ Next.js 15.5.19

   Creating an optimized production build ...
<w> [webpack.cache.PackFileCacheStrategy] Serializing big strings (192kiB) impacts deserialization performance (consider using Buffer instead and decode when needed)
 ✓ Compiled successfully in 60s
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/4) ...
   Generating static pages (1/4)
   Generating static pages (2/4)
   Generating static pages (3/4)
 ✓ Generating static pages (4/4)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                                                              Size  First Load JS
┌ ƒ /                                                                                 1.36 kB         107 kB
├ ƒ /_not-found                                                                         135 B         103 kB
├ ƒ /2023/09/24/can-i-get-coverage-for-mold-and-mildew-claims                           201 B         106 kB
├ ƒ /2023/09/24/do-i-need-insurance-if-i-subcontract-work                               201 B         106 kB
├ ƒ /2023/09/24/do-i-need-special-coverage-for-roofing-projects                         201 B         106 kB
├ ƒ /2023/09/24/does-insurance-cover-overspray-damage                                   201 B         106 kB
├ ƒ /2023/09/24/how-does-insurance-protect-my-clients                                   201 B         106 kB
├ ƒ /2023/09/24/is-my-equipment-covered                                                 201 B         106 kB
├ ƒ /2023/09/24/is-retrofitting-insurance-available-for-spray-foam-contractors          201 B         106 kB
├ ƒ /2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects       201 B         106 kB
├ ƒ /2023/09/24/what-factors-affect-insurance-premiums                                  201 B         106 kB
├ ƒ /2025/07/04/spray-foam-equipment-financing-building-strong-banking-relationships    201 B         106 kB
├ ƒ /about-us                                                                           182 B         106 kB
├ ƒ /attic-insulation-certificate                                                     1.38 kB         107 kB
├ ƒ /blog                                                                               182 B         106 kB
├ ƒ /contact-us                                                                       1.38 kB         107 kB
├ ƒ /dashboard                                                                          182 B         106 kB
├ ƒ /dashboard/certificates                                                            2.9 kB         105 kB
├ ƒ /dashboard/documents                                                                182 B         106 kB
├ ƒ /dashboard/policies                                                                 182 B         106 kB
├ ƒ /dashboard/profile                                                                 2.4 kB         136 kB
├ ƒ /dashboard/quotes                                                                 2.28 kB         108 kB
├ ƒ /inland-marine                                                                    1.36 kB         107 kB
├ ƒ /inland-marine/spray_foam_rig_insurance                                           1.36 kB         107 kB
├ ƒ /quote                                                                              182 B         106 kB
├ ○ /robots.txt                                                                         135 B         103 kB
├ ƒ /safety-and-compliance-support                                                    1.38 kB         107 kB
├ ƒ /services                                                                           201 B         106 kB
├ ƒ /services/commercial-auto                                                         1.38 kB         107 kB
├ ƒ /services/environmental-liability                                                 1.38 kB         107 kB
├ ƒ /services/general-liability-insurance                                             1.38 kB         107 kB
├ ƒ /services/rig-equipment                                                           1.36 kB         107 kB
├ ƒ /services/surety-bonds                                                            6.42 kB         112 kB
├ ƒ /services/workers-compensation-insurance-for-spray-foam-contractors               1.38 kB         107 kB
├ ƒ /sign-in/[[...sign-in]]                                                             399 B         143 kB
├ ƒ /sign-up/[[...sign-up]]                                                             399 B         143 kB
├ ○ /sitemap.xml                                                                        135 B         103 kB
├ ƒ /spf-resources                                                                    1.36 kB         107 kB
├ ƒ /spf-resources/work-record-form                                                   4.94 kB         111 kB
└ ƒ /vegas                                                                            1.38 kB         107 kB
+ First Load JS shared by all                                                          102 kB
  ├ chunks/1255-5c680abb9db89955.js                                                   46.2 kB
  ├ chunks/4bd1b696-f785427dddbba9fb.js                                               54.2 kB
  └ other shared chunks (total)                                                          2 kB

ƒ Middleware                                                                          75.2 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

---

## Warnings Analysis

### Webpack serialization warning
```
[webpack.cache.PackFileCacheStrategy] Serializing big strings (192kiB) impacts deserialization performance
(consider using Buffer instead and decode when needed)
```
**What it means:** One or more large string values (likely large CSS-in-JS strings, JSON data, or inline SVG) are being written directly into the webpack cache as plain strings. This slows down cold cache warm-up but does not affect runtime performance. Not a blocker. To resolve: identify which module emits the large string (usually a CSS module or large static data array) and move it to a Buffer or external file.

### No ESLint errors or warnings
The ESLint pass completed cleanly with no warnings output.

### No "use client" boundary errors
No server/client boundary violations were detected during compilation.

---

## Route Summary

| Route | Type | Page Size | First Load JS |
|---|---|---|---|
| `/` | Dynamic (ƒ) | 1.36 kB | 107 kB |
| `/_not-found` | Dynamic (ƒ) | 135 B | 103 kB |
| `/2023/09/24/can-i-get-coverage-for-mold-and-mildew-claims` | Dynamic (ƒ) | 201 B | 106 kB |
| `/2023/09/24/do-i-need-insurance-if-i-subcontract-work` | Dynamic (ƒ) | 201 B | 106 kB |
| `/2023/09/24/do-i-need-special-coverage-for-roofing-projects` | Dynamic (ƒ) | 201 B | 106 kB |
| `/2023/09/24/does-insurance-cover-overspray-damage` | Dynamic (ƒ) | 201 B | 106 kB |
| `/2023/09/24/how-does-insurance-protect-my-clients` | Dynamic (ƒ) | 201 B | 106 kB |
| `/2023/09/24/is-my-equipment-covered` | Dynamic (ƒ) | 201 B | 106 kB |
| `/2023/09/24/is-retrofitting-insurance-available-for-spray-foam-contractors` | Dynamic (ƒ) | 201 B | 106 kB |
| `/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects` | Dynamic (ƒ) | 201 B | 106 kB |
| `/2023/09/24/what-factors-affect-insurance-premiums` | Dynamic (ƒ) | 201 B | 106 kB |
| `/2025/07/04/spray-foam-equipment-financing-building-strong-banking-relationships` | Dynamic (ƒ) | 201 B | 106 kB |
| `/about-us` | Dynamic (ƒ) | 182 B | 106 kB |
| `/attic-insulation-certificate` | Dynamic (ƒ) | 1.38 kB | 107 kB |
| `/blog` | Dynamic (ƒ) | 182 B | 106 kB |
| `/contact-us` | Dynamic (ƒ) | 1.38 kB | 107 kB |
| `/dashboard` | Dynamic (ƒ) | 182 B | 106 kB |
| `/dashboard/certificates` | Dynamic (ƒ) | 2.9 kB | 105 kB |
| `/dashboard/documents` | Dynamic (ƒ) | 182 B | 106 kB |
| `/dashboard/policies` | Dynamic (ƒ) | 182 B | 106 kB |
| `/dashboard/profile` | Dynamic (ƒ) | 2.4 kB | **136 kB** |
| `/dashboard/quotes` | Dynamic (ƒ) | 2.28 kB | 108 kB |
| `/inland-marine` | Dynamic (ƒ) | 1.36 kB | 107 kB |
| `/inland-marine/spray_foam_rig_insurance` | Dynamic (ƒ) | 1.36 kB | 107 kB |
| `/quote` | Dynamic (ƒ) | 182 B | 106 kB |
| `/robots.txt` | Static (○) | 135 B | 103 kB |
| `/safety-and-compliance-support` | Dynamic (ƒ) | 1.38 kB | 107 kB |
| `/services` | Dynamic (ƒ) | 201 B | 106 kB |
| `/services/commercial-auto` | Dynamic (ƒ) | 1.38 kB | 107 kB |
| `/services/environmental-liability` | Dynamic (ƒ) | 1.38 kB | 107 kB |
| `/services/general-liability-insurance` | Dynamic (ƒ) | 1.38 kB | 107 kB |
| `/services/rig-equipment` | Dynamic (ƒ) | 1.36 kB | 107 kB |
| `/services/surety-bonds` | Dynamic (ƒ) | **6.42 kB** | 112 kB |
| `/services/workers-compensation-insurance-for-spray-foam-contractors` | Dynamic (ƒ) | 1.38 kB | 107 kB |
| `/sign-in/[[...sign-in]]` | Dynamic (ƒ) | 399 B | **143 kB** |
| `/sign-up/[[...sign-up]]` | Dynamic (ƒ) | 399 B | **143 kB** |
| `/sitemap.xml` | Static (○) | 135 B | 103 kB |
| `/spf-resources` | Dynamic (ƒ) | 1.36 kB | 107 kB |
| `/spf-resources/work-record-form` | Dynamic (ƒ) | 4.94 kB | 111 kB |
| `/vegas` | Dynamic (ƒ) | 1.38 kB | 107 kB |
| **Middleware** | — | **75.2 kB** | — |

**Shared JS:** 102 kB base (split across two main chunks: 46.2 kB + 54.2 kB)

**Notable sizes:**
- `/dashboard/profile` loads 136 kB — heaviest content page (Clerk user profile SDK)
- `/sign-in` and `/sign-up` load 143 kB — expected (Clerk auth UI bundle)
- `/services/surety-bonds` page is 6.42 kB — largest individual page bundle (likely large content data arrays)
- Middleware is 75.2 kB — should be reviewed; middleware runs on every request and this is on the high side

---

## Recommendations

### High Priority
1. **Scan remaining files for apostrophe-in-single-quoted-string pattern.** Three pages had this bug (`contact-us`, `vegas`, `rig-equipment`). Use this grep to find others:
   ```bash
   grep -rn "a: '.*'[a-z]" app/ --include="*.tsx"
   ```
   The affected pages will render broken text or throw runtime JS errors.

2. **Standardize FAQSection usage.** The component accepts `items`, not `faqs`. Three pages had the wrong prop name — this was a silent runtime no-op (no items rendered). Audit all FAQSection calls: any that passed `faqs=` were showing empty accordions to users.

### Medium Priority
3. **Middleware bundle (75.2 kB) is large.** Normal Next.js middleware should be under 20–30 kB. Review `/middleware.ts` for heavy imports (Clerk, large utilities). Consider moving non-edge-compatible logic server-side.

4. **Webpack 192 kB string warning.** Likely a large static data array or CSS string. Identify with `NEXT_PUBLIC_ANALYZE=true npx @next/bundle-analyzer` and move large data to external JSON imports or split into smaller chunks.

5. **All routes are Dynamic (ƒ) — none are statically prerendered.** Almost all content pages could be statically generated (`generateStaticParams` or removing `noStore`/dynamic exports). Static pages are faster (CDN-cached) and avoid cold-start SSR latency. Only auth-gated dashboard routes truly need server rendering.

### Low Priority
6. **Blog routes (2023/09/24/*, 2025/07/04/*)** each show 201 B page size — extremely small. These are likely redirect stubs or placeholder pages. Ensure they have proper `generateStaticParams` and actual content before going live, or they will be thin-content pages that hurt SEO.

7. **`/dashboard/profile` at 136 kB** is a 30 kB jump over baseline. This is Clerk's `<UserProfile>` component — acceptable, but worth lazy-loading if profile access is infrequent.

8. **Telemetry is enabled.** If this is a production deployment, consider adding `NEXT_TELEMETRY_DISABLED=1` to the environment to prevent build-time telemetry pings.
