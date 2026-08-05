# Tyche Ventures — Static Archive

A static HTML/CSS rebuild of the Tyche Ventures homepage, preserving the original branding, imagery, and structure from the WordPress site and the 2021 web archive. Built to be published as a GitHub Pages site.

Live WordPress site: [tycheventures.com](https://tycheventures.com)

Rebuilt from archive: https://web.archive.org/web/20211222050527/https://tycheventures.com/

## What's inside

- `src/` — React/TanStack Start source for the homepage and about page.
- `docs/` — Static export ready for GitHub Pages (`index.html`, `about.html`, `assets/style.css`, `assets/site.js`, `img/`).
- `public/img/` — Original site assets (logo, client logos, project screenshots, icons, hero banner).
- `profile/README.md` — GitHub profile readme used for the organization's public profile.

## How to publish on GitHub Pages

1. Regenerate and validate the export (see below) — publishing is only safe once `verify-docs.py` reports OK.
2. Push the repo to GitHub.
3. Go to **Settings → Pages** in the repository.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and the `/docs` folder.
6. Click **Save**. The site will be available at `https://<username>.github.io/<repository>`.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

To regenerate the static export after editing the source:

```sh
npm run build
python3 /tmp/browser/tv/export.py
python3 /tmp/browser/tv/post.py
```

This project was built with [Lovable](https://lovable.dev).

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f687bdc5-30dc-4656-b2f9-39dba8e6880c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.
