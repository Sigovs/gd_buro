# gd_buro — portfolio page

A single-page designer portfolio, art-directed under
[design_dna](https://github.com/Sigovs/design_dna). Static prototype: Tailwind
and fonts load from a CDN, so an internet connection is required to view.

## View it

- **Locally:** open `index.html` in a browser.
- **Hosted:** enable GitHub Pages (Settings → Pages → Deploy from branch →
  `main` / root).

## Design Read

```
Reading this as a single-page designer portfolio for prospective luxury-retail
clients and the studios that hire them, leaning auction-catalog editorial.
Dialect: auction-editorial.
Vault: 6 relevant references, 1 unusable for missing notes (trionn-com).
```

The one committed gesture is **the work ledger** — a hairline-ruled record with
a sticky preview shaft, not a card grid. That choice comes straight out of
`vault/rmsothebys-com`, which is filed as an anti-reference for exactly the
failure a card grid produces here.

## Placeholders to replace

| Token | Where |
|---|---|
| `[Client 01]` … `[Client 08]` | ledger rows + preview captions |
| `[Client 04]` | the featured spread |
| `[EMAIL]` | contact action, `mailto:` |
| `[Full name]` | colophon |
| `Alex` | masthead wordmark — confirm the intended form |
| `.tile-a` … `.tile-d` | flat tonal placeholders. Swap for `<img>`; the tones are on the ground/ink ladder so the composition does not shift when photography lands. |

Sector, year, and role strings in the ledger are plausible stand-ins, not real
project data.

## Token discipline

Every spacing, type, and colour value is declared once in `:root` and mirrored
into `tailwind.config`, so Tailwind utilities and raw CSS resolve to the same
scale. There are no magic numbers. Two documented composition ratios live
alongside the tokens: `--hero-above: .38` / `--hero-below: .62`.

## Measured contrast (WCAG AA)

| Pair | Ratio | Required |
|---|---|---|
| ink `#f2f1ee` on ground `#0e0f11` | 16.98:1 | 4.5 |
| ink-70 micro-label, 11px | 9.03:1 | 4.5 |
| ink-58 ledger index, 11px | 6.16:1 | 4.5 |
| accent `#c7aa87` — active index / focus ring | 8.70:1 | 4.5 / 3 |
| rule-strong — action underline | 3.29:1 | 3 |
| ink-70 caption over the darkest tile base | 8.57:1 | 4.5 |

## Accent budget

One accent (`oklch(.755 .058 72)` — tobacco), three roles only: focus ring,
active ledger index, featured mark. Under ~5% of visible pixels.

## Motion

Crossfade over travel, nothing moves more than 8px. Every animation has a
complete static equivalent under `prefers-reduced-motion: reduce`, and the page
is fully readable with JavaScript disabled.

## Known compromise

`cdn.tailwindcss.com` is the Tailwind play CDN — no purge step, no build,
network required. Chosen for zero-friction handoff. The upgrade path is Vite +
Tailwind when this stops being a prototype.
