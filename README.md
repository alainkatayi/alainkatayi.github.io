# Alain Katayi — Portfolio

Angular portfolio (FinTech / System Design), published at [alainkatayi.github.io](https://alainkatayi.github.io/).

## Develop

```bash
npm install
npm start
```

App runs on `http://localhost:4201/`.

## Build & publish (GitHub Pages)

The live site is served from the `docs/` folder on `main`.

```bash
ng build --configuration=production --base-href=/
# copy dist/my-portfolio/browser/* into docs/, keep docs/.nojekyll
git add docs
git commit -m "Update GitHub Pages build"
git push
```

Repo: https://github.com/alainkatayi/alainkatayi.github.io
