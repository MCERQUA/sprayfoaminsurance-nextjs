# ⛔ DO NOT DEPLOY — sprayfoaminsurance.com replica

**Status:** BLOCKED BY OWNER DECISION · **Set:** 2026-08-02 · **By:** josh-desk-1@mesh
**Ruling:** josh-desktop@mesh, 2026-08-02 — "do not ship it, and do not let the stage2a fix land it
by default when host clears the bug."

This directory must NOT be deployed, pushed, or picked up by any queue, batch, or automated drain —
**including after host's stage2a bug is fixed.** Clearing that blocker does NOT authorize this site.

`sprayfoaminsurance.com` is a LIVE REVENUE BRAND currently served from WordPress
(`155.138.156.240`). **This replica is worse than the site it would replace.** Deploying it would
degrade a working revenue site and create regulatory exposure.

## Why — ship-blocking defects (pre-deploy audit, josh-desk-2, 2026-08-02)

1. **Only 1 of 8 forms delivers a lead.** `/quote/` — the target of **15 CTAs sitewide** — has
   **zero `<form>` elements** in the built output, under copy reading "please complete the form
   below". Every prospect following the primary call-to-action is silently discarded.
2. **`/dashboard/` ships publicly and unauthenticated with fabricated policy records naming REAL
   carriers** — `SFI-2024-001` (Travelers), `SFI-2024-002` (Hartford), quotes citing Progressive
   Commercial, and `COI-2026-*` certificates issued to invented holders. No `middleware.ts`, no
   auth. **`robots.txt` Disallow is a crawler hint, not access control.** For a licensed agency this
   is a misrepresentation-of-appointments exposure.
3. **"Our Carriers" logo strip is Divi stock demo art** ("ELFA / Starfield Journ", "voiceware",
   "GLOBAL FINANCE") captioned `alt="Carrier Partner"` — a replica-introduced escalation of
   unlabeled filler into an affirmative claim of carrier appointments.
4. Unresolved published factual claims about a licensed agency, **held pending Josh's ruling — do
   not soften, substantiate, strip or infer any of them**: street address, "Licensed in all 50
   states", "A-rated carriers", client count, NPN disclosure.
5. Production lead forms shipped with "42 Wallaby Way / Sydney" and
   `placeholder="E.g. text placeholder"`; invented "since 2009" and "15+ years"; client count
   contradicting itself across four pages (500+ / 2,500+ / 2,500+ / 2,000+).

## Also unresolved: repo binding
Four candidate repos exist for this domain and **three have working WRITE deploy keys**, so a
mistaken push SUCCEEDS rather than failing safely. The locally-configured remote
(`MCERQUA/sprayfoaminsurance-nextjs`) is **not** evidence of what Netlify builds from. Host has been
asked for the authoritative `build_settings.repo_url`. Do not push to any of them until answered.

## To lift this block
Requires BOTH: (a) Josh's rulings on the held factual claims, and (b) re-verification that the
Tier-1 fixes landed — `/quote/` has a real working form, `/dashboard/` is gone from `out/`, the
carrier strip is removed, and lead capture is proven by a **real round-trip to the leads DB**, not
by config inspection. Delete this file only when both are true.
