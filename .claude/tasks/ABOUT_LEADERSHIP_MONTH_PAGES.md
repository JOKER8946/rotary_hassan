# About redesign · Leadership page · Month event pages · Programme removal

Status: **implemented and verified** (31 August 2026)

## Why

Four changes were requested:

1. **About** had no history — it opened on the Team Aikyam theme and went straight to Get Involved / Contact. The club supplied its full history (journey, eight service areas, six District Governors, Rotary Suvarna Bhavan, community / youth / fellowship). That is now the About page.
2. **Leadership** was a four-card block buried on the home page. It is now its own page and its own nav item.
3. **Our Work** month cards filtered event cards in place on the same page. A month now opens its own page, with a back button.
4. **Programme (`events.html`)** was a third copy of the same event content and has been removed.

Result: Our Work → month grid → month page (events) → event detail popup.

---

## What changed

### New files

| File | Purpose |
|---|---|
| `assets/js/site-data.js` | Single source of truth: `MONTHS` (12 months of the Rotary year) + `EVENTS` (19 entries) + `SiteData` helpers (`getMonth`, `monthEvents`, `neighbours`). |
| `assets/js/event-modal.js` | The event detail popup, lifted out of the old `work.html`. `EventModal.init()` wires the dialog; `EventModal.bindCards(root)` wires every `[data-work-id]` card. |
| `month.html` | One page for any month, addressed as `month.html?m=july`. |
| `leadership.html` | Club officers, district leadership, immediate past team. |

Event content was moved verbatim out of the old inline `workInitiativesData` and card markup — nothing was rewritten. Each event now carries both card fields (`cardTitle`, `blurb`, `image`/`placeholder`, `dateBadge`) and popup fields (`title`, `description`, `outcomes`, `partner`, `photos`), which removed the old three-way duplication between the card markup, the JS object and `events.html`.

### `work.html` — month index only

Kept the hero and footer; everything else changed. The 12 month cards are now rendered from `MONTHS` as `<a href="month.html?m=…">`, with event counts derived from the data (the old "1 Impact Event" strings were hardcoded and would drift). Removed the events header bar, all 18 event cards, the modal markup, the inline data object and the `filterByMonth` logic — about 850 lines. Added a year-at-a-glance strip and `#upcoming`, which rehomes the Weekly Meetings and Team VISTARA 2026 cards from the deleted Programme page.

### `month.html`

Reads `?m=` and looks the month up in `MONTHS`. A `.back-link` ("Back to all months") sits under the header, and the prev/next pager at the foot wraps within the Rotary year (June → July). The hero, tab title and status/count chips are all built from the data. Missing or unknown `?m=` renders a "pick a month" notice listing all 12 months instead of a dead page. The event popup markup lives here now.

### `about.html` — the history

Rebuilt as: hero → `#journey` (narrative + stat chips) → `#focus` (eight service areas as tiles) → `#governors` (year rail + six-entry timeline) → `#bhavan` (2006 milestone) → `#pillars` (service / youth / fellowship) → closing legacy band → `#involved` and `#contact` (kept; the nav button and every footer link point at those anchors).

Moved to `leadership.html`: the Team Aikyam theme block, the president testimonial, and the RI-theme / RI-President / District-Governor / MYTHRI panel. Also standardised the club address on "Rotary Suvarna Bhavan, Kuvempu Nagar" — the page previously said "Near B.M. Road" while every footer said otherwise.

**Portrait slots for photos yet to be supplied.** Each Governor renders an initials medallion with the image layered over it:

```html
<div class="dg-portrait">
  <span class="dg-monogram">BR</span>
  <img src="assets/leadership/governors/bn-ramesh.jpg" alt="…" onerror="this.remove()">
</div>
```

Drop a correctly-named JPG into `assets/leadership/governors/` and the photo appears — no code change. Expected names: `ananthramaiah.jpg`, `py-bushan.jpg`, `mkg-kumar.jpg`, `sk-nagendran.jpg`, `bn-ramesh.jpg`, `k-palaksha.jpg`. The Suvarna Bhavan band uses the same trick at `assets/suvarna-bhavan.jpg`.

### `leadership.html`

Theme intro → `#officers` (President as a wide feature card, then Secretary / Treasurer / Sergeant-at-Arms) → `#district` (RI President, DG B. M. Bhat, AG A. Manjunath, Zonal Lieutenant Mahesh D R, plus the RI theme logo and MYTHRI link) → `#outgoing` (Mahesh D R, Jeevan Gowda, Subramanya H L) → a band linking to the DG legacy on About.

Puts five previously unused portraits to work (`a_manjunath.png`, `mahesh_dr.jpg`, `jeevan_gowda.jpg` and the officer photos). Three people have no photo on file — RI President Babalola, DG B. M. Bhat, Subramanya H L — and use the same monogram fallback, so portraits can be added later by dropping files at `assets/leadership/ri-president.jpg`, `bm-bhat.jpg`, `subramanya_hl.jpg`. Ann's Club officers were left out, as agreed.

### `index.html`

Leadership section removed; the explore hub swaps the Programme card for a Club Leadership card and rewords the About card toward history; the notification banner now points at `work.html#upcoming`; the three July-in-review cards deep-link to `month.html?m=july`.

### `events.html` deleted

July list and the 12 planned initiatives were duplicates of the month pages. Weekly Meetings and Team VISTARA 2026 moved to `work.html#upcoming`. All inbound links rewired; `grep -rn 'events\.html' --include=*.html .` returns nothing.

### Navigation — all 7 pages

Home · Leadership · Our Work · New Members · Gallery · About + Join/Donate — About sits last, as it did before this work. Still six links, so the bar fits as before; a `@media (max-width: 1080px)` gap tightening and an 880px wrap rule were added. Footer "Explore" lists updated everywhere.

### `assets/css/style.css`

Appended (stylesheet is now 1,325 lines): a `[hidden] { display: none !important; }` guard — needed because `.work-grid` and `.month-pager` set `display`, which would otherwise beat the `hidden` attribute that `month.html` toggles — plus nav-fit rules, month calendar extras (`a.month-box`, `.month-status-chip`, `.year-glance`), month page (`.back-link`, `.month-hero-meta`, `.card-date-badge`, `.month-empty`, `.month-pager`), history (`.history-intro`, `.history-stats`, `.focus-grid`, `.dg-rail`, `.dg-timeline`/`.dg-entry`/`.dg-portrait`/`.dg-monogram`, `.milestone-band`, `.pillar-grid`, `.legacy-band`), leadership (`.leader-feature`, `.leader-grid`, `.leader-card`, `.district-strip`), and responsive rules at 1000 / 900 / 700 / 620px.

---

## Verification

Checked with jsdom (harness in the session scratchpad, not committed) — 58 assertions, all passing:

- **work.html** — 12 cards render from data, July shows 7 events, singular/plural correct, glance totals 7 completed / 11 planned, no leftover event cards.
- **month.html** — all 12 months render hero, correct card count, tab title, back link and a pager that wraps June → July; July's first card is the KSOU purifier with a real photo; planned months fall back to placeholder tiles; the popup opens on click and on Enter, fills title/outcomes/thumbnails, swaps the featured photo, closes on Escape, and restores page scroll.
- **Fallbacks** — no `?m=` and `?m=banana` both show the "pick a month" notice listing 12 months, with hero, grid and pager hidden.
- **Links** — identical 6-item nav on every page, correct active item, and no link anywhere pointing at a missing file.
- **About / Leadership** — 6 DG entries each with a monogram and an `onerror` photo slot, year rail anchors all resolve, 8 focus areas, 3 pillars, address standardised; 10 leader cards, 8 of 11 portrait files present, 3 correctly falling back to initials.
- CSS braces balanced (351/351).

---

## Open item for the club

Initiative **"5" Youth Skill Development** has full content but no month — it renders nowhere, exactly as before this change. Tell us which month it belongs to and it will appear; add its key to that month's `events` array in `assets/js/site-data.js`.
