# Wahyu Bornok — AI Engineer & Software Developer Portfolio

Modern portfolio site built with **React + Vite + Tailwind CSS + Framer Motion**, deployed to GitHub Pages.

## Live demos

Project cards marked **LIVE** open the project as a running app in an overlay (`src/components/DemoModal.jsx`) — all seven
are static sites on the same GitHub Pages origin, so they load in an iframe with no CORS/X-Frame issues. Nothing loads
until a card is clicked. Demo metadata (URL, repo, screenshot, tips) lives in `src/data.js` → `demos`; screenshots in
`public/img/demos/`.

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
