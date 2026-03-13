# Phase 4 — Back-End Skill (GHL + Notion)

> **Goal:** Wire the live site to Go High Level — embed the booking calendar and intake form, tag the lead in GHL, and auto-sync booked leads to Notion. Output: a fully functional sales funnel that captures booked calls automatically.

---

## What You Need Before Starting

- Live site URL from Phase 3 (e.g., `angie.journeywell.com`)
- Access to Lovable project (to add the embed code)
- Go High Level account access (Tim's GHL sub-account or a dedicated Pocket Profile sub-account)
- Notion database for lead tracking
- GHL API or Zapier/Make for the GHL → Notion automation

Credentials in `credentials-master.env`:
- `GHL_API_KEY`
- `NOTION_*`

---

## Part 1 — GHL Calendar Embed

### Step 1 — Get the Calendar Embed Code
In GHL:
1. Calendars → Select the relevant calendar (or create one called "Pocket Profile Intro Call")
2. Calendar Settings → Embed → Copy the embed iframe code
3. It looks like:
```html
<iframe src="https://api.leadconnectorhq.com/widget/booking/[CALENDAR_ID]"
  style="width:100%;border:none;overflow:hidden;"
  scrolling="no"
  id="[CALENDAR_ID]">
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
```

### Step 2 — Embed in Lovable
Back in Lovable:
1. Find the CTA section where the placeholder button was
2. Replace the placeholder with the iframe embed code
3. Make sure the iframe has proper height (at least 700px) so the calendar is fully visible
4. Publish the update

### Step 3 — Test the Calendar
Visit the live site → scroll to the CTA → confirm the calendar loads and a test booking can be made.

---

## Part 2 — GHL Intake Form (Optional but Recommended)

After the prospect picks a time slot, route them to a short intake form before confirming.

In GHL:
1. Forms → Create a new form called "Pocket Profile Intake"
2. Fields to include:
   - Full Name (auto-filled from calendar)
   - Business Name
   - What's your #1 marketing challenge right now?
   - How did you hear about us?
3. Set the form to appear as the "Thank You" redirect after calendar booking, OR embed it inline below the calendar
4. Copy the form embed code and add to the site if inline

---

## Part 3 — GHL Tagging Automation

When a lead books, GHL should automatically tag them so they're trackable.

### Create the Automation in GHL:
1. Automations → New Workflow
2. Trigger: **Appointment Booked** (on the Pocket Profile calendar)
3. Actions:
   - Add Tag: `pocket-profile-lead`
   - Add Tag: `booked-call`
   - Add to Pipeline: "Pocket Profile" (create this pipeline if it doesn't exist)
   - Stage: "Call Booked"

---

## Part 4 — GHL → Notion Sync

When a lead is tagged `pocket-profile-lead`, auto-add them to the Notion lead tracker.

### Option A — Zapier (Easiest)
1. Zap trigger: GHL — Tag Added (`pocket-profile-lead`)
2. Zap action: Notion — Create Database Item
3. Map fields:
   - Name → Lead Name
   - Phone / Email → Contact Info
   - Appointment Date → Call Date
   - Status → "Booked"

### Option B — Make (Formerly Integromat)
Same logic as Zapier but via Make's GHL + Notion modules.

### Option C — GHL Webhook → Custom API
If Tim wants a more controlled integration:
1. GHL Automation → Add Action: Send Webhook
2. Webhook URL: a small serverless function (Vercel/Supabase Edge Function)
3. The function receives the GHL payload and writes to Notion via the Notion API

This is the most reliable and doesn't depend on Zapier. Build this when the system is proven and running regularly.

---

## Notion Lead Tracker Schema

The Notion database should have these fields:

| Field | Type | Source |
|-------|------|--------|
| Name | Title | GHL appointment name |
| Business | Text | Intake form |
| Email | Email | GHL |
| Phone | Phone | GHL |
| Call Date | Date | GHL appointment date |
| Status | Select | "Booked", "Showed", "No Show", "Closed", "Not Interested" |
| Source | Select | "Pocket Profile" |
| Site URL | URL | The prospect's Pocket Profile URL |
| Notes | Text | Agent/Camille notes |

---

## Checklist Before Marking Phase 4 Complete

- [ ] GHL calendar embeds and loads on the live site
- [ ] Test booking works end-to-end (can book a test appointment)
- [ ] Lead gets tagged `pocket-profile-lead` after booking
- [ ] Lead appears in GHL pipeline under "Call Booked"
- [ ] Lead auto-appears in Notion lead tracker after booking
- [ ] Tim reviews the full flow and signs off

---

## When Everything Is Running

The complete flow is:
```
Prospect visits [name].journeywell.com
    → Impressed by their personalized site
    → Scrolls to CTA
    → Books a call on the GHL calendar
    → Fills intake form
    → Automatically tagged in GHL
    → Automatically appears in Notion as "Booked"
    → Tim / Camille sees them in Notion and prepares for the call
```

No manual data entry. No dropped leads. Fully automated.
