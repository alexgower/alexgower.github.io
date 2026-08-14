# alexgower.github.io

Academic website of Alex Gower — PhD student at Nokia Bell Labs & the University of Cambridge.

Built with [Jekyll](https://jekyllrb.com/) on a heavily pruned and restyled
[al-folio](https://github.com/alshedivat/al-folio) base (MIT licensed, see `LICENSE`).
Deployed to GitHub Pages by `.github/workflows/deploy.yml`, which builds the site and
publishes `_site` to the `gh-pages` branch on every push to `main`.

## Local development

```sh
bundle install          # requires Ruby 3.x and ImageMagick
bundle exec jekyll serve
# → http://localhost:4000
```

## Where things live

| What | Where |
| --- | --- |
| Homepage (hero, about, news, selected papers) | `_pages/about.md` |
| Research themes | `_pages/research.md` |
| Publications | `_bibliography/papers.bib` (add `selected={true}` for the homepage) |
| News items | `_news/*.md` |
| CV page | `_pages/cv.md` (put the PDF at `assets/pdf/cv.pdf`) |
| Blog posts | `_posts/` — the Blog nav link appears automatically once there are 2+ posts |
| Design tokens & styling | `_sass/_themes.scss`, `_sass/_custom.scss` |
