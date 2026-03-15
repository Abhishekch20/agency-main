# Next.js migration

This folder is the Next.js (App Router) migration of the existing CRA/CRACO React app in `../frontend/`.

## Local dev

```bash
cd frontend-next
npm install --legacy-peer-deps
npm run dev
```

## Notes

- Entry point: `src/app/page.jsx` renders `src/App.js` as a client page to preserve all UI animations/scroll behavior.
- Global styles: `src/app/globals.css` (includes Tailwind + previous `index.css`/`App.css` rules).
- Health endpoints: `/health`, `/health/simple`, `/health/ready`, `/health/live`, `/health/errors`, `/health/stats`.

