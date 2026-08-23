# SlackQuant Research

Public research portfolio for SlackQuant Research.

The site presents practitioner-oriented investment research and academic/technical research, with links to public papers, evidence, code, replication materials, and research tools where available.

## Current public research

- **Diversify the Decisions, Not Just the Assets**
- **When Protection Works but the Portfolio Still Lags**
- **The Decision Value of Price and Macro Information**
- **Beyond Average Accuracy**

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run build
```

The site uses Next.js static export. Production output is generated in `out/`.

## GitHub Pages

Deployment is handled by `.github/workflows/deploy-pages.yml`.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. A push to `main` then runs typecheck, builds the static site, and deploys it to GitHub Pages.
