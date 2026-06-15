# Performance Audit — sprayfoaminsurance-nextjs
**Date:** 2026-06-15  
**Auditor:** Worker B (josh-desk-3@mesh)  
**Scope:** Bundle size, images, video, fonts, static/dynamic routing, unused deps, Core Web Vitals risks

---

## CRITICAL ISSUES (Fix immediately — site-wide impact)

---

### ISSUE 1 — `force-dynamic` in root layout kills static generation
**File:** `app/layout.tsx:1`  
**Impact:** Every single page on the site is SSR'd on every request. Zero static pages are pre-rendered. Blog posts, service pages, about-us — all hit the Node.js server on every visit. TTFB is needlessly high across all content pages.

**What's wrong:**
```ts
export const dynamic = 'force-dynamic'; // app/layout.tsx line 1
```
This cascades to every route. The `.next/prerender-manifest.json` confirms only `sitemap.xml` and `robots.txt` are statically pre-rendered. No `.html` files exist in `.next/server/app/`.

**Fix:**
Remove the directive from `app/layout.tsx` entirely. If specific routes need dynamic rendering (dashboard, sign-in, sign-up), add `export const dynamic = 'force-dynamic'` to those individual page files instead.

Routes that MUST stay dynamic:
- `app/dashboard/**` (auth-gated)
- `app/sign-in/**`, `app/sign-up/**` (Clerk catch-all)
- `app/quote/page.tsx` (if form has server action with dynamic data)

Routes that become static after fix (~30 routes):
- All blog posts, all service pages, about-us, contact-us, inland-marine, spf-resources, safety-and-compliance-support, vegas, attic-insulation-certificate

---

### ISSUE 2 — Image optimization disabled
**File:** `next.config.js:4-6`  
**Impact:** No WebP/AVIF conversion, no responsive `srcset`, no lazy-load optimization. Every `<Image>` serves the original file at full resolution regardless of device.

**What's wrong:**
```js
images: {
  unoptimized: true,  // next.config.js line 5
},
```

**Fix:**
```js
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256],
},
```
All images appear to be local (`/assets/`), so no `remotePatterns` needed. Remove `unoptimized: true` entirely.

---

### ISSUE 3 — Render-blocking Google Fonts + duplicate @import
**Files:** `app/globals.css:1` and `app/layout.tsx:83-86`  
**Impact:** FCP is blocked by an external round-trip to `fonts.googleapis.com` on every page load. The `@import` in globals.css is a second request for the same fonts — browsers must download and parse the CSS before discovering the import, then make another request.

**What's wrong:**
```css
/* app/globals.css line 1 — render-blocking */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600&family=Public+Sans:wght@500;600;700&display=swap');
```
```tsx
{/* app/layout.tsx:83-86 — also loading same fonts via <link> */}
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat..." />
```

**Fix:**
1. Delete the `@import` from `app/globals.css` line 1.
2. Replace the `<link>` tags in `app/layout.tsx` with `next/font/google`:

```ts
// app/layout.tsx
import { Montserrat, Inter, Public_Sans } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-headline',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-body',
});
const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-label',
});
```

Then remove the `<head>` block from `RootLayout` and apply the variables to `<html>`:
```tsx
<html lang="en" className={`dark ${montserrat.variable} ${inter.variable} ${publicSans.variable}`}>
```

Benefits: self-hosted fonts (no external DNS lookup), automatic subsetting, build-time preloading, guaranteed `font-display: swap`.

---

## ISSUES FOUND — Images

---

### ISSUE 4 — Nav logo missing `priority` prop
**File:** `components/Nav.tsx:106`  
**Impact:** LCP candidate on every page. The logo is in the fixed header, rendered above the fold on every route. Without `priority`, Next.js lazy-loads it, delaying the LCP measurement.

**What's wrong:**
```tsx
<Image
  src="/assets/icons/logo.webp"
  alt="Spray Foam Insurance"
  width={52}
  height={52}
  className="h-[52px] w-auto object-contain"
  // missing: priority
/>
```

**Fix:** Add `priority` prop:
```tsx
<Image
  src="/assets/icons/logo.webp"
  alt="Spray Foam Insurance"
  width={52}
  height={52}
  priority
  className="h-[52px] w-auto object-contain"
/>
```

---

### ISSUE 5 — Josh photo missing `priority` prop
**File:** `app/page.tsx:260`  
**Impact:** LCP candidate on homepage desktop layout. The "Trusted Ally" section with Josh's photo is visible above the fold on wide viewports.

**Fix:** Add `priority` to the `<Image src="/assets/images/josh-clean.webp" ...>` at line 260.

---

### ISSUE 6 — Fill images missing `sizes` prop
**Files:** `app/page.tsx:282`, `app/page.tsx:416`  
**Impact:** Without `sizes`, Next.js defaults to `100vw` at all breakpoints and downloads the largest image variant regardless of actual display size. Wastes bandwidth.

**What's wrong:**
```tsx
<Image src="/assets/images/wireframe-sprayer.jpg" fill ... />  {/* line 282 — no sizes */}
<Image src="/assets/images/wireframe-handshake.webp" fill ... />  {/* line 416 — no sizes */}
```

**Fix:** Add `sizes` to both:
```tsx
<Image src="/assets/images/wireframe-sprayer.jpg" fill sizes="100vw" ... />
<Image src="/assets/images/wireframe-handshake.webp" fill sizes="100vw" ... />
```

---

### ISSUE 7 — Carrier logo alt text is generic
**File:** `components/TrustBar.tsx:46`  
**Impact:** Accessibility / SEO. All four carrier logo `<Image>` components share the same `alt="Carrier Partner"` — not descriptive.

**Fix:** Update each entry in the `carrierLogos` array to use the actual carrier name (e.g., `alt="AmTrust"`, `alt="Markel"`, etc.). If carrier names are confidential, use `alt=""` with `aria-hidden="true"`.

---

### ISSUE 8 — Possible broken image path in surety-bonds page
**File:** `app/services/surety-bonds/page.tsx:68`  
**Issue:** Image src is `/images/bond-diagram.png` — uses `/images/` root while every other asset uses `/assets/images/`. This may be a 404 in production.

**Fix:** Verify whether the file exists at `public/images/bond-diagram.png` or if the path should be `/assets/images/bond-diagram.png`.

---

## ISSUES FOUND — Video

---

### ISSUE 9 — Hero video missing `preload` attribute
**File:** `app/page.tsx:29`  
**Impact:** Inconsistent behavior across browsers. Without an explicit `preload`, Chrome may aggressively buffer the entire video on mobile connections, burning bandwidth before the user interacts.

**What's wrong:**
```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  poster="/assets/images/hero-poster.webp"
  // missing: preload
  className="hero-video absolute inset-0 w-full h-full object-cover"
>
```

**Fix:** Add `preload="metadata"` for controlled bandwidth use (loads enough to show the poster + duration, not the full file):
```tsx
<video preload="metadata" autoPlay muted loop playsInline poster="/assets/images/hero-poster.webp" ...>
```

**Note:** `autoPlay`, `muted`, and `playsInline` are all correctly set — no browser autoplay blocking issue.

---

## ISSUES FOUND — Bundle Size & Client Components

---

### ISSUE 10 — Nav.tsx is fully client-rendered, bloating shared bundle
**File:** `components/Nav.tsx:1`  
**Impact:** `'use client'` on the entire Nav pulls the full React hydration runtime + all lucide-react icons used in Nav into the shared bundle loaded on every page. The two largest shared chunks (4bd1b696: ~168 KB, 1255: ~169 KB) are loaded sitewide because of this boundary.

**What's wrong:** The Nav uses `useState` for mobile menu toggle and dropdown hover — legitimately interactive. But the top bar (phone number, email, social icons) and desktop nav links are static and don't need client rendering.

**Fix:** Split into a server shell + client islands:
1. `components/NavMobileMenu.tsx` — `'use client'` — hamburger + slide-out mobile menu only
2. `components/NavDropdownItem.tsx` — `'use client'` — hover dropdown logic
3. Keep `Nav.tsx` as a server component rendering the static chrome (logo, top bar, desktop links)

Estimated client JS savings: 80–120 KB from the shared bundle (lucide icons used only in Nav move out of client JS once Nav's static parts are server-rendered).

---

### ISSUE 11 — First Load JS is 637–704 KB (pre-gzip) on all routes
**Impact:** High TTI. The shared chunk baseline (framework: 190 KB + vendor: 168 KB + router: 169 KB + polyfills: 113 KB + main: 128 KB) sums to ~768 KB before route-specific JS. After tree-shaking the shared bundle is ~637–704 KB. This is driven by Issues 1 and 10 above.

**Fix:** Issues 1, 3, and 10 combined will meaningfully reduce this:
- Removing `force-dynamic` enables static generation (eliminates RSC payload overhead for content pages)
- Splitting Nav client boundary reduces shared bundle
- `next/font` eliminates one external request from the critical path

---

### ISSUE 12 — `/spf-resources/work-record-form` has the largest per-route chunk
**File:** `app/spf-resources/work-record-form/page.tsx`  
**Issue:** Its route-specific chunk is ~18 KB vs 0.2–3 KB for typical content pages. Suggests a large client-side import not code-split.

**Fix:** Audit the page for large imports (PDF libraries, form validation, date pickers). Use `next/dynamic` for anything not needed on initial render:
```tsx
const HeavyComponent = dynamic(() => import('./HeavyComponent'), { ssr: false });
```

---

## PASS — No Issues Found

| Area | Status |
|------|--------|
| No raw `<img>` tags anywhere in app/ or components/ | ✅ All images use `<Image>` |
| Hero video: `autoPlay muted loop playsInline poster` | ✅ All present, no browser blocking |
| Hero video poster set | ✅ `poster="/assets/images/hero-poster.webp"` |
| Google Fonts URL includes `display=swap` | ✅ FOIT prevented |
| `clsx` — actually used | ✅ Used in GlassCard, FormCard, DashboardSidebarNav, FAQSection |
| `lucide-react` — named imports only | ✅ Tree-shaking works correctly (e.g., `{ Shield, Users }`) |
| No wildcard lucide imports | ✅ No `import * as Icons` |
| Footer.tsx — no unnecessary `'use client'` | ✅ Server component |
| PageHero.tsx — no unnecessary `'use client'` | ✅ Server component |
| TrustBar.tsx — no unnecessary `'use client'` | ✅ Server component, CSS-only hovers |
| StatBar.tsx — no unnecessary `'use client'` | ✅ Server component |
| WhyChooseUs.tsx — no unnecessary `'use client'` | ✅ Server component, CSS group-hover |
| `dangerouslySetInnerHTML` usage | ✅ Only for JSON-LD `<script>` tags — correct pattern |
| Nav logo Image: width/height set | ✅ `width={52} height={52}` |
| Josh photo Image: width/height/alt set | ✅ `width={480} height={560}` |
| Dashboard routes dynamic | ✅ Correct (auth-gated) |
| Sign-in/sign-up dynamic | ✅ Correct (Clerk catch-all) |
| `compress: true` | ✅ Default behavior, gzip/brotli active |
| Redirects: no overly permissive patterns | ✅ Only two specific rig-equipment redirects |
| Blog card Image has `fill` + correct `sizes` | ✅ `app/blog/page.tsx:61` |

---

## Priority Order for Fixes

| Priority | Issue | File | Effort | Impact |
|----------|-------|------|--------|--------|
| P0 | Remove `force-dynamic` from root layout | `app/layout.tsx:1` | 1 line | Static generation for 30 routes |
| P0 | Remove `images.unoptimized: true` | `next.config.js:5` | 1 line | Image optimization enabled sitewide |
| P1 | Remove `@import` from globals.css | `app/globals.css:1` | 1 line | Eliminate duplicate font request |
| P1 | Migrate to `next/font/google` | `app/layout.tsx:81-86` | ~30 min | Eliminate render-blocking font load |
| P1 | Add `priority` to Nav logo | `components/Nav.tsx:106` | 1 prop | LCP improvement on every page |
| P2 | Add `priority` to Josh homepage photo | `app/page.tsx:260` | 1 prop | LCP improvement on homepage |
| P2 | Add `sizes` to fill images | `app/page.tsx:282, 416` | 2 props | Bandwidth savings on homepage |
| P2 | Add `preload="metadata"` to hero video | `app/page.tsx:29` | 1 attr | Controlled mobile bandwidth |
| P3 | Fix carrier logo alt text | `components/TrustBar.tsx:46` | Minor | Accessibility |
| P3 | Verify surety-bonds image path | `app/services/surety-bonds:68` | Verify | Potential 404 |
| P4 | Split Nav into server shell + client islands | `components/Nav.tsx` | ~2 hrs | ~100 KB bundle reduction |
| P4 | Audit work-record-form for large imports | `app/spf-resources/work-record-form/page.tsx` | ~30 min | Reduce route chunk from 18 KB |
