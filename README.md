# Wahyu Bornok — AI Engineer & Software Developer Portfolio

Modern portfolio site built with **React + Vite + Tailwind CSS + Framer Motion**, deployed to GitHub Pages.

## Playground — live, embedded demos

The **Playground** section embeds seven of my projects as running apps (they're all static sites on the same GitHub
Pages origin, so they load in an iframe with no CORS/X-Frame issues): American Roulette, Nim vs AI, AI-assisted
Minesweeper, Tic-Tac-Toe vs Minimax, Crossword CSP Solver, Arithmathgeek and Home World.

- Only the selected demo is loaded (lazy, with a screenshot poster while it loads); Taller / Fullscreen / Open-in-tab controls.
- Project cards marked **LIVE**, the hero strip, and `#playground?demo=<id>` links all open a demo in place
  (`window.dispatchEvent(new CustomEvent('open-demo', { detail: id }))`).
- Demo metadata (URL, repo, screenshot, tips, stack) lives in `src/data.js` → `demos`; screenshots in `public/img/demos/`.

## Stack
- React 18 + Vite 5
- Tailwind CSS (custom dark "tech" theme)
- Framer Motion (scroll animations)
- Deployed via GitHub Actions → GitHub Pages

## Local dev
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/ (base /portfolio/)
npm run preview    # preview the production build
```

## Deploy
Push to `main` → GitHub Action builds and publishes `dist/` to GitHub Pages.
Enable **Settings → Pages → Source: GitHub Actions**.

Site: https://officiel-tinkerthink.github.io/portfolio/
