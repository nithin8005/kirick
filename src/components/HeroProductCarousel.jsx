import { useEffect, useState } from 'react'
import ProductDualPhoto from './ProductDualPhoto'

export default function HeroProductCarousel({ products }) {
  const flavors = products.filter((p) => p.showcaseImage)
  const [activeIndex, setActiveIndex] = useState(0)
  const active = flavors[activeIndex]

  useEffect(() => {
    if (flavors.length <= 1) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % flavors.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [flavors.length])

  if (!flavors.length) return null

  return (
    <div className="hero__carousel">
      <div className="hero__carousel-stage">
        {flavors.map((p, i) => (
          <div
            key={p.id}
            className={`hero__carousel-slide${i === activeIndex ? ' hero__carousel-slide--active' : ''}`}
            aria-hidden={i !== activeIndex}
          >
            <ProductDualPhoto
              product={p}
              imgClassName="hero__carousel-img"
              className="hero__carousel-dual"
            />
          </div>
        ))}
      </div>

      <div className="hero__carousel-footer">
        <p className="hero__carousel-flavor">{active.name}</p>
        <div className="hero__carousel-dots" role="tablist" aria-label="Product flavors">
          {flavors.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={p.name}
              className={`hero__carousel-dot${i === activeIndex ? ' hero__carousel-dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
