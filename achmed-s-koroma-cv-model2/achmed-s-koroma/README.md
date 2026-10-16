# Achmed Samuel Koroma — Portfolio & Online CV

Static website (plain HTML, CSS and JavaScript — no build step) hosted on **GitHub Pages**.

**Live site:** https://achmedsamuel.github.io/achmed-s-koroma/
**Repository:** https://github.com/AchmedSamuel/achmed-s-koroma

---

## Files

```
index.html                 Main page (Home, About, Experience, Research, Projects, Skills,
                           AI & Digital, Design & Media, Web Development, Certificates, Contact)
styles.css                 All styling — colours are tokens at the top (light + dark theme)
script.js                  Theme switch, mobile menu, tabs, gallery, and rendering of content lists
data/content.js            ★ EDIT HERE: publications, research highlights, projects,
                           certificates/programmes, YouTube videos, design gallery
cv.html                    Printable CV page (also the source of the PDF)
404.html                   "Page not found" page
assets/profile.jpg         Your photo (large, for social previews)
assets/profile-240.jpg     Your photo (small, used on the page)
assets/cv/Achmed_Samuel_Koroma_CV.pdf   The "Download CV" file
assets/gallery/            Your flyers / thumbnails / images (see README.txt inside)
assets/fonts/              Inter font, self-hosted (SIL Open Font License, OFL.txt)
.nojekyll                  Tells GitHub Pages to publish files as-is
.gitignore                 Keeps system and private files out of the repository
```

All paths are relative, so the site works at `https://USERNAME.github.io/ANY-REPO-NAME/`
and at `https://USERNAME.github.io/`.

---

## Updating your live site with this version

Your repository already exists and Pages is already switched on, so you only replace the files:

1. Unzip the package on your computer.
2. In your repository, click **Add file → Upload files**.
3. Drag in **everything inside** the unzipped folder: `index.html`, `styles.css`, `script.js`,
   `cv.html`, `404.html`, `README.md`, `.gitignore`, and the `data` and `assets` folders.
   Files with the same name are replaced automatically.
   *Hidden files (`.gitignore`, `.nojekyll`) may not show in Windows Explorer — they are optional.*
4. Click **Commit changes**.
5. Wait 1–2 minutes, open the live site and press **Ctrl + Shift + R**.
6. Check the result with the checklist at the bottom of this file.

> No GitHub Actions workflow is needed: Pages is set to **Deploy from a branch → main → / (root)**
> and the site has no build step.

### Starting from scratch (new repository)

1. github.com → **+ → New repository** → name it (e.g. `achmed-samuel-koroma`) → **Public** → Create.
2. Click **uploading an existing file**, drag in all files and folders → **Commit changes**.
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   Branch **main**, folder **/ (root)** → **Save**.
4. After 1–2 minutes the site is at `https://AchmedSamuel.github.io/REPO-NAME/`.
5. Renaming an existing repo (Settings → General → Repository name) changes the URL;
   GitHub redirects the old repository URL but **not** the old Pages URL, so update links on
   LinkedIn and in `cv.html` if you rename.

---

## How to edit content

**On GitHub:** open the file → pencil ✏️ → edit → **Commit changes**. The site updates in ~1 minute.
For larger edits press **`.`** on the repository page to open a full editor in your browser.

| I want to… | Edit |
|---|---|
| Add a publication, project or certificate | `data/content.js` — copy one `{ ... },` block and change the text |
| Mark the McKinsey Forward Program as completed | `data/content.js` → set `status: "Completed"` and `date: "2025"` (your real date) |
| Add a YouTube video | `data/content.js` → `videos` → add `{ id: "VIDEO_ID", title: "...", label: "Short" },` |
| Add flyers / designs | Upload to `assets/gallery/`, then list them in `data/content.js` → `gallery` (see `assets/gallery/README.txt`) |
| Change text in About, Experience, Skills, AI or Web sections | `index.html` — Ctrl+F to find the text, change only the words between tags |
| Change colours | `styles.css` → tokens at the top (`--accent`, `--ink`, …) |
| Replace your photo | Upload new `assets/profile.jpg` (≈440×440) and `assets/profile-240.jpg` (240×240) with the same names |

Rules that keep things working:
- In `data/content.js` keep the quotes `"..."` and the comma after each `}`.
  If a list suddenly shows *"This list could not be loaded"*, a comma or quote is missing.
- In `index.html` write `&amp;` for `&`.
- Every edit is saved in **History** on GitHub, so you can always copy back an earlier version.

### Updating the downloadable CV (PDF)

The PDF is a print of `cv.html`:
1. Edit `cv.html` (Experience, Education, Skills). Publications and certificates update
   automatically from `data/content.js`.
2. Commit, then open `https://achmedsamuel.github.io/achmed-s-koroma/cv.html`.
3. Click **Print / Save as PDF** → Destination **Save as PDF** → Paper **A4** →
   More settings: **Margins: Default**, **Background graphics: on**, **Headers and footers: off**.
4. Save as `Achmed_Samuel_Koroma_CV.pdf` and upload it to `assets/cv/` (replaces the old one).

Never upload a CV that contains your home address or date of birth — the site is public.

---

## Deployment checklist

- [ ] Repository is **Public** (required for GitHub Pages on a free account)
- [ ] Settings → Pages shows **Your site is live at …**
- [ ] Home page loads; photo and fonts display
- [ ] Every menu item scrolls to its section (also from the ☰ menu on a phone)
- [ ] **Download CV** downloads the PDF; **Printable CV** opens `cv.html`
- [ ] Dark/light switch works and is remembered after reload
- [ ] YouTube Short plays
- [ ] Links open: MDPI article, DOI, GitHub repos, LinkedIn, YouTube, email
- [ ] A wrong address (e.g. `/achmed-s-koroma/xyz`) shows the 404 page and its button returns home
- [ ] Checked on a phone

## Quality checks run before delivery (local copy, not the live site)

- Automated accessibility scan (axe-core, WCAG 2.1 A/AA + best practice): main page in light theme,
  dark theme and phone width; `cv.html`; `404.html` — **0 violations**
- No JavaScript console errors; all 12 internal anchor links resolve
- No horizontal scrolling at 390 px, 768 px and 1366 px widths
- Keyboard: Experience tabs (←/→/Home/End), mobile menu (opens, Esc closes), gallery lightbox (Esc closes)
- Theme choice persists after reload; gallery hides when empty and drops missing images
- CV PDF: 2 A4 pages, fonts embedded, contains no street address, phone number or date of birth
- External links checked by fetching: MDPI article, DOI redirect, both of your GitHub repositories,
  the related CNR repository, your GitHub profile and YouTube channel/Short.
  LinkedIn could not be fetched automatically (it blocks bots) — check it by clicking.
