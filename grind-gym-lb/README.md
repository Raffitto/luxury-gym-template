# GRIND GYM LB

Client cinematic site built on the **AETHERIS engine** (shared `src/` at repo root). AETHERIS remains the default brand; this folder is the GRIND build target only.

## Brand

- Urban elite · high-energy · red/chrome aesthetic
- Instagram: [@grindgymlb](https://www.instagram.com/grindgymlb)

## Commands

From this directory:

```bash
npm run dev      # http://localhost:5173 — GRIND brand
npm run build    # output → dist/ (flat, Netlify-ready)
npm run preview
```

Uses parent `node_modules` (run `npm install` at repo root if needed).

## Netlify

| Setting | Value |
|---------|--------|
| **Base directory** | `grind-gym-lb` |
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |
| **Env** | `VITE_BRAND=grind` (set in `netlify.toml`) |

Publish folder must contain `index.html`, `assets/`, `grind/`, and `_redirects` at the same level.

## Config

| File | Role |
|------|------|
| `.env` | `VITE_BRAND=grind` |
| `../src/data/clients/grindGymLbConfig.js` | Copy, nav, pages |
| `../src/data/clients/grindLandingConfig.js` | Home scenes |
| `../public/grind/` | Static images (mirrors aetheris layout) |

## AETHERIS (unchanged)

Root `npm run build` / `npm run dev` serves **AETHERIS** with no `VITE_BRAND` set.
