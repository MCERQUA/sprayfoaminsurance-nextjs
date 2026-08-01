# Design Tokens — sprayfoaminsurance.com (live capture, 2026-08-01)

Source: inline `<style>` blocks in `home.html` (Divi page builder dynamic CSS) +
theme CSS bundles in `css/hummingbird-*.css` (WP Hummingbird-combined Divi framework CSS,
served via BunnyCDN pull-zone `hb.wpmucdn.com`, no origin hits required to fetch).

## Colors

Primary brand blues (most frequent in page-specific inline CSS):
- `#2ea3f2` — bright/primary blue (buttons, accents) — 14 occurrences
- `#0c71c3` / `#0C71C3` — secondary/darker blue (headings, CTA text) — 11 occurrences
- `#0ea6ed` — mid blue accent — 3 occurrences
- `#06216b` — deep navy (dark section backgrounds / text-shadow) — 3 occurrences
- `#00abef`, `#00b6ff`, `#0edaf9` — glow/text-shadow blues used behind hero H1/H2 (Divi text-shadow effect)
- `#a3d1ff` — light blue used in footer heading text

Neutrals:
- `#ffffff` / `#fff` — white (34 occurrences — dominant background/text-on-dark)
- `#000000` — black (17 occurrences, mostly shadows)
- `#333` / `#333333` — default body/heading text color (Divi default)
- `#e0e0e0`, `#f3f3f3`, `#e2e2e2` — light gray section dividers/backgrounds

Theme-framework palette (from `hummingbird-*.css`, broader Divi/site CSS, lower confidence —
includes some unrelated Divi default swatches like WP block-editor palette colors e.g. `#cf2e2e`,
`#ff6900` which are NOT necessarily used on this site, just present in the bundled framework CSS):
- `#097baa` (194 occurrences — very common, likely a component/module default teal-blue)
- `#777771` (159 — muted gray-brown, body text default)
- `#e51919` (90 — red, likely form validation/error states)
- `#067963`, `#05614f`, `#1abca1`, `#bceee6` — green family (possibly used in a different template/plugin, verify against actual page screenshots)
- `#e04562`, `#f9e4e8` — pink/red family (possibly Forminator plugin styling)

**Recommendation for replica:** treat `#2ea3f2` (bright blue) as primary, `#0c71c3` as secondary/darker
blue, `#06216b` as a deep-navy dark-section background, white/near-white as base background, `#333`
as body text. Verify exact button/link hex against screenshots (Phase 2) since Divi applies many
!important overrides at the per-module level that weren't all captured in this static regex pass.

## Typography

- **Heading font-family:** `'Poppins', Helvetica, Arial, Lucida, sans-serif` (21 occurrences in inline
  page CSS — this is the dominant heading/hero font)
- **Body font-family (theme default seen in imported Google Fonts stack):** Open Sans (loaded via
  `fonts.googleapis.com` — family list includes Open Sans, Poppins, Playfair Display, Rubik, Abhaya
  Libre, Tajawal, Abril Fatface depending on page — Divi loads different combos per Theme Builder
  template; Poppins + Open Sans are the two consistently present)
- **Icon fonts:** ETmodules (Divi's own icon font), FontAwesome 6.4.0 (via cdnjs)
- **Base heading sizes (Divi framework default, from hummingbird-*.css):**
  - h1: 30px (default) — but hero H1 overridden inline to `font-size:65px` (desktop), `font-weight:700`
  - h2: 26px (default), hero overrides seen at 25px/33px/23px depending on module
  - h3: 22px (default)
  - Responsive down-steps present (column-width-based h1/h2/h3 shrink: 26/23/20px in narrower columns)
- **Base heading color:** `#333` default; **white `#fff` on dark-background sections**
  (`.et_pb_bg_layout_dark`), switching to `#333` on light-background variants — a light/dark section
  background pattern used throughout (hero sections are dark-background with white text + blue glow
  text-shadow, e.g. `text-shadow:0em 0em 0.35em #00abef` behind the H1).

## Spacing / Layout patterns

- Base Divi section padding: `4% 0` (percentage-based vertical rhythm) — but specific sections
  override to fixed `54px 0`, and sticky/Theme-Builder header/footer sections use small fixed values
  like `padding-top:6px;padding-bottom:12px` or `padding-top:12px;padding-bottom:0`.
- This is standard Divi Builder output (`.et_pb_section`, `.et_pb_row`, `.et_pb_column`) — the site is
  built entirely in Divi (Elegant Themes page builder), NOT a hand-coded theme. Expect per-page,
  per-module inline overrides rather than a clean global spacing scale.

## Stack / plugin fingerprint

- Theme/builder: **Divi** (et_pb_* classes throughout, Theme Builder header/footer templates
  `_tb_header` / `_tb_footer` suffixes present)
- Forms: **Forminator** (forminator-icons-font references in CSS)
- Performance/caching: **WP Hummingbird** (asset combination via `hb.wpmucdn.com` BunnyCDN pull-zone)
- Image CDN: **Smush** (`smushcdn.com`, `?lossy=1&strip=1&webp=1` query params) + a general
  `assetcdn.net` CDN mirror
- Icons: Divi ETmodules + Font Awesome 6.4.0

## Files captured

- `css/fontawesome-all.min.css` — Font Awesome 6.4.0 full icon set
- `css/google-fonts-2.css` through `google-fonts-5.css` — 4 distinct Google Fonts @font-face bundles
  (different per-page combinations; Open Sans + Poppins are the constant, others vary)
- `css/hummingbird-*.css` (7 files) — combined Divi framework + theme CSS bundles, sizes range from
  24 bytes (placeholder `/**handles:divi-style**/`) up to ~200KB (main framework bundle)
- Two bonus dynamically-named files captured via a BunnyCDN redirect (confirmed via verbose curl this
  was served from CDN cache, `cdn-cache: HIT`, NOT a direct origin request):
  `css/1_78_1011_et-divi-dynamic-tb-520-tb-815-1011.css_ver_1782549398` and
  `css/1_78_12_et-divi-dynamic-tb-520-tb-815-12.css_ver_1782487342` — small Divi text/code-module
  dynamic CSS fragments.

Full raw color/font extraction was done via regex against inline `<style>` blocks in `home.html` and
bundled theme CSS — cross-check exact per-component values against Phase 2 screenshots when building
the replica, since Divi's per-module `!important` overrides are extensive and not all captured here.
