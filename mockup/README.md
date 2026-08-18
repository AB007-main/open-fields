# Open Fields mockup

A clickable, static mockup of a site that shows where you can play, whether the
goals are up, and whether the field is playable right now. Built to settle the
look and the feature set before any real app code gets written.

Working title. Name and domain still to be chosen.

## Open it

```bash
cd /Users/ab/Claude/Ai_Code/open-fields/mockup
python3 -m http.server 8080
```

Then:

- **`http://localhost:8080/index.html`** on this Mac
- **`http://192.168.1.144:8080/index.html`** on your phone, same wifi

Opening `index.html` by double-clicking also works, but the local server is
closer to how the real site behaves. An internet connection makes it look right , 
fonts come from Google Fonts and map tiles from OpenStreetMap via CARTO. Offline,
type falls back to system fonts and the map shows a grid placeholder.

## The pages

| File | What it is |
|---|---|
| `index.html` | Landing, hero, search, scoreboard, featured fields |
| `map.html` | The product: map + filterable list, with location search and today's conditions |
| `field.html` | One field in full. Try `?id=ocee-park`, `?id=big-creek` (unplayable), `?id=laurel-park` (closed) |
| `submit.html` | Add a field, with a drop-a-pin map |
| `admin.html` | Admin dashboard, KPIs, activity, moderation queue, signups, stale fields |
| `about.html` | Why it exists and how the data stays accurate |
| `contact.html` | Bugs, bad listings, takedown requests |
| `theme.html` | The design system on one page |
| `brand.html` | The mark, lockups, variants, and exported assets |
| `privacy.html` `terms.html` `404.html` | Placeholder legal + error pages |

## Try these three things

1. **Sign in.** Top right, it's a fake session in `localStorage`, no backend. It
   flips the comment box on the field page from a sign-in gate to a real composer.
   "Sign out" puts it back.
2. **Filter the map.** The chips filter the list *and* the pins together. Try
   "Playable today" against "Goals up now", they're different questions, which is
   the whole point of the conditions layer.
3. **Open a field on your phone.** The Google/Apple Maps buttons are real and will
   open real directions.

## What's real and what isn't

**Real:** the map, pins and popups, filters, list↔pin highlighting, the mobile
bottom sheet, the star picker, the fake session, and the Maps deep links.

**Invented:** every field's status, condition, rating, comment and "confirmed N
days ago". Park names are real Atlanta area parks with approximate coordinates
so the map looks plausible, but nobody has verified a single goal. Every admin
number is made up. Nothing saves, nothing sends, there is no database.

## Three decisions worth arguing about

1. **Two independent signals.** "Are there goals" and "is it playable today" are
   tracked separately and never merged. A turf field with two goals is useless if
   it's a swamp, and a field with no report today isn't the same as a bad one.
2. **Green is reserved.** Green means a person confirmed something recently. It is
   never decoration. Amber is seasonal or stale, gray is never-checked, red is closed.
3. **Pins don't rely on colour.** Green and amber separate by only ΔE 8.2 for
   protanopia, so the ring style carries the state too, solid confirmed, dashed
   seasonal, dotted unverified. Same reason every badge has a word in it.

## Changing the look

Everything is in `styles.css`. The tokens at the top, eight colours, three
typefaces, four metrics, drive every screen. Change `--turf` and the pins,
buttons, badges and status bars all follow. `theme.html` is the fastest way to see
the result.

## Files

```
index.html map.html field.html submit.html admin.html   the app
about.html contact.html privacy.html terms.html 404.html  supporting pages
theme.html brand.html                                     design references
styles.css      the entire theme, tokens at the top
mock-data.js    21 fabricated fields, comments, admin figures
app.js          chrome, icon sprite, cards, map, sparkline, fake session
brand/          mark.svg, favicon.svg, og-image.png (1200×630), icon-512.png
```

`app.js` holds `directionsUrl()`, `freshness()` and `conditionBadge()`, all three
carry over to the real app close to as-written.

## Known gaps

Deliberately not built yet, in rough priority order:

- No backend. No accounts, no database, no persistence of any kind.
- Search doesn't search, it navigates to the map.
- One sport's worth of real thinking. The data model carries `sports` and the map
  filters on it, but the copy is still lacrosse-first.
- No profile page, no favourites, no notifications.
- Privacy and terms are placeholders and need real review before launch.
- No automated tests. Playwright would cover the click-through paths.
