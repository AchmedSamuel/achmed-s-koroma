/* =====================================================================
   SITE CONTENT — edit this file to add or change list-style content.
   ---------------------------------------------------------------------
   • Each list is an array of entries inside [ ... ].
   • To ADD an entry: copy one whole { ... } block (including the comma
     after it), paste it where you want it, and change the text.
   • Keep the quotes "..." around text. If your text contains a double
     quote, use ’ or “ ” instead.
   • Lines starting with // are comments and are ignored.
   • Order on the page = order in this file.
   • After editing: Commit on GitHub, wait ~1 minute, then reload the
     site with Ctrl + Shift + R.
   ===================================================================== */

window.SITE_CONTENT = {

  /* ---------------- PUBLICATIONS (Research section + CV) ---------------- */
  publications: [
    {
      type: "Journal Article",
      year: 2025,
      title: "Uniform Manifold Approximation and Projection Filtering and Explainable Artificial Intelligence to Detect Adversarial Machine Learning",
      authors: "Koroma, A. S.; Narteni, S.; Cambiaso, E.; Mongelli, M.",
      venue: "Information (MDPI), 16(8), 647 · Published 29 July 2025 · Open access",
      summary: "Combines UMAP-based filtering with explainable AI to detect adversarial examples targeting machine-learning models.",
      links: [
        { label: "Read the article", url: "https://www.mdpi.com/2078-2489/16/8/647" },
        { label: "DOI 10.3390/info16080647", url: "https://doi.org/10.3390/info16080647" },
        { label: "Code on GitHub", url: "https://github.com/AchmedSamuel/UMAP-adversarial-image-detection" }
      ]
    },
  ],

  /* ---------------- RESEARCH HIGHLIGHTS & CASE STUDIES ------------------ */
  research: [
    {
      label: "MSc Thesis · 2024",
      title: "Adversarial Machine Learning Detection in Images via Uniform Manifold Approximation and Projection",
      summary: "Studies how adversarial attacks (FGSM, Carlini–Wagner, DeepFool) change the classification and clustering of MNIST and CIFAR-10 images, and how mixing legitimate and malicious samples in UMAP affects their representation and error rate — evaluated with decision trees, bagging, random forests and majority voting.",
      meta: "University of Genoa · MSc Engineering Technology for Strategy and Security",
      links: [ { label: "Notebooks & data on GitHub", url: "https://github.com/AchmedSamuel/UMAP-adversarial-image-detection" } ]
    },
    {
      label: "Case Study · CNR-IEIIT · 2024–2025",
      title: "Explainable AI and Error Control for Safe Robot Navigation",
      summary: "Rule-based, explainable models (decision trees, SkopeRules, Anchors) for robotic mobility scenarios of increasing collision difficulty, simulated with the Navground simulator, within the REXASI-PRO project.",
      meta: "Research Fellow · NextGenerationEU RAISE / REXASI-PRO",
      links: [ { label: "Related project code (CNR team)", url: "https://github.com/saranrt95/ExplainableSafetyRegions" } ]
    },
    {
      label: "Case Study · Biomedical Machine Learning",
      title: "Interpretable Models for Clinical Datasets",
      summary: "An interpretable machine-learning model that predicts mortality risk on a clinical heart-failure dataset to support early diagnosis, and machine learning with explainable AI on an amyotrophic lateral sclerosis (ALS) dataset.",
      meta: "CNR-IEIIT · Research Intern (2023–2024) and Research Fellow (2024–2025)",
      links: []
    },
    {
      label: "Current Research Interest",
      title: "Egocentric Perception and Visual Attention for Self-Driving Chemistry Labs",
      summary: "Using wearable, first-person video and gaze cues to understand how chemists work at the bench, so that automated synthesis platforms can learn from, and assist, human experimenters.",
      meta: "PhD research · Computational Models of Visual Attention (CMVA 2026)",
      links: []
    },
  ],

  /* ---------------- PROJECTS ---------------------------------------------
     build: how the code was produced — "Written independently",
            "Adapted template" or "AI-assisted coding" (leave "" to hide).
     status: optional, e.g. "In development".                              */
  projects: [
    {
      kind: "LLM Platform",
      title: "MACONDO — Literature Mining for Nanomaterials",
      summary: "Materials and Chemical Knowledge for Nanomaterials Exploration: a multi-user web platform that reads scientific PDFs with LLMs and extracts a 45-field structured database, with trend analytics and an ML-ready export. Validated against a curated gold set.",
      stack: ["Azure OpenAI", "Streamlit", "Python", "OCR"],
      build: "AI-assisted coding",
      status: "",
      links: []
    },
    {
      kind: "REST API",
      title: "NanoVision — AI Vision Service for Materials Labs",
      summary: "A robotics-ready FastAPI service that captions lab sample images with Gemini Vision, detects objects locally with YOLO11n, and returns cautious research-action suggestions. Final project for Cloud Architectures & RESTful Services for Robotics.",
      stack: ["FastAPI", "Gemini Vision", "YOLO11n", "Python"],
      build: "AI-assisted coding",
      status: "Prototype",
      links: [ { label: "GitHub", url: "https://github.com/AchmedSamuel/NanoVision" } ]
    },
    {
      kind: "Data Science",
      title: "Structure–Property Correlation Pipeline",
      summary: "Multi-layer statistical analysis of 90+ organic spacer cations in 2D perovskites: correlation with FDR control, partial correlation, regularised regression with VIF diagnostics, PCA/PLS and permutation tests.",
      stack: ["RDKit", "COSMO-RS", "scikit-learn"],
      build: "",
      status: "",
      links: []
    },
    {
      kind: "Full-Stack",
      title: "Laboratory Data Management System",
      summary: "A lab information management system for chemicals, consumables, equipment, users and reactions, with role-based access control and token authentication.",
      stack: ["React", "FastAPI", "SQLAlchemy", "JWT"],
      build: "AI-assisted coding",
      status: "In development",
      links: []
    },
    {
      kind: "Computer Vision",
      title: "Object Detection for Lab Video",
      summary: "Reproducing the open-source HeinSight YOLO-based pipeline that detects vials and sample states (e.g. turbidity, phase separation) in lab video, as groundwork for camera feedback in automated synthesis.",
      stack: ["YOLOv5", "OpenCV", "PyTorch"],
      build: "",
      status: "In progress",
      links: []
    },
    {
      kind: "Security · ML",
      title: "DNS Tunnelling Detection with Bayes Decision Theory",
      summary: "Machine- and deep-learning analysis of a DNS-tunnelling dataset using Bayes decision theory and feature extraction, visualising the attack’s impact in 2D and 3D.",
      stack: ["Python", "Machine Learning", "Network Security"],
      build: "",
      status: "",
      links: []
    },
    {
      kind: "Security",
      title: "Server Hardware Vulnerability Assessment",
      summary: "Risk assessment identifying the potential threat sources and threat events that could negatively affect server hardware.",
      stack: ["Risk Assessment", "Threat Modelling"],
      build: "",
      status: "",
      links: []
    },
    {
      kind: "Research Study",
      title: "Gender Disparity in STEM Studies",
      summary: "Collected, analysed and interpreted data on gender disparity within the STEM department of the University of Sierra Leone.",
      stack: ["SPSS", "Survey Data"],
      build: "",
      status: "",
      links: []
    },
    {
      kind: "Hardware Design",
      title: "High/Low-Voltage Cut-off with Delay & Alarm",
      summary: "A standalone protection circuit that disconnects home appliances from the mains when it senses over- or under-voltage, with a built-in delay and alarm.",
      stack: ["Circuit Design", "Electronics"],
      build: "",
      status: "",
      links: []
    },
  ],

  /* ---------------- PROFESSIONAL DEVELOPMENT -----------------------------
     group: "Programmes", "Certificates", "Technical Training" or
            "Schools & Coursework" (new group names create new headings).
     date:  leave "" if not confirmed.                                     */
  development: [
    // McKinsey: shown as "Participant" until you confirm dates and completion.
    // When confirmed, change status to "Completed" and fill in date, e.g. "2025".
    { group: "Programmes",   name: "McKinsey Forward Program", issuer: "McKinsey.org", date: "", status: "Participant" },

    { group: "Certificates", name: "Google Project Management Professional Certificate", issuer: "Coursera", date: "Oct 2025", status: "" },
    { group: "Certificates", name: "Deep Learning with Keras and TensorFlow", issuer: "Coursera", date: "Jul 2025", status: "" },
    { group: "Certificates", name: "Get into Tech", issuer: "INCO Academy", date: "Jun 2025", status: "" },
    { group: "Certificates", name: "Green Digital Skills", issuer: "INCO Academy / Coursera", date: "May 2025", status: "" },
    { group: "Certificates", name: "Understanding Research Methods", issuer: "University of London / Coursera", date: "Apr 2025", status: "" },
    { group: "Certificates", name: "Google Cybersecurity Professional Certificate", issuer: "INCO Academy / Coursera", date: "Jun 2024", status: "" },
    { group: "Certificates", name: "Google Data Analytics Professional Certificate", issuer: "INCO Academy / Coursera", date: "May 2024", status: "" },
    { group: "Certificates", name: "Data Analysis for Industry", issuer: "Brainnest (Germany)", date: "Aug 2022", status: "" },

    { group: "Technical Training", name: "Design and Installation of Solar PV Systems; Energy Management (HOMER)", issuer: "Regional Centre for Energy and Environmental Sustainability (RCEES), Ghana", date: "2021", status: "" },
    { group: "Technical Training", name: "Special Technical Training: Mini-grids, Lithium Batteries and Hybrid Systems", issuer: "Energising Development (EnDev) Mano River & GIZ", date: "2021", status: "" },

    { group: "Schools & Coursework", name: "IEEE ComSoc eHealth Technical Committee PhD School", issuer: "IEEE Communications Society", date: "13–15 Oct 2025", status: "" },
    { group: "Schools & Coursework", name: "Computational Models of Visual Attention (CMVA 2026)", issuer: "PhD course", date: "2026", status: "In progress" },
    { group: "Schools & Coursework", name: "Cloud Architectures & RESTful Services for Robotics", issuer: "University of Genoa · PhD course", date: "", status: "" },
  ],

  /* ---------------- CREATIVE WORK (Design & Media section) --------------
     videos:  YouTube video IDs (the code after /shorts/ or watch?v=).
     gallery: put image files in assets/gallery/ and list them here.
              Portrait images (4:5, e.g. 1080×1350, under 300 KB) look best. */
  videos: [
    { id: "XAk6QneaFR4", title: "How God prepares you before the promotion come", label: "Featured Short" },
  ],

  gallery: [
    // Example — remove the two slashes at the start of the line to use it:
    // { src: "assets/gallery/design-1.jpg", caption: "Event flyer (Canva)", alt: "Event flyer designed in Canva by Achmed Samuel Koroma" },
  ],
};
