import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Stickers from './pages/Stickers'
import Offers from './pages/Offers'
import FAQ from './pages/FAQ'
import Story from './pages/Story'
import Terms from './pages/Terms'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="stickers" element={<Stickers />} />
        <Route path="offers" element={<Offers />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="story" element={<Story />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  )
}
