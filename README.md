# Trailer Solution

Marketing website for **Trailer Solution**, a trailer manufacturer based in
Ras Al Khor Industrial Area 2, Dubai, building trailers since 2013.

Live site: [trailers-solution.com](https://trailers-solution.com)

## About the site

A static site — plain HTML, CSS and JavaScript with no build step, no
framework and no dependencies to install. Open `index.html` in a browser
and it runs.

### Pages

| Page | Purpose |
|---|---|
| `index.html` | Homepage — about, product range, GCC export, services, workshop video, reviews, contact |
| `a-frame-trailer.html` | A-Frame trailers |
| `flatbed-stake-trailer.html` | Flatbed and stake body trailers |
| `curtain-side-trailer.html` | Curtain-side trailers |
| `box-reefer-trailer.html` | Box and reefer trailers |
| `heavy-duty-cargo-trailer.html` | Heavy-duty cargo trailers |
| `car-carrier-trailer.html` | Car carrier trailers |
| `engineering.html` | How the trailers are built — seven-stage process |
| `gcc-export.html` | Buying from Saudi, Oman, Qatar, Kuwait or Bahrain |
| `quote.html` | Quotation request form |

### Features

- **Bilingual** — English and Arabic, with a full RTL layout. Translation is
  handled client-side in `js/i18n.js`; the chosen language persists in
  `localStorage`.
- **SEO** — JSON-LD structured data (`Product`, `Offer`, `FAQPage`,
  `LocalBusiness`, `Organization`, `BreadcrumbList`), canonical URLs,
  hreflang, Open Graph and Twitter cards, plus `sitemap.xml` and `robots.txt`.
- **Quote form** — composes the enquiry and opens WhatsApp. No backend.
- **Workshop video** — lightbox player on the homepage.
- **Contact popovers** — the footer icons reveal the phone number and email
  with a copy button, rather than firing `tel:` / `mailto:` blindly.

## Structure

```
.
├── index.html            # homepage
├── *.html                # product, engineering, export and quote pages
├── css/styles.css        # all styling
├── js/
│   ├── main.js           # nav, reveal animations, counters, lightbox, form
│   └── i18n.js           # Arabic dictionary and language switching
├── images/               # photography and cutouts used by the site
├── videos/               # workshop footage
├── robots.txt
└── sitemap.xml
```

## Running it locally

No tooling required — open `index.html` directly.

To serve it over HTTP instead (needed if you want the videos to seek
properly):

```bash
ruby -run -e httpd . -p 4599
```

Then visit <http://localhost:4599>.

## Deploying

The site is static, so any host that serves files will do — Netlify,
Cloudflare Pages, GitHub Pages or ordinary shared hosting. Upload the
contents of this repository to the web root.

Two things to set on the host:

1. **Force HTTPS.**
2. **Pick one canonical hostname.** The pages' canonical tags use the bare
   `trailersolution.ae`, so redirect `www` to it.

## Asset versioning

CSS and JS are referenced with a `?v=N` query string that is bumped together
whenever either changes, so returning visitors don't get a stale cached copy.

## Notes

- `hreflang` tags point at `/ar/`, which does not exist yet. Either build
  those pages or remove the tags before relying on search indexing.
- The homepage carries several large PNGs. Converting them to WebP and
  lazy-loading the below-fold images would cut the page weight substantially.

## Contact

Ras Al Khor Industrial Area 2, Dubai, United Arab Emirates
+971 54 461 9553 · rashidm7mmd@gmail.com
