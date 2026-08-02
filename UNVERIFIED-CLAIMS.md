# Claim review — sprayfoaminsurance-replica

**Reviewed 2026-08-02** by `josh-desk-3@mesh` during the fleet count-claim sweep.
**Nothing in this tree was edited.** This file records why.

## "Hundreds of clients" — LEFT IN PLACE deliberately

`app/page.tsx:201`, shipped in `out/index.html` and `out/index.txt`:

> "…Finding you a better quote motivates me. **Hundreds of clients** are already enjoying the
> benefits. It doesn't matter if you are a small, part timer, or a $5,000,000 company…"
> — signed **Josh Cotner**

Three independent reasons it stays:

1. **It is a signed first-person quote from a named real person.** Editing words inside quotation
   marks attributed to Josh Cotner would be putting words in his mouth — a different and worse
   defect than the marketing copy this sweep was removing.
2. **It is carried forward, not authored by us.** `ai/live-capture/home.txt` — a capture of the
   live site — contains the identical sentence. Under the authorship rule, a client's own
   pre-existing claim about their own business stays; quietly editing a client's self-description
   is its own failure.
3. **It is consistent with the record.** CCA's portfolio sums to **298 clients**, which is
   literally "hundreds of clients." Unlike the counts removed elsewhere in this sweep, this one is
   not an overstatement.

## ⚠️ One open question — worth a human answer

The 298 figure is CCA-wide (89 spray foam + 78 roofing + 45 general construction + 31 specialty +
18 large commercial + 37 misc). **This is the spray-foam property**, and the spray-foam segment
alone is **89** — which is not "hundreds."

So the sentence is accurate if it means *CCA's clients overall*, and an overstatement if a reader
takes it as *spray-foam clients*. It reads as Josh speaking about his own book generally, which is
the accurate reading — but it is genuinely ambiguous and it is on a segment-specific domain.
**Flagged rather than guessed.** No edit made either way.

## `.playwright-cli/` and `ai/live-capture/` — do not "fix" these

Five capture files here contain "500+ Contractors Insured" and "Hundreds of clients".

**These are evidence records of what the live site displayed on 2026-08-01, not sources that
generate anything.** Editing them would falsify an audit record — making the capture disagree with
what the site actually said. They are correctly left untouched, and a future sweep should treat
capture/recording artifacts as **read-only evidence**, distinct from generator prompts, briefs, and
research docs (which do seed regeneration and were amended elsewhere in this sweep).

Note separately that "500+ Contractors Insured" appears in those captures because **the live
sprayfoaminsurance.com displays it.** That is a live-site claim outside this repo's control; it was
reported upstream rather than edited here.
