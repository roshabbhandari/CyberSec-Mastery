# CyberSec Mastery

A premium, dark cyberpunk-themed static website for **CyberSec Mastery** — a cybersecurity education platform founded by **Roshab Bhandari**.

Built with plain HTML, CSS, and vanilla JavaScript — **zero external APIs, zero build step, zero frameworks required.** Open `index.html` in a browser and it works.

## ✨ Features

- Dark cyberpunk / glassmorphism design system with neon accents
- Custom cursor, mouse glow, animated CSS particles, cyber grid background
- Scroll-reveal animations, animated counters, animated skill bars
- Typing-effect hero headline, card tilt hover effects
- Fully responsive, accessible, keyboard-focus friendly
- SEO: meta tags, Open Graph, Twitter Cards, JSON-LD schema (Organization, Person, WebSite, FAQPage), `robots.txt`, `sitemap.xml`

## 📁 Structure (repo root — required for GitHub Pages)

```
CyberSec-Mastery/
├── index.html          Home
├── about.html          About the platform
├── founder.html        Founder profile (Roshab Bhandari)
├── learning.html        Learning roadmap
├── blog.html            Cyber blog
├── contact.html         Contact + FAQ
├── privacy.html         Privacy policy
├── terms.html           Terms of use
├── 404.html             Custom 404 page
├── robots.txt
├── sitemap.xml
├── google10185dbc400d17bc.html   (your existing Search Console verification file — keep at root)
└── assets/
    ├── style.css        Shared design system
    ├── script.js        Shared interactions
    └── images/
        └── logo.png     Brand logo (used as favicon + nav mark)
```

**Important:** every file must sit directly at the repo root — not inside a subfolder — or GitHub Pages will 404.

## ⚠️ Before you push: replace USERNAME

All canonical URLs, Open Graph tags, JSON-LD schema, `robots.txt`, and `sitemap.xml` currently point to:

```
https://USERNAME.github.io/CyberSec-Mastery/
```

Replace `USERNAME` with your actual GitHub username in every file (find-and-replace across the project) before or after pushing. Affected files: `index.html`, `about.html`, `founder.html`, `learning.html`, `blog.html`, `contact.html`, `privacy.html`, `terms.html`, `robots.txt`, `sitemap.xml`.

## 🚀 Uploading to GitHub

**Files must go directly into the repo root — do not upload this as a nested folder.**

If you already have a GitHub account and Git installed locally:

```bash
cd CyberSec-Mastery   # this extracted folder — its contents ARE the repo root
git init
git add .
git commit -m "Initial commit: CyberSec Mastery website"
git branch -M main
git remote add origin https://github.com/<your-username>/CyberSec-Mastery.git
git push -u origin main
```

Or, without Git installed:
1. Go to [github.com/new](https://github.com/new) and create a repository named `CyberSec-Mastery`.
2. Click **"uploading an existing file"** on the empty repo page.
3. Select and drag in every file *inside* this extracted folder (`index.html`, `about.html`, `assets/`, etc.) — not the folder itself.
4. Commit directly to `main`.
5. Confirm on github.com that `index.html` appears at the top level of the repo file listing, not inside a subfolder.

## 🌐 Free Hosting (GitHub Pages)

1. In your repo, go to **Settings → Pages**.
2. Under **Branch**, select `main` and `/ (root)`, then **Save**.
3. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/` within a minute or two.

## 📝 Notes

- Update the placeholder domain `cybersecmastery.dev` in canonical URLs, `sitemap.xml`, and JSON-LD schema once you have a real domain.
- The contact form is front-end only (no backend) — connect it to a form service (e.g. Formspree) or your own API endpoint to actually receive submissions.
