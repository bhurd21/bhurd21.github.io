# Deployment

This site is a [Jekyll](https://jekyllrb.com/) site hosted on **GitHub Pages**, built and deployed automatically by GitHub Actions.

- **Repo:** https://github.com/bhurd21/bhurd21.github.io
- **Workflow:** [`.github/workflows/jekyll.yml`](../.github/workflows/jekyll.yml)
- **Trigger:** every push to `main` (also manually via the Actions tab → "Run workflow")

## How it works

There is **no manual deploy step**. On each push to `main`, the workflow:

1. Checks out the repo
2. Sets up Ruby + Node and installs dependencies (`bundle`, `npm ci`)
3. Builds the site: `JEKYLL_ENV=production bundle exec jekyll build`
4. Uploads the generated `_site/` as a Pages artifact and deploys it

The live site updates ~1–2 minutes after the run goes green. You do **not** commit the
built `_site/` directory — it's gitignored and rebuilt fresh in CI from source.

## Publishing a change

```bash
git add -A
git commit -m "your message"
git push                 # this is all that's needed — CI builds + deploys
```

Then watch the run:

```bash
gh run watch                          # follow the latest run live
gh run list --workflow=jekyll.yml     # recent runs + status
gh run view --log-failed              # logs for the last failed run
```

Or check the **Actions** tab on GitHub.

## Local development

```bash
npm install                           # one-time: Node deps (Tailwind/PostCSS)
bundle install                        # one-time: Ruby/Jekyll deps
bundle exec jekyll serve              # local server at http://localhost:4000, live reload
bundle exec jekyll build              # one-off build into _site/
JEKYLL_ENV=production bundle exec jekyll build   # mirror the production build
```

## Project layout

| Path                      | Purpose                                      |
|---------------------------|----------------------------------------------|
| `_config.yml`             | Jekyll site config                           |
| `_layouts/`               | Page layout templates                        |
| `_includes/`              | Reusable partials (e.g. `header.html`)       |
| `_data/`                  | Data files consumed by templates             |
| `_projects/`              | Project collection content                   |
| `pages/`                  | Standalone pages                             |
| `index.html`              | Home page                                    |
| `assets/`                 | Static assets (CSS, images, PDFs)            |
| `tailwind.config.js`, `postcss.config.js` | Tailwind/PostCSS build config |
| `_site/`                  | Build output (gitignored, do not edit)       |
</content>
</invoke>
