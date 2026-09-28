# Alain Katayi — Portfolio

Angular portfolio (FinTech / System Design), live at [alainkatayi.github.io](https://alainkatayi.github.io/).

## Develop

```bash
npm install
npm start
```

Runs on `http://localhost:4201/`.

## Publish

User GitHub Pages sites are served from the **repository root**. After building, copy `dist/my-portfolio/browser/*` to the repo root (keep `.nojekyll`), then commit and push `main`.

```bash
ng build --configuration=production --base-href=/
# copy dist/my-portfolio/browser/* to repo root + .nojekyll + 404.html
git add -A
git commit --trailer "Co-authored-by: Cursor <cursoragent@cursor.com>" -m "Update site build"
git push origin main
```

Repo: https://github.com/alainkatayi/alainkatayi.github.io
