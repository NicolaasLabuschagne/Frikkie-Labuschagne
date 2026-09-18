# Frikkie Labuschagne — Actor Portfolio

A one-page portfolio website for the actor Frikkie Labuschagne, built with plain HTML, Tailwind CSS (via CDN), and vanilla JS. Structured after a hero / about / showreel / career journey / skills / credits / testimonial / contact layout.

## Structure

```
index.html         Main page
CSS/style.css       Custom styles (animations, timeline, cards)
JS/script.js        Mobile nav, scroll progress bar, timeline reveal
images/             Headshot, favicon, other photos
assets/             CV / resume PDF, downloadable files
```

## Content status

Bio, training history, and short film credits (Conviction, Discount Stripper, Home Sweet Home) are filled in with real info. Still to add:

- **Headshot**: add a photo at `images/headshot.jpg` (the hero section falls back to a placeholder box until it exists).
- **Showreel**: replace the YouTube embed URL in the Showreel section with a real reel link.
- **CV**: add a PDF at `assets/frikkie-labuschagne-cv.pdf` for the "Download CV" button.
- **Contact**: replace `booking@example.com` and the social links (Instagram, IMDb, Facebook, LinkedIn) in the Contact section with real ones.
- **Journey dates**: the career timeline years are estimated from "7 years studying acting" and "third/final year at Act Cape Town" — adjust if the real dates differ.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, enable GitHub Pages from the `main` branch (root).
3. The site will be published at `https://<username>.github.io/<repo-name>/`.
