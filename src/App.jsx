import { useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import KirikLoadingScreen from './components/KirikLoadingScreen'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Offers from './pages/Offers'
import FAQ from './pages/FAQ'
import Story from './pages/Story'
import Terms from './pages/Terms'

const siteRoutes = (
  <>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="products" element={<Products />} />
    <Route path="offers" element={<Offers />} />
    <Route path="faq" element={<FAQ />} />
    <Route path="story" element={<Story />} />
    <Route path="terms" element={<Terms />} />
    <Route path="comic/*" element={<Navigate to="/" replace />} />
  </>
)

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <KirikLoadingScreen onDone={() => setLoading(false)} />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {siteRoutes}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}
