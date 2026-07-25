# CyberSec Mastery

A premium, dark cyberpunk-themed website for **CyberSec Mastery** — a cybersecurity education platform founded by **Roshab Bhandari**.

Now condensed to just **3 files** — the simplest possible setup for GitHub Pages:

```
CyberSec-Mastery/
├── index.html      Every page (Home, About, Founder, Learning, Blog, Contact/FAQ,
│                   Privacy, Terms, 404) — all in ONE file. HTML, CSS, JS, and the
│                   logo image are all embedded inline. No external files at all.
├── robots.txt
└── sitemap.xml
```

## How navigation works

This is a single HTML file that behaves like a multi-page site using URL hash routing:

- `#home`, `#about`, `#founder`, `#learning`, `#blog`, `#contact`, `#privacy`, `#terms`
- e.g. `https://USERNAME.github.io/CyberSec-Mastery/#founder` opens the Founder page
- Unknown hashes fall back to a 404 view
- All nav links, footer links, and buttons already point to the correct hash — nothing to configure

## ⚠️ Before you push: replace USERNAME

`index.html`, `robots.txt`, and `sitemap.xml` all reference:

```
https://USERNAME.github.io/CyberSec-Mastery/
```

Find-and-replace `USERNAME` with your actual GitHub username in all three files.

## 🚀 Uploading to GitHub

Only 3 files to upload — drop them straight into the repo root:

```bash
git init
git add .
git commit -m "Initial commit: CyberSec Mastery website"
git branch -M main
git remote add origin https://github.com/<your-username>/CyberSec-Mastery.git
git push -u origin main
```

Or without Git: create a repo named `CyberSec-Mastery` on github.com, use **"uploading an existing file,"** and drop in `index.html`, `robots.txt`, and `sitemap.xml`.

## 🌐 Free Hosting (GitHub Pages)

Settings → Pages → Branch: `main`, folder: `/ (root)` → Save. Live in 1–2 minutes at:

```
https://<your-username>.github.io/CyberSec-Mastery/
```

## 📝 Notes

- The contact form is front-end only — connect it to a form service (e.g. Formspree) to actually receive submissions.
- Because everything lives in one file, editing content means editing that one `index.html` — use your browser's find (Ctrl/Cmd+F) to jump to a section, e.g. search for `id="page-founder"`.
