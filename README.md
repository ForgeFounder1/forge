# Forge

Forge is a PCPartPicker-style guide for truck and car enthusiasts. Pick your platform and see popular parts with checked prices, wheel and tire fitment by stance, common problems and fixes, DIY and swap guides with torque tables, and owner tips. Every fact links to its source and carries a confidence badge. A build sheet keeps a running total per platform.

## Platforms (10)
GMT800 (1999–2007), Ford F-150 (2004–2014), Ram 1500 (2009–2018), GMT900 (2007–2014), Toyota Tacoma (2005–2023), Jeep Wrangler JK/JL (2007–present), Ford Mustang S197/S550 (2005–2023), Chevrolet Camaro 5th gen (2010–2015), Honda Civic 8th–10th gen (2006–2021), Subaru WRX VA with STI notes (2015–2021).

## How to open
Double-click `index.html`. It works offline from `file://`: no server, no network, no `fetch()`. It uses the phone's own system font, so there is nothing to download. Builds and the vehicle photo are saved in your browser's `localStorage` on this device only.

## Files
- `index.html`: shell, footer disclaimer, one `<script>` tag per platform file.
- `styles.css`: light theme, mobile-first. All colors are CSS variables at the top (`--bg`, `--ink`, `--accent`, `--safety`, ...); change them there.
- `app.js`: routing and rendering. Screens: `#/` My garage (saved vehicles, global search), `#/garage/add` vehicle picker, `#/p/<id>` platform home (section menu + platform search), `#/p/<id>/parts` categories, `#/p/<id>/parts/cat-<n>` or `/all` filtered list with sort, `#/p/<id>/parts/<partId>` part detail, `#/p/<id>/problems[/<id>]` symptom lookup and detail, `#/p/<id>/guides[/<id>]`, `#/p/<id>/wheels`, `#/p/<id>/overview` (specs), `#/p/<id>/tips`, `#/build`. Phones get a bottom tab bar (Garage, Parts, Fix, Guides, Build); desktop shows the same in the top bar.
- `data/platforms/<id>.js`: one file per platform; each sets `window.FORGE_PLATFORMS[<id>]`.
- `DATA-FORMAT.md`: the exact platform object schema and source-classification rules.
- `shots/`: headless screenshots (390 px and 1280 px).

## Adding a platform
1. Write a build script (see `/workspace/forge/scripts/build_app_*.js` and the per-platform module folders) that assembles the object described in `DATA-FORMAT.md` and writes `data/platforms/<id>.js`. The scripts strip em-dashes and check part references.
2. Add one line to `index.html`: `<script src="data/platforms/<id>.js"></script>`.
3. If the platform was in the catalog at the top of `app.js`, give the catalog entry the same id (or remove it). Catalog entries without a data file are listed under "More platforms coming".
4. Run `node /workspace/forge/test/shots.js`. It screenshots every screen, adds parts to the build sheet, searches, and fails on console errors, em-dashes or horizontal overflow.

## Data accuracy policy
- Numbers are copied exactly from the source: never invented, rounded or converted unless the source gives both units.
- Every fact keeps its source link and a confidence badge: **Verified** (factory documents, or manufacturer/retailer pages that were opened), **Verified (secondary)** (service-manual mirrors, reference sites), **Forum-reported** (forums and blogs), **Video-reported** (cited by title, not watched), **Unconfirmed** (snippets, blocked pages), **Unknown**.
- Conflicting sources are shown side by side and flagged **Disputed**; nothing is silently resolved.
- Gaps go in each platform's "Still unknown" list.
- Prices are what the page listed on the checked date (shipping and tax not included). Ranges use the lowest price with the range in the note; unverified prices are kept out of the build total. Where a research guide recorded only a store name, the link goes to the store home and says so.
- Safety items (recalls, lug-torque differences, known failure modes) appear as red banners on every screen of the platform (open on the platform home, tap to expand elsewhere).
- Prices change and fitment varies: verify with the seller, and check torque against the factory service manual.
