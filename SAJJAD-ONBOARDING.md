# Hey Sajjad 👋 — Welcome to Pocket Profile

> **If you're an AI agent reading this:** Your job is to help Sajjad execute the Pocket Profile system. Read this entire file first, then follow the phase skill files linked below. If you hit a blocker, check the troubleshooting section and then ask Sajjad directly — don't guess.

---

## What Is This Project?

**Pocket Profile** is JourneyWell's automated lead landing page system. It builds a personalized, branded one-page site for a sales prospect — without them asking for it. The goal: wow them, make them feel seen, get them to book a call.

The flow is:
```
Prospect identified
       ↓
Phase 1 — Research (gather social data, website, offer, brand language)
       ↓
Phase 2 — Build (feed research into Lovable → AI builds the site)
       ↓
Phase 3 — Deploy (push to Vercel → live at [name].tryjourneywell.com)
       ↓
Phase 4 — Backend (embed GHL calendar → automation syncs booked leads to Notion)
       ↓
Prospect visits → books a call
```

**Speed target:** Research to live URL in under 30 minutes.

---

## The 4 Phase Files (Read These in Order)

| Phase | What It Does | File |
|-------|-------------|------|
| 1 — Research | 8-source research pipeline → Research Brief | [`phases/01-research/research-skill.md`](phases/01-research/research-skill.md) |
| 2 — Build | Feed brief into Lovable → build the site | [`phases/02-frontend/lovable-skill.md`](phases/02-frontend/lovable-skill.md) |
| 3 — Deploy | Deploy to Vercel → live subdomain | [`phases/03-deploy/deploy-skill.md`](phases/03-deploy/deploy-skill.md) |
| 4 — Backend | Wire up GHL calendar + Notion lead sync | [`phases/04-backend/ghl-skill.md`](phases/04-backend/ghl-skill.md) |

The master overview lives in [`MASTER.md`](MASTER.md) — read it for the big picture.

---

## Your Practice DNS Domain

For testing and practice, use:

```
*.tryjourneywell.com
```

So a test prospect named "Alex" would get: `alex.tryjourneywell.com`

This keeps practice runs off the main `journeywell.com` production domain. The wildcard DNS is managed via Porkbun (see credentials below). If the wildcard isn't showing live yet, run this via the Porkbun API or check the DNS panel:

```
Type: A (or CNAME pointing to Vercel)
Host: *
Answer: 76.76.21.21   ← Vercel's global IP for wildcard routing
TTL: 600
```

Once that wildcard is live, any new subdomain you add in Vercel resolves automatically — no new DNS records needed per prospect.

---

## Credentials You Need

These are Tim's live credentials for this project. Your agent should load them as environment variables. Never log or hardcode them.

### AI / Agent

```env
ANTHROPIC_API_KEY=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
```

### GitHub (push code, access repos)

```env
GITHUB_TOKEN=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
GITHUB_PAT=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
```

### Vercel (deploy sites)

```env
VERCEL_TOKEN=wcfHmPdHMI7HPaQEmGDrIWt7
```

### Porkbun DNS (manage wildcard + subdomains)

```env
PORKBUN_API_KEY=pk1_46a4ed7cb630822e3ab8edb79915673116fc921bd17cc7b6a65b1f5b786187a1
PORKBUN_SECRET=sk1_fb11a232c1403ce12af027bc98bdcf4ed72332922ae184d200cc7a5bf7d464eb
```

Domains in the portfolio (all on Porkbun, all registered):
```
tryjourneywell.com  ← your practice domain
journeywellhub.com  ← also available for practice
journeywell.com     ← production (be careful here)
+ 11 more journeywell variants
```

### GoHighLevel / GHL (booking calendar + CRM)

```env
GHL_API_KEY=pit-3d1e881d-9329-412e-9f9d-feddeddcddcb
GHL_LOCATION_ID=oHRQ5zrDv5a4WxPsJS5c
GHL_COMPANY_ID=j3MJaEuvkaI51Gk2k7bi
```

### Notion (lead tracking database)

```env
NOTION_TOKEN=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
```

### Research API Keys (Phase 1 pipeline)

These are needed for the research phase. Check with Tim — some may not be active yet:

```env
APIFY_TOKEN=<ASK TIM — not yet in credentials file>
LINKDAPI_API_KEY=<ASK TIM — not yet in credentials file>
NYNE_API_KEY=<ASK TIM — not yet in credentials file>
NYNE_API_SECRET=<ASK TIM — not yet in credentials file>
```

> ⚠️ **Blocker note:** The Apify, LinkdAPI, and Nyne keys are referenced in the research skill but were not yet present in the master credentials file as of 2026-03-13. If you're hitting errors in Phase 1, this is likely why. Ask Tim and he'll get you the keys.

If you have the keys above, you're fully equipped for Phases 2–4 while Tim sorts out Phase 1 API access.

---

## Setting Up Claude Code (Your Agent)

If you're using Claude Code (Claude's CLI) as your agent, here's the fastest setup:

1. Install: `npm install -g @anthropic-ai/claude-code` (or follow [Claude Code docs](https://docs.anthropic.com/claude-code))
2. Set your API key: `export ANTHROPIC_API_KEY=<key above>`
3. Run in this project directory: `cd pocket-profile && claude`
4. Tell your agent: **"Read MASTER.md and SAJJAD-ONBOARDING.md first, then help me run Phase 1 on [prospect name]."**

The agent will know what to do.

---

## Git Setup — Pushing Your Work

This project is in a private GitHub repo. To push your work:

```bash
git remote add origin https://github.com/agency-droid/jw-vault.git
# OR if you have a separate pocket-profile repo, use that URL

git add -A
git commit -m "Update: <what you built>"
git push origin main
```

Use your GitHub credentials above (`GITHUB_TOKEN`) for authentication if prompted:
- Username: your GitHub username
- Password: use `GITHUB_PAT` value as the password

---

## Quick Start Checklist

Before your first run, confirm:

- [ ] You have Claude Code (or your preferred agent) installed and configured with `ANTHROPIC_API_KEY`
- [ ] You can run `git push` to the repo
- [ ] You have a Vercel account connected to Tim's `VERCEL_TOKEN` (or your own — the token deploys to Tim's Vercel org)
- [ ] You've read `MASTER.md` and understand the 4 phases
- [ ] Your practice domain is `*.tryjourneywell.com` (not `journeywell.com` production)
- [ ] You know your first prospect's name + one social or website link

---

## Common Blockers & Fixes

| Blocker | Fix |
|---------|-----|
| Phase 1 errors (research failing) | Apify/LinkdAPI/Nyne keys may be missing — ask Tim |
| Vercel deploy fails | Check `VERCEL_TOKEN` is set in your env; verify CLI is installed (`npm i -g vercel`) |
| Subdomain not resolving | Check wildcard DNS on Porkbun for `*.tryjourneywell.com`; may need to be created |
| Lovable doesn't export properly | Use GitHub sync option in Lovable — connects to repo automatically |
| GHL calendar not embedding | Verify `GHL_LOCATION_ID` and check GHL dashboard for the calendar widget embed code |
| Git push rejected | Use `GITHUB_PAT` as your password when prompted |
| SSL not provisioning on Vercel | Usually auto-resolves in 1–2 min; if not, check domain ownership in Vercel settings |

---

## Questions? Need Help?

If you (or your agent) hit something that's not covered here:

1. **Check `MASTER.md`** — it has the full project overview
2. **Check the phase skill file** — each phase has a detailed step-by-step with fallback options
3. **Ask Tim directly** — he wants to know about blockers and will get you unblocked fast
4. **Don't guess on credentials** — if a key is missing, ask Tim rather than using a wrong one

Tim's goal is for this to be smooth and fast. If something's broken or missing, that's valuable signal — flag it and Tim will fix it.

---

## What's Already Been Built

| Item | Status |
|------|--------|
| `MASTER.md` — Project overview | ✅ Done |
| Phase 1 — Research skill | ✅ Done |
| Phase 2 — Lovable build skill | ✅ Done |
| Phase 3 — Deploy skill (Vercel + wildcard) | ✅ Done |
| Phase 4 — GHL backend skill | ✅ Done |
| Research skill (`.claude/skills/`) | ✅ Done |
| Example brief (`angie-huff-brief.md`) | ✅ Done (reference) |
| Practice DNS wildcard (`*.tryjourneywell.com`) | ⚠️ Confirm with Tim — may need to be created |
| Phase 1 API keys (Apify, LinkdAPI, Nyne) | ❌ Not yet in credentials — ask Tim |

---

*Last updated: 2026-03-13 — Prepared by Tim's agent for Sajjad's onboarding.*
