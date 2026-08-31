import { useState } from 'react'

/**
 * Photo
 *
 * Shows a real photo if the file exists in public/images/, and a labelled
 * placeholder if it does not. That means you can drop image files into the
 * folder at any time and they appear on the site with no code changes.
 *
 * Props:
 *   src    filename relative to public/images/, e.g. "drinks/taro.jpg"
 *   alt    description of the photo, for screen readers and search engines
 *   ratio  aspect ratio as a CSS string, e.g. "4 / 5". Default "4 / 5".
 *   label  what to show on the placeholder. Defaults to the filename.
 *   tone   "dark" or "light" — matches the placeholder to its background.
 */
export default function Photo({
  src,
  alt = '',
  ratio = '4 / 5',
  label,
  tone = 'light',
  className = '',
}) {
  const [failed, setFailed] = useState(false)
  const path = `/images/${src}`

  if (failed || !src) {
    return (
      <div
        className={`photo photo--empty photo--${tone} ${className}`}
        style={{ aspectRatio: ratio }}
        role="img"
        aria-label={alt || 'Photo coming soon'}
      >
        <span className="photo__mark" aria-hidden="true" />
        <span className="photo__label">{label || src || 'Photo'}</span>
        <span className="photo__hint">Drop this file into public/images/</span>
      </div>
    )
  }

  return (
    <div className={`photo ${className}`} style={{ aspectRatio: ratio }}>
      <img src={path} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </div>
  )
}
