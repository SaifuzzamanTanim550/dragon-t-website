import { Link } from 'react-router-dom'
import NeonSign from '../components/NeonSign'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import DrinkCard from '../components/DrinkCard'
import { drinks } from '../data/menu'
import { site } from '../data/site'

export default function Home() {
  const highlights = drinks.filter((drink) => drink.signature).slice(0, 8)

  return (
    <>
      {/* --- Hero ---------------------------------------------------------
          Dark, like the shop at night. The neon wordmark flickers on once. */}
      <section className="hero">
        <div className="hero__photo">
          <Photo
            src="storefront.jpg"
            alt="The Dragon T Bubble Tea shopfront on Nostrand Avenue"
            ratio="16 / 10"
            label="storefront.jpg"
            tone="dark"
          />
        </div>

        <div className="hero__content">
          <h1 className="hero__sign">
            <NeonSign size="hero" />
          </h1>

          <p className="hero__where">
            {site.address.street}, {site.address.city}
          </p>

          {site.comingSoon && <p className="hero__status">Opening soon</p>}

          <div className="hero__actions">
            <Link className="btn btn--flame" to="/menu">
              See the menu
            </Link>
            <Link className="btn btn--ghost" to="/visit">
              Find the shop
            </Link>
          </div>
        </div>
      </section>

      {/* --- Dream 11 ------------------------------------------------------
          Switches to parchment, the register of their printed menu. */}
      <section className="band band--parchment">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <h2 className="section-head__title">Dream 11</h2>
              <p className="section-head__note">
                Eleven drinks we built the shop around, plus two brown sugar signatures.
                Every cup is made to order.
              </p>
            </div>
          </Reveal>

          <div className="grid grid--drinks">
            {highlights.map((drink, index) => (
              <Reveal key={drink.id} delay={index * 60}>
                <DrinkCard drink={drink} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="section-foot">
              <Link className="btn btn--ink" to="/menu">
                See the full menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- Brown sugar --------------------------------------------------
          A split feature on the taupe of their own advert. */}
      <section className="band band--taupe">
        <div className="wrap split">
          <Reveal className="split__media">
            <Photo
              src="brown-sugar-duo.jpg"
              alt="Crème Brûlée Brown Sugar and Milk Foam Brown Sugar side by side"
              ratio="3 / 4"
              label="brown-sugar-duo.jpg"
              tone="light"
            />
          </Reveal>

          <Reveal className="split__text" delay={120}>
            <h2 className="split__title">Brown sugar, two ways</h2>
            <p>
              The syrup is cooked down in house and striped into the cup by hand, so no
              two look the same. Choose it torched under a sugar crust, or capped with
              salted milk foam.
            </p>
            <ul className="split__list">
              <li>Crème Brûlée Brown Sugar</li>
              <li>Milk Foam Brown Sugar</li>
            </ul>
            <Link className="link-underline link-underline--dark" to="/menu">
              Read the full menu
            </Link>
          </Reveal>
        </div>
      </section>

      {/* --- Visit --------------------------------------------------------- */}
      <section className="band band--ink">
        <div className="wrap split split--reverse">
          <Reveal className="split__text">
            <h2 className="split__title">Come find us</h2>
            <p>
              We are on Nostrand Avenue between Park and Prospect, a short walk from the{' '}
              {site.address.transit}.
            </p>
            <address className="visit-address">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <div className="hero__actions">
              <a
                className="btn btn--flame"
                href={site.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
              <Link className="btn btn--ghost" to="/visit">
                Hours and details
              </Link>
            </div>
          </Reveal>

          <Reveal className="split__media" delay={120}>
            <Photo
              src="neon-sign.jpg"
              alt="The Dragon T neon sign glowing inside the shop"
              ratio="3 / 4"
              label="neon-sign.jpg"
              tone="dark"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
