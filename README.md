# Faysal's Bizarre Portfolio

A static website: HTML, CSS, and JavaScript. No installation or build required.

## Publish on GitHub Pages

1. Extract this ZIP.
2. Create a public GitHub repository, or open your existing portfolio repository.
3. Upload the CONTENTS of this folder. index.html must be at the repository root, alongside style.css, script.js, projects.js and assets/. Do not upload just the ZIP.
4. In the repository, open Settings > Pages.
5. Under Build and deployment, choose Deploy from a branch.
6. Select main and /(root), then Save.
7. GitHub will show the site link when publishing finishes.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Add real project images

Put these files in assets/projects/:

- solar.jpg
- combat.jpg
- bench.jpg

Use those exact lowercase names. Your image will show both on its project card and in the expanded project view. Until the image is added, the card shows a concept illustration and the expanded view shows an image placeholder. Nothing is presented as a real project photograph yet.

For PNG or other filenames, edit the image path in projects.js AND the matching project-photo src in index.html.

## Edit project content and Stand pairings

projects.js contains the detail-view titles, descriptions, tags, image paths, and Stand pairings. Edit the corresponding project card in index.html to keep its short preview consistent.

Current pairings:
- Solar energy system: Gold Experience
- Combat robot: Silver Chariot
- Experimental test bench: Crazy Diamond

Section illustrations: Star Platinum (About), Gold Experience (Projects), Silver Chariot (Experience), Weather Report (Skills).

## Files

- index.html: page content and project cards
- style.css: responsive layout, blended backgrounds, and visual effects
- projects.js: editable project detail data
- script.js: navigation effects, weather controls, and project windows
- assets/stands/: generated Stand illustrations
- assets/projects/: your real project photos
- assets/jojo-cast.webp: supplied reference artwork used on the opening screen
- assets/stand-arrow.png: supplied ornate Stand Arrow asset

## Preview

Double-click index.html to view locally. Everything uses relative paths so it works on a GitHub Pages repository URL as well.

## Artwork

The Stand illustrations are AI-generated interpretations, not official character renders. The cast and arrow assets were adapted from your supplied references. JoJo's Bizarre Adventure and its characters belong to their respective creators.

## Validation

JavaScript syntax and local asset references were checked. Rendered browser layout was not verified in this environment.
