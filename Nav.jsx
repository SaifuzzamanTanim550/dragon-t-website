import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import NeonSign from './NeonSign'

/**
 * Nav
 *
 * Sticky navigation. Gains a solid background once the page scrolls, so the
 * links stay readable over the hero photograph.
 *
 * On narrow screens it collapses into a panel that slides down. The panel
 * closes automatically whenever the route changes.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  /* The bar is only see-through over the home page hero, which is dark.
     Everywhere else it needs its own background, or the glowing wordmark
     washes out against the parchment sections. */
  const overHero = location.pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close the mobile panel on navigation. */
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  /* Stop the page behind the open panel from scrolling. */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${overHero ? '' : 'is-solid'} ${open ? 'is-open' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" aria-label={`${site.name}, home`}>
          <NeonSign size="small" />
        </Link>

        <nav className="nav__links" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          className="nav__ig"
          href={site.instagram.url}
          target="_blank"
          rel="noreferrer"
        >
          {site.instagram.handle}
        </a>

        <button
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav__bar" aria-hidden="true" />
          <span className="nav__bar" aria-hidden="true" />
        </button>
      </div>

      <div className="nav__panel" id="mobile-nav" hidden={!open}>
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className="nav__panel-link">
            {link.label}
          </NavLink>
        ))}
        <a
          className="nav__panel-link nav__panel-link--ig"
          href={site.instagram.url}
          target="_blank"
          rel="noreferrer"
        >
          {site.instagram.handle}
        </a>
      </div>
    </header>
  )
}
