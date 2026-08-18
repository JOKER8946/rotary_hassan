# Task: Update site with July 2026 content from `JULY/`

Status: **IMPLEMENTED** (approved 2026-08-18; see §5 for the log)

## 1. What is in `JULY/` (source of truth)

| Source | What it gives us |
|---|---|
| `July Edition Mythri.pdf` (6 pages, image-only) | The club's own monthly bulletin — authoritative narrative + dates for all 6 July events, club identity, DG/RI officers |
| 5 × `Rotary_Hassan_Minutes_Meeting-0X_*.docx` | Formal minutes per meeting (proceedings, venues, speakers). Photos are embedded in each (low-res) |
| 3 × `Agenda.docx` + `Agenda_1.docx` | Time-wise agendas for 1/2 Jul, 16 Jul, 23 Jul, 30 Jul meetings |
| `photos/` (37 files) | 15 high-res originals (iPhone, 6–8 MP+) + 22 WhatsApp-grade duplicates of the docx photos. EXIF dates confirm which event each belongs to |

### July 2026 record extracted (dates verified against EXIF + bulletin)

1. **1 July — Service project + Doctors'/CA/GST Day.** Donated an RO water purifier worth ₹35,000 to Karnataka State Open University, SMK Nagar, Arsikere Road, Hassan; sponsored by club member Rtn. Pani Kumar B. Club doctors and chartered accountants honoured. Followed by a breakfast meeting. *(Photos: IMG_6912, IMG_6927, IMG_6890 — high-res)*
2. **2 July — Weekly meeting, Chiranthana office:** finalised Installation Ceremony plans, responsibilities, logistics; MC entrusted to Rtn. PAG Pradeep. *(Photos: embedded in Meeting-01 docx)*
3. **9 July — Installation Ceremony, Nandagokula Convention Centre.** Rtn. Dr. Geetha Kiran A installed as President (the club's **first lady president**), Rtn. Sunitha Somashekar Secretary, Rtn. Nirmal Kumar Jain Treasurer, plus Board and newly inducted members with families. Installation Officer & Chief Guest: PDG Rtn. Keshav H. R.; handover by IPP Rtn. Mahesh D. R.; RI theme "Create Lasting Impact" unveiled; AG Rtn. A. Manjunath presented District 3182 vision. *(Photos: IMG_7069, IMG_7073, IMG_7075, IMG_7093 — high-res)*
4. **16 July — Classification Talks by new members, Chiranthana, K. R. Puram.** New members shared professional journeys; addressed by PDG Rtn. M. K. G. Kumar and IPDG Rtn. K. Palaksha. *(Photos: 2431e8c6, 76a11df4, c0c5fa4a)*
5. **23 July — Orientation Programme for new members, Chiranthana.** Speakers: PDG Rtn. B. N. Ramesh (origin/evolution of Rotary), IPDG Rtn. K. Palaksha (RI structure & leadership), PAG Rtn. Pradeep (roles & responsibilities). *(Photos: bb49826e, 414967fa, d596a74d, fd8c42a5)*
6. **24 July — Installation of Rotaract Club of Malnad College of Engineering** (sponsored by RC Hassan), Alumni Hall, MCE. President Rtn. Dr. Geetha Kiran A served as Installation Officer and installed Rtr. Suraj C. S. as President 2026–27; outgoing President Rtr. Lekhana V appreciated. Graced by DG Rtn. B. M. Bhat, Rtn. A. Manjunath, Rtn. D. R. Mahesh, Rtr. Reshma Ramesh, Rtr. Yashwanth L. S. *(Photos: IMG_7368–IMG_7382 — high-res)*
7. **30 July — Weekly meeting, Rotary Suvarna Bhavan.** Guest speaker Dr. H. L. Mallesh Gowda (Retd. Professor of Kannada, President, District Kannada Sahitya Parishat) on "Sukha–Dukha". Team **VISTARA 2026** organising committee visited and invited members to register for the District Membership Development & Public Image Seminar + Awards Night, **Hassan, 29–30 August 2026**. *(Photos: 6cd8b858, f53bee2b, d9166e3d, 3f5fe618)*

Club identity per bulletin: Rotary Club of Hassan, **Club No. 015716, Zone IX B, RI District 3182**; meets **every Thursday at Rotary Suvarna Bhavan, Kuvempu Nagar, Hassan**. RI President Rtn. Olayinka Hakeem Babalola; District Governor Rtn. B. M. Bhat. Bulletin editor: Rtn. Pani Kumar B (Club Executive Secretary).

## 2. Plan of work (MVP, 5 steps)

### Step 1 — Build `assets/july2026/` (script, then delete script)
Python + Pillow (already installed) → resize longest edge to 1600 px, JPEG q80, EXIF-rotated, EXIF stripped (~200–400 KB each). ~20 files:

| New file | Source |
|---|---|
| `hero_installation_stage.jpg` | IMG_7069 (also 4:3 crop for hero) |
| `installation_office_bearers.jpg` | IMG_7073 |
| `installation_secretary.jpg` | IMG_7075 |
| `installation_chief_guest.jpg` | IMG_7093 |
| `installation_group.jpg` | 506399b1 (wide group; 1280 px source) |
| `ksou_water_purifier.jpg`, `ksou_group.jpg`, `ksou_breakfast_meeting.jpg` | IMG_6912, IMG_6927, IMG_6890 |
| `prep_meeting.jpg` | image extracted from Meeting-01 docx |
| `classification_group.jpg`, `classification_pdg.jpg`, `classification_members.jpg` | 2431e8c6, 76a11df4, c0c5fa4a |
| `orientation_pdg_ramesh.jpg`, `orientation_ipdg.jpg`, `orientation_pradeep.jpg` | bb49826e, 414967fa, d596a74d |
| `rotaract_dais.jpg`, `rotaract_collaring.jpg`, `rotaract_group.jpg`, `rotaract_address.jpg` | IMG_7373, IMG_7369, IMG_7378, IMG_7372 |
| `sukhadukha_felicitation.jpg`, `sukhadukha_dais.jpg`, `sukhadukha_audience.jpg` | 6cd8b858, f53bee2b, d9166e3d |
| `president_address.jpg` | c2ed74d1 (President at club banner) |

Also copy `JULY/July Edition Mythri.pdf` → `assets/bulletins/mythri-july-2026.pdf`.

### Step 2 — `index.html`
- **Notification banner** (currently Independence Day, 15 Aug — already past): replace with **Team VISTARA 2026 · 29–30 August 2026 · Hassan · District Membership Development & Public Image Seminar + Awards Night**, linking to `events.html`.
- **Hero photo**: swap `assets/hero/president_family.jpg` → `assets/july2026/hero_installation_stage.jpg` (Installation Ceremony, 9 July) with real alt text. One CSS change: `.hero-photo { aspect-ratio: 4/5 }` → `4/3`, because every July photo is landscape and a 4:5 crop cuts people out of the frame.
- **New section "July 2026 in Review"** (after the stat strip): 3 photo cards — Installation Ceremony (9 Jul), RO Water Purifier for KSOU (1 Jul), Rotaract MCE Installation (24 Jul) — each linking into `work.html`, plus a "Read MYTHRI · July Edition (PDF)" link.

### Step 3 — `work.html` (the actual impact record)
- July month box: `2 Impact Events` → **`6 Impact Events`**.
- **Delete the two July placeholder cards** ("Blood Donation Drives", "Youth Skill Development") — those are *planned* initiatives that did not happen in July; they stay represented on `events.html`. Replace with 6 real July cards, each with a real photo and date badge.
- Add 6 entries to `workInitiativesData` (`j1`…`j6`) with description, outcomes, partner and photo list drawn from the minutes + bulletin.
- Small JS/markup upgrade so the modal gallery shows **real images** when an entry's photos carry a `src` (existing text-only placeholder entries for Aug–Jun keep working unchanged).
- August–June cards left untouched (out of scope of `JULY/`).

### Step 4 — `events.html` + `gallery.html`
- `events.html`: add a **"July 2026 — Completed Programme"** timeline section above the planned initiatives (6 dated rows with venue + speaker), keep the 12 planned initiatives below. In "Weekly Club Meetings", fix the venue to **Rotary Suvarna Bhavan, Kuvempu Nagar** and replace the two invented "upcoming events" (blood camp / youth bootcamp with made-up times) with the real upcoming item: Team VISTARA 2026, 29–30 Aug.
- `gallery.html`: add the ~20 July photos and re-cut the filter tabs to **All · Installation Ceremony · Service Projects · New Member Programmes · Rotaract · Weekly Meetings**, updating `data-category` on the existing photos to match. Lightbox/filter JS needs no change.

### Step 5 — `about.html` + shared footer
- Meeting venue corrected to Rotary Suvarna Bhavan, Kuvempu Nagar (footer on all 5 pages + about contact block).
- Add current officers line (RI President Olayinka Hakeem Babalola · DG Rtn. B. M. Bhat · Zone IX B, District 3182) and the "first lady president of the club" fact.
- About page photo → `assets/july2026/installation_group.jpg`.

## 3. Decisions I need from you

1. **Prep-meeting date**: minutes + agenda say **1 July**, the bulletin says **2 July** (and Thursday 2 July fits the weekly-meeting pattern; 1 July was the KSOU project morning). I will use **2 July** unless you say otherwise.
2. **District number**: the minutes' letterhead says "District 3181"; the bulletin, the club banner in photos, and the whole site say **3182**. I will keep **3182** and treat 3181 as a typo in the minutes.
3. **`WIREFRAME —` banner** at the top of every page: now that the site carries real content, do you want it removed? (Not touching it unless you say so.)
4. **Rtn. Pani Kumar B's mobile number** appears in the bulletin — I will **not** publish it on the site unless you want it.
5. Venue spelling: using the bulletin's **"Nandagokula Convention Centre"** (minutes say "Nanda Gokula Convention Hall").

## 4. Notes / out of scope
- `JULY/` and `__MACOSX/` stay in the repo untouched; `__MACOSX/` is macOS junk and could be deleted separately if you want.
- No changes to `members.html` (the 12 inducted members are already there and match the July induction).
- New images add ~6 MB to the repo — normal for a static site, but say the word and I'll target ~1200 px instead of 1600 px.

## 5. Implementation log

Approved as planned; decisions 1, 2, 4 and 5 taken as proposed (2 July, District 3182, no phone number published, "Nandagokula Convention Centre"). The `WIREFRAME —` banner (decision 3) was **left in place** — say the word and it comes out of all six pages in one edit.

### New files
- **`assets/july2026/` — 24 images.** Built from `JULY/photos` (and two images extracted from `Meeting1.docx`) with Pillow: EXIF-rotated, longest edge 1600 px, JPEG q80, progressive, EXIF stripped. Total **3.9 MB**. `hero_installation_stage.jpg` is additionally centre-cropped to 16:10 for the home hero; everything else keeps its native frame and is cropped by CSS.
- **`assets/bulletins/mythri-july-2026.pdf`** — copy of `JULY/July Edition Mythri.pdf`, linked from the home page, the programme page and the about page.

### `index.html`
- Notification banner: past Independence Day event → **Team VISTARA 2026, 29 & 30 August 2026, Hassan** (badge emoji 🇮🇳 → 🏅).
- Hero photo → `july2026/hero_installation_stage.jpg` with a descriptive alt text.
- New **"July 2026 in Review"** section between the stat strip and the leadership grid (grey band, so the following leadership section reverts to white): three linked `work-card` anchors (Installation Ceremony · KSOU water purifier · Rotaract MCE) plus a MYTHRI PDF call-out.

### `work.html`
- July month box: `2 Impact Events` → `7 Impact Events`, icon 🩸 → 🎖️.
- The two invented July cards (Blood Donation Drives, Youth Skill Development) were removed; **7 real July cards** added (`data-work-id="j1"`…`"j7"`, day-level date badges, real photos). The two removed initiatives remain listed on `events.html` as planned initiatives and keep their `workInitiativesData` entries (`"1"`, `"5"`) for the months that still reference them.
- `workInitiativesData` gained `j1`–`j7` (title, tag, dated venue, description, outcomes, partner, 2–4 photos each **with `src`**), sourced from the MYTHRI July edition and the meeting minutes. The 12 planned entries are unchanged, now under a comment divider.
- Modal gallery now renders real photographs: `<img id="featuredImage">` + `.featured-caption` wrapper in the markup, `setFeaturedPhoto()` toggles `.has-photo`, thumbnails render `<img>` when a photo has `src`. Entries without `src` (Aug–Jun) still show the original dashed placeholders — verified by screenshot for both cases.
- **Bug fixed:** `filterByMonth()` set `card.style.display = 'flex'`, which turned the vertical cards sideways (photo squashed into a left column) whenever a month was selected. Now sets `display = ''` so the stylesheet's own layout applies. The same `'flex'` → `''` fix was applied to the gallery filter.
- Intro copy reworded so "completed record" vs "planned" is explicit.

### `events.html`
- New **"July 2026 Programme"** section above the planned initiatives: 7 dated `event-row`s (venue, speakers, outcomes) + buttons to `work.html` and the MYTHRI PDF. Planned-initiatives section moved onto the grey band to separate the two.
- Page title/hero reworded to "Programme & Planned Initiatives".
- Weekly meetings section: venue corrected to **Rotary Suvarna Bhavan, Kuvempu Nagar**, and the two invented "upcoming events" (blood camp / youth bootcamp, with made-up times) replaced by a single real one — Team VISTARA 2026 (2-column grid).

### `gallery.html`
- Filter tabs re-cut to **All · Installation Ceremony · Service Projects · New Member Programmes · Rotaract · Weekly Meetings**; grid rebuilt with the 24 July photos plus the two genuine event photos that were already there (`anns_team_group`, `president_family`). The five portrait headshots and the theme logo were dropped from the gallery — they are not event photography and still appear on the members/leadership pages.
- Hero copy updated. Filter + lightbox JS unchanged apart from the display fix.

### `about.html`
- Overview now notes the first-lady-president milestone, the 9 July installation and the 1 July KSOU project; photo → `july2026/classification_group.jpg` (16:10 block).
- Contact block: weekly meeting venue added; new **"Rotary Year 2026–27"** panel with RI theme, RI President Rtn. Olayinka Hakeem Babalola, DG Rtn. B. M. Bhat, and the MYTHRI July PDF link.

### `assets/css/style.css`
- `.hero-photo` aspect ratio `4/5` → `16/10` (all July photography is landscape).
- New rules for photo-backed modal galleries: `.gallery-main-featured.has-photo`, `.featured-img`, `.featured-caption`, `.thumb-block.has-photo`.

### Shared
- Footer contact block on all six pages: "Rotary Club House, Near B.M. Road" → **"Rotary Suvarna Bhavan, Kuvempu Nagar, Hassan, Karnataka"** (the club-house postal address is retained on the about page).

### Verification performed
- Every `src`/`href` in all six pages resolves to a file on disk; no `assets/july2026` image is orphaned.
- `node --check` on the inline scripts of `work.html` and `gallery.html`.
- Headless-Chrome screenshots reviewed for: home (hero + review section), work (all months, July filtered, August filtered), work modal with photos, work modal with legacy placeholders, programme, gallery (all + Rotaract filter), about. Temporary test copies were deleted; `git status` is clean of them.

### Not done / follow-ups
- `WIREFRAME —` banners still present on all pages (awaiting your call).
- August 2026 content is untouched — its month box still shows the planned "School Development Initiatives" card. `JULY/` and `__MACOSX/` remain untracked in the working tree; `__MACOSX/` is macOS junk and can be deleted whenever you like.
- Nothing was committed or pushed.
