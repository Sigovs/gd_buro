# gd_buro — portfolio, composition rehearsal (Phase B-COMP)

Art-directed under [design_dna](https://github.com/Sigovs/design_dna).

**This is a composition rehearsal, not a portfolio.** Every image is a stand-in
and says so, in the frame. The layout is the deliverable; real case assets follow.

## View it

Open `index.html`. Fonts load from a CDN, so a connection is required.

## Design Read

```
Reading this as a hiring-decision portfolio for dealer principals and marque
managers who are comparing candidates under time pressure, leaning
gallery-neutral with a catalogue metadata layer.
Dialect: partial: auction-editorial PRINCIPLES (P1 subtract, P3 metadata composed,
P6 colour as setting) + brief-derived typography, imagery scale and density.
Vault: 6 relevant references, 1 unusable for missing notes (trionn-com);
1 note contradicts its own capture (ciridae-com) — flagged, used by tags only.
```

The structural decision specific to this content, in one line: *each case is
shown in its client's own art direction and the portfolio never puts a frame
around it — the only furniture is a rail that sits in the same place on every
case, so the eye stops seeing it and starts comparing the work.*

## Why the stand-ins are honest

They are real captures, so they carry real masses, tonal structure and edges —
the composition pass can be **run**, not declared.

- Sources: `design_dna/vault/shots/*` and `design_dna/screenshots/*`.
- Crop windows are **chosen by scanning for tonal structure**, not guessed.
- A generated asset is **rejected** if its luminance standard deviation falls
  below 8 — that guard is what caught `electrafilmworks-com` (flat orange
  preloader, sd 3.6) and `trionn-com` (near-black, sd 10.4 with no structure).
- Every frame carries a scrimmed mono mark: `STAND-IN — AWAITING CASE ASSETS`,
  plus its derivation source.

## Chapter rhythm

Declared as data, not left to chance:

| Chapter | Content | Tonal mean | Role |
|---|---|---|---|
| 01 | frame only, full bleed | 10.4 | establishing shot |
| 02 | frame + band + portrait | 17.7 | the system |
| 03 | frame + band + portrait | 22.6 | the system |
| **04** | **wide frame + mobile, hard right** | **41.3** | **the one disruption** |
| 05 | frame + band + portrait | 27.1 | the quietest chapter |
| 06 | frame + band | 7.4 | the close |

The disruption is **three coordinated departures**, so the break reads as one
decision rather than three accidents: the tonal value inverts (04 is the only
light chapter, and the grading was redone to make that true rather than
asserted), the paspartout collapses, and the rail turns horizontal.

## Measured contrast (WCAG AA)

| Pair | Ratio | Required |
|---|---|---|
| ink on ground | 16.98:1 | 4.5 |
| ink-70 micro-label, 11px | 9.03:1 | 4.5 |
| ink-58 case index, 11px | 6.16:1 | 4.5 |
| action underline | 3.29:1 | 3 |
| STAND-IN mark vs worst-case band, all 14 assets | 10.2–13.4:1 | 4.5 |

The focus ring is ink with a 5px ground-coloured halo, so it is always measured
against the page ground and holds over any frame, including the light one.

**No chromatic accent.** Every colour event on the page belongs to the work; the
ground is a gallery wall. This is the named structural differentiation from the
banned "navy + gold luxury" archetype.

## Motion — effect hierarchy

```
primary event  →  supporting motion  →  ambient motion  →  interaction feedback
```

- **Primary** — a curtain in the page's own ground lifts off each frame. One at a time.
- **Supporting** — the rail and spec plate arrive after their frame, staggered.
- **Ambient** — the image drifts 1.6% inside its own window, well under the 15% cap.
- **Interaction** — 4px title shift and an index colour change; never suppressed.

Transform and opacity only, no layout shift. Hidden states are applied **by
script only when motion is allowed**, so reduced-motion and a JS failure both
leave a complete, composed page rather than a gutted one.

## Not verified yet

The nine-point composition pass has **not been run in a browser** — chrome-devtools
MCP is connected but its tools register at session start, so this session has no
renderer. Deferred by explicit decision. Outstanding: grayscale and thumbnail
survival, breakpoints 1440/1024/768/390, reduced-motion scene, keyboard order.

## Placeholders

All copy is bracketed and length-specified so the text masses are compositionally
correct. No voice has been invented — headlines, paragraphs, name, and email are
Alex's to write. Asset requirements per case are listed in the Phase A document.

## Known compromise

Tailwind was dropped; this is hand-written CSS with a token layer. Fonts still
come from a CDN.
