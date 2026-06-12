# LocalRecord landing page

Marketing site for [LocalRecord](https://github.com/AntoineArt/localrecord).

Static HTML/CSS, deployed on Vercel.

## Deploy

### Option A: npm global CLI (recommended if pnpm global is broken)

```bash
npm install -g vercel@latest
vercel login
vercel --prod
```

### Option B: project-local CLI

```bash
npm install
npm run login
npm run deploy
```

### Option C: no install

```bash
npx vercel@latest login
npx vercel@latest --prod
```

## Fix broken `vercel` command

If you see `Cannot find module .../vercel/dist/vc.js`, your pnpm global install is corrupted. Use npm instead:

```bash
pnpm remove -g vercel   # optional cleanup
npm install -g vercel@latest
hash -r
which vercel            # should NOT point under .local/share/pnpm
vercel --version
```

## Login note

Vercel disabled the old email/GitHub login flow in early 2026. You must use **Vercel CLI v50+** (`npm i vercel@latest`). Run plain `vercel login` (no email flag) and complete auth in your browser with the device code.
