# Pocket Profile — Automated Lead Landing Page System

> **For agents:** Read this file first. It maps the entire project — every phase, every skill, every tool, every API. Then go to the specific phase skill file for step-by-step execution.

---

## What This Is

Pocket Profile is JourneyWell's system for building a personalized, branded landing page for a prospect in under 30 minutes — without the prospect asking for it. The goal: wow them, make them feel seen, and get them to book a call on the spot.

The site is a **sales tool for JourneyWell first.** It looks like a gift to the prospect ("here's your free website"), but it's really a funnel — built to convert them into a booked call.

If a prospect loves it and wants to keep it, great. We can make it theirs. But the primary KPI is: **did they book a call?**

JourneyWell is a **content production and marketing company** that helps professionals (financial advisors, coaches, consultants, local businesses) grow through content. Services span: content strategy, offer development, brand clarity, social media production, website, CRM, ads management, and full publishing. The Pocket Profile is the foot in the door.

---

## Business Flow

```
Camille identifies prospect
        ↓
Phase 1 — Research (8-skill pipeline → Research Brief)
        ↓
Phase 2 — Front-End Build (brief + template → Lovable builds site)
        ↓
Phase 3 — Deploy (Vercel + JW wildcard subdomain → e.g. angie.journeywell.com)
        ↓
Prospect sees it → books call via embedded GHL calendar
        ↓
GHL tags them → automation syncs to Notion lead tracker
```

**Speed target:** Research to live site in under 30 minutes.

---

## The 4 Phases

| # | Phase | What Happens | Skill File |
|---|-------|-------------|------------|
| 1 | **Research** | 8-skill pipeline gathers everything about the prospect — social accounts, posts, follower counts, posting frequency, company offer, brand language. Outputs a filled Research Brief. | [phases/01-research/research-skill.md](phases/01-research/research-skill.md) |
| 2 | **Front-End Build** | Feed research brief + site prompt template into Lovable. Let it build the site. Tweak until it's right. | [phases/02-frontend/lovable-skill.md](phases/02-frontend/lovable-skill.md) |
| 3 | **Deploy** | Push to Vercel/Netlify. Connect to JourneyWell wildcard subdomain. Site goes live at `[prospect].journeywell.com`. | [phases/03-deploy/deploy-skill.md](phases/03-deploy/deploy-skill.md) |
| 4 | **Back-End / GHL** | Embed GHL calendar + intake form into the site. Set up GHL automation to tag lead and sync to Notion. | [phases/04-backend/ghl-skill.md](phases/04-backend/ghl-skill.md) |

---

## Key Tools

| Tool | Role | Notes |
|------|------|-------|
| **Lovable** | Front-end builder (primary) | AI-powered site builder — paste the site prompt and it builds |
| **Cursor** | Front-end builder (fallback/advanced) | More control, better for custom domain logic |
| **Vercel** | Hosting + wildcard subdomain routing | Primary hosting target |
| **Netlify** | Hosting alternative | Fallback to Vercel |
| **Porkbun** | Domain registrar | Tim has 14+ domains here |
| **Go High Level (GHL)** | Calendar, intake form, CRM, automations | Calendar embed + form goes inside the site |
| **Notion** | Lead tracking database | GHL automation pushes booked leads here |

---

## Wildcard Domain Strategy

Tim has JourneyWell domains with a **wildcard subdomain** setup. Every new prospect site gets a unique subdomain — no new domain purchases needed.

- Pattern: `[prospect-name].journeywell.com` (or `journeywellhub.com` — TBD)
- How it works: DNS wildcard (`*.journeywell.com`) points to Vercel/Netlify. Each deploy gets assigned a subdomain.
- Result: `angie.journeywell.com`, `sajjad.journeywell.com`, etc. — instantly live.

Confirm exact domain to use with Tim before first deploy.

---

## Credentials

All API keys in `/Users/tim/Downloads/Development/tim-master/credentials-master.env`

Look for:
- `APIFY_TOKEN` — Apify social media scraping
- `LINKDAPI_API_KEY` — LinkedIn data
- `NYNE_API_KEY` + `NYNE_API_SECRET` — Person enrichment
- `BRIGHTDATA_*` — Proxy/bypass scraping
- `GHL_*` — Go High Level API keys
- `VERCEL_*` — Vercel token
- `PORKBUN_*` — Porkbun API key (domain management)
- `NOTION_*` — Notion integration token

**Never hardcode keys. Always read from credentials-master.env.**

---

## Templates

| Template | Use |
|----------|-----|
| [templates/research-brief-template.md](templates/research-brief-template.md) | Fill this out for each new prospect during Phase 1 |
| [templates/site-prompt-template.md](templates/site-prompt-template.md) | The Lovable build prompt — paste research brief into this, send to Lovable |

---

## How Agents Should Use This Folder

1. Read this file (`MASTER.md`) first — understand the whole system
2. Identify which phase you're executing
3. Open that phase's skill file — it has step-by-step agent instructions
4. For Phase 1 (Research), invoke the master orchestrator skill: `.claude/skills/pocket-profile-research-skill.md`
5. For new prospects, briefs are saved to: `phases/01-research/briefs/[name]-brief.md`
6. After your session, update the **Status** and **Changelog** sections below

---

## Status

| Phase | Status |
|-------|--------|
| Phase 1 — Research | **Built & Ready** — 8-skill orchestrated pipeline installed. Not yet tested in production. |
| Phase 2 — Front-End Build | Skill written, not yet tested in production |
| Phase 3 — Deploy | Skill written, not yet tested in production |
| Phase 4 — Back-End / GHL | Skill written, not yet tested in production |

**First live test:** Not yet run — research pipeline is built and ready for first prospect.

---

## Phase 1 — Research Pipeline (Full Documentation)

### Overview

The research phase uses a tiered 8-skill pipeline. All skills live in `.claude/skills/`. The master orchestrator (`pocket-profile-research-skill.md`) coordinates all of them automatically.

**To run research on a prospect:**
Give the agent: prospect name + any known links (website, Instagram, LinkedIn, company name, location).
The orchestrator handles everything and outputs a completed Research Brief.

**Brief is saved to:** `phases/01-research/briefs/[prospect-name]-brief.md`

---

### Master Orchestrator

#### `pocket-profile-research-skill.md`
**What it does:** Coordinates the entire research pipeline. Runs skills in the right order, avoids redundant API calls, and compiles all findings into the Research Brief template.

**How to invoke:** Reference this skill file and provide prospect info. The skill handles the rest.

**Tier logic:**
- Tier 1 always runs first (free/fast)
- Tier 2 runs only for platforms confirmed to exist in Tier 1 (no wasted API calls)
- Tier 3 runs only if Tier 1/2 is blocked or insufficient

**Output:** Completed `[name]-brief.md` with identity, offer, all social platforms, content analysis, brand language, gaps, and recommended Pocket Profile angle.

---

### Tier 1 Skills — Always Run (Free / Fast)

#### `investigation-skill.md`
**Source:** danielmiessler (Personal AI Infrastructure, 9,791 stars)
**What it does:** OSINT sweep — finds everything publicly available about a person or company. The first step for every research run.

**What it pulls:**
- All social media accounts (Instagram, LinkedIn, TikTok, YouTube, Facebook, X/Twitter, Pinterest, Threads, etc.)
- Which platforms the prospect IS and ISN'T on
- Website(s), blog, podcast presence
- Company description and niche from public records
- Press mentions, directories, review sites
- Domain lookup, entity lookup

**When to use:** Always. Run this first on every prospect before anything else.

**Input:** Name + company name + location (if known)
**Output:** Full map of where the prospect exists online, their handles, and basic company context

**Sub-skills it routes to:**
- `OSINT/SKILL.md` — company intel, due diligence, entity lookup
- `PrivateInvestigator/SKILL.md` — people finding, social search, public records

---

#### `enrich-lead-skill.md` (Nyne Enrichment)
**Source:** openclaw/skills — Nyne API
**What it does:** Person enrichment — drop a name, LinkedIn URL, or email and get a full contact card plus social profiles.

**What it pulls:**
- Full identity: display name, bio, location
- Contact info: work email, personal email, phone numbers
- All social profiles with follower counts (LinkedIn, Twitter/X, GitHub, Instagram)
- Work history: all organizations, titles, dates, current employer
- Education: schools, degrees, fields, dates
- Newsfeed (optional add-on): recent posts with engagement metrics (likes, comments, shares)

**API:** Nyne Enrichment API (async — submits request, polls for result)
**Keys needed:** `NYNE_API_KEY` + `NYNE_API_SECRET`
**Cost:** ~3 credits per person (lite mode); more for full + newsfeed

**When to use:** Tier 1 — run immediately after investigation skill, in parallel with website scrape.

**Input:** Name + company (or LinkedIn URL or email)
**Output:** Full contact card, social profile links with follower counts, work history

---

#### WebFetch (Built-in)
**What it does:** Fetches and reads the content of any website. Used to scrape the prospect's website directly.

**What it pulls:**
- Homepage headline, subheadline, hero copy
- About page content — their story, credentials, origin
- Service/offer descriptions — what they sell, who it's for, what outcome they promise
- Pricing signals (if visible)
- CTAs — what action are they driving visitors toward?
- Testimonials and social proof
- Any blog posts or published content

**When to use:** Always, as soon as a website URL is known.
**No API key needed. No cost.**

---

### Tier 2 Skills — Deep Social Scrape (Run After Tier 1 Confirms Accounts)

#### `apify-skill.md`
**Source:** danielmiessler (Personal AI Infrastructure, 9,791 stars)
**What it does:** Direct TypeScript access to 9 Apify actors for social media scraping. Filters data in code before returning to context — 97.5% token savings vs. standard MCP.

**Key:** `APIFY_TOKEN`

**Social media actors available:**

| Platform | Actor | What It Pulls |
|----------|-------|---------------|
| **Instagram** | `apify/instagram-scraper` (145k users, 4.60★) | Profile bio, follower count, following, post count, verified status, last N posts with captions/hashtags/likes/comments, posting frequency |
| **LinkedIn** | `apify/linkedin-scraper` (26k users, 4.10★) | Profile data, posts, company pages |
| **TikTok** | `apify/tiktok-scraper` (90k users, 4.61★) | Profile, videos, hashtags, comments, follower count |
| **YouTube** | `apify/youtube-scraper` (40k users, 4.40★) | Channel data, video list, subscriber count, view counts, top content |
| **Facebook** | `apify/facebook-scraper` (35k users, 4.56★) | Page posts, groups, comments, page likes |
| **Google Maps** | `compass/crawler-google-places` (198k users, 4.76★) | Business listing, reviews, rating, hours, photos, contact info |
| **Amazon** | — | Product listings, reviews |

**When to use:** Tier 2 — after Tier 1 confirms which social platforms the prospect is on. Only scrape confirmed platforms.

**For Pocket Profile, prioritize:** Instagram → LinkedIn → TikTok → YouTube → Facebook

**What to extract per platform:**
- Follower / subscriber count
- Post count and posting frequency (posts per week, last 90 days)
- Last 20 posts: captions, hashtags, engagement (likes + comments)
- Content themes (what do they talk about?)
- Tone (professional, casual, educational, sales-heavy, inspirational)
- Top performing content (what gets the most engagement?)

---

#### `linkdapi-skill.md`
**Source:** openclaw/skills — LinkdAPI (foontinz)
**What it does:** 50+ LinkedIn endpoints via Python SDK. Enterprise-grade LinkedIn data.

**Key:** `LINKDAPI_API_KEY` — get key at linkdapi.com

**What it pulls:**
- Full LinkedIn profile: headline, bio, credentials, certifications, awards
- Work history with dates and descriptions
- Education history
- Follower count and connection count
- Recent posts (last 10–20): content, likes, comments, shares, post dates
- Posting frequency on LinkedIn
- Company pages: description, size, industry, follower count, recent posts

**How it works:** Uses `uv` script pattern — writes an ephemeral Python script, runs it with `uv run`, cleans up. No global installs needed.

**Example:**
```python
from linkdapi import LinkdAPI
client = LinkdAPI(api_key)
profile = client.get_profile_overview("prospect-linkedin-username")
posts = client.get_profile_posts("prospect-linkedin-username")
```

**When to use:** Tier 2 — for every prospect who has a LinkedIn profile. LinkedIn is essential for professionals (financial advisors, coaches, consultants).

---

### Tier 3 Skills — Fallback Only (Use When Blocked or Needs Extra Data)

#### `brightdata-skill.md`
**Source:** danielmiessler (Personal AI Infrastructure)
**What it does:** Web scraping via Bright Data residential proxy network. Bypasses Cloudflare, CAPTCHA, bot detection, and geo-blocks.

**Keys needed:** `BRIGHTDATA_*` credentials

**When to use:** Tier 3 only — if Apify or direct WebFetch gets blocked (403, CAPTCHA, rate limit). Costs more per request than standard scraping.

**What it handles:** Any website or social platform that blocks standard scraping. Routes through real residential IPs.

---

#### `apify-lead-generation-skill.md`
**Source:** sickn33 (antigravity-awesome-skills, 23,561 stars)
**What it does:** B2B/B2C lead generation by scraping Google Maps, websites, Instagram, TikTok, Facebook, LinkedIn, YouTube, and Google Search simultaneously.

**Key:** `APIFY_TOKEN`

**When to use:** Tier 3 — mainly useful when prospect is a local business with a Google Maps listing. Also good for finding additional contacts at the company.

**What it pulls:**
- Google Maps listing: business name, address, phone, website, rating, review count, photos
- Multiple platforms at once for lead discovery

---

#### `market-research-skill.md`
**Source:** sickn33 (antigravity-awesome-skills)
**What it does:** Market research and competitive analysis via Apify actors across Google Maps, Facebook, Instagram, and review platforms.

**Key:** `APIFY_TOKEN`

**When to use:** Optional — when Tim wants to understand the competitive landscape around a prospect's niche or local market.

**What it pulls:**
- Market density (how many competitors in their area/niche)
- Pricing signals from competitors
- Consumer sentiment from reviews
- Geographic opportunity maps

---

#### `scraping-skill.md`
**Source:** danielmiessler (Personal AI Infrastructure)
**What it does:** Router skill that selects between BrightData proxy scraping and Apify actors based on what's needed and whether the target is blocking standard requests.

**When to use:** When you need to scrape a specific URL and aren't sure which method will work. The skill picks the right tool automatically.

---

### Research Brief Output

After all tiers complete, the orchestrator saves a filled Research Brief to:
```
phases/01-research/briefs/[prospect-name]-brief.md
```

**The brief contains:**
- Identity: name, title, company, location, website
- Offer: what they sell, who it's for, what result they promise (in their own language)
- Social media presence table: all platforms, handles, followers, posts/week, active status, URLs
- Platforms they DON'T have (JW's sales ammo)
- Content analysis: themes, consistency, tone, best performing content, gaps
- Their current online presence: strengths and weaknesses
- Key quotes and brand language (verbatim from their content)
- Standout facts: awards, credentials, client results, press
- Recommended Pocket Profile angle: what to lead with, what the hook is
- Booking CTA recommendation

---

## File Structure

```
pocket-profile/
├── MASTER.md                          ← You are here. Read this first.
├── .claude/
│   ├── settings.json                  ← Permissions: allow all
│   └── skills/
│       ├── pocket-profile-research-skill.md   ← MASTER ORCHESTRATOR
│       ├── investigation-skill.md             ← OSINT / social account discovery
│       ├── scraping-skill.md                  ← Scraping router (BrightData/Apify)
│       ├── apify-skill.md                     ← Instagram/TikTok/YouTube/FB/LinkedIn
│       ├── apify-lead-generation-skill.md     ← B2B/B2C lead gen + Google Maps
│       ├── market-research-skill.md           ← Market + competitive analysis
│       ├── linkdapi-skill.md                  ← LinkedIn deep data (50+ endpoints)
│       ├── enrich-lead-skill.md               ← Person enrichment (Nyne API)
│       └── brightdata-skill.md                ← Fallback bypass scraping
├── phases/
│   ├── 01-research/
│   │   ├── research-skill.md          ← Phase 1 step-by-step instructions
│   │   └── briefs/                    ← Completed research briefs per prospect
│   │       └── [name]-brief.md
│   ├── 02-frontend/
│   │   └── lovable-skill.md           ← Phase 2: Lovable build instructions
│   ├── 03-deploy/
│   │   └── deploy-skill.md            ← Phase 3: Vercel + subdomain deploy
│   └── 04-backend/
│       └── ghl-skill.md               ← Phase 4: GHL calendar + automation
└── templates/
    ├── research-brief-template.md     ← Blank template for Phase 1 output
    └── site-prompt-template.md        ← Lovable build prompt template
```

---

## Changelog

- **2026-03-13** — Initial folder structure created. MASTER.md, all 4 phase skill files, and 2 templates written. Ready for first prospect test run.
- **2026-03-13** — Research pipeline upgraded. Installed 8 skills from SkillsMP (danielmiessler, sickn33, openclaw). Built `pocket-profile-research-skill.md` as tiered orchestrator. Project-level permissions set to allow all (`.claude/settings.json`). MASTER.md fully documented with every skill, what it does, what it pulls, when to use it, and API key requirements.
