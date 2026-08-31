import { useEffect, useRef, useState } from 'react'

/**
 * Reveal
 *
 * Fades and lifts its children into view the first time they are scrolled to.
 * Uses IntersectionObserver, so it costs nothing while off screen.
 *
 * If the visitor has asked their system to reduce motion, the content simply
 * appears with no animation.
 *
 * Props:
 *   delay  milliseconds to wait before animating, for staggering a row
 *   as     which HTML element to render, default "div"
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setShown(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-shown' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
