# Conversion + Accessibility Audit — sprayfoaminsurance-nextjs
**Date:** 2026-06-15  
**Audited by:** Worker C (josh-desk-4@mesh)  
**Scope:** Lead capture form, Netlify function, CTAs, navigation, internal links, accessibility, mobile

---

## PASS

### 1. Lead Capture Form — `components/QuoteFormSection.tsx`
- ✅ `data-netlify="true"` present on form element
- ✅ Honeypot configured: `data-netlify-honeypot="bot-field"` on form + hidden labeled `<input name="bot-field">` wired to handleField
- ✅ Success state implemented: `submitted` useState flag replaces form with CheckCircle confirmation block ("You're all set!" / 1-business-day copy / "Submit another request" reset button)
- ✅ All 7 fields have associated labels (name, businessName, email, phone, state, message, coverage via fieldset+legend)
- ✅ Form `name="quote"` attribute present

### 2. `public/__forms.html`
- ✅ Exists
- ✅ Form name `"quote"` matches QuoteFormSection.tsx
- ✅ All fields declared: name, businessName, email, phone, state, service_type, form_type, source_site, message, bot-field

### 3. Netlify Webhook URL
- ✅ Webhook URL is correct: `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=sprayfoaminsurance`
- ✅ Site slug `sprayfoaminsurance` is correct

### 4. Phone Number Consistency — 844-967-5247
- ✅ 844-967-5247 is correct and consistent across all 35+ occurrences in the codebase
- ✅ No wrong phone numbers found anywhere
- ✅ JsonLd.tsx correctly uses E.164 format `+18449675247` for structured data

### 5. CTA Link Targets
- ✅ All "Get a Free Quote" CTAs link to `/quote` or `/quote/`
- ✅ All "Call" CTAs use `tel:` links pointing to 844-967-5247
- ✅ "Sign Up Now" in Nav.tsx links to `/quote/` (intentional — quote flow = sign-up entry)

### 6. Navigation — All Routes Exist
- ✅ Zero broken internal links — all 20 nav link hrefs resolve to existing app routes
- ✅ Mobile menu implemented: hamburger/X toggle (`mobileOpen` useState), accordion per dropdown group (`openMobileSection` useState), closes on link click
- ✅ Desktop dropdown menus on 3 items: Services (7 children), Resources (2 children), Contact Us (1 child)

### 7. Images — Alt Text
- ✅ All `<Image>` and `<img>` tags have meaningful `alt` attributes
- ✅ No missing or empty alt text found in any component or page

### 8. Form Input Labels
- ✅ All form `<input>`, `<textarea>`, and `<select>` elements have associated `<label>` tags with matching `htmlFor`/`id` pairs

### 9. Button Accessible Labels
- ✅ Hamburger button: `aria-label="Toggle menu"`
- ✅ Social icon links: `aria-label="Facebook"`, `aria-label="Twitter"`, `aria-label="Instagram"`
- ✅ FAQ accordion buttons: text content present
- ✅ Form submit button: text "Get My Free Quote"
- ✅ No unlabeled icon-only buttons

### 10. Mobile Fixed Widths
- ✅ `w-[500px]` and `w-[400px]` decorative blobs in `WhyChooseUs.tsx` are absolutely positioned inside `overflow-hidden` parent — no layout breakage risk
- ✅ `min-w-[220px]` dropdown in `Nav.tsx` is desktop-only (hidden on mobile)

---

## ISSUES FOUND

### ISSUE 1 — No Server-Side Netlify Function (Reliability Risk)
**File:** No file — `netlify/functions/submission-created.js` does not exist  
**Severity:** Medium  
**What's wrong:** The lead webhook to `josh.jam-bot.com/social-api` fires as a client-side `fetch()` inside `handleSubmit` in `QuoteFormSection.tsx`. If a user closes their browser tab in the milliseconds between the Netlify form POST completing and the webhook fetch completing, the lead is lost silently. The CRM never receives the submission.  
**How to fix:** Create `netlify/functions/submission-created.js` that fires the webhook server-side on every Netlify form submission event. The function receives the payload automatically from Netlify and can retry on failure. Example:
```js
// netlify/functions/submission-created.js
exports.handler = async (event) => {
  const payload = JSON.parse(event.body).payload;
  await fetch('https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=sprayfoaminsurance', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return { statusCode: 200 };
};
```

---

### ISSUE 2 — WCAG AA Failure: "Our Carriers" Label Contrast
**File:** `components/TrustBar.tsx` — line 42  
**Severity:** High (WCAG 2.1 AA failure)  
**What's wrong:** `text-gray-500` (`#6b7280`) on `bg-[#080d16]` (near-black). Contrast ratio ~3.8:1, below the 4.5:1 minimum required for normal text. Text is also very small (`text-[10px]`), making it worse.  
**How to fix:** Change `text-gray-500` → `text-gray-300` (`#d1d5db`) on that line. Contrast would reach ~9:1.

---

### ISSUE 3 — WCAG AA Failure: "Submit another request" Link Contrast
**File:** `components/QuoteFormSection.tsx` — line 185  
**Severity:** High (WCAG 2.1 AA failure)  
**What's wrong:** The "Submit another request" reset link in the success state uses `text-gray-500` (`#6b7280`) at `text-xs` on the dark `#080d16` form panel background. Contrast ratio ~3.8:1, fails 4.5:1 AA minimum.  
**How to fix:** Change `text-gray-500` → `text-gray-300` or `text-blue-400` on the success state reset link to bring contrast above 4.5:1.

---

### ISSUE 4 — Tap Target Too Small: Social Icon Links in Nav
**File:** `components/Nav.tsx` — lines ~149–170  
**Severity:** High (mobile usability)  
**What's wrong:** The Facebook, Twitter, and Instagram icon links have no padding — the clickable/tappable area is the raw `w-4 h-4` (16×16px) icon. WCAG 2.5.5 (AA) requires 44×44px minimum tap target on touch devices.  
**How to fix:** Add `p-2` to each social icon `<a>` tag to bring the tap target to 32×32px minimum (or `p-3` for 40×40px). Example:
```tsx
<a href="..." aria-label="Facebook" className="p-2 text-gray-400 hover:text-white transition-colors">
  <FaFacebook className="w-4 h-4" />
</a>
```

---

### ISSUE 5 — Hover-Only Dropdowns Break on iPad / Touch Devices
**File:** `components/Nav.tsx` — DropdownItem component  
**Severity:** Medium  
**What's wrong:** Desktop dropdown menus (Services, Resources, Contact Us) open on `onMouseEnter` / close on `onMouseLeave`. On iPad-class touch-primary devices, hover events don't fire reliably. Users tapping a top-level nav item navigate to the parent page directly without seeing dropdown children.  
**How to fix:** Add a click toggle to `DropdownItem` alongside hover: toggle `open` state on click when a touch event is detected, or use a CSS-only `focus-within` trigger as a fallback. Alternatively, move child links into the parent page's own nav section (the Services page already exists at `/services/` which lists all service links).

---

### ISSUE 6 — `tel:` Href Format Inconsistency
**Files:** `components/Nav.tsx` (lines 129, 258), `app/page.tsx` (line 77), `components/QuoteFormSection.tsx` (line 358)  
**Severity:** Low  
**What's wrong:** These 4 locations use `tel:844-967-5247` (dashes). All other files (CTABar.tsx, Footer.tsx, contact-us, dashboard pages, sign-in, sign-up, vegas) use `tel:8449675247` (digits only). Both formats work on modern mobile browsers, but inconsistency is sloppy.  
**How to fix:** Normalize all `tel:` hrefs to `tel:8449675247` (digits-only, per RFC 3966).

---

### ISSUE 7 — `/quote` vs `/quote/` Trailing Slash Inconsistency
**Files:** Multiple — `CTABar.tsx:23`, `app/services/*.tsx`, `app/spf-resources/work-record-form/page.tsx` (no trailing slash) vs `Nav.tsx`, `components/HowItWorks.tsx`, `components/CoverageMap.tsx`, `app/page.tsx` (with trailing slash)  
**Severity:** Low  
**What's wrong:** Some CTAs link to `/quote` and others to `/quote/`. If `trailingSlash` is not configured in `next.config.js`, Next.js will 308-redirect one form to the other, which wastes a round-trip and can cause canonical URL confusion for SEO.  
**How to fix:** Check `next.config.js` for `trailingSlash` setting. Then normalize all quote hrefs to one form:
- If `trailingSlash: true` → use `/quote/` everywhere
- If `trailingSlash: false` (default) → use `/quote` everywhere (strip from Nav.tsx etc.)

---

### ISSUE 8 — Warning: Form Label Contrast Marginal at Small Size
**File:** `components/QuoteFormSection.tsx` — lines 214, 232, 250, 268, 287, 332 (all field labels)  
**Severity:** Low (warning)  
**What's wrong:** All 6 form field labels use `text-gray-400` (`#9ca3af`) at `text-xs` (12px) on the dark `#080d16` panel. Contrast ratio ~5.1:1 passes WCAG AA (4.5:1 required) but is marginal for 12px text, especially for users with low vision. WCAG AAA requires 7:1.  
**How to fix:** Bump form labels from `text-gray-400` → `text-gray-300` for better readability without design impact.

---

### ISSUE 9 — Warning: CoverageMap State Label Contrast Marginal
**File:** `components/CoverageMap.tsx` — lines 90, 100, 109, 126  
**Severity:** Low (warning)  
**What's wrong:** State name labels and chip text use `text-gray-400` at `text-xs`/`text-sm` on dark navy panel backgrounds (`#0a1628/80`). Same marginal contrast concern as issue 8.  
**How to fix:** Change `text-gray-400` → `text-gray-300` on map labels and state chip text.

---

### ISSUE 10 — No `overflow-x-hidden` on Root Layout
**File:** `app/layout.tsx`  
**Severity:** Low (iOS Safari safety net)  
**What's wrong:** The root layout wrapper has no `overflow-x-hidden`. Individual sections apply `overflow-hidden` locally, but if any decorative element (blob, absolute-positioned asset) extends beyond its section boundary, iOS Safari may show horizontal scroll.  
**How to fix:** Add `overflow-x-hidden` to the `<body>` or root `<main>` wrapper in `app/layout.tsx`.

---

## Summary

| # | Area | Status | Severity |
|---|------|--------|----------|
| 1 | Netlify function missing (client-side only webhook) | ⚠️ Issue | Medium |
| 2 | WCAG AA fail: TrustBar "Our Carriers" label contrast | ❌ Fail | High |
| 3 | WCAG AA fail: QuoteFormSection "Submit another" link contrast | ❌ Fail | High |
| 4 | Tap target too small: Nav social icons (16×16px) | ❌ Fail | High |
| 5 | Hover-only dropdowns inaccessible on iPad touch | ⚠️ Issue | Medium |
| 6 | `tel:` href format inconsistency | ℹ️ Minor | Low |
| 7 | `/quote` vs `/quote/` trailing slash inconsistency | ℹ️ Minor | Low |
| 8 | Form label contrast marginal (text-gray-400 at text-xs) | ℹ️ Warning | Low |
| 9 | CoverageMap label contrast marginal | ℹ️ Warning | Low |
| 10 | No overflow-x-hidden on root layout | ℹ️ Info | Low |

**Total: 10 issues** (3 high, 2 medium, 5 low/warning)  
**Pass: 10 criteria** — form attributes, success state, labels, __forms.html, webhook URL, phone number, CTA targets, nav routes, image alt text, button labels
