# Mahekgiri — Portfolio (React + Vite)

A premium, fully responsive developer portfolio built with **React 18 + Vite**.
Deep-navy / electric-blue / violet / teal theme, glassmorphism, scroll-reveal
animations, animated stats & skill bars, a testimonial slider, FAQ accordion,
and a working contact form (front-end validation).

---

## 🚀 Quick start (run locally)

You need **Node.js 18+** installed (https://nodejs.org).

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

---

## 🌐 Deploy for FREE

Pick **one** of the options below. All three are free.

### Option A — Vercel (easiest, recommended)
1. Push this folder to a GitHub repo (see "Push to GitHub" below).
2. Go to https://vercel.com → **Add New → Project** → import your repo.
3. Vercel auto-detects Vite. Just click **Deploy**.
4. You get a live URL like `https://your-name.vercel.app`. Done. 🎉

### Option B — Netlify
1. Push to GitHub.
2. Go to https://app.netlify.com → **Add new site → Import an existing project**.
3. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
4. Click **Deploy**. You get `https://your-name.netlify.app`.

*(Or, with no Git at all: run `npm run build`, then drag-and-drop the `dist`
folder onto https://app.netlify.com/drop for an instant live site.)*

### Option C — GitHub Pages (100% GitHub)
1. Push to a GitHub repo named e.g. `portfolio`.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and publishes
   automatically on every push to `main`. It sets the correct base path for you.
4. Your site goes live at `https://<username>.github.io/<repo-name>/`.

---

## 📦 Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## ✏️ Make it yours

| What | Where |
|------|-------|
| Name, title, intro, email, WhatsApp, LinkedIn | `src/data.js` → `identity` |
| Stats, services, projects, skills, testimonials, experience, FAQ | `src/data.js` |
| Your photo | replace `public/assets/mahekgiri.jpg` |
| Your resume PDF | replace `public/assets/Mahekgiri-Resume.pdf` |
| Colors / theme | `src/styles.css` (`:root` CSS variables) |
| Hero layout / card style | `src/App.jsx` → `<Hero layout="split|centered" />`, `<Projects cardStyle="classic|overlay" />` |

### Receiving emails from the contact form (free)
The form already works out of the box:

- **Right now (no setup):** when a visitor submits, it opens *their* email app
  with a message pre-addressed to you. Zero configuration.
- **Recommended (real inbox delivery):** sign up free at https://formspree.io,
  create a form, copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`),
  and paste it into `src/data.js`:

  ```js
  formspree: "https://formspree.io/f/abcdwxyz",
  ```

  That's it — submissions now arrive in your email inbox, with a loading state,
  success screen and error fallback all handled for you. No backend required.

---

## 🧱 Project structure

```
src/
  main.jsx            # entry
  App.jsx             # assembles all sections
  styles.css          # design system (CSS variables) + responsive rules
  data.js             # ← all your content lives here
  icons.jsx           # inline SVG icon set
  hooks.jsx           # Reveal, CountUp, SkillBar (scroll animations)
  components/
    Navbar, Hero, About, Services, Projects, Skills,
    Process, Testimonials, Resume, FAQ, Contact, Footer
public/
  assets/             # photo + resume (served at /assets/…)
```

Built with ❤️ — React + Vite.
