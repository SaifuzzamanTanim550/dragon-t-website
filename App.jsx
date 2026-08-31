import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Nav from './components/Nav'
import Footer from './components/Footer'
import OrderDrawer from './components/OrderDrawer'
import { OrderProvider } from './hooks/useOrder'

import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Visit from './pages/Visit'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

/* Sends the visitor to the top of the page whenever the route changes,
   which browsers do not do on their own in a single page app. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <OrderProvider>
      <ScrollToTop />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <OrderDrawer />
    </OrderProvider>
  )
}
