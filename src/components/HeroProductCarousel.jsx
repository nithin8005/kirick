import { useEffect, useState } from 'react'

const HERO_FLAVOR_IDS = ['green-chutney', 'kara-podi']

export default function HeroProductCarousel({ products }) {
  const flavors = products.filter(
    (p) => HERO_FLAVOR_IDS.includes(p.id) && (p.heroImage || p.image),
  )
  const [activeIndex, setActiveIndex] = useState(0)
  const active = flavors[activeIndex]

  useEffect(() => {
    if (flavors.length <= 1) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % flavors.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [flavors.length])

  if (!active) return null

  const heroSrc = active.heroImage || active.image

  return (
    <div className="hero-product-showcase">
      <div className="hero-product-showcase__stage">
        <figure key={active.id} className="hero-product-showcase__figure">
          <img
            src={heroSrc}
            alt={active.imageLabel || `${active.name} — KIRIK Dosa Chips`}
            className="hero-product-showcase__img"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>

      <div className="hero-product-showcase__footer">
        <p className="hero-product-showcase__name">{active.name}</p>
        <div className="hero-product-showcase__dots" role="tablist" aria-label="Product flavors">
          {flavors.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={p.name}
              className={`hero-product-showcase__dot${i === activeIndex ? ' hero-product-showcase__dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
