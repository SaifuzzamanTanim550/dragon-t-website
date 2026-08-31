import { useMemo, useState } from 'react'
import DrinkCard from '../components/DrinkCard'
import Reveal from '../components/Reveal'
import { categories, drinks, toppings } from '../data/menu'
import { site } from '../data/site'

export default function Menu() {
  const [active, setActive] = useState('all')

  const shown = useMemo(() => {
    if (active === 'all') return drinks
    if (active === 'signature') return drinks.filter((drink) => drink.category === 'signature')
    return drinks.filter((drink) => drink.category === active)
  }, [active])

  return (
    <div className="page page--parchment">
      <div className="wrap">
        <header className="page__head">
          <h1 className="page__title">The menu</h1>
          <p className="page__intro">
            Every drink is shaken to order. Pick your sweetness and ice level at the
            counter, and add any topping you like.
          </p>
        </header>

        {/* Filtering is triggered by the visitor, so the movement here
            explains what changed rather than decorating the page. */}
        <div className="filters" role="group" aria-label="Filter drinks by type">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter ${active === category.id ? 'is-active' : ''}`}
              onClick={() => setActive(category.id)}
              aria-pressed={active === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        <p className="filters__count" aria-live="polite">
          {shown.length} {shown.length === 1 ? 'drink' : 'drinks'}
        </p>

        <div className="grid grid--drinks">
          {shown.map((drink, index) => (
            <Reveal key={drink.id} delay={Math.min(index, 7) * 50}>
              <DrinkCard drink={drink} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <section className="toppings">
            <h2 className="toppings__title">Toppings</h2>
            <p className="toppings__note">Add any of these to any drink.</p>
            <ul className="toppings__list">
              {toppings.map((topping) => (
                <li key={topping}>{topping}</li>
              ))}
            </ul>
          </section>
        </Reveal>

        {site.comingSoon && (
          <Reveal>
            <p className="page__notice">
              Prices go up here when we open. Follow{' '}
              <a
                className="link-underline link-underline--dark"
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
              >
                {site.instagram.handle}
              </a>{' '}
              for the opening date.
            </p>
          </Reveal>
        )}
      </div>
    </div>
  )
}
