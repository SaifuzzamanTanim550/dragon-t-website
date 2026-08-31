# Dragon T Bubble Tea

The website for Dragon T Bubble Tea, 685 Nostrand Avenue, Brooklyn NY.

Built with React and Vite. No database, no server — it is a static site, which
means it is cheap (usually free) to host and hard to break.

---

## Running it

You need Node.js version 18 or newer. In GitHub Codespaces it is already
installed.

```bash
npm install     # once, to download the dependencies
npm run dev     # start the site
```

The terminal prints a link, usually `http://localhost:5173`. Open it.

In Codespaces a popup appears offering to open the forwarded port — click
**Open in Browser**. If you miss it, use the **Ports** tab at the bottom of the
window.

The page reloads by itself every time you save a file.

### The other commands

```bash
npm run build     # make the production version, into dist/
npm run preview   # check the production version before deploying
```

---

## Where to change things

Most edits do not require touching any React code.

| I want to change...            | Open this file                    |
| ------------------------------ | --------------------------------- |
| Colours, fonts, spacing        | `src/styles/tokens.css`           |
| Address, hours, Instagram link | `src/data/site.js`                |
| Drinks, prices, categories     | `src/data/menu.js`                |
| Photos                         | `public/images/` — see its README |
| The "our story" writing        | `src/pages/About.jsx`             |
| Which photos are in the gallery| `src/pages/Gallery.jsx`           |

### Opening day

In `src/data/site.js`, change:

```js
comingSoon: true,
```

to `false`. That single switch removes the "opening soon" badge, the planned
hours warning, and the note about prices, and turns the order drawer's copy
button into a checkout button.

### Adding a drink

Add an entry to the `drinks` array in `src/data/menu.js`, copying the shape of
one that is already there. Put its photo in `public/images/drinks/` with the
filename you used in the `image` field. That is all.

### Adding prices

Every drink currently has `price: null`, which hides the price. Change it to a
string, for example:

```js
price: '6.25',
```

---

## How the folders are organised

```
dragon-t-website/
├── index.html              page shell, fonts, and social preview tags
├── package.json            dependency list and commands
├── vite.config.js          dev server settings
│
├── public/
│   └── images/             photos go here — see the README inside
│
└── src/
    ├── main.jsx            starts the app
    ├── App.jsx             routing — which URL shows which page
    │
    ├── data/
    │   ├── site.js         address, hours, links, opening status
    │   └── menu.js         drinks, categories, toppings
    │
    ├── pages/              one file per page
    │   ├── Home.jsx
    │   ├── Menu.jsx
    │   ├── About.jsx
    │   ├── Visit.jsx
    │   ├── Gallery.jsx
    │   ├── Contact.jsx
    │   └── NotFound.jsx
    │
    ├── components/         reusable pieces shared between pages
    │   ├── Nav.jsx         top navigation
    │   ├── Footer.jsx
    │   ├── NeonSign.jsx    the glowing wordmark
    │   ├── Photo.jsx       photo with placeholder fallback
    │   ├── DrinkCard.jsx
    │   ├── Reveal.jsx      scroll-in animation wrapper
    │   └── OrderDrawer.jsx the order panel
    │
    ├── hooks/
    │   └── useOrder.jsx    order state, shared across the site
    │
    └── styles/
        ├── tokens.css      colours, fonts, spacing — start here
        ├── base.css        resets and defaults
        └── app.css         everything else
```

---

## Design notes

The colours come from the shop's own photography rather than a generic
palette:

| Token         | Value     | Taken from                         |
| ------------- | --------- | ---------------------------------- |
| `--ink`       | `#150E07` | boba pearls and the logo outline   |
| `--parchment` | `#F4EADA` | the Dream 11 poster background     |
| `--taupe`     | `#DCCDB9` | the Brown Sugar advert background  |
| `--flame`     | `#E85D19` | the logo orange                    |
| `--ember`     | `#C4231A` | the neon sign red                  |
| `--jade`      | `#4F6B3A` | the matcha cups                    |

The site alternates between two registers: dark sections that read like the
shop at night, and parchment sections that read like the printed menu. That
split is how the brand already presents itself.

Typography is Archivo for headings and interface, Zilla Slab for drink names
and reading text.

The one piece of motion nobody asked for is the neon sign flickering on when
the home page loads. Everything else moves only in response to something the
visitor did — scrolling to a section, filtering the menu, opening the order.

Anyone whose device is set to reduce motion gets a completely still site.

---

## Things still to do

- [ ] Add real photos to `public/images/` (see the README there for filenames)
- [ ] Confirm the opening hours in `src/data/site.js`
- [ ] Rewrite the "our story" text in `src/pages/About.jsx` with the real story
- [ ] Add prices to `src/data/menu.js` once they are set
- [ ] Connect the contact form to a form service (notes at the top of
      `src/pages/Contact.jsx`)
- [ ] Add a phone number and email to `src/data/site.js` if you want them shown
- [ ] Flip `comingSoon` to `false` on opening day

---

## Putting it online

Three options, easiest first.

### Netlify

1. Go to netlify.com and sign in with GitHub.
2. Choose **Add new site → Import an existing project**, and pick this repo.
3. Build command `npm run build`, publish directory `dist`.
4. Deploy.

The `public/_redirects` file is already included, which is what stops pages
from 404ing when someone refreshes on `/menu`.

### Vercel

Same idea at vercel.com. It detects Vite on its own, so you can accept the
defaults.

### GitHub Pages

Works, but needs extra configuration for the routing. Netlify or Vercel is
less trouble for a site with multiple pages.

Both Netlify and Vercel redeploy automatically every time you push to GitHub.

---

## Accessibility

The site was built to work for everyone, so please keep these in place when
editing:

- Every photo needs an `alt` description of what is in it.
- Keyboard focus outlines are visible; do not remove them in CSS.
- Colour contrast on text meets WCAG AA.
- Animations respect the system reduce-motion setting.
- Headings go in order (one `h1` per page, then `h2`, then `h3`).
