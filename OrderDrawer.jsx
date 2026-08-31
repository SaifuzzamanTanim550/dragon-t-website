import { useEffect, useState } from 'react'
import { useOrder } from '../hooks/useOrder'
import { site } from '../data/site'

/**
 * OrderDrawer
 *
 * Slides in from the right when someone adds a drink. Shows the order,
 * lets them change quantities, and offers a way to send it.
 *
 * While the shop is pre-opening, sending means copying the order to the
 * clipboard and messaging it on Instagram. Swap that for a real checkout by
 * replacing the button in the footer of this component.
 */
export default function OrderDrawer() {
  const { items, count, setQty, remove, clear, asText, drawerOpen, setDrawerOpen } = useOrder()
  const [copied, setCopied] = useState(false)

  /* Close on Escape. */
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setDrawerOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setDrawerOpen])

  const copyOrder = async () => {
    try {
      await navigator.clipboard.writeText(asText())
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      {/* The button that opens the drawer, pinned to the corner. */}
      <button
        className={`order-tab ${count > 0 ? 'is-filled' : ''}`}
        onClick={() => setDrawerOpen(true)}
      >
        Your order
        {count > 0 && <span className="order-tab__count">{count}</span>}
      </button>

      {drawerOpen && (
        <div
          className="order-scrim"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`order ${drawerOpen ? 'is-open' : ''}`}
        aria-label="Your order"
        aria-hidden={!drawerOpen}
      >
        <div className="order__head">
          <h2 className="order__title">Your order</h2>
          <button className="order__close" onClick={() => setDrawerOpen(false)}>
            <span className="sr-only">Close</span>
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="order__empty">
            <p>Nothing here yet. Add a drink from the menu and it will show up.</p>
          </div>
        ) : (
          <>
            <ul className="order__list">
              {items.map((item) => (
                <li key={item.id} className="order__item">
                  <div className="order__item-main">
                    <span className="order__item-name">{item.name}</span>
                    {item.price && <span className="order__item-price">${item.price}</span>}
                  </div>

                  <div className="order__qty">
                    <button
                      onClick={() => setQty(item.id, item.qty - 1)}
                      aria-label={`One fewer ${item.name}`}
                    >
                      −
                    </button>
                    <span aria-live="polite">{item.qty}</span>
                    <button
                      onClick={() => setQty(item.id, item.qty + 1)}
                      aria-label={`One more ${item.name}`}
                    >
                      +
                    </button>
                    <button
                      className="order__drop"
                      onClick={() => remove(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="order__foot">
              {site.comingSoon ? (
                <>
                  <p className="order__msg">
                    Online ordering opens with the shop. For now, copy your order and send it
                    to us on Instagram.
                  </p>
                  <button className="btn btn--flame btn--full" onClick={copyOrder}>
                    {copied ? 'Copied' : 'Copy my order'}
                  </button>
                  <a
                    className="btn btn--ghost btn--full"
                    href={site.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message us on Instagram
                  </a>
                </>
              ) : (
                /* When you go live, replace this button with your checkout. */
                <button className="btn btn--flame btn--full">Continue to checkout</button>
              )}

              <button className="order__clear" onClick={clear}>
                Clear order
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
