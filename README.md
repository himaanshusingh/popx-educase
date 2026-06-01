# PopX — Educase Qualifier

React UI for the PopX mobile flow (landing, signup, login, profile). The app is shown as a centered phone frame on desktop.

## Stack

- React 19 + Vite
- React Router
- Tailwind CSS v4

## Pages

| Route | Screen |
|-------|--------|
| `/` | Welcome — Create Account / Login |
| `/register` | Signup form |
| `/login` | Login form |
| `/profile` | Account settings & profile |

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Deploy

Build output is in `dist/`. Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) by connecting this repo and using:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
