# Achmed Samuel Koroma — CV Website

A single-page CV site (pure HTML/CSS/JS, no build step) ready for **GitHub Pages**.

```
index.html            ← the whole site
assets/profile.jpg    ← your photo
assets/gallery/       ← put your flyers / designs here (design-1.jpg … design-6.jpg)
.nojekyll             ← tells GitHub Pages to serve files as-is (optional, hidden file)
```

---

## Deploy on GitHub Pages (recommended — free, no coding, ~5 minutes)

1. **Sign in** at <https://github.com> (create a free account if needed).
   Your username decides the address: `https://YOUR-USERNAME.github.io`.
2. Click **+ → New repository**.
   - **Repository name:** `YOUR-USERNAME.github.io` (exactly your username + `.github.io`)
     → the site will live at `https://YOUR-USERNAME.github.io`
     *(or any name, e.g. `cv`, → `https://YOUR-USERNAME.github.io/cv/` — like the sample `gracie-lab.github.io/jean-sossou`)*
   - Visibility: **Public** → **Create repository**.
3. On the new empty repo page, click **"uploading an existing file"**.
   Unzip this package and drag **its contents** (`index.html`, the `assets` folder, `README.md`) into the box → **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*:
   - Source: **Deploy from a branch**
   - Branch: **main** · Folder: **/ (root)** → **Save**
5. Wait 1–2 minutes and refresh. The banner shows **"Your site is live at …"**.

### Updating later
- **Edit text:** open `index.html` on GitHub → pencil ✏️ icon → edit → **Commit changes**. The site refreshes in about a minute.
- **Add flyers/designs:** open `assets/gallery` → **Add file → Upload files** → name them `design-1.jpg` … `design-6.jpg`. They appear automatically (the gallery stays hidden until at least one exists). Edit the captions in `index.html` (search for `figcaption`).
- **Change the featured YouTube Short:** search `index.html` for `XAk6QneaFR4` (2 places) and replace it with the new video ID.

### Using git instead of the web upload
```bash
cd achmed-cv-site
git init && git add . && git commit -m "CV website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```
Then do step 4 above.

---

## Other easy options
| Option | Best for | How |
|---|---|---|
| **Netlify Drop** | Instant preview in 30 seconds | Go to <https://app.netlify.com/drop>, drag the unzipped folder in, get a live link. |
| **Cloudflare Pages / Vercel** | Auto-deploy + fast global hosting | Sign in with GitHub, import the repo, deploy (no settings needed — it is static HTML). |
| **Custom domain** (e.g. `achmedkoroma.com`) | Professional address | Buy a domain, then GitHub **Settings → Pages → Custom domain** and follow the DNS instructions. |

---

## Privacy note
Phone number, home address and date of birth from the PDF CVs were **left out on purpose** — this site is public and indexed by search engines. Add them back in the Contact section only if you want them public.
