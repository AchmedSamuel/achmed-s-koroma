# Content Inventory — Achmed Samuel Koroma Portfolio

Keep this file private; it is **not** part of the website package.

**Sources**
- **CV-A:** Europass-style CV, 4 pages, the newest (includes Oct 2025 certificates). Used as the primary source.
- **CV-B:** Energy-focused CV, issued 4 Dec 2024.
- **CV-C:** Cybersecurity-focused CV, issued 3 Oct 2024.
- **You:** details you gave me in earlier conversations, which are not in the CVs.
- **Web:** verified by fetching the page on 16 Oct 2026.

---

## 1. Items to confirm before you rely on them

| # | Item | What the sources say | What the site shows now | Your action |
|---|---|---|---|---|
| 1 | **McKinsey Forward Program** dates and completion | Not in any CV | "McKinsey.org · Participant", with no date and no completion claim | Send me the dates and say whether you completed it. Then set `status: "Completed"` and `date` in `data/content.js`. |
| 2 | **PhD**: institution, start date, programme name | Not in any CV (from You). Supervisor: Dr. Milena P. Arciniegas | "Doctoral research · Genoa, Italy · In progress", with the supervisor named | Confirm the wording and add the institution and start date if you want them shown. |
| 3 | CNR internship dates | CV-A: 03/2023 – 05/2024. CV-C: 07/03/2023 – 27/03/2024 | Mar 2023 – May 2024 (CV-A) | Confirm the end date. |
| 4 | MSc dates | CV-A: 20/09/2021 – 29/02/2024. CV-B: Sept 2021 – March 2024. CV-C: 2021 – 2023. The UniGe thesis record is dated 26/03/2024 | Sep 2021 – Feb 2024 (CV-A) | Confirm. |
| 5 | Bachelor's dates | CV-A: 31/08/2014 – 31/07/2019. CV-B/CV-C: 2015 – 2019 | Aug 2014 – Jul 2019 (CV-A) | Confirm. |
| 6 | Bachelor's degree title | CV-A: "Bachelor degree in Electrical and Electronic Engineering". CV-B/CV-C: "Bachelor with honours". Your spec says "BSc" | "Bachelor's Degree with Honours…", with the badge "BSc (Hons)" | Confirm whether it is BSc or BEng. My previous version wrongly said "BEng"; this has been fixed. |
| 7 | University name spelling | CVs: "**Earnest** Bai Koroma University of Science and Technology" | "**Ernest** Bai Koroma University of Science and Technology" (the official spelling) | Confirm. |
| 8 | Overlapping roles 2020 – 2022 | Freetown Innovation Lab 2020–2022, EBKUST Jan 2021 – Feb 2022 and Grace Community until Dec 2021 overlap with each other and with the MSc start (Sep 2021) | Shown as stated | Confirm these roles ran at the same time (part-time or remote). |
| 9 | Projects not in your CVs: MACONDO, laboratory data management system, structure–property pipeline, HeinSight reproduction | From You | Described at a high level, with no internal names, endpoints or data | Confirm with your supervisor that these can be public, especially MACONDO while institutional hosting is being discussed. |
| 10 | "AI-assisted coding" labels on MACONDO, NanoVision, the LIMS and this website | Based on our past work together | All labelled **AI-assisted coding** | Change any project you wrote yourself to `"Written independently"` in `data/content.js` and `index.html`. |
| 11 | ChatGPT use case | Named in your spec, but no use case given | "Writing support, brainstorming and explanations of new topics" | Correct it if your use is different. |
| 12 | AI image generator and design tools | Your spec: Canva, OBS Studio, AI image generation | Canva, OBS Studio, YouTube Studio, AI image generation, PowerPoint | Name the image generator if you want it shown, and remove anything you don't use. |
| 13 | Creative assets | None supplied | The gallery is hidden until you add real files | Upload your genuine flyers and thumbnails (see `assets/gallery/README.txt`). |
| 14 | Phone number | In CV-A, CV-B and CV-C | Left off the site and the PDF | Tell me if you want it public. |
| 15 | Repository name | Your spec: `achmed-samuel-koroma`. Actual live repo: `achmed-s-koroma` | Kept `achmed-s-koroma`, the working URL | Optional: rename the repo. This changes the URL (see README). |
| 16 | NanoVision and Ollama | My previous version said Gemini **and Ollama** | The verified README shows Ollama is only a planned improvement. All Ollama claims have been removed | None. |

## 2. Verified facts (used on the site)

**Publication (Web: MDPI):** Koroma, A. S.; Narteni, S.; Cambiaso, E.; Mongelli, M. "Uniform Manifold Approximation and Projection Filtering and Explainable Artificial Intelligence to Detect Adversarial Machine Learning." *Information* 16(8), 647. Published 29 July 2025, open access. DOI 10.3390/info16080647 (the DOI link redirects to MDPI).

**Repositories (Web: GitHub):**
- AchmedSamuel/UMAP-adversarial-image-detection: notebooks for the paper. Covers MNIST and CIFAR-10 with FGSM, Carlini–Wagner and DeepFool attacks, using ART, UMAP and decision trees.
- AchmedSamuel/NanoVision: FastAPI service using Gemini Vision and YOLO11n, built as the course project for Cloud Architectures & RESTful Services for Robotics.
- saranrt95/ExplainableSafetyRegions: REXASI-PRO code from the CNR team. It is linked as "related project code"; you are not listed as an author of that paper.

**YouTube (Web):** Kingdom Treasure (@KingdomTreasure01), tagline "where faith meets ambition". Short XAk6QneaFR4: "How God prepares you before the promotion come".

**Experience (CV-A, with CV-B for older engineering roles):**
- Research Fellow, CNR-IEIIT: Jun 2024 – May 2025 (RAISE ECS00000035, REXASI-PRO)
- Research Intern, CNR-IEIIT: Mar 2023 – May 2024
- Research & Teaching Assistant, EBKUST, Magburaka: Jan 2021 – Feb 2022
- Teacher & Head of Science Department, Grace Community High School: Oct 2011 – Dec 2021
- Electrical Engineer, Freetown Innovation Lab: 2020 – 2022 (CV-B)
- Enumerator, WARC Group: 2019 – 2020 (CV-B)
- Electrical Engineering Intern, Heidelberg Cement Group: 2018 – 2019 (CV-B)

**Certificates (CV-A):**
- Google Project Management, Oct 2025
- Deep Learning with Keras & TensorFlow, Jul 2025
- Get into Tech, Jun 2025
- Green Digital Skills, May 2025
- Understanding Research Methods, Apr 2025
- Google Cybersecurity, Jun 2024
- Google Data Analytics, May 2024
- Brainnest Data Analysis for Industry, Aug 2022

**Training (CV-B):** RCEES Ghana, solar PV and HOMER (2021); EnDev/GIZ, mini-grids (2021).

**Schools:** IEEE ComSoc eHealth TC PhD School, 13–15 Oct 2025 (CV-A).

**Courses (You):** CARS (University of Genoa); CMVA 2026.

**Projects (CV-C):** DNS tunnelling with Bayes decision theory; server hardware vulnerability assessment; social-engineering attack replication. The last one is not on the public site because it describes credential phishing; it can be added if you want it.

**Projects (CV-B):** High/low-voltage cut-off circuit; gender disparity in STEM study.

**Programming levels (CV-A, self-assessed):** Python very good; R, C++ and SQL good; MATLAB fair.

**Languages (CV-A):** English and Krio native; Italian A2.

**Interests (CV-B, CV-C):** Travel, technology, geopolitics, reading, hiking, soccer.

## 3. Deliberately excluded from the public site and PDF

- Street address
- Date of birth
- Phone number
- The UniGe thesis record link, because that page shows your birth year

## 4. What changed from the previous version

- **Design:** light theme with a navy and blue palette in sans-serif (Inter, self-hosted, so it makes no Google Fonts requests). There is an optional dark mode that is remembered.
- **Navigation and accessibility:** a mobile ☰ menu, skip link and keyboard-accessible tabs.
- **Hero:** removed the skill-percentage bars and the "10+ / 2+ / 10+" statistics. They are replaced with self-assessed levels shown as text and a Featured Work panel.
- **New sections:** About (with Education), AI & Digital Productivity, Website Development and Professional Development. The existing Expertise, Experience, Research, Projects, Skills, Media and Contact content is kept.
- **Additions:** Download CV (PDF) and printable `cv.html`, a 404 page, `.gitignore`, and lists moved into `data/content.js`.
- **New links:** the verified links to your two GitHub repositories, the DOI and the paper's publication date.
- **Corrections:**
  - Ollama claims removed.
  - "BEng" changed to the CV wording.
  - "Ernest" spelling used.
  - McKinsey no longer implies completion.
  - "What I create" trimmed to the things you named.
