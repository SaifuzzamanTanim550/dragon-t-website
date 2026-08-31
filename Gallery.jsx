import { useEffect, useState } from 'react'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

/* --------------------------------------------------------------------------
   Add or remove entries here to change the gallery. Each `src` is a filename
   inside public/images/gallery/. Until the file exists, a labelled
   placeholder shows in its place.
   -------------------------------------------------------------------------- */

const photos = [
  { src: 'gallery/neon-wall.jpg', alt: 'The neon sign on the shop wall', ratio: '3 / 4' },
  { src: 'gallery/brown-sugar.jpg', alt: 'Two brown sugar drinks side by side', ratio: '1 / 1' },
  { src: 'gallery/counter.jpg', alt: 'The counter and menu board', ratio: '4 / 3' },
  { src: 'gallery/pearls.jpg', alt: 'Freshly cooked tapioca pearls', ratio: '1 / 1' },
  { src: 'gallery/matcha.jpg', alt: 'A matcha latte being poured', ratio: '3 / 4' },
  { src: 'gallery/storefront-night.jpg', alt: 'The shopfront at night', ratio: '4 / 3' },
  { src: 'gallery/fruit-tea.jpg', alt: 'Fruit tea over ice', ratio: '1 / 1' },
  { src: 'gallery/seating.jpg', alt: 'Seating inside the shop', ratio: '4 / 3' },
]

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpenIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="page page--ink">
      <div className="wrap">
        <header className="page__head">
          <h1 className="page__title">Photos</h1>
          <p className="page__intro">
            The shop, the drinks, and the sign. More of these go up on{' '}
            <a
              className="link-underline"
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
            >
              {site.instagram.handle}
            </a>
            .
          </p>
        </header>

        <div className="gallery">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={Math.min(index, 7) * 50} className="gallery__cell">
              <button
                className="gallery__btn"
                onClick={() => setOpenIndex(index)}
                aria-label={`View larger: ${photo.alt}`}
              >
                <Photo
                  src={photo.src}
                  alt={photo.alt}
                  ratio={photo.ratio}
                  label={photo.src.replace('gallery/', '')}
                  tone="dark"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div className="lightbox" onClick={() => setOpenIndex(null)} role="dialog" aria-modal="true">
          <button className="lightbox__close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="lightbox__inner" onClick={(event) => event.stopPropagation()}>
            <Photo
              src={photos[openIndex].src}
              alt={photos[openIndex].alt}
              ratio={photos[openIndex].ratio}
              label={photos[openIndex].src.replace('gallery/', '')}
              tone="dark"
            />
            <p className="lightbox__caption">{photos[openIndex].alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}
