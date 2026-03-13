# Phase 2 — Front-End Build Skill (Lovable)

> **Goal:** Use the completed research brief + site prompt template to build a personalized landing page in Lovable in under 15 minutes. Output is a published Lovable preview link ready for Phase 3 deployment.

---

## What You Need Before Starting

- Completed research brief from Phase 1 (`phases/01-research/briefs/[prospect-name]-brief.md`)
- Access to Lovable (Tim's account)
- The site prompt template (`templates/site-prompt-template.md`)

---

## Step-by-Step

### Step 1 — Build the Prompt

1. Open `../../templates/site-prompt-template.md`
2. Copy the full template
3. Replace all `[PLACEHOLDER]` sections with data from the research brief
4. The result is a single prompt you'll paste into Lovable

**The prompt should include:**
- Who the prospect is and what they do
- Their target audience
- The main CTA (book a call)
- Tone / style direction
- Any specific sections: hero, social proof, services, about, CTA button
- GHL calendar embed placeholder (we'll connect in Phase 4)

### Step 2 — Create a New Project in Lovable

1. Go to Lovable and create a new project
2. Name it: `[Prospect First Name] Pocket Profile` (e.g., "Angie Pocket Profile")
3. Paste the full prompt into the initial build input
4. Hit generate and let it run

### Step 3 — Review the First Draft

Check for:
- [ ] Hero section — does it lead with their offer/identity clearly?
- [ ] Headline — is it specific to them, not generic?
- [ ] CTA button — is it prominent and says something like "Book a Free Call" or "Let's Talk"?
- [ ] Sections flow logically: Hero → About/Value → Social Proof → CTA
- [ ] Tone matches the prospect (not too corporate, not too casual)

### Step 4 — Iterate

Lovable responds to follow-up prompts. Use short, specific instructions:

- "Make the headline bigger and bolder"
- "Change the CTA button color to [color]"
- "Add a 'What I Do' section after the hero"
- "Make the background dark instead of white"
- "Remove the footer nav links"

**Target: 2-3 iterations max before it's ready.** Don't get lost in perfecting it — 80% good and live beats 100% good and stuck.

### Step 5 — Add a Placeholder for the GHL Calendar

In the CTA section, add a placeholder text or a simple button that says:
> "📅 Book Your Free Strategy Call"

We'll wire this to the actual GHL calendar embed in Phase 4. For now, a visible placeholder is enough.

### Step 6 — Get the Lovable Preview Link

Once the site looks good:
1. Hit "Publish" or "Share" in Lovable
2. Copy the preview URL (format: `[project].lovable.app` or similar)
3. Save it — Phase 3 will deploy this to the JW wildcard subdomain

---

## Design Guidelines

These align with JourneyWell's brand. Apply them in your Lovable prompts:

| Element | Guidance |
|---------|----------|
| Background | Dark preferred (black or very dark gray), but match prospect's brand if they're light/colorful |
| Accent color | Use their brand color if identifiable, otherwise JW lime `#C8E64A` |
| Typography | Clean, bold sans-serif for headlines |
| Hero | Full-width, strong headline, subheadline, CTA button above the fold |
| Social proof | Testimonials, logos, numbers — add even if placeholder |
| Sections | Hero → Value/About → Services → Social Proof → CTA → Footer |
| Mobile | Lovable builds responsive by default — verify it looks good on mobile |

---

## Quality Checklist Before Phase 3

- [ ] Prospect's name / business appears on the page
- [ ] The page clearly explains what they do in the first 5 seconds
- [ ] CTA is visible without scrolling (above the fold)
- [ ] No Lorem Ipsum placeholder text remaining
- [ ] GHL calendar placeholder is in the CTA section
- [ ] Mobile layout looks clean
- [ ] Preview link is saved and working

---

## Notes on Lovable vs Cursor

**Use Lovable** when:
- Speed is the priority
- The site is a standard landing page structure
- You want AI to handle the design

**Use Cursor** when:
- You need full custom domain control programmatically
- The site requires complex integrations (APIs, dynamic data)
- You're rebuilding/extending an existing codebase

For Pocket Profile, **Lovable is the default.** Cursor is the upgrade path if a prospect becomes a paying client and wants a full custom site.
