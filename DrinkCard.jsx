import Photo from './Photo'
import { useOrder } from '../hooks/useOrder'

/**
 * DrinkCard
 *
 * One drink: photo, name, one-line description, and a button to add it to
 * the order.
 *
 * Props:
 *   drink     an entry from src/data/menu.js
 *   showAdd   whether to show the add button. Off on the home page preview.
 */
export default function DrinkCard({ drink, showAdd = true }) {
  const { add } = useOrder()

  return (
    <article className="drink">
      <Photo
        src={`drinks/${drink.image}`}
        alt={drink.name}
        ratio="4 / 5"
        label={drink.name}
        tone="light"
        className="drink__photo"
      />

      <div className="drink__body">
        <h3 className="drink__name">{drink.name}</h3>
        <p className="drink__note">{drink.note}</p>

        <div className="drink__foot">
          {drink.price && <span className="drink__price">${drink.price}</span>}
          {showAdd && (
            <button className="drink__add" onClick={() => add(drink)}>
              Add to order
              <span className="sr-only"> — {drink.name}</span>
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
