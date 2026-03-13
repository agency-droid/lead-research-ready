---
name: pocket-profile-research
description: >
  Full prospect research pipeline for Pocket Profile. Given a prospect's name, company, and any known links (website, Instagram, LinkedIn), runs a tiered multi-source research sweep and outputs a complete Research Brief ready to feed into Lovable. USE WHEN: prospect research, pocket profile research, research brief, lead research, research [person name], build brief for [prospect].
---

# Pocket Profile Research Skill

Deep prospect research for JourneyWell's Pocket Profile system. Runs a tiered pipeline across OSINT, social media, LinkedIn, and enrichment sources — outputs a complete Research Brief in under 15 minutes.

---

## What You Need to Start

Minimum: **prospect's name** + at least ONE of: website URL, Instagram handle, LinkedIn URL, company name.

Optional: location, niche/industry, any known social handles.

---

## The Pipeline (Run in Order)

### TIER 1 — Free / Fast (Always Run First)

These run immediately and in parallel. No cost, broad coverage.

#### 1A. OSINT Sweep — `investigation-skill.md`

Use the `investigation` skill to:
- Find all public social media accounts (Instagram, LinkedIn, TikTok, YouTube, Facebook, X/Twitter, Pinterest, Threads)
- Identify which platforms they are/aren't on
- Find their website(s), blog, podcast, press mentions
- Pull company description, niche, target audience from public records + search

Input: name + company name + location (if known)
Output: list of all social handles, platform presence map, basic company description

#### 1B. Website Scrape — WebFetch

If a website URL is known or found in 1A:
- Fetch homepage and /about page
- Extract: headline, subheadline, offer/service description, target audience language, CTA, testimonials, pricing signals
- Note: what's strong, what's weak, what's missing

#### 1C. Basic Enrichment — `enrich-lead-skill.md` (Nyne)

Use the `nyne-enrichment` skill with prospect's name + company:
- Get contact info, work history, education
- Pull all linked social profiles with follower counts
- Request newsfeed add-on if available (recent posts + engagement)

---

### TIER 2 — Deep Social Scrape (Run After Tier 1 Finds Accounts)

Run these once you have confirmed social handles from Tier 1.

#### 2A. Instagram — `apify-skill.md`

Actor: `apify/instagram-scraper`
Pull for each confirmed Instagram handle:
- Profile data: bio, follower count, following count, post count, verified status
- Last 20 posts: captions, hashtags, likes, comments, post type (photo/video/reel)
- Posting frequency: calculate average posts per week over last 90 days
- Content themes: what do they post about? (education, promos, lifestyle, BTS, client results)
- Tone: professional, casual, inspirational, sales-heavy?

#### 2B. LinkedIn — `linkdapi-skill.md`

Use LinkdAPI to pull:
- Full profile: title, bio, credentials, years of experience
- Company page (if exists): size, description, follower count
- Recent posts (last 10): content, likes, comments, post frequency
- Awards, certifications, standout achievements

#### 2C. TikTok / YouTube / Facebook — `apify-skill.md`

Only if accounts found in Tier 1. Pull:
- TikTok: follower count, video views, posting frequency, top content themes
- YouTube: subscriber count, video count, most viewed videos (titles = topic signals)
- Facebook: page likes, post frequency, content type

---

### TIER 3 — Fallback / Extra (Only If Needed)

Run these only if Tier 1/2 is blocked or insufficient.

#### 3A. Block Bypass — `brightdata-skill.md`

If any website or social profile is blocked/returns 403:
- Use Bright Data to retry the scrape via proxy rotation
- Handles Cloudflare, bot detection, geo-blocks

#### 3B. Lead Generation Data — `apify-lead-generation-skill.md`

If prospect is a local business:
- Scrape Google Maps for their listing: reviews, rating, hours, photos, contact info
- Cross-reference with what their site says

---

## Output Format — Research Brief

After all tiers complete, compile everything into this exact format and save it to:
`phases/01-research/briefs/[prospect-name]-brief.md`

```markdown
# Research Brief — [Prospect Full Name]
**Date:** [today]
**Researched by:** Pocket Profile Research Skill

---

## Identity
- **Name:**
- **Title / Role:**
- **Company:**
- **Location:**
- **Website:**
- **Niche / Industry:**
- **Target Audience:**

---

## What They Do (The Offer)
[2-4 sentences in their own language. What do they sell/offer? Who is it for? What transformation/result do they promise? Pull exact language from their website/bio where possible.]

---

## Social Media Presence

| Platform | Handle | Followers | Posts/Week | Active? | URL |
|----------|--------|-----------|------------|---------|-----|
| Instagram | | | | | |
| LinkedIn | | | | | |
| TikTok | | | | | |
| YouTube | | | | | |
| Facebook | | | | | |
| X/Twitter | | | | | |
| Other | | | | | |

**Platforms they DON'T have:** [list any major platforms with no presence]

---

## Content Analysis

**What they post about:**
[bullet list of recurring themes — e.g. "client transformations", "financial tips", "behind the scenes", "motivational quotes"]

**Posting consistency:**
[Are they consistent? How many times/week on average? Any gaps?]

**Tone & Style:**
[e.g. "professional and authoritative", "casual and personal", "heavy on promotions", "educational content-first"]

**Best performing content:**
[What gets the most engagement? What topics/formats resonate?]

**Content gaps:**
[What are they NOT doing that JourneyWell could help them with?]

---

## Their Current Online Presence — Strengths & Weaknesses

**Strengths:**
-

**Weaknesses / Gaps:**
-

**What the Pocket Profile should do better:**
-

---

## Key Quotes / Brand Language
[Pull 3-5 exact phrases from their website, bio, or posts that capture how they describe themselves. These go in the Pocket Profile copy.]

- ""
- ""
- ""

---

## Standout Facts
[What's the one thing they're most proud of? Awards, client results, credentials, press mentions, years in business, notable clients — anything that signals credibility.]

-

---

## Recommended Pocket Profile Angle
[In 2-3 sentences: what should this Pocket Profile lead with? What's the hook? What will make THIS prospect feel seen? This is the brief for the site builder.]

---

## Booking CTA Recommendation
[What call-to-action makes sense for this prospect? e.g. "Book a Free Content Strategy Call", "Schedule a 20-Min Brand Audit", "Let's Talk About Your Content"]

---

## Raw Data Links
- Website:
- Instagram:
- LinkedIn:
- Other:
```

---

## Agent Rules

1. **Run Tier 1 always** — never skip it, it's free and fast
2. **Run Tier 2 only for platforms confirmed in Tier 1** — don't waste API calls on platforms they're not on
3. **Run Tier 3 only if blocked** — it costs more, use as fallback
4. **Extract language verbatim** — copy their exact words from bios, headlines, and posts. This language goes into the site copy.
5. **Flag content gaps explicitly** — what platforms are they missing? How inconsistent is their posting? This is JourneyWell's sales ammo.
6. **Save the brief** — always save to `phases/01-research/briefs/[name]-brief.md`
7. **Hand off to Phase 2** — after saving, remind the user to open `templates/site-prompt-template.md` and paste the brief in

---

## Required API Keys

Check `/Users/tim/Downloads/Development/tim-master/credentials-master.env` for:
- `APIFY_TOKEN` — for Instagram, TikTok, YouTube, Facebook scraping
- `LINKDAPI_API_KEY` — for LinkedIn data
- `NYNE_API_KEY` + `NYNE_API_SECRET` — for person enrichment
- `BRIGHTDATA_*` — for bypass scraping (Tier 3 only)

Never hardcode keys. Always read from credentials-master.env.
