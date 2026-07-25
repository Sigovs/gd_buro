# gd_buro — Alexander Sigoff, selected work

Art-directed under [design_dna](https://github.com/Sigovs/design_dna).

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

## The six chapters

| # | Case | Year | Sector | Frame mean L | Role in the page |
|---|---|---|---|---|---|
| 01 | Pagani Lake Forest | 2025 | Marque dealer | 30 | establishing shot, full bleed |
| 02 | McLaren Orlando | 2025 | Marque dealer | 25 | the mat system |
| 03 | Ferrari Official Dealer / US | 2022 | Marque dealer network | 57 | the mat system |
| **04** | **MODA Miami / Sotheby's** | **2023** | **Concours & auction** | **88** | **the one disruption** |
| 05 | Koenigsegg Boston | 2022 | Marque dealer | 58 | the mat system |
| 06 | Porsche Restoration Services | 2021 | Restoration service | 16 | the close |

**The tonal arc is not graded into existence.** In the earlier rehearsal build it
was, because the assets were stand-ins. Here it comes from the *order* of the
chapters on real material — 30, 25, 57, 88, 58, 16 — so the light peak on 04 is
a fact about the work, not a filter. Nothing is desaturated or darkened: the
ground is a gallery wall and the colour belongs to the cases.

**The disruption is three coordinated departures**, so the break reads as one
decision rather than three accidents: the tonal value inverts, the paspartout
collapses to full bleed, and the rail turns horizontal. It is also the only
project that is not a dealer site, so the content carries the break too.

Six further projects sit in a subordinate hairline index rather than being
promoted into the chapter rhythm.

## Assets

Derived from the Behance **originals** (`/project_modules/source/`, 1920–3840px
wide), never from the 1200px display copies — a full-bleed frame would otherwise
have to be upscaled. Crops land only on the declared ratio tokens, and the
derivation script reads the same token set the stylesheet does, so a frame can
never be re-cropped on output. Total imagery: 1.4 MB across 14 files.

## Measured contrast (WCAG AA)

| Pair | Ratio | Required |
|---|---|---|
| ink on ground | 16.98:1 | 4.5 |
| ink-70 micro-label, 11px | 9.03:1 | 4.5 |
| ink-58 case index, 11px | 6.16:1 | 4.5 |
| action underline | 3.29:1 | 3 |

No page text sits over imagery. The focus ring is ink with a 5px
ground-coloured halo, so it is measured against the page ground and holds over
any frame, including the light chapter.

**No chromatic accent.** That is the named structural differentiation from the
banned "navy + gold luxury" archetype: not a muted gold instead of gold, but no
brand colour at all.

## Motion — effect hierarchy

```
primary event  →  supporting motion  →  ambient motion  →  interaction feedback
```

Curtain lifts off a frame (one at a time) → rail and plate follow → the image
drifts 1.6% inside its window → 4px title shift on hover and focus. Transform
and opacity only. Hidden states are applied **by script only when motion is
allowed**, so reduced-motion and a JS failure both leave a complete, composed
page rather than a gutted one.

## Still open

- **The composition pass has not been run in a browser.** chrome-devtools MCP is
  connected but its tools register at session start, so this session has no
  renderer. Outstanding: grayscale and thumbnail survival, breakpoints
  1440/1024/768/390, the reduced-motion scene, keyboard order.
- **Copy.** The positioning line, the contact headline, the email and the
  availability window are bracketed with target lengths so the text masses are
  compositionally correct. No voice has been invented.
- **Per-case scope.** Role is stated as what the source evidences — art
  direction, web design, UI — and deliberately does not claim front-end build.
  Confirm the real scope per case.
- **Rights.** Client names are used as published on Behance. Confirm any that
  need to be anonymised.
