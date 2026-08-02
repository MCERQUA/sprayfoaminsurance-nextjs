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

### Remediation status of the list above (record only — changes nothing about this block)
Items 1, 2, 3 and 5 were remediated by josh-desk-2 across rounds 1–4 and verified in the export; the
item-4 claims were ruled on by Josh (address, client count, NPN disclosure) or explicitly kept as
fleet boilerplate ("all 50 states", "A-rated carriers"). This is recorded so a future reader does not
re-do the work or mistake the list for current defects. **It is not progress toward lifting this
file** — see "To lift this block". The list is history; the block is authorization, and the two are
unrelated.

## Also unresolved: repo binding
Four candidate repos exist for this domain and **three have working WRITE deploy keys**, so a
mistaken push SUCCEEDS rather than failing safely. The locally-configured remote
(`MCERQUA/sprayfoaminsurance-nextjs`) is **not** evidence of what Netlify builds from. Host has been
asked for the authoritative `build_settings.repo_url`. Do not push to any of them until answered.

## Quarantined content — must be stripped before any restore
`.old/services-rig-equipment/page.tsx` was retired behind a forced 301 and still carries two
unverified claims: **`Coverage Limit` `$500K+` (line 32)** and **`Claims Processed` `24hr`
(line 33)**. "Claims processed" asserts a **carrier-controlled** timing as ours. If that page is ever
restored, **both must be stripped first.** It is out of `out/` today only because the route was
dropped — the strings were never remediated.

## To lift this block — READ THIS BEFORE CONCLUDING ANYTHING

**There are two different gates, and this file is not the one you probably just satisfied.**

| Gate | Question it answers | Who closes it |
|---|---|---|
| **CONTENT** | "Is the published copy defensible?" | Verifiable by an agent against the export |
| **AUTHORIZATION** | "May we replace a live revenue brand with this build?" | **Josh, personally. Nobody else.** |

**`DO-NOT-DEPLOY.md` is the AUTHORIZATION gate wearing the content gate's name.** The content gate
lifting is a *precondition* for deploying. **It is never permission to deploy.**

### The only thing that lifts this file is Josh saying so.

Specifically, **none** of the following lifts it, individually or in combination:
- ❌ Content verification passing / every F5–F6 edit confirmed in the export
- ❌ A clean, green build or export
- ❌ Host clearing the stage2a blocker
- ❌ A passing lead-capture round-trip to the leads DB
- ❌ Every item in the "Why" list above being remediated
- ❌ Another agent's report saying the site "looks ready"

If you have just verified the content and are reading this looking for the condition you met —
**you did not meet it.** The condition is a person, not a check.

### Four standing reasons, all still true
1. **Replacing a live revenue brand is irreversible.** `sprayfoaminsurance.com` is served today from
   a working WordPress install. A bad cutover costs real leads, and rolling back is not instant.
2. **Keeping the guard costs nothing.** Deploys are blocked by host's stage2a regardless, so this
   file is not what's holding anything up. Removing it buys zero speed and spends the only safety
   margin there is.
3. **Task #376 is open with Josh** to review this site's wording **under a producer license
   (NPN 8608479)**. Agency copy on a licensed insurance site is a regulated surface; an agent
   verifying strings is not a substitute for that review.
4. **Lead capture is proven only to the DB, not through Netlify.** Rows 1437–1440 prove the
   function→webhook→DB payload contract and **nothing about Netlify's build-time form detection or
   `submission-created` firing.** Six per-form live confirmations on first post-deploy submission
   remain **OPEN, not waived**.

**Do not delete this file. Do not weaken this section.** If you believe the block should lift, escalate
to `josh-desk-1@mesh` and let Josh rule — do not infer permission from your own passing checks.
