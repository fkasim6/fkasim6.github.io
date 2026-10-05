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

## Edit project content

projects.js contains the detail-view titles, descriptions, tags, and image paths. Edit the corresponding project card in index.html to keep its short preview consistent.

This version uses blended color profiles and decorative motifs, with no Stand character illustrations. Section names remain Star Platinum, Gold Experience, Silver Chariot, and Weather Report.

## Files

- index.html: page content and project cards
- style.css: responsive layout, blended backgrounds, and visual effects
- projects.js: editable project detail data
- contact.js: your email, LinkedIn URL, and optional phone number
- script.js: navigation effects, weather controls, and project windows
- assets/projects/: your real project photos
- assets/stand-arrow.png: supplied ornate Stand Arrow asset

## Preview

Double-click index.html to view locally. Everything uses relative paths so it works on a GitHub Pages repository URL as well.

## Artwork

The arrow asset was adapted from your supplied reference. The homepage uses abstract CSS artwork. JoJo's Bizarre Adventure and its characters belong to their respective creators.

## Validation

JavaScript syntax and local asset references were checked. Rendered browser layout was not verified in this environment.

## Add your contacts

Edit contact.js and enter your email and full LinkedIn URL between the empty quotes. You can leave phone blank. Empty email and LinkedIn fields display honest coming-soon placeholders; a blank phone field stays hidden.

## This update

Includes the larger labels from the previous update, a fifth Contact arrow, blended Contact section, and abstract animated motifs: stars, leaves, silver streaks, drifting clouds, and soft signal rings. Motion Off and reduced-motion preferences disable animation.

The homepage character image has been removed. Delete the old assets/jojo-cast.webp file in GitHub if you want to clean it up; it is no longer referenced. The project dialog no longer displays a note about missing external links.

## Updating your existing GitHub repository

Upload index.html, style.css, script.js, projects.js, contact.js, and README.md to the repository root. Keep the existing assets folder and any real project photos you added. The included assets folder contains only the ornate arrow and photo instructions; it will not overwrite your real project photos.

Stand names remain as section titles; no Stand character illustrations are used. All animated effects are CSS shapes.
