# Phase 3 — Deploy Skill (Wildcard Subdomain)

> **Goal:** Take the Lovable site and make it live at `[prospect].journeywell.com` (or agreed wildcard domain). Output is a live public URL the prospect can visit.

---

## What You Need Before Starting

- Lovable project preview link (from Phase 2)
- Vercel account access (Tim's)
- Porkbun API access (or DNS panel access) — credentials in `credentials-master.env`
- Agreed wildcard domain (confirm with Tim — likely `journeywell.com` or `journeywellhub.com`)

---

## How the Wildcard Domain Works

Tim's domain has a wildcard DNS record:
```
*.journeywell.com → Vercel (or Netlify)
```

This means **any** subdomain automatically routes to the hosting provider. We just need to:
1. Export the Lovable site to a deployable format
2. Deploy it to Vercel
3. Tell Vercel: "serve this project at `angie.journeywell.com`"

No new domain purchases. No waiting for DNS propagation on new records (wildcard is already live).

---

## Step-by-Step

### Option A — Export from Lovable → Deploy to Vercel (Preferred)

#### Step 1 — Export Lovable Project
In Lovable:
1. Go to project settings or the export option
2. Export as a ZIP or connect to GitHub (Lovable supports GitHub sync)
3. If GitHub sync: it creates/pushes to a repo automatically

#### Step 2 — Deploy to Vercel
If using GitHub sync:
1. Go to Vercel → New Project → Import Git Repository
2. Select the Lovable-generated repo
3. Deploy with default settings (Vite/React — Lovable outputs these)

If using ZIP:
1. Unzip locally
2. Run `vercel deploy` from the project folder (Vercel CLI)
3. Or drag-and-drop the folder into Vercel dashboard

#### Step 3 — Add Custom Domain in Vercel
1. In Vercel project → Settings → Domains
2. Add: `[prospect-name].journeywell.com` (e.g., `angie.journeywell.com`)
3. Vercel will verify against the wildcard DNS — should resolve instantly
4. Wait for SSL to provision (usually < 2 minutes with wildcard cert)

#### Step 4 — Verify
Visit `https://angie.journeywell.com` — site should be live.

---

### Option B — Netlify (Fallback)

If Vercel isn't working:
1. Export Lovable project → ZIP
2. Go to Netlify → Sites → Drag-and-drop ZIP
3. In Site Settings → Domain Management → Add custom domain
4. Enter `[prospect-name].journeywell.com`
5. Same wildcard DNS points here — should work

---

### Option C — Lovable Native Hosting (Last Resort)

Lovable offers internal domain hosting (`[project].lovable.app`). This works as a quick share link but:
- Not on a JW-branded domain
- Less professional
- Use only if Vercel/Netlify is blocked

For demos where speed matters more than branding, this is acceptable temporarily.

---

## Subdomain Naming Convention

| Prospect | Subdomain |
|----------|-----------|
| Angie Thompson | `angie.journeywell.com` |
| Sajjad Khan | `sajjad.journeywell.com` |
| Multiple people with same name | `angie-b.journeywell.com` |

Keep it simple — first name only unless there's a conflict.

---

## Credentials to Look Up

In `credentials-master.env`:
- `VERCEL_TOKEN` — for Vercel CLI or API calls
- `PORKBUN_API_KEY` and `PORKBUN_SECRET_KEY` — if DNS needs manual adjustment
- `NETLIFY_*` — if using Netlify

---

## Checklist Before Phase 4

- [ ] Site is live at `https://[prospect].journeywell.com`
- [ ] SSL certificate is active (no browser warnings)
- [ ] Site loads correctly — not blank, not erroring
- [ ] URL saved and shared with Tim for review
- [ ] Lovable project link also saved (in case edits needed)
