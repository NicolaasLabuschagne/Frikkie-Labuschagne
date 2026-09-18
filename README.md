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

## Customize

Search `index.html` for bracketed placeholders like `[Add your bio here]` and `[Film Title]` and replace them with real content:

- **Headshot**: add a photo at `images/headshot.jpg` (the hero section falls back to a placeholder box until it exists).
- **Bio**: edit the About section text.
- **Showreel**: replace the YouTube embed URL in the Showreel section with your own video link.
- **Journey**: update the timeline years/milestones to match your actual training and career history.
- **Credits**: fill in real Film / Television / Theatre credits.
- **Testimonial**: swap in a real quote and attribution.
- **Contact**: replace `booking@example.com` and the social links (Instagram, IMDb, Facebook, LinkedIn) with real ones.
- **CV**: add a PDF at `assets/frikkie-labuschagne-cv.pdf` for the "Download CV" button.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, enable GitHub Pages from the `main` branch (root).
3. The site will be published at `https://<username>.github.io/<repo-name>/`.
