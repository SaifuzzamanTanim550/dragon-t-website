/**
 * NeonSign
 *
 * The wordmark, rendered as glowing tube lettering that flickers on once when
 * the page loads. This is the one piece of unprompted motion on the site, so
 * everything around it stays still and lets it be the moment.
 *
 * The glow itself lives in app.css under .neon, built from layered text
 * shadows rather than an image, so it stays sharp at any screen size.
 *
 * Props:
 *   size  "hero" for the home page, "small" for the navigation bar
 */
export default function NeonSign({ size = 'hero' }) {
  return (
    <span className={`neon neon--${size}`} aria-label="Dragon T Bubble Tea">
      <span className="neon__dragon" aria-hidden="true">
        Dragon
      </span>
      <span className="neon__t" aria-hidden="true">
        T
      </span>
      <span className="neon__sub" aria-hidden="true">
        Bubble Tea
      </span>
    </span>
  )
}
