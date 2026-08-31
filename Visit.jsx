import Reveal from '../components/Reveal'
import { site } from '../data/site'

export default function Visit() {
  /* Highlights today's row in the hours table. */
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  const mapQuery = encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`
  )

  return (
    <div className="page page--ink">
      <div className="wrap">
        <header className="page__head">
          <h1 className="page__title">Visit</h1>
          <p className="page__intro">
            {site.address.street} in {site.address.city}, a few minutes from the{' '}
            {site.address.transit}.
          </p>
        </header>

        <div className="visit">
          <Reveal className="visit__col">
            <h2 className="visit__heading">Hours</h2>

            {site.comingSoon && (
              <p className="visit__flag">
                These are our planned hours. We will confirm them when we open.
              </p>
            )}

            <table className="hours">
              <caption className="sr-only">Opening hours by day</caption>
              <tbody>
                {site.hours.map((row) => (
                  <tr key={row.day} className={row.day === todayName ? 'is-today' : ''}>
                    <th scope="row">{row.day}</th>
                    <td>{row.open ? `${row.open} – ${row.close}` : 'Closed'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal className="visit__col" delay={100}>
            <h2 className="visit__heading">Where</h2>
            <address className="visit-address visit-address--lg">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>

            <p className="visit__transit">Nearest subway: {site.address.transit}</p>

            <a
              className="btn btn--flame"
              href={site.address.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>

            {(site.phone || site.email) && (
              <div className="visit__contact">
                {site.phone && (
                  <p>
                    <a className="link-underline" href={`tel:${site.phone}`}>
                      {site.phone}
                    </a>
                  </p>
                )}
                {site.email && (
                  <p>
                    <a className="link-underline" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </p>
                )}
              </div>
            )}
          </Reveal>
        </div>

        <Reveal>
          <div className="map">
            <iframe
              title={`Map showing ${site.name} at ${site.address.street}`}
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </div>
  )
}
