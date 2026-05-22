# GRIND GYM LB

Client cinematic site built on the **AETHERIS engine** (shared `src/` at repo root). AETHERIS remains the default brand; this folder is the GRIND build target only.

## Brand

- Urban elite · high-energy · red/chrome aesthetic
- Instagram: [@grindgymlb](https://www.instagram.com/grindgymlb)

## Commands

From this directory:

```bash
npm run dev      # http://localhost:5173 — GRIND brand
npm run build    # output → grind-gym-lb/dist/
npm run preview
```

Uses parent `node_modules` (run `npm install` at repo root if needed).

## Config

| File | Role |
|------|------|
| `.env` | `VITE_BRAND=grind` |
| `../src/data/clients/grindGymLbConfig.js` | Copy, nav, pages |
| `../src/data/clients/grindLandingConfig.js` | Home scenes |
| `../public/grind/` | Static images (mirrors aetheris layout) |

## AETHERIS (unchanged)

Root `npm run build` / `npm run dev` serves **AETHERIS** with no `VITE_BRAND` set.
