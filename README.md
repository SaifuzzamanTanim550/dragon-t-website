# Photos

Drop image files into this folder and they appear on the site automatically.
No code changes needed. Until a file exists, the site shows a labelled
placeholder in its place, so nothing ever looks broken.

The placeholder on the page tells you the exact filename it is waiting for.

## Filenames the site is looking for

### This folder (`public/images/`)

| Filename                | Where it appears           | Best shape        |
| ----------------------- | -------------------------- | ----------------- |
| `storefront.jpg`        | Home page hero background  | Wide, 16:10       |
| `brown-sugar-duo.jpg`   | Home page, brown sugar     | Tall, 3:4         |
| `neon-sign.jpg`         | Home page, visit section   | Tall, 3:4         |
| `interior.jpg`          | Our story page             | Wide, 16:9        |
| `favicon.png`           | Browser tab icon           | Square, 64×64     |

### Drinks (`public/images/drinks/`)

Every drink photo is 4:5 (tall). Create a `drinks` folder here and add:

```
creme-brulee-brown-sugar.jpg
milk-foam-brown-sugar.jpg
brown-sugar-milk-tea.jpg
boba-milk-tea.jpg
taro.jpg
thai-tea.jpg
strawberry-milk-tea.jpg
matcha-latte.jpg
strawberry-matcha.jpg
passion-fruit-green-tea.jpg
peach-green-tea.jpg
mango-slush.jpg
mango-coconut.jpg
```

### Gallery (`public/images/gallery/`)

Create a `gallery` folder here and add:

```
neon-wall.jpg
brown-sugar.jpg
counter.jpg
pearls.jpg
matcha.jpg
storefront-night.jpg
fruit-tea.jpg
seating.jpg
```

To change which photos the gallery shows, edit the list at the top of
`src/pages/Gallery.jsx`.

## Tips

- Keep files under about 400 KB each so pages load fast. Squoosh.app is a
  free tool for shrinking them.
- `.jpg` for photographs, `.png` for the logo or anything with transparency.
- Filenames are case sensitive. `Taro.jpg` will not match `taro.jpg`.
