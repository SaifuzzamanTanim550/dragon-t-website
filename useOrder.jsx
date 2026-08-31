import { createContext, useCallback, useContext, useMemo, useState } from 'react'

/* ==========================================================================
   ORDER STATE
   Holds the drinks someone has added to their order.

   The shop is not taking online orders yet, so this builds a list the
   customer can send over Instagram. When you are ready to take real orders,
   this is the file to connect to your checkout or point of sale: the list of
   items and quantities is already here in `items`.
   ========================================================================== */

const OrderContext = createContext(null)

export function OrderProvider({ children }) {
  const [items, setItems] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  const add = useCallback((drink) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === drink.id)
      if (existing) {
        return current.map((item) =>
          item.id === drink.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...current, { id: drink.id, name: drink.name, price: drink.price, qty: 1 }]
    })
    setDrawerOpen(true)
  }, [])

  const remove = useCallback((id) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }, [])

  const setQty = useCallback((id, qty) => {
    setItems((current) =>
      qty <= 0
        ? current.filter((item) => item.id !== id)
        : current.map((item) => (item.id === id ? { ...item, qty } : item))
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const count = useMemo(() => items.reduce((sum, item) => sum + item.qty, 0), [items])

  /* Formats the order as plain text, so it can be copied into a message. */
  const asText = useCallback(() => {
    if (items.length === 0) return ''
    const lines = items.map((item) => `${item.qty} × ${item.name}`)
    return `My Dragon T order:\n${lines.join('\n')}`
  }, [items])

  const value = useMemo(
    () => ({ items, count, add, remove, setQty, clear, asText, drawerOpen, setDrawerOpen }),
    [items, count, add, remove, setQty, clear, asText, drawerOpen]
  )

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error('useOrder must be used inside an OrderProvider')
  }
  return context
}
