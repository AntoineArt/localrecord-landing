# LocalRecord landing page

Marketing site for [LocalRecord](https://github.com/AntoineArt/localrecord).

Static HTML/CSS, deployed on Vercel.

## Deploy

### Option A: npm global CLI (recommended if pnpm global is broken)

```bash
npm install -g vercel@41
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
npx vercel@41 login
npx vercel@41 --prod
```

## Fix broken `vercel` command

If you see `Cannot find module .../vercel/dist/vc.js`, your pnpm global install is corrupted. Use npm instead:

```bash
pnpm remove -g vercel   # optional cleanup
npm install -g vercel@41
hash -r
which vercel            # should NOT point under .local/share/pnpm
vercel --version
```
