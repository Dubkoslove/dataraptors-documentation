# Docusaurus GitHub Pages Starter

A ready-to-use Docusaurus repository for free documentation on GitHub Pages.

## 1. Create your repository

Create a new GitHub repository and upload these files.

Recommended repository names:
- `my-docs` → site URL will be `https://YOUR_GITHUB_USERNAME.github.io/my-docs/`
- `YOUR_GITHUB_USERNAME.github.io` → site URL will be `https://YOUR_GITHUB_USERNAME.github.io/`

## 2. Install dependencies

```bash
npm install
```

## 3. Run locally

```bash
npm start
```

## 4. Customize the site

Open `docusaurus.config.ts` and replace the fallback values:
- `YOUR_GITHUB_USERNAME`
- `YOUR_REPOSITORY_NAME`

You can also set these values automatically in GitHub Actions through:
- `GITHUB_OWNER`
- `GITHUB_REPO`

## 5. Deploy to GitHub Pages

This starter includes `.github/workflows/deploy.yml`.

In GitHub:
1. Push to the `main` branch.
2. Go to **Settings → Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. The workflow will build and deploy your site automatically.

## 6. Write documentation

Put your docs in the `docs/` folder.

Important starter files:
- `docs/intro.md`
- `docs/getting-started.md`
- `docs/guides/writing-docs.md`
- `docs/guides/deployment.md`
- `sidebars.ts`

## 7. Useful commands

```bash
npm start      # local dev server
npm run build  # production build
npm run serve  # serve built site locally
npm run clear  # clear Docusaurus cache
npm run typecheck
```

## Notes

- This template disables the blog to keep the repo focused on documentation.
- It supports project pages and user pages.
- The GitHub link and edit links are generated from repository settings.
