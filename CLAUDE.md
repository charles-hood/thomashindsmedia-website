# Thomas Hinds Media - Website Refresh

## Project Overview

This is a complete redesign of thomashindsmedia.com for Thomas Hinds, a solo acoustic artist and troubadour currently based in northern Georgia (relocated from New Mexico). The legacy site was a basic WordPress theme (Euphony by Catch Themes) with limited navigation and outdated content.

**Hero tagline:** "Solo Acoustic Artist & Poetic Troubadour"
**Hero subtitle:** "Songs of life, love & finding oneself" (from his legacy bio)

**Repository:** https://github.com/charles-hood/thomashindsmedia-website

## Goals

1. **Modernize the design** - Create a professional, dark/warm aesthetic fitting the troubadour brand
2. **Follow musician website best practices** - Based on research of sites like Charley Crockett, Sons of the East
3. **Include all essential sections** - Music, Tour, About, Press/EPK, Videos, Newsletter, Contact
4. **Use real assets** - Pull actual images, links, and content from legacy site and web sources
5. **Static HTML/CSS** - Simple, fast, easy to host anywhere

## Tech Stack

- **HTML5** - Semantic markup, accessible
- **CSS3** - Custom properties, Grid, Flexbox, responsive
- **Vanilla JavaScript** - Mobile nav, smooth scroll, scroll-triggered animations
- **No build tools** - Plain files, run with any static server
- **Python venv** - Used for generating favicons (Pillow) and PDFs (WeasyPrint)

## Project Structure

```
threfresh/
├── index.html              # Single-page site with all sections
├── css/
│   └── styles.css          # All styling (~1500 lines)
├── js/
│   └── main.js             # Interactivity, scroll animations
├── images/
│   ├── hero-bg.jpg               # Hotel room shot (Dec 2025 update)
│   ├── logo.png                  # From legacy site (white TH logo)
│   ├── thomas-about.jpg          # Colorful floral backdrop (for About section)
│   ├── thomas-bio.jpg            # Honky-tonk live shot (for Portrait download)
│   ├── thomas-press-new.jpg      # Blue stage shot (for Press Photo download)
│   ├── thomas-portrait.jpg       # From CanvasRebel interview (legacy)
│   ├── thomas-press-1.jpg        # Additional press photo (legacy)
│   ├── thomas-headshot-bw.jpg    # B&W headshot
│   ├── thomas-live-stage.jpg     # Blue stage performance shot
│   ├── album-hotel-room-songs.jpg # 2026 upcoming album art
│   ├── album-along-the-road.jpg  # 2025 live album
│   ├── album-where-do-we-go.jpg  # 2023 FAME Studios album
│   ├── album-heart-attacks.jpg   # 2022 EP
│   └── album-resurrection-road.jpg # 2019 album (removed from site, kept in repo)
├── press/                  # EPK downloadable assets
│   ├── bio-short.txt       # ~100 word bio
│   ├── bio-long.txt        # Full bio with discography, links
│   ├── epk.html            # Full EPK one-pager (for Thomas to use)
│   ├── epk.pdf             # PDF version of EPK
│   ├── one-sheet.html      # Styled HTML one-pager
│   ├── one-sheet.pdf       # PDF version
│   ├── tech-rider.html     # Styled HTML version (removed from site)
│   └── tech-rider.pdf      # PDF with stage plot (removed from site)
├── favicon-16.png          # Browser favicon (small)
├── favicon-32.png          # Browser favicon (standard)
├── apple-touch-icon.png    # iOS home screen icon
├── .venv/                  # Python virtual environment
└── CLAUDE.md               # This file
```

## Design Decisions

### Aesthetic: "Dusty Americana Editorial"

Evolved from initial dark/warm to a more refined editorial aesthetic evoking worn vinyl sleeves, road-trip film photography, and vintage music magazine spreads.

**Color Palette (updated):**
- Background dark: #0a0908 (warmer than pure black)
- Background medium: #151311
- Background light: #1f1c19
- Text primary: #e8e4df (warm white)
- Text secondary: #a39e96
- Accent primary: #c9a66b (dusty gold/ochre)
- Accent dim: #3d3426 (for borders, subtle elements)

**Typography (updated):**
- **Bebas Neue** - Bold condensed display font for hero title, section headings
- **Cormorant Garamond** - Elegant serif for body headings, quotes, italic text
- **Libre Franklin** - Clean sans-serif for body text, labels, navigation

**Key Design Elements:**
- Subtle film grain overlay across entire site (SVG noise filter)
- Cinematic vignette on hero with warm sepia color cast
- Sharp-cornered buttons (no border-radius) with sweep hover effects
- Section titles with decorative lines above/below
- Quote cards with large decorative quotation marks
- Editorial photo frames with offset borders
- Staggered scroll-triggered reveal animations

### Sections Included

| Section | Purpose |
|---------|---------|
| Hero | Full-screen intro with streaming links, CTAs, moody hotel room background |
| Music | 4-album grid (Hotel Room Songs coming soon, plus 3 releases) with Spotify embed |
| Tour | Bandsintown widget only (no hardcoded dates) |
| About | Bio, stats (500K miles, #86 charts, 2 books), portrait photo, links to books and poetry page |
| Press/EPK | Downloadable bios (TXT), press photos (JPG), one-sheet (HTML+PDF) |
| Videos | Featured video + YouTube channel embed |
| Newsletter | Email signup form (needs backend connection) |
| Contact | Booking email, contact form, social links, house concerts mentioned |

## Real Content Sources

### From Legacy Site (thomashindsmedia.com)
- White logo PNG
- Booking email: thomashindsschedule@gmail.com
- Extended bio text (used for long bio, about section)

### From Thomas (Direct - December 2025)
- Updated bio text with 500K miles stat (instead of 70K/year)
- New album announcement: Hotel Room Songs (2026) - 13 tracks, first single Jan 27
- Recording info: FAME Studios acoustic track + Miles Landrum (West End Sound) in Atlanta
- Second book: In The Details (2024 second edition)
- New YouTube video: https://youtu.be/wpLapaf7ElQ
- New press photos from Google Drive folder:
  - 80714D85 → hero-bg.jpg (moody hotel room shot)
  - IMG_1127 → thomas-about.jpg (colorful floral backdrop)
  - IMG_5309 → thomas-bio.jpg (honky-tonk live shot)
  - th 7 color-High-3264 → thomas-press-new.jpg (blue stage shot)
  - phonto 31 → album-hotel-room-songs.jpg (album art)
  - DSC09301_b&w → thomas-headshot-bw.jpg (B&W headshot)
- Technical rider removed from site (per Thomas's request)
- Bookings go directly through Thomas (not through manager)

### From Thomas's EPK PDF
- Manager: Erin at Grace Under Pressure Management (erin@graceunderpressuremanagement.com, 845.544.3074)
  - Note: Bookings still go through Thomas directly
- Little Star PR quote: "Thomas Hinds creates a one-of-a-kind amalgamation of sounds, with organ lines that are somehow both mellow and wailing alongside flowing streams of steel string slides and fingerpicked guitars."

### From Spotify
- Artist ID: 7wOxMZgaCVFRwfRT9tvqDH
- Discography: Hotel Room Songs (2026 upcoming), Along The Road (2025), Where Do We Go From Here (2023), Heart Attacks & Sweet Dreams (2022), Resurrection Road (2019), Barbwire Bouquet (2017), Ghosts and Lamentations (2015)

### From Bandcamp (thomashindsmedia.bandcamp.com)
- Album artwork for all releases

### From CanvasRebel Interview
- Press photos (legacy)
- Bio details: 500K miles over 6 years, SXSW 2024, #86 Americana charts
- YouTube channel ID: UC8-LYxz-roWjmf31PY48R4g

### From It's Psychedelic Baby Magazine Interview
- Press quotes
- Recording details (FAME Studios, Muscle Shoals)
- Influences: Dylan, Anna Tivel, Jeffrey Martin, Jon Charles Dwyer
- Personal quote: "Music has always and will always be a shelter in the storms of life for me. I write out the melancholy so I can purge it."

### Social Links (verified & updated)
- **Facebook (main):** facebook.com/profile.php?id=61552916633069
- **Facebook (poetry/writing):** facebook.com/hindsightmusings
- **Instagram:** instagram.com/hindsight_musings
- **TikTok:** tiktok.com/@hindsight_musings
- **YouTube:** youtube.com/user/Tbone77777
- **Patreon:** patreon.com/thomashindsmusic
- **Merch (Shopify):** thomas-hinds-media.myshopify.com
- **Apple Music:** music.apple.com/us/artist/thomas-hinds/1004862632
- **Bandcamp:** thomashindsmedia.bandcamp.com

### Book & Author Links
- **Ghost of a River (2022):** amazon.com/Ghost-River-Thomas-Hinds-ebook/dp/B0BKWLL678
- **In The Details (2024 second edition):** amazon.com/Details-Thomas-Hinds/dp/B0DP6WMHQ3
- **Amazon Author Page:** amazon.com/stores/author/B0BPJRKDQV

## EPK Assets

Created downloadable Electronic Press Kit materials:

| Asset | Format | Notes |
|-------|--------|-------|
| Short Bio | TXT | ~100 words, contact info |
| Long Bio | TXT | Full bio, discography, all links, booking info |
| EPK | HTML + PDF | Full one-page EPK for Thomas to send to venues (press/epk.pdf) |
| One Sheet | HTML + PDF | Photo, bio, quotes, stats, streaming links, contact |
| Press Photos | JPG | Portrait (thomas-bio.jpg) and Press Photo (thomas-press-new.jpg) |

**Note on formats:** Bios kept as TXT for easy copy/paste. EPK and one-sheet as PDF for professional appearance.

**Technical Rider:** Removed from website per Thomas's request (files still exist in repo but not linked).

## Key Decisions & Rationale

### Why "Songs of life, love & finding oneself" for subtitle
- Directly from Thomas's legacy bio - his own words
- Describes what his music is about (the "why")
- Avoids geographical claims (he's not FROM Georgia, just based there)
- The tagline already says WHAT he is; subtitle says what the music is ABOUT

### Why not "Northern Georgia troubadour"
- Thomas relocated from New Mexico; not a Georgia native
- Could be misleading for booking purposes
- Geography is mentioned appropriately in About section instead

### Why TXT for bios instead of PDF
- Press/media often copy/paste bio text into their own materials
- TXT is universally accessible, no formatting issues
- PDF would require extra steps to extract text

### Why Bandsintown only for tour dates
- Thomas manages his own shows through Bandsintown
- No need to maintain hardcoded dates that go stale
- Widget auto-updates when Thomas adds shows

### Booking flexibility
- Thomas can perform: solo (most common), duo, trio, or full band
- House concerts explicitly mentioned in contact section
- Bookings go directly through Thomas (thomashindsschedule@gmail.com)

## Running Locally

```bash
cd /Users/charles/Projects/threfresh
python3 -m http.server 8080
# Open http://localhost:8080
```

## Regenerating PDFs

If you need to regenerate the PDF files after editing the HTML:

```bash
cd /Users/charles/Projects/threfresh
source .venv/bin/activate
python3 << 'EOF'
from weasyprint import HTML
HTML('press/epk.html').write_pdf('press/epk.pdf')
HTML('press/one-sheet.html').write_pdf('press/one-sheet.pdf')
print("PDFs regenerated")
EOF
```

## Next Steps / TODO

- [x] ~~Add real tour dates~~ ✓ Replaced with Bandsintown widget
- [x] ~~Update bio with Thomas's December 2025 revisions~~ ✓ Done (500K miles, Hotel Room Songs, second book)
- [x] ~~Download new press photos from Google Drive folder~~ ✓ Done
- [x] ~~Create downloadable EPK assets~~ ✓ Done
- [x] ~~Add favicon~~ ✓ Done (TH logo on dark background)
- [x] ~~Integrate Bandsintown dates~~ ✓ Done (widget active, Thomas adding shows)
- [x] ~~Create EPK PDF for Thomas~~ ✓ Done (press/epk.pdf)
- [x] ~~Add Hotel Room Songs coming soon~~ ✓ Done (featured album position)
- [x] ~~Update hero image~~ ✓ Done (moody hotel room shot)
- [ ] Connect newsletter form to Mailchimp/ConvertKit
- [ ] Connect contact form to Formspree or similar
- [ ] Optimize images for web (compress)
- [ ] Consider adding social feed (Juicer.io) - tabled for now, may add later

## Research Sources

- [Site Builder Report - Singer-Songwriter Websites](https://www.sitebuilderreport.com/inspiration/singer-songwriter-websites)
- [Bandzoogle - Templates for Musicians](https://bandzoogle.com/blog/16-website-templates-for-musicians-and-bands)
- [Charley Crockett](https://www.charleycrockett.com) - Design reference
- [Sons of the East](https://www.sonsoftheeast.com) - Design reference
- [CanvasRebel - Thomas Hinds Interview](https://canvasrebel.com/meet-thomas-hinds/)
- [It's Psychedelic Baby Magazine - Interview](https://www.psychedelicbabymag.com/2023/07/thomas-hinds-interview-new-album-where-do-we-go-from-here.html)

---

*Last updated: December 17, 2025*
