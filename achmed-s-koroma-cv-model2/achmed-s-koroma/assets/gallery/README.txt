DESIGN GALLERY — how to add your flyers, thumbnails and images

1. Upload your image files into this folder (assets/gallery/).
   - Portrait images (4:5, e.g. 1080 x 1350 px) look best.
   - Keep each file under about 300 KB (export as JPG at ~80% quality,
     or compress at https://squoosh.app).
   - Use simple file names: lowercase, no spaces, e.g. event-flyer-2026.jpg

2. Open data/content.js and add one line per image inside  gallery: [ ... ]

   { src: "assets/gallery/event-flyer-2026.jpg", caption: "Event flyer (Canva)", alt: "Event flyer designed in Canva by Achmed Samuel Koroma" },

   - caption = short label shown under the image
   - alt     = description for screen readers and search engines

3. Commit. The gallery appears automatically once it has at least one image.
   Only add your own genuine work.
