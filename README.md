# WAO CARGO website — DRAFT (Option A, static site)

Built 2026-11-08 (Sunday evening) from the user's site spec
(`~/workspace/user/files/waocargo_site_instructions.md` and
`waocargo_site_instructions-2.md`, both sent 2026-11-08) after his decision
the same day to launch on **Option A — static site, $0** for the Nov 24, 2026
recruitment launch. **Not published anywhere.** This is a local draft for
review; deploying to Cloudflare Pages still needs the open Cloudflare-account
question answered.

Updated 2026-11-08 evening: the 3 real logos are swapped in, and the
address, WhatsApp number and contact@waocargo.com are on the site.
Favicon added the same evening (assets/favicon.png, referenced on all
18 pages).

Amendment #1 applied 2026-11-09 (user file `Index.md`): the home page is
now a splash gateway (see below); header logo 130px with a trilingual
slogan and no “WAO CARGO” text; footer brand right-aligned as
“Wao Cargo Inc.” with a 130px logo; Terms of Service and Privacy Policy
written in EN / FR / ES.

## How to preview

Open `index.html` in a browser (double-click it), or serve the folder with any
static server. No build step.

## What is in the draft

- `index.html` — splash / language gateway (Amendment #1): full-screen
  `cargo-banner.jpg` background, centered `waocargo-hero-index.png` logo,
  and 3 flag icons (US / France / Spain) linking to `home.html?lang=en`,
  `?lang=fr`, `?lang=es`. No header, no content — it is the front door.
- `home.html` — the actual home page (moved from the old `index.html`):
  fixed header (Home, Services → To Carriers / To Brokers, Contact),
  animated rotating hero message, For Carriers section (services + 9% semis
  / 7% hotshots-box trucks pricing), For Brokers section, Our Platform
  section (QuickManage AI + DAT One, Truckstop, 123Loadboard), Contact form,
  and the 4-column footer.
- `styles.css` — SUSE font, primary `#0e0e34`, secondary `#fc410e`,
  backgrounds `#eeeeee` / `#272727`, footer `#eeeeee`. Buttons: 0px radius,
  15px right border in the opposite colour, hover swaps background and
  right-border colours — exactly as specified. Header logo 130px with the
  slogan underneath (secondary colour, menu-item size); footer brand
  right-aligned, company name not bold in `#99999a`, footer logo 130px.
- `script.js` — EN / FR / ES language switcher (54 strings translated on the
  home page) + the animated hero rotator (4 messages per language).
  `?lang=` links (from the splash) and the saved language (localStorage)
  are honoured on every page; legal pages use `data-lang-block` sections
  so each language shows its own text.
- `pages/` — 17 stub pages, one per footer link (Context 4, Notice 4,
  Services 4, Integration 5), each with a short draft starter grounded in
  the goal's service-offer file. Terms of Service and Privacy Policy are
  now full texts in EN / FR / ES (see below); the other 15 stubs are still
  EN-only starters. Legal pages are marked DRAFT and must be reviewed by a
  professional before launch.
- `assets/` — the 3 real logos (received 2026-11-08, swapped in from the
  user's SVGs: dark-backgrounds → `logo-dark.svg`, light-backgrounds →
  `logo-light.svg`, footer → `logo-footer.svg`) + `favicon.png` (the user's
  Wao-Herp-Favicon.png, 100×100, referenced on every page) +
  `cargo-banner.jpg` (splash background, 1600×1065 — compressed 2026-11-09
  from the 3.4 MB PNG to a 275 KB JPEG, same image) +
  `waocargo-hero-index.png` (splash logo, 350×200, transparent) +
  `icon1.svg` (US flag → English), `icon2.svg` (French flag),
  `icon3.svg` (Spanish flag).

## Placeholders / TODOs before launch

1. **The 3 real logos** — ✅ done 2026-11-08 evening. The user's SVGs are
   in `assets/` as `logo-dark.svg`, `logo-light.svg`, `logo-footer.svg`.
   (Note: `logo-light.svg` is in place but not yet shown anywhere on the
   page — the header uses the dark version, the footer its own. It is ready
   for any light-background spot.)
2. **Meta Pixel ID** — placeholder comment in `index.html` head. Paste the
   Pixel ID from Meta Events Manager before Nov 24 so the campaign can use
   it from day 1.
3. **Social links** — WhatsApp is live (`https://wa.me/14386388890`,
   +1 (438) 638-8890, footer icon + Contact section). Facebook Page URL and
   Instagram profile still link to `#` — fill those in when known.
4. **Contact form** — ⏸️ HubSpot embed NOT used for now (user, 2026-11-09):
   one HubSpot form displays in a single language only (English), so the
   site keeps the `mailto:contact@waocargo.com` form, which translates with
   the language switcher. The HubSpot code is kept on file (portal 343862772,
   form `aef52dba-8a84-4500-ada5-fa1b1f698194`, region na3) — to use HubSpot
   later, create one form per language (EN / FR / ES) and the site will show
   the matching one. The email / address / WhatsApp line below the form stays
   as a fallback contact path.
5. **Address** — ✅ on the site (Contact section + footer):
   1876 rue Gareau, Longueuil, QC J4N 1E4, Canada.
6. **Legal pages** — ✅ written in EN / FR / ES (Terms: services, fees,
   no forced dispatch, carrier obligations, payments, cancellation,
   liability, Quebec law; Privacy: collection, use, sharing, cookies,
   retention, rights under PIPEDA + Quebec Law 25). Still DRAFT: they must
   be reviewed by a professional before launch. Note: the amendment wrote
   “PIPETA law” and “Quebec Law 35” — read as typos for PIPEDA and Quebec
   Law 25 (the private-sector privacy law); confirm if other laws were
   meant.

## One question for the user — the two spec files differ

He sent the spec twice (22:51 and 22:57, Nov 8). The second file silently
drops two items that were in the first:

- **QuickManage AI TMS + the top 3 load boards** (first file §3: "Wao Cargo
  will use the TMS QuickManage AI … and at least the main 3 loadboards")
- **The animated message on the home page** (first file §5: "animated gift
  iconic message between images and text")

The draft **includes both** (Our Platform section + rotating hero), on the
assumption the second file lost them in re-saving rather than by intent.
If he meant to drop them, removing them is a one-line change — just say so.

## Two spec typos, fixed with the closest valid values

- Footer background written `#eeeee` (5 digits, invalid) → used `#eeeeee`.
- Footer font colour written `#9999A` (invalid) → used `#99999a`.

## What is NOT in this draft

- No deployment, no DNS change, no Cloudflare wiring (needs his account).
- No Meta Pixel, no Messenger plugin (Pixel ID not yet created).
- No income/revenue claims anywhere (per the service-offer file's FTC caution:
  no unqualified earnings promises).
- No new facts invented: pricing, services, equipment, onboarding checklist
  and platform claims come from `offre-de-services.md`, QuickManage's own
  site (quickmanage.ai, read 2026-11-08) and the 2026 load-board comparisons
  (DAT One largest, Truckstop, 123Loadboard).

## Next steps

1. ~~User sends the 3 SVG logos → swap into `assets/`.~~ ✅ Done 2026-11-08.
2. ~~User answers: keep QuickManage + animated hero, or drop them?~~ ✅ KEEP both (user, 2026-11-09).
3. Fill Pixel ID + Facebook / Instagram links; ~~decide on phone number~~ (WhatsApp is the public number).
4. ~~User pastes the HubSpot form embed code (announced in Amendment #1 but not included) → wire the contact form.~~ ⏸️ Deferred by the user 2026-11-09 — one HubSpot form shows in one language only; revisit with 3 forms (EN / FR / ES).
5. Professional review of the Terms + Privacy texts.
6. Review the home page copy (EN/FR/ES) and the 15 remaining stub pages.
7. Deploy to Cloudflare Pages once the Cloudflare-account question is settled.
