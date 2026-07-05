# Portfolio revamp notes

Rebuilt in place: Bootstrap, react-bootstrap, animate.css, react-multi-carousel, react-on-screen and react-router-hash-link are gone. The site now runs on React 19 + Vite 6 + Tailwind CSS + Framer Motion, with a pink design system, dark mode, and the floating-emoji interaction system.

## Run locally

    npm install
    npm run dev          # opens on http://localhost:5173

    npm run build        # production build (verified passing)
    npm run preview      # serve the production build locally
    npm run lint         # eslint (verified passing)

## Deploy to Vercel

Push to GitHub, import the repo in Vercel. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`. Nothing else to configure.

## Placeholders to fill

1. `public/medha.jpg` — your headshot (4:5 crop looks best). Until it exists, the hero shows an "MM" monogram on the gradient instead, so nothing breaks.
2. `public/resume.pdf` — your resume PDF. The navbar and hero "Download resume" buttons point here.
3. `index.html` — after deploying, replace `https://medha-portfolio.vercel.app` in the og:url / og:image / twitter:image tags with your live domain.
4. `public/og-image.png` — a branded social preview is already generated; replace it with a nicer one (e.g. a hero screenshot) whenever you like.
5. Optional, in `src/data/content.js`: `live` demo URLs for SignBridge and the Bioactivity app, and a `link` for LunaRing if it has a repo.

## Where everything lives

All content (bio, stats, skills, experience, projects, publication, achievements, socials, contact info) is in `src/data/content.js`. Design tokens are in `tailwind.config.js` and the CSS variables at the top of `src/index.css`. EmailJS wiring is unchanged (same service, template, public key, and field names) inside `src/components/contact/Contact.jsx`.
