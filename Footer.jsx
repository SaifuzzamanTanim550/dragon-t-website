import { Link } from 'react-router-dom'
import { navLinks, site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__block">
          <h2 className="footer__name">{site.name}</h2>
          <address className="footer__address">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </address>
          <a
            className="link-underline"
            href={site.address.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
        </div>

        <div className="footer__block">
          <h3 className="footer__heading">Pages</h3>
          <ul className="footer__list">
            <li>
              <Link className="link-underline" to="/">
                Home
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link className="link-underline" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__block">
          <h3 className="footer__heading">Follow along</h3>
          <p className="footer__note">
            {site.comingSoon
              ? 'Opening updates go up on Instagram first.'
              : 'New drinks and daily specials go up on Instagram.'}
          </p>
          <a
            className="link-underline"
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
          >
            {site.instagram.handle}
          </a>
        </div>
      </div>

      <div className="footer__base">
        <span>
          © {year} {site.name}
        </span>
        <span>{site.address.city}, {site.address.state}</span>
      </div>
    </footer>
  )
}
